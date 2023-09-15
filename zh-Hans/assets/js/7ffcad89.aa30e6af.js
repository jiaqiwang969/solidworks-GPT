"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[32215],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},w=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),w=o,f=p["".concat(c,".").concat(w)]||p[w]||d[w]||s;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=w;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}w.displayName="MDXCreateElement"},10419:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const s={caption:"\u904d\u5386\u7279\u5f81\u6811\uff08\u53cd\u5411\uff09",title:"\u5728 SOLIDWORKS \u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse/index",title:"\u5728 SOLIDWORKS \u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386",description:"VBA \u5b8f\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386\u6d3b\u52a8 SOLIDWORKS \u6587\u6863\u7684\u7279\u5f81\u7ba1\u7406\u5668\u6811",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse/index.md",tags:[],version:"current",frontMatter:{caption:"\u904d\u5386\u7279\u5f81\u6811\uff08\u53cd\u5411\uff09",title:"\u5728 SOLIDWORKS \u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u904d\u5386\u7279\u5f81\u7ba1\u7406\u5668\u8282\u70b9",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-feature-nodes/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u904d\u5386\u7ec4\u4ef6\u6811",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traversing-tree/"}},c={},l=[{value:"VBA \u5b8f\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386\u6d3b\u52a8 SOLIDWORKS \u6587\u6863\u7684\u7279\u5f81\u7ba1\u7406\u5668\u6811",id:"vba-\u5b8f\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386\u6d3b\u52a8-solidworks-\u6587\u6863\u7684\u7279\u5f81\u7ba1\u7406\u5668\u6811",level:2}],u={toc:l},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vba-\u5b8f\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386\u6d3b\u52a8-solidworks-\u6587\u6863\u7684\u7279\u5f81\u7ba1\u7406\u5668\u6811"},"VBA \u5b8f\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386\u6d3b\u52a8 SOLIDWORKS \u6587\u6863\u7684\u7279\u5f81\u7ba1\u7406\u5668\u6811"),(0,o.kt)("p",null,"\u8fd9\u4e2a VBA \u5b8f\u6f14\u793a\u4e86\u5982\u4f55\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386\u6d3b\u52a8 SOLIDWORKS \u6587\u6863\u7684\u7279\u5f81\u7ba1\u7406\u5668\u6811\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim i As Integer\n    \n    i = 0\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Do\n        \n        Set swFeat = swModel.FeatureByPositionReverse(i)\n        i = i + 1\n        \n        If Not swFeat Is Nothing Then\n            Debug.Print swFeat.Name\n        End If\n        \n    Loop While Not swFeat Is Nothing\n    \nEnd Sub\n")))}d.isMDXComponent=!0}}]);