"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1081],{5553:(f,u,e)=>{e.d(u,{h:()=>r});var n=e(177),p=e(7863),a=e(4438);let r=(()=>{var t;class s{}return(t=s).\u0275fac=function(c){return new(c||t)},t.\u0275mod=a.$C({type:t}),t.\u0275inj=a.G2t({imports:[n.MD,p.bv]}),s})()},3241:(f,u,e)=>{e.d(u,{p:()=>r});var n=e(4438),p=e(177),a=e(7863);let r=(()=>{var t;class s{constructor(c){this.location=c,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(t=s).\u0275fac=function(c){return new(c||t)(n.rXU(p.aZ))},t.\u0275cmp=n.VBU({type:t,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(c,h){1&c&&(n.j41(0,"ion-header",0)(1,"ion-toolbar"),n.nrm(2,"ion-menu-button",1),n.j41(3,"ion-icon",2),n.bIt("click",function(){return h.goBack()}),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.k0s()()()),2&c&&(n.Y8G("translucent",!0),n.R7$(5),n.JRh(h.title))},dependencies:[a.eU,a.iq,a.MC,a.BC,a.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),s})()},8453:(f,u,e)=>{e.d(u,{W:()=>a});var n=e(4438),p=e(7863);let a=(()=>{var r;class t{constructor(){this.title="Title"}ngOnInit(){}}return(r=t).\u0275fac=function(i){return new(i||r)},r.\u0275cmp=n.VBU({type:r,selectors:[["app-title"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"lg:m-10"],["size","12","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"]],template:function(i,c){1&i&&(n.j41(0,"ion-row",0)(1,"ion-col",1)(2,"h1",2),n.EFF(3),n.k0s()()()),2&i&&(n.R7$(3),n.JRh(c.title))},dependencies:[p.hU,p.ln]}),t})()},1081:(f,u,e)=>{e.r(u),e.d(u,{GraphDataForPageModule:()=>P});var n=e(177),p=e(4341),a=e(7863),r=e(7650),t=e(4438),s=e(8453),i=e(3241);const h=[{path:"",component:(()=>{var o;class d{constructor(l,g){this.route=l,this.router=g,this.productObjective=""}ngOnInit(){this.route.queryParams.subscribe(l=>{this.productObjective=l.product})}goToLatencyGraph(){this.router.navigate(["/graph-latency"],{queryParams:{product:this.productObjective}})}goToTraceGraph(){this.router.navigate(["/graph-trace"],{queryParams:{product:this.productObjective}})}}return(o=d).\u0275fac=function(l){return new(l||o)(t.rXU(r.nX),t.rXU(r.Ix))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-graph-data-for"]],decls:13,vars:3,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12","size-md","6","size-lg","6",1,"flex","flex-row","justify-center"],[1,"w-full","h-60","p-6","flex","flex-col","justify-center","items-center",3,"click"],[1,"text-6xl","font-bold","text-blue-500"]],template:function(l,g){1&l&&(t.nrm(0,"app-header-return",0),t.j41(1,"ion-content",1)(2,"ion-grid"),t.nrm(3,"app-title",0),t.j41(4,"ion-row",2)(5,"ion-col",3)(6,"ion-card",4),t.bIt("click",function(){return g.goToLatencyGraph()}),t.j41(7,"h1",5),t.EFF(8,"Latency"),t.k0s()()(),t.j41(9,"ion-col",3)(10,"ion-card",4),t.bIt("click",function(){return g.goToTraceGraph()}),t.j41(11,"h1",5),t.EFF(12,"Trace"),t.k0s()()()()()()),2&l&&(t.Y8G("title","Graph Data For"),t.R7$(),t.Y8G("fullscreen",!0),t.R7$(2),t.Y8G("title","Graph Data For"))},dependencies:[a.b_,a.hU,a.W9,a.lO,a.ln,s.W,i.p]}),d})()}];let _=(()=>{var o;class d{}return(o=d).\u0275fac=function(l){return new(l||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[r.iI.forChild(h),r.iI]}),d})();var D=e(5553);let P=(()=>{var o;class d{}return(o=d).\u0275fac=function(l){return new(l||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[n.MD,p.YN,a.bv,_,D.h]}),d})()}}]);