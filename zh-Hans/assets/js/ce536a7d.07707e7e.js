"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[85263],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89161:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"Utilizing Macro Features in SOLIDWORKS API",caption:"Macro Feature",description:"Explanation and examples of using macro feature (custom feature) using SOLIDWORKS API",order:14},i=void 0,l={unversionedId:"codestack/solidworks-api/document/macro-feature/index",id:"codestack/solidworks-api/document/macro-feature/index",title:"Utilizing Macro Features in SOLIDWORKS API",description:"Explanation and examples of using macro feature (custom feature) using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/macro-feature/index.md",sourceDirName:"codestack/solidworks-api/document/macro-feature",slug:"/codestack/solidworks-api/document/macro-feature/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/macro-feature/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/macro-feature/index.md",tags:[],version:"current",frontMatter:{title:"Utilizing Macro Features in SOLIDWORKS API",caption:"Macro Feature",description:"Explanation and examples of using macro feature (custom feature) using SOLIDWORKS API",order:14},sidebar:"tutorialSidebar",previous:{title:"Handling pre and post close notifications using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/file-close-event/"},next:{title:"Macro feature which adds watermark into SOLIDWORKS model",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/macro-feature/add-watermark/"}},s={},c=[{value:"Types Of Macro Feature",id:"types-of-macro-feature",level:2},{value:"Macro based macro feature",id:"macro-based-macro-feature",level:3},{value:"Benefits",id:"benefits",level:4},{value:"Limitations",id:"limitations",level:4},{value:"COM based macro feature",id:"com-based-macro-feature",level:3},{value:"Benefits",id:"benefits-1",level:4},{value:"Limitations",id:"limitations-1",level:4},{value:"Functionality",id:"functionality",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"{% youtube { id: tE_OVE9YTMs } %}"),(0,n.kt)("p",null,"Macro feature is a type of feature which can be configured via SOLIDWORKS API and can provides same level of functionality as any native SOLIDWORKS feature."),(0,n.kt)("p",null,"Macro feature is inserted into the Feature Manager Tree and can be moved, deleted, suppressed or edited."),(0,n.kt)("p",null,"Macro feature can be inserted via ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2014/English/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IFeatureManager~InsertMacroFeature3.html"},"IFeatureManager::InsertMacroFeature3")," method."),(0,n.kt)("p",null,"Macro feature definition is defined in ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2014/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMacroFeatureData.html"},"IMacroFeatureData")," SOLIDWORKS API interface"),(0,n.kt)("h2",{id:"types-of-macro-feature"},"Types Of Macro Feature"),(0,n.kt)("p",null,"There are 2 main types of macro features: macro based and COM based. Both of this options provide the same level of functionality and only diff by supported programming language and the way they deployed and maintained."),(0,n.kt)("h3",{id:"macro-based-macro-feature"},"Macro based macro feature"),(0,n.kt)("p",null,"This macro feature can only be created from VBA macros."),(0,n.kt)("h4",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Macro can be fully embedded into the model which allows for feature to operate on any machine without the need of running any macros or installing any add-ins."),(0,n.kt)("li",{parentName:"ul"},"Macro feature can be fully defined within the macro module so no need for any additional software to be registered")),(0,n.kt)("h4",{id:"limitations"},"Limitations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Maintainability. Embedded macros source code cannot be updated unless feature is deleted. However this option can be disabled so the code is centralized")),(0,n.kt)("h3",{id:"com-based-macro-feature"},"COM based macro feature"),(0,n.kt)("p",null,"This macro feature can be created via COM-compatible language (C++, C#, VB.NET) by registering the COM server which is responsible for handling the macro feature functionality."),(0,n.kt)("h4",{id:"benefits-1"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Centralized source code in the COM object. Simple maintenance and update")),(0,n.kt)("h4",{id:"limitations-1"},"Limitations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Requires the registration of the COM object on all workstations which utilizing macro feature.")),(0,n.kt)("h2",{id:"functionality"},"Functionality"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Execution of custom code on feature rebuild",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"On demand rebuild (ctrl+Q or ctrl+B)"),(0,n.kt)("li",{parentName:"ul"},"Automatic rebuild"))),(0,n.kt)("li",{parentName:"ul"},"Generation or modification of solid and surface bodies including the patterns"),(0,n.kt)("li",{parentName:"ul"},"Adding dimensions"),(0,n.kt)("li",{parentName:"ul"},"Storing the custom parameters within the macro feature definition"),(0,n.kt)("li",{parentName:"ul"},"Relationship with another entities"),(0,n.kt)("li",{parentName:"ul"},"Support of in-context editing in assemblies"),(0,n.kt)("li",{parentName:"ul"},"Support of modifications editing"),(0,n.kt)("li",{parentName:"ul"},"Support of custom errors")))}p.isMDXComponent=!0}}]);