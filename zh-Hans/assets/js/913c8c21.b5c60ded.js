"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[21484],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={layout:"sw-tool",caption:"Import/Export Layers",title:"Macro to import and export all layers from SOLIDWORKS drawings into a text file",description:"VBA macro imports and exports information about layers (description, color, style, thickness, visibility and will print) in the SOLIDWORKS drawings",image:"import-export-drawing-layers.svg",group:"Drawing"},o=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export-layers/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export-layers/index",title:"Macro to import and export all layers from SOLIDWORKS drawings into a text file",description:"VBA macro imports and exports information about layers (description, color, style, thickness, visibility and will print) in the SOLIDWORKS drawings",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export-layers/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export-layers",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export-layers/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export-layers/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export-layers/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",caption:"Import/Export Layers",title:"Macro to import and export all layers from SOLIDWORKS drawings into a text file",description:"VBA macro imports and exports information about layers (description, color, style, thickness, visibility and will print) in the SOLIDWORKS drawings",image:"import-export-drawing-layers.svg",group:"Drawing"},sidebar:"tutorialSidebar",previous:{title:"Setting ShadedImageQualityCoarse in user preferences of the active document using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/image-quality-coarse/"},next:{title:"Macro to import STEP files and save as SOLIDWORKS files using a sub-folder with the same name",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-step/"}},l={},p=[{value:"Format",id:"format",level:2},{value:"CAD+",id:"cad",level:2},{value:"Export",id:"export",level:2},{value:"Import",id:"import",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...i}=e;return(0,a.kt)(u,(0,r.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Layers in SOLIDWORKS drawings",src:t(23696).Z,width:"1235",height:"452"}),"{ width=600 }"),(0,a.kt)("p",null,"These macros allow to import and export the information from the SOLIDWORKS drawing layers into the text file."),(0,a.kt)("p",null,"The following information is imported and exported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name"),(0,a.kt)("li",{parentName:"ul"},"Description"),(0,a.kt)("li",{parentName:"ul"},"Visibility"),(0,a.kt)("li",{parentName:"ul"},"Will Print"),(0,a.kt)("li",{parentName:"ul"},"Color"),(0,a.kt)("li",{parentName:"ul"},"Style"),(0,a.kt)("li",{parentName:"ul"},"Thickness")),(0,a.kt)("h2",{id:"format"},"Format"),(0,a.kt)("p",null,"This macro exports all the information into the output text file in the following format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Layer: Entities\n    Description: Layer with entities\n    Color: 0 128 255\n    Printable: True\n    Style: 0\n    Visible: True\n    Thickness: 5\n\nLayer: Branding\n    Description: Layer for branding images\n    Color: 0 128 128\n    Printable: True\n    Style: 0\n    Visible: True\n    Thickness: 0\n")),(0,a.kt)("p",null,"By default file is saved or loaded in th same folder as the original file with the prefix ",(0,a.kt)("strong",{parentName:"p"},"_Layers.txt")),(0,a.kt)("h2",{id:"cad"},"CAD+"),(0,a.kt)("p",null,"This macro is compatible with ",(0,a.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/"},"Toolbar+")," and ",(0,a.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/batch/"},"Batch+")," tools so the buttons can be added to toolbar and assigned with shortcut for easier access or run in the batch mode."),(0,a.kt)("p",null,"In order to enable ",(0,a.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/configuration/arguments/"},"macro arguments")," set the ",(0,a.kt)("strong",{parentName:"p"},"ARGS")," constant to true"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},"#Const ARGS = True\n")),(0,a.kt)("p",null,"Path the path to text file to import or export as a macro argument."),(0,a.kt)("h2",{id:"export"},"Export"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'#Const ARGS = False \'True to use arguments from Toolbar+ or Batch+ instead of the constant\n\nConst TOKEN_LAYER = "Layer: "\nConst TOKEN_DESCRIPTION = "Description: "\nConst TOKEN_COLOR = "Color: "\nConst TOKEN_PRINTABLE = "Printable: "\nConst TOKEN_STYLE = "Style: "\nConst TOKEN_VISIBLE = "Visible: "\nConst TOKEN_THICKNESS = "Thickness: "\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    Dim filePath As String\n    \n    #If ARGS Then\n                \n        Dim macroRunner As Object\n        Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")\n        \n        Dim param As Object\n        Set param = macroRunner.PopParameter(swApp)\n        \n        Dim vArgs As Variant\n        vArgs = param.Get("Args")\n        \n        filePath = CStr(vArgs(0))\n        \n    #Else\n        filePath = swDraw.GetPathName\n        If filePath <> "" Then\n            filePath = Left(filePath, InStrRev(filePath, ".") - 1) & "_Layers.txt"\n        Else\n            Err.Raise vbError, "", "If output file path is not specified file must be saved"\n        End If\n    #End If\n    \n    If Not swDraw Is Nothing Then\n        ExportLayers swDraw, filePath\n    Else\n        Err.Raise vbError, "", "Open drawing"\n    End If\n    \nEnd Sub\n\nSub ExportLayers(draw As SldWorks.DrawingDoc, filePath As String)\n    \n    Dim swLayerMgr As SldWorks.LayerMgr\n    \n    Set swLayerMgr = draw.GetLayerManager\n    \n    Dim vLayers As Variant\n    vLayers = swLayerMgr.GetLayerList\n\n    Dim fileNmb As Integer\n    fileNmb = FreeFile\n    \n    Open filePath For Output As #fileNmb\n        \n    Dim i As Integer\n    \n    For i = 0 To UBound(vLayers)\n        \n        Dim layerName As String\n        layerName = CStr(vLayers(i))\n        \n        Dim swLayer As SldWorks.Layer\n        Set swLayer = swLayerMgr.GetLayer(layerName)\n        \n        Dim RGBHex As String\n        RGBHex = Right("000000" & Hex(swLayer.Color), 6)\n        \n        Print #fileNmb, TOKEN_LAYER & swLayer.Name\n        Print #fileNmb, "    " & TOKEN_DESCRIPTION & swLayer.Description\n        Print #fileNmb, "    " & TOKEN_COLOR & CInt("&H" & Mid(RGBHex, 5, 2)) & " " & CInt("&H" & Mid(RGBHex, 3, 2)) & " " & CInt("&H" & Mid(RGBHex, 1, 2))\n        Print #fileNmb, "    " & TOKEN_PRINTABLE & swLayer.Printable\n        Print #fileNmb, "    " & TOKEN_STYLE & swLayer.Style\n        Print #fileNmb, "    " & TOKEN_VISIBLE & swLayer.Visible\n        Print #fileNmb, "    " & TOKEN_THICKNESS & swLayer.Width\n        Print #fileNmb, ""\n        \n    Next\n        \n    Close #fileNmb\n    \nEnd Sub\n')),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'#Const ARGS = False \'True to use arguments from Toolbar+ or Batch+ instead of the constant\n\nConst TOKEN_LAYER = "Layer: "\nConst TOKEN_DESCRIPTION = "Description: "\nConst TOKEN_COLOR = "Color: "\nConst TOKEN_PRINTABLE = "Printable: "\nConst TOKEN_STYLE = "Style: "\nConst TOKEN_VISIBLE = "Visible: "\nConst TOKEN_THICKNESS = "Thickness: "\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    Dim filePath As String\n    \n    #If ARGS Then\n                \n        Dim macroRunner As Object\n        Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")\n        \n        Dim param As Object\n        Set param = macroRunner.PopParameter(swApp)\n        \n        Dim vArgs As Variant\n        vArgs = param.Get("Args")\n        \n        filePath = CStr(vArgs(0))\n        \n    #Else\n        filePath = swDraw.GetPathName\n        If filePath <> "" Then\n            filePath = Left(filePath, InStrRev(filePath, ".") - 1) & "_Layers.txt"\n        Else\n            Err.Raise vbError, "", "If output file path is not specified file must be saved"\n        End If\n    #End If\n    \n    If Not swDraw Is Nothing Then\n        ImportLayers swDraw, filePath\n    Else\n        Err.Raise vbError, "", "Open drawing"\n    End If\n    \nEnd Sub\n\nSub ImportLayers(draw As SldWorks.DrawingDoc, filePath As String)\n    \n    Dim swLayerMgr As SldWorks.LayerMgr\n    \n    Set swLayerMgr = draw.GetLayerManager\n    \n    Set fso = CreateObject("Scripting.FileSystemObject")\n    \n    If fso.FileExists(filePath) Then\n        \n        Dim swCurrentLayer As SldWorks.Layer\n        \n        Set file = fso.OpenTextFile(filePath)\n                \n        Do Until file.AtEndOfStream\n                \n            Dim line As String\n                \n            line = file.ReadLine\n            \n            Dim value As String\n            \n            If IsToken(line, TOKEN_LAYER, value) Then\n                \n                Set swCurrentLayer = swLayerMgr.GetLayer(value)\n                \n                If swCurrentLayer Is Nothing Then\n                    swLayerMgr.AddLayer value, "", RGB(255, 255, 255), swLineStyles_e.swLineCENTER, swLineWeights_e.swLW_CUSTOM\n                    Set swCurrentLayer = swLayerMgr.GetLayer(value)\n                End If\n                \n                If swCurrentLayer Is Nothing Then\n                    Err.Raise vbError, "", "Failed to access layer " & value\n                End If\n                \n            Else\n                \n                If swCurrentLayer Is Nothing Then\n                    Err.Raise vbError, "", "Current layer is not set"\n                End If\n                \n                If IsToken(line, TOKEN_DESCRIPTION, value) Then\n                    swCurrentLayer.Description = value\n                ElseIf IsToken(line, TOKEN_COLOR, value) Then\n                    Dim vRgb As Variant\n                    vRgb = Split(value, " ")\n                    swCurrentLayer.Color = RGB(CInt(Trim(CStr(vRgb(0)))), CInt(Trim(CStr(vRgb(1)))), CInt(Trim(CStr(vRgb(2)))))\n                ElseIf IsToken(line, TOKEN_PRINTABLE, value) Then\n                    swCurrentLayer.Printable = CBool(value)\n                ElseIf IsToken(line, TOKEN_STYLE, value) Then\n                    swCurrentLayer.Style = CInt(value)\n                ElseIf IsToken(line, TOKEN_VISIBLE, value) Then\n                    swCurrentLayer.Visible = CBool(value)\n                ElseIf IsToken(line, TOKEN_THICKNESS, value) Then\n                    swCurrentLayer.Width = CInt(value)\n                End If\n                \n            End If\n            \n        Loop\n        \n        file.Close\n        \n    Else\n        Err.Raise vbError, "", "File does not exist"\n    End If\n    \nEnd Sub\n\nFunction IsToken(txt As String, token As String, ByRef value As String) As Boolean\n    \n    txt = Trim(txt)\n    \n    If LCase(Left(txt, Len(token))) = LCase(token) Then\n        value = Trim(Right(txt, Len(txt) - Len(token)))\n        IsToken = True\n    Else\n        value = ""\n        IsToken = False\n    End If\n    \nEnd Function\n')))}m.isMDXComponent=!0},23696:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/sw-layers-17040c13c77cfb98a16db4d7dfa5a13b.png"}}]);