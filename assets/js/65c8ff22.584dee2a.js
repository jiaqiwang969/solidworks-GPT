"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[12083],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),d=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=d(e.components);return o.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(t),u=n,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return t?o.createElement(g,s(s({ref:r},c),{},{components:t})):o.createElement(g,s({ref:r},c))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[p]="string"==typeof e?e:n,s[1]=a;for(var d=2;d<i;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},24602:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(87462),n=(t(67294),t(3905));const i={title:"Working with geometry (IModeler) using SOLIDWORKS API",caption:"Geometry",description:"Collection of examples and articles related to SOLIDWORKS model geometry topology.",image:"solidworks-geometry-api.png",order:5},s=void 0,a={unversionedId:"codestack/solidworks-api/geometry/index",id:"codestack/solidworks-api/geometry/index",title:"Working with geometry (IModeler) using SOLIDWORKS API",description:"Collection of examples and articles related to SOLIDWORKS model geometry topology.",source:"@site/docs/codestack/solidworks-api/geometry/index.md",sourceDirName:"codestack/solidworks-api/geometry",slug:"/codestack/solidworks-api/geometry/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/geometry/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/index.md",tags:[],version:"current",frontMatter:{title:"Working with geometry (IModeler) using SOLIDWORKS API",caption:"Geometry",description:"Collection of examples and articles related to SOLIDWORKS model geometry topology.",image:"solidworks-geometry-api.png",order:5},sidebar:"tutorialSidebar",previous:{title:"Generate report for the SOLIDWORKS file versions (created and last saved) for all the files in the folder",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/versions-report/"},next:{title:"SOLIDWORKS macro to find the geometrical difference between parts",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/geometry/bodies-diff/"}},l={},d=[{value:"Previewing Temp Geometry",id:"previewing-temp-geometry",level:2},{value:"Previewing Curves",id:"previewing-curves",level:3}],c={toc:d},p="wrapper";function m(e){let{components:r,...i}=e;return(0,n.kt)(p,(0,o.Z)({},c,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SOLIDWORKS models geometry API",src:t(97544).Z,width:"486",height:"329"}),"{ width=250 }"),(0,n.kt)("p",null,"SOLIDWORKS API provides a low level access to geometry generation and processing via ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModeler.html"},"IModeler")," interface."),(0,n.kt)("p",null,"This interface allows to manipulate the geometry on a kernel level:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create surfaces from boundary representation (BREP) data"),(0,n.kt)("li",{parentName:"ul"},"Create curves"),(0,n.kt)("li",{parentName:"ul"},"Trim curves and surfaces")),(0,n.kt)("p",null,"Geometry API is most commonly used to generate and modify bodies in ",(0,n.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/macro-feature/"},"Macro Features"),"."),(0,n.kt)("p",null,"This section contains examples of working with geometry (adding, editing) using SOLIDWORKS API."),(0,n.kt)("h2",{id:"previewing-temp-geometry"},"Previewing Temp Geometry"),(0,n.kt)("p",null,"Temporary geometry is invisible and resides in memory. However it can be very useful to preview the geometry to troubleshoot. Below are code snippets allowing to preview different types of temp geometry"),(0,n.kt)("h3",{id:"previewing-curves"},"Previewing Curves"),(0,n.kt)("p",null,"Curves can be previewed by converting them into the temp wire bodies which can be displayed in the graphics area."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"PreviewCurves swModel, swCurve1, swCurve2, swCurve3\n...\nSub PreviewCurves(model As SldWorks.ModelDoc2, ParamArray curves() As Variant)\n    \n    Dim i As Integer\n    Dim swPreviewBody() As SldWorks.Body2\n    \n    If Not IsEmpty(curves) Then\n        \n        ReDim swPreviewBody(UBound(curves))\n        \n        For i = 0 To UBound(curves)\n            Dim swCurve As SldWorks.Curve\n            Set swCurve = curves(i)\n            Set swPreviewBody(i) = swCurve.CreateWireBody()\n            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n        Next\n        \n    End If\n    \n    Stop\n    \n    If Not IsEmpty(curves) Then\n        For i = 0 To UBound(curves)\n            Set swPreviewBody(i) = Nothing\n        Next\n    End If\n    \nEnd Sub\n")))}m.isMDXComponent=!0},97544:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/solidworks-geometry-api-078338f9688b73c20df86fc8de56d511.png"}}]);