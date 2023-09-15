"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[10423],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>u});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},d=function(e){var o=c(e.components);return n.createElement(l.Provider,{value:o},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},h=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(t),h=r,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return t?n.createElement(u,s(s({ref:o},d),{},{components:t})):n.createElement(u,s({ref:o},d))}));function u(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=h;var a={};for(var l in o)hasOwnProperty.call(o,l)&&(a[l]=o[l]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7314:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const i={title:"Method and Property Naming in SOLIDWORKS API",image:"obsolete-api-interface.png",labels:["obsolete","version","numbering"]},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/naming-convention/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/naming-convention/index",title:"Method and Property Naming in SOLIDWORKS API",description:"The SOLIDWORKS API (as well as SOLIDWORKS itself) is backward compatible, meaning that the old versions of the API are compatible with newer versions of SOLIDWORKS. This means that when a new version is released, the signature and behavior of API methods should not change. To achieve this, SOLIDWORKS introduced a revision system for method and interface names. Whenever a new version of the API is available, it is added to the class diagram as MethodName Last Revision + 1. For example, ISldWorks::OpenDoc5 method. Similarly, IModelDoc2 is a newer (current) version of the IModelDoc interface.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/naming-convention/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/naming-convention",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/naming-convention/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/naming-convention/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/naming-convention/index.md",tags:[],version:"current",frontMatter:{title:"Method and Property Naming in SOLIDWORKS API",image:"obsolete-api-interface.png",labels:["obsolete","version","numbering"]},sidebar:"tutorialSidebar",previous:{title:'Difference between SOLIDWORKS API Methods with and without "I"',permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/i-api-versions/"},next:{title:"Selecting SOLIDWORKS Objects for API only",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-only-selection/"}},l={},c=[{value:"Obsolete Methods and Interfaces",id:"obsolete-methods-and-interfaces",level:2}],d={toc:c},p="wrapper";function m(e){let{components:o,...i}=e;return(0,r.kt)(p,(0,n.Z)({},d,i,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The SOLIDWORKS API (as well as SOLIDWORKS itself) is backward compatible, meaning that the old versions of the API are compatible with newer versions of SOLIDWORKS. This means that when a new version is released, the signature and behavior of API methods should not change. To achieve this, SOLIDWORKS introduced a revision system for method and interface names. Whenever a new version of the API is available, it is added to the class diagram as ",(0,r.kt)("strong",{parentName:"p"},"MethodName")," ",(0,r.kt)("em",{parentName:"p"},"Last Revision + 1"),". For example, ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html"},"ISldWorks::OpenDoc6")," is a newer version of the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc5.html"},"ISldWorks::OpenDoc5")," method. Similarly, ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html"},"IModelDoc2")," is a newer (current) version of the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc.html"},"IModelDoc")," interface."),(0,r.kt)("h2",{id:"obsolete-methods-and-interfaces"},"Obsolete Methods and Interfaces"),(0,r.kt)("p",null,"While SOLIDWORKS is backward compatible and all versions of methods should be available, it is recommended to use the latest version that is compatible with the minimum version of SOLIDWORKS targeted."),(0,r.kt)("p",null,"The main reasons for doing so are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Obsolete methods (or any remarks and descriptions) may not be available in the API documentation. Therefore, it may be necessary to maintain API help documentation for previous versions.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Obsolete IModelDoc API interface",src:t(98030).Z,width:"347",height:"539"}),"{ width=250 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The reasons for adding alternative methods are not always known. This could be due to some error (or behavior) present in the old version method, and using that method may introduce unknown side effects.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'There may be difficulties in seeking support if issues arise, as the most obvious advice would be to upgrade the method to the new version, as the old method may be considered "out of warranty".'))))}m.isMDXComponent=!0},98030:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/obsolete-api-interface-bc55357f8ce34a9be0b78b5a30211459.png"}}]);