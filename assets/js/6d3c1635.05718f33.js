"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[86066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>w,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},w=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,w=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return n?o.createElement(u,i(i({ref:t},w),{},{components:n})):o.createElement(u,i({ref:t},w))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const s={title:"Pan model views with screen pixels using SOLIDWORKS API",caption:"Pan Model View",description:"Example demonstrates how to pan a model view with view transforms by providing the offset in the screen pixels",image:"pan-view.png"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/transform-pan-view/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/transform-pan-view/index",title:"Pan model views with screen pixels using SOLIDWORKS API",description:"Example demonstrates how to pan a model view with view transforms by providing the offset in the screen pixels",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/transform-pan-view/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/transform-pan-view",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/transform-pan-view/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/transform-pan-view/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/transform-pan-view/index.md",tags:[],version:"current",frontMatter:{title:"Pan model views with screen pixels using SOLIDWORKS API",caption:"Pan Model View",description:"Example demonstrates how to pan a model view with view transforms by providing the offset in the screen pixels",image:"pan-view.png"},sidebar:"tutorialSidebar",previous:{title:"Compare model views transformations using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/compare-model-views/"},next:{title:"Features Manager Tree automation using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/"}},c={},l=[],w={toc:l},d="wrapper";function p(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,o.Z)({},w,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Model View Panning",src:n(95003).Z,width:"431",height:"421"}),"{ width=350 }"),(0,r.kt)("p",null,"This example demonstrates how to move the view (pan) by specifying the offset in X and Y coordinates of the screen (pixels). Macro transforms the offset into the model view 3D space and updates the view positions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swView As SldWorks.ModelView\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Set swView = swModel.ActiveView\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim dVec(2) As Double\n    dVec(0) = 100\n    dVec(1) = 0\n    dVec(2) = 0\n    \n    Dim swVector As SldWorks.MathVector\n    Set swVector = swMathUtils.CreateVector(dVec)\n    \n    Dim swViewToScreenTransform As SldWorks.MathTransform\n    Set swViewToScreenTransform = swView.Transform\n    \n    Dim swScreenToViewTransform As SldWorks.MathTransform\n    Set swScreenToViewTransform = swViewToScreenTransform.Inverse\n    \n    Dim swDestVec As SldWorks.MathVector\n    Set swDestVec = swVector.MultiplyTransform(swScreenToViewTransform)\n    \n    Set swDestVec = swDestVec.MultiplyTransform(swView.Orientation3)\n    \n    Set swDestVec = swDestVec.Scale(swView.Scale2)\n    \n    Dim swTranslateVec As SldWorks.MathVector\n    Set swTranslateVec = swView.Translation3\n    \n    Set swTranslateVec = swTranslateVec.Add(swDestVec)\n    \n    swView.Translation3 = swTranslateVec\n    \n    swView.GraphicsRedraw Nothing\n    \nEnd Sub\n")))}p.isMDXComponent=!0},95003:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pan-view-96810581fdcd19d39a78d6a1e74f75be.png"}}]);