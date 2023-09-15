"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[34956],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(y,c(c({ref:t},l),{},{components:n})):o.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:r,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={title:"Determine the type Of active document using SOLIDWORKS API",caption:"Determine The Type Of Active Document",description:"Example displays the message box of the type of the document currently active in SOLIDWORKS",labels:["assembly","document","drawing","example","part","type"],"redirect-from":["/2018/03/determine-type-of-active-document.html"]},c=void 0,a={unversionedId:"codestack/solidworks-api/application/documents/active-document-type/index",id:"codestack/solidworks-api/application/documents/active-document-type/index",title:"Determine the type Of active document using SOLIDWORKS API",description:"Example displays the message box of the type of the document currently active in SOLIDWORKS",source:"@site/docs/codestack/solidworks-api/application/documents/active-document-type/index.md",sourceDirName:"codestack/solidworks-api/application/documents/active-document-type",slug:"/codestack/solidworks-api/application/documents/active-document-type/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/application/documents/active-document-type/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/application/documents/active-document-type/index.md",tags:[],version:"current",frontMatter:{title:"Determine the type Of active document using SOLIDWORKS API",caption:"Determine The Type Of Active Document",description:"Example displays the message box of the type of the document currently active in SOLIDWORKS",labels:["assembly","document","drawing","example","part","type"],"redirect-from":["/2018/03/determine-type-of-active-document.html"]},sidebar:"tutorialSidebar",previous:{title:"Managing SOLIDWORKS documents via API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/application/documents/"},next:{title:"Bring document foreground (activate document) using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/application/documents/bring-document-foreground/"}},s={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example displays the message box of the type of the document currently active in SOLIDWORKS. This will work regardless the document is saved or not.  ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~GetType.html"},"IModelDoc2::GetType")," SOLIDWORKS API method can be used to return the type enumeration which will identify the document as SOLIDWORKS Part, Assembly or Drawing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Select Case swModel.GetType\n            \n            Case swDocPART:\n                MsgBox "Active document is Part"\n            \n            Case swDocASSEMBLY:\n                MsgBox "Active document is Assembly"\n                \n            Case swDocDRAWING:\n                MsgBox "Active document is Drawing"\n        End Select\n        \n    Else\n        \n        MsgBox "No document opened"\n        \n    End If\n    \nEnd Sub\n')))}u.isMDXComponent=!0}}]);