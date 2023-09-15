"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[14094],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>w});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,w=p["".concat(d,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(w,s(s({ref:n},l),{},{components:t})):r.createElement(w,s({ref:n},l))}));function w(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"\u4f7f\u7528SwEx.AddIn\u6846\u67b6\u7684SOLIDWORKS\u547d\u4ee4\u7ba1\u7406\u5668",caption:"\u547d\u4ee4\u7ba1\u7406\u5668"},s=void 0,i={unversionedId:"codestack/labs/solidworks/swex/add-in/commands-manager/index",id:"codestack/labs/solidworks/swex/add-in/commands-manager/index",title:"\u4f7f\u7528SwEx.AddIn\u6846\u67b6\u7684SOLIDWORKS\u547d\u4ee4\u7ba1\u7406\u5668",description:"\u4f7f\u7528SwEx.AddIn\u6846\u67b6\u5728C#\u548cVB.NET\u4e2d\u5f00\u53d1SOLIDWORKS\u63d2\u4ef6\u65f6\uff0c\u6dfb\u52a0\u547d\u4ee4\uff08\u83dc\u5355\u3001\u5de5\u5177\u680f\u548c\u4e0a\u4e0b\u6587\u83dc\u5355\uff09\u7684\u8bf4\u660e",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/labs/solidworks/swex/add-in/commands-manager/index.md",sourceDirName:"codestack/labs/solidworks/swex/add-in/commands-manager",slug:"/codestack/labs/solidworks/swex/add-in/commands-manager/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/add-in/commands-manager/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/add-in/commands-manager/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SwEx.AddIn\u6846\u67b6\u7684SOLIDWORKS\u547d\u4ee4\u7ba1\u7406\u5668",caption:"\u547d\u4ee4\u7ba1\u7406\u5668"},sidebar:"tutorialSidebar",previous:{title:"API \u53c2\u8003",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/add-in/api-reference"},next:{title:"\u4f7f\u7528SwEx.AddIn\u5728\u83dc\u5355\u3001\u5de5\u5177\u680f\u548c\u4e0a\u4e0b\u6587\u83dc\u5355\u4e2d\u6258\u7ba1SOLIDWORKS\u547d\u4ee4",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/add-in/commands-manager/hosting-commands/"}},d={},c=[{value:"sidebar_position: 0",id:"sidebar_position-0",level:2}],l={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528SwEx.AddIn\u6846\u67b6\u5728C#\u548cVB.NET\u4e2d\u5f00\u53d1SOLIDWORKS\u63d2\u4ef6\u65f6\uff0c\u6dfb\u52a0\u547d\u4ee4\uff08\u83dc\u5355\u3001\u5de5\u5177\u680f\u548c\u4e0a\u4e0b\u6587\u83dc\u5355\uff09\u7684\u8bf4\u660e\ntoc-group-name: labs-solidworks-swex"),(0,o.kt)("h2",{id:"sidebar_position-0"},"sidebar_position: 0"),(0,o.kt)("p",null,"SwEx\u901a\u8fc7\u5c06\u679a\u4e3e\u7c7b\u578b\u89c6\u4e3a\u547d\u4ee4\u7ec4\uff0c\u5c06\u679a\u4e3e\u503c\u89c6\u4e3a\u547d\u4ee4\u9879\uff0c\u7b80\u5316\u4e86\u6dfb\u52a0\u547d\u4ee4\u7684\u8fc7\u7a0b\u3002\u53ef\u4ee5\u4f7f\u7528\u5404\u79cd\u5c5e\u6027\u4fee\u9970\u503c\uff0c\u4ee5\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7684\u6807\u9898\u3001\u63cf\u8ff0\u548c\u56fe\u6807\u3002"),(0,o.kt)("p",null,"\u547d\u4ee4\u53ef\u4ee5\u63d2\u5165\u5230\u83dc\u5355\u3001\u5de5\u5177\u680f\u6216\u4e0a\u4e0b\u6587\u83dc\u5355\u4e2d\u3002"),(0,o.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5904\u7406\u547d\u4ee4\u7684\u70b9\u51fb\u4e8b\u4ef6\uff0c\u5e76\u4e3a\u547d\u4ee4\u6309\u94ae\u5206\u914d\u81ea\u5b9a\u4e49\u72b6\u6001\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u63d2\u4ef6\u4e2d\u63d2\u5165\u591a\u4e2a\u547d\u4ee4\u7ec4\u3002"))}u.isMDXComponent=!0}}]);