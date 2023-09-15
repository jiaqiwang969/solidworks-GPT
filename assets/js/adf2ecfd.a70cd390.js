"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[52129],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),d=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=d(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(o),m=r,f=p["".concat(a,".").concat(m)]||p[m]||u[m]||i;return o?n.createElement(f,s(s({ref:t},l),{},{components:o})):n.createElement(f,s({ref:t},l))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var d=2;d<i;d++)s[d]=o[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7653:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const i={title:"Determine the type Of active document using SOLIDWORKS API",caption:"Determine The Type Of Active Document",description:"Example displays the message box of the type of the document currently active in SOLIDWORKS",labels:["assembly","document","drawing","example","part","type"],"redirect-from":["/2018/03/determine-type-of-active-document.html"]},s=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type/index",title:"Determine the type Of active document using SOLIDWORKS API",description:"Example displays the message box of the type of the document currently active in SOLIDWORKS",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type/index.md",tags:[],version:"current",frontMatter:{title:"Determine the type Of active document using SOLIDWORKS API",caption:"Determine The Type Of Active Document",description:"Example displays the message box of the type of the document currently active in SOLIDWORKS",labels:["assembly","document","drawing","example","part","type"],"redirect-from":["/2018/03/determine-type-of-active-document.html"]},sidebar:"tutorialSidebar",previous:{title:"Managing SOLIDWORKS documents via API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/"},next:{title:"Bring document foreground (activate document) using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/bring-document-foreground/"}},a={},d=[],l={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example displays the message box of the type of the document currently active in SOLIDWORKS. This will work regardless the document is saved or not.  ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~GetType.html"},"IModelDoc2::GetType")," SOLIDWORKS API method can be used to return the type enumeration which will identify the document as SOLIDWORKS Part, Assembly or Drawing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Select Case swModel.GetType\n            \n            Case swDocPART:\n                MsgBox "Active document is Part"\n            \n            Case swDocASSEMBLY:\n                MsgBox "Active document is Assembly"\n                \n            Case swDocDRAWING:\n                MsgBox "Active document is Drawing"\n        End Select\n        \n    Else\n        \n        MsgBox "No document opened"\n        \n    End If\n    \nEnd Sub\n')))}u.isMDXComponent=!0}}]);