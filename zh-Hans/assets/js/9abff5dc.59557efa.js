"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[41862],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>w});var n=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var d=n.createContext({}),c=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=s,w=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return o?n.createElement(w,a(a({ref:t},l),{},{components:o})):n.createElement(w,a({ref:t},l))}));function w(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=o.length,a=new Array(r);a[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},13956:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(87462),s=(o(67294),o(3905));const r={title:"Generate box geometry (solid, sheet, wire) Macro Feature using SOLIDWORKS API",image:"solid-body.png",labels:["macro feature","geometry","box","solid","sheet","wire"]},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/geometry/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/geometry/index",title:"Generate box geometry (solid, sheet, wire) Macro Feature using SOLIDWORKS API",description:"This VBA example demonstrates how to create macro feature which generates custom geometry.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/geometry/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/geometry",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/geometry/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/geometry/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/geometry/index.md",tags:[],version:"current",frontMatter:{title:"Generate box geometry (solid, sheet, wire) Macro Feature using SOLIDWORKS API",image:"solid-body.png",labels:["macro feature","geometry","box","solid","sheet","wire"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS macro feature to link and auto update general table to Excel",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/general-table-link-excel/"},next:{title:"Link Cut-List Custom Properties To File With SOLIDWORKS Macro Feature API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/link-cut-list-properties/"}},d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Embedding",id:"embedding",level:3},{value:"Box Size",id:"box-size",level:3},{value:"Body Type",id:"body-type",level:3},{value:"swBodyType_e.swSolidBody",id:"swbodytype_eswsolidbody",level:4},{value:"swBodyType_e.swSheetBody",id:"swbodytype_eswsheetbody",level:4},{value:"swBodyType_e.swWireBody",id:"swbodytype_eswwirebody",level:4}],l={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This VBA example demonstrates how to create macro feature which generates custom geometry."),(0,s.kt)("p",null,"Open part document and run the macro. New feature is inserted in the Feature Manager tree and box geometry is generated either as solid, sheet or wire body."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("h3",{id:"embedding"},"Embedding"),(0,s.kt)("p",null,"Set the value of ",(0,s.kt)("em",{parentName:"p"},"EMBED_MACRO_FEATURE")," constant to specify if macro feature should be embedded to file or not. If this option set to ",(0,s.kt)("em",{parentName:"p"},"True")," then part document can be opened on any other computer and the geometry will be present without the need to copy the macro."),(0,s.kt)("h3",{id:"box-size"},"Box Size"),(0,s.kt)("p",null,"Size of the box can be configured by changing the ",(0,s.kt)("em",{parentName:"p"},"WIDTH"),", ",(0,s.kt)("em",{parentName:"p"},"LENGTH")," and ",(0,s.kt)("em",{parentName:"p"},"HEIGHT")," constants:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const WIDTH As Double = 0.01\nConst LENGTH As Double = 0.01\nConst HEIGHT As Double = 0.01\n")),(0,s.kt)("h3",{id:"body-type"},"Body Type"),(0,s.kt)("p",null,"Generated body type can be set by assigning the value to ",(0,s.kt)("em",{parentName:"p"},"BODY_TYPE")," constant"),(0,s.kt)("h4",{id:"swbodytype_eswsolidbody"},"swBodyType_e.swSolidBody"),(0,s.kt)("p",null,"Creates a box as a solid body geometry."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Macro feature generates solid body",src:o(41168).Z,width:"620",height:"409"}),"{ width=350 }"),(0,s.kt)("h4",{id:"swbodytype_eswsheetbody"},"swBodyType_e.swSheetBody"),(0,s.kt)("p",null,"Creates a single surface body by sewing the faces of the box."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Macro feature generates surface (sheet) body",src:o(40532).Z,width:"568",height:"400"}),"{ width=350 }"),(0,s.kt)("h4",{id:"swbodytype_eswwirebody"},"swBodyType_e.swWireBody"),(0,s.kt)("p",null,"Creates wire bodies from all edges of the box geometry. Wire bodies are edges and not presented in the bodies folders. Example of wire bodies used in standard feature tree are curves (composite, through XYZ, projected etc.)"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Macro feature generates wire body",src:o(98036).Z,width:"621",height:"394"}),"{ width=350 }"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const BODY_TYPE As Integer = swBodyType_e.swSolidBody\nConst EMBED_MACRO_FEATURE As Boolean = False\nConst BASE_NAME As String = "Box"\n\nConst WIDTH As Double = 0.01\nConst LENGTH As Double = 0.01\nConst HEIGHT As Double = 0.01\n\nSub main()\n\n    Dim swApp As SldWorks.SldWorks\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim curMacroPath As String\n        curMacroPath = swApp.GetCurrentMacroPathName\n        \n        Dim vMethods(8) As String\n        Dim moduleName As String\n        \n        GetMacroEntryPoint swApp, curMacroPath, moduleName, ""\n        \n        vMethods(0) = curMacroPath: vMethods(1) = moduleName: vMethods(2) = "swmRebuild"\n        vMethods(3) = curMacroPath: vMethods(4) = moduleName: vMethods(5) = "swmEditDefinition"\n        vMethods(6) = curMacroPath: vMethods(7) = moduleName: vMethods(8) = "swmSecurity"\n        \n        Dim opts As swMacroFeatureOptions_e\n        \n        If EMBED_MACRO_FEATURE Then\n            opts = swMacroFeatureOptions_e.swMacroFeatureEmbedMacroFile\n        Else\n            opts = swMacroFeatureOptions_e.swMacroFeatureByDefault\n        End If\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swModel.FeatureManager.InsertMacroFeature3(BASE_NAME, "", vMethods, _\n            Empty, Empty, Empty, Empty, Empty, Empty, _\n            Empty, opts)\n        \n        If swFeat Is Nothing Then\n            MsgBox "Failed to create box feature"\n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nSub GetMacroEntryPoint(app As SldWorks.SldWorks, macroPath As String, ByRef moduleName As String, ByRef procName As String)\n        \n    Dim vMethods As Variant\n    vMethods = app.GetMacroMethods(macroPath, swMacroMethods_e.swMethodsWithoutArguments)\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(vMethods) Then\n    \n        For i = 0 To UBound(vMethods)\n            Dim vData As Variant\n            vData = Split(vMethods(i), ".")\n            \n            If i = 0 Or LCase(vData(1)) = "main" Then\n                moduleName = vData(0)\n                procName = vData(1)\n            End If\n        Next\n        \n    End If\n    \nEnd Sub\n\nFunction swmRebuild(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    \n    Dim swApp As SldWorks.SldWorks\n    Dim swModeler As SldWorks.Modeler\n    \n    Set swApp = varApp\n    Set swModeler = swApp.GetModeler\n    \n    Dim swTemplateBody As SldWorks.Body2\n\n    Dim dCenter(2) As Double\n    dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0\n    \n    Dim dAxis(2) As Double\n    dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1\n                    \n    Dim dBoxData(8) As Double\n    dBoxData(0) = dCenter(0): dBoxData(1) = dCenter(1): dBoxData(2) = dCenter(2)\n    dBoxData(3) = dAxis(0): dBoxData(4) = dAxis(1): dBoxData(5) = dAxis(2)\n    dBoxData(6) = WIDTH: dBoxData(7) = LENGTH: dBoxData(8) = HEIGHT\n        \n    Set swTemplateBody = swModeler.CreateBodyFromBox3(dBoxData)\n    \n    Dim swBoxBody() As SldWorks.Body2\n    \n    Dim i As Integer\n    \n    Dim isInit As Boolean\n    isInit = False\n    \n    Select Case BODY_TYPE\n        Case swBodyType_e.swSolidBody\n            isInit = True\n            ReDim swBoxBody(0) As SldWorks.Body2\n            Set swBoxBody(0) = swTemplateBody\n        Case swBodyType_e.swSheetBody\n            isInit = True\n            ReDim swBoxBody(0) As SldWorks.Body2\n            Set swBoxBody(0) = swModeler.CreateSheetFromFaces(swTemplateBody.GetFaces())\n        Case swBodyType_e.swWireBody\n            isInit = True\n            \n            Dim vEdges As Variant\n            \n            vEdges = swTemplateBody.GetEdges()\n            \n            ReDim swBoxBody(UBound(vEdges)) As SldWorks.Body2\n            \n            For i = 0 To swTemplateBody.GetEdgeCount() - 1\n                Dim swEdge(0) As SldWorks.Edge\n                Set swEdge(0) = vEdges(i)\n                Set swBoxBody(i) = swModeler.CreateWireBody(swEdge, swCreateWireBodyOptions_e.swCreateWireBodyByDefault)\n            Next\n    End Select\n    \n    If isInit Then\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = varFeat\n        \n        Dim swMacroFeatData As SldWorks.MacroFeatureData\n        Set swMacroFeatData = swFeat.GetDefinition\n        \n        For i = 0 To UBound(swBoxBody)\n            AssignUserIds swBoxBody(i), swMacroFeatData\n        Next\n        \n        swMacroFeatData.EnableMultiBodyConsume = UBound(swBoxBody) > 0\n        swmRebuild = swBoxBody\n        \n    Else\n        swmRebuild = "Invalid body type. Only solid, sheet and wire body is supported"\n    End If\n    \nEnd Function\n\nSub AssignUserIds(body As SldWorks.Body2, featData As SldWorks.MacroFeatureData)\n    \n    Dim vFaces As Variant\n    Dim vEdges As Variant\n    Dim i As Integer\n    \n    featData.GetEntitiesNeedUserId body, vFaces, vEdges\n    \n    If Not IsEmpty(vFaces) Then\n        For i = 0 To UBound(vFaces)\n            Dim swFace As SldWorks.Face2\n            Set swFace = vFaces(i)\n            featData.SetFaceUserId swFace, 0, i\n        Next\n    End If\n    \n    If Not IsEmpty(vEdges) Then\n        For i = 0 To UBound(vEdges)\n            Dim swEdge As SldWorks.Edge\n            Set swEdge = vEdges(i)\n            featData.SetEdgeUserId swEdge, 0, i\n        Next\n    End If\n    \nEnd Sub\n\nFunction swmEditDefinition(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmEditDefinition = True\nEnd Function\n\nFunction swmSecurity(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmSecurity = SwConst.swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityByDefault\nEnd Function\n')))}p.isMDXComponent=!0},41168:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/solid-body-74363cf97eff87dbe32f077c96d9e375.png"},40532:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/surface-body-20934fad5bc25048caaa9cd8a57d5eeb.png"},98036:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/wire-body-d639e1e76fdd0d7a9e50e2c527ff6d23.png"}}]);