"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[88789],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>Z});var a=o(67294);function m(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function t(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(n){m(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function r(e,n){if(null==e)return{};var o,a,m=function(e,n){if(null==e)return{};var o,a,m={},t=Object.keys(e);for(a=0;a<t.length;a++)o=t[a],n.indexOf(o)>=0||(m[o]=e[o]);return m}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)o=t[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(m[o]=e[o])}return m}var s=a.createContext({}),l=function(e){var n=a.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},p=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",A={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var o=e.components,m=e.mdxType,t=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=l(o),d=m,Z=c["".concat(s,".").concat(d)]||c[d]||A[d]||t;return o?a.createElement(Z,i(i({ref:n},p),{},{components:o})):a.createElement(Z,i({ref:n},p))}));function Z(e,n){var o=arguments,m=n&&n.mdxType;if("string"==typeof e||m){var t=o.length,i=new Array(t);i[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[c]="string"==typeof e?e:m,i[1]=r;for(var l=2;l<t;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},39215:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>A,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var a=o(87462),m=(o(67294),o(3905));const t={title:"Macro create precise part bounding box using SOLIDWORKS API",caption:"Create Precise Bounding Box",description:"Macro creates a precise bounding box in the part document using SOLIDWORKS API",image:"precise-bounding-box.png",labels:["bonding box","extreme points"]},i=void 0,r={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/precise-bounding-box/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/precise-bounding-box/index",title:"Macro create precise part bounding box using SOLIDWORKS API",description:"Macro creates a precise bounding box in the part document using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/precise-bounding-box/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/precise-bounding-box",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/precise-bounding-box/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/precise-bounding-box/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/precise-bounding-box/index.md",tags:[],version:"current",frontMatter:{title:"Macro create precise part bounding box using SOLIDWORKS API",caption:"Create Precise Bounding Box",description:"Macro creates a precise bounding box in the part document using SOLIDWORKS API",image:"precise-bounding-box.png",labels:["bonding box","extreme points"]},sidebar:"tutorialSidebar",previous:{title:"Script generates model from input parameters using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/power-shell/model-generator/"},next:{title:"SOLIDWORKS macro error when preconditions are not met",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/preconditions-not-met/"}},s={},l=[{value:"Precision",id:"precision",level:3},{value:"Performance",id:"performance",level:3},{value:"Calculating precise bounding box via extreme points",id:"calculating-precise-bounding-box-via-extreme-points",level:3},{value:"Calculating approximate bounding box",id:"calculating-approximate-bounding-box",level:3}],p={toc:l},c="wrapper";function A(e){let{components:n,...t}=e;return(0,m.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Precise bounding box in the part document",src:o(66360).Z,width:"617",height:"383"}),"{ width=250 }"),(0,m.kt)("p",null,"As per ",(0,m.kt)("em",{parentName:"p"},"Remarks")," section of ",(0,m.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ipartdoc~getpartbox.html"},"IPartDoc::GetPartBox")," method (or other BoundingBox APIs) in SOLIDWORKS API Help Documentation"),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"The values returned are approximate and should not be used for comparison or calculation purposes. Furthermore, the bounding box may vary after rebuilding the model")),(0,m.kt)("p",null,"To calculate the precise bounding box it is required to find the extreme points of each body in XYZ directions via ",(0,m.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibody2~getextremepoint.html"},"IBody2::GetExtremePoint")),(0,m.kt)("p",null,"The following macros will calculate the bounding box, width, height and length of the active part document using both approaches of SOLIDWORKS API."),(0,m.kt)("p",null,"As the result 3D Sketch with bounding box is created."),(0,m.kt)("h3",{id:"precision"},"Precision"),(0,m.kt)("p",null,"Bounding boxes calculated approximately might be more than 10% inaccurate. For the following ",(0,m.kt)("a",{target:"_blank",href:o(34767).Z},"example part")," the difference between the bounding boxes volumes equal to 14%. The following images show the differences (green box is a precise calculation and red box is an approximate calculation):"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Front View",src:o(1024).Z,width:"469",height:"326"}),"{ width=250 }"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Top View",src:o(30186).Z,width:"362",height:"313"}),"{ width=250 }"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Right View",src:o(45505).Z,width:"321",height:"255"}),"{ width=250 }"),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"The precise bounding box calculated by extreme points is exactly equal to the bounding box created by ",(0,m.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/English/WhatsNew/t_bounding_box_for_part_assem.htm"},"bounding box feature")," added in SOLIDWORKS 2018")),(0,m.kt)("h3",{id:"performance"},"Performance"),(0,m.kt)("p",null,"Extraction of approximate box is more than 300 times quicker. For a single body part approximate calculation of bounding box took 0.016ms, while it took 5.57 ms for precise calculation of the same part. For multi-body part of 63 bodies it took 0.018ms for approximate calculations and 16.68 ms for precise calculations."),(0,m.kt)("p",null,"As a summary on avarage it would be possible to calculate more than 60000 approximate bounding boxes per second and only about 50 precise bounding boxes per second (more than 1000 times difference)"),(0,m.kt)("h3",{id:"calculating-precise-bounding-box-via-extreme-points"},"Calculating precise bounding box via extreme points"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    If Not swPart Is Nothing Then\n            \n        Dim vBBox As Variant\n    \n        vBBox = GetPreciseBoundingBox(swPart)\n     \n        DrawBox swPart, CDbl(vBBox(0)), CDbl(vBBox(1)), CDbl(vBBox(2)), CDbl(vBBox(3)), CDbl(vBBox(4)), CDbl(vBBox(5))\n        \n        Debug.Print "Width: " & CDbl(vBBox(3)) - CDbl(vBBox(0))\n        Debug.Print "Length: " & CDbl(vBBox(5)) - CDbl(vBBox(2))\n        Debug.Print "Height: " & CDbl(vBBox(4)) - CDbl(vBBox(1))\n        \n    Else\n        \n        MsgBox "Please open part"\n        \n    End If\n    \nEnd Sub\n\nFunction GetPreciseBoundingBox(part As SldWorks.PartDoc) As Variant\n    \n    Dim dBox(5) As Double\n    \n    Dim vBodies As Variant\n    vBodies = part.GetBodies2(swBodyType_e.swSolidBody, True)\n        \n    Dim minX As Double\n    Dim minY As Double\n    Dim minZ As Double\n    Dim maxX As Double\n    Dim maxY As Double\n    Dim maxZ As Double\n        \n    If Not IsEmpty(vBodies) Then\n    \n        Dim i As Integer\n        \n        For i = 0 To UBound(vBodies)\n        \n            Dim swBody As SldWorks.Body2\n    \n            Set swBody = vBodies(i)\n            \n            Dim x As Double\n            Dim y As Double\n            Dim z As Double\n            \n            swBody.GetExtremePoint 1, 0, 0, x, y, z\n            \n            If i = 0 Or x > maxX Then\n                maxX = x\n            End If\n            \n            swBody.GetExtremePoint -1, 0, 0, x, y, z\n            \n            If i = 0 Or x < minX Then\n                minX = x\n            End If\n            \n            swBody.GetExtremePoint 0, 1, 0, x, y, z\n            \n            If i = 0 Or y > maxY Then\n                maxY = y\n            End If\n            \n            swBody.GetExtremePoint 0, -1, 0, x, y, z\n            \n            If i = 0 Or y < minY Then\n                minY = y\n            End If\n            \n            swBody.GetExtremePoint 0, 0, 1, x, y, z\n            \n            If i = 0 Or z > maxZ Then\n                maxZ = z\n            End If\n            \n            swBody.GetExtremePoint 0, 0, -1, x, y, z\n            \n            If i = 0 Or z < minZ Then\n                minZ = z\n            End If\n            \n        Next\n    \n    End If\n    \n    dBox(0) = minX: dBox(1) = minY: dBox(2) = minZ\n    dBox(3) = maxX: dBox(4) = maxY: dBox(5) = maxZ\n    \n    GetPreciseBoundingBox = dBox\n    \nEnd Function\n\nSub DrawBox(model As SldWorks.ModelDoc2, minX As Double, minY As Double, minZ As Double, maxX As Double, maxY As Double, maxZ As Double)\n\n    model.ClearSelection2 True\n            \n    model.SketchManager.Insert3DSketch True\n    model.SketchManager.AddToDB = True\n    \n    model.SketchManager.CreateLine maxX, minY, minZ, maxX, minY, maxZ\n    model.SketchManager.CreateLine maxX, minY, maxZ, minX, minY, maxZ\n    model.SketchManager.CreateLine minX, minY, maxZ, minX, minY, minZ\n    model.SketchManager.CreateLine minX, minY, minZ, maxX, minY, minZ\n\n    model.SketchManager.CreateLine maxX, maxY, minZ, maxX, maxY, maxZ\n    model.SketchManager.CreateLine maxX, maxY, maxZ, minX, maxY, maxZ\n    model.SketchManager.CreateLine minX, maxY, maxZ, minX, maxY, minZ\n    model.SketchManager.CreateLine minX, maxY, minZ, maxX, maxY, minZ\n    \n    model.SketchManager.CreateLine minX, minY, minZ, minX, maxY, minZ\n    model.SketchManager.CreateLine minX, minY, maxZ, minX, maxY, maxZ\n    \n    model.SketchManager.CreateLine maxX, minY, minZ, maxX, maxY, minZ\n    model.SketchManager.CreateLine maxX, minY, maxZ, maxX, maxY, maxZ\n    \n    model.SketchManager.AddToDB = False\n    model.SketchManager.Insert3DSketch True\n    \nEnd Sub\n\n')),(0,m.kt)("h3",{id:"calculating-approximate-bounding-box"},"Calculating approximate bounding box"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    If Not swPart Is Nothing Then\n                \n        Dim vBBox As Variant\n        \n        vBBox = swPart.GetPartBox(True)\n         \n        DrawBox swPart, CDbl(vBBox(0)), CDbl(vBBox(1)), CDbl(vBBox(2)), CDbl(vBBox(3)), CDbl(vBBox(4)), CDbl(vBBox(5))\n        \n        Debug.Print "Width: " & vBBox(3) - vBBox(0)\n        Debug.Print "Length: " & vBBox(5) - vBBox(2)\n        Debug.Print "Height: " & vBBox(4) - vBBox(1)\n        \n    Else\n        \n        MsgBox "Please open part"\n        \n    End If\n    \nEnd Sub\n\nSub DrawBox(model As SldWorks.ModelDoc2, minX As Double, minY As Double, minZ As Double, maxX As Double, maxY As Double, maxZ As Double)\n\n    model.ClearSelection2 True\n            \n    model.SketchManager.Insert3DSketch True\n    model.SketchManager.AddToDB = True\n    \n    model.SketchManager.CreateLine maxX, minY, minZ, maxX, minY, maxZ\n    model.SketchManager.CreateLine maxX, minY, maxZ, minX, minY, maxZ\n    model.SketchManager.CreateLine minX, minY, maxZ, minX, minY, minZ\n    model.SketchManager.CreateLine minX, minY, minZ, maxX, minY, minZ\n\n    model.SketchManager.CreateLine maxX, maxY, minZ, maxX, maxY, maxZ\n    model.SketchManager.CreateLine maxX, maxY, maxZ, minX, maxY, maxZ\n    model.SketchManager.CreateLine minX, maxY, maxZ, minX, maxY, minZ\n    model.SketchManager.CreateLine minX, maxY, minZ, maxX, maxY, minZ\n    \n    model.SketchManager.CreateLine minX, minY, minZ, minX, maxY, minZ\n    model.SketchManager.CreateLine minX, minY, maxZ, minX, maxY, maxZ\n    \n    model.SketchManager.CreateLine maxX, minY, minZ, maxX, maxY, minZ\n    model.SketchManager.CreateLine maxX, minY, maxZ, maxX, maxY, maxZ\n    \n    model.SketchManager.AddToDB = False\n    model.SketchManager.Insert3DSketch True\n    \nEnd Sub\n\n\n')))}A.isMDXComponent=!0},34767:(e,n,o)=>{o.d(n,{Z:()=>a});const a=o.p+"assets/files/bbox-precision-8c0eb50a2d7c5b329bd08540536d52b1.SLDPRT"},1024:(e,n,o)=>{o.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdUAAAFGCAMAAAALlfUoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAGl9z/8AAGFkbgD/ANPX5kVHUU1QW4CAgLS3xW1vd1VYZIyPnJqerf///3V3gUhKVMTH1llcaWprdKeqtoSHk5SXpFJVYXJ0fVxfbHZ6iba6yHF0g97i8Wlten6CkGZocUpNWMvP3p6gq6uuu6SotU9SXry/zXl8ildaZoWJl3l7hH1/inN3hm5xgIGFkmFlcmZpd+Xp+JmbpZGTnaGksYGDjHp+j8DAwEVIUWxvfMnM26isub/C0KKnt62ywtnc7IiMml9ib6quv9DU46WpuZmcq5GVo4eJk+Hk9Lm8y5aaqI6SoLG0wtvf7rK3x8HG1+ru/sHF07q/z5OXpuPm9p+irr3B0Z6isdDW6K+yvtba6cbK2M7R4AAAADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///yw3TU8AAABfdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Ak5pfLAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAFfhJREFUeF7t3Q1D1Na2h/GZ2lqlY7k9Clr1Cj1oy0XK6AEUKELRCpaX2qtWuZ6e7/817lp7/ZPsJDuZZF53dtajR4aZydv+sTMZjpXOt1p4qWqIqWqIqWqIqWqIqWqIqWqIqWqIqWqIqWqIqWqIqWqIqWqIqWqIqWqIqWqIqWqIqWqIqWqIqWqIqWqIqWqIpVWvffnll7ip+V5ide3aNdxCKVVGVdaGlFgRaoY1o/qF1shKVfEcrXGVqH77xRdTPgF3qU/v35+e3nt7cXj46uDDWn8JPZc/B7e6Sr+5u/LncOWWMyuTe+MbknmASm7VDrv+/PlS/+jk+PLgNbX/6vDw8OLiLXfv3r3T0/fv33/69O7PP3mQMF52yYslzUbcQjlV3JpK3e4peR4c/G+2f1F//fX777//N/fHH7/++n+vTwjcDASPCsb356T7rjY2+Df9z9yI/8RdEp4o98lN3GlKfVI97FWFcCipDHz/7PWrw4u3907fE+0veVdrAvqk2qWvyLcHNyBpx6jG9O1Zb22h3zcT2PI0w4Hxs4BK2tvb4z82+Bfd4D/5xljD/hRk9rmgu2Sb5aVjXTq/pAn8llg/OVj9VO3SKXf/6M/f/+KZ+S+ZoEZTpufr87WsJh0/hgjjyFh7ew8mkVkzhy3VCTtZEB+DYDoyoHGrS70bB/uHPF3//DvL6qVqd//19tnzf3711b+TvqJ+++2390dL6wLJBypjYYaLBhmDzj0dW1ih3V7kajZclOxbQaV8Jj4+1zxNer7w4fLgFZ+G32VZfVTtHlyenf9847ukpRSgTYixNy0vPxlPy1ghwqYkB6fZM0agVlfXl/prvfPF4+39i9MX3333i/RP6T+Z6OvU3enZGs5EknHM9Hztw43L14dv79F0TbN6qEqoi73VjZ9+ouuluzSOGFtpmcPgSy9L+h4fq4ZVmoT2wd799d72ddqV09OfpE/UOxO+5v7moEel/IBE8cmGwqmH+7VS/+kll/tp4NX+yfENma4ZVv9Uuwc3PvQW7m68ujTDSkFRBv77dP+oFy1Av/hPV7KFxJa+gLALTx+s0vsJwH769CIxjUWzlDYigP7gzLU7RZd8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"},45505:(e,n,o)=>{o.d(n,{Z:()=>a});const a="data:image/png;base64,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"},30186:(e,n,o)=>{o.d(n,{Z:()=>a});const a="data:image/png;base64,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"},66360:(e,n,o)=>{o.d(n,{Z:()=>a});const a=o.p+"assets/images/precise-bounding-box-fdc753fba4900645203f23d970453bb1.png"}}]);