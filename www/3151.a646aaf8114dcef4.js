"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3151],{5553:(O,C,a)=>{a.d(C,{h:()=>v});var t=a(177),y=a(7863),r=a(4438);let v=(()=>{var s;class e{}return(s=e).\u0275fac=function(m){return new(m||s)},s.\u0275mod=r.$C({type:s}),s.\u0275inj=r.G2t({imports:[t.MD,y.bv]}),e})()},3241:(O,C,a)=>{a.d(C,{p:()=>v});var t=a(4438),y=a(177),r=a(7863);let v=(()=>{var s;class e{constructor(m){this.location=m,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(s=e).\u0275fac=function(m){return new(m||s)(t.rXU(y.aZ))},s.\u0275cmp=t.VBU({type:s,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(m,G){1&m&&(t.j41(0,"ion-header",0)(1,"ion-toolbar"),t.nrm(2,"ion-menu-button",1),t.j41(3,"ion-icon",2),t.bIt("click",function(){return G.goBack()}),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.k0s()()()),2&m&&(t.Y8G("translucent",!0),t.R7$(5),t.JRh(G.title))},dependencies:[r.eU,r.iq,r.MC,r.BC,r.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),e})()},3151:(O,C,a)=>{a.r(C),a.d(C,{FlameGraphComparePageModule:()=>B});var t=a(177),y=a(4341),r=a(7863),v=a(4848),s=a(467),e=a(4438),F=a(6560),m=a(8453),G=a(3241),R=a(7616);function b(n,p){if(1&n&&(e.qex(0),e.j41(1,"ion-card",6)(2,"ion-card",7)(3,"h3"),e.EFF(4),e.k0s(),e.j41(5,"div",8),e.nrm(6,"ngx-flamegraph",9),e.k0s()()(),e.bVm()),2&n){const h=p.$implicit,o=e.XpG();e.R7$(4),e.JRh(h),e.R7$(2),e.Y8G("config",o.configurations[h])}}const U=[{path:"",component:(()=>{var n;class p{constructor(o,l,g){this.flameGraphService=o,this.loadingCtrl=l,this.route=g,this.product={},this.datesForComparison=[],this.configurations={}}ngOnInit(){}ionViewWillEnter(){this.getProductAndDatesFromParams(),this.getFlameGraph()}getFlameGraph(){var o=this;return(0,s.A)(function*(){try{yield o.showLoading();const l=localStorage.getItem("user");if(!l)return;const i=JSON.parse(l).orgName;console.log(i),o.configurations={};for(const c of o.datesForComparison){const d=yield o.flameGraphService.getFlameGraphByDate(i,o.product.productObjective,c);console.log(d);let u=[],f=[];for(let M in d){const _=null==d?void 0:d[M];f=Object.keys(_),console.log("keys",f);const j=100/f.length;for(let D in f){const E=[];for(let P=0;P<_[f[D]].length;P++)E[P]=o.transformToRawData(_[f[D]][P]);console.log("server1",E);const K={label:f[D],value:j,children:[...E]};u.push(K)}console.log("server",u)}u=[{label:"root",value:100,children:u}],o.configurations[c]={data:u}}console.log("Final configurations",o.configurations),yield o.hideLoading()}catch(l){console.log(l),yield o.hideLoading()}})()}getProductAndDatesFromParams(){this.route.queryParams.subscribe(o=>{this.product=JSON.parse(o.product),this.datesForComparison=JSON.parse(o.dates)}),console.log(this.product.productObjective),console.log(this.datesForComparison)}doRefresh(o){}showLoading(){var o=this;return(0,s.A)(function*(){yield(yield o.loadingCtrl.create({})).present()})()}hideLoading(){var o=this;return(0,s.A)(function*(){yield o.loadingCtrl.dismiss()})()}average(o){const l=o.map(Number);return l.reduce((i,c)=>i+c,0)/l.length}transformToRawData(o){const l=o.cpu_usage?this.average(o.cpu_usage):0,g=[];for(const i in o){if("id"===i||"cpu_usage"===i)continue;const c=o[i];if("object"!=typeof c||Array.isArray(c))"object"!=typeof c&&g.push({label:i,value:0,children:[]});else if("sub_services"===i)for(const d in c){const u=c[d],M={label:d,value:u.cpu_usage?this.average(u.cpu_usage):0,children:this.transformToRawData(u).children};g.push(M)}else{const u={label:i,value:c.cpu_usage?this.average(c.cpu_usage):0,children:this.transformToRawData(c).children};g.push(u)}}return{label:o.id,value:l,children:g}}}return(n=p).\u0275fac=function(o){return new(o||n)(e.rXU(F.x),e.rXU(r.Xi),e.rXU(v.nX))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-flame-graph-compare"]],decls:8,vars:4,consts:[[3,"title"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"lg:m-10"],["size","12"],[4,"ngFor","ngForOf"],[1,"p-5"],[1,"bg-transparent"],[1,"wrapper-responsive"],[3,"config"]],template:function(o,l){1&o&&(e.nrm(0,"app-header-return",0),e.j41(1,"ion-content",1)(2,"ion-refresher",2),e.bIt("ionRefresh",function(i){return l.doRefresh(i)}),e.nrm(3,"ion-refresher-content"),e.k0s(),e.nrm(4,"app-title",0),e.j41(5,"ion-row",3)(6,"ion-col",4),e.DNE(7,b,7,2,"ng-container",5),e.k0s()()()),2&o&&(e.Y8G("title","Compare Flame Graphs"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(3),e.Y8G("title","Compare Flame Graphs"),e.R7$(3),e.Y8G("ngForOf",l.datesForComparison))},dependencies:[t.Sq,r.b_,r.hU,r.W9,r.To,r.Ki,r.ln,m.W,G.p,R.E]}),p})()}];let A=(()=>{var n;class p{}return(n=p).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[v.iI.forChild(U),v.iI]}),p})();var I=a(5553);let B=(()=>{var n;class p{}return(n=p).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[t.MD,y.YN,r.bv,A,I.h,R.n]}),p})()}}]);