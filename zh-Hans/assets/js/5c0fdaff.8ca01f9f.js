"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[81294],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),l=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(o),m=r,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return o?n.createElement(f,s(s({ref:t},u),{},{components:o})):n.createElement(f,s({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},48967:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const i={title:"SOLIDWORKS\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u7684\u8fdb\u7a0b\u95f4\u901a\u4fe1",caption:"\u8fdb\u7a0b\u95f4\u901a\u4fe1"},s=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/index",title:"SOLIDWORKS\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u7684\u8fdb\u7a0b\u95f4\u901a\u4fe1",description:"SOLIDWORKS\u5e94\u7528\u7a0b\u5e8f\uff08\u5b8f\u3001\u63d2\u4ef6\u3001\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\uff09\u4e4b\u95f4\u8fdb\u884c\u8fdb\u7a0b\u95f4\u901a\u4fe1\u7684\u65b9\u6cd5",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u7684\u8fdb\u7a0b\u95f4\u901a\u4fe1",caption:"\u8fdb\u7a0b\u95f4\u901a\u4fe1"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528Windows Installer XML\uff08WiX\uff09\u521b\u5efaSOLIDWORKS\u63d2\u4ef6\u5b89\u88c5\u7a0b\u5e8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/installer/wix/"},next:{title:"\u4ece\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\u6216\u5b8f\u8c03\u7528SOLIDWORKS\u63d2\u4ef6\u7684\u51fd\u6570",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/invoke-add-in-functions/"}},a={},l=[{value:"labels: \u901a\u4fe1,\u53c2\u6570",id:"labels-\u901a\u4fe1\u53c2\u6570",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SOLIDWORKS\u5e94\u7528\u7a0b\u5e8f\uff08\u5b8f\u3001\u63d2\u4ef6\u3001\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\uff09\u4e4b\u95f4\u8fdb\u884c\u8fdb\u7a0b\u95f4\u901a\u4fe1\u7684\u65b9\u6cd5"),(0,r.kt)("h2",{id:"labels-\u901a\u4fe1\u53c2\u6570"},"labels: ","[\u901a\u4fe1,\u53c2\u6570]"),(0,r.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86\u5728\u4e3aSOLIDWORKS\u5f00\u53d1\u7684\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u6267\u884c\u8fdb\u7a0b\u95f4\u901a\u4fe1\u7684\u65b9\u6cd5\u3002\u901a\u4fe1\u6d89\u53ca\u5728\u4e0d\u540c\u6a21\u5757\uff08\u5373\u5b8f\u3001\u63d2\u4ef6\u548c\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\uff09\u4e4b\u95f4\u4f20\u9012\u81ea\u5b9a\u4e49\u53c2\u6570\u6216\u4fe1\u53f7\u3002"),(0,r.kt)("p",null,"\u8fd9\u53ef\u4ee5\u4e3a\u4e3aSOLIDWORKS\u5f00\u53d1\u7684\u5e94\u7528\u7a0b\u5e8f\u5f15\u5165\u989d\u5916\u7684\u81ea\u52a8\u5316\u7ea7\u522b\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u8fdb\u884c\u8fdb\u7a0b\u95f4\u901a\u4fe1\uff1aCOM\u3001\u547d\u540d\u7ba1\u9053\u3001Windows Communication Foundation\uff08WCF\uff09\u3001\u5171\u4eab\u5185\u5b58\u3001\u7f13\u51b2\u533a\u3001\u6587\u4ef6\u4ea4\u6362\u7b49\u3002"),(0,r.kt)("p",null,"\u8bf7\u6d4f\u89c8\u672c\u8282\u4ee5\u83b7\u53d6\u5efa\u7acbSOLIDWORKS\u5f00\u53d1\u7684\u8f6f\u4ef6\u4e4b\u95f4\u901a\u4fe1\u7684\u8be6\u7ec6\u6307\u5357\u548c\u793a\u4f8b\u3002"))}d.isMDXComponent=!0}}]);