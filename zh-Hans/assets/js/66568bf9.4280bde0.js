"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[24498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=i.createContext({}),l=function(e){var t=i.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||n;return r?i.createElement(m,s(s({ref:t},p),{},{components:r})):i.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<n;l++)s[l]=r[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var i=r(87462),o=(r(67294),r(3905));const n={title:"How to utilize SOLIDWORKS API methods within the scripts",caption:"Scripts",description:"Article provides examples of calling SOLIDWORKS APIs from different scripts, including vbScript, PowerShell, JavaScript",labels:["Script","html","JavaScript","PowerShell","cmd"],sidebar_position:5},s=void 0,c={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/index",title:"How to utilize SOLIDWORKS API methods within the scripts",description:"Article provides examples of calling SOLIDWORKS APIs from different scripts, including vbScript, PowerShell, JavaScript",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How to utilize SOLIDWORKS API methods within the scripts",caption:"Scripts",description:"Article provides examples of calling SOLIDWORKS APIs from different scripts, including vbScript, PowerShell, JavaScript",labels:["Script","html","JavaScript","PowerShell","cmd"],sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Starting SOLIDWORKS application in background (hidden)",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background/"},next:{title:"Utilizing SOLIDWORKS API methods in Java Script",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/java-script/"}},a={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section provides examples and explains the ways of calling SOLIDWORKS APIs from different scripts, including vbScript, PowerShell, JavaScript"),(0,o.kt)("p",null,"{% youtube { id: 9akSYcyjQQc } %}"),(0,o.kt)("p",null,"Main benefits of using scripts in SOLIDWORKS automation is an simplified deployment and maintenance process. Scripts are open source and do not required special IDE and can be easily integrated into the automation workflow."),(0,o.kt)("p",null,"Scripts usually accepts parameters which enables an interactive way of automation."),(0,o.kt)("p",null,"Scripts can utilize the special 'automation' version of SOLIDWORKS dedicated for the OLE automation. This means that SOLIDWORKS can be launched lightweight in the background which greatly improves the performance of the process."))}u.isMDXComponent=!0}}]);