"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[28040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>w,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},w=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},A="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,w=a(e,["components","mdxType","originalType","parentName"]),A=l(n),p=r,m=A["".concat(c,".").concat(p)]||A[p]||d[p]||s;return n?o.createElement(m,i(i({ref:t},w),{},{components:n})):o.createElement(m,i({ref:t},w))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[A]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const s={title:"Create vector normal to screen view using SOLIDWORKS API",caption:"Create Vector Normal To Screen View",description:"Example demonstrates how to draw a sketch line which is perpendicular (normal) to the current view orientation relative to the screen",image:"sw-view-screen-transformation.png",labels:["example","normal","screen","solidworks api","transformation","view"],"redirect-from":["/2018/04/solidworks-api-transformation-create-vector-normal-to-screen-view.html"]},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vector-normal-to-screen-view/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vector-normal-to-screen-view/index",title:"Create vector normal to screen view using SOLIDWORKS API",description:"Example demonstrates how to draw a sketch line which is perpendicular (normal) to the current view orientation relative to the screen",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vector-normal-to-screen-view/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vector-normal-to-screen-view",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vector-normal-to-screen-view/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vector-normal-to-screen-view/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vector-normal-to-screen-view/index.md",tags:[],version:"current",frontMatter:{title:"Create vector normal to screen view using SOLIDWORKS API",caption:"Create Vector Normal To Screen View",description:"Example demonstrates how to draw a sketch line which is perpendicular (normal) to the current view orientation relative to the screen",image:"sw-view-screen-transformation.png",labels:["example","normal","screen","solidworks api","transformation","view"],"redirect-from":["/2018/04/solidworks-api-transformation-create-vector-normal-to-screen-view.html"]},sidebar:"tutorialSidebar",previous:{title:"Open SOLIDWORKS assembly in quick view mode from Windows file explorer",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vbscript/open-quick-view/"},next:{title:"Generate report for the SOLIDWORKS file versions (created and last saved) for all the files in the folder",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/versions-report/"}},c={},l=[],w={toc:l},A="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(A,(0,o.Z)({},w,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example demonstrates how to draw a sketch line which is perpendicular (normal) to the current view orientation relative to the screen using SOLIDWORKS API."),(0,r.kt)("p",null,"The line will start at the point at the middle of the screen and will be perpendicular to the screen orientation. That means that initially it will be rendered as point until view rotates."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodelview~transform.html"},"IModelView::Transform")," SOLIDWORKS API property is used to extract the transformation matrix of current orientation of the view."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Line created perpendicular to the current graphics view",src:n(78406).Z,width:"320",height:"208"}),"{ width=320 height=208 }"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swMathUtils As SldWorks.MathUtility\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swModelView As SldWorks.modelView\n        \n        Set swModelView = swModel.ActiveView\n        \n        If Not swModelView Is Nothing Then\n            \n            Dim swNormVec As SldWorks.MathVector\n            Dim swMidPt As SldWorks.MathPoint\n            \n            Set swNormVec = GetNormalVector(swModelView)\n            Set swMidPt = GetMidPoint(swModelView)\n            \n            DrawVector swMidPt.ArrayData, swNormVec.ArrayData, 0.1\n            \n        Else\n            MsgBox "Active model doesn\'t contain view"\n        End If\n        \n    Else\n        MsgBox "Please open the 3D model"\n    End If\n    \nEnd Sub\n\nFunction GetNormalVector(modelView As SldWorks.modelView) As SldWorks.MathVector\n    \n    Dim swScreenToModelViewTransform As SldWorks.MathTransform\n    Set swScreenToModelViewTransform = modelView.Transform.Inverse()\n    \n    Dim dVec(2) As Double\n    dVec(0) = 0: dVec(1) = 0: dVec(2) = 1\n    \n    Dim swNormVec As SldWorks.MathVector\n    Set swNormVec = swMathUtils.CreateVector(dVec)\n    \n    Set swNormVec = swNormVec.MultiplyTransform(swScreenToModelViewTransform)\n    \n    Set GetNormalVector = swNormVec\n    \nEnd Function\n\nFunction GetMidPoint(modelView As SldWorks.modelView) As SldWorks.MathPoint\n    \n    Dim swScreenToModelViewTransform As SldWorks.MathTransform\n    Set swScreenToModelViewTransform = modelView.Transform.Inverse()\n    \n    Dim dPt(2) As Double\n    dPt(0) = modelView.FrameWidth / 2\n    dPt(1) = modelView.FrameHeight / 2\n    dPt(2) = 0\n    \n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(dPt)\n    \n    Set swMathPt = swMathPt.MultiplyTransform(swScreenToModelViewTransform)\n        \n    Set GetMidPoint = swMathPt\n    \nEnd Function\n\nFunction DrawVector(startPt As Variant, dir As Variant, length As Double)\n    \n    swModel.ClearSelection2 True\n    \n    Dim swEndPt As SldWorks.MathPoint\n    Dim swDirVec As SldWorks.MathVector\n    \n    Set swDirVec = swMathUtils.CreateVector(dir)\n    Set swDirVec = swDirVec.Normalise()\n    Set swDirVec = swDirVec.Scale(length)\n    \n    Set swEndPt = swMathUtils.CreatePoint(startPt)\n    Set swEndPt = swEndPt.AddVector(swDirVec)\n    \n    Dim endPt As Variant\n    endPt = swEndPt.ArrayData\n    \n    swModel.Insert3DSketch2 True\n    swModel.SketchManager.AddToDB = True\n    \n    swModel.SketchManager.CreateLine startPt(0), startPt(1), startPt(2), endPt(0), endPt(1), endPt(2)\n    \n    swModel.SketchManager.AddToDB = False\n    swModel.Insert3DSketch2 True\n    \nEnd Function\n')))}d.isMDXComponent=!0},78406:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADQCAMAAABBX0hvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAIgAAwMLpwgAApMfUxwCLAF1fZqitv6SkpHMAAMbHymSgZN7U1Dk6QV5eoqKlssHCxa9hYWvAa7u8wf7+/mZna06yTrOztHhJO9/m35aXm3JzdVJUW2lqbmptd9WTk2lsdQAAhrD/sJ5/f/Pz84OD0tTU18zM0PDGxtzc36b/pjc3iLa3uY6PlKgAALa7zsPFyD3NPZLbktg1NaenqP/U1GX/Zebr5uDOzk5Oynp7ft+9vf/m5s/Pz5aaqkdKU9na3Kamy76/w+L+4qqrtPqHh32CkMogIABFhMnKzQCxAKam/35/hFlbX9HS1dLY0uTk58vL/6CxoOvr/7eUk1P4U9xtbdzc/9fX/46Rofb2+MPD3e7u7tPMzNDGxp4ALefn59/f35lsbGNmcLi4//P/87O0uf+YmK+vsRbWFurq7JaYo+vn5+ny6YuMkeLi5J9VVbysrMy8u5GR/7S5y4S5ho2Qm9fX2nyAjZqasrq6uxgYe0+/TxcXyqamp6urqw4WLIT/hHZ7jU1PVmBiZltdZ6KnuLK0wVRWX6utuc7P0i7ZLpOUmWVriYuLi1lbY5erl7sAAOHh/3d6hJ2eoQC9AIaJkz9BRaI+Pv+8vNdGRpqdq6LKopubm//Kynp7g3F0fOUbG01NTbG2yI4AAF/HX2BiazHpMYmMmftxcYGCi+v/66yxwwCkAAYGzlVXXUpMU7e3//n5+f/f321veZOTlADMAKaptWZocpGUoktPWoODhf/ExIbGhnF1g4SJmhofMl5gaoKGkQAAAJ2is8IAADjeODs/Tqm6qax9faWqu52fqa6wvAAArbUAAAAAjuLV1VGkUQYNJOBBQbmUlEBAhU5RWf+hod7f4z5ASm//bwDDAIu7i3p9iVZYYbu+0bi90EFDSt9ISFDHUMjdyOfn6ggI1ckAABkZ0DDUMAAAsUBCRwAAAP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///16i/30AAADtdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD/////////////////////////////////////////////////////ANKkt88AAAAJcEhZcwAADsMAAA7DAcdvqGQAABDnSURBVHhe7d2Pfxv3Xcfx8ssRgpEDXzhwXU0th4yYQgRo/Ai1I9RQ0Eg8wYARo4GFoAgFIsZEVA6wAM9JZLxpJa75YUICBjMyQ8PNITIZLfEj/KhjVn4tGEbUFjA/xj/B53vft37akr+ns5Oe7l5t7LNk6R5+Pr5337uTnDwmu1nKBbSYC2gxF9BiLqDFXECLuYAWcwEt5gJazAW0mAtoMRfQYi6gxVxAi7mAFnMBLeYCWswFtJgLaDEX0GIuoMVcQIu5gBZzAS3mAlrMBbSYC2gxF9BiLqDFXECLuYAWcwEt5gJazAW0mFlAVVOx5GZkDnBU+eVDL2sB17CRGcDk8bWNN5byG4tnPTkdtzk+M4DZf6imx944ls/nl16ZUyZxq8MzA3jzjr8yc+Py4qE3iHDlzDnNNTQN6Pf7BsozLx86ll/KL91dmy84flM2DWh0o3r+Am3J+fyZ9blRZxuaAZyrA/ord6rpj27Q7nBp5fCQ5uQpxQSgfjwNPpbPX55eX1xh2/KFtTkth29yXCYAk8Owq5euXvLdZVvy0qEzC9Ekvs9ZmQBUX4Jbc+nh9MIGzcr5/NiaR3LgpmwVkE3L05eM3SFNyw/mU047SzGzCVdB1p7PP1P2Ly4t5fPHVsaGPKqjxqEJQGUGYLs2fN+3tsTGYf7ZoUEHHWGbANS6AtKhzcDw+t0VdpaycWZh1CmG+whIlat3HqywUUhTypAzCPcXkKr830tnNl4nwtdfeT4yOoHH9m8mACONE5Fu+Sp3ypU1Olumo8MLHy1m+3xKEQfUpyEkUOXS/fXDS7Q7PHbo/Fmtr4+wTQCeho5YlZeqL9+lIxsah6/MKf17dHhggHR0uFxdPsPOUo6tbJydGsXT9FsHB2hUnh4eO2SMw7Hnp3L9OKWIA47eAIrJ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"}}]);