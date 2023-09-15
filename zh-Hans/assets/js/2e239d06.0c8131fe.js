"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[99085],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>k});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),g=a,k=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return t?n.createElement(k,i(i({ref:r},c),{},{components:t})):n.createElement(k,i({ref:r},c))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9816:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={title:"\u4f7f\u7528 SOLIDWORKS eDrawings API \u5229\u7528\u6807\u8bb0\u529f\u80fd",caption:"\u6807\u8bb0"},i=void 0,l={unversionedId:"codestack/edrawings-api/markup/index",id:"codestack/edrawings-api/markup/index",title:"\u4f7f\u7528 SOLIDWORKS eDrawings API \u5229\u7528\u6807\u8bb0\u529f\u80fd",description:"\u4f7f\u7528 eDrawings API \u4f7f\u7528\u6807\u8bb0\u529f\u80fd\uff08\u6d4b\u91cf\u3001\u56fe\u7ae0\u3001\u6ce8\u91ca\uff09\u7684\u6307\u5357",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/edrawings-api/markup/index.md",sourceDirName:"codestack/edrawings-api/markup",slug:"/codestack/edrawings-api/markup/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/edrawings-api/markup/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/edrawings-api/markup/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 SOLIDWORKS eDrawings API \u5229\u7528\u6807\u8bb0\u529f\u80fd",caption:"\u6807\u8bb0"},sidebar:"tutorialSidebar",previous:{title:"markup",permalink:"/solidworks-GPT/zh-Hans/docs/category/markup"},next:{title:"\u4f7f\u7528 eDrawings \u6807\u8bb0 API \u6355\u83b7 SOLIDWORKS \u5b9e\u4f53\u7684\u6d4b\u91cf",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/edrawings-api/markup/measurement/"}},p={},s=[{value:"labels: edrawings,markup,getting started",id:"labels-edrawingsmarkupgetting-started",level:2}],c={toc:s},d="wrapper";function u(e){let{components:r,...o}=e;return(0,a.kt)(d,(0,n.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f7f\u7528 eDrawings API \u4f7f\u7528\u6807\u8bb0\u529f\u80fd\uff08\u6d4b\u91cf\u3001\u56fe\u7ae0\u3001\u6ce8\u91ca\uff09\u7684\u6307\u5357"),(0,a.kt)("h2",{id:"labels-edrawingsmarkupgetting-started"},"labels: ","[edrawings,markup,getting started]"),(0,a.kt)("p",null,"eDrawings \u6807\u8bb0 API\uff08\u5982\u6ce8\u91ca\u3001\u56fe\u7ae0\u3001\u6d4b\u91cf\uff09\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/emodelapi/eDrawings.Interop.EModelMarkupControl~eDrawings.Interop.EModelMarkupControl.IEModelMarkupControl.html"},"IEModelMarkupControl")," \u63a5\u53e3\u8bbf\u95ee\u3002"),(0,a.kt)("p",null,"Interop \u53ef\u5728 eDrawings \u5b89\u88c5\u6587\u4ef6\u5939\u4e2d\u627e\u5230\uff1a",(0,a.kt)("em",{parentName:"p"},"%commonprogramfiles%\\eDrawings","[Version]","\\eDrawings.Interop.EModelMarkupControl.dll")),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/emodelapi/eDrawings.Interop.EModelViewControl~eDrawings.Interop.EModelViewControl.IEModelViewControl~CoCreateInstance.html"},"IEModelViewControl::CoCreateInstance")," eDrawings API \u65b9\u6cd5\u6765\u8bbf\u95ee\u6807\u8bb0\u63a5\u53e3\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f20\u9012\u6807\u8bb0\u63a7\u4ef6\u7684\u7279\u5b9a\u7248\u672c\u548c\u7248\u672c\u65e0\u5173\u7684 GUID \u6216 ProgId\u3002"),(0,a.kt)("p",null,"\u7248\u672c\u65e0\u5173\u7684 GUID \u53ef\u5728\u6ce8\u518c\u8868 ",(0,a.kt)("em",{parentName:"p"},"HKEY_CLASSES_ROOT\\EModelViewMarkup.EModelNonVersionSpecificMarkupControl\\CLSID")," \u4e0b\u627e\u5230\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u7248\u672c\u65e0\u5173\u7684 eDrawings \u6807\u8bb0\u63a7\u4ef6 GUID",src:t(79405).Z,width:"1087",height:"274"})),(0,a.kt)("p",null,"\u7279\u5b9a\u7248\u672c\u7684 GUID \u53ef\u5728\u76f8\u5e94\u7248\u672c\u7684\u6807\u8bb0\u63a7\u4ef6\u4e0b\u627e\u5230\uff08\u4f8b\u5982 ",(0,a.kt)("em",{parentName:"p"},"eDrawings 2018")," \u7684 ",(0,a.kt)("em",{parentName:"p"},"EModelViewMarkup.EModelViewMarkupControl.18")," \u6216 ",(0,a.kt)("em",{parentName:"p"},"eDrawings 2019")," \u7684 ",(0,a.kt)("em",{parentName:"p"},"EModelViewMarkup.EModelViewMarkupControl.19"),"\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'// \u4f7f\u7528 ProgId \u521b\u5efa\u7248\u672c\u65e0\u5173\u7684\u6807\u8bb0\u5b9e\u4f8b\nvar eDrawingsMarkupCtrl = eDrawingsCtrl.CoCreateInstance("EModelViewMarkup.EModelMarkupControl") as EModelMarkupControl;\n...\n// \u4f7f\u7528 GUID \u521b\u5efa\u7248\u672c\u65e0\u5173\u7684\u6807\u8bb0\u5b9e\u4f8b\nvar eDrawingsMarkupCtrl = eDrawingsCtrl.CoCreateInstance("{5BBBC05A-BD4D-4e3b-AD5B-51A79DFC522F}") as EModelMarkupControl;\n...\n// \u4f7f\u7528 ProgId \u521b\u5efa\u7279\u5b9a\u7248\u672c\u7684\u6807\u8bb0\u5b9e\u4f8b\uff08eDrawings 2018\uff09\nvar eDrawingsMarkupCtrl = eDrawingsCtrl.CoCreateInstance("EModelViewMarkup.EModelMarkupControl.18") as EModelMarkupControl;\n')))}u.isMDXComponent=!0},79405:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/non-version-specific-markup-guid-edda4968ff167a795114fe811def69f8.png"}}]);