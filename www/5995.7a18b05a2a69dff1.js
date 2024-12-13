"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5995],{5995:(C,R,o)=>{o.r(R),o.d(R,{RegisterPageModule:()=>_});var p=o(177),m=o(4341),r=o(7863),f=o(7650),y=o(467),e=o(4438),M=o(4796),P=o(2872);const t=()=>["/login"],l=[{path:"",component:(()=>{var n;class c{constructor(s,i,h,a){var g=this;this.authService=s,this.alertCtrl=i,this.navCtrl=h,this.loadingCtrl=a,this.name="",this.orgName="",this.email="",this.password="",this.registerUser=(0,y.A)(function*(){if(yield g.showLoading(),g.email&&g.password&&g.name&&g.orgName){const w={name:g.name,orgName:g.orgName,email:g.email,password:g.password};(yield g.authService.registerUser(w))?(yield g.hideLoading(),yield g.navCtrl.navigateRoot("/login")):(yield g.hideLoading(),yield g.showAlert("Registration failed. Please check the form data."))}else yield g.hideLoading(),yield g.showAlert("Please enter all the required fields.")})}ngOnInit(){}showAlert(s,i){var h=this;return(0,y.A)(function*(){yield(yield h.alertCtrl.create({header:i||"Registration Failed!",message:s,buttons:["OK"]})).present()})()}showLoading(){var s=this;return(0,y.A)(function*(){yield(yield s.loadingCtrl.create({})).present()})()}hideLoading(){var s=this;return(0,y.A)(function*(){yield s.loadingCtrl.dismiss()})()}}return(n=c).\u0275fac=function(s){return new(s||n)(e.rXU(M.u),e.rXU(r.hG),e.rXU(P.q9),e.rXU(r.Xi))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-register"]],inputs:{name:"name",orgName:"orgName",email:"email",password:"password"},decls:22,vars:7,consts:[[1,"",3,"fullscreen"],[1,"h-full"],["size","12","size-sm","12","size-md","12","size-lg","6","size-xl","6",1,""],[1,"flex","flex-col","items-center","h-full","justify-end","lg:justify-center","md:justify-end"],["src","https://firebasestorage.googleapis.com/v0/b/devprobe-89481.appspot.com/o/Login-Register%2Fregister.avif?alt=media&token=4576bc4b-1400-4f42-9b0b-fe829e0b02b2","alt","register-ios-logo",1,"h-48","lg:h-96"],[1,"flex","flex-col","justify-center","items-center","lg:h-full","md:h-full"],[1,"flex","flex-col","justify-center","items-center","lg:min-w-20","bg-gray-800","p-10","lg:p-32","rounded-2xl"],[1,"font-bold","text-6xl","text-white","mb-6"],["label","Name","placeholder","Enter your name","type","text","labelPlacement","stacked",1,"",3,"ngModelChange","ngModel"],["label","Team Name","placeholder","Enter the org name","type","text","labelPlacement","stacked",1,"",3,"ngModelChange","ngModel"],["label","Email","placeholder","Enter your email","type","email","labelPlacement","stacked",1,"",3,"ngModelChange","ngModel"],["label","Password","placeholder","Enter your password","type","password","labelPlacement","stacked",1,"",3,"ngModelChange","ngModel"],[1,"m-4",3,"click"],[1,"flex","flex-col","lg:flex-row","md:flex-row","justify-center","items-center"],[1,"text-white","text-xs","lg:text-lg"],[1,"text-sm","lg:text-lg","text-blue-500","lg:ml-2",3,"routerLink"]],template:function(s,i){1&s&&(e.j41(0,"ion-content",0)(1,"ion-grid",1)(2,"ion-row",1)(3,"ion-col",2)(4,"div",3),e.nrm(5,"img",4),e.k0s()(),e.j41(6,"ion-col",2)(7,"div",5)(8,"div",6)(9,"h1",7),e.EFF(10,"Sign Up"),e.k0s(),e.j41(11,"ion-input",8),e.mxI("ngModelChange",function(a){return e.DH7(i.name,a)||(i.name=a),a}),e.k0s(),e.j41(12,"ion-input",9),e.mxI("ngModelChange",function(a){return e.DH7(i.orgName,a)||(i.orgName=a),a}),e.k0s(),e.j41(13,"ion-input",10),e.mxI("ngModelChange",function(a){return e.DH7(i.email,a)||(i.email=a),a}),e.k0s(),e.j41(14,"ion-input",11),e.mxI("ngModelChange",function(a){return e.DH7(i.password,a)||(i.password=a),a}),e.k0s(),e.j41(15,"ion-button",12),e.bIt("click",function(){return i.registerUser()}),e.EFF(16,"Register"),e.k0s(),e.j41(17,"div",13)(18,"p",14),e.EFF(19,"Already have an account?"),e.k0s(),e.j41(20,"a",15),e.EFF(21,"Login"),e.k0s()()()()()()()()),2&s&&(e.Y8G("fullscreen",!0),e.R7$(11),e.R50("ngModel",i.name),e.R7$(),e.R50("ngModel",i.orgName),e.R7$(),e.R50("ngModel",i.email),e.R7$(),e.R50("ngModel",i.password),e.R7$(6),e.Y8G("routerLink",e.lJ4(6,t)))},dependencies:[m.BC,m.vS,r.Jm,r.hU,r.W9,r.lO,r.$w,r.ln,r.Gw,r.oY,f.Wk]}),c})()}];let u=(()=>{var n;class c{}return(n=c).\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[f.iI.forChild(l),f.iI]}),c})(),_=(()=>{var n;class c{}return(n=c).\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[p.MD,m.YN,r.bv,u]}),c})()},4796:(C,R,o)=>{o.d(R,{u:()=>y});var p=o(467),m=o(8737),r=o(4262),f=o(4438);let y=(()=>{var e;class M{constructor(t,d){this.auth=t,this.firestore=d}registerUser(t){var d=this;return(0,p.A)(function*(){try{const l=yield(0,m.eJ)(d.auth,t.email,t.password);return l.user?(yield(0,r.BN)((0,r.H9)(d.firestore,"users",l.user.uid),{email:t.email,name:t.name,orgName:t.orgName,uid:l.user.uid}),yield(0,r.BN)((0,r.H9)(d.firestore,"teams",`${t.orgName}`),{name:t.orgName,members:[l.user.uid]}),l):null}catch{return null}})()}loginUser(t){var d=this;return(0,p.A)(function*(){try{var l;const u=yield(0,m.x9)(d.auth,t.email,t.password);if(null!==(l=u.user)&&void 0!==l&&l.uid){const _=yield(0,r.x7)((0,r.H9)(d.firestore,"users",u.user.uid));if(_.exists())return localStorage.setItem("user",JSON.stringify(_.data())),u}}catch(u){console.error(u)}return null})()}logoutUser(){var t=this;return(0,p.A)(function*(){yield t.auth.signOut()})()}addMember(t){var d=this;return(0,p.A)(function*(){try{const l=yield(0,m.eJ)(d.auth,t.email,t.password);if(!l.user)return!1;const u={email:t.email,name:t.name,orgName:t.orgName,uid:l.user.uid};return yield(0,r.BN)((0,r.H9)(d.firestore,"users",l.user.uid),u),u}catch{return!1}})()}}return(e=M).\u0275fac=function(t){return new(t||e)(f.KVO(m.Nj),f.KVO(r._7))},e.\u0275prov=f.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),M})()}}]);