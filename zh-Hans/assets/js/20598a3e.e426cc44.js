"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[21372],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6563:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const s={caption:"\u904d\u5386\u7279\u5f81\u6811\uff08\u53cd\u5411\uff09",title:"\u5728 SOLIDWORKS \u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-reverse/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-reverse/index",title:"\u5728 SOLIDWORKS \u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386",description:"\u4e00\u4e2a VBA \u5b8f\uff0c\u7528\u4e8e\u5728 SOLIDWORKS \u6587\u6863\u4e2d\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386\u7279\u5f81\u7ba1\u7406\u5668\u6811",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-reverse/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-reverse",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-reverse/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-reverse/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-reverse/index.md",tags:[],version:"current",frontMatter:{caption:"\u904d\u5386\u7279\u5f81\u6811\uff08\u53cd\u5411\uff09",title:"\u5728 SOLIDWORKS \u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386"},sidebar:"tutorialSidebar",previous:{title:"Traverse feature manager nodes using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-feature-nodes/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u94fe\u63a5\u6587\u4ef6\u66f4\u65b0XYZ\u66f2\u7ebf\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/update-curve/"}},c={},u=[{value:"\u4e00\u4e2a VBA \u5b8f\uff0c\u7528\u4e8e\u5728 SOLIDWORKS \u6587\u6863\u4e2d\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386\u7279\u5f81\u7ba1\u7406\u5668\u6811",id:"\u4e00\u4e2a-vba-\u5b8f\u7528\u4e8e\u5728-solidworks-\u6587\u6863\u4e2d\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386\u7279\u5f81\u7ba1\u7406\u5668\u6811",level:2}],l={toc:u},d="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u4e2a-vba-\u5b8f\u7528\u4e8e\u5728-solidworks-\u6587\u6863\u4e2d\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386\u7279\u5f81\u7ba1\u7406\u5668\u6811"},"\u4e00\u4e2a VBA \u5b8f\uff0c\u7528\u4e8e\u5728 SOLIDWORKS \u6587\u6863\u4e2d\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386\u7279\u5f81\u7ba1\u7406\u5668\u6811"),(0,o.kt)("p",null,"\u8fd9\u4e2a VBA \u5b8f\u6f14\u793a\u4e86\u5982\u4f55\u5728\u6d3b\u52a8\u7684 SOLIDWORKS \u6587\u6863\u4e2d\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386\u7279\u5f81\u7ba1\u7406\u5668\u6811\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim i As Integer\n    \n    i = 0\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Do\n        \n        Set swFeat = swModel.FeatureByPositionReverse(i)\n        i = i + 1\n        \n        If Not swFeat Is Nothing Then\n            Debug.Print swFeat.Name\n        End If\n        \n    Loop While Not swFeat Is Nothing\n    \nEnd Sub\n")))}p.isMDXComponent=!0}}]);