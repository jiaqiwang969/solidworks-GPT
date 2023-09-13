"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[11159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,u=p["".concat(d,".").concat(f)]||p[f]||m[f]||s;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=f;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={title:"SOLIDWORKS macro to find the geometrical difference between parts",caption:"Part Geometry Diff",description:"Diff tool to find the geometrical difference between multi-bodies parts using SOLIDWORKS API",image:"part-bodies-diff.png",labels:["geometry","transform","diff","compare"]},i=void 0,a={unversionedId:"codestack/solidworks-api/geometry/bodies-diff/index",id:"codestack/solidworks-api/geometry/bodies-diff/index",title:"SOLIDWORKS macro to find the geometrical difference between parts",description:"Diff tool to find the geometrical difference between multi-bodies parts using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/geometry/bodies-diff/index.md",sourceDirName:"codestack/solidworks-api/geometry/bodies-diff",slug:"/codestack/solidworks-api/geometry/bodies-diff/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/bodies-diff/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/bodies-diff/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS macro to find the geometrical difference between parts",caption:"Part Geometry Diff",description:"Diff tool to find the geometrical difference between multi-bodies parts using SOLIDWORKS API",image:"part-bodies-diff.png",labels:["geometry","transform","diff","compare"]},sidebar:"tutorialSidebar",previous:{title:"Working with geometry (IModeler) using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/"},next:{title:"Macro gets extreme points on body using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/body-extreme-points/"}},d={},l=[{value:"Notes",id:"notes",level:3},{value:"Example",id:"example",level:3},{value:"Instructions",id:"instructions",level:3}],c={toc:l},p="wrapper";function m(e){let{components:t,...s}=e;return(0,o.kt)(p,(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This macro allows to compare two parts by its geometry."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibody2~getcoincidencetransform2.html"},"IBody2::GetCoincidenceTransform2")," SOLIDWORKS API is used to compare bodies and if equal find the transformation between them."),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Macro supports multi-bodies parts"),(0,o.kt)("li",{parentName:"ul"},"Macro will compare the bodies even if they are located in different position (i.e. moved or rotated) in the comparable parts."),(0,o.kt)("li",{parentName:"ul"},"Comparable parts might have different number of bodies"),(0,o.kt)("li",{parentName:"ul"},"Macro will try to find the most suitable transformation between two parts")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Original part to be compared:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Original part",src:n(1669).Z,width:"487",height:"228"}),"{ width=250 }"),(0,o.kt)("p",null,"Part to compare"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Part to compare",src:n(33545).Z,width:"609",height:"246"}),"{ width=250 }"),(0,o.kt)("p",null,"Second part has a modified geometry and was reoriented in space. Some of the bodies have been deleted from the second part."),(0,o.kt)("p",null,"The following result is calculated by the macro:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Resulting Difference file",src:n(17953).Z,width:"528",height:"233"}),"{ width=250 }"),(0,o.kt)("h3",{id:"instructions"},"Instructions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the original part file"),(0,o.kt)("li",{parentName:"ul"},"Run the macro."),(0,o.kt)("li",{parentName:"ul"},"Specify the full path for the part file to compare to"),(0,o.kt)("li",{parentName:"ul"},"As the result second part is displayed within the original part"),(0,o.kt)("li",{parentName:"ul"},"Continue the macro (F5) to clear the preview")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    If Not swPart Is Nothing Then\n        \n        Dim otherFilePath As String\n        otherFilePath = InputBox("Please specify the part path to compare to")\n        \n        If otherFilePath <> "" Then\n            \n            Dim swOtherPart As SldWorks.PartDoc\n            Set swOtherPart = swApp.OpenDoc6(otherFilePath, swDocumentTypes_e.swDocPART, swOpenDocOptions_e.swOpenDocOptions_Silent, "", 0, 0)\n            \n            If Not swOtherPart Is Nothing Then\n                Dim swXform As SldWorks.MathTransform\n                Set swXform = GetClosestTransform(swPart, swOtherPart)\n                PreviewPart swOtherPart, swXform, swPart\n            Else\n                MsgBox "Failed to open the part to compare to"\n            End If\n            \n        End If\n        \n    Else\n        MsgBox "Please open part"\n    End If\n        \nEnd Sub\n\nSub PreviewPart(part As SldWorks.PartDoc, transform As SldWorks.MathTransform, context As PartDoc)\n    \n    Dim vBodies As Variant\n    \n    vBodies = part.GetBodies2(swBodyType_e.swSolidBody, True)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vBodies)\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = vBodies(i)\n        Set swBody = swBody.Copy\n        \n        If Not transform Is Nothing Then\n            Debug.Print swBody.ApplyTransform(transform)\n        End If\n        \n        Set vBodies(i) = swBody\n        swBody.Display3 context, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n        \n    Next\n    \n    Stop \'continue the macro to hide preview\n    \nEnd Sub\n\nFunction GetClosestTransform(thisPart As SldWorks.PartDoc, otherPart As SldWorks.PartDoc) As SldWorks.MathTransform\n\n    Dim vThisBodies As Variant\n    Dim vOtherBodies As Variant\n    \n    vThisBodies = thisPart.GetBodies2(swBodyType_e.swSolidBody, True)\n    vOtherBodies = otherPart.GetBodies2(swBodyType_e.swSolidBody, True)\n    \n    Dim transformsHits As Object\n    Set transformsHits = CreateObject("Scripting.Dictionary") \'by some reasons sometimes the first null element is added on creation\n        \n    If Not IsEmpty(vThisBodies) And Not IsEmpty(vOtherBodies) Then\n        \n        Dim i As Integer\n        Dim j As Integer\n        \n        For i = 0 To UBound(vOtherBodies)\n            \n            Dim swOtherBody As SldWorks.Body2\n                        \n            Set swOtherBody = vOtherBodies(i)\n            \n            For j = 0 To UBound(vThisBodies)\n                \n                Dim swThisBody As SldWorks.Body2\n                Set swThisBody = vThisBodies(j)\n                Dim swTransform As SldWorks.MathTransform\n                \n                If swThisBody.GetCoincidenceTransform2(swOtherBody, swTransform) Then\n                    \n                    If Not swTransform Is Nothing Then\n                        \n                        Dim contains As Boolean\n                        contains = False\n                        For Each key In transformsHits.Keys\n                            If Not key Is Nothing Then\n                                Dim tx As SldWorks.MathTransform\n                                Set tx = key\n                                If CompareTransforms(swTransform, tx) Then\n                                    transformsHits(tx) = transformsHits(tx) + 1\n                                    contains = True\n                                    Exit For\n                                End If\n                            End If\n                        Next\n                        \n                        If Not contains Then\n                            transformsHits.Add swTransform, 1\n                        End If\n                        \n                    End If\n                    \n                End If\n                \n            Next\n            \n        Next\n        \n    End If\n    \n    Dim curMaxHit As Integer\n    curMaxHit = 0\n    \n    For Each key In transformsHits.Keys\n        If Not key Is Nothing Then\n            Dim curTx As SldWorks.MathTransform\n            Set curTx = key\n            If transformsHits(curTx) > curMaxHit Then\n                curMaxHit = transformsHits(curTx)\n                Set GetClosestTransform = curTx\n            End If\n        End If\n    Next\n\nEnd Function\n\nFunction CompareTransforms(firstTransform As SldWorks.MathTransform, secondTransform As SldWorks.MathTransform) As Boolean\n    \n    Dim vFirstArrayData As Variant\n    vFirstArrayData = firstTransform.ArrayData\n    \n    Dim vSecondArrayData As Variant\n    vSecondArrayData = secondTransform.ArrayData\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vFirstArrayData)\n        If Not CompareValues(CDbl(vFirstArrayData(i)), CDbl(vSecondArrayData(i))) Then\n            CompareTransforms = False\n            Exit Function\n        End If\n    Next\n    \n    CompareTransforms = True\n    \nEnd Function\n\nFunction CompareValues(firstValue As Double, secondValue As Double, Optional tol As Double = 0.00000001) As Boolean\n        \n    CompareValues = Abs(secondValue - firstValue) <= tol\n    \nEnd Function\n')))}m.isMDXComponent=!0},1669:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/original-part-ab140f428bb8686cd9242a19a8c6e6a5.png"},17953:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/part-bodies-diff-f31ae4e7f9811971273039d8c9f35f57.png"},33545:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/part-to-compare-7f77dd0eb4f839a2a29ce4846c4dd12f.png"}}]);