"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[54624],{3905:(A,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>c});var z=t(67294);function m(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function M(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(A);e&&(z=z.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,z)}return t}function n(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?M(Object(t),!0).forEach((function(e){m(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function d(A,e){if(null==A)return{};var t,z,m=function(A,e){if(null==A)return{};var t,z,m={},M=Object.keys(A);for(z=0;z<M.length;z++)t=M[z],e.indexOf(t)>=0||(m[t]=A[t]);return m}(A,e);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(A);for(z=0;z<M.length;z++)t=M[z],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(m[t]=A[t])}return m}var r=z.createContext({}),i=function(A){var e=z.useContext(r),t=e;return A&&(t="function"==typeof A?A(e):n(n({},e),A)),t},l=function(A){var e=i(A.components);return z.createElement(r.Provider,{value:e},A.children)},s="mdxType",Z={inlineCode:"code",wrapper:function(A){var e=A.children;return z.createElement(z.Fragment,{},e)}},o=z.forwardRef((function(A,e){var t=A.components,m=A.mdxType,M=A.originalType,r=A.parentName,l=d(A,["components","mdxType","originalType","parentName"]),s=i(t),o=m,c=s["".concat(r,".").concat(o)]||s[o]||Z[o]||M;return t?z.createElement(c,n(n({ref:e},l),{},{components:t})):z.createElement(c,n({ref:e},l))}));function c(A,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof A||m){var M=t.length,n=new Array(M);n[0]=o;var d={};for(var r in e)hasOwnProperty.call(e,r)&&(d[r]=e[r]);d.originalType=A,d[s]="string"==typeof A?A:m,n[1]=d;for(var i=2;i<M;i++)n[i]=t[i];return z.createElement.apply(null,n)}return z.createElement.apply(null,t)}o.displayName="MDXCreateElement"},66118:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>n,default:()=>Z,frontMatter:()=>M,metadata:()=>d,toc:()=>i});var z=t(87462),m=(t(67294),t(3905));const M={title:"Bodies fillet feature in Geometry++",caption:"Bodies Fillet",description:"Feature allows adding the fillet to bodies, faces and edges and supports multi-bodies in SOLIDWORKS model",image:"icon.png","toc-group-name":"labs-solidworks-geometry-plus-plus"},n=void 0,d={unversionedId:"codestack/labs/solidworks/geometry-plus-plus/user-guide/body-fillet/index",id:"codestack/labs/solidworks/geometry-plus-plus/user-guide/body-fillet/index",title:"Bodies fillet feature in Geometry++",description:"Feature allows adding the fillet to bodies, faces and edges and supports multi-bodies in SOLIDWORKS model",source:"@site/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/body-fillet/index.md",sourceDirName:"codestack/labs/solidworks/geometry-plus-plus/user-guide/body-fillet",slug:"/codestack/labs/solidworks/geometry-plus-plus/user-guide/body-fillet/",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/body-fillet/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/body-fillet/index.md",tags:[],version:"current",frontMatter:{title:"Bodies fillet feature in Geometry++",caption:"Bodies Fillet",description:"Feature allows adding the fillet to bodies, faces and edges and supports multi-bodies in SOLIDWORKS model",image:"icon.png","toc-group-name":"labs-solidworks-geometry-plus-plus"},sidebar:"tutorialSidebar",previous:{title:"User Guide: Geometry++ add-in for SOLIDWORKS",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/"},next:{title:"Convert Solid To Surface feature in Geometry++",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/convert-solid-to-surface/"}},r={},i=[{value:"Adding fillet to bodies",id:"adding-fillet-to-bodies",level:2},{value:"Adding fillet to faces",id:"adding-fillet-to-faces",level:2},{value:"Adding fillet to edges",id:"adding-fillet-to-edges",level:2},{value:"Adding fillet to vertices",id:"adding-fillet-to-vertices",level:2}],l={toc:i},s="wrapper";function Z(A){let{components:e,...M}=A;return(0,m.kt)(s,(0,z.Z)({},l,M,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"This commands allows adding the simple fillet to bodies, faces and edges. This command supports multi-bodies which means that single feature can be used to add fillets to different bodies."),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Bodies fillet property manager page",src:t(62668).Z,width:"833",height:"493"}),"{ width=250 }"),(0,m.kt)("h2",{id:"adding-fillet-to-bodies"},"Adding fillet to bodies"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Fillet added to a solid body",src:t(50988).Z,width:"529",height:"443"}),"{ width=250 }"),(0,m.kt)("p",null,"Select the entire body from either from the feature tree or using the selection filter. Fillet will be added to each edge of the body."),(0,m.kt)("h2",{id:"adding-fillet-to-faces"},"Adding fillet to faces"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Fillet added to face",src:t(65642).Z,width:"479",height:"444"}),"{ width=250 }"),(0,m.kt)("p",null,"Select face or faces to add fillet to. Fillet is added to all edges of this face"),(0,m.kt)("h2",{id:"adding-fillet-to-edges"},"Adding fillet to edges"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Fillet added to edge",src:t(15034).Z,width:"370",height:"356"}),"{ width=250 }"),(0,m.kt)("p",null,"Select edge or edges to add fillet to."),(0,m.kt)("h2",{id:"adding-fillet-to-vertices"},"Adding fillet to vertices"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Fillet added to edges of vertex",src:t(85501).Z,width:"572",height:"479"}),"{ width=250 }"),(0,m.kt)("p",null,"Select vertex or vertices to add fillet to. Fillet is added to all connected edges of this vertex."))}Z.isMDXComponent=!0},15034:(A,e,t)=>{t.d(e,{Z:()=>z});const z="data:image/png;base64,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"},65642:(A,e,t)=>{t.d(e,{Z:()=>z});const z="data:image/png;base64,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"},50988:(A,e,t)=>{t.d(e,{Z:()=>z});const z=t.p+"assets/images/full-body-fillet-64373d9cd130b621147e7a1c54d0324a.png"},62668:(A,e,t)=>{t.d(e,{Z:()=>z});const z=t.p+"assets/images/solid-bodies-fillet-cf00fef8e97f2ebef4009856ff4c50b8.png"},85501:(A,e,t)=>{t.d(e,{Z:()=>z});const z="data:image/png;base64,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"}}]);