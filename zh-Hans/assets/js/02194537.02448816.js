"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[27493],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>b});var r=i(67294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var l=r.createContext({}),d=function(e){var n=r.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},w="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var i=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),w=d(i),v=t,b=w["".concat(l,".").concat(v)]||w[v]||p[v]||o;return i?r.createElement(b,a(a({ref:n},c),{},{components:i})):r.createElement(b,a({ref:n},c))}));function b(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=i.length,a=new Array(o);a[0]=v;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[w]="string"==typeof e?e:t,a[1]=s;for(var d=2;d<o;d++)a[d]=i[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}v.displayName="MDXCreateElement"},432:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=i(87462),t=(i(67294),i(3905));const o={title:"Clear revision table and add new revision using SOLIDWORKS API",caption:"Clear Revision Table And Add New Revision",description:"Example finds the revision table and removes all revisions and then adds new row with custom data",image:"sw-revision-table.png",labels:["add revision","clear revisions","drawing.revision table","example","solidworks api"],"redirect-from":["/2018/03/solidworks-api-drawing-clear-rev-table-add-new-row.html"]},a=void 0,s={unversionedId:"codestack-clone/solidworks-api/document/drawing/clear-revision-table-new-revision/index",id:"codestack-clone/solidworks-api/document/drawing/clear-revision-table-new-revision/index",title:"Clear revision table and add new revision using SOLIDWORKS API",description:"Example finds the revision table and removes all revisions and then adds new row with custom data",source:"@site/docs/codestack-clone/solidworks-api/document/drawing/clear-revision-table-new-revision/index.md",sourceDirName:"codestack-clone/solidworks-api/document/drawing/clear-revision-table-new-revision",slug:"/codestack-clone/solidworks-api/document/drawing/clear-revision-table-new-revision/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/drawing/clear-revision-table-new-revision/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/drawing/clear-revision-table-new-revision/index.md",tags:[],version:"current",frontMatter:{title:"Clear revision table and add new revision using SOLIDWORKS API",caption:"Clear Revision Table And Add New Revision",description:"Example finds the revision table and removes all revisions and then adds new row with custom data",image:"sw-revision-table.png",labels:["add revision","clear revisions","drawing.revision table","example","solidworks api"],"redirect-from":["/2018/03/solidworks-api-drawing-clear-rev-table-add-new-row.html"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS macro to change layer of selected objects in drawing using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/drawing/change-layer-selected-drawing-objects/"},next:{title:"Macro to copy file paths to all drawings of an assembly components using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/drawing/copy-drawing-paths/"}},l={},d=[],c={toc:d},w="wrapper";function p(e){let{components:n,...o}=e;return(0,t.kt)(w,(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This example finds the revision table and removes all revisions and then adds new row with custom data using SOLIDWORKS API."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Revision Table",src:i(5837).Z,width:"640",height:"178"}),"{ width=640 }"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.irevisiontableannotation.html"},"IRevisionTableAnnotation")," SOLIDWORKS API interface is used to manage specific functionality of this type of the table."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swDraw As SldWorks.DrawingDoc\nDim swSheet As SldWorks.Sheet\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n    \n        Set swSheet = swDraw.GetCurrentSheet\n        \n        Dim swRevTable As SldWorks.RevisionTableAnnotation\n\n        Set swRevTable = swSheet.RevisionTable\n        \n        If Not swRevTable Is Nothing Then\n            \n            ClearRevisionTable swRevTable\n            \n            AddRevision swRevTable, "001", Array("Sample Zone", "", "Description", "", "Admin")\n            \n        Else\n            MsgBox "There is no revision table in the drawing"\n        End If\n    \n    Else\n        MsgBox "Plase open the drawing"\n    End If\n    \nEnd Sub\n\nSub ClearRevisionTable(swRevTable As SldWorks.RevisionTableAnnotation)\n    \n    Dim swTableAnn As SldWorks.TableAnnotation\n    \n    Set swTableAnn = swRevTable\n            \n    Dim i As Integer\n    \n    For i = swTableAnn.RowCount - 1 To 0 Step -1\n        \n        Dim revId As Long\n        revId = swRevTable.GetIdForRowNumber(i)\n        \n        If revId <> 0 Then\n            swRevTable.DeleteRevision revId, True\n        End If\n        \n    Next\n    \nEnd Sub\n\nSub AddRevision(swRevTable As SldWorks.RevisionTableAnnotation, revName As String, rowData As Variant)\n    \n    Dim i As Integer\n    Dim swTableAnn As SldWorks.TableAnnotation\n    \n    Set swTableAnn = swRevTable\n    \n    swRevTable.AddRevision revName\n            \n    For i = 0 To UBound(rowData)\n                \n        If rowData(i) <> "" Then\n            \n            swTableAnn.Text(swTableAnn.RowCount - 1, i) = rowData(i)\n        \n        End If\n                \n    Next\n    \nEnd Sub\n\n')))}p.isMDXComponent=!0},5837:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/sw-revision-table-f18733675d6f94a0e86b95afda25ee86.png"}}]);