"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[33485],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>w});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,w=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return t?r.createElement(w,a(a({ref:n},m),{},{components:t})):r.createElement(w,a({ref:n},m))}));function w(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const c={title:"\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u66ff\u6362\u7ec4\u4ef6\u6216\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u5f15\u7528",caption:"\u66ff\u6362\u5f15\u7528"},a=void 0,s={unversionedId:"codestack/solidworks-document-manager-api/document/replace-references/index",id:"codestack/solidworks-document-manager-api/document/replace-references/index",title:"\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u66ff\u6362\u7ec4\u4ef6\u6216\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u5f15\u7528",description:"\u672c\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u5728SOLIDWORKS\u6587\u4ef6\uff08\u88c5\u914d\u4f53\u6216\u7ed8\u56fe\uff09\u4e2d\u66ff\u6362\u5f15\u7528\uff08\u7ec4\u4ef6\u6216\u7ed8\u56fe\u89c6\u56fe\uff09\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-document-manager-api/document/replace-references/index.md",sourceDirName:"codestack/solidworks-document-manager-api/document/replace-references",slug:"/codestack/solidworks-document-manager-api/document/replace-references/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/replace-references/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-document-manager-api/document/replace-references/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u66ff\u6362\u7ec4\u4ef6\u6216\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u5f15\u7528",caption:"\u66ff\u6362\u5f15\u7528"},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/"},next:{title:"application",permalink:"/solidworks-GPT/zh-Hans/docs/category/application-1"}},i={},l=[{value:"labels: document manager, references, replace, components, drawing views",id:"labels-document-manager-references-replace-components-drawing-views",level:2}],m={toc:l},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u5728SOLIDWORKS\u6587\u4ef6\uff08\u88c5\u914d\u4f53\u6216\u7ed8\u56fe\uff09\u4e2d\u66ff\u6362\u5f15\u7528\uff08\u7ec4\u4ef6\u6216\u7ed8\u56fe\u89c6\u56fe\uff09\u3002"),(0,o.kt)("h2",{id:"labels-document-manager-references-replace-components-drawing-views"},"labels: ","[document manager, references, replace, components, drawing views]"),(0,o.kt)("p",null,"\u672c\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u5728SOLIDWORKS\u6587\u4ef6\uff08\u88c5\u914d\u4f53\u6216\u7ed8\u56fe\uff09\u4e2d\u66ff\u6362\u5f15\u7528\uff08\u7ec4\u4ef6\u6216\u7ed8\u56fe\u89c6\u56fe\uff09\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u7236\u6587\u4ef6\uff08\u4f8b\u5982\u88c5\u914d\u4f53\uff09\u7684\u5b8c\u6574\u8def\u5f84"),(0,o.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u8981\u66ff\u6362\u7684\u6587\u6863\u7684\u5b8c\u6574\u8def\u5f84"),(0,o.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u65b0\u6587\u6863\u7684\u5b8c\u6574\u8def\u5f84")),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/swdocmgrapi/solidworks.interop.swdocumentmgr~solidworks.interop.swdocumentmgr.iswdmdocument~replacereference.html"},"SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u7684ISwDMDocument::ReplaceReference"),"\u65b9\u6cd5\u6765\u66ff\u6362\u65e7\u7684\u5f15\u7528\u4e3a\u65b0\u7684\u5f15\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const FILE_PATH As String = "\u8981\u66ff\u6362\u5f15\u7528\u7684\u5b8c\u6574\u8def\u5f84"\nConst ORIGINAL_REFERENCE As String = "\u8981\u66ff\u6362\u7684\u5f15\u7528\u7684\u5b8c\u6574\u8def\u5f84"\nConst NEW_REFERENCE As String = "\u65b0\u5f15\u7528\u7684\u5b8c\u6574\u8def\u5f84"\n\nConst LIC_KEY As String = "\u60a8\u7684\u8bb8\u53ef\u8bc1\u5bc6\u94a5"\n\nDim swDmApp As SwDocumentMgr.SwDMApplication4\n\nSub main()\n\n    Dim swClassFact As SwDocumentMgr.SwDMClassFactory\n    \n    Set swClassFact = New SwDocumentMgr.SwDMClassFactory\n    \n    Set swDmApp = swClassFact.GetApplication(LIC_KEY)\n    \n    Dim swDmDoc As SwDocumentMgr.SwDMDocument19\n\n    Set swDmDoc = OpenDocument(FILE_PATH)\n    \n    Dim searchOpts As SwDocumentMgr.SwDMSearchOption\n    Set searchOpts = swDmApp.GetSearchOptionObject\n    searchOpts.SearchFilters = SwDmSearchFilters.SwDmSearchExternalReference + SwDmSearchFilters.SwDmSearchRootAssemblyFolder + SwDmSearchFilters.SwDmSearchSubfolders + SwDmSearchFilters.SwDmSearchInContextReference\n    \n    \'\u5fc5\u987b\u8c03\u7528\u6b64\u65b9\u6cd5\uff0c\u5426\u5219\u66ff\u6362\u5c06\u5931\u8d25\n    swDmDoc.GetAllExternalReferences4 searchOpts, Empty, Empty, Empty\n            \n    swDmDoc.ReplaceReference ORIGINAL_REFERENCE, NEW_REFERENCE\n    \n    swDmDoc.Save\n    \nEnd Sub\n\nFunction OpenDocument(filePath As String) As SwDocumentMgr.SwDMDocument19\n    \n    Dim err As SwDmDocumentOpenError\n    \n    Dim docType As SwDocumentMgr.SwDmDocumentType\n    \n    Dim ext As String\n    ext = LCase(Right(filePath, 6))\n    \n    Select Case ext\n        Case "sldprt"\n            docType = swDmDocumentPart\n        Case "sldasm"\n            docType = swDmDocumentAssembly\n        Case "slddrw"\n            docType = swDmDocumentDrawing\n    End Select\n    \n    Dim swDmDoc As SwDocumentMgr.SwDMDocument19\n    \n    Set swDmDoc = swDmApp.GetDocument(filePath, docType, False, err)\n    \n    Set OpenDocument = swDmDoc\n    \nEnd Function\n')))}u.isMDXComponent=!0}}]);