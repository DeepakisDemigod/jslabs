function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Template-TVPcdafx.js","assets/index-BRX_RKUH.js","assets/index-C72OvvTk.css","assets/Template-CbUe_hNN.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a as l,_ as c,r as t,j as e}from"./index-BRX_RKUH.js";import{_ as a}from"./HashLoader-C56-cG2N.js";const i=l.lazy(()=>c(()=>import("./Template-TVPcdafx.js"),__vite__mapDeps([0,1,2,3]))),x=()=>{const[r,n]=t.useState(!0);return t.useEffect(()=>{const s=setInterval(()=>{n(!1),clearInterval(s)},4e3);return()=>clearInterval(s)},[]),e.jsx(e.Fragment,{children:r?e.jsxs("div",{className:"h-[87vh] flex flex-col items-center justify-center gap-4",children:[e.jsx(a,{color:"#04b374"}),e.jsx("span",{children:"Brewing Console..."})]}):e.jsx("div",{className:"m-2 font-dm",children:e.jsx(l.Suspense,{fallback:e.jsxs("div",{className:"h-[87vh] flex flex-col items-center justify-center gap-4 ",children:[e.jsx(a,{color:"#04b374"}),e.jsx("span",{children:"Almost Ready..."})]}),children:e.jsx(i,{template:"react",options:{visibleFiles:["index.js","/App.js","/styles.css"]}})})})})};export{x as default};
