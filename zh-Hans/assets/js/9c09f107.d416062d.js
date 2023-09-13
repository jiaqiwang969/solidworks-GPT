"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[98047],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||s;return r?a.createElement(f,n(n({ref:t},l),{},{components:r})):a.createElement(f,n({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,n[1]=i;for(var p=2;p<s;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},28104:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),o=(r(67294),r(3905));const s={title:"Pass Parameters To SOLIDWORKS VBA Macro",caption:"Pass Parameters To VBA Macro",description:"Workarounds for passing parameters to SOLIDWORKS VBA macro from external applications",labels:["arguments","parameters","interoperability"]},n=void 0,i={unversionedId:"codestack/solidworks-api/getting-started/inter-process-communication/pass-parameters-to-vba-macro/index",id:"codestack/solidworks-api/getting-started/inter-process-communication/pass-parameters-to-vba-macro/index",title:"Pass Parameters To SOLIDWORKS VBA Macro",description:"Workarounds for passing parameters to SOLIDWORKS VBA macro from external applications",source:"@site/docs/codestack/solidworks-api/getting-started/inter-process-communication/pass-parameters-to-vba-macro/index.md",sourceDirName:"codestack/solidworks-api/getting-started/inter-process-communication/pass-parameters-to-vba-macro",slug:"/codestack/solidworks-api/getting-started/inter-process-communication/pass-parameters-to-vba-macro/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/inter-process-communication/pass-parameters-to-vba-macro/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/inter-process-communication/pass-parameters-to-vba-macro/index.md",tags:[],version:"current",frontMatter:{title:"Pass Parameters To SOLIDWORKS VBA Macro",caption:"Pass Parameters To VBA Macro",description:"Workarounds for passing parameters to SOLIDWORKS VBA macro from external applications",labels:["arguments","parameters","interoperability"]},sidebar:"tutorialSidebar",previous:{title:"Call functions of SOLIDWORKS add-in via Running Objects Table (ROT)",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/via-rot/"},next:{title:"Passing the parameters to SOLIDWORKS VBA Macro via clipboard",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/inter-process-communication/pass-parameters-to-vba-macro/via-clipboard/"}},c={},p=[],l={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SOLIDWORKS VBA macros do not accept custom parameters as an input so it is not possible to pass user argument to ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~runmacro2.html"},"ISldWorks::RunMacro2")," method. This limitation could be the major 'roadblock' for performing the automation of SOLIDWORKS using API."),(0,o.kt)("p",null,"This could be a handy feature in cases where the macro is used as the part of bigger automation where multiple macros need to share the same argument (e.g. output location, time stamp, etc.). Or process is started from the server application or via scheduling software which generates the input which needs to be passed to the macro.  "),(0,o.kt)("p",null,"This section contains the implementation of alternative workarounds to overcome this limitation."),(0,o.kt)("p",null,"Several options of passing parameters to SOLIDWORKS VBA macros are explored and examples are provided."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"via-clipboard"},"Via Clipboard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"via-swb-macro"},"Via SWB Macro"))))}d.isMDXComponent=!0}}]);