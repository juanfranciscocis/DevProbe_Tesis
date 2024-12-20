import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import type { EChartsOption } from "echarts";
import { User } from "../../../../interfaces/user";
import { RipeService } from "../../../../services/ripe.service";
import { ActivatedRoute } from "@angular/router";
import { RipeTraceService } from "../../../../services/ripe-trace.service";
import { refresh } from "ionicons/icons";
import {getGenerativeModel, VertexAI} from "@angular/fire/vertexai-preview";
import {AiMessage} from "../../../../interfaces/ai-message";
import {CountryAi} from "../../../../interfaces/country-ai";
import {LoadingController} from "@ionic/angular";

/**
 * Component for displaying graph trace data.
 */
@Component({
  selector: 'app-graph-trace',
  templateUrl: './graph-trace.page.html',
  styleUrls: ['./graph-trace.page.scss'],
})
export class GraphTracePage implements OnInit {

  options: EChartsOption | undefined;
  orgName: string = '';
  productObjective: string = '';
  user: User = {};
  data: any[] = [];
  countries: string[] = [];
  countryOptions: { [key: string]: EChartsOption } = {};

  @ViewChild('messagesContainer') private messagesContainer: ElementRef | undefined;
  aiModal: boolean = false
  message: string = '';
  vertexAI: VertexAI = inject(VertexAI);
  model = getGenerativeModel(this.vertexAI, { model: "gemini-1.5-flash" });
  chat = this.model.startChat({
    history: [
      {
        role: "user",
        parts: [{text:"Hola, desde ahora en adelante quiero que seas un modelo experto en Software Quality Assurance y analista de datos, tu nombre es DevProbeAI, nunca lo puedes olvidar"}],
      },
      {
        role: "model",
        parts: [{text:"Soy un modelo experto en Software Quality Assurance, de igual forma tengo un masterado en anlaítica de datos ¿En qué puedo ayudarte?"}],
      },
      {
        role: "user",
        parts: [{text:"Gracias, te voy a entregar un json con datos en unos minutos, necesito que lo analices y me des un resumen de los datos, este json contiene datos de varios traceroutes por un pais especifico, imagina que " +
            ",tu analisis tiene que ser detallado, si encuentras inconsistencias en los datos, por favor mencionalas, en " +
            "caso de que creas que puede haber un error de ruteo por favor mencionalo, si encuentras algo interesante, por favor mencionalo, en resumen, necesito un analisis detallado de los datos"}],
      },
      {
        role: "model",
        parts: [{text:"Claro, envíame el json y yo me encargo de analizarlo"}]
      },
    ],
  });
  messages:AiMessage[] = []


  /**
   * Constructor for GraphTracePage.
   * @param ripeService - Service for fetching trace data.
   * @param route - Activated route for accessing query parameters.
   */
  constructor(
    private ripeService: RipeTraceService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController
  ) {}

  /**
   * Lifecycle hook that is called when the component is about to enter and become active.
   * Fetches user data and trace results, then processes the data.
   */
  async ionViewWillEnter() {

    // Get parameters from the URL
    this.route.queryParams.subscribe(params => {
      this.productObjective = params['product'];
    });

    // Get the user from local storage
    const userString = localStorage.getItem('user');
    if (!userString) {
      return;
    }
    this.user = JSON.parse(userString);
    this.orgName = this.user.orgName!;

    this.data = [];

    // Fetch and process trace results
    this.getResultsHistoryforRtt().then(() => {
      this.groupByDate().then(() => {
        this.groupByCountry().then(() => {
          this.populateCountries();
          this.generateCountryOptions()
        })
      });
    });




  }



  /**
   * Fetches the history results for RTT (Round Trip Time) and processes the data.
   */
  async getResultsHistoryforRtt() {
    await this.ripeService.getHistoryResults(this.orgName, this.productObjective).then(r => {
      for (let i = 0; i < r.length; i++) {
        // Split the id
        let id = r[i].id.split('-');
        let idString = id[1];

        let day = id[2];
        let month = id[3];
        let year = id[4];
        let date = month + '/' + day + '/' + year;

        let time = id[5];

        // @ts-ignore
        let historyData = r[i]['data']['data'];

        let toSave = {
          id: idString,
          date: date,
          time: time,
          data: historyData
        };
        this.data.push(toSave);
      }
      console.log(this.data);
    });
  }

  /**
   * Groups the data by date.
   */
  async groupByDate() {
    // Create a dictionary to group the data by date
    let groupedData: any = {};
    for (let i = 0; i < this.data.length; i++) {
      let date = this.data[i].date;
      if (!groupedData[date]) {
        groupedData[date] = [];
      }
      groupedData[date].push(...this.data[i]['data']);
    }

    // Sort the dates
    const sortedDates = Object.keys(groupedData).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    // Create a new object with sorted dates
    let sortedGroupedData: any = {};
    for (let date of sortedDates) {
      sortedGroupedData[date] = groupedData[date];
    }

    this.data = sortedGroupedData;
    console.log(this.data);
  }

