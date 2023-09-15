"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[49466],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>M});var r=o(67294);function A(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){A(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,A=function(e,t){if(null==e)return{};var o,r,A={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(A[o]=e[o]);return A}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(A[o]=e[o])}return A}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,A=e.mdxType,n=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),l=c(o),p=A,M=l["".concat(s,".").concat(p)]||l[p]||d[p]||n;return o?r.createElement(M,i(i({ref:t},m),{},{components:o})):r.createElement(M,i({ref:t},m))}));function M(e,t){var o=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var n=o.length,i=new Array(n);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[l]="string"==typeof e?e:A,i[1]=a;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},15371:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var r=o(87462),A=(o(67294),o(3905));const n={title:"SOLIDWORKS API Object Model Class Hierarchy Diagram",image:"class-diagram.png",labels:["Hierarchy","Classes","Model"],sidebar_position:1,scripts:["scripts/svg-pan-zoom.min.js"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/class-diagram/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/class-diagram/index",title:"SOLIDWORKS API Object Model Class Hierarchy Diagram",description:"The diagram below shows the relationships between interfaces in the SOLIDWORKS API object model. This is not a complete class hierarchy, but rather a representation of the most commonly used methods and interfaces.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/class-diagram/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/class-diagram",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/class-diagram/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/class-diagram/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/class-diagram/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"SOLIDWORKS API Object Model Class Hierarchy Diagram",image:"class-diagram.png",labels:["Hierarchy","Classes","Model"],sidebar_position:1,scripts:["scripts/svg-pan-zoom.min.js"]},sidebar:"tutorialSidebar",previous:{title:"Explanation of SOLIDWORKS API Object Model and Object Relationships",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/"},next:{title:"\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u5e2e\u52a9\u4e2d\u7684\u8bbf\u95ee\u5668\u90e8\u5206",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/api-object-model/accessors/"}},s={},c=[],m={toc:c},l="wrapper";function d(e){let{components:t,...n}=e;return(0,A.kt)(l,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("p",null,"The diagram below shows the relationships between interfaces in the SOLIDWORKS API object model. This is not a complete class hierarchy, but rather a representation of the most commonly used methods and interfaces."),(0,A.kt)("p",null,"The chart is interactive and can be zoomed using the mouse wheel, as well as panned using the right or left mouse button. The navigation controls in the bottom right corner allow for zooming and fitting to window size."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Control Box",src:o(52689).Z,width:"86",height:"93"})),(0,A.kt)("p",null,"All the boxes and arrows are clickable, and clicking on them will redirect you to information pages about specific methods, properties, or interfaces."),(0,A.kt)("p",null,"Refer to the ",(0,A.kt)("a",{parentName:"p",href:"https://www.codestack.net/solidworks-api/getting-started/api-object-model/class-diagram/"},"original webpage")," for more information."))}d.isMDXComponent=!0},52689:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);