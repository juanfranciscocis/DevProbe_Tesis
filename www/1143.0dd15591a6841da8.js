"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1143],{5553:(x,T,a)=>{a.d(T,{h:()=>_});var d=a(177),y=a(7863),n=a(4438);let _=(()=>{var m;class e{}return(m=e).\u0275fac=function(g){return new(g||m)},m.\u0275mod=n.$C({type:m}),m.\u0275inj=n.G2t({imports:[d.MD,y.bv]}),e})()},3241:(x,T,a)=>{a.d(T,{p:()=>_});var d=a(4438),y=a(177),n=a(7863);let _=(()=>{var m;class e{constructor(g){this.location=g,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(m=e).\u0275fac=function(g){return new(g||m)(d.rXU(y.aZ))},m.\u0275cmp=d.VBU({type:m,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(g,S){1&g&&(d.j41(0,"ion-header",0)(1,"ion-toolbar"),d.nrm(2,"ion-menu-button",1),d.j41(3,"ion-icon",2),d.bIt("click",function(){return S.goBack()}),d.k0s(),d.j41(4,"ion-title"),d.EFF(5),d.k0s()()()),2&g&&(d.Y8G("translucent",!0),d.R7$(5),d.JRh(S.title))},dependencies:[n.eU,n.iq,n.MC,n.BC,n.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),e})()},1143:(x,T,a)=>{a.r(T),a.d(T,{CreateSystemTestPageModule:()=>B});var d=a(177),y=a(4341),n=a(7863),_=a(7650),m=a(467),e=a(4438),f=a(9032),g=a(9274),S=a(8453),P=a(3241),b=a(9549);function k(o,u){return this.testStepTitle}function M(o,u){return this.aiSteps}function E(o,u){if(1&o){const r=e.RV6();e.j41(0,"ion-item")(1,"ion-label")(2,"h1"),e.EFF(3),e.k0s(),e.j41(4,"p"),e.EFF(5),e.k0s()(),e.j41(6,"ion-icon",24),e.bIt("click",function(){const s=e.eBV(r).$implicit,l=e.XpG();return e.Njj(l.delete(s.stepTitle))}),e.k0s()()}if(2&o){const r=u.$implicit;e.R7$(3),e.JRh(r.stepTitle),e.R7$(2),e.JRh(r.expectedResults)}}function R(o,u){1&o&&(e.j41(0,"ion-card-content",32)(1,"div",34),e.nrm(2,"ion-icon",35),e.k0s()())}function j(o,u){if(1&o){const r=e.RV6();e.j41(0,"ion-card-content",13)(1,"div",36)(2,"ion-icon",12),e.bIt("click",function(){e.eBV(r);const s=e.XpG(2);return e.Njj(s.askAIForHelp("step"))}),e.k0s()()()}}function I(o,u){if(1&o&&(e.j41(0,"markdown",33),e.EFF(1),e.k0s()),2&o){const r=u.$implicit;e.R7$(),e.JRh(r.message)}}function w(o,u){if(1&o){const r=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",25)(3,"ion-button",26),e.bIt("click",function(){e.eBV(r);const s=e.XpG();return e.Njj(s.cancel())}),e.EFF(4,"Cancel"),e.k0s()(),e.j41(5,"ion-title"),e.EFF(6,"Add Test Step"),e.k0s(),e.j41(7,"ion-buttons",27)(8,"ion-button",26),e.bIt("click",function(){e.eBV(r);const s=e.XpG();return e.Njj(s.save())}),e.EFF(9,"Save"),e.k0s()()()(),e.j41(10,"ion-content",28)(11,"ion-card",29)(12,"ion-label"),e.EFF(13,"Step"),e.k0s(),e.j41(14,"div",30)(15,"div",8)(16,"ion-input",31),e.mxI("ngModelChange",function(s){e.eBV(r);const l=e.XpG();return e.DH7(l.testStepTitle,s)||(l.testStepTitle=s),e.Njj(s)}),e.k0s()()(),e.nrm(17,"br"),e.j41(18,"ion-label"),e.EFF(19,"Expected"),e.k0s(),e.j41(20,"div",30)(21,"div",8)(22,"ion-input",31),e.mxI("ngModelChange",function(s){e.eBV(r);const l=e.XpG();return e.DH7(l.testExpectedResults,s)||(l.testExpectedResults=s),e.Njj(s)}),e.k0s()()()(),e.j41(23,"ion-card"),e.DNE(24,R,3,0,"ion-card-content",32)(25,j,3,0,"ion-card-content",13),e.j41(26,"ion-card-content")(27,"ion-label"),e.EFF(28,"DevProbe AI Answer"),e.k0s()(),e.j41(29,"ion-card-content"),e.Z7z(30,I,2,1,"markdown",33,M,!0),e.k0s()()()}if(2&o){const r=e.XpG();e.R7$(16),e.R50("ngModel",r.testStepTitle),e.R7$(6),e.R50("ngModel",r.testExpectedResults),e.R7$(2),e.vxM(24,r.disableAI?24:-1),e.R7$(),e.vxM(25,r.disableAI?-1:25),e.R7$(5),e.Dyx(r.aiSteps)}}const A=[{path:"",component:(()=>{var o;class u{constructor(t,s,l,c){this.activatedRoute=t,this.alertCtrl=s,this.systemTestService=l,this.loadingCtrl=c,this.productObjective="",this.productStep="",this.systemTest={title:"",description:"",steps:[],type:"system-test",state:!1},this.testStepTitle="",this.testExpectedResults="",this.user={},this.orgName="",this.vertexAI=(0,e.WQX)(f.L9),this.model=(0,f.oc)(this.vertexAI,{model:"gemini-1.5-flash"}),this.aiSteps=[],this.extraData="",this.disableAI=!1,this.showContext=!1}ngOnInit(){this.getProductFromParams()}getProductFromParams(){this.activatedRoute.params.subscribe(t=>{this.productObjective=t.productObjective,this.productStep=t.step}),console.log(this.productObjective),console.log(this.productStep)}onWillDismiss(t){}cancel(){var t;null===(t=this.modal)||void 0===t||t.dismiss()}save(){var t;this.testStepTitle&&this.testExpectedResults?(this.systemTest.steps.push({stepTitle:this.testStepTitle,expectedResults:this.testExpectedResults,isComplete:!1}),this.testStepTitle="",this.testExpectedResults="",null===(t=this.modal)||void 0===t||t.dismiss()):this.showAlert("Please fill out the Step Title and the Expected Result fields.","Error").then(s=>console.log("Alert shown"))}delete(t){this.systemTest.steps=this.systemTest.steps.filter(s=>s.stepTitle!==t)}showAlert(t,s){var l=this;return(0,m.A)(function*(){yield(yield l.alertCtrl.create({header:s,message:t,buttons:["OK"]})).present()})()}createSystemTest(){var t=this;return(0,m.A)(function*(){if(yield t.showLoading(),console.log(t.systemTest),!t.systemTest.title||!t.systemTest.description||0===t.systemTest.steps.length)return yield t.hideLoading(),void t.showAlert("Please fill out the title, description, and at least one step.","Error").then(l=>console.log("Alert shown"));const s=localStorage.getItem("user");s&&(t.user=JSON.parse(s),t.orgName=t.user.orgName,console.log(t.orgName),t.systemTestService.addSystemTest(t.orgName,t.productObjective,t.productStep,t.systemTest),t.systemTest={title:"",description:"",steps:[],type:"system-test",state:!1},yield t.hideLoading(),window.history.back())})()}showLoading(){var t=this;return(0,m.A)(function*(){yield(yield t.loadingCtrl.create({})).present()})()}hideLoading(){var t=this;return(0,m.A)(function*(){yield t.loadingCtrl.dismiss()})()}doRefresh(t){}aiGenerate(t){var s=this;return(0,m.A)(function*(){yield s.showLoading();const l={history:[{role:"user",parts:[{text:"Hey, I need help to create a system test case description"}]},{role:"model",parts:[{text:"Sure, I can help you with that. What do you need help with?"}]}],generationConfig:{maxOutputTokens:100}},c={history:[{role:"user",parts:[{text:"Hey, I need help to create a system test case steps, dont give me more information about the test, JUST LIST THE STEPS"}]},{role:"model",parts:[{text:"Sure, I can help you with that."}]}],generationConfig:{maxOutputTokens:250}};if("description"===t){if(!s.systemTest.title||""===s.systemTest.title)return yield s.hideLoading(),void(yield s.showAlert("Please fill out the title of the test before asking for help with the description.","Error").then(i=>console.log("Alert shown")));let p=s.model.startChat(l),h="Given this test title:"+s.systemTest.title+". Here is more information about the test: "+s.extraData+"I need help to create the description of the test, just give me the test main objective";console.log(h),yield p.sendMessage(h).then(i=>{s.systemTest.description=i.response.text()})}if("step"===t){if(!s.systemTest.title||""===s.systemTest.title||!s.systemTest.description||""===s.systemTest.description)return yield s.hideLoading(),void(yield s.showAlert("Please fill out the title and description of the test before asking for help with the steps.","Error").then(i=>console.log("Alert shown")));let p=s.model.startChat(c),h="Given this test title:"+s.systemTest.title+"and this test description:"+s.systemTest.description+". Here is more information about the test: "+s.extraData+"I need help to create the steps of the test, just list the steps";console.log(h),yield p.sendMessage(h).then(i=>{s.aiSteps.push({message:i.response.text(),from:"AI",id:"1"}),console.log(i.response.text())}),s.disableAI=!0}yield s.hideLoading()})()}askAIForHelp(t){var s=this;return(0,m.A)(function*(){yield s.aiGenerate(t).then(c=>console.log("AI generated"));const l=document.getElementById("mk-1");console.log(l),s.chatStyle()})()}chatStyle(){const t=document.getElementById("mk-1");if(console.log(t),!t)return;let s=t.getElementsByTagName("h1"),l=t.getElementsByTagName("h2"),c=t.getElementsByTagName("li"),p=t.getElementsByTagName("strong"),h=t.getElementsByTagName("ul");for(var i=0;i<s.length;i++)s[i].style.fontSize="2.5em",s[i].style.fontWeight="bold";for(i=0;i<l.length;i++)l[i].style.fontSize="2em",l[i].style.fontWeight="bold";for(i=0;i<c.length;i++)c[i].style.fontSize="1.5em",c[i].innerHTML="- "+c[i].innerHTML,console.log(c[i].innerHTML);for(i=0;i<p.length;i++)console.log(p[i].innerHTML);for(i=0;i<h.length;i++){let v=h[i].getElementsByTagName("li");for(var C=0;C<v.length;C++)v[C].style.fontSize="0.5em",v[C].innerHTML="- "+v[C].innerHTML,console.log(v[C].innerHTML)}}giveContext(){this.showAlertWithInputs("Give Global Test Context","Please provide the AI with some context, provide code, HTML, or instructions.",["Give Context","Cancel"],[{name:"context",type:"text",placeholder:"Give AI Context"}]).then(l=>console.log("Alert shown"))}showAlertWithInputs(t,s,l,c){var p=this;return(0,m.A)(function*(){const h=yield p.alertCtrl.create({header:t,message:s,buttons:l,inputs:c});yield h.present();const{data:i}=yield h.onDidDismiss();console.log(i),i.values&&(p.extraData=i.values.context,p.showContext=!0),console.log(p.extraData)})()}}return(o=u).\u0275fac=function(t){return new(t||o)(e.rXU(_.nX),e.rXU(n.hG),e.rXU(g.h),e.rXU(n.Xi))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-create-system-test"]],viewQuery:function(t,s){if(1&t&&e.GBs(n.Sb,5),2&t){let l;e.mGM(l=e.lsd())&&(s.modal=l.first)}},decls:42,vars:5,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12","size-md","4","size-lg","4",1,""],["size","12","size-md","12","size-lg","12",1,""],[1,"min-h-full","flex","flex-col","p-8"],[1,"bg-gray-600","p-2"],[1,"flex","flex-row","items-center","w-full"],[1,"w-full","m-2"],["placeholder","Test Title","type","text",1,"text-3xl",3,"ngModelChange","ngModel"],["placeholder","Test Description","type","text",1,"text-sm",3,"ngModelChange","ngModel"],[1,"rounded-full","p-3","bg-purple-800"],["name","color-wand-outline",3,"click"],[1,""],[1,"flex","flex-row","items-center"],[1,"text-4xl"],["id","open-modal",1,"flex","flex-row","items-center","bg-cyan-800","m-4","p-1",3,"click"],["name","add"],[1,"bg-gray-600"],["color","primary","expand","block","fill","outline",3,"click"],["trigger","open-modal",3,"willPresent","willDismiss"],["vertical","bottom","horizontal","end","slot","fixed",1,"m-2","z-10",3,"click"],[1,"bg-purple-300","p-4"],["name","chatbubble-outline",1,"w-full","h-full"],["aria-hidden","true","name","trash","slot","end",3,"click"],["slot","start"],[3,"click"],["slot","end"],[1,"flex","flex-col","justify-center","items-center"],[1,"m-2","p-2"],[1,"flex-row","flex","justify-center","items-center","w-full"],["type","text",3,"ngModelChange","ngModel"],[1,"hidden"],["id","mk-1",1,"text-white"],[1,"rounded-full","p-3","bg-gray-400","flex","flex-row","justify-center","items-center","hidden"],["name","color-wand-outline",1,"hidden"],[1,"rounded-full","p-3","bg-purple-800","flex","flex-row","justify-center","items-center"]],template:function(t,s){1&t&&(e.nrm(0,"app-header-return",0),e.j41(1,"ion-content",1)(2,"ion-grid"),e.nrm(3,"app-title",0),e.j41(4,"ion-row",2)(5,"ion-col",3)(6,"p"),e.EFF(7,"Fill the test from to create a system test."),e.k0s(),e.nrm(8,"p"),e.k0s()(),e.j41(9,"ion-row",2)(10,"ion-col",4)(11,"ion-card",5)(12,"ion-card-title",6)(13,"div",7)(14,"div",8)(15,"ion-input",9),e.mxI("ngModelChange",function(c){return e.DH7(s.systemTest.title,c)||(s.systemTest.title=c),c}),e.k0s()()()(),e.nrm(16,"br"),e.j41(17,"ion-card-title",6)(18,"div",7)(19,"div",8)(20,"ion-textarea",10),e.mxI("ngModelChange",function(c){return e.DH7(s.systemTest.description,c)||(s.systemTest.description=c),c}),e.k0s()(),e.j41(21,"div",11)(22,"ion-icon",12),e.bIt("click",function(){return s.askAIForHelp("description")}),e.k0s()()()(),e.nrm(23,"br"),e.j41(24,"ion-card-title",13)(25,"div",14)(26,"h1",15),e.EFF(27,"Test Steps..."),e.k0s(),e.j41(28,"div",16),e.bIt("click",function(){return s.chatStyle()}),e.nrm(29,"ion-icon",17),e.k0s()()(),e.j41(30,"ion-card-content",18)(31,"ion-list"),e.Z7z(32,E,7,2,"ion-item",null,k,!0),e.k0s()(),e.nrm(34,"br"),e.j41(35,"ion-button",19),e.bIt("click",function(){return s.createSystemTest()}),e.EFF(36,"Create System Test"),e.k0s()()()()(),e.j41(37,"ion-modal",20),e.bIt("willPresent",function(){return s.chatStyle()})("willDismiss",function(c){return s.onWillDismiss(c)}),e.DNE(38,w,32,4,"ng-template"),e.k0s(),e.j41(39,"ion-fab",21),e.bIt("click",function(){return s.giveContext()}),e.j41(40,"ion-avatar",22),e.nrm(41,"ion-icon",23),e.k0s()()()),2&t&&(e.Y8G("title","Create System Test"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(2),e.Y8G("title","Create System Test"),e.R7$(12),e.R50("ngModel",s.systemTest.title),e.R7$(5),e.R50("ngModel",s.systemTest.description),e.R7$(12),e.Dyx(s.systemTest.steps))},dependencies:[y.BC,y.vS,n.mC,n.Jm,n.QW,n.b_,n.I9,n.tN,n.hU,n.W9,n.Q8,n.lO,n.eU,n.iq,n.$w,n.uz,n.he,n.nf,n.ln,n.nc,n.BC,n.ai,n.Sb,n.Gw,S.W,P.p,b.NN]}),u})()}];let F=(()=>{var o;class u{}return(o=u).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[_.iI.forChild(A),_.iI]}),u})();var D=a(5553);let B=(()=>{var o;class u{}return(o=u).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[d.MD,y.YN,n.bv,F,D.h,b.NN]}),u})()}}]);