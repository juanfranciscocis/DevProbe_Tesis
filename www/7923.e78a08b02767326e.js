"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7923],{5553:(M,f,a)=>{a.d(f,{h:()=>m});var s=a(177),v=a(7863),u=a(4438);let m=(()=>{var l;class e{}return(l=e).\u0275fac=function(g){return new(g||l)},l.\u0275mod=u.$C({type:l}),l.\u0275inj=u.G2t({imports:[s.MD,v.bv]}),e})()},3241:(M,f,a)=>{a.d(f,{p:()=>m});var s=a(4438),v=a(177),u=a(7863);let m=(()=>{var l;class e{constructor(g){this.location=g,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(l=e).\u0275fac=function(g){return new(g||l)(s.rXU(v.aZ))},l.\u0275cmp=s.VBU({type:l,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(g,P){1&g&&(s.j41(0,"ion-header",0)(1,"ion-toolbar"),s.nrm(2,"ion-menu-button",1),s.j41(3,"ion-icon",2),s.bIt("click",function(){return P.goBack()}),s.k0s(),s.j41(4,"ion-title"),s.EFF(5),s.k0s()()()),2&g&&(s.Y8G("translucent",!0),s.R7$(5),s.JRh(P.title))},dependencies:[u.eU,u.iq,u.MC,u.BC,u.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),e})()},7923:(M,f,a)=>{a.r(f),a.d(f,{GraphPageModule:()=>E});var s=a(177),v=a(4341),u=a(7863),m=a(305),l=a(467),e=a(4438),y=a(9640),g=a(4688),P=a(3241);function O(r,p){if(1&r&&(e.j41(0,"ion-col",9)(1,"ion-card",10)(2,"h1",11),e.EFF(3),e.k0s(),e.nrm(4,"br")(5,"div",12),e.k0s()()),2&r){const h=p.$implicit,t=e.XpG();e.R7$(3),e.JRh(h),e.R7$(2),e.Y8G("options",t.countryOptions[h])}}const G=[{path:"",component:(()=>{var r;class p{constructor(t,n){this.ripeService=t,this.route=n,this.orgName="",this.productObjective="",this.user={},this.data=[],this.countries=[],this.countryOptions={}}ionViewWillEnter(){var t=this;return(0,l.A)(function*(){t.route.queryParams.subscribe(o=>{t.productObjective=o.product});const n=localStorage.getItem("user");n&&(t.user=JSON.parse(n),t.orgName=t.user.orgName,t.data=[],yield t.getResultsHistoryforLatency(),yield t.groupByDate(),yield t.groupByCountry(),yield t.populateCountries(),t.generateCountryOptions())})()}getResultsHistoryforLatency(){var t=this;return(0,l.A)(function*(){(yield t.ripeService.getHistoryResults(t.orgName,t.productObjective)).forEach(o=>{const[c,i,d,C,_,x]=o.id.split("-");t.data.push({id:i,data:o.data.data,date:`${C}/${d}/${_}`,time:x})})})()}groupByDate(){var t=this;return(0,l.A)(function*(){let n={};for(let i=0;i<t.data.length;i++){let d=t.data[i].date;n[d]||(n[d]=[]),n[d].push(...t.data[i].data)}const o=Object.keys(n).sort((i,d)=>new Date(i).getTime()-new Date(d).getTime());let c={};for(let i of o)c[i]=n[i];t.data=c,console.log(t.data)})()}groupByCountry(){var t=this;return(0,l.A)(function*(){let n={};for(let o in t.data){let c=t.data[o];n[o]||(n[o]={});for(let i=0;i<c.length;i++){let d=c[i].countryFrom;n[o][d]||(n[o][d]=[]),n[o][d].push(c[i])}}t.data=n,console.log(t.data)})()}populateCountries(){var t=this;return(0,l.A)(function*(){const n=new Set;for(let o in t.data)for(let c in t.data[o])n.add(c);t.countries=Array.from(n),console.log(t.countries)})()}generateRandomColor(){let n="#";for(let o=0;o<6;o++)n+="0123456789ABCDEF"[Math.floor(16*Math.random())];return n}generateCountryOptions(){for(let t of this.countries){const n=[],o=[];for(let c in this.data){let i=0,d=0;if(this.data[c][t]){for(let C=0;C<this.data[c][t].length;C++)i+=this.data[c][t][C].latency,d++;d>0&&(n.push(c),o.push(i/d))}}o.length>0&&(this.countryOptions[t]={legend:{data:[t],align:"left",backgroundColor:"rgba(255, 255, 255, 0.9)"},tooltip:{},xAxis:{data:n,silent:!1,splitLine:{show:!1}},yAxis:{},series:[{name:t,type:"bar",data:o,itemStyle:{color:this.generateRandomColor()},animationDelay:c=>10*c}],animationEasing:"elasticOut",animationDelayUpdate:c=>5*c})}}refresh(){window.location.reload()}ngOnInit(){}}return(r=p).\u0275fac=function(t){return new(t||r)(e.rXU(y.Q),e.rXU(m.nX))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-graph"]],decls:11,vars:3,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10"],["size","6","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"],["size","6","size-md","6","size-lg","6",1,"text-right"],["name","refresh",1,"text-4xl","lg:text-6xl","font-bold","onreloadhover",3,"click"],[1,"lg:m-10","md:m-10"],["size","12","size-md","6","size-lg","6","class","flex flex-row justify-center",4,"ngFor","ngForOf"],["size","12","size-md","6","size-lg","6",1,"flex","flex-row","justify-center"],[1,"w-full","h-96","p-6","flex","flex-col","justify-center","items-center"],[1,"text-6xl","font-bold","text-white"],["echarts","",1,"demo-chart","h-full","w-full",3,"options"]],template:function(t,n){1&t&&(e.nrm(0,"app-header-return",0),e.j41(1,"ion-content",1)(2,"ion-grid")(3,"ion-row",2)(4,"ion-col",3)(5,"h1",4),e.EFF(6,"Latency Graph"),e.k0s()(),e.j41(7,"ion-col",5)(8,"ion-icon",6),e.bIt("click",function(){return n.refresh()}),e.k0s()()(),e.j41(9,"ion-row",7),e.DNE(10,O,6,2,"ion-col",8),e.k0s()()()),2&t&&(e.Y8G("title","Latency Graph"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(9),e.Y8G("ngForOf",n.countries))},dependencies:[s.Sq,u.b_,u.hU,u.W9,u.lO,u.iq,u.ln,g.$P,P.p],styles:["@keyframes _ngcontent-%COMP%_rotate90deg{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.onreloadhover[_ngcontent-%COMP%]:hover{animation:_ngcontent-%COMP%_rotate90deg .9s linear infinite}"]}),p})()}];let D=(()=>{var r;class p{}return(r=p).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[m.iI.forChild(G),m.iI]}),p})();var R=a(5553);let E=(()=>{var r;class p{}return(r=p).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[s.MD,v.YN,u.bv,D,R.h]}),p})()}}]);