"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2962],{2962:(G,I,p)=>{p.r(I),p.d(I,{TraceTestPageModule:()=>O});var D=p(177),A=p(4341),d=p(7863),S=p(305),h=p(467),e=p(4438),T=p(4262),F=p(1626);let P=(()=>{var o;class c{constructor(t,r){this.http=t,this.firestore=r,this.measurementsUrl="https://cors-ea3m.onrender.com/https://atlas.ripe.net/api/v2/measurements/",this.measurementID="73614089"}sendTraceRequest(t,r,i,s){var a=this;return(0,h.A)(function*(){try{let u={definitions:[{target:t,description:r,type:i,af:4,is_oneoff:!0,protocol:"TCP"}],probes:[]};console.log(s);let m=s.split(",").length-1,g=(s=s.slice(0,-1)).split(","),n=[];for(let f=0;f<m;f++)n.push({requested:5,type:"country",value:g[f]});u.probes=n,console.log(u);let y={Authorization:"Key 92530695-134f-4cbc-b7c3-ec130f3719b0"};console.log(u);let v=yield a.http.post(a.measurementsUrl,u,{headers:y}).toPromise();return console.log(v),a.measurementID=v.measurements[0],!0}catch(u){return console.log(u),!1}})()}getTraceResults(t){var r=this;return(0,h.A)(function*(){t&&(r.measurementID=t);try{let i;return""===r.measurementID?(console.log("No measurement ID"),!1):r.http.get(r.measurementsUrl+r.measurementID+"/results/",{headers:i}).toPromise()}catch(i){return console.log(i),!1}})()}saveMeasurementResults(t,r,i,s){var a=this;return(0,h.A)(function*(){try{const u=(0,T.rJ)(a.firestore,"teams",t,"products",r,"ripe_trace"),m=(0,T.H9)(u,i),g=s.map((n,y)=>({dst_addr:n.dst_addr,dst_city:n.dst_city,dst_country:n.dst_country,dst_latitude:n.dst_latitude,dst_longitude:n.dst_longitude,src_addr:n.src_addr,src_city:n.src_city,src_country:n.src_country,src_latitude:n.src_latitude,src_longitude:n.src_longitude,result:n.result}));return yield(0,T.BN)(m,{data:g}),!0}catch(u){return console.log(u),!1}})()}}return(o=c).\u0275fac=function(t){return new(t||o)(e.KVO(F.Qq),e.KVO(T._7))},o.\u0275prov=e.jDH({token:o,factory:o.\u0275fac,providedIn:"root"}),c})(),C=(()=>{var o;class c{constructor(t,r){this.firestore=t,this.http=r,this.ipApiURL="https://cors-ea3m.onrender.com/http://ip-api.com/json/"}getLocationDestSrc(t){var r=this;return(0,h.A)(function*(){var i,s,a,u,m,g,n,y;if(!t)return t;const v=r.http.get(r.ipApiURL+t.dst_addr).toPromise(),f=r.http.get(r.ipApiURL+t.src_addr).toPromise(),R=yield v,_=yield f;return t.dst_city=null!==(i=R.city)&&void 0!==i?i:"No city found",t.dst_country=null!==(s=R.country)&&void 0!==s?s:"No country found",t.dst_latitude=null!==(a=R.lat)&&void 0!==a?a:0,t.dst_longitude=null!==(u=R.lon)&&void 0!==u?u:0,t.src_city=null!==(m=_.city)&&void 0!==m?m:"No city found",t.src_country=null!==(g=_.country)&&void 0!==g?g:"No country found",t.src_latitude=null!==(n=_.lat)&&void 0!==n?n:0,t.src_longitude=null!==(y=_.lon)&&void 0!==y?y:0,t})()}getLocationFrom(t){var r=this;return(0,h.A)(function*(){if(!t)return t;let i=t.result;for(let g=0;g<i.length;g++){var s,a,u,m;let n=i[g],y=n.result[0].from;if(!y)continue;const f=yield r.http.get(r.ipApiURL+y).toPromise();n.result[0].from_country=null!==(s=f.country)&&void 0!==s?s:"No country found",n.result[0].form_city=null!==(a=f.city)&&void 0!==a?a:"No city found",n.result[0].from_latitude=null!==(u=f.lat)&&void 0!==u?u:0,n.result[0].from_longitude=null!==(m=f.lon)&&void 0!==m?m:0,t.result[g]=n}return t})()}}return(o=c).\u0275fac=function(t){return new(t||o)(e.KVO(T._7),e.KVO(F.Qq))},o.\u0275prov=e.jDH({token:o,factory:o.\u0275fac,providedIn:"root"}),c})();var N=p(8453),L=p(3241);function j(o,c){if(1&o){const l=e.RV6();e.j41(0,"ion-chip",18),e.bIt("click",function(){const r=e.eBV(l).$implicit,i=e.XpG();return e.Njj(i.selectCountry(r))}),e.EFF(1),e.k0s()}if(2&o){const l=c.$implicit,t=e.XpG();e.Y8G("color",t.isCountrySelected(l)?"primary":""),e.R7$(),e.SpI(" ",l," ")}}function M(o,c){if(1&o&&(e.j41(0,"ion-item")(1,"ion-label"),e.EFF(2),e.k0s(),e.j41(3,"ion-label"),e.EFF(4),e.k0s()()),2&o){const l=c.$implicit;e.R7$(2),e.Lme("FROM ",l.from,", ",l.src_city,""),e.R7$(2),e.Lme(" TO ",l.dst_addr,", ",l.dst_city,"")}}function E(o,c){if(1&o&&(e.j41(0,"ion-item")(1,"ion-label"),e.EFF(2),e.k0s(),e.nrm(3,"ion-icon",19),e.k0s()),2&o){const l=c.$implicit;e.R7$(2),e.JRh(l)}}const U=[{path:"",component:(()=>{var o;class c{constructor(t,r,i,s,a){this.ripeTraceService=t,this.route=r,this.loadingCtrl=i,this.alertCtrl=s,this.locationTraceService=a,this.user={},this.orgName="",this.productObjective="",this.productStep="",this.host="portfoliojuanfranciscocisneros.web.app",this.description="NEW IONIC",this.type="traceroute",this.countries={names:["BRAZIL","AUSTRALIA","USA","RUSSIA","UK","GERMANY","ITALY","SPAIN","FRANCE","JAPAN","ARGENTINA","SOUTH_AFRICA","SAUDI_ARABIA","GUATEMALA","THAILAND","INDIA"],probeIDs:["BR","AU","US","RU","GB","GE","IT","ES","FR","JP","AR","ZA","SA","GT","TH","IN"]},this.selectedCountries=[],this.ripeResults=[],this.ripeHistoryResultsID=[]}ngOnInit(){}ionViewWillEnter(){var t=this;return(0,h.A)(function*(){yield t.showLoading(),t.route.params.subscribe(i=>{t.productObjective=i.productObjective,t.productStep=i.step;const s=new Date,a=s.getDate()+"-"+(s.getMonth()+1)+"-"+s.getFullYear()+"-"+s.getHours()+":"+s.getMinutes()+":"+s.getSeconds();t.description=i.productObjective+"-"+i.step+"-"+a});const r=localStorage.getItem("user");r&&(t.user=JSON.parse(r),t.orgName=t.user.orgName,yield t.hideLoading())})()}sendTraceRequest(){var t=this;return(0,h.A)(function*(){yield t.showLoading(),yield t.ripeTraceService.sendTraceRequest(t.host,t.description,t.type,t.selectedCountries.join(",")+",").then(function(){var r=(0,h.A)(function*(i){i?(yield t.hideLoading(),yield t.showAlert("Trace request sent successfully","Success")):(yield t.hideLoading(),yield t.showAlert("Error sending trace request","Error"))});return function(i){return r.apply(this,arguments)}}())})()}getMeasurementResults(){var t=this;return(0,h.A)(function*(){try{yield t.showLoading();const r=yield t.ripeTraceService.getTraceResults();if(!r||0===r.length)return yield t.hideLoading(),void(yield t.showAlert("No trace results found","Error"));for(let s of r)s=yield t.locationTraceService.getLocationDestSrc(s),s=yield t.locationTraceService.getLocationFrom(s),t.ripeResults.push(s);const i=yield t.ripeTraceService.saveMeasurementResults(t.orgName,t.productObjective,t.description,t.ripeResults);yield t.hideLoading(),i?yield t.showAlert("Trace results saved successfully","Success"):yield t.showAlert("Error saving trace results","Error")}catch(r){console.log(r),yield t.hideLoading()}})()}selectCountry(t){const r=this.countries.names.indexOf(t),i=this.countries.probeIDs[r],s=this.selectedCountries.indexOf(i);s>-1?this.selectedCountries.splice(s,1):this.selectedCountries.push(i)}isCountrySelected(t){const r=this.countries.names.indexOf(t);return this.selectedCountries.includes(this.countries.probeIDs[r])}showLoading(){var t=this;return(0,h.A)(function*(){yield(yield t.loadingCtrl.create({})).present()})()}hideLoading(){var t=this;return(0,h.A)(function*(){yield t.loadingCtrl.dismiss()})()}showAlert(t,r){var i=this;return(0,h.A)(function*(){const s=yield i.alertCtrl.create({header:r,message:t,buttons:["OK"]});return yield s.present(),yield s.onDidDismiss(),!0})()}}return(o=c).\u0275fac=function(t){return new(t||o)(e.rXU(P),e.rXU(S.nX),e.rXU(d.Xi),e.rXU(d.hG),e.rXU(C))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-trace-test"]],inputs:{host:"host",description:"description"},decls:39,vars:9,consts:[[3,"title"],[3,"fullscreen"],[1,"lg:m-10","md:m-10"],["size","12","size-md","4","size-lg","4",1,""],["label","Host Name","placeholder","Enter a host name","type","text","labelPlacement","stacked",1,"",3,"ngModelChange","ngModel"],["size","12","size-md","4","size-lg","4"],["readonly","true","label","Description","placeholder","Enter a description","type","text","labelPlacement","stacked",1,"",3,"ngModelChange","ngModel"],["size","12","size-md","12","size-lg","12"],[1,"text-xl"],[1,"m-2",3,"color"],["size","12","size-md","12","size-lg","12",1,"flex","flex-row","justify-end"],["color","primary","size","small",1,"",3,"click"],["name","add"],[4,"ngFor","ngForOf"],["size","12","size-md","12","size-lg","12",1,"flex","flex-row","justify-end","items-center"],[1,"m-2"],["color","warning","size","small",1,"",3,"click"],["name","refresh"],[1,"m-2",3,"click","color"],["name","arrow-forward","color","primary"]],template:function(t,r){1&t&&(e.nrm(0,"app-header-return",0),e.j41(1,"ion-content",1)(2,"ion-grid"),e.nrm(3,"app-title",0),e.j41(4,"ion-row",2)(5,"ion-col",3)(6,"ion-input",4),e.mxI("ngModelChange",function(s){return e.DH7(r.host,s)||(r.host=s),s}),e.k0s()(),e.j41(7,"ion-col",5)(8,"ion-input",6),e.mxI("ngModelChange",function(s){return e.DH7(r.description,s)||(r.description=s),s}),e.k0s()()(),e.j41(9,"ion-row",2)(10,"ion-col",7)(11,"h3",8),e.EFF(12,"Select Countries to test"),e.k0s()()(),e.j41(13,"ion-row",2)(14,"ion-col",7),e.Z7z(15,j,2,2,"ion-chip",9,e.fX1),e.k0s()(),e.j41(17,"ion-row",2)(18,"ion-col",10)(19,"ion-button",11),e.bIt("click",function(){return r.sendTraceRequest()}),e.EFF(20,"Add Test "),e.nrm(21,"ion-icon",12),e.k0s()()(),e.nrm(22,"app-title",0),e.j41(23,"ion-row",2)(24,"ion-col",7)(25,"ion-list"),e.DNE(26,M,5,4,"ion-item",13),e.k0s()()(),e.j41(27,"ion-row",2)(28,"ion-col",14)(29,"ion-label",15),e.EFF(30,"Not all results are shown? "),e.k0s(),e.j41(31,"ion-button",16),e.bIt("click",function(){return r.getMeasurementResults()}),e.EFF(32,"GET MORE RESULTS "),e.nrm(33,"ion-icon",17),e.k0s()()(),e.nrm(34,"app-title",0),e.j41(35,"ion-row",2)(36,"ion-col",7)(37,"ion-list"),e.DNE(38,E,4,1,"ion-item",13),e.k0s()()()()()),2&t&&(e.Y8G("title","Traceroute Test"),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(2),e.Y8G("title","New Traceroute Test"),e.R7$(3),e.R50("ngModel",r.host),e.R7$(2),e.R50("ngModel",r.description),e.R7$(7),e.Dyx(r.countries.names),e.R7$(7),e.Y8G("title","Test Results"),e.R7$(4),e.Y8G("ngForOf",r.ripeResults),e.R7$(8),e.Y8G("title","Test Results History"),e.R7$(4),e.Y8G("ngForOf",r.ripeHistoryResultsID))},dependencies:[D.Sq,A.BC,A.vS,d.Jm,d.ZB,d.hU,d.W9,d.lO,d.iq,d.$w,d.uz,d.he,d.nf,d.ln,d.Gw,N.W,L.p]}),c})()}];let b=(()=>{var o;class c{}return(o=c).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[S.iI.forChild(U),S.iI]}),c})();var w=p(5553);let O=(()=>{var o;class c{}return(o=c).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[D.MD,A.YN,d.bv,b,w.h]}),c})()}}]);