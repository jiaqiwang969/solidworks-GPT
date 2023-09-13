"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[24682],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=c(o),u=n,m=g["".concat(l,".").concat(u)]||g[u]||p[u]||s;return o?r.createElement(m,a(a({ref:t},d),{},{components:o})):r.createElement(m,a({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[g]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<s;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},64702:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const s={title:"Logging capabilities in SwEx framework for SOLIDWORKS add-ins",caption:"Logging",description:"Logging debug messages from SwEx modules",labels:["logging"],"toc-group-name":"labs-solidworks-swex"},a=void 0,i={unversionedId:"codestack/labs/solidworks/swex/troubleshooting/logging/index",id:"codestack/labs/solidworks/swex/troubleshooting/logging/index",title:"Logging capabilities in SwEx framework for SOLIDWORKS add-ins",description:"Logging debug messages from SwEx modules",source:"@site/docs/codestack/labs/solidworks/swex/troubleshooting/logging/index.md",sourceDirName:"codestack/labs/solidworks/swex/troubleshooting/logging",slug:"/codestack/labs/solidworks/swex/troubleshooting/logging/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/troubleshooting/logging/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/troubleshooting/logging/index.md",tags:[],version:"current",frontMatter:{title:"Logging capabilities in SwEx framework for SOLIDWORKS add-ins",caption:"Logging",description:"Logging debug messages from SwEx modules",labels:["logging"],"toc-group-name":"labs-solidworks-swex"},sidebar:"tutorialSidebar",previous:{title:"Troubleshoot SOLIDWORKS add-in developed with SwEx framework",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/troubleshooting/"},next:{title:"SOLIDWORKS API Code Examples for Macros and Add-ins",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/"}},l={},c=[],d={toc:c},g="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(g,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"All base SwEx modules inherit the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/common/html/T_CodeStack_SwEx_Common_Base_IModule.htm"},"IModule")," interface which provides an access to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/common/html/T_CodeStack_SwEx_Common_Diagnostics_ILogger.htm"},"ILogger")," instance allowing to log custom messages and exception from the module."),(0,n.kt)("p",null,"The following modules provide logger:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_SwAddInEx.htm"},"SwAddInEx")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_MacroFeatureEx.htm"},"MacroFeatureEx")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_PropertyManagerPageEx_2.htm"},"PropertyManagerPageEx"))),(0,n.kt)("p",null,"Additional options can be specified by decorating the module class via ",(0,n.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/common/html/M_CodeStack_SwEx_Common_Attributes_LoggerOptionsAttribute__ctor.htm"},"LoggerOptionsAttribute")),(0,n.kt)("p",null,"{% code-snippet { file-name: LogAddIn.* } %}"),(0,n.kt)("p",null,"Specified logger name will be appended to the SwEx module name (e.g. SwEx.AddIn.MyAddInLog or SwEx.MacroFeature.MyAddInLog or SwEx.PMPage.MyAddInLog)."),(0,n.kt)("p",null,"Log messages are output into the output as setup via ",(0,n.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/common/html/M_CodeStack_SwEx_Common_Attributes_LoggerOptionsAttribute__ctor.htm"},"LoggerOptionsAttribute")," attribute. Currently only debug trace logger is supported. Refer ",(0,n.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/swex/troubleshooting/"},"Troubleshooting")," article for the instructions of how to capture debug trace messages."))}p.isMDXComponent=!0}}]);