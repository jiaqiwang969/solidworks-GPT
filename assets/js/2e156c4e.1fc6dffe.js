"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[31655],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||s;return t?o.createElement(m,r(r({ref:n},p),{},{components:t})):o.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:i,r[1]=a;for(var c=2;c<s;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},68006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(87462),i=(t(67294),t(3905));const s={title:"Macro to create spline CSV file using SOLIDWORKS API",caption:"Create Spline From CSV",description:"VBA macro to create spline in the active sketch from the points loaded from the CSV file using SOLIDWORKS API",image:"spline-pmpage.png",labels:["csv","sketch","spline"]},r=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/csv-create-spline/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/csv-create-spline/index",title:"Macro to create spline CSV file using SOLIDWORKS API",description:"VBA macro to create spline in the active sketch from the points loaded from the CSV file using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/csv-create-spline/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/csv-create-spline",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/csv-create-spline/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/csv-create-spline/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/csv-create-spline/index.md",tags:[],version:"current",frontMatter:{title:"Macro to create spline CSV file using SOLIDWORKS API",caption:"Create Spline From CSV",description:"VBA macro to create spline in the active sketch from the points loaded from the CSV file using SOLIDWORKS API",image:"spline-pmpage.png",labels:["csv","sketch","spline"]},sidebar:"tutorialSidebar",previous:{title:"Convert arc to circle by merging end points using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/convert-arc-to-circle/"},next:{title:"Import points cloud from CSV file into sketch via SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/csv-import-points/"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:n,...s}=e;return(0,i.kt)(d,(0,o.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Spline in the sketch with Property Manager Page",src:t(2526).Z,width:"744",height:"449"})),(0,i.kt)("p",null,"This VBA macro demonstrates how to create spline in the active sketch by loading points data from the CSV file. CSV file should contain 3 columns for the coordinates of spline nodes in meters. ",(0,i.kt)("a",{target:"_blank",href:t(47868).Z},"Download sample spline data")),(0,i.kt)("p",null,"Specify full path to this file in the ",(0,i.kt)("strong",{parentName:"p"},"CSV_FILE_PATH")," constant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Const CSV_FILE_PATH As String = "D:\\spline-data.csv"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    Dim swSkMgr As SldWorks.SketchManager\n    Set swSkMgr = swModel.SketchManager\n    \n    If Not swSkMgr.ActiveSketch Is Nothing Then\n        \n        Dim vPts As Variant\n        vPts = ReadCsvFile(CSV_FILE_PATH, True)\n        \n        DrawSpline swSkMgr, vPts\n        \n    Else\n        Err.Raise vbError, "", "Please activate sketch"\n    End If\n    \nEnd Sub\n\nSub DrawSpline(skMgr As SldWorks.SketchManager, vPoints As Variant)\n    \n    skMgr.AddToDB = True\n    \n    Dim dSplinePts() As Double\n    ReDim dSplinePts((UBound(vPoints) + 1) * 3 - 1)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vPoints)\n        \n        Dim vPt As Variant\n        vPt = vPoints(i)\n        \n        Dim x As Double\n        Dim y As Double\n        Dim z As Double\n        \n        If UBound(vPt) >= 0 Then\n            x = vPt(0)\n        End If\n        \n        If UBound(vPt) >= 1 Then\n            y = vPt(1)\n        End If\n        \n        If UBound(vPt) >= 2 Then\n            z = vPt(2)\n        End If\n        \n        dSplinePts(i * 3) = x\n        dSplinePts(i * 3 + 1) = y\n        dSplinePts(i * 3 + 2) = z\n        \n    Next\n    \n    Dim swSkSegment As SldWorks.SketchSegment\n    \n    Set swSkSegment = skMgr.CreateSpline2(dSplinePts, False)\n    \n    If swSkSegment Is Nothing Then\n        Err.Raise vbError, "", "Failed to create spline"\n    End If\n    \n    skMgr.AddToDB = False\n    \nEnd Sub\n\nFunction ReadCsvFile(filePath As String, firstRowHeader As Boolean) As Variant\n    \n    \'rows x columns\n    Dim vTable() As Variant\n    \n    Dim fileName As String\n    Dim tableRow As String\n    Dim fileNo As Integer\n\n    fileNo = FreeFile\n    \n    Open filePath For Input As #fileNo\n    \n    Dim isFirstRow As Boolean\n        \n    isFirstRow = True\n    isTableInit = False\n    \n    Do While Not EOF(fileNo)\n        \n        Line Input #fileNo, tableRow\n            \n        If Not isFirstRow Or Not firstRowHeader Then\n            \n            Dim vCells As Variant\n            vCells = Split(tableRow, ",")\n            \n            Dim i As Integer\n            \n            Dim dCells() As Double\n            ReDim dCells(UBound(vCells))\n            \n            For i = 0 To UBound(vCells)\n                dCells(i) = CDbl(vCells(i))\n            Next\n                    \n            If (Not vTable) = -1 Then\n                ReDim vTable(0)\n            Else\n                ReDim Preserve vTable(UBound(vTable) + 1)\n            End If\n                    \n            vTable(UBound(vTable)) = dCells\n            \n        End If\n        \n        If isFirstRow Then\n            isFirstRow = False\n        End If\n    \n    Loop\n    \n    Close #fileNo\n    \n    ReadCsvFile = vTable\n    \nEnd Function\n')))}u.isMDXComponent=!0},47868:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/files/spline-data-10e7cf9347a1a6449b1b6745fb4e35a7.csv"},2526:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/spline-pmpage-09844ce34a910038ee235bc398bb4d25.png"}}]);