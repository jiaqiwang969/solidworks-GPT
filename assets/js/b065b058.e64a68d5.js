"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[35267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(f,n(n({ref:t},p),{},{components:r})):a.createElement(f,n({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,n[1]=s;for(var c=2;c<i;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const i={title:"Working with part materials using SOLIDWORKS API",caption:"Materials",description:"Collection of articles and examples related to materials handling using SOLIDWORKS API",sidebar_position:15},n=void 0,s={unversionedId:"codestack/solidworks-api/document/materials/index",id:"codestack/solidworks-api/document/materials/index",title:"Working with part materials using SOLIDWORKS API",description:"Collection of articles and examples related to materials handling using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/materials/index.md",sourceDirName:"codestack/solidworks-api/document/materials",slug:"/codestack/solidworks-api/document/materials/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/materials/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/materials/index.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Working with part materials using SOLIDWORKS API",caption:"Materials",description:"Collection of articles and examples related to materials handling using SOLIDWORKS API",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Macro feature to automatically run SOLIDWORKS macro on rebuild",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/macro-feature/run-macro-on-rebuild/"},next:{title:"Change apply appearance option in material using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/materials/change-apply-appearance/"}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Material database in SOLIDWORKS is stored within the XML file. SOLIDWORKS API doesn't provide any direct methods of working with materials database (i.e. searching, adding, reading etc.). However as XML is an open format any XML parsing techniques would apply, i.e. using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.xml.xmldocument"},"XmlDocument"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.xml.serialization.xmlserializer"},"XmlSerializer")," etc."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~getmaterialdatabases.html"},"ISldWorks::GetMaterialDatabases")," SOLIDWORKS API method returns the paths to material databases."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ipartdoc~getmaterialpropertyname2.html"},"IPartDoc::GetMaterialPropertyName2")," returns the name of the material and the name of the database this material is stored in."),(0,o.kt)("p",null,"This section contains examples explaining how to work with the materials database in SOLIDWORKS, how to apply and read material information from SOLIDWOKS parts and bodies."))}m.isMDXComponent=!0}}]);