function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/NavbarHeader-D37eb2qm.js","assets/index-B-zR_ZLp.js","assets/index-BMEYDa91.css","assets/NavbarSidebar-bPXjkLC7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a as e,_ as r,j as a}from"./index-B-zR_ZLp.js";const s=e.lazy(()=>r(()=>import("./NavbarHeader-D37eb2qm.js"),__vite__mapDeps([0,1,2])));e.lazy(()=>r(()=>import("./NavbarSidebar-bPXjkLC7.js"),__vite__mapDeps([3,1,2])));const d=()=>a.jsx("div",{children:a.jsxs("div",{className:"drawer",children:[a.jsx("input",{id:"my-drawer-3",type:"checkbox",className:"drawer-toggle"}),a.jsx("div",{className:"drawer-content flex flex-col",children:a.jsx(s,{})}),a.jsxs("div",{className:"drawer-side z-10",children:[a.jsx("label",{htmlFor:"my-drawer-3","aria-label":"close sidebar",className:"drawer-overlay"}),a.jsx("ul",{className:"menu p-4 w-80 min-h-full bg-base-200",children:a.jsx(NavbarSidebar,{})})]})]})});export{d as default};
