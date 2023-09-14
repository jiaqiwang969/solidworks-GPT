"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[71779],{3905:(e,n,i)=>{i.d(n,{Zo:()=>m,kt:()=>l});var A=i(67294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);n&&(A=A.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,A)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,A,t=function(e,n){if(null==e)return{};var i,A,t={},o=Object.keys(e);for(A=0;A<o.length;A++)i=o[A],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(A=0;A<o.length;A++)i=o[A],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var d=A.createContext({}),w=function(e){var n=A.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},m=function(e){var n=w(e.components);return A.createElement(d.Provider,{value:n},e.children)},a="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return A.createElement(A.Fragment,{},n)}},c=A.forwardRef((function(e,n){var i=e.components,t=e.mdxType,o=e.originalType,d=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),a=w(i),c=t,l=a["".concat(d,".").concat(c)]||a[c]||g[c]||o;return i?A.createElement(l,s(s({ref:n},m),{},{components:i})):A.createElement(l,s({ref:n},m))}));function l(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=i.length,s=new Array(o);s[0]=c;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r[a]="string"==typeof e?e:t,s[1]=r;for(var w=2;w<o;w++)s[w]=i[w];return A.createElement.apply(null,s)}return A.createElement.apply(null,i)}c.displayName="MDXCreateElement"},10667:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>w});var A=i(87462),t=(i(67294),i(3905));const o={title:"Dimension named model entities in drawing view using SOLIDWORKS API",caption:"Dimension Named Model Entities",description:"Add dimension between two named entities of the part drawing retrieved from the underlying model using SOLIDWORKS API",image:"drawing-view-dimension.png",labels:["view","dimension","named"]},s=void 0,r={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/view-dimension-model-entities/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/view-dimension-model-entities/index",title:"Dimension named model entities in drawing view using SOLIDWORKS API",description:"Add dimension between two named entities of the part drawing retrieved from the underlying model using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/view-dimension-model-entities/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/view-dimension-model-entities",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/view-dimension-model-entities/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/view-dimension-model-entities/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/view-dimension-model-entities/index.md",tags:[],version:"current",frontMatter:{title:"Dimension named model entities in drawing view using SOLIDWORKS API",caption:"Dimension Named Model Entities",description:"Add dimension between two named entities of the part drawing retrieved from the underlying model using SOLIDWORKS API",image:"drawing-view-dimension.png",labels:["view","dimension","named"]},sidebar:"tutorialSidebar",previous:{title:"Dimension visible drawing entities from view using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/view-dimension-drawing-entities/"},next:{title:"Select corresponding features in all drawing views",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/view-select-corresponding-feature/"}},d={},w=[],m={toc:w},a="wrapper";function g(e){let{components:n,...o}=e;return(0,t.kt)(a,(0,A.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Similar to ",(0,t.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/assembly/context/"},"Assembly Context")," there is drawing context. Pointer to the entity may exist in underlying model context and in the drawing view context."),(0,t.kt)("p",null,"When entities from the underlying model context (i.e. from part or assembly) need to be selected in the drawing view (for example for the dimensioning purposes), ",(0,t.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iview~selectentity.html"},"IView::SelectEntity")," SOLIDWORKS API method could be called. SOLIDWORKS will automatically find the corresponding entity pointer in the drawing view and select it."),(0,t.kt)("p",null,"This example demonstrates how to add the linear dimension between two named edges (Edge1 and Edge2) from the underlying part model using SOLIDWORKS API. The entities can be named via the following property dialog:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Edge property name",src:i(51297).Z,width:"641",height:"486"}),"{ width=350 }"),(0,t.kt)("p",null,"As the result the dimension is added between the edges."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Dimension between 2 named edges",src:i(14616).Z,width:"193",height:"187"}),"{ width=250 }"),(0,t.kt)("p",null,"Location of the dimension is found as a middle point of the line drawn between two middle points of the dimensioned edges. Unlike ",(0,t.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/drawing/sheet-context-sketch/"},"drawing in sheet context"),", drawing sheet scale is not required to be multiplied to the view transformation matrix when positioning the dimensions."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Dim swView As SldWorks.view\n        Set swView = swDraw.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swView Is Nothing Then\n            DimensionNamedEdges "Edge1", "Edge2", swDraw, swView\n        Else\n            MsgBox "Please select drawing view"\n        End If\n    Else\n        MsgBox "Please open the drawing document"\n    End If\n    \nEnd Sub\n\nFunction DimensionNamedEdges(firstEdgeName As String, secondEdgeName As String, draw As SldWorks.DrawingDoc, view As SldWorks.view)\n    \n    Dim swRefPart As SldWorks.PartDoc\n    Set swRefPart = view.ReferencedDocument\n    \n    Dim swFirstEdge As SldWorks.edge\n    Set swFirstEdge = swRefPart.GetEntityByName(firstEdgeName, swSelectType_e.swSelEDGES)\n    \n    Dim swSecondEdge As SldWorks.edge\n    Set swSecondEdge = swRefPart.GetEntityByName(secondEdgeName, swSelectType_e.swSelEDGES)\n    \n    If swFirstEdge Is Nothing Or swSecondEdge Is Nothing Then\n        Err.Raise vbError, "", "Failed to find edge by name"\n    End If\n    \n    If False = view.SelectEntity(swFirstEdge, False) Or False = view.SelectEntity(swSecondEdge, True) Then\n        Err.Raise vbError, "", "Failed to select edges in the drawing view"\n    End If\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = draw\n    \n    Dim vDimLoc As Variant\n    vDimLoc = GetDimensionLocation(swFirstEdge, swSecondEdge, view)\n    \n    swModel.AddDimension2 vDimLoc(0), vDimLoc(1), vDimLoc(2)\n    \nEnd Function\n\nFunction GetDimensionLocation(firstEdge As SldWorks.edge, secondEdge As SldWorks.edge, view As SldWorks.view) As Variant\n    \n    Dim vFirstPt As Variant\n    vFirstPt = GetEdgeMidPoint(firstEdge, view)\n    \n    Dim vSecondPt As Variant\n    vSecondPt = GetEdgeMidPoint(secondEdge, view)\n    \n    Dim dLoc(2) As Double\n    dLoc(0) = (vFirstPt(0) + vSecondPt(0)) / 2\n    dLoc(1) = (vFirstPt(1) + vSecondPt(1)) / 2\n    dLoc(2) = (vFirstPt(2) + vSecondPt(2)) / 2\n    \n    GetDimensionLocation = dLoc\n    \nEnd Function\n\nFunction GetEdgeMidPoint(edge As SldWorks.edge, view As SldWorks.view) As Variant\n    \n    Dim vStartPt As Variant\n    vStartPt = edge.GetStartVertex().GetPoint\n    \n    Dim vEndPt As Variant\n    vEndPt = edge.GetEndVertex().GetPoint\n    \n    Dim vMidPt(2) As Double\n    vMidPt(0) = (vStartPt(0) + vEndPt(0)) / 2\n    vMidPt(1) = (vStartPt(1) + vEndPt(1)) / 2\n    vMidPt(2) = (vStartPt(2) + vEndPt(2)) / 2\n    \n    Dim swViewXForm As SldWorks.MathTransform\n    Set swViewXForm = view.ModelToViewTransform\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(vMidPt)\n    \n    Set swMathPt = swMathPt.MultiplyTransform(swViewXForm)\n    \n    GetEdgeMidPoint = swMathPt.ArrayData\n    \nEnd Function\n')))}g.isMDXComponent=!0},14616:(e,n,i)=>{i.d(n,{Z:()=>A});const A="data:image/png;base64,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"},51297:(e,n,i)=>{i.d(n,{Z:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoEAAAHmCAMAAAA7lKT1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAACVsvJnh50JMAAD/AK7HwchpV56hvP7+/gA6kFNWZjQAAGGNfmhqdHBwcHuc2sbK3P//tuTk5NXVmAAAWdDQ0PX10u3x80MAAPDw8Jm10SjP5AA6OjoAOs2Lfqa/28fM3np6V7/V7GJQfzo6kGdpc389NEKIu1cAACctM7bO59fh55PEwDPD7Nra2p2406yuutuQOma2tuzFvwAAM4TJ6wArfDoAZppVTM7wq87a4ZxXAF4rAKp5dCcAMte9fqWHV1me2E8nNrLL5c6HNqC61pzc3Kc/K2a2/9Lh8cvd77fZ7bHT3uzs7CYrWM3u8OWilNPT0zZgq5Db/7nR6XkxAKuofj7V+3mgglYAMaTJ44y92KnCndJ+bqHm9O7NhkOK3ABgq+mpXy99xL5SPdTe5GA2YKK82Lx8MZuftX1ZfSYAWenu8UJCQpA6APPSyxgYGNvn9CdxoV8ANT7N8n8yMuS0q9majl+q78NdStrbvJ9FM9fl84eHh0MUIsnW3c10Y3q82uvrya3F4HdMALuamwAugK7S3LpJM9KeW7b//6pfADx/sYXf9LODf6vwq9PeogBMnK3E1zF6erzb2zMzgI1rMVjS8eGYi5g3JOvsqHjAo1cAWeemmXe+5JVrZ8zY33vc9Nv//4bN78XZ7cZoV+OdjzqQkKvw8DmSwRtDSodKQmYAOqjr65HC3b6Jg1+n3kjQ8rZmAJTi9I3h9KjC3Yc2YLNeTtranFkAMrXW4UWN4AAAAF09TWEAAMJmVQBXnJ9LPaqLWT17rX1QADXO9PDwq7rb5WEAYQBmtqfAvf/bkIdgh2va9bt9cdfhpKzFnzjP9idwwrm5ue/IweCroOmpnPDLxI9GO4Y1AHrE4VWOuQAAYDWFzIfOq46/29+Uhpbd5Knr8tHt9adXR4+PjzIAXOi9tdeQgsOCdgAAOpTF4D/W/AAxe5NuMoSo7DQ0NLdCKwBQoBxUW0KInEQAMgA1h4aqhmEsADaHh6+OWo89ONucV1Sf5PCrYAAAAGXIhD8AAAEAdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AP///////////////////////////////////////////////////////////////////////////////////////wC9DC7MAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAYFElEQVR4Xu3dC5gd5V3H8UkFSTcWJcbYUDV4Q0RJqEmjxtjQJLSKjYsK1nhLA1KotaWatIlpuhp3aaVBLTUFRWwVvIBoi2hsLE+jxAA1SOnVSkNqWwhVgRrRUmwxj+/lN3PmdubMmTMz//ed+X2fZ3dm37nszjsfzp5d2EMwnzHJKJDJRoFMNgpkslEgk40CmWwUyGSjQCYbBTLZKJDJRoFMNgpkslEgk40CmWwUyGSjQCYbBTLZKJDJRoFMNgpkslEgk40CmWwUyGSjQCYbBTLZKJDJRoFMNgpkslEgk40CmWwUyGSjQCYbBTLZKJDJRoFMttYEBjqsMxbVForgq3SGoQqDjLUl0AKMAkRKZC0JTAGMAkRK7HGt3PxhAKMAkRJ7WBs3fSTAKECkxB7V/M0OygOMAkRK7EGN3+QK/gYBIiV2uKZv7kQAowCREjtYwze1HoBRhNi9mr2bNQMMA0RK7EKN3sWGAEYBIiX6XJN3r2mAUYBIiT7W3F2r8luYCQNESvSpxu5W+/4GASIl+lBTd0kSYBQgUqLLNXR3nAAYBYiU6GLN3BW3AEYBIiW6VCN3w1GAUYBIiS7UxF1wHWAUIFKiZA3MvjcAowCREiWqfdYFfg1YW4BIiW1W92x77G8QIFJiG9U8y50AGAWIlNhk9c5utwBGASIlNlGts9pRgFGE2EB1TmfXAYYBIiXWUo3T2BeAUYBIiRNV2/T5/FuYCQNESqxUXdPWX3+DAJESx6qm6SLAWIBIiaWqZ5oIMC9ApMTCapkeAiwMECkxtzqmhQDLBYiUmKiG6SDAMQNESjRNPg0EWDVA7LnESS+/x78GrC1A7KnECS/7pJNOwvRR4mSdccYZmMieSZxc4LciTB8mlI2ZEhiG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"}}]);