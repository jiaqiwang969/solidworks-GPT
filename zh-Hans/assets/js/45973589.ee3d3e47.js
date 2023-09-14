"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[4718],{3905:(e,A,r)=>{r.d(A,{Zo:()=>l,kt:()=>m});var t=r(67294);function a(e,A,r){return A in e?Object.defineProperty(e,A,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[A]=r,e}function o(e,A){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);A&&(t=t.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var A=1;A<arguments.length;A++){var r=null!=arguments[A]?arguments[A]:{};A%2?o(Object(r),!0).forEach((function(A){a(e,A,r[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(r,A))}))}return e}function n(e,A){if(null==e)return{};var r,t,a=function(e,A){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],A.indexOf(r)>=0||(a[r]=e[r]);return a}(e,A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],A.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),d=function(e){var A=t.useContext(p),r=A;return e&&(r="function"==typeof e?e(A):s(s({},A),e)),r},l=function(e){var A=d(e.components);return t.createElement(p.Provider,{value:A},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var A=e.children;return t.createElement(t.Fragment,{},A)}},i=t.forwardRef((function(e,A){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=n(e,["components","mdxType","originalType","parentName"]),u=d(r),i=a,m=u["".concat(p,".").concat(i)]||u[i]||c[i]||o;return r?t.createElement(m,s(s({ref:A},l),{},{components:r})):t.createElement(m,s({ref:A},l))}));function m(e,A){var r=arguments,a=A&&A.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=i;var n={};for(var p in A)hasOwnProperty.call(A,p)&&(n[p]=A[p]);n.originalType=e,n[u]="string"==typeof e?e:a,s[1]=n;for(var d=2;d<o;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}i.displayName="MDXCreateElement"},75948:(e,A,r)=>{r.r(A),r.d(A,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>n,toc:()=>d});var t=r(87462),a=(r(67294),r(3905));const o={title:"Extrude Surface With Caps feature in Geometry++",caption:"Extrude Surface With Caps",description:"Feature allows extrude sketch or sketch region and add caps at the end preserving the surface body in SOLIDWORKS model",image:"icon.png","toc-group-name":"labs-solidworks-geometry-plus-plus"},s=void 0,n={unversionedId:"codestack/labs/solidworks/geometry-plus-plus/user-guide/extrude-surface-cap/index",id:"codestack/labs/solidworks/geometry-plus-plus/user-guide/extrude-surface-cap/index",title:"Extrude Surface With Caps feature in Geometry++",description:"Feature allows extrude sketch or sketch region and add caps at the end preserving the surface body in SOLIDWORKS model",source:"@site/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/extrude-surface-cap/index.md",sourceDirName:"codestack/labs/solidworks/geometry-plus-plus/user-guide/extrude-surface-cap",slug:"/codestack/labs/solidworks/geometry-plus-plus/user-guide/extrude-surface-cap/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/extrude-surface-cap/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/extrude-surface-cap/index.md",tags:[],version:"current",frontMatter:{title:"Extrude Surface With Caps feature in Geometry++",caption:"Extrude Surface With Caps",description:"Feature allows extrude sketch or sketch region and add caps at the end preserving the surface body in SOLIDWORKS model",image:"icon.png","toc-group-name":"labs-solidworks-geometry-plus-plus"},sidebar:"tutorialSidebar",previous:{title:"Crop Bodies feature in Geometry++",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/crop-bodies/"},next:{title:"Split SOLIDWORKS body by faces using Geometry++",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/"}},p={},d=[],l={toc:d},u="wrapper";function c(e){let{components:A,...o}=e;return(0,a.kt)(u,(0,t.Z)({},l,o,{components:A,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This command allows extruding the sketch or sketch contours to a surface automatically adding the caps at both ends of the extrusion without converting the result to a solid and keeping it as a surface body."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Extrude surface with caps property manager page",src:r(80329).Z,width:"849",height:"425"}),"{ width=250 }"),(0,a.kt)("p",null,"Multiple sketches can be selected within single feature."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Extruded surface with cap feature in the feature manager tree",src:r(16555).Z,width:"926",height:"449"}),"{ width=450 }"),(0,a.kt)("p",null,"Mid plane option allows to extrude the feature in both directions"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Result of mid-plane extrusion",src:r(77364).Z,width:"464",height:"368"}),"{ width=250 }"))}c.isMDXComponent=!0},16555:(e,A,r)=>{r.d(A,{Z:()=>t});const t=r.p+"assets/images/extrude-surface-cap-feature-729110283d9a12884aad27862128c624.png"},80329:(e,A,r)=>{r.d(A,{Z:()=>t});const t=r.p+"assets/images/extrude-surface-with-caps-page-cc6781b64a13394df9fd21bfe9990f09.png"},77364:(e,A,r)=>{r.d(A,{Z:()=>t});const t="data:image/png;base64,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"}}]);