"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[28763],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),f=r,k=d["".concat(l,".").concat(f)]||d[f]||m[f]||i;return o?n.createElement(k,a(a({ref:t},p),{},{components:o})):n.createElement(k,a({ref:t},p))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},98835:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const i={caption:"Format Text Of The Note",title:"Example to format portions of the note text with different formats",description:"VBA example to apply font effects and styles for different portions of the note in SOLIDWORKS document",image:"note-text.png"},a=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/format-note-text/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/format-note-text/index",title:"Example to format portions of the note text with different formats",description:"VBA example to apply font effects and styles for different portions of the note in SOLIDWORKS document",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/format-note-text/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/format-note-text",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/format-note-text/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/format-note-text/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/format-note-text/index.md",tags:[],version:"current",frontMatter:{caption:"Format Text Of The Note",title:"Example to format portions of the note text with different formats",description:"VBA example to apply font effects and styles for different portions of the note in SOLIDWORKS document",image:"note-text.png"},sidebar:"tutorialSidebar",previous:{title:"Macro to find and delete specific notes in the SOLIDWORKS drawing",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/find-delete/"},next:{title:"Macro feature to increment the numeric value in the note via SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/notes/increment-revision/"}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA example demonstrates how to insert note into SOLIDWORKS document and format individual lines with different font effects and styles."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Formatted text of the note",src:o(28958).Z,width:"224",height:"110"})),(0,r.kt)("p",null,"Portions of the text can be formatted with ",(0,r.kt)("strong",{parentName:"p"},"\\<FONT",">")," instruction. This instruction has 2 attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"effect")," - can be equal to ",(0,r.kt)("strong",{parentName:"li"},"U")," (underline) or ",(0,r.kt)("strong",{parentName:"li"},"RU")," (remove underline)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," - can be equal to ",(0,r.kt)("strong",{parentName:"li"},"B")," (bold), ",(0,r.kt)("strong",{parentName:"li"},"RB")," (remove bold), ",(0,r.kt)("strong",{parentName:"li"},"I")," (italic) or ",(0,r.kt)("strong",{parentName:"li"},"RI")," (remove italic)")),(0,r.kt)("p",null,"All the text after the ",(0,r.kt)("strong",{parentName:"p"},"\\<FONT",">")," instruction will be formatted according to the value of ",(0,r.kt)("strong",{parentName:"p"},"effect")," and ",(0,r.kt)("strong",{parentName:"p"},"style"),". "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2023/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.INote~GetText.html"},"INote::GetText")," methods returns the resolved value of the note. For the note above it will return the following result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"First Line Underline\nSecond Line Bold\nThird Line Italic\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2023/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.INote~PropertyLinkedText.html"},"INote::PropertyLinkedText")," property sets or gets the text supporting the ",(0,r.kt)("strong",{parentName:"p"},"\\<FONT",">")," instruction. For the note above it will return the following result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<FONT effect=U>First Line Underline\n<FONT style=B effect=RU>Second Line Bold\n<FONT style=RB><FONT style=I>Third Line Italic\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swNote As SldWorks.Note\n    \n    Set swNote = swModel.InsertNote("<FONT effect=U>First Line Underline" & vbLf & "<FONT style=B effect=RU>Second Line Bold" & vbLf & "<FONT style=RB><FONT style=I>Third Line Italic")\n        \n    Debug.Print swNote.GetText()\n    Debug.Print swNote.PropertyLinkedText\n    \nEnd Sub\n')))}m.isMDXComponent=!0},28958:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);