"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[18108],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),b=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=b(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",T={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=b(t),m=o,u=d["".concat(i,".").concat(m)]||d[m]||T[m]||l;return t?a.createElement(u,s(s({ref:n},c),{},{components:t})):a.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,s=new Array(l);s[0]=m;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r[d]="string"==typeof e?e:o,s[1]=r;for(var b=2;b<l;b++)s[b]=t[b];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>T,frontMatter:()=>l,metadata:()=>r,toc:()=>b});var a=t(87462),o=(t(67294),t(3905));const l={title:"Macro renames table annotation using SOLIDWORKS API",caption:"Rename Table Annotation",description:"Example demonstrates how to rename the selected table using SOLIDWORKS API",image:"rename-table-annotation.png",labels:["table","rename"]},s=void 0,r={unversionedId:"codestack-clone/solidworks-api/document/tables/rename-table-annotation/index",id:"codestack-clone/solidworks-api/document/tables/rename-table-annotation/index",title:"Macro renames table annotation using SOLIDWORKS API",description:"Example demonstrates how to rename the selected table using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/document/tables/rename-table-annotation/index.md",sourceDirName:"codestack-clone/solidworks-api/document/tables/rename-table-annotation",slug:"/codestack-clone/solidworks-api/document/tables/rename-table-annotation/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/tables/rename-table-annotation/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/tables/rename-table-annotation/index.md",tags:[],version:"current",frontMatter:{title:"Macro renames table annotation using SOLIDWORKS API",caption:"Rename Table Annotation",description:"Example demonstrates how to rename the selected table using SOLIDWORKS API",image:"rename-table-annotation.png",labels:["table","rename"]},sidebar:"tutorialSidebar",previous:{title:"Read table content into array using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/tables/read-table-content-into-array/"},next:{title:"SOLIDWORKS macro copies data from Excel table into general table",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/tables/write-excel-table-into-general-table/"}},i={},b=[],c={toc:b},d="wrapper";function T(e){let{components:n,...l}=e;return(0,o.kt)(d,(0,a.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Table annotation renamed to a custom name",src:t(32621).Z,width:"703",height:"153"}),"{ width=450 }"),(0,o.kt)("p",null,"This example demonstrates how to rename the selected table using SOLIDWORKS API via ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITableAnnotation.html"},"ITableAnnotation")," interface. Table should be selected in the graphics area (not in the feature tree)"),(0,o.kt)("p",null,"Specify the name of the table by modifying the constant at the beginning of the macro:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const TABLE_NAME As String = "MyTable"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const TABLE_NAME As String = "MyTable"\n\nDim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swTableAnn As SldWorks.TableAnnotation\n        \n        Set swTableAnn = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swTableAnn Is Nothing Then\n        \n            Dim swTableFeat As SldWorks.Feature\n            \n            Set swTableFeat = GetFeatureFromTableAnnotation(swTableAnn)\n            \n            Debug.Print swTableFeat.Name\n            \n            swTableFeat.Name = TABLE_NAME\n        \n        Else\n            MsgBox "Please select table to rename"\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nFunction GetFeatureFromTableAnnotation(tableAnn As SldWorks.TableAnnotation) As SldWorks.Feature\n    \n    Dim swTableFeat As SldWorks.Feature\n    \n    Select Case tableAnn.Type\n                \n        Case swTableAnnotationType_e.swTableAnnotation_BillOfMaterials\n            \n            Dim swBomTableAnn As SldWorks.BomTableAnnotation\n            Set swBomTableAnn = tableAnn\n            Set swTableFeat = swBomTableAnn.BomFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_General\n            \n            Dim swGenTableAnn As SldWorks.GeneralTableAnnotation\n            Set swGenTableAnn = tableAnn\n            Set swTableFeat = swGenTableAnn.GeneralTable.GetFeature()\n        \n        Case swTableAnnotationType_e.swTableAnnotation_WeldmentCutList\n            \n            Dim swWeldCutListTableAnn As SldWorks.WeldmentCutListAnnotation\n            Set swWeldCutListTableAnn = tableAnn\n            Set swTableFeat = swWeldCutListTableAnn.WeldmentCutListFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_BendTable\n            \n            Dim swBendTableAnn As SldWorks.BendTableAnnotation\n            Set swBendTableAnn = tableAnn\n            Set swTableFeat = swBendTableAnn.BendTable.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_GeneralTolerance\n            \n            Dim swGeneralToleranceTableAnn As SldWorks.GeneralToleranceTableAnnotation\n            Set swGeneralToleranceTableAnn = tableAnn\n            Set swTableFeat = swGeneralToleranceTableAnn.GeneralToleranceTableFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_HoleChart\n            \n            Dim swHoleTableAnn As SldWorks.HoleTableAnnotation\n            Set swHoleTableAnn = tableAnn\n            Set swTableFeat = swHoleTableAnn.HoleTable.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_PunchTable\n        \n            Dim swPunchTableAnn As SldWorks.PunchTableAnnotation\n            Set swPunchTableAnn = tableAnn\n            Set swTableFeat = swPunchTableAnn.PunchTable.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_RevisionBlock\n            \n            Dim swRevisionTableAnn As SldWorks.RevisionTableAnnotation\n            Set swRevisionTableAnn = tableAnn\n            Set swTableFeat = swRevisionTableAnn.RevisionTableFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_TitleBlock\n        \n            Dim swTitleBlockTableAnn As SldWorks.TitleBlockTableAnnotation\n            Set swTitleBlockTableAnn = tableAnn\n            Set swTableFeat = swTitleBlockTableAnn.TitleBlockTableFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_WeldTable\n        \n            Dim swWeldTableAnn As SldWorks.WeldmentCutListAnnotation\n            Set swWeldTableAnn = tableAnn\n            Set swTableFeat = swWeldTableAnn.WeldmentCutListFeature.GetFeature()\n        \n    End Select\n    \n    Set GetFeatureFromTableAnnotation = swTableFeat\n    \nEnd Function\n')))}T.isMDXComponent=!0},32621:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/rename-table-annotation-485cc8cf6ddcb009d012f4397390b351.png"}}]);