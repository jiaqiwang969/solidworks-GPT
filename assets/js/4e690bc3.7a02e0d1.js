"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[68869],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=o.createContext({}),l=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=s,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return t?o.createElement(f,r(r({ref:n},c),{},{components:t})):o.createElement(f,r({ref:n},c))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=m;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a[p]="string"==typeof e?e:s,r[1]=a;for(var l=2;l<i;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(87462),s=(t(67294),t(3905));const i={layout:"sw-tool",caption:"Save Bodies To Parts",title:"Macro to save bodies into individual SOLIDWORKS part documents",description:"VBA macro to save all bodies (or selected bodies) in the SOLIDWORKS part document to individual files",image:"insert-into-new-part-pmpage.png",group:"Import/Export"},r=void 0,a={unversionedId:"codestack-clone/solidworks-api/geometry/insert-bodies-to-part/index",id:"codestack-clone/solidworks-api/geometry/insert-bodies-to-part/index",title:"Macro to save bodies into individual SOLIDWORKS part documents",description:"VBA macro to save all bodies (or selected bodies) in the SOLIDWORKS part document to individual files",source:"@site/docs/codestack-clone/solidworks-api/geometry/insert-bodies-to-part/index.md",sourceDirName:"codestack-clone/solidworks-api/geometry/insert-bodies-to-part",slug:"/codestack-clone/solidworks-api/geometry/insert-bodies-to-part/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/geometry/insert-bodies-to-part/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/geometry/insert-bodies-to-part/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",caption:"Save Bodies To Parts",title:"Macro to save bodies into individual SOLIDWORKS part documents",description:"VBA macro to save all bodies (or selected bodies) in the SOLIDWORKS part document to individual files",image:"insert-into-new-part-pmpage.png",group:"Import/Export"},sidebar:"tutorialSidebar",previous:{title:"Get parameters of face at centroid using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/geometry/get-face-center-parameters/"},next:{title:"Offset planar curve (wire body) using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/geometry/offset-planar-wire-body/"}},d={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Notes",id:"notes",level:2}],c={toc:l},p="wrapper";function u(e){let{components:n,...i}=e;return(0,s.kt)(p,(0,o.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Insert Into New Part Property Manager Page",src:t(53732).Z,width:"368",height:"553"}),"{ width=250 }"),(0,s.kt)("p",null,"This macro saves all selected bodies bodies (or all bodies if none selected) from the active part document into individual part documents."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Specify the option to handle the transfer of custom properties by modifying the ",(0,s.kt)("strong",{parentName:"p"},"CUT_LIST_PRPS_TRANSFER")," constant"),(0,s.kt)("p",null,"Specify the output directory in the ",(0,s.kt)("strong",{parentName:"p"},"OUT_DIR"),". If this variable is empty then bodies will be saved in the same directory as source part document."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const CUT_LIST_PRPS_TRANSFER As Long = swCutListTransferOptions_e.swCutListTransferOptions_CutListProperties 'move properties to cut-lists\nConst OUT_DIR As String = \"D:\\Parts\" 'Export bodies to the Parts directory\n")),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Bodies remain linked to the original part"),(0,s.kt)("li",{parentName:"ul"},"Output files will be named after the bodies"),(0,s.kt)("li",{parentName:"ul"},"Special symbols which cannot be used in the file name (e.g. ?, ","*",", : etc) will be replaced with _"),(0,s.kt)("li",{parentName:"ul"},"Macro will not create an output folder if it does not exist and will fail")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const CUT_LIST_PRPS_TRANSFER As Long = swCutListTransferOptions_e.swCutListTransferOptions_FileProperties\nConst OUT_DIR As String = ""\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    Dim vBodies As Variant\n    vBodies = GetSelectedBodies(swPart.SelectionManager)\n    \n    If IsEmpty(vBodies) Then\n        vBodies = swPart.GetBodies2(swBodyType_e.swSolidBody, True)\n    End If\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vBodies)\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = vBodies(i)\n        \n        If False <> swBody.Select2(False, Nothing) Then\n            \n            Dim outFilePath As String\n            outFilePath = GetOutFilePath(swPart, swBody, OUT_DIR)\n            \n            Dim errs As Long\n            Dim warns As Long\n            \n            If False <> swPart.SaveToFile3(outFilePath, swSaveAsOptions_e.swSaveAsOptions_Silent, CUT_LIST_PRPS_TRANSFER, False, "", errs, warns) Then\n                swApp.CloseDoc outFilePath\n            Else\n                Err.Raise vbError, "", "Failed to save body " & swBody.Name & " to file " & outFilePath & ". Error code: " & errs\n            End If\n            \n        Else\n            Err.Raise vbError, "", "Failed to select body " & swBody.Name\n        End If\n    Next\n    \nEnd Sub\n\nFunction GetSelectedBodies(selMgr As SldWorks.SelectionMgr) As Variant\n\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swBodies() As SldWorks.Body2\n\n    Dim i As Integer\n    \n    For i = 1 To selMgr.GetSelectedObjectCount2(-1)\n                \n        Dim swBody As SldWorks.Body2\n    \n        Set swBody = GetSelectedObjectBody(selMgr, i)\n        \n        If Not swBody Is Nothing Then\n            \n            If Not isInit Then\n                ReDim swBodies(0)\n                Set swBodies(0) = swBody\n                isInit = True\n            Else\n                If Not Contains(swBodies, swBody) Then\n                    ReDim Preserve swBodies(UBound(swBodies) + 1)\n                    Set swBodies(UBound(swBodies)) = swBody\n                End If\n            End If\n                        \n        End If\n    \n    Next\n\n    If isInit Then\n        GetSelectedBodies = swBodies\n    Else\n        GetSelectedBodies = Empty\n    End If\n\nEnd Function\n\nFunction GetSelectedObjectBody(selMgr As SldWorks.SelectionMgr, index As Integer) As SldWorks.Body2\n    \n    Dim swBody As SldWorks.Body2\n    \n    Dim selObj As Object\n    Set selObj = selMgr.GetSelectedObject6(index, -1)\n    \n    If Not selObj Is Nothing Then\n        If TypeOf selObj Is SldWorks.Body2 Then\n            Set swBody = selObj\n        ElseIf TypeOf selObj Is SldWorks.Face2 Then\n            Dim swFace As SldWorks.Face2\n            Set swFace = selObj\n            Set swBody = swFace.GetBody\n        ElseIf TypeOf selObj Is SldWorks.Edge Then\n            Dim swEdge As SldWorks.Edge\n            Set swEdge = selObj\n            Set swBody = swEdge.GetBody\n        ElseIf TypeOf selObj Is SldWorks.Vertex Then\n            Dim swVertex As SldWorks.Vertex\n            Set swVertex = selObj\n            Set swBody = swVertex.GetBody\n        End If\n    End If\n\n    Set GetSelectedObjectBody = swBody\n    \nEnd Function\n\nFunction Contains(vArr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vArr)\n        If vArr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\nFunction GetOutFilePath(model As SldWorks.ModelDoc2, body As SldWorks.Body2, outDir As String) As String\n    \n    If outDir = "" Then\n        outDir = model.GetPathName()\n        If outDir = "" Then\n            Err.Raise vbError, "", "Output directory cannot be composed as file was never saved"\n        End If\n        \n        outDir = Left(outDir, InStrRev(outDir, "\\") - 1)\n    End If\n    \n    If Right(outDir, 1) = "\\" Then\n        outDir = Left(outDir, Len(outDir) - 1)\n    End If\n    \n    GetOutFilePath = ReplaceInvalidPathSymbols(outDir & "\\" & body.Name & ".sldprt")\n    \nEnd Function\n\nFunction ReplaceInvalidPathSymbols(path As String) As String\n    \n    Const REPLACE_SYMB As String = "_"\n    \n    Dim res As String\n    res = Right(path, Len(path) - Len("X:\\"))\n    \n    Dim drive As String\n    drive = Left(path, Len("X:\\"))\n    \n    Dim invalidSymbols As Variant\n    invalidSymbols = Array("/", ":", "*", "?", """", "<", ">", "|")\n    \n    Dim i As Integer\n    For i = 0 To UBound(invalidSymbols)\n        Dim invalidSymb As String\n        invalidSymb = CStr(invalidSymbols(i))\n        res = Replace(res, invalidSymb, REPLACE_SYMB)\n    Next\n    \n    ReplaceInvalidPathSymbols = drive + res\n    \nEnd Function\n')))}u.isMDXComponent=!0},53732:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/insert-into-new-part-pmpage-25824f733c6279244c4db075540f322c.png"}}]);