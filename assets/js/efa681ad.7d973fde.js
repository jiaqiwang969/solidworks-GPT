"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[59582],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,f=p["".concat(o,".").concat(d)]||p[d]||c[d]||i;return t?a.createElement(f,s(s({ref:n},m),{},{components:t})):a.createElement(f,s({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const i={layout:"sw-tool",title:"VBA macro to rename features based on type names using SOLIDWORKS API",caption:"Rename Features Based On Type Names",description:"VBA macro renames (translates) the features in the part feature tree using SOLIDWORKS API",image:"renaming-feature.svg",labels:["rename","translate","feature"],group:"Part"},s=void 0,l={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/rename-features-by-type-name/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/rename-features-by-type-name/index",title:"VBA macro to rename features based on type names using SOLIDWORKS API",description:"VBA macro renames (translates) the features in the part feature tree using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/rename-features-by-type-name/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/rename-features-by-type-name",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/rename-features-by-type-name/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/rename-features-by-type-name/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/rename-features-by-type-name/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"VBA macro to rename features based on type names using SOLIDWORKS API",caption:"Rename Features Based On Type Names",description:"VBA macro renames (translates) the features in the part feature tree using SOLIDWORKS API",image:"renaming-feature.svg",labels:["rename","translate","feature"],group:"Part"},sidebar:"tutorialSidebar",previous:{title:"Add move-copy body feature with coincident mate using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/move-copy-body-mate/"},next:{title:"SOLIDWORKS macro renames all features in model sequentially",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/rename-features-sequentially/"}},o={},u=[{value:"Configuration",id:"configuration",level:2},{value:"No Increment CSV File",id:"no-increment-csv-file",level:3},{value:"Custom Map CSV File",id:"custom-map-csv-file",level:3},{value:"Feature Types",id:"feature-types",level:2},{value:"Special Feature Types",id:"special-feature-types",level:3}],m={toc:u},p="wrapper";function c(e){let{components:n,...i}=e;return(0,r.kt)(p,(0,a.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA macro allows to rename the feature manager tree in the part document using SOLIDWORKS API based on specified rules and feature type names."),(0,r.kt)("p",null,"This macro can be used as a translator macro to rename feature tree form one language to another."),(0,r.kt)("p",null,"For example this feature tree is in Russian language:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feature tree in Russian language",src:t(40872).Z,width:"210",height:"407"}),"{ width=150 }"),(0,r.kt)("p",null,"It can be renamed to English language equivalent:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feature tree in English version",src:t(54573).Z,width:"215",height:"407"}),"{ width=150 }"),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Macro is using the data specified in 2 files which must be stored in the same folder as the macro:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const NO_INCREMENT_FILE As String = "noincrement.csv"\nConst CUSTOM_MAP_FILE As String = "custommap.csv"\n')),(0,r.kt)("p",null,"These files can be edited in Excel or any text editor (like Notepad)."),(0,r.kt)("h3",{id:"no-increment-csv-file"},"No Increment CSV File"),(0,r.kt)("p",null,"This file contains the feature type names whose names should not be increment (i.e. they present once in a tree), for example ",(0,r.kt)("em",{parentName:"p"},"Origin")," feature or ",(0,r.kt)("em",{parentName:"p"},"Documents Folder"),"."),(0,r.kt)("p",null,"This is a single column CSV file. ",(0,r.kt)("a",{target:"_blank",href:t(82637).Z},"Download")),(0,r.kt)("h3",{id:"custom-map-csv-file"},"Custom Map CSV File"),(0,r.kt)("p",null,"This file contains the special names for the feature types. By default the feature will be named after its type, but this behavior can be overridden in this file. For example type name for the ",(0,r.kt)("em",{parentName:"p"},"Sketch")," feature is ",(0,r.kt)("em",{parentName:"p"},"OriginProfileFeature"),", so by default all sketches will be renamed to ",(0,r.kt)("em",{parentName:"p"},"OriginProfileFeature1"),", ",(0,r.kt)("em",{parentName:"p"},"OriginProfileFeature2"),", ",(0,r.kt)("em",{parentName:"p"},"OriginProfileFeature3")," etc., unless the following line is added to ",(0,r.kt)("em",{parentName:"p"},"custommap.csv")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"OriginProfileFeature,Sketch\n")),(0,r.kt)("p",null,"In this case the sketches will be renamed to ",(0,r.kt)("em",{parentName:"p"},"Sketch1"),", ",(0,r.kt)("em",{parentName:"p"},"Sketch2"),", ",(0,r.kt)("em",{parentName:"p"},"Sketch3")),(0,r.kt)("p",null,"This is a 2 column CSV file"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:t(90231).Z},"Download")),(0,r.kt)("h2",{id:"feature-types"},"Feature Types"),(0,r.kt)("p",null,"Feature types are language independent identifiers of feature kind. Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/features-manager/get-feature-type-name/"},"Get Features Type Name")," VBA macro to extract type names. Use ",(0,r.kt)("em",{parentName:"p"},"Type Name 2")," unless it is equal to ",(0,r.kt)("em",{parentName:"p"},"ICE")," (in this case use ",(0,r.kt)("em",{parentName:"p"},"Type Name 1"),")"),(0,r.kt)("h3",{id:"special-feature-types"},"Special Feature Types"),(0,r.kt)("p",null,"There are several special types of feature which can be used for renaming"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"_FrontPlane"),(0,r.kt)("li",{parentName:"ul"},"_RightPlane"),(0,r.kt)("li",{parentName:"ul"},"_TopPlane")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const NO_INCREMENT_FILE As String = "noincrement.csv"\nConst CUSTOM_MAP_FILE As String = "custommap.csv"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim dicFeatsCount As Object\n        Dim collFeatsNonIncr As Collection\n        Dim dicBaseNames As Object\n        \n        Set dicFeatsCount = CreateObject("Scripting.Dictionary")\n        Set collFeatsNonIncr = New Collection\n        Set dicBaseNames = CreateObject("Scripting.Dictionary")\n        \n        Dim vTable As Variant\n        Dim i As Integer\n        \n        vTable = ReadCsvFile(swApp.GetCurrentMacroPathFolder() & "\\" & NO_INCREMENT_FILE, False)\n        \n        If Not IsEmpty(vTable) Then\n            For i = 0 To UBound(vTable)\n                collFeatsNonIncr.Add vTable(i)(0)\n            Next\n        End If\n        \n        vTable = ReadCsvFile(swApp.GetCurrentMacroPathFolder() & "\\" & CUSTOM_MAP_FILE, False)\n        \n        If Not IsEmpty(vTable) Then\n            For i = 0 To UBound(vTable)\n                dicBaseNames.Add vTable(i)(0), vTable(i)(1)\n            Next\n        End If\n        \n        Dim vFeats As Variant\n        vFeats = GetAllFeatures(swModel)\n                \n        Dim curRefPlanePos As Integer\n        curRefPlanePos = 0\n                \n        For i = 0 To UBound(vFeats)\n                \n            Dim swFeat As SldWorks.Feature\n            Set swFeat = vFeats(i)\n                \n            Dim newName As String\n            \n            Dim typeName As String\n            typeName = GetTypeName(swFeat, curRefPlanePos)\n            \n            If dicFeatsCount.exists(typeName) Then\n                dicFeatsCount.item(typeName) = dicFeatsCount.item(typeName) + 1\n            Else\n                dicFeatsCount.Add typeName, 1\n            End If\n            \n            If dicBaseNames.exists(typeName) Then\n                newName = dicBaseNames.item(typeName)\n            Else\n                newName = typeName\n            End If\n            \n            Dim isIncremented As Boolean\n            isIncremented = True\n            Dim j As Integer\n            For j = 1 To collFeatsNonIncr.Count\n                If collFeatsNonIncr(j) = typeName Then\n                    isIncremented = False\n                    Exit For\n                End If\n            Next\n            \n            If isIncremented Then\n                newName = newName & dicFeatsCount.item(typeName)\n            End If\n            \n            If typeName = "MaterialFolder" Then\n                \n                isRefGeom = True\n                \n                Dim sMatName As String\n                \n                Dim swPart As SldWorks.PartDoc\n                Set swPart = swModel\n                \n                sMatName = swPart.GetMaterialPropertyName2("", "")\n                \n                If sMatName <> "" Then\n                    newName = sMatName\n                End If\n                \n            End If\n            \n            swFeat.Name = newName\n            \n            Set swFeat = swFeat.GetNextFeature\n            \n        Next\n        \n    Else\n        Err.Raise vbError, "", "Open the model"\n    End If\n    \nEnd Sub\n\nFunction GetAllFeatures(model As SldWorks.ModelDoc2) As Variant\n\n    Dim swFeat As SldWorks.Feature\n    \n    Dim swFeats() As SldWorks.Feature\n    \n    Set swFeat = model.FirstFeature\n    \n    While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2() <> "Reference" Then\n        \n            ProcessFeature swFeat, swFeats\n            \n            If swFeat.GetTypeName2 <> "HistoryFolder" Then\n                \n                TraverseSubFeatures swFeat, swFeats\n            \n            End If\n        \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \n    GetAllFeatures = swFeats\n    \nEnd Function\n\nSub TraverseSubFeatures(parentFeat As SldWorks.Feature, feats() As SldWorks.Feature)\n    \n    Dim swChildFeat As SldWorks.Feature\n    Set swChildFeat = parentFeat.GetFirstSubFeature\n    \n    While Not swChildFeat Is Nothing\n        ProcessFeature swChildFeat, feats\n        Set swChildFeat = swChildFeat.GetNextSubFeature()\n    Wend\n    \nEnd Sub\n\nSub ProcessFeature(feat As SldWorks.Feature, feats() As SldWorks.Feature)\n    \n    If Not Contains(feats, feat) Then\n        If (Not feats) = -1 Then\n            ReDim feats(0)\n        Else\n            ReDim Preserve feats(UBound(feats) + 1)\n        End If\n        \n        Set feats(UBound(feats)) = feat\n    End If\n    \nEnd Sub\n\nFunction Contains(arr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(arr)\n        If arr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\nFunction GetTypeName(feat As SldWorks.Feature, ByRef curRefPlanePos As Integer) As String\n\n    Dim typeName As String\n    \n    typeName = feat.GetTypeName2()\n    \n    If typeName = "RefPlane" Then\n    \n        Select Case curRefPlanePos\n            Case 0\n                typeName = "_FrontPlane"\n            Case 1\n                typeName = "_TopPlane"\n            Case 2\n                typeName = "_RightPlane"\n        End Select\n        \n        curRefPlanePos = curRefPlanePos + 1\n        \n    ElseIf typeName = "ICE" Then\n    \n        typeName = feat.GetTypeName()\n        \n    End If\n    \n    GetTypeName = typeName\n    \nEnd Function\n\nFunction ReadCsvFile(filePath As String, firstRowHeader As Boolean) As Variant\n    \n    \'rows x columns\n    Dim vTable() As Variant\n        \n    Dim fileName As String\n    Dim tableRow As String\n    \n    Set fso = CreateObject("Scripting.FileSystemObject")\n    \n    If fso.FileExists(filePath) Then\n    \n        Set file = fso.OpenTextFile(filePath)\n        \n        Dim isFirstRow As Boolean\n        Dim isTableInit As Boolean\n        \n        isFirstRow = True\n        isTableInit = False\n        \n        Do Until file.AtEndOfStream\n            \n            tableRow = file.ReadLine\n            \n            If Not isFirstRow Or Not firstRowHeader Then\n                \n                Dim vCells As Variant\n                vCells = Split(tableRow, ",")\n                \n                Dim lastRowIndex As Integer\n                \n                If Not isTableInit Then\n                    lastRowIndex = 0\n                    isTableInit = True\n                    ReDim Preserve vTable(lastRowIndex)\n                Else\n                    lastRowIndex = UBound(vTable, 1) + 1\n                    ReDim Preserve vTable(lastRowIndex)\n                End If\n                \n                vTable(lastRowIndex) = vCells\n                \n            End If\n            \n            If isFirstRow Then\n                isFirstRow = False\n            End If\n            \n        Loop\n        \n        file.Close\n        \n        If isTableInit Then\n            ReadCsvFile = vTable\n        Else\n            ReadCsvFile = Empty\n        End If\n        \n    Else\n        ReadCsvFile = Empty\n    End If\n    \nEnd Function\n')))}c.isMDXComponent=!0},90231:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/custommap-24a46e99b1918d16a6b01a26f984d662.csv"},82637:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/noincrement-cd5769a6a431eee1ffcf2eeb64cceca3.csv"},54573:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAAGXCAMAAAAXjDVfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAANSwYwA4i4s4APb39mOwsAAAODg4izgAOGxsbIuLOJSqtiMjI4vU1ABjsDiL1DgAAC5OX7BjAIuwiwA2VDiLsGOw92mJmmMAOCRgfZrG3ApLaTE5PQAAYzgAY4SQlzhjsLCLOGW63FCbuhQUFLjDyPTOC1lZWWMAAPewi9SLY7CLi2NjsIs4OLfGzotji12w0kRcaS83OhVPbNSLOKqqqoJgDTg4Y1qpyQZAXTp0kpmZmVSQrkVtgsPQ1ouw94KCgvewYyRsil+fvWMAY2qoxS9CS3q41WyVqk1NTaq6wzqEor6aB6rBzVV5jbBjY3qpvtvc2ydVb26y0LGda4vU9/fgmCxtkCoqKoa503p7fGyvzc3NzUqIppazwUyUs1mXtYs4Yzlxj5SUlLDelVx+kKuzuKGhoRsbG1ubuSBYdmeMoYuLY1eWtGiryT1nfURERCphfmuiv1SjwzFriQM6Vrq6umNiYkJ7mc/Q0HO41hJGYhNLaZe7zTk5OUmEomaoxi9cdE+NqnrB33/I5WWduW+NnWOkwnC10xxVc2+syZrP5FSSsHd3dy97oHJycixlg3a82sPDw4zR7HOaqz54ljpOV4yMjEtmdFBQUHa00TVwjjIyMrKysmSDk56yvXKvzQ5KZk2KqFNlbmOZs3mrxbHCyilce7D29ixrh2F4hLakddLb31yRqxVbeY3J4S95l33E4gY7WUV/nb7L0XWrxitqiwAAAFCCnThUZWaXsEpwhSJoho+Pj018lpvU63efvYZnFxtOajx7mSVde6O2wJustMHN1AlDYTZieXi+3ISou2qctS50mBRIZY25zElrfGOw1ECKqEWFoq7J1TN2kwk+WxladyhjgfrUDFx8jkBidmq31n2bq0BRY0FxjWWHmAxBXWecwC5TZqXZ7SZwjoTN6b7P1ylXcHSRoWKuziRXc3uvyfTQDMfT2RdJZKOzulinxzB/pTBohZetuU6evyBeeaa7xTJedhdQbpC70C1wk1GGoYdoGWyjwAAAAB/Wu1oAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD//////////////////////////////////////////////////////////////////////////////////////////////wDSZQBsAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAX2klEQVR4Xu2dDZhcV1nHQ+YWqNQmxmtKW1MRIl1AsMrGhm4Ku12gtBZlqBlCs6G1W9ymmjjRNGnTmoQUuinummRrrdvOglSk0aRIW+BRahQpSqxQUBRRUYtWalCoWMEi4uP7vud9zz33Y+6583Hn3pO9/yc79+vM5PzmfMw5/3nvmSXeyamKyy1VXG4phWuihZrgI8eUwtWaq9frcy0+ckxpXIBVrx+gUkMt8HknlMY1EZaU3PAS1DI+imvFqsPeCrqMKeFApE7ijnEyJwVcO3mr1ZqNiMGGT4eHxpCZt7GlvCMihBomGVupzoA0V5JiL9GbDK4oWGuWd0QmF+RabUiJXMOJsO2UI1cETLj+50q1jXCNYWlATXvmem8F1LfTvcbyJUswc5h9+GsMSUkFFyC5pKj9eQ2fGn6J/inEFQYTriv/8xfVTpir8ez1VCTIR2/2iyGXWIjMRdwkfQEbpaSoIQw8LfQS/ZO9vD79jl9eRzv1CNdz18M/2KmtDDKFOzEuFF3AJ+LbQVzw1zjncPwl+iN7+5o5+oZPvR6o6lGuZ68fw45xyRLJFHZ/iVzGBXw7FBfU0vhL9E0GF2+1FNdfftJ74lv/i1gRLsiIzjpmqjEED7jDXFgwpNCFGJf5En1UwBWT4rrvU99604c//MEYF3YLOuvEdQ7kEFsLc+kOM7iAJxDE4Aq9RB9l43riI/Dw3wd/JsrVWI6P9AH7QyqzmMPGcoOLygk+v4ILUN0aQ0KtuEIv0UfZuO57C1bBf9z2AwYXNgjOBXbPkEmvBp00duLPMLjwLLUrfeF74AS9HQZX6CX6JwvXn73pagD6+3vvvfdGzeWEbOWF9U90knAt8Dhey6UBfQqX06q43FLF5ZYWIVfls5VQ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"},40872:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAGXCAMAAADxpf4bAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAANSwYwA4i4s4APb39mOwsDg4iwAAODgAOIuLOHJycqO1vi9CSziL1ABjsDgAACMjI5azwVSQrrBjAIuwiwA2VG+NnQpLaWMAOGOw9zqEomNjOLCLOHOaq6XZ7QAAY1+fvfewiydVbzgAYxQUFGMAAERcaYvU1PTPC4s4ODhjsLCLiy83OtSLY2SDky1vkmW63JSqti5OX4tji5mZmc3NzarBzdSLOChjgYJgDYuw92MAY0+cvAZAXTE5PU18llqpyWF4hPewY3KvzYKCgkmEomM4AISQl8/Q0E1NTYvU976aBxVPbLBjYzlxj7DooFlZWbKyssPDw67J1V2w0vfknKqqqj1nfSoqKmOZszBohWqoxTiLsFyRq4uLYyReezg4Y7Gdaz54loa503WhvtPb4HrB302KqJSUlJzI3qGhoRsbGwY7WVmXtXp7fGyvzXC102NjsIs4Y7q6ulSjw0RERDk5OcPP1WNiYkyUsyJohlubuRJGYhNLaTJedmxsbGiryVeWtHO41maoxpnF3H/I5WOkwjiLi9vd23a82nWrxhxVc0tmdFSSsGeMoXd3dy97oDZieaa7xTVwjkpwhSBYdjpOV4zR7EJ7mXa00VBQUEqIpoyMjDIyMm6y0LfGzgA4Y0+NqrD29ildew5KZmWduWyjwCxrhzp0kgM6VklrfLakdVV5jXmdvBVbeY25zDFriY3J4ZvU6y95l33E4kV/nXi+3GyVqkBidmmJmjhUZYSou77L0WaXsFCEn7HCyi9cdCxlg4ZnGDx7mauzuI+PjxtOaipifpustAAAAAlDYWq31nmrxS50mBRIZUVtgmuiv77P12qctcbS2Xqpvp6yvWKuziRsilNlbkWFoprP5GecwHq41Vx9j6q6w32bqzN2k0CKqGWHmAk+WxladyVhfylXcLjDyEBRY0FxjStrjJe7zQxBXS5TZiZwjoTN6XSRoW+sySRXc/rUDE2ewHuvyVKcuhdJZGOw1FinxzB/pZetuSBeeRdQbpC70AAAAFTTAJQAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD//////////////////////////////////////////////////////////////////////wBNavFHAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAaKUlEQVR4Xu2dDZgd1VnH090pUGoSmu0F1iJsS6JEbWllt1tLq7guCmkFsnIjpaUoNbAuH4nGuwTDRz7a9aa4rgoIbLhUoFUo2kYLKNoPU0zxoRaktMUqoFI/sVrqF1RbH9//e95z5sydmTNz7525O5Od//PkzpkzMzfnN+fjzvnvOzMrvENOywlprAWNyVqZFIvUmmo2m1MtWSuT4pGIqNk8kusK2ij5xVc80lhQur7GVyitkvXiSSNtl6VRa6FNwjSuWIZKgNTO1FqQhFYJkdqYNNL/XaWWEUhDK6kVDmBlmD4GkXPCnZSqr8M+tO3wDV792A2eN0HZ9dWy70psw776oPq6bNuxhRRk0khX/c+/qEQE0goqHpNQ6cZRKs5RyXEqP6EYpNfSkve1kXjPQcqRb81ESbX00Q/9yhpONCOQkKwfsQGlqx/xbuRsR0Wsf9UqVTve4LBBgiZoq43EB9XXgU19ayZK6kvzm7/wuTcSUDMKCaVDmal0gysnkPPiemprhx23yptQ4+IwF5iRMFQCifMVkjoot1qSpZFC+vHPe4+f/EkQuZGomTHSMG3mD10xqsDUANehIQZrSQ7yBhVjVtJIISmkCz538snPPffxGCQkUfah7TQQKKT6iWefeiftg/bIwrAwS0gnoqICSPogVKR8ayZyIz3+Cfr4tQO/HIO0grrDOioijwoKiUq6SpUY1XQK7wtsINZXB5DMQfSvf0gXvAJt7p/v+sdopHdRk8HqEBVVI03Qued90GlQfGwiPIz3LwkgyUE4oH9If/TcWcTy13fdddcZBskSl654ctcSGpxW+ZE2yhW4UfhSvGxI5VWFVAZVSGXQckKqTK8CKR6JLxmWhelVfMUjiddlpJlwhR26bh5f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"}}]);