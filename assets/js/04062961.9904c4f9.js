"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[3521],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={title:"VBA macro to hide all selected features from the SOLIDWORKS file tree",caption:"Hide Features In The Tree",description:"VBA macro which hides features and makes them invisible in the SOLIDWORKS Feature Manager tree",image:"hidden-features.png",labels:["feature","hide","invisible"]},s=void 0,o={unversionedId:"codestack/solidworks-api/document/features-manager/hide-features/index",id:"codestack/solidworks-api/document/features-manager/hide-features/index",title:"VBA macro to hide all selected features from the SOLIDWORKS file tree",description:"VBA macro which hides features and makes them invisible in the SOLIDWORKS Feature Manager tree",source:"@site/docs/codestack/solidworks-api/document/features-manager/hide-features/index.md",sourceDirName:"codestack/solidworks-api/document/features-manager/hide-features",slug:"/codestack/solidworks-api/document/features-manager/hide-features/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/features-manager/hide-features/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/features-manager/hide-features/index.md",tags:[],version:"current",frontMatter:{title:"VBA macro to hide all selected features from the SOLIDWORKS file tree",caption:"Hide Features In The Tree",description:"VBA macro which hides features and makes them invisible in the SOLIDWORKS Feature Manager tree",image:"hidden-features.png",labels:["feature","hide","invisible"]},sidebar:"tutorialSidebar",previous:{title:"VBA macro to get feature type names using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/features-manager/get-feature-type-name/"},next:{title:"Identify SOLIDWORKS API feature definition and specific type",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/features-manager/identify-feature/"}},l={},d=[],c={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This VBA macro allows to make invisible selected features in the tree. The features still continue to be fully operational and visible in the graphics area (e.g. planes), but not visible in the feature manager tree."),(0,a.kt)("p",null,"Even default features (such as planes) can be made invisible."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sketch, Right and Top planes hidden in the feature manager tree",src:r(95676).Z,width:"292",height:"343"})),(0,a.kt)("p",null,"To show the hidden features use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/features-manager/reveal-hidden-features/"},"Reveal Hidden Features")," macro."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim i As Integer\n        \n        For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n            Dim swFeat As SldWorks.Feature\n            Set swFeat = swSelMgr.GetSelectedObject6(i, -1)\n            swFeat.SetUIState swUIStates_e.swIsHiddenInFeatureMgr, True\n        Next\n        \n        swModel.EditRebuild3\n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n')))}p.isMDXComponent=!0},95676:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hidden-features-a62d866db96e284d07207505cc8160ab.png"}}]);