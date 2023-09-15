"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[63276],{3905:(e,o,t)=>{t.d(o,{Zo:()=>l,kt:()=>w});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),d=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},l=function(e){var o=d(e.components);return n.createElement(c.Provider,{value:o},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,w=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?n.createElement(w,s(s({ref:o},l),{},{components:t})):n.createElement(w,s({ref:o},l))}));function w(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in o)hasOwnProperty.call(o,c)&&(a[c]=o[c]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var d=2;d<i;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66114:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=t(87462),r=(t(67294),t(3905));const i={title:"\u4f7f\u7528SOLIDWORKS API\u5904\u7406\u5c3a\u5bf8",image:"solidworks-dimensions-api.png"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/index",title:"\u4f7f\u7528SOLIDWORKS API\u5904\u7406\u5c3a\u5bf8",description:"\u901a\u8fc7SOLIDWORKS API\u81ea\u52a8\u5316\u5c3a\u5bf8{ width=300 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u5904\u7406\u5c3a\u5bf8",image:"solidworks-dimensions-api.png"},sidebar:"tutorialSidebar",previous:{title:"Save SOLIDWORKS drawing with detailing mode on and off",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/detailing-mode-save-model-data/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u4e3a\u5f2f\u66f2\u7ebf\u6dfb\u52a0\u5c3a\u5bf8",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/add-bend-lines/"}},c={},d=[],l={toc:d},p="wrapper";function u(e){let{components:o,...i}=e;return(0,r.kt)(p,(0,n.Z)({},l,i,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u901a\u8fc7SOLIDWORKS API\u81ea\u52a8\u5316\u5c3a\u5bf8",src:t(96587).Z,width:"574",height:"370"}),"{ width=300 }"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2022/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~adddimension.html"},"SOLIDWORKS API\u7684IModelDocExtension::AddDimension"),"\u65b9\u6cd5\u5c06\u5c3a\u5bf8\u6dfb\u52a0\u5230\u9009\u5b9a\u7684\u8349\u56fe\u6bb5\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u5c3a\u5bf8\u90fd\u6709\u4e00\u4e2a\u7528\u6237\u53ef\u4ee5\u5206\u914d\u7684\u552f\u4e00\u540d\u79f0\u3002\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2022/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldoc2~parameter.html"},"IModelDoc2::Parameter"),"\u65b9\u6cd5\u6309\u540d\u79f0\u68c0\u7d22\u5c3a\u5bf8\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2022/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDimension.html"},"IDimension")," SOLIDWORKS API\u63a5\u53e3\uff0c\u4e86\u89e3\u5c3a\u5bf8\u81ea\u52a8\u5316\u7684\u53ef\u7528\u65b9\u6cd5\u5217\u8868\u3002"))}u.isMDXComponent=!0},96587:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/solidworks-dimensions-api-1e06a3e02a036c6e87b2315f9fd874db.png"}}]);