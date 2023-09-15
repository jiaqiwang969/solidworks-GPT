"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[62775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,g=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?i.createElement(g,a(a({ref:t},f),{},{components:n})):i.createElement(g,a({ref:t},f))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},97079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={title:"Reading the content of text file using Visual Basic (VBA)",caption:"Read Text File",description:"Reading the content of text file into the variable using Visual Basic (VBA)",labels:["read","input"]},a=void 0,s={unversionedId:"codestack/visual-basic/algorithms/fso/io/read-text-file/index",id:"codestack/visual-basic/algorithms/fso/io/read-text-file/index",title:"Reading the content of text file using Visual Basic (VBA)",description:"Reading the content of text file into the variable using Visual Basic (VBA)",source:"@site/docs/codestack/visual-basic/algorithms/fso/io/read-text-file/index.md",sourceDirName:"codestack/visual-basic/algorithms/fso/io/read-text-file",slug:"/codestack/visual-basic/algorithms/fso/io/read-text-file/",permalink:"/solidworks-GPT/docs/codestack/visual-basic/algorithms/fso/io/read-text-file/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/visual-basic/algorithms/fso/io/read-text-file/index.md",tags:[],version:"current",frontMatter:{title:"Reading the content of text file using Visual Basic (VBA)",caption:"Read Text File",description:"Reading the content of text file into the variable using Visual Basic (VBA)",labels:["read","input"]},sidebar:"tutorialSidebar",previous:{title:"Reading the content of binary file using Visual Basic (VBA)",permalink:"/solidworks-GPT/docs/codestack/visual-basic/algorithms/fso/io/read-binary-file/"},next:{title:"Writing the binary content into the file using Visual Basic (VBA)",permalink:"/solidworks-GPT/docs/codestack/visual-basic/algorithms/fso/io/write-binary-file/"}},l={},c=[],f={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The below code snippet demonstrates how to read the text content from the specified file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim content As String\ncontent = ReadText("C:\\MyFolder\\MyFile.txt")\n')),(0,r.kt)("p",null,"Code will generate an exception if file doesn't exist or cannot be read."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Function ReadText(filePath As String) As String\n    \n    Dim fileNo As Integer\n\n    fileNo = FreeFile\n    \n    Dim content As String\n    \n    Dim isFirstLine As Integer\n    isFirstLine = True\n    \n    Open filePath For Input As #fileNo\n    \n    Do While Not EOF(fileNo)\n        \n        Dim line As String\n        \n        Line Input #fileNo, line\n        \n        content = content & IIf(Not isFirstLine, vbLf, "") & line\n        isFirstLine = False\n        \n    Loop\n    \n    Close #fileNo\n    \n    ReadText = content\n    \nEnd Function\n')))}d.isMDXComponent=!0}}]);