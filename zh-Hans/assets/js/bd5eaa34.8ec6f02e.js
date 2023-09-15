"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[49206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>w});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,w=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(w,c(c({ref:t},d),{},{components:r})):n.createElement(w,c({ref:t},d))}));function w(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},c=void 0,i={unversionedId:"codestack/solidworks-document-manager-api/document/index",id:"codestack/solidworks-document-manager-api/document/index",title:"index",description:"ISwDMDocument SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u63a5\u53e3\u8868\u793aSOLIDWORKS\u6587\u4ef6\uff08\u96f6\u4ef6\u3001\u88c5\u914d\u548c\u7ed8\u56fe\uff09\u7684\u6d41\u3002\u6587\u6863\u53ef\u4ee5\u4ee5\u53ea\u8bfb\u8bbf\u95ee\u6216\u5199\u8bbf\u95ee\u7684\u65b9\u5f0f\u6253\u5f00\u3002\u6b64\u9009\u9879\u7531ISwDMApplication::GetDocument\u65b9\u6cd5\u7684allowReadOnly\u53c2\u6570\u63a7\u5236\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-document-manager-api/document/index.md",sourceDirName:"codestack/solidworks-document-manager-api/document",slug:"/codestack/solidworks-document-manager-api/document/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-document-manager-api/document/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 SOLIDWORKS Document Manager API \u4ece\u6d3b\u52a8\u914d\u7f6e\u4e2d\u63d0\u53d6 PNG \u9884\u89c8\u56fe\u50cf",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/get-preview/"},next:{title:"\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u66ff\u6362\u7ec4\u4ef6\u6216\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u5f15\u7528",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/replace-references/"}},s={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/swdocmgrapi/SolidWorks.Interop.swdocumentmgr~SolidWorks.Interop.swdocumentmgr.ISwDMDocument.html"},"ISwDMDocument")," SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u63a5\u53e3\u8868\u793aSOLIDWORKS\u6587\u4ef6\uff08\u96f6\u4ef6\u3001\u88c5\u914d\u548c\u7ed8\u56fe\uff09\u7684\u6d41\u3002\u6587\u6863\u53ef\u4ee5\u4ee5\u53ea\u8bfb\u8bbf\u95ee\u6216\u5199\u8bbf\u95ee\u7684\u65b9\u5f0f\u6253\u5f00\u3002\u6b64\u9009\u9879\u7531",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/swdocmgrapi/solidworks.interop.swdocumentmgr~solidworks.interop.swdocumentmgr.iswdmapplication~getdocument.html"},"ISwDMApplication::GetDocument"),"\u65b9\u6cd5\u7684",(0,o.kt)("strong",{parentName:"p"},"allowReadOnly"),"\u53c2\u6570\u63a7\u5236\u3002"),(0,o.kt)("p",null,"\u5f53\u4ee5\u53ea\u8bfb\u65b9\u5f0f\u6253\u5f00\u6587\u6863\u65f6\uff0c\u4efb\u4f55\u4fee\u6539\u90fd\u4e0d\u4f1a\u88ab\u4fdd\u5b58\u3002"))}u.isMDXComponent=!0}}]);