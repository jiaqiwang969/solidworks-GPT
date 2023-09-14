"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[48196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||r;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const r={title:"Difference between SOLIDWORKS API methods with and without I",caption:"I-Versions Of Methods And Interfaces",description:"Explanation of the differences between method names and interfaces containing the I at the beginning (e.g. IModelDoc2 vs ModelDoc2)",image:"intellisense-events.png",labels:["events","i-methods","i-interfaces"]},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/i-api-versions/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/i-api-versions/index",title:"Difference between SOLIDWORKS API methods with and without I",description:"Explanation of the differences between method names and interfaces containing the I at the beginning (e.g. IModelDoc2 vs ModelDoc2)",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/i-api-versions/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/i-api-versions",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/i-api-versions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/i-api-versions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/i-api-versions/index.md",tags:[],version:"current",frontMatter:{title:"Difference between SOLIDWORKS API methods with and without I",caption:"I-Versions Of Methods And Interfaces",description:"Explanation of the differences between method names and interfaces containing the I at the beginning (e.g. IModelDoc2 vs ModelDoc2)",image:"intellisense-events.png",labels:["events","i-methods","i-interfaces"]},sidebar:"tutorialSidebar",previous:{title:"Using SOLIDWORKS API to render feature tree in HTML page",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/html-feature-tree/"},next:{title:"Identify SOLIDWORKS API feature definition and specific type",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/identify-feature/"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Methods, properties and objects (interfaces) in SOLIDWORKS API help available in 2 versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With ",(0,i.kt)("strong",{parentName:"li"},"I")," at the beginning (e.g. ISldWorks, IModelDoc2, IAnnotation, ISldWorks::IActiveDoc)"),(0,i.kt)("li",{parentName:"ul"},"Without ",(0,i.kt)("strong",{parentName:"li"},"I")," at the beginning (e.g. SldWorks, ModelDoc2, Annotation, SldWorks::ActiveDoc)")),(0,i.kt)("p",null,"Both of these alternatives correspond to the same object or method. The main difference are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I versions of the methods do not expose events")),(0,i.kt)("p",null,"The following snapshot of the available members of the variable declared as ",(0,i.kt)("em",{parentName:"p"},"SldWorks"),". Events are available"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"List of events available in the variable declared as SldWorks",src:n(53434).Z,width:"398",height:"236"}),"{ width=250 }"),(0,i.kt)("p",null,"The following snapshot of the available members of the variable declared as ",(0,i.kt)("em",{parentName:"p"},"ISldWorks"),". No events are available"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"No events available in the variable declared as ISldWorks",src:n(71789).Z,width:"374",height:"232"}),"{ width=250 }"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IVersions of the methods usually return type safe version of the interface instead of object or IDispatch. This means that explicit cast is not required for the languages which enforce type safety at compile time (like C#):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"ISldWorks app;\n...\nIModelDoc2 model = app.IActiveDoc; //correct\nIModelDoc2 model = app.ActiveDoc; //Compile error\nIModelDoc2 model = app.ActiveDoc as IModelDoc2; //correct\n")))}u.isMDXComponent=!0},53434:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/intellisense-events-f851fd8ebcf7e8c1de08a03a6113f4aa.png"},71789:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/intellisense-no-events-601d4a23d2875534abed85c49641b98d.png"}}]);