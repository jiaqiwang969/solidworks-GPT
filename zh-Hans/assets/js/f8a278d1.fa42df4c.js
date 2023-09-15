"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[12736],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return r?o.createElement(k,a(a({ref:t},p),{},{components:r})):o.createElement(k,a({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const s={title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u52a8\u5316\u94a3\u91d1\u96f6\u4ef6",caption:"\u94a3\u91d1"},a=void 0,i={unversionedId:"codestack/solidworks-api/document/sheet-metal/index",id:"codestack/solidworks-api/document/sheet-metal/index",title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u52a8\u5316\u94a3\u91d1\u96f6\u4ef6",description:"\u4f7f\u7528SOLIDWORKS API\u6765\u64cd\u4f5c\u94a3\u91d1\u7279\u5f81",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/sheet-metal/index.md",sourceDirName:"codestack/solidworks-api/document/sheet-metal",slug:"/codestack/solidworks-api/document/sheet-metal/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/sheet-metal/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/sheet-metal/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u52a8\u5316\u94a3\u91d1\u96f6\u4ef6",caption:"\u94a3\u91d1"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u52a8\u4e3aSOLIDWORKS\u6587\u4ef6\u5206\u914d\u65b0\u6587\u4ef6\u540d",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/set-new-file-name/"},next:{title:"\u4eceSOLIDWORKS\u96f6\u4ef6\u6216\u88c5\u914d\u4ef6\u7ec4\u4ef6\u5bfc\u51fa\u5c55\u5f00\u56fe\u6848",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/sheet-metal/export-all-flat-patterns/"}},l={},c=[{value:"labels: \u94a3\u91d1, \u5f2f\u66f2, \u6298\u53e0",id:"labels-\u94a3\u91d1-\u5f2f\u66f2-\u6298\u53e0",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\u6765\u64cd\u4f5c\u94a3\u91d1\u7279\u5f81\nsidebar_position: 10"),(0,n.kt)("h2",{id:"labels-\u94a3\u91d1-\u5f2f\u66f2-\u6298\u53e0"},"labels: ","[\u94a3\u91d1, \u5f2f\u66f2, \u6298\u53e0]"),(0,n.kt)("p",null,"SOLIDWORKS API\u63d0\u4f9b\u4e86\u8bb8\u591a\u65b9\u6cd5\u548c\u63a5\u53e3\uff0c\u7528\u4e8e\u64cd\u4f5c\u96f6\u4ef6\u6587\u6863\u4e2d\u7684\u94a3\u91d1\u7279\u5f81\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData.html"},"IBaseFlangeFeatureData"),"\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibendsfeaturedata_members.html"},"IBendsFeatureData"),"\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isketchedbendfeaturedata.html"},"ISketchedBendFeatureData"),"\u7b49\u7b49\u3002"),(0,n.kt)("p",null,"\u901a\u8fc7\u8c03\u7528\u76f8\u5e94\u7684\u94a3\u91d1\u7279\u5f81\u4e0a\u7684",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeature~GetDefinition.html"},"IFeature::GetDefinition")," SOLIDWORKS API\uff0c\u53ef\u4ee5\u68c0\u7d22\u6240\u6709\u7279\u5b9a\u7684\u7279\u5f81\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u6d4f\u89c8\u672c\u8282\u4ee5\u67e5\u627e\u6709\u5173\u5728SOLIDWORKS\u4e2d\u81ea\u52a8\u5316\u548c\u589e\u5f3a\u94a3\u91d1\u529f\u80fd\u7684\u6709\u7528\u5b8f\u548c\u4ee3\u7801\u793a\u4f8b\u3002"))}u.isMDXComponent=!0}}]);