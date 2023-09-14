"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[80708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(87462),s=(n(67294),n(3905));const r={layout:"sw-tool",title:"Macro to colorize SOLIDWORKS sheet metal and weldment cut-list items",caption:"Colorize Cut Lists",description:"SOLIDWORKS VBA macro to colorize all the cut-list item bodies (sheet metal and weldments) based on the value of the custom property",image:"color-cut-list.svg",labels:["cut-list","sheet metal","weldment","color"],group:"Cut-List"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/colorize-cut-lists/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/colorize-cut-lists/index",title:"Macro to colorize SOLIDWORKS sheet metal and weldment cut-list items",description:"SOLIDWORKS VBA macro to colorize all the cut-list item bodies (sheet metal and weldments) based on the value of the custom property",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/colorize-cut-lists/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/colorize-cut-lists",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/colorize-cut-lists/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/colorize-cut-lists/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/colorize-cut-lists/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to colorize SOLIDWORKS sheet metal and weldment cut-list items",caption:"Colorize Cut Lists",description:"SOLIDWORKS VBA macro to colorize all the cut-list item bodies (sheet metal and weldments) based on the value of the custom property",image:"color-cut-list.svg",labels:["cut-list","sheet metal","weldment","color"],group:"Cut-List"},sidebar:"tutorialSidebar",previous:{title:"Macro to apply random colors to components in SOLIDWORKS assembly",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/color-assembly/"},next:{title:"Combine identical components command in SOLIDWORKS BOM table",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/combine-identical-components/"}},l={},c=[{value:"Configuration",id:"configuration",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This VBA macro allows to assign a unique color for each group of cut-list items (sheet metal or weldment) based on the value of the custom property."),(0,s.kt)("p",null,"The most common use of this macro will be to differentiate different type of weldment items based on the profile size."),(0,s.kt)("p",null,"Macro will automatically assign random color to the specific group. It is possible to specify the constant colors to use for the specific group instead of random colors."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"In order to specify the name of the custom property to read the value from and group cut-list items, change the value of the ",(0,s.kt)("strong",{parentName:"p"},"PRP_NAME")," constant"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const PRP_NAME As String = "Description" \'Change the value of Description to select different custom property\n')),(0,s.kt)("p",null,"In order to specify colors it is required to modify the values within the ",(0,s.kt)("strong",{parentName:"p"},"InitColors")," method."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Sub InitColors(Optional dummy As Variant = Empty)\n\n    ColorsMap.Add "SB BEAM 80 X 6", RGB(255, 0, 0)\n    ColorsMap.Add "TUBE, RECTANGULAR 50 X 30 X 2.60", RGB(0, 255, 0)\n    \nEnd Sub\n')),(0,s.kt)("p",null,"To add new color to the map add the following line"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'ColorsMap.Add "[PROPERTY VALUE]", RGB([Red], [Green], [Blue])\n')),(0,s.kt)("p",null,'For example to add the blue (RGB = 0, 0, 255) color to the weldment profile "50 X 50", it is required to add the following line'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'ColorsMap.Add "50 X 50", RGB(0, 0, 255)\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const PRP_NAME As String = "Description"\n\nDim swApp As SldWorks.SldWorks\nDim ColorsMap As Object\n\nSub main()\n\ntry_:\n    \n    On Error GoTo catch_\n    \n    Set ColorsMap = CreateObject("Scripting.Dictionary")\n\n    ColorsMap.CompareMode = vbTextCompare\n\n    InitColors\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        If swModel.GetType() = swDocumentTypes_e.swDocPART Then\n            Dim vCutLists As Variant\n            vCutLists = GetCutLists(swModel)\n            ColorizeCutLists vCutLists\n            swModel.GraphicsRedraw2\n        Else\n            Err.Raise vbError, "", "Only part document is supported"\n        End If\n    Else\n        Err.Raise vbError, "", "Open part document"\n    End If\n    \n    GoTo finally_\n    \ncatch_:\n    MsgBox Err.Description, vbCritical\nfinally_:\n    \nEnd Sub\n\nSub InitColors(Optional dummy As Variant = Empty)\n\n    ColorsMap.Add "SB BEAM 80 X 6", RGB(255, 0, 0)\n    ColorsMap.Add "TUBE, RECTANGULAR 50 X 30 X 2.60", RGB(0, 255, 0)\n    \nEnd Sub\n\nSub ColorizeCutLists(vCutLists As Variant)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vCutLists)\n        \n        Dim swCutList As SldWorks.Feature\n        Set swCutList = vCutLists(i)\n        \n        Dim swBodyFolder As SldWorks.BodyFolder\n        Set swBodyFolder = swCutList.GetSpecificFeature2\n        \n        If swBodyFolder.GetBodyCount() > 0 Then\n            \n            Dim swCustPrpsMgr As SldWorks.CustomPropertyManager\n            Set swCustPrpsMgr = swCutList.CustomPropertyManager\n            Dim prpVal As String\n            swCustPrpsMgr.Get5 PRP_NAME, True, "", prpVal, False\n            \n            Dim color As Long\n            \n            If ColorsMap.Exists(prpVal) Then\n                color = ColorsMap(prpVal)\n            Else\n                color = RGB(Int(255 * Rnd), Int(255 * Rnd), Int(255 * Rnd))\n                ColorsMap.Add prpVal, color\n            End If\n            \n            Dim j As Integer\n            \n            Dim vBodies As Variant\n            vBodies = swBodyFolder.GetBodies\n            \n            For j = 0 To UBound(vBodies)\n            \n                Dim swBody As SldWorks.Body2\n                Set swBody = vBodies(j)\n                \n                Dim RGBHex As String\n\n                RGBHex = Right("000000" & Hex(color), 6)\n                \n                Dim dMatPrps(8) As Double\n                \n                dMatPrps(0) = CInt("&H" & Mid(RGBHex, 5, 2)) / 255\n                dMatPrps(1) = CInt("&H" & Mid(RGBHex, 3, 2)) / 255\n                dMatPrps(2) = CInt("&H" & Mid(RGBHex, 1, 2)) / 255\n                dMatPrps(3) = 1\n                dMatPrps(4) = 1\n                dMatPrps(5) = 0.5\n                dMatPrps(6) = 0.3125\n                dMatPrps(7) = 0\n                dMatPrps(8) = 0\n                \n                swBody.MaterialPropertyValues2 = dMatPrps\n            Next\n            \n        End If\n        \n    Next\n    \nEnd Sub\n\nFunction GetCutLists(model As SldWorks.ModelDoc2) As Variant\n\n    Dim swFeat As SldWorks.Feature\n    \n    Dim swCutLists() As SldWorks.Feature\n    \n    Set swFeat = model.FirstFeature\n    \n    While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2 <> "HistoryFolder" Then\n        \n            ProcessFeature swFeat, swCutLists\n            \n            TraverseSubFeatures swFeat, swCutLists\n        \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \n    GetCutLists = swCutLists\n    \nEnd Function\n\nSub TraverseSubFeatures(parentFeat As SldWorks.Feature, cutLists() As SldWorks.Feature)\n    \n    Dim swChildFeat As SldWorks.Feature\n    Set swChildFeat = parentFeat.GetFirstSubFeature\n    \n    While Not swChildFeat Is Nothing\n        ProcessFeature swChildFeat, cutLists\n        Set swChildFeat = swChildFeat.GetNextSubFeature()\n    Wend\n    \nEnd Sub\n\nSub ProcessFeature(feat As SldWorks.Feature, cutLists() As SldWorks.Feature)\n    \n    If feat.GetTypeName2() = "SolidBodyFolder" Then\n        Dim swBodyFolder As SldWorks.BodyFolder\n        Set swBodyFolder = feat.GetSpecificFeature2\n        swBodyFolder.UpdateCutList\n    ElseIf feat.GetTypeName2() = "CutListFolder" Then\n        \n        If Not Contains(cutLists, feat) Then\n            If (Not cutLists) = -1 Then\n                ReDim cutLists(0)\n            Else\n                ReDim Preserve cutLists(UBound(cutLists) + 1)\n            End If\n            \n            Set cutLists(UBound(cutLists)) = feat\n        End If\n        \n    End If\n    \nEnd Sub\n\nFunction Contains(arr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(arr)\n        If arr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\n')))}p.isMDXComponent=!0}}]);