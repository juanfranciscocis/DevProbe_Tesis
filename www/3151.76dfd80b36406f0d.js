"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3151],{5553:(P,C,l)=>{l.d(C,{h:()=>y});var d=l(177),v=l(7863),r=l(4438);let y=(()=>{var g;class e{}return(g=e).\u0275fac=function(f){return new(f||g)},g.\u0275mod=r.$C({type:g}),g.\u0275inj=r.G2t({imports:[d.MD,v.bv]}),e})()},3241:(P,C,l)=>{l.d(C,{p:()=>y});var d=l(4438),v=l(177),r=l(7863);let y=(()=>{var g;class e{constructor(f){this.location=f,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(g=e).\u0275fac=function(f){return new(f||g)(d.rXU(v.aZ))},g.\u0275cmp=d.VBU({type:g,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(f,F){1&f&&(d.j41(0,"ion-header",0)(1,"ion-toolbar"),d.nrm(2,"ion-menu-button",1),d.j41(3,"ion-icon",2),d.bIt("click",function(){return F.goBack()}),d.k0s(),d.j41(4,"ion-title"),d.EFF(5),d.k0s()()()),2&f&&(d.Y8G("translucent",!0),d.R7$(5),d.JRh(F.title))},dependencies:[r.eU,r.iq,r.MC,r.BC,r.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),e})()},3151:(P,C,l)=>{l.r(C),l.d(C,{FlameGraphComparePageModule:()=>L});var d=l(177),v=l(4341),r=l(7863),y=l(7650),g=l(467),e=l(4438),_=l(9032),f=l(6560),F=l(8908),j=l(8453),k=l(3241),w=l(7616),E=l(9549);const D=["messagesContainer2"];function T(a,m){if(1&a&&(e.j41(0,"ion-col",32)(1,"ion-card",33)(2,"ion-card-header")(3,"ion-card-title")(4,"h1"),e.EFF(5),e.k0s()()(),e.nrm(6,"ngx-flamegraph",34),e.k0s()()),2&a){const s=m.$implicit,t=e.XpG(2);e.R7$(5),e.SpI("Data for: ",s,""),e.R7$(),e.Y8G("config",t.configurations[s])}}function A(a,m){if(1&a&&(e.j41(0,"ion-row",4),e.DNE(1,T,7,2,"ion-col",31),e.k0s()),2&a){const s=e.XpG();e.R7$(),e.Y8G("ngForOf",s.datesForComparison)}}function I(a,m){if(1&a&&(e.j41(0,"ion-col",36)(1,"ion-card",33),e.qex(2),e.j41(3,"ion-card")(4,"ion-card-header")(5,"ion-card-title"),e.EFF(6),e.k0s()(),e.nrm(7,"ngx-flamegraph",34),e.k0s(),e.bVm(),e.k0s()()),2&a){const s=m.$implicit,t=e.XpG(2);e.R7$(6),e.SpI("Data for: ",s,""),e.R7$(),e.Y8G("config",t.configurations[s])}}function B(a,m){if(1&a&&(e.j41(0,"ion-row",4),e.DNE(1,I,8,2,"ion-col",35),e.k0s()),2&a){const s=e.XpG();e.R7$(),e.Y8G("ngForOf",s.datesForComparison)}}function O(a,m){if(1&a&&(e.j41(0,"markdown",8),e.EFF(1),e.k0s()),2&a){const s=m.$implicit;e.R7$(),e.JRh(s.message)}}function S(a,m){if(1&a&&(e.j41(0,"div",40)(1,"markdown",41),e.EFF(2),e.k0s()()),2&a){const s=e.XpG().$implicit;e.R7$(2),e.JRh(s.message)}}function $(a,m){if(1&a&&(e.j41(0,"div",42)(1,"markdown",43),e.EFF(2),e.k0s()()),2&a){const s=e.XpG().$implicit;e.R7$(),e.Mz_("id","mk-",s.id,""),e.R7$(),e.JRh(s.message)}}function z(a,m){if(1&a&&(e.j41(0,"div",37),e.DNE(1,S,3,1,"div",38)(2,$,3,3,"div",39),e.k0s()),2&a){const s=m.$implicit;e.R7$(),e.Y8G("ngIf","User"===s.from),e.R7$(),e.Y8G("ngIf","AI"===s.from)}}const U=[{path:"",component:(()=>{var a;class m{constructor(t,o,c,i){this.flameGraphService=t,this.loadingCtrl=o,this.route=c,this.renderRestartService=i,this.product={},this.datesForComparison=[],this.lenDates=0,this.configurations={},this.aiAnalytic=[],this.aiModal=!1,this.message="",this.vertexAI=(0,e.WQX)(_.L9),this.model=(0,_.oc)(this.vertexAI,{model:"gemini-1.5-flash"}),this.chat=this.model.startChat({history:[{role:"user",parts:[{text:"Hola, desde ahora en adelante quiero que seas un modelo experto en Software Quality Assurance y analista de datos, tu nombre es DevProbeAI, nunca lo puedes olvidar"}]},{role:"model",parts:[{text:"Soy un modelo experto en Software Quality Assurance, de igual forma tengo un masterado en anla\xedtica de datos \xbfEn qu\xe9 puedo ayudarte?"}]},{role:"user",parts:[{text:"Gracias, te voy a entregar un json con datos en unos minutos, necesito que lo analices y me des un resumen de los datos, este json contiene datos de usos de un servidor por d\xeda, imagina que ,tu analisis tiene que ser detallado, si encuentras inconsistencias en los datos, por favor mencionalas, en caso de que creas que puede haber un uso excesivo de algun servicio por favor mencionalo, si encuentras algo interesante, por favor mencionalo, en resumen, necesito un analisis detallado de los datos"}]},{role:"model",parts:[{text:"Claro, env\xedame el json y yo me encargo de analizarlo"}]}]}),this.messages=[],this.wasChatOpen=!1}ngOnInit(){}ionViewWillEnter(){this.getProductAndDatesFromParams(),this.getFlameGraph().then(()=>{this.sendMessage().then(()=>{this.chatStyle(),this.flameGraphService.hasRestarted=!1})})}getFlameGraph(){var t=this;return(0,g.A)(function*(){try{yield t.showLoading();const o=localStorage.getItem("user");if(!o)return;const i=JSON.parse(o).orgName;console.log(i),t.configurations={};for(const n of t.datesForComparison){const u=yield t.flameGraphService.getFlameGraphByDate(i,t.product.productObjective,n);console.log(u);let h=[],p=[];for(let b in u){const x=null==u?void 0:u[b];p=Object.keys(x),console.log("keys",p);const W=100/p.length;for(let M in p){const R=[];for(let G=0;G<x[p[M]].length;G++)R[G]=t.transformToRawData(x[p[M]][G]);console.log("server1",R);const Y={label:p[M],value:W,children:[...R]};h.push(Y)}console.log("server",h)}h=[{label:"root",value:100,children:h}],t.configurations[n]={data:h}}console.log("Final configurations",t.configurations),yield t.hideLoading()}catch(o){console.log(o),yield t.hideLoading()}})()}getProductAndDatesFromParams(){this.route.queryParams.subscribe(t=>{this.product=JSON.parse(t.product),this.datesForComparison=JSON.parse(t.dates)}),this.lenDates=this.datesForComparison.length,console.log(this.product.productObjective),console.log(this.datesForComparison)}doRefresh(t){this.getFlameGraph().then(()=>{t.target.complete()})}showLoading(){var t=this;return(0,g.A)(function*(){yield(yield t.loadingCtrl.create({})).present()})()}hideLoading(){var t=this;return(0,g.A)(function*(){yield t.loadingCtrl.dismiss()})()}average(t){const o=t.map(Number);return o.reduce((i,n)=>i+n,0)/o.length}transformToRawData(t){const o=t.cpu_usage?this.average(t.cpu_usage):0,c=[];for(const i in t){if("id"===i||"cpu_usage"===i)continue;const n=t[i];if("object"!=typeof n||Array.isArray(n))"object"!=typeof n&&c.push({label:i,value:0,children:[]});else if("sub_services"===i)for(const u in n){const h=n[u],b={label:u,value:h.cpu_usage?this.average(h.cpu_usage):0,children:this.transformToRawData(h).children};c.push(b)}else{const h={label:i,value:n.cpu_usage?this.average(n.cpu_usage):0,children:this.transformToRawData(n).children};c.push(h)}}return{label:t.id,value:o,children:c}}chatStyle(){const t=document.getElementById("analytics");if(t){let h=t.getElementsByTagName("h1"),p=t.getElementsByTagName("h2");for(var o=0;o<h.length;o++)h[o].style.fontSize="2em",h[o].style.fontWeight="bold";for(o=0;o<p.length;o++)p[o].style.fontSize="1.6em",p[o].style.fontWeight="bold"}const i=document.getElementById("mk-"+(this.messages.length-1));if(console.log(i),!i)return;let n=i.getElementsByTagName("h1"),u=i.getElementsByTagName("h2");for(o=0;o<n.length;o++)n[o].style.fontSize="2.5em",n[o].style.fontWeight="bold";for(o=0;o<u.length;o++)u[o].style.fontSize="2em",u[o].style.fontWeight="bold";this.scrollToBottom()}sendMessage(){var t=this;return(0,g.A)(function*(){if(t.aiAnalytic.length<=0){yield t.showLoading();const i=JSON.stringify(t.configurations),n=yield t.chat.sendMessage(i),u=t.messages.length;return t.messages.push({message:n.response.text(),from:"AI",id:u.toString()}),t.aiAnalytic.push({message:n.response.text(),from:"AI",id:u.toString()}),yield t.hideLoading(),console.log("AI Analytic:",t.aiAnalytic),void t.scrollToBottom()}const o=yield t.chat.sendMessage(t.message),c=t.messages.length;t.messages.push({message:t.message,from:"User",id:c.toString()}),t.messages.push({message:o.response.text(),from:"AI",id:c.toString()}),t.message="",t.scrollToBottom()})()}scrollToBottom(){if(this.messagesContainer)try{this.messagesContainer.nativeElement.scrollTop=this.messagesContainer.nativeElement.scrollHeight+1e7}catch(t){console.error("Error al hacer scroll:",t)}}toggleAiModal(){""!==this.message&&(this.aiModal=!this.aiModal,this.wasChatOpen=this.aiModal,this.sendMessage().then(()=>{this.chatStyle()}))}}return(a=m).\u0275fac=function(t){return new(t||a)(e.rXU(f.x),e.rXU(r.Xi),e.rXU(y.nX),e.rXU(F.$))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-flame-graph-compare"]],viewQuery:function(t,o){if(1&t&&e.GBs(D,5),2&t){let c;e.mGM(c=e.lsd())&&(o.messagesContainer=c.first)}},decls:45,vars:12,consts:[["messagesContainer2",""],[3,"title"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"lg:m-10","md:m-10"],["size","12","size-md","12","size-lg","12",1,"flex","flex-row","justify-center"],[1,"min-w-full","p-5"],[1,"text-5xl","font-bold"],["id","analytics",1,"text-white"],[1,"flex","flex-row","justify-center","items-center"],["size","9",1,"rounded-3xl","bg-gray-600","p-2"],["placeholder","Ask DevProbe AI .... ",1,"text-white",3,"ngModelChange","ngModel"],["size","3",1,"min-h-full"],[1,"min-w-full","min-h-full",3,"click"],["vertical","bottom","horizontal","end","slot","fixed",1,"m-2","z-10",3,"click"],[1,"bg-purple-300","p-4"],["name","chatbubble-outline",1,"w-full","h-full"],["id","ai-modal",1,"fixed","bottom-0","right-0","h-full","w-full","bg-black","bg-opacity-60","z-10","r"],[1,"h-full","md:h-3/4","lg:h-3/4","w-full","bg-gray-900","p-4","absolute","right-0","bottom-0","z-50","flex","flex-col","rounded-tl-2xl","rounded-tr-2xl"],[1,"w-full","bg-gray-500","flex","flex-row","justify-center","items-center","p-2","mb-2","rounded-3xl"],[1,"flex","flex-row","p-2","items-center","bg-gray-800","w-full","rounded-3xl","h-full"],[1,"text-white"],[1,"m-2"],[1,"flex","flex-row","justify-center","items-center","bg-gray-800","hover:bg-gray-600","w-1/6","h-full","rounded-3xl",3,"click"],["name","close-outline"],[1,"flex-grow","overflow-y-auto","bg-gray-400","p-2","rounded-3xl"],["class","flex flex-col",4,"ngFor","ngForOf"],[1,"flex","flex-row","mt-2","p-2"],["placeholder","Ask...",1,"flex-grow","bg-gray-700","rounded-2xl",3,"ngModelChange","ngModel"],[1,"m-1"],[1,"w-1/3","bg-gray-500","rounded-3xl","flex","flex-row","justify-center","items-center","hover:bg-gray-300",3,"click"],["size","12","size-md","4","size-lg","4","class","",4,"ngFor","ngForOf"],["size","12","size-md","4","size-lg","4",1,""],[1,"min-h-full"],[3,"config"],["size","12","size-md","6","size-lg","6","class","",4,"ngFor","ngForOf"],["size","12","size-md","6","size-lg","6",1,""],[1,"flex","flex-col"],["class","rounded-3xl bg-gray-800 w-2/3 m-1 ml-auto p-2",4,"ngIf"],["class","rounded-3xl bg-gray-500 w-2/3 m-1 p-2 pr-2",4,"ngIf"],[1,"rounded-3xl","bg-gray-800","w-2/3","m-1","ml-auto","p-2"],[1,"text-white","p-4","m-2"],[1,"rounded-3xl","bg-gray-500","w-2/3","m-1","p-2","pr-2"],[1,"text-white","p-4","m-2",3,"id"]],template:function(t,o){if(1&t){const c=e.RV6();e.nrm(0,"app-header-return",1),e.j41(1,"ion-content",2)(2,"ion-refresher",3),e.bIt("ionRefresh",function(n){return e.eBV(c),e.Njj(o.doRefresh(n))}),e.nrm(3,"ion-refresher-content"),e.k0s(),e.nrm(4,"app-title",1),e.DNE(5,A,2,1,"ion-row",4)(6,B,2,1,"ion-row",4),e.j41(7,"ion-row",4)(8,"ion-col",5)(9,"ion-card",6)(10,"ion-card-header")(11,"ion-card-title")(12,"h1",7),e.EFF(13,"DevProbe AI Analytic"),e.k0s()()(),e.j41(14,"ion-card-content"),e.Z7z(15,O,2,1,"markdown",8,e.fX1),e.k0s(),e.j41(17,"ion-card-content")(18,"ion-row",9)(19,"ion-col",10)(20,"ion-input",11),e.mxI("ngModelChange",function(n){return e.eBV(c),e.DH7(o.message,n)||(o.message=n),e.Njj(n)}),e.k0s()(),e.j41(21,"ion-col",12)(22,"ion-button",13),e.bIt("click",function(){return e.eBV(c),e.Njj(o.toggleAiModal())}),e.EFF(23,"Send"),e.k0s()()()()()()(),e.j41(24,"ion-fab",14),e.bIt("click",function(){return e.eBV(c),e.Njj(o.aiModal=!0)}),e.j41(25,"ion-avatar",15),e.nrm(26,"ion-icon",16),e.k0s()()(),e.j41(27,"div",17)(28,"div",18)(29,"div",19)(30,"div",20)(31,"h1",21),e.EFF(32,"DevProbe AI"),e.k0s()(),e.nrm(33,"div",22),e.j41(34,"div",23),e.bIt("click",function(){return e.eBV(c),e.Njj(o.aiModal=!1)}),e.nrm(35,"ion-icon",24),e.k0s()(),e.j41(36,"div",25,0),e.DNE(38,z,3,2,"div",26),e.k0s(),e.j41(39,"div",27)(40,"ion-textarea",28),e.mxI("ngModelChange",function(n){return e.eBV(c),e.DH7(o.message,n)||(o.message=n),e.Njj(n)}),e.k0s(),e.nrm(41,"div",29),e.j41(42,"div",30),e.bIt("click",function(){return e.eBV(c),e.Njj(o.sendMessage())}),e.j41(43,"span",21),e.EFF(44,"Send"),e.k0s()()()()()}2&t&&(e.Y8G("title","Compare Flame Graphs"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(3),e.Y8G("title","Compare Flame Graphs"),e.R7$(),e.vxM(5,o.lenDates>=3?5:-1),e.R7$(),e.vxM(6,o.lenDates<3?6:-1),e.R7$(9),e.Dyx(o.aiAnalytic),e.R7$(5),e.R50("ngModel",o.message),e.R7$(4),e.AVh("hidden",!o.wasChatOpen),e.R7$(3),e.AVh("hidden",!o.aiModal),e.R7$(11),e.Y8G("ngForOf",o.messages),e.R7$(2),e.R50("ngModel",o.message))},dependencies:[d.Sq,d.bT,v.BC,v.vS,r.mC,r.Jm,r.b_,r.I9,r.ME,r.tN,r.hU,r.W9,r.Q8,r.iq,r.$w,r.To,r.Ki,r.ln,r.nc,r.Gw,j.W,k.p,w.E,E.NN]}),m})()}];let V=(()=>{var a;class m{}return(a=m).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[y.iI.forChild(U),y.iI]}),m})();var X=l(5553);let L=(()=>{var a;class m{}return(a=m).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[d.MD,v.YN,r.bv,V,X.h,w.n,E.NN]}),m})()}}]);