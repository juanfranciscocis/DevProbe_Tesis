"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7907],{5553:(G,v,l)=>{l.d(v,{h:()=>h});var u=l(177),f=l(7863),s=l(4438);let h=(()=>{var d;class e{}return(d=e).\u0275fac=function(m){return new(m||d)},d.\u0275mod=s.$C({type:d}),d.\u0275inj=s.G2t({imports:[u.MD,f.bv]}),e})()},3241:(G,v,l)=>{l.d(v,{p:()=>h});var u=l(4438),f=l(177),s=l(7863);let h=(()=>{var d;class e{constructor(m){this.location=m,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(d=e).\u0275fac=function(m){return new(m||d)(u.rXU(f.aZ))},d.\u0275cmp=u.VBU({type:d,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(m,C){1&m&&(u.j41(0,"ion-header",0)(1,"ion-toolbar"),u.nrm(2,"ion-menu-button",1),u.j41(3,"ion-icon",2),u.bIt("click",function(){return C.goBack()}),u.k0s(),u.j41(4,"ion-title"),u.EFF(5),u.k0s()()()),2&m&&(u.Y8G("translucent",!0),u.R7$(5),u.JRh(C.title))},dependencies:[s.eU,s.iq,s.MC,s.BC,s.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),e})()},7907:(G,v,l)=>{l.r(v),l.d(v,{GraphTracePageModule:()=>F});var u=l(177),f=l(4341),s=l(7863),h=l(305),d=l(467),e=l(4438),_=l(9032),m=l(2588),C=l(3241),j=l(4688);const b=["messagesContainer"];function P(n,g){if(1&n&&(e.j41(0,"ion-content",38),e.EFF(1),e.k0s()),2&n){const i=e.XpG().$implicit;e.R7$(),e.SpI("Ask DevProbe AI to analyze the traceroute data for ",i,".")}}function R(n,g){if(1&n&&(e.j41(0,"ion-content",38),e.EFF(1),e.k0s()),2&n){const i=e.XpG().$implicit;e.R7$(),e.SpI("Ask DevProbe AI to analyze the traceroute data for ",i,", is there a problem?")}}function w(n,g){if(1&n){const i=e.RV6();e.j41(0,"ion-col",27)(1,"div",28)(2,"ion-avatar",29)(3,"ion-icon",30),e.bIt("click",function(){const o=e.eBV(i).$implicit,r=e.XpG();return e.Njj(r.toggleAiModal(o,!0))}),e.k0s()(),e.nrm(4,"div",25),e.j41(5,"ion-avatar",31)(6,"ion-icon",32),e.bIt("click",function(){const o=e.eBV(i).$implicit,r=e.XpG();return e.Njj(r.toggleAiModal(o))}),e.k0s()()(),e.j41(7,"ion-popover",33),e.DNE(8,P,2,1,"ng-template"),e.k0s(),e.j41(9,"ion-popover",33),e.DNE(10,R,2,1,"ng-template"),e.k0s(),e.j41(11,"ion-card",34)(12,"ion-card-title",35)(13,"h1",36),e.EFF(14),e.k0s()(),e.nrm(15,"br")(16,"div",37),e.k0s()()}if(2&n){const i=g.$implicit,t=e.XpG();e.R7$(2),e.Mz_("id","hover-trigger-",i,"-danger"),e.R7$(3),e.Mz_("id","hover-trigger-",i,""),e.R7$(2),e.Mz_("trigger","hover-trigger-",i,""),e.R7$(2),e.Mz_("trigger","hover-trigger-",i,"-danger"),e.R7$(5),e.JRh(i),e.R7$(2),e.Y8G("options",t.countryOptions[i])}}function k(n,g){if(1&n&&(e.j41(0,"div",42)(1,"p",43),e.EFF(2),e.k0s()()),2&n){const i=e.XpG().$implicit;e.R7$(2),e.JRh(i.message)}}function E(n,g){if(1&n&&(e.j41(0,"div",44)(1,"p",43),e.EFF(2),e.k0s()()),2&n){const i=e.XpG().$implicit;e.R7$(2),e.JRh(i.message)}}function D(n,g){if(1&n&&(e.j41(0,"div",39),e.DNE(1,k,3,1,"div",40)(2,E,3,1,"div",41),e.k0s()),2&n){const i=g.$implicit;e.R7$(),e.Y8G("ngIf","User"===i.from),e.R7$(),e.Y8G("ngIf","AI"===i.from)}}const A=[{path:"",component:(()=>{var n;class g{constructor(t,o){this.ripeService=t,this.route=o,this.orgName="",this.productObjective="",this.user={},this.data=[],this.countries=[],this.countryOptions={},this.aiModal=!1,this.message="",this.vertexAI=(0,e.WQX)(_.L9),this.messages=[]}ionViewWillEnter(){var t=this;return(0,d.A)(function*(){t.route.queryParams.subscribe(r=>{t.productObjective=r.product});const o=localStorage.getItem("user");o&&(t.user=JSON.parse(o),t.orgName=t.user.orgName,t.data=[],t.getResultsHistoryforRtt().then(()=>{t.groupByDate().then(()=>{t.groupByCountry().then(()=>{t.populateCountries(),t.generateCountryOptions()})})}))})()}getResultsHistoryforRtt(){var t=this;return(0,d.A)(function*(){yield t.ripeService.getHistoryResults(t.orgName,t.productObjective).then(o=>{for(let r=0;r<o.length;r++){let c=o[r].id.split("-");t.data.push({id:c[1],date:c[3]+"/"+c[2]+"/"+c[4],time:c[5],data:o[r].data.data})}console.log(t.data)})})()}groupByDate(){var t=this;return(0,d.A)(function*(){let o={};for(let a=0;a<t.data.length;a++){let p=t.data[a].date;o[p]||(o[p]=[]),o[p].push(...t.data[a].data)}const r=Object.keys(o).sort((a,p)=>new Date(a).getTime()-new Date(p).getTime());let c={};for(let a of r)c[a]=o[a];t.data=c,console.log(t.data)})()}groupByCountry(){var t=this;return(0,d.A)(function*(){let o={};for(let r in t.data){let c=t.data[r];o[r]||(o[r]={});for(let a=0;a<c.length;a++){let p=c[a].src_country;"No country found"!==p&&(o[r][p]||(o[r][p]=[]),o[r][p].push(c[a]))}}t.data=o,console.log(t.data)})()}populateCountries(){var t=this;return(0,d.A)(function*(){const o=new Set;for(let r in t.data)for(let c in t.data[r])o.add(c);t.countries=Array.from(o),console.log(t.countries)})()}getRandomColor(){let o="#";for(let r=0;r<6;r++)o+="0123456789ABCDEF"[Math.floor(16*Math.random())];return o}generateCountryOptions(){for(let t of this.countries){const o=[],r=[];for(let a in this.data){let p=0,x=0;if(this.data[a][t]){for(let T=0;T<this.data[a][t].length;T++){let M=this.data[a][t][T];for(let y=0;y<M.result.length;y++)"number"==typeof M.result[y].result[0].rtt&&(p+=M.result[y].result[0].rtt,x++)}x>0&&(o.push(a),r.push(p/x))}}const c=this.getRandomColor();this.countryOptions[t]={legend:{data:[t],align:"left",backgroundColor:"rgba(255, 255, 255, 0.9)"},tooltip:{},xAxis:{data:o,silent:!1,splitLine:{show:!1}},yAxis:{},series:[{name:t,type:"bar",data:r,itemStyle:{color:c},animationDelay:a=>10*a}],animationEasing:"elasticOut",animationDelayUpdate:a=>5*a}}}refresh(){window.location.reload()}ngOnInit(){}toggleAiModal(t,o){this.aiModal=!this.aiModal,t&&console.log("Country: "+t)}ngAfterViewChecked(){this.scrollToBottom()}scrollToBottom(){if(this.messagesContainer)try{this.messagesContainer.nativeElement.scrollTop=this.messagesContainer.nativeElement.scrollHeight}catch(t){console.error("Error al hacer scroll:",t)}}sendMessage(){""!==this.message?(this.messages.push({message:this.message,from:"User"}),(0,_.oc)(this.vertexAI,{model:"gemini-1.5-flash"}).generateContent(this.message).then(o=>{const r=o.response.text();this.messages.push({message:r,from:"AI"})}).then(()=>{this.message="",this.scrollToBottom()})):console.log("Message is empty")}}return(n=g).\u0275fac=function(t){return new(t||n)(e.rXU(m.N),e.rXU(h.nX))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-graph-trace"]],viewQuery:function(t,o){if(1&t&&e.GBs(b,5),2&t){let r;e.mGM(r=e.lsd())&&(o.messagesContainer=r.first)}},decls:32,vars:7,consts:[["messagesContainer",""],[3,"title"],[3,"fullscreen"],[1,"lg:m-10"],["size","6","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"],["size","6","size-md","6","size-lg","6",1,"text-right"],["name","refresh",1,"text-4xl","lg:text-6xl","font-bold","onreloadhover",3,"click"],[1,"lg:m-10","md:m-10"],["size","12","size-md","6","size-lg","6","class","flex flex-row justify-center relative",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed",1,"m-2","z-10",3,"click"],[1,"bg-purple-300","p-4"],["name","chatbubble-outline",1,"w-full","h-full"],["id","ai-modal",1,"fixed","bottom-0","right-0","h-full","w-full","bg-black","bg-opacity-50","z-10","r"],[1,"h-2/3","md:h-2/3","lg:h-2/3","w-full","md:w-1/3","lg:w-1/3","bg-purple-300","p-4","absolute","right-0","bottom-0","z-50","flex","flex-col","rounded-tl-2xl","rounded-tr-2xl"],[1,"w-full","bg-purple-400","flex","flex-row","justify-center","items-center","p-2","mb-2","rounded-3xl"],[1,"flex","flex-row","p-2","items-center","bg-purple-300","w-full","rounded-3xl","h-full"],[1,"text-white"],[1,"m-2"],[1,"flex","flex-row","justify-center","items-center","bg-purple-300","w-1/6","h-full","rounded-3xl",3,"click"],["name","close-outline"],[1,"flex-grow","overflow-y-auto","bg-purple-200","p-2","rounded-3xl"],["class","flex flex-col",4,"ngFor","ngForOf"],[1,"flex","flex-row","mt-2","p-2"],["placeholder","Ask...",1,"flex-grow","bg-purple-600","rounded-2xl",3,"ngModelChange","ngModel"],[1,"m-1"],[1,"w-1/3","bg-purple-800","rounded-3xl","flex","flex-row","justify-center","items-center","hover:bg-purple-400",3,"click"],["size","12","size-md","6","size-lg","6",1,"flex","flex-row","justify-center","relative"],[1,"absolute","z-10","w-full","flex","flex-row","justify-end"],[1,"h-12","w-12","bg-red-600","p-2",3,"id"],["name","warning-outline",1,"w-full","h-full",3,"click"],[1,"h-12","w-12","bg-purple-400","p-2",3,"id"],["name","color-wand-outline",1,"w-full","h-full",3,"click"],["triggerAction","hover",1,"w-96",3,"trigger"],[1,"w-full","h-96","p-6","flex","flex-col","justify-center","items-center"],[1,""],[1,"text-6xl","font-bold","text-white"],["echarts","",1,"demo-chart","h-full","w-full","min-w-full",3,"options"],[1,"ion-padding"],[1,"flex","flex-col"],["class","rounded-3xl bg-purple-600 w-2/3 m-1 ml-auto",4,"ngIf"],["class","rounded-3xl bg-purple-400 w-2/3 m-1",4,"ngIf"],[1,"rounded-3xl","bg-purple-600","w-2/3","m-1","ml-auto"],[1,"text-white","p-4"],[1,"rounded-3xl","bg-purple-400","w-2/3","m-1"]],template:function(t,o){if(1&t){const r=e.RV6();e.nrm(0,"app-header-return",1),e.j41(1,"ion-content",2)(2,"ion-grid")(3,"ion-row",3)(4,"ion-col",4)(5,"h1",5),e.EFF(6,"Traceroute Graph"),e.k0s()(),e.j41(7,"ion-col",6)(8,"ion-icon",7),e.bIt("click",function(){return e.eBV(r),e.Njj(o.refresh())}),e.k0s()()(),e.j41(9,"ion-row",8),e.DNE(10,w,17,10,"ion-col",9),e.k0s()(),e.j41(11,"ion-fab",10),e.bIt("click",function(){return e.eBV(r),e.Njj(o.toggleAiModal())}),e.j41(12,"ion-avatar",11),e.nrm(13,"ion-icon",12),e.k0s()()(),e.j41(14,"div",13)(15,"div",14)(16,"div",15)(17,"div",16)(18,"h1",17),e.EFF(19,"DevProbe AI"),e.k0s()(),e.nrm(20,"div",18),e.j41(21,"div",19),e.bIt("click",function(){return e.eBV(r),e.Njj(o.toggleAiModal())}),e.nrm(22,"ion-icon",20),e.k0s()(),e.j41(23,"div",21,0),e.DNE(25,D,3,2,"div",22),e.k0s(),e.j41(26,"div",23)(27,"ion-textarea",24),e.mxI("ngModelChange",function(a){return e.eBV(r),e.DH7(o.message,a)||(o.message=a),e.Njj(a)}),e.k0s(),e.nrm(28,"div",25),e.j41(29,"div",26),e.bIt("click",function(){return e.eBV(r),e.Njj(o.sendMessage())}),e.j41(30,"span",17),e.EFF(31,"Send"),e.k0s()()()()()}2&t&&(e.Y8G("title","Traceroute Graph"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(9),e.Y8G("ngForOf",o.countries),e.R7$(4),e.AVh("hidden",!o.aiModal),e.R7$(11),e.Y8G("ngForOf",o.messages),e.R7$(2),e.R50("ngModel",o.message))},dependencies:[u.Sq,u.bT,f.BC,f.vS,s.mC,s.b_,s.tN,s.hU,s.W9,s.Q8,s.lO,s.iq,s.ln,s.nc,s.CF,s.Gw,C.p,j.$P],styles:["@keyframes _ngcontent-%COMP%_rotate90deg{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.onreloadhover[_ngcontent-%COMP%]:hover{animation:_ngcontent-%COMP%_rotate90deg .9s linear infinite}"]}),g})()}];let O=(()=>{var n;class g{}return(n=g).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[h.iI.forChild(A),h.iI]}),g})();var I=l(5553);let F=(()=>{var n;class g{}return(n=g).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[u.MD,f.YN,s.bv,O,I.h]}),g})()}}]);