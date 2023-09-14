"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[22821],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>f});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function s(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?s(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},p=function(e){var o=l(e.components);return n.createElement(c.Provider,{value:o},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||s;return t?n.createElement(f,i(i({ref:o},p),{},{components:t})):n.createElement(f,i({ref:o},p))}));function f(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=u;var a={};for(var c in o)hasOwnProperty.call(o,c)&&(a[c]=o[c]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26539:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const s={title:"Assembly components automation using SOLIDWORKS API",caption:"Components",description:"Collection of articles and code examples for working with components in SOLIDWORKS assembly",labels:["assembly","components"],sidebar_position:1},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/index",title:"Assembly components automation using SOLIDWORKS API",description:"Collection of articles and code examples for working with components in SOLIDWORKS assembly",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Assembly components automation using SOLIDWORKS API",caption:"Components",description:"Collection of articles and code examples for working with components in SOLIDWORKS assembly",labels:["assembly","components"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS API Object Model class hierarchy diagram",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/class-diagram/"},next:{title:"Add components to assembly using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/add/"}},c={},l=[],p={toc:l},d="wrapper";function m(e){let{components:o,...t}=e;return(0,r.kt)(d,(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Component in SOLIDWORKS assembly is an instance of the model documents (",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html"},"IModelDoc2"),") in assembly."),(0,r.kt)("p",null,"Components can be automated via ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IComponent2.html"},"IComponent2")," interface available in SOLIDWORKS API."),(0,r.kt)("p",null,"The main operations on components include, but not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transformation"),(0,r.kt)("li",{parentName:"ul"},"Mating"),(0,r.kt)("li",{parentName:"ul"},"In context editing"),(0,r.kt)("li",{parentName:"ul"},"BOM composition")),(0,r.kt)("p",null,"Pointer to the underlying document of the component can be retrieved via ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2~getmodeldoc2.html"},"IComponent2::GetModelDoc2")," SOLIDWORKS API method. This method returns null for suppressed or lightweight components. Refer the ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/assembly/components/lightweight-get-model-doc/"},"Get Model Doc For Lightweight Component")," for code example demonstrating how to retrieve the pointer to all types of components."),(0,r.kt)("p",null,"Explore this section for code examples and macros of automating assemblies and components."))}m.isMDXComponent=!0}}]);