"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[32897],{3905:(e,o,r)=>{r.d(o,{Zo:()=>d,kt:()=>g});var t=r(67294);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function i(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?i(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function a(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),c=function(e){var o=t.useContext(l),r=o;return e&&(r="function"==typeof e?e(o):s(s({},o),e)),r},d=function(e){var o=c(e.components);return t.createElement(l.Provider,{value:o},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return r?t.createElement(g,s(s({ref:o},d),{},{components:r})):t.createElement(g,s({ref:o},d))}));function g(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var l in o)hasOwnProperty.call(o,l)&&(a[l]=o[l]);a.originalType=e,a[p]="string"==typeof e?e:n,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},926:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(87462),n=(r(67294),r(3905));const i={title:"Working with geometry (IModeler) using SOLIDWORKS API",caption:"Geometry",description:"Collection of examples and articles related to SOLIDWORKS model geometry topology.",image:"solidworks-geometry-api.png",sidebar_position:5},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/index",title:"Working with geometry (IModeler) using SOLIDWORKS API",description:"Collection of examples and articles related to SOLIDWORKS model geometry topology.",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Working with geometry (IModeler) using SOLIDWORKS API",caption:"Geometry",description:"Collection of examples and articles related to SOLIDWORKS model geometry topology.",image:"solidworks-geometry-api.png",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Starting SOLIDWORKS application in background (hidden)",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/stand-alone/start-background/"},next:{title:"Code examples of creating geometrical primitives using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/"}},l={},c=[{value:"Previewing Temp Geometry",id:"previewing-temp-geometry",level:2},{value:"Previewing Curves",id:"previewing-curves",level:3}],d={toc:c},p="wrapper";function u(e){let{components:o,...i}=e;return(0,n.kt)(p,(0,t.Z)({},d,i,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SOLIDWORKS models geometry API",src:r(17708).Z,width:"486",height:"329"}),"{ width=250 }"),(0,n.kt)("p",null,"SOLIDWORKS API provides a low level access to geometry generation and processing via ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModeler.html"},"IModeler")," interface."),(0,n.kt)("p",null,"This interface allows to manipulate the geometry on a kernel level:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create surfaces from boundary representation (BREP) data"),(0,n.kt)("li",{parentName:"ul"},"Create curves"),(0,n.kt)("li",{parentName:"ul"},"Trim curves and surfaces")),(0,n.kt)("p",null,"Geometry API is most commonly used to generate and modify bodies in ",(0,n.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/macro-feature/"},"Macro Features"),"."),(0,n.kt)("p",null,"This section contains examples of working with geometry (adding, editing) using SOLIDWORKS API."),(0,n.kt)("h2",{id:"previewing-temp-geometry"},"Previewing Temp Geometry"),(0,n.kt)("p",null,"Temporary geometry is invisible and resides in memory. However it can be very useful to preview the geometry to troubleshoot. Below are code snippets allowing to preview different types of temp geometry"),(0,n.kt)("h3",{id:"previewing-curves"},"Previewing Curves"),(0,n.kt)("p",null,"Curves can be previewed by converting them into the temp wire bodies which can be displayed in the graphics area."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"PreviewCurves swModel, swCurve1, swCurve2, swCurve3\n...\nSub PreviewCurves(model As SldWorks.ModelDoc2, ParamArray curves() As Variant)\n    \n    Dim i As Integer\n    Dim swPreviewBody() As SldWorks.Body2\n    \n    If Not IsEmpty(curves) Then\n        \n        ReDim swPreviewBody(UBound(curves))\n        \n        For i = 0 To UBound(curves)\n            Dim swCurve As SldWorks.Curve\n            Set swCurve = curves(i)\n            Set swPreviewBody(i) = swCurve.CreateWireBody()\n            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n        Next\n        \n    End If\n    \n    Stop\n    \n    If Not IsEmpty(curves) Then\n        For i = 0 To UBound(curves)\n            Set swPreviewBody(i) = Nothing\n        Next\n    End If\n    \nEnd Sub\n")))}u.isMDXComponent=!0},17708:(e,o,r)=>{r.d(o,{Z:()=>t});const t=r.p+"assets/images/solidworks-geometry-api-078338f9688b73c20df86fc8de56d511.png"}}]);