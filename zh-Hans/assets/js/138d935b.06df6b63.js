"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[65678],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>D});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,D=u["".concat(i,".").concat(d)]||u[d]||p[d]||s;return t?r.createElement(D,a(a({ref:n},m),{},{components:t})):r.createElement(D,a({ref:n},m))}));function D(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const s={title:"\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u83b7\u53d6\u6587\u6863\u7684\u6240\u6709\u5916\u90e8\u5f15\u7528",caption:"\u83b7\u53d6\u6240\u6709\u5916\u90e8\u5f15\u7528"},a=void 0,c={unversionedId:"codestack/solidworks-document-manager-api/document/get-external-references/index",id:"codestack/solidworks-document-manager-api/document/get-external-references/index",title:"\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u83b7\u53d6\u6587\u6863\u7684\u6240\u6709\u5916\u90e8\u5f15\u7528",description:"\u8be5\u5b8f\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u63d0\u53d6\u6307\u5b9aSOLIDWORKS\u6587\u4ef6\uff08\u96f6\u4ef6\u3001\u88c5\u914d\u4f53\u6216\u56fe\u7eb8\uff09\u7684\u6240\u6709\u5916\u90e8\u5f15\u7528\uff08\u5305\u62ec\u5d4c\u5957\u5f15\u7528\u3001\u88c5\u914d\u4f53\u7ec4\u4ef6\u548c\u7ed8\u56fe\u89c6\u56fe\uff09\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-document-manager-api/document/get-external-references/index.md",sourceDirName:"codestack/solidworks-document-manager-api/document/get-external-references",slug:"/codestack/solidworks-document-manager-api/document/get-external-references/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/get-external-references/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-document-manager-api/document/get-external-references/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u83b7\u53d6\u6587\u6863\u7684\u6240\u6709\u5916\u90e8\u5f15\u7528",caption:"\u83b7\u53d6\u6240\u6709\u5916\u90e8\u5f15\u7528"},sidebar:"tutorialSidebar",previous:{title:"\u901a\u8fc7\u6587\u6863\u7ba1\u7406\u5668 API\uff08\u65e0\u9700 SOLIDWORKS\uff09\u5c06\u96f6\u4ef6\u5bfc\u51fa\u4e3a Parasolid",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/export-parasolid/"},next:{title:"\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u4ece\u6240\u6709\u914d\u7f6e\u4e2d\u63d0\u53d6\u8d28\u91cf\u5c5e\u6027",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/get-mass-properties/"}},i={},l=[{value:"labels: document manager, external references, components",id:"labels-document-manager-external-references-components",level:2}],m={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8be5\u5b8f\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u63d0\u53d6\u6307\u5b9aSOLIDWORKS\u6587\u4ef6\uff08\u96f6\u4ef6\u3001\u88c5\u914d\u4f53\u6216\u56fe\u7eb8\uff09\u7684\u6240\u6709\u5916\u90e8\u5f15\u7528\uff08\u5305\u62ec\u5d4c\u5957\u5f15\u7528\u3001\u88c5\u914d\u4f53\u7ec4\u4ef6\u548c\u7ed8\u56fe\u89c6\u56fe\uff09\u3002"),(0,o.kt)("h2",{id:"labels-document-manager-external-references-components"},"labels: ","[document manager, external references, components]"),(0,o.kt)("p",null,"\u8be5\u5b8f\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u63d0\u53d6\u6307\u5b9aSOLIDWORKS\u6587\u4ef6\uff08\u96f6\u4ef6\u3001\u88c5\u914d\u4f53\u6216\u56fe\u7eb8\uff09\u7684\u6240\u6709\u5916\u90e8\u5f15\u7528\uff08\u5305\u62ec\u5d4c\u5957\u5f15\u7528\u3001\u88c5\u914d\u4f53\u7ec4\u4ef6\u548c\u7ed8\u56fe\u89c6\u56fe\uff09\u3002"),(0,o.kt)("p",null,"\u4fee\u6539\u5b8f\u5e76\u6307\u5b9a\u8981\u6536\u96c6\u5f15\u7528\u7684\u6839\u6587\u4ef6\u7684\u5b8c\u6574\u8def\u5f84\u3002"),(0,o.kt)("p",null,"\u8fd0\u884c\u5b8f\u3002\u6240\u6709\u5f15\u7528\u90fd\u4f1a\u8f93\u51fa\u5230\u5373\u65f6\u7a97\u53e3\u3002"),(0,o.kt)("p",null,"\u8be5\u5b8f\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/swdocmgrapi/SolidWorks.Interop.swdocumentmgr~SolidWorks.Interop.swdocumentmgr.ISwDMDocument21~GetAllExternalReferences5.html"},"SolidWorks.Interop.swdocumentmgr.ISwDMDocument21.GetAllExternalReferences5")," SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u6765\u5217\u51fa\u6587\u4ef6\u7684\u6240\u6709\u4f9d\u8d56\u9879\u3002\u8be5\u65b9\u6cd5\u9012\u5f52\u8c03\u7528\uff0c\u4ee5\u6536\u96c6SOLIDWORKS\u88c5\u914d\u4f53\u7684\u6240\u6709\u7ea7\u522b\u7684\u5f15\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const FILE_PATH As String = "\u6587\u4ef6\u8def\u5f84"\n\nConst LIC_KEY As String = "\u60a8\u7684\u8bb8\u53ef\u8bc1\u5bc6\u94a5"\n\nDim swDmApp As SwDocumentMgr.SwDMApplication4\n\nSub main()\n\n    Dim swClassFact As SwDocumentMgr.SwDMClassFactory\n    \n    Set swClassFact = New SwDocumentMgr.SwDMClassFactory\n    \n    Set swDmApp = swClassFact.GetApplication(LIC_KEY)\n    \n    Dim filesColl As Collection\n    Set filesColl = New Collection\n    \n    CollectExternalReferences FILE_PATH, filesColl\n    \n    Dim i As Integer\n    \n    Debug.Print "\u5916\u90e8\u5f15\u7528:"\n    \n    For i = 1 To filesColl.Count\n        Debug.Print filesColl(i)\n    Next\n    \nEnd Sub\n\nFunction CollectExternalReferences(filePath As String, coll As Collection)\n    \n    If Not Contains(coll, filePath) Then\n        coll.Add filePath\n    End If\n    \n    Dim swDmDoc As SwDocumentMgr.SwDMDocument19\n    \n    Dim searchOpts As SwDocumentMgr.SwDMSearchOption\n    Set searchOpts = swDmApp.GetSearchOptionObject\n    searchOpts.SearchFilters = SwDmSearchFilters.SwDmSearchExternalReference + SwDmSearchFilters.SwDmSearchRootAssemblyFolder + SwDmSearchFilters.SwDmSearchSubfolders + SwDmSearchFilters.SwDmSearchInContextReference\n    \n    Set swDmDoc = OpenDocument(filePath)\n    \n    If Not swDmDoc Is Nothing Then\n        \n        Dim vBrokenRefs As Variant\n        Dim vVirtComps As Variant\n        Dim vTimeStamps As Variant\n        Dim vFilePaths As Variant\n        \n        vFilePaths = swDmDoc.GetAllExternalReferences4(searchOpts, vBrokenRefs, vVirtComps, vTimeStamps)\n        \n        If Not IsEmpty(vFilePaths) Then\n            Dim i As Integer\n            \n            For i = 0 To UBound(vFilePaths)\n                Dim childFilePath As String\n                childFilePath = vFilePaths(i)\n                CollectExternalReferences childFilePath, coll\n            Next\n            \n        End If\n        \n    Else\n        Debug.Print "\u65e0\u6cd5\u6253\u5f00\u6587\u6863: " & filePath\n    End If\n    \nEnd Function\n\nFunction OpenDocument(filePath As String) As SwDocumentMgr.SwDMDocument19\n    \n    Dim err As SwDmDocumentOpenError\n    \n    Dim docType As SwDocumentMgr.SwDmDocumentType\n    \n    Dim ext As String\n    ext = LCase(Right(filePath, 6))\n    \n    Select Case ext\n        Case "sldprt"\n            docType = swDmDocumentPart\n        Case "sldasm"\n            docType = swDmDocumentAssembly\n        Case "slddrw"\n            docType = swDmDocumentDrawing\n    End Select\n    \n    Dim swDmDoc As SwDocumentMgr.SwDMDocument19\n    \n    Set swDmDoc = swDmApp.GetDocument(filePath, docType, True, err)\n    \n    Set OpenDocument = swDmDoc\n    \nEnd Function\n\nFunction Contains(coll As Collection, item As String) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To coll.Count\n        If LCase(coll.item(i)) = LCase(item) Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')))}p.isMDXComponent=!0}}]);