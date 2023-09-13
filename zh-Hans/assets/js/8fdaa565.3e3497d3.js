"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[42586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},w="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),w=l(n),m=o,f=w["".concat(c,".").concat(m)]||w[m]||p[m]||s;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[w]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={title:"Pan model views with screen pixels using SOLIDWORKS API",caption:"Pan Model View",description:"Example demonstrates how to pan a model view with view transforms by providing the offset in the screen pixels",image:"pan-view.png"},i=void 0,a={unversionedId:"codestack/solidworks-api/document/model-view/transform-pan-view/index",id:"codestack/solidworks-api/document/model-view/transform-pan-view/index",title:"Pan model views with screen pixels using SOLIDWORKS API",description:"Example demonstrates how to pan a model view with view transforms by providing the offset in the screen pixels",source:"@site/docs/codestack/solidworks-api/document/model-view/transform-pan-view/index.md",sourceDirName:"codestack/solidworks-api/document/model-view/transform-pan-view",slug:"/codestack/solidworks-api/document/model-view/transform-pan-view/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/model-view/transform-pan-view/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/model-view/transform-pan-view/index.md",tags:[],version:"current",frontMatter:{title:"Pan model views with screen pixels using SOLIDWORKS API",caption:"Pan Model View",description:"Example demonstrates how to pan a model view with view transforms by providing the offset in the screen pixels",image:"pan-view.png"},sidebar:"tutorialSidebar",previous:{title:"Compare model views transformations using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/model-view/compare-model-views/"},next:{title:"Working with Notes using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/notes/"}},c={},l=[],d={toc:l},w="wrapper";function p(e){let{components:t,...s}=e;return(0,o.kt)(w,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Model View Panning",src:n(24992).Z,width:"431",height:"421"}),"{ width=350 }"),(0,o.kt)("p",null,"This example demonstrates how to move the view (pan) by specifying the offset in X and Y coordinates of the screen (pixels). Macro transforms the offset into the model view 3D space and updates the view positions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swView As SldWorks.ModelView\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Set swView = swModel.ActiveView\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim dVec(2) As Double\n    dVec(0) = 100\n    dVec(1) = 0\n    dVec(2) = 0\n    \n    Dim swVector As SldWorks.MathVector\n    Set swVector = swMathUtils.CreateVector(dVec)\n    \n    Dim swViewToScreenTransform As SldWorks.MathTransform\n    Set swViewToScreenTransform = swView.Transform\n    \n    Dim swScreenToViewTransform As SldWorks.MathTransform\n    Set swScreenToViewTransform = swViewToScreenTransform.Inverse\n    \n    Dim swDestVec As SldWorks.MathVector\n    Set swDestVec = swVector.MultiplyTransform(swScreenToViewTransform)\n    \n    Set swDestVec = swDestVec.MultiplyTransform(swView.Orientation3)\n    \n    Set swDestVec = swDestVec.Scale(swView.Scale2)\n    \n    Dim swTranslateVec As SldWorks.MathVector\n    Set swTranslateVec = swView.Translation3\n    \n    Set swTranslateVec = swTranslateVec.Add(swDestVec)\n    \n    swView.Translation3 = swTranslateVec\n    \n    swView.GraphicsRedraw Nothing\n    \nEnd Sub\n")))}p.isMDXComponent=!0},24992:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pan-view-96810581fdcd19d39a78d6a1e74f75be.png"}}]);