"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4163],{5553:(C,p,n)=>{n.d(p,{h:()=>d});var c=n(177),g=n(7863),r=n(4438);let d=(()=>{var s;class o{}return(s=o).\u0275fac=function(m){return new(m||s)},s.\u0275mod=r.$C({type:s}),s.\u0275inj=r.G2t({imports:[c.MD,g.bv]}),o})()},8453:(C,p,n)=>{n.d(p,{W:()=>r});var c=n(4438),g=n(7863);let r=(()=>{var d;class s{constructor(){this.title="Title"}ngOnInit(){}}return(d=s).\u0275fac=function(u){return new(u||d)},d.\u0275cmp=c.VBU({type:d,selectors:[["app-title"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"lg:m-10"],["size","12","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"]],template:function(u,m){1&u&&(c.j41(0,"ion-row",0)(1,"ion-col",1)(2,"h1",2),c.EFF(3),c.k0s()()()),2&u&&(c.R7$(3),c.JRh(m.title))},dependencies:[g.hU,g.ln]}),s})()},4163:(C,p,n)=>{n.r(p),n.d(p,{LoadTestChooserPageModule:()=>R});var c=n(177),g=n(4341),r=n(7863),d=n(7650),s=n(467),o=n(4438),u=n(6241),m=n(385),T=n(8453);function v(e,l){if(1&e){const a=o.RV6();o.j41(0,"ion-item",7),o.bIt("click",function(){const i=o.eBV(a).$implicit,h=o.XpG().$implicit,f=o.XpG();return o.Njj(f.navigateToLoadTest(h,i))}),o.j41(1,"ion-label"),o.EFF(2),o.k0s(),o.nrm(3,"ion-icon",8),o.k0s()}if(2&e){const a=l.$implicit;o.R7$(2),o.JRh(a)}}function P(e,l){if(1&e&&(o.j41(0,"ion-col",4)(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),o.EFF(4),o.k0s()(),o.j41(5,"ion-card-content")(6,"ion-list"),o.DNE(7,v,4,1,"ion-item",6),o.k0s()()()()),2&e){const a=l.$implicit;o.R7$(4),o.JRh(a.productObjective),o.R7$(3),o.Y8G("ngForOf",a.productSteps)}}const L=[{path:"",component:(()=>{var e;class l{constructor(t,i,h){this.productService=t,this.router=i,this.loadingCtrl=h,this.products=[]}ngOnInit(){}ionViewWillEnter(){var t=this;return(0,s.A)(function*(){yield t.showLoading(),t.getAllProducts(),yield t.hideLoading()})()}getAllProducts(){var t=this;return(0,s.A)(function*(){const i=localStorage.getItem("user");if(!i)return;const f=JSON.parse(i).orgName;t.products=yield t.productService.getProducts(f)})()}doRefresh(t){var i=this;return(0,s.A)(function*(){i.getAllProducts().then(()=>{t.target.complete()})})()}navigateToLoadTest(t,i){var h=this;return(0,s.A)(function*(){yield h.router.navigate(["/load-test",{productObjective:t.productObjective,step:i}])})()}showLoading(){var t=this;return(0,s.A)(function*(){yield(yield t.loadingCtrl.create({})).present()})()}hideLoading(){var t=this;return(0,s.A)(function*(){yield t.loadingCtrl.dismiss()})()}}return(e=l).\u0275fac=function(t){return new(t||e)(o.rXU(u.b),o.rXU(d.Ix),o.rXU(r.Xi))},e.\u0275cmp=o.VBU({type:e,selectors:[["app-load-test-chooser"]],decls:12,vars:4,consts:[[3,"title"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"lg:m-10","md:m-10"],["size","12","size-md","4","size-lg","4",1,""],["size","12","size-md","4","size-lg","4","class","",4,"ngFor","ngForOf"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["name","arrow-forward","color","primary"]],template:function(t,i){1&t&&(o.nrm(0,"app-header",0),o.j41(1,"ion-content",1)(2,"ion-refresher",2),o.bIt("ionRefresh",function(f){return i.doRefresh(f)}),o.nrm(3,"ion-refresher-content"),o.k0s(),o.j41(4,"ion-grid"),o.nrm(5,"app-title",0),o.j41(6,"ion-row",3)(7,"ion-col",4)(8,"p"),o.EFF(9,"Choose a product and a product step to load test the product step."),o.k0s()()(),o.j41(10,"ion-row",3),o.DNE(11,P,8,2,"ion-col",5),o.k0s()()()),2&t&&(o.Y8G("title","Load Test Chooser"),o.R7$(),o.Y8G("fullscreen",!0),o.R7$(4),o.Y8G("title","Load Test Chooser"),o.R7$(6),o.Y8G("ngForOf",i.products))},dependencies:[c.Sq,r.b_,r.I9,r.ME,r.tN,r.hU,r.W9,r.lO,r.iq,r.uz,r.he,r.nf,r.To,r.Ki,r.ln,m.l,T.W]}),l})()}];let _=(()=>{var e;class l{}return(e=l).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[d.iI.forChild(L),d.iI]}),l})();var M=n(5553);let R=(()=>{var e;class l{}return(e=l).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[c.MD,g.YN,r.bv,_,M.h]}),l})()}}]);