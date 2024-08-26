import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import type { EChartsOption } from 'echarts';
import { RipeService } from "../../services/ripe.service";
import { ActivatedRoute } from "@angular/router";
import { User } from "../../interfaces/user";
import {Browser} from "leaflet";
import win = Browser.win;
import {getGenerativeModel, VertexAI} from "@angular/fire/vertexai-preview";
import {AiMessage} from "../../interfaces/ai-message";
import {CountryAi} from "../../interfaces/country-ai";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-graph',
  templateUrl: './graph-latency.page.html',
  styleUrls: ['./graph-latency.page.scss'],
})
export class GraphLatencyPage implements OnInit {

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
        parts: [{text:"Gracias, te voy a entregar un json con datos en unos minutos, necesito que lo analices y me des un resumen de los datos, este json contiene datos de varios pings por un pais especifico, imagina que " +
            ",tu analisis tiene que ser detallado, si encuentras inconsistencias en los datos, por favor mencionalas, en " +
            "caso de que creas que puede haber un error de latencias por favor mencionalo, si encuentras algo interesante, por favor mencionalo, en resumen, necesito un analisis detallado de los datos"}],
      },
      {
        role: "model",
        parts: [{text:"Claro, envíame el json y yo me encargo de analizarlo"}]
      },
    ],
  });
  messages:AiMessage[] = []


  constructor(
    private ripeService: RipeService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController
  ) {}

async ionViewWillEnter() {
  this.route.queryParams.subscribe(params => {
    this.productObjective = params['product'];
  });

  const userString = localStorage.getItem('user');
  if (!userString) return;

  this.user = JSON.parse(userString);
  this.orgName = this.user.orgName!;
  this.data = [];

  await this.getResultsHistoryforLatency();
  await this.groupByDate();
  await this.groupByCountry();
  await this.populateCountries();
  this.generateCountryOptions();
}

async getResultsHistoryforLatency() {
  const results = await this.ripeService.getHistoryResults(this.orgName, this.productObjective);
  results.forEach(result => {
    const [_, idString, day, month, year, time] = result.id.split('-');
    const date = `${month}/${day}/${year}`;

    // @ts-ignore
    const historyData = result.data.data;

    this.data.push({ id: idString, data: historyData, date, time });
  });
}

async groupByDate() {
  // create a dictionary to group the data by date
  let groupedData: any = {};
  for (let i = 0; i < this.data.length; i++) {
    let date = this.data[i].date;
    if (!groupedData[date]) {
      groupedData[date] = [];
    }
    groupedData[date].push(...this.data[i]['data']);
  }

  // sort the dates
  const sortedDates = Object.keys(groupedData).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  // create a new object with sorted dates
  let sortedGroupedData: any = {};
  for (let date of sortedDates) {
    sortedGroupedData[date] = groupedData[date];
  }

  this.data = sortedGroupedData;
  console.log(this.data);
}

  async groupByCountry() {
    let groupedData: any = {};
    for (let date in this.data) {
      let data = this.data[date];
      if (!groupedData[date]) {
        groupedData[date] = {};
      }
      for (let i = 0; i < data.length; i++) {
        let country = data[i].countryFrom;
        if (!groupedData[date][country]) {
          groupedData[date][country] = [];
        }
        groupedData[date][country].push(data[i]);
      }
    }
    this.data = groupedData;
    console.log(this.data);
  }

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

  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  generateCountryOptions() {
    for (let country of this.countries) {
      const xAxisData = [];
      const data1: number[] = [];
      for (let date in this.data) {
        let sum = 0;
        let count = 0;
        if (this.data[date][country]) {
          for (let i = 0; i < this.data[date][country].length; i++) {
            sum += this.data[date][country][i].latency;
            count++;
          }
          if (count > 0) {
            xAxisData.push(date);
            data1.push(sum / count);
          }
        }
      }

      if (data1.length > 0) {  // Only create options if there is data
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
                color: this.generateRandomColor()
              },
              animationDelay: i => i * 10,
            },
          ],
          animationEasing: 'elasticOut',
          animationDelayUpdate: i => i * 5,
        };
      }
    }
  }

  refresh() {
    window.location.reload();
  }

  ngOnInit(): void {}


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
