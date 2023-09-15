"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[89829],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(k,i(i({ref:t},c),{},{components:r})):o.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u6846\u67b6",caption:"\u6846\u67b6"},i=void 0,s={unversionedId:"codestack/solidworks-api/application/frame/index",id:"codestack/solidworks-api/application/frame/index",title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u6846\u67b6",description:"\u4f7f\u7528API\u81ea\u52a8\u5316SOLIDWORKS\u6846\u67b6\uff08\u83dc\u5355\u3001\u5de5\u5177\u680f\u3001\u547d\u4ee4\u7ba1\u7406\u5668\uff09",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/application/frame/index.md",sourceDirName:"codestack/solidworks-api/application/frame",slug:"/codestack/solidworks-api/application/frame/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/application/frame/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/application/frame/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u6846\u67b6",caption:"\u6846\u67b6"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u9759\u9ed8\u4fdd\u5b58\u6240\u6709\u6253\u5f00\u7684\u6587\u6863\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/application/documents/save-all-silently/"},next:{title:"\u4f7f\u7528API\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u6355\u83b7SOLIDWORKS\u547d\u4ee4\u7684VBA\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/application/frame/capture-commands/"}},l={},p=[{value:"labels: \u6846\u67b6,\u83dc\u5355,\u5de5\u5177\u680f,\u547d\u4ee4",id:"labels-\u6846\u67b6\u83dc\u5355\u5de5\u5177\u680f\u547d\u4ee4",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f7f\u7528API\u81ea\u52a8\u5316SOLIDWORKS\u6846\u67b6\uff08\u83dc\u5355\u3001\u5de5\u5177\u680f\u3001\u547d\u4ee4\u7ba1\u7406\u5668\uff09"),(0,n.kt)("h2",{id:"labels-\u6846\u67b6\u83dc\u5355\u5de5\u5177\u680f\u547d\u4ee4"},"labels: ","[\u6846\u67b6,\u83dc\u5355,\u5de5\u5177\u680f,\u547d\u4ee4]"),(0,n.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFrame.html"},"IFrame"),"\u548c",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISldWorks.html"},"ISldWorks")," SOLIDWORKS API\u63a5\u53e3\u81ea\u5b9a\u4e49SOLIDWORKS\u5e94\u7528\u7a0b\u5e8f\u6846\u67b6\u4e2d\u663e\u793a\u7684\u5143\u7d20\uff0c\u5982\u83dc\u5355\u3001\u547d\u4ee4\u7ba1\u7406\u5668\u3001\u9009\u9879\u5361\u548c\u5de5\u5177\u680f\u3002"),(0,n.kt)("p",null,"\u6b64\u5916\uff0c\u6846\u67b6\u5bf9\u8c61\u901a\u8fc7",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iframe~gethwnd.html"},"IFrame::GetHWnd"),"\u65b9\u6cd5\u63d0\u4f9b\u5bf9SOLIDWORKS\u7a97\u53e3\u53e5\u67c4\u7684\u8bbf\u95ee\uff0c\u4ece\u800c\u53ef\u4ee5\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"https://blog.codestack.net/2019/03/solidworks-api-command-doesnt-exist.html"},"Windows API\u6765\u8c03\u7528SOLIDWORKS\u547d\u4ee4"),"\u3002"),(0,n.kt)("p",null,"\u672c\u8282\u5305\u542b\u4f7f\u7528SOLIDWORKS API\u548cWindows API\u81ea\u52a8\u5316\u5e94\u7528\u7a0b\u5e8f\u6846\u67b6\u7684\u793a\u4f8b\u3002"))}u.isMDXComponent=!0}}]);