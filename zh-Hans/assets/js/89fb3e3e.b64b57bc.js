"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[14568],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),a=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=a(e.components);return o.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},w=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=a(t),w=n,f=u["".concat(c,".").concat(w)]||u[w]||d[w]||s;return t?o.createElement(f,i(i({ref:r},p),{},{components:t})):o.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=w;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var a=2;a<s;a++)i[a]=t[a];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}w.displayName="MDXCreateElement"},30733:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var o=t(87462),n=(t(67294),t(3905));const s={title:"\u5728 PowerShell \u811a\u672c\u4e2d\u4f7f\u7528 SOLIDWORKS API \u65b9\u6cd5",caption:"PowerShell"},i=void 0,l={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/power-shell/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/power-shell/index",title:"\u5728 PowerShell \u811a\u672c\u4e2d\u4f7f\u7528 SOLIDWORKS API \u65b9\u6cd5",description:"\u4f7f\u7528 PowerShell \u811a\u672c\u81ea\u52a8\u5316 SOLIDWORKS API \u7684\u4ecb\u7ecd",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/power-shell/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/power-shell",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/power-shell/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/power-shell/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/power-shell/index.md",tags:[],version:"current",frontMatter:{title:"\u5728 PowerShell \u811a\u672c\u4e2d\u4f7f\u7528 SOLIDWORKS API \u65b9\u6cd5",caption:"PowerShell"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5728HTML\u9875\u9762\u4e2d\u6e32\u67d3\u7279\u5f81\u6811",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/java-script/html-feature-tree/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5728shell\u811a\u672c\u4e2d\u5bfc\u51faSOLIDWORKS\u6587\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/power-shell/export-file/"}},c={},a=[{value:"\u4f7f\u7528 PowerShell \u811a\u672c\u81ea\u52a8\u5316 SOLIDWORKS API \u7684\u4ecb\u7ecd",id:"\u4f7f\u7528-powershell-\u811a\u672c\u81ea\u52a8\u5316-solidworks-api-\u7684\u4ecb\u7ecd",level:2}],p={toc:a},u="wrapper";function d(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4f7f\u7528-powershell-\u811a\u672c\u81ea\u52a8\u5316-solidworks-api-\u7684\u4ecb\u7ecd"},"\u4f7f\u7528 PowerShell \u811a\u672c\u81ea\u52a8\u5316 SOLIDWORKS API \u7684\u4ecb\u7ecd"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/powershell/scripting/powershell-scripting?view=powershell-6"},"PowerShell")," \u662f\u4e00\u4e2a\u57fa\u4e8e .NET \u7684\u547d\u4ee4\u884c\u811a\u672c\u8bed\u8a00\u3002\u4e0e\u5176\u4ed6\u811a\u672c\u8bed\u8a00\u76f8\u6bd4\uff0cPowerShell \u63d0\u4f9b\u4e86\u66f4\u5927\u7684\u7075\u6d3b\u6027\u3002\u53ef\u4ee5\u5c06 C# \u548c VB.NET \u7684\u4ee3\u7801\u7247\u6bb5\u5305\u542b\u5230\u811a\u672c\u4e2d\u3002"),(0,n.kt)("p",null,"\u4e0e\u5176\u4ed6\u811a\u672c\u8bed\u8a00\u7c7b\u4f3c\uff0cPowerShell \u811a\u672c\u53ef\u4ee5\u63a5\u53d7\u53c2\u6570\u3002"),(0,n.kt)("p",null,"\u53ef\u4ee5\u4ece\u547d\u4ee4\u884c\u8c03\u7528 PowerShell \u811a\u672c\u3002"),(0,n.kt)("p",null,"\u672c\u8282\u4e2d\u7684\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528\u57fa\u4e8e VB.NET \u548c C# \u7684 PowerShell \u811a\u672c\u8c03\u7528 SOLIDWORKS API\u3002"))}d.isMDXComponent=!0}}]);