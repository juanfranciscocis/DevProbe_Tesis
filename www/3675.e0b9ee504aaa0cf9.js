"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3675],{5553:(h,p,e)=>{e.d(p,{h:()=>l});var i=e(177),m=e(7863),c=e(4438);let l=(()=>{var r;class n{}return(r=n).\u0275fac=function(d){return new(d||r)},r.\u0275mod=c.$C({type:r}),r.\u0275inj=c.G2t({imports:[i.MD,m.bv]}),n})()},3241:(h,p,e)=>{e.d(p,{p:()=>l});var i=e(4438),m=e(177),c=e(7863);let l=(()=>{var r;class n{constructor(d){this.location=d,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(r=n).\u0275fac=function(d){return new(d||r)(i.rXU(m.aZ))},r.\u0275cmp=i.VBU({type:r,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(d,_){1&d&&(i.j41(0,"ion-header",0)(1,"ion-toolbar"),i.nrm(2,"ion-menu-button",1),i.j41(3,"ion-icon",2),i.bIt("click",function(){return _.goBack()}),i.k0s(),i.j41(4,"ion-title"),i.EFF(5),i.k0s()()()),2&d&&(i.Y8G("translucent",!0),i.R7$(5),i.JRh(_.title))},dependencies:[c.eU,c.iq,c.MC,c.BC,c.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),n})()},8453:(h,p,e)=>{e.d(p,{W:()=>c});var i=e(4438),m=e(7863);let c=(()=>{var l;class r{constructor(){this.title="Title"}ngOnInit(){}}return(l=r).\u0275fac=function(g){return new(g||l)},l.\u0275cmp=i.VBU({type:l,selectors:[["app-title"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"lg:m-10"],["size","12","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"]],template:function(g,d){1&g&&(i.j41(0,"ion-row",0)(1,"ion-col",1)(2,"h1",2),i.EFF(3),i.k0s()()()),2&g&&(i.R7$(3),i.JRh(d.title))},dependencies:[m.hU,m.ln]}),r})()},3675:(h,p,e)=>{e.r(p),e.d(p,{IncidentManagerPageModule:()=>C});var i=e(177),m=e(4341),c=e(7863),l=e(7650),r=e(467),n=e(4438),g=e(4624),d=e(8453),_=e(3241);function v(o,u){if(1&o){const s=n.RV6();n.j41(0,"ion-item",7),n.bIt("click",function(){const a=n.eBV(s).$implicit,I=n.XpG();return n.Njj(I.goToIncident(a))}),n.j41(1,"ion-label")(2,"h2"),n.EFF(3),n.k0s()()()}if(2&o){const s=u.$implicit;n.R7$(3),n.JRh(s.title)}}function M(o,u){if(1&o){const s=n.RV6();n.j41(0,"ion-item",7),n.bIt("click",function(){const a=n.eBV(s).$implicit,I=n.XpG();return n.Njj(I.goToIncident(a))}),n.j41(1,"ion-label")(2,"h2"),n.EFF(3),n.k0s()()()}if(2&o){const s=u.$implicit;n.R7$(3),n.JRh(s.title)}}const f=[{path:"",component:(()=>{var o;class u{constructor(t,a,I,R){this.router=t,this.activatedRoute=a,this.loadingCtrl=I,this.incidentService=R,this.productStep="",this.productObjective="",this.orgName="",this.openIncidents=[],this.closeIncidents=[]}ngOnInit(){}ionViewWillEnter(){var t=this;return(0,r.A)(function*(){yield t.showLoading(),t.getParams(),yield t.getOpenIncidents(),yield t.closeIncident(),yield t.hideLoading()})()}getParams(){this.activatedRoute.params.subscribe(a=>{this.productObjective=a.productObjective,this.productStep=a.step});const t=JSON.parse(localStorage.getItem("user"));this.orgName=t.orgName,console.log(this.orgName),console.log(this.productObjective),console.log(this.productStep)}getOpenIncidents(){var t=this;return(0,r.A)(function*(){t.openIncidents=yield t.incidentService.getIncidents(t.orgName,t.productObjective,t.productStep),t.openIncidents=t.openIncidents.filter(a=>"open"===a.state)})()}closeIncident(){var t=this;return(0,r.A)(function*(){t.closeIncidents=yield t.incidentService.getIncidents(t.orgName,t.productObjective,t.productStep),t.closeIncidents=t.closeIncidents.filter(a=>"closed"===a.state)})()}navigateToNewIncident(){var t=this;return(0,r.A)(function*(){yield t.router.navigate(["/new-incident",{productObjective:t.productObjective,step:t.productStep}])})()}goToIncident(t){var a=this;return(0,r.A)(function*(){yield a.router.navigate(["incident-details",{productObjective:a.productObjective,step:a.productStep,incident:JSON.stringify(t)}])})()}showLoading(){var t=this;return(0,r.A)(function*(){yield(yield t.loadingCtrl.create({})).present()})()}hideLoading(){var t=this;return(0,r.A)(function*(){yield t.loadingCtrl.dismiss()})()}}return(o=u).\u0275fac=function(t){return new(t||o)(n.rXU(l.Ix),n.rXU(l.nX),n.rXU(c.Xi),n.rXU(g.I))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-incident-manager"]],decls:22,vars:7,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12","size-md","12","size-lg","12",1,""],["color","danger",1,"w-full",3,"click"],[1,"p-5"],[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(t,a){1&t&&(n.nrm(0,"app-header-return",0),n.j41(1,"ion-content",1)(2,"ion-grid"),n.nrm(3,"app-title",0),n.j41(4,"ion-row",2)(5,"ion-col",3)(6,"ion-button",4),n.bIt("click",function(){return a.navigateToNewIncident()}),n.EFF(7,"New Incident"),n.k0s()()(),n.nrm(8,"app-title",0),n.j41(9,"ion-row",2)(10,"ion-col",3)(11,"ion-card",5)(12,"ion-card-content")(13,"ion-list"),n.DNE(14,v,4,1,"ion-item",6),n.k0s()()()()(),n.nrm(15,"app-title",0),n.j41(16,"ion-row",2)(17,"ion-col",3)(18,"ion-card",5)(19,"ion-card-content")(20,"ion-list"),n.DNE(21,M,4,1,"ion-item",6),n.k0s()()()()()()()),2&t&&(n.Y8G("title","Incident Manager"),n.R7$(),n.Y8G("fullscreen",!0),n.R7$(2),n.Y8G("title","Incident Manager"),n.R7$(5),n.Y8G("title","Open Incidents"),n.R7$(6),n.Y8G("ngForOf",a.openIncidents),n.R7$(),n.Y8G("title","Closed Incidents"),n.R7$(6),n.Y8G("ngForOf",a.closeIncidents))},dependencies:[i.Sq,c.Jm,c.b_,c.I9,c.hU,c.W9,c.lO,c.uz,c.he,c.nf,c.ln,d.W,_.p]}),u})()}];let O=(()=>{var o;class u{}return(o=u).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[l.iI.forChild(f),l.iI]}),u})();var P=e(5553);let C=(()=>{var o;class u{}return(o=u).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[i.MD,m.YN,c.bv,O,P.h]}),u})()}}]);