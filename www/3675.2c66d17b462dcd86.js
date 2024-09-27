"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3675],{5553:(M,d,t)=>{t.d(d,{h:()=>l});var e=t(177),u=t(7863),r=t(4438);let l=(()=>{var i;class n{}return(i=n).\u0275fac=function(c){return new(c||i)},i.\u0275mod=r.$C({type:i}),i.\u0275inj=r.G2t({imports:[e.MD,u.bv]}),n})()},3241:(M,d,t)=>{t.d(d,{p:()=>l});var e=t(4438),u=t(177),r=t(7863);let l=(()=>{var i;class n{constructor(c){this.location=c,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(i=n).\u0275fac=function(c){return new(c||i)(e.rXU(u.aZ))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(c,h){1&c&&(e.j41(0,"ion-header",0)(1,"ion-toolbar"),e.nrm(2,"ion-menu-button",1),e.j41(3,"ion-icon",2),e.bIt("click",function(){return h.goBack()}),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.k0s()()()),2&c&&(e.Y8G("translucent",!0),e.R7$(5),e.JRh(h.title))},dependencies:[r.eU,r.iq,r.MC,r.BC,r.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),n})()},8453:(M,d,t)=>{t.d(d,{W:()=>r});var e=t(4438),u=t(7863);let r=(()=>{var l;class i{constructor(){this.title="Title"}ngOnInit(){}}return(l=i).\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.VBU({type:l,selectors:[["app-title"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"lg:m-10"],["size","12","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"]],template:function(s,c){1&s&&(e.j41(0,"ion-row",0)(1,"ion-col",1)(2,"h1",2),e.EFF(3),e.k0s()()()),2&s&&(e.R7$(3),e.JRh(c.title))},dependencies:[u.hU,u.ln]}),i})()},3675:(M,d,t)=>{t.r(d),t.d(d,{IncidentManagerPageModule:()=>f});var e=t(177),u=t(4341),r=t(7863),l=t(7650),i=t(467),n=t(4438),s=t(8453),c=t(3241);const v=[{path:"",component:(()=>{var a;class g{constructor(o,m,I){this.router=o,this.activatedRoute=m,this.loadingCtrl=I,this.productStep="",this.productObjective="",this.orgName=""}ngOnInit(){}ionViewWillEnter(){var o=this;return(0,i.A)(function*(){yield o.showLoading(),o.getParams(),yield o.hideLoading()})()}getParams(){this.activatedRoute.params.subscribe(m=>{this.productObjective=m.productObjective,this.productStep=m.step});const o=JSON.parse(localStorage.getItem("user"));this.orgName=o.orgName,console.log(this.orgName),console.log(this.productObjective),console.log(this.productStep)}navigateToNewIncident(){var o=this;return(0,i.A)(function*(){yield o.router.navigate(["/new-incident",{productObjective:o.productObjective,step:o.productStep}])})()}showLoading(){var o=this;return(0,i.A)(function*(){yield(yield o.loadingCtrl.create({})).present()})()}hideLoading(){var o=this;return(0,i.A)(function*(){yield o.loadingCtrl.dismiss()})()}}return(a=g).\u0275fac=function(o){return new(o||a)(n.rXU(l.Ix),n.rXU(l.nX),n.rXU(r.Xi))},a.\u0275cmp=n.VBU({type:a,selectors:[["app-incident-manager"]],decls:11,vars:4,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12","size-md","12","size-lg","12",1,""],["color","danger",1,"w-full",3,"click"]],template:function(o,m){1&o&&(n.nrm(0,"app-header-return",0),n.j41(1,"ion-content",1)(2,"ion-grid"),n.nrm(3,"app-title",0),n.j41(4,"ion-row",2)(5,"ion-col",3)(6,"ion-button",4),n.bIt("click",function(){return m.navigateToNewIncident()}),n.EFF(7,"New Incident"),n.k0s()()(),n.nrm(8,"app-title",0),n.j41(9,"ion-row",2),n.nrm(10,"ion-col",3),n.k0s()()()),2&o&&(n.Y8G("title","Incident Manager"),n.R7$(),n.Y8G("fullscreen",!0),n.R7$(2),n.Y8G("title","Incident Manager"),n.R7$(5),n.Y8G("title","Incidents"))},dependencies:[r.Jm,r.hU,r.W9,r.lO,r.ln,s.W,c.p]}),g})()}];let C=(()=>{var a;class g{}return(a=g).\u0275fac=function(o){return new(o||a)},a.\u0275mod=n.$C({type:a}),a.\u0275inj=n.G2t({imports:[l.iI.forChild(v),l.iI]}),g})();var P=t(5553);let f=(()=>{var a;class g{}return(a=g).\u0275fac=function(o){return new(o||a)},a.\u0275mod=n.$C({type:a}),a.\u0275inj=n.G2t({imports:[e.MD,u.YN,r.bv,C,P.h]}),g})()}}]);