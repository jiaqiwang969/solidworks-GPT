"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[9944],{3905:(e,n,t)=>{t.d(n,{Zo:()=>b,kt:()=>T});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},w=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,b=r(e,["components","mdxType","originalType","parentName"]),d=c(t),w=o,T=d["".concat(i,".").concat(w)]||d[w]||u[w]||s;return t?a.createElement(T,l(l({ref:n},b),{},{components:t})):a.createElement(T,l({ref:n},b))}));function T(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,l=new Array(s);l[0]=w;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<s;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}w.displayName="MDXCreateElement"},37559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const s={title:"Macro renames table annotation using SOLIDWORKS API",caption:"Rename Table Annotation",description:"Example demonstrates how to rename the selected table using SOLIDWORKS API",image:"rename-table-annotation.png",labels:["table","rename"]},l=void 0,r={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-table-annotation/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-table-annotation/index",title:"Macro renames table annotation using SOLIDWORKS API",description:"Example demonstrates how to rename the selected table using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-table-annotation/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-table-annotation",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-table-annotation/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-table-annotation/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-table-annotation/index.md",tags:[],version:"current",frontMatter:{title:"Macro renames table annotation using SOLIDWORKS API",caption:"Rename Table Annotation",description:"Example demonstrates how to rename the selected table using SOLIDWORKS API",image:"rename-table-annotation.png",labels:["table","rename"]},sidebar:"tutorialSidebar",previous:{title:"Rename SOLIDWORKS drawing sheets with custom properties values",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-sheets-custom-properties-values/"},next:{title:"Macro to rename all drawing views after the sheet name",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-views-after-sheets/"}},i={},c=[],b={toc:c},d="wrapper";function u(e){let{components:n,...s}=e;return(0,o.kt)(d,(0,a.Z)({},b,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Table annotation renamed to a custom name",src:t(6132).Z,width:"703",height:"153"}),"{ width=450 }"),(0,o.kt)("p",null,"This example demonstrates how to rename the selected table using SOLIDWORKS API via ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITableAnnotation.html"},"ITableAnnotation")," interface. Table should be selected in the graphics area (not in the feature tree)"),(0,o.kt)("p",null,"Specify the name of the table by modifying the constant at the beginning of the macro:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const TABLE_NAME As String = "MyTable"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const TABLE_NAME As String = "MyTable"\n\nDim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swTableAnn As SldWorks.TableAnnotation\n        \n        Set swTableAnn = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swTableAnn Is Nothing Then\n        \n            Dim swTableFeat As SldWorks.Feature\n            \n            Set swTableFeat = GetFeatureFromTableAnnotation(swTableAnn)\n            \n            Debug.Print swTableFeat.Name\n            \n            swTableFeat.Name = TABLE_NAME\n        \n        Else\n            MsgBox "Please select table to rename"\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nFunction GetFeatureFromTableAnnotation(tableAnn As SldWorks.TableAnnotation) As SldWorks.Feature\n    \n    Dim swTableFeat As SldWorks.Feature\n    \n    Select Case tableAnn.Type\n                \n        Case swTableAnnotationType_e.swTableAnnotation_BillOfMaterials\n            \n            Dim swBomTableAnn As SldWorks.BomTableAnnotation\n            Set swBomTableAnn = tableAnn\n            Set swTableFeat = swBomTableAnn.BomFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_General\n            \n            Dim swGenTableAnn As SldWorks.GeneralTableAnnotation\n            Set swGenTableAnn = tableAnn\n            Set swTableFeat = swGenTableAnn.GeneralTable.GetFeature()\n        \n        Case swTableAnnotationType_e.swTableAnnotation_WeldmentCutList\n            \n            Dim swWeldCutListTableAnn As SldWorks.WeldmentCutListAnnotation\n            Set swWeldCutListTableAnn = tableAnn\n            Set swTableFeat = swWeldCutListTableAnn.WeldmentCutListFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_BendTable\n            \n            Dim swBendTableAnn As SldWorks.BendTableAnnotation\n            Set swBendTableAnn = tableAnn\n            Set swTableFeat = swBendTableAnn.BendTable.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_GeneralTolerance\n            \n            Dim swGeneralToleranceTableAnn As SldWorks.GeneralToleranceTableAnnotation\n            Set swGeneralToleranceTableAnn = tableAnn\n            Set swTableFeat = swGeneralToleranceTableAnn.GeneralToleranceTableFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_HoleChart\n            \n            Dim swHoleTableAnn As SldWorks.HoleTableAnnotation\n            Set swHoleTableAnn = tableAnn\n            Set swTableFeat = swHoleTableAnn.HoleTable.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_PunchTable\n        \n            Dim swPunchTableAnn As SldWorks.PunchTableAnnotation\n            Set swPunchTableAnn = tableAnn\n            Set swTableFeat = swPunchTableAnn.PunchTable.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_RevisionBlock\n            \n            Dim swRevisionTableAnn As SldWorks.RevisionTableAnnotation\n            Set swRevisionTableAnn = tableAnn\n            Set swTableFeat = swRevisionTableAnn.RevisionTableFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_TitleBlock\n        \n            Dim swTitleBlockTableAnn As SldWorks.TitleBlockTableAnnotation\n            Set swTitleBlockTableAnn = tableAnn\n            Set swTableFeat = swTitleBlockTableAnn.TitleBlockTableFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_WeldTable\n        \n            Dim swWeldTableAnn As SldWorks.WeldmentCutListAnnotation\n            Set swWeldTableAnn = tableAnn\n            Set swTableFeat = swWeldTableAnn.WeldmentCutListFeature.GetFeature()\n        \n    End Select\n    \n    Set GetFeatureFromTableAnnotation = swTableFeat\n    \nEnd Function\n')))}u.isMDXComponent=!0},6132:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/rename-table-annotation-485cc8cf6ddcb009d012f4397390b351.png"}}]);