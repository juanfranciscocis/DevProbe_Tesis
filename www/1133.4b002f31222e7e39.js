"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1133],{5553:(M,m,o)=>{o.d(m,{h:()=>d});var l=o(177),p=o(7863),i=o(4438);let d=(()=>{var r;class n{}return(r=n).\u0275fac=function(h){return new(h||r)},r.\u0275mod=i.$C({type:r}),r.\u0275inj=i.G2t({imports:[l.MD,p.bv]}),n})()},8453:(M,m,o)=>{o.d(m,{W:()=>i});var l=o(4438),p=o(7863);let i=(()=>{var d;class r{constructor(){this.title="Title"}ngOnInit(){}}return(d=r).\u0275fac=function(g){return new(g||d)},d.\u0275cmp=l.VBU({type:d,selectors:[["app-title"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"lg:m-10"],["size","12","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"]],template:function(g,h){1&g&&(l.j41(0,"ion-row",0)(1,"ion-col",1)(2,"h1",2),l.EFF(3),l.k0s()()()),2&g&&(l.R7$(3),l.JRh(h.title))},dependencies:[p.hU,p.ln]}),r})()},1133:(M,m,o)=>{o.r(m),o.d(m,{IncidentManagerChooserPageModule:()=>E});var l=o(177),p=o(4341),i=o(7863),d=o(7650),r=o(467),n=o(4438),g=o(6241),h=o(385),C=o(8453);function f(t,c){if(1&t){const a=n.RV6();n.j41(0,"ion-item",6),n.bIt("click",function(){const s=n.eBV(a).$implicit,u=n.XpG().$implicit,O=n.XpG();return n.Njj(O.navigateToLoadTest(u,s))}),n.j41(1,"ion-label"),n.EFF(2),n.k0s(),n.nrm(3,"ion-icon",7),n.k0s()}if(2&t){const a=c.$implicit;n.R7$(2),n.JRh(a)}}function v(t,c){if(1&t&&(n.j41(0,"ion-col",3)(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),n.EFF(4),n.k0s()(),n.j41(5,"ion-card-content")(6,"ion-list"),n.DNE(7,f,4,1,"ion-item",5),n.k0s()()()()),2&t){const a=c.$implicit;n.R7$(4),n.JRh(a.productObjective),n.R7$(3),n.Y8G("ngForOf",a.productSteps)}}const I=[{path:"",component:(()=>{var t;class c{constructor(e,s,u){this.productService=e,this.router=s,this.loadingCtrl=u,this.products=[],this.orgName=""}ngOnInit(){}ionViewWillEnter(){var e=this;return(0,r.A)(function*(){yield e.showLoading(),e.getAllProducts(),yield e.hideLoading()})()}getAllProducts(){var e=this;return(0,r.A)(function*(){const s=localStorage.getItem("user");if(!s)return;const u=JSON.parse(s);e.orgName=u.orgName,e.products=yield e.productService.getProducts(e.orgName)})()}doRefresh(e){var s=this;return(0,r.A)(function*(){s.getAllProducts().then(()=>{e.target.complete()})})()}navigateToLoadTest(e,s){var u=this;return(0,r.A)(function*(){yield u.router.navigate(["/incident-manager",{orgName:u.orgName,productObjective:e.productObjective,step:s}])})()}showLoading(){var e=this;return(0,r.A)(function*(){yield(yield e.loadingCtrl.create({})).present()})()}hideLoading(){var e=this;return(0,r.A)(function*(){yield e.loadingCtrl.dismiss()})()}}return(t=c).\u0275fac=function(e){return new(e||t)(n.rXU(g.b),n.rXU(d.Ix),n.rXU(i.Xi))},t.\u0275cmp=n.VBU({type:t,selectors:[["app-incident-manager-chooser"]],decls:10,vars:4,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12","size-md","4","size-lg","4",1,""],["size","12","size-md","4","size-lg","4","class","",4,"ngFor","ngForOf"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["name","arrow-forward","color","primary"]],template:function(e,s){1&e&&(n.nrm(0,"app-header",0),n.j41(1,"ion-content",1)(2,"ion-grid"),n.nrm(3,"app-title",0),n.j41(4,"ion-row",2)(5,"ion-col",3)(6,"p"),n.EFF(7,"Choose a product and a product step to create an incident."),n.k0s()()(),n.j41(8,"ion-row",2),n.DNE(9,v,8,2,"ion-col",4),n.k0s()()()),2&e&&(n.Y8G("title","Incident Manager Chooser"),n.R7$(),n.Y8G("fullscreen",!0),n.R7$(2),n.Y8G("title","Incident Manager Chooser"),n.R7$(6),n.Y8G("ngForOf",s.products))},dependencies:[l.Sq,i.b_,i.I9,i.ME,i.tN,i.hU,i.W9,i.lO,i.iq,i.uz,i.he,i.nf,i.ln,h.l,C.W]}),c})()}];let P=(()=>{var t;class c{}return(t=c).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[d.iI.forChild(I),d.iI]}),c})();var _=o(5553);let E=(()=>{var t;class c{}return(t=c).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[l.MD,p.YN,i.bv,P,_.h]}),c})()}}]);