"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[99891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>w});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),l=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,w=d["".concat(a,".").concat(m)]||d[m]||p[m]||s;return n?o.createElement(w,i(i({ref:t},u),{},{components:n})):o.createElement(w,i({ref:t},u))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const s={title:"\u4f7f\u7528SOLIDWORKS API\u786e\u5b9a\u6d3b\u52a8\u6587\u6863\u7684\u7c7b\u578b",caption:"\u786e\u5b9a\u6d3b\u52a8\u6587\u6863\u7684\u7c7b\u578b"},i=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type/index",title:"\u4f7f\u7528SOLIDWORKS API\u786e\u5b9a\u6d3b\u52a8\u6587\u6863\u7684\u7c7b\u578b",description:"\u8be5\u793a\u4f8b\u663e\u793a\u5f53\u524d\u5728SOLIDWORKS\u4e2d\u6d3b\u52a8\u6587\u6863\u7684\u7c7b\u578b\u7684\u6d88\u606f\u6846\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u786e\u5b9a\u6d3b\u52a8\u6587\u6863\u7684\u7c7b\u578b",caption:"\u786e\u5b9a\u6d3b\u52a8\u6587\u6863\u7684\u7c7b\u578b"},sidebar:"tutorialSidebar",previous:{title:"Managing SOLIDWORKS Documents with the API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/"},next:{title:"Bring Document to Foreground (Activate Document) Using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/bring-document-foreground/"}},a={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8be5\u793a\u4f8b\u663e\u793a\u5f53\u524d\u5728SOLIDWORKS\u4e2d\u6d3b\u52a8\u6587\u6863\u7684\u7c7b\u578b\u7684\u6d88\u606f\u6846\u3002\nlabels: ","[\u88c5\u914d, \u6587\u6863, \u7ed8\u56fe, \u793a\u4f8b, \u96f6\u4ef6, \u7c7b\u578b]","\nredirect-from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/2018/03/determine-type-of-active-document.html")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u8be5\u793a\u4f8b\u663e\u793a\u5f53\u524d\u5728SOLIDWORKS\u4e2d\u6d3b\u52a8\u6587\u6863\u7684\u7c7b\u578b\u7684\u6d88\u606f\u6846\u3002\u65e0\u8bba\u6587\u6863\u662f\u5426\u5df2\u4fdd\u5b58\uff0c\u6b64\u793a\u4f8b\u90fd\u53ef\u4ee5\u5de5\u4f5c\u3002\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~GetType.html"},"SOLIDWORKS API\u65b9\u6cd5IModelDoc2::GetType"),"\u8fd4\u56de\u7c7b\u578b\u679a\u4e3e\uff0c\u4ee5\u8bc6\u522b\u6587\u6863\u4e3aSOLIDWORKS\u96f6\u4ef6\u3001\u88c5\u914d\u6216\u7ed8\u56fe\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Select Case swModel.GetType\n            \n            Case swDocPART:\n                MsgBox "\u6d3b\u52a8\u6587\u6863\u662f\u96f6\u4ef6"\n            \n            Case swDocASSEMBLY:\n                MsgBox "\u6d3b\u52a8\u6587\u6863\u662f\u88c5\u914d"\n                \n            Case swDocDRAWING:\n                MsgBox "\u6d3b\u52a8\u6587\u6863\u662f\u7ed8\u56fe"\n        End Select\n        \n    Else\n        \n        MsgBox "\u672a\u6253\u5f00\u6587\u6863"\n        \n    End If\n    \nEnd Sub\n')))}p.isMDXComponent=!0}}]);