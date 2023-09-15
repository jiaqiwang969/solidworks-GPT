"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[44115],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=d(t),m=o,f=l["".concat(c,".").concat(m)]||l[m]||p[m]||s;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[l]="string"==typeof e?e:o,i[1]=a;for(var d=2;d<s;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56520:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));const s={caption:"Traverse Feature Tree Reversed",title:"Traverse SOLIDWORKS feature manager tree in the reversed order",description:"VBA macro to traverse feature manager tree in SOLIDWORKS document in the reversed order"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse/index",title:"Traverse SOLIDWORKS feature manager tree in the reversed order",description:"VBA macro to traverse feature manager tree in SOLIDWORKS document in the reversed order",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse/index.md",tags:[],version:"current",frontMatter:{caption:"Traverse Feature Tree Reversed",title:"Traverse SOLIDWORKS feature manager tree in the reversed order",description:"VBA macro to traverse feature manager tree in SOLIDWORKS document in the reversed order"},sidebar:"tutorialSidebar",previous:{title:"Traverse feature manager nodes using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-feature-nodes/"},next:{title:"Traversing the components tree using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traversing-tree/"}},c={},d=[],u={toc:d},l="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(l,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This VBA macro demonstrates how to traverse feature manager tree of the active SOLIDWORKS document in the reversed order."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim i As Integer\n    \n    i = 0\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Do\n        \n        Set swFeat = swModel.FeatureByPositionReverse(i)\n        i = i + 1\n        \n        If Not swFeat Is Nothing Then\n            Debug.Print swFeat.Name\n        End If\n        \n    Loop While Not swFeat Is Nothing\n    \nEnd Sub\n")))}p.isMDXComponent=!0}}]);