import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoadTestService} from "../../../services/load-test.service";
import {AlertController, LoadingController} from "@ionic/angular";
import {ArtilleryData} from "../../../classes/artillery-data";
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-load-test',
  templateUrl: './load-test.page.html',
  styleUrls: ['./load-test.page.scss'],
})
export class LoadTestPage implements OnInit {

  productStep: string = '';
  productObjective: string = '';
  orgName: string = '';



  target: string = '';
  description: string = '';

  loadTestResults: ArtilleryData = {}
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
  totalNumberOfRequests: number = 0;

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
    this.getParams();
    await this.getHistoryResults().then(() => {
      this.byCodes();
      this.totalRequests();
    });
  }

  getParams() {
    this.activatedRoute.params.subscribe(params => {
      this.productObjective = params['productObjective']; //this is the product objective
      this.productStep = params['step']; //this is the step of the product
    });
    const user = JSON.parse(localStorage.getItem('user')!);
    this.orgName = user.orgName!;

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

    await this.loadTestService.sendLoadTest(this.orgName, this.productObjective, this.productStep, this.target).then(async (data) => {
      await this.hideLoading();
      console.log("data",data);
      if (data) {
        await this.showAlert('Test sent, please wait a few seconds to GET RESULTS', 'Success');
      }
    });
    await this.hideLoading();
  }



  async getHistoryResults() {
    await this.showLoading();
    await this.loadTestService.getLoadTestHistory(this.orgName, this.productObjective, this.productStep).then((data) => {
      this.loadTestResults = data as ArtilleryData;
      console.log(this.loadTestResults);
    });
    await this.hideLoading();
  }
  totalRequests() {
    let keys = Object.keys(this.loadTestResults);
    let requests: Record<string, Record<string, number>> = {};
    console.log(keys);
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
      console.log(this.totalNumberOfRequests);

  }
  byCodes() {
    let keys = Object.keys(this.loadTestResults);
    let codes: Record<string, Record<string, number>> = {};

    // Itera sobre las claves de los resultados del test
    for (let key of keys) {
      // @ts-ignore: Extrae los contadores de los resultados agregados
      let data = this.loadTestResults[key].aggregate.counters;
      // @ts-ignore: Extrae la fecha del resultado
      let date = this.loadTestResults[key].date;
      // Filtra las claves que empiezan con "http.codes."
      let httpCodesKeys = Object.keys(data).filter(keyCode => keyCode.startsWith('http.codes.'));

      for (let keyCode of httpCodesKeys) {
        if (!codes[date]) {
          codes[date] = {};
        }
        // Suma los valores si ya existen en la misma fecha
        codes[date][keyCode] = (codes[date][keyCode] || 0) + data[keyCode];
      }
    }

    // Diccionario modificado para agrupar por fecha
    const modifiedDict: Record<string, Record<string, number>> = {};

    // Agrupa y suma los códigos HTTP por fecha
    Object.entries(codes).forEach(([timestamp, codes]) => {
      // Extrae solo la fecha (año-mes-día)
      const date = timestamp.split('-').slice(0, 3).join('-');

      if (!modifiedDict[date]) {
        modifiedDict[date] = {};
      }

      // Suma los códigos HTTP en el nuevo diccionario
      Object.entries(codes).forEach(([code, value]) => {
        if (modifiedDict[date][code]) {
          modifiedDict[date][code] += value;
        } else {
          if (typeof value === "number") {
            modifiedDict[date][code] = value;
          }
        }
      });
    });


    // Ordena las fechas en modifiedDict
    const sortedDates = Object.keys(modifiedDict).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    // Prepara las series para el gráfico
    let statusCodes = new Set<string>();
    for (let status in modifiedDict) {
      for (let code in modifiedDict[status]) {
        statusCodes.add(code);
      }
    }

    // Inicializa las series para el gráfico
    this.statusCodesOptions.series = [];
    for (let status of statusCodes) {
      let seriesData: number[] = [];

      // Llena los datos por cada fecha
      sortedDates.forEach(date => {
        seriesData.push(modifiedDict[date][status] || 0);
      });

      // Asigna el color en función del rango del código HTTP
      let statusCodeNumber = parseInt(status.split('.')[2], 10); // Extraer el número de código HTTP

      let color: string;
      if (statusCodeNumber < 300) {
        color = '#00c600'; // Verde para códigos 2xx
      } else if (statusCodeNumber < 400) {
        color = '#0080ff'; // Azul para códigos 3xx
      } else if (statusCodeNumber < 500) {
        color = '#e41313'; // Rojo para códigos 4xx
      } else {
        color = '#ff7300'; // Naranja para códigos 5xx
      }

      // Añade la serie al gráfico con el color correspondiente
      this.statusCodesOptions.series.push({
        name: status,
        type: 'line',
        data: seriesData,
        lineStyle: {
          color: color
        },
        itemStyle: {
          color: color
        }
      });
    }

    // Actualiza las etiquetas del eje X (fechas) con las fechas ordenadas
    // @ts-ignore
    this.statusCodesOptions.xAxis.data = sortedDates;


    // Fuerza la actualización del gráfico
    this.statusCodesOptions = { ...this.statusCodesOptions };


    //get the eleement by id unitChart
    let httpCodesChart = document.getElementById('httpCodesChart');
    //change width and height
    httpCodesChart!.style.width = '100%';
    httpCodesChart!.style.height = '25em';


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


}
