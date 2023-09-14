"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[67134],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>k});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=r.createContext({}),p=function(e){var t=r.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),u=n,k=d["".concat(a,".").concat(u)]||d[u]||m[u]||s;return o?r.createElement(k,i(i({ref:t},c),{},{components:o})):r.createElement(k,i({ref:t},c))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=u;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<s;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},8286:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const s={title:"Managing user preferences of the document using SOLIDWORKS API",caption:"Document Options",description:"Collection of articles and examples which demonstrate how to control document options (user preferences) using SOLIDWORKS API",labels:["document","preferences","options"]},i=void 0,l={unversionedId:"codestack/solidworks-api/options/document/index",id:"codestack/solidworks-api/options/document/index",title:"Managing user preferences of the document using SOLIDWORKS API",description:"Collection of articles and examples which demonstrate how to control document options (user preferences) using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/options/document/index.md",sourceDirName:"codestack/solidworks-api/options/document",slug:"/codestack/solidworks-api/options/document/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/options/document/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/options/document/index.md",tags:[],version:"current",frontMatter:{title:"Managing user preferences of the document using SOLIDWORKS API",caption:"Document Options",description:"Collection of articles and examples which demonstrate how to control document options (user preferences) using SOLIDWORKS API",labels:["document","preferences","options"]},sidebar:"tutorialSidebar",previous:{title:"VBA macro to toggle white background in drawings",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/options/application/toggle-drawing-background-white/"},next:{title:"Save SOLIDWORKS drawing with detailing mode on and off",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/options/document/detailing-mode-save-model-data/"}},a={},p=[],c={toc:p},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To manage user preferences (options) of the SOLIDWORKS part, assembly or drawing it is required to use one of the following SOLIDWORKS API:"),(0,n.kt)("p",null,"For reading the options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~GetUserPreferenceDouble.html"},"IModelDocExtension::GetUserPreferenceDouble"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~GetUserPreferenceInteger.html"},"IModelDocExtension::GetUserPreferenceInteger")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~GetUserPreferenceString.html"},"IModelDocExtension::GetUserPreferenceString"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~GetUserPreferenceTextFormat.html"},"IModelDocExtension::GetUserPreferenceTextFormat"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~GetUserPreferenceToggle.html"},"IModelDocExtension::GetUserPreferenceToggle")))),(0,n.kt)("p",null,"For writing the options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~SetUserPreferenceDouble.html"},"IModelDocExtension::SetUserPreferenceDouble"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~SetUserPreferenceInteger.html"},"IModelDocExtension::SetUserPreferenceInteger")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~SetUserPreferenceString.html"},"IModelDocExtension::SetUserPreferenceString"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~SetUserPreferenceTextFormat.html"},"IModelDocExtension::SetUserPreferenceTextFormat"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~SetUserPreferenceToggle.html"},"IModelDocExtension::SetUserPreferenceToggle")))),(0,n.kt)("p",null,"This section contains collection of examples and macros for automating document user preferences using SOLIDWORKS API."))}m.isMDXComponent=!0}}]);