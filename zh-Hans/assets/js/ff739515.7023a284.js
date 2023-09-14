"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[99984],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>u});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function A(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=r.createContext({}),c=function(e){var t=r.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):A(A({},t),e)),o},l=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(o),p=n,u=d["".concat(a,".").concat(p)]||d[p]||m[p]||i;return o?r.createElement(u,A(A({ref:t},l),{},{components:o})):r.createElement(u,A({ref:t},l))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,A=new Array(i);A[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[d]="string"==typeof e?e:n,A[1]=s;for(var c=2;c<i;c++)A[c]=o[c];return r.createElement.apply(null,A)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},82663:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>A,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const i={title:"Create temp cylindrical sheet body using SOLIDWORKS modeler API",caption:"Create Temp Cylindrical Sheet Body",description:"Example demonstrates how to create temp body of a cylindrical sheet",image:"cylindrical-surface.png",labels:["topology","geometry","sheet","modeler","cylinder"]},A=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-cylindrical-surface/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-cylindrical-surface/index",title:"Create temp cylindrical sheet body using SOLIDWORKS modeler API",description:"Example demonstrates how to create temp body of a cylindrical sheet",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-cylindrical-surface/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-cylindrical-surface",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-cylindrical-surface/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-cylindrical-surface/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-cylindrical-surface/index.md",tags:[],version:"current",frontMatter:{title:"Create temp cylindrical sheet body using SOLIDWORKS modeler API",caption:"Create Temp Cylindrical Sheet Body",description:"Example demonstrates how to create temp body of a cylindrical sheet",image:"cylindrical-surface.png",labels:["topology","geometry","sheet","modeler","cylinder"]},sidebar:"tutorialSidebar",previous:{title:"Create temp solid body box using SOLIDWORKS API and IModeler interface",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-box-body/"},next:{title:"Create elliptical swept temp body using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-elliptical-sweep/"}},a={},c=[],l={toc:c},d="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cylindrical sheet body",src:o(99279).Z,width:"260",height:"240"})),(0,n.kt)("p",null,"This example demonstrates how to create a sheet body from the cylindrical surface using SOLIDWORKS API."),(0,n.kt)("p",null,"Run the macro and temp body is displayed. Body can be rotated and selected but it is not presented in the feature tree. Continue the macro execution to destroy the body."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swModeler As SldWorks.Modeler\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swModeler = swApp.GetModeler\n        \n        Const RADIUS As Double = 0.1\n        Const HEIGHT As Double = 0.2\n        \n        Dim dCenter(2) As Double\n        Dim dAxis(2) As Double\n        Dim dRef(2) As Double\n        \n        Dim swSurf As SldWorks.Surface\n        Dim swBody As SldWorks.Body2\n        Dim swCurve(2) As SldWorks.Curve\n        \n        dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0\n        dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1\n        dRef(0) = 1: dRef(1) = 0: dRef(2) = 0\n        \n        Set swSurf = swModeler.CreateCylindricalSurface2(dCenter, dAxis, dRef, RADIUS)\n        \n        Dim dPt(2) As Double\n        dPt(0) = 0: dPt(1) = RADIUS: dPt(2) = 0\n        Set swCurve(0) = swModeler.CreateArc(dCenter, dAxis, RADIUS, dPt, dPt)\n               \n        dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = HEIGHT\n        dPt(0) = 0: dPt(1) = RADIUS: dPt(2) = HEIGHT\n        Set swCurve(2) = swModeler.CreateArc(dCenter, dAxis, RADIUS, dPt, dPt)\n        \n        Set swBody = swSurf.CreateTrimmedSheet4(swCurve, True)\n        \n        swBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectable\n        \n        Stop \'continue to hide the body\n        \n        Set swBody = Nothing\n        \n    Else\n        MsgBox "Please open the part document"\n    End If\n    \nEnd Sub\n')))}m.isMDXComponent=!0},99279:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);