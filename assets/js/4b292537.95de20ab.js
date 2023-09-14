"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[74177],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||n;return t?a.createElement(f,s(s({ref:r},u),{},{components:t})):a.createElement(f,s({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46191:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const n={title:"Storing parameters in SOLIDWORKS macro feature",caption:"Parameters",description:"Storing the parameters structure in SOLIDWORKS macro feature using SwEx.MacroFeature framework","toc-group-name":"labs-solidworks-swex",sidebar_position:0},s=void 0,i={unversionedId:"codestack/labs/solidworks/swex/macro-feature/data/parameters/index",id:"codestack/labs/solidworks/swex/macro-feature/data/parameters/index",title:"Storing parameters in SOLIDWORKS macro feature",description:"Storing the parameters structure in SOLIDWORKS macro feature using SwEx.MacroFeature framework",source:"@site/docs/codestack/labs/solidworks/swex/macro-feature/data/parameters/index.md",sourceDirName:"codestack/labs/solidworks/swex/macro-feature/data/parameters",slug:"/codestack/labs/solidworks/swex/macro-feature/data/parameters/",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/macro-feature/data/parameters/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/macro-feature/data/parameters/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Storing parameters in SOLIDWORKS macro feature",caption:"Parameters",description:"Storing the parameters structure in SOLIDWORKS macro feature using SwEx.MacroFeature framework","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Managing of Edit Bodies in SOLIDWORKS macro feature",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/macro-feature/data/edit-bodies/"},next:{title:"Managing selection of SOLIDWORKS macro feature",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/macro-feature/data/selections/"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Parameters are any additional metadata required by the macro feature. Currently only primitive types of parameters are supported (i.e. string, bool, double, int etc.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public class MacroFeatureParams\n{\n    public string Parameter1 { get; set; }\n    public int Parameter2 { get; set; }\n}\n\n//this macro feature has two parameters (Parameter1 and Parameter2)\n[ComVisible(true)]\npublic class MyMacroFeature : MacroFeatureEx<MacroFeatureParams>\n{\n}\n")))}d.isMDXComponent=!0}}]);