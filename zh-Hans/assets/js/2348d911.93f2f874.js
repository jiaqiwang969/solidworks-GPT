"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[87853],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>m});var t=o(67294);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,s=function(e,n){if(null==e)return{};var o,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},w=t.forwardRef((function(e,n){var o=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(o),w=s,m=u["".concat(l,".").concat(w)]||u[w]||p[w]||r;return o?t.createElement(m,i(i({ref:n},d),{},{components:o})):t.createElement(m,i({ref:n},d))}));function m(e,n){var o=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=o.length,i=new Array(r);i[0]=w;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var c=2;c<r;c++)i[c]=o[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}w.displayName="MDXCreateElement"},73311:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=o(87462),s=(o(67294),o(3905));const r={layout:"sw-tool",title:"Macro to suspend rebuild operation in SOLIDWORKS model using API",caption:"Suspend Rebuild Operation",description:"This macro allows to suspend rebuild operation for parts, assemblies and drawings to enhance the performance using SOLIDWORKS API",image:"suspended-rebuild.svg",labels:["api","rebuild","utility","suspend","performance"],group:"Performance"},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/suspend-rebuild/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/suspend-rebuild/index",title:"Macro to suspend rebuild operation in SOLIDWORKS model using API",description:"This macro allows to suspend rebuild operation for parts, assemblies and drawings to enhance the performance using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/suspend-rebuild/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/suspend-rebuild",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/suspend-rebuild/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/suspend-rebuild/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/suspend-rebuild/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to suspend rebuild operation in SOLIDWORKS model using API",caption:"Suspend Rebuild Operation",description:"This macro allows to suspend rebuild operation for parts, assemblies and drawings to enhance the performance using SOLIDWORKS API",image:"suspended-rebuild.svg",labels:["api","rebuild","utility","suspend","performance"],group:"Performance"},sidebar:"tutorialSidebar",previous:{title:"Macro to suspend graphics update using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/suspend-graphics-update/"},next:{title:"Fixing the error when running legacy SWBasic (*.swb) SOLIDWORKS macro",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/swb-macro-error/"}},l={},c=[],d={toc:c},u="wrapper";function p(e){let{components:n,...r}=e;return(0,s.kt)(u,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This macro us using SOLIDWORKS API to suspend rebuild operation for parts, assemblies and drawings to enhance the performance."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Demonstration of suspended rebuild while changing the dimensions",src:o(95378).Z,width:"500",height:"282"})),(0,s.kt)("p",null,"When macro started form is displayed. While form is open all rebuild operations (regenerations) will be suspended.\nFor example dimension changes or mates will not resolve until ",(0,s.kt)("strong",{parentName:"p"},"Exit Suspend Rebuild Mode")," button is clicked."),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:o(39515).Z},"Download Macro")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Main Module")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Sub main()\n\n    FreezeRebuildForm.Show vbModeless\n\nEnd Sub\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"User Form")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const CANCEL_REGEN As Long = 1\n\nDim swApp As SldWorks.SldWorks\n\nDim WithEvents swPart As SldWorks.PartDoc\nDim WithEvents swAssy As SldWorks.AssemblyDoc\nDim WithEvents swDraw As SldWorks.DrawingDoc\n\nPrivate Sub btnExit_Click()\n    End\nEnd Sub\n\nPrivate Sub UserForm_Initialize()\n    \n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        Select Case swModel.GetType()\n            Case swDocumentTypes_e.swDocPART\n                Set swPart = swModel\n            Case swDocumentTypes_e.swDocASSEMBLY\n                Set swAssy = swModel\n            Case swDocumentTypes_e.swDocDRAWING\n                Set swDraw = swModel\n        End Select\n            \n    Else\n        MsgBox "Please open the model"\n        End\n    End If\n    \nEnd Sub\n\nPrivate Function swAssy_RegenNotify() As Long\n    swAssy_RegenNotify = CANCEL_REGEN\nEnd Function\n\nPrivate Function swDraw_RegenNotify() As Long\n    swDraw_RegenNotify = CANCEL_REGEN\nEnd Function\n\nPrivate Function swPart_RegenNotify() As Long\n    swPart_RegenNotify = CANCEL_REGEN\nEnd Function\n')))}p.isMDXComponent=!0},39515:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/files/FreezeRebuild-0af95c8365f9401120e994016b2f56be.swp"},95378:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/rebuild-suspended-850b0933da4634bb6ef6f2fbbc8a08e4.gif"}}]);