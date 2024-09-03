"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4940],{5553:(_,y,n)=>{n.d(y,{h:()=>u});var a=n(177),T=n(7863),o=n(4438);let u=(()=>{var r;class t{}return(r=t).\u0275fac=function(d){return new(d||r)},r.\u0275mod=o.$C({type:r}),r.\u0275inj=o.G2t({imports:[a.MD,T.bv]}),t})()},3241:(_,y,n)=>{n.d(y,{p:()=>u});var a=n(4438),T=n(177),o=n(7863);let u=(()=>{var r;class t{constructor(d){this.location=d,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(r=t).\u0275fac=function(d){return new(d||r)(a.rXU(T.aZ))},r.\u0275cmp=a.VBU({type:r,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(d,g){1&d&&(a.j41(0,"ion-header",0)(1,"ion-toolbar"),a.nrm(2,"ion-menu-button",1),a.j41(3,"ion-icon",2),a.bIt("click",function(){return g.goBack()}),a.k0s(),a.j41(4,"ion-title"),a.EFF(5),a.k0s()()()),2&d&&(a.Y8G("translucent",!0),a.R7$(5),a.JRh(g.title))},dependencies:[o.eU,o.iq,o.MC,o.BC,o.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),t})()},4940:(_,y,n)=>{n.r(y),n.d(y,{ViewHistorySystemTestPageModule:()=>V});var a=n(177),T=n(4341),o=n(7863),u=n(7650),r=n(467),t=n(4438),p=n(9274),d=n(8453),g=n(3241);function f(i,l){return this.systemTestHistory}function v(i,l){if(1&i){const c=t.RV6();t.nrm(0,"ion-icon",10)(1,"ion-icon",11),t.j41(2,"ion-icon",12),t.bIt("click",function(){t.eBV(c);const s=t.XpG().$implicit,m=t.XpG();return t.Njj(m.delete(s.timestamp))}),t.k0s(),t.j41(3,"ion-icon",13),t.bIt("click",function(){t.eBV(c);const s=t.XpG().$implicit,m=t.XpG();return t.Njj(m.navigateToViewHistorySystemTest(s))}),t.k0s()}}function H(i,l){if(1&i){const c=t.RV6();t.nrm(0,"ion-icon",14)(1,"ion-icon",15),t.j41(2,"ion-icon",12),t.bIt("click",function(){t.eBV(c);const s=t.XpG().$implicit,m=t.XpG();return t.Njj(m.delete(s.timestamp))}),t.k0s(),t.j41(3,"ion-icon",13),t.bIt("click",function(){t.eBV(c);const s=t.XpG().$implicit,m=t.XpG();return t.Njj(m.navigateToViewHistorySystemTest(s))}),t.k0s()}}function S(i,l){if(1&i&&(t.j41(0,"ion-item")(1,"ion-label")(2,"h1",9),t.EFF(3),t.k0s()(),t.DNE(4,v,4,0)(5,H,4,0),t.k0s()),2&i){const c=l.$implicit;t.R7$(3),t.Lme("",c.systemTest.title," - ",c.timestamp,""),t.R7$(),t.vxM(4,c.systemTest.state?4:-1),t.R7$(),t.vxM(5,c.systemTest.state?-1:5)}}const P=[{path:"",component:(()=>{var i;class l{constructor(e,s,m,h){this.activatedRoute=e,this.systemTestService=s,this.loadingCtrl=m,this.router=h,this.user={},this.orgName="",this.productObjective="",this.productStep="",this.testTitle="",this.systemTestHistory=[],this.passed=0,this.failed=0}ngOnInit(){}ionViewWillEnter(){var e=this;return(0,r.A)(function*(){e.getProductFromParams(),yield e.getHistorySystemTest(),yield e.passedTests()})()}getProductFromParams(){this.activatedRoute.params.subscribe(e=>{this.productObjective=e.productObjective,this.productStep=e.step,this.testTitle=e.testTitle}),console.log(this.productObjective),console.log(this.productStep),console.log(this.testTitle)}getHistorySystemTest(){var e=this;return(0,r.A)(function*(){yield e.showLoading(),e.user=JSON.parse(localStorage.getItem("user")||"{}"),e.orgName=e.user.orgName||"",yield e.systemTestService.getSystemTestHistoryByTitle(e.orgName,e.productObjective,e.productStep,e.testTitle).then(s=>{e.systemTestHistory=s,e.systemTestHistory.sort((m,h)=>{const R=new Date(m.timestamp).getTime();return new Date(h.timestamp).getTime()-R})}),yield e.hideLoading()})()}delete(e){var s=this;return(0,r.A)(function*(){yield s.showLoading(),yield s.systemTestService.deleteSystemTestHistoryByKey(s.orgName,s.productObjective,s.productStep,s.testTitle,e).then((0,r.A)(function*(){yield s.getHistorySystemTest()})),yield s.hideLoading()})()}passedTests(){var e=this;return(0,r.A)(function*(){e.passed=e.systemTestHistory.filter(s=>s.systemTest.state).length,e.failed=e.systemTestHistory.length-e.passed})()}showLoading(){var e=this;return(0,r.A)(function*(){yield(yield e.loadingCtrl.create({})).present()})()}hideLoading(){var e=this;return(0,r.A)(function*(){yield e.loadingCtrl.dismiss()})()}navigateToViewHistorySystemTest(e){var s=this;return(0,r.A)(function*(){yield s.router.navigate(["/view-system-test",{productObjective:s.productObjective,step:s.productStep,testTitle:s.testTitle,timestamp:e.timestamp}])})()}}return(i=l).\u0275fac=function(e){return new(e||i)(t.rXU(u.nX),t.rXU(p.h),t.rXU(o.Xi),t.rXU(u.Ix))},i.\u0275cmp=t.VBU({type:i,selectors:[["app-view-history-system-test"]],decls:33,vars:7,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12","size-md","4","size-lg","4",1,""],["size","6","size-md","6","size-lg","6",1,""],[1,"flex","flex-col","justify-center","items-center","text-green-600"],[1,"flex","flex-col","justify-center","items-center"],[1,"flex","flex-col","justify-center","items-center","text-red-800"],["size","12","size-md","12","size-lg","12",1,""],[1,"text-white"],["aria-hidden","true","name","checkmark-circle","slot","end","color","success"],["aria-hidden","true","name","close-circle","slot","end","color",""],["aria-hidden","true","name","trash","slot","end","color","",3,"click"],["aria-hidden","true","name","eye","slot","start","color","",3,"click"],["aria-hidden","true","name","checkmark-circle","slot","end","color",""],["aria-hidden","true","name","close-circle","slot","end","color","danger"]],template:function(e,s){1&e&&(t.nrm(0,"app-header-return",0),t.j41(1,"ion-content",1)(2,"ion-grid"),t.nrm(3,"app-title",0),t.j41(4,"ion-row",2)(5,"ion-col",3)(6,"p"),t.EFF(7),t.k0s()()(),t.j41(8,"ion-row",2)(9,"ion-col",4)(10,"ion-card")(11,"ion-card-header")(12,"ion-card-title",5),t.EFF(13,"Passed Tests"),t.k0s()(),t.j41(14,"ion-card-content",6)(15,"h1"),t.EFF(16),t.k0s()()()(),t.j41(17,"ion-col",4)(18,"ion-card")(19,"ion-card-header")(20,"ion-card-title",7),t.EFF(21,"Failed Tests"),t.k0s()(),t.j41(22,"ion-card-content",6)(23,"h1"),t.EFF(24),t.k0s()()()()()(),t.j41(25,"ion-grid")(26,"ion-row",2)(27,"ion-col",8)(28,"ion-card")(29,"ion-card-content")(30,"ion-list"),t.Z7z(31,S,6,4,"ion-item",null,f,!0),t.k0s()()()()()()()),2&e&&(t.Y8G("title","History System Tests: "+s.testTitle),t.R7$(),t.Y8G("fullscreen",!0),t.R7$(2),t.Y8G("title","History System Tests: "+s.testTitle),t.R7$(4),t.Lme("System tests results for product step: ",s.productStep,". Test title: ",s.testTitle,""),t.R7$(9),t.JRh(s.passed),t.R7$(8),t.JRh(s.failed),t.R7$(7),t.Dyx(s.systemTestHistory))},dependencies:[o.b_,o.I9,o.ME,o.tN,o.hU,o.W9,o.lO,o.iq,o.uz,o.he,o.nf,o.ln,d.W,g.p]}),l})()}];let j=(()=>{var i;class l{}return(i=l).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[u.iI.forChild(P),u.iI]}),l})();var C=n(5553);let V=(()=>{var i;class l{}return(i=l).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[a.MD,T.YN,o.bv,j,C.h]}),l})()}}]);