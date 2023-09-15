"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[18038],{3905:(A,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>d});var n=t(67294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function o(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function s(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},o=Object.keys(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var a=n.createContext({}),c=function(A){var e=n.useContext(a),t=e;return A&&(t="function"==typeof A?A(e):s(s({},e),A)),t},l=function(A){var e=c(A.components);return n.createElement(a.Provider,{value:e},A.children)},p="mdxType",g={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,o=A.originalType,a=A.parentName,l=i(A,["components","mdxType","originalType","parentName"]),p=c(t),u=r,d=p["".concat(a,".").concat(u)]||p[u]||g[u]||o;return t?n.createElement(d,s(s({ref:e},l),{},{components:t})):n.createElement(d,s({ref:e},l))}));function d(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var a in e)hasOwnProperty.call(e,a)&&(i[a]=e[a]);i.originalType=A,i[p]="string"==typeof A?A:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3128:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const o={layout:"sw-tool",caption:"\u5207\u6362\u8349\u56fe\u6355\u6349",title:"\u5728SOLIDWORKS\u6587\u6863\u4e2d\u5207\u6362\u8349\u56fe\u6355\u6349\u7684\u5b8f"},s=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/toggle-snapping/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/toggle-snapping/index",title:"\u5728SOLIDWORKS\u6587\u6863\u4e2d\u5207\u6362\u8349\u56fe\u6355\u6349\u7684\u5b8f",description:"VBA\u5b8f\u7528\u4e8e\u5728SOLIDWORKS\u8349\u56fe\u4e2d\u5207\u6362\u542f\u7528\u6355\u6349\u9009\u9879",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/toggle-snapping/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/toggle-snapping",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/toggle-snapping/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/toggle-snapping/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/toggle-snapping/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",caption:"\u5207\u6362\u8349\u56fe\u6355\u6349",title:"\u5728SOLIDWORKS\u6587\u6863\u4e2d\u5207\u6362\u8349\u56fe\u6355\u6349\u7684\u5b8f"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u9009\u62e9\u76f8\u7b49\u5f27\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/select-equal-arcs/"},next:{title:"Understanding Sketch Transformations in SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/transform/"}},a={},c=[{value:"group: \u8349\u56fe",id:"group-\u8349\u56fe",level:2},{value:"\u5728\u5de5\u5177\u680f+\u4e2d\u4f7f\u7528\u5b8f",id:"\u5728\u5de5\u5177\u680f\u4e2d\u4f7f\u7528\u5b8f",level:2}],l={toc:c},p="wrapper";function g(A){let{components:e,...o}=A;return(0,r.kt)(p,(0,n.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"VBA\u5b8f\u7528\u4e8e\u5728SOLIDWORKS\u8349\u56fe\u4e2d\u5207\u6362\u542f\u7528\u6355\u6349\u9009\u9879\nimage: toggle-snapping.svg"),(0,r.kt)("h2",{id:"group-\u8349\u56fe"},"group: \u8349\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u542f\u7528\u8349\u56fe\u6355\u6349\u9009\u9879",src:t(87556).Z,width:"562",height:"338"})),(0,r.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u5141\u8bb8\u5728SOLIDWORKS\u8349\u56fe\u4e2d\u5207\u6362\u201c\u542f\u7528\u201d\u9009\u9879\u3002"),(0,r.kt)("h2",{id:"\u5728\u5de5\u5177\u680f\u4e2d\u4f7f\u7528\u5b8f"},"\u5728\u5de5\u5177\u680f+\u4e2d\u4f7f\u7528\u5b8f"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5b8f\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/"},"\u5de5\u5177\u680f+"),"\u4e2d\u4f7f\u7528\uff0c\u8fd9\u5c06\u6539\u5584\u7528\u6237\u4f53\u9a8c\u3002\u53ef\u4ee5\u4e3a\u5b8f\u6309\u94ae\u542f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/configuration/toggles/"},"\u5207\u6362\u72b6\u6001"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u542f\u7528\u6355\u6349\u5207\u6362\u6309\u94ae",src:t(6967).Z,width:"436",height:"140"})),(0,r.kt)("p",null,"\u5c06\u4ee5\u4e0b\u4ee3\u7801\u7c98\u8d34\u5230\u201c\u5207\u6362\u6309\u94ae\u72b6\u6001\u4ee3\u7801\u201d\u6587\u672c\u6846\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Return CType(Application, Object).Sw.GetUserPreferenceToggle(249)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5904\u7406\u5207\u6362\u6309\u94ae\u72b6\u6001\u7684\u4ee3\u7801",src:t(60009).Z,width:"516",height:"216"})),(0,r.kt)("p",null,"\u4e0b\u8f7d\u56fe\u6807",(0,r.kt)("a",{target:"_blank",href:t(83327).Z},"\u5728\u8fd9\u91cc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim curVal As Boolean\n    curVal = False <> swApp.GetUserPreferenceToggle(swUserPreferenceToggle_e.swSketchInference)\n    \n    swApp.SetUserPreferenceToggle swUserPreferenceToggle_e.swSketchInference, Not curVal\n    \nEnd Sub\n")))}g.isMDXComponent=!0},83327:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/files/toggle-snapping-a6ce82b5c810e8fd1f7c0fcce150995b.svg"},6967:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/enable-snapping-animation-88b304c6f0189f0b9c6b7be58d2d07b4.gif"},87556:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/enable-snapping-option-4788cef96a2bc450d51d10021146dc3b.png"},60009:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);