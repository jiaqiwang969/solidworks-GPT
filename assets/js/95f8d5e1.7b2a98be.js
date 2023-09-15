"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[14138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),p=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,m=d["".concat(a,".").concat(u)]||d[u]||k[u]||s;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=u;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<s;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const s={title:"Managing system options (application level) using SOLIDWORKS API",caption:"Application Options",description:"Collection of articles and examples which demonstrate how to control application (system) options (user preferences) using SOLIDWORKS API",labels:["document","preferences","options"]},i=void 0,l={unversionedId:"codestack/solidworks-api/options/application/index",id:"codestack/solidworks-api/options/application/index",title:"Managing system options (application level) using SOLIDWORKS API",description:"Collection of articles and examples which demonstrate how to control application (system) options (user preferences) using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/options/application/index.md",sourceDirName:"codestack/solidworks-api/options/application",slug:"/codestack/solidworks-api/options/application/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/options/application/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/options/application/index.md",tags:[],version:"current",frontMatter:{title:"Managing system options (application level) using SOLIDWORKS API",caption:"Application Options",description:"Collection of articles and examples which demonstrate how to control application (system) options (user preferences) using SOLIDWORKS API",labels:["document","preferences","options"]},sidebar:"tutorialSidebar",previous:{title:"Managing System Options And User Preferences using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/options/"},next:{title:"Change system page setup options in SOLIDWORKS using API in macro",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/options/application/system-page-setup/"}},a={},p=[],c={toc:p},d="wrapper";function k(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"System or application level options are settings available in the options dialog of SOLIDWORKS. Those values can be controlled with following SOLIDWORKS API:"),(0,n.kt)("p",null,"For extracting the values of current options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.ISldWorks~GetUserPreferenceDoubleValue.html"},"ISldWorks::GetUserPreferenceDoubleValue"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.ISldWorks~GetUserPreferenceIntegerValue.html"},"ISldWorks::GetUserPreferenceIntegerValue")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.ISldWorks~GetUserPreferenceStringValue.html"},"ISldWorks::GetUserPreferenceStringValue"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.ISldWorks~GetUserPreferenceToggle.html"},"ISldWorks::GetUserPreferenceToggle")))),(0,n.kt)("p",null,"For changing the options values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.ISldWorks~SetUserPreferenceDoubleValue.html"},"ISldWorks::SetUserPreferenceDoubleValue"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.ISldWorks~SetUserPreferenceIntegerValue.html"},"ISldWorks::SetUserPreferenceIntegerValue")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.ISldWorks~SetUserPreferenceStringValue.html"},"ISldWorks::SetUserPreferenceStringValue"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.ISldWorks~SetUserPreferenceToggle.html"},"ISldWorks::SetUserPreferenceToggle")))),(0,n.kt)("p",null,"This section contains macros and code examples for managing (reading, writing, copying) of various application level system options using SOLIDWORKS API."))}k.isMDXComponent=!0}}]);