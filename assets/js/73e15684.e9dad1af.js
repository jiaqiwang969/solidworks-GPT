"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||n;return r?o.createElement(m,s(s({ref:t},u),{},{components:r})):o.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<n;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var o=r(87462),a=(r(67294),r(3905));const n={title:"Handling the SOLIDWORKS macro feature state update in SwEx.MacroFeature framework",caption:"State",description:"Updating state of the macro feature on the environment change (selection, rebuild, suppress etc.)","toc-group-name":"labs-solidworks-swex",order:3},s=void 0,c={unversionedId:"codestack/labs/solidworks/swex/macro-feature/lifecycle/state/index",id:"codestack/labs/solidworks/swex/macro-feature/lifecycle/state/index",title:"Handling the SOLIDWORKS macro feature state update in SwEx.MacroFeature framework",description:"Updating state of the macro feature on the environment change (selection, rebuild, suppress etc.)",source:"@site/docs/codestack/labs/solidworks/swex/macro-feature/lifecycle/state/index.md",sourceDirName:"codestack/labs/solidworks/swex/macro-feature/lifecycle/state",slug:"/codestack/labs/solidworks/swex/macro-feature/lifecycle/state/",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/macro-feature/lifecycle/state/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/macro-feature/lifecycle/state/index.md",tags:[],version:"current",frontMatter:{title:"Handling the SOLIDWORKS macro feature state update in SwEx.MacroFeature framework",caption:"State",description:"Updating state of the macro feature on the environment change (selection, rebuild, suppress etc.)","toc-group-name":"labs-solidworks-swex",order:3},sidebar:"tutorialSidebar",previous:{title:"Handling Regeneration method of SOLIDWORKS macro feature",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration/"},next:{title:"SwEx.PMPage - advanced framework for SOLIDWORKS property manager pages",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/pmpage/"}},i={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This handler is called every time state of the feature is changed. It should be used to provide additional security for macro feature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"protected override swMacroFeatureSecurityOptions_e OnUpdateState(ISldWorks app, IModelDoc2 model, IFeature feature)\n{\n    //disallow editing or suppressing of the feature\n    return swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityCannotBeDeleted \n                | swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityCannotBeSuppressed;\n}\n")))}p.isMDXComponent=!0}}]);