"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[24619],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>u});var t=i(67294);function s(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){s(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function d(e,n){if(null==e)return{};var i,t,s=function(e,n){if(null==e)return{};var i,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(s[i]=e[i]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var a=t.createContext({}),l=function(e){var n=t.useContext(a),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},c=function(e){var n=l(e.components);return t.createElement(a.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},w=t.forwardRef((function(e,n){var i=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(i),w=s,u=p["".concat(a,".").concat(w)]||p[w]||m[w]||o;return i?t.createElement(u,r(r({ref:n},c),{},{components:i})):t.createElement(u,r({ref:n},c))}));function u(e,n){var i=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=i.length,r=new Array(o);r[0]=w;var d={};for(var a in n)hasOwnProperty.call(n,a)&&(d[a]=n[a]);d.originalType=e,d[p]="string"==typeof e?e:s,r[1]=d;for(var l=2;l<o;l++)r[l]=i[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}w.displayName="MDXCreateElement"},44909:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=i(87462),s=(i(67294),i(3905));const o={title:"Add dimensions to bend lines using SOLIDWORKS API",caption:"Add Dimensions To Bend Lines",description:"Example demonstrates how to add dimensions to bend lines in the drawing view of sheet metal flat pattern",image:"sw-bend-lines.png",labels:["bend lines","dimension","example","solidworks api"],"redirect-from":["/2018/03/solidworks-api-dimensions-dimension-bend-lines.html"]},r=void 0,d={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/add-bend-lines/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/add-bend-lines/index",title:"Add dimensions to bend lines using SOLIDWORKS API",description:"Example demonstrates how to add dimensions to bend lines in the drawing view of sheet metal flat pattern",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/add-bend-lines/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/add-bend-lines",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/add-bend-lines/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/add-bend-lines/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/add-bend-lines/index.md",tags:[],version:"current",frontMatter:{title:"Add dimensions to bend lines using SOLIDWORKS API",caption:"Add Dimensions To Bend Lines",description:"Example demonstrates how to add dimensions to bend lines in the drawing view of sheet metal flat pattern",image:"sw-bend-lines.png",labels:["bend lines","dimension","example","solidworks api"],"redirect-from":["/2018/03/solidworks-api-dimensions-dimension-bend-lines.html"]},sidebar:"tutorialSidebar",previous:{title:"Working with dimensions using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/"},next:{title:"Add equation to dimension using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/add-equation/"}},a={},l=[],c={toc:l},p="wrapper";function m(e){let{components:n,...o}=e;return(0,s.kt)(p,(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This example demonstrates how to add dimensions to bend lines in the drawing view of sheet metal flat pattern using SOLIDWORKS API."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Dimension between bend lines in the sheet metal flat pattern drawing",src:i(92623).Z,width:"400",height:"151"}),"{ width=400 height=150 }"),(0,s.kt)("p",null,"It is required to select the sketch lines using the select data object with the view assigned, otherwise the dimensions creating will fail."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldoc~adddimension2.html"},"IModelDoc2::AddDimension2")," SOLIDWORKS API is used to add the dimension. Dimension is positioned at (0, 0, 0) coordinate. Refer the ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/"},"Dimension Visible Entities")," example for code snippet for calculating the optimal dimension position."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\nDim swView As SldWorks.View\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swSelMgr = swModel.SelectionManager\n        \n        Set swView = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swView Is Nothing Then\n        \n            Dim vBendLines As Variant\n            vBendLines = swView.GetBendLines\n            \n            If UBound(vBendLines) >= 1 Then\n            \n                Dim swSelData As SldWorks.SelectData\n                Set swSelData = swSelMgr.CreateSelectData\n                swSelData.View = swView \'must be set\n                \n                swModel.ClearSelection2 True\n                \n                Dim i As Integer\n                \n                For i = 0 To 1\n                    \n                    Dim swSkSeg As SldWorks.SketchSegment\n                                        \n                    Set swSkSeg = vBendLines(i)\n                    \n                    swSkSeg.Select4 True, swSelData\n                    \n                Next\n                \n                swModel.AddDimension2 0, 0, 0\n                \n            Else\n                MsgBox "There should be at least 2 bend lines in the drawing view"\n            End If\n            \n        Else\n            MsgBox "Please select drawing view with flat pattern"\n        End If\n    \n    Else\n        MsgBox "Please open drawing"\n    End If\nEnd Sub\n\n\n')))}m.isMDXComponent=!0},92623:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/sw-bend-lines-8d02f0f639f0a08e16b8da4cba5fc968.png"}}]);