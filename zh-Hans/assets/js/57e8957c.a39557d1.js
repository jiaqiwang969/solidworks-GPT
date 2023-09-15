"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[95424],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},w=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),w=o,m=p["".concat(c,".").concat(w)]||p[w]||d[w]||i;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=w;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}w.displayName="MDXCreateElement"},78279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={caption:"\u63d2\u5165\u4fee\u8ba2\u8868",title:"\u63d2\u5165SOLIDWORKS\u4fee\u8ba2\u8868\u5e76\u9644\u52a0\u5230\u951a\u70b9\u7684\u5b8f"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-revision-table/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-revision-table/index",title:"\u63d2\u5165SOLIDWORKS\u4fee\u8ba2\u8868\u5e76\u9644\u52a0\u5230\u951a\u70b9\u7684\u5b8f",description:"SOLIDWORKS VBA\u5b8f\uff0c\u7528\u4e8e\u5728\u6d3b\u52a8\u6216\u6240\u6709\u5de5\u4f5c\u8868\u4e2d\u63d2\u5165\u4fee\u8ba2\u8868\uff0c\u5e76\u9644\u52a0\u5230\u951a\u70b9",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-revision-table/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-revision-table",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-revision-table/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-revision-table/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-revision-table/index.md",tags:[],version:"current",frontMatter:{caption:"\u63d2\u5165\u4fee\u8ba2\u8868",title:"\u63d2\u5165SOLIDWORKS\u4fee\u8ba2\u8868\u5e76\u9644\u52a0\u5230\u951a\u70b9\u7684\u5b8f"},sidebar:"tutorialSidebar",previous:{title:"Macro to insert model into the predefined views of the SOLIDWORKS drawing template",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-predefined-views/"},next:{title:"\u901a\u8fc7\u521b\u5efamsi\u5b89\u88c5\u7a0b\u5e8f\u5b89\u88c5SOLIDWORKS\u63d2\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/installer/"}},c={},l=[{value:"image: revision-table-anchor.png",id:"image-revision-table-anchorpng",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...i}=e;return(0,o.kt)(p,(0,r.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SOLIDWORKS VBA\u5b8f\uff0c\u7528\u4e8e\u5728\u6d3b\u52a8\u6216\u6240\u6709\u5de5\u4f5c\u8868\u4e2d\u63d2\u5165\u4fee\u8ba2\u8868\uff0c\u5e76\u9644\u52a0\u5230\u951a\u70b9"),(0,o.kt)("h2",{id:"image-revision-table-anchorpng"},"image: revision-table-anchor.png"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u9644\u52a0\u5230\u951a\u70b9\u7684\u4fee\u8ba2\u8868",src:t(82782).Z,width:"1404",height:"555"}),"{ width=600 }"),(0,o.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u5c06\u4fee\u8ba2\u8868\u63d2\u5165\u5230\u6d3b\u52a8\u7684SOLIDWORKS\u56fe\u7eb8\u7684\u6240\u6709\u6216\u6d3b\u52a8\u5de5\u4f5c\u8868\u4e2d\u3002"),(0,o.kt)("p",null,"\u4fee\u8ba2\u8868\u9644\u52a0\u5230\u4fee\u8ba2\u951a\u70b9\u3002"),(0,o.kt)("p",null,"\u4fee\u6539\u5b8f\u4e2d\u7684\u5e38\u91cf\u4ee5\u914d\u7f6e\u4fee\u8ba2\u8868\u9009\u9879\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Const ANCHOR_TYPE As Integer = swBOMConfigurationAnchorType_e.swBOMConfigurationAnchor_TopLeft '\u951a\u70b9\u7c7b\u578b\uff1aswBOMConfigurationAnchor_BottomLeft\u3001swBOMConfigurationAnchor_BottomRight\u3001swBOMConfigurationAnchor_TopLeft\u3001swBOMConfigurationAnchor_TopRight\nConst TABLE_TEMPLATE As String = \"\" '\u4fee\u8ba2\u6a21\u677f*.sldrevtbt\u7684\u5b8c\u6574\u8def\u5f84\uff0c\u6216\u7a7a\u5b57\u7b26\u4e32\u4f7f\u7528\u9ed8\u8ba4\u6a21\u677f\nConst SHAPE As Integer = swRevisionTableSymbolShape_e.swRevisionTable_CircleSymbol '\u7b26\u53f7\u5f62\u72b6\uff1aswRevisionTable_CircleSymbol\u3001swRevisionTable_HexagonSymbol\u3001swRevisionTable_SquareSymbol\u3001swRevisionTable_TriangleSymbol\nConst AUTO_UPDATE_ZONE_CELLS As Boolean = True 'True\u8868\u793a\u81ea\u52a8\u66f4\u65b0\u533a\u57df\u5355\u5143\u683c\n\nConst ALL_SHEETS As Boolean = True 'True\u8868\u793a\u5904\u7406\u6240\u6709\u5de5\u4f5c\u8868\uff0cFalse\u8868\u793a\u4ec5\u5904\u7406\u6d3b\u52a8\u5de5\u4f5c\u8868\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const ANCHOR_TYPE As Integer = swBOMConfigurationAnchorType_e.swBOMConfigurationAnchor_TopRight\nConst TABLE_TEMPLATE As String = ""\nConst SHAPE As Integer = swRevisionTableSymbolShape_e.swRevisionTable_CircleSymbol\nConst AUTO_UPDATE_ZONE_CELLS As Boolean = True\n\nConst ALL_SHEETS As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If ALL_SHEETS Then\n    \n        Dim vSheetNames As Variant\n        vSheetNames = swDraw.GetSheetNames\n        \n        Dim activeSheetName As String\n        activeSheetName = swDraw.GetCurrentSheet().GetName\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vSheetNames)\n            Dim swSheet As SldWorks.sheet\n            Set swSheet = swDraw.sheet(CStr(vSheetNames(i)))\n            InsertRevisionTable swDraw, swSheet\n        Next\n        \n        swDraw.ActivateSheet activeSheetName\n        \n    Else\n        InsertRevisionTable swDraw, swDraw.GetCurrentSheet\n    End If\n    \nEnd Sub\n\nSub InsertRevisionTable(draw As SldWorks.DrawingDoc, sheet As SldWorks.sheet)\n    \n    If False = draw.ActivateSheet(sheet.GetName()) Then\n        Err.Raise vbError, "", "\u6fc0\u6d3b\u5de5\u4f5c\u8868" & sheet.GetName & "\u5931\u8d25"\n    End If\n    \n    Dim swRevTableAnn As SldWorks.RevisionTableAnnotation\n    \n    Set swRevTableAnn = sheet.InsertRevisionTable2(True, 0, 0, ANCHOR_TYPE, TABLE_TEMPLATE, SHAPE, AUTO_UPDATE_ZONE_CELLS)\n    \n    If swRevTableAnn Is Nothing Then\n        Err.Raise vbError, "", "\u5728" & sheet.GetName & "\u4e2d\u63d2\u5165\u4fee\u8ba2\u8868\u5931\u8d25"\n    End If\n    \nEnd Sub\n')))}d.isMDXComponent=!0},82782:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/revision-table-anchor-5be99b425b6b0cad4628b71ec4d238ee.png"}}]);