"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6303],{5553:(b,_,i)=>{i.d(_,{h:()=>p});var u=i(177),f=i(7863),c=i(4438);let p=(()=>{var d;class e{}return(d=e).\u0275fac=function(h){return new(h||d)},d.\u0275mod=c.$C({type:d}),d.\u0275inj=c.G2t({imports:[u.MD,f.bv]}),e})()},3241:(b,_,i)=>{i.d(_,{p:()=>p});var u=i(4438),f=i(177),c=i(7863);let p=(()=>{var d;class e{constructor(h){this.location=h,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(d=e).\u0275fac=function(h){return new(h||d)(u.rXU(f.aZ))},d.\u0275cmp=u.VBU({type:d,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(h,C){1&h&&(u.j41(0,"ion-header",0)(1,"ion-toolbar"),u.nrm(2,"ion-menu-button",1),u.j41(3,"ion-icon",2),u.bIt("click",function(){return C.goBack()}),u.k0s(),u.j41(4,"ion-title"),u.EFF(5),u.k0s()()()),2&h&&(u.Y8G("translucent",!0),u.R7$(5),u.JRh(C.title))},dependencies:[c.eU,c.iq,c.MC,c.BC,c.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),e})()},6303:(b,_,i)=>{i.r(_),i.d(_,{GraphTracePageModule:()=>I});var u=i(177),f=i(4341),c=i(7863),p=i(7650),d=i(467),e=i(4438),y=i(9032),h=i(2588),C=i(3241),j=i(2820),G=i(9549);const w=["messagesContainer"];function P(r,m){if(1&r){const l=e.RV6();e.j41(0,"ion-col",27)(1,"div",28)(2,"ion-avatar",29)(3,"ion-icon",30),e.bIt("click",function(){const o=e.eBV(l).$implicit,n=e.XpG();return e.Njj(n.toggleAiModal(o,!0))}),e.k0s()(),e.nrm(4,"div",25),e.j41(5,"ion-avatar",31)(6,"ion-icon",32),e.bIt("click",function(){const o=e.eBV(l).$implicit,n=e.XpG();return e.Njj(n.toggleAiModal(o))}),e.k0s()()(),e.j41(7,"ion-card",33)(8,"ion-card-title",34)(9,"h1",35),e.EFF(10),e.k0s()(),e.nrm(11,"br")(12,"div",36),e.k0s()()}if(2&r){const l=m.$implicit,t=e.XpG();e.R7$(2),e.Mz_("id","hover-trigger-",l,"-danger"),e.R7$(3),e.Mz_("id","hover-trigger-",l,""),e.R7$(5),e.JRh(l),e.R7$(2),e.Y8G("options",t.countryOptions[l])}}function R(r,m){if(1&r&&(e.j41(0,"div",40)(1,"markdown",41),e.EFF(2),e.k0s()()),2&r){const l=e.XpG().$implicit;e.R7$(2),e.JRh(l.message)}}function k(r,m){if(1&r&&(e.j41(0,"div",42)(1,"markdown",43),e.EFF(2),e.k0s()()),2&r){const l=e.XpG().$implicit;e.R7$(),e.Mz_("id","mk-",l.id,""),e.R7$(),e.JRh(l.message)}}function A(r,m){if(1&r&&(e.j41(0,"div",37),e.DNE(1,R,3,1,"div",38)(2,k,3,3,"div",39),e.k0s()),2&r){const l=m.$implicit;e.R7$(),e.Y8G("ngIf","User"===l.from),e.R7$(),e.Y8G("ngIf","AI"===l.from)}}const E=[{path:"",component:(()=>{var r;class m{constructor(t,o,n){this.ripeService=t,this.route=o,this.loadingCtrl=n,this.orgName="",this.productObjective="",this.user={},this.data=[],this.countries=[],this.countryOptions={},this.aiModal=!1,this.message="",this.vertexAI=(0,e.WQX)(y.L9),this.model=(0,y.oc)(this.vertexAI,{model:"gemini-1.5-flash"}),this.chat=this.model.startChat({history:[{role:"user",parts:[{text:"Hola, desde ahora en adelante quiero que seas un modelo experto en Software Quality Assurance y analista de datos, tu nombre es DevProbeAI, nunca lo puedes olvidar"}]},{role:"model",parts:[{text:"Soy un modelo experto en Software Quality Assurance, de igual forma tengo un masterado en anla\xedtica de datos \xbfEn qu\xe9 puedo ayudarte?"}]},{role:"user",parts:[{text:"Gracias, te voy a entregar un json con datos en unos minutos, necesito que lo analices y me des un resumen de los datos, este json contiene datos de varios traceroutes por un pais especifico, imagina que ,tu analisis tiene que ser detallado, si encuentras inconsistencias en los datos, por favor mencionalas, en caso de que creas que puede haber un error de ruteo por favor mencionalo, si encuentras algo interesante, por favor mencionalo, en resumen, necesito un analisis detallado de los datos"}]},{role:"model",parts:[{text:"Claro, env\xedame el json y yo me encargo de analizarlo"}]}]}),this.messages=[]}ionViewWillEnter(){var t=this;return(0,d.A)(function*(){t.route.queryParams.subscribe(n=>{t.productObjective=n.product});const o=localStorage.getItem("user");o&&(t.user=JSON.parse(o),t.orgName=t.user.orgName,t.data=[],t.getResultsHistoryforRtt().then(()=>{t.groupByDate().then(()=>{t.groupByCountry().then(()=>{t.populateCountries(),t.generateCountryOptions()})})}))})()}getResultsHistoryforRtt(){var t=this;return(0,d.A)(function*(){yield t.ripeService.getHistoryResults(t.orgName,t.productObjective).then(o=>{for(let n=0;n<o.length;n++){let s=o[n].id.split("-");t.data.push({id:s[1],date:s[3]+"/"+s[2]+"/"+s[4],time:s[5],data:o[n].data.data})}console.log(t.data)})})()}groupByDate(){var t=this;return(0,d.A)(function*(){let o={};for(let a=0;a<t.data.length;a++){let g=t.data[a].date;o[g]||(o[g]=[]),o[g].push(...t.data[a].data)}const n=Object.keys(o).sort((a,g)=>new Date(a).getTime()-new Date(g).getTime());let s={};for(let a of n)s[a]=o[a];t.data=s,console.log(t.data)})()}groupByCountry(){var t=this;return(0,d.A)(function*(){let o={};for(let n in t.data){let s=t.data[n];o[n]||(o[n]={});for(let a=0;a<s.length;a++){let g=s[a].src_country;"No country found"!==g&&(o[n][g]||(o[n][g]=[]),o[n][g].push(s[a]))}}t.data=o,console.log(t.data)})()}populateCountries(){var t=this;return(0,d.A)(function*(){const o=new Set;for(let n in t.data)for(let s in t.data[n])o.add(s);t.countries=Array.from(o),console.log(t.countries)})()}getRandomColor(){let o="#";for(let n=0;n<6;n++)o+="0123456789ABCDEF"[Math.floor(16*Math.random())];return o}generateCountryOptions(){for(let t of this.countries){const o=[],n=[];for(let a in this.data){let g=0,v=0;if(this.data[a][t]){for(let M=0;M<this.data[a][t].length;M++){let T=this.data[a][t][M];for(let x=0;x<T.result.length;x++)"number"==typeof T.result[x].result[0].rtt&&(g+=T.result[x].result[0].rtt,v++)}v>0&&(o.push(a),n.push(g/v))}}const s=this.getRandomColor();this.countryOptions[t]={legend:{data:[t],align:"left",backgroundColor:"rgba(255, 255, 255, 0.9)"},tooltip:{},xAxis:{data:o,silent:!1,splitLine:{show:!1}},yAxis:{},series:[{name:t,type:"bar",data:n,itemStyle:{color:s},animationDelay:a=>10*a}],animationEasing:"elasticOut",animationDelayUpdate:a=>5*a}}}refresh(){window.location.reload()}ngOnInit(){}toggleAiModal(t,o){var n=this;return(0,d.A)(function*(){if(n.aiModal=!n.aiModal,t){console.log("Country: "+t);const s=n.countryOptions[t].series[0].data,a=n.countryOptions[t].xAxis.data;console.log(s),console.log(a);const g={country:t,data:{date:a,data:s}};yield n.sendMessage(g).then(()=>{n.chatStyle()})}})()}ngAfterViewChecked(){this.scrollToBottom()}scrollToBottom(){if(this.messagesContainer)try{this.messagesContainer.nativeElement.scrollTop=this.messagesContainer.nativeElement.scrollHeight}catch(t){console.error("Error al hacer scroll:",t)}}sendMessage(t){var o=this;return(0,d.A)(function*(){if(t){yield o.showLoading(),console.log("Country data:",t);const a=JSON.stringify(t),g=yield o.chat.sendMessage(a),v=o.messages.length;return o.messages.push({message:g.response.text(),from:"AI",id:v.toString()}),console.log("Message:",o.message),o.message="",void(yield o.hideLoading())}if(""===o.message)return void console.log("Message is empty");let n=o.messages.length;o.messages.push({message:o.message,from:"User",id:n.toString()});const s=yield o.chat.sendMessage(o.message);n=o.messages.length,o.messages.push({message:s.response.text(),from:"AI",id:n.toString()}),o.message=""})()}chatStyle(){const o=document.getElementById("mk-"+(this.messages.length-1));if(console.log(o),!o)return;let n=o.getElementsByTagName("h1"),s=o.getElementsByTagName("h2");for(var a=0;a<n.length;a++)n[a].style.fontSize="2.5em",n[a].style.fontWeight="bold";for(a=0;a<s.length;a++)s[a].style.fontSize="2em",s[a].style.fontWeight="bold"}showLoading(){var t=this;return(0,d.A)(function*(){yield(yield t.loadingCtrl.create({})).present()})()}hideLoading(){var t=this;return(0,d.A)(function*(){yield t.loadingCtrl.dismiss()})()}}return(r=m).\u0275fac=function(t){return new(t||r)(e.rXU(h.N),e.rXU(p.nX),e.rXU(c.Xi))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-graph-trace"]],viewQuery:function(t,o){if(1&t&&e.GBs(w,5),2&t){let n;e.mGM(n=e.lsd())&&(o.messagesContainer=n.first)}},decls:32,vars:7,consts:[["messagesContainer",""],[3,"title"],[3,"fullscreen"],[1,"lg:m-10"],["size","6","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"],["size","6","size-md","6","size-lg","6",1,"text-right"],["name","refresh",1,"text-4xl","lg:text-6xl","font-bold","onreloadhover",3,"click"],[1,"lg:m-10","md:m-10"],["size","12","size-md","6","size-lg","6","class","flex flex-row justify-center relative",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed",1,"m-2","z-10",3,"click"],[1,"bg-purple-300","p-4"],["name","chatbubble-outline",1,"w-full","h-full"],["id","ai-modal",1,"fixed","bottom-0","right-0","h-full","w-full","bg-black","bg-opacity-60","z-10","r"],[1,"h-full","md:h-3/4","lg:h-3/4","w-full","bg-gray-900","p-4","absolute","right-0","bottom-0","z-50","flex","flex-col","rounded-tl-2xl","rounded-tr-2xl"],[1,"w-full","bg-gray-500","flex","flex-row","justify-center","items-center","p-2","mb-2","rounded-3xl"],[1,"flex","flex-row","p-2","items-center","bg-gray-800","w-full","rounded-3xl","h-full"],[1,"text-white"],[1,"m-2"],[1,"flex","flex-row","justify-center","items-center","bg-gray-800","hover:bg-gray-600","w-1/6","h-full","rounded-3xl",3,"click"],["name","close-outline"],[1,"flex-grow","overflow-y-auto","bg-gray-400","p-2","rounded-3xl"],["class","flex flex-col",4,"ngFor","ngForOf"],[1,"flex","flex-row","mt-2","p-2"],["placeholder","Ask...",1,"flex-grow","bg-gray-700","rounded-2xl",3,"ngModelChange","ngModel"],[1,"m-1"],[1,"w-1/3","bg-gray-500","rounded-3xl","flex","flex-row","justify-center","items-center","hover:bg-gray-300",3,"click"],["size","12","size-md","6","size-lg","6",1,"flex","flex-row","justify-center","relative"],[1,"absolute","z-10","w-full","flex","flex-row","justify-end"],[1,"h-12","w-12","bg-red-600","p-2",3,"id"],["name","warning-outline",1,"w-full","h-full",3,"click"],[1,"h-12","w-12","bg-purple-400","p-2",3,"id"],["name","color-wand-outline",1,"w-full","h-full",3,"click"],[1,"w-full","h-96","p-6","flex","flex-col","justify-center","items-center"],[1,""],[1,"text-6xl","font-bold","text-white"],["echarts","",1,"demo-chart","h-full","w-full","min-w-full",3,"options"],[1,"flex","flex-col"],["class","rounded-3xl bg-gray-800 w-2/3 m-1 ml-auto p-2",4,"ngIf"],["class","rounded-3xl bg-gray-500 w-2/3 m-1 p-2 pr-2",4,"ngIf"],[1,"rounded-3xl","bg-gray-800","w-2/3","m-1","ml-auto","p-2"],[1,"text-white","p-4","m-2"],[1,"rounded-3xl","bg-gray-500","w-2/3","m-1","p-2","pr-2"],[1,"text-white","p-4","m-2",3,"id"]],template:function(t,o){if(1&t){const n=e.RV6();e.nrm(0,"app-header-return",1),e.j41(1,"ion-content",2)(2,"ion-grid")(3,"ion-row",3)(4,"ion-col",4)(5,"h1",5),e.EFF(6,"Traceroute Graph"),e.k0s()(),e.j41(7,"ion-col",6)(8,"ion-icon",7),e.bIt("click",function(){return e.eBV(n),e.Njj(o.refresh())}),e.k0s()()(),e.j41(9,"ion-row",8),e.DNE(10,P,13,6,"ion-col",9),e.k0s()(),e.j41(11,"ion-fab",10),e.bIt("click",function(){return e.eBV(n),e.Njj(o.toggleAiModal())}),e.j41(12,"ion-avatar",11),e.nrm(13,"ion-icon",12),e.k0s()()(),e.j41(14,"div",13)(15,"div",14)(16,"div",15)(17,"div",16)(18,"h1",17),e.EFF(19,"DevProbe AI"),e.k0s()(),e.nrm(20,"div",18),e.j41(21,"div",19),e.bIt("click",function(){return e.eBV(n),e.Njj(o.toggleAiModal())}),e.nrm(22,"ion-icon",20),e.k0s()(),e.j41(23,"div",21,0),e.DNE(25,A,3,2,"div",22),e.k0s(),e.j41(26,"div",23)(27,"ion-textarea",24),e.mxI("ngModelChange",function(a){return e.eBV(n),e.DH7(o.message,a)||(o.message=a),e.Njj(a)}),e.k0s(),e.nrm(28,"div",25),e.j41(29,"div",26),e.bIt("click",function(){return e.eBV(n),e.Njj(o.sendMessage())}),e.j41(30,"span",17),e.EFF(31,"Send"),e.k0s()()()()()}2&t&&(e.Y8G("title","Traceroute Graph"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(9),e.Y8G("ngForOf",o.countries),e.R7$(4),e.AVh("hidden",!o.aiModal),e.R7$(11),e.Y8G("ngForOf",o.messages),e.R7$(2),e.R50("ngModel",o.message))},dependencies:[u.Sq,u.bT,f.BC,f.vS,c.mC,c.b_,c.tN,c.hU,c.W9,c.Q8,c.lO,c.iq,c.ln,c.nc,c.Gw,C.p,j.$P,G.NN],styles:["@keyframes _ngcontent-%COMP%_rotate90deg{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.onreloadhover[_ngcontent-%COMP%]:hover{animation:_ngcontent-%COMP%_rotate90deg .9s linear infinite}"]}),m})()}];let O=(()=>{var r;class m{}return(r=m).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[p.iI.forChild(E),p.iI]}),m})();var D=i(5553);let I=(()=>{var r;class m{}return(r=m).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[u.MD,f.YN,c.bv,O,D.h,G.NN]}),m})()}}]);