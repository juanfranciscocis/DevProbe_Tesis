"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5399],{5553:(F,m,o)=>{o.d(m,{h:()=>u});var d=o(177),h=o(7863),n=o(4438);let u=(()=>{var s;class e{}return(s=e).\u0275fac=function(f){return new(f||s)},s.\u0275mod=n.$C({type:s}),s.\u0275inj=n.G2t({imports:[d.MD,h.bv]}),e})()},5399:(F,m,o)=>{o.r(m),o.d(m,{FlameGraphForPageModule:()=>R});var d=o(177),h=o(4341),n=o(7863),u=o(7650),s=o(467),e=o(4438),g=o(6560),f=o(385),v=o(8453);function P(r,i){if(1&r){const l=e.RV6();e.j41(0,"ion-item",9),e.bIt("click",function(){const a=e.eBV(l).$implicit,c=e.XpG();return e.Njj(c.viewDatesForProduct(a))}),e.j41(1,"ion-label"),e.EFF(2),e.k0s()()}if(2&r){const l=i.$implicit;e.R7$(2),e.JRh(l.productObjective)}}const G=[{path:"",component:(()=>{var r;class i{constructor(t,a,c,p){this.flameGraphService=t,this.loadingCtrl=a,this.router=c,this.activatedRoute=p,this.products=[],this.usage_type=""}ionViewWillEnter(){var t=this;return(0,s.A)(function*(){yield t.getProducts()})()}getProducts(){var t=this;return(0,s.A)(function*(){try{const a=localStorage.getItem("user");if(!a)return;const p=JSON.parse(a).orgName;t.usage_type=t.activatedRoute.snapshot.queryParamMap.get("usage_type"),null===t.usage_type&&(t.usage_type=""),console.log(t.usage_type),t.products=yield t.flameGraphService.getProducts(p),0===t.products.length&&t.products.push({productObjective:"No products found"})}catch(a){console.log(a)}})()}viewDatesForProduct(t){var a=this;return(0,s.A)(function*(){yield a.router.navigate(["/flame-graph-date"],{queryParams:{product:JSON.stringify(t),usage_type:a.usage_type}})})()}doRefresh(t){var a=this;return(0,s.A)(function*(){yield a.getProducts(),t.target.complete()})()}viewProduct(t){}ngOnInit(){}}return(r=i).\u0275fac=function(t){return new(t||r)(e.rXU(g.x),e.rXU(n.Xi),e.rXU(u.Ix),e.rXU(u.nX))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-flame-graph-for"]],decls:15,vars:4,consts:[[3,"title"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"lg:m-10","md:m-10"],["size","12","size-md","4","size-lg","4",1,""],[1,"lg:m-10"],["size","12"],[1,"bg-white",3,"inset"],["color","dark"],["color","dark",3,"click"]],template:function(t,a){1&t&&(e.nrm(0,"app-header",0),e.j41(1,"ion-content",1)(2,"ion-refresher",2),e.bIt("ionRefresh",function(p){return a.doRefresh(p)}),e.nrm(3,"ion-refresher-content"),e.k0s(),e.j41(4,"ion-grid"),e.nrm(5,"app-title",0),e.j41(6,"ion-row",3)(7,"ion-col",4)(8,"p"),e.EFF(9,"Choose a product to see the server usage."),e.k0s()()(),e.j41(10,"ion-row",5)(11,"ion-col",6)(12,"ion-list",7),e.Z7z(13,P,3,1,"ion-item",8,e.fX1),e.k0s()()()()()),2&t&&(e.Y8G("title","Server Usage"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(4),e.Y8G("title","Server usage for"),e.R7$(7),e.Y8G("inset",!0),e.R7$(),e.Dyx(a.products))},dependencies:[n.hU,n.W9,n.lO,n.uz,n.he,n.nf,n.To,n.Ki,n.ln,f.l,v.W]}),i})()}];let y=(()=>{var r;class i{}return(r=i).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[u.iI.forChild(G),u.iI]}),i})();var M=o(5553);let R=(()=>{var r;class i{}return(r=i).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[d.MD,h.YN,n.bv,y,M.h]}),i})()}}]);