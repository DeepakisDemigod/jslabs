function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Template-BdBSAufX.js","assets/index-BCmkGch-.js","assets/index-BMEYDa91.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a,_ as c,r as t,j as e}from"./index-BCmkGch-.js";import{_ as l}from"./HashLoader-BIAjveVz.js";const n=a.lazy(()=>c(()=>import("./Template-BdBSAufX.js"),__vite__mapDeps([0,1,2]))),m=o=>{const[r,i]=t.useState(!0);return t.useEffect(()=>{const s=setInterval(()=>{i(!1),clearInterval(s)},3500);return()=>clearInterval(s)},[]),e.jsx(e.Fragment,{children:r?e.jsxs("div",{className:"h-[87vh] flex flex-col items-center justify-center gap-4",children:[e.jsx(l,{color:"#2563eb"}),e.jsx("span",{children:"Brewing Console..."})]}):e.jsx("div",{className:"m-2 font-dm",children:e.jsx(a.Suspense,{fallback:e.jsxs("div",{className:"h-[87vh] flex flex-col items-center justify-center gap-4 ",children:[e.jsx(l,{color:"#2563eb"}),e.jsx("span",{children:"Almost Ready..."})]}),children:e.jsx(n,{files:{"/index.html":`<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>JavaLabs</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <p>JavaLabs</p>
    <script src="script.js"><\/script>
    </body>
  </html>`,"script.js":"console.log('hello world')"},options:{visibleFiles:["/index.html","/styles.css","script.js"]},template:"static"})})})})};export{m as default};
