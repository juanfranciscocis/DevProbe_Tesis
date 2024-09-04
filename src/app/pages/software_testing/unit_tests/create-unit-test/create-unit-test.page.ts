import { Component, OnInit } from '@angular/core';
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-create-unit-test',
  templateUrl: './create-unit-test.page.html',
  styleUrls: ['./create-unit-test.page.scss'],
})
export class CreateUnitTestPage implements OnInit {
  segment:string = 'git'
  files:string[] = [ "readme.md", "test/askdk.ts"]

  constructor(
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }



  async askForFile(file: string) {
    await this.showLoading();
    console.log('askForFile', file)
    await this.hideLoading();
  }

  async askToAI(){

  }

  async saveUnitTest() {
    await this.showLoading();
    console.log('saveUnitTest')
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
