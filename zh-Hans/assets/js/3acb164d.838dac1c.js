"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[80772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,m=p["".concat(l,".").concat(b)]||p[b]||u[b]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},64375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Read table content into array using SOLIDWORKS API",caption:"Read Table Content Into Array",description:"Example demonstrates how to read the content of the selected table (Bill Of Materials, General Table, Cut-List Table etc.) into the 2-dimensional array",labels:["array","bom","read","solidworks api","table"],"redirect-from":["/2018/03/solidworks-api-model-read-table-content-into-array.html"]},i=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/read-table-content-into-array/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/read-table-content-into-array/index",title:"Read table content into array using SOLIDWORKS API",description:"Example demonstrates how to read the content of the selected table (Bill Of Materials, General Table, Cut-List Table etc.) into the 2-dimensional array",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/read-table-content-into-array/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/read-table-content-into-array",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/read-table-content-into-array/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/read-table-content-into-array/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/read-table-content-into-array/index.md",tags:[],version:"current",frontMatter:{title:"Read table content into array using SOLIDWORKS API",caption:"Read Table Content Into Array",description:"Example demonstrates how to read the content of the selected table (Bill Of Materials, General Table, Cut-List Table etc.) into the 2-dimensional array",labels:["array","bom","read","solidworks api","table"],"redirect-from":["/2018/03/solidworks-api-model-read-table-content-into-array.html"]},sidebar:"tutorialSidebar",previous:{title:"Modify location precision of holes in holes table using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/modify-holes-table-holes-location-precision/"},next:{title:"Macro renames table annotation using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/rename-table-annotation/"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example demonstrates how to read the content of the selected table (Bill Of Materials, General Table, Cut-List Table etc.) into the 2-dimensional array using SOLIDWORKS API."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITableAnnotation.html"},"ITableAnnotation")," SOLIDWORKS API interface provides an access to the data of all table types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\nDim swTableAnnotation As SldWorks.TableAnnotation\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n\n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim tableData() As String\n        \n        Set swTableAnnotation = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swTableAnnotation Is Nothing Then\n            \n            ReDim tableData(swTableAnnotation.RowCount - 1, swTableAnnotation.ColumnCount - 1)\n            \n            Dim i As Integer\n            Dim j As Integer\n            \n            For i = 0 To swTableAnnotation.RowCount - 1\n                \n                For j = 0 To swTableAnnotation.ColumnCount - 1\n                    tableData(i, j) = swTableAnnotation.Text(i, j)\n                Next\n                \n            Next\n        Else\n            MsgBox "Please select table"\n        End If\n    Else\n        MsgBox "Please open model"\n    End If\nEnd Sub\n\n')))}u.isMDXComponent=!0}}]);