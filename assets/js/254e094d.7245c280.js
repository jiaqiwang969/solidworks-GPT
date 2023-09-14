"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[71994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||s;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,r[1]=a;for(var c=2;c<s;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const s={title:"Macro slices body by sections using SOLIDWORKS API",caption:"Slice Body By Sections",description:"Example demonstrates how to slice body by sections and extract the section data from the slices using SOLIDWORKS API",image:"sliced-sections.png",labels:["slice","projection","intersection","modeler","temp body"]},r=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/slice-body/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/slice-body/index",title:"Macro slices body by sections using SOLIDWORKS API",description:"Example demonstrates how to slice body by sections and extract the section data from the slices using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/slice-body/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/slice-body",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/slice-body/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/slice-body/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/slice-body/index.md",tags:[],version:"current",frontMatter:{title:"Macro slices body by sections using SOLIDWORKS API",caption:"Slice Body By Sections",description:"Example demonstrates how to slice body by sections and extract the section data from the slices using SOLIDWORKS API",image:"sliced-sections.png",labels:["slice","projection","intersection","modeler","temp body"]},sidebar:"tutorialSidebar",previous:{title:"Get the sheet body geometry type using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/sheet-body-geometry-type/"},next:{title:"SOLIDWORKS Macro to Split Body By Faces using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/split-body-by-faces/"}},l={},c=[{value:"Algorithm",id:"algorithm",level:2},{value:"Identifying the starting point and the maximum length of the body",id:"identifying-the-starting-point-and-the-maximum-length-of-the-body",level:3},{value:"Identifying the maximum radius of the body",id:"identifying-the-maximum-radius-of-the-body",level:3},{value:"Calculate sections",id:"calculate-sections",level:3},{value:"Preview the results",id:"preview-the-results",level:3}],d={toc:c},u="wrapper";function m(e){let{components:t,...s}=e;return(0,i.kt)(u,(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Section slices of the body",src:n(86628).Z,width:"497",height:"288"}),"{ width=350 }"),(0,i.kt)("p",null,"This example demonstrates how to slice the selected body and find the section properties of the resulting section slices using SOLIDWORKS API."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Specify the number of required slices in the ",(0,i.kt)("em",{parentName:"li"},"SLICES_COUNT")," constant")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Const SLICES_COUNT As Integer = 100\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select solid body in Part document"),(0,i.kt)("li",{parentName:"ul"},"As the result:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Body is sliced in Y direction"),(0,i.kt)("li",{parentName:"ul"},"Area of each slice is output to the immediate window in VBA editor"),(0,i.kt)("li",{parentName:"ul"},"Previews of each slice is displayed in the graphics area"))),(0,i.kt)("li",{parentName:"ul"},"Continue the macro to hide the preview")),(0,i.kt)("h2",{id:"algorithm"},"Algorithm"),(0,i.kt)("h3",{id:"identifying-the-starting-point-and-the-maximum-length-of-the-body"},"Identifying the starting point and the maximum length of the body"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find 2 extreme points in positive and negative direction of the direction vector (Y vector in this example)"),(0,i.kt)("li",{parentName:"ul"},"Project those points onto the direction vector line (vector can be fixed at any point, in this example it is fixed at 0, 0, 0)."),(0,i.kt)("li",{parentName:"ul"},"Once projected calculate the distance between points - this will be equal to the maximum length of the body"),(0,i.kt)("li",{parentName:"ul"},"First extreme point is a starting point")),(0,i.kt)("h3",{id:"identifying-the-maximum-radius-of-the-body"},"Identifying the maximum radius of the body"),(0,i.kt)("p",null,"It is only required to find big enough radius to cover the body. This radius will be used to create a planar body for intersection purposes. In this example the maximum radius is equal to the diagonal of the bounding box which will ensure the planar section will cover the input body"),(0,i.kt)("h3",{id:"calculate-sections"},"Calculate sections"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Calculate the step of section"),(0,i.kt)("li",{parentName:"ul"},"For each section move the starting point by the step. Sections at end points should be skipped as it won't produce any intersection results"),(0,i.kt)("li",{parentName:"ul"},"At each step create a temp section plane (disc) and intersect it with the solid body",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Result of the intersection is the sheet body (or bodies) which is a section slice at this position"),(0,i.kt)("li",{parentName:"ul"},"Store the pointer to the section in the collection"),(0,i.kt)("li",{parentName:"ul"},"All the properties can be accessed from the resulting body (e.g. surface area)")))),(0,i.kt)("h3",{id:"preview-the-results"},"Preview the results"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Display each of the resulting bodies as a preview"),(0,i.kt)("li",{parentName:"ul"},"Stop the execution of the macro to validate the result",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It might be required to hide or change the transparency of the original body to see the sections displayed"))),(0,i.kt)("li",{parentName:"ul"},"Continue macro execution. This will clear the preview")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Const SLICES_COUNT As Integer = 100\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = swModel.SelectionManager.GetSelectedObject6(1, -1)\n                        \n        If Not swBody Is Nothing Then\n            \n            Dim startTime As Double\n            startTime = Timer\n            \n            Dim swSliceBodies As Collection\n            Set swSliceBodies = New Collection\n            \n            Dim maxRadius As Double\n            maxRadius = GetMaxRadius(swBody)\n            \n            Dim i As Integer\n            \n            Dim dNorm(2) As Double\n            Dim dRef(2) As Double\n            \n            dNorm(0) = 0: dNorm(1) = 1: dNorm(2) = 0\n            dRef(0) = 1: dRef(1) = 0: dRef(2) = 0\n            \n            Dim vStartPt As Variant\n            Dim length As Double\n            vStartPt = GetStartPoint(swBody, dNorm, length)\n            \n            Dim step As Double\n            step = length / (SLICES_COUNT + 1)\n            \n            For i = 1 To (SLICES_COUNT + 1) - 1\n            \n                Dim swCutPlane As SldWorks.Body2\n                \n                Dim vRoot As Variant\n                vRoot = MovePoint(vStartPt, dNorm, step * i)\n                                \n                Set swCutPlane = CreatePlanarBody(vRoot, dNorm, dRef, maxRadius)\n                \n                Dim swTempBody As SldWorks.Body2\n                Set swTempBody = swBody.Copy\n        \n                Dim bodyErr As Long\n                Dim vRes As Variant\n                vRes = swCutPlane.Operations2(swBodyOperationType_e.SWBODYINTERSECT, swTempBody, bodyErr)\n                \n                Dim j As Integer\n                \n                If Not IsEmpty(vRes) Then\n                    For j = 0 To UBound(vRes)\n                        Dim swResBody As SldWorks.Body2\n                        Set swResBody = vRes(j)\n                        Debug.Print "Area: " & swResBody.GetMassProperties(0)(4)\n                        swSliceBodies.Add swResBody\n                    Next\n                Else\n                    err.Raise vbError, , "Intersection failed"\n                End If\n                \n            Next\n            \n            Debug.Print "Time: " & Round(Timer - startTime, 2)\n            \n            For i = 1 To swSliceBodies.Count\n                swSliceBodies(i).Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n            Next\n            \n            Stop\n            \n            For i = swSliceBodies.Count To 1 Step -1\n                swSliceBodies.Remove i\n            Next\n                    \n        Else\n            MsgBox "Please select body"\n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nFunction GetMaxRadius(body As SldWorks.Body2) As Double\n    \n    Dim vBox As Variant\n    vBox = body.GetBodyBox()\n    \n    GetMaxRadius = Sqrt((vBox(3) - vBox(0)) ^ 2 + (vBox(4) - vBox(1)) ^ 2 + (vBox(5) - vBox(2)) ^ 2)\n    \nEnd Function\n\nFunction GetStartPoint(body As SldWorks.Body2, vDir As Variant, ByRef length As Double) As Variant\n    \n    Dim x As Double\n    Dim y As Double\n    Dim z As Double\n    \n    body.GetExtremePoint CDbl(-vDir(0)), CDbl(-vDir(1)), CDbl(-vDir(2)), x, y, z\n    \n    Dim dPt(2) As Double\n    dPt(0) = x: dPt(1) = y: dPt(2) = z\n    \n    GetStartPoint = dPt\n    \n    body.GetExtremePoint CDbl(vDir(0)), CDbl(vDir(1)), CDbl(vDir(2)), x, y, z\n    \n    dPt(0) = x: dPt(1) = y: dPt(2) = z\n    \n    Dim dVecPt(2) As Double\n    \n    Dim vPt1 As Variant\n    Dim vPt2 As Variant\n        \n    vPt1 = ProjectPointOnVector(GetStartPoint, vDir, dVecPt)\n    vPt2 = ProjectPointOnVector(dPt, vDir, dVecPt)\n    \n    length = Sqrt((vPt1(0) - vPt2(0)) ^ 2 + (vPt1(1) - vPt2(1)) ^ 2 + (vPt1(2) - vPt2(2)) ^ 2)\n    \nEnd Function\n\nFunction ProjectPointOnVector(vPt As Variant, vVec As Variant, vPtOnVec As Variant) As Variant\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swPt As SldWorks.MathPoint\n    Dim swVec As SldWorks.MathVector\n    Dim swPtOnVec As SldWorks.MathPoint\n    \n    Set swPt = swMathUtils.CreatePoint(vPt)\n    Set swVec = swMathUtils.CreateVector(vVec)\n    Set swPtOnVec = swMathUtils.CreatePoint(vPtOnVec)\n    \n    Dim swVec2 As SldWorks.MathVector\n    Set swVec2 = swPtOnVec.Subtract(swPt)\n    \n    Dim magn As Double\n    Dim prod As Double\n    Dim dist As Double\n    \n    prod = swVec.Dot(swVec2)\n    magn = swVec.GetLength() ^ 2\n    dist = prod / magn\n        \n    Dim swDestPt As SldWorks.MathPoint\n    Set swDestPt = swPtOnVec.AddVector(swVec.Scale(dist))\n    \n    ProjectPointOnVector = swDestPt.ArrayData\n    \nEnd Function\n\nFunction CreatePlanarBody(vRoot As Variant, vNorm As Variant, vRef As Variant, radius As Double) As SldWorks.Body2\n    \n    Dim swModeler As SldWorks.Modeler\n        \n    Set swModeler = swApp.GetModeler\n        \n    Dim swSurf As SldWorks.Surface\n            \n    Set swSurf = swModeler.CreatePlanarSurface2(vRoot, vNorm, vRef)\n    \n    Dim swTrimCurve(0) As SldWorks.Curve\n    \n    Dim vArcPt As Variant\n    vArcPt = MovePoint(vRoot, vRef, radius)\n    \n    Set swTrimCurve(0) = swModeler.CreateArc(vRoot, vNorm, radius, vArcPt, vArcPt)\n    \n    Set CreatePlanarBody = swSurf.CreateTrimmedSheet4(swTrimCurve, True)\n    \nEnd Function\n\nFunction MovePoint(vPt As Variant, vDir As Variant, dist As Double) As Variant\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swPt As SldWorks.MathPoint\n    Dim swDir As SldWorks.MathVector\n    \n    Set swPt = swMathUtils.CreatePoint(vPt)\n    Set swDir = swMathUtils.CreateVector(vDir)\n    \n    Set swDir = swDir.Normalise()\n    Set swDir = swDir.Scale(dist)\n    \n    Set swPt = swPt.AddVector(swDir)\n    \n    MovePoint = swPt.ArrayData\n    \nEnd Function\n\n')))}m.isMDXComponent=!0},86628:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sliced-sections-dbdc5266356a36e3e63ef424fab4413c.png"}}]);