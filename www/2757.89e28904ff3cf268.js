"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2757],{5553:(v,g,e)=>{e.d(g,{h:()=>c});var l=e(177),r=e(7863),m=e(4438);let c=(()=>{var i;class t{}return(i=t).\u0275fac=function(p){return new(p||i)},i.\u0275mod=m.$C({type:i}),i.\u0275inj=m.G2t({imports:[l.MD,r.bv]}),t})()},8453:(v,g,e)=>{e.d(g,{W:()=>m});var l=e(4438),r=e(7863);let m=(()=>{var c;class i{constructor(){this.title="Title"}ngOnInit(){}}return(c=i).\u0275fac=function(d){return new(d||c)},c.\u0275cmp=l.VBU({type:c,selectors:[["app-title"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"lg:m-10"],["size","12","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"]],template:function(d,p){1&d&&(l.j41(0,"ion-row",0)(1,"ion-col",1)(2,"h1",2),l.EFF(3),l.k0s()()()),2&d&&(l.R7$(3),l.JRh(p.title))},dependencies:[r.hU,r.ln]}),i})()},2757:(v,g,e)=>{e.r(g),e.d(g,{HomePageModule:()=>E});var l=e(177),r=e(7863),m=e(4341),c=e(7650),i=e(467),t=e(4438),d=e(4796),p=e(6241),P=e(385),M=e(8453);function C(n,a){if(1&n){const u=t.RV6();t.j41(0,"ion-col",4)(1,"ion-card",5),t.bIt("click",function(){const s=t.eBV(u).$implicit,f=t.XpG();return t.Njj(f.goToProduct(s.productObjective))}),t.j41(2,"h1",6),t.EFF(3),t.k0s()()()}if(2&n){const u=a.$implicit;t.R7$(3),t.JRh(u.productObjective)}}const y=[{path:"",component:(()=>{var n;class a{constructor(o,s,f,h){this.authService=o,this.router=s,this.productService=f,this.loadingCtrl=h,this.products=[]}ionViewWillEnter(){var o=this;return(0,i.A)(function*(){try{yield o.showLoading();const s=localStorage.getItem("user");if(!s)return;const h=JSON.parse(s).orgName;o.products=yield o.productService.getProducts(h),0===o.products.length&&o.products.push({productObjective:"No products found"}),console.log(o.products),yield o.hideLoading()}catch(s){console.log(s)}})()}logout(){var o=this;return(0,i.A)(function*(){yield o.authService.logoutUser(),yield o.router.navigate(["/login"])})()}showLoading(){var o=this;return(0,i.A)(function*(){yield(yield o.loadingCtrl.create({})).present()})()}hideLoading(){var o=this;return(0,i.A)(function*(){yield o.loadingCtrl.dismiss()})()}goToProduct(o){this.router.navigate(["/graph-data-for"],{queryParams:{product:o}})}}return(n=a).\u0275fac=function(o){return new(o||n)(t.rXU(d.u),t.rXU(c.Ix),t.rXU(p.b),t.rXU(r.Xi))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-home"]],decls:6,vars:4,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12","size-md","4","size-lg","4","class","flex flex-row justify-center",4,"ngFor","ngForOf"],["size","12","size-md","4","size-lg","4",1,"flex","flex-row","justify-center"],[1,"w-full","h-60","p-6","flex","flex-col","justify-center","items-center",3,"click"],[1,"text-6xl","font-bold","text-blue-500"]],template:function(o,s){1&o&&(t.nrm(0,"app-header",0),t.j41(1,"ion-content",1)(2,"ion-grid"),t.nrm(3,"app-title",0),t.j41(4,"ion-row",2),t.DNE(5,C,4,1,"ion-col",3),t.k0s()()()),2&o&&(t.Y8G("title","Home"),t.R7$(),t.Y8G("fullscreen",!0),t.R7$(2),t.Y8G("title","View Analytics Of Product ..."),t.R7$(2),t.Y8G("ngForOf",s.products))},dependencies:[l.Sq,r.b_,r.hU,r.W9,r.lO,r.ln,P.l,M.W],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),a})()}];let O=(()=>{var n;class a{}return(n=a).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[c.iI.forChild(y),c.iI]}),a})();var x=e(5553);let E=(()=>{var n;class a{}return(n=a).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[l.MD,m.YN,r.bv,O,x.h]}),a})()}}]);