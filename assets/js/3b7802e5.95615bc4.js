"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[51514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=s.createContext({}),l=function(e){var t=s.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return s.createElement(m.Provider,{value:t},e.children)},A="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),A=l(n),c=a,d=A["".concat(m,".").concat(c)]||A[c]||p[c]||r;return n?s.createElement(d,o(o({ref:t},u),{},{components:n})):s.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[A]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(87462),a=(n(67294),n(3905));const r={layout:"sw-tool",title:"Rename cut list features based on custom properties using SOLIDWORKS API",caption:"Rename Cut List Features",description:"VBA macro to rename cut list features (sheet metal and weldment) based on custom properties using SOLIDWORKS API",image:"cut-list-table.svg",labels:["cut-list","sheet metal","weldment","rename"],group:"Cut-List"},o=void 0,i={unversionedId:"codestack/solidworks-api/document/cut-lists/rename-cut-list-items/index",id:"codestack/solidworks-api/document/cut-lists/rename-cut-list-items/index",title:"Rename cut list features based on custom properties using SOLIDWORKS API",description:"VBA macro to rename cut list features (sheet metal and weldment) based on custom properties using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/cut-lists/rename-cut-list-items/index.md",sourceDirName:"codestack/solidworks-api/document/cut-lists/rename-cut-list-items",slug:"/codestack/solidworks-api/document/cut-lists/rename-cut-list-items/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/cut-lists/rename-cut-list-items/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/cut-lists/rename-cut-list-items/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Rename cut list features based on custom properties using SOLIDWORKS API",caption:"Rename Cut List Features",description:"VBA macro to rename cut list features (sheet metal and weldment) based on custom properties using SOLIDWORKS API",image:"cut-list-table.svg",labels:["cut-list","sheet metal","weldment","rename"],group:"Cut-List"},sidebar:"tutorialSidebar",previous:{title:"Macro to rename SOLIDWORKS bodies of cut-list items using the predefined template",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/cut-lists/rename-cut-list-bodies/"},next:{title:"Macro to split SOLIDWORKS cut-list bodies into individual configurations",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/cut-lists/split-to-configurations/"}},m={},l=[],u={toc:l},A="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(A,(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sheet metal cut list features",src:n(49413).Z,width:"258",height:"79"}),"{ width=250 }"),(0,a.kt)("p",null,"This VBA macro allows to rename all cut list features for weldment and sheet metal part based on the name template which can include values of file and cut-list custom properties, file name, configuration name and free text."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cut list properties",src:n(33940).Z,width:"1157",height:"590"}),"{ width=550 }"),(0,a.kt)("p",null,"To configure the macro modify the values of ",(0,a.kt)("em",{parentName:"p"},"NAME_TEMPLATE"),", ",(0,a.kt)("em",{parentName:"p"},"INDEX_FORMAT")," and ",(0,a.kt)("em",{parentName:"p"},"ALWAYS_ADD_INDEX")," constants"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"NAME_TEMPLATE")," can contain free text and placeholders which will be dynamically replaced by corresponding custom properties values"),(0,a.kt)("p",null,"The following placeholders are supported"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"<","_","FileName","_","> - name of the part file (without extension) where the cut-list resides in"),(0,a.kt)("li",{parentName:"ul"},"<","_","ConfName","_","> - name of the active configuration of the part file"),(0,a.kt)("li",{parentName:"ul"},"<$CLPRP:","[PropertyName]","> - any name of the cut-list property to read value from, e.g.  is replaced with the value of cut-list custom property Thickness"),(0,a.kt)("li",{parentName:"ul"},"<$PRP:","[PropertyName]","> - any name of the custom property of part to read value from, e.g.  is replaced with the value of cut-list custom property PartNo")),(0,a.kt)("p",null,"Placeholders will be resolved for each cut-list at runtime."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"INDEX_FORMAT")," constant allows to specify the padding of the index for feature name if name is used. By default feature names resolved to the same value will have an index for second feature and so on, unless ",(0,a.kt)("em",{parentName:"p"},"ALWAYS_ADD_INDEX")," constant is set to true. In this case first feature will have index as well."),(0,a.kt)("p",null,"For example the following setup (in case part PartNo equals to ABC) will resolve cut-list feature to ",(0,a.kt)("em",{parentName:"p"},"ABC_001"),", ",(0,a.kt)("em",{parentName:"p"},"ABC_002"),", ",(0,a.kt)("em",{parentName:"p"},"ABC_003")," etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Const NAME_TEMPLATE = "<$PRP:PartNo>_"\nConst INDEX_FORMAT As String = "000"\nConst ALWAYS_ADD_INDEX As Boolean = True\n')),(0,a.kt)("p",null,"Watch ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/jsjN8zNRTuc?t=200"},"video demonstration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Const NAME_TEMPLATE = "<_FileName_>_<$CLPRP:Description>_<$PRP:PartNo>"\nConst INDEX_FORMAT As String = "0"\nConst ALWAYS_ADD_INDEX As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\ntry_:\n    On Error GoTo catch_\n        \n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim vCutLists As Variant\n        vCutLists = GetCutLists(swModel)\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vCutLists)\n            \n            Dim swCutListFeat As SldWorks.Feature\n            Set swCutListFeat = vCutLists(i)\n            \n            Dim featBaseName As String\n            \n            featBaseName = ComposeFeatureName(NAME_TEMPLATE, swModel, swCutListFeat)\n            \n            Dim featName As String\n            featName = ResolveFeatureName(swModel, featBaseName)\n            \n            If featName <> "" Then\n                If swCutListFeat.Name <> featName Then\n                    swCutListFeat.Name = featName\n                End If\n            Else\n                Debug.Print "Empty name for " & swCutListFeat.Name\n            End If\n        Next\n        \n    Else\n        MsgBox "Please open the document"\n    End If\n    \n    GoTo finally_\n\ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n\nEnd Sub\n\nFunction ResolveFeatureName(model As ModelDoc2, baseName As String) As String\n    \n    Dim featName As String\n    \n    If baseName <> "" Then\n                \n        Dim index As Integer\n        \n        If ALWAYS_ADD_INDEX Then\n            index = 1\n            featName = baseName + Format$(index, INDEX_FORMAT)\n        Else\n            index = 0\n            featName = baseName\n        End If\n        \n        While model.FeatureManager.IsNameUsed(swNameType_e.swFeatureName, featName)\n            index = index + 1\n            featName = baseName + Format$(index, INDEX_FORMAT)\n        Wend\n        \n    Else\n        featName = ""\n    End If\n    \n    ResolveFeatureName = featName\n    \nEnd Function\n\nFunction GetCutLists(model As SldWorks.ModelDoc2) As Variant\n    \n    GetCutLists = GetFeaturesByType(model, "CutListFolder")\n\nEnd Function\n\nFunction GetFeaturesByType(model As SldWorks.ModelDoc2, typeName As String) As Variant\n    \n    Dim swFeats() As SldWorks.Feature\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = model.FirstFeature\n    \n    Do While Not swFeat Is Nothing\n        \n        ProcessFeature swFeat, swFeats, typeName\n\n        Set swFeat = swFeat.GetNextFeature\n        \n    Loop\n    \n    If (Not swFeats) = -1 Then\n        GetFeaturesByType = Empty\n    Else\n        GetFeaturesByType = swFeats\n    End If\n    \nEnd Function\n\nSub ProcessFeature(thisFeat As SldWorks.Feature, featsArr() As SldWorks.Feature, typeName As String)\n    \n    If thisFeat.GetTypeName2() = typeName Then\n    \n        If (Not featsArr) = -1 Then\n            ReDim featsArr(0)\n            Set featsArr(0) = thisFeat\n        Else\n            Dim i As Integer\n            \n            For i = 0 To UBound(featsArr)\n                If swApp.IsSame(featsArr(i), thisFeat) = swObjectEquality.swObjectSame Then\n                    Exit Sub\n                End If\n            Next\n            \n            ReDim Preserve featsArr(UBound(featsArr) + 1)\n            Set featsArr(UBound(featsArr)) = thisFeat\n        End If\n    \n    End If\n    \n    Dim swSubFeat As SldWorks.Feature\n    Set swSubFeat = thisFeat.GetFirstSubFeature\n        \n    While Not swSubFeat Is Nothing\n        ProcessFeature swSubFeat, featsArr, typeName\n        Set swSubFeat = swSubFeat.GetNextSubFeature\n    Wend\n        \nEnd Sub\n\nFunction ComposeFeatureName(template As String, model As SldWorks.ModelDoc2, cutListFeat As SldWorks.Feature) As String\n\n    Dim regEx As Object\n    Set regEx = CreateObject("VBScript.RegExp")\n    \n    regEx.Global = True\n    regEx.IgnoreCase = True\n    regEx.Pattern = "<[^>]*>"\n    \n    Dim regExMatches As Object\n    Set regExMatches = regEx.Execute(template)\n    \n    Dim i As Integer\n    \n    Dim outFeatName As String\n    outFeatName = template\n    \n    For i = regExMatches.Count - 1 To 0 Step -1\n        \n        Dim regExMatch As Object\n        Set regExMatch = regExMatches.Item(i)\n                    \n        Dim tokenName As String\n        tokenName = Mid(regExMatch.Value, 2, Len(regExMatch.Value) - 2)\n        \n        outFeatName = Left(outFeatName, regExMatch.FirstIndex) & ResolveToken(tokenName, model, cutListFeat) & Right(outFeatName, Len(outFeatName) - (regExMatch.FirstIndex + regExMatch.Length))\n    Next\n    \n    ComposeFeatureName = outFeatName\n    \nEnd Function\n\nFunction ResolveToken(token As String, model As SldWorks.ModelDoc2, cutListFeat As SldWorks.Feature) As String\n    \n    Const FILE_NAME_TOKEN As String = "_FileName_"\n    Const CONF_NAME_TOKEN As String = "_ConfName_"\n    \n    Const PRP_TOKEN As String = "$PRP:"\n    Const CUT_LIST_PRP_TOKEN As String = "$CLPRP:"\n    \n    Select Case LCase(token)\n        Case LCase(FILE_NAME_TOKEN)\n            ResolveToken = GetFileNameWithoutExtension(model.GetPathName)\n        Case LCase(CONF_NAME_TOKEN)\n            ResolveToken = model.ConfigurationManager.ActiveConfiguration.Name\n        Case Else\n            \n            Dim prpName As String\n                        \n            If Left(token, Len(PRP_TOKEN)) = PRP_TOKEN Then\n                prpName = Right(token, Len(token) - Len(PRP_TOKEN))\n                ResolveToken = GetModelPropertyValue(model, model.ConfigurationManager.ActiveConfiguration.Name, prpName)\n            ElseIf Left(token, Len(CUT_LIST_PRP_TOKEN)) = CUT_LIST_PRP_TOKEN Then\n                prpName = Right(token, Len(token) - Len(CUT_LIST_PRP_TOKEN))\n                ResolveToken = GetPropertyValue(cutListFeat.CustomPropertyManager, prpName)\n            Else\n                Err.Raise vbError, "", "Unrecognized token: " & token\n            End If\n            \n    End Select\n    \nEnd Function\n\nFunction GetModelPropertyValue(model As SldWorks.ModelDoc2, confName As String, prpName As String) As String\n    \n    Dim prpVal As String\n    Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n    \n    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)\n    prpVal = GetPropertyValue(swCustPrpMgr, prpName)\n    \n    If prpVal = "" Then\n        Set swCustPrpMgr = model.Extension.CustomPropertyManager("")\n        prpVal = GetPropertyValue(swCustPrpMgr, prpName)\n    End If\n    \n    GetModelPropertyValue = prpVal\n    \nEnd Function\n\nFunction GetPropertyValue(custPrpMgr As SldWorks.CustomPropertyManager, prpName As String) As String\n    Dim resVal As String\n    custPrpMgr.Get2 prpName, "", resVal\n    GetPropertyValue = resVal\nEnd Function\n\nFunction GetFileNameWithoutExtension(path As String) As String\n    GetFileNameWithoutExtension = Mid(path, InStrRev(path, "\\") + 1, InStrRev(path, ".") - InStrRev(path, "\\") - 1)\nEnd Function\n')))}p.isMDXComponent=!0},33940:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/cut-list-properties-b21b198f717e0457078bac3e9b010dbd.png"},49413:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAABPCAMAAAA3IDtkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAANSgMos4ALD3sAA4i2OwsAAAOIs4ODgAOLD39ziLsKSjo+Tk5DIyMtSLODgAAABjsE5OTovUsLDUiwA3VWtra/Dw8LBjAPz8/Pb29mMAOMLCwpScnrD31NT392Ow1LCLODgAYziL1AAAY/ewizhjsIuLY/f3sDg4i4vU92MAYzo6OtzJvmMAAPewY4tji6K2wff31J5+bnp6eoLM6Xamvs3NzTg4Y5HX8urFO6pVC7CLi11dXYs4Y4SEhJ0/BmOw95CntNjY2EmCoLKysmNjsJK6zffUi62akLZqE0VFRfffTozT7qysrOzs7Lq5uVySrbBjY9PT09OcJeDTzHJycoy3y5ycnJnc9puhpIbQ7FCNq+zMTIqKipzG2qinp+HOxLdtH32vxmNiYquemObn5qpWEvjcRGCXs+XQxd/MwZ9CCOjp6J5ABQAAADP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///4E1AlgAAABvdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AP5WdtUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAeDSURBVHhe7Vv7dxpFFEassTUdmloCrGg1VMW4BovUmPpI0xjFYhMUW6nV2mofWk3+/1+9z9nZXRaSIecUcL9zyO7cndf95s7dnXtPCsH/HjkFOQU5BYBsCm6WI9wU2UIim4LyrxHKIltIjKHAhcgWEtkUmFqttl2rBZ1K5cCIbCExnoIhULBdOTiMU1AqFApXzknBQbUBv+SD6krQvUD1SysimjGMoaDT2d4zpj588GA7DIKe6bG8XUQtWztcArTOXOYbpCACi1srQfsrqF+FUin2fGYwhgL47ZltU6/8c/AlGoWYQkk1VoyjoP3qOpe6Z9eD5ocjTOfFQyh4zOACwwSVyjAADh49e/RJzVLQ3JD1b74B2nXXzlVhW7CJ00aAX6tQWFpnMRgBAyoCezNpBmoFKQZwI3S2h3XgwNz443ktFApautmVgrgVwA8X/N11FlulqWQJmSnYjZBkIDAHB4edw4NHsPy//Xvnau/4FOCCi9JV12SC7gdSc6YQ+YIEA4E5fHq+c/6jZ8aY71969stFcg7HoaBdLKDiKFZX0Nwga5hNZ5DtDpdBd9PrfHfj+l/Xj/q/9+TjAM2ckEkBSC8AT44VtIvEwMxbwWjUnt86+uno1pM/w/NMQbsoG5ooQJtIU0A6MwVYVAZm3Rdkofb8zuf9Jz//bXaZAjBq1K21g1w0N5AC3RpCAXwytIs7LEalLWkz/kbIRu3qm99++sPXZiAUgErwvgMamhuFK5dgI0CZdRQK8GMQ7kiMpgLvSAAQMtvfBVnoGRP2LvZCYy52lIITwbX9ufs6JOBBoRZUnu7uDqwVnAxwRhDM3xmBAFZgIWeEhcNkX7DwyCnIKcgpAOQU5BT4UiBRZbnMOTwpuLe1hRTwZc7hScHW7WtIAV/mHCengKwfYQxdRDy/8KDg3tbt8nD54f5ev14fVOzJQcKo1SUNFEVHAj5f6xGST44UWaJWctYuSUNCWozJC+xfOrGAmhyvcLuVRng+4bHHnU8mUZAMp5H13y8vPxyuhuHdfkUp4KDAF5dhSjzBUqijtotL79Msf4TzssafJc6C6QX8gWqhhqMAI8R6zHQ7AZTOXI7iEdqtNIJTqh17zCl1IgUpDsq3718rPxyGgyAYhLsaSLHxtGpIy9cuWgoANrBkD44UToJaoAyFW9vFVyjCShgldnWITp/EhsRrEdStNJLAJY89JlYxmYIkB+QA9leBgSDY7NSFArsy1ddw/jDwO6MpYE04osxFys2UVlBUAvpwURNiRIyChtYk7SOr4MrSSEIVMna2GRyDgvReCMxeyDdhX31BSTZAtUFzh8soCjTIpikp8Bi0b0EVnDZGGfFRQoxAXyA9YidSkzomoyFQt9pIlJaxs+OWJ7cChOkrBXvWHYKfwjGrDRwfppGmoLkhnsudNCmGZZp2d+1lUjkhZpCH1U64plAgK0zd2kaSwxAKsqPXHr4AUb/LG2F131IAg9EboUF2uhJzwjIN5IlmG0Vc4QH8sC7rWqWlTokZ0ow7oZpCgRBKz7WR5jBk7GxnMJECuUagl2K9z+5wuOxQQD4R9O+uvQXDj6RAtFB/BsaC6/o2BmQBoBntp7SYoT6XVUU53UV+CLql4C41Oi0rSINeioPKoBOGq8PloUsBzgUoaBcfw7BjKLArSyVZRBJ21y6BmimxgORy5ZrSiMVRVbqDmSBkbH9fkAa9FCuV3Xp/b395qBR034M/6KZx4BatZ5KC5jfwo8waO0NYUypiKwBOW5xcUgw12x+jk2zYTtRxwnbBW7IP7lYbndobIQ3yBfJxDFehALwUf9AhBbTvIgrwu7GwtE4mihMR94XTxmasKk0bfQApGhdjTXwjQDPtRGti5zAQ1rBeUSigPzL2NN8FmcBT4v3ZPiC4tp9tBFNQAC5hwjGRLEMPAy8C0VekuyuT8KeAIIW5hjcFi4OcgpyCnAJATkFOgS8F8kKUy5zDk4I8j5DnERh5HuHkeQRNBeh1xCOFk3nAE2P8MWcJ8MxIlRj++YRJFIyIGnnnEfS0Fp3aMsL8Kh79nwycJXCzB4CSfz5hIgXp2KF3HiFNASD+yEICHQAKFjiPJUsQX89p8gmTKUhyQA7AK48wmQLNI8QoAMXcFpwl0JDpKeQTjkFBei945hFwR6NQr4TYIw2HuRTgndMClEXFumdf38BokLSg6jaSzH1ITVVaekzHEE9uBQi/PAJAnWTkLOOPNI/giLmsLVBNpuAzMA4wgenzCR6+AOGbR4gFgfkm/ojzCJGY4oMEboG9MgWgHKk6dT5hIgVyjTBdHkHdpnWfiUe6n0TshERFadgSgIaU4OnU+YRJFKRxCnkE55p4xNkBLJDYYSBqwWurtj59PsGDAt88gqYC9MqGEH/Ezs2K5U0fb8GK4Vjw0xZT5BM8KED45BHIr+ME5IrTTTzS7ICI7X8yOC0AvMogQ8alBTaBAbGGYzpUk00Be4KBPL4LMjEHeQSFa/tpI5iCgjnIIyjG5xP8KSBIYa7hTcHiIKcgpyCnAJBTkFOQUwDIpmCT/jlxU0oLjGwKTH0wGGhcbHERBP8BGOMUNLqZSBwAAAAASUVORK5CYII="}}]);