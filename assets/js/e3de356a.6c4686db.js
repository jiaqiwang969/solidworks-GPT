"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[37590],{3905:(e,t,i)=>{i.d(t,{Zo:()=>M,kt:()=>d});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)i=u[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)i=u[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},M=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},I="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,u=e.originalType,c=e.parentName,M=o(e,["components","mdxType","originalType","parentName"]),I=s(i),l=r,d=I["".concat(c,".").concat(l)]||I[l]||m[l]||u;return i?n.createElement(d,a(a({ref:t},M),{},{components:i})):n.createElement(d,a({ref:t},M))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=i.length,a=new Array(u);a[0]=l;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[I]="string"==typeof e?e:r,a[1]=o;for(var s=2;s<u;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}l.displayName="MDXCreateElement"},78386:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>u,metadata:()=>o,toc:()=>s});var n=i(87462),r=(i(67294),i(3905));const u={title:"Untrim face or surface with temporary geometry using SOLIDWORKS API",caption:"Create Untrimmed Surface",description:"VBA example to create an untrimmed (restored) surface from the selected face with temporary geometry using SOLIDWORKS API",image:"untrimmed-surface.png",labels:["trim","curve","untrim"]},a=void 0,o={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/untrim-surface/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/untrim-surface/index",title:"Untrim face or surface with temporary geometry using SOLIDWORKS API",description:"VBA example to create an untrimmed (restored) surface from the selected face with temporary geometry using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/untrim-surface/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/untrim-surface",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/untrim-surface/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/untrim-surface/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/untrim-surface/index.md",tags:[],version:"current",frontMatter:{title:"Untrim face or surface with temporary geometry using SOLIDWORKS API",caption:"Create Untrimmed Surface",description:"VBA example to create an untrimmed (restored) surface from the selected face with temporary geometry using SOLIDWORKS API",image:"untrimmed-surface.png",labels:["trim","curve","untrim"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS VBA macro to copy preselected faces",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/surface-offset-equal/"},next:{title:"How to utilize SOLIDWORKS API methods within the scripts",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/"}},c={},s=[],M={toc:s},I="wrapper";function m(e){let{components:t,...u}=e;return(0,r.kt)(I,(0,n.Z)({},M,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA example restores the surface of the selected face by performing the untrim operation."),(0,r.kt)("p",null,"This command is similar to the ",(0,r.kt)("em",{parentName:"p"},"Untrim Surface")," feature in the Feature Manager, but it performs the operation using temporary bodies instead of features."),(0,r.kt)("p",null,"Copied surface used in operations is infinite and needs to be trimmed in order to form a face. Required boundary is calculated by evaluating the maximum and minimum values of the UV of the input face."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"UV bounds of face",src:i(92938).Z,width:"49",height:"41"}),"{ width=450 }"),(0,r.kt)("p",null,"Iso curves are used to extract the curve at the specified boundary UV of the face. The calculated curve is infinite and needs to be trimmed in the corners to form the closed loop before the surface can be trimmed and converted into the body."),(0,r.kt)("p",null,"Select any face and run the macro. The resulting surface is displayed in the graphics area and macro stops execution. Once continued - the preview is hidden."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Input surface and untrimmed result",src:i(12501).Z,width:"468",height:"182"}),"{ width=450 }"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swFace As SldWorks.Face2\n        \n        Set swFace = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swFace Is Nothing Then\n            \n            Dim swSurf As SldWorks.Surface\n            Set swSurf = swFace.GetSurface\n              \n            Set swSurf = swSurf.Copy\n            \n            Dim vUvBounds As Variant\n            vUvBounds = swFace.GetUVBounds()\n            \n            Dim swCurves(3) As SldWorks.Curve\n            \n            Dim uMin As Double\n            Dim uMax As Double\n            Dim vMin As Double\n            Dim vMax As Double\n            \n            uMin = CDbl(vUvBounds(0))\n            uMax = CDbl(vUvBounds(1))\n            vMin = CDbl(vUvBounds(2))\n            vMax = CDbl(vUvBounds(3))\n            \n            Dim uMinvMinPt As Variant\n            Dim uMinvMaxPt As Variant\n            Dim uMaxvMinPt As Variant\n            Dim uMaxvMaxPt As Variant\n            \n            uMinvMinPt = swSurf.Evaluate(uMin, vMin, 0, 0)\n            uMinvMaxPt = swSurf.Evaluate(uMin, vMax, 0, 0)\n            uMaxvMinPt = swSurf.Evaluate(uMax, vMin, 0, 0)\n            uMaxvMaxPt = swSurf.Evaluate(uMax, vMax, 0, 0)\n            \n            Const V As Boolean = True\n            Const U As Boolean = False\n            \n            Set swCurves(0) = swSurf.MakeIsoCurve2(U, uMin)\n            Set swCurves(0) = swCurves(0).CreateTrimmedCurve2(uMinvMinPt(0), uMinvMinPt(1), uMinvMinPt(2), uMinvMaxPt(0), uMinvMaxPt(1), uMinvMaxPt(2))\n            \n            Set swCurves(1) = swSurf.MakeIsoCurve2(V, vMin)\n            Set swCurves(1) = swCurves(1).CreateTrimmedCurve2(uMinvMinPt(0), uMinvMinPt(1), uMinvMinPt(2), uMaxvMinPt(0), uMaxvMinPt(1), uMaxvMinPt(2))\n            \n            Set swCurves(2) = swSurf.MakeIsoCurve2(U, uMax)\n            Set swCurves(2) = swCurves(2).CreateTrimmedCurve2(uMaxvMinPt(0), uMaxvMinPt(1), uMaxvMinPt(2), uMaxvMaxPt(0), uMaxvMaxPt(1), uMaxvMaxPt(2))\n                        \n            Set swCurves(3) = swSurf.MakeIsoCurve2(V, vMax)\n            Set swCurves(3) = swCurves(3).CreateTrimmedCurve2(uMinvMaxPt(0), uMinvMaxPt(1), uMinvMaxPt(2), uMaxvMaxPt(0), uMaxvMaxPt(1), uMaxvMaxPt(2))\n            \n            Dim swUntimSurfBody As SldWorks.Body2\n\n            Set swUntimSurfBody = swSurf.CreateTrimmedSheet5(swCurves, False, 0.00001)\n            \n            swUntimSurfBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n            \n            Stop\n            \n            Set swUntimSurfBody = Nothing\n            \n        Else\n            Err.Raise vbError, , "Select face"\n        End If\n        \n    Else\n        Err.Raise vbError, , "Open the model"\n    End If\n    \nEnd Sub\n\n')))}m.isMDXComponent=!0},92938:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDkuMTE5IDQxLjIyMiI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iLTE2MC42MDUiIHgyPSItMjM3LjY5NSIgeTE9IjI5NS4yMzUiIHkyPSIzNjUuMTg4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC4yNjQ1OCAwIDAgLjI2NDU4IDEzMy40OTkgMTguOTEzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNhIi8+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1OGEyYzEiLz48c3RvcCBvZmZzZXQ9Ii4yNzIiIHN0b3AtY29sb3I9IiM4NmQwZWYiLz48c3RvcCBvZmZzZXQ9Ii40ODEiIHN0b3AtY29sb3I9IiM1NmEwYmYiLz48c3RvcCBvZmZzZXQ9Ii43NDciIHN0b3AtY29sb3I9IiM4NmQwZWYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1OGEyYzEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2IpIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjI2NSIgZD0iTTcyLjYyOCAxMTcuNzAzYy0yLjUzOC0yLjYyOS01LjM2Mi01LjU1MS02LjI3NS02LjQ5NGwtMS42Ni0xLjcxMy4zMDItMS41OTJjLjM5LTIuMDYzLjkxLTMuMjQ1IDEuNzUyLTMuOTg0IDEuMjU4LTEuMTA0IDMuNTk0LTEuOTI2IDYuOTE1LTIuNDMxIDIuNDE1LS4zNjggMi45NzEtLjgzOCA0LjQ0My0zLjc1MyAxLjk3OC0zLjkxOSAzLjQ4My01LjE4MiA2Ljc4Mi01LjY5MmwxLjM5Ny0uMjE2LjcxLjgyMWMuMzkuNDUyIDIuODI5IDMuMjAxIDUuNDIgNi4xMWw0LjcxIDUuMjg4LTMuMTQ3IDEuMDRjLS45MzYuMzEtMy4wODgtMy4wMzQtMy45ODYtMi45NzMtMi43OTYuMTktMy45NCAyLjU5OC00Ljk0IDMuODQ5LS40OTIuNjE3IDMuNzM2IDIuNzg4IDMuMTk5IDMuNjU1LTIuMTkgMy41MzUtMy40NjUgNC42MzQtNS44OTMgNS4wODMtMi41NDUuNDctMy45MiAyLjI4MS00Ljc5MyA2LjMwN2wtLjMyIDEuNDc2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU2LjMyOCAtODYuNjQ1KSIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QzNDQ0MSIgc3Ryb2tlLWRhc2hhcnJheT0iMi4wMDMgMi4wMDMiIHN0cm9rZS13aWR0aD0iLjI2NTEwOTE1OTk5OTk5OTk1IiBkPSJNNy42ODQgMjcuODAzbC4wNDctLjE4OWMuMzc2LTEuNTU4LjQ0NS0zLjE3MS42MzUtNC43NjMuMTM4LTEuMTUyLjM0My0yLjMwNS43NzMtMy4zODEuNDMtMS4wNzcgMS4xMDEtMi4wOCAyLjAzOC0yLjc2Mi42NzctLjQ5MyAxLjQ3LS44MDUgMi4yOC0xLjAxNi44MS0uMjEgMS42NDItLjMyMyAyLjQ2OS0uNDUuODI3LS4xMjggMS42NTYtLjI3MiAyLjQ0OC0uNTQuNzkzLS4yNjggMS41NTMtLjY2NyAyLjE1Mi0xLjI1Mi43MDItLjY4NiAxLjE0Ni0xLjU4OCAxLjU0LTIuNDg2LjM5NS0uODk5Ljc1OC0xLjgyMyAxLjM0LTIuNjEzLjczOS0xLjAwMyAxLjgtMS43MzkgMi45NDMtMi4yMzEgMS4xNDUtLjQ5MyAyLjM3NS0uNzU1IDMuNjA3LS45MzdhMzAuMDE3IDMwLjAxNyAwIDAgMSA2LjcxNy0uMjMyTTIwLjI1NCA0MC4zNjNjLjAxNy0uMDYzLjAzMi0uMTI2LjA0OC0uMTkuMzc2LTEuNTU3LjQzNy0zLjE3Mi42MzUtNC43NjMuMTQzLTEuMTQ4LjM2MS0yLjI5Ni43OTUtMy4zNjguNDM1LTEuMDcyIDEuMDk4LTIuMDcgMi4wMTYtMi43NzUuNzI4LS41NTggMS41ODktLjkxMyAyLjQ0NS0xLjI0NC44NTUtLjMzIDEuNzI2LS42NDggMi40OTctMS4xNDYgMS4xMS0uNzE1IDEuOTU4LTEuNzY2IDIuNzI4LTIuODM5Ljc3LTEuMDczIDEuNDg5LTIuMTk0IDIuNDIyLTMuMTI4IDEuODkxLTEuODkyIDQuNTIzLTIuODcgNy4xNTEtMy4zNjhhMjQuOTg1IDI0Ljk4NSAwIDAgMSA1LjE4Mi0uNDMyIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTc5YTE3IiBzdHJva2UtZGFzaGFycmF5PSIyLjAwMyAyLjAwMyIgc3Ryb2tlLXdpZHRoPSIuMjY1MTA5MTU5OTk5OTk5OTUiIGQ9Ik0yNS41MDUuMDg4bDIwLjkgMjMuNjM3TTQuMTM4IDE4LjM4M2wyMS44NCAyMi43NDciLz48dGV4dCBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgeD0iOTYuNjY5IiB5PSIxMDEuNTk0IiBmaWxsPSIjZDM0NDQxIiBzdHJva2Utd2lkdGg9Ii4yNjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MyIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ni4zMjggLTg2LjY0NSkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9Ijk2LjY2OSIgeT0iMTAxLjU5NCIgZm9udC1zaXplPSIzLjUyOCI+VTx0c3BhbiBiYXNlbGluZS1zaGlmdD0ic3ViIiBmb250LXNpemU9IjIuMjkzIj5taW48L3RzcGFuPjwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB4PSI1Ni4zMDQiIHk9IjExMS42MzUiIGZpbGw9IiNkMzQ0NDEiIHN0cm9rZS13aWR0aD0iLjI2NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzIiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU2LjMyOCAtODYuNjQ1KSIgd29yZC1zcGFjaW5nPSIwIj48dHNwYW4geD0iNTYuMzA0IiB5PSIxMTEuNjM1IiBmb250LXNpemU9IjMuNTI4Ij5VPHRzcGFuIGJhc2VsaW5lLXNoaWZ0PSJzdWIiIGZvbnQtc2l6ZT0iMi4yOTMiPm1heDwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PHRleHQgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHg9Ijg0LjY3MSIgeT0iODkuNDM4IiBmaWxsPSIjOTc5YTE3IiBzdHJva2Utd2lkdGg9Ii4yNjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MyIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ni4zMjggLTg2LjY0NSkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9Ijg0LjY3MSIgeT0iODkuNDM4IiBmb250LXNpemU9IjMuNTI4Ij5WPHRzcGFuIGJhc2VsaW5lLXNoaWZ0PSJzdWIiIGZvbnQtc2l6ZT0iMi4yOTMiPm1heDwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PHRleHQgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHg9Ijc5LjkyNyIgeT0iMTI0LjMzMSIgZmlsbD0iIzk3OWExNyIgc3Ryb2tlLXdpZHRoPSIuMjY1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTYuMzI4IC04Ni42NDUpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSI3OS45MjciIHk9IjEyNC4zMzEiIGZvbnQtc2l6ZT0iMy41MjgiPlY8dHNwYW4gYmFzZWxpbmUtc2hpZnQ9InN1YiIgZm9udC1zaXplPSIyLjI5MyI+bWluPC90c3Bhbj48L3RzcGFuPjwvdGV4dD48L3N2Zz4="},12501:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/untrimmed-surface-5644acd1942d9852a58c2ddb5ce127b0.png"}}]);