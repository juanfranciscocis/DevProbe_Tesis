"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7907],{5553:(j,_,i)=>{i.d(_,{h:()=>p});var d=i(177),h=i(7863),c=i(4438);let p=(()=>{var u;class e{}return(u=e).\u0275fac=function(f){return new(f||u)},u.\u0275mod=c.$C({type:u}),u.\u0275inj=c.G2t({imports:[d.MD,h.bv]}),e})()},3241:(j,_,i)=>{i.d(_,{p:()=>p});var d=i(4438),h=i(177),c=i(7863);let p=(()=>{var u;class e{constructor(f){this.location=f,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(u=e).\u0275fac=function(f){return new(f||u)(d.rXU(h.aZ))},u.\u0275cmp=d.VBU({type:u,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(f,C){1&f&&(d.j41(0,"ion-header",0)(1,"ion-toolbar"),d.nrm(2,"ion-menu-button",1),d.j41(3,"ion-icon",2),d.bIt("click",function(){return C.goBack()}),d.k0s(),d.j41(4,"ion-title"),d.EFF(5),d.k0s()()()),2&f&&(d.Y8G("translucent",!0),d.R7$(5),d.JRh(C.title))},dependencies:[c.eU,c.iq,c.MC,c.BC,c.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),e})()},7907:(j,_,i)=>{i.r(_),i.d(_,{GraphTracePageModule:()=>D});var d=i(177),h=i(4341),c=i(7863),p=i(305),u=i(467),e=i(4438),v=i(9032),f=i(2588),C=i(3241),b=i(4688);const G=["messagesContainer"];function P(r,m){if(1&r){const l=e.RV6();e.j41(0,"ion-col",27)(1,"div",28)(2,"ion-avatar",29)(3,"ion-icon",30),e.bIt("click",function(){const o=e.eBV(l).$implicit,a=e.XpG();return e.Njj(a.toggleAiModal(o,!0))}),e.k0s()(),e.nrm(4,"div",25),e.j41(5,"ion-avatar",31)(6,"ion-icon",32),e.bIt("click",function(){const o=e.eBV(l).$implicit,a=e.XpG();return e.Njj(a.toggleAiModal(o))}),e.k0s()()(),e.j41(7,"ion-card",33)(8,"ion-card-title",34)(9,"h1",35),e.EFF(10),e.k0s()(),e.nrm(11,"br")(12,"div",36),e.k0s()()}if(2&r){const l=m.$implicit,t=e.XpG();e.R7$(2),e.Mz_("id","hover-trigger-",l,"-danger"),e.R7$(3),e.Mz_("id","hover-trigger-",l,""),e.R7$(5),e.JRh(l),e.R7$(2),e.Y8G("options",t.countryOptions[l])}}function R(r,m){if(1&r&&(e.j41(0,"div",40)(1,"p",41),e.EFF(2),e.k0s()()),2&r){const l=e.XpG().$implicit;e.R7$(2),e.JRh(l.message)}}function w(r,m){if(1&r&&(e.j41(0,"div",42)(1,"p",41),e.EFF(2),e.k0s()()),2&r){const l=e.XpG().$implicit;e.R7$(2),e.JRh(l.message)}}function k(r,m){if(1&r&&(e.j41(0,"div",37),e.DNE(1,R,3,1,"div",38)(2,w,3,1,"div",39),e.k0s()),2&r){const l=m.$implicit;e.R7$(),e.Y8G("ngIf","User"===l.from),e.R7$(),e.Y8G("ngIf","AI"===l.from)}}const A=[{path:"",component:(()=>{var r;class m{constructor(t,o){this.ripeService=t,this.route=o,this.orgName="",this.productObjective="",this.user={},this.data=[],this.countries=[],this.countryOptions={},this.aiModal=!1,this.message="",this.vertexAI=(0,e.WQX)(v.L9),this.model=(0,v.oc)(this.vertexAI,{model:"gemini-1.5-flash"}),this.chat=this.model.startChat({history:[{role:"user",parts:[{text:"Hola, desde ahora en adelante quiero que seas un modelo experto en Software Quality Assurance y analista de datos, tu nombre es DevProbeAI, nunca lo puedes olvidar"}]},{role:"model",parts:[{text:"Soy un modelo experto en Software Quality Assurance, de igual forma tengo un masterado en anla\xedtica de datos \xbfEn qu\xe9 puedo ayudarte?"}]},{role:"user",parts:[{text:"Gracias, te voy a entregar un json con datos en unos minutos, necesito que lo analices y me des un resumen de los datos, este json contiene datos de varios traceroutes por un pais especifico, imagina que ,tu analisis tiene que ser detallado, si encuentras inconsistencias en los datos, por favor mencionalas, en caso de que creas que puede haber un error de ruteo por favor mencionalo, si encuentras algo interesante, por favor mencionalo, en resumen, necesito un analisis detallado de los datos"}]},{role:"model",parts:[{text:"Claro, env\xedame el json y yo me encargo de analizarlo"}]}]}),this.messages=[]}ionViewWillEnter(){var t=this;return(0,u.A)(function*(){t.route.queryParams.subscribe(a=>{t.productObjective=a.product});const o=localStorage.getItem("user");o&&(t.user=JSON.parse(o),t.orgName=t.user.orgName,t.data=[],t.getResultsHistoryforRtt().then(()=>{t.groupByDate().then(()=>{t.groupByCountry().then(()=>{t.populateCountries(),t.generateCountryOptions()})})}))})()}getResultsHistoryforRtt(){var t=this;return(0,u.A)(function*(){yield t.ripeService.getHistoryResults(t.orgName,t.productObjective).then(o=>{for(let a=0;a<o.length;a++){let s=o[a].id.split("-");t.data.push({id:s[1],date:s[3]+"/"+s[2]+"/"+s[4],time:s[5],data:o[a].data.data})}console.log(t.data)})})()}groupByDate(){var t=this;return(0,u.A)(function*(){let o={};for(let n=0;n<t.data.length;n++){let g=t.data[n].date;o[g]||(o[g]=[]),o[g].push(...t.data[n].data)}const a=Object.keys(o).sort((n,g)=>new Date(n).getTime()-new Date(g).getTime());let s={};for(let n of a)s[n]=o[n];t.data=s,console.log(t.data)})()}groupByCountry(){var t=this;return(0,u.A)(function*(){let o={};for(let a in t.data){let s=t.data[a];o[a]||(o[a]={});for(let n=0;n<s.length;n++){let g=s[n].src_country;"No country found"!==g&&(o[a][g]||(o[a][g]=[]),o[a][g].push(s[n]))}}t.data=o,console.log(t.data)})()}populateCountries(){var t=this;return(0,u.A)(function*(){const o=new Set;for(let a in t.data)for(let s in t.data[a])o.add(s);t.countries=Array.from(o),console.log(t.countries)})()}getRandomColor(){let o="#";for(let a=0;a<6;a++)o+="0123456789ABCDEF"[Math.floor(16*Math.random())];return o}generateCountryOptions(){for(let t of this.countries){const o=[],a=[];for(let n in this.data){let g=0,x=0;if(this.data[n][t]){for(let M=0;M<this.data[n][t].length;M++){let T=this.data[n][t][M];for(let y=0;y<T.result.length;y++)"number"==typeof T.result[y].result[0].rtt&&(g+=T.result[y].result[0].rtt,x++)}x>0&&(o.push(n),a.push(g/x))}}const s=this.getRandomColor();this.countryOptions[t]={legend:{data:[t],align:"left",backgroundColor:"rgba(255, 255, 255, 0.9)"},tooltip:{},xAxis:{data:o,silent:!1,splitLine:{show:!1}},yAxis:{},series:[{name:t,type:"bar",data:a,itemStyle:{color:s},animationDelay:n=>10*n}],animationEasing:"elasticOut",animationDelayUpdate:n=>5*n}}}refresh(){window.location.reload()}ngOnInit(){}toggleAiModal(t,o){var a=this;return(0,u.A)(function*(){if(a.aiModal=!a.aiModal,t){console.log("Country: "+t);const s=a.countryOptions[t].series[0].data,n=a.countryOptions[t].xAxis.data;console.log(s),console.log(n);const g={country:t,data:{date:n,data:s}};yield a.sendMessage(g)}})()}ngAfterViewChecked(){this.scrollToBottom()}scrollToBottom(){if(this.messagesContainer)try{this.messagesContainer.nativeElement.scrollTop=this.messagesContainer.nativeElement.scrollHeight}catch(t){console.error("Error al hacer scroll:",t)}}sendMessage(t){var o=this;return(0,u.A)(function*(){if(t){console.log("Country data:",t);const s=JSON.stringify(t),n=yield o.chat.sendMessage(s);return o.messages.push({message:n.response.text(),from:"AI"}),console.log("Message:",o.message),void(o.message="")}if(""===o.message)return void console.log("Message is empty");o.messages.push({message:o.message,from:"User"});const a=yield o.chat.sendMessage(o.message);o.messages.push({message:a.response.text(),from:"AI"}),o.message=""})()}}return(r=m).\u0275fac=function(t){return new(t||r)(e.rXU(f.N),e.rXU(p.nX))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-graph-trace"]],viewQuery:function(t,o){if(1&t&&e.GBs(G,5),2&t){let a;e.mGM(a=e.lsd())&&(o.messagesContainer=a.first)}},decls:32,vars:7,consts:[["messagesContainer",""],[3,"title"],[3,"fullscreen"],[1,"lg:m-10"],["size","6","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"],["size","6","size-md","6","size-lg","6",1,"text-right"],["name","refresh",1,"text-4xl","lg:text-6xl","font-bold","onreloadhover",3,"click"],[1,"lg:m-10","md:m-10"],["size","12","size-md","6","size-lg","6","class","flex flex-row justify-center relative",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed",1,"m-2","z-10",3,"click"],[1,"bg-purple-300","p-4"],["name","chatbubble-outline",1,"w-full","h-full"],["id","ai-modal",1,"fixed","bottom-0","right-0","h-full","w-full","bg-black","bg-opacity-60","z-10","r"],[1,"h-full","md:h-3/4","lg:h-3/4","w-full","bg-gray-900","p-4","absolute","right-0","bottom-0","z-50","flex","flex-col","rounded-tl-2xl","rounded-tr-2xl"],[1,"w-full","bg-gray-500","flex","flex-row","justify-center","items-center","p-2","mb-2","rounded-3xl"],[1,"flex","flex-row","p-2","items-center","bg-gray-800","w-full","rounded-3xl","h-full"],[1,"text-white"],[1,"m-2"],[1,"flex","flex-row","justify-center","items-center","bg-gray-800","hover:bg-gray-600","w-1/6","h-full","rounded-3xl",3,"click"],["name","close-outline"],[1,"flex-grow","overflow-y-auto","bg-gray-400","p-2","rounded-3xl"],["class","flex flex-col",4,"ngFor","ngForOf"],[1,"flex","flex-row","mt-2","p-2"],["placeholder","Ask...",1,"flex-grow","bg-gray-700","rounded-2xl",3,"ngModelChange","ngModel"],[1,"m-1"],[1,"w-1/3","bg-gray-500","rounded-3xl","flex","flex-row","justify-center","items-center","hover:bg-gray-300",3,"click"],["size","12","size-md","6","size-lg","6",1,"flex","flex-row","justify-center","relative"],[1,"absolute","z-10","w-full","flex","flex-row","justify-end"],[1,"h-12","w-12","bg-red-600","p-2",3,"id"],["name","warning-outline",1,"w-full","h-full",3,"click"],[1,"h-12","w-12","bg-purple-400","p-2",3,"id"],["name","color-wand-outline",1,"w-full","h-full",3,"click"],[1,"w-full","h-96","p-6","flex","flex-col","justify-center","items-center"],[1,""],[1,"text-6xl","font-bold","text-white"],["echarts","",1,"demo-chart","h-full","w-full","min-w-full",3,"options"],[1,"flex","flex-col"],["class","rounded-3xl bg-gray-800 w-2/3 m-1 ml-auto",4,"ngIf"],["class","rounded-3xl bg-gray-500 w-2/3 m-1",4,"ngIf"],[1,"rounded-3xl","bg-gray-800","w-2/3","m-1","ml-auto"],[1,"text-white","p-4"],[1,"rounded-3xl","bg-gray-500","w-2/3","m-1"]],template:function(t,o){if(1&t){const a=e.RV6();e.nrm(0,"app-header-return",1),e.j41(1,"ion-content",2)(2,"ion-grid")(3,"ion-row",3)(4,"ion-col",4)(5,"h1",5),e.EFF(6,"Traceroute Graph"),e.k0s()(),e.j41(7,"ion-col",6)(8,"ion-icon",7),e.bIt("click",function(){return e.eBV(a),e.Njj(o.refresh())}),e.k0s()()(),e.j41(9,"ion-row",8),e.DNE(10,P,13,6,"ion-col",9),e.k0s()(),e.j41(11,"ion-fab",10),e.bIt("click",function(){return e.eBV(a),e.Njj(o.toggleAiModal())}),e.j41(12,"ion-avatar",11),e.nrm(13,"ion-icon",12),e.k0s()()(),e.j41(14,"div",13)(15,"div",14)(16,"div",15)(17,"div",16)(18,"h1",17),e.EFF(19,"DevProbe AI"),e.k0s()(),e.nrm(20,"div",18),e.j41(21,"div",19),e.bIt("click",function(){return e.eBV(a),e.Njj(o.toggleAiModal())}),e.nrm(22,"ion-icon",20),e.k0s()(),e.j41(23,"div",21,0),e.DNE(25,k,3,2,"div",22),e.k0s(),e.j41(26,"div",23)(27,"ion-textarea",24),e.mxI("ngModelChange",function(n){return e.eBV(a),e.DH7(o.message,n)||(o.message=n),e.Njj(n)}),e.k0s(),e.nrm(28,"div",25),e.j41(29,"div",26),e.bIt("click",function(){return e.eBV(a),e.Njj(o.sendMessage())}),e.j41(30,"span",17),e.EFF(31,"Send"),e.k0s()()()()()}2&t&&(e.Y8G("title","Traceroute Graph"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(9),e.Y8G("ngForOf",o.countries),e.R7$(4),e.AVh("hidden",!o.aiModal),e.R7$(11),e.Y8G("ngForOf",o.messages),e.R7$(2),e.R50("ngModel",o.message))},dependencies:[d.Sq,d.bT,h.BC,h.vS,c.mC,c.b_,c.tN,c.hU,c.W9,c.Q8,c.lO,c.iq,c.ln,c.nc,c.Gw,C.p,b.$P],styles:["@keyframes _ngcontent-%COMP%_rotate90deg{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.onreloadhover[_ngcontent-%COMP%]:hover{animation:_ngcontent-%COMP%_rotate90deg .9s linear infinite}"]}),m})()}];let O=(()=>{var r;class m{}return(r=m).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[p.iI.forChild(A),p.iI]}),m})();var E=i(5553);let D=(()=>{var r;class m{}return(r=m).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[d.MD,h.YN,c.bv,O,E.h]}),m})()}}]);