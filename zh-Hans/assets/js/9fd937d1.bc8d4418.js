"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[67038],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(o),f=i,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||r;return o?n.createElement(m,s(s({ref:t},d),{},{components:o})):n.createElement(m,s({ref:t},d))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,s=new Array(r);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<r;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},30811:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=o(87462),i=(o(67294),o(3905));const r={title:"Difference between SOLIDWORKS API methods with and without I",caption:"I-Versions Of Methods And Interfaces",description:"Explanation of the differences between method names and interfaces containing the I at the beginning (e.g. IModelDoc2 vs ModelDoc2)",image:"intellisense-events.png",labels:["events","i-methods","i-interfaces"]},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/i-api-versions/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/i-api-versions/index",title:"Difference between SOLIDWORKS API methods with and without I",description:"Explanation of the differences between method names and interfaces containing the I at the beginning (e.g. IModelDoc2 vs ModelDoc2)",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/i-api-versions/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/i-api-versions",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/i-api-versions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/i-api-versions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/i-api-versions/index.md",tags:[],version:"current",frontMatter:{title:"Difference between SOLIDWORKS API methods with and without I",caption:"I-Versions Of Methods And Interfaces",description:"Explanation of the differences between method names and interfaces containing the I at the beginning (e.g. IModelDoc2 vs ModelDoc2)",image:"intellisense-events.png",labels:["events","i-methods","i-interfaces"]},sidebar:"tutorialSidebar",previous:{title:"How to use Accessors section in SOLIDWORKS API Help",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/accessors/"},next:{title:"Naming for methods and properties in SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/naming-convention/"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Methods, properties and objects (interfaces) in SOLIDWORKS API help available in 2 versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With ",(0,i.kt)("strong",{parentName:"li"},"I")," at the beginning (e.g. ISldWorks, IModelDoc2, IAnnotation, ISldWorks::IActiveDoc)"),(0,i.kt)("li",{parentName:"ul"},"Without ",(0,i.kt)("strong",{parentName:"li"},"I")," at the beginning (e.g. SldWorks, ModelDoc2, Annotation, SldWorks::ActiveDoc)")),(0,i.kt)("p",null,"Both of these alternatives correspond to the same object or method. The main difference are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I versions of the methods do not expose events")),(0,i.kt)("p",null,"The following snapshot of the available members of the variable declared as ",(0,i.kt)("em",{parentName:"p"},"SldWorks"),". Events are available"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"List of events available in the variable declared as SldWorks",src:o(57300).Z,width:"398",height:"236"}),"{ width=250 }"),(0,i.kt)("p",null,"The following snapshot of the available members of the variable declared as ",(0,i.kt)("em",{parentName:"p"},"ISldWorks"),". No events are available"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"No events available in the variable declared as ISldWorks",src:o(70487).Z,width:"374",height:"232"}),"{ width=250 }"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IVersions of the methods usually return type safe version of the interface instead of object or IDispatch. This means that explicit cast is not required for the languages which enforce type safety at compile time (like C#):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"ISldWorks app;\n...\nIModelDoc2 model = app.IActiveDoc; //correct\nIModelDoc2 model = app.ActiveDoc; //Compile error\nIModelDoc2 model = app.ActiveDoc as IModelDoc2; //correct\n")))}u.isMDXComponent=!0},57300:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/intellisense-events-f851fd8ebcf7e8c1de08a03a6113f4aa.png"},70487:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/intellisense-no-events-601d4a23d2875534abed85c49641b98d.png"}}]);