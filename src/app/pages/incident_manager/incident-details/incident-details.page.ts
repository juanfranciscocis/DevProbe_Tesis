import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";
import {IncidentService} from "../../../services/incident.service";
import {Incident} from "../../../interfaces/incident";
import {NotificationService} from "../../../services/notification.service";
import {getDownloadURL, ref, Storage, uploadBytesResumable} from "@angular/fire/storage";

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.page.html',
  styleUrls: ['./incident-details.page.scss'],
})
export class IncidentDetailsPage implements OnInit {

  productStep: string = '';
  productObjective: string = '';
  orgName: string = '';
  currentUser: string = '';

  incident: Incident = {} as Incident;


  newComment: string = '';
  storage: Storage = inject(Storage)
  isImageLoaded: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private incidentService: IncidentService,
    private notificationService: NotificationService,
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
    this.currentUser = user.name!  as string;

    console.log(this.orgName);
    console.log(this.productObjective);
    console.log(this.productStep);
    console.log(this.incident.title);
  }

  async getIncident() {
    await this.showLoading();
    this.incident = await this.incidentService.getIncident(this.orgName, this.productObjective, this.productStep, this.incident.title);
    await this.hideLoading();
  }

  async addComment() {

    await this.showLoading();
    console.log('add comment');
    console.log(this.currentUser);
    console.log(this.newComment);

    if (this.newComment === '') {
      await this.hideLoading();
      return;
    }

    //check if the incident has a report
    if (this.incident.report) {
      //add the comment to the report
      this.incident.report.push({
        comment: this.newComment.replace(/\n/g, '<br>'),
        from: this.currentUser,
      });
    } else {
      //create a new report
      this.incident.report = [{
        comment: this.newComment.replace(/\n/g, '<br>'),
        from: this.currentUser,
      }];
    }

    //save the incident to the db
    await this.incidentService.updateIncident(this.orgName, this.productObjective, this.productStep, this.incident);


    interface Role {
      role: string;
      member: string;
    }

    let consolidateMember: Role[] = [];
    consolidateMember.push({role: 'Incident Commander', member: this.incident.incidentCommander});
    consolidateMember.push({role: 'Communications Lead', member: this.incident.communications_lead});
    consolidateMember.push({role: 'Operations Lead', member: this.incident.operations_lead});
    for (let i = 0; i < this.incident.operation_team.length; i++) {
      consolidateMember.push({role: 'Operations Team Member', member: this.incident.operation_team[i]});
    }
    console.log(consolidateMember);

    //get current url
    const target = window.location.href;


    await this.notificationService.notifyIncidentUpdateToTeam(consolidateMember, this.orgName, target);


    this.newComment = '';

    this.hideLoading();


  }




  onImageLoad() {
    this.isImageLoaded = true;
  }



  async uploadFile(input: HTMLInputElement) {
    await this.showLoading();
    if (!input.files) return
    const files: FileList = input.files;
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        const path = `incident/${this.orgName}/${this.productObjective}/${this.productStep}/°/${file.name}`
        // @ts-ignore
        const storageRef = ref(this.storage, path)
        await uploadBytesResumable(storageRef, file).then((snapshot)=>{
          //get the url
          console.log('Uploaded a blob or file!', snapshot.ref.fullPath);
          this.downloadFile(snapshot.ref.fullPath).then(async (data) => {
            this.newComment = data;
            await this.hideLoading();
            await this.addComment()
            this.isImageLoaded = false;
          });
        });
      }
    }
  }

  async downloadFile(file: string):Promise<string> {
    let finalUrl = '';
    // @ts-ignore
    await getDownloadURL(ref(this.storage, file)).then((url) => {
      console.log('File available at', url);
      finalUrl = url;
    });
    return finalUrl;
  }

  isImage(url: string): boolean {
    return /(\.jpg|\.jpeg|\.png|\.gif|\.bmp|\.webp)(\?|$)/i.test(url);
  }

  isFile(url: string): boolean {
    return /(\.csv|\.pdf|\.doc|\.docx|\.ppt|\.pptx|\.xls|\.xlsx|\.txt|\.mp3|\.wav|\.ogg|\.mp4|\.avi|\.mkv|\.mov|\.zip|\.rar|\.7z|\.tar|\.gz)(\?|$)/i.test(url);
  }


  fileName(url:string):string{
    // @ts-ignore
    const nameWithPath = decodeURIComponent(url.split('/').pop().split('?')[0]);
    return nameWithPath.split('°').pop()?.substring(1) as string;
  }






  closeIncident() {
    this.incidentService.closeIncident(this.orgName, this.productObjective, this.productStep, this.incident).then(async res => {
      if (res) {
        // navigate one step back
        await this.router.navigate(['/incident-manager', {
          productObjective: this.productObjective,
          step: this.productStep
        }]);
      }
    });

  }



  async postmortemIncident() {
    await this.router.navigate(['/incident-postmortem', {
      orgName: this.orgName,
      productObjective: this.productObjective,
      step: this.productStep,
      currentUser: this.currentUser,
      incidentTitle: this.incident.title
    }]);
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

  protected readonly decodeURIComponent = decodeURIComponent;

  deleteUploadfile(upload: HTMLInputElement) {
    // reset the input
    upload.value = '';
    this.isImageLoaded = false;
  }

}
