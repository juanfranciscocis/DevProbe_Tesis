"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2643],{2643:(C,c,r)=>{r.r(c),r.d(c,{GraphPageModule:()=>R});var m=r(177),f=r(4341),d=r(7863),h=r(305),g=r(467),e=r(4438),v=r(9640),G=r(4688),y=r(8453),P=r(3241);const x=[{path:"",component:(()=>{var a;class i{constructor(t,p){this.ripeService=t,this.route=p,this.orgName="DevProbe",this.productObjective="Web",this.user={},this.data=[]}ionViewWillEnter(){var t=this;return(0,g.A)(function*(){t.route.queryParams.subscribe(l=>{t.productObjective=l.product});const p=localStorage.getItem("user");p&&(t.user=JSON.parse(p),t.orgName=t.user.orgName,yield t.ripeService.getHistoryResults(t.orgName,t.productObjective).then(l=>{for(let s=0;s<l.length;s++){let n=l[s].id.split("-");t.data.push({id:n[1],data:l[s].data.data,date:n[3]+"/"+n[2]+"/"+n[4],time:n[5]})}}).then(()=>{const l=[],s=[];for(let n=0;n<t.data.length;n++){l.push(t.data[n].date);for(let o=0;o<t.data[n].data.length;o++)s.push(t.data[n].data[o].latency);t.options={legend:{data:["bar","bar2"],align:"left"},tooltip:{},xAxis:{data:l,silent:!1,splitLine:{show:!1}},yAxis:{},series:[{name:"bar",type:"bar",data:s,animationDelay:o=>10*o}],animationEasing:"elasticOut",animationDelayUpdate:o=>5*o}}}))})()}ngOnInit(){return(0,g.A)(function*(){})()}}return(a=i).\u0275fac=function(t){return new(t||a)(e.rXU(v.Q),e.rXU(h.nX))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-graph"]],decls:11,vars:4,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12","size-md","6","size-lg","6",1,"flex","flex-row","justify-center"],[1,"w-full","h-96","p-6","flex","flex-col","justify-center","items-center"],[1,"text-6xl","font-bold","text-blue-500"],["echarts","",1,"demo-chart","h-full","w-full",3,"options"]],template:function(t,p){1&t&&(e.nrm(0,"app-header-return",0),e.j41(1,"ion-content",1)(2,"ion-grid"),e.nrm(3,"app-title",0),e.j41(4,"ion-row",2)(5,"ion-col",3)(6,"ion-card",4)(7,"h1",5),e.EFF(8,"Graph"),e.k0s(),e.nrm(9,"br")(10,"div",6),e.k0s()()()()()),2&t&&(e.Y8G("title","Graph"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(2),e.Y8G("title","Graph"),e.R7$(7),e.Y8G("options",p.options))},dependencies:[d.b_,d.hU,d.W9,d.lO,d.ln,G.$P,y.W,P.p]}),i})()}];let j=(()=>{var a;class i{}return(a=i).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[h.iI.forChild(x),h.iI]}),i})();var M=r(5553);let R=(()=>{var a;class i{}return(a=i).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[m.MD,f.YN,d.bv,j,M.h]}),i})()}}]);