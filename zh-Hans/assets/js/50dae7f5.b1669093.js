"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[85658],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var s=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,s,o=function(e,r){if(null==e)return{};var t,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=s.createContext({}),l=function(e){var r=s.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return s.createElement(a.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},u=s.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,f=m["".concat(a,".").concat(u)]||m[u]||c[u]||n;return t?s.createElement(f,i(i({ref:r},d),{},{components:t})):s.createElement(f,i({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=u;var p={};for(var a in r)hasOwnProperty.call(r,a)&&(p[a]=r[a]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<n;l++)i[l]=t[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8687:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var s=t(87462),o=(t(67294),t(3905));const n={title:"\u5728SOLIDWORKS Professional PDM API\u4e2d\u7ba1\u7406\u6743\u9650",caption:"\u6743\u9650"},i=void 0,p={unversionedId:"codestack/solidworks-pdm-api/permissions/index",id:"codestack/solidworks-pdm-api/permissions/index",title:"\u5728SOLIDWORKS Professional PDM API\u4e2d\u7ba1\u7406\u6743\u9650",description:"\u4f7f\u7528SOLIDWORKS PDM API\u5728SOLIDWORKS PDM Professional\u4e2d\u7ba1\u7406\u7528\u6237\u3001\u7ec4\u548c\u6587\u4ef6\u5939\u7684\u6743\u9650",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-pdm-api/permissions/index.md",sourceDirName:"codestack/solidworks-pdm-api/permissions",slug:"/codestack/solidworks-pdm-api/permissions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/permissions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-pdm-api/permissions/index.md",tags:[],version:"current",frontMatter:{title:"\u5728SOLIDWORKS Professional PDM API\u4e2d\u7ba1\u7406\u6743\u9650",caption:"\u6743\u9650"},sidebar:"tutorialSidebar",previous:{title:"permisions",permalink:"/solidworks-GPT/zh-Hans/docs/category/permisions"},next:{title:"\u4f7f\u7528 SOLIDWORKS PDM API \u8bbe\u7f6e\u6587\u4ef6\u5939\u6743\u9650\u7684 Power Shell \u811a\u672c",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/permissions/set-folder-permissions/"}},a={},l=[{value:"sidebar_position: 0",id:"sidebar_position-0",level:2}],d={toc:l},m="wrapper";function c(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,s.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528SOLIDWORKS PDM API\u5728SOLIDWORKS PDM Professional\u4e2d\u7ba1\u7406\u7528\u6237\u3001\u7ec4\u548c\u6587\u4ef6\u5939\u7684\u6743\u9650\nlabels: ","[\u6743\u9650, \u6743\u9650\u7ba1\u7406]"),(0,o.kt)("h2",{id:"sidebar_position-0"},"sidebar_position: 0"),(0,o.kt)("p",null,"SOLIDWORKS PDM API\u63d0\u4f9b\u4e86\u7ba1\u7406\u7528\u6237\u3001\u6587\u4ef6\u5939\u548c\u7ec4\u7684\u5404\u79cd\u6743\u9650\u7684\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmusermgr7~getfolderpermissions.html"},"IEdmUserMgr7::GetFolderPermissions"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmusermgr7~setfolderpermissions.html"},"IEdmUserMgr7::SetFolderPermissions"),"\u65b9\u6cd5\u6765\u7ba1\u7406\u6587\u4ef6\u5939\u6743\u9650\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmUserMgr9~GetStatePermissions.html"},"IEdmUserMgr9::GetStatePermissions"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmUserMgr9~SetStatePermissions.html"},"IEdmUserMgr9::SetStatePermissions"),"\u65b9\u6cd5\u6765\u7ba1\u7406\u72b6\u6001\u6743\u9650\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmUserMgr9~GetTransitionPermissions.html"},"IEdmUserMgr9::GetTransitionPermissions"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmUserMgr9~SetTransitionPermissions.html"},"IEdmUserMgr9::SetTransitionPermissions"),"\u65b9\u6cd5\u6765\u7ba1\u7406\u8f6c\u6362\u6743\u9650\u3002"))}c.isMDXComponent=!0}}]);