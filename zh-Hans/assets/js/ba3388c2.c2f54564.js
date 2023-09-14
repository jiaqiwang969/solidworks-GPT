"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[35106],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>u});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},d=function(e){var o=l(e.components);return n.createElement(c.Provider,{value:o},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},h=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(t),h=r,u=p["".concat(c,".").concat(h)]||p[h]||m[h]||i;return t?n.createElement(u,s(s({ref:o},d),{},{components:t})):n.createElement(u,s({ref:o},d))}));function u(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=h;var a={};for(var c in o)hasOwnProperty.call(o,c)&&(a[c]=o[c]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},88495:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const i={title:"Naming for methods and properties in SOLIDWORKS API",caption:"Naming Convention",description:"Explanation of the naming convention for methods, properties and interfaces in the SOLIDWORKS API object model (i.e. OpenDoc6 vs OpenDoc5)",image:"obsolete-api-interface.png",labels:["obsolete","version","number"]},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/naming-convention/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/naming-convention/index",title:"Naming for methods and properties in SOLIDWORKS API",description:"Explanation of the naming convention for methods, properties and interfaces in the SOLIDWORKS API object model (i.e. OpenDoc6 vs OpenDoc5)",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/naming-convention/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/naming-convention",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/naming-convention/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/naming-convention/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/naming-convention/index.md",tags:[],version:"current",frontMatter:{title:"Naming for methods and properties in SOLIDWORKS API",caption:"Naming Convention",description:"Explanation of the naming convention for methods, properties and interfaces in the SOLIDWORKS API object model (i.e. OpenDoc6 vs OpenDoc5)",image:"obsolete-api-interface.png",labels:["obsolete","version","number"]},sidebar:"tutorialSidebar",previous:{title:"Difference between SOLIDWORKS API methods with and without I",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/i-api-versions/"},next:{title:"Programming VBA and VSTA macros using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/macros/"}},c={},l=[{value:"Obsolete Methods And Interfaces",id:"obsolete-methods-and-interfaces",level:2}],d={toc:l},p="wrapper";function m(e){let{components:o,...i}=e;return(0,r.kt)(p,(0,n.Z)({},d,i,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SOLIDWORKS API (and SOLIDWORKS) are both backward compatible which means that older versions of APIs are compatible with newer releases of SOLIDWORKS. This means that signatures and behaviors of API methods should not be changed when new version is released. For that purpose SOLIDWORKS introduces the revision system for the methods and interfaces names. Whenever new version of API is available it will be added to the class diagram as ",(0,r.kt)("strong",{parentName:"p"},"MethodName")," ",(0,r.kt)("em",{parentName:"p"},"Last Revision + 1"),". For example ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html"},"ISldWorks::OpenDoc6")," is a newer version of ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc5.html"},"ISldWorks::OpenDoc5")," method. While ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html"},"IModelDoc2")," is a newer (and current) version of ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc.html"},"IModelDoc")," interface."),(0,r.kt)("h2",{id:"obsolete-methods-and-interfaces"},"Obsolete Methods And Interfaces"),(0,r.kt)("p",null,"Although SOLIDWORKS is backward compatible and all the versions of the method should work it is recommended to utilize the newest version compatible with the minimum version of the SOLIDWORKS target program should support."),(0,r.kt)("p",null,"Main reasons for that are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Obsolete methods (or any remarks and descriptions) might not be available in the API Documentation. So it might be required to maintain the previous versions of the API help documentation.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Obsolete IModelDoc API Interface",src:t(4562).Z,width:"347",height:"539"}),"{ width=250 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It is not always known what was the reason for adding the replacement method. This might happened due to certain bug (or behavior) present in the older version of the method which might introduce unknown side effects for your program if this method is used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It might be problematic to request help from support in case of the issues as the first obvious suggestion would be to upgrade methods to new version as older method can be considered as a ",(0,r.kt)("em",{parentName:"p"},"void warranty"),"."))))}m.isMDXComponent=!0},4562:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/obsolete-api-interface-bc55357f8ce34a9be0b78b5a30211459.png"}}]);