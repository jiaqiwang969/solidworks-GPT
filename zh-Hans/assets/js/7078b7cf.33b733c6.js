"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[84183],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>g});var r=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,s=function(e,t){if(null==e)return{};var o,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var c=r.createContext({}),d=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=d(o),m=s,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return o?r.createElement(g,n(n({ref:t},l),{},{components:o})):r.createElement(g,n({ref:t},l))}));function g(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=o.length,n=new Array(i);n[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:s,n[1]=a;for(var d=2;d<i;d++)n[d]=o[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},95690:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=o(87462),s=(o(67294),o(3905));const i={title:"Storing data in SOLIDWORKS models using API",image:"solidworks-model-data-storage.png",sidebar_position:4},n=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/index",title:"Storing data in SOLIDWORKS models using API",description:"Storing the user data in the model via API{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Storing data in SOLIDWORKS models using API",image:"solidworks-model-data-storage.png",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528API\u521b\u5efaSOLIDWORKS\u7684VB.NET\u63d2\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-ins/vbnet/"},next:{title:"Using attributes in SOLIDWORKS API to store data and selections",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/attributes/"}},c={},d=[{value:"Custom Properties",id:"custom-properties",level:2},{value:"Attributes",id:"attributes",level:2},{value:"3rd Party Storage",id:"3rd-party-storage",level:2}],l={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,s.kt)(u,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Storing the user data in the model via API",src:o(12230).Z,width:"437",height:"308"}),"{ width=250 }"),(0,s.kt)("p",null,"SOLIDWORKS provides multiple ways to store the custom user data (i.e. text, numbers or more complex types like images or videos) within the SOLIDWORKS models using API. The most common ways are:"),(0,s.kt)("h2",{id:"custom-properties"},"Custom Properties"),(0,s.kt)("p",null,"Allows to add custom key-value pairs into the model or a configuration. Type of the key is case-insensitive string which must be unique within the scope (i.e. document level or configuration). Type of the value can be: text, number, date and boolean (Yes or No). Custom properties can be edited by the user."),(0,s.kt)("h2",{id:"attributes"},"Attributes"),(0,s.kt)("p",null,"Attributes are custom features added to the feature tree which might hold the parameters with values (string or numeric). Attributes can be also associated with the selectable objects (face, vertex, edge and component). Attributes cannot be associated with sketch segments. Attributes can be hidden in the features tree. Attributes cannot be changed from the User Interface."),(0,s.kt)("h2",{id:"3rd-party-storage"},"3rd Party Storage"),(0,s.kt)("p",null,"SOLIDWORKS allows creating custom COM storage within the main model's stream. It is possible to serialize/deserialize any custom data in this stream."),(0,s.kt)("p",null,"This section contains macros and code examples which demonstrates usage of above techniques to save data in the model using SOLIDWORKS API."))}p.isMDXComponent=!0},12230:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/solidworks-model-data-storage-15b038daed3b4024f96673878024bbec.png"}}]);