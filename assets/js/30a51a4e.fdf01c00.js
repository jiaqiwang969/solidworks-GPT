"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[3162],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var s=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,o=function(e,n){if(null==e)return{};var t,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=s.createContext({}),c=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return s.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},w=s.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),w=o,m=u["".concat(l,".").concat(w)]||u[w]||p[w]||r;return t?s.createElement(m,a(a({ref:n},d),{},{components:t})):s.createElement(m,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=w;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<r;c++)a[c]=t[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}w.displayName="MDXCreateElement"},47137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(87462),o=(t(67294),t(3905));const r={caption:"Assign Random Color To Sketches",title:"Macro to assign random color to sketches in the document",description:"VBA macro assigns random color to sketches in SOLIDWORKS parts or assemblies with an option to skip already assigned sketches and unabsorbed sketches"},a=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/assign-random-color/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/assign-random-color/index",title:"Macro to assign random color to sketches in the document",description:"VBA macro assigns random color to sketches in SOLIDWORKS parts or assemblies with an option to skip already assigned sketches and unabsorbed sketches",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/assign-random-color/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/assign-random-color",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/assign-random-color/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/assign-random-color/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/assign-random-color/index.md",tags:[],version:"current",frontMatter:{caption:"Assign Random Color To Sketches",title:"Macro to assign random color to sketches in the document",description:"VBA macro assigns random color to sketches in SOLIDWORKS parts or assemblies with an option to skip already assigned sketches and unabsorbed sketches"},sidebar:"tutorialSidebar",previous:{title:"Align line along axis using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/align-line-along-axis/"},next:{title:"Convert arc to circle by merging end points using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/convert-arc-to-circle/"}},l={},c=[{value:"Line Colors",id:"line-colors",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,s.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This VBA macro assigns the random color to all sketches of active parts or assemblies."),(0,o.kt)("p",null,"Macro can be configured to skip sketches with already assigned colors and select only unabsorbed sketches (e.g. sketches which are not used in other features)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Const SKIP_ASSIGNED As Boolean = False 'Processes all sketches (including the sketches with assigned colors)\nConst UNABSORBED_ONLY As Boolean = False 'Process all sketches (absorbed and unabsorbed)\n")),(0,o.kt)("p",null,"Color will be assigned on the feature appearance level."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const SKIP_ASSIGNED As Boolean = True\nConst UNABSORBED_ONLY As Boolean = True\n\nDim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Set swModel = swApp.ActiveDoc\n    \n    Dim vFeats As Variant\n    vFeats = CollectAllSketchFeatures(swModel.FirstFeature)\n    \n    If Not IsEmpty(vFeats) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vFeats)\n            \n            Dim swFeat As SldWorks.Feature\n            Set swFeat = vFeats(i)\n            \n            If Not SKIP_ASSIGNED Or Not HasAppearence(swFeat) Then\n                \n                If Not UNABSORBED_ONLY Or Not IsAbsorbed(swFeat) Then\n                    \n                    Dim dMatPrps(8) As Double\n                    dMatPrps(0) = Rnd(): dMatPrps(1) = Rnd(): dMatPrps(2) = Rnd()\n                    dMatPrps(3) = 1: dMatPrps(4) = 1: dMatPrps(5) = 0.5\n                    dMatPrps(6) = 0.4: dMatPrps(7) = 0: dMatPrps(8) = 0\n                    \n                    Debug.Print "Assigning color " & dMatPrps(0) * 255 & ";" & dMatPrps(1) * 255 & ";" & dMatPrps(2) * 255 & " to " & swFeat.Name\n                    \n                    swFeat.SetMaterialPropertyValues2 dMatPrps, swInConfigurationOpts_e.swThisConfiguration, Empty\n                    \n                End If\n                \n            End If\n            \n        Next\n        \n    End If\n\nEnd Sub\n\nFunction IsAbsorbed(feat As SldWorks.Feature) As Boolean\n    \n    Dim vFeatChildren As Variant\n    vFeatChildren = feat.GetChildren()\n    \n    IsAbsorbed = Not IsEmpty(vFeatChildren)\n    \nEnd Function\n\nFunction HasAppearence(feat As SldWorks.Feature) As Boolean\n    \n    Dim vMatPrpVals As Variant\n    vMatPrpVals = feat.GetMaterialPropertyValues2(swInConfigurationOpts_e.swThisConfiguration, Empty)\n            \n    HasAppearence = vMatPrpVals(0) <> -1 And vMatPrpVals(1) <> -1 And vMatPrpVals(2) <> -1\n    \nEnd Function\n\nFunction CollectAllSketchFeatures(firstFeat As SldWorks.Feature) As Variant\n    \n    Const SKETCH_FEAT_TYPE_NAME As String = "ProfileFeature"\n    Const SKETCH_3D_FEAT_TYPE_NAME As String = "3DProfileFeature"\n\n    Dim swFeats() As SldWorks.Feature\n\n    Dim swFeat As SldWorks.Feature\n    Set swFeat = firstFeat\n    \n    While Not swFeat Is Nothing\n    \n        If swFeat.GetTypeName2 = SKETCH_FEAT_TYPE_NAME Or _\n            swFeat.GetTypeName2 = SKETCH_3D_FEAT_TYPE_NAME Then\n            \n            If (Not swFeats) = -1 Then\n                ReDim swFeats(0)\n            Else\n                ReDim Preserve swFeats(UBound(swFeats) + 1)\n            End If\n            \n            Set swFeats(UBound(swFeats)) = swFeat\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \n    If (Not swFeats) = -1 Then\n        CollectAllSketchFeatures = Empty\n    Else\n        CollectAllSketchFeatures = swFeats\n    End If\n    \nEnd Function\n')),(0,o.kt)("h2",{id:"line-colors"},"Line Colors"),(0,o.kt)("p",null,"This is an alternative version of the macro which assigns the color as a line color instead of the feature appearance."),(0,o.kt)("p",null,"This macro will assign the random color for all selected sketches or all sketches if no sketches are selected. ",(0,o.kt)("strong",{parentName:"p"},"UNABSORBED_ONLY")," option is only considered when no sketches are selected."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const UNUBSORBED_ONLY As Boolean = True\n\nDim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swPart As SldWorks.PartDoc\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Set swModel = swApp.ActiveDoc\n        \n    Set swPart = swModel\n        \n    Dim vFeats As Variant\n    \n    vFeats = CollectSelectedSketches(swModel)\n    \n    If IsEmpty(vFeats) Then\n        vFeats = CollectAllSketchFeatures(swModel.FirstFeature)\n    End If\n    \n    If Not IsEmpty(vFeats) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vFeats)\n            \n            Dim swFeat As SldWorks.Feature\n            Set swFeat = vFeats(i)\n                        \n            If False <> swFeat.Select2(False, -1) Then\n                swPart.SetLineColor RGB(CInt(255 * Rnd()), CInt(255 * Rnd()), CInt(255 * Rnd()))\n            Else\n                Err.Raise vbError, "", "Failed to select " & swFeat.Name\n            End If\n            \n        Next\n        \n    End If\n    \n    swModel.ClearSelection2 True\n\nEnd Sub\n\nFunction IsAbsorbed(feat As SldWorks.Feature) As Boolean\n    \n    Dim vFeatChildren As Variant\n    vFeatChildren = feat.GetChildren()\n    \n    IsAbsorbed = Not IsEmpty(vFeatChildren)\n    \nEnd Function\n\nFunction CollectSelectedSketches(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim swFeats() As SldWorks.Feature\n\n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swSelMgr = model.SelectionManager\n    \n    Dim i As Integer\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelSKETCHES Then\n            \n            If (Not swFeats) = -1 Then\n                ReDim swFeats(0)\n            Else\n                ReDim Preserve swFeats(UBound(swFeats) + 1)\n            End If\n            \n            Set swFeats(UBound(swFeats)) = swSelMgr.GetSelectedObject6(i, -1)\n            \n        End If\n        \n    Next\n    \n    If (Not swFeats) = -1 Then\n        CollectSelectedSketches = Empty\n    Else\n        CollectSelectedSketches = swFeats\n    End If\n\nEnd Function\n\nFunction CollectAllSketchFeatures(firstFeat As SldWorks.Feature) As Variant\n    \n    Const SKETCH_FEAT_TYPE_NAME As String = "ProfileFeature"\n    Const SKETCH_3D_FEAT_TYPE_NAME As String = "3DProfileFeature"\n\n    Dim swFeats() As SldWorks.Feature\n\n    Dim swFeat As SldWorks.Feature\n    Set swFeat = firstFeat\n    \n    While Not swFeat Is Nothing\n    \n        If swFeat.GetTypeName2 = SKETCH_FEAT_TYPE_NAME Or _\n            swFeat.GetTypeName2 = SKETCH_3D_FEAT_TYPE_NAME Then\n            \n            If Not UNUBSORBED_ONLY Or Not IsAbsorbed(swFeat) Then\n            \n                If (Not swFeats) = -1 Then\n                    ReDim swFeats(0)\n                Else\n                    ReDim Preserve swFeats(UBound(swFeats) + 1)\n                End If\n                \n                Set swFeats(UBound(swFeats)) = swFeat\n            \n            End If\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \n    If (Not swFeats) = -1 Then\n        CollectAllSketchFeatures = Empty\n    Else\n        CollectAllSketchFeatures = swFeats\n    End If\n    \nEnd Function\n')))}p.isMDXComponent=!0}}]);