"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[31243],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>f});var t=o(67294);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,i=function(e,n){if(null==e)return{};var o,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=t.createContext({}),l=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},d=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},w=t.forwardRef((function(e,n){var o=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(o),w=i,f=p["".concat(c,".").concat(w)]||p[w]||u[w]||a;return o?t.createElement(f,r(r({ref:n},d),{},{components:o})):t.createElement(f,r({ref:n},d))}));function f(e,n){var o=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=w;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=o[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}w.displayName="MDXCreateElement"},47258:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=o(87462),i=(o(67294),o(3905));const a={title:"Developing C++, C#, VB.NET add-ins for SOLIDWORKS using API",caption:"Add-ins",description:"Examples and articles explaining how to work with add-ins in SOLIDWORKS"},r=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/add-ins/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/add-ins/index",title:"Developing C++, C#, VB.NET add-ins for SOLIDWORKS using API",description:"Examples and articles explaining how to work with add-ins in SOLIDWORKS",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/add-ins/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/add-ins",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/add-ins/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/add-ins/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/add-ins/index.md",tags:[],version:"current",frontMatter:{title:"Developing C++, C#, VB.NET add-ins for SOLIDWORKS using API",caption:"Add-ins",description:"Examples and articles explaining how to work with add-ins in SOLIDWORKS"},sidebar:"tutorialSidebar",previous:{title:"Managing system options (application level) using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/"},next:{title:"Macro to load and unload add-in using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/add-ins/load-unload/"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:n,...o}=e;return(0,i.kt)(p,(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Add-ins are in-process extension to SOLIDWORKS which provide the best performance benefits across all application types. Add-ins are COM objects and must implement the ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/swpublishedapi/solidworks.interop.swpublished~solidworks.interop.swpublished.iswaddin.html"},"ISwAddin")," interface in SOLIDWORKS API."),(0,i.kt)("p",null,"Add-ins can be developed with any COM-compatible language: C++, C#, VB.NET, VB6, Managed C++."),(0,i.kt)("p",null,"Add-ins are available under the Tools->Add-Ins dialog in SOLIDWORKS menu and can be optionally enabled or disabled."),(0,i.kt)("p",null,"Most of SOLIDWORKS partner products and some of the products of SOLIDWORKS Standard, Professional and Premium packages are developed as add-in application rather than built-in applications."),(0,i.kt)("p",null,"Add-ins can monitor the full lifecycle of SOLIDWORKS applications and documents. Add-ins have an access to all available SOLIDWORKS API, while macros and stand-alone applications have some limitations as some of the APIs would not be available."))}u.isMDXComponent=!0}}]);