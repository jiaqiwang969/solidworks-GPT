"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[89592],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},w=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),w=i,u=p["".concat(l,".").concat(w)]||p[w]||g[w]||r;return t?o.createElement(u,a(a({ref:n},c),{},{components:t})):o.createElement(u,a({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=w;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<r;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}w.displayName="MDXCreateElement"},95980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(87462),i=(t(67294),t(3905));const r={caption:"Toggle Drawing Detailing Mode On Save",title:"Save SOLIDWORKS drawing with detailing mode on and off",description:"VBA Macro to toggle detailing mode on and off while saving"},a=void 0,s={unversionedId:"codestack-clone/solidworks-api/options/document/detailing-mode-save-model-data/index",id:"codestack-clone/solidworks-api/options/document/detailing-mode-save-model-data/index",title:"Save SOLIDWORKS drawing with detailing mode on and off",description:"VBA Macro to toggle detailing mode on and off while saving",source:"@site/docs/codestack-clone/solidworks-api/options/document/detailing-mode-save-model-data/index.md",sourceDirName:"codestack-clone/solidworks-api/options/document/detailing-mode-save-model-data",slug:"/codestack-clone/solidworks-api/options/document/detailing-mode-save-model-data/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/options/document/detailing-mode-save-model-data/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/options/document/detailing-mode-save-model-data/index.md",tags:[],version:"current",frontMatter:{caption:"Toggle Drawing Detailing Mode On Save",title:"Save SOLIDWORKS drawing with detailing mode on and off",description:"VBA Macro to toggle detailing mode on and off while saving"},sidebar:"tutorialSidebar",previous:{title:"Managing user preferences of the document using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/options/document/"},next:{title:"Export all SOLIDWORKS document level options to Excel",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/options/document/extract-all-options/"}},l={},d=[],c={toc:d},p="wrapper";function g(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When working with large drawings it may be beneficial to employ the detailing mode. In order to properly utilize the detailing mode it is required to save the data within the document itself."),(0,i.kt)("p",null,"This process may decrease the saving performance."),(0,i.kt)("p",null,"The toggle option to enable or disable saving of the detailing mode data is driven by document preferences."),(0,i.kt)("p",null,"This macro allows to turn on or off the settings and perform the saving of the document."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Const ENABLE As Boolean = True 'True to save with detailing data, False to save without the detailing data\n")),(0,i.kt)("p",null,"It is possible to create 2 macro buttons (one which saves with detailing data and one which saves without the detailing data)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Const ENABLE As Boolean = True\n\nConst swCommands_Save As Long = 2\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        If swModel.GetType() = swDocumentTypes_e.swDocDRAWING Then\n            Dim saveModelDataOpt As Boolean\n            Dim includeStandardView As Boolean\n            \n            saveModelDataOpt = swModel.Extension.GetUserPreferenceToggle(swUserPreferenceToggle_e.swDetailingModeSaveModelData, swUserPreferenceOption_e.swDetailingNoOptionSpecified)\n            includeStandardView = swModel.Extension.GetUserPreferenceToggle(swUserPreferenceToggle_e.swDetailingModeIncludeStandardViewsInViewPalette, swUserPreferenceOption_e.swDetailingNoOptionSpecified)\n            \n            swModel.Extension.SetUserPreferenceToggle swUserPreferenceToggle_e.swDetailingModeSaveModelData, swUserPreferenceOption_e.swDetailingNoOptionSpecified, ENABLE\n            swModel.Extension.SetUserPreferenceToggle swUserPreferenceToggle_e.swDetailingModeIncludeStandardViewsInViewPalette, swUserPreferenceOption_e.swDetailingNoOptionSpecified, ENABLE\n            \n            swApp.RunCommand swCommands_Save, ""\n            \n            swModel.Extension.SetUserPreferenceToggle swUserPreferenceToggle_e.swDetailingModeSaveModelData, swUserPreferenceOption_e.swDetailingNoOptionSpecified, saveModelDataOpt\n            swModel.Extension.SetUserPreferenceToggle swUserPreferenceToggle_e.swDetailingModeIncludeStandardViewsInViewPalette, swUserPreferenceOption_e.swDetailingNoOptionSpecified, includeStandardView\n        Else\n            Err.Raise vbError, "", "Only drawing documents are supported"\n        End If\n    Else\n        Err.Raise vbError, "", "Open drawing document"\n    End If\n    \nEnd Sub\n')))}g.isMDXComponent=!0}}]);