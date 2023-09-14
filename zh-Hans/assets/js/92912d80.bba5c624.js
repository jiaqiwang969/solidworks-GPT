"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[67394],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var a=o.createContext({}),p=function(t){var e=o.useContext(a),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},l=function(t){var e=p(t.components);return o.createElement(a.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,a=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return r?o.createElement(f,s(s({ref:e},l),{},{components:r})):o.createElement(f,s({ref:e},l))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,s=new Array(i);s[0]=m;var c={};for(var a in e)hasOwnProperty.call(e,a)&&(c[a]=e[a]);c.originalType=t,c[u]="string"==typeof t?t:n,s[1]=c;for(var p=2;p<i;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67387:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={caption:"Batch Export Models",title:"Batch export SOLIDWORKS models via vbScript",description:"Example of batch exporting SOLIDWORKS documents from the vbScript"},s=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/batch-export/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/batch-export/index",title:"Batch export SOLIDWORKS models via vbScript",description:"Example of batch exporting SOLIDWORKS documents from the vbScript",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/batch-export/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/batch-export",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/batch-export/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/batch-export/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/batch-export/index.md",tags:[],version:"current",frontMatter:{caption:"Batch Export Models",title:"Batch export SOLIDWORKS models via vbScript",description:"Example of batch exporting SOLIDWORKS documents from the vbScript"},sidebar:"tutorialSidebar",previous:{title:"Automation of SOLIDWORKS using SOLIDWORKS API in vbScript",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/"},next:{title:"Script extract mass properties of file using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/get-mass-properties/"}},a={},p=[{value:"Arguments",id:"arguments",level:2}],l={toc:p},u="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,o.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This example of vbScript which demonstrates how to batch export SOLIDWORKS documents using vbScript"),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Path to folder with SOLIDWORKS models"),(0,n.kt)("li",{parentName:"ol"},"Filter for the input files extension"),(0,n.kt)("li",{parentName:"ol"},"Path to output folder"),(0,n.kt)("li",{parentName:"ol"},"Extension of the output format")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'> "export-sw-models.vbs" "C:\\Models" sldprt "C:\\Output" step\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vbs"},'Dim dirPath\ndirPath = WScript.Arguments.Item(0)\n\nDim filter\nfilter = WScript.Arguments.Item(1)\n\nDim outDir\noutDir = WScript.Arguments.Item(2)\n\nDim outExt\noutExt = WScript.Arguments.Item(3)\n\nDim swApp\nSet swApp = CreateObject("SldWorks.Application")\nswApp.Visible = True\n\nDim fso\nSet fso = CreateObject("Scripting.FileSystemObject")\n\nDim folder\nSet folder = fso.GetFolder(dirPath)\n\ndim file\n\nFor Each file in folder.Files\n    If LCase(fso.GetExtensionName(file.Path)) = LCase(filter) Then\n        Dim docSpec\n        Set docSpec = swApp.GetOpenDocSpec(file.Path)\n        docSpec.ReadOnly = True\n\n        Dim swModel\n        Set swModel = swApp.OpenDoc7(docSpec)\n\n        If Not swModel is Nothing Then\n            Dim outFilePath\n            outFilePath = outDir & "\\" & fso.GetBaseName(file) & "." & outExt\n            swModel.SaveAs outFilePath\n            swApp.CloseDoc swModel.GetTitle()\n        End If\n    End If\nNext\n\nswApp.ExitApp\n')))}d.isMDXComponent=!0}}]);