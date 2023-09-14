"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[17668],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>f});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},d=function(e){var o=l(e.components);return n.createElement(c.Provider,{value:o},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?n.createElement(f,s(s({ref:o},d),{},{components:t})):n.createElement(f,s({ref:o},d))}));function f(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in o)hasOwnProperty.call(o,c)&&(a[c]=o[c]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35852:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const i={title:"Working with Notes using SOLIDWORKS API",caption:"Notes",description:"Collection of articles and code examples about automation of SOLIDWORKS notes annotations",sidebar_position:9},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/index",title:"Working with Notes using SOLIDWORKS API",description:"Collection of articles and code examples about automation of SOLIDWORKS notes annotations",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/index.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Working with Notes using SOLIDWORKS API",caption:"Notes",description:"Collection of articles and code examples about automation of SOLIDWORKS notes annotations",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS macro copies data from Excel table into general table",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/write-excel-table-into-general-table/"},next:{title:"Macro to find and delete specific notes in the SOLIDWORKS drawing",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/find-delete/"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:o,...t}=e;return(0,r.kt)(p,(0,n.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.INote.html"},"INote")," interface is a SOLIDWORKS API representation of the note annotation. This interface would work with notes in assembly, part and drawing environments."),(0,r.kt)("p",null,"Pointer to the note can be retrieved via ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iannotation~getspecificannotation.html"},"IAnnotation::GetSpecificAnnotation")," SOLIDWORKS API call."),(0,r.kt)("p",null,"This section contains various macro examples and code snippets for managing notes in SOLIDWORKS using API."))}u.isMDXComponent=!0}}]);