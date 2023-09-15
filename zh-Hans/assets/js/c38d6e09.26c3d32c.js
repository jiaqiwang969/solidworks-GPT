"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[92517],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},l=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,l=a(t,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:e},l),{},{components:r})):n.createElement(f,s({ref:e},l))}));function f(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a[d]="string"==typeof t?t:i,s[1]=a;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79823:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const o={caption:"\u6279\u91cf\u5bfc\u51fa\u6a21\u578b",title:"\u901a\u8fc7vbScript\u6279\u91cf\u5bfc\u51faSOLIDWORKS\u6a21\u578b"},s=void 0,a={unversionedId:"codestack/solidworks-api/getting-started/scripts/vbscript/batch-export/index",id:"codestack/solidworks-api/getting-started/scripts/vbscript/batch-export/index",title:"\u901a\u8fc7vbScript\u6279\u91cf\u5bfc\u51faSOLIDWORKS\u6a21\u578b",description:"\u4f7f\u7528vbScript\u6279\u91cf\u5bfc\u51faSOLIDWORKS\u6587\u6863\u7684\u793a\u4f8b",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/getting-started/scripts/vbscript/batch-export/index.md",sourceDirName:"codestack/solidworks-api/getting-started/scripts/vbscript/batch-export",slug:"/codestack/solidworks-api/getting-started/scripts/vbscript/batch-export/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/scripts/vbscript/batch-export/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/scripts/vbscript/batch-export/index.md",tags:[],version:"current",frontMatter:{caption:"\u6279\u91cf\u5bfc\u51fa\u6a21\u578b",title:"\u901a\u8fc7vbScript\u6279\u91cf\u5bfc\u51faSOLIDWORKS\u6a21\u578b"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528vbScript\u81ea\u52a8\u5316SOLIDWORKS\u7684SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/scripts/vbscript/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u811a\u672c\u63d0\u53d6\u6587\u4ef6\u7684\u8d28\u91cf\u5c5e\u6027",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/scripts/vbscript/get-mass-properties/"}},c={},p=[{value:"\u4f7f\u7528vbScript\u6279\u91cf\u5bfc\u51faSOLIDWORKS\u6587\u6863\u7684\u793a\u4f8b",id:"\u4f7f\u7528vbscript\u6279\u91cf\u5bfc\u51fasolidworks\u6587\u6863\u7684\u793a\u4f8b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2}],l={toc:p},d="wrapper";function u(t){let{components:e,...r}=t;return(0,i.kt)(d,(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4f7f\u7528vbscript\u6279\u91cf\u5bfc\u51fasolidworks\u6587\u6863\u7684\u793a\u4f8b"},"\u4f7f\u7528vbScript\u6279\u91cf\u5bfc\u51faSOLIDWORKS\u6587\u6863\u7684\u793a\u4f8b"),(0,i.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u4f7f\u7528vbScript\u6279\u91cf\u5bfc\u51faSOLIDWORKS\u6587\u6863\u7684\u793a\u4f8b\u3002"),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"SOLIDWORKS\u6a21\u578b\u6240\u5728\u6587\u4ef6\u5939\u7684\u8def\u5f84"),(0,i.kt)("li",{parentName:"ol"},"\u8f93\u5165\u6587\u4ef6\u6269\u5c55\u540d\u7684\u8fc7\u6ee4\u5668"),(0,i.kt)("li",{parentName:"ol"},"\u8f93\u51fa\u6587\u4ef6\u5939\u7684\u8def\u5f84"),(0,i.kt)("li",{parentName:"ol"},"\u8f93\u51fa\u683c\u5f0f\u7684\u6269\u5c55\u540d")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'> "export-sw-models.vbs" "C:\\Models" sldprt "C:\\Output" step\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vbs"},'Dim dirPath\ndirPath = WScript.Arguments.Item(0)\n\nDim filter\nfilter = WScript.Arguments.Item(1)\n\nDim outDir\noutDir = WScript.Arguments.Item(2)\n\nDim outExt\noutExt = WScript.Arguments.Item(3)\n\nDim swApp\nSet swApp = CreateObject("SldWorks.Application")\nswApp.Visible = True\n\nDim fso\nSet fso = CreateObject("Scripting.FileSystemObject")\n\nDim folder\nSet folder = fso.GetFolder(dirPath)\n\ndim file\n\nFor Each file in folder.Files\n    If LCase(fso.GetExtensionName(file.Path)) = LCase(filter) Then\n        Dim docSpec\n        Set docSpec = swApp.GetOpenDocSpec(file.Path)\n        docSpec.ReadOnly = True\n\n        Dim swModel\n        Set swModel = swApp.OpenDoc7(docSpec)\n\n        If Not swModel is Nothing Then\n            Dim outFilePath\n            outFilePath = outDir & "\\" & fso.GetBaseName(file) & "." & outExt\n            swModel.SaveAs outFilePath\n            swApp.CloseDoc swModel.GetTitle()\n        End If\n    End If\nNext\n\nswApp.ExitApp\n')))}u.isMDXComponent=!0}}]);