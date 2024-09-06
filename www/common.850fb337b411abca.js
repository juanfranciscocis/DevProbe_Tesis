"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{1263:(M,y,d)=>{d.d(y,{c:()=>g});var h=d(9672),r=d(1086),m=d(8607);const g=(l,a)=>{let i,s;const e=(o,c,_)=>{if(typeof document>"u")return;const f=document.elementFromPoint(o,c);f&&a(f)&&!f.disabled?f!==i&&(t(),n(f,_)):t()},n=(o,c)=>{i=o,s||(s=i);const _=i;(0,h.w)(()=>_.classList.add("ion-activated")),c()},t=(o=!1)=>{if(!i)return;const c=i;(0,h.w)(()=>c.classList.remove("ion-activated")),o&&s!==i&&i.click(),i=void 0};return(0,m.createGesture)({el:l,gestureName:"buttonActiveDrag",threshold:0,onStart:o=>e(o.currentX,o.currentY,r.a),onMove:o=>e(o.currentX,o.currentY,r.b),onEnd:()=>{t(!0),(0,r.h)(),s=void 0}})}},8438:(M,y,d)=>{d.d(y,{g:()=>r});var h=d(8476);const r=()=>{if(void 0!==h.w)return h.w.Capacitor}},5572:(M,y,d)=>{d.d(y,{c:()=>h,i:()=>r});const h=(m,g,l)=>"function"==typeof l?l(m,g):"string"==typeof l?m[l]===g[l]:Array.isArray(g)?g.includes(m):m===g,r=(m,g,l)=>void 0!==m&&(Array.isArray(m)?m.some(a=>h(a,g,l)):h(m,g,l))},3351:(M,y,d)=>{d.d(y,{g:()=>h});const h=(a,i,s,e,n)=>m(a[1],i[1],s[1],e[1],n).map(t=>r(a[0],i[0],s[0],e[0],t)),r=(a,i,s,e,n)=>n*(3*i*Math.pow(n-1,2)+n*(-3*s*n+3*s+e*n))-a*Math.pow(n-1,3),m=(a,i,s,e,n)=>l((e-=n)-3*(s-=n)+3*(i-=n)-(a-=n),3*s-6*i+3*a,3*i-3*a,a).filter(o=>o>=0&&o<=1),l=(a,i,s,e)=>{if(0===a)return((a,i,s)=>{const e=i*i-4*a*s;return e<0?[]:[(-i+Math.sqrt(e))/(2*a),(-i-Math.sqrt(e))/(2*a)]})(i,s,e);const n=(3*(s/=a)-(i/=a)*i)/3,t=(2*i*i*i-9*i*s+27*(e/=a))/27;if(0===n)return[Math.pow(-t,1/3)];if(0===t)return[Math.sqrt(-n),-Math.sqrt(-n)];const o=Math.pow(t/2,2)+Math.pow(n/3,3);if(0===o)return[Math.pow(t/2,.5)-i/3];if(o>0)return[Math.pow(-t/2+Math.sqrt(o),1/3)-Math.pow(t/2+Math.sqrt(o),1/3)-i/3];const c=Math.sqrt(Math.pow(-n/3,3)),_=Math.acos(-t/(2*Math.sqrt(Math.pow(-n/3,3)))),f=2*Math.pow(c,1/3);return[f*Math.cos(_/3)-i/3,f*Math.cos((_+2*Math.PI)/3)-i/3,f*Math.cos((_+4*Math.PI)/3)-i/3]}},5083:(M,y,d)=>{d.d(y,{i:()=>h});const h=r=>r&&""!==r.dir?"rtl"===r.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(M,y,d)=>{d.r(y),d.d(y,{startFocusVisible:()=>g});const h="ion-focused",m=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],g=l=>{let a=[],i=!0;const s=l?l.shadowRoot:document,e=l||document.body,n=v=>{a.forEach(u=>u.classList.remove(h)),v.forEach(u=>u.classList.add(h)),a=v},t=()=>{i=!1,n([])},o=v=>{i=m.includes(v.key),i||n([])},c=v=>{if(i&&void 0!==v.composedPath){const u=v.composedPath().filter(p=>!!p.classList&&p.classList.contains("ion-focusable"));n(u)}},_=()=>{s.activeElement===e&&n([])};return s.addEventListener("keydown",o),s.addEventListener("focusin",c),s.addEventListener("focusout",_),s.addEventListener("touchstart",t,{passive:!0}),s.addEventListener("mousedown",t),{destroy:()=>{s.removeEventListener("keydown",o),s.removeEventListener("focusin",c),s.removeEventListener("focusout",_),s.removeEventListener("touchstart",t),s.removeEventListener("mousedown",t)},setFocus:n}}},1086:(M,y,d)=>{d.d(y,{I:()=>r,a:()=>i,b:()=>s,c:()=>a,d:()=>n,h:()=>e});var h=d(8438),r=function(t){return t.Heavy="HEAVY",t.Medium="MEDIUM",t.Light="LIGHT",t}(r||{});const g={getEngine(){const t=(0,h.g)();if(null!=t&&t.isPluginAvailable("Haptics"))return t.Plugins.Haptics},available(){if(!this.getEngine())return!1;const o=(0,h.g)();return"web"!==(null==o?void 0:o.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(t){const o=this.getEngine();o&&o.impact({style:t.style})},notification(t){const o=this.getEngine();o&&o.notification({type:t.type})},selection(){this.impact({style:r.Light})},selectionStart(){const t=this.getEngine();t&&t.selectionStart()},selectionChanged(){const t=this.getEngine();t&&t.selectionChanged()},selectionEnd(){const t=this.getEngine();t&&t.selectionEnd()}},l=()=>g.available(),a=()=>{l()&&g.selection()},i=()=>{l()&&g.selectionStart()},s=()=>{l()&&g.selectionChanged()},e=()=>{l()&&g.selectionEnd()},n=t=>{l()&&g.impact(t)}},909:(M,y,d)=>{d.d(y,{I:()=>a,a:()=>n,b:()=>l,c:()=>c,d:()=>f,f:()=>t,g:()=>e,i:()=>s,p:()=>_,r:()=>v,s:()=>o});var h=d(467),r=d(4920),m=d(4929);const l="ion-content",a=".ion-content-scroll-host",i=`${l}, ${a}`,s=u=>"ION-CONTENT"===u.tagName,e=function(){var u=(0,h.A)(function*(p){return s(p)?(yield new Promise(D=>(0,r.c)(p,D)),p.getScrollElement()):p});return function(D){return u.apply(this,arguments)}}(),n=u=>u.querySelector(a)||u.querySelector(i),t=u=>u.closest(i),o=(u,p)=>s(u)?u.scrollToTop(p):Promise.resolve(u.scrollTo({top:0,left:0,behavior:p>0?"smooth":"auto"})),c=(u,p,D,w)=>s(u)?u.scrollByPoint(p,D,w):Promise.resolve(u.scrollBy({top:D,left:p,behavior:w>0?"smooth":"auto"})),_=u=>(0,m.b)(u,l),f=u=>{if(s(u)){const D=u.scrollY;return u.scrollY=!1,D}return u.style.setProperty("overflow","hidden"),!0},v=(u,p)=>{s(u)?u.scrollY=p:u.style.removeProperty("overflow")}},3992:(M,y,d)=>{d.d(y,{a:()=>h,b:()=>c,c:()=>i,d:()=>_,e:()=>A,f:()=>a,g:()=>f,h:()=>m,i:()=>r,j:()=>E,k:()=>P,l:()=>s,m:()=>t,n:()=>v,o:()=>n,p:()=>l,q:()=>g,r:()=>O,s:()=>T,t:()=>o,u:()=>D,v:()=>w,w:()=>e,x:()=>u,y:()=>p});const h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",T="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",A="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(M,y,d)=>{d.d(y,{c:()=>g,g:()=>l});var h=d(8476),r=d(4920),m=d(4929);const g=(i,s,e)=>{let n,t;if(void 0!==h.w&&"MutationObserver"in h.w){const f=Array.isArray(s)?s:[s];n=new MutationObserver(v=>{for(const u of v)for(const p of u.addedNodes)if(p.nodeType===Node.ELEMENT_NODE&&f.includes(p.slot))return e(),void(0,r.r)(()=>o(p))}),n.observe(i,{childList:!0,subtree:!0})}const o=f=>{var v;t&&(t.disconnect(),t=void 0),t=new MutationObserver(u=>{e();for(const p of u)for(const D of p.removedNodes)D.nodeType===Node.ELEMENT_NODE&&D.slot===s&&_()}),t.observe(null!==(v=f.parentElement)&&void 0!==v?v:f,{subtree:!0,childList:!0})},_=()=>{t&&(t.disconnect(),t=void 0)};return{destroy:()=>{n&&(n.disconnect(),n=void 0),_()}}},l=(i,s,e)=>{const n=null==i?0:i.toString().length,t=a(n,s);if(void 0===e)return t;try{return e(n,s)}catch(o){return(0,m.a)("Exception in provided `counterFormatter`.",o),t}},a=(i,s)=>`${i} / ${s}`},1622:(M,y,d)=>{d.r(y),d.d(y,{KEYBOARD_DID_CLOSE:()=>l,KEYBOARD_DID_OPEN:()=>g,copyVisualViewport:()=>O,keyboardDidClose:()=>u,keyboardDidOpen:()=>f,keyboardDidResize:()=>v,resetKeyboardAssist:()=>n,setKeyboardClose:()=>_,setKeyboardOpen:()=>c,startKeyboardAssist:()=>t,trackViewportChanges:()=>w});var h=d(4379);d(8438),d(8476);const g="ionKeyboardDidShow",l="ionKeyboardDidHide";let i={},s={},e=!1;const n=()=>{i={},s={},e=!1},t=E=>{if(h.K.getEngine())o(E);else{if(!E.visualViewport)return;s=O(E.visualViewport),E.visualViewport.onresize=()=>{w(E),f()||v(E)?c(E):u(E)&&_(E)}}},o=E=>{E.addEventListener("keyboardDidShow",P=>c(E,P)),E.addEventListener("keyboardDidHide",()=>_(E))},c=(E,P)=>{p(E,P),e=!0},_=E=>{D(E),e=!1},f=()=>!e&&i.width===s.width&&(i.height-s.height)*s.scale>150,v=E=>e&&!u(E),u=E=>e&&s.height===E.innerHeight,p=(E,P)=>{const A=new CustomEvent(g,{detail:{keyboardHeight:P?P.keyboardHeight:E.innerHeight-s.height}});E.dispatchEvent(A)},D=E=>{const P=new CustomEvent(l);E.dispatchEvent(P)},w=E=>{i=Object.assign({},s),s=O(E.visualViewport)},O=E=>({width:Math.round(E.width),height:Math.round(E.height),offsetTop:E.offsetTop,offsetLeft:E.offsetLeft,pageTop:E.pageTop,pageLeft:E.pageLeft,scale:E.scale})},4379:(M,y,d)=>{d.d(y,{K:()=>g,a:()=>m});var h=d(8438),r=function(l){return l.Unimplemented="UNIMPLEMENTED",l.Unavailable="UNAVAILABLE",l}(r||{}),m=function(l){return l.Body="body",l.Ionic="ionic",l.Native="native",l.None="none",l}(m||{});const g={getEngine(){const l=(0,h.g)();if(null!=l&&l.isPluginAvailable("Keyboard"))return l.Plugins.Keyboard},getResizeMode(){const l=this.getEngine();return null!=l&&l.getResizeMode?l.getResizeMode().catch(a=>{if(a.code!==r.Unimplemented)throw a}):Promise.resolve(void 0)}}},4731:(M,y,d)=>{d.d(y,{c:()=>a});var h=d(467),r=d(8476),m=d(4379);const g=i=>{if(void 0===r.d||i===m.a.None||void 0===i)return null;const s=r.d.querySelector("ion-app");return null!=s?s:r.d.body},l=i=>{const s=g(i);return null===s?0:s.clientHeight},a=function(){var i=(0,h.A)(function*(s){let e,n,t,o;const c=function(){var p=(0,h.A)(function*(){const D=yield m.K.getResizeMode(),w=void 0===D?void 0:D.mode;e=()=>{void 0===o&&(o=l(w)),t=!0,_(t,w)},n=()=>{t=!1,_(t,w)},null==r.w||r.w.addEventListener("keyboardWillShow",e),null==r.w||r.w.addEventListener("keyboardWillHide",n)});return function(){return p.apply(this,arguments)}}(),_=(p,D)=>{s&&s(p,f(D))},f=p=>{if(0===o||o===l(p))return;const D=g(p);return null!==D?new Promise(w=>{const E=new ResizeObserver(()=>{D.clientHeight===o&&(E.disconnect(),w())});E.observe(D)}):void 0};return yield c(),{init:c,destroy:()=>{null==r.w||r.w.removeEventListener("keyboardWillShow",e),null==r.w||r.w.removeEventListener("keyboardWillHide",n),e=n=void 0},isKeyboardVisible:()=>t}});return function(e){return i.apply(this,arguments)}}()},7838:(M,y,d)=>{d.d(y,{c:()=>r});var h=d(467);const r=()=>{let m;return{lock:function(){var l=(0,h.A)(function*(){const a=m;let i;return m=new Promise(s=>i=s),void 0!==a&&(yield a),i});return function(){return l.apply(this,arguments)}}()}}},9001:(M,y,d)=>{d.d(y,{c:()=>m});var h=d(8476),r=d(4920);const m=(g,l,a)=>{let i;const s=()=>!(void 0===l()||void 0!==g.label||null===a()),n=()=>{const o=l();if(void 0===o)return;if(!s())return void o.style.removeProperty("width");const c=a().scrollWidth;if(0===c&&null===o.offsetParent&&void 0!==h.w&&"IntersectionObserver"in h.w){if(void 0!==i)return;const _=i=new IntersectionObserver(f=>{1===f[0].intersectionRatio&&(n(),_.disconnect(),i=void 0)},{threshold:.01,root:g});_.observe(o)}else o.style.setProperty("width",.75*c+"px")};return{calculateNotchWidth:()=>{s()&&(0,r.r)(()=>{n()})},destroy:()=>{i&&(i.disconnect(),i=void 0)}}}},7895:(M,y,d)=>{d.d(y,{S:()=>r});const r={bubbles:{dur:1e3,circles:9,fn:(m,g,l)=>{const a=m*g/l-m+"ms",i=2*Math.PI*g/l;return{r:5,style:{top:32*Math.sin(i)+"%",left:32*Math.cos(i)+"%","animation-delay":a}}}},circles:{dur:1e3,circles:8,fn:(m,g,l)=>{const a=g/l,i=m*a-m+"ms",s=2*Math.PI*a;return{r:5,style:{top:32*Math.sin(s)+"%",left:32*Math.cos(s)+"%","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(m,g)=>({r:6,style:{left:32-32*g+"%","animation-delay":-110*g+"ms"}})},lines:{dur:1e3,lines:8,fn:(m,g,l)=>({y1:14,y2:26,style:{transform:`rotate(${360/l*g+(g<l/2?180:-180)}deg)`,"animation-delay":m*g/l-m+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(m,g,l)=>({y1:12,y2:20,style:{transform:`rotate(${360/l*g+(g<l/2?180:-180)}deg)`,"animation-delay":m*g/l-m+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(m,g,l)=>({y1:17,y2:29,style:{transform:`rotate(${30*g+(g<6?180:-180)}deg)`,"animation-delay":m*g/l-m+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(m,g,l)=>({y1:12,y2:20,style:{transform:`rotate(${30*g+(g<6?180:-180)}deg)`,"animation-delay":m*g/l-m+"ms"}})}}},7166:(M,y,d)=>{d.r(y),d.d(y,{createSwipeBackGesture:()=>l});var h=d(4920),r=d(5083),m=d(8607);d(1970);const l=(a,i,s,e,n)=>{const t=a.ownerDocument.defaultView;let o=(0,r.i)(a);const _=D=>o?-D.deltaX:D.deltaX;return(0,m.createGesture)({el:a,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:D=>(o=(0,r.i)(a),(D=>{const{startX:O}=D;return o?O>=t.innerWidth-50:O<=50})(D)&&i()),onStart:s,onMove:D=>{const O=_(D)/t.innerWidth;e(O)},onEnd:D=>{const w=_(D),O=t.innerWidth,E=w/O,P=(D=>o?-D.velocityX:D.velocityX)(D),A=P>=0&&(P>.2||w>O/2),L=(A?1-E:E)*O;let C=0;if(L>5){const R=L/Math.abs(P);C=Math.min(R,540)}n(A,E<=0?.01:(0,h.j)(0,E,.9999),C)}})}},2935:(M,y,d)=>{d.d(y,{w:()=>h});const h=(g,l,a)=>{if(typeof MutationObserver>"u")return;const i=new MutationObserver(s=>{a(r(s,l))});return i.observe(g,{childList:!0,subtree:!0}),i},r=(g,l)=>{let a;return g.forEach(i=>{for(let s=0;s<i.addedNodes.length;s++)a=m(i.addedNodes[s],l)||a}),a},m=(g,l)=>{if(1!==g.nodeType)return;const a=g;return(a.tagName===l.toUpperCase()?[a]:Array.from(a.querySelectorAll(l))).find(s=>s.value===a.value)}},385:(M,y,d)=>{d.d(y,{l:()=>m});var h=d(4438),r=d(7863);let m=(()=>{var g;class l{constructor(){this.title="Header Title"}ngOnInit(){}}return(g=l).\u0275fac=function(i){return new(i||g)},g.\u0275cmp=h.VBU({type:g,selectors:[["app-header"]],inputs:{title:"title"},decls:5,vars:2,consts:[[3,"translucent"],["slot","start","menu","menu-id"]],template:function(i,s){1&i&&(h.j41(0,"ion-header",0)(1,"ion-toolbar"),h.nrm(2,"ion-menu-button",1),h.j41(3,"ion-title"),h.EFF(4),h.k0s()()()),2&i&&(h.Y8G("translucent",!0),h.R7$(4),h.JRh(s.title))},dependencies:[r.eU,r.MC,r.BC,r.ai]}),l})()},8453:(M,y,d)=>{d.d(y,{W:()=>m});var h=d(4438),r=d(7863);let m=(()=>{var g;class l{constructor(){this.title="Title"}ngOnInit(){}}return(g=l).\u0275fac=function(i){return new(i||g)},g.\u0275cmp=h.VBU({type:g,selectors:[["app-title"]],inputs:{title:"title"},decls:4,vars:1,consts:[[1,"lg:m-10"],["size","12","size-md","6","size-lg","6"],[1,"text-4xl","lg:text-6xl","font-bold"]],template:function(i,s){1&i&&(h.j41(0,"ion-row",0)(1,"ion-col",1)(2,"h1",2),h.EFF(3),h.k0s()()()),2&i&&(h.R7$(3),h.JRh(s.title))},dependencies:[r.hU,r.ln]}),l})()},4796:(M,y,d)=>{d.d(y,{u:()=>l});var h=d(467),r=d(8737),m=d(4262),g=d(4438);let l=(()=>{var a;class i{constructor(e,n){this.auth=e,this.firestore=n}registerUser(e){var n=this;return(0,h.A)(function*(){try{const t=yield(0,r.eJ)(n.auth,e.email,e.password);return t.user?(yield(0,m.BN)((0,m.H9)(n.firestore,"users",t.user.uid),{email:e.email,name:e.name,orgName:e.orgName,uid:t.user.uid}),yield(0,m.BN)((0,m.H9)(n.firestore,"teams",`${e.orgName}`),{name:e.orgName,members:[t.user.uid]}),t):null}catch{return null}})()}loginUser(e){var n=this;return(0,h.A)(function*(){try{var t;const o=yield(0,r.x9)(n.auth,e.email,e.password);if(null!==(t=o.user)&&void 0!==t&&t.uid){const c=yield(0,m.x7)((0,m.H9)(n.firestore,"users",o.user.uid));if(c.exists())return localStorage.setItem("user",JSON.stringify(c.data())),o}}catch(o){console.error(o)}return null})()}logoutUser(){var e=this;return(0,h.A)(function*(){yield e.auth.signOut()})()}addMember(e){var n=this;return(0,h.A)(function*(){try{const t=yield(0,r.eJ)(n.auth,e.email,e.password);if(!t.user)return!1;const o={email:e.email,name:e.name,orgName:e.orgName,uid:t.user.uid};return yield(0,m.BN)((0,m.H9)(n.firestore,"users",t.user.uid),o),o}catch{return!1}})()}}return(a=i).\u0275fac=function(e){return new(e||a)(g.KVO(r.Nj),g.KVO(m._7))},a.\u0275prov=g.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),i})()},6560:(M,y,d)=>{d.d(y,{x:()=>l});var h=d(467),r=d(4262),m=d(4438),g=d(1626);let l=(()=>{var a;class i{constructor(e,n){this.firestore=e,this.http=n,this.url_cpu="https://devprobeapi.onrender.com/flame_graph_date",this.url_mem="https://devprobeapi.onrender.com/flame_graph_memory_date"}getProducts(e){var n=this;return(0,h.A)(function*(){try{const t=(0,r.rJ)(n.firestore,"teams",e,"products");return(yield(0,r.GG)(t)).docs.map(c=>c.data())}catch(t){return console.log(t),[]}})()}getDates(e,n,t){var o=this;return(0,h.A)(function*(){try{t||(t="cpu_usage");const c=(0,r.rJ)(o.firestore,"teams",e,"products",n,t);return(yield(0,r.GG)(c)).docs.map(f=>f.id)}catch(c){return console.log(c),[]}})()}getFlameGraphByDate(e,n,t,o){var c=this;return(0,h.A)(function*(){try{let _={team:e,product:n,date:t};return o?yield c.http.post(c.url_mem,_).toPromise():yield c.http.post(c.url_cpu,_).toPromise()}catch{return{}}})()}}return(a=i).\u0275fac=function(e){return new(e||a)(m.KVO(r._7),m.KVO(g.Qq))},a.\u0275prov=m.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),i})()},201:(M,y,d)=>{d.d(y,{p:()=>l});var h=d(467),r=d(4262),m=d(4438),g=d(1626);let l=(()=>{var a;class i{constructor(e,n){this.firestore=e,this.httpClient=n,this.url="https://devprobeapi.onrender.com/"}syncRepo(e,n,t,o,c){var _=this;return(0,h.A)(function*(){const f=(0,r.H9)(_.firestore,"teams",e),v=yield(0,r.x7)(f);if(v.exists()){const u=v.data();u.gitHub={key:n,repo:t,branch:o,owner:c},yield(0,r.BN)(f,u)}})()}getSyncRepo(e){var n=this;return(0,h.A)(function*(){const t=(0,r.H9)(n.firestore,"teams",e),o=yield(0,r.x7)(t);return o.exists()?o.data().gitHub:null})()}getFiles(e){var n=this;return(0,h.A)(function*(){const t=yield n.httpClient.post(n.url+"github_repo",{auth:e.key,repo:e.repo,branch:e.branch,owner:e.owner}).toPromise();if(console.log(t),t){let o=t.paths;return o=o.filter(c=>!c.includes(".git")),o=o.filter(c=>!c.includes("node_modules")),o=o.filter(c=>!c.includes(".idea")),o=o.filter(c=>c.includes(".")),o}return[]})()}getContentFromFilePath(e,n){var t=this;return(0,h.A)(function*(){const o=yield t.httpClient.post(t.url+"github_file",{auth:e.key,repo:e.repo,owner:e.owner,path:n}).toPromise();return console.log(o),o?o.content:""})()}}return(a=i).\u0275fac=function(e){return new(e||a)(m.KVO(r._7),m.KVO(g.Qq))},a.\u0275prov=m.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),i})()},3661:(M,y,d)=>{d.d(y,{e:()=>l});var h=d(467),r=d(4438),m=d(4262),g=d(1626);let l=(()=>{var a;class i{constructor(e,n){this.firestore=e,this.http=n,this.ipApiURL="https://cors-ea3m.onrender.com/http://ip-api.com/json/"}getLocationDestSrc(e){var n=this;return(0,h.A)(function*(){var t,o,c,_,f,v,u,p;if(!e)return e;const D=n.http.get(n.ipApiURL+e.dst_addr).toPromise(),w=n.http.get(n.ipApiURL+e.src_addr).toPromise(),O=yield D,E=yield w;return e.dst_city=null!==(t=O.city)&&void 0!==t?t:"No city found",e.dst_country=null!==(o=O.country)&&void 0!==o?o:"No country found",e.dst_latitude=null!==(c=O.lat)&&void 0!==c?c:0,e.dst_longitude=null!==(_=O.lon)&&void 0!==_?_:0,e.src_city=null!==(f=E.city)&&void 0!==f?f:"No city found",e.src_country=null!==(v=E.country)&&void 0!==v?v:"No country found",e.src_latitude=null!==(u=E.lat)&&void 0!==u?u:0,e.src_longitude=null!==(p=E.lon)&&void 0!==p?p:0,e})()}getLocationFrom(e){var n=this;return(0,h.A)(function*(){if(!e)return e;let t=e.result;for(let v=0;v<t.length;v++)try{var o,c,_,f;let u=t[v],p=u.result[0].from;if(!p)continue;const w=yield n.http.get(n.ipApiURL+p).toPromise();u.result[0].from_country=null!==(o=w.country)&&void 0!==o?o:"No country found",u.result[0].form_city=null!==(c=w.city)&&void 0!==c?c:"No city found",u.result[0].from_latitude=null!==(_=w.lat)&&void 0!==_?_:0,u.result[0].from_longitude=null!==(f=w.lon)&&void 0!==f?f:0,e.result[v]=u}catch(u){console.log(u)}return e})()}getByIp(e){var n=this;return(0,h.A)(function*(){return yield n.http.get(n.ipApiURL+e).toPromise()})()}}return(a=i).\u0275fac=function(e){return new(e||a)(r.KVO(m._7),r.KVO(g.Qq))},a.\u0275prov=r.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),i})()},1681:(M,y,d)=>{d.d(y,{N:()=>l});var h=d(467),r=d(4262),m=d(4438),g=d(1626);let l=(()=>{var a;class i{constructor(e,n){this.firestore=e,this.http=n,this.ipApiURL="https://cors-ea3m.onrender.com/http://ip-api.com/json/"}getLocation(e){var n=this;return(0,h.A)(function*(){console.log(e);const o=yield n.http.get(n.ipApiURL+e[0].dst_addr).toPromise();for(let f=0;f<e.length;f++)e[f].toLatitude=o.lat,e[f].toLongitude=o.lon,e[f].cityTo=o.city,e[f].countryTo=o.country;const c=e.map(f=>n.http.get(n.ipApiURL+f.from).toPromise());return(yield Promise.all(c)).forEach((f,v)=>{e[v].fromLatitude=f.lat,e[v].fromLongitude=f.lon,e[v].cityFrom=f.city,e[v].countryFrom=f.country}),console.log(e),e})()}saveLocationResults(e,n,t,o){var c=this;return(0,h.A)(function*(){try{console.log(o,"ripeData");const _=(0,r.rJ)(c.firestore,"teams",e,"products",n,"ripe"),f=(0,r.H9)(_,t),v=o.map(u=>({from:u.from,dst_addr:u.dst_addr,latency:u.latency,cityFrom:u.cityFrom,countryFrom:u.countryFrom,cityTo:u.cityTo,countryTo:u.countryTo,fromLatitude:u.fromLatitude,fromLongitude:u.fromLongitude,toLatitude:u.toLatitude,toLongitude:u.toLongitude,id:u.id}));return yield(0,r.BN)(f,{data:v}),console.log("Data saved",{data:v}),!0}catch(_){return console.log(_),!1}})()}}return(a=i).\u0275fac=function(e){return new(e||a)(m.KVO(r._7),m.KVO(g.Qq))},a.\u0275prov=m.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),i})()},6241:(M,y,d)=>{d.d(y,{b:()=>g});var h=d(467),r=d(4262),m=d(4438);let g=(()=>{var l;class a{constructor(s){this.firestore=s}addProduct(s,e){var n=this;return(0,h.A)(function*(){try{console.log(s);const t=(0,r.H9)(n.firestore,"teams",e,"products",s.productObjective);return yield(0,r.BN)(t,s),!0}catch(t){return console.log(t),!1}})()}getProducts(s){var e=this;return(0,h.A)(function*(){try{const n=(0,r.rJ)(e.firestore,"teams",s,"products");return(yield(0,r.GG)(n)).docs.map(o=>o.data())}catch(n){return console.log(n),[]}})()}removeProduct(s,e){var n=this;return(0,h.A)(function*(){try{const t=(0,r.H9)(n.firestore,"teams",s,"products",e);return yield(0,r.kd)(t),!0}catch(t){return console.log(t),!1}})()}}return(l=a).\u0275fac=function(s){return new(s||l)(m.KVO(r._7))},l.\u0275prov=m.jDH({token:l,factory:l.\u0275fac,providedIn:"root"}),a})()},2588:(M,y,d)=>{d.d(y,{N:()=>l});var h=d(467),r=d(4262),m=d(4438),g=d(1626);let l=(()=>{var a;class i{constructor(e,n){this.http=e,this.firestore=n,this.measurementsUrl="https://cors-ea3m.onrender.com/https://atlas.ripe.net/api/v2/measurements/",this.measurementID=""}sendTraceRequest(e,n,t,o){var c=this;return(0,h.A)(function*(){console.log("Sending trace request");try{let _={definitions:[{target:e,description:n,type:t,af:4,is_oneoff:!0,protocol:"TCP"}],probes:[]};console.log(o);let f=o.split(",").length-1,v=(o=o.slice(0,-1)).split(","),u=[];for(let w=0;w<f;w++)u.push({requested:5,type:"country",value:v[w]});_.probes=u,console.log(_);let p={Authorization:"Key 92530695-134f-4cbc-b7c3-ec130f3719b0"};console.log(_);let D=yield c.http.post(c.measurementsUrl,_,{headers:p}).toPromise();return console.log(D),c.measurementID=D.measurements[0],!0}catch(_){return console.log(_),!1}})()}getTraceResults(e){var n=this;return(0,h.A)(function*(){e&&(n.measurementID=e);try{let t;return""===n.measurementID?(console.log("No measurement ID"),!1):n.http.get(n.measurementsUrl+n.measurementID+"/results/",{headers:t}).toPromise()}catch(t){return console.log(t),!1}})()}saveMeasurementResults(e,n,t,o){var c=this;return(0,h.A)(function*(){try{const _=(0,r.rJ)(c.firestore,"teams",e,"products",n,"ripe_trace"),f=(0,r.H9)(_,t),v=o.map((u,p)=>({id:c.measurementID,dst_addr:u.dst_addr,dst_city:u.dst_city,dst_country:u.dst_country,dst_latitude:u.dst_latitude,dst_longitude:u.dst_longitude,src_addr:u.src_addr,src_city:u.src_city,src_country:u.src_country,src_latitude:u.src_latitude,src_longitude:u.src_longitude,result:u.result}));return yield(0,r.BN)(f,{data:v}),!0}catch(_){return console.log(_),!1}})()}getHistoryResults(e,n){var t=this;return(0,h.A)(function*(){const c=(0,r.rJ)(t.firestore,"teams/"+e+"/products/"+n+"/ripe_trace"),_=yield(0,r.GG)(c);let f=[];return _.docs.forEach(v=>{f.push({id:v.id,data:v.data()})}),console.log(f),f})()}getAllResultsByDescription(e,n,t){var o=this;return(0,h.A)(function*(){try{let c="teams/"+e+"/products/"+n+"/ripe_trace";console.log(c);let _=(0,r.H9)(o.firestore,c,t);return(yield(0,r.x7)(_)).data()}catch(c){return console.log(c),[]}})()}}return(a=i).\u0275fac=function(e){return new(e||a)(m.KVO(g.Qq),m.KVO(r._7))},a.\u0275prov=m.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),i})()},9640:(M,y,d)=>{d.d(y,{Q:()=>a});var h=d(467),r=d(1985),m=d(4262),g=d(4438),l=d(1626);let a=(()=>{var i;class s{constructor(n,t){this.http=n,this.firestore=t,this.measurementsUrl="https://cors-ea3m.onrender.com/https://atlas.ripe.net/api/v2/measurements/",this.measurementID=""}sendMeasurementRequest(n,t,o,c){var _=this;return(0,h.A)(function*(){let f=c.split(",").length-1;c=c.slice(0,-1);try{let v={definitions:[{target:n,description:"ping",type:"ping",af:4,is_oneoff:!0}],probes:[{requested:f,type:"probes",value:c}]},u={Authorization:"Key 92530695-134f-4cbc-b7c3-ec130f3719b0"};console.log(v);let p=yield _.http.post(_.measurementsUrl,v,{headers:u}).toPromise();return console.log(p),_.measurementID=p.measurements[0],_.measurementID}catch(v){return console.log(v),!1}})()}getMeasurementResults(n){var t=this;return(0,h.A)(function*(){n&&(t.measurementID=n);try{let o={Authorization:"Key 92530695-134f-4cbc-b7c3-ec130f3719b0"};return""===t.measurementID?(console.log("No measurement ID"),!1):t.http.get(t.measurementsUrl+t.measurementID+"/results/",{headers:o})}catch(o){return console.log(o),new r.c}})()}saveMeasurementResults(n,t,o,c){var _=this;return(0,h.A)(function*(){try{const f=(0,m.rJ)(_.firestore,"teams",n,"products",t,"ripe"),v=(0,m.H9)(f,o),u=c.map((p,D)=>({id:_.measurementID,from:p.from,dst_addr:p.dst_addr,latency:p.latency}));return yield(0,m.BN)(v,{data:u}),!0}catch(f){return console.log(f),!1}})()}getAllResultsByDescription(n,t,o){var c=this;return(0,h.A)(function*(){try{let _="teams/"+n+"/products/"+t+"/ripe";console.log(_);let f=(0,m.H9)(c.firestore,_,o);return(yield(0,m.x7)(f)).data()}catch(_){return console.log(_),[]}})()}getHistoryResults(n,t){var o=this;return(0,h.A)(function*(){const _=(0,m.rJ)(o.firestore,"teams/"+n+"/products/"+t+"/ripe"),f=yield(0,m.GG)(_);let v=[];return f.docs.forEach(u=>{v.push({id:u.id,data:u.data()})}),console.log(v),v})()}deleteHistory(n,t,o){var c=this;return(0,h.A)(function*(){const f=(0,m.H9)(c.firestore,"teams/"+n+"/products/"+t+"/ripe",o);try{return yield(0,m.kd)(f),!0}catch(v){return console.log(v),!1}})()}}return(i=s).\u0275fac=function(n){return new(n||i)(g.KVO(l.Qq),g.KVO(m._7))},i.\u0275prov=g.jDH({token:i,factory:i.\u0275fac,providedIn:"root"}),s})()},9274:(M,y,d)=>{d.d(y,{h:()=>g});var h=d(467),r=d(4262),m=d(4438);let g=(()=>{var l;class a{constructor(s){this.firestore=s}addSystemTest(s,e,n,t){var o=this;return(0,h.A)(function*(){const c=(0,r.H9)(o.firestore,"teams",s,"products",e,"software_testing","system_tests"),_=yield(0,r.x7)(c);if(_.exists()){const f=_.data();if(!f[n])return f[n]=[t],yield(0,r.BN)(c,f),void console.log("Document created with ID: ",c.id);f[n].push(t),yield(0,r.BN)(c,f),console.log("Document updated with ID: ",_.id)}else console.log("No such document!"),yield(0,r.BN)(c,{[n]:[t]}),console.log("Document created with ID: ",c.id)})()}getSystemTest(s,e,n){var t=this;return(0,h.A)(function*(){const o=(0,r.H9)(t.firestore,"teams",s,"products",e,"software_testing","system_tests"),c=yield(0,r.x7)(o);return c.exists()?c.data()[n]:[]})()}saveSystemTest(s,e,n,t){var o=this;return(0,h.A)(function*(){const c=(0,r.H9)(o.firestore,"teams",s,"products",e,"software_testing","system_tests_history"),_=new Date,f=`${_.getFullYear()}-${_.getMonth()+1}-${_.getDate()} ${_.getHours()}:${_.getMinutes()}:${_.getSeconds()}`;console.log(f);const v=yield(0,r.x7)(c);if(v.exists()){let u=v.data();u[f]={systemTest:t},u[f].productStep=n,yield(0,r.BN)(c,u)}else yield(0,r.BN)(c,{[f]:{systemTest:t,productStep:n}})})()}getSystemTestHistoryByStep(s,e,n){var t=this;return(0,h.A)(function*(){const o=(0,r.H9)(t.firestore,"teams",s,"products",e,"software_testing","system_tests_history"),c=yield(0,r.x7)(o);if(c.exists()){const _=c.data();return Object.keys(_).filter(v=>_[v].productStep===n).map(v=>_[v].systemTest)}return[]})()}getSystemTestHistoryByTitle(s,e,n,t){var o=this;return(0,h.A)(function*(){const c=(0,r.H9)(o.firestore,"teams",s,"products",e,"software_testing","system_tests_history"),_=yield(0,r.x7)(c);let f=[];if(_.exists()){const v=_.data();for(let u in v)v[u].systemTest.title===t&&v[u].productStep===n&&f.push({timestamp:u,systemTest:v[u].systemTest})}return f})()}getSystemTestByTimestamp(s,e,n,t,o){var c=this;return(0,h.A)(function*(){const _=(0,r.H9)(c.firestore,"teams",s,"products",e,"software_testing","system_tests_history"),f=yield(0,r.x7)(_);if(f.exists()){const v=f.data();for(let u in v)if(v[u].systemTest.title===t&&u===o&&v[u].productStep===n)return v[u].systemTest}return{}})()}deleteSystemTestHistoryByKey(s,e,n,t,o){var c=this;return(0,h.A)(function*(){const _=(0,r.H9)(c.firestore,"teams",s,"products",e,"software_testing","system_tests_history"),f=yield(0,r.x7)(_);if(f.exists()){const v=f.data();for(let u in v)v[u].systemTest.title===t&&u===o&&v[u].productStep===n&&delete v[u];yield(0,r.BN)(_,v)}})()}getSystemTestHistory(s,e){var n=this;return(0,h.A)(function*(){const t=(0,r.H9)(n.firestore,"teams",s,"products",e,"software_testing","system_tests_history"),o=yield(0,r.x7)(t);return o.exists()?o.data():{}})()}deleteSystemTest(s,e,n,t){var o=this;return(0,h.A)(function*(){let c=(0,r.H9)(o.firestore,"teams",s,"products",e,"software_testing","system_tests"),_=yield(0,r.x7)(c);if(_.exists()){let f=_.data();f[n]=f[n].filter(v=>v.title!==t.title),yield(0,r.BN)(c,f)}if(c=(0,r.H9)(o.firestore,"teams",s,"products",e,"software_testing","system_tests_history"),_=yield(0,r.x7)(c),_.exists()){let f=_.data();for(let v in f)console.log(f[v].systemTest.title),f[v].systemTest.title===t.title&&delete f[v];yield(0,r.BN)(c,f)}})()}}return(l=a).\u0275fac=function(s){return new(s||l)(m.KVO(r._7))},l.\u0275prov=m.jDH({token:l,factory:l.\u0275fac,providedIn:"root"}),a})()},2379:(M,y,d)=>{d.d(y,{I:()=>g});var h=d(467),r=d(4262),m=d(4438);let g=(()=>{var l;class a{constructor(s){this.firestore=s}addUnitTest(s,e,n,t){var o=this;return(0,h.A)(function*(){const c=(0,r.H9)(o.firestore,"teams",s,"products",e,"software_testing","unit_tests"),_=yield(0,r.x7)(c);if(_.exists()){let f=_.data();if(!f[n])return f[n]=[t],yield(0,r.BN)(c,f),void console.log("Document created with ID: ",c.id);const v=f[n];console.log(v),v.push(t),yield(0,r.BN)(c,{[n]:v}),console.log("Document updated with ID: ",_.id)}else console.log("No such document!"),yield(0,r.BN)(c,{[n]:[t]}),console.log("Document created with ID: ",c.id)})()}getUnitTests(s,e,n){var t=this;return(0,h.A)(function*(){const o=(0,r.H9)(t.firestore,"teams",s,"products",e,"software_testing","unit_tests"),c=yield(0,r.x7)(o);return c.exists()?c.data()[n]:[]})()}updateUnitTestState(s,e,n,t){var o=this;return(0,h.A)(function*(){const c=(0,r.H9)(o.firestore,"teams",s,"products",e,"software_testing","unit_tests"),_=yield(0,r.x7)(c);if(_.exists()){const v=_.data()[n];for(let u=0;u<v.length;u++)if(v[u].title===t){v[u].state=!v[u].state;const p=new Date,D=p.getDate()+"/"+(p.getMonth()+1)+"/"+p.getFullYear()+" "+p.getHours()+":"+p.getMinutes()+":"+p.getSeconds();return v[u].last_state_change.push({date:D,state:v[u].state}),yield(0,r.BN)(c,{[n]:v}),!0}}return!1})()}}return(l=a).\u0275fac=function(s){return new(s||l)(m.KVO(r._7))},l.\u0275prov=m.jDH({token:l,factory:l.\u0275fac,providedIn:"root"}),a})()}}]);