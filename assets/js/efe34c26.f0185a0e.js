"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[429],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var i=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,i,r=function(e,t){if(null==e)return{};var o,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=i.createContext({}),p=function(e){var t=i.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=p(e.components);return i.createElement(a.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(o),d=r,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||n;return o?i.createElement(m,s(s({ref:t},l),{},{components:o})):i.createElement(m,s({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:r,s[1]=c;for(var p=2;p<n;p++)s[p]=o[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5644:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var i=o(87462),r=(o(67294),o(3905));const n={layout:"sw-tool",title:"Copy SOLIDWORKS file specific custom properties to configuration",caption:"Copy File Specific Custom Properties To Configuration Properties",description:"Macro copies all the file specific properties into the properties of the active configuration",image:"file-specific-custom-properties.png",labels:["configuration","copy","custom properties","utility"],group:"Custom Properties","redirect-from":["/2018/03/copy-file-specific-custom-properties-to.html"]},s=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/copy-file-specific-to-configuration/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/copy-file-specific-to-configuration/index",title:"Copy SOLIDWORKS file specific custom properties to configuration",description:"Macro copies all the file specific properties into the properties of the active configuration",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/copy-file-specific-to-configuration/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/copy-file-specific-to-configuration",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/copy-file-specific-to-configuration/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/copy-file-specific-to-configuration/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/copy-file-specific-to-configuration/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Copy SOLIDWORKS file specific custom properties to configuration",caption:"Copy File Specific Custom Properties To Configuration Properties",description:"Macro copies all the file specific properties into the properties of the active configuration",image:"file-specific-custom-properties.png",labels:["configuration","copy","custom properties","utility"],group:"Custom Properties","redirect-from":["/2018/03/copy-file-specific-custom-properties-to.html"]},sidebar:"tutorialSidebar",previous:{title:"Create a dynamic auto updatable date custom property in SOLIDWORKS file",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/auto-date/"},next:{title:"Handle custom properties modification events (add, delete, change) using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/handle-events/"}},a={},p=[],l={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This macro copies all the file specific properties into the properties of the active configuration using SOLIDWORKS API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Properties in the Custom tab of the file",src:o(11298).Z,width:"640",height:"188"}),"{ width=640 }"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swCustPrpMgr As SldWorks.CustomPropertyManager\nDim swConfCustPrpMgr As SldWorks.CustomPropertyManager\n \nSub main()\n \n    Set swApp = Application.SldWorks\n \n    Set swModel = swApp.ActiveDoc\n\n    If Not swModel Is Nothing Then\n   \n        Set swCustPrpMgr = swModel.Extension.CustomPropertyManager("")\n       \n        Dim vNames As Variant\n        Dim vTypes As Variant\n        Dim vValues As Variant\n        swCustPrpMgr.GetAll vNames, vTypes, vValues\n   \n        Dim activeConfName As String\n        activeConfName = swModel.ConfigurationManager.ActiveConfiguration.Name\n\n        Set swConfCustPrpMgr = swModel.Extension.CustomPropertyManager(activeConfName)\n \n        Dim i As Integer\n   \n        For i = 0 To UBound(vNames)\n            swConfCustPrpMgr.Add2 vNames(i), vTypes(i), vValues(i)\n            swConfCustPrpMgr.Set vNames(i), vValues(i)\n        Next\n\n    Else\n\n        MsgBox "Please open part or assembly"\n\n    End If\n   \nEnd Sub\n\n')))}f.isMDXComponent=!0},11298:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/file-specific-custom-properties-a891741a9f46d5c88d49493893710df0.png"}}]);