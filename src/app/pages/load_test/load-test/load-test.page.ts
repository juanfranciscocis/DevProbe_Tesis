import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoadTestService} from "../../../services/load-test.service";
import {AlertController, LoadingController} from "@ionic/angular";
import {ArtilleryData} from "../../../classes/artillery-data";
import {EChartsOption} from "echarts";
import {getGenerativeModel, VertexAI} from "@angular/fire/vertexai-preview";
import {AiMessage} from "../../../interfaces/ai-message";
import {User} from "../../../interfaces/user";

@Component({
  selector: 'app-load-test',
  templateUrl: './load-test.page.html',
  styleUrls: ['./load-test.page.scss'],
})
export class LoadTestPage implements OnInit {

  productStep: string = '';
  productObjective: string = '';
  orgName: string = '';
  user: User = {};



  target: string = '';
  description: string = '';

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
responseTimeOptions: EChartsOption = {
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

  listOfDates: string[] = [];




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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadTestService: LoadTestService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    try {
    await this.showLoading();
    this.getParams();
    await this.getHistoryResults().then(() => {
      this.plotCodes();
      this.totalRequests();
      this.responseTime();
    });
    await this.hideLoading();
    } catch (error) {
      await this.hideLoading();
    }
  }

  getParams() {
    this.activatedRoute.params.subscribe(params => {
      this.productObjective = params['productObjective']; //this is the product objective
      this.productStep = params['step']; //this is the step of the product
    });
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.orgName = this.user.orgName!;

    console.log(this.orgName);
    console.log(this.productObjective);
    console.log(this.productStep);
  }





  async sendRequest() {
    await this.showLoading();

    //Check if host input starts with http or https or finishes with a slash
    if ( this.target.startsWith('http://') ||  this.target.startsWith('https://') || this.target.endsWith('/')) {
      await this.hideLoading();
      await this.showAlert('No http or https is needed, check for slashes at the end of the domain', 'Please enter a valid host');
      return;
    }

    await this.loadTestService.sendLoadTest(this.orgName, this.productObjective, this.productStep, this.target, this.user).then(async (data) => {
      await this.hideLoading();
      console.log("data",data);
      if (data) {
        await this.showAlert('Test sent, please wait a few seconds to GET RESULTS', 'Success');
      }
    });
    await this.hideLoading();
  }


  /**
   * Get the history of the load test results.
   */
  async getHistoryResults() {
    this.loadTestResults  = await this.loadTestService.getLoadTestHistory(this.orgName, this.productObjective, this.productStep) as ArtilleryData;
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
      let date = this.loadTestResults[key].date.split('-').slice(0, 3).join('-'); // Extrae solo la fecha (año-mes-día)
      let httpCodesKeys = Object.keys(data).filter(keyCode => keyCode.startsWith('http.codes.'));

      if (!codes[date]) {
        codes[date] = {};
      }

      for (let keyCode of httpCodesKeys) {
        codes[date][keyCode] = (codes[date][keyCode] || 0) + data[keyCode];
      }
    }

    // Ordena las fechas y los datos
    codes = this.ordenarDiccionarioPorFechas(codes);

    console.log('codessss',codes);

