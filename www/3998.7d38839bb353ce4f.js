"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3998],{5553:(f,g,n)=>{n.d(g,{h:()=>s});var p=n(177),h=n(7863),i=n(4438);let s=(()=>{var d;class t{}return(d=t).\u0275fac=function(P){return new(P||d)},d.\u0275mod=i.$C({type:d}),d.\u0275inj=i.G2t({imports:[p.MD,h.bv]}),t})()},3998:(f,g,n)=>{n.r(g),n.d(g,{ModelProductPageModule:()=>j});var p=n(177),h=n(4341),i=n(7863),s=n(305),d=n(467),t=n(4438),m=n(6241),P=n(385),M=n(8453);function v(o,l){if(1&o){const c=t.RV6();t.j41(0,"ion-item",10),t.bIt("click",function(){const r=t.eBV(c).$implicit,u=t.XpG();return t.Njj(u.viewProduct(r))}),t.j41(1,"ion-label"),t.EFF(2),t.k0s()()}if(2&o){const c=l.$implicit;t.R7$(2),t.JRh(c.productObjective)}}const y=[{path:"",component:(()=>{var o;class l{constructor(e,r,u,a){this.productService=e,this.alertCtrl=r,this.loadingCtrl=u,this.router=a,this.products=[]}ngOnInit(){return(0,d.A)(function*(){})()}ionViewWillEnter(){var e=this;return(0,d.A)(function*(){yield e.getProducts()})()}getProducts(){var e=this;return(0,d.A)(function*(){try{yield e.showLoading();const r=localStorage.getItem("user");if(!r)return;const a=JSON.parse(r).orgName;e.products=yield e.productService.getProducts(a),0===e.products.length&&e.products.push({productObjective:"No products found"}),yield e.hideLoading()}catch(r){console.log(r)}})()}viewProduct(e){var r=this;return(0,d.A)(function*(){yield r.router.navigate(["/view-product"],{queryParams:{product:JSON.stringify(e)}})})()}showAlert(e){var r=this;return(0,d.A)(function*(){yield(yield r.alertCtrl.create({header:"Login Failed!",message:e,buttons:["OK"]})).present()})()}showLoading(){var e=this;return(0,d.A)(function*(){yield(yield e.loadingCtrl.create({})).present()})()}hideLoading(){var e=this;return(0,d.A)(function*(){yield e.loadingCtrl.dismiss()})()}doRefresh(e){var r=this;return(0,d.A)(function*(){yield r.getProducts(),e.target.complete()})()}}return(o=l).\u0275fac=function(e){return new(e||o)(t.rXU(m.b),t.rXU(i.hG),t.rXU(i.Xi),t.rXU(s.Ix))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-model-product"]],decls:18,vars:5,consts:[[3,"title"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"lg:m-10"],["size","12"],[1,"bg-white",3,"inset"],["color","dark"],[1,"m-6","lg:m-10","md:m-10"],[1,"flex","flex-row","justify-center","items-center","flex-grow","m-2"],["size","","color","primary","routerLink","/new-product"],["color","dark",3,"click"]],template:function(e,r){1&e&&(t.nrm(0,"app-header",0),t.j41(1,"ion-content",1)(2,"ion-refresher",2),t.bIt("ionRefresh",function(a){return r.doRefresh(a)}),t.nrm(3,"ion-refresher-content"),t.k0s(),t.j41(4,"ion-grid"),t.nrm(5,"app-title",0),t.j41(6,"ion-row",3)(7,"ion-col",4)(8,"ion-list",5),t.Z7z(9,v,3,1,"ion-item",6,t.fX1),t.k0s()()(),t.nrm(11,"app-title",0),t.j41(12,"ion-row",7)(13,"p"),t.EFF(14,'"People use a product to achieve a real-world objective. To help product teams build products and services that facilitate user goals, you need to understand what the product\'s users are trying to accomplish." (Google SRE Workbook,2023)'),t.k0s(),t.j41(15,"div",8)(16,"ion-button",9),t.EFF(17,"Model A New Product"),t.k0s()()()()()),2&e&&(t.Y8G("title","Model The Product"),t.R7$(),t.Y8G("fullscreen",!0),t.R7$(4),t.Y8G("title","Products"),t.R7$(3),t.Y8G("inset",!0),t.R7$(),t.Dyx(r.products),t.R7$(2),t.Y8G("title","Model A New Product"))},dependencies:[i.Jm,i.hU,i.W9,i.lO,i.uz,i.he,i.nf,i.To,i.Ki,i.ln,i.N7,s.Wk,P.l,M.W]}),l})()}];let R=(()=>{var o;class l{}return(o=l).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[s.iI.forChild(y),s.iI]}),l})();var C=n(5553);let j=(()=>{var o;class l{}return(o=l).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[p.MD,h.YN,i.bv,R,C.h]}),l})()}}]);