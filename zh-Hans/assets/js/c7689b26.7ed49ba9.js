"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[96088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=s,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[d]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const o={title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u6587\u4ef6\u3001\u914d\u7f6e\u548c\u5207\u5272\u5217\u8868\u5143\u7d20\u4e2d\u8bfb\u53d6\u81ea\u5b9a\u4e49\u5c5e\u6027",image:"custom-properties.png",labels:["\u5c5e\u6027","\u5207\u5272\u5217\u8868","\u914d\u7f6e"]},i=void 0,a={unversionedId:"codestack/solidworks-api/data-storage/custom-properties/read-all-properties/index",id:"codestack/solidworks-api/data-storage/custom-properties/read-all-properties/index",title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u6587\u4ef6\u3001\u914d\u7f6e\u548c\u5207\u5272\u5217\u8868\u5143\u7d20\u4e2d\u8bfb\u53d6\u81ea\u5b9a\u4e49\u5c5e\u6027",description:"\u6587\u4ef6\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027{ width=550 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/data-storage/custom-properties/read-all-properties/index.md",sourceDirName:"codestack/solidworks-api/data-storage/custom-properties/read-all-properties",slug:"/codestack/solidworks-api/data-storage/custom-properties/read-all-properties/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/custom-properties/read-all-properties/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/data-storage/custom-properties/read-all-properties/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u6587\u4ef6\u3001\u914d\u7f6e\u548c\u5207\u5272\u5217\u8868\u5143\u7d20\u4e2d\u8bfb\u53d6\u81ea\u5b9a\u4e49\u5c5e\u6027",image:"custom-properties.png",labels:["\u5c5e\u6027","\u5207\u5272\u5217\u8868","\u914d\u7f6e"]},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/custom-properties/link-to-file/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u6240\u9009\u7ec4\u4ef6\u4e2d\u8bfb\u53d6\u914d\u7f6e\u7279\u5b9a\u7684\u5207\u5272\u5217\u8868\u5c5e\u6027",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/custom-properties/read-component-cutlist/"}},p={},l=[],u={toc:l},d="wrapper";function c(e){let{components:t,...o}=e;return(0,s.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u6587\u4ef6\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027",src:n(60527).Z,width:"1026",height:"592"}),"{ width=550 }"),(0,s.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u4ece\u6240\u6709\u81ea\u5b9a\u4e49\u5c5e\u6027\u7684\u6240\u6709\u6765\u6e90\u4e2d\u8bfb\u53d6\u6240\u6709\u5c5e\u6027\u3002\u8fd9\u5305\u62ec\u6587\u4ef6\uff08\u901a\u7528\uff09\u3001\u914d\u7f6e\u7279\u5b9a\u548c\u5207\u5272\u5217\u8868\u5c5e\u6027\u3002"),(0,s.kt)("p",null,"\u7ed3\u679c\u8f93\u51fa\u5230SOLIDWORKS\u7684\u5373\u65f6\u7a97\u53e3\u4e2d\uff0c\u5305\u542b\u5c5e\u6027\u7684\u6765\u6e90\u3001\u540d\u79f0\u3001\u503c\u3001\u8868\u8fbe\u5f0f\u3001\u72b6\u6001\u548c\u94fe\u63a5\u72b6\u6001\u7684\u4fe1\u606f\u3002"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"PrintConfigurationSpecificProperties"),"\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5141\u8bb8\u6307\u5b9a\u662f\u5426\u9700\u8981\u4ece\u7f13\u5b58\u4e2d\u8bfb\u53d6\u5c5e\u6027\u6216\u9700\u8981\u89e3\u6790\u5c5e\u6027\u3002\u5f53\u9700\u8981\u89e3\u6790\u8868\u8fbe\u5f0f\u4ee5\u5728\u4e0d\u540c\u914d\u7f6e\u4e2d\u5f97\u5230\u4e0d\u540c\u7684\u503c\u65f6\uff0c\u8fd9\u4e2a\u9009\u9879\u975e\u5e38\u91cd\u8981\uff0c\u4f8b\u5982\u8d28\u91cf\u6216\u4f53\u79ef\u5c5e\u6027\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"PrintConfigurationSpecificProperties swModel, False '\u89e3\u6790\u914d\u7f6e\u7684\u5c5e\u6027\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\u901a\u7528\u5c5e\u6027\n    \u5c5e\u6027: \u63cf\u8ff0\n    \u503c/\u6587\u672c\u8868\u8fbe\u5f0f: Test Part\n    \u8bc4\u4f30\u503c: Test Part\n    \u5df2\u89e3\u6790: True\n    \u5df2\u94fe\u63a5: False\n    \u72b6\u6001: \u5df2\u89e3\u6790\u7684\u503c\n\n\u914d\u7f6e\u7279\u5b9a\u5c5e\u6027\n    A\n        \u5c5e\u6027: \u91cd\u91cf\n        \u503c/\u6587\u672c\u8868\u8fbe\u5f0f: "SW-Mass@@A@CS-01.SLDPRT"\n        \u8bc4\u4f30\u503c: 70.20\n        \u5df2\u89e3\u6790: True\n        \u5df2\u94fe\u63a5: False\n        \u72b6\u6001: \u7f13\u5b58\u7684\u503c\n\n\u5207\u5272\u5217\u8868\u5c5e\u6027\n    -\u6ca1\u6709\u5207\u5272\u5217\u8868-\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        PrintGeneralProperties swModel\n        PrintConfigurationSpecificProperties swModel, True\n        PrintCutListProperties swModel\n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n\nSub PrintGeneralProperties(model As SldWorks.ModelDoc2)\n    \n    Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n    Set swCustPrpMgr = model.Extension.CustomPropertyManager("")\n    \n    Debug.Print "\u901a\u7528\u5c5e\u6027"\n    \n    PrintProperties swCustPrpMgr, False, "    "\n    \nEnd Sub\n\nSub PrintConfigurationSpecificProperties(model As SldWorks.ModelDoc2, cached As Boolean)\n    \n    Dim vNames As Variant\n    vNames = model.GetConfigurationNames()\n    \n    Dim i As Integer\n    \n    Debug.Print "\u914d\u7f6e\u7279\u5b9a\u5c5e\u6027"\n    \n    For i = 0 To UBound(vNames)\n        \n        Dim confName As String\n        confName = vNames(i)\n        \n        Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n        Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)\n        \n        Debug.Print "    " & confName\n        PrintProperties swCustPrpMgr, cached, "        "\n        \n    Next\n    \nEnd Sub\n\nSub PrintCutListProperties(model As SldWorks.ModelDoc2)\n\n    Dim vCutLists As Variant\n    vCutLists = GetCutLists(model)\n    \n    Debug.Print "\u5207\u5272\u5217\u8868\u5c5e\u6027"\n    \n    If Not IsEmpty(vCutLists) Then\n        Dim i As Integer\n        \n        For i = 0 To UBound(vCutLists)\n            Dim swCutListFeat As SldWorks.Feature\n            Set swCutListFeat = vCutLists(i)\n            Debug.Print "    " & swCutListFeat.Name\n            PrintProperties swCutListFeat.CustomPropertyManager, False, "        "\n        Next\n    Else\n        Debug.Print "    -\u6ca1\u6709\u5207\u5272\u5217\u8868-"\n    End If\n\nEnd Sub\n\nFunction GetCutLists(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim swCutListFeats() As SldWorks.Feature\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swFeat As SldWorks.Feature\n    Dim swBodyFolder As SldWorks.BodyFolder\n    \n    Set swFeat = model.FirstFeature\n    \n    Do While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2 = "CutListFolder" Then\n            \n            If Not isInit Then\n                isInit = True\n                ReDim swCutListFeats(0)\n            Else\n                ReDim Preserve swCutListFeats(UBound(swCutListFeats) + 1)\n            End If\n            \n            Set swCutListFeats(UBound(swCutListFeats)) = swFeat\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Loop\n    \n    If isInit Then\n        GetCutLists = swCutListFeats\n    Else\n        GetCutLists = Empty\n    End If\n\nEnd Function\n\nSub PrintProperties(custPrpMgr As SldWorks.CustomPropertyManager, cached As Boolean, indent As String)\n    \n    Dim vPrpNames As Variant\n    vPrpNames = custPrpMgr.GetNames()\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(vPrpNames) Then\n    \n        For i = 0 To UBound(vPrpNames)\n            \n            Dim prpName As String\n            prpName = vPrpNames(i)\n            \n            Dim prpVal As String\n            Dim prpResVal As String\n            Dim wasResolved As Boolean\n            Dim isLinked As Boolean\n            \n            Dim res As Long\n            res = custPrpMgr.Get6(prpName, cached, prpVal, prpResVal, wasResolved, isLinked)\n            \n            Dim status As String\n            Select Case res\n                Case swCustomInfoGetResult_e.swCustomInfoGetResult_CachedValue\n                    status = "\u7f13\u5b58\u7684\u503c"\n                Case swCustomInfoGetResult_e.swCustomInfoGetResult_ResolvedValue\n                    status = "\u5df2\u89e3\u6790\u7684\u503c"\n                Case swCustomInfoGetResult_e.swCustomInfoGetResult_NotPresent\n                    status = "\u4e0d\u5b58\u5728"\n            End Select\n            \n            Debug.Print indent & "\u5c5e\u6027: " & prpName\n            Debug.Print indent & "\u503c/\u6587\u672c\u8868\u8fbe\u5f0f: " & prpVal\n            Debug.Print indent & "\u8bc4\u4f30\u503c: " & prpResVal\n            Debug.Print indent & "\u5df2\u89e3\u6790: " & wasResolved\n            Debug.Print indent & "\u5df2\u94fe\u63a5: " & isLinked\n            Debug.Print indent & "\u72b6\u6001: " & status\n            Debug.Print ""\n            \n        Next\n    Else\n        Debug.Print indent & "-\u6ca1\u6709\u5c5e\u6027-"\n    End If\n    \nEnd Sub\n')))}c.isMDXComponent=!0},60527:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/custom-properties-90391b98546a2122a630341f3f6bbddd.png"}}]);