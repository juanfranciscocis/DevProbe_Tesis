import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SystemTest} from "../../../../interfaces/system-test";
import {AlertController, IonModal, LoadingController} from "@ionic/angular";
import {SystemTestService} from "../../../../services/system-test.service";
import {User} from "../../../../interfaces/user";
import {getGenerativeModel, VertexAI} from "@angular/fire/vertexai-preview";
import {AiMessage} from "../../../../interfaces/ai-message";

@Component({
  selector: 'app-create-system-test',
  templateUrl: './create-system-test.page.html',
  styleUrls: ['./create-system-test.page.scss'],
})
export class CreateSystemTestPage implements OnInit {
  productObjective: string = '';
  productStep: string = '';
  systemTest:SystemTest = {
    title: '',
    description: '',
    steps: [],
    type: 'system-test',
    state: false
  }

  testStepTitle: string = '';
  testExpectedResults: string = '';

  @ViewChild(IonModal) modal: IonModal | undefined;

  private user: User = {};
  private orgName: string = '';

  vertexAI: VertexAI = inject(VertexAI);
  model = getGenerativeModel(this.vertexAI, { model: "gemini-1.5-flash" });
  aiSteps:AiMessage[] = [];
  extraData: string = '';
  disableAI: boolean = false;





  constructor(
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private systemTestService: SystemTestService,
    private loadingCtrl: LoadingController,

  ) { }

  ngOnInit() {
    this.getProductFromParams()
  }

  /**
   * This method gets the product and step from URL parameters.
   */
  getProductFromParams() {
    // Get product from URL params
    this.activatedRoute.params.subscribe(params => {
      this.productObjective = params['productObjective'];
      this.productStep = params['step'];
    });
    console.log(this.productObjective);
    console.log(this.productStep);
  }

  onWillDismiss($event: any) {
  }

  cancel() {
    this.modal?.dismiss();
  }

  save() {

    if (!this.testStepTitle || !this.testExpectedResults) {
      this.showAlert('Please fill out the Step Title and the Expected Result fields.', 'Error').then(r =>
        console.log('Alert shown'));
      return;
    }

    this.systemTest.steps.push({
      stepTitle: this.testStepTitle,
      expectedResults: this.testExpectedResults,
      isComplete: false
    });

    this.testStepTitle = '';
    this.testExpectedResults = '';

    this.modal?.dismiss();
  }

  delete(stepTitle: string) {
    this.systemTest.steps = this.systemTest.steps.filter(step => step.stepTitle !== stepTitle);
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


  async createSystemTest() {
    await this.showLoading();
    console.log(this.systemTest);

    if (!this.systemTest.title || !this.systemTest.description || this.systemTest.steps.length === 0) {
      await this.hideLoading()
      this.showAlert('Please fill out the title, description, and at least one step.', 'Error').then(r =>
        console.log('Alert shown'));
      return;
    }

    // Save the system test to the database
    const userString = localStorage.getItem('user');
    if (!userString) return;

    this.user = JSON.parse(userString);
    this.orgName = this.user.orgName!;

    console.log(this.orgName);
    this.systemTestService.addSystemTest(this.orgName, this.productObjective, this.productStep, this.systemTest);

    this.systemTest = {
      title: '',
      description: '',
      steps: [],
      type: 'system-test',
      state: false
    }

    await this.hideLoading();

    // Navigate to the last page
    window.history.back();


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


  doRefresh($event: any) {


  }

  async aiGenerate(part: string) {
    await this.showLoading()

    const forDescription = {
      history: [
        {
          role: "user",
          parts:[{text: "Hey, I need help to create a system test case description"}]
        },
        {
          role: "model",
          parts:[{text: "Sure, I can help you with that. What do you need help with?"}]
        },
      ],
      generationConfig: {
        maxOutputTokens: 100,
      }
    }

    const forStep = {
      history: [
        {
          role: "user",
          parts:[{text: "Hey, I need help to create a system test case steps, dont give me more information about the test, JUST LIST THE STEPS"}]
        },
        {
          role: "model",
          parts:[{text: "Sure, I can help you with that."}]
        },
      ],

      generationConfig: {
        maxOutputTokens: 250,
      }
    }

    if (part === 'description') {

      if (!this.systemTest.title || this.systemTest.title === '') {
        await this.hideLoading();
        this.showAlert('Please fill out the title of the test before asking for help with the description.', 'Error').then(r =>
          console.log('Alert shown'));
        return;
      }


      let chat = this.model.startChat(forDescription as any);
      let msg = "Given this test title:" + this.systemTest.title + "I need help to create the description of the test, just give me the test main objective";
      console.log(msg);
      await chat.sendMessage(msg).then(response => {
        this.systemTest.description = response.response.text();
      });


    }

    if (part === 'step') {

      if (!this.systemTest.title || this.systemTest.title === '' || !this.systemTest.description || this.systemTest.description === '') {
        await this.hideLoading();
        this.showAlert('Please fill out the title and description of the test before asking for help with the steps.', 'Error').then(r =>
          console.log('Alert shown'));
        return;
      }


      let chat = this.model.startChat(forStep as any);
      let msg = "Given this test title:" + this.systemTest.title + "and this test description:" + this.systemTest.description + ". Here is more information about the test: " + this.extraData + "I need help to create the steps of the test, just list the steps";
      console.log(msg);
      await chat.sendMessage(msg).then(response => {
        this.aiSteps.push({message: response.response.text(), from: 'AI', id: '1'});
        console.log(response.response.text());
      })
      this.disableAI = true;
    }


    await this.hideLoading();

  }

  async askAIForHelp(part: string) {
    await this.aiGenerate(part).then(r => console.log('AI generated'));
    const element  = document.getElementById('mk-1');
    console.log(element);
    this.chatStyle();
  }


  chatStyle(){
    //obtener el elemento id mk-0
    const element = document.getElementById('mk-1');

    console.log(element);

    //a los elementos h1 dentro de mk agregar font-size 20px
    if (!element) return;

    let h1 = element.getElementsByTagName("h1");
    let h2 = element.getElementsByTagName("h2");
    let li = element.getElementsByTagName("li");
    //li -> strong
    let strong = element.getElementsByTagName("strong");
    //li -> ul -> li
    let ul = element.getElementsByTagName("ul");

    for (var i = 0; i < h1.length; i++) {
      h1[i].style.fontSize = "2.5em";
      h1[i].style.fontWeight = "bold";
    }
    for (var i = 0; i < h2.length; i++) {
      h2[i].style.fontSize = "2em";
      h2[i].style.fontWeight = "bold";
    }

    for (var i = 0; i < li.length; i++) {
      li[i].style.fontSize = "1.5em";
      // add a - before the text
      li[i].innerHTML = "- " + li[i].innerHTML;
      console.log(li[i].innerHTML);
    }

    for (var i = 0; i < strong.length; i++) {
      //add a - before the text
      console.log(strong[i].innerHTML);
    }

    for (var i = 0; i < ul.length; i++) {
      ul[i].style.fontSize = "1em";
      // add a - before the text
      ul[i].innerHTML = " - " + ul[i].innerHTML;
      console.log(ul[i].innerHTML);
    }

  }
}
