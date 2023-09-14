"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[50637],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(g,a(a({ref:n},l),{},{components:t})):r.createElement(g,a({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const i={title:"Automating drawings using SOLIDWORKS API",caption:"Drawing",description:"Automating drawing document with IDrawingDoc interface in SOLIDWORKS API",sidebar_position:2,labels:["drawing"]},a=void 0,s={unversionedId:"codestack-clone/solidworks-api/document/drawing/index",id:"codestack-clone/solidworks-api/document/drawing/index",title:"Automating drawings using SOLIDWORKS API",description:"Automating drawing document with IDrawingDoc interface in SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/document/drawing/index.md",sourceDirName:"codestack-clone/solidworks-api/document/drawing",slug:"/codestack-clone/solidworks-api/document/drawing/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/drawing/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/drawing/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Automating drawings using SOLIDWORKS API",caption:"Drawing",description:"Automating drawing document with IDrawingDoc interface in SOLIDWORKS API",sidebar_position:2,labels:["drawing"]},sidebar:"tutorialSidebar",previous:{title:"Open selected components in the Large Design Review (LDR) mode",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/assembly/open-component-ldr/"},next:{title:"SOLIDWORKS macro to update referenced configuration from BOM tables",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/drawing/bom-tables-update-referenced-configuration/"}},c={},d=[],l={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Drawing is a type of SOLIDWORKS for 2D representation of 3D model. SOLIDWORKS API enables automation of drawing via ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDrawingDoc.html"},"IDrawingDoc"),"."),(0,o.kt)("p",null,"Explore this section for examples of accessing and modifying drawings using SOLIDWORKS API: views insertion, annotation insertion, dimensioning, drawings sheet management and much more."))}u.isMDXComponent=!0}}]);