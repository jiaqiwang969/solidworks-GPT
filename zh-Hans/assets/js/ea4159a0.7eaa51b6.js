"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[26817],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>w});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(t),m=s,w=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(w,i(i({ref:n},d),{},{components:t})):r.createElement(w,i({ref:n},d))}));function w(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const o={layout:"sw-tool",title:"\u4f7f\u7528API\u5728SOLIDWORKS\u6a21\u578b\u4e2d\u6682\u505c\u91cd\u5efa\u64cd\u4f5c\u7684\u5b8f",image:"suspended-rebuild.svg",labels:["api","rebuild","utility","suspend","performance"],group:"Performance"},i=void 0,a={unversionedId:"codestack/solidworks-api/document/suspend-rebuild/index",id:"codestack/solidworks-api/document/suspend-rebuild/index",title:"\u4f7f\u7528API\u5728SOLIDWORKS\u6a21\u578b\u4e2d\u6682\u505c\u91cd\u5efa\u64cd\u4f5c\u7684\u5b8f",description:"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u6765\u6682\u505c\u96f6\u4ef6\u3001\u88c5\u914d\u4f53\u548c\u56fe\u7eb8\u7684\u91cd\u5efa\u64cd\u4f5c\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/suspend-rebuild/index.md",sourceDirName:"codestack/solidworks-api/document/suspend-rebuild",slug:"/codestack/solidworks-api/document/suspend-rebuild/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/suspend-rebuild/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/suspend-rebuild/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528API\u5728SOLIDWORKS\u6a21\u578b\u4e2d\u6682\u505c\u91cd\u5efa\u64cd\u4f5c\u7684\u5b8f",image:"suspended-rebuild.svg",labels:["api","rebuild","utility","suspend","performance"],group:"Performance"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u6682\u505c\u56fe\u5f62\u66f4\u65b0\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/suspend-graphics-update/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u52a8\u5316\u8868\u683c\uff08BOM\u3001\u5e38\u89c4\u3001\u4fee\u8ba2\u7b49\uff09",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/tables/"}},l={},c=[],d={toc:c},u="wrapper";function p(e){let{components:n,...o}=e;return(0,s.kt)(u,(0,r.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u6765\u6682\u505c\u96f6\u4ef6\u3001\u88c5\u914d\u4f53\u548c\u56fe\u7eb8\u7684\u91cd\u5efa\u64cd\u4f5c\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u6f14\u793a\u5728\u66f4\u6539\u5c3a\u5bf8\u65f6\u6682\u505c\u91cd\u5efa\u64cd\u4f5c",src:t(61615).Z,width:"500",height:"282"})),(0,s.kt)("p",null,"\u5f53\u5b8f\u542f\u52a8\u65f6\uff0c\u5c06\u663e\u793a\u4e00\u4e2a\u7a97\u4f53\u3002\u5728\u7a97\u4f53\u6253\u5f00\u671f\u95f4\uff0c\u6240\u6709\u91cd\u5efa\u64cd\u4f5c\uff08\u91cd\u65b0\u751f\u6210\uff09\u90fd\u5c06\u88ab\u6682\u505c\u3002\n\u4f8b\u5982\uff0c\u76f4\u5230\u70b9\u51fb",(0,s.kt)("strong",{parentName:"p"},"\u9000\u51fa\u6682\u505c\u91cd\u5efa\u6a21\u5f0f"),"\u6309\u94ae\u4e4b\u524d\uff0c\u5c3a\u5bf8\u66f4\u6539\u6216\u914d\u5408\u5173\u7cfb\u90fd\u4e0d\u4f1a\u89e3\u51b3\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:t(15266).Z},"\u4e0b\u8f7d\u5b8f")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u4e3b\u6a21\u5757")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Sub main()\n\n    FreezeRebuildForm.Show vbModeless\n\nEnd Sub\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7528\u6237\u7a97\u4f53")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const CANCEL_REGEN As Long = 1\n\nDim swApp As SldWorks.SldWorks\n\nDim WithEvents swPart As SldWorks.PartDoc\nDim WithEvents swAssy As SldWorks.AssemblyDoc\nDim WithEvents swDraw As SldWorks.DrawingDoc\n\nPrivate Sub btnExit_Click()\n    End\nEnd Sub\n\nPrivate Sub UserForm_Initialize()\n    \n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        Select Case swModel.GetType()\n            Case swDocumentTypes_e.swDocPART\n                Set swPart = swModel\n            Case swDocumentTypes_e.swDocASSEMBLY\n                Set swAssy = swModel\n            Case swDocumentTypes_e.swDocDRAWING\n                Set swDraw = swModel\n        End Select\n            \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n        End\n    End If\n    \nEnd Sub\n\nPrivate Function swAssy_RegenNotify() As Long\n    swAssy_RegenNotify = CANCEL_REGEN\nEnd Function\n\nPrivate Function swDraw_RegenNotify() As Long\n    swDraw_RegenNotify = CANCEL_REGEN\nEnd Function\n\nPrivate Function swPart_RegenNotify() As Long\n    swPart_RegenNotify = CANCEL_REGEN\nEnd Function\n')))}p.isMDXComponent=!0},15266:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/FreezeRebuild-0af95c8365f9401120e994016b2f56be.swp"},61615:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/rebuild-suspended-850b0933da4634bb6ef6f2fbbc8a08e4.gif"}}]);