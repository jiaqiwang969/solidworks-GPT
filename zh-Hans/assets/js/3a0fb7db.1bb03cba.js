"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[90983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84987:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},s=void 0,i={unversionedId:"codestack/solidworks-api/data-storage/custom-properties/write-summary-information/index",id:"codestack/solidworks-api/data-storage/custom-properties/write-summary-information/index",title:"index",description:"\u6982\u8ff0",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/data-storage/custom-properties/write-summary-information/index.md",sourceDirName:"codestack/solidworks-api/data-storage/custom-properties/write-summary-information",slug:"/codestack/solidworks-api/data-storage/custom-properties/write-summary-information/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/custom-properties/write-summary-information/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/data-storage/custom-properties/write-summary-information/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u81ea\u5b9a\u4e49\u5c5e\u6027\u5199\u5165\u6587\u4ef6\u3001\u914d\u7f6e\u548c\u5207\u5272\u6e05\u5355",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/custom-properties/write-all-properties/"},next:{title:"\u4f7f\u7528 SOLIDWORKS API \u5728\u7b2c\u4e09\u65b9\u5b58\u50a8\u4e2d\u4fdd\u5b58\u6570\u636e",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/third-party/"}},l={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u4f7f\u7528SOLIDWORKS API\u586b\u5145\u6d3b\u52a8\u6a21\u578b\u7684",(0,o.kt)("em",{parentName:"p"},"\u6458\u8981\u4fe1\u606f"),"\u6807\u7b7e\uff08\u4f5c\u8005\u3001\u5173\u952e\u5b57\u3001\u6ce8\u91ca\u3001\u6807\u9898\u548c\u4e3b\u9898\uff09\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u3002"),(0,o.kt)("h2",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u5b8f\u5e76\u6307\u5b9a\u8981\u5199\u5165\u7684\u503c\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const AUTHOR As String = "CodeStack"\nConst KEYWORDS As String = "sample,summary,api"\nConst COMMENTS As String = "Example comments"\nConst TITLE As String = "Summary API Example"\nConst SUBJECT As String = "CodeStack API Examples"\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5c06\u4ee5\u4e0b\u4ee3\u7801\u6dfb\u52a0\u5230\u5b8f\u4e2d\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        swModel.SummaryInfo(swSummInfoField_e.swSumInfoAuthor) = AUTHOR\n        swModel.SummaryInfo(swSummInfoField_e.swSumInfoKeywords) = KEYWORDS\n        swModel.SummaryInfo(swSummInfoField_e.swSumInfoComment) = COMMENTS\n        swModel.SummaryInfo(swSummInfoField_e.swSumInfoTitle) = TITLE\n        swModel.SummaryInfo(swSummInfoField_e.swSumInfoSubject) = SUBJECT\n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n')),(0,o.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,o.kt)("p",null,"\u901a\u8fc7\u8fd0\u884c\u6b64\u5b8f\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528SOLIDWORKS API\u5c06\u6458\u8981\u4fe1\u606f\u5199\u5165\u6d3b\u52a8\u6a21\u578b\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e2d\u3002"))}d.isMDXComponent=!0}}]);