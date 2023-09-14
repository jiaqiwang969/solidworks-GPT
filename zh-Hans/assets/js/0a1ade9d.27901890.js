"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[56675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,y=d["".concat(l,".").concat(p)]||d[p]||u[p]||s;return n?o.createElement(y,a(a({ref:t},m),{},{components:n})):o.createElement(y,a({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const s={layout:"sw-tool",caption:"Clear Layer",title:"Remove all items from the layer in SOLIDWORKS model",description:"VBA macro to remove all items (annotations, sketch segments, blocks etc) from the specified layer in SOLIDWORKS document",image:"remove-layer-items.svg",group:"Model"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/clear-layer/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/clear-layer/index",title:"Remove all items from the layer in SOLIDWORKS model",description:"VBA macro to remove all items (annotations, sketch segments, blocks etc) from the specified layer in SOLIDWORKS document",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/clear-layer/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/clear-layer",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/clear-layer/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/clear-layer/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/clear-layer/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",caption:"Clear Layer",title:"Remove all items from the layer in SOLIDWORKS model",description:"VBA macro to remove all items (annotations, sketch segments, blocks etc) from the specified layer in SOLIDWORKS document",image:"remove-layer-items.svg",group:"Model"},sidebar:"tutorialSidebar",previous:{title:"Change value of global variable in model using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/change-global-variable-value/"},next:{title:"Macro to change the Bill Of Materials options (Part Number source and children visibility) of SOLIDWORKS configuration",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/configuration-bom-options/"}},l={},c=[],m={toc:c},d="wrapper";function u(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,o.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SOLIDWORKS layers",src:n(87827).Z,width:"636",height:"233"})),(0,r.kt)("p",null,"This VBA macro collects and removes all items on the specified layer (annotations, sketch segments, blocks, sketch points and hatch). Layer itself is not removed."),(0,r.kt)("p",null,"Set the name of the layer in ",(0,r.kt)("strong",{parentName:"p"},"LAYER_NAME")," constant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const LAYER_NAME As String = "MY LAYER"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swLayerMgr As SldWorks.LayerMgr\n    \n    Set swLayerMgr = swModel.GetLayerManager\n    \n    Dim swLayer As SldWorks.layer\n    Set swLayer = swLayerMgr.GetLayer(LAYER_NAME)\n    \n    Dim swLayerItems() As Object\n    \n    AddItems swLayer, swLayerItemsOption_Annotations, swLayerItems\n    AddItems swLayer, swLayerItemsOption_SketchBlockInstance, swLayerItems\n    AddItems swLayer, swLayerItemsOption_SketchHatch, swLayerItems\n    AddItems swLayer, swLayerItemsOption_SketchPoint, swLayerItems\n    AddItems swLayer, swLayerItemsOption_SketchSegments, swLayerItems\n    \n    If swModel.Extension.MultiSelect(swLayerItems, False, Nothing) = UBound(swLayerItems) + 1 Then\n        If False = swModel.Extension.DeleteSelection2(swDeleteSelectionOptions_e.swDelete_Absorbed) Then\n            Err.Raise vbError, "", "Failed to delete entities"\n        End If\n    Else\n        Err.Raise vbError, "", "Failed to select items on layer"\n    End If\n    \nEnd Sub\n\nSub AddItems(layer As SldWorks.layer, itemsType As swLayerItemsOption_e, ByRef layerItems() As Object)\n    \n    Dim vItems As Variant\n    vItems = layer.GetItems(itemsType)\n    \n    If Not IsEmpty(vItems) Then\n\n        If (Not layerItems) = -1 Then\n            ReDim layerItems(UBound(vItems))\n        Else\n            ReDim Preserve layerItems(UBound(layerItems) + UBound(vItems) + 1)\n        End If\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vItems)\n            Set layerItems(UBound(layerItems) - i) = vItems(i)\n        Next\n        \n    End If\n    \nEnd Sub\n')))}u.isMDXComponent=!0},87827:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/solidworks-layers-5bffbd84c956673e8354db1b1f1e97a4.png"}}]);