import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoadTestService} from "../../../services/load-test.service";
import {ArtilleryData} from "../../../classes/artillery-data";
import {EChartsOption} from "echarts";
import {getGenerativeModel, VertexAI} from "@angular/fire/vertexai-preview";
import {AiMessage} from "../../../interfaces/ai-message";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-load-test-history',
  templateUrl: './load-test-history.page.html',
  styleUrls: ['./load-test-history.page.scss'],
})
export class LoadTestHistoryPage implements OnInit {

  productObjective: string = '';
  productStep: string = '';
  orgName: string = '';
  date: string = '';

  loadTestResults: ArtilleryData = {}
  totalNumberOfRequests: number = 0;
  statusCodesOptions: EChartsOption = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [] // This will be populated with test titles
    },
    yAxis: {
      type: 'value'
    },
    series: [
    ]
  }
  responseTimeOptions:EChartsOption = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [] // This will be populated with test titles
    },
    yAxis: {
      type: 'value'
    },
    series: [
    ]
  }



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
        parts: [{text:"Gracias, te voy a entregar un json con datos en unos minutos, necesito que lo analices y me des un resumen de los datos, este json contiene datos de un load test" +
            ",tu analisis tiene que ser detallado, si encuentras inconsistencias en los datos, por favor mencionalas, en " +
            "caso de que creas que puede haber un problema o que se encuentre el recurso no disponible por favor mencionalo, si encuentras algo interesante, por favor mencionalo, en resumen, necesito un analisis detallado de los datos"}],
      },
      {
        role: "model",
        parts: [{text:"Claro, envíame el json y yo me encargo de analizarlo"}]
      },
    ],
  });
  messages:AiMessage[] = []
  hasBeenOpened = false;







  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loadTestService: LoadTestService,
    private loadingCtrl:LoadingController
  ) { }

  ngOnInit() {
    this.getParams();
    this.getLoadTestHistoryByDate().then(async r => {
      this.totalRequests();
      await this.plotCodes();
      await this.responseTime();
    });
  }

  getParams() {
    this.activatedRoute.params.subscribe(params => {
      this.productObjective = params['productObjective']; //this is the product objective
      this.productStep = params['productStep']; //this is the step of the product
      this.date = params['day']; //this is the date of the test
    });

    const user = JSON.parse(localStorage.getItem('user')!);
    this.orgName = user.orgName!;

    console.log(this.orgName);
    console.log(this.productObjective);
    console.log(this.productStep);
    console.log(this.date);
  }

  async getLoadTestHistoryByDate() {
    this.loadTestResults = await this.loadTestService.getLoadTestHistoryByDate(this.orgName, this.productObjective, this.productStep, this.date);
  }

  /**
   * Calculate the total number of requests made in all the tests.
   */
  totalRequests() {
    let keys = Object.keys(this.loadTestResults);
    let requests: Record<string, Record<string, number>> = {};
    let totalRequests = 0;
    // Itera sobre las claves de los resultados del test
    for (let key of keys) {
      // @ts-ignore: Extrae los contadores de los resultados agregados
      let data = this.loadTestResults[key].aggregate.counters;
      // @ts-ignore: Extrae la fecha del resultado
      let date = this.loadTestResults[key].date;
      // Filtra las claves que empiezan con "http.requests."
      let httpCodesKeys = Object.keys(data).filter(keyCode => keyCode.startsWith('http.responses'));

      for (let keyCode of httpCodesKeys) {
        if (!requests[date]) {
          requests[date] = {};
        }
        // Suma los valores si ya existen en la misma fecha
        requests[date][keyCode] = (requests[date][keyCode] || 0) + data[keyCode];
      }
    }

    for (let date of Object.keys(requests)) {
      totalRequests += requests[date]['http.responses'];
    }
    this.totalNumberOfRequests = totalRequests;

  }


  /**
   * Return the status codes of the requests and plot them.
   */
  byCodes() {
    let keys = Object.keys(this.loadTestResults);
    let codes: Record<string, Record<string, number>> = {};

    // Itera sobre las claves de los resultados del test
    for (let key of keys) {
      // @ts-ignore
      let data = this.loadTestResults[key].aggregate.counters;
      // @ts-ignore
      let date = this.loadTestResults[key].date;
      let httpCodesKeys = Object.keys(data).filter(keyCode => keyCode.startsWith('http.codes.'));

      for (let keyCode of httpCodesKeys) {
        if (!codes[date]) {
          codes[date] = {};
        }
        codes[date][keyCode] = data[keyCode];
      }
    }

    console.log(codes);

    // Ordena las fechas y los datos
    codes = this.ordenarDiccionarioPorFechas(codes);

    return codes;
  }
  normalizarFecha(fecha: string): string {
    console.log('fecha',fecha);
    const [year, month, day, hour, minute, second] = fecha.split('-').map(num => parseInt(num, 10)); // Convertimos a números para evitar ceros iniciales incorrectos
    const mesNormalizado = month < 10 ? `0${month}` : month.toString(); // Agregar 0 si es necesario
    const diaNormalizado = day < 10 ? `0${day}` : day.toString(); // Agregar 0 si es necesario
    return `${year}-${mesNormalizado}-${diaNormalizado} ${hour}:${minute}:${second}`;
  }
  ordenarDiccionarioPorFechas(diccionario: { [key: string]: any }): { [key: string]: any } {
    // Obtener las claves del diccionario (fechas)
    const fechas = Object.keys(diccionario);

    // Ordenar las fechas normalizadas
    const fechasOrdenadas = fechas.sort((a, b) => {
      console.log('a', this.normalizarFecha(a));
      console.log('b', this.normalizarFecha(b));
      const fechaA = new Date(this.normalizarFecha(a));
      const fechaB = new Date(this.normalizarFecha(b));
      return fechaA.getTime() - fechaB.getTime();
    });

    // Crear un nuevo diccionario con las fechas ordenadas
    const diccionarioOrdenado: { [key: string]: any } = {};
    fechasOrdenadas.forEach(fecha => {
      diccionarioOrdenado[fecha] = diccionario[fecha];
    });

    return diccionarioOrdenado;

  }
  async plotCodes() {
    let codes = this.byCodes();
    console.log('codess',codes);

    let keys = Object.keys(codes);

    console.log('llaves',keys);

    let typesOfCodes = new Set() as Set<string>;

    for (let key of keys) {
      let data = codes[key];
      let codeKey = Object.keys(data)
      for (let code of codeKey){
        typesOfCodes.add(code);
      }
    }

    let dataToPlot: Record<string, number[]> = {};
    for (let req in codes) {
      let data = codes[req];
      for (let code of typesOfCodes) {
        if (!dataToPlot[code]) {
          dataToPlot[code] = [];
        }
        dataToPlot[code].push(data[code] || 0);
      }
    }


    let colors = [
      '#36b311',
      '#306fc6',
      '#ed3b3b',
      '#f4ba20',
    ]


// plot the data to the chart
    for (let code in dataToPlot) {
      let name = code.split('.').pop();
      let color;
      if (name?.startsWith('2')) {
        color = colors[0];
      }
      if (name?.startsWith('3')) {
        color = colors[1];
      }
      if (name?.startsWith('4')) {
        color = colors[2];
      }
      if (name?.startsWith('5')) {
        color = colors[3];
      }
      if (!color) {
        color = '#000000';
      }

      // @ts-ignore
      this.statusCodesOptions.series.push({
        name: code,
        type: 'line',
        data: dataToPlot[code],
        lineStyle: { color: color },
        itemStyle: { color: color },
      });
    }


    // Add the x axis, will be the date
    this.statusCodesOptions.xAxis = {
      type: 'category',
      boundaryGap: false,
      data: keys,
    };


    this.statusCodesOptions = { ...this.statusCodesOptions };

    let httpCodesChart = document.getElementById('httpCodesChartHistory');
    console.log(httpCodesChart);
    //change width and height
    httpCodesChart!.style.width = '100%';
    httpCodesChart!.style.height = '25em';





  }

  /**
   * Calculate the average response time of the requests and plot them.
   */
  responseTime() {
    let keys = Object.keys(this.loadTestResults);
    let responseTimes: Record<string, Record<string, number>> = {};

    for (let key of keys){
      // @ts-ignore
      let data = this.loadTestResults[key].aggregate.histograms;
      // @ts-ignore
      let date = this.loadTestResults[key].date;
      let httpResponseTime = Object.keys(data).filter(keyCode => keyCode.startsWith('http.response_time'));

      for (let keyCode of httpResponseTime) {
        responseTimes[date] = data[keyCode];
      }
    }




    let date = Object.keys(responseTimes);

    function sortDates(dates: string[]): string[] {
      return dates.sort((a, b) => {
        //split using - then get the 3 first elements year, month, day
        let aDate = a.split('-').slice(0, 3).join('/');
        let bDate = b.split('-').slice(0, 3).join('/');
        let aTime = a.split('-').slice(3, 6).join(':');
        let bTime = b.split('-').slice(3, 6).join(':');
        let aF = aDate + ' ' + aTime;
        let bF = bDate + ' ' + bTime;
        return new Date(aF).getTime() - new Date(bF).getTime();
      });
    }

    date = sortDates(date);
    console.log('date', date);
    console.log('responseTimes', responseTimes);


    let min = [];
    let max = [];
    let p95 = [];
    let p99 = [];
    let mean = [];
    let median = [];

    for (let d in date){
      console.log('date', date[d]);
      for (let key in responseTimes[date[d]]){
        if (key === 'min') {
          min.push(responseTimes[date[d]][key])
        }
        if (key === 'max') {
          max.push(responseTimes[date[d]][key])
        }
        if (key === 'p95') {
          p95.push(responseTimes[date[d]][key])
        }
        if (key === 'p99') {
          p99.push(responseTimes[date[d]][key])
        }
        if (key === 'mean') {
          mean.push(responseTimes[date[d]][key])
        }
        if (key === 'median') {
          median.push(responseTimes[date[d]][key])
        }
      }
    }

    console.log('min', min);

    let toPlot: Record<string, number[]> = {
      min: min,
      max: max,
      p95: p95,
      p99: p99,
      mean: mean,
      median: median,
    };

    this.responseTimeOptions.series = [];
    for (let key in toPlot) {
      this.responseTimeOptions.series.push({
        name: key,
        type: 'bar',
        data: toPlot[key],
      });
    }

    this.responseTimeOptions.xAxis = {
      type: 'category',
      boundaryGap: false,
      data: date,
    };






    this.responseTimeOptions = { ...this.responseTimeOptions };

    let responseTimeChart = document.getElementById('httpResponseTimeChartHistory');
    console.log(responseTimeChart);
    //change width and height
    responseTimeChart!.style.width = '100%';
    responseTimeChart!.style.height = '25em';


    return responseTimes;

  }



  async toggleAiModal(context?: string) {
    await this.showLoading()

    this.aiModal = !this.aiModal;
    this.hasBeenOpened = true;

    if (context === 'httpCodesOptions') {
      this.message = 'En este caso el json tiene codigos de respuesta HTTP, por ejemplo, 404, 500, etc y cuantos requests devolvieron esos codigos:' + JSON.stringify(this.byCodes())
    }
    if (context === 'httpResponseTimeOptions') {
      this.message = 'En este caso el json tiene tiempos de respuesta de los requests, por ejemplo, 500ms, 1000ms, etc: ' + JSON.stringify(this.responseTime())
    }

    if (this.message === '') {
      console.log('Message is empty');
      await this.hideLoading();
      return;
    }

    let length = this.messages.length;
    if (length > 0) {
      this.messages.push({message: this.message, from: 'User', id: length.toString()});
    }
    const result = await this.chat.sendMessage(this.message);
    length = this.messages.length;
    this.messages.push({message: result.response.text(), from: 'AI', id: length.toString()});
    this.message = '';
    await this.hideLoading();
    return;


  }

  sendMessage() {
    let length = this.messages.length;
    this.messages.push({message: this.message, from: 'User', id: length.toString()});
    this.chat.sendMessage(this.message).then(async (result) => {
      await this.showLoading()
      length = this.messages.length;
      this.messages.push({message: result.response.text(), from: 'AI', id: length.toString()});
      await this.hideLoading();
    });
    this.message = '';
    return;
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
