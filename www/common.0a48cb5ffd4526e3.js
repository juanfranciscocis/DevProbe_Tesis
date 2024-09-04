"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{1263:(w,p,c)=>{c.d(p,{c:()=>m});var f=c(9672),i=c(1086),h=c(8607);const m=(l,a)=>{let r,s;const t=(o,d,_)=>{if(typeof document>"u")return;const v=document.elementFromPoint(o,d);v&&a(v)&&!v.disabled?v!==r&&(e(),n(v,_)):e()},n=(o,d)=>{r=o,s||(s=r);const _=r;(0,f.w)(()=>_.classList.add("ion-activated")),d()},e=(o=!1)=>{if(!r)return;const d=r;(0,f.w)(()=>d.classList.remove("ion-activated")),o&&s!==r&&r.click(),r=void 0};return(0,h.createGesture)({el:l,gestureName:"buttonActiveDrag",threshold:0,onStart:o=>t(o.currentX,o.currentY,i.a),onMove:o=>t(o.currentX,o.currentY,i.b),onEnd:()=>{e(!0),(0,i.h)(),s=void 0}})}},8438:(w,p,c)=>{c.d(p,{g:()=>i});var f=c(8476);const i=()=>{if(void 0!==f.w)return f.w.Capacitor}},5572:(w,p,c)=>{c.d(p,{c:()=>f,i:()=>i});const f=(h,m,l)=>"function"==typeof l?l(h,m):"string"==typeof l?h[l]===m[l]:Array.isArray(m)?m.includes(h):h===m,i=(h,m,l)=>void 0!==h&&(Array.isArray(h)?h.some(a=>f(a,m,l)):f(h,m,l))},3351:(w,p,c)=>{c.d(p,{g:()=>f});const f=(a,r,s,t,n)=>h(a[1],r[1],s[1],t[1],n).map(e=>i(a[0],r[0],s[0],t[0],e)),i=(a,r,s,t,n)=>n*(3*r*Math.pow(n-1,2)+n*(-3*s*n+3*s+t*n))-a*Math.pow(n-1,3),h=(a,r,s,t,n)=>l((t-=n)-3*(s-=n)+3*(r-=n)-(a-=n),3*s-6*r+3*a,3*r-3*a,a).filter(o=>o>=0&&o<=1),l=(a,r,s,t)=>{if(0===a)return((a,r,s)=>{const t=r*r-4*a*s;return t<0?[]:[(-r+Math.sqrt(t))/(2*a),(-r-Math.sqrt(t))/(2*a)]})(r,s,t);const n=(3*(s/=a)-(r/=a)*r)/3,e=(2*r*r*r-9*r*s+27*(t/=a))/27;if(0===n)return[Math.pow(-e,1/3)];if(0===e)return[Math.sqrt(-n),-Math.sqrt(-n)];const o=Math.pow(e/2,2)+Math.pow(n/3,3);if(0===o)return[Math.pow(e/2,.5)-r/3];if(o>0)return[Math.pow(-e/2+Math.sqrt(o),1/3)-Math.pow(e/2+Math.sqrt(o),1/3)-r/3];const d=Math.sqrt(Math.pow(-n/3,3)),_=Math.acos(-e/(2*Math.sqrt(Math.pow(-n/3,3)))),v=2*Math.pow(d,1/3);return[v*Math.cos(_/3)-r/3,v*Math.cos((_+2*Math.PI)/3)-r/3,v*Math.cos((_+4*Math.PI)/3)-r/3]}},5083:(w,p,c)=>{c.d(p,{i:()=>f});const f=i=>i&&""!==i.dir?"rtl"===i.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(w,p,c)=>{c.r(p),c.d(p,{startFocusVisible:()=>m});const f="ion-focused",h=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],m=l=>{let a=[],r=!0;const s=l?l.shadowRoot:document,t=l||document.body,n=g=>{a.forEach(u=>u.classList.remove(f)),g.forEach(u=>u.classList.add(f)),a=g},e=()=>{r=!1,n([])},o=g=>{r=h.includes(g.key),r||n([])},d=g=>{if(r&&void 0!==g.composedPath){const u=g.composedPath().filter(y=>!!y.classList&&y.classList.contains("ion-focusable"));n(u)}},_=()=>{s.activeElement===t&&n([])};return s.addEventListener("keydown",o),s.addEventListener("focusin",d),s.addEventListener("focusout",_),s.addEventListener("touchstart",e,{passive:!0}),s.addEventListener("mousedown",e),{destroy:()=>{s.removeEventListener("keydown",o),s.removeEventListener("focusin",d),s.removeEventListener("focusout",_),s.removeEventListener("touchstart",e),s.removeEventListener("mousedown",e)},setFocus:n}}},1086:(w,p,c)=>{c.d(p,{I:()=>i,a:()=>r,b:()=>s,c:()=>a,d:()=>n,h:()=>t});var f=c(8438),i=function(e){return e.Heavy="HEAVY",e.Medium="MEDIUM",e.Light="LIGHT",e}(i||{});const m={getEngine(){const e=(0,f.g)();if(null!=e&&e.isPluginAvailable("Haptics"))return e.Plugins.Haptics},available(){if(!this.getEngine())return!1;const o=(0,f.g)();return"web"!==(null==o?void 0:o.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(e){const o=this.getEngine();o&&o.impact({style:e.style})},notification(e){const o=this.getEngine();o&&o.notification({type:e.type})},selection(){this.impact({style:i.Light})},selectionStart(){const e=this.getEngine();e&&e.selectionStart()},selectionChanged(){const e=this.getEngine();e&&e.selectionChanged()},selectionEnd(){const e=this.getEngine();e&&e.selectionEnd()}},l=()=>m.available(),a=()=>{l()&&m.selection()},r=()=>{l()&&m.selectionStart()},s=()=>{l()&&m.selectionChanged()},t=()=>{l()&&m.selectionEnd()},n=e=>{l()&&m.impact(e)}},909:(w,p,c)=>{c.d(p,{I:()=>a,a:()=>n,b:()=>l,c:()=>d,d:()=>v,f:()=>e,g:()=>t,i:()=>s,p:()=>_,r:()=>g,s:()=>o});var f=c(467),i=c(4920),h=c(4929);const l="ion-content",a=".ion-content-scroll-host",r=`${l}, ${a}`,s=u=>"ION-CONTENT"===u.tagName,t=function(){var u=(0,f.A)(function*(y){return s(y)?(yield new Promise(D=>(0,i.c)(y,D)),y.getScrollElement()):y});return function(D){return u.apply(this,arguments)}}(),n=u=>u.querySelector(a)||u.querySelector(r),e=u=>u.closest(r),o=(u,y)=>s(u)?u.scrollToTop(y):Promise.resolve(u.scrollTo({top:0,left:0,behavior:y>0?"smooth":"auto"})),d=(u,y,D,M)=>s(u)?u.scrollByPoint(y,D,M):Promise.resolve(u.scrollBy({top:D,left:y,behavior:M>0?"smooth":"auto"})),_=u=>(0,h.b)(u,l),v=u=>{if(s(u)){const D=u.scrollY;return u.scrollY=!1,D}return u.style.setProperty("overflow","hidden"),!0},g=(u,y)=>{s(u)?u.scrollY=y:u.style.removeProperty("overflow")}},3992:(w,p,c)=>{c.d(p,{a:()=>f,b:()=>d,c:()=>r,d:()=>_,e:()=>A,f:()=>a,g:()=>v,h:()=>h,i:()=>i,j:()=>E,k:()=>P,l:()=>s,m:()=>e,n:()=>g,o:()=>n,p:()=>l,q:()=>m,r:()=>O,s:()=>T,t:()=>o,u:()=>D,v:()=>M,w:()=>t,x:()=>u,y:()=>y});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",T="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",A="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(w,p,c)=>{c.d(p,{c:()=>m,g:()=>l});var f=c(8476),i=c(4920),h=c(4929);const m=(r,s,t)=>{let n,e;if(void 0!==f.w&&"MutationObserver"in f.w){const v=Array.isArray(s)?s:[s];n=new MutationObserver(g=>{for(const u of g)for(const y of u.addedNodes)if(y.nodeType===Node.ELEMENT_NODE&&v.includes(y.slot))return t(),void(0,i.r)(()=>o(y))}),n.observe(r,{childList:!0,subtree:!0})}const o=v=>{var g;e&&(e.disconnect(),e=void 0),e=new MutationObserver(u=>{t();for(const y of u)for(const D of y.removedNodes)D.nodeType===Node.ELEMENT_NODE&&D.slot===s&&_()}),e.observe(null!==(g=v.parentElement)&&void 0!==g?g:v,{subtree:!0,childList:!0})},_=()=>{e&&(e.disconnect(),e=void 0)};return{destroy:()=>{n&&(n.disconnect(),n=void 0),_()}}},l=(r,s,t)=>{const n=null==r?0:r.toString().length,e=a(n,s);if(void 0===t)return e;try{return t(n,s)}catch(o){return(0,h.a)("Exception in provided `counterFormatter`.",o),e}},a=(r,s)=>`${r} / ${s}`},1622:(w,p,c)=>{c.r(p),c.d(p,{KEYBOARD_DID_CLOSE:()=>l,KEYBOARD_DID_OPEN:()=>m,copyVisualViewport:()=>O,keyboardDidClose:()=>u,keyboardDidOpen:()=>v,keyboardDidResize:()=>g,resetKeyboardAssist:()=>n,setKeyboardClose:()=>_,setKeyboardOpen:()=>d,startKeyboardAssist:()=>e,trackViewportChanges:()=>M});var f=c(4379);c(8438),c(8476);const m="ionKeyboardDidShow",l="ionKeyboardDidHide";let r={},s={},t=!1;const n=()=>{r={},s={},t=!1},e=E=>{if(f.K.getEngine())o(E);else{if(!E.visualViewport)return;s=O(E.visualViewport),E.visualViewport.onresize=()=>{M(E),v()||g(E)?d(E):u(E)&&_(E)}}},o=E=>{E.addEventListener("keyboardDidShow",P=>d(E,P)),E.addEventListener("keyboardDidHide",()=>_(E))},d=(E,P)=>{y(E,P),t=!0},_=E=>{D(E),t=!1},v=()=>!t&&r.width===s.width&&(r.height-s.height)*s.scale>150,g=E=>t&&!u(E),u=E=>t&&s.height===E.innerHeight,y=(E,P)=>{const A=new CustomEvent(m,{detail:{keyboardHeight:P?P.keyboardHeight:E.innerHeight-s.height}});E.dispatchEvent(A)},D=E=>{const P=new CustomEvent(l);E.dispatchEvent(P)},M=E=>{r=Object.assign({},s),s=O(E.visualViewport)},O=E=>({width:Math.round(E.width),height:Math.round(E.height),offsetTop:E.offsetTop,offsetLeft:E.offsetLeft,pageTop:E.pageTop,pageLeft:E.pageLeft,scale:E.scale})},4379:(w,p,c)=>{c.d(p,{K:()=>m,a:()=>h});var f=c(8438),i=function(l){return l.Unimplemented="UNIMPLEMENTED",l.Unavailable="UNAVAILABLE",l}(i||{}),h=function(l){return l.Body="body",l.Ionic="ionic",l.Native="native",l.None="none",l}(h||{});const m={getEngine(){const l=(0,f.g)();if(null!=l&&l.isPluginAvailable("Keyboard"))return l.Plugins.Keyboard},getResizeMode(){const l=this.getEngine();return null!=l&&l.getResizeMode?l.getResizeMode().catch(a=>{if(a.code!==i.Unimplemented)throw a}):Promise.resolve(void 0)}}},4731:(w,p,c)=>{c.d(p,{c:()=>a});var f=c(467),i=c(8476),h=c(4379);const m=r=>{if(void 0===i.d||r===h.a.None||void 0===r)return null;const s=i.d.querySelector("ion-app");return null!=s?s:i.d.body},l=r=>{const s=m(r);return null===s?0:s.clientHeight},a=function(){var r=(0,f.A)(function*(s){let t,n,e,o;const d=function(){var y=(0,f.A)(function*(){const D=yield h.K.getResizeMode(),M=void 0===D?void 0:D.mode;t=()=>{void 0===o&&(o=l(M)),e=!0,_(e,M)},n=()=>{e=!1,_(e,M)},null==i.w||i.w.addEventListener("keyboardWillShow",t),null==i.w||i.w.addEventListener("keyboardWillHide",n)});return function(){return y.apply(this,arguments)}}(),_=(y,D)=>{s&&s(y,v(D))},v=y=>{if(0===o||o===l(y))return;const D=m(y);return null!==D?new Promise(M=>{const E=new ResizeObserver(()=>{D.clientHeight===o&&(E.disconnect(),M())});E.observe(D)}):void 0};return yield d(),{init:d,destroy:()=>{null==i.w||i.w.removeEventListener("keyboardWillShow",t),null==i.w||i.w.removeEventListener("keyboardWillHide",n),t=n=void 0},isKeyboardVisible:()=>e}});return function(t){return r.apply(this,arguments)}}()},7838:(w,p,c)=>{c.d(p,{c:()=>i});var f=c(467);const i=()=>{let h;return{lock:function(){var l=(0,f.A)(function*(){const a=h;let r;return h=new Promise(s=>r=s),void 0!==a&&(yield a),r});return function(){return l.apply(this,arguments)}}()}}},9001:(w,p,c)=>{c.d(p,{c:()=>h});var f=c(8476),i=c(4920);const h=(m,l,a)=>{let r;const s=()=>!(void 0===l()||void 0!==m.label||null===a()),n=()=>{const o=l();if(void 0===o)return;if(!s())return void o.style.removeProperty("width");const d=a().scrollWidth;if(0===d&&null===o.offsetParent&&void 0!==f.w&&"IntersectionObserver"in f.w){if(void 0!==r)return;const _=r=new IntersectionObserver(v=>{1===v[0].intersectionRatio&&(n(),_.disconnect(),r=void 0)},{threshold:.01,root:m});_.observe(o)}else o.style.setProperty("width",.75*d+"px")};return{calculateNotchWidth:()=>{s()&&(0,i.r)(()=>{n()})},destroy:()=>{r&&(r.disconnect(),r=void 0)}}}},7895:(w,p,c)=>{c.d(p,{S:()=>i});const i={bubbles:{dur:1e3,circles:9,fn:(h,m,l)=>{const a=h*m/l-h+"ms",r=2*Math.PI*m/l;return{r:5,style:{top:32*Math.sin(r)+"%",left:32*Math.cos(r)+"%","animation-delay":a}}}},circles:{dur:1e3,circles:8,fn:(h,m,l)=>{const a=m/l,r=h*a-h+"ms",s=2*Math.PI*a;return{r:5,style:{top:32*Math.sin(s)+"%",left:32*Math.cos(s)+"%","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(h,m)=>({r:6,style:{left:32-32*m+"%","animation-delay":-110*m+"ms"}})},lines:{dur:1e3,lines:8,fn:(h,m,l)=>({y1:14,y2:26,style:{transform:`rotate(${360/l*m+(m<l/2?180:-180)}deg)`,"animation-delay":h*m/l-h+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(h,m,l)=>({y1:12,y2:20,style:{transform:`rotate(${360/l*m+(m<l/2?180:-180)}deg)`,"animation-delay":h*m/l-h+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(h,m,l)=>({y1:17,y2:29,style:{transform:`rotate(${30*m+(m<6?180:-180)}deg)`,"animation-delay":h*m/l-h+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(h,m,l)=>({y1:12,y2:20,style:{transform:`rotate(${30*m+(m<6?180:-180)}deg)`,"animation-delay":h*m/l-h+"ms"}})}}},7166:(w,p,c)=>{c.r(p),c.d(p,{createSwipeBackGesture:()=>l});var f=c(4920),i=c(5083),h=c(8607);c(1970);const l=(a,r,s,t,n)=>{const e=a.ownerDocument.defaultView;let o=(0,i.i)(a);const _=D=>o?-D.deltaX:D.deltaX;return(0,h.createGesture)({el:a,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:D=>(o=(0,i.i)(a),(D=>{const{startX:O}=D;return o?O>=e.innerWidth-50:O<=50})(D)&&r()),onStart:s,onMove:D=>{const O=_(D)/e.innerWidth;t(O)},onEnd:D=>{const M=_(D),O=e.innerWidth,E=M/O,P=(D=>o?-D.velocityX:D.velocityX)(D),A=P>=0&&(P>.2||M>O/2),L=(A?1-E:E)*O;let C=0;if(L>5){const R=L/Math.abs(P);C=Math.min(R,540)}n(A,E<=0?.01:(0,f.j)(0,E,.9999),C)}})}},2935:(w,p,c)=>{c.d(p,{w:()=>f});const f=(m,l,a)=>{if(typeof MutationObserver>"u")return;const r=new MutationObserver(s=>{a(i(s,l))});return r.observe(m,{childList:!0,subtree:!0}),r},i=(m,l)=>{let a;return m.forEach(r=>{for(let s=0;s<r.addedNodes.length;s++)a=h(r.addedNodes[s],l)||a}),a},h=(m,l)=>{if(1!==m.nodeType)return;const a=m;return(a.tagName===l.toUpperCase()?[a]:Array.from(a.querySelectorAll(l))).find(s=>s.value===a.value)}},385:(w,p,c)=>{c.d(p,{l:()=>h});var f=c(4438),i=c(7863);let h=(()=>{var m;class l{constructor(){this.title="Header Title"}ngOnInit(){}}return(m=l).\u0275fac=function(r){return new(r||m)},m.\u0275cmp=f.VBU({type:m,selectors:[["app-header"]],inputs:{title:"title"},decls:5,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"]],template:function(r,s){1&r&&(f.j41(0,"ion-header",0)(1,"ion-toolbar"),f.nrm(2,"ion-menu-button",1),f.j41(3,"ion-title"),f.EFF(4),f.k0s()()()),2&r&&(f.Y8G("translucent",!0),f.R7$(4),f.JRh(s.title))},dependencies:[i.eU,i.MC,i.BC,i.ai]}),l})()},8453:(w,p,c)=>{c.d(p,{W:()=>h});var f=c(4438),i=c(7863);let h=(()=>{var m;class l{constructor(){this.title="Title"}ngOnInit(){}}return(m=l).\u0275fac=function(r){return new(r||m)},m.\u0275cmp=f.VBU({type:m,selectors:[["app-title"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"lg:m-10"],["size","12","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"]],template:function(r,s){1&r&&(f.j41(0,"ion-row",0)(1,"ion-col",1)(2,"h1",2),f.EFF(3),f.k0s()()()),2&r&&(f.R7$(3),f.JRh(s.title))},dependencies:[i.hU,i.ln]}),l})()},4796:(w,p,c)=>{c.d(p,{u:()=>l});var f=c(467),i=c(8737),h=c(4262),m=c(4438);let l=(()=>{var a;class r{constructor(t,n){this.auth=t,this.firestore=n}registerUser(t){var n=this;return(0,f.A)(function*(){try{const e=yield(0,i.eJ)(n.auth,t.email,t.password);return e.user?(yield(0,h.BN)((0,h.H9)(n.firestore,"users",e.user.uid),{email:t.email,name:t.name,orgName:t.orgName,uid:e.user.uid}),yield(0,h.BN)((0,h.H9)(n.firestore,"teams",`${t.orgName}`),{name:t.orgName,members:[e.user.uid]}),e):null}catch{return null}})()}loginUser(t){var n=this;return(0,f.A)(function*(){try{var e;const o=yield(0,i.x9)(n.auth,t.email,t.password);if(null!==(e=o.user)&&void 0!==e&&e.uid){const d=yield(0,h.x7)((0,h.H9)(n.firestore,"users",o.user.uid));if(d.exists())return localStorage.setItem("user",JSON.stringify(d.data())),o}}catch(o){console.error(o)}return null})()}logoutUser(){var t=this;return(0,f.A)(function*(){yield t.auth.signOut()})()}addMember(t){var n=this;return(0,f.A)(function*(){try{const e=yield(0,i.eJ)(n.auth,t.email,t.password);if(!e.user)return!1;const o={email:t.email,name:t.name,orgName:t.orgName,uid:e.user.uid};return yield(0,h.BN)((0,h.H9)(n.firestore,"users",e.user.uid),o),o}catch{return!1}})()}}return(a=r).\u0275fac=function(t){return new(t||a)(m.KVO(i.Nj),m.KVO(h._7))},a.\u0275prov=m.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),r})()},6560:(w,p,c)=>{c.d(p,{x:()=>l});var f=c(467),i=c(4262),h=c(4438),m=c(1626);let l=(()=>{var a;class r{constructor(t,n){this.firestore=t,this.http=n,this.url_cpu="https://devprobeapi.onrender.com/flame_graph_date",this.url_mem="https://devprobeapi.onrender.com/flame_graph_memory_date"}getProducts(t){var n=this;return(0,f.A)(function*(){try{const e=(0,i.rJ)(n.firestore,"teams",t,"products");return(yield(0,i.GG)(e)).docs.map(d=>d.data())}catch(e){return console.log(e),[]}})()}getDates(t,n,e){var o=this;return(0,f.A)(function*(){try{e||(e="cpu_usage");const d=(0,i.rJ)(o.firestore,"teams",t,"products",n,e);return(yield(0,i.GG)(d)).docs.map(v=>v.id)}catch(d){return console.log(d),[]}})()}getFlameGraphByDate(t,n,e,o){var d=this;return(0,f.A)(function*(){try{let _={team:t,product:n,date:e};return o?yield d.http.post(d.url_mem,_).toPromise():yield d.http.post(d.url_cpu,_).toPromise()}catch{return{}}})()}}return(a=r).\u0275fac=function(t){return new(t||a)(h.KVO(i._7),h.KVO(m.Qq))},a.\u0275prov=h.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),r})()},201:(w,p,c)=>{c.d(p,{p:()=>l});var f=c(467),i=c(4262),h=c(4438),m=c(1626);let l=(()=>{var a;class r{constructor(t,n){this.firestore=t,this.httpClient=n,this.url="https://devprobeapi.onrender.com/"}syncRepo(t,n,e,o,d){var _=this;return(0,f.A)(function*(){const v=(0,i.H9)(_.firestore,"teams",t),g=yield(0,i.x7)(v);if(g.exists()){const u=g.data();u.gitHub={key:n,repo:e,branch:o,owner:d},yield(0,i.BN)(v,u)}})()}getSyncRepo(t){var n=this;return(0,f.A)(function*(){const e=(0,i.H9)(n.firestore,"teams",t),o=yield(0,i.x7)(e);return o.exists()?o.data().gitHub:null})()}getFiles(t){var n=this;return(0,f.A)(function*(){const e=yield n.httpClient.post(n.url+"github_repo",{auth:t.key,repo:t.repo,branch:t.branch,owner:t.owner}).toPromise();if(console.log(e),e){let o=e.paths;return o=o.filter(d=>!d.includes(".git")),o=o.filter(d=>!d.includes("node_modules")),o=o.filter(d=>!d.includes(".idea")),o=o.filter(d=>d.includes(".")),o}return[]})()}getContentFromFilePath(t,n){var e=this;return(0,f.A)(function*(){const o=yield e.httpClient.post(e.url+"github_file",{auth:t.key,repo:t.repo,owner:t.owner,path:n}).toPromise();return console.log(o),o?o.content:""})()}}return(a=r).\u0275fac=function(t){return new(t||a)(h.KVO(i._7),h.KVO(m.Qq))},a.\u0275prov=h.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),r})()},3661:(w,p,c)=>{c.d(p,{e:()=>l});var f=c(467),i=c(4438),h=c(4262),m=c(1626);let l=(()=>{var a;class r{constructor(t,n){this.firestore=t,this.http=n,this.ipApiURL="https://cors-ea3m.onrender.com/http://ip-api.com/json/"}getLocationDestSrc(t){var n=this;return(0,f.A)(function*(){var e,o,d,_,v,g,u,y;if(!t)return t;const D=n.http.get(n.ipApiURL+t.dst_addr).toPromise(),M=n.http.get(n.ipApiURL+t.src_addr).toPromise(),O=yield D,E=yield M;return t.dst_city=null!==(e=O.city)&&void 0!==e?e:"No city found",t.dst_country=null!==(o=O.country)&&void 0!==o?o:"No country found",t.dst_latitude=null!==(d=O.lat)&&void 0!==d?d:0,t.dst_longitude=null!==(_=O.lon)&&void 0!==_?_:0,t.src_city=null!==(v=E.city)&&void 0!==v?v:"No city found",t.src_country=null!==(g=E.country)&&void 0!==g?g:"No country found",t.src_latitude=null!==(u=E.lat)&&void 0!==u?u:0,t.src_longitude=null!==(y=E.lon)&&void 0!==y?y:0,t})()}getLocationFrom(t){var n=this;return(0,f.A)(function*(){if(!t)return t;let e=t.result;for(let g=0;g<e.length;g++)try{var o,d,_,v;let u=e[g],y=u.result[0].from;if(!y)continue;const M=yield n.http.get(n.ipApiURL+y).toPromise();u.result[0].from_country=null!==(o=M.country)&&void 0!==o?o:"No country found",u.result[0].form_city=null!==(d=M.city)&&void 0!==d?d:"No city found",u.result[0].from_latitude=null!==(_=M.lat)&&void 0!==_?_:0,u.result[0].from_longitude=null!==(v=M.lon)&&void 0!==v?v:0,t.result[g]=u}catch(u){console.log(u)}return t})()}getByIp(t){var n=this;return(0,f.A)(function*(){return yield n.http.get(n.ipApiURL+t).toPromise()})()}}return(a=r).\u0275fac=function(t){return new(t||a)(i.KVO(h._7),i.KVO(m.Qq))},a.\u0275prov=i.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),r})()},1681:(w,p,c)=>{c.d(p,{N:()=>l});var f=c(467),i=c(4262),h=c(4438),m=c(1626);let l=(()=>{var a;class r{constructor(t,n){this.firestore=t,this.http=n,this.ipApiURL="https://cors-ea3m.onrender.com/http://ip-api.com/json/"}getLocation(t){var n=this;return(0,f.A)(function*(){console.log(t);const o=yield n.http.get(n.ipApiURL+t[0].dst_addr).toPromise();for(let v=0;v<t.length;v++)t[v].toLatitude=o.lat,t[v].toLongitude=o.lon,t[v].cityTo=o.city,t[v].countryTo=o.country;const d=t.map(v=>n.http.get(n.ipApiURL+v.from).toPromise());return(yield Promise.all(d)).forEach((v,g)=>{t[g].fromLatitude=v.lat,t[g].fromLongitude=v.lon,t[g].cityFrom=v.city,t[g].countryFrom=v.country}),console.log(t),t})()}saveLocationResults(t,n,e,o){var d=this;return(0,f.A)(function*(){try{console.log(o,"ripeData");const _=(0,i.rJ)(d.firestore,"teams",t,"products",n,"ripe"),v=(0,i.H9)(_,e),g=o.map(u=>({from:u.from,dst_addr:u.dst_addr,latency:u.latency,cityFrom:u.cityFrom,countryFrom:u.countryFrom,cityTo:u.cityTo,countryTo:u.countryTo,fromLatitude:u.fromLatitude,fromLongitude:u.fromLongitude,toLatitude:u.toLatitude,toLongitude:u.toLongitude,id:u.id}));return yield(0,i.BN)(v,{data:g}),console.log("Data saved",{data:g}),!0}catch(_){return console.log(_),!1}})()}}return(a=r).\u0275fac=function(t){return new(t||a)(h.KVO(i._7),h.KVO(m.Qq))},a.\u0275prov=h.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),r})()},6241:(w,p,c)=>{c.d(p,{b:()=>m});var f=c(467),i=c(4262),h=c(4438);let m=(()=>{var l;class a{constructor(s){this.firestore=s}addProduct(s,t){var n=this;return(0,f.A)(function*(){try{console.log(s);const e=(0,i.H9)(n.firestore,"teams",t,"products",s.productObjective);return yield(0,i.BN)(e,s),!0}catch(e){return console.log(e),!1}})()}getProducts(s){var t=this;return(0,f.A)(function*(){try{const n=(0,i.rJ)(t.firestore,"teams",s,"products");return(yield(0,i.GG)(n)).docs.map(o=>o.data())}catch(n){return console.log(n),[]}})()}removeProduct(s,t){var n=this;return(0,f.A)(function*(){try{const e=(0,i.H9)(n.firestore,"teams",s,"products",t);return yield(0,i.kd)(e),!0}catch(e){return console.log(e),!1}})()}}return(l=a).\u0275fac=function(s){return new(s||l)(h.KVO(i._7))},l.\u0275prov=h.jDH({token:l,factory:l.\u0275fac,providedIn:"root"}),a})()},2588:(w,p,c)=>{c.d(p,{N:()=>l});var f=c(467),i=c(4262),h=c(4438),m=c(1626);let l=(()=>{var a;class r{constructor(t,n){this.http=t,this.firestore=n,this.measurementsUrl="https://cors-ea3m.onrender.com/https://atlas.ripe.net/api/v2/measurements/",this.measurementID=""}sendTraceRequest(t,n,e,o){var d=this;return(0,f.A)(function*(){console.log("Sending trace request");try{let _={definitions:[{target:t,description:n,type:e,af:4,is_oneoff:!0,protocol:"TCP"}],probes:[]};console.log(o);let v=o.split(",").length-1,g=(o=o.slice(0,-1)).split(","),u=[];for(let M=0;M<v;M++)u.push({requested:5,type:"country",value:g[M]});_.probes=u,console.log(_);let y={Authorization:"Key 92530695-134f-4cbc-b7c3-ec130f3719b0"};console.log(_);let D=yield d.http.post(d.measurementsUrl,_,{headers:y}).toPromise();return console.log(D),d.measurementID=D.measurements[0],!0}catch(_){return console.log(_),!1}})()}getTraceResults(t){var n=this;return(0,f.A)(function*(){t&&(n.measurementID=t);try{let e;return""===n.measurementID?(console.log("No measurement ID"),!1):n.http.get(n.measurementsUrl+n.measurementID+"/results/",{headers:e}).toPromise()}catch(e){return console.log(e),!1}})()}saveMeasurementResults(t,n,e,o){var d=this;return(0,f.A)(function*(){try{const _=(0,i.rJ)(d.firestore,"teams",t,"products",n,"ripe_trace"),v=(0,i.H9)(_,e),g=o.map((u,y)=>({id:d.measurementID,dst_addr:u.dst_addr,dst_city:u.dst_city,dst_country:u.dst_country,dst_latitude:u.dst_latitude,dst_longitude:u.dst_longitude,src_addr:u.src_addr,src_city:u.src_city,src_country:u.src_country,src_latitude:u.src_latitude,src_longitude:u.src_longitude,result:u.result}));return yield(0,i.BN)(v,{data:g}),!0}catch(_){return console.log(_),!1}})()}getHistoryResults(t,n){var e=this;return(0,f.A)(function*(){const d=(0,i.rJ)(e.firestore,"teams/"+t+"/products/"+n+"/ripe_trace"),_=yield(0,i.GG)(d);let v=[];return _.docs.forEach(g=>{v.push({id:g.id,data:g.data()})}),console.log(v),v})()}getAllResultsByDescription(t,n,e){var o=this;return(0,f.A)(function*(){try{let d="teams/"+t+"/products/"+n+"/ripe_trace";console.log(d);let _=(0,i.H9)(o.firestore,d,e);return(yield(0,i.x7)(_)).data()}catch(d){return console.log(d),[]}})()}}return(a=r).\u0275fac=function(t){return new(t||a)(h.KVO(m.Qq),h.KVO(i._7))},a.\u0275prov=h.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),r})()},9640:(w,p,c)=>{c.d(p,{Q:()=>a});var f=c(467),i=c(1985),h=c(4262),m=c(4438),l=c(1626);let a=(()=>{var r;class s{constructor(n,e){this.http=n,this.firestore=e,this.measurementsUrl="https://cors-ea3m.onrender.com/https://atlas.ripe.net/api/v2/measurements/",this.measurementID=""}sendMeasurementRequest(n,e,o,d){var _=this;return(0,f.A)(function*(){let v=d.split(",").length-1;d=d.slice(0,-1);try{let g={definitions:[{target:n,description:"ping",type:"ping",af:4,is_oneoff:!0}],probes:[{requested:v,type:"probes",value:d}]},u={Authorization:"Key 92530695-134f-4cbc-b7c3-ec130f3719b0"};console.log(g);let y=yield _.http.post(_.measurementsUrl,g,{headers:u}).toPromise();return console.log(y),_.measurementID=y.measurements[0],_.measurementID}catch(g){return console.log(g),!1}})()}getMeasurementResults(n){var e=this;return(0,f.A)(function*(){n&&(e.measurementID=n);try{let o={Authorization:"Key 92530695-134f-4cbc-b7c3-ec130f3719b0"};return""===e.measurementID?(console.log("No measurement ID"),!1):e.http.get(e.measurementsUrl+e.measurementID+"/results/",{headers:o})}catch(o){return console.log(o),new i.c}})()}saveMeasurementResults(n,e,o,d){var _=this;return(0,f.A)(function*(){try{const v=(0,h.rJ)(_.firestore,"teams",n,"products",e,"ripe"),g=(0,h.H9)(v,o),u=d.map((y,D)=>({id:_.measurementID,from:y.from,dst_addr:y.dst_addr,latency:y.latency}));return yield(0,h.BN)(g,{data:u}),!0}catch(v){return console.log(v),!1}})()}getAllResultsByDescription(n,e,o){var d=this;return(0,f.A)(function*(){try{let _="teams/"+n+"/products/"+e+"/ripe";console.log(_);let v=(0,h.H9)(d.firestore,_,o);return(yield(0,h.x7)(v)).data()}catch(_){return console.log(_),[]}})()}getHistoryResults(n,e){var o=this;return(0,f.A)(function*(){const _=(0,h.rJ)(o.firestore,"teams/"+n+"/products/"+e+"/ripe"),v=yield(0,h.GG)(_);let g=[];return v.docs.forEach(u=>{g.push({id:u.id,data:u.data()})}),console.log(g),g})()}deleteHistory(n,e,o){var d=this;return(0,f.A)(function*(){const v=(0,h.H9)(d.firestore,"teams/"+n+"/products/"+e+"/ripe",o);try{return yield(0,h.kd)(v),!0}catch(g){return console.log(g),!1}})()}}return(r=s).\u0275fac=function(n){return new(n||r)(m.KVO(l.Qq),m.KVO(h._7))},r.\u0275prov=m.jDH({token:r,factory:r.\u0275fac,providedIn:"root"}),s})()},9274:(w,p,c)=>{c.d(p,{h:()=>m});var f=c(467),i=c(4262),h=c(4438);let m=(()=>{var l;class a{constructor(s){this.firestore=s}addSystemTest(s,t,n,e){var o=this;return(0,f.A)(function*(){const d=(0,i.H9)(o.firestore,"teams",s,"products",t,"software_testing","system_tests"),_=yield(0,i.x7)(d);if(_.exists()){const g=_.data()[n];console.log(g),g.push(e),yield(0,i.BN)(d,{[n]:g}),console.log("Document updated with ID: ",_.id)}else console.log("No such document!"),yield(0,i.BN)(d,{[n]:[e]}),console.log("Document created with ID: ",d.id)})()}getSystemTest(s,t,n){var e=this;return(0,f.A)(function*(){const o=(0,i.H9)(e.firestore,"teams",s,"products",t,"software_testing","system_tests"),d=yield(0,i.x7)(o);return d.exists()?d.data()[n]:[]})()}saveSystemTest(s,t,n,e){var o=this;return(0,f.A)(function*(){const d=(0,i.H9)(o.firestore,"teams",s,"products",t,"software_testing","system_tests_history"),_=new Date,v=`${_.getFullYear()}-${_.getMonth()+1}-${_.getDate()} ${_.getHours()}:${_.getMinutes()}:${_.getSeconds()}`;console.log(v);const g=yield(0,i.x7)(d);if(g.exists()){let u=g.data();u[v]={systemTest:e},u[v].productStep=n,yield(0,i.BN)(d,u)}else yield(0,i.BN)(d,{[v]:{systemTest:e,productStep:n}})})()}getSystemTestHistoryByStep(s,t,n){var e=this;return(0,f.A)(function*(){const o=(0,i.H9)(e.firestore,"teams",s,"products",t,"software_testing","system_tests_history"),d=yield(0,i.x7)(o);if(d.exists()){const _=d.data();return Object.keys(_).filter(g=>_[g].productStep===n).map(g=>_[g].systemTest)}return[]})()}getSystemTestHistoryByTitle(s,t,n,e){var o=this;return(0,f.A)(function*(){const d=(0,i.H9)(o.firestore,"teams",s,"products",t,"software_testing","system_tests_history"),_=yield(0,i.x7)(d);let v=[];if(_.exists()){const g=_.data();for(let u in g)g[u].systemTest.title===e&&g[u].productStep===n&&v.push({timestamp:u,systemTest:g[u].systemTest})}return v})()}getSystemTestByTimestamp(s,t,n,e,o){var d=this;return(0,f.A)(function*(){const _=(0,i.H9)(d.firestore,"teams",s,"products",t,"software_testing","system_tests_history"),v=yield(0,i.x7)(_);if(v.exists()){const g=v.data();for(let u in g)if(g[u].systemTest.title===e&&u===o&&g[u].productStep===n)return g[u].systemTest}return{}})()}deleteSystemTestHistoryByKey(s,t,n,e,o){var d=this;return(0,f.A)(function*(){const _=(0,i.H9)(d.firestore,"teams",s,"products",t,"software_testing","system_tests_history"),v=yield(0,i.x7)(_);if(v.exists()){const g=v.data();for(let u in g)g[u].systemTest.title===e&&u===o&&g[u].productStep===n&&delete g[u];yield(0,i.BN)(_,g)}})()}getSystemTestHistory(s,t){var n=this;return(0,f.A)(function*(){const e=(0,i.H9)(n.firestore,"teams",s,"products",t,"software_testing","system_tests_history"),o=yield(0,i.x7)(e);return o.exists()?o.data():{}})()}deleteSystemTest(s,t,n,e){var o=this;return(0,f.A)(function*(){let d=(0,i.H9)(o.firestore,"teams",s,"products",t,"software_testing","system_tests"),_=yield(0,i.x7)(d);if(_.exists()){let g=_.data()[n],u=g.indexOf(e);g.splice(u,1),yield(0,i.BN)(d,{[n]:g})}if(d=(0,i.H9)(o.firestore,"teams",s,"products",t,"software_testing","system_tests_history"),_=yield(0,i.x7)(d),_.exists()){let v=_.data();for(let g in v)console.log(v[g].systemTest.title),v[g].systemTest.title===e.title&&delete v[g];yield(0,i.BN)(d,v)}})()}}return(l=a).\u0275fac=function(s){return new(s||l)(h.KVO(i._7))},l.\u0275prov=h.jDH({token:l,factory:l.\u0275fac,providedIn:"root"}),a})()}}]);