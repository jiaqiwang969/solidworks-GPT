"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[63276],{3905:(e,o,n)=>{n.d(o,{Zo:()=>l,kt:()=>w});var t=n(67294);function i(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){i(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function a(e,o){if(null==e)return{};var n,t,i=function(e,o){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),d=function(e){var o=t.useContext(c),n=o;return e&&(n="function"==typeof e?e(o):s(s({},o),e)),n},l=function(e){var o=d(e.components);return t.createElement(c.Provider,{value:o},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,w=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?t.createElement(w,s(s({ref:o},l),{},{components:n})):t.createElement(w,s({ref:o},l))}));function w(e,o){var n=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var a={};for(var c in o)hasOwnProperty.call(o,c)&&(a[c]=o[c]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var d=2;d<r;d++)s[d]=n[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66114:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(87462),i=(n(67294),n(3905));const r={title:"\u4f7f\u7528SOLIDWORKS API\u5904\u7406\u5c3a\u5bf8",caption:"\u5c3a\u5bf8"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/index",title:"\u4f7f\u7528SOLIDWORKS API\u5904\u7406\u5c3a\u5bf8",description:"\u901a\u8fc7SOLIDWORKS API\u81ea\u52a8\u5316\u6a21\u578b\u5c3a\u5bf8\u7684\u6587\u7ae0\u548c\u4ee3\u7801\u793a\u4f8b\u96c6\u5408",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u5904\u7406\u5c3a\u5bf8",caption:"\u5c3a\u5bf8"},sidebar:"tutorialSidebar",previous:{title:"Save SOLIDWORKS drawing with detailing mode on and off",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/detailing-mode-save-model-data/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u4e3a\u5f2f\u66f2\u7ebf\u6dfb\u52a0\u5c3a\u5bf8",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/add-bend-lines/"}},c={},d=[{value:"image: solidworks-dimensions-api.png",id:"image-solidworks-dimensions-apipng",level:2}],l={toc:d},p="wrapper";function u(e){let{components:o,...r}=e;return(0,i.kt)(p,(0,t.Z)({},l,r,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u901a\u8fc7SOLIDWORKS API\u81ea\u52a8\u5316\u6a21\u578b\u5c3a\u5bf8\u7684\u6587\u7ae0\u548c\u4ee3\u7801\u793a\u4f8b\u96c6\u5408\nsidebar_position: 7"),(0,i.kt)("h2",{id:"image-solidworks-dimensions-apipng"},"image: solidworks-dimensions-api.png"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u901a\u8fc7SOLIDWORKS API\u81ea\u52a8\u5316\u5c3a\u5bf8",src:n(96587).Z,width:"574",height:"370"}),"{ width=300 }"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2022/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~adddimension.html"},"SOLIDWORKS API\u7684IModelDocExtension::AddDimension"),"\u65b9\u6cd5\u5c06\u5c3a\u5bf8\u6dfb\u52a0\u5230\u9009\u5b9a\u7684\u8349\u56fe\u6bb5\u3002"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u5c3a\u5bf8\u90fd\u6709\u4e00\u4e2a\u7528\u6237\u53ef\u4ee5\u5206\u914d\u7684\u552f\u4e00\u540d\u79f0\u3002\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2022/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldoc2~parameter.html"},"IModelDoc2::Parameter"),"\u65b9\u6cd5\u6309\u540d\u79f0\u68c0\u7d22\u5c3a\u5bf8\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2022/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDimension.html"},"IDimension")," SOLIDWORKS API\u63a5\u53e3\uff0c\u4e86\u89e3\u5c3a\u5bf8\u81ea\u52a8\u5316\u7684\u53ef\u7528\u65b9\u6cd5\u5217\u8868\u3002"))}u.isMDXComponent=!0},96587:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/solidworks-dimensions-api-1e06a3e02a036c6e87b2315f9fd874db.png"}}]);