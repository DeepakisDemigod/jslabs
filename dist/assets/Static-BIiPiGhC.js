function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Template-CZZoz0zY.js","assets/index-B3iEfUhw.js","assets/index-CTYEzEtj.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a as r,_ as o,r as s,j as e}from"./index-B3iEfUhw.js";import{_ as l}from"./HashLoader-D08k7B-s.js";const c=r.lazy(()=>o(()=>import("./Template-CZZoz0zY.js"),__vite__mapDeps([0,1,2]))),h=d=>{const a=t=>(t.preventDefault(),event.returnValue="Are you sure you want to leave the page?");window.addEventListener("beforeunload",a,{capture:!0});const[n,i]=s.useState(!0);return s.useEffect(()=>{const t=setInterval(()=>{i(!1),clearInterval(t)},3500);return()=>clearInterval(t)},[]),e.jsx(e.Fragment,{children:n?e.jsxs("div",{className:"h-[87vh] flex flex-col items-center justify-center gap-4",children:[e.jsx(l,{color:"#2563eb"}),e.jsx("span",{children:"Brewing Console..."})]}):e.jsx("div",{className:"m-2 font-dm",children:e.jsx(r.Suspense,{fallback:e.jsxs("div",{className:"h-[87vh] flex flex-col items-center justify-center gap-4 ",children:[e.jsx(l,{color:"#2563eb"}),e.jsx("span",{children:"Almost Ready..."})]}),children:e.jsx(c,{files:{"/index.html":`<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>JavaLabs</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <p>JavaLabs</p>
    <script src="script.js"><\/script>
    </body>
  </html>`,"script.js":"console.log('hello world')"},options:{visibleFiles:["/index.html","/styles.css","script.js"]},template:"static",option:{resizablePanels:!0}})})})})};export{h as default};
