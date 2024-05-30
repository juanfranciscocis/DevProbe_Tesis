"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3998],{3998:(F,g,d)=>{d.r(g),d.d(g,{ModelProductPageModule:()=>j});var h=d(177),m=d(4341),r=d(7863),u=d(845),s=d(467),e=d(4438),p=d(6241),P=d(385),f=d(8453);function M(o,i){if(1&o&&(e.j41(0,"ion-item",6)(1,"ion-label"),e.EFF(2),e.k0s()()),2&o){const l=i.$implicit;e.R7$(2),e.JRh(l.productObjective)}}const v=[{path:"",component:(()=>{var o;class i{constructor(t,n,c){this.productService=t,this.alertCtrl=n,this.loadingCtrl=c,this.products=[]}ngOnInit(){this.getProducts()}getProducts(){var t=this;return(0,s.A)(function*(){try{yield t.showLoading();const n=localStorage.getItem("user");if(!n)return;const a=JSON.parse(n).orgName;t.products=yield t.productService.getProducts(a),yield t.hideLoading()}catch(n){console.log(n)}})()}showAlert(t){var n=this;return(0,s.A)(function*(){yield(yield n.alertCtrl.create({header:"Login Failed!",message:t,buttons:["OK"]})).present()})()}showLoading(){var t=this;return(0,s.A)(function*(){yield(yield t.loadingCtrl.create({})).present()})()}hideLoading(){var t=this;return(0,s.A)(function*(){yield t.loadingCtrl.dismiss()})()}doRefresh(t){var n=this;return(0,s.A)(function*(){yield n.getProducts(),t.target.complete()})()}}return(o=i).\u0275fac=function(t){return new(t||o)(e.rXU(p.b),e.rXU(r.hG),e.rXU(r.Xi))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-model-product"]],decls:18,vars:5,consts:[[3,"title"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"lg:m-10"],["size","12"],[1,"bg-white",3,"inset"],["color","dark"],[1,"m-6","lg:m-10","md:m-10"],[1,"flex","flex-row","justify-center","items-center","flex-grow","m-2"],["size","","color","primary","routerLink","/new-product"]],template:function(t,n){1&t&&(e.nrm(0,"app-header",0),e.j41(1,"ion-content",1)(2,"ion-refresher",2),e.bIt("ionRefresh",function(a){return n.doRefresh(a)}),e.nrm(3,"ion-refresher-content"),e.k0s(),e.j41(4,"ion-grid"),e.nrm(5,"app-title",0),e.j41(6,"ion-row",3)(7,"ion-col",4)(8,"ion-list",5),e.Z7z(9,M,3,1,"ion-item",6,e.fX1),e.k0s()()(),e.nrm(11,"app-title",0),e.j41(12,"ion-row",7)(13,"p"),e.EFF(14,'"People use a product to achieve a real-world objective. To help product teams build products and services that facilitate user goals, you need to understand what the product\'s users are trying to accomplish." (Google SRE Workbook,2023)'),e.k0s(),e.j41(15,"div",8)(16,"ion-button",9),e.EFF(17,"Model A New Product"),e.k0s()()()()()),2&t&&(e.Y8G("title","Model The Product"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(4),e.Y8G("title","Products"),e.R7$(3),e.Y8G("inset",!0),e.R7$(),e.Dyx(n.products),e.R7$(2),e.Y8G("title","Model A New Product"))},dependencies:[r.Jm,r.hU,r.W9,r.lO,r.uz,r.he,r.nf,r.To,r.Ki,r.ln,r.N7,u.Wk,P.l,f.W]}),i})()}];let y=(()=>{var o;class i{}return(o=i).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[u.iI.forChild(v),u.iI]}),i})();var R=d(5553);let j=(()=>{var o;class i{}return(o=i).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[h.MD,m.YN,r.bv,y,R.h]}),i})()}}]);