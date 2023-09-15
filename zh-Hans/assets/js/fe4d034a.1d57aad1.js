"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[82980],{3905:(e,t,i)=>{i.d(t,{Zo:()=>M,kt:()=>p});var r=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=r.createContext({}),a=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):m(m({},t),e)),i},M=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},A=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,M=s(e,["components","mdxType","originalType","parentName"]),c=a(i),A=o,p=c["".concat(l,".").concat(A)]||c[A]||d[A]||n;return i?r.createElement(p,m(m({ref:t},M),{},{components:i})):r.createElement(p,m({ref:t},M))}));function p(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,m=new Array(n);m[0]=A;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,m[1]=s;for(var a=2;a<n;a++)m[a]=i[a];return r.createElement.apply(null,m)}return r.createElement.apply(null,i)}A.displayName="MDXCreateElement"},72843:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>a});var r=i(87462),o=(i(67294),i(3905));const n={title:"\u4f7f\u7528 SOLIDWORKS API \u548c IModeler \u63a5\u53e3\u521b\u5efa\u4e34\u65f6\u5b9e\u4f53\u76d2\u5b50",image:"box-body.png",labels:["primitive","box","temp body","modeler"]},m=void 0,s={unversionedId:"codestack/solidworks-api/geometry/primitives/create-box-body/index",id:"codestack/solidworks-api/geometry/primitives/create-box-body/index",title:"\u4f7f\u7528 SOLIDWORKS API \u548c IModeler \u63a5\u53e3\u521b\u5efa\u4e34\u65f6\u5b9e\u4f53\u76d2\u5b50",description:"\u76d2\u5b50\u5b9e\u4f53{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/geometry/primitives/create-box-body/index.md",sourceDirName:"codestack/solidworks-api/geometry/primitives/create-box-body",slug:"/codestack/solidworks-api/geometry/primitives/create-box-body/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/primitives/create-box-body/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/primitives/create-box-body/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 SOLIDWORKS API \u548c IModeler \u63a5\u53e3\u521b\u5efa\u4e34\u65f6\u5b9e\u4f53\u76d2\u5b50",image:"box-body.png",labels:["primitive","box","temp body","modeler"]},sidebar:"tutorialSidebar",previous:{title:"Code Examples for Creating Geometric Primitives using the SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/primitives/"},next:{title:"\u4f7f\u7528SOLIDWORKS\u6a21\u578bAPI\u521b\u5efa\u4e34\u65f6\u5706\u67f1\u9762\u7247\u4f53",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/primitives/create-cylindrical-surface/"}},l={},a=[],M={toc:a},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u76d2\u5b50\u5b9e\u4f53",src:i(17444).Z,width:"357",height:"381"}),"{ width=250 }"),(0,o.kt)("p",null,"\u6b64 VBA \u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528 SOLIDWORKS API \u521b\u5efa\u5e76\u663e\u793a\u4e34\u65f6\u5b9e\u4f53\u76d2\u5b50\uff0c\u901a\u8fc7\u63d0\u4f9b\u57fa\u51c6\u9762\u4e2d\u5fc3\u70b9\u7684\u5750\u6807\u3001\u65b9\u5411\u3001\u5bbd\u5ea6\u3001\u957f\u5ea6\u548c\u9ad8\u5ea6\u3002"),(0,o.kt)("p",null,"\u5b8f\u505c\u6b62\u6267\u884c\u5e76\u663e\u793a\u5b9e\u4f53\u3002\u7ee7\u7eed\u6267\u884c\u5b8f\u4ee5\u9500\u6bc1\u4e34\u65f6\u5b9e\u4f53\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const WIDTH As Double = 0.01\nConst LENGTH As Double = 0.01\nConst HEIGHT As Double = 0.01\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    If Not swPart Is Nothing Then\n    \n        Dim swModeler As SldWorks.Modeler\n        Set swModeler = swApp.GetModeler\n        \n        Dim dCenter(2) As Double\n        dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0\n        \n        Dim dAxis(2) As Double\n        dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1\n                        \n        Dim dBoxData(8) As Double\n        dBoxData(0) = dCenter(0): dBoxData(1) = dCenter(1): dBoxData(2) = dCenter(2)\n        dBoxData(3) = dAxis(0): dBoxData(4) = dAxis(1): dBoxData(5) = dAxis(2)\n        dBoxData(6) = WIDTH: dBoxData(7) = LENGTH: dBoxData(8) = HEIGHT\n        \n        Dim swBody As SldWorks.Body2\n        \n        Set swBody = swModeler.CreateBodyFromBox3(dBoxData)\n        \n        swBody.Display3 swPart, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectable\n        \n        Stop \'\u7ee7\u7eed\u9690\u85cf\u5b9e\u4f53\n        \n        Set swBody = Nothing\n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u96f6\u4ef6\u6587\u6863"\n    End If\n    \nEnd Sub\n')))}d.isMDXComponent=!0},17444:(e,t,i)=>{i.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);