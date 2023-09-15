"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[59351],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||s;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},38894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const s={title:"Add Tag to selected note using SOLIDWORKS API",caption:"Add Tag To Selected Note"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/tag-selected-note/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/tag-selected-note/index",title:"Add Tag to selected note using SOLIDWORKS API",description:"Example demonstrates how to add text tag to the selected note in SOLIDWORKS model",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/tag-selected-note/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/tag-selected-note",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/tag-selected-note/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/tag-selected-note/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/tag-selected-note/index.md",tags:[],version:"current",frontMatter:{title:"Add Tag to selected note using SOLIDWORKS API",caption:"Add Tag To Selected Note"},sidebar:"tutorialSidebar",previous:{title:"Macro to print all notes to the text file from SOLIDWORKS drawing",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/print-to-file/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u504f\u79fb\u5e73\u9762\u66f2\u7ebf\uff08\u7ebf\u4f53\uff09",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/offset-planar-wire-body/"}},c={},l=[{value:"labels: note, annotation. tag, attribute",id:"labels-note-annotation-tag-attribute",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Example demonstrates how to add text tag to the selected note in SOLIDWORKS model\nimage: drawing-note-revision.png"),(0,r.kt)("h2",{id:"labels-note-annotation-tag-attribute"},"labels: ","[note, annotation. tag, attribute]"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Note with revision number in SOLIDWORKS drawing",src:n(89125).Z,width:"493",height:"291"}),"{ width=300 }"),(0,r.kt)("p",null,"This example demonstrates how to add text tag (attribute) to the selected note in SOLIDWORKS model (part, assembly or drawing) using SOLIDWORKS API."),(0,r.kt)("p",null,"Specify the name of the tag as the ",(0,r.kt)("em",{parentName:"p"},"TAG")," constant in the macro."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The tag allows to track the specific note across the model sessions. This can be useful if macro needs to update the note (e.g. change the revision or linked value)"),(0,r.kt)("li",{parentName:"ul"},"Tag is preserved if note changes its text or formatting"),(0,r.kt)("li",{parentName:"ul"},"Tag is preserved if note moves (including moving from sheet space to sheet format)"),(0,r.kt)("li",{parentName:"ul"},"Tag is not visible/changeable from the User Interface (it can only be accessed via SOLIDWORKS API)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const TAG As String = "_CodeStackNote_"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        If Not TagSelectedNote(swModel, TAG) Then\n            MsgBox "Failed to add tag to the note"\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nFunction TagSelectedNote(model As SldWorks.ModelDoc2, TAG As String) As Boolean\n    \n    On Error Resume Next\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n            \n    Dim swNote As SldWorks.Note\n    \n    Set swNote = swSelMgr.GetSelectedObject6(1, -1)\n    \n    If Not swNote Is Nothing Then\n        swNote.TagName = TAG\n        TagSelectedNote = True\n        Exit Function\n    Else\n        MsgBox "Please select note to add tag to"\n    End If\n    \n    TagSelectedNote = False\n    \nEnd Function\n')))}p.isMDXComponent=!0},89125:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/drawing-note-revision-8781bc0ac2c2ffaea0ab33a7a283b406.png"}}]);