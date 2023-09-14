"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[71695],{3905:(e,o,r)=>{r.d(o,{Zo:()=>u,kt:()=>f});var n=r(67294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function s(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?s(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function i(e,o){if(null==e)return{};var r,n,t=function(e,o){if(null==e)return{};var r,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var m=n.createContext({}),c=function(e){var o=n.useContext(m),r=o;return e&&(r="function"==typeof e?e(o):a(a({},o),e)),r},u=function(e){var o=c(e.components);return n.createElement(m.Provider,{value:o},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},p=n.forwardRef((function(e,o){var r=e.components,t=e.mdxType,s=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(r),p=t,f=l["".concat(m,".").concat(p)]||l[p]||d[p]||s;return r?n.createElement(f,a(a({ref:o},u),{},{components:r})):n.createElement(f,a({ref:o},u))}));function f(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var m in o)hasOwnProperty.call(o,m)&&(i[m]=o[m]);i.originalType=e,i[l]="string"==typeof e?e:t,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},49650:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>m,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),t=(r(67294),r(3905));const s={title:"Read summary information from file using SOLIDWORKS API",caption:"Read Summary Information",description:"VBA macro to extract the summary information (e.g. author, keywords, comments, title, creation info etc.) for active SOLIDWORKS file using SOLIDWORKS API",image:"summary.png",labels:["summary info","author","comments","title"]},a=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-summary-information/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-summary-information/index",title:"Read summary information from file using SOLIDWORKS API",description:"VBA macro to extract the summary information (e.g. author, keywords, comments, title, creation info etc.) for active SOLIDWORKS file using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-summary-information/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-summary-information",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-summary-information/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-summary-information/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-summary-information/index.md",tags:[],version:"current",frontMatter:{title:"Read summary information from file using SOLIDWORKS API",caption:"Read Summary Information",description:"VBA macro to extract the summary information (e.g. author, keywords, comments, title, creation info etc.) for active SOLIDWORKS file using SOLIDWORKS API",image:"summary.png",labels:["summary info","author","comments","title"]},sidebar:"tutorialSidebar",previous:{title:"Read configuration specific cut-list property from the selected component using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-component-cutlist/"},next:{title:"SOLIDWORKS macro to rename configurations based on custom property",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/rename-configurations-based-custom-property/"}},m={},c=[],u={toc:c},l="wrapper";function d(e){let{components:o,...s}=e;return(0,t.kt)(l,(0,n.Z)({},u,s,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Summary Information of SOLIDWORKS file",src:r(99677).Z,width:"1023",height:"591"}),"{ width=500 }"),(0,t.kt)("p",null,"This VBA macro extracts the data from the ",(0,t.kt)("em",{parentName:"p"},"Summary Information")," tab from custom properties of the active SOLIDWORKS document using SOLIDWORKS API. This information includes author, keywords, comments, title, creation info, last saved info."),(0,t.kt)("p",null,"This macro additionally extracts the SOLIDWORKS version the file was created in."),(0,t.kt)("p",null,"Result is output to the ",(0,t.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/vba/vba-editor/windows#immediate-window"},"immediate window of VBA editor")," in the following format:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Author: CodeStack\nKeywords: sample,summary,api\nComments: Example comments\nTitle: Summary API Example\nSubject: CodeStack API Examples\nCreated: Tuesday, 10 September 2019 10:35:37 AM\nLast Saved: Tuesday, 10 September 2019 11:08:23 AM\nLast Saved By: artem.taturevych\nLast Saved With: SOLIDWORKS 2019\nCreated With: SOLIDWORKS 2012\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim vHistory As Variant\n        vHistory = swModel.VersionHistory()\n            \n        Debug.Print "Author: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoAuthor)\n        Debug.Print "Keywords: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoKeywords)\n        Debug.Print "Comments: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoComment)\n        Debug.Print "Title: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoTitle)\n        Debug.Print "Subject: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoSubject)\n        \n        Debug.Print "Created: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoCreateDate2)\n        Debug.Print "Last Saved: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoSaveDate2)\n        Debug.Print "Last Saved By: " & swModel.SummaryInfo(swSummInfoField_e.swSumInfoSavedBy)\n        Debug.Print "Last Saved With: " & ConvertFileVersionToSwMajorVersion(ExtractSwRevisonFromHistoryRecord(CStr(vHistory(UBound(vHistory)))))\n        Debug.Print "Created With: " & ConvertFileVersionToSwMajorVersion(ExtractSwRevisonFromHistoryRecord(CStr(vHistory(0))))\n        \n    Else\n        Err.Raise vbError, "", "Please open model"\n    End If\n    \nEnd Sub\n\nFunction ExtractSwRevisonFromHistoryRecord(fileVers As String) As String\n    \n    ExtractSwRevisonFromHistoryRecord = Left(fileVers, InStr(fileVers, "[") - 1)\n    \nEnd Function\n\nFunction ConvertFileVersionToSwMajorVersion(versNumber As Integer) As String\n    \n    Dim swVersMajor As String\n    \n    If versNumber >= 5000 Then\n        swVersMajor = 2012 + (versNumber - 5000) / 1000\n    Else\n        Select Case versNumber\n            Case 44\n                swVersMajor = 95\n            Case 243\n                swVersMajor = 96\n            Case 483\n                swVersMajor = 97\n            Case 629\n                swVersMajor = "97Plus"\n            Case 822\n                swVersMajor = 98\n            Case 1008\n                swVersMajor = "98Plus"\n            Case 1137\n                swVersMajor = 99\n            Case 1500\n                swVersMajor = 2000\n            Case 1750\n                swVersMajor = 2001\n            Case 1950\n                swVersMajor = "2001Plus"\n            Case 2200\n                swVersMajor = 2003\n            Case 2500\n                swVersMajor = 2004\n            Case 2800\n                swVersMajor = 2005\n            Case 3100\n                swVersMajor = 2006\n            Case 3400\n                swVersMajor = 2007\n            Case 3800\n                swVersMajor = 2008\n            Case 4100\n                swVersMajor = 2009\n            Case 4400\n                swVersMajor = 2010\n            Case 4700\n                swVersMajor = 2011\n        End Select\n    End If\n    \n    ConvertFileVersionToSwMajorVersion = "SOLIDWORKS " & swVersMajor\n    \nEnd Function\n')))}d.isMDXComponent=!0},99677:(e,o,r)=>{r.d(o,{Z:()=>n});const n=r.p+"assets/images/summary-807c070cfba36b19bc9fff90d74223a4.png"}}]);