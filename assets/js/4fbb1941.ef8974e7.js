"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[76952],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>k});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(o),m=r,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return o?n.createElement(k,a(a({ref:t},c),{},{components:o})):n.createElement(k,a({ref:t},c))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},73379:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const i={title:"Hooking the notifications in SOLIDWORKS PDM API",caption:"Hooks",description:"Articles and examples explaining how to use event hooks in SOLIDWORKS PDM add-in from API",labels:["hooks","add-in"],sidebar_position:0},a=void 0,s={unversionedId:"codestack/solidworks-pdm-api/hooks/index",id:"codestack/solidworks-pdm-api/hooks/index",title:"Hooking the notifications in SOLIDWORKS PDM API",description:"Articles and examples explaining how to use event hooks in SOLIDWORKS PDM add-in from API",source:"@site/docs/codestack/solidworks-pdm-api/hooks/index.md",sourceDirName:"codestack/solidworks-pdm-api/hooks",slug:"/codestack/solidworks-pdm-api/hooks/",permalink:"/solidworks-GPT/docs/codestack/solidworks-pdm-api/hooks/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-pdm-api/hooks/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Hooking the notifications in SOLIDWORKS PDM API",caption:"Hooks",description:"Articles and examples explaining how to use event hooks in SOLIDWORKS PDM add-in from API",labels:["hooks","add-in"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"hooks",permalink:"/solidworks-GPT/docs/category/hooks"},next:{title:"SOLIDWORKS PDM API example for handling the data card button click",permalink:"/solidworks-GPT/docs/codestack/solidworks-pdm-api/hooks/datacard-button/"}},l={},d=[],c={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SOLIDWORKS PDM raises multiple events during the operation. Those events include but not limited to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check In and Check Out"),(0,r.kt)("li",{parentName:"ul"},"Workflow state change"),(0,r.kt)("li",{parentName:"ul"},"Data card values change"),(0,r.kt)("li",{parentName:"ul"},"File operations: creation, addition, deletion")),(0,r.kt)("p",null,"SOLIDWORKS PDM API provides an access to these hooks via ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmaddin5~oncmd.html"},"IEdmAddIn5::OnCmd")," overload."),(0,r.kt)("p",null,"This section explains the use of hooks and provides various code examples of add-ins which are using hooks with SOLIDWORKS PDM API."))}u.isMDXComponent=!0}}]);