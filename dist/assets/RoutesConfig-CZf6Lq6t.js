function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Navbar-BFt1aj8Q.js","assets/index-CwIVUvtm.js","assets/index-BaEb6yc0.css","assets/Footer-BbecNUN5.js","assets/NotFound-CDkEOdf1.js","assets/Home-BNOIW6CV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as u,R as le,_ as U,j as b}from"./index-CwIVUvtm.js";/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}var R;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(R||(R={}));const W="popstate";function ce(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:o,hash:c}=r.location;return M("",{pathname:i,search:o,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Y(a)}return ue(t,n,null,e)}function w(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function X(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function se(){return Math.random().toString(36).substr(2,8)}function D(e,t){return{usr:e.state,key:e.key,idx:t}}function M(e,t,n,r){return n===void 0&&(n=null),O({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?L(t):t,{state:n,key:t&&t.key||r||se()})}function Y(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function L(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ue(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,c=R.Pop,l=null,h=d();h==null&&(h=0,o.replaceState(O({},o.state,{idx:h}),""));function d(){return(o.state||{idx:null}).idx}function f(){c=R.Pop;let s=d(),m=s==null?null:s-h;h=s,l&&l({action:c,location:v.location,delta:m})}function x(s,m){c=R.Push;let p=M(v.location,s,m);n&&n(p,s),h=d()+1;let E=D(p,h),F=v.createHref(p);try{o.pushState(E,"",F)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;a.location.assign(F)}i&&l&&l({action:c,location:v.location,delta:1})}function g(s,m){c=R.Replace;let p=M(v.location,s,m);n&&n(p,s),h=d();let E=D(p,h),F=v.createHref(p);o.replaceState(E,"",F),i&&l&&l({action:c,location:v.location,delta:0})}function y(s){let m=a.location.origin!=="null"?a.location.origin:a.location.href,p=typeof s=="string"?s:Y(s);return p=p.replace(/ $/,"%20"),w(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return c},get location(){return e(a,o)},listen(s){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(W,f),l=s,()=>{a.removeEventListener(W,f),l=null}},createHref(s){return t(a,s)},createURL:y,encodeLocation(s){let m=y(s);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:x,replace:g,go(s){return o.go(s)}};return v}var z;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(z||(z={}));function de(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?L(t):t,a=te(r.pathname||"/",n);if(a==null)return null;let i=Z(e);fe(i);let o=null;for(let c=0;o==null&&c<i.length;++c){let l=Fe(a);o=we(i[c],l)}return o}function Z(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,c)=>{let l={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(w(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let h=P([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(w(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Z(i.children,t,d,h)),!(i.path==null&&!i.index)&&t.push({path:h,score:ye(h,i.index),routesMeta:d})};return e.forEach((i,o)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))a(i,o);else for(let l of ee(i.path))a(i,o,l)}),t}function ee(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=ee(r.join("/")),c=[];return c.push(...o.map(l=>l===""?i:[i,l].join("/"))),a&&c.push(...o),c.map(l=>e.startsWith("/")&&l===""?"/":l)}function fe(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ee(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const he=/^:[\w-]+$/,pe=3,me=2,ve=1,ge=10,xe=-2,q=e=>e==="*";function ye(e,t){let n=e.split("/"),r=n.length;return n.some(q)&&(r+=xe),t&&(r+=me),n.filter(a=>!q(a)).reduce((a,i)=>a+(he.test(i)?pe:i===""?ve:ge),r)}function Ee(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function we(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let o=0;o<n.length;++o){let c=n[o],l=o===n.length-1,h=a==="/"?t:t.slice(a.length)||"/",d=be({path:c.relativePath,caseSensitive:c.caseSensitive,end:l},h);if(!d)return null;Object.assign(r,d.params);let f=c.route;i.push({params:r,pathname:P([a,d.pathname]),pathnameBase:Pe(P([a,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(a=P([a,d.pathnameBase]))}return i}function be(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Re(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:r.reduce((h,d,f)=>{let{paramName:x,isOptional:g}=d;if(x==="*"){let v=c[f]||"";o=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const y=c[f];return g&&!y?h[x]=void 0:h[x]=(y||"").replace(/%2F/g,"/"),h},{}),pathname:i,pathnameBase:o,pattern:e}}function Re(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),X(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,l)=>(r.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Fe(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return X(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function te(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const P=e=>e.join("/").replace(/\/\/+/g,"/"),Pe=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function _e(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ne=["post","put","patch","delete"];new Set(ne);const Ce=["get",...ne];new Set(Ce);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}const Oe=u.createContext(null),je=u.createContext(null),re=u.createContext(null),T=u.createContext(null),$=u.createContext({outlet:null,matches:[],isDataRoute:!1}),ae=u.createContext(null);function A(){return u.useContext(T)!=null}function Se(){return A()||w(!1),u.useContext(T).location}function Ie(e,t){return Ue(e,t)}function Ue(e,t,n,r){A()||w(!1);let{navigator:a}=u.useContext(re),{matches:i}=u.useContext($),o=i[i.length-1],c=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let h=Se(),d;if(t){var f;let s=typeof t=="string"?L(t):t;l==="/"||(f=s.pathname)!=null&&f.startsWith(l)||w(!1),d=s}else d=h;let x=d.pathname||"/",g=x;if(l!=="/"){let s=l.replace(/^\//,"").split("/");g="/"+x.replace(/^\//,"").split("/").slice(s.length).join("/")}let y=de(e,{pathname:g}),v=Ne(y&&y.map(s=>Object.assign({},s,{params:Object.assign({},c,s.params),pathname:P([l,a.encodeLocation?a.encodeLocation(s.pathname).pathname:s.pathname]),pathnameBase:s.pathnameBase==="/"?l:P([l,a.encodeLocation?a.encodeLocation(s.pathnameBase).pathname:s.pathnameBase])})),i,n,r);return t&&v?u.createElement(T.Provider,{value:{location:j({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:R.Pop}},v):v}function Le(){let e=Be(),t=_e(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:a},n):null,null)}const Te=u.createElement(Le,null);class $e extends u.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?u.createElement($.Provider,{value:this.props.routeContext},u.createElement(ae.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Me(e){let{routeContext:t,match:n,children:r}=e,a=u.useContext(Oe);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),u.createElement($.Provider,{value:t},r)}function Ne(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,c=(a=n)==null?void 0:a.errors;if(c!=null){let d=o.findIndex(f=>f.route.id&&(c==null?void 0:c[f.route.id]));d>=0||w(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(h=d),f.route.id){let{loaderData:x,errors:g}=n,y=f.route.loader&&x[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||y){l=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((d,f,x)=>{let g,y=!1,v=null,s=null;n&&(g=c&&f.route.id?c[f.route.id]:void 0,v=f.route.errorElement||Te,l&&(h<0&&x===0?(We("route-fallback",!1),y=!0,s=null):h===x&&(y=!0,s=f.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,x+1)),p=()=>{let E;return g?E=v:y?E=s:f.route.Component?E=u.createElement(f.route.Component,null):f.route.element?E=f.route.element:E=d,u.createElement(Me,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:E})};return n&&(f.route.ErrorBoundary||f.route.errorElement||x===0)?u.createElement($e,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var N=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(N||{});function Ve(e){let t=u.useContext(je);return t||w(!1),t}function ke(e){let t=u.useContext($);return t||w(!1),t}function Ae(e){let t=ke(),n=t.matches[t.matches.length-1];return n.route.id||w(!1),n.route.id}function Be(){var e;let t=u.useContext(ae),n=Ve(N.UseRouteError),r=Ae(N.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}const G={};function We(e,t,n){!t&&!G[e]&&(G[e]=!0)}function V(e){w(!1)}function De(e){let{basename:t="/",children:n=null,location:r,navigationType:a=R.Pop,navigator:i,static:o=!1,future:c}=e;A()&&w(!1);let l=t.replace(/^\/*/,"/"),h=u.useMemo(()=>({basename:l,navigator:i,static:o,future:j({v7_relativeSplatPath:!1},c)}),[l,c,i,o]);typeof r=="string"&&(r=L(r));let{pathname:d="/",search:f="",hash:x="",state:g=null,key:y="default"}=r,v=u.useMemo(()=>{let s=te(d,l);return s==null?null:{location:{pathname:s,search:f,hash:x,state:g,key:y},navigationType:a}},[l,d,f,x,g,y,a]);return v==null?null:u.createElement(re.Provider,{value:h},u.createElement(T.Provider,{children:n,value:v}))}function ze(e){let{children:t,location:n}=e;return Ie(k(t),n)}new Promise(()=>{});function k(e,t){t===void 0&&(t=[]);let n=[];return u.Children.forEach(e,(r,a)=>{if(!u.isValidElement(r))return;let i=[...t,a];if(r.type===u.Fragment){n.push.apply(n,k(r.props.children,i));return}r.type!==V&&w(!1),!r.props.index||!r.props.children||w(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=k(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const qe="6";try{window.__reactRouterVersion=qe}catch{}const Ge="startTransition",J=le[Ge];function Je(e){let{basename:t,children:n,future:r,window:a}=e,i=u.useRef();i.current==null&&(i.current=ce({window:a,v5Compat:!0}));let o=i.current,[c,l]=u.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},d=u.useCallback(f=>{h&&J?J(()=>l(f)):l(f)},[l,h]);return u.useLayoutEffect(()=>o.listen(d),[o,d]),u.createElement(De,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:o,future:r})}var K;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(K||(K={}));var H;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(H||(H={}));var Ke={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function oe(e){if(typeof e=="number")return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?t=parseFloat(n):t=parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return Ke[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function C(e){var t=oe(e);return"".concat(t.value).concat(t.unit)}var Q=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var i=a.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(t,`
    }
  `);return i&&i.insertRule(o,0),r},S;(function(e){e.maroon="#800000",e.red="#FF0000",e.orange="#FFA500",e.yellow="#FFFF00",e.olive="#808000",e.green="#008000",e.purple="#800080",e.fuchsia="#FF00FF",e.lime="#00FF00",e.teal="#008080",e.aqua="#00FFFF",e.blue="#0000FF",e.navy="#000080",e.black="#000000",e.gray="#808080",e.silver="#C0C0C0",e.white="#FFFFFF"})(S||(S={}));var He=function(e,t){if(Object.keys(S).includes(e)&&(e=S[e]),e[0]==="#"&&(e=e.slice(1)),e.length===3){var n="";e.split("").forEach(function(a){n+=a,n+=a}),e=n}var r=(e.match(/.{2}/g)||[]).map(function(a){return parseInt(a,16)}).join(", ");return"rgba(".concat(r,", ").concat(t,")")},I=function(){return I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},I.apply(this,arguments)},Qe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function Xe(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,a=r===void 0?"#000000":r,i=e.speedMultiplier,o=i===void 0?1:i,c=e.cssOverride,l=c===void 0?{}:c,h=e.size,d=h===void 0?50:h,f=Qe(e,["loading","color","speedMultiplier","cssOverride","size"]),x=oe(d),g=x.value,y=x.unit,v=I({display:"inherit",position:"relative",width:C(d),height:C(d),transform:"rotate(165deg)"},l),s=g/5,m=(g-s)/2,p=m-s,E=He(a,.75),F=Q("HashLoader","0% {width: ".concat(s,"px; box-shadow: ").concat(m,"px ").concat(-p,"px ").concat(E,", ").concat(-m,"px ").concat(p,"px ").concat(E,`}
    35% {width: `).concat(C(d),"; box-shadow: 0 ").concat(-p,"px ").concat(E,", 0 ").concat(p,"px ").concat(E,`}
    70% {width: `).concat(s,"px; box-shadow: ").concat(-m,"px ").concat(-p,"px ").concat(E,", ").concat(m,"px ").concat(p,"px ").concat(E,`}
    100% {box-shadow: `).concat(m,"px ").concat(-p,"px ").concat(E,", ").concat(-m,"px ").concat(p,"px ").concat(E,"}"),"before"),_=Q("HashLoader","0% {height: ".concat(s,"px; box-shadow: ").concat(p,"px ").concat(m,"px ").concat(a,", ").concat(-p,"px ").concat(-m,"px ").concat(a,`}
    35% {height: `).concat(C(d),"; box-shadow: ").concat(p,"px 0 ").concat(a,", ").concat(-p,"px 0 ").concat(a,`}
    70% {height: `).concat(s,"px; box-shadow: ").concat(p,"px ").concat(-m,"px ").concat(a,", ").concat(-p,"px ").concat(m,"px ").concat(a,`}
    100% {box-shadow: `).concat(p,"px ").concat(m,"px ").concat(a,", ").concat(-p,"px ").concat(-m,"px ").concat(a,"}"),"after"),B=function(ie){return{position:"absolute",top:"50%",left:"50%",display:"block",width:"".concat(g/5).concat(y),height:"".concat(g/5).concat(y),borderRadius:"".concat(g/10).concat(y),transform:"translate(-50%, -50%)",animationFillMode:"none",animation:"".concat(ie===1?F:_," ").concat(2/o,"s infinite")}};return n?u.createElement("span",I({style:v},f),u.createElement("span",{style:B(1)}),u.createElement("span",{style:B(2)})):null}const Ye=u.lazy(()=>U(()=>import("./Navbar-BFt1aj8Q.js"),__vite__mapDeps([0,1,2]))),Ze=u.lazy(()=>U(()=>import("./Footer-BbecNUN5.js"),__vite__mapDeps([3,1,2]))),et=u.lazy(()=>U(()=>import("./NotFound-CDkEOdf1.js"),__vite__mapDeps([4,1,2]))),tt=u.lazy(()=>U(()=>import("./Home-BNOIW6CV.js"),__vite__mapDeps([5,1,2]))),rt=()=>{const e={home:"/",notFound:"/*"};return b.jsx(b.Fragment,{children:b.jsxs(Je,{children:[b.jsx(Ye,{}),b.jsx(u.Suspense,{fallback:b.jsx("div",{className:"flex justify-center items-center h-screen",children:b.jsx(Xe,{color:"#3b82f6"})}),children:b.jsxs(ze,{children:[b.jsx(V,{path:e.home,element:b.jsx(tt,{})}),b.jsx(V,{path:e.notFound,element:b.jsx(et,{})})]})}),b.jsx(Ze,{})]})})};export{rt as default};
