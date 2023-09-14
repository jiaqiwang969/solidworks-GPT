"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[89843],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(f,i(i({ref:n},l),{},{components:t})):o.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const a={title:"Configuring document appearance using SOLIDWORKS API",caption:"Appearance",description:"Collection of examples and articles related to managing of appearance (e.g. color) in the documents using SOLIDWORKS API",sidebar_position:12,labels:["color","appearance","material property"]},i=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/appearance/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/appearance/index",title:"Configuring document appearance using SOLIDWORKS API",description:"Collection of examples and articles related to managing of appearance (e.g. color) in the documents using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/appearance/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/appearance",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/appearance/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/appearance/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/appearance/index.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Configuring document appearance using SOLIDWORKS API",caption:"Appearance",description:"Collection of examples and articles related to managing of appearance (e.g. color) in the documents using SOLIDWORKS API",sidebar_position:12,labels:["color","appearance","material property"]},sidebar:"tutorialSidebar",previous:{title:"Macro to split SOLIDWORKS cut-list bodies into individual configurations",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/cut-lists/split-to-configurations/"},next:{title:"Generate material variants configuration using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/appearance/apply-render-material/"}},s={},p=[],l={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section contains code examples and macros of configuring with various appearance layers (colors, decals, renders) in documents using SOLIDWORKS API."),(0,r.kt)("p",null,"Appearance can be applied on different SOLIDWORKS entities in hierarchy allowing to overwrite the properties from previous layer. The following is a hierarchy of layers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Document"),(0,r.kt)("li",{parentName:"ul"},"Component in assembly"),(0,r.kt)("li",{parentName:"ul"},"Body"),(0,r.kt)("li",{parentName:"ul"},"Feature"),(0,r.kt)("li",{parentName:"ul"},"Face")))}d.isMDXComponent=!0}}]);