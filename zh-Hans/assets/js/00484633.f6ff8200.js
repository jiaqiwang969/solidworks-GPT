"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[97733],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),d=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return s.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},A=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),A=r,p=u["".concat(l,".").concat(A)]||u[A]||m[A]||o;return t?s.createElement(p,a(a({ref:n},c),{},{components:t})):s.createElement(p,a({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=A;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var d=2;d<o;d++)a[d]=t[d];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}A.displayName="MDXCreateElement"},75295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(87462),r=(t(67294),t(3905));const o={layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u88ab\u538b\u5236\u7684\u7ea6\u675f\u79fb\u52a8\u5230\u7279\u5f81\u6587\u4ef6\u5939\u7684\u5b8f",image:"move-mates-to-folder.png",labels:["\u7ea6\u675f","\u88ab\u538b\u5236","\u79fb\u52a8","\u6587\u4ef6\u5939"],group:"\u88c5\u914d"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/move-suppressed-to-folder/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/move-suppressed-to-folder/index",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u88ab\u538b\u5236\u7684\u7ea6\u675f\u79fb\u52a8\u5230\u7279\u5f81\u6587\u4ef6\u5939\u7684\u5b8f",description:"\u88ab\u538b\u5236\u7684\u7ea6\u675f\u79fb\u52a8\u5230\u6587\u4ef6\u5939{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/move-suppressed-to-folder/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/move-suppressed-to-folder",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/move-suppressed-to-folder/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/move-suppressed-to-folder/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/move-suppressed-to-folder/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u88ab\u538b\u5236\u7684\u7ea6\u675f\u79fb\u52a8\u5230\u7279\u5f81\u6587\u4ef6\u5939\u7684\u5b8f",image:"move-mates-to-folder.png",labels:["\u7ea6\u675f","\u88ab\u538b\u5236","\u79fb\u52a8","\u6587\u4ef6\u5939"],group:"\u88c5\u914d"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS\u548cWindows API\u8fd0\u884c\u529b\u5b66\u7ea6\u675f\u547d\u4ee4",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/force-mate/"},next:{title:"SOLIDWORKS\u5b8f\u7c7b\u578b - VBA (swp), SWBasic (swb), VSTA (dll)",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/types/"}},l={},d=[],c={toc:d},u="wrapper";function m(e){let{components:n,...o}=e;return(0,r.kt)(u,(0,s.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u88ab\u538b\u5236\u7684\u7ea6\u675f\u79fb\u52a8\u5230\u6587\u4ef6\u5939",src:t(56948).Z,width:"331",height:"171"}),"{ width=250 }"),(0,r.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u5141\u8bb8\u4f7f\u7528SOLIDWORKS API\u5c06\u6240\u6709\u88ab\u538b\u5236\u7684\u7ea6\u675f\u79fb\u52a8\u5230\u6307\u5b9a\u7684\u7279\u5f81\u7ba1\u7406\u5668\u6587\u4ef6\u5939\u4e2d\u3002\u5982\u679c\u6587\u4ef6\u5939\u4e0d\u5b58\u5728\uff0c\u5b8f\u5c06\u521b\u5efa\u6587\u4ef6\u5939\uff0c\u5982\u679c\u6587\u4ef6\u5939\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u5c06\u79fb\u52a8\u5230\u5df2\u5b58\u5728\u7684\u6587\u4ef6\u5939\u4e2d\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6587\u4ef6\u5939\u4e2d\u5b58\u5728\u672a\u88ab\u538b\u5236\u7684\u7ea6\u675f\uff0c\u5b8f\u4e5f\u4f1a\u5c06\u5b83\u4eec\u79fb\u52a8\u5230\u6587\u4ef6\u5939\u4e2d\u3002"),(0,r.kt)("p",null,"\u8981\u914d\u7f6e\u6587\u4ef6\u5939\u540d\u79f0\uff0c\u8bf7\u66f4\u6539",(0,r.kt)("em",{parentName:"p"},"FOLDER_NAME"),"\u53d8\u91cf\u7684\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const FOLDER_NAME As String = "<\u6587\u4ef6\u5939\u540d\u79f0>"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const FOLDER_NAME As String = "\u88ab\u538b\u5236\u7684\u7ea6\u675f"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n            \n        Dim vSuppMates As Variant\n        vSuppMates = GetAllSuppressedMates(swAssy)\n        \n        If Not IsEmpty(vSuppMates) Then\n        \n            Dim swFolderFeat As SldWorks.Feature\n            Set swFolderFeat = swAssy.FeatureByName(FOLDER_NAME)\n            \n            If swFolderFeat Is Nothing Then\n                InsertMatesIntoNewFolder swAssy, vSuppMates, FOLDER_NAME\n            Else\n                Dim swFolder As SldWorks.FeatureFolder\n                Set swFolder = swFolderFeat.GetSpecificFeature2()\n                vSuppMates = ObjectArrayExcept(vSuppMates, swFolder.GetFeatures())\n                \n                If Not IsEmpty(vSuppMates) Then\n                    InsertMatesIntoExistingFolder swAssy, vSuppMates, swFolderFeat\n                End If\n                \n                MoveUnsuppressedMatesFromFolder swAssy, swFolderFeat\n                \n            End If\n            \n        End If\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u88c5\u914d\u4f53"\n    End If\n    \nEnd Sub\n\nSub InsertMatesIntoNewFolder(assm As SldWorks.AssemblyDoc, mates As Variant, folderName As String)\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = assm\n    \n    If swModel.Extension.MultiSelect2(mates, False, Nothing) = UBound(mates) + 1 Then\n        \n        Set swFolderFeat = swModel.FeatureManager.InsertFeatureTreeFolder2(swFeatureTreeFolderType_e.swFeatureTreeFolder_Containing)\n                \n        swFolderFeat.Name = folderName\n        \n    Else\n        Err.Raise vbError, "", "\u9009\u62e9\u8981\u6dfb\u52a0\u5230\u65b0\u6587\u4ef6\u5939\u7684\u7ea6\u675f\u5931\u8d25"\n    End If\n    \nEnd Sub\n\nSub InsertMatesIntoExistingFolder(assy As SldWorks.AssemblyDoc, mates As Variant, folderFeat As SldWorks.Feature)\n    \n    Dim swLastFeatInFolder As SldWorks.Feature\n    \n    While folderFeat.GetTypeName2() <> "FtrFolder" Or InStr(folderFeat.Name, "___EndTag___") = 0\n        Set swLastFeatInFolder = folderFeat\n        Set folderFeat = folderFeat.GetNextSubFeature\n    Wend\n    \n    If swLastFeatInFolder.GetTypeName2() = "FtrFolder" Then\n        Err.Raise vbError, "", "\u4e0d\u652f\u6301\u3002\u6587\u4ef6\u5939\u4e3a\u7a7a"\n    End If\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = assy\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(mates)\n            \n        Dim swMateFeat As SldWorks.Feature\n        Set swMateFeat = mates(i)\n        \n        \'swMoveLocation_e.swMoveToFolder\u9009\u9879\u4e0d\u8d77\u4f5c\u7528\uff0c\u9700\u8981\u5728\u6587\u4ef6\u5939\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u7ea6\u675f\u4e4b\u540e\u79fb\u52a8\n        If False = swModel.Extension.ReorderFeature(swMateFeat.Name, swLastFeatInFolder.Name, swMoveLocation_e.swMoveAfter) Then\n            Err.Raise vbError, "", "\u5c06\u7ea6\u675f\u79fb\u52a8\u5230\u6587\u4ef6\u5939\u5931\u8d25"\n        End If\n    \n        Set swLastFeatInFolder = swMateFeat\n    Next\n    \nEnd Sub\n\nSub MoveUnsuppressedMatesFromFolder(assy As SldWorks.AssemblyDoc, folderFeat As SldWorks.Feature)\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = assy\n    \n    Dim swFolder As SldWorks.FeatureFolder\n    Set swFolder = folderFeat.GetSpecificFeature2\n    \n    Dim vMates As Variant\n    vMates = swFolder.GetFeatures\n    \n    If Not IsEmpty(vMates) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vMates)\n            \n            Dim swMateFeat As SldWorks.Feature\n            Set swMateFeat = vMates(i)\n            \n            If False = swMateFeat.IsSuppressed2(swInConfigurationOpts_e.swThisConfiguration, Empty)(0) Then\n                If False = swModel.Extension.ReorderFeature(swMateFeat.Name, "", swMoveLocation_e.swMoveToEnd) Then\n                    Err.Raise vbError, "", "\u5c06\u7ea6\u675f\u79fb\u51fa\u6587\u4ef6\u5939\u5931\u8d25"\n                End If\n            End If\n            \n        Next\n        \n    End If\n    \nEnd Sub\n\nFunction GetAllSuppressedMates(assm As SldWorks.AssemblyDoc) As Variant\n    \n    Dim swSuppMates() As SldWorks.Feature\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim vMates As Variant\n    vMates = GetAllMates(assm)\n    \n    If Not IsEmpty(vMates) Then\n        \n        Dim i As Integer\n        For i = 0 To UBound(vMates)\n            \n            Dim swMateFeat As SldWorks.Feature\n            Set swMateFeat = vMates(i)\n            \n            If swMateFeat.IsSuppressed2(swInConfigurationOpts_e.swThisConfiguration, Empty)(0) Then\n                If isInit Then\n                    ReDim Preserve swSuppMates(UBound(swSuppMates) + 1)\n                Else\n                    ReDim swSuppMates(0)\n                    isInit = True\n                End If\n                Set swSuppMates(UBound(swSuppMates)) = swMateFeat\n            End If\n        Next\n        \n    End If\n    \n    GetAllSuppressedMates = swSuppMates\n    \nEnd Function\n\nFunction GetAllMates(assm As SldWorks.AssemblyDoc) As Variant\n    \n    Dim swMates() As SldWorks.Feature\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = assm\n    \n    Dim swMateGroupFeat As SldWorks.Feature\n    \n    Dim featIndex As Integer\n    featIndex = 0\n        \n    Do\n        Set swMateGroupFeat = swModel.FeatureByPositionReverse(featIndex)\n        \n        featIndex = featIndex + 1\n    Loop While swMateGroupFeat.GetTypeName2() <> "MateGroup"\n    \n    Dim swMateFeat As SldWorks.Feature\n    \n    Set swMateFeat = swMateGroupFeat.GetFirstSubFeature\n    \n    While Not swMateFeat Is Nothing\n        \n        If TypeOf swMateFeat.GetSpecificFeature2() Is SldWorks.Mate2 Then\n            If isInit Then\n                ReDim Preserve swMates(UBound(swMates) + 1)\n            Else\n                ReDim swMates(0)\n                isInit = True\n            End If\n            Set swMates(UBound(swMates)) = swMateFeat\n        End If\n        \n        Set swMateFeat = swMateFeat.GetNextSubFeature\n    Wend\n    \n    GetAllMates = swMates\n    \nEnd Function\n\nFunction ObjectArrayExcept(mainArr As Variant, except As Variant) As Variant\n    \n    Dim retVal() As Object\n    Dim isInit As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(mainArr)\n        \n        Dim item As Object\n        Set item = mainArr(i)\n        \n        If Not ObjectArrayContains(except, item) Then\n            If isInit Then\n                ReDim Preserve retVal(UBound(retVal) + 1)\n            Else\n                ReDim retVal(0)\n                isInit = True\n            End If\n            Set retVal(UBound(retVal)) = item\n        End If\n            \n    Next\n    \n    If isInit Then\n        ObjectArrayExcept = retVal\n    Else\n        ObjectArrayExcept = Empty\n    End If\n    \nEnd Function\n\nFunction ObjectArrayContains(arr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(arr)\n        If arr(i) Is item Then\n            ObjectArrayContains = True\n            Exit Function\n        End If\n    Next\n    \n    ObjectArrayContains = False\n    \nEnd Function\n')))}m.isMDXComponent=!0},56948:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUsAAACrCAMAAADYWk6aAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAJW+0S1xlGMAALCLOPb39gA4i4CAgOS+lYs4AAAAOICAqYvU976VgGOwsABjsGNjALBjAOHh4YCVvjIyMqnR5NSwYziLsChdfJWAgKnR0ba2tuS+qWMAOJWVqYs4ODgAODgAAICp0WNiYjg4OJW+5NGpgLjh3QAAY/fUi5WAlUd/nPfRvjgAY9PT02Ow976+qYCAlYtji5WAqWM4i5GsvGMAY9SLY7y8vC96nzg4i6mAgL7R92SXsqmAlYuLY5WVvsrKyrBjY4uw9/ewY9ra2sLCwi5ohqmpgPfRqdSLOIs4Y2Ow1Dg4Y76VqaSkpKmAqS50mGNjsDGFra3Dz2GGnMzf6b6VlXKetCligtG+lfewi5WVldHkvsrW3rbt96nR95Wp0TiL1LnJ1L6pvvfyx9G+vj5zkOTRqaioqCtpi6mVvjBify53nKK5xlGJpoGluJy0wdPj6ixtjzCApitnh8nZ4tP29rXG0L3P2WOMozB9ojJlgjVrhqC3xWKIngAAAGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///3kADw8AAACBdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AJLI408AAAAJcEhZcwAADsMAAA7DAcdvqGQAAA1XSURBVHhe7Z0LdxxHEYUVi7Gk2IuzCg87AoKdWLGAWCQQkBEvE8kg8TDCQDAYLJwMEIN52A4CHOCvc291dU/PUzO7vT4yW/dYO701PaXpb6t6ZrvkMwuZKZWMZToZy3QylunUyvLhrVu3Hmrb1EttLI9uHcmPqb/aWArGoyd4sQDtq1aW2c8fv5ZdswAdoHaWjx9eyx7EAUqNnz8r23zxnGxNkdpYPs6egORBFKCi8cI92e6/GrHcOW1hS7WxdCRPRQEqGr965S42+YqxrIssX3FyBtU1IfkoClDR+JMrm9jsnP4IWG5cXFgAxvHCwgLe7S8scALYcZt5lMRlHSXwkeT9KEBF43v7DEJsQO+rZxGg2Epc0r5z5e7GZ89mv5pnloQp20IHQvKDKEBF43v5p89mG6/fJUuKHPlDM8huYpfbMYfS+bKKUknejgJUNL7HfwApLJHWTHLhiSa0ma8scBKYS7Vdex45klGAigBy4/XXXj5Llvmi58gfuSZRGxdDc87UxpIkhWUIUBFY5iuvgB1YSjrLNIkfzpOqfMXdN82d2lgS3nk2QoCKwBLpjBeyBL6Niz4mx3jJ3zza2eSsqb3nTG0s//Xub979GRshQEVkmX+F8ejugk5/AiwxR+Idb40wA+A+aU7DspVl9t/zgrIIUNNxamXpFQLUdJyOZRkC1HScjmdp6itjmU7GMp2MZToZy3Qyluk0BUtfAzKpJmf55JovApmcJmZpKGuajOXHIF9OM3lNyFL+xeISe7wGzCW4ioJJ1uQbJcvLXuNzsvbUUokrdRXVLW7xqtkBF7Qq51h10H6ezUrDMl/hae30XLdsOkepGa08/61iNDtcx+NKaZVFvStVt1DtDr6PEx7HBzQ42B+2ejgRy2vM8fhvjKQ42VttLIsNlL8MArJcWl2mr3X1qls6HSA2i2KAqOpAVmr7axKWDx4cZN849Rd9B+WLISKZ60SFQeQrP1hxCUbjpoyLSSe1ddqwz/fRGns0GoZlQKGV+Hzlo4tXXqh1RT/5/c6SfzkC0uUALEPRtMXBsMCcgCVRZkenHv1d3+McwsSzj5bUzIUlIeH0aNx4W8bFtzsciZbTQx8lUwCSYTgUm74Sn6/8EB9Nvauu5Ktl46IjRXU5KBqtDuQD7a3hLB8cyB9x/OLR5+UtFVhKlVw+bmGJM0TbRy1Nsh8XFV9O9338MMIwXaQIfnWOXS5bK12jkfuDpSIl6nKgZ9PlYONrauilwSwVZZbdv/9P18Cv9ixdg+coLIEDU5LfC5NLKsyXRTnd9fHDCKOR6VJSXyycJYiCgEtd42tvOJj99fPrcJAvEling2ET5lCWBx5l9tcPfq+tYg4/jqVrkqXaWlkWcQnJeLGrgSU8hD9uCAfni+q+y4GL0W4HM43LgwP/l0VZ9t3bP9WWzJCUgxpyHOcIiycNk2six72tgyVHqigknDHDNrGE/B8yqiX+Y4d2Bx4l1epglvNljDJ76/a/taWJgvtLqZLzLCOWYqxee6Tjm25wwtKdfgEoXMchdmAlXlFUu6If7WoJeanpQdUdhI/fqdEB8LvDe2pgXEYos+zD83/WFk5NJybOSzyBmCVnLV6uYWe/c3J/yZks6iM1dtr81xS5MCgKemUl3qGodXWqWTQ9RDUHbsJ2n4qq7vIp3F96/ef8n7Q1Cw3LrwZN7eCpfO/x+vD837Q1C2FanUr7krdTqOn7WZemYvmPt7RhoqZiaSrJWKaTsUwnY5lOxjKdjGU6Gct0GsZy9Sa1qu9MZQ1jeXN3dXV196a+M5U1kCVQrq5uSXRSu2o3UROw3BVdpUKEri8tLV3S9hRaho/1N9ziTL6dwOFT1UCWN6itID91jjjs37n2NBKWS5dd+07Ecu9FbZxkDWUpSe5iswjM/HOD1vnaJSzvnJFF3tH/E0v5n9Dl/8CrLEOOe5bbh277TTDNv3SUrV9eXlri8ENj9NI2EOENM3hPNu7V2zhNvPhLsnxuRG978ia/IIfrFFI6/OSpKy5rKLObW0rSobx+XSfMZZeXBUu+Z+KHxugzxAYse2eOGMZfuOtevS1b55bAgJ/wscGbT+EoHi5xWTqcv++EqTPHqyiFZUQysGT8AFrBEsOXzA+Nkd+djQ7Zw/WLbLJl9/XLbGMvWVLkyJ/y4SdQ3fNl9b+V39wKJAVlYOliSkYrLBmmfBcazFvkJnWYjfADKnz1NgdI5svL/IeWsERaM8mFp3bVw0+eBl57yLIgeeNGwZLRdxxLd1Gh5QKbfPU2t1WWcPEOsh8fzrbnyJ/K4SdOg1nGJMsst12icsiS2qUGWTLXvZjzfPU2t3U5Dvv7YEeWjFaZJvFTP/yEaSjLMkplmf8WL8skxlAiQmRhvo3xhoZcm9exK3sv20N7dOhevS2+9rCBF7IEvvyCj8nS4fKLT5YmYFmQxM26mPNtzGMcKBpnfs0cf27kvgeFhhs8722QwrjR8a/ehh7oqDme5T+GM77hHdUfwBJ7uSs6/ARqIMu1MkplWZNMk6XGPGgoyxJJY1nSMJZruj4U1LJQZCxN08lYppOxTCdjmU7GMp2MZTqlZ7ml2/lTcpa4gdfW3Ck1yzlGmZbl+9D8okzMUv7F4rI4F5C8ZNmsrGDiulCj6EQWm0Trl2S9qKV6JqvHJdUt8NHqgItQlXOsOmg9z9myHPG0uN7YR03nyDXgbDn+Ur/HtTcYlqsspOvojS9WyNUtULuDH+GEuZRaqO6gdD6RUrLcYo5rWyQFxd7qx/IdEJAVk+rSunQNm0h1S6cDBGK0gE9VHcjqaoMSsuRl5/rWDX0H+bI5xDQlKg5i9PGRSzAaD924kHRSD6eN+7QPc/FSiSXDMqBgQnKcLL5/T39DPPB1+f3Okv+Rr6ouB+gqdTyqxUFLYKZj6a7gW1vFXxQWxS7WL1y9HGcxIiScHo3518UUChS+Wu77yDD8B0HJMByKw1A9l+K7QixYatHeW/IL3ke3g6LR6kA+0LqSsdSboatRYAaWUlMLBUrmFto+amFy+3FRcQ0MUvuEYYU/1JJIEfzqnD0kW7VrOKIYuVpcFUnU5UBPostB/m3ZVJWKZbivXFsLgRlYugbPUVgCB6Ykv5csJakwXxYlcNcnGob25nQpqS87GLFEQcDa1W3ia2/wwf76+XU4kFJft4OWCTMRy+IW/epauMMMc/hxLF2TLNVWZ+l9hbiEZLzsUWcJm2KLUEiJVNTlQGKU23YHM43LAmUpMDkVUQ5EyHGcIyyBDuJSmsxxtdVZRuQLFAxnzrBNLNGrOt15kp0OPEqo1cEs58sYZbYbBaYkCu4vZW7iWUYsxVi99kjH94o+ghDvXeLRGYfhUaCDVM8dCjfSgiX60a6WkJc+PdisO/Afv1OjA+DXk6koUVzqVrS2VlTURjoxcV7iCcQsOWvxck27L47LTBb3YV3cH0zJhUFRcIdUzwWFdOXh5W80NYtPD6rmwE3Y7lNR1V0+hftLr921NW3NQi351V9TO2gLy1mwzLaiwEwv+ROlKbQsMTiFmr6fiWbBcvWqNuZMs2A5rzKW6WQs08lYppOxTCdjmU7pWZa+A82VkrMsfTefL6VmOcco07K0+ng6zag+DkUFWKuP91DTOfpl2DtcfxNxmYdLZlYf71IHy9FLrp4FWX2cuU5UHMTg+jgoa20Q4/JeiMLq44Pr4xhbYGn1cSHhiwPMLeLpXR/H+8Ay1CH9JYs9JFt1xB6E1ceRZ1C5Ps55NLC0+vgxLF2TLNVWYsn6G+RCIsQlJOOVHhEKP3Crj3v6MUuqyHGO1KNgOFt9nJxo7FUfpyfPsriOuw5WH5dRcNbi5Zr2zvo4FFhKQ1HQq9XHp1BLfvXX1A6sPh5k9fFnQbNgOa8ylulkLNPJWKaTsUwnY5lOU7C0549XNDlLe2h2VROzNJQ1TcbSnj/epAlZzub543yCcPG4Nnv+eA81naM8mvE7dzEe74SP0eMjCe35411qZUn5p+/Z88cl10kDg5jk+eNu9FR4bilR2PPHJ3j+eOHKnj8uT/QOzybGGaLd//nj+aJ7wDUVnvPsL1no4bJVR+xB2PPHkWdQ7fnjGJgbhT1//DiWrkmWaquxDHtCXEIyXvRoYAkP9vxxZ+tgyZEqCglne/44OdHY5/nj+U/oSYcYruMQO9jzx2UUnLV4uYad/VqfPy5O/NnLhUFR0Ks9f3wKDcuvBk3twJ4/HmTPH3+GNRVLU0nGMp2MZToZy3QylulkLNNpCpZWH69ocpZW1K1qYpaGsqbJWFp9vEkTspxdfbw4zurjPdR0jlw6LNesuczDJTOrj3epjaVIFjwhq49LrhMVBjFZfdyV1zAu9SIorD4+SX08NKw+LhVnLQ5IbqHdvz4OuR5QqEP6SxZ6uGzVrv4Iq48jz6BafTyUzqw+fhxL1yRLtVVYurgRhbiEZLzo0cASh1h93NnKLCOUjoKikHC2+jg50dirPh7XrMN1HGIHq4/LKDhr8XINO/u11sdLNWu5MCgKerX6+BQall8NmtqB1ceDrD7+DGsqlqaSjGU6Gct0MpbpZCxTKcv+B/dQ+utoe77DAAAAAElFTkSuQmCC"}}]);