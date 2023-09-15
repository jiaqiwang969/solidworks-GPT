"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[53225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={layout:"sw-tool",title:"Macro to print all notes to the text file from SOLIDWORKS drawing",caption:"Print Notes Text To File",description:"VBA macro to output all notes text to the text file from the SOLIDWORKS drawing file",image:"print-notes.svg",labels:["note","print","regular expression","regex"],group:"Drawing"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/print-to-file/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/print-to-file/index",title:"Macro to print all notes to the text file from SOLIDWORKS drawing",description:"VBA macro to output all notes text to the text file from the SOLIDWORKS drawing file",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/print-to-file/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/print-to-file",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/print-to-file/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/print-to-file/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/print-to-file/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to print all notes to the text file from SOLIDWORKS drawing",caption:"Print Notes Text To File",description:"VBA macro to output all notes text to the text file from the SOLIDWORKS drawing file",image:"print-notes.svg",labels:["note","print","regular expression","regex"],group:"Drawing"},sidebar:"tutorialSidebar",previous:{title:"Macro feature to increment the numeric value in the note via SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/increment-revision/"},next:{title:"Add Tag to selected note using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/tag-selected-note/"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Notes",id:"notes",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA macro outputs text from all drawing views in the SOLIDWORKS drawing to the text file."),(0,r.kt)("p",null,"Each note will be printed in the new line. It is possible to additionally include the name of the view and the file into the output."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Macro can be configured by modifying the constants"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const FILE_PATH As String = \"\" 'Full path to a text file where notes should be written. If empty file is saved with the same name as the original file with _Note.txt prefix\nConst PRINT_FILE_NAME As Boolean = True 'True to output the file name to the text file\nConst PRINT_VIEW_NAME As Boolean = True 'True to output the drawing view name to the text file\nConst FILTER As String = \"\" 'Regular expression filter for the notes to include (e.g. \\d+ to include all notes containing numeric value)\n")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the notes which are empty the value will be output as ",(0,r.kt)("strong",{parentName:"li"},"[","X","]")),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/standard/base-types/the-regular-expression-object-model"},"Regular Expressions")," for more information about regular expressions which can be used to configure the ",(0,r.kt)("strong",{parentName:"li"},"FILTER")),(0,r.kt)("li",{parentName:"ul"},"Notes will be appended to an existing text file (new file will be created if not exists). This allows to batch run this macro via ",(0,r.kt)("a",{parentName:"li",href:"https://cadplus.xarial.com/batch/"},"Batch+")," to output notes from multiple files.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const FILE_PATH As String = ""\nConst PRINT_FILE_NAME As Boolean = True\nConst PRINT_VIEW_NAME As Boolean = True\nConst FILTER As String = ""\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Dim outFilePath As String\n        \n        If FILE_PATH <> "" Then\n            outFilePath = FILE_PATH\n        Else\n            outFilePath = swDraw.GetPathName\n            \n            If outFilePath = "" Then\n                Err.Raise "Drawing is not saved to the and FILE_PATH is not specified"\n            End If\n            \n            outFilePath = Left(outFilePath, InStrRev(outFilePath, ".") - 1) & "_Notes.txt"\n        End If\n        \n        Dim fileNmb As Integer\n        fileNmb = FreeFile\n    \n        Open outFilePath For Append As #fileNmb\n    \n        If PRINT_FILE_NAME Then\n            Print #fileNmb, "*** File Path: " & swDraw.GetPathName & " ***"\n        End If\n    \n        PrintNotes swDraw, fileNmb\n        \n        Print #fileNmb, ""\n        Close #fileNmb\n        \n    Else\n        Err.Raise vbError, "", "Only drawings are supported"\n    End If\n    \nEnd Sub\n\nSub PrintNotes(draw As SldWorks.DrawingDoc, fileNmb As Integer)\n    \n    Dim vSheets As Variant\n    vSheets = draw.GetViews\n    \n    Dim i As Integer\n        \n    For i = 0 To UBound(vSheets)\n        \n        Dim vViews As Variant\n        vViews = vSheets(i)\n        \n        Dim j As Integer\n        \n        For j = 0 To UBound(vViews)\n            \n            Dim swView As SldWorks.View\n            Set swView = vViews(j)\n            \n            If PRINT_VIEW_NAME Then\n                Print #fileNmb, "*** View Name: " & swView.Name & " ***"\n            End If\n            \n            Dim vNotes As Variant\n            vNotes = swView.GetNotes\n            \n            Dim k As Integer\n            \n            For k = 0 To UBound(vNotes)\n                Dim swNote As SldWorks.Note\n                Set swNote = vNotes(k)\n                \n                Dim text As String\n                text = swNote.GetText\n                \n                If IncludeNote(text) Then\n                    If text = "" Then\n                        text = "[X]"\n                    End If\n                    \n                    Print #fileNmb, text\n                End If\n                \n            Next\n            \n        Next\n        \n    Next\n    \nEnd Sub\n\nFunction IncludeNote(text As String) As Boolean\n\n    If FILTER = "" Then\n        IncludeNote = True\n    Else\n        Dim regEx As Object\n        Set regEx = CreateObject("VBScript.RegExp")\n        \n        regEx.Global = True\n        regEx.IgnoreCase = True\n        regEx.Pattern = FILTER\n        \n        IncludeNote = regEx.Test(text)\n    \n    End If\n    \nEnd Function\n')))}d.isMDXComponent=!0}}]);