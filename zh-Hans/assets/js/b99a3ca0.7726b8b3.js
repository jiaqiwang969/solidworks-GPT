"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[4578],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m=r.createContext({}),c=function(e){var t=r.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,m=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=c(o),d=n,f=l["".concat(m,".").concat(d)]||l[d]||p[d]||s;return o?r.createElement(f,i(i({ref:t},u),{},{components:o})):r.createElement(f,i({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=d;var a={};for(var m in t)hasOwnProperty.call(t,m)&&(a[m]=t[m]);a.originalType=e,a[l]="string"==typeof e?e:n,i[1]=a;for(var c=2;c<s;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},83226:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const s={title:"Write summary information to the active file using SOLIDWORKS API",caption:"Write Summary Information"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/write-summary-information/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/write-summary-information/index",title:"Write summary information to the active file using SOLIDWORKS API",description:"VBA macro to fill the summary information (author, keywords, comments, title, subject) for active SOLIDWORKS file using SOLIDWORKS API",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/write-summary-information/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/write-summary-information",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/write-summary-information/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/write-summary-information/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/write-summary-information/index.md",tags:[],version:"current",frontMatter:{title:"Write summary information to the active file using SOLIDWORKS API",caption:"Write Summary Information"},sidebar:"tutorialSidebar",previous:{title:"Write custom property to file, configuration and cut-list using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/write-all-properties/"},next:{title:"Data saving in the 3rd party storage using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/"}},m={},c=[{value:"labels: summary info,write summary",id:"labels-summary-infowrite-summary",level:2}],u={toc:c},l="wrapper";function p(e){let{components:t,...s}=e;return(0,n.kt)(l,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"VBA macro to fill the summary information (author, keywords, comments, title, subject) for active SOLIDWORKS file using SOLIDWORKS API\nimage: summary.png"),(0,n.kt)("h2",{id:"labels-summary-infowrite-summary"},"labels: ","[summary info,write summary]"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Summary Information of SOLIDWORKS file",src:o(69512).Z,width:"1024",height:"685"}),"{ width=500 }"),(0,n.kt)("p",null,"This VBA macro fills the ",(0,n.kt)("em",{parentName:"p"},"Summary Information")," tab (author, keywords, comments, title and subject) of custom properties of active model using SOLIDWORKS API."),(0,n.kt)("p",null,"Configure the macro and specify the values to write:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Const AUTHOR As String = "CodeStack"\nConst KEYWORDS As String = "sample,summary,api"\nConst COMMENTS As String = "Example comments"\nConst TITLE As String = "Summary API Example"\nConst SUBJECT As String = "CodeStack API Examples"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Const AUTHOR As String = "CodeStack"\nConst KEYWORDS As String = "sample,summary,api"\nConst COMMENTS As String = "Example comments"\nConst TITLE As String = "Summary API Example"\nConst SUBJECT As String = "CodeStack API Examples"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        swModel.SummaryInfo(swSummInfoField_e.swSumInfoAuthor) = AUTHOR\n        swModel.SummaryInfo(swSummInfoField_e.swSumInfoKeywords) = KEYWORDS\n        swModel.SummaryInfo(swSummInfoField_e.swSumInfoComment) = COMMENTS\n        swModel.SummaryInfo(swSummInfoField_e.swSumInfoTitle) = TITLE\n        swModel.SummaryInfo(swSummInfoField_e.swSumInfoSubject) = SUBJECT\n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n')))}p.isMDXComponent=!0},69512:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/summary-4acddc2b263a37baaf8af1d7abedf788.png"}}]);