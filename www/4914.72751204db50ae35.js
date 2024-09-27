"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4914],{5553:(f,p,r)=>{r.d(p,{h:()=>s});var d=r(177),m=r(7863),n=r(4438);let s=(()=>{var i;class t{}return(i=t).\u0275fac=function(h){return new(h||i)},i.\u0275mod=n.$C({type:i}),i.\u0275inj=n.G2t({imports:[d.MD,m.bv]}),t})()},8453:(f,p,r)=>{r.d(p,{W:()=>n});var d=r(4438),m=r(7863);let n=(()=>{var s;class i{constructor(){this.title="Title"}ngOnInit(){}}return(s=i).\u0275fac=function(a){return new(a||s)},s.\u0275cmp=d.VBU({type:s,selectors:[["app-title"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"lg:m-10"],["size","12","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"]],template:function(a,h){1&a&&(d.j41(0,"ion-row",0)(1,"ion-col",1)(2,"h1",2),d.EFF(3),d.k0s()()()),2&a&&(d.R7$(3),d.JRh(h.title))},dependencies:[m.hU,m.ln]}),i})()},4914:(f,p,r)=>{r.r(p),r.d(p,{ModelProductPageModule:()=>E});var d=r(177),m=r(4341),n=r(7863),s=r(7650),i=r(467),t=r(4438),a=r(6241),h=r(385),M=r(8453);function v(o,c){if(1&o){const u=t.RV6();t.j41(0,"ion-item",10),t.bIt("click",function(){const l=t.eBV(u).$implicit,g=t.XpG();return t.Njj(g.viewProduct(l))}),t.j41(1,"ion-label"),t.EFF(2),t.k0s()()}if(2&o){const u=c.$implicit;t.R7$(2),t.JRh(u.productObjective)}}const y=[{path:"",component:(()=>{var o;class c{constructor(e,l,g,P){this.productService=e,this.alertCtrl=l,this.loadingCtrl=g,this.router=P,this.products=[]}ngOnInit(){return(0,i.A)(function*(){})()}ionViewWillEnter(){var e=this;return(0,i.A)(function*(){yield e.getProducts()})()}getProducts(){var e=this;return(0,i.A)(function*(){try{yield e.showLoading();const l=localStorage.getItem("user");if(!l)return;const P=JSON.parse(l).orgName;e.products=yield e.productService.getProducts(P),0===e.products.length&&e.products.push({productObjective:"No products found"}),yield e.hideLoading()}catch(l){console.log(l)}})()}viewProduct(e){var l=this;return(0,i.A)(function*(){yield l.router.navigate(["/view-product"],{queryParams:{product:JSON.stringify(e)}})})()}showAlert(e){var l=this;return(0,i.A)(function*(){yield(yield l.alertCtrl.create({header:"Login Failed!",message:e,buttons:["OK"]})).present()})()}showLoading(){var e=this;return(0,i.A)(function*(){yield(yield e.loadingCtrl.create({})).present()})()}hideLoading(){var e=this;return(0,i.A)(function*(){yield e.loadingCtrl.dismiss()})()}doRefresh(e){var l=this;return(0,i.A)(function*(){yield l.getProducts(),e.target.complete()})()}}return(o=c).\u0275fac=function(e){return new(e||o)(t.rXU(a.b),t.rXU(n.hG),t.rXU(n.Xi),t.rXU(s.Ix))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-model-product"]],decls:18,vars:5,consts:[[3,"title"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"lg:m-10"],["size","12"],[1,"bg-white",3,"inset"],["color","dark"],[1,"m-6","lg:m-10","md:m-10"],[1,"flex","flex-row","justify-center","items-center","flex-grow","m-2"],["size","","color","primary","routerLink","/new-product"],["color","dark",3,"click"]],template:function(e,l){1&e&&(t.nrm(0,"app-header",0),t.j41(1,"ion-content",1)(2,"ion-refresher",2),t.bIt("ionRefresh",function(P){return l.doRefresh(P)}),t.nrm(3,"ion-refresher-content"),t.k0s(),t.j41(4,"ion-grid"),t.nrm(5,"app-title",0),t.j41(6,"ion-row",3)(7,"ion-col",4)(8,"ion-list",5),t.Z7z(9,v,3,1,"ion-item",6,t.fX1),t.k0s()()(),t.nrm(11,"app-title",0),t.j41(12,"ion-row",7)(13,"p"),t.EFF(14,'"People use a product to achieve a real-world objective. To help product teams build products and services that facilitate user goals, you need to understand what the product\'s users are trying to accomplish." (Google SRE Workbook,2023)'),t.k0s(),t.j41(15,"div",8)(16,"ion-button",9),t.EFF(17,"Model A New Product"),t.k0s()()()()()),2&e&&(t.Y8G("title","Model The Product"),t.R7$(),t.Y8G("fullscreen",!0),t.R7$(4),t.Y8G("title","Products"),t.R7$(3),t.Y8G("inset",!0),t.R7$(),t.Dyx(l.products),t.R7$(2),t.Y8G("title","Model A New Product"))},dependencies:[n.Jm,n.hU,n.W9,n.lO,n.uz,n.he,n.nf,n.To,n.Ki,n.ln,n.N7,s.Wk,h.l,M.W]}),c})()}];let C=(()=>{var o;class c{}return(o=c).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[s.iI.forChild(y),s.iI]}),c})();var R=r(5553);let E=(()=>{var o;class c{}return(o=c).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[d.MD,m.YN,n.bv,C,R.h]}),c})()}}]);