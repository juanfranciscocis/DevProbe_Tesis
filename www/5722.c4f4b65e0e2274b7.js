"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5722],{5722:(F,h,s)=>{s.r(h),s.d(h,{LatencyChooserPageModule:()=>j});var g=s(177),p=s(4341),n=s(7863),u=s(305),l=s(467),e=s(4438),m=s(6241),f=s(385),y=s(8453);function v(o,c){if(1&o){const i=e.RV6();e.j41(0,"ion-item",7),e.bIt("click",function(){const r=e.eBV(i).$implicit,a=e.XpG().$implicit,d=e.XpG();return e.Njj(d.navigateToLatencyTest(a,r))}),e.j41(1,"ion-label"),e.EFF(2),e.k0s(),e.nrm(3,"ion-icon",8),e.k0s()}if(2&o){const i=c.$implicit;e.R7$(2),e.JRh(i)}}function C(o,c){if(1&o&&(e.j41(0,"ion-col",4)(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),e.EFF(4),e.k0s()(),e.j41(5,"ion-card-content")(6,"ion-list"),e.DNE(7,v,4,1,"ion-item",6),e.k0s()()()()),2&o){const i=c.$implicit;e.R7$(4),e.JRh(i.productObjective),e.R7$(3),e.Y8G("ngForOf",i.productSteps)}}const L=[{path:"",component:(()=>{var o;class c{constructor(t,r,a){this.productService=t,this.router=r,this.loadingCtrl=a,this.products=[]}ngOnInit(){}ionViewWillEnter(){var t=this;return(0,l.A)(function*(){yield t.showLoading(),t.getAllProducts(),yield t.hideLoading()})()}getAllProducts(){var t=this;return(0,l.A)(function*(){const r=localStorage.getItem("user");if(!r)return;const d=JSON.parse(r).orgName;t.products=yield t.productService.getProducts(d)})()}doRefresh(t){var r=this;return(0,l.A)(function*(){r.getAllProducts().then(()=>{t.target.complete()})})()}navigateToLatencyTest(t,r){var a=this;return(0,l.A)(function*(){yield a.router.navigate(["/latency-test",{productObjective:t.productObjective,step:r}])})()}showLoading(){var t=this;return(0,l.A)(function*(){yield(yield t.loadingCtrl.create({})).present()})()}hideLoading(){var t=this;return(0,l.A)(function*(){yield t.loadingCtrl.dismiss()})()}}return(o=c).\u0275fac=function(t){return new(t||o)(e.rXU(m.b),e.rXU(u.Ix),e.rXU(n.Xi))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-latency-chooser"]],decls:12,vars:4,consts:[[3,"title"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"lg:m-10","md:m-10"],["size","12","size-md","4","size-lg","4",1,""],["size","12","size-md","4","size-lg","4","class","",4,"ngFor","ngForOf"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["name","arrow-forward","color","primary"]],template:function(t,r){1&t&&(e.nrm(0,"app-header",0),e.j41(1,"ion-content",1)(2,"ion-refresher",2),e.bIt("ionRefresh",function(d){return r.doRefresh(d)}),e.nrm(3,"ion-refresher-content"),e.k0s(),e.j41(4,"ion-grid"),e.nrm(5,"app-title",0),e.j41(6,"ion-row",3)(7,"ion-col",4)(8,"p"),e.EFF(9,"Choose a product and a product step to test the latency of the product step."),e.k0s()()(),e.j41(10,"ion-row",3),e.DNE(11,C,8,2,"ion-col",5),e.k0s()()()),2&t&&(e.Y8G("title","Latency Test Chooser"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(4),e.Y8G("title","Latency Test Chooser"),e.R7$(6),e.Y8G("ngForOf",r.products))},dependencies:[g.Sq,n.b_,n.I9,n.ME,n.tN,n.hU,n.W9,n.lO,n.iq,n.uz,n.he,n.nf,n.To,n.Ki,n.ln,f.l,y.W]}),c})()}];let P=(()=>{var o;class c{}return(o=c).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[u.iI.forChild(L),u.iI]}),c})();var R=s(5553);let j=(()=>{var o;class c{}return(o=c).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[g.MD,p.YN,n.bv,P,R.h]}),c})()}}]);