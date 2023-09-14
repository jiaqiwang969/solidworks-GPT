"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[36284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Create rotational transformation of circular pattern via SOLIDWORKS API",caption:"Create A Rotational Transformation Based On Circular Pattern Data",description:"Example reads the transform of the selected circular pattern and creates a temp preview of the pattern of the specified seed body by applying the same transform as in the circular pattern",image:"circ-pattern-emulator.png",labels:["angle","axis","circular pattern","example","geometry","instances","rotation","transform"],"redirect-from":["/2018/03/create-rotational-transformation-based.html"]},s=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/transformation/circular-pattern-data-rotational-transformation/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/transformation/circular-pattern-data-rotational-transformation/index",title:"Create rotational transformation of circular pattern via SOLIDWORKS API",description:"Example reads the transform of the selected circular pattern and creates a temp preview of the pattern of the specified seed body by applying the same transform as in the circular pattern",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/transformation/circular-pattern-data-rotational-transformation/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/transformation/circular-pattern-data-rotational-transformation",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/transformation/circular-pattern-data-rotational-transformation/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/transformation/circular-pattern-data-rotational-transformation/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/transformation/circular-pattern-data-rotational-transformation/index.md",tags:[],version:"current",frontMatter:{title:"Create rotational transformation of circular pattern via SOLIDWORKS API",caption:"Create A Rotational Transformation Based On Circular Pattern Data",description:"Example reads the transform of the selected circular pattern and creates a temp preview of the pattern of the specified seed body by applying the same transform as in the circular pattern",image:"circ-pattern-emulator.png",labels:["angle","axis","circular pattern","example","geometry","instances","rotation","transform"],"redirect-from":["/2018/03/create-rotational-transformation-based.html"]},sidebar:"tutorialSidebar",previous:{title:"Usage of assembly component transformation in SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/transformation/assembly-component-transformation/"},next:{title:"Get the transformation matrix of coordinate system using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/transformation/get-coordinate-system-transform/"}},c={},l=[],d={toc:l},p="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This SOLIDWORKS API example reads the transform of the selected circular pattern and creates a temp preview of the pattern of the specified seed body by applying the same transform as in the circular pattern."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Copy of the body created emulating the circular pattern feature",src:n(40705).Z,width:"640",height:"305"}),"{ width=640 height=304 }"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select circular pattern feature as a first selected object",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It must use reference axis as the directionSelect any solid body which is not a part of the circular pattern feature"))),(0,a.kt)("li",{parentName:"ul"},"Run the macro. Macro will read the transformation from the pattern and apply the same transformation to the body selected in previous step.\nThe preview will be displayed using temporarily bodies which will be destroyed immediately when macro resumes execution (i.e. F5 or run)."),(0,a.kt)("li",{parentName:"ul"},"There won't be any temp features created or removed during the run of this macro")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swMathUtils As SldWorks.MathUtility\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swFeat As SldWorks.Feature\n    Dim swBody As SldWorks.Body2\n    Dim swCircPatt As SldWorks.CircularPatternFeatureData\n    \n    Set swFeat = swSelMgr.GetSelectedObject6(1, -1)\n    \n    If Not swFeat Is Nothing Then\n        If swFeat.GetTypeName2 = "CirPattern" Then\n            Set swCircPatt = swFeat.GetDefinition\n        End If\n    End If\n    \n    Set swBody = swSelMgr.GetSelectedObject6(2, -1)\n    \n    If swBody Is Nothing Then\n        MsgBox "Please select body to pattern as second selection"\n        End\n    End If\n    \n    If Not swCircPatt Is Nothing Then\n                \n        Dim angle As Double\n        Dim swOrigPt As SldWorks.MathPoint\n        Dim swDirVec As SldWorks.MathVector\n        Dim instances As Integer\n        Dim vPreviewBodies As Variant\n        \n        GetCircularPatternParameters swCircPatt, swOrigPt, swDirVec, angle, instances\n        \n        vPreviewBodies = CreateCircularPatternPreview(swBody, swOrigPt, swDirVec, angle, instances)\n        \n        Stop\n        \n        ClearTempBodies vPreviewBodies\n        \n    Else\n        MsgBox "Please select the circular pattern feature as first selection"\n    End If\n    \nEnd Sub\n\nSub GetCircularPatternParameters(swCircPatt As SldWorks.CircularPatternFeatureData, ByRef swOrigPt As MathPoint, ByRef swDirVec As MathVector, ByRef angle As Double, ByRef instances As Integer)\n    \n    swCircPatt.AccessSelections swModel, Nothing\n    \n    If swCircPatt.EqualSpacing Then\n        angle = swCircPatt.Spacing / (swCircPatt.TotalInstances - 1)\n    Else\n        angle = swCircPatt.Spacing\n    End If\n    \n    If swCircPatt.ReverseDirection Then\n        angle = -angle\n    End If\n    \n    instances = swCircPatt.TotalInstances - 2\n    \n    Dim swAxis As SldWorks.RefAxis\n    Set swAxis = swCircPatt.Axis\n        \n    If swAxis Is Nothing Then\n        MsgBox "Only reference axis is supported as the direction"\n        End\n    End If\n    \n    Dim vVec As Variant\n    vVec = swAxis.GetRefAxisParams\n    \n    Dim dData(2) As Double\n    \n    dData(0) = vVec(0):  dData(1) = vVec(1): dData(2) = vVec(2)\n    Set swOrigPt = swMathUtils.CreatePoint(dData)\n    \n    dData(0) = vVec(3) - vVec(0):  dData(1) = vVec(4) - vVec(1): dData(2) = vVec(5) - vVec(2)\n    Set swDirVec = swMathUtils.CreateVector(dData)\n    \n    swCircPatt.ReleaseSelectionAccess\n    \nEnd Sub\n\nFunction CreateCircularPatternPreview(swBody As SldWorks.Body2, swOrigPt As MathPoint, swDirVec As MathVector, angle As Double, instances As Integer) As Variant\n    \n    Dim swPreviewBodies() As SldWorks.Body2\n    ReDim swPreviewBodies(instances)\n    \n    Dim i As Integer\n    \n    For i = 0 To instances\n        \n        Dim swTransform As SldWorks.MathTransform\n\n        Set swTransform = swMathUtils.CreateTransformRotateAxis(swOrigPt, swDirVec, angle * (i + 1))\n        \n        Set swPreviewBodies(i) = swBody.Copy\n        \n        swPreviewBodies(i).ApplyTransform swTransform\n        \n        swPreviewBodies(i).Display3 swModel, RGB(0, 0, 255), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n        \n    Next\n    \n    CreateCircularPatternPreview = swPreviewBodies\n        \nEnd Function\n\nSub ClearTempBodies(vBodies As Variant)\n    \n    Dim i As Integer\n\n    For i = 0 To UBound(vBodies)\n        Set vBodies(i) = Nothing\n    Next\n    \nEnd Sub\n')))}m.isMDXComponent=!0},40705:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/circ-pattern-emulator-59ec4d7f8754b03d06eba3979fd0ca14.png"}}]);