import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {FlamegraphColor, RawData} from "ngx-flamegraph/lib/utils";
import { Product } from "../../interfaces/product";
import { FlameGraphService } from "../../services/flame-graph.service";
import { LoadingController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { User } from "../../interfaces/user";
import {getGenerativeModel, VertexAI} from "@angular/fire/vertexai-preview";
import {AiMessage} from "../../interfaces/ai-message";

@Component({
  selector: 'app-flame-graph-compare',
  templateUrl: './flame-graph-compare.page.html',
  styleUrls: ['./flame-graph-compare.page.scss'],
})
export class FlameGraphComparePage implements OnInit {

  product: Product = {};
  datesForComparison: string[] = [];
  lenDates: number = 0;
  configurations: { [key: string]: { data: RawData[], color:FlamegraphColor } } = {};
  color: FlamegraphColor = {
    hue: [50, 0],
    saturation: [80, 80],
    lightness: [55, 60]
  };



  aiAnalytic:AiMessage[] = []
  @ViewChild('messagesContainer2') private messagesContainer: ElementRef | undefined;
  aiModal: boolean = false
  message: string = '';
  vertexAI: VertexAI = inject(VertexAI);
  model = getGenerativeModel(this.vertexAI, { model: "gemini-1.5-flash" });
  chatCPU = this.model.startChat({
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
        parts: [{text:"Gracias, te voy a entregar un json con datos en unos minutos, necesito que lo analices y me des un resumen de los datos, este json contiene datos de usos de CPU de un servidor por día, imagina que " +
            ",tu analisis tiene que ser detallado, si encuentras inconsistencias en los datos, por favor mencionalas, en " +
            "caso de que creas que puede haber un uso excesivo de algun servicio por favor mencionalo, si encuentras algo interesante, por favor mencionalo, en resumen, necesito un analisis detallado de los datos"}],
      },
      {
        role: "model",
        parts: [{text:"Claro, envíame el json y yo me encargo de analizarlo"}]
      },
    ],
  });
  chatMemory = this.model.startChat({
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
        parts: [{text:"Gracias, te voy a entregar un json con datos en unos minutos, necesito que lo analices y me des un resumen de los datos, este json contiene datos de usos de MEMORIA de un servidor por día, imagina que " +
            ",tu analisis tiene que ser detallado, si encuentras inconsistencias en los datos, por favor mencionalas, en " +
            "caso de que creas que puede haber un uso excesivo de algun servicio por favor mencionalo, si encuentras algo interesante, por favor mencionalo, en resumen, necesito un analisis detallado de los datos"}],
      },
      {
        role: "model",
        parts: [{text:"Claro, envíame el json y yo me encargo de analizarlo"}]
      },
    ],
  });
  messages:AiMessage[] = []
  wasChatOpen: boolean = false;
  usage_type: string | null = '';


  constructor(
    private flameGraphService: FlameGraphService,
    private loadingCtrl: LoadingController,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.configurations = {};
  }

  ionViewWillEnter() {
    this.configurations = {};
    this.datesForComparison = [];
    this.getProductAndDatesFromParams();
    this.getFlameGraph().then(() => {
      this.sendMessage().then(() => {
        this.chatStyle();
      });
    });
  }



