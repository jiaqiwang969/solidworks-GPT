"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[56463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,b=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(b,s(s({ref:t},p),{},{components:n})):o.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={caption:"Insert Revision Table",title:"Macro to insert SOLIDWORKS Revision table and attach to the anchor point"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/insert-revision-table/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/insert-revision-table/index",title:"Macro to insert SOLIDWORKS Revision table and attach to the anchor point",description:"SOLIDWORKS VBA macro to insert Revision table into active or all sheets with the specified parameters and attach to the anchor point",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/insert-revision-table/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/insert-revision-table",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/insert-revision-table/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/insert-revision-table/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/insert-revision-table/index.md",tags:[],version:"current",frontMatter:{caption:"Insert Revision Table",title:"Macro to insert SOLIDWORKS Revision table and attach to the anchor point"},sidebar:"tutorialSidebar",previous:{title:"Macro to insert holes table to SOLIDWORKS drawing",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/insert-holes-table/"},next:{title:"Modify location precision of holes in holes table using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/modify-holes-table-holes-location-precision/"}},c={},l=[{value:"image: revision-table-anchor.png",id:"image-revision-table-anchorpng",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SOLIDWORKS VBA macro to insert Revision table into active or all sheets with the specified parameters and attach to the anchor point"),(0,r.kt)("h2",{id:"image-revision-table-anchorpng"},"image: revision-table-anchor.png"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Revision table attached to anchor point",src:n(82922).Z,width:"1404",height:"555"}),"{ width=600 }"),(0,r.kt)("p",null,"This VBA macro inserts Revision table into all or active sheet of the active SOLIDWORKS drawing."),(0,r.kt)("p",null,"Revision table is attached to the Revision anchor point"),(0,r.kt)("p",null,"Modify the constants in the macro to configure the Revision table options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const ANCHOR_TYPE As Integer = swBOMConfigurationAnchorType_e.swBOMConfigurationAnchor_TopLeft 'anchor type: swBOMConfigurationAnchor_BottomLeft, swBOMConfigurationAnchor_BottomRight, swBOMConfigurationAnchor_TopLeft, swBOMConfigurationAnchor_TopRight\nConst TABLE_TEMPLATE As String = \"\" 'full path to Revision template *.sldrevtbt or empty string for the default template\nConst SHAPE As Integer = swRevisionTableSymbolShape_e.swRevisionTable_CircleSymbol 'symbol shape: swRevisionTable_CircleSymbol, swRevisionTable_HexagonSymbol, swRevisionTable_SquareSymbol, swRevisionTable_TriangleSymbol\nConst AUTO_UPDATE_ZONE_CELLS As Boolean = True 'True to auto update zone cells\n\nConst ALL_SHEETS As Boolean = True 'True to process all sheets, False to process active sheet only\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const ANCHOR_TYPE As Integer = swBOMConfigurationAnchorType_e.swBOMConfigurationAnchor_TopRight\nConst TABLE_TEMPLATE As String = ""\nConst SHAPE As Integer = swRevisionTableSymbolShape_e.swRevisionTable_CircleSymbol\nConst AUTO_UPDATE_ZONE_CELLS As Boolean = True\n\nConst ALL_SHEETS As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If ALL_SHEETS Then\n    \n        Dim vSheetNames As Variant\n        vSheetNames = swDraw.GetSheetNames\n        \n        Dim activeSheetName As String\n        activeSheetName = swDraw.GetCurrentSheet().GetName\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vSheetNames)\n            Dim swSheet As SldWorks.sheet\n            Set swSheet = swDraw.sheet(CStr(vSheetNames(i)))\n            InsertRevisionTable swDraw, swSheet\n        Next\n        \n        swDraw.ActivateSheet activeSheetName\n        \n    Else\n        InsertRevisionTable swDraw, swDraw.GetCurrentSheet\n    End If\n    \nEnd Sub\n\nSub InsertRevisionTable(draw As SldWorks.DrawingDoc, sheet As SldWorks.sheet)\n    \n    If False = draw.ActivateSheet(sheet.GetName()) Then\n        Err.Raise vbError, "", "Failed to activate sheet " & sheet.GetName\n    End If\n    \n    Dim swRevTableAnn As SldWorks.RevisionTableAnnotation\n    \n    Set swRevTableAnn = sheet.InsertRevisionTable2(True, 0, 0, ANCHOR_TYPE, TABLE_TEMPLATE, SHAPE, AUTO_UPDATE_ZONE_CELLS)\n    \n    If swRevTableAnn Is Nothing Then\n        Err.Raise vbError, "", "Failed to insert Revision table into " & sheet.GetName\n    End If\n    \nEnd Sub\n')))}d.isMDXComponent=!0},82922:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/revision-table-anchor-5be99b425b6b0cad4628b71ec4d238ee.png"}}]);