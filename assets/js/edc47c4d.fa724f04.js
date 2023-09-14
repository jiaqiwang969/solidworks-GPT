"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[15760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(k,s(s({ref:t},d),{},{components:n})):r.createElement(k,s({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"Developing and customizing SOLIDWORKS PDM Tasks",caption:"PDM Tasks",description:"Examples and guidelines for developing new SOLIDWORKS PDM Tasks and customizing built-in tasks",labels:["task","add-in","pdm"],sidebar_position:0},s=void 0,a={unversionedId:"codestack-clone/solidworks-pdm-api/pdm-tasks/index",id:"codestack-clone/solidworks-pdm-api/pdm-tasks/index",title:"Developing and customizing SOLIDWORKS PDM Tasks",description:"Examples and guidelines for developing new SOLIDWORKS PDM Tasks and customizing built-in tasks",source:"@site/docs/codestack-clone/solidworks-pdm-api/pdm-tasks/index.md",sourceDirName:"codestack-clone/solidworks-pdm-api/pdm-tasks",slug:"/codestack-clone/solidworks-pdm-api/pdm-tasks/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-pdm-api/pdm-tasks/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-pdm-api/pdm-tasks/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Developing and customizing SOLIDWORKS PDM Tasks",caption:"PDM Tasks",description:"Examples and guidelines for developing new SOLIDWORKS PDM Tasks and customizing built-in tasks",labels:["task","add-in","pdm"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"pdm tasks",permalink:"/solidworks-GPT/docs/category/pdm-tasks"},next:{title:"Configuring built-in tasks using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-pdm-api/pdm-tasks/built-in-tasks/"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"SOLIDWORKS PDM task is a special type of add-ins which enables additional functionality:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Task can be configured to automatically trigger on a workflow"),(0,i.kt)("li",{parentName:"ul"},"Task can be executed on the dedicated remote machine")),(0,i.kt)("p",null,"Task can be created from scratch using SOLIDWORKS PDM API."),(0,i.kt)("p",null,"There are several built-in tasks available out-of-the-box such as Print and Convert tasks. Script behind those tasks can be customized using SOLIDWORKS PDM API."),(0,i.kt)("p",null,"Examples and tutorials in this section help to explore PDM tasks and provide guidelines for creating new ones or configuring the built-in tasks."))}u.isMDXComponent=!0}}]);