"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[25549],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},A="mdxType",w={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),A=l(t),b=i,g=A["".concat(c,".").concat(b)]||A[b]||w[b]||o;return t?a.createElement(g,r(r({ref:n},d),{},{components:t})):a.createElement(g,r({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[A]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},96899:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>w,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const o={caption:"Find And Read Table By Cell",title:"Find and read the table in the SOLIDWORKS drawing by the value of the cell",description:"VBA macro to find the table in the SOLIDWORKS drawing by the value in the specified cell and reading its data into the variable",image:"general-table.png"},r=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-read-table-by-cell/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-read-table-by-cell/index",title:"Find and read the table in the SOLIDWORKS drawing by the value of the cell",description:"VBA macro to find the table in the SOLIDWORKS drawing by the value in the specified cell and reading its data into the variable",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-read-table-by-cell/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-read-table-by-cell",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-read-table-by-cell/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-read-table-by-cell/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-read-table-by-cell/index.md",tags:[],version:"current",frontMatter:{caption:"Find And Read Table By Cell",title:"Find and read the table in the SOLIDWORKS drawing by the value of the cell",description:"VBA macro to find the table in the SOLIDWORKS drawing by the value in the specified cell and reading its data into the variable",image:"general-table.png"},sidebar:"tutorialSidebar",previous:{title:"Find features in the tree by type and/or name pattern using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-features/"},next:{title:"Find and select specific edge in the drawing view using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-specific-edge-in-drawing-view/"}},c={},l=[],d={toc:l},A="wrapper";function w(e){let{components:n,...o}=e;return(0,i.kt)(A,(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This VBA macro finds the table by the specified value pattern in the specified cell."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"General table in the drawing",src:t(56370).Z,width:"866",height:"362"}),"{ width=500 }"),(0,i.kt)("p",null,"The data of the table is read into the string variable ",(0,i.kt)("strong",{parentName:"p"},"tableData")," and output into the ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/vba/vba-editor/windows#immediate-window"},"VBA Immediate Window")),(0,i.kt)("p",null,"Cells are separated by the value of the ",(0,i.kt)("strong",{parentName:"p"},"DELIMETER")," constant."),(0,i.kt)("p",null,"It is possible to use the matching pattern to match the value of the cell (e.g. ",(0,i.kt)("strong",{parentName:"p"},"*","ABC","*")," will match text containing ",(0,i.kt)("strong",{parentName:"p"},"ABC"),")"),(0,i.kt)("p",null,"Text comparison is case insensitive"),(0,i.kt)("p",null,"Indices of the row and column to search are 0-based (e.g. first cell in the first column will have an index ",(0,i.kt)("strong",{parentName:"p"},"0, 0"),")"),(0,i.kt)("p",null,"Provide the value of the search pattern and the target cell position in the call to ",(0,i.kt)("strong",{parentName:"p"},"FindTableByContent")," function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},'Set swTableAnnotation = FindTableByContent(swDraw, "*ABC*", 0, 0)\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Table data output in the Immediate Window",src:t(44017).Z,width:"346",height:"225"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Option Compare Text\n\nConst DELIMETER As String = ","\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Dim tableData As String\n        \n        Dim swTableAnnotation As SldWorks.TableAnnotation\n        Set swTableAnnotation = FindTableByContent(swDraw, "a", 0, 0)\n                \n        Dim i As Integer\n        Dim j As Integer\n        \n        For i = 0 To swTableAnnotation.RowCount - 1\n            \n            If i > 0 Then\n                tableData = tableData & vbLf\n            End If\n            \n            For j = 0 To swTableAnnotation.ColumnCount - 1\n                If j > 0 Then\n                    tableData = tableData & DELIMETER\n                End If\n                tableData = tableData & swTableAnnotation.Text(i, j)\n            Next\n            \n        Next\n        \n        Debug.Print tableData\n        \n    Else\n        Err.Raise "Open drawing"\n    End If\n    \nEnd Sub\n\nFunction FindTableByContent(draw As SldWorks.DrawingDoc, searchCellVal As String, cellRow As Integer, cellColumn As Integer) As SldWorks.TableAnnotation\n    \n    Dim vSheets As Variant\n    \n    vSheets = draw.GetViews()\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vSheets)\n        \n        Dim vViews As Variant\n        vViews = vSheets(i)\n        \n        Dim swSheetView As SldWorks.View\n        Set swSheetView = vViews(0)\n        \n        Dim vTableAnns As Variant\n        vTableAnns = swSheetView.GetTableAnnotations\n        \n        If Not IsEmpty(vTableAnns) Then\n            \n            Dim j As Integer\n            \n            For j = 0 To UBound(vTableAnns)\n                \n                Dim swTableAnn As SldWorks.TableAnnotation\n                Set swTableAnn = vTableAnns(j)\n                \n                Dim cellVal As String\n                cellVal = swTableAnn.Text(cellRow, cellColumn)\n                \n                If cellVal Like searchCellVal Then\n                    Set FindTableByContent = swTableAnn\n                    Exit Function\n                End If\n                \n            Next\n            \n        End If\n        \n    Next\n    \n    Err.Raise vbError, "", "Failed to find the table annotation"\n    \nEnd Function\n')))}w.isMDXComponent=!0},56370:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/general-table-20005b16f90eb938d1408175c801a7c4.png"},44017:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,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"}}]);