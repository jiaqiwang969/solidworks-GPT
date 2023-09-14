"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[66239],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>A});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,A=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return r?t.createElement(A,i(i({ref:n},d),{},{components:r})):t.createElement(A,i({ref:n},d))}));function A(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},746:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=r(87462),o=(r(67294),r(3905));const s={layout:"sw-tool",title:"Macro to force rebuild SOLIDWORKS document",caption:"Rebuild Model",description:"VBA macro to force rebuild, hide all types and show isometric view of SOLIDWORKS model",image:"force-rebuild.svg",labels:["api","upgrade","performance","rebuild"],group:"Performance"},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/rebuild/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/rebuild/index",title:"Macro to force rebuild SOLIDWORKS document",description:"VBA macro to force rebuild, hide all types and show isometric view of SOLIDWORKS model",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/rebuild/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/rebuild",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/rebuild/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/rebuild/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/rebuild/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to force rebuild SOLIDWORKS document",caption:"Rebuild Model",description:"VBA macro to force rebuild, hide all types and show isometric view of SOLIDWORKS model",image:"force-rebuild.svg",labels:["api","upgrade","performance","rebuild"],group:"Performance"},sidebar:"tutorialSidebar",previous:{title:"Macro to print SOLIDWORKS documents",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/print/"},next:{title:"Set BOM Quantity (Unit Of Measure) property using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/set-bom-quantity-unit-of-measure-property/"}},l={},c=[],d={toc:c},u="wrapper";function p(e){let{components:n,...s}=e;return(0,o.kt)(u,(0,t.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This VBA macro allows to perform operations usually required to upgrade the model to new version of SOLIDWORKS. It allows to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Force rebuild the model (ctrl+Q)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rebuild all configurations",src:r(62225).Z,width:"341",height:"233"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set model to isometric orientation")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Zoom to fit",src:r(77337).Z,width:"346",height:"206"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hide all view types")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hide all types",src:r(88855).Z,width:"482",height:"262"})),(0,o.kt)("p",null,"Configure the macro actions by setting the values of corresponding constants"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Const DEFAULT_VIEWZOOMTOFIT As Boolean = True\nConst DEFAULT_REBUILD As Boolean = True\nConst DEFAULT_HIDE_ALL_TYPES As Boolean = True\n")),(0,o.kt)("p",null,"This macro also supports ",(0,o.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/macro-arguments/"},"macro arguments"),": ",(0,o.kt)("strong",{parentName:"p"},"-zoomtofit"),", ",(0,o.kt)("strong",{parentName:"p"},"-rebuild"),", ",(0,o.kt)("strong",{parentName:"p"},"-hidealltypes")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Macro arguments specified in Batch+",src:r(19898).Z,width:"249",height:"101"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const DEFAULT_VIEWZOOMTOFIT As Boolean = True\nConst DEFAULT_REBUILD As Boolean = True\nConst DEFAULT_HIDE_ALL_TYPES As Boolean = True\n\nConst ARG_VIEWZOOMTOFIT As String = "-zoomtofit"\nConst ARG_REBUILD As String = "-rebuild"\nConst ARG_HIDE_ALL_TYPES As String = "-hidealltypes"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim vArgs As Variant\n        vArgs = GetArguments()\n        \n        If IsEmpty(vArgs) Then\n            Err.Raise vbError, "", "Arguments are empty"\n        End If\n        \n        If ContainsArguments(vArgs, ARG_VIEWZOOMTOFIT) Then\n            swModel.ShowNamedView2 "", swStandardViews_e.swIsometricView\n            swModel.ViewZoomtofit2\n        End If\n        \n        If ContainsArguments(vArgs, ARG_HIDE_ALL_TYPES) Then\n            swModel.SetUserPreferenceToggle swUserPreferenceToggle_e.swViewDisplayHideAllTypes, True\n        End If\n        \n        If ContainsArguments(vArgs, ARG_REBUILD) Then\n        \n            swModel.ForceRebuild3 False\n            \n            Dim isSw2017OrNewer As Boolean\n            isSw2017OrNewer = (CInt(Split(swApp.RevisionNumber(), ".")(0))) >= 25\n            \n            If isSw2017OrNewer Then\n                swModel.Extension.ForceRebuildAll\n            End If\n            \n        End If\n    \n    Else\n        Err.Raise vbError, "", "No active model"\n    End If\n    \nEnd Sub\n\nFunction GetArguments() As Variant\n    \n    Dim vArgs As Variant\n    \n    On Error GoTo catch_\n    \ntry_:\n    Dim macroRunner As Object\n    Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")\n    \n    Dim param As Object\n    Set param = macroRunner.PopParameter(swApp)\n        \n    vArgs = param.Get("Args")\n        \n    If IsEmpty(vArgs) Then\n        Err.Raise vbError, "", "No arguments specified"\n    End If\n    \n    GoTo finally_\n    \ncatch_:\n    \n    Dim sArgs() As String\n    Dim isInit As Boolean\n    isInit = False\n    \n    If DEFAULT_REBUILD Then\n        If Not isInit Then\n            ReDim sArgs(0)\n            isInit = True\n        Else\n            ReDim Preserve sArgs(UBound(sArgs) + 1)\n        End If\n        sArgs(UBound(sArgs)) = ARG_REBUILD\n    End If\n    \n    If DEFAULT_VIEWZOOMTOFIT Then\n        If Not isInit Then\n            ReDim sArgs(0)\n            isInit = True\n        Else\n            ReDim Preserve sArgs(UBound(sArgs) + 1)\n        End If\n        sArgs(UBound(sArgs)) = ARG_VIEWZOOMTOFIT\n    End If\n    \n    If DEFAULT_HIDE_ALL_TYPES Then\n        If Not isInit Then\n            ReDim sArgs(0)\n            isInit = True\n        Else\n            ReDim Preserve sArgs(UBound(sArgs) + 1)\n        End If\n        sArgs(UBound(sArgs)) = ARG_HIDE_ALL_TYPES\n    End If\n    \n    If isInit Then\n        vArgs = sArgs\n    Else\n        vArgs = Empty\n    End If\n    \nfinally_:\n\n    GetArguments = vArgs\n    \nEnd Function\n\nFunction ContainsArguments(args As Variant, arg As String) As Boolean\n\n    Dim i As Integer\n    \n    For i = 0 To UBound(args)\n        If LCase(args(i)) = LCase(arg) Then\n            ContainsArguments = True\n            Exit Function\n        End If\n    Next\n    \n    ContainsArguments = False\n    \nEnd Function\n')))}p.isMDXComponent=!0},19898:(e,n,r)=>{r.d(n,{Z:()=>t});const t="data:image/png;base64,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"},62225:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/rebuild-all-configurations-2c1728cbec4fdb12eedcebbd87a10359.png"},88855:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/view-hide-all-types-404be0509f561f4e4a83abc7d92a9a89.png"},77337:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/zoom-to-fit-348eac9df29335127ebd0cd200f3ee45.png"}}]);