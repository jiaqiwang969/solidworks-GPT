"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[78073],{3905:(e,n,i)=>{i.d(n,{Zo:()=>w,kt:()=>d});var A=i(67294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);n&&(A=A.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,A)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,A,t=function(e,n){if(null==e)return{};var i,A,t={},s=Object.keys(e);for(A=0;A<s.length;A++)i=s[A],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(A=0;A<s.length;A++)i=s[A],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var o=A.createContext({}),m=function(e){var n=A.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},w=function(e){var n=m(e.components);return A.createElement(o.Provider,{value:n},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return A.createElement(A.Fragment,{},n)}},u=A.forwardRef((function(e,n){var i=e.components,t=e.mdxType,s=e.originalType,o=e.parentName,w=r(e,["components","mdxType","originalType","parentName"]),l=m(i),u=t,d=l["".concat(o,".").concat(u)]||l[u]||c[u]||s;return i?A.createElement(d,a(a({ref:n},w),{},{components:i})):A.createElement(d,a({ref:n},w))}));function d(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=i.length,a=new Array(s);a[0]=u;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r[l]="string"==typeof e?e:t,a[1]=r;for(var m=2;m<s;m++)a[m]=i[m];return A.createElement.apply(null,a)}return A.createElement.apply(null,i)}u.displayName="MDXCreateElement"},80224:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>m});var A=i(87462),t=(i(67294),i(3905));const s={layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u6839\u636e\u51e0\u4f55\u5c3a\u5bf8\u7f29\u653e\u7ed8\u56fe\u89c6\u56fe\u7684\u5b8f",image:"scale-view.svg",labels:["\u7f29\u653e","\u5c3a\u5bf8","\u8fb9\u754c\u6846"],group:"\u7ed8\u56fe"},a=void 0,r={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/views-size-based-scale/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/views-size-based-scale/index",title:"\u4f7f\u7528SOLIDWORKS API\u6839\u636e\u51e0\u4f55\u5c3a\u5bf8\u7f29\u653e\u7ed8\u56fe\u89c6\u56fe\u7684\u5b8f",description:"\u7ed8\u56fe\u89c6\u56fe\u7f29\u653e\u9009\u9879{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/views-size-based-scale/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/views-size-based-scale",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/views-size-based-scale/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/views-size-based-scale/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/views-size-based-scale/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u6839\u636e\u51e0\u4f55\u5c3a\u5bf8\u7f29\u653e\u7ed8\u56fe\u89c6\u56fe\u7684\u5b8f",image:"scale-view.svg",labels:["\u7f29\u653e","\u5c3a\u5bf8","\u8fb9\u754c\u6846"],group:"\u7ed8\u56fe"},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/view-select-corresponding-feature/"},next:{title:"\u521b\u5efaSOLIDWORKS\u5e94\u7528\u7a0b\u5e8f\u7684Visual Studio\u5b89\u88c5\u7a0b\u5e8f\uff08VSI\uff09",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vsi/"}},o={},m=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u8303\u56f4",id:"\u8303\u56f4",level:3},{value:"\u7f29\u653e\u6620\u5c04",id:"\u7f29\u653e\u6620\u5c04",level:3}],w={toc:m},l="wrapper";function c(e){let{components:n,...s}=e;return(0,t.kt)(l,(0,A.Z)({},w,s,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"\u7ed8\u56fe\u89c6\u56fe\u7f29\u653e\u9009\u9879",src:i(68812).Z,width:"248",height:"156"}),"{ width=250 }"),(0,t.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u6839\u636e\u51e0\u4f55\u5c3a\u5bf8\u548c\u6307\u5b9a\u7684\u5339\u914d\u6620\u5c04\u81ea\u52a8\u7f29\u653e\u5f53\u524d\u5de5\u4f5c\u8868\u4e2d\u7684\u7ed8\u56fe\u89c6\u56fe\u3002"),(0,t.kt)("p",null,"\u6620\u5c04\u662f\u4e00\u7ec4\u6307\u4ee4\uff0c\u5b9a\u4e49\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u51e0\u4f55\u4f53\u7684\u6700\u5c0f\u548c\u6700\u5927\u5bbd\u5ea6\u3002\u4f7f\u7528 * \u8868\u793a\u5339\u914d\u4efb\u4f55\u503c"),(0,t.kt)("li",{parentName:"ul"},"\u51e0\u4f55\u4f53\u7684\u6700\u5c0f\u548c\u6700\u5927\u9ad8\u5ea6\u3002\u4f7f\u7528 * \u8868\u793a\u5339\u914d\u4efb\u4f55\u503c"),(0,t.kt)("li",{parentName:"ul"},"\u5982\u679c\u5339\u914d\u6210\u529f\uff0c\u5219\u7f29\u653e\u7684\u5206\u5b50\u548c\u5206\u6bcd")),(0,t.kt)("p",null,"\u51e0\u4f55\u5c3a\u5bf8\u662f\u6839\u636e\u7ed8\u56fe\u89c6\u56fe\u4e2d\u53ef\u89c1\u5b9e\u4f53\u7684\u8fb9\u754c\u6846\u8ba1\u7b97\u7684\uff08\u5305\u62ec\u6240\u6709\u53c2\u8003\u51e0\u4f55\u4f53\u3001\u8349\u56fe\u5b9e\u4f53\u3001\u5c3a\u5bf8\u548c\u5176\u4ed6\u6ce8\u91ca\uff09\uff1a"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"\u7ed8\u56fe\u89c6\u56fe\u51e0\u4f55\u5c3a\u5bf8\u53c2\u6570",src:i(3095).Z,width:"644",height:"306"}),"{ width=350 }"),(0,t.kt)("p",null,"\u6240\u6709\u7ed8\u56fe\u89c6\u56fe\u90fd\u6709\u4e00\u4e2a\u504f\u79fb\u8fb9\u754c\u3002\u4e3a\u4e86\u5f97\u5230\u51e0\u4f55\u4f53\u7684\u5b9e\u9645\u503c\uff0c\u9700\u8981\u4ece\u89c6\u56fe\u5c3a\u5bf8\u4e2d\u51cf\u53bb\u8fd9\u4e2a\u8fb9\u754c\u503c\u3002\u8fb9\u754c\u503c\u662f\u52a8\u6001\u8ba1\u7b97\u7684\uff08\u5de5\u4f5c\u8868\u5bbd\u5ea6\u6216\u9ad8\u5ea6\u76842%\u4e2d\u8f83\u5c0f\u7684\u90a3\u4e2a\uff09\u3002\u8fd9\u4e0d\u662f\u4e00\u4e2a\u6587\u6863\u5316\u7684\u503c\uff0c\u53ef\u80fd\u4f1a\u5728\u672a\u6765\u7531SOLIDWORKS\u66f4\u6539\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5f71\u54cd\u6b64\u5b8f\u4e2d\u7684\u8ba1\u7b97\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"\u7ed8\u56fe\u89c6\u56fe\u7684\u8fb9\u754c\u504f\u79fb",src:i(70885).Z,width:"254",height:"187"})),(0,t.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,t.kt)("h3",{id:"\u8303\u56f4"},"\u8303\u56f4"),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"BASE_VIEWS_ONLY")," \u53d8\u91cf\u63a7\u5236\u662f\u5426\u5e94\u8be5\u7f29\u653e\u6240\u6709\u89c6\u56fe\u8fd8\u662f\u4ec5\u57fa\u672c\u89c6\u56fe\uff08\u5373\u6ca1\u6709\u7236\u89c6\u56fe\u7684\u89c6\u56fe\uff09\u3002\u5982\u679c\u5c06\u6b64\u9009\u9879\u8bbe\u7f6e\u4e3a ",(0,t.kt)("em",{parentName:"p"},"True"),"\uff0c\u5219\u4f1a\u5904\u7406\u6240\u6709\u89c6\u56fe\uff0c\u5e76\u4e14\u6d3e\u751f\u89c6\u56fe\u5c06\u4e0e\u539f\u59cb\u6e90\u89c6\u56fe\u65ad\u5f00\u8fde\u63a5\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Const BASE_VIEWS_ONLY As Boolean = False '\u5904\u7406\u6240\u6709\u89c6\u56fe\n")),(0,t.kt)("h3",{id:"\u7f29\u653e\u6620\u5c04"},"\u7f29\u653e\u6620\u5c04"),(0,t.kt)("p",null,"\u5728\u5b8f\u7684\u5f00\u5934\u914d\u7f6e\u7f29\u653e\u6620\u5c04\u3002\u6839\u636e\u9700\u8981\u6307\u5b9a\u591a\u4e2a\u6620\u5c04\u6761\u76ee\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vba"},'Dim scaleMap As Variant\nscaleMap = Array("0-0.1;*;1:1", "0.1-0.2;0.05-0.1;1:2", "\u53e6\u4e00\u4e2a\u6761\u76ee", ..., "\u6700\u540e\u4e00\u4e2a\u6761\u76ee")\n')),(0,t.kt)("p",null,"\u6bcf\u4e2a\u6761\u76ee\u5fc5\u987b\u9075\u5faa\u9884\u5b9a\u4e49\u7684\u683c\u5f0f\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'"[\u6700\u5c0f\u5bbd\u5ea6]-[\u6700\u5927\u5bbd\u5ea6];[\u6700\u5c0f\u9ad8\u5ea6]-[\u6700\u5927\u9ad8\u5ea6];[\u7f29\u653e\u5206\u5b50]:[\u7f29\u653e\u5206\u6bcd]"\n')),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u7684\u6240\u6709\u503c\u90fd\u4ee5\u7c73\u4e3a\u5355\u4f4d"),(0,t.kt)("li",{parentName:"ul"},"\u4f7f\u7528 * \u8868\u793a\u5141\u8bb8\u4efb\u4f55\u5bbd\u5ea6\u6216\u9ad8\u5ea6")),(0,t.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vba"},'Array("0-0.1;*;1:1", "0.1-0.2;0.05-0.1;1:2")\n')),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u6240\u6709\u5bbd\u5ea6\u6700\u591a\u4e3a100\u6beb\u7c73\u4e14\u4efb\u4f55\u9ad8\u5ea6\u7684\u7ed8\u56fe\u89c6\u56fe\u5c06\u8bbe\u7f6e\u4e3a1:1\u6bd4\u4f8b"),(0,t.kt)("li",{parentName:"ul"},"\u6240\u6709\u5bbd\u5ea6\u5728100\u6beb\u7c73\u5230200\u6beb\u7c73\u4e4b\u95f4\u4e14\u9ad8\u5ea6\u572850\u6beb\u7c73\u5230100\u6beb\u7c73\u4e4b\u95f4\u7684\u7ed8\u56fe\u89c6\u56fe\u5c06\u8bbe\u7f6e\u4e3a1:2\u6bd4\u4f8b")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Const BASE_VIEWS_ONLY As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n    \n    Dim scaleMap As Variant\n    scaleMap = Array("0-0.1;*;1:1", "0.1-0.2;0.05-0.1;1:2")\n    \n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n\ntry:\n    \n    On Error GoTo catch\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        RescaleViews swDraw, swDraw.GetCurrentSheet(), scaleMap\n        \n    Else\n        Err.Raise vbError, "", "\u8bf7\u6253\u5f00\u7ed8\u56fe\u6587\u6863"\n    End If\n    \n    GoTo finally\n    \ncatch:\n    MsgBox Err.Description & " (" & Err.Number & ")", vbCritical\nfinally:\n\nEnd Sub\n\nSub RescaleViews(draw As SldWorks.DrawingDoc, sheet As SldWorks.sheet, scaleMap As Variant)\n    \n    Dim vViews As Variant\n    vViews = GetSheetViews(draw, sheet)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vViews)\n        \n        Dim swView As SldWorks.view\n        Set swView = vViews(i)\n        \n        Dim width As Double\n        Dim height As Double\n        GetViewGeometrySize swView, width, height\n        \n        Debug.Print swView.Name & " : " & width & " x " & height\n        \n        Dim j As Integer\n        \n        For j = 0 To UBound(scaleMap)\n            \n            Dim minWidth As Double\n            Dim maxWidth As Double\n            Dim minHeight As Double\n            Dim maxHeight As Double\n            Dim viewScale As Variant\n            \n            ExtractParameters CStr(scaleMap(j)), minWidth, maxWidth, minHeight, maxHeight, viewScale\n            \n            If width >= minWidth And width <= maxWidth And height >= minHeight And height <= maxHeight Then\n                Debug.Print swView.Name & " \u5339\u914d " & CStr(scaleMap(j))\n                If Not BASE_VIEWS_ONLY Or swView.GetBaseView() Is Nothing Then\n                    Debug.Print "\u5c06 " & swView.Name & " \u7684\u6bd4\u4f8b\u8bbe\u7f6e\u4e3a " & viewScale(0) & ":" & viewScale(1)\n                    swView.ScaleRatio = viewScale\n                Else\n                    Debug.Print "\u8df3\u8fc7 " & swView.Name & " \u89c6\u56fe\uff0c\u56e0\u4e3a\u5b83\u4e0d\u662f\u57fa\u672c\u89c6\u56fe"\n                End If\n                \n            Else\n                Debug.Print swView.Name & " \u4e0d\u5339\u914d " & CStr(scaleMap(j))\n            End If\n            \n        Next\n        \n    Next\n    \n    draw.EditRebuild\n    \nEnd Sub\n\nFunction GetSheetViews(draw As SldWorks.DrawingDoc, sheet As SldWorks.sheet) As Variant\n\n    Dim vSheets As Variant\n    vSheets = draw.GetViews()\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vSheets)\n    \n        Dim vViews As Variant\n        vViews = vSheets(i)\n        \n        Dim swSheetView As SldWorks.view\n        Set swSheetView = vViews(0)\n        \n        If UCase(swSheetView.Name) = UCase(sheet.GetName()) Then\n            \n            If UBound(vViews) > 0 Then\n                \n                Dim swViews() As SldWorks.view\n                \n                ReDim swViews(UBound(vViews) - 1)\n                \n                Dim j As Integer\n                \n                For j = 1 To UBound(vViews)\n                    Set swViews(j - 1) = vViews(j)\n                Next\n                \n                GetSheetViews = swViews\n                Exit Function\n                \n            End If\n            \n        End If\n        \n    Next\n    \nEnd Function\n\nSub GetViewGeometrySize(view As SldWorks.view, ByRef width As Double, ByRef height As Double)\n    \n    Dim borderWidth As Double\n    borderWidth = GetViewBorderWidth(view)\n    \n    Dim vOutline As Variant\n    vOutline = view.GetOutline()\n    \n    Dim viewScale As Double\n    viewScale = view.ScaleRatio(1) / view.ScaleRatio(0)\n    \n    width = (vOutline(2) - vOutline(0) - borderWidth * 2) * viewScale\n    height = (vOutline(3) - vOutline(1) - borderWidth * 2) * viewScale\n    \nEnd Sub\n\nFunction GetViewBorderWidth(view As SldWorks.view) As Double\n    \n    Const VIEW_BORDER_RATIO = 0.02\n    \n    Dim width As Double\n    Dim height As Double\n    \n    view.sheet.GetSize width, height\n    \n    Dim minSize As Double\n    \n    If width < height Then\n        minSize = width\n    Else\n        minSize = height\n    End If\n    \n    GetViewBorderWidth = minSize * VIEW_BORDER_RATIO\n    \nEnd Function\n\nSub ExtractParameters(params As String, ByRef minWidth As Double, ByRef maxWidth As Double, ByRef minHeight As Double, ByRef maxHeight As Double, ByRef viewScale As Variant)\n\n    Dim vParamsData As Variant\n    vParamsData = Split(params, ";")\n    \n    ExtractSizeBounds CStr(vParamsData(0)), minWidth, maxWidth\n    ExtractSizeBounds CStr(vParamsData(1)), minHeight, maxHeight\n    \n    Dim scaleData As Variant\n    scaleData = Split(vParamsData(2), ":")\n    \n    Dim dViewScale(1) As Double\n    dViewScale(0) = CDbl(Trim(scaleData(0)))\n    dViewScale(1) = CDbl(Trim(scaleData(1)))\n    \n    viewScale = dViewScale\n    \nEnd Sub\n\nSub ExtractSizeBounds(boundParam As String, ByRef min As Double, ByRef max As Double)\n    \n    If Trim(boundParam) = "*" Then\n        min = 0\n        max = 1000000\n    Else\n        Dim minMax As Variant\n        minMax = Split(boundParam, "-")\n        min = CDbl(Trim(minMax(0)))\n        max = CDbl(Trim(minMax(1)))\n    End If\n    \nEnd Sub\n')))}c.isMDXComponent=!0},70885:(e,n,i)=>{i.d(n,{Z:()=>A});const A="data:image/png;base64,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"},3095:(e,n,i)=>{i.d(n,{Z:()=>A});const A="data:image/png;base64,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"},68812:(e,n,i)=>{i.d(n,{Z:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAACcCAMAAABlapZ1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAIuwi/b29glRfPewYzgAALBjAEW7121tbSE6TtbWuAAAY3eLmcL29jUANWMAYziLi6NmRYXA9zgAYwAAMTdUankxANfIqIBtgbCw1Aw9W2ZFRdnZ2bW1tRGSzcvP1Ys4ONujZjiL1N/g4JOdp3m418bHx+zKhEVFRUVFZpJtbcCFRQotRdHU2aPA92aj21cAMdbZ3QA1NW2AgUVmo6Ssstzd3dPT04vU97DUi14AAABjsIVFRfb1sKPb9wA4i62trTg4i87OzrS4vgsLC0WFwItjiz5qhJeirAx3rwAAAGMAOCWg0WOw99SLOGeAk39/f0VFhdfazG1tgSuNtvfUi7i9w4TJ69fXmeLj4wVJc+zs6llvgo6Pj6SAbYs4AHBwcKTI3g0lN7rZ6pqbm6OkpB4/WJvd7ZJtgWp+jUNabYiIiLK2vMbIy7u7u/fAhR6ZzXu82xYuQa3Z8FsAM9vbnA9Oc7fAxxQrPClGXC2k0QAAOKbg7w18tL7BxZGSknCDkRAQEGB1hgVPfM3Q1WMAACJBWhqa0URectfaujtYbwgmOxN8siQ9UHqKl1twgpCeqR9BWjhVbA15rwAAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///9lf30UAAACVdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////AP////////////////////////////////////////////////////////////////////////////////////////////////8Aibv7RQAAAAlwSFlzAAAOwwAADsMBx2+oZAAABeFJREFUeF7tnQtXG0UUgONIkaqxWp+1xNrGYtBqi9pEbQMYQetpQXyAxjFClfiCoMXWByqhyqO1Wl9/2Htn7mYniGYHdvfsZu53YOfuncmSLzOZLpec04xwFC0+6ha+uIOwuGuwuGuwuGuwuGuwuGsY4uXDhULhIJ1oymffyFLYbfjiyrurxaemKEB88aOFcTB9ms40XSU+BVAImOKDw9iWzxYK4/IeNftKXCXUkFSD3oa5sdTBjzQL4+o4OIziKiycpFGpRUkb5sbmhrM8OHy08JzU508WDqI4vgXKh71kWiFl39wQV+rjoAsR7XRaHEm/eHtriH8BwjC7ao/D2YZXoTXjXYghrmb2pJpr0EeU+E7/zHUBxuaGgrCHYYubGy56FNcdXSzuGCzuGizuGizuGizuGizuGiwenHxuvlabz+XpNKXYi+fqFSmErNRzlEgn1uL1JbAuFsF9qU6pVGIrngPvxuLMzGIDzAPNefn88xQFw3b8LrEUz9eFfHn1yJH1pxqrMPv4PtdP9L+f7o49/2OXTPFcRTSU91BxvSQqOOVuiM9Luai081VZkXIeUr54TyZzR1bI2cz39NRVonz+ln2ZY7Ax6LxqpvdlMmf8IUL0ZmAIxJkJdSXjGlFhKd4U+RnQrkqgX8KpIV4+oP7c1HtGTL+kIp0ob4xke0CO8rrRD/KGiMmRrDwkX8kKGIhd/jUiw1K8JqqrQzDbEnb1vIRTU9wLhHxUafkJ6oW80bQP0UCkv7xrRIb9Ul/NK20hqmLbUi9v4ErdgAVL61QnsAdkdN5rPFU9hObd6zKvERX2m1uppL3hqDY3OTsBx+l71bLWs+VDCT/f3iCtvp6RLJ0YvZFhKV6FxV3RN6tgX6tiMKl2J7VX4YugIwISaIHflNeNoUaPkYdQfFIvhrZrRIOluLqBgfs2tdq9GxjYknGPxgUKuzc2oADohCdOeWom9a5Oj4FdPDOBh7tphbSuERm24mJ0SS10eLJL6uPPacVaXDSaA7DW8wNNuGlNMfbiMNX1Wq3uTXxa2YV4d8DirsHirsHirrELcS4vUyKdWIu7XV4+dy54eXkPGL+8ho6lOJaXF9f+/OX+j9eClpfbsFNJkDiWl99/PSs+evW33wOWl9tIrfi8lI/9lRXih5WHvzvdsbysqsbY4/W+oMvKkMaSBNadJyCNpSsg3kqzpXhT5D/7/KvsJ7dd+HX5Zqfysq4akzjVmnEwpHGUqjvD64C1Z+yKt9JsKV4T1Z++fXtl5cLWjx+uWZeXWycQHFBarXNztAYi/RVNpdl+qd/c//WXW1uPvLf/j07lZX+S/V4MMA1BqwO+1fBYK8272Nw2T9z692s/n9gsdiov6xCPrah18u8Z9wfEUmm2FMfy8unN5Rs3lje/6VxehhDer7PHsGoMp1RrFr30Hidp3y3OSrOluLqBWV+7du3OYufyMu7IsHphh8aqse5VZWVvV28TpwFxVZptxbm8zOXllLIL8e6AxV2DxV2DxV2DxV2DxQPSnEshWCHbjqX4QjOFt+iyuUCRgaX4XCp/NZFzFBjYilObMljch8WDweLpIgxx/Pxu2ghN/PG73lEXNKMkE5J4+cVnSNePEsfVjGYMT0Kb8fJl0PUPSSQ/5nuHI14Erly+ZB4SSQPNx/pVHIp4P3Dl1CVs2qLEMTAG3hq3xMGcAtfEfUITf/fUcfOQeEIRL5VufwC2jfuOgzNFpaQTknj6YHEDFg+Gu+JVWUkdsrp38QX9Qad0Ua3tvcoqFqhUnSp28LYW7xpY3DVY3DVY3DVYPBj99L8Cxkg//eiQsRQfjf2OtRrRh8NtxcVQzMCPjAQWDwaLxwaLhwyLB8MTf/ChizowomhIlPj1J54lXT+KioTN+PVPQdc/RAiLh8xexLdF0cDiIcPiwXD8Pf7mB319fW9dBGeK1FOMhoTNeHyweMiweDBYPDZYPGRYPBjOlped/YNC98DirsHirsHirsHiruG4ON0duoIv7iCOigvxDySI9OOI1+D7AAAAAElFTkSuQmCC"}}]);