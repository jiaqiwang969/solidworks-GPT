"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[71623],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(t),p=r,g=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return t?o.createElement(g,s(s({ref:n},u),{},{components:t})):o.createElement(g,s({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[m]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},23978:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const i={layout:"sw-tool",title:"Macro feature to increment the numeric value in the note via SOLIDWORKS API",caption:"Increment The Numeric Value In The Note",description:"This macro increments the numeric value of the notes by matching regular expression (e.g. incrementing the revision) using SOLIDWORKS API",image:"drawing-revision-incremented.png",labels:["note","revision","increment","regular expression","regex","tag"],group:"Drawing"},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/increment-revision/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/increment-revision/index",title:"Macro feature to increment the numeric value in the note via SOLIDWORKS API",description:"This macro increments the numeric value of the notes by matching regular expression (e.g. incrementing the revision) using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/increment-revision/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/increment-revision",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/increment-revision/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/increment-revision/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/increment-revision/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro feature to increment the numeric value in the note via SOLIDWORKS API",caption:"Increment The Numeric Value In The Note",description:"This macro increments the numeric value of the notes by matching regular expression (e.g. incrementing the revision) using SOLIDWORKS API",image:"drawing-revision-incremented.png",labels:["note","revision","increment","regular expression","regex","tag"],group:"Drawing"},sidebar:"tutorialSidebar",previous:{title:"Example to format portions of the note text with different formats",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/format-note-text/"},next:{title:"Macro to print all notes to the text file from SOLIDWORKS drawing",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/notes/print-to-file/"}},c={},l=[],u={toc:l},m="wrapper";function d(e){let{components:n,...i}=e;return(0,r.kt)(m,(0,o.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Revision number in the title block is incremented",src:t(63639).Z,width:"928",height:"380"}),"{ width=300 }"),(0,r.kt)("p",null,"This macro increments the numeric value of the notes using SOLIDWORKS API. This can be useful if it required to increment the revision for note or notes without the need of manually selecting and changing the note. This macro can be also used in the batch processing software."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Revision in title block is incremented by running macro from the macro button",src:t(66278).Z,width:"400",height:"279"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Numeric value is matched by specified ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Regular_expression"},"regular expression"),". It is possible to modify the regular expression to match specific numeric values. Note can contain free text (in this case only numeric part will be updated as per specified regular expression)"),(0,r.kt)("li",{parentName:"ul"},"It is required to add the text tag to the note in order to increment its value. Follow ",(0,r.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/document/notes/tag-selected-note"},"Add Tag To Selected Note")," example of instructions for adding the tag to the note."),(0,r.kt)("li",{parentName:"ul"},"By default the numeric value is incremented by 1, but this can be changed by modifying the value of ",(0,r.kt)("em",{parentName:"li"},"increment")," parameter of the ",(0,r.kt)("em",{parentName:"li"},"IncrementNoteValue")," function.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    IncrementNoteValue "_CodeStackNote_", "\\d+", 1\n    \nEnd Sub\n\nSub IncrementNoteValue(noteTag As String, pattern As String, increment As Double)\n    \n    Dim swNote As SldWorks.Note\n    Set swNote = FindNodeByTag(swModel, noteTag)\n    \n    If Not swNote Is Nothing Then\n        Dim newText As String\n        newText = IncrementNumericMatches(swNote.GetText(), pattern, increment)\n        swNote.SetText newText\n    End If\n    \nEnd Sub\n\nFunction IncrementNumericMatches(text As String, pattern As String, increment As Double) As String\n    \n    Dim resultText As String\n    resultText = text\n    \n    Dim regEx As Object\n    Set regEx = CreateObject("VBScript.RegExp")\n    \n    regEx.Global = True\n    regEx.IgnoreCase = True\n    regEx.pattern = pattern\n    \n    Dim regExMatches As Object\n    Set regExMatches = regEx.Execute(text)\n    \n    If regExMatches.Count > 0 Then\n        \n        Dim i As Integer\n        \n        Dim offset As Integer\n        \n        For i = 0 To regExMatches.Count - 1\n            \n            Dim regExMatch As Object\n            Set regExMatch = regExMatches(i)\n            \n            Dim newValue As Double\n            newValue = CDbl(regExMatch.Value) + increment\n            \n            resultText = Left(resultText, regExMatch.FirstIndex + offset) & newValue & Right(resultText, Len(resultText) - regExMatch.FirstIndex - regExMatch.Length - offset)\n            \n            offset = offset + Len(CStr(newValue)) - regExMatch.Length\n        \n        Next\n        \n    End If\n    \n    IncrementNumericMatches = resultText\n\nEnd Function\n\nFunction FindNodeByTag(model As SldWorks.ModelDoc2, tag As String) As SldWorks.Note\n    \n    If tag <> "" Then\n        \n        Dim vAnnots As Variant\n        vAnnots = model.Extension.GetAnnotations\n        \n        Dim swNote As SldWorks.Note\n        Dim i As Integer\n        \n        If Not IsEmpty(vAnnots) Then\n            \n            For i = 0 To UBound(vAnnots)\n                \n                Dim swAnn As SldWorks.Annotation\n                Set swAnn = vAnnots(i)\n                \n                If swAnn.GetType() = swAnnotationType_e.swNote Then\n                    Set swNote = swAnn.GetSpecificAnnotation\n                    If swNote.TagName = tag Then\n                        Set FindNodeByTag = swNote\n                        Exit Function\n                    End If\n                End If\n                \n            Next\n        End If\n        \n        If model.GetType() = swDocumentTypes_e.swDocDRAWING Then\n        \n            Dim swDraw As SldWorks.DrawingDoc\n            Set swDraw = model\n        \n            Dim vSheets As Variant\n            vSheets = swDraw.GetViews()\n            \n            For i = 0 To UBound(vSheets)\n                \n                Dim vViews As Variant\n                vViews = vSheets(i)\n                \n                Dim j As Integer\n                \n                For j = 0 To UBound(vViews)\n                \n                    Dim swView As SldWorks.View\n                    Set swView = vViews(j)\n                \n                    Dim vNotes As Variant\n                    \n                    vNotes = swView.GetNotes()\n                    \n                    Dim k As Integer\n                    \n                    For k = 0 To UBound(vNotes)\n                        \n                        Set swNote = vNotes(k)\n                        \n                        If swNote.TagName = tag Then\n                            Set FindNodeByTag = swNote\n                            Exit Function\n                        End If\n                    \n                    Next\n                \n                Next\n                \n            Next\n            \n        End If\n        \n    End If\n    \nEnd Function\n')))}d.isMDXComponent=!0},63639:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/drawing-revision-incremented-b735e4e2073e03755c44f2aba429c3f5.png"},66278:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/increment-revision-macro-65d58d3196a9f9427a5486cdf7ae4bc5.gif"}}]);