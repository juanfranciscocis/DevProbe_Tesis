"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1062],{5553:(y,p,i)=>{i.d(p,{h:()=>d});var c=i(177),T=i(7863),o=i(4438);let d=(()=>{var l;class e{}return(l=e).\u0275fac=function(m){return new(m||l)},l.\u0275mod=o.$C({type:l}),l.\u0275inj=o.G2t({imports:[c.MD,T.bv]}),e})()},3241:(y,p,i)=>{i.d(p,{p:()=>d});var c=i(4438),T=i(177),o=i(7863);let d=(()=>{var l;class e{constructor(m){this.location=m,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(l=e).\u0275fac=function(m){return new(m||l)(c.rXU(T.aZ))},l.\u0275cmp=c.VBU({type:l,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(m,g){1&m&&(c.j41(0,"ion-header",0)(1,"ion-toolbar"),c.nrm(2,"ion-menu-button",1),c.j41(3,"ion-icon",2),c.bIt("click",function(){return g.goBack()}),c.k0s(),c.j41(4,"ion-title"),c.EFF(5),c.k0s()()()),2&m&&(c.Y8G("translucent",!0),c.R7$(5),c.JRh(g.title))},dependencies:[o.eU,o.iq,o.MC,o.BC,o.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),e})()},1062:(y,p,i)=>{i.r(p),i.d(p,{ExecuteSystemTestPageModule:()=>x});var c=i(177),T=i(4341),o=i(7863),d=i(7650),l=i(467),e=i(4438),_=i(9274),m=i(8453),g=i(3241);function h(s,u){return this.systemTest.title}function f(s,u){if(1&s){const r=e.RV6();e.j41(0,"ion-icon",9),e.bIt("click",function(){e.eBV(r);const n=e.XpG().$implicit,a=e.XpG();return e.Njj(a.okClick(n.stepTitle))}),e.k0s(),e.j41(1,"ion-icon",10),e.bIt("click",function(){e.eBV(r);const n=e.XpG().$implicit,a=e.XpG();return e.Njj(a.badClick(n.stepTitle))}),e.k0s()}}function E(s,u){if(1&s){const r=e.RV6();e.j41(0,"ion-icon",11),e.bIt("click",function(){e.eBV(r);const n=e.XpG().$implicit,a=e.XpG();return e.Njj(a.okClick(n.stepTitle))}),e.k0s(),e.j41(1,"ion-icon",12),e.bIt("click",function(){e.eBV(r);const n=e.XpG().$implicit,a=e.XpG();return e.Njj(a.badClick(n.stepTitle))}),e.k0s()}}function v(s,u){if(1&s&&(e.j41(0,"ion-item")(1,"ion-label")(2,"h1"),e.EFF(3),e.k0s(),e.j41(4,"p"),e.EFF(5),e.k0s()(),e.DNE(6,f,2,0)(7,E,2,0),e.k0s()),2&s){const r=u.$implicit;e.R7$(3),e.JRh(r.stepTitle),e.R7$(2),e.JRh(r.expectedResults),e.R7$(),e.vxM(6,r.isComplete?6:-1),e.R7$(),e.vxM(7,r.isComplete?-1:7)}}const C=[{path:"",component:(()=>{var s;class u{constructor(t,n,a){this.activatedRoute=t,this.systemTestService=n,this.loadingCtrl=a,this.productObjective="",this.productStep="",this.testTitle="",this.systemTest={title:"",description:"",steps:[],type:"system-test",state:!1},this.orgName=""}ngOnInit(){this.getProductFromParams(),this.getSystemTest()}ionViewWillEnter(){this.getProductFromParams(),this.getSystemTest()}getProductFromParams(){this.activatedRoute.params.subscribe(t=>{this.productObjective=t.productObjective,this.productStep=t.step,this.testTitle=t.testTitle}),console.log(this.productObjective),console.log(this.productStep),console.log(this.testTitle)}getSystemTest(){var t=this;return(0,l.A)(function*(){const n=localStorage.getItem("user");if(!n)return;const a=JSON.parse(n);t.orgName=a.orgName,yield t.systemTestService.getSystemTest(t.orgName,t.productObjective,t.productStep).then(k=>{t.systemTest=k.find(R=>R.title===t.testTitle)})})()}okClick(t){this.systemTest.steps.find(n=>n.stepTitle===t).isComplete=!0,console.log(this.systemTest)}badClick(t){this.systemTest.steps.find(n=>n.stepTitle===t).isComplete=!1,console.log(this.systemTest)}save(){var t=this;return(0,l.A)(function*(){yield t.showLoading();let n=!0;t.systemTest.steps.forEach(a=>{a.isComplete||(n=!1)}),t.systemTest.state=n,yield t.systemTestService.saveSystemTest(t.orgName,t.productObjective,t.productStep,t.systemTest),yield t.hideLoading()})()}showLoading(){var t=this;return(0,l.A)(function*(){yield(yield t.loadingCtrl.create({})).present()})()}hideLoading(){var t=this;return(0,l.A)(function*(){yield t.loadingCtrl.dismiss()})()}}return(s=u).\u0275fac=function(t){return new(t||s)(e.rXU(d.nX),e.rXU(_.h),e.rXU(o.Xi))},s.\u0275cmp=e.VBU({type:s,selectors:[["app-execute-system-test"]],decls:21,vars:5,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12","size-md","12","size-lg","12",1,""],[1,"min-h-full","flex","flex-col","p-8"],[1,"p-2"],[1,"text-4xl","text-white","font-bold"],[1,"text-xl"],["color","primary","expand","block","fill","outline",3,"click"],["aria-hidden","true","name","checkmark-circle","slot","end","color","success",3,"click"],["aria-hidden","true","name","close-circle","slot","end",3,"click"],["aria-hidden","true","name","checkmark-circle","slot","end",3,"click"],["aria-hidden","true","name","close-circle","slot","end","color","danger",3,"click"]],template:function(t,n){1&t&&(e.nrm(0,"app-header-return",0),e.j41(1,"ion-content",1)(2,"ion-grid"),e.nrm(3,"app-title",0),e.j41(4,"ion-row",2)(5,"ion-col",3)(6,"ion-card",4)(7,"ion-card-title",5)(8,"ion-label",6),e.EFF(9),e.k0s()(),e.nrm(10,"br"),e.j41(11,"ion-card-title",5)(12,"ion-label",7),e.EFF(13),e.k0s()(),e.nrm(14,"br"),e.j41(15,"ion-list"),e.Z7z(16,v,8,4,"ion-item",null,h,!0),e.k0s(),e.nrm(18,"br"),e.j41(19,"ion-button",8),e.bIt("click",function(){return n.save()}),e.EFF(20,"Save"),e.k0s()()()()()()),2&t&&(e.Y8G("title","Execute System Test"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(2),e.Y8G("title","Execute System Test"),e.R7$(6),e.JRh(n.systemTest.title),e.R7$(4),e.JRh(n.systemTest.description),e.R7$(3),e.Dyx(n.systemTest.steps))},dependencies:[o.Jm,o.b_,o.tN,o.hU,o.W9,o.lO,o.iq,o.uz,o.he,o.nf,o.ln,m.W,g.p]}),u})()}];let P=(()=>{var s;class u{}return(s=u).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[d.iI.forChild(C),d.iI]}),u})();var S=i(5553);let x=(()=>{var s;class u{}return(s=u).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[c.MD,T.YN,o.bv,P,S.h]}),u})()}}]);