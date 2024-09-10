import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {getGenerativeModel, VertexAI} from "@angular/fire/vertexai-preview";
import {AiMessage} from "../../../../interfaces/ai-message";
import {AlertController, LoadingController} from "@ionic/angular";
import {GithubService} from "../../../../services/github.service";

@Component({
  selector: 'app-create-integration-test',
  templateUrl: './create-integration-test.page.html',
  styleUrls: ['./create-integration-test.page.scss'],
})
export class CreateIntegrationTestPage implements OnInit {

  segment: string = 'front'

  productStep: string = '';
  productObjective: string = '';

  selectedFiles: File[] = [];
  moreContext: string = '';
  framework: string = '';

  frameworks = [
    {
      name: 'playwright',
      state: false
    },
    {
      name: 'cypress',
      state: false
    },
    {
      name: 'testcafe',
      state: false
    },
    {
      name: 'selenium',
      state: false
    },
    {
      name: 'puppeteer',
      state: false
    }
  ];

  private vertexAI: VertexAI = inject(VertexAI);
  model = getGenerativeModel(this.vertexAI, { model: "gemini-1.5-flash" });
  chat = this.model.startChat({
    history: [
      {
        role:"user",
        parts: [{text: "Hola desde ahora en adelante seras un ingeniero SRE y de QA, te llamas DevProbeAI. Por favor ayudame a crear un INTEGRATION TEST, limitate a solo programar usando el framework que te diga yo, no me expliques nada, SOLO PROGRAMA"}]
      },
      {
        role:"model",
        parts: [{text: "Claro, soy DevProbeAI, puedo ayudarte con eso. Por favor enviame el contenido del archivo"}]
      }
    ],
  })
  aiMessages: AiMessage[] = [];



  constructor(
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private alertCtrl:AlertController,
    private githubService: GithubService,
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getProductFromParams();
  }

  getProductFromParams() {
    this.activatedRoute.params.subscribe(params => {
      this.productObjective = params['productObjective'];
      this.productStep = params['step'];
    });

    console.log(this.productObjective);
    console.log(this.productStep);

  }

  onSelectedPhoto($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files);
    }
  }



  async fileToGenerativePart() {

    const filePromises = this.selectedFiles.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve({
          inlineData: {
            data: reader.result!.toString().split(',')[1],
            mimeType: file.type,
          }
        });
        reader.readAsDataURL(file);
      });
    });

    return Promise.all(filePromises);


  }


  async chooseFramework() {

    //check if two frameworks are selected
    let count = 0;
    for (let s of this.frameworks) {
      if (s.state) {
        this.framework = s.name;
        count++;
      }
    }

    if (count > 1) {
      await this.showAlert('Please select only one framework', 'Multiple Frameworks Selected');
      return false;
    }

    if (count === 0) {
      await this.showAlert('Please select a framework', 'No Framework Selected');
      return false;
    }

    return true;


  }


  async sendToAIFront() {
    try {

      await this.showLoading();


      if (this.selectedFiles.length === 0) {
        await this.hideLoading();
        await this.showAlert('Please select a file', 'No File Selected');
        return;
      }

      if (!await this.chooseFramework()) {
        await this.hideLoading();
        return;
      }

      let prompt = "";
      if (this.moreContext !== '') {
        prompt = "Te envio más contexto:  " + this.moreContext + "   El test debe ser escrito con: " + this.framework;
      }else {
        prompt = "El test debe ser escrito con: " + this.framework;
      }




      this.aiMessages = [];
      let res = '';
      this.fileToGenerativePart().then(async (data) => {
        // @ts-ignore
        await this.chat.sendMessage([prompt, ...data]).then((response) => {
          res = response.response.text();
        }).finally(async () => {
          this.aiMessages.push({
            from: 'ai',
            message: res,
            id: this.aiMessages.length.toString()
          });

          await this.hideLoading();

        });

      });



    } catch (e) {
      await this.hideLoading();
      console.log(e);
    }
  }

  async sendToAIApiBack() {
    try {

      await this.showLoading();
      await  this.hideLoading();

    }catch (e) {
      await this.hideLoading();
      console.log(e);
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
  }


  saveIntegrationTest() {

  }
}
