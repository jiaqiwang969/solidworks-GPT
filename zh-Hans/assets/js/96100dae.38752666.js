"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[42988],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>b});var o=t(67294);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,o,s=function(n,e){if(null==n)return{};var t,o,s={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var l=o.createContext({}),c=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=c(n.components);return o.createElement(l.Provider,{value:e},n.children)},d="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,s=n.mdxType,r=n.originalType,l=n.parentName,p=a(n,["components","mdxType","originalType","parentName"]),d=c(t),u=s,b=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return t?o.createElement(b,i(i({ref:e},p),{},{components:t})):o.createElement(b,i({ref:e},p))}));function b(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var r=t.length,i=new Array(r);i[0]=u;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a[d]="string"==typeof n?n:s,i[1]=a;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33007:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(87462),s=(t(67294),t(3905));const r={title:"\u4f7f\u7528SOLIDWORKS API\u6279\u91cf\u6dfb\u52a0\u7ec4\u4ef6\u5e76\u5c06\u5176\u5b9a\u4f4d\u5728\u7f51\u683c\u4e2d",caption:"\u5728\u7f51\u683c\u4e2d\u63d2\u5165\u548c\u5b9a\u4f4d\u7ec4\u4ef6"},i=void 0,a={unversionedId:"codestack/solidworks-api/document/assembly/components/insert-position/index",id:"codestack/solidworks-api/document/assembly/components/insert-position/index",title:"\u4f7f\u7528SOLIDWORKS API\u6279\u91cf\u6dfb\u52a0\u7ec4\u4ef6\u5e76\u5c06\u5176\u5b9a\u4f4d\u5728\u7f51\u683c\u4e2d",description:"VBA\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u6279\u91cf\u63d2\u5165\u7ec4\u4ef6\u5e76\u5c06\u5b83\u4eec\u81ea\u52a8\u5b9a\u4f4d\u57283D\u7f51\u683c\u4e2d\u7684\u65b9\u6cd5\uff0c\u901a\u8fc7\u63d0\u4f9b\u884c\u6570\u3001\u5217\u6570\u548c\u7ec4\u4ef6\u4e4b\u95f4\u7684\u8ddd\u79bb",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/assembly/components/insert-position/index.md",sourceDirName:"codestack/solidworks-api/document/assembly/components/insert-position",slug:"/codestack/solidworks-api/document/assembly/components/insert-position/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/insert-position/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/assembly/components/insert-position/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u6279\u91cf\u6dfb\u52a0\u7ec4\u4ef6\u5e76\u5c06\u5176\u5b9a\u4f4d\u5728\u7f51\u683c\u4e2d",caption:"\u5728\u7f51\u683c\u4e2d\u63d2\u5165\u548c\u5b9a\u4f4d\u7ec4\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u5e76\u9009\u62e9\u88c5\u914d\u4e2d\u7684\u6240\u6709\u53ef\u89c1\u90e8\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/get-visible/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u8f7b\u91cf\u7ea7\u7ec4\u4ef6\u83b7\u53d6\u6a21\u578b\u6587\u6863",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/lightweight-get-model-doc/"}},l={},c=[{value:"labels: components,positions",id:"labels-componentspositions",level:2}],p={toc:c},d="wrapper";function m(n){let{components:e,...r}=n;return(0,s.kt)(d,(0,o.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"VBA\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u6279\u91cf\u63d2\u5165\u7ec4\u4ef6\u5e76\u5c06\u5b83\u4eec\u81ea\u52a8\u5b9a\u4f4d\u57283D\u7f51\u683c\u4e2d\u7684\u65b9\u6cd5\uff0c\u901a\u8fc7\u63d0\u4f9b\u884c\u6570\u3001\u5217\u6570\u548c\u7ec4\u4ef6\u4e4b\u95f4\u7684\u8ddd\u79bb\nimage: positioned-components.png"),(0,s.kt)("h2",{id:"labels-componentspositions"},"labels: ","[components,positions]"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Components inserted into 2 x 2 x 2 grid",src:t(413).Z,width:"610",height:"640"}),"{ width=250 }"),(0,s.kt)("p",null,"\u672c\u793a\u4f8b\u6f14\u793a\u4e86\u4f7f\u7528SOLIDWORKS API\u5c06\u4e00\u6279\u7ec4\u4ef6\u6279\u91cf\u63d2\u5165\u88c5\u914d\u4f53\u5e76\u81ea\u52a8\u5c06\u5b83\u4eec\u5b9a\u4f4d\u57283D\u7f51\u683c\u4e2d\u7684\u9ad8\u6548\u65b9\u6cd5\u3002"),(0,s.kt)("p",null,"\u7ec4\u4ef6\u662f\u4f7f\u7528",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2011/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAssemblyDoc~AddComponents3.html"},"SOLIDWORKS API\u7684IAssemblyDoc::AddComponents3"),"\u65b9\u6cd5\u63d2\u5165\u7684\u3002\u8be5\u65b9\u6cd5\u5141\u8bb8\u9884\u5148\u5206\u914d\u8981\u63d2\u5165\u7684\u7ec4\u4ef6\u7684\u53d8\u6362\u3002"),(0,s.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5728\u5b8f\u7684\u5f00\u5934\u8bbe\u7f6e\u5e38\u91cf\u6765\u6307\u5b9a\u7f51\u683c\u7684\u8fb9\u754c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const ROWS_COUNT As Integer = 2 '\u6bcf\u884c\uff08\u4e0eX\u8f74\u5e73\u884c\uff09\u4e2d\u7684\u6700\u5927\u7ec4\u4ef6\u6570\nConst COLUMNS_COUNT As Integer = 2 '\u6bcf\u5217\uff08\u4e0eY\u8f74\u5e73\u884c\uff09\u4e2d\u7684\u6700\u5927\u7ec4\u4ef6\u6570\nConst DISTANCE As Double = 0.1 '\u884c\u3001\u5217\u548c\u5c42\u4e4b\u95f4\u7684\u8ddd\u79bb\n")),(0,s.kt)("p",null,"\u901a\u8fc7\u5206\u914d",(0,s.kt)("em",{parentName:"p"},"compsPaths"),"\u6570\u7ec4\u7684\u503c\u6765\u6307\u5b9a\u8981\u63d2\u5165\u7684\u7ec4\u4ef6\u5217\u8868\u3002\u652f\u6301\u5728\u4e0d\u540c\u4f4d\u7f6e\u63d2\u5165\u76f8\u540c\u7684\u7ec4\u4ef6\u8def\u5f84\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim compsPaths(N) As String\n    \ncompsPaths(0) = "\u90e8\u4ef6\u6216\u88c5\u914d\u4f53\u7684\u5b8c\u6574\u8def\u5f84"\ncompsPaths(1) = "\u90e8\u4ef6\u6216\u88c5\u914d\u4f53\u7684\u5b8c\u6574\u8def\u5f84"\n...\ncompsPaths(N) = "\u90e8\u4ef6\u6216\u88c5\u914d\u4f53\u7684\u5b8c\u6574\u8def\u5f84"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const ROWS_COUNT As Integer = 2\nConst COLUMNS_COUNT As Integer = 2\nConst DISTANCE As Double = 0.1\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim compsPaths(7) As String\n    \n    compsPaths(0) = "D:\\models\\box1.sldprt"\n    compsPaths(1) = "D:\\models\\box2.sldprt"\n    compsPaths(2) = "D:\\models\\box3.sldprt"\n    compsPaths(3) = "D:\\models\\box1.sldprt"\n    compsPaths(4) = "D:\\models\\box1.sldprt"\n    compsPaths(5) = "D:\\models\\box2.sldprt"\n    compsPaths(6) = "D:\\models\\box3.sldprt"\n    compsPaths(7) = "D:\\models\\box1.sldprt"\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        InsertComponents swAssy, compsPaths, ROWS_COUNT, COLUMNS_COUNT, DISTANCE\n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u88c5\u914d\u4f53"\n    End If\n    \nEnd Sub\n\nSub InsertComponents(assy As SldWorks.AssemblyDoc, vPaths As Variant, rows As Integer, columns As Integer, dist As Double)\n    \n    Dim transforms() As Double\n    ReDim transforms((UBound(vPaths) + 1) * 16 - 1)\n    \n    Dim coordSys() As String\n    ReDim coordSys(UBound(vPaths))\n    \n    Dim level As Integer\n    Dim row As Integer\n    Dim column As Integer\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vPaths)\n        \n        If row = rows Then\n            \n            row = 0\n            column = column + 1\n            \n            If column = columns Then\n                column = 0\n                level = level + 1\n            End If\n        \n        End If\n        \n        Dim vTransform As Variant\n        vTransform = ComposeTransform(row * dist, column * dist, level * dist)\n        \n        Dim j As Integer\n        \n        For j = 0 To UBound(vTransform)\n            transforms(i * (UBound(vTransform) + 1) + j) = vTransform(j)\n        Next\n        \n        row = row + 1\n        \n    Next\n    \n    assy.AddComponents3 vPaths, transforms, coordSys\n    \nEnd Sub\n\nFunction ComposeTransform(x As Double, y As Double, z As Double) As Variant\n    \n    Dim dMatrix(15) As Double\n    dMatrix(0) = 1: dMatrix(1) = 0: dMatrix(2) = 0: dMatrix(3) = 0\n    dMatrix(4) = 1: dMatrix(5) = 0: dMatrix(6) = 0: dMatrix(7) = 0\n    dMatrix(8) = 1: dMatrix(9) = x: dMatrix(10) = y: dMatrix(11) = z\n    dMatrix(12) = 1: dMatrix(13) = 0: dMatrix(14) = 0: dMatrix(15) = 0\n    \n    ComposeTransform = dMatrix\n    \nEnd Function\n')))}m.isMDXComponent=!0},413:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/positioned-components-80d6362286045d8233f2d44320c91c65.png"}}]);