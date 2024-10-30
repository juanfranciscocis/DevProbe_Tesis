import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";
import {IncidentService} from "../../../services/incident.service";
import {Incident} from "../../../interfaces/incident";
import {getGenerativeModel, VertexAI} from "@angular/fire/vertexai-preview";

@Component({
  selector: 'app-incident-postmortem',
  templateUrl: './incident-postmortem.page.html',
  styleUrls: ['./incident-postmortem.page.scss'],
})
export class IncidentPostmortemPage implements OnInit {

  orgName: string = '';
  productObjective: string = '';
  productStep: string   = '';
  incident: Incident = {} as Incident;



  wentWrong:string = '';
  canBeLearned: string = '';
  howToPrevent: string = '';

  private vertexAI:VertexAI = inject(VertexAI);


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private incidentService: IncidentService,

  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.getParams();
    await this.getIncident()
  }


  getParams() {
    this.activatedRoute.params.subscribe(params => {
      this.productObjective = params['productObjective']; //this is the product objective
      this.productStep = params['step']; //this is the step of the product
      this.incident.title = params['incidentTitle'];
    });
    const user = JSON.parse(localStorage.getItem('user')!);
    this.orgName = user.orgName!;

    console.log(this.orgName);
    console.log(this.productObjective);
    console.log(this.productStep);
    console.log(this.incident.title);
  }

  async getIncident() {

    await this.showLoading();

    this.incident = await this.incidentService.getIncident(this.orgName, this.productObjective, this.productStep, this.incident.title)

    try {
      this.wentWrong = this.incident.postmortem?.wentWrong!;
      this.canBeLearned = this.incident.postmortem?.canBeLearned!;
      this.howToPrevent = this.incident.postmortem?.howToPrevent!;
    }catch (e) {
      console.log(e);
    }

    await this.hideLoading();

  }


  async savePostmortem() {
    await this.showLoading();
    this.incident.postmortem = {
      wentWrong: this.wentWrong,
      canBeLearned: this.canBeLearned,
      howToPrevent: this.howToPrevent
    }

    this.incident.state = 'postmortem';

    console.dir(this.incident);

    await this.incidentService.updateIncident(this.orgName, this.productObjective, this.productStep, this.incident).then(async res => {
      if (res) {
        await this.hideLoading();
        await this.router.navigate(['/incident-manager', {
          productObjective: this.productObjective,
          step: this.productStep,
        }])
      }
      await this.hideLoading();
    })
  }

  async sendToAI(field: string) {
    await this.showLoading();

    try {


      console.log(field);


      let question = '';
      let answer;
      if (field === 'wentWrong') {
        question = 'Ayudame a completar el Postmortem del siguiente incidente: ' + this.incident.title + '. Lo sucedido se basa en la sigueinte descripción: ' + this.incident.description + '. Esto fue '
        ' lo que fue pasando en el incidente: ';
        for (let i = 0; i < this.incident.report!.length; i++) {
          question += ' ' + this.incident.report![i].comment;
        }
        question += ' ¿Qué salió mal?. Responde solo a esta pregunta en maximo 100 palabras';
      }

      if (field === 'canBeLearned') {

        if (this.wentWrong === '') {
          await this.hideLoading();
          return;
        }

        question = 'Ayudame a completar el Postmortem del siguiente incidente: ' + this.incident.title + '. Lo sucedido se basa en la sigueinte descripción: ' + this.incident.description + '. Esto fue '
        ' lo que fue pasando en el incidente: ';
        for (let i = 0; i < this.incident.report!.length; i++) {
          question += ' ' + this.incident.report![i].comment;
        }

        question += 'Lo que salió mal fue: ' + this.wentWrong;

        question += ' ¿Qué se puede aprender sobre el incidente?. Responde solo a esta pregunta en maximo 100 palabras';
      }


      if (field === 'howToPrevent') {

        if (this.canBeLearned === '' || this.wentWrong === '') {
          await this.hideLoading();
          return;
        }

        question = 'Ayudame a completar el Postmortem del siguiente incidente: ' + this.incident.title + '. Lo sucedido se basa en la sigueinte descripción: ' + this.incident.description + '. Esto fue '
        ' lo que fue pasando en el incidente: ';
        for (let i = 0; i < this.incident.report!.length; i++) {
          question += ' ' + this.incident.report![i].comment;
        }

        question += 'Lo que salió mal fue: ' + this.wentWrong;

        question += 'Lo que se puede aprender sobre el incidente fue: ' + this.canBeLearned;

        question += ' ¿Cómo se puede prevenir que vuelva a suceder?. Responde solo a esta pregunta en maximo 100 palabras';
      }


      const model = getGenerativeModel(this.vertexAI, {model: "gemini-1.5-flash"});
      answer = await model.generateContent(question);
      console.log(answer);

      if (field === 'wentWrong') {
        this.wentWrong = answer.response.text() as string;
      }

      if (field === 'canBeLearned') {
        this.canBeLearned = answer.response.text() as string;
      }

      if (field === 'howToPrevent') {
        this.howToPrevent = answer.response.text() as string;
      }

    }catch (e){
      console.log(e);
    }



    await this.hideLoading();


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
