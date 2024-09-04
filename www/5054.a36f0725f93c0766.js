"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5054],{5553:(D,y,o)=>{o.d(y,{h:()=>v});var c=o(177),M=o(7863),u=o(4438);let v=(()=>{var h;class t{}return(h=t).\u0275fac=function(g){return new(g||h)},h.\u0275mod=u.$C({type:h}),h.\u0275inj=u.G2t({imports:[c.MD,M.bv]}),t})()},3241:(D,y,o)=>{o.d(y,{p:()=>v});var c=o(4438),M=o(177),u=o(7863);let v=(()=>{var h;class t{constructor(g){this.location=g,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(h=t).\u0275fac=function(g){return new(g||h)(c.rXU(M.aZ))},h.\u0275cmp=c.VBU({type:h,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(g,G){1&g&&(c.j41(0,"ion-header",0)(1,"ion-toolbar"),c.nrm(2,"ion-menu-button",1),c.j41(3,"ion-icon",2),c.bIt("click",function(){return G.goBack()}),c.k0s(),c.j41(4,"ion-title"),c.EFF(5),c.k0s()()()),2&g&&(c.Y8G("translucent",!0),c.R7$(5),c.JRh(G.title))},dependencies:[u.eU,u.iq,u.MC,u.BC,u.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),t})()},5054:(D,y,o)=>{o.r(y),o.d(y,{FlameGraphPageModule:()=>j});var c=o(177),M=o(4341),u=o(7863),v=o(7650),h=o(467),t=o(4438),_=o(6560),g=o(7616),G=o(8453),O=o(3241);function U(a,p){if(1&a&&(t.j41(0,"div",9),t.nrm(1,"ngx-flamegraph",10),t.k0s()),2&a){const f=t.XpG();t.R7$(),t.Y8G("config",f.data)}}function E(a,p){if(1&a&&(t.j41(0,"div",9),t.nrm(1,"ngx-flamegraph",10),t.k0s()),2&a){const f=t.XpG();t.R7$(),t.Y8G("config",f.data)}}let T=(()=>{var a;class p{constructor(e,s,l,r){this.flameGraphService=e,this.loadingCtrl=s,this.router=l,this.route=r,this.product={},this.date="",this.data={data:A},this.color={hue:[50,0],saturation:[80,80],lightness:[55,60]},this.usage_type=""}ionViewWillEnter(){this.getProductAndDateFromParams(),this.getFlameGraph()}getProductAndDateFromParams(){this.route.queryParams.subscribe(e=>{this.product=JSON.parse(e.product),this.date=e.date,this.usage_type=this.route.snapshot.queryParamMap.get("usage_type")}),console.log(this.product.productObjective),console.log(this.date),console.log(this.usage_type)}getFlameGraph(){var e=this;return(0,h.A)(function*(){try{yield e.showLoading();const l=localStorage.getItem("user");if(!l)return;const n=JSON.parse(l).orgName;let d;console.log(n),"memory_usage"===e.usage_type?(d=yield e.flameGraphService.getFlameGraphByDate(n,e.product.productObjective,e.date,!0),e.color={hue:[140,100],saturation:[60,60],lightness:[60,30]}):(d=yield e.flameGraphService.getFlameGraphByDate(n,e.product.productObjective,e.date),e.color={hue:[50,0],saturation:[80,80],lightness:[55,60]}),console.log("flame graph",d);let i=[],m=[];for(let C in d){var s;const R=null===(s=d)||void 0===s?void 0:s[C];m=Object.keys(R),console.log("keys",m);const K=100/m.length;for(let F in m){const b=[];for(let P=0;P<R[m[F]].length;P++)b[P]="memory_usage"===e.usage_type?e.transformToRawDataMemory(R[m[F]][P]):e.transformToRawDataCPU(R[m[F]][P]);console.log("server1",b);const L={label:m[F],value:K,children:[...b]};i.push(L)}console.log("server",i)}i=[{label:"root",value:100,children:i}],e.data={data:i,color:e.color},console.log("final object",i),yield e.hideLoading()}catch(l){console.log(l),yield e.hideLoading()}})()}showLoading(){var e=this;return(0,h.A)(function*(){yield(yield e.loadingCtrl.create({})).present()})()}hideLoading(){var e=this;return(0,h.A)(function*(){yield e.loadingCtrl.dismiss()})()}ngOnInit(){}average(e){const s=e.map(Number);return s.reduce((r,n)=>r+n,0)/s.length}transformToRawDataCPU(e){const s=e.cpu_usage?this.average(e.cpu_usage):0,l=[];for(const r in e){if("id"===r||"cpu_usage"===r)continue;const n=e[r];if("object"!=typeof n||Array.isArray(n))"object"!=typeof n&&l.push({label:r,value:0,children:[]});else if("sub_services"===r)for(const d in n){const i=n[d],C={label:d,value:i.cpu_usage?this.average(i.cpu_usage):0,children:this.transformToRawDataCPU(i).children};l.push(C)}else{const i={label:r,value:n.cpu_usage?this.average(n.cpu_usage):0,children:this.transformToRawDataCPU(n).children};l.push(i)}}return{label:e.id,value:s,children:l}}transformToRawDataMemory(e){const s=e.memory_usage?this.average(e.memory_usage):0,l=[];for(const r in e){if("id"===r||"memory_usage"===r)continue;const n=e[r];if("object"!=typeof n||Array.isArray(n))"object"!=typeof n&&l.push({label:r,value:0,children:[]});else if("sub_services"===r)for(const d in n){const i=n[d],C={label:d,value:i.memory_usage?this.average(i.memory_usage):0,children:this.transformToRawDataMemory(i).children};l.push(C)}else{const i={label:r,value:n.memory_usage?this.average(n.memory_usage):0,children:this.transformToRawDataMemory(n).children};l.push(i)}}return{label:e.id,value:s,children:l}}doRefresh(e){var s=this;return(0,h.A)(function*(){yield s.getFlameGraph(),e.target.complete()})()}}return(a=p).\u0275fac=function(e){return new(e||a)(t.rXU(_.x),t.rXU(u.Xi),t.rXU(v.Ix),t.rXU(v.nX))},a.\u0275cmp=t.VBU({type:a,selectors:[["app-flame-graph"]],decls:15,vars:5,consts:[[3,"title"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"lg:m-10","md:m-10"],["size","12","size-md","4","size-lg","4",1,""],[1,"lg:m-10"],["size","12"],[1,"p-5"],[1,"bg-transparent"],[1,"wrapper-responsive"],[3,"config"]],template:function(e,s){1&e&&(t.nrm(0,"app-header-return",0),t.j41(1,"ion-content",1)(2,"ion-refresher",2),t.bIt("ionRefresh",function(r){return s.doRefresh(r)}),t.nrm(3,"ion-refresher-content"),t.k0s(),t.nrm(4,"app-title",0),t.j41(5,"ion-row",3)(6,"ion-col",4)(7,"p"),t.EFF(8),t.k0s()()(),t.j41(9,"ion-row",5)(10,"ion-col",6)(11,"ion-card",7)(12,"ion-card",8),t.DNE(13,U,2,1,"div",9)(14,E,2,1),t.k0s()()()()()),2&e&&(t.Y8G("title","Flame Graph"),t.R7$(),t.Y8G("fullscreen",!0),t.R7$(3),t.Y8G("title","Flame Graph"),t.R7$(4),t.SpI("Showing data for : ",s.date,""),t.R7$(5),t.vxM(13,"cpu"===s.usage_type?13:14))},dependencies:[u.b_,u.hU,u.W9,u.To,u.Ki,u.ln,g.E,G.W,O.p],styles:[".wrapper-fixed-width[_ngcontent-%COMP%]{width:900px;margin:auto}.wrapper-responsive[_ngcontent-%COMP%]{width:100%;margin:auto}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{text-align:center;-webkit-user-select:none;user-select:none}"]}),p})();const A=[{label:"root",value:100,children:[]}],w=[{path:"",component:T}];let I=(()=>{var a;class p{}return(a=p).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[v.iI.forChild(w),v.iI]}),p})();var B=o(5553);let j=(()=>{var a;class p{}return(a=p).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[c.MD,M.YN,u.bv,I,g.n,B.h]}),p})()}}]);