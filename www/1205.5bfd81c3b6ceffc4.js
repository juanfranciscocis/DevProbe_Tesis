"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1205],{5553:(f,s,e)=>{e.d(s,{h:()=>i});var o=e(177),m=e(7863),n=e(4438);let i=(()=>{var t;class u{}return(t=u).\u0275fac=function(c){return new(c||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[o.MD,m.bv]}),u})()},3241:(f,s,e)=>{e.d(s,{p:()=>i});var o=e(4438),m=e(177),n=e(7863);let i=(()=>{var t;class u{constructor(c){this.location=c,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(t=u).\u0275fac=function(c){return new(c||t)(o.rXU(m.aZ))},t.\u0275cmp=o.VBU({type:t,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(c,h){1&c&&(o.j41(0,"ion-header",0)(1,"ion-toolbar"),o.nrm(2,"ion-menu-button",1),o.j41(3,"ion-icon",2),o.bIt("click",function(){return h.goBack()}),o.k0s(),o.j41(4,"ion-title"),o.EFF(5),o.k0s()()()),2&c&&(o.Y8G("translucent",!0),o.R7$(5),o.JRh(h.title))},dependencies:[n.eU,n.iq,n.MC,n.BC,n.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),u})()},1205:(f,s,e)=>{e.r(s),e.d(s,{GraphDataForPageModule:()=>F});var o=e(177),m=e(4341),n=e(7863),i=e(7650),t=e(4438),u=e(8453),p=e(3241);const h=[{path:"",component:(()=>{var a;class l{constructor(r,g){this.route=r,this.router=g,this.productObjective=""}ngOnInit(){this.route.queryParams.subscribe(r=>{this.productObjective=r.product})}goToLatencyGraph(){this.router.navigate(["/graph-latency"],{queryParams:{product:this.productObjective}})}goToTraceGraph(){this.router.navigate(["/graph-trace"],{queryParams:{product:this.productObjective}})}}return(a=l).\u0275fac=function(r){return new(r||a)(t.rXU(i.nX),t.rXU(i.Ix))},a.\u0275cmp=t.VBU({type:a,selectors:[["app-graph-data-for"]],decls:13,vars:3,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12","size-md","6","size-lg","6",1,"flex","flex-row","justify-center"],[1,"w-full","h-60","p-6","flex","flex-col","justify-center","items-center",3,"click"],[1,"text-6xl","font-bold","text-blue-500"]],template:function(r,g){1&r&&(t.nrm(0,"app-header-return",0),t.j41(1,"ion-content",1)(2,"ion-grid"),t.nrm(3,"app-title",0),t.j41(4,"ion-row",2)(5,"ion-col",3)(6,"ion-card",4),t.bIt("click",function(){return g.goToLatencyGraph()}),t.j41(7,"h1",5),t.EFF(8,"Latency"),t.k0s()()(),t.j41(9,"ion-col",3)(10,"ion-card",4),t.bIt("click",function(){return g.goToTraceGraph()}),t.j41(11,"h1",5),t.EFF(12,"Trace"),t.k0s()()()()()()),2&r&&(t.Y8G("title","Graph Data For"),t.R7$(),t.Y8G("fullscreen",!0),t.R7$(2),t.Y8G("title","Graph Data For"))},dependencies:[n.b_,n.hU,n.W9,n.lO,n.ln,u.W,p.p]}),l})()}];let D=(()=>{var a;class l{}return(a=l).\u0275fac=function(r){return new(r||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[i.iI.forChild(h),i.iI]}),l})();var P=e(5553);let F=(()=>{var a;class l{}return(a=l).\u0275fac=function(r){return new(r||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[o.MD,m.YN,n.bv,D,P.h]}),l})()}}]);