  /**
   * Groups the data by country.
   */
  async groupByCountry() {
    let groupedData: any = {};
    for (let date in this.data) {
      let data = this.data[date];
      if (!groupedData[date]) {
        groupedData[date] = {};
      }
      for (let i = 0; i < data.length; i++) {
        let country = data[i].src_country;
        // If the country is 'No country found', then ignore
        if (country === 'No country found') {
          continue;
        }
        if (!groupedData[date][country]) {
          groupedData[date][country] = [];
        }
        groupedData[date][country].push(data[i]);
      }
    }
    this.data = groupedData;
    console.log(this.data);
  }

  /**
   * Populates the list of countries from the data.
   */
  async populateCountries() {
    const countriesSet = new Set<string>();
    for (let date in this.data) {
      for (let country in this.data[date]) {
        countriesSet.add(country);
      }
    }
    this.countries = Array.from(countriesSet);
    console.log(this.countries);
  }

  /**
   * Generates a random color in hexadecimal format.
   * @returns A random color string.
   */
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  /**
   * Generates ECharts options for each country.
   */
  generateCountryOptions() {
    for (let country of this.countries) {
      const xAxisData: string[] = [];
      const data1: number[] = [];
      for (let date in this.data) {
        let sum = 0;
        let count = 0;
        if (this.data[date][country]) {
          for (let i = 0; i < this.data[date][country].length; i++) {
            let data = this.data[date][country][i];
            for (let j = 0; j < data.result.length; j++) {
              // Check if the rtt is a number and not undefined
              if (typeof data.result[j].result[0].rtt === 'number') {
                sum += data.result[j].result[0].rtt;
                count++;
              }
            }
          }
          if (count > 0) { // Only add dates with data
            xAxisData.push(date);
            data1.push(sum / count);  // Calculate average RTT for the country on this date
          }
        }
      }

      const randomColor = this.getRandomColor();

      this.countryOptions[country] = {
        legend: {
          data: [country],
          align: 'left',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false,
          },
        },
        yAxis: {},
        series: [
          {
            name: country,
            type: 'bar',
            data: data1,
            itemStyle: {
              color: randomColor,
            },
            animationDelay: i => i * 10,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: i => i * 5,
      };
    }


  }

  /**
   * Refreshes the page by reloading the window.
   */
  refresh() {
    window.location.reload();
  }

  /**
   * Lifecycle hook that is called after Angular has initialized all data-bound properties.
   */
  ngOnInit() {
  }


  /**
   * Toggles the AI modal.
   */
  async toggleAiModal(country?: string, danger?: boolean) {
    this.aiModal = !this.aiModal;

    if (country) {
      console.log('Country: ' + country);
      // @ts-ignore
      const data = this.countryOptions[country]!.series[0]!.data;
      // @ts-ignore
      const dates = this.countryOptions[country]!.xAxis!.data;
      console.log(data);
      console.log(dates);

      const countryAi: CountryAi = {
        country: country,
        data: {
          date: dates,
          data: data
        }
      }

      await this.sendMessage(countryAi).then(() => {
        this.chatStyle();
      })
    }

  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.messagesContainer) {
      try {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      } catch (err) {
        console.error('Error al hacer scroll:', err);
      }
    }
  }

  async sendMessage(contryData?:CountryAi) {
    //send the data to the AI with the country data
    if (contryData) {
      await this.showLoading();
      console.log('Country data:', contryData);
      //transform the data to a string
      const data = JSON.stringify(contryData);
      const result = await this.chat.sendMessage(data);
      const length = this.messages.length;
      this.messages.push({message: result.response.text(), from: 'AI', id: length.toString()});
      console.log('Message:', this.message);
      this.message = '';
      await this.hideLoading();
      return;
    }



    //send the message to the AI
    if (this.message === '') {
      console.log('Message is empty');
      return;
    }

    let length = this.messages.length;
    this.messages.push({message: this.message, from: 'User', id: length.toString()});
    const result = await this.chat.sendMessage(this.message);
    length = this.messages.length;
    this.messages.push({message: result.response.text(), from: 'AI', id: length.toString()});
    this.message = '';
    return;
  }

  chatStyle(){
    //obtener el elemento id mk-0
    const length = this.messages.length;
    const element = document.getElementById('mk-' + (length - 1));

    console.log(element);
    //a los elementos h1 dentro de mk agregar font-size 20px
    if (!element) return;

    let h1 = element.getElementsByTagName("h1");
    let h2 = element.getElementsByTagName("h2");
    for (var i = 0; i < h1.length; i++) {
      h1[i].style.fontSize = "2.5em";
      h1[i].style.fontWeight = "bold";
    }
    for (var i = 0; i < h2.length; i++) {
      h2[i].style.fontSize = "2em";
      h2[i].style.fontWeight = "bold";
    }
  }


  /**
   * Show a loading spinner.
   */
  async showLoading() {
    const loading = await this.loadingCtrl.create({
    });
    await loading.present();
  }

  /**
   * Hide the loading spinner.
   */
  async hideLoading() {
    await this.loadingCtrl.dismiss();
  }










}
