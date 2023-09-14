"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[89178],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=r.createContext({}),p=function(e){var t=r.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(o),m=n,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return o?r.createElement(f,s(s({ref:t},l),{},{components:o})):r.createElement(f,s({ref:t},l))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:n,s[1]=c;for(var p=2;p<i;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},39650:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const i={caption:"Batch Export Models",title:"Batch export SOLIDWORKS models via vbScript",description:"Example of batch exporting SOLIDWORKS documents from the vbScript"},s=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vbscript/batch-export/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vbscript/batch-export/index",title:"Batch export SOLIDWORKS models via vbScript",description:"Example of batch exporting SOLIDWORKS documents from the vbScript",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vbscript/batch-export/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vbscript/batch-export",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vbscript/batch-export/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vbscript/batch-export/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vbscript/batch-export/index.md",tags:[],version:"current",frontMatter:{caption:"Batch Export Models",title:"Batch export SOLIDWORKS models via vbScript",description:"Example of batch exporting SOLIDWORKS documents from the vbScript"},sidebar:"tutorialSidebar",previous:{title:"Automation of SOLIDWORKS using SOLIDWORKS API in vbScript",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vbscript/"},next:{title:"Script extract mass properties of file using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vbscript/get-mass-properties/"}},a={},p=[{value:"Arguments",id:"arguments",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This example of vbScript which demonstrates how to batch export SOLIDWORKS documents using vbScript"),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Path to folder with SOLIDWORKS models"),(0,n.kt)("li",{parentName:"ol"},"Filter for the input files extension"),(0,n.kt)("li",{parentName:"ol"},"Path to output folder"),(0,n.kt)("li",{parentName:"ol"},"Extension of the output format")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'> "export-sw-models.vbs" "C:\\Models" sldprt "C:\\Output" step\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vbs"},'Dim dirPath\ndirPath = WScript.Arguments.Item(0)\n\nDim filter\nfilter = WScript.Arguments.Item(1)\n\nDim outDir\noutDir = WScript.Arguments.Item(2)\n\nDim outExt\noutExt = WScript.Arguments.Item(3)\n\nDim swApp\nSet swApp = CreateObject("SldWorks.Application")\nswApp.Visible = True\n\nDim fso\nSet fso = CreateObject("Scripting.FileSystemObject")\n\nDim folder\nSet folder = fso.GetFolder(dirPath)\n\ndim file\n\nFor Each file in folder.Files\n    If LCase(fso.GetExtensionName(file.Path)) = LCase(filter) Then\n        Dim docSpec\n        Set docSpec = swApp.GetOpenDocSpec(file.Path)\n        docSpec.ReadOnly = True\n\n        Dim swModel\n        Set swModel = swApp.OpenDoc7(docSpec)\n\n        If Not swModel is Nothing Then\n            Dim outFilePath\n            outFilePath = outDir & "\\" & fso.GetBaseName(file) & "." & outExt\n            swModel.SaveAs outFilePath\n            swApp.CloseDoc swModel.GetTitle()\n        End If\n    End If\nNext\n\nswApp.ExitApp\n')))}d.isMDXComponent=!0}}]);