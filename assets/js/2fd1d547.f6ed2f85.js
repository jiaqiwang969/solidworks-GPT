"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[54136],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(t),u=s,m=p["".concat(c,".").concat(u)]||p[u]||g[u]||r;return t?o.createElement(m,i(i({ref:n},l),{},{components:t})):o.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:s,i[1]=a;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},37350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(87462),s=(t(67294),t(3905));const r={title:"Tracking IDs in SOLIDWORKS API to track entities across operations",caption:"Tracking IDs",description:"This example demonstrates the use of tracking ids on face while running the merge body operation",image:"select-bodies-faces.png",labels:["tracking id","merge"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tracking-ids/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tracking-ids/index",title:"Tracking IDs in SOLIDWORKS API to track entities across operations",description:"This example demonstrates the use of tracking ids on face while running the merge body operation",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tracking-ids/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tracking-ids",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tracking-ids/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tracking-ids/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tracking-ids/index.md",tags:[],version:"current",frontMatter:{title:"Tracking IDs in SOLIDWORKS API to track entities across operations",caption:"Tracking IDs",description:"This example demonstrates the use of tracking ids on face while running the merge body operation",image:"select-bodies-faces.png",labels:["tracking id","merge"]},sidebar:"tutorialSidebar",previous:{title:"Fix too long SOLIDWORKS VBA macro line error",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/too-long-vba-macro-line/"},next:{title:"Get corresponding entities (faces, edges and vertices) in the derived part using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tracking-ids/derived-part-get-corresponding-entity/"}},c={},d=[],l={toc:d},p="wrapper";function g(e){let{components:n,...r}=e;return(0,s.kt)(p,(0,o.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Tracking ids are used to map (track) entities across geometrical operations such as merge, subtract, copy, split, pattern while developing macros and applications using SOLIDWORKS API."),(0,s.kt)("p",null,"Tracking ids can be applied to faces, edges, loops, vertices and bodies."),(0,s.kt)("p",null,"Tracking ids are assigned temporarily until the model rebuilt."),(0,s.kt)("p",null,"Mainly the tracking ids are used for operations with temp bodies when it is required to track specific elements when the body get changed. Usually this is required in macro features."),(0,s.kt)("p",null,"Following example demonstrates the use of tracking ids from SOLIDWORKS API to track and map the user selected faces to the copied merged body."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Download ",(0,s.kt)("a",{target:"_blank",href:t(54811).Z},"Example File")," or use any other part document"),(0,s.kt)("li",{parentName:"ul"},"Select at least one face. It is recommended to select at least two faces from the different bodies which are overlapping each other. This would allow to demonstrate the benefit of tracking ids as body will be merged."),(0,s.kt)("li",{parentName:"ul"},"Run the macro.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Two faces of two solid bodies selected in the graphics view",src:t(83664).Z,width:"358",height:"270"}),"{ width=300 }"),(0,s.kt)("p",null,"Macro will perform the following steps"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Collect all selected faces"),(0,s.kt)("li",{parentName:"ul"},"Find all bodies from the selected faces"),(0,s.kt)("li",{parentName:"ul"},"Clear all existing tracking ids if any"),(0,s.kt)("li",{parentName:"ul"},"Make a copy of the bodies"),(0,s.kt)("li",{parentName:"ul"},"Merge all bodies into one"),(0,s.kt)("li",{parentName:"ul"},"Create new part document"),(0,s.kt)("li",{parentName:"ul"},"Create new body from the merged copy"),(0,s.kt)("li",{parentName:"ul"},"Find the faces which correspond to originally selected faces"),(0,s.kt)("li",{parentName:"ul"},"Select those corresponding faces in the merged body")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Copy of the single body created as the result of a merge operation with two faces selected",src:t(79607).Z,width:"641",height:"356"}),"{ width=250 }"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim vFaces As Variant\n        vFaces = GetAllSelectedFaces(swModel)\n        \n        If Not IsEmpty(vFaces) Then\n            \n            Dim trackingCookie As Long\n            Dim vBodiesCopy As Variant\n            \n            vBodiesCopy = CopyBodiesAndTrackFaces(vFaces, trackingCookie)\n            \n            CreateMergedBodyAndSelectFaces trackingCookie, vBodiesCopy\n        Else\n            MsgBox "Please select at least one face"\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nFunction GetAllSelectedFaces(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    Dim i As Integer\n    \n    Dim swFaces() As SldWorks.Face2\n    \n    Dim isArrInit As Boolean\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        On Error Resume Next\n        \n        Dim swFace As SldWorks.Face2\n        Set swFace = swSelMgr.GetSelectedObject6(i, -1)\n        \n        If Not swFace Is Nothing Then\n            \n            If Not isArrInit Then\n                isArrInit = True\n                ReDim swFaces(0)\n            Else\n                ReDim Preserve swFaces(UBound(swFaces) + 1)\n            End If\n            \n            Set swFaces(i - 1) = swFace\n            \n        End If\n    Next\n    \n    GetAllSelectedFaces = swFaces\n    \nEnd Function\n\nFunction CopyBodiesAndTrackFaces(vFaces As Variant, ByRef trackingCookie As Long) As Variant\n\n    trackingCookie = swApp.RegisterTrackingDefinition("_MergeBodies_")\n\n    Dim swFace As SldWorks.Face2\n    \n    Dim swBodies() As SldWorks.Body2\n    ReDim swBodies(UBound(vFaces))\n    \n    Dim i As Integer\n    \n    \'collect bodies and clear all tracking ids\n    For i = 0 To UBound(vFaces)\n        \n        Set swFace = vFaces(i)\n        Set swBodies(i) = swFace.GetBody()\n        \n        ClearAllFaceTrackingIds swBodies(i), trackingCookie\n        \n    Next\n    \n    \'assign tracking ids for all faces\n    For i = 0 To UBound(vFaces)\n        \n        Set swFace = vFaces(i)\n        \n        swFace.SetTrackingID trackingCookie, i\n        \n    Next\n    \n    \'copy all bodies\n    For i = 0 To UBound(swBodies)\n        \n        Set swBodies(i) = swBodies(i).Copy()\n        \n    Next\n    \n    CopyBodiesAndTrackFaces = swBodies\n    \nEnd Function\n\nSub CreateMergedBodyAndSelectFaces(trackingCookie As Long, vBodiesCopy As Variant)\n    \n    Dim partTemplate As String\n    partTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplatePart)\n    \n    If partTemplate <> "" Then\n        \n        Dim swPart As SldWorks.PartDoc\n        Set swPart = swApp.NewDocument(partTemplate, swDwgPaperSizes_e.swDwgPapersUserDefined, 0, 0)\n        \n        Dim swMergedBody As SldWorks.Body2\n        \n        Set swMergedBody = vBodiesCopy(0)\n        \n        Dim i As Integer\n        \n        For i = 1 To UBound(vBodiesCopy)\n            \n            Dim mergeErr As Long\n            Dim vMergeRes As Variant\n            \n            vMergeRes = swMergedBody.Operations2(swBodyOperationType_e.SWBODYADD, vBodiesCopy(i), mergeErr)\n            \n            If UBound(vMergeRes) = 0 Then\n                Set swMergedBody = vMergeRes(0)\n            Else\n                MsgBox "Selected bodies cannot be merged"\n                End\n            End If\n            \n        Next\n        \n        Dim swBodyFeat As SldWorks.Feature\n        Set swBodyFeat = swPart.CreateFeatureFromBody3(swMergedBody, False, swCreateFeatureBodyOpts_e.swCreateFeatureBodySimplify)\n        \n        Dim vFaces As Variant\n        vFaces = swBodyFeat.GetFaces()\n        \n        swPart.ClearSelection2 True\n        \n        For i = 0 To UBound(vFaces)\n            \n            Dim swFace As SldWorks.Face2\n            Set swFace = vFaces(i)\n            \n            Dim vIds As Variant\n            swFace.GetTrackingIDs trackingCookie, vIds\n            \n            If Not IsEmpty(vIds) Then\n                \n                Dim j As Integer\n                \n                For j = 0 To UBound(vIds)\n                    Debug.Print vIds(j)\n                Next\n                \n                swFace.Select4 True, Nothing\n            End If\n        Next\n        \n    Else\n        MsgBox "Default part template is not specified"\n    End If\n    \nEnd Sub\n\nSub ClearAllFaceTrackingIds(swBody As SldWorks.Body2, trackingCookie As Long)\n    \n    Dim vBodyFaces As Variant\n    vBodyFaces = swBody.GetFaces\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vBodyFaces)\n        Dim swBodyFace As SldWorks.Face2\n        Set swBodyFace = vBodyFaces(i)\n        swBodyFace.RemoveTrackingID trackingCookie\n    Next\n    \nEnd Sub\n')))}g.isMDXComponent=!0},54811:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/files/tracking-ids-sample-aec6848badac6bf414d5bbddb18e552e.SLDPRT"},79607:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/merged-body-7c4b6167452a0fa0edc49c73b10a86da.png"},83664:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/select-bodies-faces-be01bfe90c9a7ae2418c34654c1f05ac.png"}}]);