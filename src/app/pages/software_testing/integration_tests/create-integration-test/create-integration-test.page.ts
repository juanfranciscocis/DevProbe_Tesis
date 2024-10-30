import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {getGenerativeModel, VertexAI} from "@angular/fire/vertexai-preview";
import {AiMessage} from "../../../../interfaces/ai-message";
import {AlertController, LoadingController} from "@ionic/angular";
import {GithubService} from "../../../../services/github.service";
import {IntegrationTestService} from "../../../../services/software_testing/integration-test.service";
import {GitSyncData} from "../../../../interfaces/git-sync-data";
import {TeamsService} from "../../../../services/teams.service";
import {User} from "../../../../interfaces/user";

@Component({
  selector: 'app-create-integration-test',
  templateUrl: './create-integration-test.page.html',
  styleUrls: ['./create-integration-test.page.scss'],
})
export class CreateIntegrationTestPage implements OnInit {

  segment: string = 'front'

  productStep: string = '';
  productObjective: string = '';
  orgName: string = '';

  teamMembers: User[] = [];

  selectedFiles: File[] = [];
  moreContext: string = '';
  framework: string = '';
  testTitle: string = '';

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

  gitHubData:GitSyncData = {
    key: '',
    repo: '',
    branch: '',
    owner: ''
  }
  files:string[] = []

  myIntegrationTest: string = '';
  assignedTester: string = '';



  constructor(
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private alertCtrl:AlertController,
    private githubService: GithubService,
    private integrationTestService: IntegrationTestService,
    private teamService: TeamsService,
  ) {
  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.getProductFromParams();
    await this.getTeamMembers();
    await this.getGitHubSync();

    if (this.gitHubData.key !== '') {
      await this.getFiles();
    }


  }

  getProductFromParams() {
    this.activatedRoute.params.subscribe(params => {
      this.productObjective = params['productObjective'];
      this.productStep = params['step'];
    });

    console.log(this.productObjective);
    console.log(this.productStep);

    const user = JSON.parse(localStorage.getItem('user')!);
    this.orgName = user.orgName!;

  }


  async getTeamMembers() {
    this.teamMembers = await this.teamService.getTeamByOrganization(this.orgName);
  }

  /**
   * Handle segment change.
   */
  onSegmentChanged(segment: string) {
    this.segment = segment;
    //reset all variables
    this.selectedFiles = [];
    this.moreContext = '';
    this.framework = '';
    this.testTitle = '';
    this.aiMessages = [];

    for (let s of this.frameworks) {
      s.state = false;
    }

    this.chat = this.model.startChat({
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


  }


  /**
   * Handle the selection of a photo, choosing the framework to use and sending the photo to the AI.
   */
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

      console.log(this.selectedFiles);
      console.log(this.moreContext);

      if (this.selectedFiles.length === 0 && this.moreContext === '') { //if no file is selected but there is more context then this is a valid case
        await this.hideLoading();
        await this.showAlert('Please select a file', 'No File Selected');
        return;
      }

      if (!await this.chooseFramework()) {
        await this.hideLoading();
        return;
      }

      let prompt = "";
      if (this.moreContext !== '' && this.selectedFiles.length > 1) {
        console.log('more context and files');
        prompt = "Te envio más contexto:  " + this.moreContext + "   El test debe ser escrito con: " + this.framework;
      } else if (this.moreContext !== '' && this.selectedFiles.length <= 0) {
        console.log('more context');
        prompt = "El contenido del archivo es:  " + this.moreContext + "   El test debe ser escrito con: " + this.framework
      }else {
        console.log('framework');
        prompt = "El test debe ser escrito con: " + this.framework;
      }




      this.aiMessages = [];
      let res = '';

      if (this.selectedFiles.length >= 1) {
        console.log('file');
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
      } else {
        console.log('github');
        await this.chat.sendMessage(prompt).then((response) => {
          res = response.response.text();
        }).finally(async () => {
          this.aiMessages.push({
            from: 'ai',
            message: res,
            id: this.aiMessages.length.toString()
          });
          await this.hideLoading();
        });
      }

      console.log('Messages', this.aiMessages);



    } catch (e) {
      await this.hideLoading();
      console.log(e);
    }
  }


  /**
   * Save the integration test to the database.
   */
  async saveIntegrationTest() {

    await this.showLoading();

    //check if the test title is empty
    if (this.testTitle === '') {
      await this.hideLoading()
      this.showAlert('Please enter a test title', 'No Test Title');
      return;
    }

    //check if the test title is empty
    if (this.assignedTester === '') {
      await this.hideLoading()
      this.showAlert('Please select a tester', 'No Test Title');
      return;
    }


    //check if there is no message from the AI
    if (this.aiMessages.length === 0 && this.myIntegrationTest === '') {
      await this.hideLoading();
      this.showAlert('Please send the file to the AI or paste your code', 'Error');
      return;
    }

    //get user froim local storage
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null;
    if (!user) {
      return;
    }
    const orgName = user.orgName || '';

    //get the current date
    let date = new Date();
    let srtDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    //save the integration test
    await this.integrationTestService.addSystemTest(orgName, this.productObjective, this.productStep, {
      title: this.testTitle,
      assigned_to: this.assignedTester,
      type: 'integration-test',
      code: this.myIntegrationTest !== '' ? this.myIntegrationTest : this.aiMessages[0].message,
      state: false,
      last_state_change: [
        {
          date: srtDate,
          state: false
        }
      ]
    }).then(async () => {
      await this.hideLoading();
      await this.showAlert('Integration Test saved successfully', 'Test Saved');
      window.history.back();
    }).catch(async (e) => {
      await this.hideLoading();
      await this.showAlert('Error saving Integration Test', 'Error');
    });

    await this.hideLoading();


  }

  /**
   * Get the GitHub Sync data from the local storage.
   */
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

  /**
   *  Get the files from the GitHub repository.
   */
  async getFiles() {
    await this.showLoading();

    this.files = await this.githubService.getFiles(this.gitHubData);

    if (this.files.length === 0) {
      await this.hideLoading();
      await this.showAlert('No files found in the repository, check sync settings', 'No Files Found');
    }
    await this.hideLoading();
  }

  /**
   * Get the content of the selected file.
   */
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

    this.moreContext = content;

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
    this. assignedTester = $event.detail.value;
  }
}
