"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[62066],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>N});var n=i(67294);function M(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){M(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function I(e,t){if(null==e)return{};var i,n,M=function(e,t){if(null==e)return{};var i,n,M={},u=Object.keys(e);for(n=0;n<u.length;n++)i=u[n],t.indexOf(i)>=0||(M[i]=e[i]);return M}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)i=u[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(M[i]=e[i])}return M}var a=n.createContext({}),c=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},s=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},o="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},j=n.forwardRef((function(e,t){var i=e.components,M=e.mdxType,u=e.originalType,a=e.parentName,s=I(e,["components","mdxType","originalType","parentName"]),o=c(i),j=M,N=o["".concat(a,".").concat(j)]||o[j]||l[j]||u;return i?n.createElement(N,r(r({ref:t},s),{},{components:i})):n.createElement(N,r({ref:t},s))}));function N(e,t){var i=arguments,M=t&&t.mdxType;if("string"==typeof e||M){var u=i.length,r=new Array(u);r[0]=j;var I={};for(var a in t)hasOwnProperty.call(t,a)&&(I[a]=t[a]);I.originalType=e,I[o]="string"==typeof e?e:M,r[1]=I;for(var c=2;c<u;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}j.displayName="MDXCreateElement"},72184:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>u,metadata:()=>I,toc:()=>c});var n=i(87462),M=(i(67294),i(3905));const u={title:"\u4f7f\u7528SOLIDWORKS API\u53d6\u6d88\u4fee\u526a\u9762\u6216\u66f2\u9762",caption:"\u521b\u5efa\u672a\u4fee\u526a\u7684\u66f2\u9762"},r=void 0,I={unversionedId:"codestack/solidworks-api/geometry/untrim-surface/index",id:"codestack/solidworks-api/geometry/untrim-surface/index",title:"\u4f7f\u7528SOLIDWORKS API\u53d6\u6d88\u4fee\u526a\u9762\u6216\u66f2\u9762",description:"\u4f7f\u7528SOLIDWORKS API\u4f7f\u7528\u4e34\u65f6\u51e0\u4f55\u56fe\u5f62\u4ece\u6240\u9009\u9762\u521b\u5efa\u672a\u4fee\u526a\uff08\u6062\u590d\uff09\u66f2\u9762\u7684VBA\u793a\u4f8b",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/geometry/untrim-surface/index.md",sourceDirName:"codestack/solidworks-api/geometry/untrim-surface",slug:"/codestack/solidworks-api/geometry/untrim-surface/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/untrim-surface/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/untrim-surface/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u53d6\u6d88\u4fee\u526a\u9762\u6216\u66f2\u9762",caption:"\u521b\u5efa\u672a\u4fee\u526a\u7684\u66f2\u9762"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u5782\u76f4\u4e8e\u5c4f\u5e55\u89c6\u56fe\u7684\u77e2\u91cf",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/transformation/vector-normal-to-screen-view/"},next:{title:"adornment",permalink:"/solidworks-GPT/zh-Hans/docs/category/adornment"}},a={},c=[{value:"labels: trim,curve,untrim",id:"labels-trimcurveuntrim",level:2}],s={toc:c},o="wrapper";function l(e){let{components:t,...u}=e;return(0,M.kt)(o,(0,n.Z)({},s,u,{components:t,mdxType:"MDXLayout"}),(0,M.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\u4f7f\u7528\u4e34\u65f6\u51e0\u4f55\u56fe\u5f62\u4ece\u6240\u9009\u9762\u521b\u5efa\u672a\u4fee\u526a\uff08\u6062\u590d\uff09\u66f2\u9762\u7684VBA\u793a\u4f8b\nimage: untrimmed-surface.png"),(0,M.kt)("h2",{id:"labels-trimcurveuntrim"},"labels: ","[trim,curve,untrim]"),(0,M.kt)("p",null,"\u6b64VBA\u793a\u4f8b\u901a\u8fc7\u6267\u884c\u53d6\u6d88\u4fee\u526a\u64cd\u4f5c\u6765\u6062\u590d\u6240\u9009\u9762\u7684\u66f2\u9762\u3002"),(0,M.kt)("p",null,"\u6b64\u547d\u4ee4\u7c7b\u4f3c\u4e8e\u7279\u5f81\u7ba1\u7406\u5668\u4e2d\u7684",(0,M.kt)("em",{parentName:"p"},"\u53d6\u6d88\u4fee\u526a\u66f2\u9762"),"\u529f\u80fd\uff0c\u4f46\u5b83\u4f7f\u7528\u4e34\u65f6\u5b9e\u4f53\u800c\u4e0d\u662f\u7279\u5f81\u6765\u6267\u884c\u64cd\u4f5c\u3002"),(0,M.kt)("p",null,"\u5728\u64cd\u4f5c\u4e2d\u4f7f\u7528\u7684\u590d\u5236\u66f2\u9762\u662f\u65e0\u9650\u7684\uff0c\u9700\u8981\u4fee\u526a\u624d\u80fd\u5f62\u6210\u9762\u3002\u901a\u8fc7\u8bc4\u4f30\u8f93\u5165\u9762\u7684UV\u7684\u6700\u5927\u548c\u6700\u5c0f\u503c\u6765\u8ba1\u7b97\u6240\u9700\u8fb9\u754c\u3002"),(0,M.kt)("p",null,(0,M.kt)("img",{alt:"\u9762\u7684UV\u8fb9\u754c",src:i(4501).Z,width:"49",height:"41"}),"{ width=450 }"),(0,M.kt)("p",null,"\u4f7f\u7528\u7b49\u503c\u66f2\u7ebf\u63d0\u53d6\u9762\u7684\u6307\u5b9a\u8fb9\u754cUV\u5904\u7684\u66f2\u7ebf\u3002\u8ba1\u7b97\u5f97\u5230\u7684\u66f2\u7ebf\u662f\u65e0\u9650\u7684\uff0c\u9700\u8981\u5728\u89d2\u843d\u4fee\u526a\u6210\u95ed\u5408\u73af\u8def\uff0c\u7136\u540e\u624d\u80fd\u4fee\u526a\u66f2\u9762\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u5b9e\u4f53\u3002"),(0,M.kt)("p",null,"\u9009\u62e9\u4efb\u4f55\u9762\u5e76\u8fd0\u884c\u5b8f\u3002\u7ed3\u679c\u66f2\u9762\u5c06\u663e\u793a\u5728\u56fe\u5f62\u533a\u57df\u4e2d\uff0c\u5e76\u4e14\u5b8f\u505c\u6b62\u6267\u884c\u3002\u7ee7\u7eed\u540e\uff0c\u9884\u89c8\u5c06\u88ab\u9690\u85cf\u3002"),(0,M.kt)("p",null,(0,M.kt)("img",{alt:"\u8f93\u5165\u66f2\u9762\u548c\u672a\u4fee\u526a\u7ed3\u679c",src:i(14925).Z,width:"468",height:"182"}),"{ width=450 }"),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swFace As SldWorks.Face2\n        \n        Set swFace = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swFace Is Nothing Then\n            \n            Dim swSurf As SldWorks.Surface\n            Set swSurf = swFace.GetSurface\n              \n            Set swSurf = swSurf.Copy\n            \n            Dim vUvBounds As Variant\n            vUvBounds = swFace.GetUVBounds()\n            \n            Dim swCurves(3) As SldWorks.Curve\n            \n            Dim uMin As Double\n            Dim uMax As Double\n            Dim vMin As Double\n            Dim vMax As Double\n            \n            uMin = CDbl(vUvBounds(0))\n            uMax = CDbl(vUvBounds(1))\n            vMin = CDbl(vUvBounds(2))\n            vMax = CDbl(vUvBounds(3))\n            \n            Dim uMinvMinPt As Variant\n            Dim uMinvMaxPt As Variant\n            Dim uMaxvMinPt As Variant\n            Dim uMaxvMaxPt As Variant\n            \n            uMinvMinPt = swSurf.Evaluate(uMin, vMin, 0, 0)\n            uMinvMaxPt = swSurf.Evaluate(uMin, vMax, 0, 0)\n            uMaxvMinPt = swSurf.Evaluate(uMax, vMin, 0, 0)\n            uMaxvMaxPt = swSurf.Evaluate(uMax, vMax, 0, 0)\n            \n            Const V As Boolean = True\n            Const U As Boolean = False\n            \n            Set swCurves(0) = swSurf.MakeIsoCurve2(U, uMin)\n            Set swCurves(0) = swCurves(0).CreateTrimmedCurve2(uMinvMinPt(0), uMinvMinPt(1), uMinvMinPt(2), uMinvMaxPt(0), uMinvMaxPt(1), uMinvMaxPt(2))\n            \n            Set swCurves(1) = swSurf.MakeIsoCurve2(V, vMin)\n            Set swCurves(1) = swCurves(1).CreateTrimmedCurve2(uMinvMinPt(0), uMinvMinPt(1), uMinvMinPt(2), uMaxvMinPt(0), uMaxvMinPt(1), uMaxvMinPt(2))\n            \n            Set swCurves(2) = swSurf.MakeIsoCurve2(U, uMax)\n            Set swCurves(2) = swCurves(2).CreateTrimmedCurve2(uMaxvMinPt(0), uMaxvMinPt(1), uMaxvMinPt(2), uMaxvMaxPt(0), uMaxvMaxPt(1), uMaxvMaxPt(2))\n                        \n            Set swCurves(3) = swSurf.MakeIsoCurve2(V, vMax)\n            Set swCurves(3) = swCurves(3).CreateTrimmedCurve2(uMinvMaxPt(0), uMinvMaxPt(1), uMinvMaxPt(2), uMaxvMaxPt(0), uMaxvMaxPt(1), uMaxvMaxPt(2))\n            \n            Dim swUntimSurfBody As SldWorks.Body2\n\n            Set swUntimSurfBody = swSurf.CreateTrimmedSheet5(swCurves, False, 0.00001)\n            \n            swUntimSurfBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n            \n            Stop\n            \n            Set swUntimSurfBody = Nothing\n            \n        Else\n            Err.Raise vbError, , "\u9009\u62e9\u9762"\n        End If\n        \n    Else\n        Err.Raise vbError, , "\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n\n')))}l.isMDXComponent=!0},4501:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDkuMTE5IDQxLjIyMiI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iLTE2MC42MDUiIHgyPSItMjM3LjY5NSIgeTE9IjI5NS4yMzUiIHkyPSIzNjUuMTg4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC4yNjQ1OCAwIDAgLjI2NDU4IDEzMy40OTkgMTguOTEzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNhIi8+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1OGEyYzEiLz48c3RvcCBvZmZzZXQ9Ii4yNzIiIHN0b3AtY29sb3I9IiM4NmQwZWYiLz48c3RvcCBvZmZzZXQ9Ii40ODEiIHN0b3AtY29sb3I9IiM1NmEwYmYiLz48c3RvcCBvZmZzZXQ9Ii43NDciIHN0b3AtY29sb3I9IiM4NmQwZWYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1OGEyYzEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSJ1cmwoI2IpIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjI2NSIgZD0iTTcyLjYyOCAxMTcuNzAzYy0yLjUzOC0yLjYyOS01LjM2Mi01LjU1MS02LjI3NS02LjQ5NGwtMS42Ni0xLjcxMy4zMDItMS41OTJjLjM5LTIuMDYzLjkxLTMuMjQ1IDEuNzUyLTMuOTg0IDEuMjU4LTEuMTA0IDMuNTk0LTEuOTI2IDYuOTE1LTIuNDMxIDIuNDE1LS4zNjggMi45NzEtLjgzOCA0LjQ0My0zLjc1MyAxLjk3OC0zLjkxOSAzLjQ4My01LjE4MiA2Ljc4Mi01LjY5MmwxLjM5Ny0uMjE2LjcxLjgyMWMuMzkuNDUyIDIuODI5IDMuMjAxIDUuNDIgNi4xMWw0LjcxIDUuMjg4LTMuMTQ3IDEuMDRjLS45MzYuMzEtMy4wODgtMy4wMzQtMy45ODYtMi45NzMtMi43OTYuMTktMy45NCAyLjU5OC00Ljk0IDMuODQ5LS40OTIuNjE3IDMuNzM2IDIuNzg4IDMuMTk5IDMuNjU1LTIuMTkgMy41MzUtMy40NjUgNC42MzQtNS44OTMgNS4wODMtMi41NDUuNDctMy45MiAyLjI4MS00Ljc5MyA2LjMwN2wtLjMyIDEuNDc2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU2LjMyOCAtODYuNjQ1KSIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QzNDQ0MSIgc3Ryb2tlLWRhc2hhcnJheT0iMi4wMDMgMi4wMDMiIHN0cm9rZS13aWR0aD0iLjI2NTEwOTE1OTk5OTk5OTk1IiBkPSJNNy42ODQgMjcuODAzbC4wNDctLjE4OWMuMzc2LTEuNTU4LjQ0NS0zLjE3MS42MzUtNC43NjMuMTM4LTEuMTUyLjM0My0yLjMwNS43NzMtMy4zODEuNDMtMS4wNzcgMS4xMDEtMi4wOCAyLjAzOC0yLjc2Mi42NzctLjQ5MyAxLjQ3LS44MDUgMi4yOC0xLjAxNi44MS0uMjEgMS42NDItLjMyMyAyLjQ2OS0uNDUuODI3LS4xMjggMS42NTYtLjI3MiAyLjQ0OC0uNTQuNzkzLS4yNjggMS41NTMtLjY2NyAyLjE1Mi0xLjI1Mi43MDItLjY4NiAxLjE0Ni0xLjU4OCAxLjU0LTIuNDg2LjM5NS0uODk5Ljc1OC0xLjgyMyAxLjM0LTIuNjEzLjczOS0xLjAwMyAxLjgtMS43MzkgMi45NDMtMi4yMzEgMS4xNDUtLjQ5MyAyLjM3NS0uNzU1IDMuNjA3LS45MzdhMzAuMDE3IDMwLjAxNyAwIDAgMSA2LjcxNy0uMjMyTTIwLjI1NCA0MC4zNjNjLjAxNy0uMDYzLjAzMi0uMTI2LjA0OC0uMTkuMzc2LTEuNTU3LjQzNy0zLjE3Mi42MzUtNC43NjMuMTQzLTEuMTQ4LjM2MS0yLjI5Ni43OTUtMy4zNjguNDM1LTEuMDcyIDEuMDk4LTIuMDcgMi4wMTYtMi43NzUuNzI4LS41NTggMS41ODktLjkxMyAyLjQ0NS0xLjI0NC44NTUtLjMzIDEuNzI2LS42NDggMi40OTctMS4xNDYgMS4xMS0uNzE1IDEuOTU4LTEuNzY2IDIuNzI4LTIuODM5Ljc3LTEuMDczIDEuNDg5LTIuMTk0IDIuNDIyLTMuMTI4IDEuODkxLTEuODkyIDQuNTIzLTIuODcgNy4xNTEtMy4zNjhhMjQuOTg1IDI0Ljk4NSAwIDAgMSA1LjE4Mi0uNDMyIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTc5YTE3IiBzdHJva2UtZGFzaGFycmF5PSIyLjAwMyAyLjAwMyIgc3Ryb2tlLXdpZHRoPSIuMjY1MTA5MTU5OTk5OTk5OTUiIGQ9Ik0yNS41MDUuMDg4bDIwLjkgMjMuNjM3TTQuMTM4IDE4LjM4M2wyMS44NCAyMi43NDciLz48dGV4dCBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgeD0iOTYuNjY5IiB5PSIxMDEuNTk0IiBmaWxsPSIjZDM0NDQxIiBzdHJva2Utd2lkdGg9Ii4yNjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MyIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ni4zMjggLTg2LjY0NSkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9Ijk2LjY2OSIgeT0iMTAxLjU5NCIgZm9udC1zaXplPSIzLjUyOCI+VTx0c3BhbiBiYXNlbGluZS1zaGlmdD0ic3ViIiBmb250LXNpemU9IjIuMjkzIj5taW48L3RzcGFuPjwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiB4PSI1Ni4zMDQiIHk9IjExMS42MzUiIGZpbGw9IiNkMzQ0NDEiIHN0cm9rZS13aWR0aD0iLjI2NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAuNTgzIiBmb250LXdlaWdodD0iNDAwIiBsZXR0ZXItc3BhY2luZz0iMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU2LjMyOCAtODYuNjQ1KSIgd29yZC1zcGFjaW5nPSIwIj48dHNwYW4geD0iNTYuMzA0IiB5PSIxMTEuNjM1IiBmb250LXNpemU9IjMuNTI4Ij5VPHRzcGFuIGJhc2VsaW5lLXNoaWZ0PSJzdWIiIGZvbnQtc2l6ZT0iMi4yOTMiPm1heDwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PHRleHQgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHg9Ijg0LjY3MSIgeT0iODkuNDM4IiBmaWxsPSIjOTc5YTE3IiBzdHJva2Utd2lkdGg9Ii4yNjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MyIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ni4zMjggLTg2LjY0NSkiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9Ijg0LjY3MSIgeT0iODkuNDM4IiBmb250LXNpemU9IjMuNTI4Ij5WPHRzcGFuIGJhc2VsaW5lLXNoaWZ0PSJzdWIiIGZvbnQtc2l6ZT0iMi4yOTMiPm1heDwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PHRleHQgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHg9Ijc5LjkyNyIgeT0iMTI0LjMzMSIgZmlsbD0iIzk3OWExNyIgc3Ryb2tlLXdpZHRoPSIuMjY1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMC41ODMiIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTYuMzI4IC04Ni42NDUpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSI3OS45MjciIHk9IjEyNC4zMzEiIGZvbnQtc2l6ZT0iMy41MjgiPlY8dHNwYW4gYmFzZWxpbmUtc2hpZnQ9InN1YiIgZm9udC1zaXplPSIyLjI5MyI+bWluPC90c3Bhbj48L3RzcGFuPjwvdGV4dD48L3N2Zz4="},14925:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/untrimmed-surface-5644acd1942d9852a58c2ddb5ce127b0.png"}}]);