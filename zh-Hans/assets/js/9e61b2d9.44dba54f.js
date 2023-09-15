"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[37898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),m=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=m(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,g=p["".concat(i,".").concat(u)]||p[u]||d[u]||a;return n?o.createElement(g,s(s({ref:t},l),{},{components:n})):o.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var m=2;m<a;m++)s[m]=n[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var o=n(87462),r=(n(67294),n(3905));const a={title:"\u4f7f\u7528 SOLIDWORKS Document Manager API \u5904\u7406\u88c5\u914d\u6587\u6863",caption:"\u88c5\u914d"},s=void 0,c={unversionedId:"codestack/solidworks-document-manager-api/document/assembly/index",id:"codestack/solidworks-document-manager-api/document/assembly/index",title:"\u4f7f\u7528 SOLIDWORKS Document Manager API \u5904\u7406\u88c5\u914d\u6587\u6863",description:"\u4f7f\u7528 Document Manager API \u5904\u7406\u88c5\u914d\u7684\u793a\u4f8b\u96c6\u5408",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-document-manager-api/document/assembly/index.md",sourceDirName:"codestack/solidworks-document-manager-api/document/assembly",slug:"/codestack/solidworks-document-manager-api/document/assembly/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/assembly/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-document-manager-api/document/assembly/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 SOLIDWORKS Document Manager API \u5904\u7406\u88c5\u914d\u6587\u6863",caption:"\u88c5\u914d"},sidebar:"tutorialSidebar",previous:{title:"document",permalink:"/solidworks-GPT/zh-Hans/docs/category/document-1"},next:{title:"\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u83b7\u53d6\u6240\u6709\u88c5\u914d\u4ef6\u7ec4\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/assembly/get-all-components/"}},i={},m=[{value:"\u4f7f\u7528 Document Manager API \u5904\u7406\u88c5\u914d\u7684\u793a\u4f8b\u96c6\u5408",id:"\u4f7f\u7528-document-manager-api-\u5904\u7406\u88c5\u914d\u7684\u793a\u4f8b\u96c6\u5408",level:2}],l={toc:m},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528-document-manager-api-\u5904\u7406\u88c5\u914d\u7684\u793a\u4f8b\u96c6\u5408"},"\u4f7f\u7528 Document Manager API \u5904\u7406\u88c5\u914d\u7684\u793a\u4f8b\u96c6\u5408"),(0,r.kt)("p",null,"\u4e0e\u5e38\u89c4\u7684 SOLIDWORKS API \u4e0d\u540c\uff0cDocument Manager \u5e76\u6ca1\u6709\u4e3a\u88c5\u914d\u6587\u6863\u63d0\u4f9b\u7279\u5b9a\u7684\u63a5\u53e3\uff0c\u800c\u662f\u5e94\u8be5\u7531 ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/swdocmgrapi/SolidWorks.Interop.swdocumentmgr~SolidWorks.Interop.swdocumentmgr.ISwDMDocument.html"},"ISwDMDocument")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/swdocmgrapi/SolidWorks.Interop.swdocumentmgr~SolidWorks.Interop.swdocumentmgr.ISwDMConfiguration2.html"},"ISwDMConfiguration2")," \u63a5\u53e3\u8fdb\u884c\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u63a5\u53e3\u4e2d\u7684\u4e00\u4e9b\u65b9\u6cd5\u4ec5\u9002\u7528\u4e8e\u88c5\u914d\u6587\u6863\uff0c\u4f8b\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/swdocmgrapi/solidworks.interop.swdocumentmgr~solidworks.interop.swdocumentmgr.iswdmconfiguration2~getcomponents.html"},"ISwDMConfiguration2::GetComponents")," \u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/swdocmgrapi/solidworks.interop.swdocumentmgr~solidworks.interop.swdocumentmgr.iswdmdocument8~getcomponentcount.html"},"ISwDMDocument8::GetComponentCount"),"\u3002"),(0,r.kt)("p",null,"\u5efa\u8bae\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/swdocmgrapi/SolidWorks.Interop.swdocumentmgr~SolidWorks.Interop.swdocumentmgr.ISwDMDocument~FullName.html"},"ISwDMDocument::FullName")," SOLIDWORKS Document Manager API \u83b7\u53d6\u5b8c\u6574\u8def\u5f84\uff0c\u5e76\u5c06\u5176\u6269\u5c55\u540d\u4e0e .sldasm \u8fdb\u884c\u5339\u914d\uff0c\u4ee5\u9a8c\u8bc1\u6587\u6863\u662f\u5426\u4e3a\u88c5\u914d\u3002"),(0,r.kt)("p",null,"\u672c\u8282\u5305\u542b\u4f7f\u7528 Document Manager \u5904\u7406\u88c5\u914d\u6587\u6863\u7684\u793a\u4f8b\u548c\u5b8f\u3002"))}d.isMDXComponent=!0}}]);