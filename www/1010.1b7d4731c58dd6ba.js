"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1010],{5553:(y,p,i)=>{i.d(p,{h:()=>d});var c=i(177),T=i(7863),o=i(4438);let d=(()=>{var l;class t{}return(l=t).\u0275fac=function(m){return new(m||l)},l.\u0275mod=o.$C({type:l}),l.\u0275inj=o.G2t({imports:[c.MD,T.bv]}),t})()},3241:(y,p,i)=>{i.d(p,{p:()=>d});var c=i(4438),T=i(177),o=i(7863);let d=(()=>{var l;class t{constructor(m){this.location=m,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(l=t).\u0275fac=function(m){return new(m||l)(c.rXU(T.aZ))},l.\u0275cmp=c.VBU({type:l,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(m,g){1&m&&(c.j41(0,"ion-header",0)(1,"ion-toolbar"),c.nrm(2,"ion-menu-button",1),c.j41(3,"ion-icon",2),c.bIt("click",function(){return g.goBack()}),c.k0s(),c.j41(4,"ion-title"),c.EFF(5),c.k0s()()()),2&m&&(c.Y8G("translucent",!0),c.R7$(5),c.JRh(g.title))},dependencies:[o.eU,o.iq,o.MC,o.BC,o.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),t})()},1010:(y,p,i)=>{i.r(p),i.d(p,{ExecuteSystemTestPageModule:()=>k});var c=i(177),T=i(4341),o=i(7863),d=i(7650),l=i(467),t=i(4438),_=i(147),m=i(8453),g=i(3241);function h(s,u){return this.systemTest.title}function f(s,u){if(1&s){const r=t.RV6();t.j41(0,"ion-icon",9),t.bIt("click",function(){t.eBV(r);const n=t.XpG().$implicit,a=t.XpG();return t.Njj(a.okClick(n.stepTitle))}),t.k0s(),t.j41(1,"ion-icon",10),t.bIt("click",function(){t.eBV(r);const n=t.XpG().$implicit,a=t.XpG();return t.Njj(a.badClick(n.stepTitle))}),t.k0s()}}function E(s,u){if(1&s){const r=t.RV6();t.j41(0,"ion-icon",11),t.bIt("click",function(){t.eBV(r);const n=t.XpG().$implicit,a=t.XpG();return t.Njj(a.okClick(n.stepTitle))}),t.k0s(),t.j41(1,"ion-icon",12),t.bIt("click",function(){t.eBV(r);const n=t.XpG().$implicit,a=t.XpG();return t.Njj(a.badClick(n.stepTitle))}),t.k0s()}}function v(s,u){if(1&s&&(t.j41(0,"ion-item")(1,"ion-label")(2,"h1"),t.EFF(3),t.k0s(),t.j41(4,"p"),t.EFF(5),t.k0s()(),t.DNE(6,f,2,0)(7,E,2,0),t.k0s()),2&s){const r=u.$implicit;t.R7$(3),t.JRh(r.stepTitle),t.R7$(2),t.JRh(r.expectedResults),t.R7$(),t.vxM(6,r.isComplete?6:-1),t.R7$(),t.vxM(7,r.isComplete?-1:7)}}const C=[{path:"",component:(()=>{var s;class u{constructor(e,n,a){this.activatedRoute=e,this.systemTestService=n,this.loadingCtrl=a,this.productObjective="",this.productStep="",this.testTitle="",this.systemTest={title:"",description:"",steps:[],type:"system-test",state:!1},this.orgName=""}ngOnInit(){this.getProductFromParams(),this.getSystemTest()}ionViewWillEnter(){this.getProductFromParams(),this.getSystemTest()}getProductFromParams(){this.activatedRoute.params.subscribe(e=>{this.productObjective=e.productObjective,this.productStep=e.step,this.testTitle=e.testTitle}),console.log(this.productObjective),console.log(this.productStep),console.log(this.testTitle)}getSystemTest(){var e=this;return(0,l.A)(function*(){const n=localStorage.getItem("user");if(!n)return;const a=JSON.parse(n);e.orgName=a.orgName,yield e.systemTestService.getSystemTest(e.orgName,e.productObjective,e.productStep).then(x=>{e.systemTest=x.find(R=>R.title===e.testTitle)})})()}okClick(e){this.systemTest.steps.find(n=>n.stepTitle===e).isComplete=!0,console.log(this.systemTest)}badClick(e){this.systemTest.steps.find(n=>n.stepTitle===e).isComplete=!1,console.log(this.systemTest)}save(){var e=this;return(0,l.A)(function*(){yield e.showLoading();let n=!0;e.systemTest.steps.forEach(a=>{a.isComplete||(n=!1)}),e.systemTest.state=n,yield e.systemTestService.saveSystemTest(e.orgName,e.productObjective,e.productStep,e.systemTest),yield e.hideLoading(),window.history.back()})()}showLoading(){var e=this;return(0,l.A)(function*(){yield(yield e.loadingCtrl.create({})).present()})()}hideLoading(){var e=this;return(0,l.A)(function*(){yield e.loadingCtrl.dismiss()})()}}return(s=u).\u0275fac=function(e){return new(e||s)(t.rXU(d.nX),t.rXU(_.h),t.rXU(o.Xi))},s.\u0275cmp=t.VBU({type:s,selectors:[["app-execute-system-test"]],decls:21,vars:5,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12","size-md","12","size-lg","12",1,""],[1,"min-h-full","flex","flex-col","p-8"],[1,"p-2"],[1,"text-4xl","text-white","font-bold"],[1,"text-xl"],["color","primary","expand","block","fill","outline",3,"click"],["aria-hidden","true","name","checkmark-circle","slot","end","color","success",3,"click"],["aria-hidden","true","name","close-circle","slot","end",3,"click"],["aria-hidden","true","name","checkmark-circle","slot","end",3,"click"],["aria-hidden","true","name","close-circle","slot","end","color","danger",3,"click"]],template:function(e,n){1&e&&(t.nrm(0,"app-header-return",0),t.j41(1,"ion-content",1)(2,"ion-grid"),t.nrm(3,"app-title",0),t.j41(4,"ion-row",2)(5,"ion-col",3)(6,"ion-card",4)(7,"ion-card-title",5)(8,"ion-label",6),t.EFF(9),t.k0s()(),t.nrm(10,"br"),t.j41(11,"ion-card-title",5)(12,"ion-label",7),t.EFF(13),t.k0s()(),t.nrm(14,"br"),t.j41(15,"ion-list"),t.Z7z(16,v,8,4,"ion-item",null,h,!0),t.k0s(),t.nrm(18,"br"),t.j41(19,"ion-button",8),t.bIt("click",function(){return n.save()}),t.EFF(20,"Save"),t.k0s()()()()()()),2&e&&(t.Y8G("title","Execute System Test"),t.R7$(),t.Y8G("fullscreen",!0),t.R7$(2),t.Y8G("title","Execute System Test"),t.R7$(6),t.JRh(n.systemTest.title),t.R7$(4),t.JRh(n.systemTest.description),t.R7$(3),t.Dyx(n.systemTest.steps))},dependencies:[o.Jm,o.b_,o.tN,o.hU,o.W9,o.lO,o.iq,o.uz,o.he,o.nf,o.ln,m.W,g.p]}),u})()}];let P=(()=>{var s;class u{}return(s=u).\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.$C({type:s}),s.\u0275inj=t.G2t({imports:[d.iI.forChild(C),d.iI]}),u})();var S=i(5553);let k=(()=>{var s;class u{}return(s=u).\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.$C({type:s}),s.\u0275inj=t.G2t({imports:[c.MD,T.YN,o.bv,P,S.h]}),u})()}}]);