"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[12178],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>w});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),l=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(a.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,w=p["".concat(a,".").concat(f)]||p[f]||d[f]||s;return t?o.createElement(w,i(i({ref:n},u),{},{components:t})):o.createElement(w,i({ref:n},u))}));function w(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=f;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<s;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},21169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const s={title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u7c73\u8f6c\u6362\u4e3a\u5206\u6570\u82f1\u5bf8",image:"dimension-fractions.png",labels:["\u82f1\u5bf8","\u5206\u6570","\u8f6c\u6362","\u5355\u4f4d"]},i=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-to-fraction-inches/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-to-fraction-inches/index",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u7c73\u8f6c\u6362\u4e3a\u5206\u6570\u82f1\u5bf8",description:"\u6b64VBA\u5b8f\u5c06\u4ee5\u7cfb\u7edf\u5355\u4f4d\uff08\u7c73\uff09\u6307\u5b9a\u7684\u503c\u8f6c\u6362\u4e3a\u6307\u5b9a\u5206\u6bcd\u7684\u5206\u6570\u82f1\u5bf8\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-to-fraction-inches/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-to-fraction-inches",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-to-fraction-inches/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-to-fraction-inches/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-to-fraction-inches/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u7c73\u8f6c\u6362\u4e3a\u5206\u6570\u82f1\u5bf8",image:"dimension-fractions.png",labels:["\u82f1\u5bf8","\u5206\u6570","\u8f6c\u6362","\u5355\u4f4d"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u5f27\u7ebf\u8f6c\u6362\u4e3a\u5706",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-arc-to-circle/"},next:{title:"\u5c06SOLIDWORKS\u5207\u5272\u6e05\u5355\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u590d\u5236\u5230\u6a21\u578b\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-custom-properties/"}},a={},l=[],u={toc:l},p="wrapper";function d(e){let{components:n,...s}=e;return(0,r.kt)(p,(0,o.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6b64VBA\u5b8f\u5c06\u4ee5\u7cfb\u7edf\u5355\u4f4d\uff08\u7c73\uff09\u6307\u5b9a\u7684\u503c\u8f6c\u6362\u4e3a\u6307\u5b9a\u5206\u6bcd\u7684\u5206\u6570\u82f1\u5bf8\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5e26\u6709\u5206\u6bcd16\u7684\u503c0.112713\u5c06\u88ab\u8f6c\u6362\u4e3a4 7/16\u82f1\u5bf8\u3002"),(0,r.kt)("p",null,"\u6839\u636e\u4ee5\u4e0b\u8bbe\u7f6e\u914d\u7f6e\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const DENOMINATOR As Integer = 16 '\u5206\u6bcd\u503c\nConst ROUND_TO_NEAREST_FRACTION As Boolean = True 'True\u8868\u793a\u56db\u820d\u4e94\u5165\u5230\u6700\u8fd1\u7684\u5206\u6570\uff0cFalse\u8868\u793a\u4e0d\u8fdb\u884c\u56db\u820d\u4e94\u5165\n")),(0,r.kt)("p",null,"\u7ed3\u679c\u548c\u53ef\u7528\u9009\u9879\u4e0eSOLIDWORKS\u4e2d\u7684\u5c3a\u5bf8\u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762\u76f8\u540c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5c3a\u5bf8\u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762\u4e2d\u7684\u5355\u4f4d\u8986\u76d6\u9009\u9879",src:t(31066).Z,width:"943",height:"468"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const DENOMINATOR As Integer = 16\nConst ROUND_TO_NEAREST_FRACTION As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Debug.Print ConvertMetersToFractionInches(0.112713, DENOMINATOR, ROUND_TO_NEAREST_FRACTION)\n    \nEnd Sub\n\nFunction ConvertMetersToFractionInches(value As Double, denom As Integer, round As Boolean) As String\n    \n    Dim swUserUnits As SldWorks.UserUnit\n    Set swUserUnits = swApp.GetUserUnit(swUserUnitsType_e.swLengthUnit)\n    \n    swUserUnits.FractionBase = swFractionDisplay_e.swFRACTION\n    swUserUnits.SpecificUnitType = swLengthUnit_e.swINCHES\n    \n    swUserUnits.RoundToFraction = round\n    swUserUnits.FractionValue = denom\n\n    ConvertMetersToFractionInches = swUserUnits.ConvertToUserUnit(value, True, True)\n    \nEnd Function\n")))}d.isMDXComponent=!0},31066:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/dimension-fractions-be02105fa1aa14ff1ce2d8b85f09e21a.png"}}]);