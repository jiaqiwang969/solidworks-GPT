"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[41366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>w});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(n),m=s,w=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(w,r(r({ref:t},c),{},{components:n})):o.createElement(w,r({ref:t},c))}));function w(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[p]="string"==typeof e?e:s,r[1]=d;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=n(87462),s=(n(67294),n(3905));const a={title:"\u4f7f\u7528SOLIDWORKS API\u751f\u6210\u76d2\u5b50\u51e0\u4f55\u4f53\uff08\u5b9e\u4f53\u3001\u9762\u3001\u7ebf\uff09\u5b8f\u7279\u5f81",image:"solid-body.png",labels:["\u5b8f\u7279\u5f81","\u51e0\u4f55\u4f53","\u76d2\u5b50","\u5b9e\u4f53","\u9762","\u7ebf"]},r=void 0,d={unversionedId:"codestack/solidworks-api/document/macro-feature/geometry/index",id:"codestack/solidworks-api/document/macro-feature/geometry/index",title:"\u4f7f\u7528SOLIDWORKS API\u751f\u6210\u76d2\u5b50\u51e0\u4f55\u4f53\uff08\u5b9e\u4f53\u3001\u9762\u3001\u7ebf\uff09\u5b8f\u7279\u5f81",description:"\u8fd9\u4e2aVBA\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u521b\u5efa\u751f\u6210\u81ea\u5b9a\u4e49\u51e0\u4f55\u4f53\u7684\u5b8f\u7279\u5f81\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/macro-feature/geometry/index.md",sourceDirName:"codestack/solidworks-api/document/macro-feature/geometry",slug:"/codestack/solidworks-api/document/macro-feature/geometry/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/macro-feature/geometry/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/macro-feature/geometry/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u751f\u6210\u76d2\u5b50\u51e0\u4f55\u4f53\uff08\u5b9e\u4f53\u3001\u9762\u3001\u7ebf\uff09\u5b8f\u7279\u5f81",image:"solid-body.png",labels:["\u5b8f\u7279\u5f81","\u51e0\u4f55\u4f53","\u76d2\u5b50","\u5b9e\u4f53","\u9762","\u7ebf"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS\u5b8f\u529f\u80fd\u4ee5\u5c06\u901a\u7528\u8868\u683c\u94fe\u63a5\u5e76\u81ea\u52a8\u66f4\u65b0\u5230Excel",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/macro-feature/general-table-link-excel/"},next:{title:"\u4f7f\u7528SOLIDWORKS\u5b8f\u7279\u5f81API\u5c06\u5207\u5272\u6e05\u5355\u81ea\u5b9a\u4e49\u5c5e\u6027\u94fe\u63a5\u5230\u6587\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/macro-feature/link-cut-list-properties/"}},i={},l=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5d4c\u5165",id:"\u5d4c\u5165",level:3},{value:"\u76d2\u5b50\u5c3a\u5bf8",id:"\u76d2\u5b50\u5c3a\u5bf8",level:3},{value:"\u51e0\u4f55\u4f53\u7c7b\u578b",id:"\u51e0\u4f55\u4f53\u7c7b\u578b",level:3},{value:"swBodyType_e.swSolidBody",id:"swbodytype_eswsolidbody",level:4},{value:"swBodyType_e.swSheetBody",id:"swbodytype_eswsheetbody",level:4},{value:"swBodyType_e.swWireBody",id:"swbodytype_eswwirebody",level:4}],c={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(p,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u8fd9\u4e2aVBA\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u521b\u5efa\u751f\u6210\u81ea\u5b9a\u4e49\u51e0\u4f55\u4f53\u7684\u5b8f\u7279\u5f81\u3002"),(0,s.kt)("p",null,"\u6253\u5f00\u96f6\u4ef6\u6587\u6863\u5e76\u8fd0\u884c\u5b8f\u3002\u65b0\u7684\u7279\u5f81\u5c06\u63d2\u5165\u5230\u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\uff0c\u5e76\u4e14\u5c06\u751f\u6210\u76d2\u5b50\u51e0\u4f55\u4f53\uff0c\u53ef\u4ee5\u662f\u5b9e\u4f53\u3001\u9762\u6216\u7ebf\u4f53\u3002"),(0,s.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,s.kt)("h3",{id:"\u5d4c\u5165"},"\u5d4c\u5165"),(0,s.kt)("p",null,"\u5c06",(0,s.kt)("em",{parentName:"p"},"EMBED_MACRO_FEATURE"),"\u5e38\u91cf\u7684\u503c\u8bbe\u7f6e\u4e3a\u6307\u5b9a\u662f\u5426\u5c06\u5b8f\u7279\u5f81\u5d4c\u5165\u5230\u6587\u4ef6\u4e2d\u3002\u5982\u679c\u5c06\u6b64\u9009\u9879\u8bbe\u7f6e\u4e3a",(0,s.kt)("em",{parentName:"p"},"True"),"\uff0c\u5219\u53ef\u4ee5\u5728\u4efb\u4f55\u5176\u4ed6\u8ba1\u7b97\u673a\u4e0a\u6253\u5f00\u96f6\u4ef6\u6587\u6863\uff0c\u800c\u65e0\u9700\u590d\u5236\u5b8f\u5373\u53ef\u67e5\u770b\u51e0\u4f55\u4f53\u3002"),(0,s.kt)("h3",{id:"\u76d2\u5b50\u5c3a\u5bf8"},"\u76d2\u5b50\u5c3a\u5bf8"),(0,s.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u66f4\u6539",(0,s.kt)("em",{parentName:"p"},"WIDTH"),"\u3001",(0,s.kt)("em",{parentName:"p"},"LENGTH"),"\u548c",(0,s.kt)("em",{parentName:"p"},"HEIGHT"),"\u5e38\u91cf\u6765\u914d\u7f6e\u76d2\u5b50\u7684\u5c3a\u5bf8\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const WIDTH As Double = 0.01\nConst LENGTH As Double = 0.01\nConst HEIGHT As Double = 0.01\n")),(0,s.kt)("h3",{id:"\u51e0\u4f55\u4f53\u7c7b\u578b"},"\u51e0\u4f55\u4f53\u7c7b\u578b"),(0,s.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5c06\u503c\u5206\u914d\u7ed9",(0,s.kt)("em",{parentName:"p"},"BODY_TYPE"),"\u5e38\u91cf\u6765\u8bbe\u7f6e\u751f\u6210\u7684\u51e0\u4f55\u4f53\u7c7b\u578b\u3002"),(0,s.kt)("h4",{id:"swbodytype_eswsolidbody"},"swBodyType_e.swSolidBody"),(0,s.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5b9e\u4f53\u51e0\u4f55\u4f53\u7684\u76d2\u5b50\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u5b8f\u7279\u5f81\u751f\u6210\u5b9e\u4f53\u51e0\u4f55\u4f53",src:n(33214).Z,width:"620",height:"409"}),"{ width=350 }"),(0,s.kt)("h4",{id:"swbodytype_eswsheetbody"},"swBodyType_e.swSheetBody"),(0,s.kt)("p",null,"\u901a\u8fc7\u7f1d\u5408\u76d2\u5b50\u7684\u9762\u521b\u5efa\u4e00\u4e2a\u5355\u4e2a\u9762\u4f53\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u5b8f\u7279\u5f81\u751f\u6210\u9762\uff08\u9762\uff09\u4f53",src:n(25666).Z,width:"568",height:"400"}),"{ width=350 }"),(0,s.kt)("h4",{id:"swbodytype_eswwirebody"},"swBodyType_e.swWireBody"),(0,s.kt)("p",null,"\u4ece\u76d2\u5b50\u51e0\u4f55\u4f53\u7684\u6240\u6709\u8fb9\u521b\u5efa\u7ebf\u4f53\u3002\u7ebf\u4f53\u662f\u8fb9\u7f18\uff0c\u4e0d\u5728\u4f53\u6587\u4ef6\u5939\u4e2d\u663e\u793a\u3002\u6807\u51c6\u7279\u5f81\u6811\u4e2d\u4f7f\u7528\u7684\u7ebf\u4f53\u793a\u4f8b\u662f\u66f2\u7ebf\uff08\u590d\u5408\u3001\u901a\u8fc7XYZ\u3001\u6295\u5f71\u7b49\uff09\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u5b8f\u7279\u5f81\u751f\u6210\u7ebf\u4f53",src:n(75639).Z,width:"621",height:"394"}),"{ width=350 }"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const BODY_TYPE As Integer = swBodyType_e.swSolidBody\nConst EMBED_MACRO_FEATURE As Boolean = False\nConst BASE_NAME As String = "Box"\n\nConst WIDTH As Double = 0.01\nConst LENGTH As Double = 0.01\nConst HEIGHT As Double = 0.01\n\nSub main()\n\n    Dim swApp As SldWorks.SldWorks\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim curMacroPath As String\n        curMacroPath = swApp.GetCurrentMacroPathName\n        \n        Dim vMethods(8) As String\n        Dim moduleName As String\n        \n        GetMacroEntryPoint swApp, curMacroPath, moduleName, ""\n        \n        vMethods(0) = curMacroPath: vMethods(1) = moduleName: vMethods(2) = "swmRebuild"\n        vMethods(3) = curMacroPath: vMethods(4) = moduleName: vMethods(5) = "swmEditDefinition"\n        vMethods(6) = curMacroPath: vMethods(7) = moduleName: vMethods(8) = "swmSecurity"\n        \n        Dim opts As swMacroFeatureOptions_e\n        \n        If EMBED_MACRO_FEATURE Then\n            opts = swMacroFeatureOptions_e.swMacroFeatureEmbedMacroFile\n        Else\n            opts = swMacroFeatureOptions_e.swMacroFeatureByDefault\n        End If\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swModel.FeatureManager.InsertMacroFeature3(BASE_NAME, "", vMethods, _\n            Empty, Empty, Empty, Empty, Empty, Empty, _\n            Empty, opts)\n        \n        If swFeat Is Nothing Then\n            MsgBox "Failed to create box feature"\n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nSub GetMacroEntryPoint(app As SldWorks.SldWorks, macroPath As String, ByRef moduleName As String, ByRef procName As String)\n        \n    Dim vMethods As Variant\n    vMethods = app.GetMacroMethods(macroPath, swMacroMethods_e.swMethodsWithoutArguments)\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(vMethods) Then\n    \n        For i = 0 To UBound(vMethods)\n            Dim vData As Variant\n            vData = Split(vMethods(i), ".")\n            \n            If i = 0 Or LCase(vData(1)) = "main" Then\n                moduleName = vData(0)\n                procName = vData(1)\n            End If\n        Next\n        \n    End If\n    \nEnd Sub\n\nFunction swmRebuild(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    \n    Dim swApp As SldWorks.SldWorks\n    Dim swModeler As SldWorks.Modeler\n    \n    Set swApp = varApp\n    Set swModeler = swApp.GetModeler\n    \n    Dim swTemplateBody As SldWorks.Body2\n\n    Dim dCenter(2) As Double\n    dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0\n    \n    Dim dAxis(2) As Double\n    dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1\n                    \n    Dim dBoxData(8) As Double\n    dBoxData(0) = dCenter(0): dBoxData(1) = dCenter(1): dBoxData(2) = dCenter(2)\n    dBoxData(3) = dAxis(0): dBoxData(4) = dAxis(1): dBoxData(5) = dAxis(2)\n    dBoxData(6) = WIDTH: dBoxData(7) = LENGTH: dBoxData(8) = HEIGHT\n        \n    Set swTemplateBody = swModeler.CreateBodyFromBox3(dBoxData)\n    \n    Dim swBoxBody() As SldWorks.Body2\n    \n    Dim i As Integer\n    \n    Dim isInit As Boolean\n    isInit = False\n    \n    Select Case BODY_TYPE\n        Case swBodyType_e.swSolidBody\n            isInit = True\n            ReDim swBoxBody(0) As SldWorks.Body2\n            Set swBoxBody(0) = swTemplateBody\n        Case swBodyType_e.swSheetBody\n            isInit = True\n            ReDim swBoxBody(0) As SldWorks.Body2\n            Set swBoxBody(0) = swModeler.CreateSheetFromFaces(swTemplateBody.GetFaces())\n        Case swBodyType_e.swWireBody\n            isInit = True\n            \n            Dim vEdges As Variant\n            \n            vEdges = swTemplateBody.GetEdges()\n            \n            ReDim swBoxBody(UBound(vEdges)) As SldWorks.Body2\n            \n            For i = 0 To swTemplateBody.GetEdgeCount() - 1\n                Dim swEdge(0) As SldWorks.Edge\n                Set swEdge(0) = vEdges(i)\n                Set swBoxBody(i) = swModeler.CreateWireBody(swEdge, swCreateWireBodyOptions_e.swCreateWireBodyByDefault)\n            Next\n    End Select\n    \n    If isInit Then\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = varFeat\n        \n        Dim swMacroFeatData As SldWorks.MacroFeatureData\n        Set swMacroFeatData = swFeat.GetDefinition\n        \n        For i = 0 To UBound(swBoxBody)\n            AssignUserIds swBoxBody(i), swMacroFeatData\n        Next\n        \n        swMacroFeatData.EnableMultiBodyConsume = UBound(swBoxBody) > 0\n        swmRebuild = swBoxBody\n        \n    Else\n        swmRebuild = "\u65e0\u6548\u7684\u51e0\u4f55\u4f53\u7c7b\u578b\u3002\u4ec5\u652f\u6301\u5b9e\u4f53\u3001\u9762\u548c\u7ebf\u4f53"\n    End If\n    \nEnd Function\n\nSub AssignUserIds(body As SldWorks.Body2, featData As SldWorks.MacroFeatureData)\n    \n    Dim vFaces As Variant\n    Dim vEdges As Variant\n    Dim i As Integer\n    \n    featData.GetEntitiesNeedUserId body, vFaces, vEdges\n    \n    If Not IsEmpty(vFaces) Then\n        For i = 0 To UBound(vFaces)\n            Dim swFace As SldWorks.Face2\n            Set swFace = vFaces(i)\n            featData.SetFaceUserId swFace, 0, i\n        Next\n    End If\n    \n    If Not IsEmpty(vEdges) Then\n        For i = 0 To UBound(vEdges)\n            Dim swEdge As SldWorks.Edge\n            Set swEdge = vEdges(i)\n            featData.SetEdgeUserId swEdge, 0, i\n        Next\n    End If\n    \nEnd Sub\n\nFunction swmEditDefinition(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmEditDefinition = True\nEnd Function\n\nFunction swmSecurity(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmSecurity = SwConst.swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityByDefault\nEnd Function\n')))}u.isMDXComponent=!0},33214:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/solid-body-74363cf97eff87dbe32f077c96d9e375.png"},25666:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/surface-body-20934fad5bc25048caaa9cd8a57d5eeb.png"},75639:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/wire-body-d639e1e76fdd0d7a9e50e2c527ff6d23.png"}}]);