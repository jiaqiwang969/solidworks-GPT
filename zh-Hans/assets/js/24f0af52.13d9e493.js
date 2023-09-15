"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[30941],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,u=d["".concat(l,".").concat(m)]||d[m]||k[m]||i;return o?r.createElement(u,s(s({ref:t},c),{},{components:o})):r.createElement(u,s({ref:t},c))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:n,s[1]=a;for(var p=2;p<i;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},20058:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const i={title:"SOLIDWORKS API\u4e2d\u7684\u65b9\u6cd5\u548c\u5c5e\u6027\u547d\u540d",image:"obsolete-api-interface.png",labels:["\u5df2\u8fc7\u65f6","\u7248\u672c","\u7f16\u53f7"]},s=void 0,a={unversionedId:"codestack/solidworks-api/getting-started/api-object-model/naming-convention/index",id:"codestack/solidworks-api/getting-started/api-object-model/naming-convention/index",title:"SOLIDWORKS API\u4e2d\u7684\u65b9\u6cd5\u548c\u5c5e\u6027\u547d\u540d",description:"SOLIDWORKS API\uff08\u4ee5\u53caSOLIDWORKS\u672c\u8eab\uff09\u90fd\u662f\u5411\u540e\u517c\u5bb9\u7684\uff0c\u8fd9\u610f\u5473\u7740\u65e7\u7248\u672c\u7684API\u4e0e\u65b0\u7248\u672c\u7684SOLIDWORKS\u517c\u5bb9\u3002\u8fd9\u610f\u5473\u7740\u5f53\u65b0\u7248\u672c\u53d1\u5e03\u65f6\uff0cAPI\u65b9\u6cd5\u7684\u7b7e\u540d\u548c\u884c\u4e3a\u4e0d\u5e94\u66f4\u6539\u3002\u4e3a\u6b64\uff0cSOLIDWORKS\u5f15\u5165\u4e86\u65b9\u6cd5\u548c\u63a5\u53e3\u540d\u79f0\u7684\u4fee\u8ba2\u7cfb\u7edf\u3002\u6bcf\u5f53\u6709\u65b0\u7248\u672c\u7684API\u53ef\u7528\u65f6\uff0c\u5b83\u5c06\u4f5c\u4e3aMethodName Last Revision + 1\u6dfb\u52a0\u5230\u7c7b\u56fe\u4e2d\u3002\u4f8b\u5982\uff0cISldWorks::OpenDoc5\u65b9\u6cd5\u7684\u8f83\u65b0\u7248\u672c\u3002\u800cIModelDoc2\u662fIModelDoc\u63a5\u53e3\u7684\u8f83\u65b0\uff08\u4e5f\u662f\u5f53\u524d\u7684\uff09\u7248\u672c\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/getting-started/api-object-model/naming-convention/index.md",sourceDirName:"codestack/solidworks-api/getting-started/api-object-model/naming-convention",slug:"/codestack/solidworks-api/getting-started/api-object-model/naming-convention/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/api-object-model/naming-convention/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/api-object-model/naming-convention/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS API\u4e2d\u7684\u65b9\u6cd5\u548c\u5c5e\u6027\u547d\u540d",image:"obsolete-api-interface.png",labels:["\u5df2\u8fc7\u65f6","\u7248\u672c","\u7f16\u53f7"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS API\u65b9\u6cd5\u53ca\u63a5\u53e3\u4e2d\u5e26\u6709\u548c\u4e0d\u5e26\u6709I\u7684\u533a\u522b",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/api-object-model/i-api-versions/"},next:{title:"SOLIDWORKS\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u7684\u8fdb\u7a0b\u95f4\u901a\u4fe1",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/inter-process-communication/"}},l={},p=[{value:"\u5df2\u8fc7\u65f6\u7684\u65b9\u6cd5\u548c\u63a5\u53e3",id:"\u5df2\u8fc7\u65f6\u7684\u65b9\u6cd5\u548c\u63a5\u53e3",level:2}],c={toc:p},d="wrapper";function k(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"SOLIDWORKS API\uff08\u4ee5\u53caSOLIDWORKS\u672c\u8eab\uff09\u90fd\u662f\u5411\u540e\u517c\u5bb9\u7684\uff0c\u8fd9\u610f\u5473\u7740\u65e7\u7248\u672c\u7684API\u4e0e\u65b0\u7248\u672c\u7684SOLIDWORKS\u517c\u5bb9\u3002\u8fd9\u610f\u5473\u7740\u5f53\u65b0\u7248\u672c\u53d1\u5e03\u65f6\uff0cAPI\u65b9\u6cd5\u7684\u7b7e\u540d\u548c\u884c\u4e3a\u4e0d\u5e94\u66f4\u6539\u3002\u4e3a\u6b64\uff0cSOLIDWORKS\u5f15\u5165\u4e86\u65b9\u6cd5\u548c\u63a5\u53e3\u540d\u79f0\u7684\u4fee\u8ba2\u7cfb\u7edf\u3002\u6bcf\u5f53\u6709\u65b0\u7248\u672c\u7684API\u53ef\u7528\u65f6\uff0c\u5b83\u5c06\u4f5c\u4e3a",(0,n.kt)("strong",{parentName:"p"},"MethodName")," ",(0,n.kt)("em",{parentName:"p"},"Last Revision + 1"),"\u6dfb\u52a0\u5230\u7c7b\u56fe\u4e2d\u3002\u4f8b\u5982\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html"},"ISldWorks::OpenDoc6"),"\u662f",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc5.html"},"ISldWorks::OpenDoc5"),"\u65b9\u6cd5\u7684\u8f83\u65b0\u7248\u672c\u3002\u800c",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html"},"IModelDoc2"),"\u662f",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc.html"},"IModelDoc"),"\u63a5\u53e3\u7684\u8f83\u65b0\uff08\u4e5f\u662f\u5f53\u524d\u7684\uff09\u7248\u672c\u3002"),(0,n.kt)("h2",{id:"\u5df2\u8fc7\u65f6\u7684\u65b9\u6cd5\u548c\u63a5\u53e3"},"\u5df2\u8fc7\u65f6\u7684\u65b9\u6cd5\u548c\u63a5\u53e3"),(0,n.kt)("p",null,"\u5c3d\u7ba1SOLIDWORKS\u662f\u5411\u540e\u517c\u5bb9\u7684\uff0c\u5e76\u4e14\u6240\u6709\u7248\u672c\u7684\u65b9\u6cd5\u90fd\u5e94\u8be5\u53ef\u7528\uff0c\u4f46\u5efa\u8bae\u4f7f\u7528\u4e0eSOLIDWORKS\u76ee\u6807\u7a0b\u5e8f\u7684\u6700\u4f4e\u7248\u672c\u517c\u5bb9\u7684\u6700\u65b0\u7248\u672c\u3002"),(0,n.kt)("p",null,"\u8fd9\u6837\u505a\u7684\u4e3b\u8981\u539f\u56e0\u662f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5df2\u8fc7\u65f6\u7684\u65b9\u6cd5\uff08\u6216\u4efb\u4f55\u5907\u6ce8\u548c\u63cf\u8ff0\uff09\u53ef\u80fd\u5728API\u6587\u6863\u4e2d\u4e0d\u53ef\u7528\u3002\u56e0\u6b64\uff0c\u53ef\u80fd\u9700\u8981\u7ef4\u62a4\u5148\u524d\u7248\u672c\u7684API\u5e2e\u52a9\u6587\u6863\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5df2\u8fc7\u65f6\u7684IModelDoc API\u63a5\u53e3",src:o(15017).Z,width:"347",height:"539"}),"{ width=250 }"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5e76\u4e0d\u603b\u662f\u77e5\u9053\u6dfb\u52a0\u66ff\u4ee3\u65b9\u6cd5\u7684\u539f\u56e0\u3002\u8fd9\u53ef\u80fd\u662f\u7531\u4e8e\u65e7\u7248\u672c\u65b9\u6cd5\u4e2d\u5b58\u5728\u7684\u67d0\u4e2a\u9519\u8bef\uff08\u6216\u884c\u4e3a\uff09\u5bfc\u81f4\u7684\uff0c\u5982\u679c\u4f7f\u7528\u8be5\u65b9\u6cd5\uff0c\u5219\u53ef\u80fd\u4f1a\u5f15\u5165\u672a\u77e5\u7684\u526f\u4f5c\u7528\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u51fa\u73b0\u95ee\u9898\uff0c\u53ef\u80fd\u4f1a\u5728\u5bfb\u6c42\u652f\u6301\u65f6\u9047\u5230\u95ee\u9898\uff0c\u56e0\u4e3a\u6700\u660e\u663e\u7684\u5efa\u8bae\u662f\u5c06\u65b9\u6cd5\u5347\u7ea7\u5230\u65b0\u7248\u672c\uff0c\u56e0\u4e3a\u8f83\u65e7\u7684\u65b9\u6cd5\u53ef\u80fd\u88ab\u89c6\u4e3a",(0,n.kt)("em",{parentName:"p"},"\u65e0\u6548\u7684\u4fdd\u4fee"),"\u3002"))))}k.isMDXComponent=!0},15017:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/obsolete-api-interface-bc55357f8ce34a9be0b78b5a30211459.png"}}]);