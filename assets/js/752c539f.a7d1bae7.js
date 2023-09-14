"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[72325],{3905:(n,o,e)=>{e.d(o,{Zo:()=>c,kt:()=>f});var r=e(67294);function t(n,o,e){return o in n?Object.defineProperty(n,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[o]=e,n}function s(n,o){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),e.push.apply(e,r)}return e}function a(n){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?s(Object(e),!0).forEach((function(o){t(n,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))}))}return n}function l(n,o){if(null==n)return{};var e,r,t=function(n,o){if(null==n)return{};var e,r,t={},s=Object.keys(n);for(r=0;r<s.length;r++)e=s[r],o.indexOf(e)>=0||(t[e]=n[e]);return t}(n,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)e=s[r],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(t[e]=n[e])}return t}var p=r.createContext({}),i=function(n){var o=r.useContext(p),e=o;return n&&(e="function"==typeof n?n(o):a(a({},o),n)),e},c=function(n){var o=i(n.components);return r.createElement(p.Provider,{value:o},n.children)},d="mdxType",m={inlineCode:"code",wrapper:function(n){var o=n.children;return r.createElement(r.Fragment,{},o)}},u=r.forwardRef((function(n,o){var e=n.components,t=n.mdxType,s=n.originalType,p=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),d=i(e),u=t,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||s;return e?r.createElement(f,a(a({ref:o},c),{},{components:e})):r.createElement(f,a({ref:o},c))}));function f(n,o){var e=arguments,t=o&&o.mdxType;if("string"==typeof n||t){var s=e.length,a=new Array(s);a[0]=u;var l={};for(var p in o)hasOwnProperty.call(o,p)&&(l[p]=o[p]);l.originalType=n,l[d]="string"==typeof n?n:t,a[1]=l;for(var i=2;i<s;i++)a[i]=e[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3656:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=e(87462),t=(e(67294),e(3905));const s={caption:"Apply Random Colors To Components",title:"Macro to apply random colors to components in SOLIDWORKS assembly",description:"VBA macro to apply random color to all components in the SOLIDWORKS assembly with an option to apply on a component or model level and group by custom property value"},a=void 0,l={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/color-assembly/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/color-assembly/index",title:"Macro to apply random colors to components in SOLIDWORKS assembly",description:"VBA macro to apply random color to all components in the SOLIDWORKS assembly with an option to apply on a component or model level and group by custom property value",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/color-assembly/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/color-assembly",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/color-assembly/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/color-assembly/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/color-assembly/index.md",tags:[],version:"current",frontMatter:{caption:"Apply Random Colors To Components",title:"Macro to apply random colors to components in SOLIDWORKS assembly",description:"VBA macro to apply random color to all components in the SOLIDWORKS assembly with an option to apply on a component or model level and group by custom property value"},sidebar:"tutorialSidebar",previous:{title:"Generate material variants configuration using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/apply-render-material/"},next:{title:"Macro to remove all colors from SOLIDWORKS document",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/remove-color/"}},p={},i=[],c={toc:i},d="wrapper";function m(n){let{components:o,...e}=n;return(0,t.kt)(d,(0,r.Z)({},c,e,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This VBA macro applies a random color on all components of the active assembly."),(0,t.kt)("p",null,"Modify constants of the macro to change the level of the color (component or model level)."),(0,t.kt)("p",null,"If colors is applied to the individual configurations (e.g. ",(0,t.kt)("strong",{parentName:"p"},"ALL_CONFIGS")," = ",(0,t.kt)("strong",{parentName:"p"},"False"),"), documents must have a display state linked to the configuration, otherwise the color cannot be configuration specific"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},"Const COMP_LEVEL As Boolean = True 'True to apply color on the assembly level, False to apply color on a model level\nConst PARTS_ONLY As Boolean = True 'True to only process part components, False to apply color to assemblies as well\nConst ALL_CONFIGS As Boolean = True 'True to apply color to all configurations, False to apply to referenced configuration only\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},"Const PRP_NAME As String = \"Type\" 'Custom property to group color by, Empty string \"\" to not group components\n\nSub InitColors(Optional dummy As Variant = Empty)\n\n    ColorsMap.Add \"Plate\", RGB(255, 0, 0) 'Color all component which custom property 'Type' equals to 'Plate' to Red color\n    ColorsMap.Add \"Beam\", RGB(0, 255, 0) 'Color all component which custom property 'Type' equals to 'Beam' to Green color\n    \nEnd Sub\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Const COMP_LEVEL As Boolean = True\nConst PARTS_ONLY As Boolean = True\nConst ALL_CONFIGS As Boolean = True\nConst PRP_NAME As String = ""\n\nDim swApp As SldWorks.SldWorks\nDim ColorsMap As Object\n\nSub InitColors(Optional dummy As Variant = Empty)\n\n    ColorsMap.Add "Plate", RGB(255, 0, 0)\n    ColorsMap.Add "Beam", RGB(0, 255, 0)\n    \nEnd Sub\n\nSub main()\n\ntry_:\n    \n    On Error GoTo catch_\n    \n    Set ColorsMap = CreateObject("Scripting.Dictionary")\n\n    ColorsMap.CompareMode = vbTextCompare\n\n    InitColors\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Then\n            \n            Dim swAssy As SldWorks.AssemblyDoc\n            \n            Set swAssy = swModel\n            \n            swAssy.ResolveAllLightWeightComponents True\n            \n            Dim vComps As Variant\n            vComps = swAssy.GetComponents(False)\n            \n            ColorizeComponents vComps\n            \n            swModel.GraphicsRedraw2\n        Else\n            Err.Raise vbError, "", "Only assembly document is supported"\n        End If\n    Else\n        Err.Raise vbError, "", "Open assembly document"\n    End If\n    \n    GoTo finally_\n    \ncatch_:\n    MsgBox Err.Description, vbCritical\nfinally_:\n    \nEnd Sub\n\nSub ColorizeComponents(vComps As Variant)\n    \n    Dim i As Integer\n    \n    Dim processedDocs() As String\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n        \n        Dim swRefModel As SldWorks.ModelDoc2\n            \n        Set swRefModel = swComp.GetModelDoc2()\n        \n        If Not swRefModel Is Nothing Then\n        \n            If Not PARTS_ONLY Or swRefModel.GetType() = swDocumentTypes_e.swDocPART Then\n        \n                Dim docKey As String\n                docKey = LCase(swRefModel.GetPathName())\n                \n                If Not ALL_CONFIGS Then\n                    docKey = docKey & ":" & LCase(swComp.ReferencedConfiguration)\n                End If\n                \n                If COMP_LEVEL Or Not Contains(processedDocs, docKey) Then\n                    \n                    If (Not processedDocs) = -1 Then\n                        ReDim processedDocs(0)\n                    Else\n                        ReDim Preserve processedDocs(UBound(processedDocs) + 1)\n                    End If\n                    \n                    processedDocs(UBound(processedDocs)) = docKey\n                    \n                    Dim color As Long\n                    color = RGB(Int(255 * Rnd), Int(255 * Rnd), Int(255 * Rnd))\n                    \n                    If PRP_NAME <> "" Then\n                        \n                        Dim prpVal As String\n                                    \n                        prpVal = GetModelPropertyValue(swRefModel, swComp.ReferencedConfiguration, PRP_NAME)\n                        \n                        If prpVal <> "" Then\n                        \n                            If ColorsMap.Exists(prpVal) Then\n                                color = ColorsMap(prpVal)\n                            Else\n                                ColorsMap.Add prpVal, color\n                            End If\n                        \n                        End If\n                        \n                    End If\n                    \n                    Dim RGBHex As String\n            \n                    RGBHex = Right("000000" & Hex(color), 6)\n                    \n                    Dim dMatPrps(8) As Double\n                    \n                    dMatPrps(0) = CInt("&H" & Mid(RGBHex, 5, 2)) / 255\n                    dMatPrps(1) = CInt("&H" & Mid(RGBHex, 3, 2)) / 255\n                    dMatPrps(2) = CInt("&H" & Mid(RGBHex, 1, 2)) / 255\n                    dMatPrps(3) = 1\n                    dMatPrps(4) = 1\n                    dMatPrps(5) = 0.5\n                    dMatPrps(6) = 0.3125\n                    dMatPrps(7) = 0\n                    dMatPrps(8) = 0\n                                   \n                    If COMP_LEVEL Then\n                        swComp.SetMaterialPropertyValues2 dMatPrps, IIf(ALL_CONFIGS, swInConfigurationOpts_e.swAllConfiguration, swInConfigurationOpts_e.swThisConfiguration), Empty\n                    Else\n                        Dim sConfs(0)  As String\n                        sConfs(0) = swComp.ReferencedConfiguration\n                        swRefModel.Extension.SetMaterialPropertyValues dMatPrps, IIf(ALL_CONFIGS, swInConfigurationOpts_e.swAllConfiguration, swInConfigurationOpts_e.swSpecifyConfiguration), IIf(ALL_CONFIGS, Empty, sConfs)\n                    End If\n                \n                End If\n                \n            End If\n            \n        End If\n                \n    Next\n    \nEnd Sub\n\nFunction GetModelPropertyValue(model As SldWorks.ModelDoc2, confName As String, prpName As String) As String\n    \n    Dim prpVal As String\n    Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n    \n    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)\n    prpVal = GetPropertyValue(swCustPrpMgr, prpName)\n    \n    If prpVal = "" Then\n        Set swCustPrpMgr = model.Extension.CustomPropertyManager("")\n        prpVal = GetPropertyValue(swCustPrpMgr, prpName)\n    End If\n    \n    GetModelPropertyValue = prpVal\n    \nEnd Function\n\nFunction GetPropertyValue(custPrpMgr As SldWorks.CustomPropertyManager, prpName As String) As String\n    Dim resVal As String\n    custPrpMgr.Get2 prpName, "", resVal\n    GetPropertyValue = resVal\nEnd Function\n\nFunction Contains(arr() As String, item As String) As Boolean\n    \n    If (Not arr) <> -1 Then\n    \n        Dim i As Integer\n        \n        For i = 0 To UBound(arr)\n            If arr(i) = item Then\n                Contains = True\n                Exit Function\n            End If\n        Next\n    \n    End If\n    \n    Contains = False\n    \nEnd Function\n')))}m.isMDXComponent=!0}}]);