"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[68156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),g=a,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},30325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={title:"Developing stand-alone applications using SOLIDWORKS PDM API",caption:"Developing Stand-Alone Application",description:"Examples and guidelines for creating stand-alone (exe) applications with SOLIDWORKS PDM API",labels:["stand-alone","pdm"]},i=void 0,s={unversionedId:"codestack/solidworks-pdm-api/getting-started/stand-alone/index",id:"codestack/solidworks-pdm-api/getting-started/stand-alone/index",title:"Developing stand-alone applications using SOLIDWORKS PDM API",description:"Examples and guidelines for creating stand-alone (exe) applications with SOLIDWORKS PDM API",source:"@site/docs/codestack/solidworks-pdm-api/getting-started/stand-alone/index.md",sourceDirName:"codestack/solidworks-pdm-api/getting-started/stand-alone",slug:"/codestack/solidworks-pdm-api/getting-started/stand-alone/",permalink:"/solidworks-GPT/docs/codestack/solidworks-pdm-api/getting-started/stand-alone/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-pdm-api/getting-started/stand-alone/index.md",tags:[],version:"current",frontMatter:{title:"Developing stand-alone applications using SOLIDWORKS PDM API",caption:"Developing Stand-Alone Application",description:"Examples and guidelines for creating stand-alone (exe) applications with SOLIDWORKS PDM API",labels:["stand-alone","pdm"]},sidebar:"tutorialSidebar",previous:{title:"Using SOLIDWORKS PDM API In VBA And VSTA Macros",permalink:"/solidworks-GPT/docs/codestack/solidworks-pdm-api/getting-started/macros/"},next:{title:"vault",permalink:"/solidworks-GPT/docs/category/vault"}},l={},d=[],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Stand-alone applications are executables which are running in the external process to SOLIDWORKS PDM explorer. This provides benefits of easier deployment as it is not required to do an installation to SOLIDWORKS PDM Administration Console. This type of application generally considered as safer option as it will be only run on the clients machine unlike PDM add-ins which will be redistributed on each client from the centralized storage."),(0,a.kt)("p",null,"SOLIDWORKS PDM API should be used in exactly the same way as they used in the add-ins development."),(0,a.kt)("p",null,"Explore this section to find the examples and detailed guidelines of creating and troubleshooting stand-alone application which utilize SOLIDWORKS PDM API methods."))}u.isMDXComponent=!0}}]);