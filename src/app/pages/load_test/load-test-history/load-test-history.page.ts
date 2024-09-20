import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoadTestService} from "../../../services/load-test.service";
import {ArtilleryData} from "../../../classes/artillery-data";
import {EChartsOption} from "echarts";

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


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loadTestService: LoadTestService
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
      let httpCodesKeys = Object.keys(data).filter(keyCode => keyCode.startsWith('http.requests'));

      for (let keyCode of httpCodesKeys) {
        if (!requests[date]) {
          requests[date] = {};
        }
        // Suma los valores si ya existen en la misma fecha
        requests[date][keyCode] = (requests[date][keyCode] || 0) + data[keyCode];
      }
    }

    for (let date of Object.keys(requests)) {
      totalRequests += requests[date]['http.requests'];
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

  }




}
