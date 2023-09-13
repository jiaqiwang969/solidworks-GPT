"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[70808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,g=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return n?o.createElement(g,r(r({ref:t},d),{},{components:n})):o.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={title:"Difference between SOLIDWORKS API methods with and without I",caption:"I-Versions Of Methods And Interfaces",description:"Explanation of the differences between method names and interfaces containing the I at the beginning (e.g. IModelDoc2 vs ModelDoc2)",image:"intellisense-events.png",labels:["events","i-methods","i-interfaces"]},r=void 0,s={unversionedId:"codestack/solidworks-api/getting-started/api-object-model/i-api-versions/index",id:"codestack/solidworks-api/getting-started/api-object-model/i-api-versions/index",title:"Difference between SOLIDWORKS API methods with and without I",description:"Explanation of the differences between method names and interfaces containing the I at the beginning (e.g. IModelDoc2 vs ModelDoc2)",source:"@site/docs/codestack/solidworks-api/getting-started/api-object-model/i-api-versions/index.md",sourceDirName:"codestack/solidworks-api/getting-started/api-object-model/i-api-versions",slug:"/codestack/solidworks-api/getting-started/api-object-model/i-api-versions/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/api-object-model/i-api-versions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/api-object-model/i-api-versions/index.md",tags:[],version:"current",frontMatter:{title:"Difference between SOLIDWORKS API methods with and without I",caption:"I-Versions Of Methods And Interfaces",description:"Explanation of the differences between method names and interfaces containing the I at the beginning (e.g. IModelDoc2 vs ModelDoc2)",image:"intellisense-events.png",labels:["events","i-methods","i-interfaces"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS API Object Model class hierarchy diagram",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/api-object-model/class-diagram/"},next:{title:"Naming for methods and properties in SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/api-object-model/naming-convention/"}},l={},c=[],d={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Methods, properties and objects (interfaces) in SOLIDWORKS API help available in 2 versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With ",(0,i.kt)("strong",{parentName:"li"},"I")," at the beginning (e.g. ISldWorks, IModelDoc2, IAnnotation, ISldWorks::IActiveDoc)"),(0,i.kt)("li",{parentName:"ul"},"Without ",(0,i.kt)("strong",{parentName:"li"},"I")," at the beginning (e.g. SldWorks, ModelDoc2, Annotation, SldWorks::ActiveDoc)")),(0,i.kt)("p",null,"Both of these alternatives correspond to the same object or method. The main difference are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I versions of the methods do not expose events")),(0,i.kt)("p",null,"The following snapshot of the available members of the variable declared as ",(0,i.kt)("em",{parentName:"p"},"SldWorks"),". Events are available"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"List of events available in the variable declared as SldWorks",src:n(71678).Z,width:"398",height:"236"}),"{ width=250 }"),(0,i.kt)("p",null,"The following snapshot of the available members of the variable declared as ",(0,i.kt)("em",{parentName:"p"},"ISldWorks"),". No events are available"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"No events available in the variable declared as ISldWorks",src:n(26181).Z,width:"374",height:"232"}),"{ width=250 }"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IVersions of the methods usually return type safe version of the interface instead of object or IDispatch. This means that explicit cast is not required for the languages which enforce type safety at compile time (like C#):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"ISldWorks app;\n...\nIModelDoc2 model = app.IActiveDoc; //correct\nIModelDoc2 model = app.ActiveDoc; //Compile error\nIModelDoc2 model = app.ActiveDoc as IModelDoc2; //correct\n")))}m.isMDXComponent=!0},71678:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/intellisense-events-f851fd8ebcf7e8c1de08a03a6113f4aa.png"},26181:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/intellisense-no-events-601d4a23d2875534abed85c49641b98d.png"}}]);