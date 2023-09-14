"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[15285],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var a=n.createContext({}),p=function(t){var e=n.useContext(a),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},l=function(t){var e=p(t.components);return n.createElement(a.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,a=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,s(s({ref:e},l),{},{components:r})):n.createElement(f,s({ref:e},l))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,s=new Array(i);s[0]=m;var c={};for(var a in e)hasOwnProperty.call(e,a)&&(c[a]=e[a]);c.originalType=t,c[d]="string"==typeof t?t:o,s[1]=c;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65718:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={caption:"Batch Export Models",title:"Batch export SOLIDWORKS models via vbScript",description:"Example of batch exporting SOLIDWORKS documents from the vbScript"},s=void 0,c={unversionedId:"codestack-clone/solidworks-api/getting-started/scripts/vbscript/batch-export/index",id:"codestack-clone/solidworks-api/getting-started/scripts/vbscript/batch-export/index",title:"Batch export SOLIDWORKS models via vbScript",description:"Example of batch exporting SOLIDWORKS documents from the vbScript",source:"@site/docs/codestack-clone/solidworks-api/getting-started/scripts/vbscript/batch-export/index.md",sourceDirName:"codestack-clone/solidworks-api/getting-started/scripts/vbscript/batch-export",slug:"/codestack-clone/solidworks-api/getting-started/scripts/vbscript/batch-export/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/getting-started/scripts/vbscript/batch-export/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/getting-started/scripts/vbscript/batch-export/index.md",tags:[],version:"current",frontMatter:{caption:"Batch Export Models",title:"Batch export SOLIDWORKS models via vbScript",description:"Example of batch exporting SOLIDWORKS documents from the vbScript"},sidebar:"tutorialSidebar",previous:{title:"Automation of SOLIDWORKS using SOLIDWORKS API in vbScript",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/getting-started/scripts/vbscript/"},next:{title:"Script extract mass properties of file using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/getting-started/scripts/vbscript/get-mass-properties/"}},a={},p=[{value:"Arguments",id:"arguments",level:2}],l={toc:p},d="wrapper";function u(t){let{components:e,...r}=t;return(0,o.kt)(d,(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example of vbScript which demonstrates how to batch export SOLIDWORKS documents using vbScript"),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Path to folder with SOLIDWORKS models"),(0,o.kt)("li",{parentName:"ol"},"Filter for the input files extension"),(0,o.kt)("li",{parentName:"ol"},"Path to output folder"),(0,o.kt)("li",{parentName:"ol"},"Extension of the output format")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> "export-sw-models.vbs" "C:\\Models" sldprt "C:\\Output" step\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vbs"},'Dim dirPath\ndirPath = WScript.Arguments.Item(0)\n\nDim filter\nfilter = WScript.Arguments.Item(1)\n\nDim outDir\noutDir = WScript.Arguments.Item(2)\n\nDim outExt\noutExt = WScript.Arguments.Item(3)\n\nDim swApp\nSet swApp = CreateObject("SldWorks.Application")\nswApp.Visible = True\n\nDim fso\nSet fso = CreateObject("Scripting.FileSystemObject")\n\nDim folder\nSet folder = fso.GetFolder(dirPath)\n\ndim file\n\nFor Each file in folder.Files\n    If LCase(fso.GetExtensionName(file.Path)) = LCase(filter) Then\n        Dim docSpec\n        Set docSpec = swApp.GetOpenDocSpec(file.Path)\n        docSpec.ReadOnly = True\n\n        Dim swModel\n        Set swModel = swApp.OpenDoc7(docSpec)\n\n        If Not swModel is Nothing Then\n            Dim outFilePath\n            outFilePath = outDir & "\\" & fso.GetBaseName(file) & "." & outExt\n            swModel.SaveAs outFilePath\n            swApp.CloseDoc swModel.GetTitle()\n        End If\n    End If\nNext\n\nswApp.ExitApp\n')))}u.isMDXComponent=!0}}]);