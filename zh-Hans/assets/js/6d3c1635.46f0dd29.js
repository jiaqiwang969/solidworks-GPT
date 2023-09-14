"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[86066],{3905:(e,n,t)=>{t.d(n,{Zo:()=>w,kt:()=>u});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},w=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,w=a(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return t?o.createElement(u,i(i({ref:n},w),{},{components:t})):o.createElement(u,i({ref:n},w))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74825:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const s={title:"Pan model views with screen pixels using SOLIDWORKS API",caption:"Pan Model View",description:"Example demonstrates how to pan a model view with view transforms by providing the offset in the screen pixels",image:"pan-view.png"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/transform-pan-view/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/transform-pan-view/index",title:"Pan model views with screen pixels using SOLIDWORKS API",description:"Example demonstrates how to pan a model view with view transforms by providing the offset in the screen pixels",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/transform-pan-view/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/transform-pan-view",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/transform-pan-view/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/transform-pan-view/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/transform-pan-view/index.md",tags:[],version:"current",frontMatter:{title:"Pan model views with screen pixels using SOLIDWORKS API",caption:"Pan Model View",description:"Example demonstrates how to pan a model view with view transforms by providing the offset in the screen pixels",image:"pan-view.png"},sidebar:"tutorialSidebar",previous:{title:"Compare model views transformations using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/compare-model-views/"},next:{title:"Features Manager Tree automation using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/"}},c={},l=[],w={toc:l},d="wrapper";function p(e){let{components:n,...s}=e;return(0,r.kt)(d,(0,o.Z)({},w,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Model View Panning",src:t(95003).Z,width:"431",height:"421"}),"{ width=350 }"),(0,r.kt)("p",null,"This example demonstrates how to move the view (pan) by specifying the offset in X and Y coordinates of the screen (pixels). Macro transforms the offset into the model view 3D space and updates the view positions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swView As SldWorks.ModelView\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Set swView = swModel.ActiveView\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim dVec(2) As Double\n    dVec(0) = 100\n    dVec(1) = 0\n    dVec(2) = 0\n    \n    Dim swVector As SldWorks.MathVector\n    Set swVector = swMathUtils.CreateVector(dVec)\n    \n    Dim swViewToScreenTransform As SldWorks.MathTransform\n    Set swViewToScreenTransform = swView.Transform\n    \n    Dim swScreenToViewTransform As SldWorks.MathTransform\n    Set swScreenToViewTransform = swViewToScreenTransform.Inverse\n    \n    Dim swDestVec As SldWorks.MathVector\n    Set swDestVec = swVector.MultiplyTransform(swScreenToViewTransform)\n    \n    Set swDestVec = swDestVec.MultiplyTransform(swView.Orientation3)\n    \n    Set swDestVec = swDestVec.Scale(swView.Scale2)\n    \n    Dim swTranslateVec As SldWorks.MathVector\n    Set swTranslateVec = swView.Translation3\n    \n    Set swTranslateVec = swTranslateVec.Add(swDestVec)\n    \n    swView.Translation3 = swTranslateVec\n    \n    swView.GraphicsRedraw Nothing\n    \nEnd Sub\n")))}p.isMDXComponent=!0},95003:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/pan-view-96810581fdcd19d39a78d6a1e74f75be.png"}}]);