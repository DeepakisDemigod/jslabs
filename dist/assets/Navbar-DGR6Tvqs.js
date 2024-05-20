function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/NavbarHeader-CvEqF4v-.js","assets/index-BkmXx0mF.js","assets/index-D4d2Ro61.css","assets/NavbarSidebar-BmbL2JBZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a as e,_ as r,j as a}from"./index-BkmXx0mF.js";const s=e.lazy(()=>r(()=>import("./NavbarHeader-CvEqF4v-.js"),__vite__mapDeps([0,1,2]))),l=e.lazy(()=>r(()=>import("./NavbarSidebar-BmbL2JBZ.js"),__vite__mapDeps([3,1,2]))),i=()=>a.jsx("div",{children:a.jsxs("div",{className:"drawer",children:[a.jsx("input",{id:"my-drawer-3",type:"checkbox",className:"drawer-toggle"}),a.jsx("div",{className:"drawer-content flex flex-col",children:a.jsx(s,{})}),a.jsxs("div",{className:"drawer-side z-10",children:[a.jsx("label",{htmlFor:"my-drawer-3","aria-label":"close sidebar",className:"drawer-overlay"}),a.jsx("ul",{className:"menu p-4 w-80 min-h-full bg-base-200",children:a.jsx(l,{})})]})]})});export{i as default};
