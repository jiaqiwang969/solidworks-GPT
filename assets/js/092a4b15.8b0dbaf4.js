"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[51054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:i,a[1]=d;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={title:"Developing add-ins using SOLIDWORKS PDM API",caption:"Developing Add-Ins",description:"Instructions and code examples for developing add-ins for SOLIDWORKS PDM",labels:["add-in","pdm"]},a=void 0,d={unversionedId:"codestack-clone/solidworks-pdm-api/getting-started/add-ins/index",id:"codestack-clone/solidworks-pdm-api/getting-started/add-ins/index",title:"Developing add-ins using SOLIDWORKS PDM API",description:"Instructions and code examples for developing add-ins for SOLIDWORKS PDM",source:"@site/docs/codestack-clone/solidworks-pdm-api/getting-started/add-ins/index.md",sourceDirName:"codestack-clone/solidworks-pdm-api/getting-started/add-ins",slug:"/codestack-clone/solidworks-pdm-api/getting-started/add-ins/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-pdm-api/getting-started/add-ins/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-pdm-api/getting-started/add-ins/index.md",tags:[],version:"current",frontMatter:{title:"Developing add-ins using SOLIDWORKS PDM API",caption:"Developing Add-Ins",description:"Instructions and code examples for developing add-ins for SOLIDWORKS PDM",labels:["add-in","pdm"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started: SOLIDWORKS PDM API Development",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-pdm-api/getting-started/"},next:{title:"How to create SOLIDWORKS PDM Professional (EPDM) add-in",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-pdm-api/getting-started/add-ins/create/"}},s={},l=[],c={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Add-ins in SOLIDWORKS PDM are applications which are integrated into the systems. Add-ins are installed into the SOLIDWORKS PDM Administration Console and redistributed among all clients which are connected to the vault."),(0,i.kt)("p",null,"Add-in enables an access to all available SOLIDWORKS API interfaces and methods."),(0,i.kt)("p",null,"In order to create an add-in it is required to implement the ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmaddin5.html"},"IEdmAddIn5")," interface."),(0,i.kt)("p",null,"This section provides guidelines of creating and troubleshooting add-ins using SOLIDWORKS PDM API."))}u.isMDXComponent=!0}}]);