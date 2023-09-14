"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[57240],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var o=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,s=function(e,r){if(null==e)return{};var t,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=o.createContext({}),c=function(e){var r=o.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},u=function(e){var r=c(e.components);return o.createElement(a.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=s,g=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return t?o.createElement(g,n(n({ref:r},u),{},{components:t})):o.createElement(g,n({ref:r},u))}));function g(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var i=t.length,n=new Array(i);n[0]=m;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l[d]="string"==typeof e?e:s,n[1]=l;for(var c=2;c<i;c++)n[c]=t[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34547:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(87462),s=(t(67294),t(3905));const i={title:"Crop Bodies feature in Geometry++",caption:"Crop Bodies",description:"Feature allows trimming surface or solid or multiple surfaces or solids using sketch or sketch contour in SOLIDWORKS part document",image:"icon.png","toc-group-name":"labs-solidworks-geometry-plus-plus","redirect-from":["/labs/solidworks/geometry-plus-plus/user-guide/region-trim-surface/"]},n=void 0,l={unversionedId:"codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/crop-bodies/index",id:"codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/crop-bodies/index",title:"Crop Bodies feature in Geometry++",description:"Feature allows trimming surface or solid or multiple surfaces or solids using sketch or sketch contour in SOLIDWORKS part document",source:"@site/docs/codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/crop-bodies/index.md",sourceDirName:"codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/crop-bodies",slug:"/codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/crop-bodies/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/crop-bodies/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/crop-bodies/index.md",tags:[],version:"current",frontMatter:{title:"Crop Bodies feature in Geometry++",caption:"Crop Bodies",description:"Feature allows trimming surface or solid or multiple surfaces or solids using sketch or sketch contour in SOLIDWORKS part document",image:"icon.png","toc-group-name":"labs-solidworks-geometry-plus-plus","redirect-from":["/labs/solidworks/geometry-plus-plus/user-guide/region-trim-surface/"]},sidebar:"tutorialSidebar",previous:{title:"Convert Solid To Surface feature in Geometry++",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/convert-solid-to-surface/"},next:{title:"Extrude Surface With Caps feature in Geometry++",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/extrude-surface-cap/"}},a={},c=[],u={toc:c},d="wrapper";function p(e){let{components:r,...i}=e;return(0,s.kt)(d,(0,o.Z)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This command allows trimming surface or solid (target bodies) using sketches or sketch regions (trimming tools)."),(0,s.kt)("p",null,"Multiple target bodies and trimming tools are supported."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Select surface or solid body or bodies from the graphics area or from the feature tree. Box selection is supported"),(0,s.kt)("li",{parentName:"ul"},"Select sketches or sketch regions (requires setting of solid works filter) to trim the surface. Tool will keep the surface geometry which resides within the sketch region.\nFeature will trim the surface perpendicular to the corresponding trim tool sketches normals.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Crop bodies property manager page",src:t(41586).Z,width:"895",height:"507"}),"{ width=500 }"),(0,s.kt)("p",null,"Once selection completed and green tick is clicked new feature is added to the feature manager tree."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Original bodies and resulted cropped geometry",src:t(25393).Z,width:"1027",height:"536"}),"{ width=500 }"),(0,s.kt)("p",null,"Original bodies are acquired by new feature. The bodies outside of the region will be removed by macro feature."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Crop bodies feature in the feature manager tree",src:t(41697).Z,width:"311",height:"555"}),"{ width=300 }"),(0,s.kt)("p",null,"Feature can be edited, removed and rollbacked as any other feature."))}p.isMDXComponent=!0},41586:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/crop-bodies-page-4452f133e2a04b344915f354b028773e.png"},41697:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/crop-body-feature-1b91a5b489744e5f1d81eb83b259fd15.png"},25393:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/cropped-bodies-1b67cb6f8ad29d1ed241d888e78ce41d.png"}}]);