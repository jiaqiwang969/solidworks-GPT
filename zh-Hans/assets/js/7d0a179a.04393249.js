"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[67730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(g,r(r({ref:t},s),{},{components:n})):o.createElement(g,r({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={title:"Utilizing main ISwDMApplication application object in SOLIDWORKS Document Manager API",caption:"Application",description:"Explanation and examples of top level object in Document Manager API ISwDMApplication"},r=void 0,c={unversionedId:"codestack/solidworks-document-manager-api/application/index",id:"codestack/solidworks-document-manager-api/application/index",title:"Utilizing main ISwDMApplication application object in SOLIDWORKS Document Manager API",description:"Explanation and examples of top level object in Document Manager API ISwDMApplication",source:"@site/docs/codestack/solidworks-document-manager-api/application/index.md",sourceDirName:"codestack/solidworks-document-manager-api/application",slug:"/codestack/solidworks-document-manager-api/application/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/application/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-document-manager-api/application/index.md",tags:[],version:"current",frontMatter:{title:"Utilizing main ISwDMApplication application object in SOLIDWORKS Document Manager API",caption:"Application",description:"Explanation and examples of top level object in Document Manager API ISwDMApplication"},sidebar:"tutorialSidebar",previous:{title:"Copy documents tree using SOLIDWORKS Document Manager API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/application/copy-tree/"},next:{title:"edrawings-api",permalink:"/solidworks-GPT/zh-Hans/docs/category/edrawings-api"}},p={},l=[{value:"Functionality",id:"functionality",level:3}],s={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/swdocmgrapi/solidworks.interop.swdocumentmgr~solidworks.interop.swdocumentmgr.iswdmapplication.html"},"ISwDMApplication")," is a top level object in SOLIDWORKS Document Manager API hierarchy and represents the application itself."),(0,a.kt)("p",null,"Pointer to the object can be accessed via ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/swdocmgrapi/SOLIDWORKS.Interop.swdocumentmgr~SOLIDWORKS.Interop.swdocumentmgr.ISwDMClassFactory~GetApplication.html"},"ISwDMClassFactory::GetApplication")," method."),(0,a.kt)("h3",{id:"functionality"},"Functionality"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Accessing the documents (i.e. opening the document stream)"),(0,a.kt)("li",{parentName:"ul"},"Operations with documents (moving, copying) with an ability to preserver references"),(0,a.kt)("li",{parentName:"ul"},"Creating the data objects (such as search options or external reference options)")))}m.isMDXComponent=!0}}]);