"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7762],{5553:(v,g,n)=>{n.d(g,{h:()=>d});var i=n(177),f=n(7863),r=n(4438);let d=(()=>{var s;class e{}return(s=e).\u0275fac=function(m){return new(m||s)},s.\u0275mod=r.$C({type:s}),s.\u0275inj=r.G2t({imports:[i.MD,f.bv]}),e})()},3241:(v,g,n)=>{n.d(g,{p:()=>d});var i=n(4438),f=n(177),r=n(7863);let d=(()=>{var s;class e{constructor(m){this.location=m,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(s=e).\u0275fac=function(m){return new(m||s)(i.rXU(f.aZ))},s.\u0275cmp=i.VBU({type:s,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(m,T){1&m&&(i.j41(0,"ion-header",0)(1,"ion-toolbar"),i.nrm(2,"ion-menu-button",1),i.j41(3,"ion-icon",2),i.bIt("click",function(){return T.goBack()}),i.k0s(),i.j41(4,"ion-title"),i.EFF(5),i.k0s()()()),2&m&&(i.Y8G("translucent",!0),i.R7$(5),i.JRh(T.title))},dependencies:[r.eU,r.iq,r.MC,r.BC,r.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),e})()},8453:(v,g,n)=>{n.d(g,{W:()=>r});var i=n(4438),f=n(7863);let r=(()=>{var d;class s{constructor(){this.title="Title"}ngOnInit(){}}return(d=s).\u0275fac=function(p){return new(p||d)},d.\u0275cmp=i.VBU({type:d,selectors:[["app-title"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"lg:m-10"],["size","12","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"]],template:function(p,m){1&p&&(i.j41(0,"ion-row",0)(1,"ion-col",1)(2,"h1",2),i.EFF(3),i.k0s()()()),2&p&&(i.R7$(3),i.JRh(m.title))},dependencies:[f.hU,f.ln]}),s})()},7762:(v,g,n)=>{n.r(g),n.d(g,{TraceResultsPageModule:()=>x});var i=n(177),f=n(4341),r=n(7863),d=n(7650),s=n(467),e=n(4438),p=n(2588),m=n(3661),T=n(8453),y=n(3241);function E(o,u){1&o&&(e.j41(0,"ion-card-title"),e.EFF(1,"No city found"),e.k0s(),e.j41(2,"ion-card-subtitle"),e.EFF(3,"No country found"),e.k0s())}function F(o,u){1&o&&(e.j41(0,"ion-card-subtitle"),e.EFF(1,"RTT : Not calculated"),e.k0s())}function M(o,u){if(1&o&&(e.j41(0,"ion-card-subtitle"),e.EFF(1),e.k0s()),2&o){const l=e.XpG().$implicit;e.R7$(),e.SpI("RTT : ",l.result[0].rtt," ms")}}function P(o,u){if(1&o&&(e.j41(0,"ion-col",16)(1,"ion-card",17)(2,"ion-card-subtitle"),e.EFF(3),e.k0s(),e.DNE(4,E,4,0),e.j41(5,"ion-card-title"),e.EFF(6),e.k0s(),e.j41(7,"ion-card-subtitle"),e.EFF(8),e.k0s(),e.DNE(9,F,2,0,"ion-card-subtitle")(10,M,2,1),e.j41(11,"ion-card-subtitle"),e.EFF(12),e.k0s()()()),2&o){const l=u.$implicit;e.R7$(3),e.SpI("Hop",l.hop,""),e.R7$(),e.vxM(4,l.result[0].x?4:-1),e.R7$(2),e.SpI("",l.result[0].form_city," "),e.R7$(2),e.JRh(l.result[0].from_country),e.R7$(),e.vxM(9,l.result[0].rtt?10:9),e.R7$(3),e.Lme("Latitude : ",l.result[0].from_latitude,", Longitude : ",l.result[0].from_longitude,"")}}function C(o,u){if(1&o&&(e.j41(0,"ion-row",13)(1,"ion-col",14)(2,"h1",15),e.EFF(3),e.k0s()()(),e.j41(4,"ion-row",13),e.Z7z(5,P,13,7,"ion-col",16,e.fX1),e.k0s()),2&o){const l=u.$implicit;e.R7$(3),e.Lme("FROM ",l.src_city,", ",l.src_country,""),e.R7$(2),e.Dyx(l.result)}}const j=[{path:"",component:(()=>{var o;class u{constructor(t,a,h,c,R,_){this.ripeTraceService=t,this.route=a,this.router=h,this.locationTraceService=c,this.loadingCtrl=R,this.alertCtrl=_,this.ripeResults=[],this.description="",this.productObjective="",this.orgName="",this.measurementID=""}ngOnInit(){return(0,s.A)(function*(){})()}ionViewWillEnter(){var t=this;return(0,s.A)(function*(){t.route.queryParams.subscribe(c=>{console.log(c),t.description=c.description,t.productObjective=c.productObjective});const a=localStorage.getItem("user");if(!a)return;const h=JSON.parse(a);t.orgName=h.orgName,yield t.ripeTraceService.getHistoryResults(t.orgName,t.productObjective).then(c=>{console.log(c);let R=[];for(let _=0;_<c.length;_++)c[_].id==t.description&&R.push(c[_].data.data);t.ripeResults=R[0],t.measurementID=t.ripeResults[0].id,console.log(t.ripeResults),console.log(t.measurementID)})})()}getMoreResults(){var t=this;return(0,s.A)(function*(){t.ripeResults=[];try{yield t.showLoading();const a=yield t.ripeTraceService.getTraceResults(t.measurementID);if(!a||0===a.length)return yield t.hideLoading(),yield t.showAlert("No trace results found","Error"),void(yield t.getMoreResults());for(let c of a)try{c=yield t.locationTraceService.getLocationDestSrc(c),c=yield t.locationTraceService.getLocationFrom(c),t.ripeResults.push(c)}catch(R){console.log(R)}(yield t.ripeTraceService.saveMeasurementResults(t.orgName,t.productObjective,t.description,t.ripeResults))?(yield t.hideLoading(),yield t.showAlert("Trace results saved successfully","Success")):(yield t.hideLoading(),yield t.showAlert("Error saving trace results","Error"))}catch(a){console.log(a),yield t.hideLoading()}})()}goToMap(){this.router.navigate(["/show-map-trace"],{queryParams:{description:this.description,productObjective:this.productObjective,orgName:this.orgName}})}showLoading(){var t=this;return(0,s.A)(function*(){yield(yield t.loadingCtrl.create({})).present()})()}hideLoading(){var t=this;return(0,s.A)(function*(){yield t.loadingCtrl.dismiss()})()}showAlert(t,a){var h=this;return(0,s.A)(function*(){const c=yield h.alertCtrl.create({header:a,message:t,buttons:["OK"]});return yield c.present(),yield c.onDidDismiss(),!0})()}}return(o=u).\u0275fac=function(t){return new(t||o)(e.rXU(p.N),e.rXU(d.nX),e.rXU(d.Ix),e.rXU(m.e),e.rXU(r.Xi),e.rXU(r.hG))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-trace-results"]],decls:27,vars:5,consts:[[3,"title"],[3,"fullscreen"],[1,"text-xs","m-2","lg:m-10","lg:text-2xl","md:text-2xl","md:m-10"],[3,"translucent"],["size","4",1,"flex","flex-row","justify-start","items-center"],[1,"text-sm","hidden","lg:flex","md:flex"],["size","8",1,"flex","flex-row","justify-end"],["size","small","color","light",3,"click"],["name","refresh",1,"m-2"],["size","small","color","primary",3,"click"],["name","arrow-forward",1,"m-2"],["size","12",1,"flex","lg:hidden","md:hidden","flex-row","justify-center","items-center"],[1,"text-sm"],[1,"lg:m-10","md:m-10"],["size","12"],[1,"text-2xl"],["size","12","size-md","4","size-lg","4",1,"flex","flex-row","justify-center"],[1,"p-10","min-w-full"]],template:function(t,a){1&t&&(e.nrm(0,"app-header-return",0),e.j41(1,"ion-content",1)(2,"ion-grid"),e.nrm(3,"app-title",0),e.j41(4,"h2",2),e.EFF(5),e.k0s(),e.nrm(6,"br"),e.Z7z(7,C,7,2,null,null,e.fX1),e.k0s()(),e.j41(9,"ion-footer",3)(10,"ion-toolbar")(11,"ion-grid")(12,"ion-row")(13,"ion-col",4)(14,"h1",5),e.EFF(15,"No city found might be due to host protections!"),e.k0s()(),e.j41(16,"ion-col",6)(17,"ion-button",7),e.bIt("click",function(){return a.getMoreResults()}),e.EFF(18,"GET MORE RESULTS "),e.nrm(19,"ion-icon",8),e.k0s(),e.j41(20,"ion-button",9),e.bIt("click",function(){return a.goToMap()}),e.EFF(21,"GO TO MAP "),e.nrm(22,"ion-icon",10),e.k0s()()(),e.j41(23,"ion-row")(24,"ion-col",11)(25,"h1",12),e.EFF(26,"No city found might be due to host protections!"),e.k0s()()()()()()),2&t&&(e.Y8G("title","Trace Results for "+a.description),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(2),e.Y8G("title","Test Results"),e.R7$(2),e.SpI("Results for ",a.description,""),e.R7$(2),e.Dyx(a.ripeResults),e.R7$(2),e.Y8G("translucent",!0))},dependencies:[r.Jm,r.b_,r.HW,r.tN,r.hU,r.W9,r.M0,r.lO,r.iq,r.ln,r.ai,T.W,y.p]}),u})()}];let O=(()=>{var o;class u{}return(o=u).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[d.iI.forChild(j),d.iI]}),u})();var D=n(5553);let x=(()=>{var o;class u{}return(o=u).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[i.MD,f.YN,r.bv,O,D.h]}),u})()}}]);