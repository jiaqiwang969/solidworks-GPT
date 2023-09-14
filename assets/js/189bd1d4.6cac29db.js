"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[42110],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(o),k=n,f=p["".concat(i,".").concat(k)]||p[k]||u[k]||a;return o?r.createElement(f,s(s({ref:t},d),{},{components:o})):r.createElement(f,s({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,s[1]=c;for(var l=2;l<a;l++)s[l]=o[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}k.displayName="MDXCreateElement"},93943:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const a={title:"Stock Master - SOLIDWORKS add-in for managing geometry stocks",caption:"Stock Master",description:"SOLIDWORKS add-in to generate round stock feature around the input solid body",image:"round-stock-icon.png",categories:"sw-labs",group:"Geometry","toc-group-name":"labs-solidworks-stock-master",type:"sw-lab"},s=void 0,c={unversionedId:"codestack-clone/labs/solidworks/stock-fit-geometry/index",id:"codestack-clone/labs/solidworks/stock-fit-geometry/index",title:"Stock Master - SOLIDWORKS add-in for managing geometry stocks",description:"SOLIDWORKS add-in to generate round stock feature around the input solid body",source:"@site/docs/codestack-clone/labs/solidworks/stock-fit-geometry/index.md",sourceDirName:"codestack-clone/labs/solidworks/stock-fit-geometry",slug:"/codestack-clone/labs/solidworks/stock-fit-geometry/",permalink:"/solidworks-GPT/docs/codestack-clone/labs/solidworks/stock-fit-geometry/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/labs/solidworks/stock-fit-geometry/index.md",tags:[],version:"current",frontMatter:{title:"Stock Master - SOLIDWORKS add-in for managing geometry stocks",caption:"Stock Master",description:"SOLIDWORKS add-in to generate round stock feature around the input solid body",image:"round-stock-icon.png",categories:"sw-labs",group:"Geometry","toc-group-name":"labs-solidworks-stock-master",type:"sw-lab"},sidebar:"tutorialSidebar",previous:{title:"Sketch++ - SOLIDWORKS add-in which enables advanced sketch functionality",permalink:"/solidworks-GPT/docs/codestack-clone/labs/solidworks/sketch-plus-plus/"},next:{title:"Installation Guide for Stock Master add-ins for SOLIDWORKS",permalink:"/solidworks-GPT/docs/codestack-clone/labs/solidworks/stock-fit-geometry/installation/"}},i={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Property page for Round Stock feature",src:o(11966).Z,width:"307",height:"574"}),"{ width=350 }"),(0,n.kt)("p",null,"This add-in allows generating round stock feature around the selected solid body."),(0,n.kt)("p",null,"User can select either circular face or plane to specify the direction of the stock."),(0,n.kt)("p",null,"If circular face is selected than its axis is used as direction. It is also possible to specify the option to make the round stock concentric to the selected circular face."),(0,n.kt)("p",null,"Feature can optionally generate the body to represent the round stock."),(0,n.kt)("p",null,"Feature is fully parametric and will update automatically once the reference geometry is changed."),(0,n.kt)("p",null,"Feature writes the values to the configuration specific custom properties."),(0,n.kt)("p",null,"Add-in can be downloaded from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/stock-fit-geometry/releases/tag/beta1"},"this link v. 0.5.0 (beta 1)"),"."),(0,n.kt)("p",null,"Source code is available at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/stock-fit-geometry"},"GitHub")))}u.isMDXComponent=!0},11966:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/round-stock-feature-property-page-e7430e97d12cb96785a9fd120daba557.png"}}]);