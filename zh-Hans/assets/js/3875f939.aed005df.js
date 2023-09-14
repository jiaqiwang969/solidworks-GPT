"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[47016],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,h=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(h,s(s({ref:t},d),{},{components:r})):n.createElement(h,s({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88935:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"VBA macro to hide all selected features from the SOLIDWORKS file tree",caption:"Hide Features In The Tree",description:"VBA macro which hides features and makes them invisible in the SOLIDWORKS Feature Manager tree",image:"hidden-features.png",labels:["feature","hide","invisible"]},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/hide-features/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/hide-features/index",title:"VBA macro to hide all selected features from the SOLIDWORKS file tree",description:"VBA macro which hides features and makes them invisible in the SOLIDWORKS Feature Manager tree",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/hide-features/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/hide-features",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/hide-features/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/hide-features/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/hide-features/index.md",tags:[],version:"current",frontMatter:{title:"VBA macro to hide all selected features from the SOLIDWORKS file tree",caption:"Hide Features In The Tree",description:"VBA macro which hides features and makes them invisible in the SOLIDWORKS Feature Manager tree",image:"hidden-features.png",labels:["feature","hide","invisible"]},sidebar:"tutorialSidebar",previous:{title:"VBA Macro to hide all sketches in the model using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/hide-all-sketches/"},next:{title:"Using SOLIDWORKS API to render feature tree in HTML page",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/html-feature-tree/"}},c={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This VBA macro allows to make invisible selected features in the tree. The features still continue to be fully operational and visible in the graphics area (e.g. planes), but not visible in the feature manager tree."),(0,o.kt)("p",null,"Even default features (such as planes) can be made invisible."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sketch, Right and Top planes hidden in the feature manager tree",src:r(10918).Z,width:"292",height:"343"})),(0,o.kt)("p",null,"To show the hidden features use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/features-manager/reveal-hidden-features/"},"Reveal Hidden Features")," macro."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim i As Integer\n        \n        For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n            Dim swFeat As SldWorks.Feature\n            Set swFeat = swSelMgr.GetSelectedObject6(i, -1)\n            swFeat.SetUIState swUIStates_e.swIsHiddenInFeatureMgr, True\n        Next\n        \n        swModel.EditRebuild3\n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n')))}p.isMDXComponent=!0},10918:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hidden-features-a62d866db96e284d07207505cc8160ab.png"}}]);