"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[38701],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(o),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||c;return o?r.createElement(g,i(i({ref:t},p),{},{components:o})):r.createElement(g,i({ref:t},p))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=o.length,i=new Array(c);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:n,i[1]=a;for(var l=2;l<c;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},14583:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const c={caption:"Upgrade Legacy",title:"Upgrade legacy custom properties to a new architecture",description:"VBA macro which upgrade legacy SOLIDWORKS custom properties to a new architecture in SOLIDWORKS 2022"},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-legacy/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-legacy/index",title:"Upgrade legacy custom properties to a new architecture",description:"VBA macro which upgrade legacy SOLIDWORKS custom properties to a new architecture in SOLIDWORKS 2022",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-legacy/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-legacy",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-legacy/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-legacy/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-legacy/index.md",tags:[],version:"current",frontMatter:{caption:"Upgrade Legacy",title:"Upgrade legacy custom properties to a new architecture",description:"VBA macro which upgrade legacy SOLIDWORKS custom properties to a new architecture in SOLIDWORKS 2022"},sidebar:"tutorialSidebar",previous:{title:"Macro to update XYZ curve from the linked file using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-curve/"},next:{title:"Upgrade cosmetic threads in active SOLIDWORKS part or assembly using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/upgrade-cosmetic-threads/"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This macro upgrades the legacy custom properties to a ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2022/english/solidworks/sldworks/c_custom_properties_architecture.htm"},"new architecture")," in SOLIDWORKS 2022."),(0,n.kt)("p",null,"To configure the macro, modify the constant parameters in the macro."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"Const UPDATE_ALL_COMPS As Boolean = True\nConst REBUILD_ALL_CONFIGS As Boolean = True\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"UPDATE_ALL_COMPS")," sets to rebuild all components of the assembly or top level only\n",(0,n.kt)("strong",{parentName:"p"},"REBUILD_ALL_CONFIGS")," specifies if it is required to rebuild all configurations"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"Const UPDATE_ALL_COMPS As Boolean = True\nConst REBUILD_ALL_CONFIGS As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    swModel.Extension.UpgradeLegacyCustomProperties UPDATE_ALL_COMPS\n    \n    If REBUILD_ALL_CONFIGS Then\n        swModel.Extension.ForceRebuildAll\n    End If\n    \nEnd Sub\n")))}d.isMDXComponent=!0}}]);