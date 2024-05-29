"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[804],{804:(E,p,c)=>{c.r(p),c.d(p,{MyteamPageModule:()=>j});var y=c(177),M=c(4341),m=c(7863),b=c(845),d=c(467),e=c(4438),l=c(4262),C=c(4796);let P=(()=>{var n;class i{constructor(t,r){this.firestore=t,this.authService=r}getTeamByOrganization(t){var r=this;return(0,d.A)(function*(){let a=(0,l.H9)(r.firestore,"teams",t);const h=(yield(0,l.x7)(a)).data();let g=[];for(let u=0;u<h.members.length;u++){a=(0,l.H9)(r.firestore,"users",h.members[u]);const f=(yield(0,l.x7)(a)).data();g.push(f)}return g})()}removeMember(t,r){var a=this;return(0,d.A)(function*(){try{let o=(0,l.H9)(a.firestore,"teams",t);const g=(yield(0,l.x7)(o)).data();let u=g.members.filter(f=>f!==r);return yield(0,l.BN)(o,{name:g.name,members:u}),o=(0,l.H9)(a.firestore,"users",r),yield(0,l.BN)(o,{}),yield a.authService,!0}catch{return!1}})()}addMember(t){var r=this;return(0,d.A)(function*(){try{const a=yield r.authService.addMember(t);if(!a)return!1;const o=(0,l.H9)(r.firestore,"teams",t.orgName),h=(yield(0,l.x7)(o)).data();console.log(h);const g=h;let u=g.members;return u.push(a.uid),console.log(u),yield(0,l.mZ)(o,{name:g.name,members:u}),a.uid}catch{return!1}})()}}return(n=i).\u0275fac=function(t){return new(t||n)(e.KVO(l._7),e.KVO(C.u))},n.\u0275prov=e.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),i})(),w=(()=>{var n;class i{constructor(){this.title="Header Title"}ngOnInit(){}}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.VBU({type:n,selectors:[["app-header"]],inputs:{title:"title"},decls:5,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"]],template:function(t,r){1&t&&(e.j41(0,"ion-header",0)(1,"ion-toolbar"),e.nrm(2,"ion-menu-button",1),e.j41(3,"ion-title"),e.EFF(4),e.k0s()()()),2&t&&(e.Y8G("translucent",!0),e.R7$(4),e.JRh(r.title))},dependencies:[m.eU,m.MC,m.BC,m.ai]}),i})(),T=(()=>{var n;class i{constructor(){this.title="Title"}ngOnInit(){}}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.VBU({type:n,selectors:[["app-title"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"lg:m-10"],["size","12","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"]],template:function(t,r){1&t&&(e.j41(0,"ion-row",0)(1,"ion-col",1)(2,"h1",2),e.EFF(3),e.k0s()()()),2&t&&(e.R7$(3),e.JRh(r.title))},dependencies:[m.hU,m.ln]}),i})();function _(n,i){if(1&n){const s=e.RV6();e.j41(0,"ion-col",3)(1,"div",12)(2,"ion-card-header")(3,"h1",13),e.EFF(4),e.k0s()(),e.j41(5,"ion-card-content",14)(6,"ion-button",15),e.bIt("click",function(){const r=e.eBV(s).$implicit,a=e.XpG();return e.Njj(a.removeMember(r.uid))}),e.EFF(7,"Remove"),e.k0s()()()()}if(2&n){const s=i.$implicit;e.R7$(4),e.JRh(s.name)}}const N=[{path:"",component:(()=>{var n;class i{constructor(t,r,a){this.teamsService=t,this.loadingCtrl=r,this.alertCtrl=a,this.members=[],this.orgName="",this.teamMemberName="",this.teamMemberEmail="",this.teamMemberPassword=""}ngOnInit(){var t=this;return(0,d.A)(function*(){yield t.getTeam()})()}getTeam(){var t=this;return(0,d.A)(function*(){yield t.showLoading();const r=localStorage.getItem("user");if(!r)return;const a=JSON.parse(r),o=yield t.teamsService.getTeamByOrganization(a.orgName);t.orgName=a.orgName,o&&(t.members=o),yield t.hideLoading()})()}removeMember(t){var r=this;return(0,d.A)(function*(){yield r.showLoading(),(yield r.teamsService.removeMember(r.orgName,t))?r.members=r.members.filter(o=>o.uid!==t):yield r.showAlert("There was an error removing the member"),yield r.hideLoading()})()}addMember(){var t=this;return(0,d.A)(function*(){yield t.showLoading();const r={name:t.teamMemberName,email:t.teamMemberEmail,password:t.teamMemberPassword,orgName:t.orgName};if(!r.name||!r.email||!r.password)return yield t.hideLoading(),void(yield t.showAlert("Please fill all the fields"));const a=yield t.teamsService.addMember(r);"string"==typeof a?(r.uid=a,t.members.push(r),t.teamMemberName="",t.teamMemberEmail="",t.teamMemberPassword=""):yield t.showAlert("There was an error adding the member"),yield t.hideLoading()})()}showAlert(t){var r=this;return(0,d.A)(function*(){yield(yield r.alertCtrl.create({header:"Login Failed!",message:t,buttons:["OK"]})).present()})()}showLoading(){var t=this;return(0,d.A)(function*(){yield(yield t.loadingCtrl.create({})).present()})()}hideLoading(){var t=this;return(0,d.A)(function*(){yield t.loadingCtrl.dismiss()})()}}return(n=i).\u0275fac=function(t){return new(t||n)(e.rXU(P),e.rXU(m.Xi),e.rXU(m.hG))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-myteam"]],inputs:{teamMemberName:"teamMemberName",teamMemberEmail:"teamMemberEmail",teamMemberPassword:"teamMemberPassword"},decls:19,vars:7,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10"],["size","6","size-md","4","size-lg","4",1,""],[1,"lg:m-10","md:m-10"],["size","12","size-md","4","size-lg","4",1,""],["label","Team Member Name","placeholder","Enter a name","type","text","labelPlacement","stacked",1,"",3,"ngModelChange","ngModel"],["size","12","size-md","4","size-lg","4"],["label","Team Member Email","placeholder","Enter an email","type","email","labelPlacement","stacked",1,"",3,"ngModelChange","ngModel"],["label","Team Member Password","placeholder","Enter a password for the account","type","password","labelPlacement","stacked",1,"",3,"ngModelChange","ngModel"],["size","12","size-md","12","size-lg","12",1,"flex","flex-row","justify-end"],["color","primary",1,"",3,"click"],[1,"flex","flex-col","h-full","justify-between","bg-gray-600","rounded-2xl"],[1,"text-2xl"],[1,"flex","flex-col"],["color","danger",1,"m-4",3,"click"]],template:function(t,r){1&t&&(e.nrm(0,"app-header",0),e.j41(1,"ion-content",1)(2,"ion-grid"),e.nrm(3,"app-title",0),e.j41(4,"ion-row",2),e.Z7z(5,_,8,1,"ion-col",3,e.fX1),e.k0s(),e.nrm(7,"app-title",0),e.j41(8,"ion-row",4)(9,"ion-col",5)(10,"ion-input",6),e.mxI("ngModelChange",function(o){return e.DH7(r.teamMemberName,o)||(r.teamMemberName=o),o}),e.k0s()(),e.j41(11,"ion-col",7)(12,"ion-input",8),e.mxI("ngModelChange",function(o){return e.DH7(r.teamMemberEmail,o)||(r.teamMemberEmail=o),o}),e.k0s()(),e.j41(13,"ion-col",7)(14,"ion-input",9),e.mxI("ngModelChange",function(o){return e.DH7(r.teamMemberPassword,o)||(r.teamMemberPassword=o),o}),e.k0s()()(),e.j41(15,"ion-row",4)(16,"ion-col",10)(17,"ion-button",11),e.bIt("click",function(){return r.addMember()}),e.EFF(18,"Add Member"),e.k0s()()()()()),2&t&&(e.Y8G("title","My Team"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(2),e.Y8G("title","My Team"),e.R7$(2),e.Dyx(r.members),e.R7$(2),e.Y8G("title","Add Team Member"),e.R7$(3),e.R50("ngModel",r.teamMemberName),e.R7$(2),e.R50("ngModel",r.teamMemberEmail),e.R7$(2),e.R50("ngModel",r.teamMemberPassword))},dependencies:[M.BC,M.vS,m.Jm,m.I9,m.ME,m.hU,m.W9,m.lO,m.$w,m.ln,m.Gw,w,T]}),i})()}];let R=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[b.iI.forChild(N),b.iI]}),i})(),F=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[y.MD,m.bv]}),i})(),j=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[y.MD,M.YN,m.bv,R,F]}),i})()}}]);