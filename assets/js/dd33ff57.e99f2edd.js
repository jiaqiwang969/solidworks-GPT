"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[64455],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>p});var s=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var w=s.createContext({}),l=function(e){var n=s.useContext(w),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return s.createElement(w.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},A=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,w=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=l(t),A=i,p=c["".concat(w,".").concat(A)]||c[A]||d[A]||r;return t?s.createElement(p,o(o({ref:n},m),{},{components:t})):s.createElement(p,o({ref:n},m))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=A;var a={};for(var w in n)hasOwnProperty.call(n,w)&&(a[w]=n[w]);a.originalType=e,a[c]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<r;l++)o[l]=t[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}A.displayName="MDXCreateElement"},14965:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>w,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(87462),i=(t(67294),t(3905));const r={layout:"sw-tool",title:"Export flat pattern view in the drawing using VBA macro",caption:"Export Flat Patterns",description:"VBA macro to export flat pattern views in the drawing active sheet to DXF or DWG or other format preserving the bend notes, annotations etc. using SOLIDWORKS API",image:"flat-pattern-view.png",labels:["dxf","dwg","export","flat pattern"],group:"Drawing"},o=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-sheet-metal-views/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-sheet-metal-views/index",title:"Export flat pattern view in the drawing using VBA macro",description:"VBA macro to export flat pattern views in the drawing active sheet to DXF or DWG or other format preserving the bend notes, annotations etc. using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-sheet-metal-views/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-sheet-metal-views",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-sheet-metal-views/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-sheet-metal-views/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-sheet-metal-views/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Export flat pattern view in the drawing using VBA macro",caption:"Export Flat Patterns",description:"VBA macro to export flat pattern views in the drawing active sheet to DXF or DWG or other format preserving the bend notes, annotations etc. using SOLIDWORKS API",image:"flat-pattern-view.png",labels:["dxf","dwg","export","flat pattern"],group:"Drawing"},sidebar:"tutorialSidebar",previous:{title:"Export dimensions information from SOLIDWORKS drawing to CSV file",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-dimensions/"},next:{title:"Find and select specific edge in the drawing view using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/find-specific-edge-in-drawing-view/"}},w={},l=[{value:"Algorithm",id:"algorithm",level:2}],m={toc:l},c="wrapper";function d(e){let{components:n,...r}=e;return(0,i.kt)(c,(0,s.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Flat pattern exported to DXF",src:t(50674).Z,width:"253",height:"617"}),"{ width=350 }"),(0,i.kt)("p",null,"This VBA macro exports all flat pattern views from the active sheet in the drawing to the specified format (e.g. DXF or DWG) using SOLIDWORKS API. Macro exports the file to the same folder as original drawing and names files after the drawing view name."),(0,i.kt)("p",null,"This macro can be used in conjunction with ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/drawing/rename-sheet-metal-views/"},"Rename flat pattern views with cut-list names")," macro  if it is required to name exported files after the cut list name."),(0,i.kt)("p",null,"Specify the output file extension at the beginning of the macro:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Const OUT_EXT As String = ".dxf"\n')),(0,i.kt)("h2",{id:"algorithm"},"Algorithm"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Traverse all drawing view of the current sheet of the active drawing"),(0,i.kt)("li",{parentName:"ul"},"Find all drawing views of flat pattern"),(0,i.kt)("li",{parentName:"ul"},"Create new temp drawing and copies the view"),(0,i.kt)("li",{parentName:"ul"},"Remove all dimensions"),(0,i.kt)("li",{parentName:"ul"},"Remove all tables"),(0,i.kt)("li",{parentName:"ul"},"Set view and sheet scale to 1:1"),(0,i.kt)("li",{parentName:"ul"},"Fit sheet size to view"),(0,i.kt)("li",{parentName:"ul"},"Export to the specified file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Const OUT_EXT As String = ".dxf"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \ntry:\n    \n    On Error GoTo catch\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        ExportFlatPatternViews swDraw, swDraw.GetCurrentSheet\n    Else\n        Err.Raise vbError, "", "Please open drawing document"\n    End If\n    \n    GoTo finally\n    \ncatch:\n    MsgBox Err.Description & " (" & Err.Number & ")", vbCritical\nfinally:\n    \nEnd Sub\n\nSub ExportFlatPatternViews(draw As SldWorks.DrawingDoc, sheet As SldWorks.sheet)\n    \n    Dim vViews As Variant\n    \n    vViews = sheet.GetViews()\n    \n    If Not IsEmpty(vViews) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vViews)\n            Dim swView As SldWorks.view\n            Set swView = vViews(i)\n            \n            If swView.IsFlatPatternView() Then\n                ExportFlatPatternView draw, swView\n            End If\n        Next\n        \n    End If\n    \nEnd Sub\n\nSub ExportFlatPatternView(model As SldWorks.ModelDoc2, view As SldWorks.view)\n    \n    Dim fileName As String\n    fileName = view.Name & OUT_EXT\n    \n    Dim saveDir As String\n    saveDir = model.GetPathName()\n    \n    If saveDir = "" Then\n        Err.Raise vbError, "", "Only saved drawings are supported"\n    End If\n    \n    saveDir = Left(saveDir, InStrRev(saveDir, "\\"))\n        \n    Dim swViews(0) As SldWorks.view\n    Set swViews(0) = view\n    \n    If model.Extension.MultiSelect2(swViews, False, Nothing) = 1 Then\n        \n        model.EditCopy\n        \n        Dim swViewModel As SldWorks.ModelDoc2\n        Set swViewModel = PasteViewInNewDocument()\n        \n        Dim errs As Long\n        Dim warns As Long\n        \n        Dim expRes As Boolean\n        expRes = swViewModel.Extension.SaveAs(saveDir & fileName, swSaveAsVersion_e.swSaveAsCurrentVersion, swSaveAsOptions_e.swSaveAsOptions_Silent, Nothing, errs, warns)\n        \n        swApp.CloseDoc swViewModel.GetTitle\n        \n        If False = expRes Then\n            Err.Raise vbError, "", "Failed to export " & view.Name & ". Error code: " & errs\n        End If\n        \n    Else\n        Err.Raise vbError, "", "Failed to select " & view.Name\n    End If\n    \nEnd Sub\n\nFunction PasteViewInNewDocument(Optional dummy As String = "") As SldWorks.ModelDoc2\n    \n    Dim drawTemplate As String\n    drawTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplateDrawing)\n    \n    If drawTemplate <> "" Then\n        \n        Dim swDraw As SldWorks.ModelDoc2\n        \n        Set swDraw = swApp.NewDocument(drawTemplate, swDwgPaperSizes_e.swDwgPapersUserDefined, 0.1, 0.1)\n        \n        If swDraw Is Nothing Then\n            Err.Raise vbError, "", "Failed to create new drawing document"\n        End If\ntry:\n        On Error GoTo catch\n        swDraw.Paste\n        \n        Dim swView As SldWorks.view\n        Dim swSheet As SldWorks.sheet\n        Set swSheet = swDraw.GetCurrentSheet()\n        Set swView = swSheet.GetViews()(0)\n        \n        Dim ratio(1) As Double\n        ratio(0) = 1: ratio(1) = 1\n        swView.ScaleRatio = ratio\n        \n        swSheet.SetScale 1, 1, False, False\n        \n        Dim vTables As Variant\n        vTables = swView.GetTableAnnotations()\n        \n        swDraw.ForceRebuild3 True\n        \n        RemoveDimensions swDraw, swView\n        RemoveTables swDraw, swView\n        \n        FitSheetToView swSheet, swView\n            \n        Set PasteViewInNewDocument = swDraw\n            \n        GoTo finally\ncatch:\n    swApp.CloseDoc swDraw.GetTitle\n    Err.Raise Err.Number, Err.Source, Err.Description\nfinally:\n    \n    Else\n        Err.Raise vbError, "", "Default drawing template is not specified"\n    End If\n    \nEnd Function\n\nSub RemoveDimensions(model As SldWorks.ModelDoc2, view As SldWorks.view)\n    \n    Dim vDispDims As Variant\n    vDispDims = view.GetDisplayDimensions\n    \n    If Not IsEmpty(vDispDims) Then\n    \n        Dim swAnns() As SldWorks.Annotation\n        ReDim swAnns(UBound(vDispDims))\n        Dim i As Integer\n        \n        For i = 0 To UBound(vDispDims)\n            Dim swDispDim As SldWorks.DisplayDimension\n            Set swDispDim = vDispDims(i)\n            Set swAnns(i) = swDispDim.GetAnnotation\n        Next\n        \n        If model.Extension.MultiSelect2(vDispDims, False, Nothing) = UBound(vDispDims) + 1 Then\n            model.Extension.DeleteSelection2 swDeleteSelectionOptions_e.swDelete_Absorbed\n        Else\n            Err.Raise vbError, "", "Failed to select dimensions for deletion"\n        End If\n    \n    End If\n    \nEnd Sub\n\nSub RemoveTables(model As SldWorks.ModelDoc2, view As SldWorks.view)\n\n    Dim vSheets As Variant\n    \n    vSheets = model.GetViews()\n\n    Dim vViews As Variant\n    vViews = vSheets(0)\n    \n    Dim swSheetView As SldWorks.view\n    Set swSheetView = vViews(0)\n    \n    Dim vTableAnns As Variant\n    vTableAnns = swSheetView.GetTableAnnotations\n    \n    If Not IsEmpty(vTableAnns) Then\n    \n        If model.Extension.MultiSelect2(vTableAnns, False, Nothing) = UBound(vTableAnns) + 1 Then\n            model.Extension.DeleteSelection2 swDeleteSelectionOptions_e.swDelete_Absorbed\n        Else\n            Err.Raise vbError, "", "Failed to select dimensions for deletion"\n        End If\n    \n    End If\n    \nEnd Sub\n\nSub FitSheetToView(sheet As SldWorks.sheet, view As SldWorks.view)\n\n    Dim vViewOutline As Variant\n    vViewOutline = view.GetOutline\n\n    sheet.SetSize swDwgPaperSizes_e.swDwgPapersUserDefined, CDbl(vViewOutline(2) - vViewOutline(0)), CDbl(vViewOutline(3) - vViewOutline(1))\n    \n    Dim vPos As Variant\n    vPos = view.Position\n    \n    vViewOutline = view.GetOutline\n    \n    vPos(0) = vPos(0) - vViewOutline(0)\n    vPos(1) = vPos(1) - vViewOutline(1)\n    \n    view.Position = vPos\n    \nEnd Sub\n')))}d.isMDXComponent=!0},50674:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAAJpCAMAAABRg8SyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAFxdXdLS0js7OJ2dnYiWqqWvvuzs7JGcq52ouLG5xnJ6g4uZrJiktY6cr6CptbKyqZagrv7+/tra2oGHkauyvKGsu8LCwqeuuZShsmlqaqu0woeIh1VWVm11ffb29qWlpaexwO3t4oR7ccvLy3ZqapGesOHh4YKCgrW1taysrJKSkn2FiXRqdK60voaNlXtxamFhYXBwcHp7e3Fxe3Z0cYiGfYR7e4h/dgAAAACZAACZMwCZZgCZmQCZzACZ/wDMAADMMwDMZgDMmQDMzADM/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNmZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///3KAbW8AAAA6dFJOU////////////////////////////////////////////////////////////////////////////wA3wP8KAAAACXBIWXMAAA7DAAAOwwHHb6hkAAANlElEQVR4Xu2cDXfbthWGFdWbtnYfGd1MW6dWXpZNVuJtbTpn+/+/bAB4BVzwUIpg3EtcBe9zEoEg6Yv3AQHaPTn16uHx+36Bfb/0bt8zq4cPu5EfP/7gPj/98+nT378JJz59/M9u9/zxKXTm+OTuS/eH5r9P/3NV3Mndj679m/v77L7+kys0zxWDPlLLERg5sHr4jlZBYn27kMG1zNrvHm+TnYj93GK7BR5hXwLsp/Rk/+H4jl6YjnfHD6+6st8+//Qq8tPzcfuq55V/vOvZ/rttz/av1sn+7pi4o3OGEbbf7jcn9vf29aXtN+N3AsdhszWlf0f/dfaBpVK0377P9DfD0Tfr/W53GDzrcHpkPRzGZhjc9RObYdj41t0/nt1nl32pE+4rQ/mzfBj2D76924eRRlTsvbyz32X6mzF4sPdOx9HMcxz2m5DJ37GJp/2Rz3pwp8NZHtzB7I+fcXf2m2Hj7nm/Ge7pjEPDPshvD/fH4z3b+5tDeL7RfrfjT3+09xyHeODSrl3P3+c79GWRzJ4OznP0+k5+/55OOLTst9v78Orb0gXvtw46yZ7bzNiPcsNxPLFf+z8Rv0fcDaHkfjPZMfM4/b37wxfJi+2329A4pvbjox+55/Zh+TJ79uyYfZyT8WBYj7e5VT94yTF8sPbCrqS/fsWzdzf51waXf7H94zCErmNiz+Un9n4Nc3sWOdqnHTy1Dy+KoE1vgHBhOPolcZW9W/ZN7Q/D5Nn7pxk60X7c5H4hk/2R7NfjvIxvvvDKCBcO4euvsfd7fh9efRFx+5P8u/v7+/V6k9u77Mw+vd2TPXsTjtZp34/2443hMNywvtbeyx/9q6/2rff4+Hg3DO7zZ38msz+cnvzB/dR3OGRvPfdxHPy3r9E+rXEH2Y/f9keCkTf09/lOeOuNr76wAnwpd/F0+TLuO55f9U4/ze+L7LduYRJ37swZ+4P7OE5Wvvv0r6pgv+YxTo+UyTtFd5uX3bgv8dfdvgl/nbpv3E8J7vwmTMIV9uv1+NPOOkV6if1H9/I4ce/O5Cv/4Fa8ZxN+7pmufCfo7f2XujYSag3jedeecO9omrLx5eCv+9NhJoa9Wxd+FvwsXbHy53jJs6ewnmd3htu/98octskMIvzWuzFgXwTsHT93bf/98X1oHD3aJ2BP1W4N2BfRu/3TDznfvHnzbzW+fXr61uMaOiPKG3K4ltXDr37RL7DvF9j3C+z7Bfb9Avt+gX2/wL5fYN8vsO8X2PcL7PsF9v0C+36Bfb84+9/0C+z7Bfb9Avt+gX2/wL6UVWsoRz0vsKcIDaEg9cC+EIrQEApSD+wLoQgT6P9pE4aKT6Ag9cjZUysK7GegIPXAvhCKMAH24sB+BgpSD+wLoQgTYC/Ol2MfbnAfqT37s1zkzHUKUs9S9k7U30E/vfoPf+YzX/QF2YcbYhMOqXeeM5cpSD0vsh+DT6BkZ4jXQ+s/wgz4ziWodk5re4o2NgEK5vEddqKm6zsJ6li0p1YY2EdgHxoKUg/sC2ExErBXAPYR2IeGgtQD+0JYDHXmhjBi3wiD9ktMCI2BfS+E8X0/B/a9EMb3fVaWOtj3QsC+EBYjAXsFYB+BfWgoSD2wL4TFSPRtr8TcELL2vytkEe0LDCsKUo+U/RITQmOI2v+Bjq6GxUgo2Wdl7doviBH7Rhi0V5qQrCx1sO+FgH0hLEYC9grAPgL70FCQemBfCIuR6NteibkhjNg3wqD9EhNCY2DfC2F838+BfS8EVn4hLEYC9grAPgL70FCQemBfCIuRgL0CsI/YtVdibggj9o0waK80IVlZ6mDfC+Hs/1EIi9GEYUVB6qmxb4QRez4JShOSlY3DUpB6YF8Ii5GAvQKwj8A+NBSkHtgXwmIkYK/AjdgrMTeEEftGGLRXmpCsLHWw74Uwvu/nwL4XAiu/EBYjAXsFYB+BfWgoSD2wL4TFSMBeAdhH7NorMTeEEftGGLRXmpCsLHVk7f9cCIuRWNSegtQjZb8gRuwbYfDZK01IVjYOS0HqgX0hLEYC9grAPgL70FCQemBfCIuRgL0CN2KvxNwQRuwbYdBeaUKystTBvhcCK78Q2FOMhNKEZGXjsBSkHtgXwmIkYK8A7COwDw0FqQf2hbAYCdgrcCP2C2LEvhEG7ZUmJCtLHex7IbDyC4E9xUgoTUhWNg5LQeqBfSEsRgL2CsA+AvvQUJB6Vg+/paOrYTESsFcA9hG79gtixL4RBu2VJiQrSx3seyGw8guBPcVIKE1IVjYOS0HqgX0hLEYC9grAPgL70FCQerq3L4XFSCxqT0HqgX0hLEYTjNg3wqC90oRkZamDfS8EVn4hsKcYCaUJycrGYSlIPbAvhMVIwF4B2EdgHxoKUg/sC2ExErBXICsbJ318CgJI2S+IEftGGLRXmpCsLHWw74XAyi8E9hQjoTQhWdk4LAWpB/aFsBgJ2CsA+wjsQ0NB6oF9ISxGAvYK3Ij9ghixbwRWvhCwL0RN9UoM2i84IVj5QsC+EBYjAXsFYB+BfWgoSD2wL4TFSMBegRuxXxAj9rMMQ/2kXK5heOUPq9dva/VZjaxUPEdB6hG2d83rt5X6oUaql4jnKEg9wit/eH5+/fx8/vo1fK6GqP3v6ehqZu1Pz+Xt269mrxcQalwoYcSeJzwdD5eTX8PAamSl4jkKUo+0vfA7P6tFHcv2sujb/7oQFiOxqD0FqQf2hbAYCdgrAPsI7ENDQeqRsl8QI/aNwMoXAvaFqKleiUH7BScEK18I2BfCYiRgrwDsI7APDQWpB/aFsBgJ2CtwI/YLYsS+EVj5QsC+EDXVy8RBLdhP/r1Oe0LccKchbNhnxkr2sayXp445+8lCkIKV9aMZtWfLUpKsbOoY2fdL2vtjQ/YhRkLD3pGVNWrPH5Ig07KG7CfRNOwdsawfrWv703hY+ULU2Ed05M+VtWa/LCb2fT4JShMSy/plQB2Dbz0l0hBuNFv2YxiH0jxkZVPHnr2KfzZE0re27/XsU9k0ngX7EINYwt5h1N6hYe+AfcSQ/WRZqtun8Tq098MZtXdHGvZZWcv26ViQyRCnqejT/tQxYj+GWYYkD3spXmwfYiSUpiIbIg5LQeqRslciG8KWfSMM2i84IX3u+zQsBakH9oWwGAnYKwD7iIr9HwthMRKL2lOQemBfCIuRgL0Chu0bAXshsPILYTHUMWzfCIP2C04I9r0QsC+ExUjAXgHYR2AfGgpSD+wLYTESp2P2L04vJvtXKwZ17Nq7pvo3yvIaWal4joLUU2M/Q0gu+Btl5zBsL/U7VS+NYXflf+a3wV4Dr5GViucoSD1S9ieG4avq156vcTqkNhCHpSD1CK98R6275zMDUJB6pOwlnK/E7r6XJisbh6Ug9cC+EPYQEtlDkiMrC3sH7IWAfSEsRgL2CsA+Ysu+EbAXAiu/EBZDHcP2jTBov+CEYN8L0bs9HVwPi5GAvQKwj8A+NBSkHtgXwmIkYK+AYftGGLRfcEKw8oVYPfzpl4WwGOrM21OQemrsG2HQfokJsfXsubGSfVYW9qGhIPXAvhAWIwF7BWAfgX1oKEg9sC+ExUj0Z98Ig/YLTghWvhBS9koYtm9Ep/ve1rPnxkr2WVnYh4aC1AP7QliMBOwVgH0E9qGhIPXAvhAWI9GffSMM2i84IVj5QkjZK2HYvhGd7ntbz54bK9lnZWEfGgpSD+wLYTESsFcA9hHYh4aC1AP7QliMxM3a/7UQNdUrGVYUpB4p+wUnxIg9N1ayz8rGYSlIPVL2Shi2b0Sn+97Ws+fGSvZZWdiHhoLUA/tCWIwE7BWAfQT2oaEg9cC+EBZDHcP2jTBov+CEYN8LcUv7nsC+F+KW9j2NgX0vBOwLYTESsFcA9hHYh4aC1AP7QliMRN/2Shi2b4RB+wUnRNb+L4VEVW6sZJ+VjcNSkHqk7JWYG8KIfSMM2i8xITSGwZWvZJ+VhX1oKEg9sC+ExUjAXgHYR2AfGgpSD+wLYTHUMWzfCIP2C04I9r0Qt7TvCVH7N3R0NYtoX8Cg/RITQmMYsefGSvZZWdiHhoLUA/tCWIwE7BWAfQT2oaEg9cC+EBZDHcP2jTBov+CEYN8LcUv7nsC+F+KW9j2NgX0vBOwLYTESsFcA9hHYh4aC1AP7QliMRN/2Shi2b4RB+yUmxNaz58ZK9llZu/ZKzA2BfS+E8X2flaUO9r0QsC+ExUjAXgHYR2AfGgpSD+wLYTESfdsrYdi+EQbtl5gQW8+eGyvZZ2Xt2isxN4Ss/deFLKJ9gWFFQeqRsleakKwsdYzY82iwVwD2EdiHhoLUA/tCWIwE7BWAfcSuvRKG7Rth0H6JCbH17Lmxkn1W1q69EnNDYN8LYXzfZ2Wpg30vBOwLYTESt2r/Lzq6GhYjAXsFYB+5XfthCHe4xrf+Yzidu0R2A3W+DHs6vkh2A3Vu0p6a0Ab7ePIC2Q3UMWkfnmXA9cJfYq5Lx47LXddPUKe5/QxjMmGo9oTG9nOo6J8pSkHqgX0hFGEC7MWB/QwUpB7YF0IRJsBeHNjPQEHqgX0hFGFC5/YqUPEJFKQeMfsloSD1wL4QitAQClIP7AuhCA2hIPW8wP4LAvb9Avt+gX2/wL5fYN8vsO8X2PcL7PsF9v0C+36Bfb/0bP/11/8HukjvA0/XvwcAAAAASUVORK5CYII="}}]);