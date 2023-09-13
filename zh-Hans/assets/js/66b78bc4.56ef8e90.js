"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[84234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>I});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},k=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),m=c(n),k=i,I=m["".concat(l,".").concat(k)]||m[k]||d[k]||o;return n?s.createElement(I,r(r({ref:t},h),{},{components:n})):s.createElement(I,r({ref:t},h))}));function I(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=k;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:i,r[1]=a;for(var c=2;c<o;c++)r[c]=n[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}k.displayName="MDXCreateElement"},80716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(87462),i=(n(67294),n(3905));const o={title:"Select all sketch elements using SOLIDWORKS API",caption:"Select All Sketch Elements",description:"This example demonstrates how to select all sketch elements (segments and points) in the active sketch",image:"select-all-sketch-elements.png",labels:["selection","sketch segment","sketch point"]},r=void 0,a={unversionedId:"codestack/solidworks-api/document/selection/select-all-sketch-elements/index",id:"codestack/solidworks-api/document/selection/select-all-sketch-elements/index",title:"Select all sketch elements using SOLIDWORKS API",description:"This example demonstrates how to select all sketch elements (segments and points) in the active sketch",source:"@site/docs/codestack/solidworks-api/document/selection/select-all-sketch-elements/index.md",sourceDirName:"codestack/solidworks-api/document/selection/select-all-sketch-elements",slug:"/codestack/solidworks-api/document/selection/select-all-sketch-elements/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/selection/select-all-sketch-elements/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/selection/select-all-sketch-elements/index.md",tags:[],version:"current",frontMatter:{title:"Select all sketch elements using SOLIDWORKS API",caption:"Select All Sketch Elements",description:"This example demonstrates how to select all sketch elements (segments and points) in the active sketch",image:"select-all-sketch-elements.png",labels:["selection","sketch segment","sketch point"]},sidebar:"tutorialSidebar",previous:{title:"Macro to select all dimensions from the drawing views of the active sheet of SOLIDWORKS drawing",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/selection/select-all-drawing-dimensions/"},next:{title:"Selecting SOLIDWORKS objects by name and coordinates using API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/selection/select-by-id/"}},l={},c=[],h={toc:c},m="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,s.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selected sketch elements in the active sketch",src:n(50356).Z,width:"581",height:"358"}),"{ width=250 }"),(0,i.kt)("p",null,"This example demonstrates how to select all sketch segments and sketch points in the active sketch using the direct ::Select method in SOLIDWORKS API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSketch As SldWorks.sketch\n        Set swSketch = swModel.SketchManager.ActiveSketch\n        \n        If Not swSketch Is Nothing Then\n            \n            swModel.ClearSelection2 True\n            \n            SelectAllSketchSegments swSketch\n            \n            SelectAllSketchPoints swSketch\n            \n        Else\n            MsgBox "Please open sketch"\n        End If\n        \n    Else\n        MsgBox "Please open part or assembly"\n    End If\n    \nEnd Sub\n\nSub SelectAllSketchSegments(sketch As SldWorks.sketch)\n    \n    Dim vSegs As Variant\n        \n    vSegs = sketch.GetSketchSegments\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vSegs)\n        Dim swSkSeg As SldWorks.SketchSegment\n        Set swSkSeg = vSegs(i)\n        swSkSeg.Select4 True, Nothing\n    Next\n    \nEnd Sub\n\nSub SelectAllSketchPoints(sketch As SldWorks.sketch)\n    \n    Dim vPoints As Variant\n        \n    vPoints = sketch.GetSketchPoints2\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vPoints)\n        Dim swSkPt As SldWorks.SketchPoint\n        Set swSkPt = vPoints(i)\n        swSkPt.Select4 True, Nothing\n    Next\n    \nEnd Sub\n')))}d.isMDXComponent=!0},50356:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkUAAAFmCAMAAABUcB72AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAP8AAAAA/wD+ANbWxHJycqaxqVpaEv///63GrRv8G/H+8WjvarOzxr+/wEflNIB/AIjiiLKxceb/5qq2uzb4Nq66voeHmuYYAObn5q/ir8XOxVbvWCT6JOM6I3mTi4Lmhsnuyezy7Cv6K1r0Wtjt2PIMAJ3inj33PZ6KLvLx5rPbuUfuSLbDtq6usu737svTy0/rQniUeIaGi2LnYrztvP4LC8LYypzynDL5Mujo59jb28fHoHXrdent6fU/PH7tfpbrlqG7sjn4OdDV14CNklDzUYL0grnFuUX3Rb3GycbNz2DxX7q5rVD3UICAgF/3X0H4QYnyiazxrEn2ScjP0aXvpa7Kuuzr5vDv5sLJzGv2a8vR07B9NNLX0tnZymP1Y7rxukz3TP0VFfdJSVT3VEbvPXP0c7Pts5DzkKffpz70QKjTsb3IvZz3nH70fmTuZqDxoErpPIXniPg9PbnfubrgugAAAGYzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///78N258AAAB4dFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AHxXGIwAAAAJcEhZcwAADsMAAA7DAcdvqGQAACHmSURBVHhe7Z39g9zGWcf3utCk58YcJGfHJAK8slPj4lx4cbFiWKCbxD2npDnbKcUJxjEcqSlpmvLy9zPPM4+kmUerkUYz0o5un88PfvRdvXr18ewjrXy3eLXmMlXCHfssfVkxoB7Z+TKbzzK8YmSYMHNAhWJm93HBK0aGCTNHrFCMfGTPV1Nmhgkzj1JHtajGKx5RJdjcoE2HxI7jGi92zB7vsHovLRYZuKNY1BrFIgN3FItao2mRkAj8ZI6HW5OO2XUUi4RwxCIhHLFICEe6awN3nK675riXDjmsSIhFBu44nUUsdsyeTu7W2WKRgTuKRa2zxSIDdxSLWmdLd50g/OyNh1sbfhyts8UiIRy0qPEdbVXhT0HooGMsarNL6l5W+GMb0l0buOOEbawNn8tyyGF50maXWGTgjs3jWiyMty/intyR5+nkbp0tFhm4Iz+uxWK5XNYeRdyTO/IsFmlYnItFSiKlEUwul1H35I48J2aR4IOWSGlEFUyKBD974+HWhh9H62yxaCimRa+9pqfjiTQvxKKhVBa9VoKR5u4XYtEwQB+0ppYI2FONTIsifUgiITHR7ro+LNTnNbpGI39eu6pLqVHInhh8Lssh3XUkxCIDd6TDQoVUJ6S0WdQOVRaVw1HEHbPIc4hFXrF9tlhk4I54WKVCilIboopikcnQTSIhMVmLDIUUbRZpjSLumEWeE7NIcIEK1Q65CG2x+dkbD7c2/DhaZ4tF/eivEBCq0dxAi44UUttrqdArCpCksy6Xvba7qxodGYs6KR3yIe3BiFsVXOfXXbPot2nvaCiEw4xBa3cNcI28dszgc1n2ervcexqKWGTAIypUDUPTWeSOPIdY5BXbZ4tFBna0FFKIRa2zB1vEYtDKLKZgEVdIIRa1zpbuehtbHHJhfRNChPTX/OyNh1sbfhyts8WiBp4K8W9liRCLZodYZIMK+TikLMJVxCKBQB9Ig740n1ZD9tYirw9JFoNWZnFH3TW6QA4grH1u6a77WeR1WAw+l+WQ7joSYhGBJpABxM4sckeeE7tG89oki0Erszi9RahBQ5s+FqnV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"}}]);