"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5054],{5553:(T,_,a)=>{a.d(_,{h:()=>h});var o=a(177),P=a(7863),i=a(4438);let h=(()=>{var s;class e{}return(s=e).\u0275fac=function(g){return new(g||s)},s.\u0275mod=i.$C({type:s}),s.\u0275inj=i.G2t({imports:[o.MD,P.bv]}),e})()},3241:(T,_,a)=>{a.d(_,{p:()=>h});var o=a(4438),P=a(177),i=a(7863);let h=(()=>{var s;class e{constructor(g){this.location=g,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(s=e).\u0275fac=function(g){return new(g||s)(o.rXU(P.aZ))},s.\u0275cmp=o.VBU({type:s,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(g,R){1&g&&(o.j41(0,"ion-header",0)(1,"ion-toolbar"),o.nrm(2,"ion-menu-button",1),o.j41(3,"ion-icon",2),o.bIt("click",function(){return R.goBack()}),o.k0s(),o.j41(4,"ion-title"),o.EFF(5),o.k0s()()()),2&g&&(o.Y8G("translucent",!0),o.R7$(5),o.JRh(R.title))},dependencies:[i.eU,i.iq,i.MC,i.BC,i.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),e})()},8453:(T,_,a)=>{a.d(_,{W:()=>i});var o=a(4438),P=a(7863);let i=(()=>{var h;class s{constructor(){this.title="Title"}ngOnInit(){}}return(h=s).\u0275fac=function(f){return new(f||h)},h.\u0275cmp=o.VBU({type:h,selectors:[["app-title"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"lg:m-10"],["size","12","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"]],template:function(f,g){1&f&&(o.j41(0,"ion-row",0)(1,"ion-col",1)(2,"h1",2),o.EFF(3),o.k0s()()()),2&f&&(o.R7$(3),o.JRh(g.title))},dependencies:[P.hU,P.ln]}),s})()},5054:(T,_,a)=>{a.r(_),a.d(_,{FlameGraphPageModule:()=>x});var o=a(177),P=a(4341),i=a(7863),h=a(7650),s=a(467),e=a(4438),f=a(6560),g=a(7616),R=a(8453),b=a(3241);function E(n,v){if(1&n&&(e.j41(0,"div",9),e.nrm(1,"ngx-flamegraph",10),e.k0s()),2&n){const y=e.XpG();e.R7$(),e.Y8G("config",y.data)}}function O(n,v){if(1&n&&(e.j41(0,"div",9),e.nrm(1,"ngx-flamegraph",10),e.k0s()),2&n){const y=e.XpG();e.R7$(),e.Y8G("config",y.data)}}let U=(()=>{var n;class v{constructor(t,c,u,l){this.flameGraphService=t,this.loadingCtrl=c,this.router=u,this.route=l,this.product={},this.date="",this.data={data:A},this.color={hue:[50,0],saturation:[80,80],lightness:[55,60]},this.usage_type=""}ionViewWillEnter(){this.getProductAndDateFromParams(),this.getFlameGraph()}getProductAndDateFromParams(){this.route.queryParams.subscribe(t=>{this.product=JSON.parse(t.product),this.date=t.date,this.usage_type=this.route.snapshot.queryParamMap.get("usage_type")}),console.log(this.product.productObjective),console.log(this.date),console.log(this.usage_type)}getFlameGraph(){var t=this;return(0,s.A)(function*(){try{yield t.showLoading();const u=localStorage.getItem("user");if(!u)return;const r=JSON.parse(u).orgName;let d;console.log(r),"memory_usage"===t.usage_type?(d=yield t.flameGraphService.getFlameGraphByDate(r,t.product.productObjective,t.date,!0),t.color={hue:[140,100],saturation:[60,60],lightness:[60,30]}):(d=yield t.flameGraphService.getFlameGraphByDate(r,t.product.productObjective,t.date),t.color={hue:[50,0],saturation:[80,80],lightness:[55,60]}),console.log("flame graph",d);let m=[],p=[];for(let M in d){var c;const F=null===(c=d)||void 0===c?void 0:c[M];p=Object.keys(F),console.log("keys",p);const K=100/p.length;for(let G in p){const D=[];for(let C=0;C<F[p[G]].length;C++)D[C]="memory_usage"===t.usage_type?t.transformToRawDataMemory(F[p[G]][C]):t.transformToRawDataCPU(F[p[G]][C]);console.log("server1",D);const j={label:p[G],value:K,children:[...D]};m.push(j)}console.log("server",m)}m=[{label:"root",value:100,children:m}],t.data={data:m,color:t.color},console.log("final object",m),yield t.hideLoading()}catch(u){console.log(u),yield t.hideLoading()}})()}showLoading(){var t=this;return(0,s.A)(function*(){yield(yield t.loadingCtrl.create({})).present()})()}hideLoading(){var t=this;return(0,s.A)(function*(){yield t.loadingCtrl.dismiss()})()}ngOnInit(){}average(t){const c=t.map(Number);return c.reduce((l,r)=>l+r,0)/c.length}transformToRawDataCPU(t){const c=t.cpu_usage?this.average(t.cpu_usage):0,u=[];for(const l in t){if("id"===l||"cpu_usage"===l)continue;const r=t[l];if("object"!=typeof r||Array.isArray(r))"object"!=typeof r&&u.push({label:l,value:0,children:[]});else if("sub_services"===l)for(const d in r){const m=r[d],M={label:d,value:m.cpu_usage?this.average(m.cpu_usage):0,children:this.transformToRawDataCPU(m).children};u.push(M)}else{const m={label:l,value:r.cpu_usage?this.average(r.cpu_usage):0,children:this.transformToRawDataCPU(r).children};u.push(m)}}return{label:t.id,value:c,children:u}}transformToRawDataMemory(t){const c=t.memory_usage?this.average(t.memory_usage):0,u=[];for(const l in t){if("id"===l||"memory_usage"===l)continue;const r=t[l];if("object"!=typeof r||Array.isArray(r))"object"!=typeof r&&u.push({label:l,value:0,children:[]});else if("sub_services"===l)for(const d in r){const m=r[d],M={label:d,value:m.memory_usage?this.average(m.memory_usage):0,children:this.transformToRawDataMemory(m).children};u.push(M)}else{const m={label:l,value:r.memory_usage?this.average(r.memory_usage):0,children:this.transformToRawDataMemory(r).children};u.push(m)}}return{label:t.id,value:c,children:u}}doRefresh(t){var c=this;return(0,s.A)(function*(){yield c.getFlameGraph(),t.target.complete()})()}}return(n=v).\u0275fac=function(t){return new(t||n)(e.rXU(f.x),e.rXU(i.Xi),e.rXU(h.Ix),e.rXU(h.nX))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-flame-graph"]],decls:15,vars:5,consts:[[3,"title"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"lg:m-10","md:m-10"],["size","12","size-md","4","size-lg","4",1,""],[1,"lg:m-10"],["size","12"],[1,"p-5"],[1,"bg-transparent"],[1,"wrapper-responsive"],[3,"config"]],template:function(t,c){1&t&&(e.nrm(0,"app-header-return",0),e.j41(1,"ion-content",1)(2,"ion-refresher",2),e.bIt("ionRefresh",function(l){return c.doRefresh(l)}),e.nrm(3,"ion-refresher-content"),e.k0s(),e.nrm(4,"app-title",0),e.j41(5,"ion-row",3)(6,"ion-col",4)(7,"p"),e.EFF(8),e.k0s()()(),e.j41(9,"ion-row",5)(10,"ion-col",6)(11,"ion-card",7)(12,"ion-card",8),e.DNE(13,E,2,1,"div",9)(14,O,2,1),e.k0s()()()()()),2&t&&(e.Y8G("title","Flame Graph"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(3),e.Y8G("title","Flame Graph"),e.R7$(4),e.SpI("Showing data for : ",c.date,""),e.R7$(5),e.vxM(13,"cpu"===c.usage_type?13:14))},dependencies:[i.b_,i.hU,i.W9,i.To,i.Ki,i.ln,g.E,R.W,b.p],styles:[".wrapper-fixed-width[_ngcontent-%COMP%]{width:900px;margin:auto}.wrapper-responsive[_ngcontent-%COMP%]{width:100%;margin:auto}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{text-align:center;-webkit-user-select:none;user-select:none}"]}),v})();const A=[{label:"root",value:100,children:[]}],I=[{path:"",component:U}];let w=(()=>{var n;class v{}return(n=v).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[h.iI.forChild(I),h.iI]}),v})();var B=a(5553);let x=(()=>{var n;class v{}return(n=v).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[o.MD,P.YN,i.bv,w,g.n,B.h]}),v})()}}]);