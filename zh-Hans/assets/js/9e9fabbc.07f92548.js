"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[529],{3905:(e,o,t)=>{t.d(o,{Zo:()=>m,kt:()=>A});var i=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);o&&(i=i.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,i,n=function(e,o){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=i.createContext({}),l=function(e){var o=i.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},m=function(e){var o=l(e.components);return i.createElement(c.Provider,{value:o},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return i.createElement(i.Fragment,{},o)}},M=i.forwardRef((function(e,o){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=l(t),M=n,A=d["".concat(c,".").concat(M)]||d[M]||p[M]||r;return t?i.createElement(A,s(s({ref:o},m),{},{components:t})):i.createElement(A,s({ref:o},m))}));function A(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=t.length,s=new Array(r);s[0]=M;var a={};for(var c in o)hasOwnProperty.call(o,c)&&(a[c]=o[c]);a.originalType=e,a[d]="string"==typeof e?e:n,s[1]=a;for(var l=2;l<r;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}M.displayName="MDXCreateElement"},94958:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(87462),n=(t(67294),t(3905));const r={title:"Create temp solid body box using SOLIDWORKS API and IModeler interface",caption:"Create Box Body",description:"VBA example to create a temp body by center point, direction and size using SOLIDWORKS API and IModeler interface",image:"box-body.png",labels:["primitive","box","temp body","modeler"]},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-box-body/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-box-body/index",title:"Create temp solid body box using SOLIDWORKS API and IModeler interface",description:"VBA example to create a temp body by center point, direction and size using SOLIDWORKS API and IModeler interface",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-box-body/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-box-body",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-box-body/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-box-body/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-box-body/index.md",tags:[],version:"current",frontMatter:{title:"Create temp solid body box using SOLIDWORKS API and IModeler interface",caption:"Create Box Body",description:"VBA example to create a temp body by center point, direction and size using SOLIDWORKS API and IModeler interface",image:"box-body.png",labels:["primitive","box","temp body","modeler"]},sidebar:"tutorialSidebar",previous:{title:"Code examples of creating geometrical primitives using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/"},next:{title:"Create temp cylindrical sheet body using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-cylindrical-surface/"}},c={},l=[],m={toc:l},d="wrapper";function p(e){let{components:o,...r}=e;return(0,n.kt)(d,(0,i.Z)({},m,r,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Box body",src:t(55103).Z,width:"357",height:"381"}),"{ width=250 }"),(0,n.kt)("p",null,"This VBA example demonstrates how to create and display temp body by providing the coordinate of center of base face, direction, width, length and height using SOLIDWORKS API."),(0,n.kt)("p",null,"Macro stops the execution and displays the body. Continue macro execution to destroy the temp body."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Const WIDTH As Double = 0.01\nConst LENGTH As Double = 0.01\nConst HEIGHT As Double = 0.01\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    If Not swPart Is Nothing Then\n    \n        Dim swModeler As SldWorks.Modeler\n        Set swModeler = swApp.GetModeler\n        \n        Dim dCenter(2) As Double\n        dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0\n        \n        Dim dAxis(2) As Double\n        dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1\n                        \n        Dim dBoxData(8) As Double\n        dBoxData(0) = dCenter(0): dBoxData(1) = dCenter(1): dBoxData(2) = dCenter(2)\n        dBoxData(3) = dAxis(0): dBoxData(4) = dAxis(1): dBoxData(5) = dAxis(2)\n        dBoxData(6) = WIDTH: dBoxData(7) = LENGTH: dBoxData(8) = HEIGHT\n        \n        Dim swBody As SldWorks.Body2\n        \n        Set swBody = swModeler.CreateBodyFromBox3(dBoxData)\n        \n        swBody.Display3 swPart, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectable\n        \n        Stop \'continue to hide the body\n        \n        Set swBody = Nothing\n    Else\n        MsgBox "Please open part document"\n    End If\n    \nEnd Sub\n')))}p.isMDXComponent=!0},55103:(e,o,t)=>{t.d(o,{Z:()=>i});const i="data:image/png;base64,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"}}]);