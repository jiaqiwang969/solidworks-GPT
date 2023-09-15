"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[82372],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>U});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=s.createContext({}),l=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return s.createElement(c.Provider,{value:n},e.children)},u="mdxType",w={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,U=u["".concat(c,".").concat(d)]||u[d]||w[d]||o;return t?s.createElement(U,i(i({ref:n},p),{},{components:t})):s.createElement(U,i({ref:n},p))}));function U(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<o;l++)i[l]=t[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>w,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(87462),r=(t(67294),t(3905));const o={image:"document-units.png"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-units/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-units/index",title:"index",description:"\u6587\u6863\u5355\u4f4d{ width=600 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-units/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-units",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-units/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-units/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-units/index.md",tags:[],version:"current",frontMatter:{image:"document-units.png"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u8bbe\u7f6e\u591a\u4e2a\u88c5\u914d\u7ec4\u4ef6\u7684\u6c42\u89e3\uff08\u521a\u6027\u6216\u67d4\u6027\uff09",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-solving/"},next:{title:"\u8bbe\u7f6e\u89c6\u56fe\u5c3a\u5bf8\u7c7b\u578b",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-view-dimension-type/"}},c={},l=[],p={toc:l},u="wrapper";function w(e){let{components:n,...o}=e;return(0,r.kt)(u,(0,s.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u6587\u6863\u5355\u4f4d",src:t(45269).Z,width:"983",height:"849"}),"{ width=600 }"),(0,r.kt)("p",null,"\u6b64\u5b8f\u5141\u8bb8\u66f4\u6539\u6d3b\u52a8\u7684SOLIDWORKS\u6587\u6863\uff08\u96f6\u4ef6\u6216\u88c5\u914d\uff09\u7684\u5355\u4f4d\u3002"),(0,r.kt)("p",null,"\u914d\u7f6e\u5b8f\u7684\u5e38\u91cf\u4ee5\u6307\u5b9a\u76ee\u6807\u5355\u4f4d\u7cfb\u7edf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const UNIT_SYSTEM As Integer = swUnitSystem_e.swUnitSystem_Custom '\u6839\u636e\u4e0b\u9762\u7684\u5e38\u91cf\u5355\u72ec\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u5355\u4f4d\n\nConst CUSTOM_LENGTH_UNIT As Integer = swLengthUnit_e.swMETER\nConst CUSTOM_ANGLE_UNIT As Integer = swAngleUnit_e.swDEGREES\nConst CUSTOM_MASS_UNIT As Integer = swUnitsMassPropMass_e.swUnitsMassPropMass_Pounds\nConst CUSTOM_VOLUME_UNIT As Integer = swUnitsMassPropVolume_e.swUnitsMassPropVolume_Feet3\nConst CUSTOM_TIME_UNIT As Integer = swUnitsTimeUnit_e.swUnitsTimeUnit_Second\n")),(0,r.kt)("p",null,"\u5982\u679c",(0,r.kt)("strong",{parentName:"p"},"UNIT_SYSTEM"),"\u5e38\u91cf\u8bbe\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"p"},"swUnitSystem_e.swUnitSystem_Custom"),"\uff0c\u5219\u9700\u8981\u901a\u8fc7\u66f4\u6539",(0,r.kt)("strong",{parentName:"p"},"CUSTOM_???"),"\u5e38\u91cf\u4e3a\u6bcf\u4e2a\u81ea\u5b9a\u4e49\u7c7b\u578b\u63d0\u4f9b\u5355\u72ec\u7684\u5355\u4f4d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const UNIT_SYSTEM As Integer = swUnitSystem_e.swUnitSystem_IPS\n\nConst CUSTOM_LENGTH_UNIT As Integer = swLengthUnit_e.swINCHES\nConst CUSTOM_ANGLE_UNIT As Integer = swAngleUnit_e.swRADIANS\nConst CUSTOM_MASS_UNIT As Integer = swUnitsMassPropMass_e.swUnitsMassPropMass_Kilograms\nConst CUSTOM_VOLUME_UNIT As Integer = swUnitsMassPropVolume_e.swUnitsMassPropVolume_Meters3\nConst CUSTOM_TIME_UNIT As Integer = swUnitsTimeUnit_e.swUnitsTimeUnit_Minute\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n        \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n\n    If Not swModel Is Nothing Then\n                \n        swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitSystem, swUserPreferenceOption_e.swDetailingNoOptionSpecified, UNIT_SYSTEM\n                \n        If UNIT_SYSTEM = swUnitSystem_e.swUnitSystem_Custom Then\n        \n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsLinear, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_LENGTH_UNIT\n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsDualLinear, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_LENGTH_UNIT\n            \n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsAngular, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_ANGLE_UNIT\n            \n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsMassPropLength, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_LENGTH_UNIT\n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsMassPropMass, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_MASS_UNIT\n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsMassPropVolume, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_VOLUME_UNIT\n            \n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsTimeUnits, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_TIME_UNIT\n            \n        End If\n                \n    Else\n        Err.Raise vbError, "", "\u672a\u6253\u5f00\u6a21\u578b"\n    End If\n        \nEnd Sub\n')))}w.isMDXComponent=!0},45269:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/document-units-088c18144df13d2c1c5a7172737ac217.png"}}]);