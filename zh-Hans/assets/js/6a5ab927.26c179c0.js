"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[63546],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},w=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),w=o,m=p["".concat(l,".").concat(w)]||p[w]||u[w]||a;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=w;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}w.displayName="MDXCreateElement"},45100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={layout:"article",caption:"\u63d2\u5165\u4f4d\u7f6e\u6807\u7b7e",title:"\u5411\u7ed8\u56fe\u89c6\u56fe\u6dfb\u52a0\u4f4d\u7f6e\u6807\u7b7e"},s=void 0,i={unversionedId:"codestack/solidworks-api/document/drawing/insert-location-label/index",id:"codestack/solidworks-api/document/drawing/insert-location-label/index",title:"\u5411\u7ed8\u56fe\u89c6\u56fe\u6dfb\u52a0\u4f4d\u7f6e\u6807\u7b7e",description:"\u8fd9\u662f\u4e00\u4e2a\u6f14\u793a\u5982\u4f55\u5411\u7ed8\u56fe\u89c6\u56fe\u6dfb\u52a0\u4f4d\u7f6e\u6807\u7b7e\u7684 VBA \u5b8f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/drawing/insert-location-label/index.md",sourceDirName:"codestack/solidworks-api/document/drawing/insert-location-label",slug:"/codestack/solidworks-api/document/drawing/insert-location-label/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/insert-location-label/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/drawing/insert-location-label/index.md",tags:[],version:"current",frontMatter:{layout:"article",caption:"\u63d2\u5165\u4f4d\u7f6e\u6807\u7b7e",title:"\u5411\u7ed8\u56fe\u89c6\u56fe\u6dfb\u52a0\u4f4d\u7f6e\u6807\u7b7e"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u63d2\u5165BOM\u6c14\u7403",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/insert-bom-balloons/"},next:{title:"\u63d2\u5165\u9884\u5b9a\u4e49\u89c6\u56fe",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/insert-predefined-views/"}},l={},c=[{value:"image: location-label.png",id:"image-location-labelpng",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...a}=e;return(0,o.kt)(p,(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u6f14\u793a\u5982\u4f55\u5411\u7ed8\u56fe\u89c6\u56fe\u6dfb\u52a0\u4f4d\u7f6e\u6807\u7b7e\u7684 VBA \u5b8f"),(0,o.kt)("h2",{id:"image-location-labelpng"},"image: location-label.png"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u63d2\u5165\u4f4d\u7f6e\u6807\u7b7e",src:t(90016).Z,width:"461",height:"246"})),(0,o.kt)("p",null,"\u8fd9\u4e2a VBA \u5b8f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7ed5\u8fc7 SOLIDWORKS API \u4e2d\u7f3a\u5931\u7684\u529f\u80fd\uff0c\u5411\u7ed8\u56fe\u89c6\u56fe\u63d2\u5165\u4f4d\u7f6e\u6807\u7b7e\u3002"),(0,o.kt)("p",null,"\u8bf7\u5c06\u89c6\u56fe\u7684\u540d\u79f0\u6307\u5b9a\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"VIEW_NAME")," \u5e38\u91cf\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ec5\u652f\u6301\u4e0e\u4f4d\u7f6e\u6807\u7b7e\u517c\u5bb9\u7684\u89c6\u56fe\uff0c\u4f8b\u5982\u8f85\u52a9\u89c6\u56fe\u3001\u8be6\u56fe\u89c6\u56fe\u7b49\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n\nDim swApp As SldWorks.SldWorks\nConst VIEW_NAME As String = "Drawing View2"\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        InsertLocationLabel swDraw, swDraw.FeatureByName(VIEW_NAME).GetSpecificFeature\n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u7ed8\u56fe"\n    End If\n\nEnd Sub\n\nSub InsertLocationLabel(draw As SldWorks.DrawingDoc, view As SldWorks.view)\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = draw\n    \n    If False <> swModel.Extension.SelectByID2(view.Name, "DRAWINGVIEW", 0, 0, 0, False, -1, Nothing, 0) Then\n        \n        Const WM_COMMAND As Long = &H111\n        Const ADD_LOCATION_LABEL As Long = 52041\n        \n        Dim swFrame As SldWorks.Frame\n            \n        Set swFrame = swApp.Frame\n            \n        SendMessage swFrame.GetHWnd(), WM_COMMAND, ADD_LOCATION_LABEL, 0\n    Else\n        Err.Raise vbError, "", "\u9009\u62e9\u89c6\u56fe\u5931\u8d25"\n    End If\n    \nEnd Sub\n')))}u.isMDXComponent=!0},90016:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/location-label-73cf649d89607471679b5331e08351e5.png"}}]);