"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8711],{5553:(C,g,a)=>{a.d(g,{h:()=>p});var d=a(177),T=a(7863),c=a(4438);let p=(()=>{var i;class t{}return(i=t).\u0275fac=function(m){return new(m||i)},i.\u0275mod=c.$C({type:i}),i.\u0275inj=c.G2t({imports:[d.MD,T.bv]}),t})()},3241:(C,g,a)=>{a.d(g,{p:()=>p});var d=a(4438),T=a(177),c=a(7863);let p=(()=>{var i;class t{constructor(m){this.location=m,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(i=t).\u0275fac=function(m){return new(m||i)(d.rXU(T.aZ))},i.\u0275cmp=d.VBU({type:i,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(m,y){1&m&&(d.j41(0,"ion-header",0)(1,"ion-toolbar"),d.nrm(2,"ion-menu-button",1),d.j41(3,"ion-icon",2),d.bIt("click",function(){return y.goBack()}),d.k0s(),d.j41(4,"ion-title"),d.EFF(5),d.k0s()()()),2&m&&(d.Y8G("translucent",!0),d.R7$(5),d.JRh(y.title))},dependencies:[c.eU,c.iq,c.MC,c.BC,c.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),t})()},8711:(C,g,a)=>{a.r(g),a.d(g,{SoftwareTestingChooserPageModule:()=>I});var d=a(177),T=a(4341),c=a(7863),p=a(7650),i=a(467),t=a(4438),f=a(9274),m=a(2379),y=a(8453),j=a(3241),w=a(2820);function P(o,u){if(1&o){const l=t.RV6();t.nrm(0,"ion-icon",24),t.j41(1,"ion-icon",25),t.bIt("click",function(){t.eBV(l);const s=t.XpG().$implicit,n=t.XpG();return t.Njj(n.updateUnitState(s.title))}),t.k0s()}}function E(o,u){if(1&o){const l=t.RV6();t.j41(0,"ion-icon",26),t.bIt("click",function(){t.eBV(l);const s=t.XpG().$implicit,n=t.XpG();return t.Njj(n.updateUnitState(s.title))}),t.k0s(),t.nrm(1,"ion-icon",27)}}function x(o,u){if(1&o){const l=t.RV6();t.j41(0,"ion-col",11)(1,"ion-card")(2,"ion-card-header",20)(3,"ion-card-title"),t.EFF(4),t.k0s(),t.j41(5,"ion-icon",21),t.bIt("click",function(){const s=t.eBV(l).$implicit,n=t.XpG();return t.Njj(n.infoAutomateUnitState(s.title))}),t.k0s()(),t.j41(6,"ion-card-content",14)(7,"p"),t.EFF(8," Change the Test State: "),t.k0s(),t.j41(9,"div",22),t.DNE(10,P,2,0)(11,E,2,0),t.k0s()(),t.j41(12,"ion-card-content")(13,"ion-button",23),t.bIt("click",function(){const s=t.eBV(l).$implicit,n=t.XpG();return t.Njj(n.deleteUnitTest(s.title))}),t.EFF(14,"Delete Test"),t.k0s()()()()}if(2&o){const l=u.$implicit;t.R7$(4),t.JRh(l.title),t.R7$(6),t.vxM(10,l.state?10:-1),t.R7$(),t.vxM(11,l.state?-1:11)}}function R(o,u){if(1&o){const l=t.RV6();t.j41(0,"ion-col",11)(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),t.EFF(4),t.k0s()(),t.j41(5,"ion-card-content")(6,"ion-button",28),t.bIt("click",function(){const s=t.eBV(l).$implicit,n=t.XpG();return t.Njj(n.navigateToViewHistorySystemTest(s.title))}),t.EFF(7,"View Test Results"),t.k0s(),t.j41(8,"ion-button",29),t.bIt("click",function(){const s=t.eBV(l).$implicit,n=t.XpG();return t.Njj(n.navigateToExecuteSystemTest(s.title))}),t.EFF(9,"Execute Test"),t.k0s(),t.j41(10,"ion-button",23),t.bIt("click",function(){const s=t.eBV(l).$implicit,n=t.XpG();return t.Njj(n.deleteSystemTest(s.title))}),t.EFF(11,"Delete Test"),t.k0s()()()()}if(2&o){const l=u.$implicit;t.R7$(4),t.JRh(l.title)}}const U=[{path:"",component:(()=>{var o;class u{constructor(e,s,n,r,h,_){this.activatedRoute=e,this.router=s,this.systemTestService=n,this.loadingCtrl=r,this.unitTestService=h,this.alertCtrl=_,this.productStep="",this.productObjective="",this.user={},this.orgName="",this.systemTests=[],this.unitTests=[],this.passedSystemTests=0,this.failedSystemTests=0,this.systemTestsChart={tooltip:{trigger:"axis"},legend:{data:["Passed","Failed"],left:"left"},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value"},series:[{name:"Passed",type:"line",data:[]},{name:"Failed",type:"line",data:[]}]}}ngOnInit(){}ionViewWillEnter(){var e=this;return(0,i.A)(function*(){yield e.showLoading(),e.getProductFromParams(),yield e.getUser(),yield e.getUnitTests();try{yield e.getSystemTests().then((0,i.A)(function*(){yield e.calculatePassedSystemTests().then((0,i.A)(function*(){yield e.calculateGraphDataSystemTests().then((0,i.A)(function*(){yield e.graphSystemTests()}))}))}))}catch(s){console.log(s)}yield e.hideLoading()})()}getProductFromParams(){this.activatedRoute.params.subscribe(e=>{this.productObjective=e.productObjective,this.productStep=e.step}),console.log(this.productObjective),console.log(this.productStep)}navigateToCreateSystemTest(){this.router.navigate(["/create-system-test",{productObjective:this.productObjective,step:this.productStep}])}navigateToCreateUnitTest(){this.router.navigate(["/create-unit-test",{productObjective:this.productObjective,step:this.productStep}])}navigateToExecuteSystemTest(e){this.router.navigate(["/execute-system-test",{productObjective:this.productObjective,step:this.productStep,testTitle:e}])}navigateToViewHistorySystemTest(e){this.router.navigate(["/view-history-system-test",{productObjective:this.productObjective,step:this.productStep,testTitle:e}])}calculatePassedUnitTests(){return(0,i.A)(function*(){})()}calculatePassedSystemTests(){var e=this;return(0,i.A)(function*(){e.passedSystemTests=0,e.failedSystemTests=0,yield e.systemTestService.getSystemTestHistoryByStep(e.orgName,e.productObjective,e.productStep).then(s=>{s.forEach(n=>{n.state?e.passedSystemTests++:e.failedSystemTests++})})})()}calculateGraphDataUnitTests(){return(0,i.A)(function*(){})()}calculateGraphDataSystemTests(){var e=this;return(0,i.A)(function*(){let s=[];const n=yield e.systemTestService.getSystemTestHistory(e.orgName,e.productObjective);return s=Object.keys(n).filter(r=>n[r].productStep===e.productStep).map(r=>({timestamp:r,systemTest:n[r].systemTest})),s})()}graphUnitTests(){return(0,i.A)(function*(){})()}graphSystemTests(){var e=this;return(0,i.A)(function*(){const s=yield e.calculateGraphDataSystemTests();let n=[];for(let r of s){let h=r.timestamp.split(" ")[0].split("-"),S=[h[2],h[1],h[0]].join("/"),M=r.timestamp.split(" ")[1],F=new Date(S+" "+M).toLocaleDateString(),k=r.systemTest.state?1:0,b=r.systemTest.state?0:1,v=n.findIndex(D=>D.date===F);-1===v?n.push({date:F,passed:k,failed:b}):(n[v].passed+=k,n[v].failed+=b)}n.sort((r,h)=>new Date(r.date)-new Date(h.date)),e.systemTestsChart.xAxis={type:"category",boundaryGap:!1,data:n.map(r=>r.date)},e.systemTestsChart.series=[{name:"Passed",type:"line",data:n.map(r=>r.passed)},{name:"Failed",type:"line",data:n.map(r=>r.failed)}],e.systemTestsChart={...e.systemTestsChart}})()}getUnitTests(){var e=this;return(0,i.A)(function*(){e.unitTestService.getUnitTests(e.orgName,e.productObjective,e.productStep).then(s=>{e.unitTests=s})})()}getSystemTests(){var e=this;return(0,i.A)(function*(){e.systemTestService.getSystemTest(e.orgName,e.productObjective,e.productStep).then(s=>{e.systemTests=s})})()}infoAutomateUnitState(e){var s=this;return(0,i.A)(function*(){yield s.showAlert("You can automate the result of this unit test ("+e+") by sending a status update to the /unit_test_state API endpoint.","Automate Unit Test State")})()}updateUnitState(e){var s=this;return(0,i.A)(function*(){yield s.showLoading(),yield s.unitTestService.updateUnitTestState(s.orgName,s.productObjective,s.productStep,e).then(function(){var n=(0,i.A)(function*(r){r?(yield s.getUnitTests(),yield s.hideLoading()):(yield s.hideLoading(),yield s.showAlert("There was an error updating the unit test state.","Error"))});return function(r){return n.apply(this,arguments)}}()),yield s.hideLoading()})()}deleteUnitTest(e){var s=this;return(0,i.A)(function*(){yield s.showLoading();let n=s.unitTests.find(r=>r.title===e);n&&(yield s.unitTestService.deleteUnitTest(s.orgName,s.productObjective,s.productStep,n).then((0,i.A)(function*(){yield s.getUnitTests()})),yield s.hideLoading())})()}deleteSystemTest(e){var s=this;return(0,i.A)(function*(){yield s.showLoading();let n=s.systemTests.find(r=>r.title===e);n&&(yield s.systemTestService.deleteSystemTest(s.orgName,s.productObjective,s.productStep,n).then((0,i.A)(function*(){yield s.getSystemTests()})),yield s.calculatePassedSystemTests(),yield s.calculateGraphDataSystemTests(),yield s.graphSystemTests(),yield s.hideLoading())})()}getUser(){var e=this;return(0,i.A)(function*(){const s=localStorage.getItem("user");s&&(e.user=JSON.parse(s),e.orgName=e.user.orgName)})()}showLoading(){var e=this;return(0,i.A)(function*(){yield(yield e.loadingCtrl.create({})).present()})()}hideLoading(){var e=this;return(0,i.A)(function*(){yield e.loadingCtrl.dismiss()})()}doRefresh(e){this.getSystemTests(),e.target.complete()}showAlert(e,s){var n=this;return(0,i.A)(function*(){yield(yield n.alertCtrl.create({header:s,message:e,buttons:["OK"]})).present()})()}}return(o=u).\u0275fac=function(e){return new(e||o)(t.rXU(p.nX),t.rXU(p.Ix),t.rXU(f.h),t.rXU(c.Xi),t.rXU(m.I),t.rXU(c.hG))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-software-testing-chooser"]],decls:92,vars:13,consts:[[3,"title"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"lg:m-10","md:m-10"],["size","12","size-md","4","size-lg","4",1,""],[1,"min-h-full","flex","flex-col","justify-between"],[1,"text-3xl","text-white"],[1,"text-white"],[1,"mt-auto"],["color","primary","expand","block","fill","outline",3,"click"],["color","primary","expand","block","fill","outline"],["size","12","size-md","3","size-lg","3",1,""],["size","6","size-md","6","size-lg","6",1,""],[1,"flex","flex-col","justify-center","items-center","text-green-600"],[1,"flex","flex-col","justify-center","items-center"],[1,"flex","flex-col","justify-center","items-center","text-red-800"],["size","12","size-md","12","size-lg","12",1,""],[1,"h-[25em]"],["echarts","",1,"demo-chart","h-full","w-full","p-4",3,"options"],["size","12","size-md","3","size-lg","3","class","",4,"ngFor","ngForOf"],[1,"flex-row","flex","justify-between","items-center"],["name","information-circle",1,"text-xl",3,"click"],[1,"flex","flex-row","justify-center","items-center"],["color","danger","expand","block",3,"click"],["name","checkmark-circle",1,"text-green-600","text-3xl"],["name","close-circle",1,"text-3xl",3,"click"],["name","checkmark-circle",1,"text-3xl",3,"click"],["name","close-circle",1,"text-red-800","text-3xl"],["color","primary","expand","block",3,"click"],["color","success","expand","block",3,"click"]],template:function(e,s){1&e&&(t.nrm(0,"app-header-return",0),t.j41(1,"ion-content",1)(2,"ion-refresher",2),t.bIt("ionRefresh",function(r){return s.doRefresh(r)}),t.nrm(3,"ion-refresher-content"),t.k0s(),t.j41(4,"ion-grid"),t.nrm(5,"app-title",0),t.j41(6,"ion-row",3)(7,"ion-col",4)(8,"H2"),t.EFF(9,"Choose a type of test."),t.k0s(),t.nrm(10,"p"),t.k0s()(),t.j41(11,"ion-row",3)(12,"ion-col",4)(13,"ion-card",5)(14,"ion-card-header")(15,"h1",6),t.EFF(16,"Unit Tests"),t.k0s()(),t.j41(17,"ion-card-content")(18,"p",7),t.EFF(19,"A unit test is the smallest and simplest form of software testing. These tests are employed to assess a separable unit of software, such as a class or function, for correctness independent of the larger software system that contains the unit. Unit tests are also employed as a form of specification to ensure that a function or module exactly performs the behavior required by the system. Unit tests are commonly used to introduce test-driven development concepts."),t.k0s()(),t.j41(20,"ion-card-content",8)(21,"ion-button",9),t.bIt("click",function(){return s.navigateToCreateUnitTest()}),t.EFF(22,"Create Unit Test"),t.k0s()()()(),t.j41(23,"ion-col",4)(24,"ion-card",5)(25,"ion-card-header")(26,"h1",6),t.EFF(27,"Integration Tests"),t.k0s()(),t.j41(28,"ion-card-content")(29,"p",7),t.EFF(30,"Software components that pass individual unit tests are assembled into larger components. Engineers then run an integration test on an assembled component to verify that it functions correctly. Selenium, Playwright and Cypress are popular tools for integration testing."),t.k0s()(),t.j41(31,"ion-card-content",8)(32,"ion-button",10),t.EFF(33,"Create Integration Test"),t.k0s()()()(),t.j41(34,"ion-col",4)(35,"ion-card",5)(36,"ion-card-header")(37,"h1",6),t.EFF(38,"System Tests"),t.k0s()(),t.j41(39,"ion-card-content")(40,"p",7),t.EFF(41,"A system test is the largest scale test that engineers run for an undeployed system. All modules belonging to a specific component, such as a server that passed integration tests, are assembled into the system. Then the engineer tests the end-to-end functionality of the system."),t.k0s()(),t.j41(42,"ion-card-content",8)(43,"ion-button",9),t.bIt("click",function(){return s.navigateToCreateSystemTest()}),t.EFF(44,"Create System Test"),t.k0s()()()()()(),t.nrm(45,"br"),t.j41(46,"ion-grid"),t.nrm(47,"app-title",0),t.j41(48,"ion-row",3)(49,"ion-col",4)(50,"p"),t.EFF(51),t.k0s()()(),t.j41(52,"ion-row",3),t.Z7z(53,x,15,3,"ion-col",11,t.fX1),t.k0s(),t.nrm(55,"br")(56,"app-title",0),t.j41(57,"ion-row",3)(58,"ion-col",4)(59,"p"),t.EFF(60),t.k0s()()(),t.nrm(61,"br")(62,"app-title",0),t.j41(63,"ion-row",3)(64,"ion-col",4)(65,"p"),t.EFF(66),t.k0s()()(),t.j41(67,"ion-row",3)(68,"ion-col",12)(69,"ion-card")(70,"ion-card-header")(71,"ion-card-title",13),t.EFF(72,"Passed Tests"),t.k0s()(),t.j41(73,"ion-card-content",14)(74,"h1"),t.EFF(75),t.k0s()()()(),t.j41(76,"ion-col",12)(77,"ion-card")(78,"ion-card-header")(79,"ion-card-title",15),t.EFF(80,"Failed Tests"),t.k0s()(),t.j41(81,"ion-card-content",14)(82,"h1"),t.EFF(83),t.k0s()()()()(),t.j41(84,"ion-row",3)(85,"ion-col",16)(86,"ion-card")(87,"ion-card-content",17),t.nrm(88,"div",18),t.k0s()()()()(),t.j41(89,"ion-grid")(90,"ion-row",3),t.DNE(91,R,12,1,"ion-col",19),t.k0s()()()),2&e&&(t.Y8G("title","Software Testing Chooser"),t.R7$(),t.Y8G("fullscreen",!0),t.R7$(4),t.Y8G("title","Software Testing Chooser"),t.R7$(42),t.Y8G("title","Unit Tests"),t.R7$(4),t.SpI("Created tests for product step: ",s.productStep,""),t.R7$(2),t.Dyx(s.unitTests),t.R7$(3),t.Y8G("title","Integration Tests"),t.R7$(4),t.SpI("Created tests for product step: ",s.productStep,""),t.R7$(2),t.Y8G("title","System Tests"),t.R7$(4),t.SpI("System tests results for product step: ",s.productStep,""),t.R7$(9),t.JRh(s.passedSystemTests),t.R7$(8),t.JRh(s.failedSystemTests),t.R7$(5),t.Y8G("options",s.systemTestsChart),t.R7$(3),t.Y8G("ngForOf",s.systemTests))},dependencies:[d.Sq,c.Jm,c.b_,c.I9,c.ME,c.tN,c.hU,c.W9,c.lO,c.iq,c.To,c.Ki,c.ln,y.W,j.p,w.$P]}),u})()}];let A=(()=>{var o;class u{}return(o=u).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[p.iI.forChild(U),p.iI]}),u})();var O=a(5553);let I=(()=>{var o;class u{}return(o=u).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[d.MD,T.YN,c.bv,A,O.h]}),u})()}}]);