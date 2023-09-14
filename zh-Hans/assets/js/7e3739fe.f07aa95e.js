"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[66018],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=s.createContext({}),c=function(e){var n=s.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return s.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||i;return t?s.createElement(m,o(o({ref:n},l),{},{components:t})):s.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[u]="string"==typeof e?e:r,o[1]=a;for(var c=2;c<i;c++)o[c]=t[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},20462:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(87462),r=(t(67294),t(3905));const i={title:"Change system page setup options in SOLIDWORKS using API in macro",caption:"Change System Page Setup Options",description:"Changing system level (application) page setup options (printer paper size, scale, etc.) for printing using SOLIDWORKS API",image:"page-setup.png",labels:["print","page setup","preferences"]},o=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/system-page-setup/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/system-page-setup/index",title:"Change system page setup options in SOLIDWORKS using API in macro",description:"Changing system level (application) page setup options (printer paper size, scale, etc.) for printing using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/system-page-setup/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/system-page-setup",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/system-page-setup/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/system-page-setup/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/system-page-setup/index.md",tags:[],version:"current",frontMatter:{title:"Change system page setup options in SOLIDWORKS using API in macro",caption:"Change System Page Setup Options",description:"Changing system level (application) page setup options (printer paper size, scale, etc.) for printing using SOLIDWORKS API",image:"page-setup.png",labels:["print","page setup","preferences"]},sidebar:"tutorialSidebar",previous:{title:"Fixing the error when running legacy SWBasic (*.swb) SOLIDWORKS macro",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/swb-macro-error/"},next:{title:"Add Tag to selected note using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tag-selected-note/"}},p={},c=[],l={toc:c},u="wrapper";function g(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,s.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Page Setup",src:t(70402).Z,width:"509",height:"518"}),"{ width=350 }"),(0,r.kt)("p",null,"This example demonstrates how to change the system page setup option (paper size and scale) and set the current document options to use the system settings using SOLIDWORKS API."),(0,r.kt)("p",null,"This example also demonstrates how to retrieve the system specific paper size integer for ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPageSetup~PrinterPaperSize.html"},"IPageSetup::PrinterPaperSize")," by specifying the paper name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Private Declare PtrSafe Function DeviceCapabilities Lib "winspool.drv" Alias "DeviceCapabilitiesA" (ByVal lpDeviceName As String, ByVal lpPort As String, ByVal iIndex As Long, ByRef lpOutput As Any, ByRef lpDevMode As Any) As Long\n\nConst PAPER_NAME As String = "A4"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swAppPageSetup As SldWorks.PageSetup\n        Set swAppPageSetup = swModel.Extension.AppPageSetup\n        \n        swAppPageSetup.PrinterPaperSize = GetPaper(swModel.Printer, PAPER_NAME)\n        swAppPageSetup.ScaleToFit = False\n        swAppPageSetup.Scale2 = 50\n        \n        swModel.Extension.UsePageSetup = swPageSetupInUse_e.swPageSetupInUse_Application\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nPublic Function GetPaper(printerName As String, paperName As String) As Integer\n    \n    Const DC_PAPERNAMES As Integer = &H10\n    Const DC_PAPERS As Integer = &H2\n    \n    Dim papersCount As Integer\n    papersCount = DeviceCapabilities(printerName, "", DC_PAPERS, ByVal vbNullString, 0)\n    \n    If papersCount > 0 Then\n    \n        Dim papersCodes() As Integer\n        ReDim papersCodes(papersCount - 1)\n        \n        DeviceCapabilities printerName, "", DC_PAPERS, papersCodes(0), 0\n        \n        Dim papersNames As String\n        papersNames = String$(64 * papersCount, 0)\n        DeviceCapabilities printerName, "", DC_PAPERNAMES, ByVal papersNames, 0\n      \n        Dim i As Integer\n        \n        For i = 0 To papersCount\n            If LCase(ParsePaperName(papersNames, 64 * i + 1)) = LCase(paperName) Then\n                GetPaper = papersCodes(i)\n            End If\n        Next\n    Else\n        Err.Raise vbError, "", "No sizes available for the specified printer"\n    End If\n    \nEnd Function\n\nFunction ParsePaperName(papersNames As String, offset As Integer) As String\n\n    Dim paperName As String\n    \n    paperName = Mid(papersNames, offset, 64)\n    \n    Dim nullCharIndex As Integer\n    nullCharIndex = InStr(paperName, vbNullChar)\n    \n    If nullCharIndex <> 0 Then\n        paperName = Left$(paperName, nullCharIndex - 1)\n    End If\n     \n    ParsePaperName = paperName\n    \nEnd Function\n')))}g.isMDXComponent=!0},70402:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/page-setup-07ba795e5f55ac51f3258b7f6530ac5c.png"}}]);