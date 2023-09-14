"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[39621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),h=c(n),u=i,b=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return n?o.createElement(b,s(s({ref:t},p),{},{components:n})):o.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[h]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const r={caption:"Insert Revision Table",title:"Macro to insert SOLIDWORKS Revision table and attach to the anchor point",description:"SOLIDWORKS VBA macro to insert Revision table into active or all sheets with the specified parameters and attach to the anchor point",image:"revision-table-anchor.png"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/insert-revision-table/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/insert-revision-table/index",title:"Macro to insert SOLIDWORKS Revision table and attach to the anchor point",description:"SOLIDWORKS VBA macro to insert Revision table into active or all sheets with the specified parameters and attach to the anchor point",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/insert-revision-table/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/insert-revision-table",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/insert-revision-table/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/insert-revision-table/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/insert-revision-table/index.md",tags:[],version:"current",frontMatter:{caption:"Insert Revision Table",title:"Macro to insert SOLIDWORKS Revision table and attach to the anchor point",description:"SOLIDWORKS VBA macro to insert Revision table into active or all sheets with the specified parameters and attach to the anchor point",image:"revision-table-anchor.png"},sidebar:"tutorialSidebar",previous:{title:"Macro to insert holes table to SOLIDWORKS drawing",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/insert-holes-table/"},next:{title:"Modify location precision of holes in holes table using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/modify-holes-table-holes-location-precision/"}},l={},c=[],p={toc:c},h="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Revision table attached to anchor point",src:n(14506).Z,width:"1404",height:"555"}),"{ width=600 }"),(0,i.kt)("p",null,"This VBA macro inserts Revision table into all or active sheet of the active SOLIDWORKS drawing."),(0,i.kt)("p",null,"Revision table is attached to the Revision anchor point"),(0,i.kt)("p",null,"Modify the constants in the macro to configure the Revision table options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Const ANCHOR_TYPE As Integer = swBOMConfigurationAnchorType_e.swBOMConfigurationAnchor_TopLeft 'anchor type: swBOMConfigurationAnchor_BottomLeft, swBOMConfigurationAnchor_BottomRight, swBOMConfigurationAnchor_TopLeft, swBOMConfigurationAnchor_TopRight\nConst TABLE_TEMPLATE As String = \"\" 'full path to Revision template *.sldrevtbt or empty string for the default template\nConst SHAPE As Integer = swRevisionTableSymbolShape_e.swRevisionTable_CircleSymbol 'symbol shape: swRevisionTable_CircleSymbol, swRevisionTable_HexagonSymbol, swRevisionTable_SquareSymbol, swRevisionTable_TriangleSymbol\nConst AUTO_UPDATE_ZONE_CELLS As Boolean = True 'True to auto update zone cells\n\nConst ALL_SHEETS As Boolean = True 'True to process all sheets, False to process active sheet only\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Const ANCHOR_TYPE As Integer = swBOMConfigurationAnchorType_e.swBOMConfigurationAnchor_TopRight\nConst TABLE_TEMPLATE As String = ""\nConst SHAPE As Integer = swRevisionTableSymbolShape_e.swRevisionTable_CircleSymbol\nConst AUTO_UPDATE_ZONE_CELLS As Boolean = True\n\nConst ALL_SHEETS As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If ALL_SHEETS Then\n    \n        Dim vSheetNames As Variant\n        vSheetNames = swDraw.GetSheetNames\n        \n        Dim activeSheetName As String\n        activeSheetName = swDraw.GetCurrentSheet().GetName\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vSheetNames)\n            Dim swSheet As SldWorks.sheet\n            Set swSheet = swDraw.sheet(CStr(vSheetNames(i)))\n            InsertRevisionTable swDraw, swSheet\n        Next\n        \n        swDraw.ActivateSheet activeSheetName\n        \n    Else\n        InsertRevisionTable swDraw, swDraw.GetCurrentSheet\n    End If\n    \nEnd Sub\n\nSub InsertRevisionTable(draw As SldWorks.DrawingDoc, sheet As SldWorks.sheet)\n    \n    If False = draw.ActivateSheet(sheet.GetName()) Then\n        Err.Raise vbError, "", "Failed to activate sheet " & sheet.GetName\n    End If\n    \n    Dim swRevTableAnn As SldWorks.RevisionTableAnnotation\n    \n    Set swRevTableAnn = sheet.InsertRevisionTable2(True, 0, 0, ANCHOR_TYPE, TABLE_TEMPLATE, SHAPE, AUTO_UPDATE_ZONE_CELLS)\n    \n    If swRevTableAnn Is Nothing Then\n        Err.Raise vbError, "", "Failed to insert Revision table into " & sheet.GetName\n    End If\n    \nEnd Sub\n')))}d.isMDXComponent=!0},14506:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/revision-table-anchor-5be99b425b6b0cad4628b71ec4d238ee.png"}}]);