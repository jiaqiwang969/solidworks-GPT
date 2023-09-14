"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[85841],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>A});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function s(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?s(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=t.createContext({}),l=function(e){var n=t.useContext(a),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},d=function(e){var n=l(e.components);return t.createElement(a.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(o),p=r,A=m["".concat(a,".").concat(p)]||m[p]||u[p]||s;return o?t.createElement(A,i(i({ref:n},d),{},{components:o})):t.createElement(A,i({ref:n},d))}));function A(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=p;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<s;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},18759:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=o(87462),r=(o(67294),o(3905));const s={layout:"sw-tool",title:"Move selected components to feature folder using SOLIDWORKS API",caption:"Move To Folder",description:"Macro move the components selected in the graphics area into a new folder in the feature manager tree",image:"move-components-to-folder.png",labels:["components","move to folder"],group:"Assembly"},i=void 0,c={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/move-to-folder/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/move-to-folder/index",title:"Move selected components to feature folder using SOLIDWORKS API",description:"Macro move the components selected in the graphics area into a new folder in the feature manager tree",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/move-to-folder/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/move-to-folder",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/move-to-folder/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/move-to-folder/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/move-to-folder/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Move selected components to feature folder using SOLIDWORKS API",caption:"Move To Folder",description:"Macro move the components selected in the graphics area into a new folder in the feature manager tree",image:"move-components-to-folder.png",labels:["components","move to folder"],group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"Macro to make independent copy of the SOLIDWORKS component and copy drawing",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/make-independent-drawing/"},next:{title:"Copy component name to the component reference using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/name-to-component-reference/"}},a={},l=[],d={toc:l},m="wrapper";function u(e){let{components:n,...s}=e;return(0,r.kt)(m,(0,t.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Components added to new folder",src:o(19945).Z,width:"299",height:"195"}),"{ width=250 }"),(0,r.kt)("p",null,"This macro allows moving the selected components into the new folder in the feature manager tree using SOLIDWORKS API."),(0,r.kt)("p",null,"Components (or any of their entities) can be selected in the graphics area. For example only face or edge of the component(s) can be selected for macro to work."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        SelectComponentsFromCurrentSelection swModel\n        AddSelectedComponentsToNewFolder ""\n    Else\n        MsgBox "Please open assembly"\n    End If\n\nEnd Sub\n\nSub SelectComponentsFromCurrentSelection(model As SldWorks.ModelDoc2)\n    \n    Dim swComps() As SldWorks.Component2\n    Dim isArrInit As Boolean\n    isArrInit = False\n    \n    Dim i As Integer\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = swSelMgr.GetSelectedObjectsComponent4(i, -1)\n        \n        If Not swComp Is Nothing Then\n        \n            Dim unique As Boolean\n            unique = False\n            \n            If False = isArrInit Then\n                isArrInit = True\n                ReDim swComps(0)\n                unique = True\n            Else\n                unique = Not Contains(swComps, swComp)\n                If True = unique Then\n                    ReDim Preserve swComps(UBound(swComps) + 1)\n                End If\n            End If\n                \n            If True = unique Then\n                Set swComps(UBound(swComps)) = swComp\n            End If\n        \n        End If\n        \n    Next\n    \n    If True = isArrInit Then\n        If UBound(swComps) + 1 <> model.Extension.MultiSelect2(swComps, False, Nothing) Then\n            Err.Raise vbError, , "Failed to select components"\n        End If\n    End If\n    \nEnd Sub\n\nFunction Contains(vArr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vArr)\n        If vArr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\nSub AddSelectedComponentsToNewFolder(dummy)\n    \n    Const WM_COMMAND As Long = &H111\n    Const CMD_ADD_TO_NEW_FOLDER As Long = 37922\n    \n    Dim swFrame As SldWorks.Frame\n        \n    Set swFrame = swApp.Frame\n        \n    SendMessage swFrame.GetHWnd(), WM_COMMAND, CMD_ADD_TO_NEW_FOLDER, 0\n    \nEnd Sub\n')))}u.isMDXComponent=!0},19945:(e,n,o)=>{o.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAADDCAMAAADtGsfdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAN+1HSYOoff39zg4OGOwsC1wk2GGnai6w4s4AAAAOJh4FDOZ/wA4i9O4SSQkJDgAAABjsGChv7BjALjh3e3WWHi/3TgAODg4YzaOxC5bdMCXIJCQj4s4ODgAYwA3VUcxCsG8/7DUizO8/7nJ0ziL1GNjsPewY3+Z/4p6VVA5DZJyEwAAY2MAON/g38KmQGMAAHlWGjCAplWTsXV1dbKgc2Ow9xcXF3/O/zg4i//e/2MAY1RTVPewi2ZJEpZ8LbmYOsa4ksbGytfQxYdxOUN/ncxmAMzf6VqZ/4ODgzlxj1rO/9SLY+HO/4rU9kKXAKWlpTIxMaCr/6WCLvDEH2Ow1M63ZLBjY/fUi8rLy8vu88i/ry5ph21VLKOPS2lpaS94ndrWy4s4Y6KWgYVlFX/H5dbMr9SLOKmHFtXV2DOr/ziLsMyuVtna276+vqeGPdLCdItji9GoHpd0Np2OdPb21E2KqN3FUOrchl5eXuLi44uLY09PT72+wXK31aysrGaoxioqKt3d3mM4i1VAGd7EYiligouLOJmZmeHf3C51mVubuXRoUX5fJDx7mcTQ1/jiXa7293hmQqZ9H3RWGrCLOJBpIEBAQK+kjbmvnZGAYDGFraOTaJB9QZaWll5KJMDAxPb2sGNjY2JFE9HR0yxtj9T19jRvjbeOIPbKIIyMjIPM6q6PRHp7ejFti3C00uDMd5VwHCtnh0o0CxsbG5SGb8rW3nZcJ3zD4c3N0YZiIaF5IZiGRczEtfjqkOO4IEmFo4FtSS97oK+urn/e/0F9m1GOrK+KMePLVHtgH8iuXmmryT54lq6UOFiXtWOMo1hAEOHc0sfDuZp1KCtqi9mvIGZNGWOkwobQ7sqtRHpdK6eAJ3W72WywzsvGu6+GINSwY9LMvOvr7F6evKudg1I7EH1eFJp5PqB/FShdfJpyIDp1k3h3d8CbGeq+ILOQGGlXM8OvYn9iLzB9o9jJeLWWOYtkIKaCGTZzkUSCoGRMIJNwI2hLFqeEMHNbKQAAAOQQR0cAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAOrklEQVR4Xu2dC5xUVRnAxy6pYyugo/TwMUu6rQ/EDQnK1GyVYqVWVqgGetDLNjSkrNHaSoTwkRayWWBS5iBCm2HWWmolokCZUtlL7WU1ZmX0tjas7Nf3fec7575nz957h2bOnP9P7mvvvXPu3++ce+ecOefmnGSsXcsLPipd+290nMKUQV5vUgaqVV5S9MC/xK7G8YKPAqqC2QG01rRk7GpclKtK1wyal57ZW84/vWvKYKED1gq53P6fAHuwUs6/Kp/br5d2amD2hKtOznzgrJx/FihBVxhrnTnpCkRx8DUwe9wVhVSHUzkOwwhzJbmCraXDG704y9pVHy948bnC7Ah6hJl+6Qq2Qg6lvRqXjF31RbmSFqi8YlfCn3XF9Kgz8w0QZm5ckRmVB1vQVV/f8uW86Di3Lr+OlypdKAufr5Srct5Xtregq+XABOJWZOZM3l7O53LoxXVFmw5o5TwoVZEpUCVdxYHSmoeMXYEnXnScmRNkHoxD3iCbhIzLdi9u2R4FPLbnmktVPV0Zh3Wlj3Wlj3Wlj3Wlj3WlTx1cVe88euU13+MVk8jc1SP//frf37vlnaevvIY3mMOCZZf7Setq+Bdr3nHJqz//g1PbeYM5LBugWVUyNa2r9qE/HTJy6oWrV5vnir+yDSBTVyzZ0J3O1a+OvmFoaGhkNeBzhRVV/bkpl2FdA9GZy2GNg/iuE90sUZqovgX1y+/YVJWjhWhnUyQ5UKWRIVfV6gpkyeLFC64fg6v1PHdp/9aWkShXneCI6lzUReMWAqsa+oOyOiG55TeDJ9FgUemSO5TG6dXclPP7vd8nJ9mBhZAryHpLkMUb7ugek6uQrPZDfi9djb/hTbwREnAYpJNq2Csv5q/LPleixcIDuiJE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"}}]);