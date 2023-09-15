"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[78282],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,s=function(e,t){if(null==e)return{};var o,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var n=r.createContext({}),d=function(e){var t=r.useContext(n),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(n.Provider,{value:t},e.children)},k="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,s=e.mdxType,a=e.originalType,n=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=d(o),h=s,m=k["".concat(n,".").concat(h)]||k[h]||w[h]||a;return o?r.createElement(m,l(l({ref:t},p),{},{components:o})):r.createElement(m,l({ref:t},p))}));function m(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=o.length,l=new Array(a);l[0]=h;var i={};for(var n in t)hasOwnProperty.call(t,n)&&(i[n]=t[n]);i.originalType=e,i[k]="string"==typeof e?e:s,l[1]=i;for(var d=2;d<a;d++)l[d]=o[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},77566:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>n,contentTitle:()=>l,default:()=>w,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=o(87462),s=(o(67294),o(3905));const a={title:"\u4f7f\u7528 SOLIDWORKS API \u5728\u7b2c\u4e09\u65b9\u5b58\u50a8\u4e2d\u4fdd\u5b58\u6570\u636e",image:"store-diagram.svg",labels:["\u5b58\u50a8","\u7b2c\u4e09\u65b9","\u5b58\u50a8","\u5e8f\u5217\u5316"]},l=void 0,i={unversionedId:"codestack/solidworks-api/data-storage/third-party/index",id:"codestack/solidworks-api/data-storage/third-party/index",title:"\u4f7f\u7528 SOLIDWORKS API \u5728\u7b2c\u4e09\u65b9\u5b58\u50a8\u4e2d\u4fdd\u5b58\u6570\u636e",description:"\u7b2c\u4e09\u65b9\u5b58\u50a8\u548c\u7b2c\u4e09\u65b9\u5b58\u50a8\u662f\u5916\u90e8\u5e94\u7528\u7a0b\u5e8f\uff08\u63d2\u4ef6\u3001\u5b8f\u3001\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\uff09\u7528\u4e8e\u5728\u6a21\u578b\u6d41\u4e2d\u76f4\u63a5\u5b58\u50a8\u5e8f\u5217\u5316\u6570\u636e\u7684\u5bb9\u5668\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/data-storage/third-party/index.md",sourceDirName:"codestack/solidworks-api/data-storage/third-party",slug:"/codestack/solidworks-api/data-storage/third-party/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/third-party/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/data-storage/third-party/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 SOLIDWORKS API \u5728\u7b2c\u4e09\u65b9\u5b58\u50a8\u4e2d\u4fdd\u5b58\u6570\u636e",image:"store-diagram.svg",labels:["\u5b58\u50a8","\u7b2c\u4e09\u65b9","\u5b58\u50a8","\u5e8f\u5217\u5316"]},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/custom-properties/write-summary-information/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u81ea\u5b9a\u4e49\u5c5e\u6027\u4fee\u8ba2\u4fdd\u5b58\u5230\u7b2c\u4e09\u65b9\u5b58\u50a8\u5e93",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/third-party/custom-properties-revisions/"}},n={},d=[{value:"\u7b2c\u4e09\u65b9\u5b58\u50a8",id:"\u7b2c\u4e09\u65b9\u5b58\u50a8",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:3},{value:"\u7b2c\u4e09\u65b9\u5b58\u50a8\u5b58\u50a8",id:"\u7b2c\u4e09\u65b9\u5b58\u50a8\u5b58\u50a8",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879-1",level:3},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f-1",level:3},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u5b58\u50a8\u548c\u6d41\u547d\u540d\u51b2\u7a81",id:"\u5b58\u50a8\u548c\u6d41\u547d\u540d\u51b2\u7a81",level:2}],p={toc:d},k="wrapper";function w(e){let{components:t,...a}=e;return(0,s.kt)(k,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u7b2c\u4e09\u65b9\u5b58\u50a8\u548c\u7b2c\u4e09\u65b9\u5b58\u50a8\u662f\u5916\u90e8\u5e94\u7528\u7a0b\u5e8f\uff08\u63d2\u4ef6\u3001\u5b8f\u3001\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\uff09\u7528\u4e8e\u5728\u6a21\u578b\u6d41\u4e2d\u76f4\u63a5\u5b58\u50a8\u5e8f\u5217\u5316\u6570\u636e\u7684\u5bb9\u5668\u3002"),(0,s.kt)("p",null,"\u8fd9\u79cd\u6280\u672f\u5141\u8bb8\u5b58\u50a8\u590d\u6742\u7684\u6570\u636e\uff0c\u5e76\u63d0\u4f9b\u8bfb\u5199\u5927\u91cf\u6570\u636e\u7684\u6700\u4f73\u6027\u80fd\u9009\u9879\u3002"),(0,s.kt)("p",null,"SOLIDWORKS \u53ef\u4ee5\u5c06\u6570\u636e\u5b58\u50a8\u5728\u4e24\u4e2a\u4e0d\u540c\u7684\u5bb9\u5668\u4e2d\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5b58\u50a8\uff08\u6d41\uff09"),(0,s.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5b58\u50a8")),(0,s.kt)("p",null,"\u5982\u679c\u5c06\u6587\u4ef6\u7cfb\u7edf\u4f5c\u4e3a\u7c7b\u6bd4\uff0c\u5b58\u50a8\u5c06\u5bf9\u5e94\u6587\u4ef6\uff0c\u800c\u5b58\u50a8\u5b58\u50a8\u5c06\u5bf9\u5e94\u6587\u4ef6\u5939\u3002\u5b58\u50a8\u5b58\u50a8\u53ef\u4ee5\u6709\u5b50\u6d41\u6216\u5b50\u5b58\u50a8\u3002"),(0,s.kt)("p",null,"\u4e0b\u56fe\u89e3\u91ca\u4e86 SOLIDWORKS \u6a21\u578b\u5b58\u50a8\u7684\u7ed3\u6784\u3002\u7ea2\u8272\u5143\u7d20\u8868\u793a\u7531 SOLIDWORKS \u76f4\u63a5\u7ba1\u7406\u7684\u5bb9\u5668\uff0c\u800c\u5176\u4ed6\u5143\u7d20\u8868\u793a\u7531\u7b2c\u4e09\u65b9\u7ba1\u7406\u7684\u5bb9\u5668\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u6587\u6863\u5b58\u50a8\u56fe",src:o(19745).Z,width:"501",height:"447"}),"{ width=550 }"),(0,s.kt)("h2",{id:"\u7b2c\u4e09\u65b9\u5b58\u50a8"},"\u7b2c\u4e09\u65b9\u5b58\u50a8"),(0,s.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u901a\u8fc7 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nn-objidl-istream"},"IStream")," \u63a5\u53e3\u7ba1\u7406\u7684\u5bb9\u5668\u3002\u5f53\u5e94\u7528\u7a0b\u5e8f\u53ea\u9700\u8981\u5b58\u50a8\u5355\u4e2a\u6570\u636e\u7ed3\u6784\uff08\u4f8b\u5982 XML \u6811\u3001\u6587\u672c\u3001\u56fe\u50cf\u3001\u4e8c\u8fdb\u5236\u6570\u636e\uff09\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u6b64\u9009\u9879\u3002"),(0,s.kt)("p",null,"\u4e3a\u4e86\u83b7\u53d6\u6d41\u7684\u6307\u9488\uff08\u7528\u4e8e\u8bfb\u53d6\u6216\u5199\u5165\uff09\uff0c\u9700\u8981\u8c03\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~IGet3rdPartyStorage.html"},"IModelDoc2::IGet3rdPartyStorage")," SOLIDWORKS API \u65b9\u6cd5\u5e76\u4f20\u9012\u76f8\u5e94\u7684\u6807\u5fd7\u3002"),(0,s.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u6d41\u4ee5\u524d\u4ece\u672a\u88ab\u5199\u5165\u8fc7\uff0c\u5219 ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~IGet3rdPartyStorage.html"},"IModelDoc2::IGet3rdPartyStorage")," \u65b9\u6cd5\u8fd4\u56de null\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5728\u8c03\u7528\u83b7\u53d6\u65b9\u6cd5\u540e\uff0c\u65e0\u8bba\u83b7\u53d6\u65b9\u6cd5\u662f\u5426\u8fd4\u56de null\uff08\u5373\u6d41\u4ee5\u524d\u672a\u5b58\u50a8\uff09\uff0c\u90fd\u5e94\u59cb\u7ec8\u91ca\u653e\u6d41\uff0c\u65b9\u6cd5\u662f\u901a\u8fc7 ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~IRelease3rdPartyStorage.html"},"IModelDoc2::IRelease3rdPartyStorage"),"\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6570\u636e\u65f6\u4e0d\u5e94\u8c03\u7528 ",(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nf-objidl-istream-commit"},"IStream::Commit")," \u65b9\u6cd5\uff0c\u5426\u5219\u5c06\u5f15\u53d1\u201c\u65b9\u6cd5\u672a\u5b9e\u73b0\u201d\u5f02\u5e38\u3002")),(0,s.kt)("h3",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,s.kt)("p",null,"\u5b58\u50a8\u5728 ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_loadfromstoragenotifyeventhandler.html"},"LoadFromStorage")," \u901a\u77e5\u548c\u6a21\u578b\u9500\u6bc1\u4e4b\u95f4\u53ef\u4f9b\u8bfb\u53d6\u3002LoadFromStorageStore \u53ef\u7528\u4e8e ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_loadfromstoragenotifyeventhandler.html"},"part"),"\u3001",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dassemblydocevents_loadfromstoragenotifyeventhandler.html"},"assembly")," \u548c ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ddrawingdocevents_loadfromstoragenotifyeventhandler.html"},"drawing"),"\u3002"),(0,s.kt)("p",null,"\u5b58\u50a8\u4ec5\u5728 ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_savetostoragenotifyeventhandler.html"},"SaveToStorage")," \u901a\u77e5\u4e2d\u53ef\u4f9b\u5199\u5165\u3002SaveToStorageStore \u53ef\u7528\u4e8e ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_savetostoragenotifyeventhandler.html"},"part"),"\u3001",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dassemblydocevents_savetostoragenotifyeventhandler.html"},"assembly")," \u548c ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ddrawingdocevents_savetostoragenotifyeventhandler.html"},"drawing"),"\u3002"),(0,s.kt)("h2",{id:"\u7b2c\u4e09\u65b9\u5b58\u50a8\u5b58\u50a8"},"\u7b2c\u4e09\u65b9\u5b58\u50a8\u5b58\u50a8"),(0,s.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u901a\u8fc7 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nn-objidl-istorage"},"IStorage")," \u63a5\u53e3\u7ba1\u7406\u7684\u5bb9\u5668\u3002\u5f53\u5e94\u7528\u7a0b\u5e8f\u7ba1\u7406\u590d\u6742\u7684\u6570\u636e\u96c6\u5e76\u9700\u8981\u5728\u7279\u5b9a\u65f6\u95f4\u8bbf\u95ee\u67d0\u4e9b\u90e8\u5206\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u6b64\u9009\u9879\u3002\u5b58\u50a8\u5bb9\u5668\u5141\u8bb8\u521b\u5efa\u5b50\u6d41\u548c\u5b50\u5b58\u50a8\u4ee5\u7ba1\u7406\u6570\u636e\uff0c\u5e76\u4e14\u53ea\u6709\u5728\u9700\u8981\u65f6\u624d\u80fd\u8bbf\u95ee\u7279\u5b9a\u7684\u6d41\uff0c\u907f\u514d\u4e86\u5c06\u6574\u4e2a\u7ed3\u6784\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\u7684\u9700\u8981\u3002"),(0,s.kt)("p",null,"\u8981\u83b7\u53d6\u5b58\u50a8\u7684\u6307\u9488\uff0c\u9700\u8981\u8c03\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDocExtension~IGet3rdPartyStorageStore.html"},"IModelDocExtension::IGet3rdPartyStorageStore")," SOLIDWORKS API \u65b9\u6cd5\u3002"),(0,s.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879-1"},"\u6ce8\u610f\u4e8b\u9879"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDocExtension~IGet3rdPartyStorageStore.html"},"IModelDocExtension::IGet3rdPartyStorageStore")," \u5bf9\u4e8e\u4ee5\u524d\u4ece\u672a\u5199\u5165\u8fc7\u7684\u5b58\u50a8\u8fd4\u56de null\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u4e0e\u6d41\u7c7b\u4f3c\uff0c\u5b58\u50a8\u59cb\u7ec8\u9700\u8981\u901a\u8fc7 ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDocExtension~IRelease3rdPartyStorageStore.html"},"IModelDocExtension::IRelease3rdPartyStorageStore")," \u65b9\u6cd5\u91ca\u653e\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nn-objidl-istorage"},"IStorage")," \u63a5\u53e3\u7684\u65b9\u6cd5\u521b\u5efa\u5b50\u6d41\u548c\u5b58\u50a8\u3002")),(0,s.kt)("h3",{id:"\u751f\u547d\u5468\u671f-1"},"\u751f\u547d\u5468\u671f"),(0,s.kt)("p",null,"\u5b58\u50a8\u5728 ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_loadfromstoragestorenotifyeventhandler.html"},"LoadFromStorageStore")," \u901a\u77e5\u548c\u6a21\u578b\u9500\u6bc1\u4e4b\u95f4\u53ef\u4f9b\u8bfb\u53d6\u3002LoadFromStorageStore \u53ef\u7528\u4e8e ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_loadfromstoragestorenotifyeventhandler.html"},"part"),"\u3001",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dassemblydocevents_loadfromstoragestorenotifyeventhandler.html"},"assembly")," \u548c ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ddrawingdocevents_loadfromstoragestorenotifyeventhandler.html"},"drawing"),"\u3002"),(0,s.kt)("p",null,"\u5b58\u50a8\u4ec5\u5728 ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_savetostoragestorenotifyeventhandler.html"},"SaveToStorageStore")," \u901a\u77e5\u4e2d\u53ef\u4f9b\u5199\u5165\u3002SaveToStorageStore \u53ef\u7528\u4e8e ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_savetostoragestorenotifyeventhandler.html"},"part"),"\u3001",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dassemblydocevents_savetostoragestorenotifyeventhandler.html"},"assembly")," \u548c ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ddrawingdocevents_savetostoragestorenotifyeventhandler.html"},"drawing"),"\u3002"),(0,s.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,s.kt)("p",null,"\u901a\u5e38\uff0c\u5728\u6dfb\u52a0\u529f\u80fd\uff08\u4f8b\u5982\u7535\u6c14\u6570\u636e\u3001PDM\u3001\u5b89\u5168\u6027\u7b49\uff09\u8865\u5145\u6a21\u578b\u7684\u63d2\u4ef6\u4e2d\u4f7f\u7528\u7b2c\u4e09\u65b9\u5bb9\u5668\uff08\u5b58\u50a8\u548c\u5b58\u50a8\uff09\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6b64\u9644\u52a0\u4fe1\u606f\u901a\u5e38\u663e\u793a\u5728\u7279\u5f81\u6811\u3001\u4efb\u52a1\u7a97\u683c\u7b49\u4e2d\uff0c\u5e76\u5728\u6253\u5f00\u6a21\u578b\u65f6\u52a0\u8f7d\uff0c\u5e76\u4e0e\u6a21\u578b\u4e00\u8d77\u4fdd\u5b58\uff0c\u4f7f\u6b64\u65b9\u6cd5\u6210\u4e3a\u5b8c\u5168\u96c6\u6210\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"SOLIDWORKS API")," \u901a\u77e5 ",(0,s.kt)("em",{parentName:"p"},"SaveToStorage")," \u548c ",(0,s.kt)("em",{parentName:"p"},"SaveToStorageStore")," \u76f4\u63a5\u5728\u6587\u4ef6\u4fdd\u5b58\u901a\u77e5\u4e4b\u540e\u89e6\u53d1\uff0c\u8fd9\u610f\u5473\u7740\u65e0\u9700\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6570\u636e\u4fdd\u5b58\uff0c\u56e0\u4e3a\u5b83\u5c06\u901a\u8fc7\u7528\u6237\u4fdd\u5b58\u81ea\u52a8\u89e6\u53d1\u3002"),(0,s.kt)("p",null,"\u6700\u4f73\u7684\u9644\u52a0\u4fdd\u5b58\u548c\u52a0\u8f7d\u4e8b\u4ef6\u7684\u4f4d\u7f6e\u5e94\u8be5\u5728 ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dsldworksevents_documentloadnotify2eventhandler.html"},"DocumentLoadNotify")," \u4e8b\u4ef6\u4e2d\u3002"),(0,s.kt)("p",null,"\u5f53\u7b2c\u4e09\u65b9\u6570\u636e\u88ab\u4fee\u6539\u65f6\uff08\u4f8b\u5982\u7528\u6237\u5728\u7b2c\u4e09\u65b9\u6811\u4e2d\u6dfb\u52a0\u4e86\u65b0\u8282\u70b9\uff09\uff0c\u5efa\u8bae\u901a\u8fc7 ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~SetSaveFlag.html"},"IModelDoc2::SetSaveFlag")," \u5c06\u6a21\u578b\u6807\u8bb0\u4e3a\u810f\uff0c\u8fd9\u8868\u793a\u6a21\u578b\u9700\u8981\u7531\u7528\u6237\u4fdd\u5b58\u3002"),(0,s.kt)("h2",{id:"\u5b58\u50a8\u548c\u6d41\u547d\u540d\u51b2\u7a81"},"\u5b58\u50a8\u548c\u6d41\u547d\u540d\u51b2\u7a81"),(0,s.kt)("p",null,"\u5b58\u50a8\u548c\u5b58\u50a8\u901a\u8fc7\u76f8\u5e94\u7684\u540d\u79f0\u8bbf\u95ee\u3002\u4e0d\u540c\u7684\u5f00\u53d1\u4eba\u5458\u53ef\u80fd\u4f1a\u5bf9\u5b58\u50a8\u6216\u5b58\u50a8\u4f7f\u7528\u76f8\u540c\u7684\u540d\u79f0\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4f1a\u53d1\u751f\u51b2\u7a81\u3002\u5f53\u4f7f\u7528\u7b2c\u4e09\u65b9\u5bb9\u5668\u65f6\uff0c\u5efa\u8bae\u901a\u8fc7 SOLIDWORKS API Support \u6ce8\u518c\u5b58\u50a8\u6216\u5b58\u50a8\u540d\u79f0\uff0c\u5e76\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6b64\u540d\u79f0\u5c06\u88ab\u4fdd\u7559\u3002"),(0,s.kt)("p",null,"\u6709\u5173\u5982\u4f55\u4f7f\u7528 SwEx.AddIn \u6846\u67b6\u8bbf\u95ee\u7b2c\u4e09\u65b9\u5bb9\u5668\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/swex/add-in/third-party-data-storage/"},"\u5728 SOLIDWORKS \u6a21\u578b\u4e2d\u4f7f\u7528 SwEx.AddIn \u6846\u67b6\u5b58\u50a8\u7b2c\u4e09\u65b9\u6570\u636e")," \u6587\u7ae0\u3002"))}w.isMDXComponent=!0},19745:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/store-diagram-cc9dc9f7759f706023af00821676e43a.svg"}}]);