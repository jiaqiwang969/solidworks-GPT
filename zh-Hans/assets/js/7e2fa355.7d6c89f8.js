"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[57950],{3905:(e,n,s)=>{s.d(n,{Zo:()=>d,kt:()=>u});var i=s(67294);function t(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function o(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,i)}return s}function r(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?o(Object(s),!0).forEach((function(n){t(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function a(e,n){if(null==e)return{};var s,i,t=function(e,n){if(null==e)return{};var s,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)s=o[i],n.indexOf(s)>=0||(t[s]=e[s]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)s=o[i],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}var l=i.createContext({}),c=function(e){var n=i.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):r(r({},n),e)),s},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},w="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var s=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),w=c(s),p=t,u=w["".concat(l,".").concat(p)]||w[p]||m[p]||o;return s?i.createElement(u,r(r({ref:n},d),{},{components:s})):i.createElement(u,r({ref:n},d))}));function u(e,n){var s=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=s.length,r=new Array(o);r[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[w]="string"==typeof e?e:t,r[1]=a;for(var c=2;c<o;c++)r[c]=s[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,s)}p.displayName="MDXCreateElement"},71410:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=s(87462),t=(s(67294),s(3905));const o={caption:"Select All Drawing Dimensions",title:"Macro to select all dimensions from the drawing views of the active sheet of SOLIDWORKS drawing",description:"VBA macro demonstrates how to select all dimensions from the drawing views of the active sheet of SOLIDWORKS drawing using SOLIDWORKS API in a batch mode",image:"select-all-dimensions.png"},r=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-all-drawing-dimensions/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-all-drawing-dimensions/index",title:"Macro to select all dimensions from the drawing views of the active sheet of SOLIDWORKS drawing",description:"VBA macro demonstrates how to select all dimensions from the drawing views of the active sheet of SOLIDWORKS drawing using SOLIDWORKS API in a batch mode",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-all-drawing-dimensions/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-all-drawing-dimensions",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-all-drawing-dimensions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-all-drawing-dimensions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-all-drawing-dimensions/index.md",tags:[],version:"current",frontMatter:{caption:"Select All Drawing Dimensions",title:"Macro to select all dimensions from the drawing views of the active sheet of SOLIDWORKS drawing",description:"VBA macro demonstrates how to select all dimensions from the drawing views of the active sheet of SOLIDWORKS drawing using SOLIDWORKS API in a batch mode",image:"select-all-dimensions.png"},sidebar:"tutorialSidebar",previous:{title:"Fix missing Visual Studio SOLIDWORKS API SDK project templates",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sdk-installation/"},next:{title:"Select all sketch elements using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-all-sketch-elements/"}},l={},c=[],d={toc:c},w="wrapper";function m(e){let{components:n,...o}=e;return(0,t.kt)(w,(0,i.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"All dimensions selected in the drawing views",src:s(83039).Z,width:"603",height:"686"}),"{ width=400 }"),(0,t.kt)("p",null,"This VBA macro demonstrates how to find all dimensions of all drawing views in the active sheet of the SOLIDWORKS drawing."),(0,t.kt)("p",null,"All dimensions are selected in a batch mode."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Set swDraw = swModel\n    \n    Dim swSheet As SldWorks.Sheet\n    \n    Set swSheet = swDraw.GetCurrentSheet\n    \n    Dim vViews As Variant\n    \n    vViews = swSheet.GetViews\n    \n    Dim swDispDims() As SldWorks.DisplayDimension\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vViews)\n        \n        Dim swView As SldWorks.View\n        Set swView = vViews(i)\n        \n        Dim swDispDim As SldWorks.DisplayDimension\n        Set swDispDim = swView.GetFirstDisplayDimension5()\n        \n        While Not swDispDim Is Nothing\n        \n            If (Not swDispDims) = -1 Then\n                ReDim swDispDims(0)\n            Else\n                ReDim Preserve swDispDims(UBound(swDispDims) + 1)\n            End If\n            \n            Debug.Print swDispDim.GetDimension2(0).FullName\n            \n            Set swDispDims(UBound(swDispDims)) = swDispDim\n            \n            Set swDispDim = swDispDim.GetNext5\n        \n        Wend\n        \n    Next\n    \n    Dim selCount As Long\n    selCount = swModel.Extension.MultiSelect2(swDispDims, False, Nothing)\n    \n    If selCount <> UBound(swDispDims) + 1 Then\n        Err.Raise vbError, "", "Failed to select dimensions"\n    End If\n    \nEnd Sub\n')))}m.isMDXComponent=!0},83039:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/select-all-dimensions-2b7711e0bf1bc6391735a0e81d56ccb5.png"}}]);