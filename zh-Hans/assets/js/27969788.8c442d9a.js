"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[73237],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={title:"Installation of SOLIDWORKS add-ins, macros and stand-alone",caption:"Deployment",description:"Guides and examples of deploying add-ins, macros and stand-alone applications for SOLIDWORKS",image:"solidworks-application-deployment.png",order:9},i=void 0,s={unversionedId:"codestack/solidworks-api/deployment/index",id:"codestack/solidworks-api/deployment/index",title:"Installation of SOLIDWORKS add-ins, macros and stand-alone",description:"Guides and examples of deploying add-ins, macros and stand-alone applications for SOLIDWORKS",source:"@site/docs/codestack/solidworks-api/deployment/index.md",sourceDirName:"codestack/solidworks-api/deployment",slug:"/codestack/solidworks-api/deployment/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/deployment/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/deployment/index.md",tags:[],version:"current",frontMatter:{title:"Installation of SOLIDWORKS add-ins, macros and stand-alone",caption:"Deployment",description:"Guides and examples of deploying add-ins, macros and stand-alone applications for SOLIDWORKS",image:"solidworks-application-deployment.png",order:9},sidebar:"tutorialSidebar",previous:{title:"Tree structure serialization in model 3rd party storage using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/third-party/tree-structure-serialization/"},next:{title:"Installing the SOLIDWORKS add-in by creating the msi-installer",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/deployment/installer/"}},l={},d=[],p={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deployment of application for SOLIDWORKS",src:n(50516).Z,width:"458",height:"430"}),"{ width=250 }"),(0,r.kt)("p",null,"This section contains guides and examples of deploying add-ins, macros and stand-alone applications for SOLIDWORKS to the user machines."),(0,r.kt)("p",null,"Deployment can be done ",(0,r.kt)("a",{parentName:"p",href:"manual"},"manually"),". In this case all the binaries and registration process needs to done manually or via command line scripts."),(0,r.kt)("p",null,"Deploying via ",(0,r.kt)("a",{parentName:"p",href:"installer"},"msi-installer")," allows better user experience as clients will be guided through the installation process. Furthermore the process of upgrade and uninstall is controlled by the Windows Control panel."))}m.isMDXComponent=!0},50516:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/solidworks-application-deployment-554664b1b98e16959ebb95e4e5f60749.png"}}]);