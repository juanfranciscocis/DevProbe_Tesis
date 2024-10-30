import {Component, inject, OnInit} from '@angular/core';
import {AlertController, LoadingController} from "@ionic/angular";
import {GithubService} from "../../../../services/github.service";
import {GitSyncData} from "../../../../interfaces/git-sync-data";
import {AiMessage} from "../../../../interfaces/ai-message";
import {getGenerativeModel, VertexAI} from "@angular/fire/vertexai-preview";
import {UnitTestService} from "../../../../services/software_testing/unit-test.service";
import {ActivatedRoute} from "@angular/router";
import {LastStateChange} from "../../../../interfaces/unit-test";
import {User} from "../../../../interfaces/user";
import {TeamsService} from "../../../../services/teams.service";
import {NotificationService} from "../../../../services/notification.service";

@Component({
  selector: 'app-create-unit-test',
  templateUrl: './create-unit-test.page.html',
  styleUrls: ['./create-unit-test.page.scss'],
})
export class CreateUnitTestPage implements OnInit {
  segment:string = 'git'
  files:string[] = []

  gitHubData:GitSyncData = {
    key: '',
    repo: '',
    branch: '',
    owner: ''
  }

  aiMessages:AiMessage[] = []
  vertexAI: VertexAI = inject(VertexAI);
  model = getGenerativeModel(this.vertexAI, { model: "gemini-1.5-flash" });
  chat = this.model.startChat({
    history: [
      {
        role:"user",
        parts: [{text: "Hola desde ahora en adelante seras un ingeniero SRE y de QA, te llamas DevProbeAI. Por favor ayudame a crear un TEST UNITARIO para el siguiente archivo, limitate a solo programar, no me expliques nada"}]
      },
      {
        role:"model",
        parts: [{text: "Claro, soy DevProbeAI, puedo ayudarte con eso. Por favor enviame el contenido del archivo"}]
      }
    ],
  })

  myUnitTest: string = '';
  title: string = '';
  context: any;
  assignedTester: string = '';

  productObjective: string = '';
  productStep: string = '';
  orgName: string = '';


  teamMembers: User[] = [];



  constructor(
    private loadingCtrl: LoadingController,
    private githubService: GithubService,
    private alertCtrl: AlertController,
    private unitTestService: UnitTestService,
    private activatedRoute: ActivatedRoute,
    private teamService: TeamsService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.getProductFromParams();
    await this.getTeamMembers();

    await this.getGitHubSync();

    if (this.gitHubData.key !== '') {
      this.getFiles();
    }




  }

  getProductFromParams() {
    this.activatedRoute.params.subscribe(params => {
      this.productObjective = params['productObjective'];
      this.productStep = params['step'];
    });

    const user = JSON.parse(localStorage.getItem('user')!);
    this.orgName = user.orgName!;


    console.log(this.productObjective);
    console.log(this.productStep);
    console.log(this.orgName);


  }

  async getTeamMembers() {
    this.teamMembers = await this.teamService.getTeamByOrganization(this.orgName);
    console.log('Members',this.teamMembers);
  }


  async getGitHubSync() {
    await this.showLoading();

    //Get User
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null;
    if (!user) {
      return;
    }
    const orgName = user.orgName || '';

    this.gitHubData = await this.githubService.getSyncRepo(orgName);
    console.log('this.gitHubData', this.gitHubData)

    if (!this.gitHubData || this.gitHubData.key === '') {
      await this.hideLoading();
      await this.showAlert('If you want to use GitHub, please sync your repository in the settings page', 'No GitHub Sync found');
      return;
    }

    await this.hideLoading();
  }

  async getFiles() {
    await this.showLoading();

    this.files = await this.githubService.getFiles(this.gitHubData);

    if (this.files.length === 0) {
      await this.hideLoading();
      await this.showAlert('No files found in the repository, check sync settings', 'No Files Found');
    }
    await this.hideLoading();
  }



  async askForFile(file:any){
    await this.showLoading();

    let content = '';

    try {
      if (file.detail.value) {
        console.log('file', file.detail.value)
        content = await this.githubService.getContentFromFilePath(this.gitHubData, file.detail.value);
        console.log('content', content)

      }
    } catch (e) {
      content = file;
    }

    await this.chat.sendMessage(content).then((response) => {
      this.aiMessages = [];
      this.aiMessages.push({
        from: 'ai',
        message: response.response.text(),
        id: "1"
      });
      console.log('response', response)
    });

    await this.hideLoading();
  }


  async saveUnitTest() {
    await this.showLoading();

    let date = new Date();
    let srtDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    const lastState:LastStateChange = {
      date: srtDate,
      state: false
    }

    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null;
    if (!user) {
      return;
    }
    const orgName = user.orgName || '';

    if (this.myUnitTest && this.myUnitTest !== '' && this.title && this.title !== '' && this.assignedTester && this.assignedTester !== '') {
      await this.unitTestService.addUnitTest(orgName, this.productObjective, this.productStep, {
        code: this.myUnitTest,
        state: false,
        type: 'unit-test',
        title: this.title,
        last_state_change: [lastState],
        assigned_to: this.assignedTester
      });

      const role = {
        member: this.assignedTester,
        role: 'QA'
      }


      await this.notificationService.notifyTestToUser(role, orgName, 'https://devprobe-89481.web.app/software-testing');
      await this.hideLoading();
      await this.showAlert('Your Unit Test saved', 'Unit Test Saved');

      //Go to the previous page
      window.history.back();

      return;
    }

    if (this.aiMessages.length > 0 && this.title && this.title !== '' && this.assignedTester && this.assignedTester !== '') {
      await this.unitTestService.addUnitTest(orgName, this.productObjective, this.productStep, {
        code: this.aiMessages[0].message,
        state: false,
        type: 'unit-test',
        title: this.title,
        last_state_change: [lastState],
        assigned_to: this.assignedTester
      });


      await this.hideLoading();
      await this.showAlert('AI generated Unit Test saved', 'Unit Test Saved');
      //Go to the previous page
      window.history.back();
      return;
    }


    await this.hideLoading();
    await this.showAlert('Please ask AI or add your Unit Test before saving, verify all fields are completed', 'No Unit Test Found');

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


  onAssignedTester($event: any) {
    this.assignedTester = $event.detail.value;
  }
}
