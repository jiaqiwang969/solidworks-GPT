"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[48682],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var s=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,s,o=function(e,t){if(null==e)return{};var r,s,o={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=s.createContext({}),c=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},y=s.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(r),y=o,f=u["".concat(l,".").concat(y)]||u[y]||p[y]||i;return r?s.createElement(f,n(n({ref:t},d),{},{components:r})):s.createElement(f,n({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=y;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,n[1]=a;for(var c=2;c<i;c++)n[c]=r[c];return s.createElement.apply(null,n)}return s.createElement.apply(null,r)}y.displayName="MDXCreateElement"},45881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(87462),o=(r(67294),r(3905));const i={title:"Split SOLIDWORKS body by faces using Geometry++",caption:"Split Body By Faces",description:"Feature allows splitting solid or surface body(es) by faces creating individual sheet bodies",image:"icon.png","toc-group-name":"labs-solidworks-geometry-plus-plus"},n=void 0,a={unversionedId:"codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/index",id:"codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/index",title:"Split SOLIDWORKS body by faces using Geometry++",description:"Feature allows splitting solid or surface body(es) by faces creating individual sheet bodies",source:"@site/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/index.md",sourceDirName:"codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces",slug:"/codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/index.md",tags:[],version:"current",frontMatter:{title:"Split SOLIDWORKS body by faces using Geometry++",caption:"Split Body By Faces",description:"Feature allows splitting solid or surface body(es) by faces creating individual sheet bodies",image:"icon.png","toc-group-name":"labs-solidworks-geometry-plus-plus"},sidebar:"tutorialSidebar",previous:{title:"Extrude Surface With Caps feature in Geometry++",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/extrude-surface-cap/"},next:{title:"Suspend SOLIDWORKS rebuild operation using Geometry++",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/suspend-rebuild/"}},l={},c=[],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,s.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This feature allows creation of surface (sheet) bodies from all of the faces of the selected solid or surface bodies."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Caption",src:r(74464).Z,width:"989",height:"534"}),"{ width=450 }"),(0,o.kt)("p",null,"All resulting bodies are grouped under single feature and maintain parametric approach. If original geometry changes (including adding or removing of faces) feature is automatically regenerated with new bodies updated."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Caption",src:r(14188).Z,width:"951",height:"666"}),"{ width=450 }"))}p.isMDXComponent=!0},74464:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/split-body-by-faces-property-page-258d913f3373602d30d783e1f1b5a877.png"},14188:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/split-surface-by-faces-result-5e3bdbf42044e660ec8d6268c8692cde.png"}}]);