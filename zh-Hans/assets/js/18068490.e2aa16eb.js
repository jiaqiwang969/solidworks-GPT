"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[61449],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return r?o.createElement(h,s(s({ref:t},d),{},{components:r})):o.createElement(h,s({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={layout:"sw-macro-fix",title:"Fix issues with failed to connect to database or Excel in SOLIDWORKS macro",caption:"Failed to Connect To Database or Excel",description:"Fixing the error in the macro which connects to database (e.g. SQL, MySql, Oracle, MS Access etc.) or any other data source and doesn't read/write values or displays error",image:"odbc-drivers.png",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-failed-to-connect-to-database-or-excel.html"]},s=void 0,c={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/connect-database-excel-error/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/connect-database-excel-error/index",title:"Fix issues with failed to connect to database or Excel in SOLIDWORKS macro",description:"Fixing the error in the macro which connects to database (e.g. SQL, MySql, Oracle, MS Access etc.) or any other data source and doesn't read/write values or displays error",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/connect-database-excel-error/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/connect-database-excel-error",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/connect-database-excel-error/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/connect-database-excel-error/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/connect-database-excel-error/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"Fix issues with failed to connect to database or Excel in SOLIDWORKS macro",caption:"Failed to Connect To Database or Excel",description:"Fixing the error in the macro which connects to database (e.g. SQL, MySql, Oracle, MS Access etc.) or any other data source and doesn't read/write values or displays error",image:"odbc-drivers.png",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-failed-to-connect-to-database-or-excel.html"]},sidebar:"tutorialSidebar",previous:{title:"Fix SOLIDWORKS macro issues with lightweight components in assembly or drawing",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/assembly-drawing-lightweight-components/"},next:{title:"Fix errors when creating sketch segments using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/create-sketch-segments-error/"}},i={},l=[{value:"Symptoms",id:"symptoms",level:2},{value:"Cause",id:"cause",level:2},{value:"Resolution",id:"resolution",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"symptoms"},"Symptoms"),(0,n.kt)("p",null,"SOLIDWORKS macro should connect to database (e.g. SQL, MySql, Oracle, MS Access etc.) or any other data source (e.g. MS Excel).\nMacro doesn't read/write values or displays error."),(0,n.kt)("h2",{id:"cause"},"Cause"),(0,n.kt)("p",null,"The most common way to connect to database or Excel in VBA macros would be via abstraction layer such as ADODB, ODBC, OLEDB.\nIn order to connect to database the corresponding driver must be installed into the system and the valid connection string must be provided.\nThe drivers are also OS-architecture specific (x32/x64)"),(0,n.kt)("h2",{id:"resolution"},"Resolution"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Find what abstraction layer is used. Usually there will be lines of code similar to the following.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Set conn = CreateObject("ADODB.Connection")\nSet records = CreateObject("ADODB.Recordset")\n    \nDim xlsFilePath As String\nxlsFilePath = swApp.GetCurrentMacroPathFolder() & "\\" & EXCEL_FILE_NAME\n    \nconn.Open "Provider=Microsoft.ACE.OLEDB.12.0;" & _\n        "Data Source=" & xlsFilePath & _\n            ";Extended Properties=""Excel 8.0;HDR=Yes;"";"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make sure that the appropriate driver is installed. For SOLIDWORKS 2013 onwards (check the drivers for x64 system).\nFor older SOLIDWORKS version check x32 versions). Usually the drivers can be downloaded for free from the database supplier web-site or database installation package.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"List of ODBC drivers",src:r(87080).Z,width:"320",height:"246"}),"{ width=320 height=245 }"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modify the connection string as required")))}p.isMDXComponent=!0},87080:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/odbc-drivers-48c839df6180c961d13908e009866e03.png"}}]);