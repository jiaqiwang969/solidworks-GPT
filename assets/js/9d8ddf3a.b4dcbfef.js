"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[17864],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>f});var s=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,s,n=function(e,t){if(null==e)return{};var o,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=s.createContext({}),l=function(e){var t=s.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=l(o),u=n,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||r;return o?s.createElement(f,i(i({ref:t},m),{},{components:o})):s.createElement(f,i({ref:t},m))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:n,i[1]=a;for(var l=2;l<r;l++)i[l]=o[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,o)}u.displayName="MDXCreateElement"},62055:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=o(87462),n=(o(67294),o(3905));const r={title:"Automating mates in assemblies using SOLIDWORKS API",caption:"Mates",description:"Collection of articles and code examples for mating components in the assembly",image:"assembly-mating.png",labels:["assembly","mate"],sidebar_position:1},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/index",title:"Automating mates in assemblies using SOLIDWORKS API",description:"Collection of articles and code examples for mating components in the assembly",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Automating mates in assemblies using SOLIDWORKS API",caption:"Mates",description:"Collection of articles and code examples for mating components in the assembly",image:"assembly-mating.png",labels:["assembly","mate"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Write component quantity in the SOLIDWORKS assembly to custom property",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/write-quantities/"},next:{title:"Add mate between coordinate systems using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/add-mate-between-coordinate-systems/"}},c={},l=[],m={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Mating assembly components via API",src:o(35853).Z,width:"336",height:"545"}),"{ width=200 }"),(0,n.kt)("p",null,"Assembly components can be mated programmatically via ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IAssemblyDoc~AddMate3.html"},"IAssemblyDoc::AddMate3")," SOLIDWORKS API method (or newer versions of this method)."),(0,n.kt)("p",null,"It is required to mark the selected objects with different marks for the different mate types. Please refer the SOLIDWORKS API help documentation for the values of marks for a specific mate or use SOLIDWORKS macro recorder to capture the correct mark."))}p.isMDXComponent=!0},35853:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/assembly-mating-9f09f8f255b1f91624ff7da322ade6f5.png"}}]);