"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[32114],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),p=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(a,".").concat(m)]||u[m]||d[m]||s;return r?o.createElement(g,i(i({ref:t},l),{},{components:r})):o.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var p=2;p<s;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const s={caption:"Upgrade Legacy",title:"Upgrade legacy custom properties to a new architecture",description:"VBA macro which upgrade legacy SOLIDWORKS custom properties to a new architecture in SOLIDWORKS 2022"},i=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/update-legacy/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/update-legacy/index",title:"Upgrade legacy custom properties to a new architecture",description:"VBA macro which upgrade legacy SOLIDWORKS custom properties to a new architecture in SOLIDWORKS 2022",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/update-legacy/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/update-legacy",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/update-legacy/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/update-legacy/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/update-legacy/index.md",tags:[],version:"current",frontMatter:{caption:"Upgrade Legacy",title:"Upgrade legacy custom properties to a new architecture",description:"VBA macro which upgrade legacy SOLIDWORKS custom properties to a new architecture in SOLIDWORKS 2022"},sidebar:"tutorialSidebar",previous:{title:"Sort file and configuration specific custom properties using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/sort/"},next:{title:"Write custom property to file, configuration and cut-list using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/write-all-properties/"}},a={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This macro upgrades the legacy custom properties to a ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2022/english/solidworks/sldworks/c_custom_properties_architecture.htm"},"new architecture")," in SOLIDWORKS 2022."),(0,n.kt)("p",null,"To configure the macro, modify the constant parameters in the macro."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"Const UPDATE_ALL_COMPS As Boolean = True\nConst REBUILD_ALL_CONFIGS As Boolean = True\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"UPDATE_ALL_COMPS")," sets to rebuild all components of the assembly or top level only\n",(0,n.kt)("strong",{parentName:"p"},"REBUILD_ALL_CONFIGS")," specifies if it is required to rebuild all configurations"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"Const UPDATE_ALL_COMPS As Boolean = True\nConst REBUILD_ALL_CONFIGS As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    swModel.Extension.UpgradeLegacyCustomProperties UPDATE_ALL_COMPS\n    \n    If REBUILD_ALL_CONFIGS Then\n        swModel.Extension.ForceRebuildAll\n    End If\n    \nEnd Sub\n")))}d.isMDXComponent=!0}}]);