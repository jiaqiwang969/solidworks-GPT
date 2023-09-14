"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[86683],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>b});var s=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,s,n=function(e,t){if(null==e)return{};var o,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=s.createContext({}),c=function(e){var t=s.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(o),d=n,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return o?s.createElement(b,i(i({ref:t},p),{},{components:o})):s.createElement(b,i({ref:t},p))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:n,i[1]=a;for(var c=2;c<r;c++)i[c]=o[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7323:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=o(87462),n=(o(67294),o(3905));const r={title:"Automating assemblies using SOLIDWORKS API",caption:"Assembly",description:"Assemblies automation (components, BOM, contexts) using SOLIDWORKS API",sidebar_position:1,labels:["assembly"]},i=void 0,a={unversionedId:"codestack/solidworks-api/document/assembly/index",id:"codestack/solidworks-api/document/assembly/index",title:"Automating assemblies using SOLIDWORKS API",description:"Assemblies automation (components, BOM, contexts) using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/assembly/index.md",sourceDirName:"codestack/solidworks-api/document/assembly",slug:"/codestack/solidworks-api/document/assembly/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/assembly/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/assembly/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Automating assemblies using SOLIDWORKS API",caption:"Assembly",description:"Assemblies automation (components, BOM, contexts) using SOLIDWORKS API",sidebar_position:1,labels:["assembly"]},sidebar:"tutorialSidebar",previous:{title:"Automating SOLIDWORKS parts, assemblies and drawings using API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/"},next:{title:"Assembly components automation using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/assembly/components/"}},l={},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,s.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Assembly is a specific type of the model document which represents a composition of sub documents to form the complete product."),(0,n.kt)("p",null,"Assemblies are represented with ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAssemblyDoc.html"},"IAssemblyDoc")," SOLIDWORKS API interface."),(0,n.kt)("p",null,"This section contains examples and macros of automation assemblies using SOLIDWORKS API."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Automating components and mates"),(0,n.kt)("li",{parentName:"ul"},"Assembly level features"),(0,n.kt)("li",{parentName:"ul"},"Working in assembly contexts")))}u.isMDXComponent=!0}}]);