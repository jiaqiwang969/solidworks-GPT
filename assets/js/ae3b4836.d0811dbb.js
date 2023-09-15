"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[78360],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>f});var r=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,s=function(e,t){if(null==e)return{};var o,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=l(o),u=s,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||n;return o?r.createElement(f,i(i({ref:t},m),{},{components:o})):r.createElement(f,i({ref:t},m))}));function f(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=o.length,i=new Array(n);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<n;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},91342:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var r=o(87462),s=(o(67294),o(3905));const n={title:"Automating mates in assemblies using SOLIDWORKS API",caption:"Mates",description:"Collection of articles and code examples for mating components in the assembly",image:"assembly-mating.png",labels:["assembly","mate"],sidebar_position:1},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/index",title:"Automating mates in assemblies using SOLIDWORKS API",description:"Collection of articles and code examples for mating components in the assembly",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Automating mates in assemblies using SOLIDWORKS API",caption:"Mates",description:"Collection of articles and code examples for mating components in the assembly",image:"assembly-mating.png",labels:["assembly","mate"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Passing the parameters to SOLIDWORKS Macro using the SWBasic macro",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/inter-process-communication/pass-parameters-to-vba-macro/via-swb-macro/"},next:{title:"Add mate between coordinate systems using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/add-mate-between-coordinate-systems/"}},c={},l=[],m={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Mating assembly components via API",src:o(7650).Z,width:"336",height:"545"}),"{ width=200 }"),(0,s.kt)("p",null,"Assembly components can be mated programmatically via ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IAssemblyDoc~AddMate3.html"},"IAssemblyDoc::AddMate3")," SOLIDWORKS API method (or newer versions of this method)."),(0,s.kt)("p",null,"It is required to mark the selected objects with different marks for the different mate types. Please refer the SOLIDWORKS API help documentation for the values of marks for a specific mate or use SOLIDWORKS macro recorder to capture the correct mark."))}d.isMDXComponent=!0},7650:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/assembly-mating-9f09f8f255b1f91624ff7da322ade6f5.png"}}]);