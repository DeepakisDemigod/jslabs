function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Template-CM1Oa_l9.js","assets/index-BkmXx0mF.js","assets/index-D4d2Ro61.css","assets/Template-CbUe_hNN.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a as r,_ as c,r as t,j as e}from"./index-BkmXx0mF.js";import{_ as a}from"./HashLoader-D-Qip54Z.js";const o=r.lazy(()=>c(()=>import("./Template-CM1Oa_l9.js"),__vite__mapDeps([0,1,2,3]))),x=()=>{const[l,n]=t.useState(!0);return t.useEffect(()=>{const s=setInterval(()=>{n(!1),clearInterval(s)},4e3);return()=>clearInterval(s)},[]),e.jsx(e.Fragment,{children:l?e.jsxs("div",{className:"h-[87vh] flex flex-col items-center justify-center gap-4",children:[e.jsx(a,{color:"#2563eb"}),e.jsx("span",{children:"Brewing Console..."})]}):e.jsx("div",{className:"m-2 font-dm",children:e.jsx(r.Suspense,{fallback:e.jsxs("div",{className:"h-[87vh] flex flex-col items-center justify-center gap-4 ",children:[e.jsx(a,{color:"#2563eb"}),e.jsx("span",{children:"Almost Ready..."})]}),children:e.jsx(o,{template:"react"})})})})};export{x as default};
