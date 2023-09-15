"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[67255],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>w});var o=r(67294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,o,s=function(e,n){if(null==e)return{};var r,o,s={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=o.createContext({}),u=function(e){var n=o.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},m=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var r=e.components,s=e.mdxType,t=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),l=u(r),p=s,w=l["".concat(c,".").concat(p)]||l[p]||d[p]||t;return r?o.createElement(w,i(i({ref:n},m),{},{components:r})):o.createElement(w,i({ref:n},m))}));function w(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var t=r.length,i=new Array(t);i[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[l]="string"==typeof e?e:s,i[1]=a;for(var u=2;u<t;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},54098:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>u});var o=r(87462),s=(r(67294),r(3905));const t={title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u6458\u8981\u4fe1\u606f",image:"summary.png",labels:["\u6458\u8981\u4fe1\u606f","\u4f5c\u8005","\u6ce8\u91ca","\u6807\u9898"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/read-summary-information/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/read-summary-information/index",title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u6458\u8981\u4fe1\u606f",description:"SOLIDWORKS\u6587\u4ef6\u7684\u6458\u8981\u4fe1\u606f{ width=500 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/read-summary-information/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/read-summary-information",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/read-summary-information/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/read-summary-information/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/read-summary-information/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u6458\u8981\u4fe1\u606f",image:"summary.png",labels:["\u6458\u8981\u4fe1\u606f","\u4f5c\u8005","\u6ce8\u91ca","\u6807\u9898"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u6240\u9009\u7ec4\u4ef6\u4e2d\u8bfb\u53d6\u914d\u7f6e\u7279\u5b9a\u7684\u5207\u5272\u5217\u8868\u5c5e\u6027",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/read-component-cutlist/"},next:{title:"SOLIDWORKS\u5b8f\u6839\u636e\u81ea\u5b9a\u4e49\u5c5e\u6027\u91cd\u547d\u540d\u914d\u7f6e",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/rename-configurations-based-custom-property/"}},c={},u=[],m={toc:u},l="wrapper";function d(e){let{components:n,...t}=e;return(0,s.kt)(l,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"SOLIDWORKS\u6587\u4ef6\u7684\u6458\u8981\u4fe1\u606f",src:r(23374).Z,width:"1023",height:"591"}),"{ width=500 }"),(0,s.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u4f7f\u7528SOLIDWORKS API\u4ece\u6d3b\u52a8SOLIDWORKS\u6587\u6863\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e2d\u63d0\u53d6\u6570\u636e\uff0c\u5305\u62ec\u4f5c\u8005\u3001\u5173\u952e\u5b57\u3001\u6ce8\u91ca\u3001\u6807\u9898\u3001\u521b\u5efa\u4fe1\u606f\u548c\u6700\u540e\u4fdd\u5b58\u4fe1\u606f\u3002"),(0,s.kt)("p",null,"\u6b64\u5b8f\u8fd8\u63d0\u53d6\u4e86\u6587\u4ef6\u521b\u5efa\u65f6\u7684SOLIDWORKS\u7248\u672c\u3002"),(0,s.kt)("p",null,"\u7ed3\u679c\u4ee5\u4ee5\u4e0b\u683c\u5f0f\u8f93\u51fa\u5230VBA\u7f16\u8f91\u5668\u7684",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/vba/vba-editor/windows#immediate-window"},"\u5373\u65f6\u7a97\u53e3"),"\u4e2d\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u4f5c\u8005: CodeStack\n\u5173\u952e\u5b57: \u793a\u4f8b,\u6458\u8981,API\n\u6ce8\u91ca: \u793a\u4f8b\u6ce8\u91ca\n\u6807\u9898: \u6458\u8981API\u793a\u4f8b\n\u4e3b\u9898: CodeStack API\u793a\u4f8b\n\u521b\u5efa\u65f6\u95f4: 2019\u5e749\u670810\u65e5\u661f\u671f\u4e8c \u4e0a\u534810:35:37\n\u6700\u540e\u4fdd\u5b58\u65f6\u95f4: 2019\u5e749\u670810\u65e5\u661f\u671f\u4e8c \u4e0a\u534811:08:23\n\u6700\u540e\u4fdd\u5b58\u8005: artem.taturevych\n\u6700\u540e\u4fdd\u5b58\u7248\u672c: SOLIDWORKS 2019\n\u521b\u5efa\u7248\u672c: SOLIDWORKS 2012\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim vHistory As Variant\n        vHistory = swModel.VersionHistory()\n            \n        Debug.Print "\u4f5c\u8005: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoAuthor)\n        Debug.Print "\u5173\u952e\u5b57: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoKeywords)\n        Debug.Print "\u6ce8\u91ca: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoComment)\n        Debug.Print "\u6807\u9898: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoTitle)\n        Debug.Print "\u4e3b\u9898: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoSubject)\n        \n        Debug.Print "\u521b\u5efa\u65f6\u95f4: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoCreateDate2)\n        Debug.Print "\u6700\u540e\u4fdd\u5b58\u65f6\u95f4: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoSaveDate2)\n        Debug.Print "\u6700\u540e\u4fdd\u5b58\u8005: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoSavedBy)\n        Debug.Print "\u6700\u540e\u4fdd\u5b58\u7248\u672c: " & ConvertFileVersionToSwMajorVersion(ExtractSwRevisonFromHistoryRecord(CStr(vHistory(UBound(vHistory)))))\n        Debug.Print "\u521b\u5efa\u7248\u672c: " & ConvertFileVersionToSwMajorVersion(ExtractSwRevisonFromHistoryRecord(CStr(vHistory(0))))\n        \n    Else\n        Err.Raise vbError, "", "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n\nFunction ExtractSwRevisonFromHistoryRecord(fileVers As String) As String\n    \n    ExtractSwRevisonFromHistoryRecord = Left(fileVers, InStr(fileVers, "[") - 1)\n    \nEnd Function\n\nFunction ConvertFileVersionToSwMajorVersion(versNumber As Integer) As String\n    \n    Dim swVersMajor As String\n    \n    If versNumber >= 5000 Then\n        swVersMajor = 2012 + (versNumber - 5000) / 1000\n    Else\n        Select Case versNumber\n            Case 44\n                swVersMajor = 95\n            Case 243\n                swVersMajor = 96\n            Case 483\n                swVersMajor = 97\n            Case 629\n                swVersMajor = "97Plus"\n            Case 822\n                swVersMajor = 98\n            Case 1008\n                swVersMajor = "98Plus"\n            Case 1137\n                swVersMajor = 99\n            Case 1500\n                swVersMajor = 2000\n            Case 1750\n                swVersMajor = 2001\n            Case 1950\n                swVersMajor = "2001Plus"\n            Case 2200\n                swVersMajor = 2003\n            Case 2500\n                swVersMajor = 2004\n            Case 2800\n                swVersMajor = 2005\n            Case 3100\n                swVersMajor = 2006\n            Case 3400\n                swVersMajor = 2007\n            Case 3800\n                swVersMajor = 2008\n            Case 4100\n                swVersMajor = 2009\n            Case 4400\n                swVersMajor = 2010\n            Case 4700\n                swVersMajor = 2011\n        End Select\n    End If\n    \n    ConvertFileVersionToSwMajorVersion = "SOLIDWORKS " & swVersMajor\n    \nEnd Function\n')))}d.isMDXComponent=!0},23374:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/summary-807c070cfba36b19bc9fff90d74223a4.png"}}]);