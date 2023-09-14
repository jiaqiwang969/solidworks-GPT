"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[16763],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>p});var o=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,s=function(t,e){if(null==t)return{};var n,o,s={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var A=o.createContext({}),l=function(t){var e=o.useContext(A),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},m=function(t){var e=l(t.components);return o.createElement(A.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},Z=o.forwardRef((function(t,e){var n=t.components,s=t.mdxType,r=t.originalType,A=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=l(n),Z=s,p=c["".concat(A,".").concat(Z)]||c[Z]||k[Z]||r;return n?o.createElement(p,a(a({ref:e},m),{},{components:n})):o.createElement(p,a({ref:e},m))}));function p(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var r=n.length,a=new Array(r);a[0]=Z;var i={};for(var A in e)hasOwnProperty.call(e,A)&&(i[A]=e[A]);i.originalType=t,i[c]="string"==typeof t?t:s,a[1]=i;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}Z.displayName="MDXCreateElement"},19211:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>A,contentTitle:()=>a,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(87462),s=(n(67294),n(3905));const r={title:"Understanding transforms in sketches while using SOLIDWORKS API",caption:"Understanding Sketch Transforms",description:"Explanation of model to sketch and sketch to model transformations in SOLIDWORKS API to properly calculate the coordinates of sketch segments",image:"sketch-coordinate-systems.png",labels:["transform","sketch"]},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform/index",title:"Understanding transforms in sketches while using SOLIDWORKS API",description:"Explanation of model to sketch and sketch to model transformations in SOLIDWORKS API to properly calculate the coordinates of sketch segments",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform/index.md",tags:[],version:"current",frontMatter:{title:"Understanding transforms in sketches while using SOLIDWORKS API",caption:"Understanding Sketch Transforms",description:"Explanation of model to sketch and sketch to model transformations in SOLIDWORKS API to properly calculate the coordinates of sketch segments",image:"sketch-coordinate-systems.png",labels:["transform","sketch"]},sidebar:"tutorialSidebar",previous:{title:"Get corresponding entities (faces, edges and vertices) in the derived part using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tracking-ids/derived-part-get-corresponding-entity/"},next:{title:"Pan model views with screen pixels using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform-pan-view/"}},A={},l=[{value:"Reading the local coordinates from sketch point",id:"reading-the-local-coordinates-from-sketch-point",level:2},{value:"Retrieving the global coordinates from sketch point",id:"retrieving-the-global-coordinates-from-sketch-point",level:2},{value:"Creating point in sketch from global coordinates",id:"creating-point-in-sketch-from-global-coordinates",level:2}],m={toc:l},c="wrapper";function k(t){let{components:e,...r}=t;return(0,s.kt)(c,(0,o.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When working with sketch segments (e.g. line, arc, etc.) or points it is important to consider the fact that the coordinates values returned from SOLIDWORKS API such as ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchPoint~X.html"},"ISketchPoint::X")," property are relative to the local sketch coordinate system."),(0,s.kt)("p",null,"Those values will match for 3D Sketches or 2D sketches created on Front plane (if not moved), but will be different in other cases."),(0,s.kt)("p",null,"As shown on the following picture the value of the point is displayed as { -50, 10, 0 } for the local sketch coordinate system (in the sketch point property manager page) and as the { -50, 0, -10 } for the global coordinate system (in the SOLIDWORKS status bar). This difference is caused by the fact that 2D sketch is created on the Top Plane."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Different values for the local and global coordinate systems.",src:n(44019).Z,width:"677",height:"696"}),"{ width=450 }"),(0,s.kt)("p",null,"Local coordinate system of 2D sketch is displayed with red X and Y arrows when activating the sketch. And global coordinate system is represented with red, green and blue triad in the bottom right corner of SOLIDWORKS model window."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Local sketch coordinate system and global coordinate system",src:n(86268).Z,width:"428",height:"305"}),"{ width=350 }"),(0,s.kt)("h2",{id:"reading-the-local-coordinates-from-sketch-point"},"Reading the local coordinates from sketch point"),(0,s.kt)("p",null,"The following macro reads the selected sketch point coordinate relative to the local sketch coordinate system and outputs it to the immediate Window of SOLIDWORKS."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Extracted coordinate of sketch point",src:n(66026).Z,width:"656",height:"183"}),"{ width=350 }"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create a sketch on the Front Plane and create a sketch point"),(0,s.kt)("li",{parentName:"ul"},"Select this point"),(0,s.kt)("li",{parentName:"ul"},"Run the macro and compare with the global coordinate value (result is printed in meters)"),(0,s.kt)("li",{parentName:"ul"},"Values will match")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Sketch point global coordinate",src:n(9927).Z,width:"647",height:"58"}),"{ width=350 }"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create new sketch on any plane but Front Plane (e.g. Top Plane)"),(0,s.kt)("li",{parentName:"ul"},"Repeat the steps above"),(0,s.kt)("li",{parentName:"ul"},"Now coordinates do not match.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swSkPt As SldWorks.SketchPoint\n    Set swSkPt = swModel.SelectionManager.GetSelectedObject6(1, -1)\n    \n    Debug.Print swSkPt.X & "; " & swSkPt.Y & "; " & swSkPt.Z\n    \nEnd Sub\n\n')),(0,s.kt)("h2",{id:"retrieving-the-global-coordinates-from-sketch-point"},"Retrieving the global coordinates from sketch point"),(0,s.kt)("p",null,"In order to find the value of the coordinate relative to the global coordinate system it is required to find the sketch to model ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/geometry/transformation/"},"transformation matrix")," via ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketch~ModelToSketchTransform.html"},"ISketch::ModelToSketchTransform")," SOLIDWORKS API property and apply this to the point coordinate."),(0,s.kt)("p",null,"Below macro can be used to perform the steps from the previous paragraph, but now the extracted coordinates will match the values in the global coordinate system."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swSkPt As SldWorks.SketchPoint\n    Set swSkPt = swModel.SelectionManager.GetSelectedObject6(1, -1)\n    \n    Dim swSketch As SldWorks.Sketch\n    Set swSketch = swSkPt.GetSketch\n    \n    'get the sketch to model transform (by inversing the model to sketch transform)\n    Dim swTransform As SldWorks.MathTransform\n    Set swTransform = swSketch.ModelToSketchTransform.Inverse\n        \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim dPt(2) As Double\n    dPt(0) = swSkPt.X\n    dPt(1) = swSkPt.Y\n    dPt(2) = swSkPt.Z\n    \n    'create math point from the coordinate\n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(dPt)\n    \n    'multiple transform to move the point\n    Set swMathPt = swMathPt.MultiplyTransform(swTransform)\n    \n    'read new coordinate values\n    Dim vPt As Variant\n    vPt = swMathPt.ArrayData\n    \n    Debug.Print vPt(0) & \"; \" & vPt(1) & \"; \" & vPt(2)\n    \nEnd Sub\n")),(0,s.kt)("h2",{id:"creating-point-in-sketch-from-global-coordinates"},"Creating point in sketch from global coordinates"),(0,s.kt)("p",null,"Inversed transformation should be used when it is required to create a sketch point in the 2D sketch based on the global coordinate value. The following example inserts a sketch point into an active sketch based on a XYZ value."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n        \n    Dim swSketch As SldWorks.Sketch\n    Set swSketch = swModel.SketchManager.ActiveSketch\n    \n    'get the model to sketch transform\n    Dim swTransform As SldWorks.MathTransform\n    Set swTransform = swSketch.ModelToSketchTransform\n        \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim dPt(2) As Double\n    dPt(0) = 0.025\n    dPt(1) = 0\n    dPt(2) = 0.1\n    \n    'create math point from the coordinate\n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(dPt)\n    \n    'multiple transform to move the point\n    Set swMathPt = swMathPt.MultiplyTransform(swTransform)\n    \n    'read new coordinate values\n    Dim vPt As Variant\n    vPt = swMathPt.ArrayData\n    \n    swModel.SketchManager.CreatePoint vPt(0), vPt(1), vPt(2)\n    \nEnd Sub\n")))}k.isMDXComponent=!0},66026:(t,e,n)=>{n.d(e,{Z:()=>o});const o="data:image/png;base64,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"},44019:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/global-local-coordinates-79460f85c476e5791163769608621b21.png"},86268:(t,e,n)=>{n.d(e,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAawAAAExCAMAAAAX7mYDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAGa2/2YAAAA6kLb/tmZmOv+2ZgAAOgBmtrIZGRkrGWJi8bb//wAA/9uQOjqQ23oZGdvbkDoAAP8AABkZnZDb2wAAZv9CQv/+/v+cnLb/2wCAAJA6AEVF5Nv//yIi0/8hIRkZdGQZGf+9vf9jYxlUGRkZUmaQkP//2ysZGRkZNBkZtBkcGf//tv+MjJIZGbZmAMsaGjo6kP/OzhlBGToAZv8PDzo6Oigo3JDb/xlkGXNz+RkZhBkZwEsZGf+trf/bkKQZGf9ycv8yMkxM///e3rwaGhkZYDQ08RkZq/9SUhldGRkzGYQZGW0ZGRkZkz4+4RoayBkZuhkZQlZW7BkZJFQZGTsZGWNj/xk6GYoZGZkZGcMaGi8v6BlLGdAaGv8qKnt7/RkZohkZfRkZahkZizMz3KgZGWlp9BkZWRkkGU9P6BkZSx8fzScn2v85OXIZGVsZGf+ysisr4jg4+EEZGRkZKzAw6v8REVlZ7QAAAGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///9gOCVoAAAB7dFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AJPDqOoAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAzISURBVHhe7Z0LexPHFYaFSIUhRhCvY0TiBgiQKHWNRSBNQ3AQtoGYGFFDL2DTEG5tSpMWkl7ov++5zO6OjIR2Ja/kM/u9YHt2tDOb57yey85MHioNYAbIMgRkGQKyDAFZhoAsQ0CWISDLEJBlCMgyBGQZArIMAVmGgCxDQJYhIMsQkGUIyDIEZBkCsgwBWYaALENAliEgyxCQZQjIMgRkGQKyDAFZhoAsQ0CWISDLEJBlCMgyBGQZArIMAVmGgCxDQJYhIMsQkGUIyDIEZBkCsgwBWYaALENAliEgyxCQZQjIMgRkGQKyDAFZhoAsQ0CWISBLqB/4wqX6URt4x5tozxxxqVEouaxapVLZ/8GQslpUuLLPXbwZkVWvjGis3LLqHOv61FCy2jNsebGayRZkjcxilePN9JC1WCWJKTtlpWWzMKAb3PGsfpRcVhyj/LIGt0UfyBqZ5nw85HDo9WqxqgNRnQckFsLD2tw0y6IxKjHUnKe8GCop93Ql63NvVSvkoD1Dw+I7LKvG9dbmppN6uOquZ8UP70O5xywKpMaYZbU4TO0Zim+NBxf32y5pGtYosEc8RX4vqOmWRjtJkgEOu1RI6URWWk/dKybPSh/em3LLkobAISNZErVGS2y0KE8D2JznjwmJtPtO+B2XlhFPXtJNJzRHLpysrnpIEH3iaksf3puSyxJdElntmVzU6hQ1TSaDjY5ZyaXXsmJvFGov6Qa15rzkSDmV1V2PL8t7eG9KL4siSzGsH/iF/K7LoEEMlJW0uAGyXE5vWTJWcZvTu7yH9wayJIZxNxhHm9BkP1nOBeMZ8pIZZMkTJaV3xaX7AlkSVfparFKEX2swSQBf776SyLIad6eXdDY1xxuzknq0ak+W9/DelFoWTaM5hC6ysiShDnhRw4VOFjlqNBvcIYvK8efN+SNaRid4XtLJ0uq92WBSj9xGXR994p6VPrw35W5Z8qLD4ZfISlxl4JBw0byec3lgoai+Jkvv5PhrSltFmnSyuJrK1GL1dVmkiKY175Lt5Fnpw3uCbtAQkGUIyDIEZBkCsgwBWYaALENA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"},9927:(t,e,n)=>{n.d(e,{Z:()=>o});const o="data:image/png;base64,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"}}]);