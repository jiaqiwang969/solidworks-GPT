"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[61188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",F={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),p=a,m=c["".concat(l,".").concat(p)]||c[p]||F[p]||r;return n?s.createElement(m,o(o({ref:t},d),{},{components:n})):s.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>F,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=n(87462),a=(n(67294),n(3905));const r={layout:"sw-tool",title:"\u5728\u5207\u5272\u6e05\u5355\u7279\u5f81\u4e4b\u540e\u91cd\u547d\u540d\u94a3\u91d1\u5c55\u5f00\u7279\u5f81",caption:"\u91cd\u547d\u540d\u5c55\u5f00\u56fe"},o=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-flat-patterns/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-flat-patterns/index",title:"\u5728\u5207\u5272\u6e05\u5355\u7279\u5f81\u4e4b\u540e\u91cd\u547d\u540d\u94a3\u91d1\u5c55\u5f00\u7279\u5f81",description:"VBA \u5b8f\uff0c\u5c06\u6240\u6709\u94a3\u91d1\u5c55\u5f00\u7279\u5f81\u91cd\u547d\u540d\u4e3a\u76f8\u5e94\u7684\u5207\u5272\u6e05\u5355\u9879\u540d\u79f0",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-flat-patterns/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-flat-patterns",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-flat-patterns/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-flat-patterns/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-flat-patterns/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u5728\u5207\u5272\u6e05\u5355\u7279\u5f81\u4e4b\u540e\u91cd\u547d\u540d\u94a3\u91d1\u5c55\u5f00\u7279\u5f81",caption:"\u91cd\u547d\u540d\u5c55\u5f00\u56fe"},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS\u5b8f\u6309\u987a\u5e8f\u91cd\u547d\u540d\u6a21\u578b\u4e2d\u7684\u6240\u6709\u7279\u5f81",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-features-sequentially/"},next:{title:"\u4f7f\u7528\u5207\u5272\u6e05\u5355\u540d\u79f0\u91cd\u547d\u540d\u5c55\u5f00\u56fe\u89c6\u56fe\u7684VBA\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-sheet-metal-views/"}},l={},u=[{value:"group: Part",id:"group-part",level:2}],d={toc:u},c="wrapper";function F(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"VBA \u5b8f\uff0c\u5c06\u6240\u6709\u94a3\u91d1\u5c55\u5f00\u7279\u5f81\u91cd\u547d\u540d\u4e3a\u76f8\u5e94\u7684\u5207\u5272\u6e05\u5355\u9879\u540d\u79f0\nimage: flat-pattern.svg\nlabels: ","[\u5207\u5272\u6e05\u5355,\u94a3\u91d1,\u5c55\u5f00\u56fe,\u91cd\u547d\u540d]"),(0,a.kt)("h2",{id:"group-part"},"group: Part"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5207\u5272\u6e05\u5355\u548c\u94a3\u91d1\u5c55\u5f00\u56fe",src:n(47993).Z,width:"384",height:"574"}),"{ width=250 }"),(0,a.kt)("p",null,"\u6b64 VBA \u5b8f\u5c06\u6240\u6709\u94a3\u91d1\u5c55\u5f00\u7279\u5f81\u91cd\u547d\u540d\u4e3a\u76f8\u5e94\u7684\u5207\u5272\u6e05\u5355\u9879\u540d\u79f0\u3002"),(0,a.kt)("p",null,"\u6b64\u5b8f\u53ef\u4e0e ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/cut-lists/rename-cut-list-items/"},"\u91cd\u547d\u540d\u5207\u5272\u6e05\u5355\u7279\u5f81")," \u5b8f\u4e00\u8d77\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4e3a\u907f\u514d\u540d\u79f0\u51b2\u7a81\uff0c\u5c06\u540e\u7f00\u6dfb\u52a0\u5230\u94a3\u91d1\u5c55\u5f00\u7279\u5f81\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged-bottom","jagged-bottom":!0},'Const SUFFIX As String = "_FP"\n')),(0,a.kt)("p",null,"\u5982\u679c\u5177\u6709\u76f8\u540c\u5207\u5272\u6e05\u5355\u7684\u94a3\u91d1\u5c55\u5f00\u56fe\u6848\uff0c\u5b8f\u5c06\u81ea\u52a8\u5411\u5c55\u5f00\u56fe\u6848\u540d\u79f0\u6dfb\u52a0\u7d22\u5f15\u3002"),(0,a.kt)("p",null,"\u89c2\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/jsjN8zNRTuc?t=276"},"\u6f14\u793a\u89c6\u9891")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Const SUFFIX As String = "_FP"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \ntry_:\n    On Error GoTo catch_\n    \n    Dim vCutListFeats As Variant\n    vCutListFeats = GetCutListFeatures(swModel)\n    \n    If Not IsEmpty(vCutListFeats) Then\n        \n        Dim vFlatPatternFeats As Variant\n        vFlatPatternFeats = GetFlatPatternFeatures(swModel)\n        \n        If Not IsEmpty(vFlatPatternFeats) Then\n            RenameFlatPatternsWithCutList swModel, vFlatPatternFeats, vCutListFeats\n        Else\n            Err.Raise vbError, "", "\u672a\u627e\u5230\u94a3\u91d1\u5c55\u5f00\u7279\u5f81"\n        End If\n        \n    Else\n        Err.Raise vbError, "", "\u672a\u627e\u5230\u5207\u5272\u6e05\u5355\u9879"\n    End If\n    \n    GoTo finally_\ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n\nEnd Sub\n\nFunction GetCutListFeatures(model As SldWorks.ModelDoc2) As Variant\n    GetCutListFeatures = GetFeaturesByType(model, "CutListFolder")\nEnd Function\n\nFunction GetFlatPatternFeatures(model As SldWorks.ModelDoc2) As Variant\n    GetFlatPatternFeatures = GetFeaturesByType(model, "FlatPattern")\nEnd Function\n\nFunction RenameFlatPatternsWithCutList(model As SldWorks.ModelDoc2, vFlatPatternFeats As Variant, vCutListFeats As Variant)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vFlatPatternFeats)\n        \n        Dim swFlatPatternFeat As SldWorks.Feature\n        Dim swFlatPattern As SldWorks.FlatPatternFeatureData\n        \n        Set swFlatPatternFeat = vFlatPatternFeats(i)\n        \n        Set swFlatPattern = swFlatPatternFeat.GetDefinition\n        \n        Dim swFixedFace As SldWorks.Face2\n        Set swFixedFace = swFlatPattern.FixedFace2\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = swFixedFace.GetBody\n        \n        Dim swCutListFeat As SldWorks.Feature\n        Set swCutListFeat = FindCutListFeature(vCutListFeats, swBody)\n        \n        If Not swCutListFeat Is Nothing Then\n            If swFlatPatternFeat.Name <> swCutListFeat.Name Then\n                \n                Dim featName As String\n                \n                featName = swCutListFeat.Name + SUFFIX\n                Dim index As Integer\n                index = 0\n                \n                While model.FeatureManager.IsNameUsed(swNameType_e.swFeatureName, featName)\n                    index = index + 1\n                    featName = swCutListFeat.Name + CStr(index) + SUFFIX\n                Wend\n                \n                swFlatPatternFeat.Name = featName\n            End If\n        End If\n        \n    Next\n    \nEnd Function\n\nFunction FindCutListFeature(vCutListFeats As Variant, body As SldWorks.Body2) As SldWorks.Feature\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vCutListFeats)\n        \n        Dim swCutListFeat As SldWorks.Feature\n        Set swCutListFeat = vCutListFeats(i)\n        \n        Dim swBodyFolder As SldWorks.BodyFolder\n        Set swBodyFolder = swCutListFeat.GetSpecificFeature2\n            \n        Dim vBodies As Variant\n        \n        vBodies = swBodyFolder.GetBodies\n        \n        If ContainsBody(vBodies, body) Then\n            Set FindCutListFeature = swCutListFeat\n        End If\n            \n    Next\n    \nEnd Function\n\nFunction ContainsBody(vBodies As Variant, body As SldWorks.Body2) As Boolean\n    \n    If Not IsEmpty(vBodies) Then\n    \n        Dim i As Integer\n        \n        For i = 0 To UBound(vBodies)\n            \n            Dim swCutListBody As SldWorks.Body2\n            Set swCutListBody = vBodies(i)\n            \n            If swApp.IsSame(swCutListBody, body) = swObjectEquality.swObjectSame Then\n                ContainsBody = True\n                Exit Function\n            End If\n        Next\n        \n    End If\n    \n    ContainsBody = False\n    \nEnd Function\n\nFunction GetFeaturesByType(model As SldWorks.ModelDoc2, typeName As String) As Variant\n    \n    Dim swFeats() As SldWorks.Feature\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = model.FirstFeature\n    \n    Do While Not swFeat Is Nothing\n        \n        ProcessFeature swFeat, swFeats, typeName\n\n        Set swFeat = swFeat.GetNextFeature\n        \n    Loop\n    \n    If (Not swFeats) = -1 Then\n        GetFeaturesByType = Empty\n    Else\n        GetFeaturesByType = swFeats\n    End If\n    \nEnd Function\n\nSub ProcessFeature(thisFeat As SldWorks.Feature, featsArr() As SldWorks.Feature, typeName As String)\n    \n    If thisFeat.GetTypeName2() = typeName Then\n    \n        If (Not featsArr) = -1 Then\n            ReDim featsArr(0)\n            Set featsArr(0) = thisFeat\n        Else\n            Dim i As Integer\n            \n            For i = 0 To UBound(featsArr)\n                If swApp.IsSame(featsArr(i), thisFeat) = swObjectEquality.swObjectSame Then\n                    Exit Sub\n                End If\n            Next\n            \n            ReDim Preserve featsArr(UBound(featsArr) + 1)\n            Set featsArr(UBound(featsArr)) = thisFeat\n        End If\n    \n    End If\n    \n    Dim swSubFeat As SldWorks.Feature\n    Set swSubFeat = thisFeat.GetFirstSubFeature\n        \n    While Not swSubFeat Is Nothing\n        ProcessFeature swSubFeat, featsArr, typeName\n        Set swSubFeat = swSubFeat.GetNextSubFeature\n    Wend\n        \nEnd Sub\n')))}F.isMDXComponent=!0},47993:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/renamed-flat-patterns-be3c18b49fd3b883e5cbfef43e3f5c58.png"}}]);