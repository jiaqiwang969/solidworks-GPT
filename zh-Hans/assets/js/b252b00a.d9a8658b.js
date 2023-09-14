"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[57671],{3905:(n,o,e)=>{e.d(o,{Zo:()=>l,kt:()=>h});var t=e(67294);function s(n,o,e){return o in n?Object.defineProperty(n,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[o]=e,n}function r(n,o){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),e.push.apply(e,t)}return e}function i(n){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?r(Object(e),!0).forEach((function(o){s(n,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))}))}return n}function a(n,o){if(null==n)return{};var e,t,s=function(n,o){if(null==n)return{};var e,t,s={},r=Object.keys(n);for(t=0;t<r.length;t++)e=r[t],o.indexOf(e)>=0||(s[e]=n[e]);return s}(n,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)e=r[t],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(s[e]=n[e])}return s}var c=t.createContext({}),p=function(n){var o=t.useContext(c),e=o;return n&&(e="function"==typeof n?n(o):i(i({},o),n)),e},l=function(n){var o=p(n.components);return t.createElement(c.Provider,{value:o},n.children)},d="mdxType",m={inlineCode:"code",wrapper:function(n){var o=n.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(n,o){var e=n.components,s=n.mdxType,r=n.originalType,c=n.parentName,l=a(n,["components","mdxType","originalType","parentName"]),d=p(e),u=s,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return e?t.createElement(h,i(i({ref:o},l),{},{components:e})):t.createElement(h,i({ref:o},l))}));function h(n,o){var e=arguments,s=o&&o.mdxType;if("string"==typeof n||s){var r=e.length,i=new Array(r);i[0]=u;var a={};for(var c in o)hasOwnProperty.call(o,c)&&(a[c]=o[c]);a.originalType=n,a[d]="string"==typeof n?n:s,i[1]=a;for(var p=2;p<r;p++)i[p]=e[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,e)}u.displayName="MDXCreateElement"},74130:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var t=e(87462),s=(e(67294),e(3905));const r={title:"Batch add components and position them in the grid using SOLIDWORKS API",caption:"Insert And Position Components In A Grid",description:"VBA example demonstrates how to batch insert and position components in the 3D grid using SOLIDWORKS API by providing the number of rows and columns and distance between components",image:"positioned-components.png",labels:["components","positions"]},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/insert-position/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/insert-position/index",title:"Batch add components and position them in the grid using SOLIDWORKS API",description:"VBA example demonstrates how to batch insert and position components in the 3D grid using SOLIDWORKS API by providing the number of rows and columns and distance between components",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/insert-position/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/insert-position",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/insert-position/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/insert-position/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/insert-position/index.md",tags:[],version:"current",frontMatter:{title:"Batch add components and position them in the grid using SOLIDWORKS API",caption:"Insert And Position Components In A Grid",description:"VBA example demonstrates how to batch insert and position components in the 3D grid using SOLIDWORKS API by providing the number of rows and columns and distance between components",image:"positioned-components.png",labels:["components","positions"]},sidebar:"tutorialSidebar",previous:{title:"Get and select all visible components in assembly using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible/"},next:{title:"Get Model Doc from lightweight component using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/lightweight-get-model-doc/"}},c={},p=[],l={toc:p},d="wrapper";function m(n){let{components:o,...r}=n;return(0,s.kt)(d,(0,t.Z)({},l,r,{components:o,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Components inserted into 2 x 2 x 2 grid",src:e(48834).Z,width:"610",height:"640"}),"{ width=250 }"),(0,s.kt)("p",null,"This example demonstrates the performance efficient way of inserting a batch of components into assembly and automatic positioning of them in 3D grid using SOLIDWORKS API."),(0,s.kt)("p",null,"Components are inserted using the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2011/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAssemblyDoc~AddComponents3.html"},"IAssemblyDoc::AddComponents3")," SOLIDWORKS API method. Which allows to preassign the transformations for components to be inserted."),(0,s.kt)("p",null,"Boundaries of the grid can be specified by setting the constants in the begging of the macro."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const ROWS_COUNT As Integer = 2 'maximum number of components in a row (parallel to X)\nConst COLUMNS_COUNT As Integer = 2 'maximum number of components in a row (parallel to Y)\nConst DISTANCE As Double = 0.1 'distance between components in rows, columns and levels\n")),(0,s.kt)("p",null,"Specify the list of components to insert by assigning the values of ",(0,s.kt)("em",{parentName:"p"},"compsPaths")," array. Inserting the same component path in different positions is supported."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim compsPaths(N) As String\n    \ncompsPaths(0) = "Full path to part or assembly"\ncompsPaths(1) = "Full path to part or assembly"\n...\ncompsPaths(N) = "Full path to part or assembly"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const ROWS_COUNT As Integer = 2\nConst COLUMNS_COUNT As Integer = 2\nConst DISTANCE As Double = 0.1\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim compsPaths(7) As String\n    \n    compsPaths(0) = "D:\\models\\box1.sldprt"\n    compsPaths(1) = "D:\\models\\box2.sldprt"\n    compsPaths(2) = "D:\\models\\box3.sldprt"\n    compsPaths(3) = "D:\\models\\box1.sldprt"\n    compsPaths(4) = "D:\\models\\box1.sldprt"\n    compsPaths(5) = "D:\\models\\box2.sldprt"\n    compsPaths(6) = "D:\\models\\box3.sldprt"\n    compsPaths(7) = "D:\\models\\box1.sldprt"\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        InsertComponents swAssy, compsPaths, ROWS_COUNT, COLUMNS_COUNT, DISTANCE\n    Else\n        MsgBox "Please open assembly"\n    End If\n    \nEnd Sub\n\nSub InsertComponents(assy As SldWorks.AssemblyDoc, vPaths As Variant, rows As Integer, columns As Integer, dist As Double)\n    \n    Dim transforms() As Double\n    ReDim transforms((UBound(vPaths) + 1) * 16 - 1)\n    \n    Dim coordSys() As String\n    ReDim coordSys(UBound(vPaths))\n    \n    Dim level As Integer\n    Dim row As Integer\n    Dim column As Integer\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vPaths)\n        \n        If row = rows Then\n            \n            row = 0\n            column = column + 1\n            \n            If column = columns Then\n                column = 0\n                level = level + 1\n            End If\n        \n        End If\n        \n        Dim vTransform As Variant\n        vTransform = ComposeTransform(row * dist, column * dist, level * dist)\n        \n        Dim j As Integer\n        \n        For j = 0 To UBound(vTransform)\n            transforms(i * (UBound(vTransform) + 1) + j) = vTransform(j)\n        Next\n        \n        row = row + 1\n        \n    Next\n    \n    assy.AddComponents3 vPaths, transforms, coordSys\n    \nEnd Sub\n\nFunction ComposeTransform(x As Double, y As Double, z As Double) As Variant\n    \n    Dim dMatrix(15) As Double\n    dMatrix(0) = 1: dMatrix(1) = 0: dMatrix(2) = 0: dMatrix(3) = 0\n    dMatrix(4) = 1: dMatrix(5) = 0: dMatrix(6) = 0: dMatrix(7) = 0\n    dMatrix(8) = 1: dMatrix(9) = x: dMatrix(10) = y: dMatrix(11) = z\n    dMatrix(12) = 1: dMatrix(13) = 0: dMatrix(14) = 0: dMatrix(15) = 0\n    \n    ComposeTransform = dMatrix\n    \nEnd Function\n')))}m.isMDXComponent=!0},48834:(n,o,e)=>{e.d(o,{Z:()=>t});const t=e.p+"assets/images/positioned-components-80d6362286045d8233f2d44320c91c65.png"}}]);