    return codes;
  }
  normalizarFecha(fecha: string): string {
    const [year, month, day] = fecha.split('-').map(num => parseInt(num, 10)); // Convertimos a números para evitar ceros iniciales incorrectos
    const mesNormalizado = month < 10 ? `0${month}` : month.toString(); // Agregar 0 si es necesario
    const diaNormalizado = day < 10 ? `0${day}` : day.toString(); // Agregar 0 si es necesario
    return `${year}-${mesNormalizado}-${diaNormalizado}`;
  }
  ordenarDiccionarioPorFechas(diccionario: { [key: string]: any }): { [key: string]: any } {
    // Obtener las claves del diccionario (fechas)
    const fechas = Object.keys(diccionario);

    // Ordenar las fechas normalizadas
    const fechasOrdenadas = fechas.sort((a, b) => {
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
    console.log(codes);

    let keys = Object.keys(codes);
    this.listOfDates = keys;
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

    let httpCodesChart = document.getElementById('httpCodesChart');
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
    let responseTimes: Record<string, any> = {};

    // Iterate over test result keys
    for (let key of keys) {
      // @ts-ignore
      let data = this.loadTestResults[key].aggregate.histograms;
      // @ts-ignore
      let date = this.loadTestResults[key].date;
      let httpResponseTime = Object.keys(data).filter(keyCode => keyCode.startsWith('http.response_time'));

      for (let keyCode of httpResponseTime) {
        responseTimes[date] = data[keyCode];
      }
    }

    // Group by date
    let responseTimesByDate = Object.entries(responseTimes).reduce((acc, [key, value]) => {
      const date = key.split('-').slice(0, 3).join('-');
      // @ts-ignore
      acc[date] = acc[date] || [];
      // @ts-ignore
      acc[date].push(value);
      return acc;
    }, {});

    // Sort by date
    let sortedDates = Object.keys(responseTimesByDate).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    // Initialize total aggregate object
    let total = { count: 0, max: 0, min: 0, mean: 0, median: 0, p50: 0, p90: 0, p95: 0, p99: 0, p999: 0 };
    let averageResponseTimesDates: Record<string, any> = {};

    sortedDates.forEach(date => {
      let aggregate = { count: 0, max: 0, min: 0, mean: 0, median: 0, p50: 0, p90: 0, p95: 0, p99: 0, p999: 0 };
      let count = 0;

      // @ts-ignore
      responseTimesByDate[date].forEach((time: any) => {
        aggregate.count += time.count;
        aggregate.max += time.max;
        aggregate.min += time.min;
        aggregate.mean += time.mean;
        aggregate.median += time.median;
        aggregate.p50 += time.p50;
        aggregate.p90 += time.p90;
        aggregate.p95 += time.p95;
        aggregate.p99 += time.p99;
        aggregate.p999 += time.p999;
        count++;
      });

      // Average out values
      for (let key in aggregate) {
        if (key !== 'count' && count > 0) {
          // @ts-ignore
          aggregate[key] = aggregate[key] / count;
        }
      }

      averageResponseTimesDates[date] = aggregate;
      total.count += aggregate.count;
      total.max += aggregate.max;
      total.min += aggregate.min;
      total.mean += aggregate.mean;
      total.median += aggregate.median;
      total.p50 += aggregate.p50;
      total.p90 += aggregate.p90;
      total.p95 += aggregate.p95;
      total.p99 += aggregate.p99;
      total.p999 += aggregate.p999;
    });

    // Correct averaging for total values
    let count = sortedDates.length;
    if (count > 0) {
      total.mean /= count;
      total.median /= count;
      total.p50 /= count;
      total.p90 /= count;
      total.p95 /= count;
      total.p99 /= count;
      total.p999 /= count;
      total.max /= count;
      total.min /= count;
    }

    let httpResponseTime = {};


//Add the total to the graph as a barchart
for (let metric in total) {

  if (metric === 'count' || metric === 'p90' || metric === 'p50'  || metric === 'p999') {
    continue;
  }

    // @ts-ignore
  httpResponseTime[metric] = total[metric];

  // @ts-ignore
  this.responseTimeOptions.series.push({
    name: metric,
    type: 'bar',
    // @ts-ignore
    data: [total[metric]],
    label: { show: true, formatter: (params: { value: number; }) => `${params.value.toFixed(2)} ms` }
  });
}


    //Add the x axis, will be the metric name
    this.responseTimeOptions.xAxis = {
      type: 'category',
      boundaryGap: false,
      data: ['Category']
    };


    this.responseTimeOptions = { ...this.responseTimeOptions };

    let responseTimeChart = document.getElementById('httpResponseTimeChart');
    console.log(responseTimeChart);
    //change width and height
    responseTimeChart!.style.width = '100%';
    responseTimeChart!.style.height = '25em';


    return httpResponseTime;
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


  /**
   * Show an alert with the given message.
   *
   * @param {string} message - The message to show in the alert.
   */
  async showAlert(message:string, header:string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message:message,
      buttons: ['OK']
    });
    await alert.present();

    const {role} = await alert.onDidDismiss();
    if (role === 'ok') {
      return true;
    }
    return true;
  }


  viewHistory(day: string) {
    this.router.navigate(['/load-test-history',
          {productObjective: this.productObjective, productStep: this.productStep, day: day}]);
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
}
