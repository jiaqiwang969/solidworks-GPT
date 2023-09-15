"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[60916],{3905:(n,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>p});var r=t(67294);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function A(n,e){if(null==n)return{};var t,r,s=function(n,e){if(null==n)return{};var t,r,s={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var a=r.createContext({}),l=function(n){var e=r.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},m=function(n){var e=l(n.components);return r.createElement(a.Provider,{value:e},n.children)},d="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,s=n.mdxType,i=n.originalType,a=n.parentName,m=A(n,["components","mdxType","originalType","parentName"]),d=l(t),f=s,p=d["".concat(a,".").concat(f)]||d[f]||c[f]||i;return t?r.createElement(p,o(o({ref:e},m),{},{components:t})):r.createElement(p,o({ref:e},m))}));function p(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var i=t.length,o=new Array(i);o[0]=f;var A={};for(var a in e)hasOwnProperty.call(e,a)&&(A[a]=e[a]);A.originalType=n,A[d]="string"==typeof n?n:s,o[1]=A;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},46660:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>A,toc:()=>l});var r=t(87462),s=(t(67294),t(3905));const i={layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u6587\u4ef6\u8def\u5f84\u590d\u5236\u5230\u88c5\u914d\u7ec4\u4ef6\u7684\u6240\u6709\u56fe\u7eb8\u7684\u5b8f",caption:"\u590d\u5236\u6240\u6709\u88c5\u914d\u7ec4\u4ef6\u56fe\u7eb8\u7684\u6587\u4ef6\u8def\u5f84"},o=void 0,A={unversionedId:"codestack/solidworks-api/document/drawing/copy-drawing-paths/index",id:"codestack/solidworks-api/document/drawing/copy-drawing-paths/index",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u6587\u4ef6\u8def\u5f84\u590d\u5236\u5230\u88c5\u914d\u7ec4\u4ef6\u7684\u6240\u6709\u56fe\u7eb8\u7684\u5b8f",description:"\u4f7f\u7528SOLIDWORKS API\uff0c\u8fd9\u4e2aVBA\u5b8f\u53ef\u4ee5\u627e\u5230\u6d3b\u52a8\u88c5\u914d\u7684\u6240\u6709\u7ec4\u4ef6\u7684\u5f15\u7528\u56fe\u7eb8\u8def\u5f84\uff0c\u5e76\u5c06\u5176\u590d\u5236\u5230\u526a\u8d34\u677f\u4e2d\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/drawing/copy-drawing-paths/index.md",sourceDirName:"codestack/solidworks-api/document/drawing/copy-drawing-paths",slug:"/codestack/solidworks-api/document/drawing/copy-drawing-paths/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/copy-drawing-paths/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/drawing/copy-drawing-paths/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u6587\u4ef6\u8def\u5f84\u590d\u5236\u5230\u88c5\u914d\u7ec4\u4ef6\u7684\u6240\u6709\u56fe\u7eb8\u7684\u5b8f",caption:"\u590d\u5236\u6240\u6709\u88c5\u914d\u7ec4\u4ef6\u56fe\u7eb8\u7684\u6587\u4ef6\u8def\u5f84"},sidebar:"tutorialSidebar",previous:{title:"\u6e05\u9664\u4fee\u8ba2\u8868\u5e76\u4f7f\u7528SOLIDWORKS API\u6dfb\u52a0\u65b0\u7684\u4fee\u8ba2",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/clear-revision-table-new-revision/"},next:{title:"\u5c06\u7ed8\u56fe\u89c6\u56fe\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u590d\u5236\u5230SOLIDWORKS\u7ed8\u56fe\u6587\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/copy-view-properties/"}},a={},l=[{value:"group: \u56fe\u7eb8",id:"group-\u56fe\u7eb8",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],m={toc:l},d="wrapper";function c(n){let{components:e,...i}=n;return(0,s.kt)(d,(0,r.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\uff0c\u8fd9\u4e2aVBA\u5b8f\u53ef\u4ee5\u627e\u5230\u6d3b\u52a8\u88c5\u914d\u7684\u6240\u6709\u7ec4\u4ef6\u7684\u5f15\u7528\u56fe\u7eb8\u8def\u5f84\uff0c\u5e76\u5c06\u5176\u590d\u5236\u5230\u526a\u8d34\u677f\u4e2d\u3002\nimage: assembly-drawings.png\nlabels: ","[\u56fe\u7eb8,\u590d\u5236\u8def\u5f84,\u5f15\u7528]"),(0,s.kt)("h2",{id:"group-\u56fe\u7eb8"},"group: \u56fe\u7eb8"),(0,s.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u4f7f\u7528SOLIDWORKS API\u627e\u5230\u4e3a\u6d3b\u52a8\u88c5\u914d\u7684\u6240\u6709\u7ec4\u4ef6\u521b\u5efa\u7684\u56fe\u7eb8\uff0c\u5e76\u5c06\u8def\u5f84\u590d\u5236\u5230\u526a\u8d34\u677f\u4e2d\u3002"),(0,s.kt)("p",null,"SOLIDWORKS\u63d0\u4f9b\u4e86\u6253\u5f00\u7ec4\u4ef6\u56fe\u7eb8\u7684\u529f\u80fd\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u5728SOLIDWORKS\u4e2d\u6253\u5f00\u56fe\u7eb8\u7684\u529f\u80fd",src:t(30782).Z,width:"467",height:"374"})),(0,s.kt)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u5141\u8bb8\u9010\u4e2a\u67e5\u627e\u56fe\u7eb8\uff0c\u4f46\u6709\u65f6\u9700\u8981\u5feb\u901f\u627e\u5230\u8be5\u88c5\u914d\u7684\u6240\u6709\u7ec4\u4ef6\u4f7f\u7528\u7684\u6240\u6709\u56fe\u7eb8\u3002\u8fd9\u53ef\u4ee5\u662f\u81ea\u52a8\u5316\u8f6f\u4ef6\u7684\u4e00\u90e8\u5206\u3002\u6b64\u5b8f\u5c06\u904d\u5386\u6240\u6709\u5f15\u7528\u5e76\u627e\u5230\u6240\u6709\u56fe\u7eb8\u8def\u5f84\u3002\u5b8c\u6210\u540e\uff0c\u5c06\u663e\u793a\u4e0b\u9762\u7684\u786e\u8ba4\u6d88\u606f\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u786e\u8ba4\u63d0\u53d6\u56fe\u7eb8\u64cd\u4f5c\u5b8c\u6210",src:t(59488).Z,width:"463",height:"159"})),(0,s.kt)("p",null,"\u526a\u8d34\u677f\u7684\u5185\u5bb9\u53ef\u4ee5\u7c98\u8d34\u5230\u4efb\u4f55\u6587\u672c\u6216\u8868\u683c\u7f16\u8f91\u5668\u4e2d\uff0c\u5982\u8bb0\u4e8b\u672c\u6216Excel\uff08\u4f7f\u7528ctrl+V\u5feb\u6377\u952e\u6216\u7c98\u8d34\u547d\u4ee4\uff09\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u5c06\u56fe\u7eb8\u8def\u5f84\u590d\u5236\u5230Excel",src:t(87291).Z,width:"521",height:"155"})),(0,s.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u88ab\u538b\u5236\u7684\u7ec4\u4ef6\u5c06\u88ab\u6392\u9664\u5728\u641c\u7d22\u8303\u56f4\u4e4b\u5916"),(0,s.kt)("li",{parentName:"ul"},"\u56fe\u7eb8\u5728\u4e0e\u8f93\u5165\u88c5\u914d\u76f8\u540c\u7684\u6587\u4ef6\u5939\u4e2d\u641c\u7d22\uff08\u5305\u62ec\u5b50\u6587\u4ef6\u5939\uff09"),(0,s.kt)("li",{parentName:"ul"},"\u56fe\u7eb8\u662f\u901a\u8fc7\u5f15\u7528\u800c\u4e0d\u662f\u540d\u79f0\u8fdb\u884c\u641c\u7d22\u7684\uff0c\u56e0\u6b64\u56fe\u7eb8\u53ef\u4ee5\u5177\u6709\u4efb\u4f55\u540d\u79f0"),(0,s.kt)("li",{parentName:"ul"},"\u56fe\u7eb8\u8def\u5f84\u4f7f\u7528\u6362\u884c\u7b26\u5206\u9694")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \ntry:\n    \n    On Error GoTo catch\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        If swModel.GetPathName() = "" Then\n            Err.Raise vbError, "", "\u6587\u4ef6\u672a\u4fdd\u5b58"\n        End If\n        \n        Dim vDrawingPaths As Variant\n        \n        Dim dir As String\n        dir = swModel.GetPathName()\n        dir = Left(dir, InStrRev(dir, "\\"))\n        \n        If TypeOf swModel Is SldWorks.AssemblyDoc Then\n            Dim swAssy As SldWorks.AssemblyDoc\n            Set swAssy = swModel\n            Dim vRefs As Variant\n            vRefs = GetAllReferences(swAssy)\n            vDrawingPaths = GetDrawingsForFiles(vRefs, dir)\n        ElseIf TypeOf swModel Is SldWorks.PartDoc Then\n            vDrawingPaths = GetDrawingsForFiles(Array(swModel.GetPathName()), dir)\n        Else\n            Err.Raise vbError, "", "\u4ec5\u652f\u6301\u96f6\u4ef6\u6216\u88c5\u914d\u4f53"\n        End If\n            \n        AddPathsToClipboard vDrawingPaths\n        \n        swApp.SendMsgToUser2 "\u56fe\u7eb8\u8def\u5f84\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f", swMessageBoxIcon_e.swMbInformation, swMessageBoxBtn_e.swMbOk\n        \n    Else\n        Err.Raise vbError, "", "\u8bf7\u6253\u5f00\u96f6\u4ef6\u6216\u88c5\u914d\u4f53"\n    End If\n    \n    GoTo finally\n    \ncatch:\n    Debug.Print Err.Number\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\n    \nfinally:\n    \nEnd Sub\n\nFunction GetAllReferences(assy As SldWorks.AssemblyDoc) As Variant\n    \n    Dim refs() As String\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim vComps As Variant\n    vComps = assy.GetComponents(False)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        \n        Set swComp = vComps(i)\n        \n        Dim path As String\n        path = swComp.GetPathName()\n        \n        If Not swComp.IsSuppressed() Then\n            If Not isInit Then\n                isInit = True\n                ReDim refs(0)\n                refs(0) = path\n            Else\n                If Not ContainsFilePath(refs, path) Then\n                    ReDim Preserve refs(UBound(refs) + 1)\n                    refs(UBound(refs)) = path\n                End If\n            End If\n        End If\n        \n    Next\n    \n    GetAllReferences = refs\n    \nEnd Function\n\nFunction GetDrawingsForFiles(files As Variant, path As String) As Variant\n    \n    Dim drawingPaths() As String\n    Dim isInit As Variant\n    isInit = False\n    \n    Dim vAllDrawings As Variant\n    vAllDrawings = FindAllDrawings(path)\n        \n    If Not IsEmpty(vAllDrawings) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vAllDrawings)\n            \n            Dim drawPath As String\n            drawPath = vAllDrawings(i)\n            \n            Dim vDeps As Variant\n            \n            vDeps = swApp.GetDocumentDependencies2(drawPath, True, True, False)\n            Dim j As Integer\n            \n            If Not IsEmpty(vDeps) Then\n            \n                For j = 1 To UBound(vDeps) Step 2\n                    If ContainsFilePath(files, CStr(vDeps(j))) Then\n                        If Not isInit Then\n                            isInit = True\n                            ReDim drawingPaths(0)\n                        Else\n                            ReDim Preserve drawingPaths(UBound(drawingPaths) + 1)\n                        End If\n                        drawingPaths(UBound(drawingPaths)) = drawPath\n                        Exit For\n                    End If\n                Next\n                \n            End If\n            \n        Next\n        \n    End If\n    \n    GetDrawingsForFiles = drawingPaths\n    \nEnd Function\n\nFunction FindAllDrawings(path As String) As Variant\n    \n    Const DRAW_EXTENSION As String = "slddrw"\n    FindAllDrawings = GetFiles(path, True, DRAW_EXTENSION)\n    \nEnd Function\n\nFunction GetFiles(path As String, Optional includeSubFolders As Boolean = True, Optional ext As String = "") As Variant\n\n    Dim paths() As String\n    Dim isInit As Boolean\n    \n    isInit = False\n    \n    Dim fso As Object\n    Set fso = CreateObject("Scripting.FileSystemObject")\n    \n    Dim folder As Object\n    Set folder = fso.GetFolder(path)\n    \n    CollectFilesFromFolder folder, includeSubFolders, ext, paths, isInit\n    \n    If isInit Then\n        GetFiles = paths\n    Else\n        GetFiles = Empty\n    End If\n    \nEnd Function\n\nSub CollectFilesFromFolder(folder As Object, includeSubFolders As Boolean, ext As String, ByRef paths() As String, ByRef isInit As Boolean)\n    \n    For Each file In folder.files\n        Dim fileExt As String\n        fileExt = Right(file.path, Len(file.path) - InStrRev(file.path, "."))\n        If LCase(fileExt) = LCase(ext) Then\n            If Not isInit Then\n                ReDim paths(0)\n                isInit = True\n            Else\n                ReDim Preserve paths(UBound(paths) + 1)\n            End If\n            paths(UBound(paths)) = file.path\n        End If\n    Next\n    \n    If includeSubFolders Then\n        Dim subFolder As Object\n        For Each subFolder In folder.SubFolders\n            CollectFilesFromFolder subFolder, includeSubFolders, ext, paths, isInit\n        Next\n    End If\n    \nEnd Sub\n\nSub AddPathsToClipboard(vPaths As Variant)\n\n    Dim text As String\n    Dim i As Integer\n    \n    For i = 0 To UBound(vPaths)\n        If i <> 0 Then\n            text = text & vbCrLf\n        End If\n        text = text & CStr(vPaths(i))\n    Next\n\n    Dim dataObject As Object\n    Set dataObject = CreateObject("new:{1C3B4210-F441-11CE-B9EA-00AA006B1A69}")\n    dataObject.SetText text\n    dataObject.PutInClipboard\n    Set dataObject = Nothing\n    \nEnd Sub\n\nFunction ContainsFilePath(arr As Variant, item As String) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(arr)\n        If LCase(arr(i)) = LCase(item) Then\n            ContainsFilePath = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')))}c.isMDXComponent=!0},59488:(n,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc8AAACfCAMAAACoX6JaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAACjP5N20ZQArfKSjenUzAP//toGc4nRqetTU1AAANyVsvH89NH3d84ic1CYAMtvn9C9HkKC61jQ0NJNuMrjJ9DkAAK96c77b62a2tufPjD5myzlHc66/56K+m/7+/qVhAKNCLwBaqhxUW6a/29majjRNr9fc7UMUItuQOirG8kFpzafl9Ha/26taS+i9tbLK5PDw8JqZmWYAOoWUuqO9uUOJ3M10Y2FtisXFyPPSy1en9EU9AABNncfa7t+Uhh9Auq3GwcDV7J240zgAZXVLAFFadD/O8v//27bO5+bx1bnQ6QAAWZacsHPE8aiKWLb//41rMVl80Zmr2ScAABo/rTx/sd7e3lUAAJBmkOWilKK82Fd0u1XT8zo6kDZexLb/tqNOP6OlrGaDzQA5j08nNq5/Npm10dJ+bjTU/chpV83e8Le2tsLd7SJCrqjC3YrU7VNWZZDb/+rz+NuQZjaQvE5yyurq6oiEhOfxsXOR3c6jYCtGuzoAOVRjk+Xm5+Li45VrZ4y92cnChl6m3EdgsbuamxgYGP+2ZsXx9wAAZbpJM+ipnKi33kBQlABltY9aAK+vsIWNn1qC5lONuXd9j5A6AJGy+DZKhVFpo5Tb8cJeShw/s8LCwppVTM3k8cXg7mOK6ZPF30hpuma2/4uYwaOhoaaqub5SPSFBobaQOl4rACxIrDpPoBtDStr+/jmP2r2Gf8bgzSJBwzVZuHuNwjxjyd/b266yvpFEOQAsWqnW4GYAZl09TV9jcUMAAP+2kJOgzjo8ZKzF32nb9tPi8eKbjWaQkChOof/bkE112XaAnirO+cvLy5ORkZg3JGd/wCFIsKvp+arDnsvjq0Reoejs9bdCK8jh77ZmAERs0SUrALu7u1N835Lj80JCQubx92a222YAACxUu6uqquemmdfk8ylHnxxBqx5CseS0qwBmkEJMbnzG4YKUyZiao8W8vGV6rE9bgmmJ2saHOJmlw4dKQkhw1YuKiquofr29wHpOALOzs+zFv2Z0mQAAAAcP4x8AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAOQElEQVR4Xu2dC3gU1RWAV6PQASsiSFuhRCjQ5eFjI9IuNjUU0VhIEXksFTQ1Ai3tNmGxGKRIVgVEasEIxKjZ2vJIikABhYBtlWpsa4RNeYg1dFEKKQ+rUEElQODrOfeemdnZ3ewmkpDZ+53/S+a+zpzZuX/uzOwSwJHKqAT7VAv2qRbsUy3IZwcmqXn8celR+uzwQcgvWkyycvAP0ij67FDr/zGT5Kz9kxCKPj9gnQrwxDfIZ4cQ9TBJzU5coOiTl6cSGD5TqYNJavp10H0OZhSAfarF+4bPKxkFYJ9qwT7tTdmrzsS8WkbR7NPuTJw7MDFzJ1I0+7Q7zoFPJmagk6LZp91xDvxPYthn0uA8e3dizsbyOY6xIc6zfzNZ7/P51oeVOmedFD1uXD0+hzgcjnS9kvIoVkRzBLZgA7Q1OoeYAWY4hmDPCNwMx2gjJ9NwLD594Mr3lVvWizJMaCKfN63Cef/So+O6bkE5Q4ZdS7pAD3QIRV23QO9wHLlpVZvZuB0QGd51C1jE4EtGDTBzMo3BefYWE/QIQqmgTiCRz0vagSBErjwhJ9KnECQCL2n3rwFyn8hwChZejZxMY7D4JJNi88h66gTCfH7Z8NnDpOuWAZYSXPQYki6qoKjHCFmFxXnTqrbQlY5jw1MejQrHwBHpIsjIxTQKi08SCvgeCVue4JOie/SI6bPHCAcqQGOiuQtcRPtEbVgd0hZc4nhkOAaQbYByMo3C2fOf4bwihfou+wd1CHrG8pkXzqlRjrZ5eSBItEBQ3pl0UQWfeSNkddfDszECCvyCEEu4eDCCxghHm9mil3IyjSLKZz7iu6wbdQh6Oik6L68en+DSkR7LZ8eUpXkdZfVUu9k4Mjxl6aBVA07dem1kOBaw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"},87291:(n,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,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"},30782:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/open-component-drawing-47dab63ecfffed8562b74d3d1e8e8e65.png"}}]);