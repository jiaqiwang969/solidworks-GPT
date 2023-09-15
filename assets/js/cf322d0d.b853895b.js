"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[88920],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>g});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var a=o.createContext({}),p=function(t){var e=o.useContext(a),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},l=function(t){var e=p(t.components);return o.createElement(a.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},b=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,a=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),u=p(r),b=n,g=u["".concat(a,".").concat(b)]||u[b]||d[b]||i;return r?o.createElement(g,s(s({ref:e},l),{},{components:r})):o.createElement(g,s({ref:e},l))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,s=new Array(i);s[0]=b;var c={};for(var a in e)hasOwnProperty.call(e,a)&&(c[a]=e[a]);c.originalType=t,c[u]="string"==typeof t?t:n,s[1]=c;for(var p=2;p<i;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},38374:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={title:"Automation of SOLIDWORKS using SOLIDWORKS API in vbScript",caption:"vbScript",description:"Introduction to automation of SOLIDWORKS using API with vbScript"},s=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/vbscript/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/vbscript/index",title:"Automation of SOLIDWORKS using SOLIDWORKS API in vbScript",description:"Introduction to automation of SOLIDWORKS using API with vbScript",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/vbscript/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/vbscript",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/vbscript/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/vbscript/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/vbscript/index.md",tags:[],version:"current",frontMatter:{title:"Automation of SOLIDWORKS using SOLIDWORKS API in vbScript",caption:"vbScript",description:"Introduction to automation of SOLIDWORKS using API with vbScript"},sidebar:"tutorialSidebar",previous:{title:"Script generates model from input parameters using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/power-shell/model-generator/"},next:{title:"Batch export SOLIDWORKS models via vbScript",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/vbscript/batch-export/"}},a={},p=[],l={toc:p},u="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,o.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"vbScript is a popular scripting language based on Visual Basic. It is lightweight and natively supported by Windows. The code can be edited in any text editor (e.g. Notepad)."),(0,n.kt)("p",null,"Script can be run by executing it directly (i.e. double click) or from command line. Command line option also supports input arguments."),(0,n.kt)("p",null,"vbScript is late bound and doesn't require the explicit declaration of variable type using the ",(0,n.kt)("em",{parentName:"p"},"As")," keyword."),(0,n.kt)("p",null,"vbScript supports creation or connection to COM objects via ::CreateObject and ::GetObject methods which means that it can use SOLIDWORKS API for automation."),(0,n.kt)("p",null,"Use the following line to connect to the instance of SOLIDWORKS"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp\nSet swApp = CreateObject("SldWorks.Application")\n')))}d.isMDXComponent=!0}}]);