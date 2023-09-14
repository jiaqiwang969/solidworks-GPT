"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[35810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,u=d["".concat(l,".").concat(m)]||d[m]||w[m]||s;return n?o.createElement(u,a(a({ref:t},p),{},{components:n})):o.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>w,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const s={caption:"Insert BOM Table",title:"Macro to insert SOLIDWORKS Bill Of Materials table and attach to the anchor point",description:"SOLIDWORKS VBA macro to insert Bill Of Materials (BOM) table into active or all sheets with the specified parameters and attach to the anchor point",image:"bom-table-anchor.png"},a=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-bom-table/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-bom-table/index",title:"Macro to insert SOLIDWORKS Bill Of Materials table and attach to the anchor point",description:"SOLIDWORKS VBA macro to insert Bill Of Materials (BOM) table into active or all sheets with the specified parameters and attach to the anchor point",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-bom-table/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-bom-table",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-bom-table/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-bom-table/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-bom-table/index.md",tags:[],version:"current",frontMatter:{caption:"Insert BOM Table",title:"Macro to insert SOLIDWORKS Bill Of Materials table and attach to the anchor point",description:"SOLIDWORKS VBA macro to insert Bill Of Materials (BOM) table into active or all sheets with the specified parameters and attach to the anchor point",image:"bom-table-anchor.png"},sidebar:"tutorialSidebar",previous:{title:"Insert BOM balloons into drawing view using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-bom-balloons/"},next:{title:"Macro to insert holes table to SOLIDWORKS drawing",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-holes-table/"}},l={},c=[],p={toc:c},d="wrapper";function w(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BOM table attached to anchor point",src:n(68274).Z,width:"950",height:"544"}),"{ width=600 }"),(0,r.kt)("p",null,"This VBA macro inserts Bill Of Materials (BOM) table into all or active sheet of the active SOLIDWORKS drawing. First drawing view of the sheet is used as the source"),(0,r.kt)("p",null,"BOM table is attached to the BOM anchor point"),(0,r.kt)("p",null,"Modify the constants in the macro to configure the BOM table options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const ANCHOR_TYPE As Integer = swBOMConfigurationAnchorType_e.swBOMConfigurationAnchor_TopLeft 'anchor type: swBOMConfigurationAnchor_BottomLeft, swBOMConfigurationAnchor_BottomRight, swBOMConfigurationAnchor_TopLeft, swBOMConfigurationAnchor_TopRight\nConst BOM_TYPE As Integer = swBomType_e.swBomType_PartsOnly 'bom type: swBomType_Indented, swBomType_PartsOnly, swBomType_TopLevelOnly\nConst TABLE_TEMPLATE As String = \"\" 'full path to BOM template *.sldbomtbt or empty string for the default template\nConst INDENTED_NUMBERING_TYPE As Integer = swNumberingType_e.swNumberingType_Flat 'numbering type (if BOM_TYPE is swBomType_Indented): swIndentedBOMNotSet, swNumberingType_Detailed, swNumberingType_Flat, swNumberingType_None\nConst DETAILED_CUT_LIST As Boolean = False 'detailed cut-list (if BOM_TYPE is swBomType_Indented)\nConst FOLLOW_ASSEMBLY_ORDER As Boolean = True 'true to check the Follow Assembly Order option\n\nConst ALL_SHEETS As Boolean = True 'True to process all sheets, False to process active sheet only\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const ANCHOR_TYPE As Integer = swBOMConfigurationAnchorType_e.swBOMConfigurationAnchor_TopLeft\nConst BOM_TYPE As Integer = swBomType_e.swBomType_PartsOnly\nConst TABLE_TEMPLATE As String = ""\nConst INDENTED_NUMBERING_TYPE As Integer = swNumberingType_e.swNumberingType_Flat\nConst DETAILED_CUT_LIST As Boolean = False\nConst FOLLOW_ASSEMBLY_ORDER As Boolean = True\n\nConst ALL_SHEETS As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If ALL_SHEETS Then\n    \n        Dim vSheetNames As Variant\n        vSheetNames = swDraw.GetSheetNames\n        \n        Dim activeSheetName As String\n        activeSheetName = swDraw.GetCurrentSheet().GetName\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vSheetNames)\n            Dim swSheet As SldWorks.sheet\n            Set swSheet = swDraw.sheet(CStr(vSheetNames(i)))\n            InsertBomTable swDraw, swSheet\n        Next\n        \n        swDraw.ActivateSheet activeSheetName\n        \n    Else\n        InsertBomTable swDraw, swDraw.GetCurrentSheet\n    End If\n    \nEnd Sub\n\nSub InsertBomTable(draw As SldWorks.DrawingDoc, sheet As SldWorks.sheet)\n    \n    If False = draw.ActivateSheet(sheet.GetName()) Then\n        Err.Raise vbError, "", "Failed to activate sheet " & sheet.GetName\n    End If\n    \n    Dim vViews As Variant\n    vViews = sheet.GetViews\n    \n    Dim swView As SldWorks.View\n    \n    Set swView = vViews(0)\n    \n    Dim swBomTableAnn As SldWorks.BomTableAnnotation\n    \n    Set swBomTableAnn = swView.InsertBomTable4(True, 0, 0, ANCHOR_TYPE, BOM_TYPE, "", TABLE_TEMPLATE, False, INDENTED_NUMBERING_TYPE, DETAILED_CUT_LIST)\n        \n    If Not swBomTableAnn Is Nothing Then\n        swBomTableAnn.BomFeature.FollowAssemblyOrder2 = FOLLOW_ASSEMBLY_ORDER\n    Else\n        Err.Raise vbError, "", "Failed to insert BOM table into " & swView.Name\n    End If\n    \nEnd Sub\n')))}w.isMDXComponent=!0},68274:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bom-table-anchor-0034fcb8658473bd15c5ce42340fff04.png"}}]);