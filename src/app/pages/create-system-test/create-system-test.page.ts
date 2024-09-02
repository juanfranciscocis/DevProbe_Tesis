import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SystemTest} from "../../interfaces/system-test";
import {AlertController, IonModal} from "@ionic/angular";

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController
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


  createSystemTest() {
    console.log(this.systemTest);
    if (!this.systemTest.title || !this.systemTest.description || this.systemTest.steps.length === 0) {
      this.showAlert('Please fill out the title, description, and at least one step.', 'Error').then(r =>
        console.log('Alert shown'));
      return;
    }

    // Save the system test to the database

  }
}
