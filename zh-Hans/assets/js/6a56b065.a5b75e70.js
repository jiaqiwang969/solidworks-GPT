"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[72111],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=s.createContext({}),l=function(e){var n=s.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return s.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,y=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return t?s.createElement(y,i(i({ref:n},c),{},{components:t})):s.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<o;l++)i[l]=t[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(87462),r=(t(67294),t(3905));const o={layout:"sw-tool",image:"insert-into-new-part-pmpage.png",group:"\u5bfc\u5165/\u5bfc\u51fa"},i=void 0,a={unversionedId:"codestack/solidworks-api/geometry/insert-bodies-to-part/index",id:"codestack/solidworks-api/geometry/insert-bodies-to-part/index",title:"index",description:"\u63d2\u5165\u5230\u65b0\u96f6\u4ef6\u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/geometry/insert-bodies-to-part/index.md",sourceDirName:"codestack/solidworks-api/geometry/insert-bodies-to-part",slug:"/codestack/solidworks-api/geometry/insert-bodies-to-part/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/insert-bodies-to-part/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/insert-bodies-to-part/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",image:"insert-into-new-part-pmpage.png",group:"\u5bfc\u5165/\u5bfc\u51fa"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u9762\u7684\u8d28\u5fc3\u53c2\u6570",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/get-face-center-parameters/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u504f\u79fb\u5e73\u9762\u66f2\u7ebf\uff08\u7ebf\u4f53\uff09",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/offset-planar-wire-body/"}},d={},l=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],c={toc:l},p="wrapper";function u(e){let{components:n,...o}=e;return(0,r.kt)(p,(0,s.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u63d2\u5165\u5230\u65b0\u96f6\u4ef6\u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762",src:t(41590).Z,width:"368",height:"553"}),"{ width=250 }"),(0,r.kt)("p",null,"\u6b64\u5b8f\u5c06\u6d3b\u52a8\u96f6\u4ef6\u6587\u6863\u4e2d\u7684\u6240\u6709\u9009\u5b9a\u5b9e\u4f53\uff08\u5982\u679c\u6ca1\u6709\u9009\u5b9a\u5b9e\u4f53\uff0c\u5219\u4e3a\u6240\u6709\u5b9e\u4f53\uff09\u4fdd\u5b58\u5230\u5355\u72ec\u7684\u96f6\u4ef6\u6587\u6863\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u901a\u8fc7\u4fee\u6539",(0,r.kt)("strong",{parentName:"p"},"CUT_LIST_PRPS_TRANSFER"),"\u5e38\u91cf\u6765\u6307\u5b9a\u5904\u7406\u81ea\u5b9a\u4e49\u5c5e\u6027\u4f20\u8f93\u7684\u9009\u9879"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("strong",{parentName:"p"},"OUT_DIR"),"\u4e2d\u6307\u5b9a\u8f93\u51fa\u76ee\u5f55\u3002\u5982\u679c\u6b64\u53d8\u91cf\u4e3a\u7a7a\uff0c\u5219\u5b9e\u4f53\u5c06\u4fdd\u5b58\u5728\u4e0e\u6e90\u96f6\u4ef6\u6587\u6863\u76f8\u540c\u7684\u76ee\u5f55\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const CUT_LIST_PRPS_TRANSFER As Long = swCutListTransferOptions_e.swCutListTransferOptions_CutListProperties '\u5c06\u5c5e\u6027\u79fb\u52a8\u5230\u5207\u5272\u5217\u8868\nConst OUT_DIR As String = \"D:\\Parts\" '\u5c06\u5b9e\u4f53\u5bfc\u51fa\u5230Parts\u76ee\u5f55\n")),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u4f53\u4ecd\u4e0e\u539f\u59cb\u96f6\u4ef6\u4fdd\u6301\u94fe\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u6587\u4ef6\u5c06\u4ee5\u5b9e\u4f53\u7684\u540d\u79f0\u547d\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u540d\u4e2d\u4e0d\u80fd\u4f7f\u7528\u7684\u7279\u6b8a\u7b26\u53f7\uff08\u4f8b\u5982\uff1f\uff0c*\uff0c\uff1a\u7b49\uff09\u5c06\u88ab\u66ff\u6362\u4e3a_"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8f93\u51fa\u6587\u4ef6\u5939\u4e0d\u5b58\u5728\uff0c\u5b8f\u5c06\u4e0d\u4f1a\u521b\u5efa\u8f93\u51fa\u6587\u4ef6\u5939\u5e76\u4e14\u4f1a\u5931\u8d25")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const CUT_LIST_PRPS_TRANSFER As Long = swCutListTransferOptions_e.swCutListTransferOptions_FileProperties\nConst OUT_DIR As String = ""\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    Dim vBodies As Variant\n    vBodies = GetSelectedBodies(swPart.SelectionManager)\n    \n    If IsEmpty(vBodies) Then\n        vBodies = swPart.GetBodies2(swBodyType_e.swSolidBody, True)\n    End If\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vBodies)\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = vBodies(i)\n        \n        If False <> swBody.Select2(False, Nothing) Then\n            \n            Dim outFilePath As String\n            outFilePath = GetOutFilePath(swPart, swBody, OUT_DIR)\n            \n            Dim errs As Long\n            Dim warns As Long\n            \n            If False <> swPart.SaveToFile3(outFilePath, swSaveAsOptions_e.swSaveAsOptions_Silent, CUT_LIST_PRPS_TRANSFER, False, "", errs, warns) Then\n                swApp.CloseDoc outFilePath\n            Else\n                Err.Raise vbError, "", "\u65e0\u6cd5\u5c06\u5b9e\u4f53 " & swBody.Name & " \u4fdd\u5b58\u5230\u6587\u4ef6 " & outFilePath & "\u3002\u9519\u8bef\u4ee3\u7801: " & errs\n            End If\n            \n        Else\n            Err.Raise vbError, "", "\u65e0\u6cd5\u9009\u62e9\u5b9e\u4f53 " & swBody.Name\n        End If\n    Next\n    \nEnd Sub\n\nFunction GetSelectedBodies(selMgr As SldWorks.SelectionMgr) As Variant\n\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swBodies() As SldWorks.Body2\n\n    Dim i As Integer\n    \n    For i = 1 To selMgr.GetSelectedObjectCount2(-1)\n                \n        Dim swBody As SldWorks.Body2\n    \n        Set swBody = GetSelectedObjectBody(selMgr, i)\n        \n        If Not swBody Is Nothing Then\n            \n            If Not isInit Then\n                ReDim swBodies(0)\n                Set swBodies(0) = swBody\n                isInit = True\n            Else\n                If Not Contains(swBodies, swBody) Then\n                    ReDim Preserve swBodies(UBound(swBodies) + 1)\n                    Set swBodies(UBound(swBodies)) = swBody\n                End If\n            End If\n                        \n        End If\n    \n    Next\n\n    If isInit Then\n        GetSelectedBodies = swBodies\n    Else\n        GetSelectedBodies = Empty\n    End If\n\nEnd Function\n\nFunction GetSelectedObjectBody(selMgr As SldWorks.SelectionMgr, index As Integer) As SldWorks.Body2\n    \n    Dim swBody As SldWorks.Body2\n    \n    Dim selObj As Object\n    Set selObj = selMgr.GetSelectedObject6(index, -1)\n    \n    If Not selObj Is Nothing Then\n        If TypeOf selObj Is SldWorks.Body2 Then\n            Set swBody = selObj\n        ElseIf TypeOf selObj Is SldWorks.Face2 Then\n            Dim swFace As SldWorks.Face2\n            Set swFace = selObj\n            Set swBody = swFace.GetBody\n        ElseIf TypeOf selObj Is SldWorks.Edge Then\n            Dim swEdge As SldWorks.Edge\n            Set swEdge = selObj\n            Set swBody = swEdge.GetBody\n        ElseIf TypeOf selObj Is SldWorks.Vertex Then\n            Dim swVertex As SldWorks.Vertex\n            Set swVertex = selObj\n            Set swBody = swVertex.GetBody\n        End If\n    End If\n\n    Set GetSelectedObjectBody = swBody\n    \nEnd Function\n\nFunction Contains(vArr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vArr)\n        If vArr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\nFunction GetOutFilePath(model As SldWorks.ModelDoc2, body As SldWorks.Body2, outDir As String) As String\n    \n    If outDir = "" Then\n        outDir = model.GetPathName()\n        If outDir = "" Then\n            Err.Raise vbError, "", "\u7531\u4e8e\u6587\u4ef6\u4ece\u672a\u4fdd\u5b58\uff0c\u65e0\u6cd5\u7ec4\u6210\u8f93\u51fa\u76ee\u5f55"\n        End If\n        \n        outDir = Left(outDir, InStrRev(outDir, "\\") - 1)\n    End If\n    \n    If Right(outDir, 1) = "\\" Then\n        outDir = Left(outDir, Len(outDir) - 1)\n    End If\n    \n    GetOutFilePath = ReplaceInvalidPathSymbols(outDir & "\\" & body.Name & ".sldprt")\n    \nEnd Function\n\nFunction ReplaceInvalidPathSymbols(path As String) As String\n    \n    Const REPLACE_SYMB As String = "_"\n    \n    Dim res As String\n    res = Right(path, Len(path) - Len("X:\\"))\n    \n    Dim drive As String\n    drive = Left(path, Len("X:\\"))\n    \n    Dim invalidSymbols As Variant\n    invalidSymbols = Array("/", ":", "*", "?", """", "<", ">", "|")\n    \n    Dim i As Integer\n    For i = 0 To UBound(invalidSymbols)\n        Dim invalidSymb As String\n        invalidSymb = CStr(invalidSymbols(i))\n        res = Replace(res, invalidSymb, REPLACE_SYMB)\n    Next\n    \n    ReplaceInvalidPathSymbols = drive + res\n    \nEnd Function\n')))}u.isMDXComponent=!0},41590:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/insert-into-new-part-pmpage-25824f733c6279244c4db075540f322c.png"}}]);