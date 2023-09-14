"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[60003],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>v});var i=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function t(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,i)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,i,r=function(e,n){if(null==e)return{};var o,i,r={},t=Object.keys(e);for(i=0;i<t.length;i++)o=t[i],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)o=t[i],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},w="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var o=e.components,r=e.mdxType,t=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),w=c(o),u=r,v=w["".concat(l,".").concat(u)]||w[u]||p[u]||t;return o?i.createElement(v,s(s({ref:n},d),{},{components:o})):i.createElement(v,s({ref:n},d))}));function v(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=o.length,s=new Array(t);s[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[w]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<t;c++)s[c]=o[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,o)}u.displayName="MDXCreateElement"},63321:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=o(87462),r=(o(67294),o(3905));const t={title:"Clear revision table and add new revision using SOLIDWORKS API",caption:"Clear Revision Table And Add New Revision",description:"Example finds the revision table and removes all revisions and then adds new row with custom data",image:"sw-revision-table.png",labels:["add revision","clear revisions","drawing.revision table","example","solidworks api"],"redirect-from":["/2018/03/solidworks-api-drawing-clear-rev-table-add-new-row.html"]},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/clear-revision-table-new-revision/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/clear-revision-table-new-revision/index",title:"Clear revision table and add new revision using SOLIDWORKS API",description:"Example finds the revision table and removes all revisions and then adds new row with custom data",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/clear-revision-table-new-revision/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/clear-revision-table-new-revision",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/clear-revision-table-new-revision/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/clear-revision-table-new-revision/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/clear-revision-table-new-revision/index.md",tags:[],version:"current",frontMatter:{title:"Clear revision table and add new revision using SOLIDWORKS API",caption:"Clear Revision Table And Add New Revision",description:"Example finds the revision table and removes all revisions and then adds new row with custom data",image:"sw-revision-table.png",labels:["add revision","clear revisions","drawing.revision table","example","solidworks api"],"redirect-from":["/2018/03/solidworks-api-drawing-clear-rev-table-add-new-row.html"]},sidebar:"tutorialSidebar",previous:{title:"Remove all items from the layer in SOLIDWORKS model",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/clear-layer/"},next:{title:"Macro to close all SOLIDWORKS documents except active",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/close-all-documents-except-active/"}},l={},c=[],d={toc:c},w="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(w,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example finds the revision table and removes all revisions and then adds new row with custom data using SOLIDWORKS API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Revision Table",src:o(27262).Z,width:"640",height:"178"}),"{ width=640 }"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.irevisiontableannotation.html"},"IRevisionTableAnnotation")," SOLIDWORKS API interface is used to manage specific functionality of this type of the table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swDraw As SldWorks.DrawingDoc\nDim swSheet As SldWorks.Sheet\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n    \n        Set swSheet = swDraw.GetCurrentSheet\n        \n        Dim swRevTable As SldWorks.RevisionTableAnnotation\n\n        Set swRevTable = swSheet.RevisionTable\n        \n        If Not swRevTable Is Nothing Then\n            \n            ClearRevisionTable swRevTable\n            \n            AddRevision swRevTable, "001", Array("Sample Zone", "", "Description", "", "Admin")\n            \n        Else\n            MsgBox "There is no revision table in the drawing"\n        End If\n    \n    Else\n        MsgBox "Plase open the drawing"\n    End If\n    \nEnd Sub\n\nSub ClearRevisionTable(swRevTable As SldWorks.RevisionTableAnnotation)\n    \n    Dim swTableAnn As SldWorks.TableAnnotation\n    \n    Set swTableAnn = swRevTable\n            \n    Dim i As Integer\n    \n    For i = swTableAnn.RowCount - 1 To 0 Step -1\n        \n        Dim revId As Long\n        revId = swRevTable.GetIdForRowNumber(i)\n        \n        If revId <> 0 Then\n            swRevTable.DeleteRevision revId, True\n        End If\n        \n    Next\n    \nEnd Sub\n\nSub AddRevision(swRevTable As SldWorks.RevisionTableAnnotation, revName As String, rowData As Variant)\n    \n    Dim i As Integer\n    Dim swTableAnn As SldWorks.TableAnnotation\n    \n    Set swTableAnn = swRevTable\n    \n    swRevTable.AddRevision revName\n            \n    For i = 0 To UBound(rowData)\n                \n        If rowData(i) <> "" Then\n            \n            swTableAnn.Text(swTableAnn.RowCount - 1, i) = rowData(i)\n        \n        End If\n                \n    Next\n    \nEnd Sub\n\n')))}p.isMDXComponent=!0},27262:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/sw-revision-table-f18733675d6f94a0e86b95afda25ee86.png"}}]);