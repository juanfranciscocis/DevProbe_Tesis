"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3675],{5553:(f,_,c)=>{c.d(_,{h:()=>m});var r=c(177),I=c(7863),s=c(4438);let m=(()=>{var a;class n{}return(a=n).\u0275fac=function(u){return new(u||a)},a.\u0275mod=s.$C({type:a}),a.\u0275inj=s.G2t({imports:[r.MD,I.bv]}),n})()},3241:(f,_,c)=>{c.d(_,{p:()=>m});var r=c(4438),I=c(177),s=c(7863);let m=(()=>{var a;class n{constructor(u){this.location=u,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(a=n).\u0275fac=function(u){return new(u||a)(r.rXU(I.aZ))},a.\u0275cmp=r.VBU({type:a,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(u,h){1&u&&(r.j41(0,"ion-header",0)(1,"ion-toolbar"),r.nrm(2,"ion-menu-button",1),r.j41(3,"ion-icon",2),r.bIt("click",function(){return h.goBack()}),r.k0s(),r.j41(4,"ion-title"),r.EFF(5),r.k0s()()()),2&u&&(r.Y8G("translucent",!0),r.R7$(5),r.JRh(h.title))},dependencies:[s.eU,s.iq,s.MC,s.BC,s.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),n})()},8453:(f,_,c)=>{c.d(_,{W:()=>s});var r=c(4438),I=c(7863);let s=(()=>{var m;class a{constructor(){this.title="Title"}ngOnInit(){}}return(m=a).\u0275fac=function(g){return new(g||m)},m.\u0275cmp=r.VBU({type:m,selectors:[["app-title"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"lg:m-10"],["size","12","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"]],template:function(g,u){1&g&&(r.j41(0,"ion-row",0)(1,"ion-col",1)(2,"h1",2),r.EFF(3),r.k0s()()()),2&g&&(r.R7$(3),r.JRh(u.title))},dependencies:[I.hU,I.ln]}),a})()},3675:(f,_,c)=>{c.r(_),c.d(_,{IncidentManagerPageModule:()=>E});var r=c(177),I=c(4341),s=c(7863),m=c(7650),a=c(467),n=c(4438),g=c(4624),u=c(8453),h=c(3241);function M(o,d){1&o&&(n.j41(0,"ion-chip"),n.EFF(1," Assigned to you"),n.k0s())}function v(o,d){if(1&o){const l=n.RV6();n.j41(0,"ion-item",8),n.bIt("click",function(){const t=n.eBV(l).$implicit,i=n.XpG();return n.Njj(i.goToIncident(t))}),n.j41(1,"ion-label",9)(2,"div",10)(3,"h2"),n.EFF(4),n.k0s(),n.j41(5,"div"),n.DNE(6,M,2,0,"ion-chip"),n.j41(7,"ion-chip",11),n.EFF(8,"Open"),n.k0s()()()()()}if(2&o){const l=d.$implicit;n.R7$(4),n.JRh(l.title),n.R7$(2),n.vxM(6,l.iAmIn?6:-1)}}function C(o,d){if(1&o){const l=n.RV6();n.j41(0,"ion-chip",8),n.bIt("click",function(){n.eBV(l);const t=n.XpG().$implicit,i=n.XpG();return n.Njj(i.goToIncident(t))}),n.EFF(1," Assigned to you"),n.k0s()}}function P(o,d){if(1&o){const l=n.RV6();n.j41(0,"ion-chip",13),n.bIt("click",function(){n.eBV(l);const t=n.XpG().$implicit,i=n.XpG();return n.Njj(i.goToPostmortem(t))}),n.EFF(1," Postmortem"),n.k0s()}}function O(o,d){if(1&o){const l=n.RV6();n.j41(0,"ion-chip",14),n.bIt("click",function(){n.eBV(l);const t=n.XpG().$implicit,i=n.XpG();return n.Njj(i.goToIncident(t))}),n.EFF(1," Closed"),n.k0s()}}function j(o,d){if(1&o){const l=n.RV6();n.j41(0,"ion-item")(1,"ion-label",9)(2,"div",10)(3,"h2",8),n.bIt("click",function(){const t=n.eBV(l).$implicit,i=n.XpG();return n.Njj(i.goToIncident(t))}),n.EFF(4),n.k0s(),n.j41(5,"div"),n.DNE(6,C,2,0,"ion-chip")(7,P,2,0,"ion-chip",12)(8,O,2,0),n.k0s()()()()}if(2&o){const l=d.$implicit;n.R7$(4),n.JRh(l.title),n.R7$(2),n.vxM(6,l.iAmIn?6:-1),n.R7$(),n.vxM(7,"postmortem"===l.state?7:8)}}const T=[{path:"",component:(()=>{var o;class d{constructor(e,t,i,p){this.router=e,this.activatedRoute=t,this.loadingCtrl=i,this.incidentService=p,this.productStep="",this.productObjective="",this.orgName="",this.openIncidents=[],this.closeIncidents=[]}ngOnInit(){}ionViewWillEnter(){var e=this;return(0,a.A)(function*(){yield e.showLoading(),e.getParams(),yield e.getOpenIncidents(),yield e.closeIncident(),yield e.getMyOpenIncidents(),yield e.getMyClosedIncidents(),yield e.hideLoading()})()}getParams(){this.activatedRoute.params.subscribe(t=>{this.productObjective=t.productObjective,this.productStep=t.step});const e=JSON.parse(localStorage.getItem("user"));this.orgName=e.orgName,console.log(this.orgName),console.log(this.productObjective),console.log(this.productStep)}getOpenIncidents(){var e=this;return(0,a.A)(function*(){e.openIncidents=yield e.incidentService.getIncidents(e.orgName,e.productObjective,e.productStep),e.openIncidents=e.openIncidents.filter(t=>"open"===t.state)})()}closeIncident(){var e=this;return(0,a.A)(function*(){e.closeIncidents=yield e.incidentService.getIncidents(e.orgName,e.productObjective,e.productStep),e.closeIncidents=e.closeIncidents.filter(t=>"closed"===t.state||"postmortem"===t.state)})()}getMyOpenIncidents(){var e=this;return(0,a.A)(function*(){const t=JSON.parse(localStorage.getItem("user"));for(let i=0;i<e.openIncidents.length;i++){(t.name===e.openIncidents[i].incidentCommander||t.name===e.openIncidents[i].operations_lead||t.name===e.openIncidents[i].communications_lead)&&(e.openIncidents[i].iAmIn=!0);for(let p=0;p<e.openIncidents[i].operation_team.length;p++)console.log(e.openIncidents[i].operation_team[p]),t.name===e.openIncidents[i].operation_team[p]&&(e.openIncidents[i].iAmIn=!0),console.log("Team ",p,e.openIncidents[i].operation_team[p])}console.log("My Open Incidents")})()}getMyClosedIncidents(){var e=this;return(0,a.A)(function*(){const t=JSON.parse(localStorage.getItem("user"));for(let i=0;i<e.closeIncidents.length;i++){(t.name===e.closeIncidents[i].incidentCommander||t.name===e.closeIncidents[i].operations_lead||t.name===e.closeIncidents[i].communications_lead)&&(e.closeIncidents[i].iAmIn=!0);for(let p=0;p<e.closeIncidents[i].operation_team.length;p++)console.log(e.closeIncidents[i].operation_team[p]),t.name===e.closeIncidents[i].operation_team[p]&&(e.closeIncidents[i].iAmIn=!0),console.log("Team ",p,e.closeIncidents[i].operation_team[p])}console.log("My Closed Incidents")})()}navigateToNewIncident(){var e=this;return(0,a.A)(function*(){yield e.router.navigate(["/new-incident",{productObjective:e.productObjective,step:e.productStep}])})()}goToIncident(e){var t=this;return(0,a.A)(function*(){yield t.router.navigate(["incident-details",{productObjective:t.productObjective,step:t.productStep,incident:JSON.stringify(e)}])})()}showLoading(){var e=this;return(0,a.A)(function*(){yield(yield e.loadingCtrl.create({})).present()})()}hideLoading(){var e=this;return(0,a.A)(function*(){yield e.loadingCtrl.dismiss()})()}goToPostmortem(e){this.router.navigate(["incident-postmortem",{productObjective:this.productObjective,step:this.productStep,incidentTitle:e.title}])}}return(o=d).\u0275fac=function(e){return new(e||o)(n.rXU(m.Ix),n.rXU(m.nX),n.rXU(s.Xi),n.rXU(g.I))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-incident-manager"]],decls:22,vars:7,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12","size-md","12","size-lg","12",1,""],["color","danger",1,"w-full",3,"click"],[1,"p-5"],[3,"click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"click"],[1,"text-white"],[1,"flex","flex-row","justify-between","items-center"],["color","success"],["color","primary"],["color","primary",3,"click"],["color","danger",3,"click"]],template:function(e,t){1&e&&(n.nrm(0,"app-header-return",0),n.j41(1,"ion-content",1)(2,"ion-grid"),n.nrm(3,"app-title",0),n.j41(4,"ion-row",2)(5,"ion-col",3)(6,"ion-button",4),n.bIt("click",function(){return t.navigateToNewIncident()}),n.EFF(7,"New Incident"),n.k0s()()(),n.nrm(8,"app-title",0),n.j41(9,"ion-row",2)(10,"ion-col",3)(11,"ion-card",5)(12,"ion-card-content")(13,"ion-list"),n.DNE(14,v,9,2,"ion-item",6),n.k0s()()()()(),n.nrm(15,"app-title",0),n.j41(16,"ion-row",2)(17,"ion-col",3)(18,"ion-card",5)(19,"ion-card-content")(20,"ion-list"),n.DNE(21,j,9,3,"ion-item",7),n.k0s()()()()()()()),2&e&&(n.Y8G("title","Incident Manager"),n.R7$(),n.Y8G("fullscreen",!0),n.R7$(2),n.Y8G("title","Incident Manager"),n.R7$(5),n.Y8G("title","Open Incidents"),n.R7$(6),n.Y8G("ngForOf",t.openIncidents),n.R7$(),n.Y8G("title","Closed Incidents"),n.R7$(6),n.Y8G("ngForOf",t.closeIncidents))},dependencies:[r.Sq,s.Jm,s.b_,s.I9,s.ZB,s.hU,s.W9,s.lO,s.uz,s.he,s.nf,s.ln,u.W,h.p]}),d})()}];let R=(()=>{var o;class d{}return(o=d).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[m.iI.forChild(T),m.iI]}),d})();var y=c(5553);let E=(()=>{var o;class d{}return(o=d).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[r.MD,I.YN,s.bv,R,y.h]}),d})()}}]);