"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[46564],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>w});var s=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,s,r=function(t,e){if(null==t)return{};var n,s,r={},o=Object.keys(t);for(s=0;s<o.length;s++)n=o[s],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)n=o[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=s.createContext({}),d=function(t){var e=s.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return s.createElement(l.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},m=s.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),c=d(n),m=r,w=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return n?s.createElement(w,i(i({ref:e},u),{},{components:n})):s.createElement(w,i({ref:e},u))}));function w(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a[c]="string"==typeof t?t:r,i[1]=a;for(var d=2;d<o;d++)i[d]=n[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21582:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(87462),r=(n(67294),n(3905));const o={layout:"sw-tool",title:"\u7528\u4e8e\u7ed9SOLIDWORKS\u94a3\u91d1\u548c\u710a\u63a5\u5207\u5272\u6e05\u5355\u9879\u4e0a\u8272\u7684\u5b8f",image:"color-cut-list.svg",labels:["\u5207\u5272\u6e05\u5355","\u94a3\u91d1","\u710a\u63a5","\u4e0a\u8272"],group:"\u5207\u5272\u6e05\u5355"},i=void 0,a={unversionedId:"codestack/solidworks-api/document/cut-lists/colorize-cut-lists/index",id:"codestack/solidworks-api/document/cut-lists/colorize-cut-lists/index",title:"\u7528\u4e8e\u7ed9SOLIDWORKS\u94a3\u91d1\u548c\u710a\u63a5\u5207\u5272\u6e05\u5355\u9879\u4e0a\u8272\u7684\u5b8f",description:"\u8fd9\u4e2aVBA\u5b8f\u5141\u8bb8\u6839\u636e\u81ea\u5b9a\u4e49\u5c5e\u6027\u7684\u503c\u4e3a\u6bcf\u4e2a\u5207\u5272\u6e05\u5355\u9879\uff08\u94a3\u91d1\u6216\u710a\u63a5\uff09\u5206\u914d\u552f\u4e00\u7684\u989c\u8272\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/cut-lists/colorize-cut-lists/index.md",sourceDirName:"codestack/solidworks-api/document/cut-lists/colorize-cut-lists",slug:"/codestack/solidworks-api/document/cut-lists/colorize-cut-lists/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/cut-lists/colorize-cut-lists/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/cut-lists/colorize-cut-lists/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u7528\u4e8e\u7ed9SOLIDWORKS\u94a3\u91d1\u548c\u710a\u63a5\u5207\u5272\u6e05\u5355\u9879\u4e0a\u8272\u7684\u5b8f",image:"color-cut-list.svg",labels:["\u5207\u5272\u6e05\u5355","\u94a3\u91d1","\u710a\u63a5","\u4e0a\u8272"],group:"\u5207\u5272\u6e05\u5355"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u7ba1\u7406\u5207\u5272\u6e05\u5355\u4f53",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/cut-lists/"},next:{title:"\u5c06SOLIDWORKS\u5207\u5272\u6e05\u5355\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u590d\u5236\u5230\u6a21\u578b\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/cut-lists/copy-custom-properties/"}},l={},d=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],u={toc:d},c="wrapper";function p(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,s.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u5141\u8bb8\u6839\u636e\u81ea\u5b9a\u4e49\u5c5e\u6027\u7684\u503c\u4e3a\u6bcf\u4e2a\u5207\u5272\u6e05\u5355\u9879\uff08\u94a3\u91d1\u6216\u710a\u63a5\uff09\u5206\u914d\u552f\u4e00\u7684\u989c\u8272\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5b8f\u6700\u5e38\u89c1\u7684\u7528\u9014\u662f\u6839\u636e\u578b\u6750\u5c3a\u5bf8\u533a\u5206\u4e0d\u540c\u7c7b\u578b\u7684\u710a\u63a5\u4ef6\u3002"),(0,r.kt)("p",null,"\u5b8f\u5c06\u81ea\u52a8\u4e3a\u7279\u5b9a\u7684\u7ec4\u5206\u914d\u968f\u673a\u989c\u8272\u3002\u4e5f\u53ef\u4ee5\u6307\u5b9a\u7528\u4e8e\u7279\u5b9a\u7ec4\u7684\u56fa\u5b9a\u989c\u8272\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u4e3a\u4e86\u6307\u5b9a\u4ece\u4e2d\u8bfb\u53d6\u503c\u5e76\u5bf9\u5207\u5272\u6e05\u5355\u9879\u8fdb\u884c\u5206\u7ec4\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u7684\u540d\u79f0\uff0c\u8bf7\u66f4\u6539",(0,r.kt)("strong",{parentName:"p"},"PRP_NAME"),"\u5e38\u91cf\u7684\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const PRP_NAME As String = "Description" \'\u5c06Description\u7684\u503c\u66f4\u6539\u4e3a\u9009\u62e9\u4e0d\u540c\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\n')),(0,r.kt)("p",null,"\u4e3a\u4e86\u6307\u5b9a\u989c\u8272\uff0c\u9700\u8981\u4fee\u6539",(0,r.kt)("strong",{parentName:"p"},"InitColors"),"\u65b9\u6cd5\u4e2d\u7684\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Sub InitColors(Optional dummy As Variant = Empty)\n\n    ColorsMap.Add "SB BEAM 80 X 6", RGB(255, 0, 0)\n    ColorsMap.Add "TUBE, RECTANGULAR 50 X 30 X 2.60", RGB(0, 255, 0)\n    \nEnd Sub\n')),(0,r.kt)("p",null,"\u8981\u5411\u6620\u5c04\u4e2d\u6dfb\u52a0\u65b0\u989c\u8272\uff0c\u8bf7\u6dfb\u52a0\u4ee5\u4e0b\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'ColorsMap.Add "[\u5c5e\u6027\u503c]", RGB([\u7ea2\u8272], [\u7eff\u8272], [\u84dd\u8272])\n')),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u8981\u5c06\u84dd\u8272\uff08RGB = 0, 0, 255\uff09\u6dfb\u52a0\u5230\u710a\u63a5\u578b\u6750\u201c50 X 50\u201d\uff0c\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'ColorsMap.Add "50 X 50", RGB(0, 0, 255)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const PRP_NAME As String = "Description"\n\nDim swApp As SldWorks.SldWorks\nDim ColorsMap As Object\n\nSub main()\n\ntry_:\n    \n    On Error GoTo catch_\n    \n    Set ColorsMap = CreateObject("Scripting.Dictionary")\n\n    ColorsMap.CompareMode = vbTextCompare\n\n    InitColors\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        If swModel.GetType() = swDocumentTypes_e.swDocPART Then\n            Dim vCutLists As Variant\n            vCutLists = GetCutLists(swModel)\n            ColorizeCutLists vCutLists\n            swModel.GraphicsRedraw2\n        Else\n            Err.Raise vbError, "", "\u4ec5\u652f\u6301\u96f6\u4ef6\u6587\u6863"\n        End If\n    Else\n        Err.Raise vbError, "", "\u6253\u5f00\u96f6\u4ef6\u6587\u6863"\n    End If\n    \n    GoTo finally_\n    \ncatch_:\n    MsgBox Err.Description, vbCritical\nfinally_:\n    \nEnd Sub\n\nSub InitColors(Optional dummy As Variant = Empty)\n\n    ColorsMap.Add "SB BEAM 80 X 6", RGB(255, 0, 0)\n    ColorsMap.Add "TUBE, RECTANGULAR 50 X 30 X 2.60", RGB(0, 255, 0)\n    \nEnd Sub\n\nSub ColorizeCutLists(vCutLists As Variant)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vCutLists)\n        \n        Dim swCutList As SldWorks.Feature\n        Set swCutList = vCutLists(i)\n        \n        Dim swBodyFolder As SldWorks.BodyFolder\n        Set swBodyFolder = swCutList.GetSpecificFeature2\n        \n        If swBodyFolder.GetBodyCount() > 0 Then\n            \n            Dim swCustPrpsMgr As SldWorks.CustomPropertyManager\n            Set swCustPrpsMgr = swCutList.CustomPropertyManager\n            Dim prpVal As String\n            swCustPrpsMgr.Get5 PRP_NAME, True, "", prpVal, False\n            \n            Dim color As Long\n            \n            If ColorsMap.Exists(prpVal) Then\n                color = ColorsMap(prpVal)\n            Else\n                color = RGB(Int(255 * Rnd), Int(255 * Rnd), Int(255 * Rnd))\n                ColorsMap.Add prpVal, color\n            End If\n            \n            Dim j As Integer\n            \n            Dim vBodies As Variant\n            vBodies = swBodyFolder.GetBodies\n            \n            For j = 0 To UBound(vBodies)\n            \n                Dim swBody As SldWorks.Body2\n                Set swBody = vBodies(j)\n                \n                Dim RGBHex As String\n\n                RGBHex = Right("000000" & Hex(color), 6)\n                \n                Dim dMatPrps(8) As Double\n                \n                dMatPrps(0) = CInt("&H" & Mid(RGBHex, 5, 2)) / 255\n                dMatPrps(1) = CInt("&H" & Mid(RGBHex, 3, 2)) / 255\n                dMatPrps(2) = CInt("&H" & Mid(RGBHex, 1, 2)) / 255\n                dMatPrps(3) = 1\n                dMatPrps(4) = 1\n                dMatPrps(5) = 0.5\n                dMatPrps(6) = 0.3125\n                dMatPrps(7) = 0\n                dMatPrps(8) = 0\n                \n                swBody.MaterialPropertyValues2 = dMatPrps\n            Next\n            \n        End If\n        \n    Next\n    \nEnd Sub\n\nFunction GetCutLists(model As SldWorks.ModelDoc2) As Variant\n\n    Dim swFeat As SldWorks.Feature\n    \n    Dim swCutLists() As SldWorks.Feature\n    \n    Set swFeat = model.FirstFeature\n    \n    While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2 <> "HistoryFolder" Then\n        \n            ProcessFeature swFeat, swCutLists\n            \n            TraverseSubFeatures swFeat, swCutLists\n        \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \n    GetCutLists = swCutLists\n    \nEnd Function\n\nSub TraverseSubFeatures(parentFeat As SldWorks.Feature, cutLists() As SldWorks.Feature)\n    \n    Dim swChildFeat As SldWorks.Feature\n    Set swChildFeat = parentFeat.GetFirstSubFeature\n    \n    While Not swChildFeat Is Nothing\n        ProcessFeature swChildFeat, cutLists\n        Set swChildFeat = swChildFeat.GetNextSubFeature()\n    Wend\n    \nEnd Sub\n\nSub ProcessFeature(feat As SldWorks.Feature, cutLists() As SldWorks.Feature)\n    \n    If feat.GetTypeName2() = "SolidBodyFolder" Then\n        Dim swBodyFolder As SldWorks.BodyFolder\n        Set swBodyFolder = feat.GetSpecificFeature2\n        swBodyFolder.UpdateCutList\n    ElseIf feat.GetTypeName2() = "CutListFolder" Then\n        \n        If Not Contains(cutLists, feat) Then\n            If (Not cutLists) = -1 Then\n                ReDim cutLists(0)\n            Else\n                ReDim Preserve cutLists(UBound(cutLists) + 1)\n            End If\n            \n            Set cutLists(UBound(cutLists)) = feat\n        End If\n        \n    End If\n    \nEnd Sub\n\nFunction Contains(arr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(arr)\n        If arr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\n')))}p.isMDXComponent=!0}}]);