async getFlameGraph() {
  try {
    await this.showLoading();
    const userString = localStorage.getItem('user');

    if (!userString) {
      return;
    }

    const user: User = JSON.parse(userString);
    const orgName: string = user.orgName!;
    console.log(orgName);

    this.configurations = {};

    for (const date of this.datesForComparison) {
      let flameGraph;
      if (this.usage_type === "memory_usage") {
        flameGraph = await this.flameGraphService.getFlameGraphByDate(orgName, this.product.productObjective!, date, true);
        this.color = {
          hue: [140, 100], // Green hue
          saturation: [60, 60],
          lightness: [ 60,30]
        };
      } else {
        flameGraph = await this.flameGraphService.getFlameGraphByDate(orgName, this.product.productObjective!, date);

        this.color = {
          hue: [50, 0],
          saturation: [80, 80],
          lightness: [55, 60]
        };
      }
      console.log(flameGraph);

      let allRawData: RawData[] = [];
      let keys = [];

      for (let key in flameGraph) {
        // @ts-ignore
        const data_to_transform = flameGraph?.[key];
        keys = Object.keys(data_to_transform);
        console.log('keys', keys);
        const lenKeys = keys.length;
        const valueKeys = 100 / lenKeys;

        for (let serv in keys) {
          const children: RawData[] = [];
          for (let i = 0; i < data_to_transform[keys[serv]].length; i++) {
            if (this.usage_type === "memory_usage") {
              children[i] = this.transformToRawDataMemory(data_to_transform[keys[serv]][i]);
            } else {
              children[i] = this.transformToRawDataCPU(data_to_transform[keys[serv]][i]);
            }
          }
          console.log('server1', children);
          const rawData: RawData = {
            label: keys[serv],
            value: valueKeys,
            children: [...children],
          };
          allRawData.push(rawData);
        }
        console.log('server', allRawData);
      }

      allRawData = [
        {
          label: 'root',
          value: 100,
          children: allRawData,
        },
      ];

      // Save the configuration for this date
      this.configurations[date] = { data: allRawData, color: this.color };
    }

    console.log('Final configurations', this.configurations);

    await this.hideLoading();
  } catch (e) {
    console.log(e);
    await this.hideLoading();
  }
}

  /**
   * This method gets the product and date from URL parameters.
   */
  getProductAndDatesFromParams() {
    // Get product from URL params
    this.route.queryParams.subscribe(params => {
      this.product = JSON.parse(params['product']);
      this.datesForComparison = JSON.parse(params['dates']);
      this.usage_type = this.route.snapshot.queryParamMap.get('usage_type');
    });

    this.lenDates = this.datesForComparison.length;
    console.log(this.product.productObjective);
    console.log(this.datesForComparison);
    console.log(this.usage_type);

  }












  doRefresh($event: any) {
    this.getFlameGraph().then(() => {
      $event.target.complete();
    });
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


  average(values: string[]): number {
    const numbers = values.map(Number);
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
  }

  transformToRawDataCPU(json: any): RawData {
    const cpuUsage = json.cpu_usage ? this.average(json.cpu_usage) : 0;
    const children: RawData[] = [];

    // Loop through each key in the object
    for (const key in json) {
      if (key === "id" || key === "cpu_usage") continue;

      const value = json[key];

      if (typeof value === 'object' && !Array.isArray(value)) {
        // If the key is "sub_services", handle its children directly
        if (key === "sub_services") {
          for (const subKey in value) {
            const subValue = value[subKey];
            const subCpuUsage = subValue.cpu_usage ? this.average(subValue.cpu_usage) : 0;

            const child: RawData = {
              label: subKey,
              value: subCpuUsage,
              children: this.transformToRawDataCPU(subValue).children
            };

            children.push(child);
          }
        } else {
          const childCpuUsage = value.cpu_usage ? this.average(value.cpu_usage) : 0;

          const child: RawData = {
            label: key,
            value: childCpuUsage,
            children: this.transformToRawDataCPU(value).children
          };

          children.push(child);
        }
      } else if (typeof value !== 'object') {
        children.push({
          label: key,
          value: 0,
          children: []
        });
      }
    }

    return {
      label: json.id,
      value: cpuUsage,
      children: children
    };
  }

  transformToRawDataMemory(json: any): RawData {
    const memoryUsage = json.memory_usage ? this.average(json.memory_usage) : 0;
    const children: RawData[] = [];

    // Loop through each key in the object
    for (const key in json) {
      if (key === "id" || key === "memory_usage") continue;

      const value = json[key];

      if (typeof value === 'object' && !Array.isArray(value)) {
        // If the key is "sub_services", handle its children directly
        if (key === "sub_services") {
          for (const subKey in value) {
            const subValue = value[subKey];
            const subMemoryUsage = subValue.memory_usage ? this.average(subValue.memory_usage) : 0;

            const child: RawData = {
              label: subKey,
              value: subMemoryUsage,
              children: this.transformToRawDataMemory(subValue).children
            };

            children.push(child);
          }
        } else {
          const childMemoryUsage = value.memory_usage ? this.average(value.memory_usage) : 0;

          const child: RawData = {
            label: key,
            value: childMemoryUsage,
            children: this.transformToRawDataMemory(value).children
          };

          children.push(child);
        }
      } else if (typeof value !== 'object') {
        children.push({
          label: key,
          value: 0,
          children: []
        });
      }
    }

    return {
      label: json.id,
      value: memoryUsage,
      children: children
    };
  }


  chatStyle(){


    const analytics = document.getElementById('analytics');
    if (analytics){
      let h1 = analytics.getElementsByTagName("h1");
      let h2 = analytics.getElementsByTagName("h2");
      for (var i = 0; i < h1.length; i++) {
        h1[i].style.fontSize = "2em";
        h1[i].style.fontWeight = "bold";
      }
      for (var i = 0; i < h2.length; i++) {
        h2[i].style.fontSize = "1.6em";
        h2[i].style.fontWeight = "bold";
      }
    }


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

    this.scrollToBottom();
  }

  async sendMessage() {
    if (this.aiAnalytic.length <= 0) {
      await this.showLoading();
      const data = JSON.stringify(this.configurations);
      let result;
      if (this.usage_type === 'memory_usage') {
        result = await this.chatMemory.sendMessage(data);
      }else {
        result = await this.chatCPU.sendMessage(data);
      }
      const length = this.messages.length;
      this.messages.push({message: result.response.text(), from: 'AI', id: length.toString()});
      this.aiAnalytic.push({message: result.response.text(), from: 'AI', id: length.toString()});
      await this.hideLoading();
      console.log('AI Analytic:', this.aiAnalytic);
      this.scrollToBottom();
      return;
    }

    let result;
    if (this.usage_type === 'memory_usage') {
      result = await this.chatMemory.sendMessage(this.message);
    }else {
      result = await this.chatCPU.sendMessage(this.message);
    }
    const length = this.messages.length;
    this.messages.push({message: this.message, from: 'User', id: length.toString()});
    this.messages.push({message: result.response.text(), from: 'AI', id: length.toString()});

    this.message = '';
    this.scrollToBottom();


  }

  private scrollToBottom(): void {
    if (this.messagesContainer) {
      try {
        //scroll to the bottom of the chat
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight + 10000000;
      } catch (err) {
        console.error('Error al hacer scroll:', err);
      }
    }
  }

  toggleAiModal() {
    if (this.message === '') {
      return;
    }


    this.aiModal = !this.aiModal;
    this.wasChatOpen = this.aiModal;

    this.sendMessage().then(() => {
      this.chatStyle();
    });

  }
}

const data = [
  {
    label:"root",
    value: 100,
    children:[]
  }
] as RawData[];
