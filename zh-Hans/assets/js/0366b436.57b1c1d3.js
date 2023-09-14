"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[53787],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(o),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return o?r.createElement(f,s(s({ref:t},d),{},{components:o})):r.createElement(f,s({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},76523:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={title:"Automation Sheet Metal parts using SOLIDWORKS API",caption:"Sheet Metal",description:"Using SOLIDWORKS API to manipulate sheet metal features",sidebar_position:10,labels:["sheet metal","bend","fold"]},s=void 0,i={unversionedId:"codestack-clone/solidworks-api/document/sheet-metal/index",id:"codestack-clone/solidworks-api/document/sheet-metal/index",title:"Automation Sheet Metal parts using SOLIDWORKS API",description:"Using SOLIDWORKS API to manipulate sheet metal features",source:"@site/docs/codestack-clone/solidworks-api/document/sheet-metal/index.md",sourceDirName:"codestack-clone/solidworks-api/document/sheet-metal",slug:"/codestack-clone/solidworks-api/document/sheet-metal/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/sheet-metal/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/sheet-metal/index.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Automation Sheet Metal parts using SOLIDWORKS API",caption:"Sheet Metal",description:"Using SOLIDWORKS API to manipulate sheet metal features",sidebar_position:10,labels:["sheet metal","bend","fold"]},sidebar:"tutorialSidebar",previous:{title:"Add Tag to selected note using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/notes/tag-selected-note/"},next:{title:"Export flat patterns from SOLIDWORKS part or assembly components",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/sheet-metal/export-all-flat-patterns/"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"SOLIDWORKS API provide number of methods and interface for manipulating sheet metal features in part documents: ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData.html"},"IBaseFlangeFeatureData"),", ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibendsfeaturedata_members.html"},"IBendsFeatureData"),", ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isketchedbendfeaturedata.html"},"ISketchedBendFeatureData")," etc."),(0,n.kt)("p",null,"All the specific feature data could be retrieved via calling the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeature~GetDefinition.html"},"IFeature::GetDefinition")," SOLIDWORKS API on the corresponding sheet metal feature."),(0,n.kt)("p",null,"Explore this section to find useful macros and code examples for automation and enhancement of sheet metal functionality in SOLIDWORKS."))}u.isMDXComponent=!0}}]);