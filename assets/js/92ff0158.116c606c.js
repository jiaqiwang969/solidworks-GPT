"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[68991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>F});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),p=s,F=c["".concat(l,".").concat(p)]||c[p]||m[p]||r;return n?a.createElement(F,o(o({ref:t},d),{},{components:n})):a.createElement(F,o({ref:t},d))}));function F(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),s=(n(67294),n(3905));const r={layout:"sw-tool",title:"Rename sheet metal flat patterns features after the cut-list features",caption:"Rename Flat Pattern After Cut-Lists",description:"VBA macro to rename sheet metal flat patterns after the corresponding cut-list feature names",image:"flat-pattern.svg",labels:["cut-list","sheet metal","flat-pattern","rename"],group:"Part"},o=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-flat-patterns/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-flat-patterns/index",title:"Rename sheet metal flat patterns features after the cut-list features",description:"VBA macro to rename sheet metal flat patterns after the corresponding cut-list feature names",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-flat-patterns/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-flat-patterns",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-flat-patterns/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-flat-patterns/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-flat-patterns/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Rename sheet metal flat patterns features after the cut-list features",caption:"Rename Flat Pattern After Cut-Lists",description:"VBA macro to rename sheet metal flat patterns after the corresponding cut-list feature names",image:"flat-pattern.svg",labels:["cut-list","sheet metal","flat-pattern","rename"],group:"Part"},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS macro renames all features in model sequentially",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-features-sequentially/"},next:{title:"Rename flat pattern views with cut-list names VBA macro",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-sheet-metal-views/"}},l={},u=[],d={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Cut-lists and sheet metal flat patterns",src:n(65869).Z,width:"384",height:"574"}),"{ width=250 }"),(0,s.kt)("p",null,"This VBA macro renames all sheet metal flat pattern features with the name of the corresponding cut-list item."),(0,s.kt)("p",null,"This macro can be used in conjunction with ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/cut-lists/rename-cut-list-items/"},"Rename Cut List Features")," macro."),(0,s.kt)("p",null,"In order to avoid the name conflict, suffix is added to flat pattern features as below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged-bottom","jagged-bottom":!0},'Const SUFFIX As String = "_FP"\n')),(0,s.kt)("p",null,"Macro will automatically add the index to the flat pattern name which shares the same cut list."),(0,s.kt)("p",null,"Watch ",(0,s.kt)("a",{parentName:"p",href:"https://youtu.be/jsjN8zNRTuc?t=276"},"video demonstration")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const SUFFIX As String = "_FP"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \ntry_:\n    On Error GoTo catch_\n    \n    Dim vCutListFeats As Variant\n    vCutListFeats = GetCutListFeatures(swModel)\n    \n    If Not IsEmpty(vCutListFeats) Then\n        \n        Dim vFlatPatternFeats As Variant\n        vFlatPatternFeats = GetFlatPatternFeatures(swModel)\n        \n        If Not IsEmpty(vFlatPatternFeats) Then\n            RenameFlatPatternsWithCutList swModel, vFlatPatternFeats, vCutListFeats\n        Else\n            Err.Raise vbError, "", "No flat pattern features found"\n        End If\n        \n    Else\n        Err.Raise vbError, "", "No cut-list items found"\n    End If\n    \n    GoTo finally_\ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n\nEnd Sub\n\nFunction GetCutListFeatures(model As SldWorks.ModelDoc2) As Variant\n    GetCutListFeatures = GetFeaturesByType(model, "CutListFolder")\nEnd Function\n\nFunction GetFlatPatternFeatures(model As SldWorks.ModelDoc2) As Variant\n    GetFlatPatternFeatures = GetFeaturesByType(model, "FlatPattern")\nEnd Function\n\nFunction RenameFlatPatternsWithCutList(model As SldWorks.ModelDoc2, vFlatPatternFeats As Variant, vCutListFeats As Variant)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vFlatPatternFeats)\n        \n        Dim swFlatPatternFeat As SldWorks.Feature\n        Dim swFlatPattern As SldWorks.FlatPatternFeatureData\n        \n        Set swFlatPatternFeat = vFlatPatternFeats(i)\n        \n        Set swFlatPattern = swFlatPatternFeat.GetDefinition\n        \n        Dim swFixedFace As SldWorks.Face2\n        Set swFixedFace = swFlatPattern.FixedFace2\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = swFixedFace.GetBody\n        \n        Dim swCutListFeat As SldWorks.Feature\n        Set swCutListFeat = FindCutListFeature(vCutListFeats, swBody)\n        \n        If Not swCutListFeat Is Nothing Then\n            If swFlatPatternFeat.Name <> swCutListFeat.Name Then\n                \n                Dim featName As String\n                \n                featName = swCutListFeat.Name + SUFFIX\n                Dim index As Integer\n                index = 0\n                \n                While model.FeatureManager.IsNameUsed(swNameType_e.swFeatureName, featName)\n                    index = index + 1\n                    featName = swCutListFeat.Name + CStr(index) + SUFFIX\n                Wend\n                \n                swFlatPatternFeat.Name = featName\n            End If\n        End If\n        \n    Next\n    \nEnd Function\n\nFunction FindCutListFeature(vCutListFeats As Variant, body As SldWorks.Body2) As SldWorks.Feature\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vCutListFeats)\n        \n        Dim swCutListFeat As SldWorks.Feature\n        Set swCutListFeat = vCutListFeats(i)\n        \n        Dim swBodyFolder As SldWorks.BodyFolder\n        Set swBodyFolder = swCutListFeat.GetSpecificFeature2\n            \n        Dim vBodies As Variant\n        \n        vBodies = swBodyFolder.GetBodies\n        \n        If ContainsBody(vBodies, body) Then\n            Set FindCutListFeature = swCutListFeat\n        End If\n            \n    Next\n    \nEnd Function\n\nFunction ContainsBody(vBodies As Variant, body As SldWorks.Body2) As Boolean\n    \n    If Not IsEmpty(vBodies) Then\n    \n        Dim i As Integer\n        \n        For i = 0 To UBound(vBodies)\n            \n            Dim swCutListBody As SldWorks.Body2\n            Set swCutListBody = vBodies(i)\n            \n            If swApp.IsSame(swCutListBody, body) = swObjectEquality.swObjectSame Then\n                ContainsBody = True\n                Exit Function\n            End If\n        Next\n        \n    End If\n    \n    ContainsBody = False\n    \nEnd Function\n\nFunction GetFeaturesByType(model As SldWorks.ModelDoc2, typeName As String) As Variant\n    \n    Dim swFeats() As SldWorks.Feature\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = model.FirstFeature\n    \n    Do While Not swFeat Is Nothing\n        \n        ProcessFeature swFeat, swFeats, typeName\n\n        Set swFeat = swFeat.GetNextFeature\n        \n    Loop\n    \n    If (Not swFeats) = -1 Then\n        GetFeaturesByType = Empty\n    Else\n        GetFeaturesByType = swFeats\n    End If\n    \nEnd Function\n\nSub ProcessFeature(thisFeat As SldWorks.Feature, featsArr() As SldWorks.Feature, typeName As String)\n    \n    If thisFeat.GetTypeName2() = typeName Then\n    \n        If (Not featsArr) = -1 Then\n            ReDim featsArr(0)\n            Set featsArr(0) = thisFeat\n        Else\n            Dim i As Integer\n            \n            For i = 0 To UBound(featsArr)\n                If swApp.IsSame(featsArr(i), thisFeat) = swObjectEquality.swObjectSame Then\n                    Exit Sub\n                End If\n            Next\n            \n            ReDim Preserve featsArr(UBound(featsArr) + 1)\n            Set featsArr(UBound(featsArr)) = thisFeat\n        End If\n    \n    End If\n    \n    Dim swSubFeat As SldWorks.Feature\n    Set swSubFeat = thisFeat.GetFirstSubFeature\n        \n    While Not swSubFeat Is Nothing\n        ProcessFeature swSubFeat, featsArr, typeName\n        Set swSubFeat = swSubFeat.GetNextSubFeature\n    Wend\n        \nEnd Sub\n')))}m.isMDXComponent=!0},65869:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/renamed-flat-patterns-be3c18b49fd3b883e5cbfef43e3f5c58.png"}}]);