"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[86420],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return t?o.createElement(g,a(a({ref:n},p),{},{components:t})):o.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var d=2;d<s;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53697:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(87462),r=(t(67294),t(3905));const s={layout:"sw-tool",title:"Macro to find and delete specific notes in the SOLIDWORKS drawing",caption:"Find And Delete Notes"},a=void 0,i={unversionedId:"codestack/solidworks-api/document/notes/find-delete/index",id:"codestack/solidworks-api/document/notes/find-delete/index",title:"Macro to find and delete specific notes in the SOLIDWORKS drawing",description:"VBA macro to find and delete notes in all SOLIDWORKS drawing sheets based on the text, regular expressions or empty values",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/notes/find-delete/index.md",sourceDirName:"codestack/solidworks-api/document/notes/find-delete",slug:"/codestack/solidworks-api/document/notes/find-delete/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/notes/find-delete/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/notes/find-delete/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to find and delete specific notes in the SOLIDWORKS drawing",caption:"Find And Delete Notes"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5904\u7406\u6ce8\u91ca",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/notes/"},next:{title:"\u7528\u4e0d\u540c\u683c\u5f0f\u683c\u5f0f\u5316\u6ce8\u91ca\u6587\u672c\u7684\u793a\u4f8b",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/notes/format-note-text/"}},l={},d=[{value:"group: Drawing",id:"group-drawing",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Finding All Notes",id:"finding-all-notes",level:3},{value:"Searching By Text",id:"searching-by-text",level:3},{value:"Searching By Expression",id:"searching-by-expression",level:3},{value:"Searching By Empty Text Or Expression",id:"searching-by-empty-text-or-expression",level:3},{value:"Regular Expressions",id:"regular-expressions",level:3}],p={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"VBA macro to find and delete notes in all SOLIDWORKS drawing sheets based on the text, regular expressions or empty values\nimage: delete-note.svg\nlabels: ","[note, delete, regular expression, regex]"),(0,r.kt)("h2",{id:"group-drawing"},"group: Drawing"),(0,r.kt)("p",null,"This VBA macro allows to find and delete all notes in the SOLIDWORKS drawing based on the various criteria, such as by text, expression (property linked text), regular expression or empty values."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Macro can be configured by modifying the constants"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const FILTER As String = \"\" 'filter to use whe SEARCH_TYPE is set to ByText or ByExpression\nConst SEARCH_TYPE As Integer = SearchType_e.EmptyText 'Type of Search (ByText, ByExpression, EmptyText, EmptyExpression, All)\nConst USE_REGULAR_EXPRESSION As Boolean = False 'True to treat value in the FILTER constant as regular expressions\n")),(0,r.kt)("h3",{id:"finding-all-notes"},"Finding All Notes"),(0,r.kt)("p",null,"Set the value of ",(0,r.kt)("strong",{parentName:"p"},"SEARCH_TYPE")," constant to ",(0,r.kt)("strong",{parentName:"p"},"All")," and all notes will be found and deleted"),(0,r.kt)("h3",{id:"searching-by-text"},"Searching By Text"),(0,r.kt)("p",null,"Set the value of the display text of the note to the ",(0,r.kt)("strong",{parentName:"p"},"FILTER")," constant and ",(0,r.kt)("strong",{parentName:"p"},"SEARCH_TYPE")," to ",(0,r.kt)("strong",{parentName:"p"},"ByText")," and all notes which match this value will be found and deleted."),(0,r.kt)("h3",{id:"searching-by-expression"},"Searching By Expression"),(0,r.kt)("p",null,"Set the value of the expression (property linked text) of the note to the ",(0,r.kt)("strong",{parentName:"p"},"FILTER")," constant and ",(0,r.kt)("strong",{parentName:"p"},"SEARCH_TYPE")," to ",(0,r.kt)("strong",{parentName:"p"},"ByExpression")," and all notes which match this value will be found and deleted."),(0,r.kt)("p",null,"This can be used to find the notes linked to custom properties, for example the below example will find all notes which are linked to the ",(0,r.kt)("strong",{parentName:"p"},"Part Number")," custom property of the drawing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const FILTER As String = "$PRPSHEET:""Part Number"""\nConst SEARCH_TYPE As Integer = SearchType_e.ByExpression\nConst USE_REGULAR_EXPRESSION As Boolean = False\n')),(0,r.kt)("h3",{id:"searching-by-empty-text-or-expression"},"Searching By Empty Text Or Expression"),(0,r.kt)("p",null,"Set the value of ",(0,r.kt)("strong",{parentName:"p"},"SEARCH_TYPE")," constant to ",(0,r.kt)("strong",{parentName:"p"},"EmptyText")," or ",(0,r.kt)("strong",{parentName:"p"},"EmptyExpression")," and all empty notes will be found and deleted"),(0,r.kt)("h3",{id:"regular-expressions"},"Regular Expressions"),(0,r.kt)("p",null,"For more advanced searching options it is possible to use the regular expressions. To enable this option set the ",(0,r.kt)("strong",{parentName:"p"},"USE_REGULAR_EXPRESSION")," to ",(0,r.kt)("strong",{parentName:"p"},"True"),". See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/base-types/the-regular-expression-object-model"},"Regular Expressions")," for more information"),(0,r.kt)("p",null,"Example below will find and delete all notes which contain numeric value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const FILTER As String = "\\d+"\nConst SEARCH_TYPE As Integer = SearchType_e.ByText\nConst USE_REGULAR_EXPRESSION As Boolean = True\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Enum SearchType_e\n    ByText\n    ByExpression\n    EmptyText\n    EmptyExpression\n    All\nEnd Enum\n\nConst FILTER As String = ""\nConst SEARCH_TYPE As Integer = SearchType_e.EmptyText\nConst USE_REGULAR_EXPRESSION As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n           \n        DeleteNotes swDraw\n        \n    Else\n        Err.Raise vbError, "", "Only drawings are supported"\n    End If\n    \nEnd Sub\n\nSub DeleteNotes(draw As SldWorks.DrawingDoc)\n    \n    Dim currentSheetName As String\n    currentSheetName = draw.GetCurrentSheet().GetName\n    \n    Dim vSheets As Variant\n    vSheets = draw.GetViews\n    \n    Dim i As Integer\n        \n    For i = 0 To UBound(vSheets)\n        \n        Dim vViews As Variant\n        vViews = vSheets(i)\n        \n        draw.ActivateSheet vViews(0).Name\n        draw.ClearSelection2 False\n        \n        Dim j As Integer\n        \n        For j = 0 To UBound(vViews)\n                \n            Dim swView As SldWorks.View\n            Set swView = vViews(j)\n            \n            Dim vNotes As Variant\n            vNotes = swView.GetNotes\n            \n            Dim k As Integer\n            \n            For k = 0 To UBound(vNotes)\n                \n                Dim swNote As SldWorks.note\n                Set swNote = vNotes(k)\n                \n                If ShouldDeleteNote(swNote) Then\n\n                    Dim swAnn  As SldWorks.Annotation\n                    Set swAnn = swNote.GetAnnotation\n                    \n                    Debug.Print "Deleting " & swNote.GetText & " (" & swNote.PropertyLinkedText & ")"\n\n                    swAnn.Select3 True, Nothing\n                    \n                End If\n                \n            Next\n            \n        Next\n        \n        If draw.SelectionManager.GetSelectedObjectCount2(-1) > 0 Then\n            If False <> draw.Extension.DeleteSelection2(swDeleteSelectionOptions_e.swDelete_Absorbed) Then\n                draw.SetSaveFlag\n            Else\n                Err.Raise vbError, "", "Failed to delete annotations"\n            End If\n        End If\n        \n    Next\n    \n    draw.ActivateSheet currentSheetName\n    \nEnd Sub\n\nFunction ShouldDeleteNote(note As SldWorks.note) As Boolean\n\n    Dim value As String\n    \n    Select Case SEARCH_TYPE\n        Case SearchType_e.All\n            ShouldDeleteNote = True\n            Exit Function\n        Case SearchType_e.EmptyText\n            ShouldDeleteNote = note.GetText() = ""\n            Exit Function\n        Case SearchType_e.EmptyExpression\n            ShouldDeleteNote = note.PropertyLinkedText = ""\n            Exit Function\n        Case SearchType_e.ByText\n            value = note.GetText()\n        Case SearchType_e.ByExpression\n            value = note.PropertyLinkedText\n    End Select\n        \n    If USE_REGULAR_EXPRESSION Then\n        Dim regEx As Object\n        Set regEx = CreateObject("VBScript.RegExp")\n        \n        regEx.Global = True\n        regEx.IgnoreCase = True\n        regEx.Pattern = FILTER\n        \n        ShouldDeleteNote = regEx.Test(value)\n    Else\n        ShouldDeleteNote = (value = FILTER)\n    End If\n    \nEnd Function\n')))}u.isMDXComponent=!0}}]);