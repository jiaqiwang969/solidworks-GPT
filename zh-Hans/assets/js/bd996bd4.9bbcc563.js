"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[56490],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=o.createContext({}),c=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(a.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},S=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),S=s,u=m["".concat(a,".").concat(S)]||m[S]||p[S]||i;return t?o.createElement(u,r(r({ref:n},d),{},{components:t})):o.createElement(u,r({ref:n},d))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=S;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[m]="string"==typeof e?e:s,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}S.displayName="MDXCreateElement"},1635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(87462),s=(t(67294),t(3905));const i={layout:"sw-tool",title:"Import points cloud from CSV file into sketch via SOLIDWORKS API",caption:"Import Points Cloud From CSV File Into Sketch",description:"Macro imports the points cloud from the specified CSV file into the active 2D or 3D Sketch using SOLIDWORKS API",image:"import-points.svg",labels:["csv","points cloud","sketch","import"],group:"Sketch"},r=void 0,l={unversionedId:"codestack-clone/solidworks-api/document/sketch/csv-import-points/index",id:"codestack-clone/solidworks-api/document/sketch/csv-import-points/index",title:"Import points cloud from CSV file into sketch via SOLIDWORKS API",description:"Macro imports the points cloud from the specified CSV file into the active 2D or 3D Sketch using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/document/sketch/csv-import-points/index.md",sourceDirName:"codestack-clone/solidworks-api/document/sketch/csv-import-points",slug:"/codestack-clone/solidworks-api/document/sketch/csv-import-points/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/sketch/csv-import-points/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/sketch/csv-import-points/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Import points cloud from CSV file into sketch via SOLIDWORKS API",caption:"Import Points Cloud From CSV File Into Sketch",description:"Macro imports the points cloud from the specified CSV file into the active 2D or 3D Sketch using SOLIDWORKS API",image:"import-points.svg",labels:["csv","points cloud","sketch","import"],group:"Sketch"},sidebar:"tutorialSidebar",previous:{title:"Macro to create spline CSV file using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/sketch/csv-create-spline/"},next:{title:"Macro to export selected sketch in SOLIDWORKS file to DXF/DWG file",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/sketch/export-dxf-dwg/"}},a={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Sample Files",id:"sample-files",level:2},{value:"How To Run The Macro",id:"how-to-run-the-macro",level:2}],d={toc:c},m="wrapper";function p(e){let{components:n,...i}=e;return(0,s.kt)(m,(0,o.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Points cloud in the sketch",src:t(24515).Z,width:"402",height:"284"})),(0,s.kt)("p",null,"This macro imports the points read from the specified CSV (comma separated values) file into the active sketch using SOLIDWORKS API. Both 2D and 3D Sketches are supported."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Macro has several configuration options which can be modified by changing the values of the constants at the beginning of the macro"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const USE_SYSTEM_UNITS As Boolean = True\nConst FIRST_ROW_HEADER As Boolean = True\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"FIRST_ROW_HEADER")," specifies if the if the first row of the CSV file is considered as a header and should be ignored ignored. If CSV file doesn't contain the header set the value of the constant to ",(0,s.kt)("strong",{parentName:"li"},"False"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"USE_SYSTEM_UNITS")," indicates if the coordinate values in the CSV file are in system units (meters). If this option is set to ",(0,s.kt)("strong",{parentName:"li"},"False"),", macro will use the current document units instead."),(0,s.kt)("li",{parentName:"ul"},"Macro can also import points relative to coordinate system. Pre-select the target coordinate system before running the macro otherwise the points will be inserted relative to global coordinate system")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Input CSV file can contain 3 coordinates (X, Y, Z) or 2 coordinates (X, Y)")),(0,s.kt)("h2",{id:"sample-files"},"Sample Files"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{target:"_blank",href:t(92061).Z},"Sample 2D Points Cloud CSV File")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{target:"_blank",href:t(93913).Z},"Sample 3D Points Cloud CSV File"))),(0,s.kt)("h2",{id:"how-to-run-the-macro"},"How To Run The Macro"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Open the model and create 2D or 3D sketch (or edit existing sketch)"),(0,s.kt)("li",{parentName:"ul"},"(Optional) Pre select coordinate system if points need to be imported relative to this system"),(0,s.kt)("li",{parentName:"ul"},"Run the macro. Specify the full path to CSV file in the displayed file browse dialog"),(0,s.kt)("li",{parentName:"ul"},"Click OK. Points are created in the active sketch")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const USE_SYSTEM_UNITS As Boolean = True\nConst FIRST_ROW_HEADER As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\ntry_:\n    \n    On Error GoTo catch_\n    \n    Set swApp = Application.SldWorks\n        \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swSketch As SldWorks.Sketch\n        \n        Set swSketch = swModel.SketchManager.ActiveSketch\n        \n        If Not swSketch Is Nothing Then\n            \n            Dim vPoints As Variant\n            Dim inputFile As String\n            \n            inputFile = swApp.GetOpenFileName("Specify the full path to CSV file", "", "CSV Files (*.csv)|*.csv|Text Files (*.txt)|*.txt|All Files (*.*)|*.*|", -1, "", "")\n            \n            If inputFile <> "" Then\n            \n                vPoints = ReadCsvFile(inputFile, FIRST_ROW_HEADER)\n                \n                vPoints = ConvertPointsLocations(vPoints, swModel, USE_SYSTEM_UNITS, GetSelectedCoordinateSystemTransform(swModel))\n                \n                DrawPoints swModel, vPoints\n            \n            End If\n            \n        Else\n            Err.Raise vbError, "", "Please open 2D or 3D Sketch"\n        End If\n        \n    Else\n        Err.Raise vbError, "", "Please open the model"\n    End If\n        \n    GoTo finally_\n    \ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n        \nEnd Sub\n\nFunction GetSelectedCoordinateSystemTransform(model As SldWorks.ModelDoc2) As SldWorks.mathTransform\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swSelMgr = model.SelectionManager\n    \n    If swSelMgr.GetSelectedObjectType3(1, -1) = swSelectType_e.swSelCOORDSYS Then\n        Dim swCoordSysFeat As SldWorks.Feature\n        Set swCoordSysFeat = swSelMgr.GetSelectedObject6(1, -1)\n        Set GetSelectedCoordinateSystemTransform = model.Extension.GetCoordinateSystemTransformByName(swCoordSysFeat.Name)\n    Else\n        Set GetSelectedCoordinateSystemTransform = Nothing\n    End If\n    \nEnd Function\n\nSub DrawPoints(model As SldWorks.ModelDoc2, vPoints As Variant)\n    \n    model.SketchManager.AddToDB = True\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vPoints)\n        \n        Dim swSkPt As SldWorks.SketchPoint\n        Dim vPt As Variant\n        vPt = vPoints(i)\n        \n        Dim x As Double\n        Dim y As Double\n        Dim z As Double\n        \n        x = CDbl(vPt(0))\n        y = CDbl(vPt(1))\n        z = CDbl(vPt(2))\n        \n        Set swSkPt = model.SketchManager.CreatePoint(x, y, z)\n        \n        If swSkPt Is Nothing Then\n            Err.Raise vbError, "", "Failed to create point at: " & x & "; " & y & "; " & z\n        End If\n        \n    Next\n    \n    model.SketchManager.AddToDB = False\n    \nEnd Sub\n\nFunction ConvertPointsLocations(points As Variant, model As SldWorks.ModelDoc2, useSystemUnits As Boolean, mathTransform As SldWorks.mathTransform) As Variant\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim convFact As Double\n    convFact = 1\n    \n    If Not useSystemUnits Then\n        Dim swUserUnit As SldWorks.UserUnit\n        Set swUserUnit = model.GetUserUnit(swUserUnitsType_e.swLengthUnit)\n        convFact = 1 / swUserUnit.GetConversionFactor()\n    End If\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(points)\n        \n        Dim vPt As Variant\n        vPt = points(i)\n        \n        Dim dPt(2) As Double\n        \n        If UBound(vPt) >= 0 Then\n            dPt(0) = CDbl(vPt(0)) * convFact\n        Else\n            dPt(0) = 0\n        End If\n        \n        If UBound(vPt) >= 1 Then\n            dPt(1) = CDbl(vPt(1)) * convFact\n        Else\n            dPt(1) = 0\n        End If\n        \n        If UBound(vPt) >= 2 Then\n            dPt(2) = CDbl(vPt(2)) * convFact\n        Else\n            dPt(2) = 0\n        End If\n        \n        If Not mathTransform Is Nothing Then\n            \n            Dim swMathPt As SldWorks.MathPoint\n            \n            Set swMathPt = swMathUtils.CreatePoint(dPt)\n            Set swMathPt = swMathPt.MultiplyTransform(mathTransform)\n            \n            vPt = swMathPt.ArrayData\n            \n        Else\n            vPt = dPt\n        End If\n        \n        points(i) = vPt\n        \n    Next\n    \n    ConvertPointsLocations = points\n    \nEnd Function\n\nFunction ReadCsvFile(filePath As String, firstRowHeader As Boolean) As Variant\n    \n    \'rows x columns\n    Dim vTable() As Variant\n        \n    Dim fileName As String\n    Dim tableRow As String\n    Dim fileNo As Integer\n\n    fileNo = FreeFile\n    \n    Open filePath For Input As #fileNo\n    \n    Dim isFirstRow As Boolean\n    Dim isTableInit As Boolean\n    \n    isFirstRow = True\n    isTableInit = False\n    \n    Do While Not EOF(fileNo)\n        \n        Line Input #fileNo, tableRow\n            \n        If Not isFirstRow Or Not firstRowHeader Then\n            \n            Dim vCells As Variant\n            vCells = Split(tableRow, ",")\n            \n            Dim i As Integer\n            \n            Dim dCells() As Double\n            ReDim dCells(UBound(vCells))\n            \n            For i = 0 To UBound(vCells)\n                dCells(i) = CDbl(vCells(i))\n            Next\n            \n            Dim lastRowIndex As Integer\n            \n            If Not isTableInit Then\n                lastRowIndex = 0\n                isTableInit = True\n                ReDim Preserve vTable(lastRowIndex)\n            Else\n                lastRowIndex = UBound(vTable, 1) + 1\n                ReDim Preserve vTable(lastRowIndex)\n            End If\n            \n            vTable(lastRowIndex) = dCells\n            \n        End If\n        \n        If isFirstRow Then\n            isFirstRow = False\n        End If\n    \n    Loop\n    \n    Close #fileNo\n    \n    ReadCsvFile = vTable\n    \nEnd Function\n')))}p.isMDXComponent=!0},92061:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/files/points-2d-ee54fbc4434c2825fa66d09d6d0ecad8.csv"},93913:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/files/points-3d-cf1f502b6eb3ae7abc971c2d4216c14a.csv"},24515:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZIAAAEcCAMAAADa5sJgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAN8qWtXQC8APH+8XmGAP7+/lT2VBvuG8nRyQLqAp3vnb/AwDDyMHTsdObR0QDUALPls0L2Qq60tyv6KwD/AMvgy2ThZPLU0ojriIBsBT34PbbDtgbPBh/wHwjpCADDAJulq7/Jv4lvBrbfttjm7aPuo0z2TFv1WwLaAsfvx3zzfOnY183X3ZGcM2r1ah37HQDKAPfW08fex6KttAL1AiP6IzL5MgThBBDsEK/ur+zS0dbZ1pXvlUH5QTn4OfbX04B4AoPygxHdEdr32q3jrWPvY7vtuwzxDJnxmcrrysXHxRrzGtfs1wncCVH3UUj4SBL1Etvd22H1Yau4vgAAAIzyjJDwkKeyt7jvuOnq58bPxnLzcgzgDNjs2PrY05NxB6fyp9DV0K67wbjguLjTuM7Y3rfwt6rwqiPxIxHjEbS6vdPe5J6orq+9w6Ozu4CAAAAAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///629OqIAAABxdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////8Avg3eTQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAFGdJREFUeF7tnf9/2zZ6gD0rcWr7Fp9G324nJ1F6cy03ySx3NZlcEnFLtyZ2vtiZ9okX1nG7dWvTm3fN///b3hd4SYIARQMUKMEinvMFJPQKAvAIfEEpTpeuexzDK3GOxVOyTuWVhStRh1EysLkHfaJSwF7jJkHbAr9Suc0fAkpaKun5ZLwSwiSIJDC8Egl7jZsECfN//SWVOSUttVyJir0eUM0slHiMEJXYB5SsA3joS73y5ctffxXPNUostPGrpAaNr5IFw+wtWYtZKFGHUTKwuQc5uePSaqnlO66ajZsEeSUpXonM3IP0lKjY6wHVzEKJx4hZpHePEV6Jc3glZpRcym2zvd2hoxKSBxd0BGwLx7osXnqv2bhJkKhEDuo8uPuADvGEH7d8x1WzcZOg7YuJSkCCoOTCK0FqNm4S1LnIk0kxqHPxYDtTAid0EWu5EhV7PaCazkW+TApBIOGikypJHgDcXQ0lHjO2hWUigkYwf3Q6yTb4uLh4ULEPmIRXUotyJ8wIKOFcbIMWesQEr6QWcOlSN8LcCMsg8DAAiYUeMgGUlHwLdpVLLHTipilfXu9sX3z9H/+7jlpeAlj/N3fv/ohK/vKXH3/sgJB///ruXYrHQpvFS+81GzcO2oalAHzNC5ZDttFIB7zgEoE1kmWSlu+4ajZuHgQzDyrKlDAjP8FljCK9EplGg/K/NATJnDn5EVfIT3hCD7ReiYq9HpQECX+Pa/vBT9uwQv6P77fE7F9DiccKF+AEd76wGxOFGOKV2AS2wTVvRgS8EqugE69EpuR6PzvwQy5VSefmzYQOgaRwprJ46b1m45aCih/Oczo3/3Dz5n06QSPVTrwSwlZQ4SssBqyRP36VOQEjv/99pROvhLAW1Llb/HIXjDz+4ft/Iido5KuvKp0snhIVez3QCpJ+4+T+zcff//A9OeFGmBN6WGXx0rtroBIEnaRGvJK5gheu1Ilg5LILl6dBciePH2sYWUAlJdf7OZM5YT4uM7KA6b1m400Gdf7AnOgZ8UpSGg36Z1wnmkZQifAFZl7CUeFct4Sjwjkv1DipTAOFeiyKcZ+kczoQ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"}}]);