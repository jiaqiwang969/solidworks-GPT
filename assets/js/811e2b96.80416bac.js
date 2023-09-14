"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[99080],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(f,n(n({ref:t},u),{},{components:r})):a.createElement(f,n({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,n[1]=s;for(var l=2;l<i;l++)n[l]=r[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const i={title:"Utilizing Macro Features in SOLIDWORKS API",caption:"Macro Feature",description:"Explanation and examples of using macro feature (custom feature) using SOLIDWORKS API",sidebar_position:14},n=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/index",title:"Utilizing Macro Features in SOLIDWORKS API",description:"Explanation and examples of using macro feature (custom feature) using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/index.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Utilizing Macro Features in SOLIDWORKS API",caption:"Macro Feature",description:"Explanation and examples of using macro feature (custom feature) using SOLIDWORKS API",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Get corresponding entities (faces, edges and vertices) in the derived part using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tracking-objects/tracking-ids/derived-part-get-corresponding-entity/"},next:{title:"Macro feature which adds watermark into SOLIDWORKS model",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/add-watermark/"}},c={},l=[{value:"Types Of Macro Feature",id:"types-of-macro-feature",level:2},{value:"Macro based macro feature",id:"macro-based-macro-feature",level:3},{value:"Benefits",id:"benefits",level:4},{value:"Limitations",id:"limitations",level:4},{value:"COM based macro feature",id:"com-based-macro-feature",level:3},{value:"Benefits",id:"benefits-1",level:4},{value:"Limitations",id:"limitations-1",level:4},{value:"Functionality",id:"functionality",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"{% youtube { id: tE_OVE9YTMs } %}"),(0,o.kt)("p",null,"Macro feature is a type of feature which can be configured via SOLIDWORKS API and can provides same level of functionality as any native SOLIDWORKS feature."),(0,o.kt)("p",null,"Macro feature is inserted into the Feature Manager Tree and can be moved, deleted, suppressed or edited."),(0,o.kt)("p",null,"Macro feature can be inserted via ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2014/English/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IFeatureManager~InsertMacroFeature3.html"},"IFeatureManager::InsertMacroFeature3")," method."),(0,o.kt)("p",null,"Macro feature definition is defined in ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2014/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMacroFeatureData.html"},"IMacroFeatureData")," SOLIDWORKS API interface"),(0,o.kt)("h2",{id:"types-of-macro-feature"},"Types Of Macro Feature"),(0,o.kt)("p",null,"There are 2 main types of macro features: macro based and COM based. Both of this options provide the same level of functionality and only diff by supported programming language and the way they deployed and maintained."),(0,o.kt)("h3",{id:"macro-based-macro-feature"},"Macro based macro feature"),(0,o.kt)("p",null,"This macro feature can only be created from VBA macros."),(0,o.kt)("h4",{id:"benefits"},"Benefits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Macro can be fully embedded into the model which allows for feature to operate on any machine without the need of running any macros or installing any add-ins."),(0,o.kt)("li",{parentName:"ul"},"Macro feature can be fully defined within the macro module so no need for any additional software to be registered")),(0,o.kt)("h4",{id:"limitations"},"Limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Maintainability. Embedded macros source code cannot be updated unless feature is deleted. However this option can be disabled so the code is centralized")),(0,o.kt)("h3",{id:"com-based-macro-feature"},"COM based macro feature"),(0,o.kt)("p",null,"This macro feature can be created via COM-compatible language (C++, C#, VB.NET) by registering the COM server which is responsible for handling the macro feature functionality."),(0,o.kt)("h4",{id:"benefits-1"},"Benefits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Centralized source code in the COM object. Simple maintenance and update")),(0,o.kt)("h4",{id:"limitations-1"},"Limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Requires the registration of the COM object on all workstations which utilizing macro feature.")),(0,o.kt)("h2",{id:"functionality"},"Functionality"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Execution of custom code on feature rebuild",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On demand rebuild (ctrl+Q or ctrl+B)"),(0,o.kt)("li",{parentName:"ul"},"Automatic rebuild"))),(0,o.kt)("li",{parentName:"ul"},"Generation or modification of solid and surface bodies including the patterns"),(0,o.kt)("li",{parentName:"ul"},"Adding dimensions"),(0,o.kt)("li",{parentName:"ul"},"Storing the custom parameters within the macro feature definition"),(0,o.kt)("li",{parentName:"ul"},"Relationship with another entities"),(0,o.kt)("li",{parentName:"ul"},"Support of in-context editing in assemblies"),(0,o.kt)("li",{parentName:"ul"},"Support of modifications editing"),(0,o.kt)("li",{parentName:"ul"},"Support of custom errors")))}p.isMDXComponent=!0}}]);