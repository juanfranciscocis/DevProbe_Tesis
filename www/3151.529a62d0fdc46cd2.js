"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3151],{5553:(D,C,n)=>{n.d(C,{h:()=>y});var l=n(177),F=n(7863),r=n(4438);let y=(()=>{var c;class e{}return(c=e).\u0275fac=function(f){return new(f||c)},c.\u0275mod=r.$C({type:c}),c.\u0275inj=r.G2t({imports:[l.MD,F.bv]}),e})()},3241:(D,C,n)=>{n.d(C,{p:()=>y});var l=n(4438),F=n(177),r=n(7863);let y=(()=>{var c;class e{constructor(f){this.location=f,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(c=e).\u0275fac=function(f){return new(f||c)(l.rXU(F.aZ))},c.\u0275cmp=l.VBU({type:c,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(f,G){1&f&&(l.j41(0,"ion-header",0)(1,"ion-toolbar"),l.nrm(2,"ion-menu-button",1),l.j41(3,"ion-icon",2),l.bIt("click",function(){return G.goBack()}),l.k0s(),l.j41(4,"ion-title"),l.EFF(5),l.k0s()()()),2&f&&(l.Y8G("translucent",!0),l.R7$(5),l.JRh(G.title))},dependencies:[r.eU,r.iq,r.MC,r.BC,r.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),e})()},3151:(D,C,n)=>{n.r(C),n.d(C,{FlameGraphComparePageModule:()=>k});var l=n(177),F=n(4341),r=n(7863),y=n(4848),c=n(467),e=n(4438),v=n(9032),f=n(6560),G=n(8453),A=n(3241),x=n(7616),O=n(2814);const T=["messagesContainer"];function b(a,u){if(1&a&&(e.j41(0,"ion-col",9)(1,"ion-card",10)(2,"ion-card-header")(3,"ion-card-title")(4,"h1"),e.EFF(5),e.k0s()()(),e.nrm(6,"ngx-flamegraph",11),e.k0s()()),2&a){const i=u.$implicit,t=e.XpG(2);e.R7$(5),e.SpI("Data for: ",i,""),e.R7$(),e.Y8G("config",t.configurations[i])}}function I(a,u){if(1&a&&(e.j41(0,"ion-row",3),e.DNE(1,b,7,2,"ion-col",8),e.k0s()),2&a){const i=e.XpG();e.R7$(),e.Y8G("ngForOf",i.datesForComparison)}}function z(a,u){if(1&a&&(e.j41(0,"ion-col",13)(1,"ion-card",10),e.qex(2),e.j41(3,"ion-card")(4,"ion-card-header")(5,"ion-card-title"),e.EFF(6),e.k0s()(),e.nrm(7,"ngx-flamegraph",11),e.k0s(),e.bVm(),e.k0s()()),2&a){const i=u.$implicit,t=e.XpG(2);e.R7$(6),e.SpI("Data for: ",i,""),e.R7$(),e.Y8G("config",t.configurations[i])}}function S(a,u){if(1&a&&(e.j41(0,"ion-row",3),e.DNE(1,z,8,2,"ion-col",12),e.k0s()),2&a){const i=e.XpG();e.R7$(),e.Y8G("ngForOf",i.datesForComparison)}}function j(a,u){if(1&a&&(e.j41(0,"markdown",7),e.EFF(1),e.k0s()),2&a){const i=u.$implicit;e.R7$(),e.JRh(i.message)}}const B=[{path:"",component:(()=>{var a;class u{constructor(t,o,m){this.flameGraphService=t,this.loadingCtrl=o,this.route=m,this.product={},this.datesForComparison=[],this.lenDates=0,this.configurations={},this.aiAnalytic=[],this.aiModal=!1,this.message="",this.vertexAI=(0,e.WQX)(v.L9),this.model=(0,v.oc)(this.vertexAI,{model:"gemini-1.5-flash"}),this.chat=this.model.startChat({history:[{role:"user",parts:[{text:"Hola, desde ahora en adelante quiero que seas un modelo experto en Software Quality Assurance y analista de datos, tu nombre es DevProbeAI, nunca lo puedes olvidar"}]},{role:"model",parts:[{text:"Soy un modelo experto en Software Quality Assurance, de igual forma tengo un masterado en anla\xedtica de datos \xbfEn qu\xe9 puedo ayudarte?"}]},{role:"user",parts:[{text:"Gracias, te voy a entregar un json con datos en unos minutos, necesito que lo analices y me des un resumen de los datos, este json contiene datos de usos de un servidor por d\xeda, imagina que ,tu analisis tiene que ser detallado, si encuentras inconsistencias en los datos, por favor mencionalas, en caso de que creas que puede haber un uso excesivo de algun servicio por favor mencionalo, si encuentras algo interesante, por favor mencionalo, en resumen, necesito un analisis detallado de los datos"}]},{role:"model",parts:[{text:"Claro, env\xedame el json y yo me encargo de analizarlo"}]}]}),this.messages=[]}ngOnInit(){}ionViewWillEnter(){this.getProductAndDatesFromParams(),this.getFlameGraph().then(()=>{this.sendMessage().then(()=>{this.chatStyle()})})}getFlameGraph(){var t=this;return(0,c.A)(function*(){try{yield t.showLoading();const o=localStorage.getItem("user");if(!o)return;const s=JSON.parse(o).orgName;console.log(s),t.configurations={};for(const d of t.datesForComparison){const h=yield t.flameGraphService.getFlameGraphByDate(s,t.product.productObjective,d);console.log(h);let g=[],p=[];for(let P in h){const R=null==h?void 0:h[P];p=Object.keys(R),console.log("keys",p);const w=100/p.length;for(let M in p){const E=[];for(let _=0;_<R[p[M]].length;_++)E[_]=t.transformToRawData(R[p[M]][_]);console.log("server1",E);const L={label:p[M],value:w,children:[...E]};g.push(L)}console.log("server",g)}g=[{label:"root",value:100,children:g}],t.configurations[d]={data:g}}console.log("Final configurations",t.configurations),yield t.hideLoading()}catch(o){console.log(o),yield t.hideLoading()}})()}getProductAndDatesFromParams(){this.route.queryParams.subscribe(t=>{this.product=JSON.parse(t.product),this.datesForComparison=JSON.parse(t.dates)}),this.lenDates=this.datesForComparison.length,console.log(this.product.productObjective),console.log(this.datesForComparison)}doRefresh(t){this.getFlameGraph().then(()=>{t.target.complete()})}showLoading(){var t=this;return(0,c.A)(function*(){yield(yield t.loadingCtrl.create({})).present()})()}hideLoading(){var t=this;return(0,c.A)(function*(){yield t.loadingCtrl.dismiss()})()}average(t){const o=t.map(Number);return o.reduce((s,d)=>s+d,0)/o.length}transformToRawData(t){const o=t.cpu_usage?this.average(t.cpu_usage):0,m=[];for(const s in t){if("id"===s||"cpu_usage"===s)continue;const d=t[s];if("object"!=typeof d||Array.isArray(d))"object"!=typeof d&&m.push({label:s,value:0,children:[]});else if("sub_services"===s)for(const h in d){const g=d[h],P={label:h,value:g.cpu_usage?this.average(g.cpu_usage):0,children:this.transformToRawData(g).children};m.push(P)}else{const g={label:s,value:d.cpu_usage?this.average(d.cpu_usage):0,children:this.transformToRawData(d).children};m.push(g)}}return{label:t.id,value:o,children:m}}chatStyle(){const t=document.getElementById("analytics");if(t){let g=t.getElementsByTagName("h1"),p=t.getElementsByTagName("h2");for(var o=0;o<g.length;o++)g[o].style.fontSize="2em",g[o].style.fontWeight="bold";for(o=0;o<p.length;o++)p[o].style.fontSize="1.6em",p[o].style.fontWeight="bold"}const s=document.getElementById("mk-"+(this.messages.length-1));if(console.log(s),!s)return;let d=s.getElementsByTagName("h1"),h=s.getElementsByTagName("h2");for(o=0;o<d.length;o++)d[o].style.fontSize="2.5em",d[o].style.fontWeight="bold";for(o=0;o<h.length;o++)h[o].style.fontSize="2em",h[o].style.fontWeight="bold"}sendMessage(){var t=this;return(0,c.A)(function*(){if(t.aiAnalytic.length<=0){yield t.showLoading();const o=JSON.stringify(t.configurations),m=yield t.chat.sendMessage(o),s=t.messages.length;return t.messages.push({message:m.response.text(),from:"AI",id:s.toString()}),t.aiAnalytic.push({message:m.response.text(),from:"AI",id:s.toString()}),yield t.hideLoading(),void console.log("AI Analytic:",t.aiAnalytic)}})()}}return(a=u).\u0275fac=function(t){return new(t||a)(e.rXU(f.x),e.rXU(r.Xi),e.rXU(y.nX))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-flame-graph-compare"]],viewQuery:function(t,o){if(1&t&&e.GBs(T,5),2&t){let m;e.mGM(m=e.lsd())&&(o.messagesContainer=m.first)}},decls:17,vars:5,consts:[[3,"title"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"lg:m-10","md:m-10"],["size","12","size-md","12","size-lg","12",1,"flex","flex-row","justify-center"],[1,"min-w-full"],[1,"text-5xl","font-bold"],["id","analytics",1,"text-white"],["size","12","size-md","4","size-lg","4","class","",4,"ngFor","ngForOf"],["size","12","size-md","4","size-lg","4",1,""],[1,"min-h-full"],[3,"config"],["size","12","size-md","6","size-lg","6","class","",4,"ngFor","ngForOf"],["size","12","size-md","6","size-lg","6",1,""]],template:function(t,o){1&t&&(e.nrm(0,"app-header-return",0),e.j41(1,"ion-content",1)(2,"ion-refresher",2),e.bIt("ionRefresh",function(s){return o.doRefresh(s)}),e.nrm(3,"ion-refresher-content"),e.k0s(),e.nrm(4,"app-title",0),e.DNE(5,I,2,1,"ion-row",3)(6,S,2,1,"ion-row",3),e.j41(7,"ion-row",3)(8,"ion-col",4)(9,"ion-card",5)(10,"ion-card-header")(11,"ion-card-title")(12,"h1",6),e.EFF(13,"DevProbe AI Analytic"),e.k0s()()(),e.j41(14,"ion-card-content"),e.Z7z(15,j,2,1,"markdown",7,e.fX1),e.k0s()()()()()),2&t&&(e.Y8G("title","Compare Flame Graphs"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(3),e.Y8G("title","Compare Flame Graphs"),e.R7$(),e.vxM(5,o.lenDates>=3?5:-1),e.R7$(),e.vxM(6,o.lenDates<3?6:-1),e.R7$(9),e.Dyx(o.aiAnalytic))},dependencies:[l.Sq,r.b_,r.I9,r.ME,r.tN,r.hU,r.W9,r.To,r.Ki,r.ln,G.W,A.p,x.E,O.NN]}),u})()}];let $=(()=>{var a;class u{}return(a=u).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[y.iI.forChild(B),y.iI]}),u})();var U=n(5553);let k=(()=>{var a;class u{}return(a=u).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[l.MD,F.YN,r.bv,$,U.h,x.n,O.NN]}),u})()}}]);