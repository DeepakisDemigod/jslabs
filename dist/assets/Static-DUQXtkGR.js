function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Template-TVPcdafx.js","assets/index-BRX_RKUH.js","assets/index-C72OvvTk.css","assets/Template-CbUe_hNN.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a as r,_ as o,r as t,j as e}from"./index-BRX_RKUH.js";import{_ as l}from"./HashLoader-C56-cG2N.js";const c=r.lazy(()=>o(()=>import("./Template-TVPcdafx.js"),__vite__mapDeps([0,1,2,3]))),h=d=>{const a=s=>(s.preventDefault(),event.returnValue="Are you sure you want to leave the page?");window.addEventListener("beforeunload",a,{capture:!0});const[n,i]=t.useState(!0);return t.useEffect(()=>{const s=setInterval(()=>{i(!1),clearInterval(s)},3500);return()=>clearInterval(s)},[]),e.jsx(e.Fragment,{children:n?e.jsxs("div",{className:"h-[87vh] flex flex-col items-center justify-center gap-4",children:[e.jsx(l,{color:"#04b374"}),e.jsx("span",{children:"Brewing Console..."})]}):e.jsx("div",{className:"m-2 font-dm",children:e.jsx(r.Suspense,{fallback:e.jsxs("div",{className:"h-[87vh] flex flex-col items-center justify-center gap-4 ",children:[e.jsx(l,{color:"#04b374"}),e.jsx("span",{children:"Almost Ready..."})]}),children:e.jsx(c,{files:{"/index.html":`<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>JavaLabs</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <p>JavaLabs</p>
    <script src="script.js"><\/script>
    </body>
  </html>`,"script.js":"console.log('hello world')"},options:{visibleFiles:["/index.html","/styles.css","script.js"]},template:"static",option:{resizablePanels:!0}})})})})};export{h as default};
