function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Navbar-CrUK12Fw.js","assets/index-nSInRqoO.js","assets/index-BaEb6yc0.css","assets/Footer-B5nS0dc5.js","assets/NotFound-BF3cX6zK.js","assets/Home-C2Wk72T6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as p,_ as m,j as i,R as I,a as j}from"./index-nSInRqoO.js";var V={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function E(t){if(typeof t=="number")return{value:t,unit:"px"};var a,c=(t.match(/^[0-9.]*/)||"").toString();c.includes(".")?a=parseFloat(c):a=parseInt(c,10);var e=(t.match(/[^0-9]*$/)||"").toString();return V[e]?{value:a,unit:e}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(a,"px.")),{value:a,unit:"px"})}function x(t){var a=E(t);return"".concat(a.value).concat(a.unit)}var O=function(t,a,c){var e="react-spinners-".concat(t,"-").concat(c);if(typeof window>"u"||!window.document)return e;var n=document.createElement("style");document.head.appendChild(n);var l=n.sheet,g=`
    @keyframes `.concat(e,` {
      `).concat(a,`
    }
  `);return l&&l.insertRule(g,0),e},f;(function(t){t.maroon="#800000",t.red="#FF0000",t.orange="#FFA500",t.yellow="#FFFF00",t.olive="#808000",t.green="#008000",t.purple="#800080",t.fuchsia="#FF00FF",t.lime="#00FF00",t.teal="#008080",t.aqua="#00FFFF",t.blue="#0000FF",t.navy="#000080",t.black="#000000",t.gray="#808080",t.silver="#C0C0C0",t.white="#FFFFFF"})(f||(f={}));var D=function(t,a){if(Object.keys(f).includes(t)&&(t=f[t]),t[0]==="#"&&(t=t.slice(1)),t.length===3){var c="";t.split("").forEach(function(n){c+=n,c+=n}),t=c}var e=(t.match(/.{2}/g)||[]).map(function(n){return parseInt(n,16)}).join(", ");return"rgba(".concat(e,", ").concat(a,")")},h=function(){return h=Object.assign||function(t){for(var a,c=1,e=arguments.length;c<e;c++){a=arguments[c];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},h.apply(this,arguments)},H=function(t,a){var c={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(c[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)a.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(c[e[n]]=t[e[n]]);return c};function M(t){var a=t.loading,c=a===void 0?!0:a,e=t.color,n=e===void 0?"#000000":e,l=t.speedMultiplier,g=l===void 0?1:l,y=t.cssOverride,R=y===void 0?{}:y,F=t.size,d=F===void 0?50:F,P=H(t,["loading","color","speedMultiplier","cssOverride","size"]),_=E(d),v=_.value,b=_.unit,L=h({display:"inherit",position:"relative",width:x(d),height:x(d),transform:"rotate(165deg)"},R),s=v/5,o=(v-s)/2,r=o-s,u=D(n,.75),S=O("HashLoader","0% {width: ".concat(s,"px; box-shadow: ").concat(o,"px ").concat(-r,"px ").concat(u,", ").concat(-o,"px ").concat(r,"px ").concat(u,`}
    35% {width: `).concat(x(d),"; box-shadow: 0 ").concat(-r,"px ").concat(u,", 0 ").concat(r,"px ").concat(u,`}
    70% {width: `).concat(s,"px; box-shadow: ").concat(-o,"px ").concat(-r,"px ").concat(u,", ").concat(o,"px ").concat(r,"px ").concat(u,`}
    100% {box-shadow: `).concat(o,"px ").concat(-r,"px ").concat(u,", ").concat(-o,"px ").concat(r,"px ").concat(u,"}"),"before"),k=O("HashLoader","0% {height: ".concat(s,"px; box-shadow: ").concat(r,"px ").concat(o,"px ").concat(n,", ").concat(-r,"px ").concat(-o,"px ").concat(n,`}
    35% {height: `).concat(x(d),"; box-shadow: ").concat(r,"px 0 ").concat(n,", ").concat(-r,"px 0 ").concat(n,`}
    70% {height: `).concat(s,"px; box-shadow: ").concat(r,"px ").concat(-o,"px ").concat(n,", ").concat(-r,"px ").concat(o,"px ").concat(n,`}
    100% {box-shadow: `).concat(r,"px ").concat(o,"px ").concat(n,", ").concat(-r,"px ").concat(-o,"px ").concat(n,"}"),"after"),w=function(A){return{position:"absolute",top:"50%",left:"50%",display:"block",width:"".concat(v/5).concat(b),height:"".concat(v/5).concat(b),borderRadius:"".concat(v/10).concat(b),transform:"translate(-50%, -50%)",animationFillMode:"none",animation:"".concat(A===1?S:k," ").concat(2/g,"s infinite")}};return c?p.createElement("span",h({style:L},P),p.createElement("span",{style:w(1)}),p.createElement("span",{style:w(2)})):null}const N=p.lazy(()=>m(()=>import("./Navbar-CrUK12Fw.js"),__vite__mapDeps([0,1,2]))),T=p.lazy(()=>m(()=>import("./Footer-B5nS0dc5.js"),__vite__mapDeps([3,1,2]))),z=p.lazy(()=>m(()=>import("./NotFound-BF3cX6zK.js"),__vite__mapDeps([4,1,2]))),U=p.lazy(()=>m(()=>import("./Home-C2Wk72T6.js"),__vite__mapDeps([5,1,2]))),W=()=>{const t={home:"https://javalabs.vercel.app/",notFound:"https://javalabs.vercel.app/*"};return i.jsxs(i.Fragment,{children:[i.jsx(N,{}),i.jsx(p.Suspense,{fallback:i.jsx("div",{className:"flex justify-center items-center h-screen",children:i.jsx(M,{color:"#3b82f6"})}),children:i.jsxs(I,{children:[i.jsx(j,{path:t.home,element:i.jsx(U,{})}),i.jsx(j,{path:t.notFound,element:i.jsx(z,{})})]})}),i.jsx(T,{})]})};export{W as default};