"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4304],{4304:(W,w,p)=>{p.r(w),p.d(w,{LoadTestHistoryPageModule:()=>B});var x=p(177),R=p(4341),f=p(7863),b=p(7650),v=p(467),e=p(4438),H=p(9032),P=p(4970),M=p(8453),F=p(3241),A=p(2820),L=p(9549);const N=["messagesContainer"];function I(a,y){if(1&a){const g=e.RV6();e.j41(0,"ion-fab",30),e.bIt("click",function(){e.eBV(g);const t=e.XpG();return e.Njj(t.toggleAiModal())}),e.j41(1,"ion-avatar",31),e.nrm(2,"ion-icon",32),e.k0s()()}}function S(a,y){if(1&a&&(e.j41(0,"div",36)(1,"markdown",37),e.EFF(2),e.k0s()()),2&a){const g=e.XpG().$implicit;e.R7$(2),e.JRh(g.message)}}function $(a,y){if(1&a&&(e.j41(0,"div",38)(1,"markdown",39),e.EFF(2),e.k0s()()),2&a){const g=e.XpG().$implicit;e.R7$(),e.Mz_("id","mk-",g.id,""),e.R7$(),e.JRh(g.message)}}function _(a,y){if(1&a&&(e.j41(0,"div",33),e.DNE(1,S,3,1,"div",34)(2,$,3,3,"div",35),e.k0s()),2&a){const g=y.$implicit;e.R7$(),e.Y8G("ngIf","User"===g.from),e.R7$(),e.Y8G("ngIf","AI"===g.from)}}const G=[{path:"",component:(()=>{var a;class y{constructor(s,t,o,i){this.activatedRoute=s,this.router=t,this.loadTestService=o,this.loadingCtrl=i,this.productObjective="",this.productStep="",this.orgName="",this.date="",this.loadTestResults={},this.totalNumberOfRequests=0,this.statusCodesOptions={tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value"},series:[]},this.responseTimeOptions={tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value"},series:[]},this.aiModal=!1,this.message="",this.vertexAI=(0,e.WQX)(H.L9),this.model=(0,H.oc)(this.vertexAI,{model:"gemini-1.5-flash"}),this.chat=this.model.startChat({history:[{role:"user",parts:[{text:"Hola, desde ahora en adelante quiero que seas un modelo experto en Software Quality Assurance y analista de datos, tu nombre es DevProbeAI, nunca lo puedes olvidar"}]},{role:"model",parts:[{text:"Soy un modelo experto en Software Quality Assurance, de igual forma tengo un masterado en anla\xedtica de datos \xbfEn qu\xe9 puedo ayudarte?"}]},{role:"user",parts:[{text:"Gracias, te voy a entregar un json con datos en unos minutos, necesito que lo analices y me des un resumen de los datos, este json contiene datos de un load test,tu analisis tiene que ser detallado, si encuentras inconsistencias en los datos, por favor mencionalas, en caso de que creas que puede haber un problema o que se encuentre el recurso no disponible por favor mencionalo, si encuentras algo interesante, por favor mencionalo, en resumen, necesito un analisis detallado de los datos"}]},{role:"model",parts:[{text:"Claro, env\xedame el json y yo me encargo de analizarlo"}]}]}),this.messages=[],this.hasBeenOpened=!1}ngOnInit(){var s=this;this.getParams(),this.getLoadTestHistoryByDate().then(function(){var t=(0,v.A)(function*(o){s.totalRequests(),yield s.plotCodes(),yield s.responseTime()});return function(o){return t.apply(this,arguments)}}())}getParams(){this.activatedRoute.params.subscribe(t=>{this.productObjective=t.productObjective,this.productStep=t.productStep,this.date=t.day});const s=JSON.parse(localStorage.getItem("user"));this.orgName=s.orgName,console.log(this.orgName),console.log(this.productObjective),console.log(this.productStep),console.log(this.date)}getLoadTestHistoryByDate(){var s=this;return(0,v.A)(function*(){s.loadTestResults=yield s.loadTestService.getLoadTestHistoryByDate(s.orgName,s.productObjective,s.productStep,s.date)})()}totalRequests(){let s=Object.keys(this.loadTestResults),t={},o=0;for(let i of s){let n=this.loadTestResults[i].aggregate.counters,c=this.loadTestResults[i].date,m=Object.keys(n).filter(l=>l.startsWith("http.responses"));for(let l of m)t[c]||(t[c]={}),t[c][l]=(t[c][l]||0)+n[l]}for(let i of Object.keys(t))o+=t[i]["http.responses"];this.totalNumberOfRequests=o}byCodes(){let s=Object.keys(this.loadTestResults),t={};for(let o of s){let i=this.loadTestResults[o].aggregate.counters,n=this.loadTestResults[o].date,c=Object.keys(i).filter(m=>m.startsWith("http.codes."));for(let m of c)t[n]||(t[n]={}),t[n][m]=i[m]}return console.log(t),t=this.ordenarDiccionarioPorFechas(t),t}normalizarFecha(s){console.log("fecha",s);const[t,o,i,n,c,m]=s.split("-").map(d=>parseInt(d,10));return`${t}-${o<10?`0${o}`:o.toString()}-${i<10?`0${i}`:i.toString()} ${n}:${c}:${m}`}ordenarDiccionarioPorFechas(s){const o=Object.keys(s).sort((n,c)=>{console.log("a",this.normalizarFecha(n)),console.log("b",this.normalizarFecha(c));const m=new Date(this.normalizarFecha(n)),l=new Date(this.normalizarFecha(c));return m.getTime()-l.getTime()}),i={};return o.forEach(n=>{i[n]=s[n]}),i}plotCodes(){var s=this;return(0,v.A)(function*(){let t=s.byCodes();console.log("codess",t);let o=Object.keys(t);console.log("llaves",o);let i=new Set;for(let l of o){let d=Object.keys(t[l]);for(let j of d)i.add(j)}let n={};for(let l in t){let r=t[l];for(let d of i)n[d]||(n[d]=[]),n[d].push(r[d]||0)}let c=["#36b311","#306fc6","#ed3b3b","#f4ba20"];for(let l in n){let d,r=l.split(".").pop();null!=r&&r.startsWith("2")&&(d=c[0]),null!=r&&r.startsWith("3")&&(d=c[1]),null!=r&&r.startsWith("4")&&(d=c[2]),null!=r&&r.startsWith("5")&&(d=c[3]),d||(d="#000000"),s.statusCodesOptions.series.push({name:l,type:"line",data:n[l],lineStyle:{color:d},itemStyle:{color:d}})}s.statusCodesOptions.xAxis={type:"category",boundaryGap:!1,data:o},s.statusCodesOptions={...s.statusCodesOptions};let m=document.getElementById("httpCodesChartHistory");console.log(m),m.style.width="100%",m.style.height="25em"})()}responseTime(){let s=Object.keys(this.loadTestResults),t={};for(let h of s){let u=this.loadTestResults[h].aggregate.histograms,k=this.loadTestResults[h].date,O=Object.keys(u).filter(T=>T.startsWith("http.response_time"));for(let T of O)t[k]=u[T]}let o=Object.keys(t);o=function i(h){return h.sort((u,k)=>{let O=u.split("-").slice(0,3).join("/"),T=k.split("-").slice(0,3).join("/"),E=u.split("-").slice(3,6).join(":"),V=T+" "+k.split("-").slice(3,6).join(":");return new Date(O+" "+E).getTime()-new Date(V).getTime()})}(o),console.log("date",o),console.log("responseTimes",t);let n=[],c=[],m=[],l=[],r=[],d=[];for(let h in o){console.log("date",o[h]);for(let u in t[o[h]])"min"===u&&n.push(t[o[h]][u]),"max"===u&&c.push(t[o[h]][u]),"p95"===u&&m.push(t[o[h]][u]),"p99"===u&&l.push(t[o[h]][u]),"mean"===u&&r.push(t[o[h]][u]),"median"===u&&d.push(t[o[h]][u])}console.log("min",n);let j={min:n,max:c,p95:m,p99:l,mean:r,median:d};this.responseTimeOptions.series=[];for(let h in j)this.responseTimeOptions.series.push({name:h,type:"bar",data:j[h]});this.responseTimeOptions.xAxis={type:"category",boundaryGap:!1,data:o},this.responseTimeOptions={...this.responseTimeOptions};let C=document.getElementById("httpResponseTimeChartHistory");return console.log(C),C.style.width="100%",C.style.height="25em",t}toggleAiModal(s){var t=this;return(0,v.A)(function*(){if(yield t.showLoading(),t.aiModal=!t.aiModal,t.hasBeenOpened=!0,"httpCodesOptions"===s&&(t.message="En este caso el json tiene codigos de respuesta HTTP, por ejemplo, 404, 500, etc y cuantos requests devolvieron esos codigos:"+JSON.stringify(t.byCodes())),"httpResponseTimeOptions"===s&&(t.message="En este caso el json tiene tiempos de respuesta de los requests, por ejemplo, 500ms, 1000ms, etc: "+JSON.stringify(t.responseTime())),""===t.message)return console.log("Message is empty"),void(yield t.hideLoading());let o=t.messages.length;o>0&&t.messages.push({message:t.message,from:"User",id:o.toString()});const i=yield t.chat.sendMessage(t.message);o=t.messages.length,t.messages.push({message:i.response.text(),from:"AI",id:o.toString()}),t.message="",yield t.hideLoading()})()}sendMessage(){var s=this;let t=this.messages.length;this.messages.push({message:this.message,from:"User",id:t.toString()}),this.chat.sendMessage(this.message).then(function(){var o=(0,v.A)(function*(i){yield s.showLoading(),t=s.messages.length,s.messages.push({message:i.response.text(),from:"AI",id:t.toString()}),yield s.hideLoading()});return function(i){return o.apply(this,arguments)}}()),this.message=""}showLoading(){var s=this;return(0,v.A)(function*(){yield(yield s.loadingCtrl.create({})).present()})()}hideLoading(){var s=this;return(0,v.A)(function*(){yield s.loadingCtrl.dismiss()})()}}return(a=y).\u0275fac=function(s){return new(s||a)(e.rXU(b.nX),e.rXU(b.Ix),e.rXU(P.s),e.rXU(f.Xi))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-load-test-history"]],viewQuery:function(s,t){if(1&s&&e.GBs(N,5),2&s){let o;e.mGM(o=e.lsd())&&(t.messagesContainer=o.first)}},decls:55,vars:14,consts:[["messagesContainer",""],[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12",1,"w-full"],[1,"w-full","p-6","flex","flex-col","justify-center","items-center"],[1,"text-3xl"],[1,"text-2xl","text-white"],["size","12",1,"relative","flex","flex-row","justify-center"],[1,"absolute","z-10","w-full","flex","flex-row","justify-end"],[1,"h-12","w-12","bg-purple-400","p-2",3,"click"],["name","color-wand-outline",1,"w-full","h-full"],[1,"h-[25em]","w-full"],["id","httpCodesChartHistory","echarts","",1,"demo-chart","h-full","w-full",3,"options"],["id","httpResponseTimeChartHistory","echarts","",1,"demo-chart","h-full","w-full",3,"options"],["vertical","bottom","horizontal","end","slot","fixed",1,"m-2","z-10"],["id","ai-modal",1,"fixed","bottom-0","right-0","h-full","w-full","bg-black","bg-opacity-60","z-10","r"],[1,"h-full","md:h-3/4","lg:h-3/4","w-full","bg-gray-900","p-4","absolute","right-0","bottom-0","z-50","flex","flex-col","rounded-tl-2xl","rounded-tr-2xl"],[1,"w-full","bg-gray-500","flex","flex-row","justify-center","items-center","p-2","mb-2","rounded-3xl"],[1,"flex","flex-row","p-2","items-center","bg-gray-800","w-full","rounded-3xl","h-full"],[1,"text-white"],[1,"m-2"],[1,"flex","flex-row","justify-center","items-center","bg-gray-800","hover:bg-gray-600","w-1/6","h-full","rounded-3xl",3,"click"],["name","close-outline"],[1,"flex-grow","overflow-y-auto","bg-gray-400","p-2","rounded-3xl"],["class","flex flex-col",4,"ngFor","ngForOf"],[1,"flex","flex-row","mt-2","p-2"],["placeholder","Ask...",1,"flex-grow","bg-gray-700","rounded-2xl",3,"ngModelChange","ngModel"],[1,"m-1"],[1,"w-1/3","bg-gray-500","rounded-3xl","flex","flex-row","justify-center","items-center","hover:bg-gray-300",3,"click"],["vertical","bottom","horizontal","end","slot","fixed",1,"m-2","z-10",3,"click"],[1,"bg-purple-300","p-1","lg:p-4","md:p-4"],["name","chatbubble-outline",1,"w-full","h-full"],[1,"flex","flex-col"],["class","rounded-3xl bg-gray-800 w-2/3 m-1 ml-auto p-2",4,"ngIf"],["class","rounded-3xl bg-gray-500 w-2/3 m-1 p-2 pr-2",4,"ngIf"],[1,"rounded-3xl","bg-gray-800","w-2/3","m-1","ml-auto","p-2"],[1,"text-white","p-4","m-2"],[1,"rounded-3xl","bg-gray-500","w-2/3","m-1","p-2","pr-2"],[1,"text-white","p-4","m-2",3,"id"]],template:function(s,t){if(1&s){const o=e.RV6();e.nrm(0,"app-header-return",1),e.j41(1,"ion-content",2)(2,"ion-grid"),e.nrm(3,"app-title",1),e.j41(4,"ion-row",3)(5,"ion-col",4)(6,"ion-card",5)(7,"ion-card-header")(8,"ion-card-title",6),e.EFF(9,"Total Number of Requests"),e.k0s()(),e.j41(10,"ion-card-content")(11,"h1",7),e.EFF(12),e.nI1(13,"number"),e.k0s()()()()(),e.j41(14,"ion-row",3)(15,"ion-col",8)(16,"div",9)(17,"ion-avatar",10),e.bIt("click",function(){return e.eBV(o),e.Njj(t.toggleAiModal("httpCodesOptions"))}),e.nrm(18,"ion-icon",11),e.k0s()(),e.j41(19,"ion-card",5)(20,"ion-card-header")(21,"ion-card-title",6),e.EFF(22,"HTTP Status Codes"),e.k0s()(),e.j41(23,"ion-card-content",12),e.nrm(24,"div",13),e.k0s()()()(),e.j41(25,"ion-row",3)(26,"ion-col",8)(27,"div",9)(28,"ion-avatar",10),e.bIt("click",function(){return e.eBV(o),e.Njj(t.toggleAiModal("httpResponseTimeOptions"))}),e.nrm(29,"ion-icon",11),e.k0s()(),e.j41(30,"ion-card",5)(31,"ion-card-header")(32,"ion-card-title",6),e.EFF(33,"HTTP Response Time"),e.k0s()(),e.j41(34,"ion-card-content",12),e.nrm(35,"div",14),e.k0s()()()()(),e.DNE(36,I,3,0,"ion-fab",15),e.k0s(),e.j41(37,"div",16)(38,"div",17)(39,"div",18)(40,"div",19)(41,"h1",20),e.EFF(42,"DevProbe AI"),e.k0s()(),e.nrm(43,"div",21),e.j41(44,"div",22),e.bIt("click",function(){return e.eBV(o),e.Njj(t.toggleAiModal())}),e.nrm(45,"ion-icon",23),e.k0s()(),e.j41(46,"div",24,0),e.DNE(48,_,3,2,"div",25),e.k0s(),e.j41(49,"div",26)(50,"ion-textarea",27),e.mxI("ngModelChange",function(n){return e.eBV(o),e.DH7(t.message,n)||(t.message=n),e.Njj(n)}),e.k0s(),e.nrm(51,"div",28),e.j41(52,"div",29),e.bIt("click",function(){return e.eBV(o),e.Njj(t.sendMessage())}),e.j41(53,"span",20),e.EFF(54,"Send"),e.k0s()()()()()}2&s&&(e.Y8G("title","History For: "+t.date),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(2),e.Y8G("title","Load Test History"),e.R7$(9),e.JRh(e.i5U(13,11,t.totalNumberOfRequests,"1.0-0")),e.R7$(12),e.Y8G("options",t.statusCodesOptions),e.R7$(11),e.Y8G("options",t.responseTimeOptions),e.R7$(),e.vxM(36,t.hasBeenOpened?36:-1),e.R7$(),e.AVh("hidden",!t.aiModal),e.R7$(11),e.Y8G("ngForOf",t.messages),e.R7$(2),e.R50("ngModel",t.message))},dependencies:[x.Sq,x.bT,R.BC,R.vS,f.mC,f.b_,f.I9,f.ME,f.tN,f.hU,f.W9,f.Q8,f.lO,f.iq,f.ln,f.nc,f.Gw,M.W,F.p,A.$P,L.NN,x.QX]}),y})()}];let D=(()=>{var a;class y{}return(a=y).\u0275fac=function(s){return new(s||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[b.iI.forChild(G),b.iI]}),y})();var z=p(5553);let B=(()=>{var a;class y{}return(a=y).\u0275fac=function(s){return new(s||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[x.MD,R.YN,f.bv,D,z.h,L.NN]}),y})()}}]);