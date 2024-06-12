"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{1263:(w,v,r)=>{r.d(v,{c:()=>c});var d=r(9672),_=r(1086),l=r(8607);const c=(o,s)=>{let e,t;const i=(u,p,h)=>{if(typeof document>"u")return;const m=document.elementFromPoint(u,p);m&&s(m)&&!m.disabled?m!==e&&(n(),a(m,h)):n()},a=(u,p)=>{e=u,t||(t=e);const h=e;(0,d.w)(()=>h.classList.add("ion-activated")),p()},n=(u=!1)=>{if(!e)return;const p=e;(0,d.w)(()=>p.classList.remove("ion-activated")),u&&t!==e&&e.click(),e=void 0};return(0,l.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>i(u.currentX,u.currentY,_.a),onMove:u=>i(u.currentX,u.currentY,_.b),onEnd:()=>{n(!0),(0,_.h)(),t=void 0}})}},8438:(w,v,r)=>{r.d(v,{g:()=>_});var d=r(8476);const _=()=>{if(void 0!==d.w)return d.w.Capacitor}},5572:(w,v,r)=>{r.d(v,{c:()=>d,i:()=>_});const d=(l,c,o)=>"function"==typeof o?o(l,c):"string"==typeof o?l[o]===c[o]:Array.isArray(c)?c.includes(l):l===c,_=(l,c,o)=>void 0!==l&&(Array.isArray(l)?l.some(s=>d(s,c,o)):d(l,c,o))},3351:(w,v,r)=>{r.d(v,{g:()=>d});const d=(s,e,t,i,a)=>l(s[1],e[1],t[1],i[1],a).map(n=>_(s[0],e[0],t[0],i[0],n)),_=(s,e,t,i,a)=>a*(3*e*Math.pow(a-1,2)+a*(-3*t*a+3*t+i*a))-s*Math.pow(a-1,3),l=(s,e,t,i,a)=>o((i-=a)-3*(t-=a)+3*(e-=a)-(s-=a),3*t-6*e+3*s,3*e-3*s,s).filter(u=>u>=0&&u<=1),o=(s,e,t,i)=>{if(0===s)return((s,e,t)=>{const i=e*e-4*s*t;return i<0?[]:[(-e+Math.sqrt(i))/(2*s),(-e-Math.sqrt(i))/(2*s)]})(e,t,i);const a=(3*(t/=s)-(e/=s)*e)/3,n=(2*e*e*e-9*e*t+27*(i/=s))/27;if(0===a)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-a),-Math.sqrt(-a)];const u=Math.pow(n/2,2)+Math.pow(a/3,3);if(0===u)return[Math.pow(n/2,.5)-e/3];if(u>0)return[Math.pow(-n/2+Math.sqrt(u),1/3)-Math.pow(n/2+Math.sqrt(u),1/3)-e/3];const p=Math.sqrt(Math.pow(-a/3,3)),h=Math.acos(-n/(2*Math.sqrt(Math.pow(-a/3,3)))),m=2*Math.pow(p,1/3);return[m*Math.cos(h/3)-e/3,m*Math.cos((h+2*Math.PI)/3)-e/3,m*Math.cos((h+4*Math.PI)/3)-e/3]}},5083:(w,v,r)=>{r.d(v,{i:()=>d});const d=_=>_&&""!==_.dir?"rtl"===_.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(w,v,r)=>{r.r(v),r.d(v,{startFocusVisible:()=>c});const d="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=o=>{let s=[],e=!0;const t=o?o.shadowRoot:document,i=o||document.body,a=y=>{s.forEach(f=>f.classList.remove(d)),y.forEach(f=>f.classList.add(d)),s=y},n=()=>{e=!1,a([])},u=y=>{e=l.includes(y.key),e||a([])},p=y=>{if(e&&void 0!==y.composedPath){const f=y.composedPath().filter(E=>!!E.classList&&E.classList.contains("ion-focusable"));a(f)}},h=()=>{t.activeElement===i&&a([])};return t.addEventListener("keydown",u),t.addEventListener("focusin",p),t.addEventListener("focusout",h),t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("mousedown",n),{destroy:()=>{t.removeEventListener("keydown",u),t.removeEventListener("focusin",p),t.removeEventListener("focusout",h),t.removeEventListener("touchstart",n),t.removeEventListener("mousedown",n)},setFocus:a}}},1086:(w,v,r)=>{r.d(v,{I:()=>_,a:()=>e,b:()=>t,c:()=>s,d:()=>a,h:()=>i});var d=r(8438),_=function(n){return n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",n}(_||{});const c={getEngine(){const n=(0,d.g)();if(null!=n&&n.isPluginAvailable("Haptics"))return n.Plugins.Haptics},available(){if(!this.getEngine())return!1;const u=(0,d.g)();return"web"!==(null==u?void 0:u.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(n){const u=this.getEngine();u&&u.impact({style:n.style})},notification(n){const u=this.getEngine();u&&u.notification({type:n.type})},selection(){this.impact({style:_.Light})},selectionStart(){const n=this.getEngine();n&&n.selectionStart()},selectionChanged(){const n=this.getEngine();n&&n.selectionChanged()},selectionEnd(){const n=this.getEngine();n&&n.selectionEnd()}},o=()=>c.available(),s=()=>{o()&&c.selection()},e=()=>{o()&&c.selectionStart()},t=()=>{o()&&c.selectionChanged()},i=()=>{o()&&c.selectionEnd()},a=n=>{o()&&c.impact(n)}},909:(w,v,r)=>{r.d(v,{I:()=>s,a:()=>a,b:()=>o,c:()=>p,d:()=>m,f:()=>n,g:()=>i,i:()=>t,p:()=>h,r:()=>y,s:()=>u});var d=r(467),_=r(4920),l=r(4929);const o="ion-content",s=".ion-content-scroll-host",e=`${o}, ${s}`,t=f=>"ION-CONTENT"===f.tagName,i=function(){var f=(0,d.A)(function*(E){return t(E)?(yield new Promise(M=>(0,_.c)(E,M)),E.getScrollElement()):E});return function(M){return f.apply(this,arguments)}}(),a=f=>f.querySelector(s)||f.querySelector(e),n=f=>f.closest(e),u=(f,E)=>t(f)?f.scrollToTop(E):Promise.resolve(f.scrollTo({top:0,left:0,behavior:E>0?"smooth":"auto"})),p=(f,E,M,O)=>t(f)?f.scrollByPoint(E,M,O):Promise.resolve(f.scrollBy({top:M,left:E,behavior:O>0?"smooth":"auto"})),h=f=>(0,l.b)(f,o),m=f=>{if(t(f)){const M=f.scrollY;return f.scrollY=!1,M}return f.style.setProperty("overflow","hidden"),!0},y=(f,E)=>{t(f)?f.scrollY=E:f.style.removeProperty("overflow")}},3992:(w,v,r)=>{r.d(v,{a:()=>d,b:()=>p,c:()=>e,d:()=>h,e:()=>C,f:()=>s,g:()=>m,h:()=>l,i:()=>_,j:()=>g,k:()=>P,l:()=>t,m:()=>n,n:()=>y,o:()=>a,p:()=>o,q:()=>c,r:()=>D,s:()=>L,t:()=>u,u:()=>M,v:()=>O,w:()=>i,x:()=>f,y:()=>E});const d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(w,v,r)=>{r.d(v,{c:()=>c,g:()=>o});var d=r(8476),_=r(4920),l=r(4929);const c=(e,t,i)=>{let a,n;if(void 0!==d.w&&"MutationObserver"in d.w){const m=Array.isArray(t)?t:[t];a=new MutationObserver(y=>{for(const f of y)for(const E of f.addedNodes)if(E.nodeType===Node.ELEMENT_NODE&&m.includes(E.slot))return i(),void(0,_.r)(()=>u(E))}),a.observe(e,{childList:!0,subtree:!0})}const u=m=>{var y;n&&(n.disconnect(),n=void 0),n=new MutationObserver(f=>{i();for(const E of f)for(const M of E.removedNodes)M.nodeType===Node.ELEMENT_NODE&&M.slot===t&&h()}),n.observe(null!==(y=m.parentElement)&&void 0!==y?y:m,{subtree:!0,childList:!0})},h=()=>{n&&(n.disconnect(),n=void 0)};return{destroy:()=>{a&&(a.disconnect(),a=void 0),h()}}},o=(e,t,i)=>{const a=null==e?0:e.toString().length,n=s(a,t);if(void 0===i)return n;try{return i(a,t)}catch(u){return(0,l.a)("Exception in provided `counterFormatter`.",u),n}},s=(e,t)=>`${e} / ${t}`},1622:(w,v,r)=>{r.r(v),r.d(v,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>c,copyVisualViewport:()=>D,keyboardDidClose:()=>f,keyboardDidOpen:()=>m,keyboardDidResize:()=>y,resetKeyboardAssist:()=>a,setKeyboardClose:()=>h,setKeyboardOpen:()=>p,startKeyboardAssist:()=>n,trackViewportChanges:()=>O});var d=r(4379);r(8438),r(8476);const c="ionKeyboardDidShow",o="ionKeyboardDidHide";let e={},t={},i=!1;const a=()=>{e={},t={},i=!1},n=g=>{if(d.K.getEngine())u(g);else{if(!g.visualViewport)return;t=D(g.visualViewport),g.visualViewport.onresize=()=>{O(g),m()||y(g)?p(g):f(g)&&h(g)}}},u=g=>{g.addEventListener("keyboardDidShow",P=>p(g,P)),g.addEventListener("keyboardDidHide",()=>h(g))},p=(g,P)=>{E(g,P),i=!0},h=g=>{M(g),i=!1},m=()=>!i&&e.width===t.width&&(e.height-t.height)*t.scale>150,y=g=>i&&!f(g),f=g=>i&&t.height===g.innerHeight,E=(g,P)=>{const C=new CustomEvent(c,{detail:{keyboardHeight:P?P.keyboardHeight:g.innerHeight-t.height}});g.dispatchEvent(C)},M=g=>{const P=new CustomEvent(o);g.dispatchEvent(P)},O=g=>{e=Object.assign({},t),t=D(g.visualViewport)},D=g=>({width:Math.round(g.width),height:Math.round(g.height),offsetTop:g.offsetTop,offsetLeft:g.offsetLeft,pageTop:g.pageTop,pageLeft:g.pageLeft,scale:g.scale})},4379:(w,v,r)=>{r.d(v,{K:()=>c,a:()=>l});var d=r(8438),_=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(_||{}),l=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(l||{});const c={getEngine(){const o=(0,d.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(s=>{if(s.code!==_.Unimplemented)throw s}):Promise.resolve(void 0)}}},4731:(w,v,r)=>{r.d(v,{c:()=>s});var d=r(467),_=r(8476),l=r(4379);const c=e=>{if(void 0===_.d||e===l.a.None||void 0===e)return null;const t=_.d.querySelector("ion-app");return null!=t?t:_.d.body},o=e=>{const t=c(e);return null===t?0:t.clientHeight},s=function(){var e=(0,d.A)(function*(t){let i,a,n,u;const p=function(){var E=(0,d.A)(function*(){const M=yield l.K.getResizeMode(),O=void 0===M?void 0:M.mode;i=()=>{void 0===u&&(u=o(O)),n=!0,h(n,O)},a=()=>{n=!1,h(n,O)},null==_.w||_.w.addEventListener("keyboardWillShow",i),null==_.w||_.w.addEventListener("keyboardWillHide",a)});return function(){return E.apply(this,arguments)}}(),h=(E,M)=>{t&&t(E,m(M))},m=E=>{if(0===u||u===o(E))return;const M=c(E);return null!==M?new Promise(O=>{const g=new ResizeObserver(()=>{M.clientHeight===u&&(g.disconnect(),O())});g.observe(M)}):void 0};return yield p(),{init:p,destroy:()=>{null==_.w||_.w.removeEventListener("keyboardWillShow",i),null==_.w||_.w.removeEventListener("keyboardWillHide",a),i=a=void 0},isKeyboardVisible:()=>n}});return function(i){return e.apply(this,arguments)}}()},7838:(w,v,r)=>{r.d(v,{c:()=>_});var d=r(467);const _=()=>{let l;return{lock:function(){var o=(0,d.A)(function*(){const s=l;let e;return l=new Promise(t=>e=t),void 0!==s&&(yield s),e});return function(){return o.apply(this,arguments)}}()}}},9001:(w,v,r)=>{r.d(v,{c:()=>l});var d=r(8476),_=r(4920);const l=(c,o,s)=>{let e;const t=()=>!(void 0===o()||void 0!==c.label||null===s()),a=()=>{const u=o();if(void 0===u)return;if(!t())return void u.style.removeProperty("width");const p=s().scrollWidth;if(0===p&&null===u.offsetParent&&void 0!==d.w&&"IntersectionObserver"in d.w){if(void 0!==e)return;const h=e=new IntersectionObserver(m=>{1===m[0].intersectionRatio&&(a(),h.disconnect(),e=void 0)},{threshold:.01,root:c});h.observe(u)}else u.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{t()&&(0,_.r)(()=>{a()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7895:(w,v,r)=>{r.d(v,{S:()=>_});const _={bubbles:{dur:1e3,circles:9,fn:(l,c,o)=>{const s=l*c/o-l+"ms",e=2*Math.PI*c/o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(l,c,o)=>{const s=c/o,e=l*s-l+"ms",t=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,c)=>({r:6,style:{left:32-32*c+"%","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,c,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*c+(c<o/2?180:-180)}deg)`,"animation-delay":l*c/o-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,c,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*c+(c<o/2?180:-180)}deg)`,"animation-delay":l*c/o-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,c,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":l*c/o-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,c,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":l*c/o-l+"ms"}})}}},7166:(w,v,r)=>{r.r(v),r.d(v,{createSwipeBackGesture:()=>o});var d=r(4920),_=r(5083),l=r(8607);r(1970);const o=(s,e,t,i,a)=>{const n=s.ownerDocument.defaultView;let u=(0,_.i)(s);const h=M=>u?-M.deltaX:M.deltaX;return(0,l.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:M=>(u=(0,_.i)(s),(M=>{const{startX:D}=M;return u?D>=n.innerWidth-50:D<=50})(M)&&e()),onStart:t,onMove:M=>{const D=h(M)/n.innerWidth;i(D)},onEnd:M=>{const O=h(M),D=n.innerWidth,g=O/D,P=(M=>u?-M.velocityX:M.velocityX)(M),C=P>=0&&(P>.2||O>D/2),A=(C?1-g:g)*D;let T=0;if(A>5){const B=A/Math.abs(P);T=Math.min(B,540)}a(C,g<=0?.01:(0,d.j)(0,g,.9999),T)}})}},2935:(w,v,r)=>{r.d(v,{w:()=>d});const d=(c,o,s)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{s(_(t,o))});return e.observe(c,{childList:!0,subtree:!0}),e},_=(c,o)=>{let s;return c.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)s=l(e.addedNodes[t],o)||s}),s},l=(c,o)=>{if(1!==c.nodeType)return;const s=c;return(s.tagName===o.toUpperCase()?[s]:Array.from(s.querySelectorAll(o))).find(t=>t.value===s.value)}},5553:(w,v,r)=>{r.d(v,{h:()=>c});var d=r(177),_=r(7863),l=r(4438);let c=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=l.$C({type:o}),o.\u0275inj=l.G2t({imports:[d.MD,_.bv]}),s})()},3241:(w,v,r)=>{r.d(v,{p:()=>c});var d=r(4438),_=r(177),l=r(7863);let c=(()=>{var o;class s{constructor(t){this.location=t,this.title="Header Title"}ngOnInit(){}goBack(){this.location.back()}}return(o=s).\u0275fac=function(t){return new(t||o)(d.rXU(_.aZ))},o.\u0275cmp=d.VBU({type:o,selectors:[["app-header-return"]],inputs:{title:"title"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"],["name","arrow-back","slot","start",1,"p-4","bigger-icon",3,"click"]],template:function(t,i){1&t&&(d.j41(0,"ion-header",0)(1,"ion-toolbar"),d.nrm(2,"ion-menu-button",1),d.j41(3,"ion-icon",2),d.bIt("click",function(){return i.goBack()}),d.k0s(),d.j41(4,"ion-title"),d.EFF(5),d.k0s()()()),2&t&&(d.Y8G("translucent",!0),d.R7$(5),d.JRh(i.title))},dependencies:[l.eU,l.iq,l.MC,l.BC,l.ai],styles:[".bigger-icon[_ngcontent-%COMP%]{font-size:1.5em}"]}),s})()},385:(w,v,r)=>{r.d(v,{l:()=>l});var d=r(4438),_=r(7863);let l=(()=>{var c;class o{constructor(){this.title="Header Title"}ngOnInit(){}}return(c=o).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=d.VBU({type:c,selectors:[["app-header"]],inputs:{title:"title"},decls:5,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"]],template:function(e,t){1&e&&(d.j41(0,"ion-header",0)(1,"ion-toolbar"),d.nrm(2,"ion-menu-button",1),d.j41(3,"ion-title"),d.EFF(4),d.k0s()()()),2&e&&(d.Y8G("translucent",!0),d.R7$(4),d.JRh(t.title))},dependencies:[_.eU,_.MC,_.BC,_.ai]}),o})()},8453:(w,v,r)=>{r.d(v,{W:()=>l});var d=r(4438),_=r(7863);let l=(()=>{var c;class o{constructor(){this.title="Title"}ngOnInit(){}}return(c=o).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=d.VBU({type:c,selectors:[["app-title"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"lg:m-10"],["size","12","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"]],template:function(e,t){1&e&&(d.j41(0,"ion-row",0)(1,"ion-col",1)(2,"h1",2),d.EFF(3),d.k0s()()()),2&e&&(d.R7$(3),d.JRh(t.title))},dependencies:[_.hU,_.ln]}),o})()},4796:(w,v,r)=>{r.d(v,{u:()=>o});var d=r(467),_=r(8737),l=r(4262),c=r(4438);let o=(()=>{var s;class e{constructor(i,a){this.auth=i,this.firestore=a}registerUser(i){var a=this;return(0,d.A)(function*(){try{const n=yield(0,_.eJ)(a.auth,i.email,i.password);return n.user?(yield(0,l.BN)((0,l.H9)(a.firestore,"users",n.user.uid),{email:i.email,name:i.name,orgName:i.orgName,uid:n.user.uid}),yield(0,l.BN)((0,l.H9)(a.firestore,"teams",`${i.orgName}`),{name:i.orgName,members:[n.user.uid]}),n):null}catch{return null}})()}loginUser(i){var a=this;return(0,d.A)(function*(){try{var n;const u=yield(0,_.x9)(a.auth,i.email,i.password);if(null!==(n=u.user)&&void 0!==n&&n.uid){const p=yield(0,l.x7)((0,l.H9)(a.firestore,"users",u.user.uid));if(p.exists())return localStorage.setItem("user",JSON.stringify(p.data())),u}}catch(u){console.error(u)}return null})()}logoutUser(){var i=this;return(0,d.A)(function*(){yield i.auth.signOut()})()}addMember(i){var a=this;return(0,d.A)(function*(){try{const n=yield(0,_.eJ)(a.auth,i.email,i.password);if(!n.user)return!1;const u={email:i.email,name:i.name,orgName:i.orgName,uid:n.user.uid};return yield(0,l.BN)((0,l.H9)(a.firestore,"users",n.user.uid),u),u}catch{return!1}})()}}return(s=e).\u0275fac=function(i){return new(i||s)(c.KVO(_.Nj),c.KVO(l._7))},s.\u0275prov=c.jDH({token:s,factory:s.\u0275fac,providedIn:"root"}),e})()},1681:(w,v,r)=>{r.d(v,{N:()=>o});var d=r(467),_=r(4262),l=r(4438),c=r(1626);let o=(()=>{var s;class e{constructor(i,a){this.firestore=i,this.http=a,this.ipApiURL="https://cors-ea3m.onrender.com/http://ip-api.com/json/"}getLocation(i){var a=this;return(0,d.A)(function*(){console.log(i);const u=yield a.http.get(a.ipApiURL+i[0].dst_addr).toPromise();for(let m=0;m<i.length;m++)i[m].toLatitude=u.lat,i[m].toLongitude=u.lon,i[m].cityTo=u.city,i[m].countryTo=u.country;const p=i.map(m=>a.http.get(a.ipApiURL+m.from).toPromise());return(yield Promise.all(p)).forEach((m,y)=>{i[y].fromLatitude=m.lat,i[y].fromLongitude=m.lon,i[y].cityFrom=m.city,i[y].countryFrom=m.country}),console.log(i),i})()}saveLocationResults(i,a,n,u){var p=this;return(0,d.A)(function*(){try{console.log(u,"ripeData");const h=(0,_.rJ)(p.firestore,"teams",i,"products",a,"ripe"),m=(0,_.H9)(h,n),y=u.map(f=>({from:f.from,dst_addr:f.dst_addr,latency:f.latency,cityFrom:f.cityFrom,countryFrom:f.countryFrom,cityTo:f.cityTo,countryTo:f.countryTo,fromLatitude:f.fromLatitude,fromLongitude:f.fromLongitude,toLatitude:f.toLatitude,toLongitude:f.toLongitude,id:f.id}));return yield(0,_.BN)(m,{data:y}),console.log("Data saved",{data:y}),!0}catch(h){return console.log(h),!1}})()}}return(s=e).\u0275fac=function(i){return new(i||s)(l.KVO(_._7),l.KVO(c.Qq))},s.\u0275prov=l.jDH({token:s,factory:s.\u0275fac,providedIn:"root"}),e})()},6241:(w,v,r)=>{r.d(v,{b:()=>c});var d=r(467),_=r(4262),l=r(4438);let c=(()=>{var o;class s{constructor(t){this.firestore=t}addProduct(t,i){var a=this;return(0,d.A)(function*(){try{console.log(t);const n=(0,_.H9)(a.firestore,"teams",i,"products",t.productObjective);return yield(0,_.BN)(n,t),!0}catch(n){return console.log(n),!1}})()}getProducts(t){var i=this;return(0,d.A)(function*(){try{const a=(0,_.rJ)(i.firestore,"teams",t,"products");return(yield(0,_.GG)(a)).docs.map(u=>u.data())}catch(a){return console.log(a),[]}})()}removeProduct(t,i){var a=this;return(0,d.A)(function*(){try{const n=(0,_.H9)(a.firestore,"teams",t,"products",i);return yield(0,_.kd)(n),!0}catch(n){return console.log(n),!1}})()}}return(o=s).\u0275fac=function(t){return new(t||o)(l.KVO(_._7))},o.\u0275prov=l.jDH({token:o,factory:o.\u0275fac,providedIn:"root"}),s})()},9640:(w,v,r)=>{r.d(v,{Q:()=>s});var d=r(467),_=r(1985),l=r(4262),c=r(4438),o=r(1626);let s=(()=>{var e;class t{constructor(a,n){this.http=a,this.firestore=n,this.measurementsUrl="https://cors-ea3m.onrender.com/https://atlas.ripe.net/api/v2/measurements/",this.measurementID=""}sendMeasurementRequest(a,n,u,p){var h=this;return(0,d.A)(function*(){let m=p.split(",").length-1;p=p.slice(0,-1);try{let y={definitions:[{target:a,description:"ping",type:"ping",af:4,is_oneoff:!0}],probes:[{requested:m,type:"probes",value:p}]},f={Authorization:"Key 92530695-134f-4cbc-b7c3-ec130f3719b0"};console.log(y);let E=yield h.http.post(h.measurementsUrl,y,{headers:f}).toPromise();return console.log(E),h.measurementID=E.measurements[0],h.measurementID}catch(y){return console.log(y),!1}})()}getMeasurementResults(a){var n=this;return(0,d.A)(function*(){a&&(n.measurementID=a);try{let u={Authorization:"Key 92530695-134f-4cbc-b7c3-ec130f3719b0"};return""===n.measurementID?(console.log("No measurement ID"),!1):n.http.get(n.measurementsUrl+n.measurementID+"/results/",{headers:u})}catch(u){return console.log(u),new _.c}})()}saveMeasurementResults(a,n,u,p){var h=this;return(0,d.A)(function*(){try{const m=(0,l.rJ)(h.firestore,"teams",a,"products",n,"ripe"),y=(0,l.H9)(m,u),f=p.map((E,M)=>({id:h.measurementID,from:E.from,dst_addr:E.dst_addr,latency:E.latency}));return yield(0,l.BN)(y,{data:f}),!0}catch(m){return console.log(m),!1}})()}getAllResults(a,n,u){var p=this;return(0,d.A)(function*(){try{let h="teams/"+a+"/products/"+n+"/ripe";console.log(h);let m=(0,l.H9)(p.firestore,h,u);return(yield(0,l.x7)(m)).data()}catch(h){return console.log(h),[]}})()}getHistoryResults(a,n){var u=this;return(0,d.A)(function*(){const h=(0,l.rJ)(u.firestore,"teams/"+a+"/products/"+n+"/ripe"),m=yield(0,l.GG)(h);let y=[];return m.docs.forEach(f=>{y.push({id:f.id,data:f.data()})}),console.log(y),y})()}}return(e=t).\u0275fac=function(a){return new(a||e)(c.KVO(o.Qq),c.KVO(l._7))},e.\u0275prov=c.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),t})()}}]);