"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7715],{5553:(h,u,s)=>{s.d(u,{h:()=>m});var i=s(177),p=s(7863),o=s(4438);let m=(()=>{var r;class e{}return(r=e).\u0275fac=function(c){return new(c||r)},r.\u0275mod=o.$C({type:r}),r.\u0275inj=o.G2t({imports:[i.MD,p.bv]}),e})()},3241:(h,u,s)=>{s.d(u,{p:()=>m});var i=s(4438),p=s(177),o=s(7863);let m=(()=>{var r;class e{constructor(c){this.location=c,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(r=e).\u0275fac=function(c){return new(c||r)(i.rXU(p.aZ))},r.\u0275cmp=i.VBU({type:r,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(c,T){1&c&&(i.j41(0,"ion-header",0)(1,"ion-toolbar"),i.nrm(2,"ion-menu-button",1),i.j41(3,"ion-icon",2),i.bIt("click",function(){return T.goBack()}),i.k0s(),i.j41(4,"ion-title"),i.EFF(5),i.k0s()()()),2&c&&(i.Y8G("translucent",!0),i.R7$(5),i.JRh(T.title))},dependencies:[o.eU,o.iq,o.MC,o.BC,o.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),e})()},7715:(h,u,s)=>{s.r(u),s.d(u,{ViewSystemTestPageModule:()=>C});var i=s(177),p=s(4341),o=s(7863),m=s(7650),r=s(467),e=s(4438),d=s(9274),c=s(8453),T=s(3241);function y(n,a){return this.systemTest.title}function f(n,a){1&n&&e.nrm(0,"ion-icon",8)(1,"ion-icon",9)}function v(n,a){1&n&&e.nrm(0,"ion-icon",10)(1,"ion-icon",11)}function R(n,a){if(1&n&&(e.j41(0,"ion-item")(1,"ion-label")(2,"h1"),e.EFF(3),e.k0s(),e.j41(4,"p"),e.EFF(5),e.k0s()(),e.DNE(6,f,2,0)(7,v,2,0),e.k0s()),2&n){const l=a.$implicit;e.R7$(3),e.JRh(l.stepTitle),e.R7$(2),e.JRh(l.expectedResults),e.R7$(),e.vxM(6,l.isComplete?6:-1),e.R7$(),e.vxM(7,l.isComplete?-1:7)}}const P=[{path:"",component:(()=>{var n;class a{constructor(t,g){this.systemTestService=t,this.activatedRoute=g,this.user={},this.orgName="",this.systemTest={title:"",description:"",steps:[],type:"",state:!1}}ngOnInit(){}ionViewWillEnter(){var t=this;return(0,r.A)(function*(){t.getProductFromParams(),yield t.getSystemTest()})()}getProductFromParams(){this.activatedRoute.params.subscribe(t=>{this.productObjective=t.productObjective,this.productStep=t.step,this.testTitle=t.testTitle,this.timestamp=t.timestamp}),console.log(this.productObjective),console.log(this.productStep),console.log(this.testTitle),console.log(this.timestamp)}getSystemTest(){var t=this;return(0,r.A)(function*(){t.user=JSON.parse(localStorage.getItem("user")||"{}"),t.orgName=t.user.orgName||"",t.systemTest=yield t.systemTestService.getSystemTestByTimestamp(t.orgName,t.productObjective,t.productStep,t.testTitle,t.timestamp)})()}}return(n=a).\u0275fac=function(t){return new(t||n)(e.rXU(d.h),e.rXU(m.nX))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-view-system-test"]],decls:18,vars:5,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12","size-md","12","size-lg","12",1,""],[1,"min-h-full","flex","flex-col","p-8"],[1,"p-2"],[1,"text-4xl","text-white","font-bold"],[1,"text-xl"],["aria-hidden","true","name","checkmark-circle","slot","end","color","success"],["aria-hidden","true","name","close-circle","slot","end"],["aria-hidden","true","name","checkmark-circle","slot","end"],["aria-hidden","true","name","close-circle","slot","end","color","danger"]],template:function(t,g){1&t&&(e.nrm(0,"app-header-return",0),e.j41(1,"ion-content",1)(2,"ion-grid"),e.nrm(3,"app-title",0),e.j41(4,"ion-row",2)(5,"ion-col",3)(6,"ion-card",4)(7,"ion-card-title",5)(8,"ion-label",6),e.EFF(9),e.k0s()(),e.nrm(10,"br"),e.j41(11,"ion-card-title",5)(12,"ion-label",7),e.EFF(13),e.k0s()(),e.nrm(14,"br"),e.j41(15,"ion-list"),e.Z7z(16,R,8,4,"ion-item",null,y,!0),e.k0s()()()()()()),2&t&&(e.Y8G("title","System Test Result"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(2),e.Y8G("title","System Test Result"),e.R7$(6),e.JRh(g.systemTest.title),e.R7$(4),e.JRh(g.systemTest.description),e.R7$(3),e.Dyx(g.systemTest.steps))},dependencies:[o.b_,o.tN,o.hU,o.W9,o.lO,o.iq,o.uz,o.he,o.nf,o.ln,c.W,T.p]}),a})()}];let M=(()=>{var n;class a{}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[m.iI.forChild(P),m.iI]}),a})();var S=s(5553);let C=(()=>{var n;class a{}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[i.MD,p.YN,o.bv,M,S.h]}),a})()}}]);