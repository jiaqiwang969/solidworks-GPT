"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[34453],{3905:(e,o,t)=>{t.d(o,{Zo:()=>l,kt:()=>m});var i=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);o&&(i=i.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,i,r=function(e,o){if(null==e)return{};var t,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=i.createContext({}),p=function(e){var o=i.useContext(a),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},l=function(e){var o=p(e.components);return i.createElement(a.Provider,{value:o},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var o=e.children;return i.createElement(i.Fragment,{},o)}},d=i.forwardRef((function(e,o){var t=e.components,r=e.mdxType,n=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||n;return t?i.createElement(m,s(s({ref:o},l),{},{components:t})):i.createElement(m,s({ref:o},l))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=t.length,s=new Array(n);s[0]=d;var c={};for(var a in o)hasOwnProperty.call(o,a)&&(c[a]=o[a]);c.originalType=e,c[u]="string"==typeof e?e:r,s[1]=c;for(var p=2;p<n;p++)s[p]=t[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87871:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const n={layout:"sw-tool",title:"Copy SOLIDWORKS file specific custom properties to configuration",caption:"Copy File Specific Custom Properties To Configuration Properties",description:"Macro copies all the file specific properties into the properties of the active configuration",image:"file-specific-custom-properties.png",labels:["configuration","copy","custom properties","utility"],group:"Custom Properties","redirect-from":["/2018/03/copy-file-specific-custom-properties-to.html"]},s=void 0,c={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-file-specific-to-configuration/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-file-specific-to-configuration/index",title:"Copy SOLIDWORKS file specific custom properties to configuration",description:"Macro copies all the file specific properties into the properties of the active configuration",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-file-specific-to-configuration/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-file-specific-to-configuration",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-file-specific-to-configuration/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-file-specific-to-configuration/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-file-specific-to-configuration/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Copy SOLIDWORKS file specific custom properties to configuration",caption:"Copy File Specific Custom Properties To Configuration Properties",description:"Macro copies all the file specific properties into the properties of the active configuration",image:"file-specific-custom-properties.png",labels:["configuration","copy","custom properties","utility"],group:"Custom Properties","redirect-from":["/2018/03/copy-file-specific-custom-properties-to.html"]},sidebar:"tutorialSidebar",previous:{title:"Macro to copy file paths to all drawings of an assembly components using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-drawing-paths/"},next:{title:"Macro to copy path of SOLIDWORKS component to clipboard",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-path/"}},a={},p=[],l={toc:p},u="wrapper";function f(e){let{components:o,...n}=e;return(0,r.kt)(u,(0,i.Z)({},l,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This macro copies all the file specific properties into the properties of the active configuration using SOLIDWORKS API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Properties in the Custom tab of the file",src:t(42616).Z,width:"640",height:"188"}),"{ width=640 }"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swCustPrpMgr As SldWorks.CustomPropertyManager\nDim swConfCustPrpMgr As SldWorks.CustomPropertyManager\n \nSub main()\n \n    Set swApp = Application.SldWorks\n \n    Set swModel = swApp.ActiveDoc\n\n    If Not swModel Is Nothing Then\n   \n        Set swCustPrpMgr = swModel.Extension.CustomPropertyManager("")\n       \n        Dim vNames As Variant\n        Dim vTypes As Variant\n        Dim vValues As Variant\n        swCustPrpMgr.GetAll vNames, vTypes, vValues\n   \n        Dim activeConfName As String\n        activeConfName = swModel.ConfigurationManager.ActiveConfiguration.Name\n\n        Set swConfCustPrpMgr = swModel.Extension.CustomPropertyManager(activeConfName)\n \n        Dim i As Integer\n   \n        For i = 0 To UBound(vNames)\n            swConfCustPrpMgr.Add2 vNames(i), vTypes(i), vValues(i)\n            swConfCustPrpMgr.Set vNames(i), vValues(i)\n        Next\n\n    Else\n\n        MsgBox "Please open part or assembly"\n\n    End If\n   \nEnd Sub\n\n')))}f.isMDXComponent=!0},42616:(e,o,t)=>{t.d(o,{Z:()=>i});const i=t.p+"assets/images/file-specific-custom-properties-a891741a9f46d5c88d49493893710df0.png"}}]);