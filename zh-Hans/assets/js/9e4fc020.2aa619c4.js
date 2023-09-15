"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[72562],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),k=a,d=u["".concat(l,".").concat(k)]||u[k]||m[k]||n;return r?o.createElement(d,i(i({ref:t},p),{},{components:r})):o.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}k.displayName="MDXCreateElement"},74024:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const n={title:"SOLIDWORKS\u5b8f\u6545\u969c\u6392\u9664\uff1a\u95ee\u9898\u548c\u89e3\u51b3\u65b9\u6848",caption:"\u5b8f\u6545\u969c\u6392\u9664\uff1a\u95ee\u9898\u548c\u89e3\u51b3\u65b9\u6848"},i=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/index",title:"SOLIDWORKS\u5b8f\u6545\u969c\u6392\u9664\uff1a\u95ee\u9898\u548c\u89e3\u51b3\u65b9\u6848",description:"SOLIDWORKS\u4e2d\u8fd0\u884c\u5b8f\u65f6\u5e38\u89c1\u9519\u8bef\u7684\u6982\u8ff0\u548c\u89e3\u51b3\u65b9\u6848",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS\u5b8f\u6545\u969c\u6392\u9664\uff1a\u95ee\u9898\u548c\u89e3\u51b3\u65b9\u6848",caption:"\u5b8f\u6545\u969c\u6392\u9664\uff1a\u95ee\u9898\u548c\u89e3\u51b3\u65b9\u6848"},sidebar:"tutorialSidebar",previous:{title:"Failed to run SOLIDWORKS macro with multiple entry points",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macro-multiple-entry-points/"},next:{title:"SOLIDWORKS\u5b8f\u7c7b\u578b - VBA (swp), SWBasic (swb), VSTA (dll)",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/types/"}},l={},c=[{value:"\u9519\u8bef\u5217\u8868",id:"\u9519\u8bef\u5217\u8868",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SOLIDWORKS\u4e2d\u8fd0\u884c\u5b8f\u65f6\u5e38\u89c1\u9519\u8bef\u7684\u6982\u8ff0\u548c\u89e3\u51b3\u65b9\u6848\nlabels: ","[\u5b8f, \u4e0d\u5de5\u4f5c, \u95ee\u9898, solidworks api, \u6545\u969c\u6392\u9664, vba]","\nstyles:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/_assets/styles/catalogue.css\nredirect-from:"),(0,a.kt)("li",{parentName:"ul"},"/2018/04/macros-troubleshooting-issues-and-resolutions.html")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"SOLIDWORKS\u5b8f\u662f\u901a\u8fc7\u5176API\u81ea\u52a8\u5316\u548c\u6269\u5c55SOLIDWORKS\u529f\u80fd\u7684\u6700\u5e38\u89c1\u65b9\u5f0f\u3002\n\u5b8f\u53ef\u4ee5\u5728\u516c\u53f8\u5185\u90e8\u5f00\u53d1\uff0c\u4e5f\u53ef\u4ee5\u4ece\u4e0d\u540c\u7684\u7f51\u7ad9\u4e0b\u8f7d\uff0c\u5305\u62ecSOLIDWORKS\u8bba\u575b\u30013D Content Central\u3001",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-tools"},"CodeStack"),"\u7b49\uff0c\u751a\u81f3\u53ef\u4ee5\u4eceSOLIDWORKS\u5f55\u5236\u3002"),(0,a.kt)("p",null,"\u4f46\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5b8f\u65e0\u6cd5\u6309\u9884\u671f\u5de5\u4f5c\u3002\u8fd9\u901a\u5e38\u662f\u4ee5\u4e0b\u60c5\u51b5\u4e4b\u4e00\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u6b63\u5e38\u5de5\u4f5c\u7684\u5b8f\u7a81\u7136\u505c\u6b62\u5de5\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b8f\u5728\u67d0\u4e9b\u5de5\u4f5c\u7ad9\u4e0a\u5de5\u4f5c\uff0c\u4f46\u5728\u5176\u4ed6\u5de5\u4f5c\u7ad9\u4e0a\u4e0d\u5de5\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b8f\u5bf9\u67d0\u4e9b\u6a21\u578b\u5de5\u4f5c\u6b63\u5e38\uff0c\u4f46\u5bf9\u5176\u4ed6\u6a21\u578b\u4e0d\u5de5\u4f5c\u3002")),(0,a.kt)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u5c06\u4ecb\u7ecd\u5b8f\u9519\u8bef\u7684\u6700\u5e38\u89c1\u75c7\u72b6\u3002"),(0,a.kt)("p",null,"\u6d4f\u89c8\u9519\u8bef\u5217\u8868\u4ee5\u627e\u5230\u6700\u5e38\u89c1\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.kt)("p",null,"\u5355\u51fb\u94fe\u63a5\u4ee5\u83b7\u53d6\u6709\u5173\u95ee\u9898\u7684\u8be6\u7ec6\u63cf\u8ff0\u3001\u539f\u56e0\u548c\u89e3\u51b3\u6b65\u9aa4\u3002"),(0,a.kt)("h2",{id:"\u9519\u8bef\u5217\u8868"},"\u9519\u8bef\u5217\u8868"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd0\u884c\u65f6\u9519\u8bef '91'\uff1a\u5bf9\u8c61\u53d8\u91cf\u6216 With \u5757\u53d8\u91cf\u672a\u8bbe\u7f6e"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/assembly-drawing-lightweight-components/"},"\u89e3\u51b3\u65b9\u68481")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/macro-multiple-entry-points/"},"\u89e3\u51b3\u65b9\u68482")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/create-sketch-segments-error/"},"\u89e3\u51b3\u65b9\u68483")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/preconditions-not-met/"},"\u89e3\u51b3\u65b9\u68484")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/selection-inconsistency/"},"\u89e3\u51b3\u65b9\u68485")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u9519\u8bef\uff1a\u627e\u4e0d\u5230\u9879\u76ee\u6216\u5e93"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/missing-solidworks-type-library-references/"},"\u89e3\u51b3\u65b9\u68481")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd0\u884c\u65f6\u9519\u8bef '424'\uff1a\u5bf9\u8c61\u6240\u9700"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/merged-macro-error/"},"\u89e3\u51b3\u65b9\u68481")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd0\u884c\u65f6\u9519\u8bef '13'\uff1a\u7c7b\u578b\u4e0d\u5339\u914d"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/preconditions-not-met/"},"\u89e3\u51b3\u65b9\u68481")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u9519\u8bef\uff1a\u672a\u5b9a\u4e49\u7684\u7c7b\u578b"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/swb-macro-error/"},"\u89e3\u51b3\u65b9\u68481")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd0\u884c\u65f6\u9519\u8bef '438'\uff1a\u5bf9\u8c61\u4e0d\u652f\u6301\u6b64\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/future-version-apis/"},"\u89e3\u51b3\u65b9\u68481")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd0\u884c\u65f6\u9519\u8bef '429'\uff1aActiveX \u7ec4\u4ef6\u65e0\u6cd5\u521b\u5efa\u5bf9\u8c61"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/missing-com-component/"},"\u89e3\u51b3\u65b9\u68481")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd0\u884c\u65f6\u9519\u8bef '5'\uff1a\u65e0\u6548\u7684\u8fc7\u7a0b\u8c03\u7528\u6216\u53c2\u6570"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/model-title-inconsistency-displaying-extension/"},"\u89e3\u51b3\u65b9\u68481")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u9519\u8bef\uff1a\u663e\u793a\u201c\u5fc5\u987b\u66f4\u65b0\u6b64\u9879\u76ee\u7684\u4ee3\u7801\u4ee5\u5728 64 \u4f4d\u7cfb\u7edf\u4e0a\u4f7f\u7528\u201d\u3002\u8bf7\u68c0\u67e5\u5e76\u66f4\u65b0 Declare \u8bed\u53e5\uff0c\u7136\u540e\u4f7f\u7528 PtrSafe \u5c5e\u6027\u6807\u8bb0\u9879\u76ee"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/"},"\u89e3\u51b3\u65b9\u68481")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u6253\u5f00\uff08\u9002\u7528\u4e8eVBA\u5b8f\uff09"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/too-long-macro-path/"},"\u89e3\u51b3\u65b9\u68481")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u9519\u8bef\uff1a\u65e0\u6548\u7684\u8fc7\u7a0b\u5916\u9519\u8bef"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/too-long-vba-macro-line/"},"\u89e3\u51b3\u65b9\u68481")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SolidWorksMacro\u4e0d\u5305\u542b\u201cswApp\u201d\u7684\u5b9a\u4e49\uff08VSTA\uff09"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/"},"\u89e3\u51b3\u65b9\u68481")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u6253\u5f00\uff08\u9002\u7528\u4e8eVSTA\u5b8f\uff09"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/run-vsta-macro-error/"},"\u89e3\u51b3\u65b9\u68481"))))),(0,a.kt)("p",null,"{% catalogue { type: sw-macro-fix } %}"))}m.isMDXComponent=!0}}]);