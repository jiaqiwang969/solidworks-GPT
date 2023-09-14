"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[3783],{3905:(e,n,i)=>{i.d(n,{Zo:()=>d,kt:()=>u});var s=i(67294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,s)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,s,t=function(e,n){if(null==e)return{};var i,s,t={},o=Object.keys(e);for(s=0;s<o.length;s++)i=o[s],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)i=o[s],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var l=s.createContext({}),c=function(e){var n=s.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},d=function(e){var n=c(e.components);return s.createElement(l.Provider,{value:n},e.children)},w="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var i=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),w=c(i),p=t,u=w["".concat(l,".").concat(p)]||w[p]||m[p]||o;return i?s.createElement(u,r(r({ref:n},d),{},{components:i})):s.createElement(u,r({ref:n},d))}));function u(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=i.length,r=new Array(o);r[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[w]="string"==typeof e?e:t,r[1]=a;for(var c=2;c<o;c++)r[c]=i[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,i)}p.displayName="MDXCreateElement"},94276:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=i(87462),t=(i(67294),i(3905));const o={caption:"Select All Drawing Dimensions",title:"Macro to select all dimensions from the drawing views of the active sheet of SOLIDWORKS drawing",description:"VBA macro demonstrates how to select all dimensions from the drawing views of the active sheet of SOLIDWORKS drawing using SOLIDWORKS API in a batch mode",image:"select-all-dimensions.png"},r=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-all-drawing-dimensions/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-all-drawing-dimensions/index",title:"Macro to select all dimensions from the drawing views of the active sheet of SOLIDWORKS drawing",description:"VBA macro demonstrates how to select all dimensions from the drawing views of the active sheet of SOLIDWORKS drawing using SOLIDWORKS API in a batch mode",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-all-drawing-dimensions/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-all-drawing-dimensions",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-all-drawing-dimensions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-all-drawing-dimensions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-all-drawing-dimensions/index.md",tags:[],version:"current",frontMatter:{caption:"Select All Drawing Dimensions",title:"Macro to select all dimensions from the drawing views of the active sheet of SOLIDWORKS drawing",description:"VBA macro demonstrates how to select all dimensions from the drawing views of the active sheet of SOLIDWORKS drawing using SOLIDWORKS API in a batch mode",image:"select-all-dimensions.png"},sidebar:"tutorialSidebar",previous:{title:"Selecting entities in drawing view using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/drawing-view-entities/"},next:{title:"Select all sketch elements using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-all-sketch-elements/"}},l={},c=[],d={toc:c},w="wrapper";function m(e){let{components:n,...o}=e;return(0,t.kt)(w,(0,s.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"All dimensions selected in the drawing views",src:i(94450).Z,width:"603",height:"686"}),"{ width=400 }"),(0,t.kt)("p",null,"This VBA macro demonstrates how to find all dimensions of all drawing views in the active sheet of the SOLIDWORKS drawing."),(0,t.kt)("p",null,"All dimensions are selected in a batch mode."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Set swDraw = swModel\n    \n    Dim swSheet As SldWorks.Sheet\n    \n    Set swSheet = swDraw.GetCurrentSheet\n    \n    Dim vViews As Variant\n    \n    vViews = swSheet.GetViews\n    \n    Dim swDispDims() As SldWorks.DisplayDimension\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vViews)\n        \n        Dim swView As SldWorks.View\n        Set swView = vViews(i)\n        \n        Dim swDispDim As SldWorks.DisplayDimension\n        Set swDispDim = swView.GetFirstDisplayDimension5()\n        \n        While Not swDispDim Is Nothing\n        \n            If (Not swDispDims) = -1 Then\n                ReDim swDispDims(0)\n            Else\n                ReDim Preserve swDispDims(UBound(swDispDims) + 1)\n            End If\n            \n            Debug.Print swDispDim.GetDimension2(0).FullName\n            \n            Set swDispDims(UBound(swDispDims)) = swDispDim\n            \n            Set swDispDim = swDispDim.GetNext5\n        \n        Wend\n        \n    Next\n    \n    Dim selCount As Long\n    selCount = swModel.Extension.MultiSelect2(swDispDims, False, Nothing)\n    \n    If selCount <> UBound(swDispDims) + 1 Then\n        Err.Raise vbError, "", "Failed to select dimensions"\n    End If\n    \nEnd Sub\n')))}m.isMDXComponent=!0},94450:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/select-all-dimensions-2b7711e0bf1bc6391735a0e81d56ccb5.png"}}]);