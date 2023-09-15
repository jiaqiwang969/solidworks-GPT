"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[48434],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return o?n.createElement(h,r(r({ref:t},d),{},{components:o})):n.createElement(h,r({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},15026:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=o(87462),a=(o(67294),o(3905));const l={title:"Using the Callouts Object in SOLIDWORKS API for Model Annotations",caption:"Callouts"},r=void 0,i={unversionedId:"codestack/solidworks-api/adornment/callouts/index",id:"codestack/solidworks-api/adornment/callouts/index",title:"Using the Callouts Object in SOLIDWORKS API for Model Annotations",description:"Use the Callouts object in SOLIDWORKS API to annotate models (similar to balloons), link to entities, and display custom data.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/adornment/callouts/index.md",sourceDirName:"codestack/solidworks-api/adornment/callouts",slug:"/codestack/solidworks-api/adornment/callouts/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/adornment/callouts/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/adornment/callouts/index.md",tags:[],version:"current",frontMatter:{title:"Using the Callouts Object in SOLIDWORKS API for Model Annotations",caption:"Callouts"},sidebar:"tutorialSidebar",previous:{title:"Adding Graphic Elements to Model Views with SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/adornment/"},next:{title:"SOLIDWORKS\u5b8f\u4ee5\u663e\u793a\u8fb9\u7f18\u76f4\u5f84\u7684\u6807\u6ce8",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/adornment/callouts/circular-edges-display-callouts/"}},s={},c=[{value:"labels: callout, balloons",id:"labels-callout-balloons",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use the Callouts object in SOLIDWORKS API to annotate models (similar to balloons), link to entities, and display custom data.\nsidebar_position: 1"),(0,a.kt)("h2",{id:"labels-callout-balloons"},"labels: ","[callout, balloons]"),(0,a.kt)("p",null,"In SOLIDWORKS, Callouts are balloon-like objects that can be attached to entities (typically through selection) and display additional information about the entity. Callouts do not change size with the scaling of the model and they maintain the same orientation even if the model is rotated."),(0,a.kt)("p",null,"Callouts are temporary objects and are typically destroyed after selection is cleared or the operation is completed."),(0,a.kt)("p",null,"The most common example of Callouts in SOLIDWORKS is the measurement tool. When entities are selected, the measurement results are displayed in Callouts."),(0,a.kt)("p",null,"The SOLIDWORKS API provides the ability to create Callouts through the ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/swpublishedapi/solidworks.interop.swpublished~solidworks.interop.swpublished.iswcallouthandler.html"},"ISwCalloutHandler interface"),". This handler allows for the creation of Callout definitions and handling of related events."),(0,a.kt)("p",null,"Callouts can be displayed in read-only mode or capture user input values. Callouts can have different colors and can be single-line or multi-line."),(0,a.kt)("p",null,"This section contains macros and code examples for creating, displaying, and handling Callouts using the SOLIDWORKS API."))}p.isMDXComponent=!0}}]);