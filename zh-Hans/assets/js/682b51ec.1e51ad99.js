"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[16242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=s,y=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(y,a(a({ref:t},d),{},{components:n})):r.createElement(y,a({ref:t},d))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const o={layout:"sw-tool",image:"remove-layer-items.svg",group:"Model"},a=void 0,i={unversionedId:"codestack/solidworks-api/document/clear-layer/index",id:"codestack/solidworks-api/document/clear-layer/index",title:"index",description:"SOLIDWORKS\u56fe\u5c42",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/clear-layer/index.md",sourceDirName:"codestack/solidworks-api/document/clear-layer",slug:"/codestack/solidworks-api/document/clear-layer/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/clear-layer/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/clear-layer/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",image:"remove-layer-items.svg",group:"Model"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u66f4\u6539\u6a21\u578b\u4e2d\u7684\u5168\u5c40\u53d8\u91cf\u503c",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/change-global-variable-value/"},next:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/configuration-bom-options/"}},l={},c=[],d={toc:c},m="wrapper";function p(e){let{components:t,...o}=e;return(0,s.kt)(m,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"SOLIDWORKS\u56fe\u5c42",src:n(39632).Z,width:"636",height:"233"})),(0,s.kt)("p",null,"\u6b64VBA\u5b8f\u4f1a\u6536\u96c6\u5e76\u5220\u9664\u6307\u5b9a\u56fe\u5c42\u4e0a\u7684\u6240\u6709\u9879\u76ee\uff08\u6ce8\u91ca\u3001\u8349\u56fe\u7ebf\u6bb5\u3001\u5757\u3001\u8349\u56fe\u70b9\u548c\u586b\u5145\u533a\u57df\uff09\u3002\u56fe\u5c42\u672c\u8eab\u4e0d\u4f1a\u88ab\u5220\u9664\u3002"),(0,s.kt)("p",null,"\u5728",(0,s.kt)("strong",{parentName:"p"},"LAYER_NAME"),"\u5e38\u91cf\u4e2d\u8bbe\u7f6e\u56fe\u5c42\u7684\u540d\u79f0\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const LAYER_NAME As String = "\u6211\u7684\u56fe\u5c42"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swLayerMgr As SldWorks.LayerMgr\n    \n    Set swLayerMgr = swModel.GetLayerManager\n    \n    Dim swLayer As SldWorks.layer\n    Set swLayer = swLayerMgr.GetLayer(LAYER_NAME)\n    \n    Dim swLayerItems() As Object\n    \n    AddItems swLayer, swLayerItemsOption_Annotations, swLayerItems\n    AddItems swLayer, swLayerItemsOption_SketchBlockInstance, swLayerItems\n    AddItems swLayer, swLayerItemsOption_SketchHatch, swLayerItems\n    AddItems swLayer, swLayerItemsOption_SketchPoint, swLayerItems\n    AddItems swLayer, swLayerItemsOption_SketchSegments, swLayerItems\n    \n    If swModel.Extension.MultiSelect(swLayerItems, False, Nothing) = UBound(swLayerItems) + 1 Then\n        If False = swModel.Extension.DeleteSelection2(swDeleteSelectionOptions_e.swDelete_Absorbed) Then\n            Err.Raise vbError, "", "\u5220\u9664\u5b9e\u4f53\u5931\u8d25"\n        End If\n    Else\n        Err.Raise vbError, "", "\u9009\u62e9\u56fe\u5c42\u4e0a\u7684\u9879\u76ee\u5931\u8d25"\n    End If\n    \nEnd Sub\n\nSub AddItems(layer As SldWorks.layer, itemsType As swLayerItemsOption_e, ByRef layerItems() As Object)\n    \n    Dim vItems As Variant\n    vItems = layer.GetItems(itemsType)\n    \n    If Not IsEmpty(vItems) Then\n\n        If (Not layerItems) = -1 Then\n            ReDim layerItems(UBound(vItems))\n        Else\n            ReDim Preserve layerItems(UBound(layerItems) + UBound(vItems) + 1)\n        End If\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vItems)\n            Set layerItems(UBound(layerItems) - i) = vItems(i)\n        Next\n        \n    End If\n    \nEnd Sub\n')))}p.isMDXComponent=!0},39632:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/solidworks-layers-5bffbd84c956673e8354db1b1f1e97a4.png"}}]);