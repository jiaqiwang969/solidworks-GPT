"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[42671],{3905:(e,n,s)=>{s.d(n,{Zo:()=>m,kt:()=>A});var t=s(67294);function o(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function r(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function a(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach((function(n){o(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function i(e,n){if(null==e)return{};var s,t,o=function(e,n){if(null==e)return{};var s,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||(o[s]=e[s]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var l=t.createContext({}),d=function(e){var n=t.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):a(a({},n),e)),s},m=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var s=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(s),p=o,A=u["".concat(l,".").concat(p)]||u[p]||c[p]||r;return s?t.createElement(A,a(a({ref:n},m),{},{components:s})):t.createElement(A,a({ref:n},m))}));function A(e,n){var s=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=s.length,a=new Array(r);a[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<r;d++)a[d]=s[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,s)}p.displayName="MDXCreateElement"},49192:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=s(87462),o=(s(67294),s(3905));const r={layout:"sw-tool",title:"Macro to move suppressed mates into feature folder using SOLIDWORKS API",caption:"Move Suppressed Mates Into A Folder",description:"VBA macro to move suppressed mates in assembly into feature folder using SOLIDWORKS API",image:"move-mates-to-folder.png",labels:["mates","suppressed","move","folder"],group:"Assembly"},a=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/move-suppressed-to-folder/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/move-suppressed-to-folder/index",title:"Macro to move suppressed mates into feature folder using SOLIDWORKS API",description:"VBA macro to move suppressed mates in assembly into feature folder using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/move-suppressed-to-folder/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/move-suppressed-to-folder",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/move-suppressed-to-folder/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/move-suppressed-to-folder/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/move-suppressed-to-folder/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to move suppressed mates into feature folder using SOLIDWORKS API",caption:"Move Suppressed Mates Into A Folder",description:"VBA macro to move suppressed mates in assembly into feature folder using SOLIDWORKS API",image:"move-mates-to-folder.png",labels:["mates","suppressed","move","folder"],group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"Run force mate command using SOLIDWORKS and Windows API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/force-mate/"},next:{title:"Macro to add display data marks to configuration used by the main SOLIDWORKS assembly",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/add-display-data-marks/"}},l={},d=[],m={toc:d},u="wrapper";function c(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Suppressed mates moved to the folder",src:s(19017).Z,width:"331",height:"171"}),"{ width=250 }"),(0,o.kt)("p",null,"This VBA macro allows to move all suppressed mates to a nominated feature manager folder using SOLIDWORKS API. Macro will create folder if it doesn't exist or move to already existing one."),(0,o.kt)("p",null,"Macro will also move all unsuppressed mates of the folder if exist."),(0,o.kt)("p",null,"To configure the folder name, change the value of the ",(0,o.kt)("em",{parentName:"p"},"FOLDER_NAME")," variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const FOLDER_NAME As String = "<Folder Name>"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const FOLDER_NAME As String = "SuppressedMates"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n            \n        Dim vSuppMates As Variant\n        vSuppMates = GetAllSuppressedMates(swAssy)\n        \n        If Not IsEmpty(vSuppMates) Then\n        \n            Dim swFolderFeat As SldWorks.Feature\n            Set swFolderFeat = swAssy.FeatureByName(FOLDER_NAME)\n            \n            If swFolderFeat Is Nothing Then\n                InsertMatesIntoNewFolder swAssy, vSuppMates, FOLDER_NAME\n            Else\n                Dim swFolder As SldWorks.FeatureFolder\n                Set swFolder = swFolderFeat.GetSpecificFeature2()\n                vSuppMates = ObjectArrayExcept(vSuppMates, swFolder.GetFeatures())\n                \n                If Not IsEmpty(vSuppMates) Then\n                    InsertMatesIntoExistingFolder swAssy, vSuppMates, swFolderFeat\n                End If\n                \n                MoveUnsuppressedMatesFromFolder swAssy, swFolderFeat\n                \n            End If\n            \n        End If\n        \n    Else\n        MsgBox "Please open assembly"\n    End If\n    \nEnd Sub\n\nSub InsertMatesIntoNewFolder(assm As SldWorks.AssemblyDoc, mates As Variant, folderName As String)\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = assm\n    \n    If swModel.Extension.MultiSelect2(mates, False, Nothing) = UBound(mates) + 1 Then\n        \n        Set swFolderFeat = swModel.FeatureManager.InsertFeatureTreeFolder2(swFeatureTreeFolderType_e.swFeatureTreeFolder_Containing)\n                \n        swFolderFeat.Name = folderName\n        \n    Else\n        Err.Raise vbError, "", "Failed to select mates to add to new folder"\n    End If\n    \nEnd Sub\n\nSub InsertMatesIntoExistingFolder(assy As SldWorks.AssemblyDoc, mates As Variant, folderFeat As SldWorks.Feature)\n    \n    Dim swLastFeatInFolder As SldWorks.Feature\n    \n    While folderFeat.GetTypeName2() <> "FtrFolder" Or InStr(folderFeat.Name, "___EndTag___") = 0\n        Set swLastFeatInFolder = folderFeat\n        Set folderFeat = folderFeat.GetNextSubFeature\n    Wend\n    \n    If swLastFeatInFolder.GetTypeName2() = "FtrFolder" Then\n        Err.Raise vbError, "", "Not supported. Folder is empty"\n    End If\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = assy\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(mates)\n            \n        Dim swMateFeat As SldWorks.Feature\n        Set swMateFeat = mates(i)\n        \n        \'swMoveLocation_e.swMoveToFolder option doesn\'t work, need to move after last mate in the folder\n        If False = swModel.Extension.ReorderFeature(swMateFeat.Name, swLastFeatInFolder.Name, swMoveLocation_e.swMoveAfter) Then\n            Err.Raise vbError, "", "Failed to move mate into the folder"\n        End If\n    \n        Set swLastFeatInFolder = swMateFeat\n    Next\n    \nEnd Sub\n\nSub MoveUnsuppressedMatesFromFolder(assy As SldWorks.AssemblyDoc, folderFeat As SldWorks.Feature)\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = assy\n    \n    Dim swFolder As SldWorks.FeatureFolder\n    Set swFolder = folderFeat.GetSpecificFeature2\n    \n    Dim vMates As Variant\n    vMates = swFolder.GetFeatures\n    \n    If Not IsEmpty(vMates) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vMates)\n            \n            Dim swMateFeat As SldWorks.Feature\n            Set swMateFeat = vMates(i)\n            \n            If False = swMateFeat.IsSuppressed2(swInConfigurationOpts_e.swThisConfiguration, Empty)(0) Then\n                If False = swModel.Extension.ReorderFeature(swMateFeat.Name, "", swMoveLocation_e.swMoveToEnd) Then\n                    Err.Raise vbError, "", "Failed to move mate out of the folder"\n                End If\n            End If\n            \n        Next\n        \n    End If\n    \nEnd Sub\n\nFunction GetAllSuppressedMates(assm As SldWorks.AssemblyDoc) As Variant\n    \n    Dim swSuppMates() As SldWorks.Feature\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim vMates As Variant\n    vMates = GetAllMates(assm)\n    \n    If Not IsEmpty(vMates) Then\n        \n        Dim i As Integer\n        For i = 0 To UBound(vMates)\n            \n            Dim swMateFeat As SldWorks.Feature\n            Set swMateFeat = vMates(i)\n            \n            If swMateFeat.IsSuppressed2(swInConfigurationOpts_e.swThisConfiguration, Empty)(0) Then\n                If isInit Then\n                    ReDim Preserve swSuppMates(UBound(swSuppMates) + 1)\n                Else\n                    ReDim swSuppMates(0)\n                    isInit = True\n                End If\n                Set swSuppMates(UBound(swSuppMates)) = swMateFeat\n            End If\n        Next\n        \n    End If\n    \n    GetAllSuppressedMates = swSuppMates\n    \nEnd Function\n\nFunction GetAllMates(assm As SldWorks.AssemblyDoc) As Variant\n    \n    Dim swMates() As SldWorks.Feature\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = assm\n    \n    Dim swMateGroupFeat As SldWorks.Feature\n    \n    Dim featIndex As Integer\n    featIndex = 0\n        \n    Do\n        Set swMateGroupFeat = swModel.FeatureByPositionReverse(featIndex)\n        \n        featIndex = featIndex + 1\n    Loop While swMateGroupFeat.GetTypeName2() <> "MateGroup"\n    \n    Dim swMateFeat As SldWorks.Feature\n    \n    Set swMateFeat = swMateGroupFeat.GetFirstSubFeature\n    \n    While Not swMateFeat Is Nothing\n        \n        If TypeOf swMateFeat.GetSpecificFeature2() Is SldWorks.Mate2 Then\n            If isInit Then\n                ReDim Preserve swMates(UBound(swMates) + 1)\n            Else\n                ReDim swMates(0)\n                isInit = True\n            End If\n            Set swMates(UBound(swMates)) = swMateFeat\n        End If\n        \n        Set swMateFeat = swMateFeat.GetNextSubFeature\n    Wend\n    \n    GetAllMates = swMates\n    \nEnd Function\n\nFunction ObjectArrayExcept(mainArr As Variant, except As Variant) As Variant\n    \n    Dim retVal() As Object\n    Dim isInit As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(mainArr)\n        \n        Dim item As Object\n        Set item = mainArr(i)\n        \n        If Not ObjectArrayContains(except, item) Then\n            If isInit Then\n                ReDim Preserve retVal(UBound(retVal) + 1)\n            Else\n                ReDim retVal(0)\n                isInit = True\n            End If\n            Set retVal(UBound(retVal)) = item\n        End If\n            \n    Next\n    \n    If isInit Then\n        ObjectArrayExcept = retVal\n    Else\n        ObjectArrayExcept = Empty\n    End If\n    \nEnd Function\n\nFunction ObjectArrayContains(arr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(arr)\n        If arr(i) Is item Then\n            ObjectArrayContains = True\n            Exit Function\n        End If\n    Next\n    \n    ObjectArrayContains = False\n    \nEnd Function\n')))}c.isMDXComponent=!0},19017:(e,n,s)=>{s.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUsAAACrCAMAAADYWk6aAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAJW+0S1xlGMAALCLOPb39gA4i4CAgOS+lYs4AAAAOICAqYvU976VgGOwsABjsGNjALBjAOHh4YCVvjIyMqnR5NSwYziLsChdfJWAgKnR0ba2tuS+qWMAOJWVqYs4ODgAODgAAICp0WNiYjg4OJW+5NGpgLjh3QAAY/fUi5WAlUd/nPfRvjgAY9PT02Ow976+qYCAlYtji5WAqWM4i5GsvGMAY9SLY7y8vC96nzg4i6mAgL7R92SXsqmAlYuLY5WVvsrKyrBjY4uw9/ewY9ra2sLCwi5ohqmpgPfRqdSLOIs4Y2Ow1Dg4Y76VqaSkpKmAqS50mGNjsDGFra3Dz2GGnMzf6b6VlXKetCligtG+lfewi5WVldHkvsrW3rbt96nR95Wp0TiL1LnJ1L6pvvfyx9G+vj5zkOTRqaioqCtpi6mVvjBify53nKK5xlGJpoGluJy0wdPj6ixtjzCApitnh8nZ4tP29rXG0L3P2WOMozB9ojJlgjVrhqC3xWKIngAAAGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///3kADw8AAACBdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AJLI408AAAAJcEhZcwAADsMAAA7DAcdvqGQAAA1XSURBVHhe7Z0LdxxHEYUVi7Gk2IuzCg87AoKdWLGAWCQQkBEvE8kg8TDCQDAYLJwMEIN52A4CHOCvc291dU/PUzO7vT4yW/dYO701PaXpb6t6ZrvkMwuZKZWMZToZy3QylunUyvLhrVu3Hmrb1EttLI9uHcmPqb/aWArGoyd4sQDtq1aW2c8fv5ZdswAdoHaWjx9eyx7EAUqNnz8r23zxnGxNkdpYPs6egORBFKCi8cI92e6/GrHcOW1hS7WxdCRPRQEqGr965S42+YqxrIssX3FyBtU1IfkoClDR+JMrm9jsnP4IWG5cXFgAxvHCwgLe7S8scALYcZt5lMRlHSXwkeT9KEBF43v7DEJsQO+rZxGg2Epc0r5z5e7GZ89mv5pnloQp20IHQvKDKEBF43v5p89mG6/fJUuKHPlDM8huYpfbMYfS+bKKUknejgJUNL7HfwApLJHWTHLhiSa0ma8scBKYS7Vdex45klGAigBy4/XXXj5Llvmi58gfuSZRGxdDc87UxpIkhWUIUBFY5iuvgB1YSjrLNIkfzpOqfMXdN82d2lgS3nk2QoCKwBLpjBeyBL6Niz4mx3jJ3zza2eSsqb3nTG0s//Xub979GRshQEVkmX+F8ejugk5/AiwxR+Idb40wA+A+aU7DspVl9t/zgrIIUNNxamXpFQLUdJyOZRkC1HScjmdp6itjmU7GMp2MZToZy3Qyluk0BUtfAzKpJmf55JovApmcJmZpKGuajOXHIF9OM3lNyFL+xeISe7wGzCW4ioJJ1uQbJcvLXuNzsvbUUokrdRXVLW7xqtkBF7Qq51h10H6ezUrDMl/hae30XLdsOkepGa08/61iNDtcx+NKaZVFvStVt1DtDr6PEx7HBzQ42B+2ejgRy2vM8fhvjKQ42VttLIsNlL8MArJcWl2mr3X1qls6HSA2i2KAqOpAVmr7axKWDx4cZN849Rd9B+WLISKZ60SFQeQrP1hxCUbjpoyLSSe1ddqwz/fRGns0GoZlQKGV+Hzlo4tXXqh1RT/5/c6SfzkC0uUALEPRtMXBsMCcgCVR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"}}]);