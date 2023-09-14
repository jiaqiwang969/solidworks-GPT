"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[54793],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(o),u=n,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return o?r.createElement(g,i(i({ref:t},p),{},{components:o})):r.createElement(g,i({ref:t},p))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},95908:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const a={title:"Managing custom properties for files using SOLIDWORKS Document Manager API",caption:"Custom Properties",description:"Adding, removing, modifying, reading custom properties (visible and invisible) for files using SOLIDWORKS Document Manager API",labels:["custom properties"]},i=void 0,s={unversionedId:"codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/index",id:"codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/index",title:"Managing custom properties for files using SOLIDWORKS Document Manager API",description:"Adding, removing, modifying, reading custom properties (visible and invisible) for files using SOLIDWORKS Document Manager API",source:"@site/docs/codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/index.md",sourceDirName:"codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties",slug:"/codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/index.md",tags:[],version:"current",frontMatter:{title:"Managing custom properties for files using SOLIDWORKS Document Manager API",caption:"Custom Properties",description:"Adding, removing, modifying, reading custom properties (visible and invisible) for files using SOLIDWORKS Document Manager API",labels:["custom properties"]},sidebar:"tutorialSidebar",previous:{title:"Storing and data in model using SOLIDWORKS Document Manager API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-document-manager-api/document/data-storage/"},next:{title:"Add invisible custom property to the model using SOLIDWORKS Document Manager API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/add-invisible-custom-property/"}},c={},l=[],p={toc:l},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"SOLIDWORKS Document Manager API provides a comprehensive set of functions to manage (add, remove, modify and read) custom properties in SOLIDWORKS files."),(0,n.kt)("p",null,"Custom properties can be accessed for the"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"File (general) via ",(0,n.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2018/english/api/swdocmgrapi/SolidWorks.Interop.swdocumentmgr~SolidWorks.Interop.swdocumentmgr.ISwDMDocument.html"},"ISwDMDocument")," interface"),(0,n.kt)("li",{parentName:"ul"},"Configuration via ",(0,n.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2018/english/api/swdocmgrapi/SolidWorks.Interop.swdocumentmgr~SolidWorks.Interop.swdocumentmgr.ISwDMConfiguration.html"},"ISwDMConfiguration")," interface"),(0,n.kt)("li",{parentName:"ul"},"Cut-list items via ",(0,n.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2018/english/api/swdocmgrapi/SolidWorks.Interop.swdocumentmgr~SolidWorks.Interop.swdocumentmgr.ISwDMCutListItem2.html"},"ISwDMCutListItem2")," interface")),(0,n.kt)("p",null,"It is possible to read properties one-by-one or extract the values in a batch."),(0,n.kt)("p",null,"Library allows to extract resolved values and text expressions. It is however not possible to resolve the value and only cached values can be extracted. For example if configuration specific property contains an expression which evaluates the mass of the model and the configuration was never activated, Document Manager won't be able to extract the calculated value until the model is opened and saved and configuration is activated and rebuilt."),(0,n.kt)("p",null,"Document manager additionally enables to manage invisible properties which are not present in the ",(0,n.kt)("em",{parentName:"p"},"Custom Properties")," dialog and can only be read and written via Document Manager API."),(0,n.kt)("p",null,"Explore the articles in this section for more information and code examples."))}m.isMDXComponent=!0}}]);