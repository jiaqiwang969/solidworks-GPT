"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[93817],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>O});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(o),u=r,O=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return o?n.createElement(O,s(s({ref:t},d),{},{components:o})):n.createElement(O,s({ref:t},d))}));function O(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},96227:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const i={title:"Managing OLE Objects in models using SOLIDWORKS API",caption:"OLE Objects",description:"Collection of macros and examples which demonstrate how to work with different embedded OLE objects (design table, attachment etc.) using SOLIDWORKS API",order:2,labels:["ole","embeding"]},s=void 0,a={unversionedId:"codestack/solidworks-api/adornment/ole-objects/index",id:"codestack/solidworks-api/adornment/ole-objects/index",title:"Managing OLE Objects in models using SOLIDWORKS API",description:"Collection of macros and examples which demonstrate how to work with different embedded OLE objects (design table, attachment etc.) using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/adornment/ole-objects/index.md",sourceDirName:"codestack/solidworks-api/adornment/ole-objects",slug:"/codestack/solidworks-api/adornment/ole-objects/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/adornment/ole-objects/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/adornment/ole-objects/index.md",tags:[],version:"current",frontMatter:{title:"Managing OLE Objects in models using SOLIDWORKS API",caption:"OLE Objects",description:"Collection of macros and examples which demonstrate how to work with different embedded OLE objects (design table, attachment etc.) using SOLIDWORKS API",order:2,labels:["ole","embeding"]},sidebar:"tutorialSidebar",previous:{title:"Create multiple rows callout using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/adornment/callouts/multiple-rows-callout/"},next:{title:"Move design table object using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/adornment/ole-objects/move-design-table/"}},c={},l=[],d={toc:l},p="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Object Linking and Embedding (OLE) is a Microsoft technology allowing to inserted 3rd party application objects into the documents. In SOLIDWORKS OLE objects are used to represent Design Tables, Attachment and any file dropped directly into the Document."),(0,r.kt)("p",null,"Such objects usually can be manipulated directly from the host environment. For example embeded Excel file can be modified without exiting the SOLIDWORKS window."),(0,r.kt)("p",null,"OLE Objects are usually saved with SOLIDWORKS file and can be removed, resized or used directly in the graphics area."),(0,r.kt)("p",null,"SOLIDWORKS API enables the access to OLE objects via ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.ISwOLEObject.html"},"ISwOLEObject")," interface. Objects can be enumerated, created and deleted by using the API methods of ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDocExtension.html"},"IModelDocExtension")," interface."),(0,r.kt)("p",null,"This section contains macros and examples allowing to manipulate OLE objects in documents using the SOLIDWORKS API."))}m.isMDXComponent=!0}}]);