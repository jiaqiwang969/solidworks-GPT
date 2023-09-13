"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[58247],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var A=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);n&&(A=A.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,A)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,A,r=function(e,n){if(null==e)return{};var t,A,r={},i=Object.keys(e);for(A=0;A<i.length;A++)t=i[A],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(A=0;A<i.length;A++)t=i[A],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=A.createContext({}),s=function(e){var n=A.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return A.createElement(d.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return A.createElement(A.Fragment,{},n)}},g=A.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=s(t),g=r,u=m["".concat(d,".").concat(g)]||m[g]||c[g]||i;return t?A.createElement(u,a(a({ref:n},l),{},{components:t})):A.createElement(u,a({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=g;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[m]="string"==typeof e?e:r,a[1]=o;for(var s=2;s<i;s++)a[s]=t[s];return A.createElement.apply(null,a)}return A.createElement.apply(null,t)}g.displayName="MDXCreateElement"},22832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var A=t(87462),r=(t(67294),t(3905));const i={title:"SwEx.AddIn Framework enables easy and robust development of add-ins with SOLIDWORKS API",caption:"SwEx.AddIn",description:"Advanced utilities for the development of powerful SOLIDWORKS add-ins using SOLIDWORKS API in .NET (C# and VB.NET). Framework simplifies the creation and maintaining of commands and UI elements.",image:"logo.png","toc-group-name":"labs-solidworks-swex",order:2,"redirect-from":["/labs/solidworks/dev-tools-addin/"]},a=void 0,o={unversionedId:"codestack/labs/solidworks/swex/add-in/index",id:"codestack/labs/solidworks/swex/add-in/index",title:"SwEx.AddIn Framework enables easy and robust development of add-ins with SOLIDWORKS API",description:"Advanced utilities for the development of powerful SOLIDWORKS add-ins using SOLIDWORKS API in .NET (C# and VB.NET). Framework simplifies the creation and maintaining of commands and UI elements.",source:"@site/docs/codestack/labs/solidworks/swex/add-in/index.md",sourceDirName:"codestack/labs/solidworks/swex/add-in",slug:"/codestack/labs/solidworks/swex/add-in/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/add-in/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/add-in/index.md",tags:[],version:"current",frontMatter:{title:"SwEx.AddIn Framework enables easy and robust development of add-ins with SOLIDWORKS API",caption:"SwEx.AddIn",description:"Advanced utilities for the development of powerful SOLIDWORKS add-ins using SOLIDWORKS API in .NET (C# and VB.NET). Framework simplifies the creation and maintaining of commands and UI elements.",image:"logo.png","toc-group-name":"labs-solidworks-swex",order:2,"redirect-from":["/labs/solidworks/dev-tools-addin/"]},sidebar:"tutorialSidebar",previous:{title:"SwEx - framework which simplifies the development using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/"},next:{title:"API Reference",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/add-in/api-reference"}},d={},s=[{value:"Features",id:"features",level:2},{value:"Registering Add-In",id:"registering-add-in",level:3},{value:"Adding Commands",id:"adding-commands",level:3},{value:"Managing Documents Lifecycle and Events",id:"managing-documents-lifecycle-and-events",level:3},{value:"Reading and Writing to 3rd Party Storage and Store",id:"reading-and-writing-to-3rd-party-storage-and-store",level:3},{value:"Hosting User Controls In SOLIDWORKS Panels",id:"hosting-user-controls-in-solidworks-panels",level:3},{value:"Task Pane",id:"task-pane",level:4},{value:"Video Tutorials",id:"video-tutorials",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Detailed Guide",id:"detailed-guide",level:3}],l={toc:s},m="wrapper";function c(e){let{components:n,...i}=e;return(0,r.kt)(m,(0,A.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SwEx.AddIn framework for SOLIDWORKS",src:t(72577).Z,width:"256",height:"214"})),(0,r.kt)("p",null,"SwEx.AddIn provides utilities for simplified development of SOLIDWORKS add-ins."),(0,r.kt)("p",null,"The functionality includes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automatic registration of the add-in"),(0,r.kt)("li",{parentName:"ul"},"Simplified commands groups management"),(0,r.kt)("li",{parentName:"ul"},"Events management (future versions)"),(0,r.kt)("li",{parentName:"ul"},"Task Panes, Feature Manager Tab, Model View Tab (future versions)")),(0,r.kt)("p",null,"Source code is available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/swex-addin"},"GitHub")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("h3",{id:"registering-add-in"},"Registering Add-In"),(0,r.kt)("p",null,"To Register add-in just add the AutoRegister attribute (no need to run custom regasm commands, no need to call any static classes)"),(0,r.kt)("p",null,"{% code-snippet { file-name: Overview.Register.* } %}"),(0,r.kt)("h3",{id:"adding-commands"},"Adding Commands"),(0,r.kt)("p",null,"Commands can be defined by creating an enumerations. Commands can be customized by adding attributes to assign title, tooltip, icon etc. Commands can be grouped under sub menus. Simply specify the image (transparency is supported) and framework will create required bitmaps compatible with SOLIDWORKS. No need to assign gray background to enable transparency, no need to scale images to fit the required sizes - simply use any image and framework will do the rest. Use resources to localize the add-in."),(0,r.kt)("p",null,"{% code-snippet { file-name: Overview.CommandGroup.* } %}"),(0,r.kt)("h3",{id:"managing-documents-lifecycle-and-events"},"Managing Documents Lifecycle and Events"),(0,r.kt)("p",null,"Framework will manage the lifecycle of documents by wrapping them in the specified class and allows to handle common events:"),(0,r.kt)("p",null,"{% code-snippet { file-name: Overview.DocHandler.* } %}"),(0,r.kt)("h3",{id:"reading-and-writing-to-3rd-party-storage-and-store"},"Reading and Writing to 3rd Party Storage and Store"),(0,r.kt)("p",null,"It has never been easier to read and write data to the internal SOLIDWORKS file storage. Simply override the corresponding event and serialize/deserialize the data using XML, DataContract, Binary etc. serializers:"),(0,r.kt)("p",null,"{% code-snippet { file-name: Overview.3rdParty.* } %}"),(0,r.kt)("h3",{id:"hosting-user-controls-in-solidworks-panels"},"Hosting User Controls In SOLIDWORKS Panels"),(0,r.kt)("p",null,"Just specify User Control to host and framework will do the rest:"),(0,r.kt)("h4",{id:"task-pane"},"Task Pane"),(0,r.kt)("p",null,"{% code-snippet { file-name: Overview.TaskPane.* } %}"),(0,r.kt)("h2",{id:"video-tutorials"},"Video Tutorials"),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"{% youtube { id: 8BXQZcPe4bA } %}"),(0,r.kt)("h3",{id:"detailed-guide"},"Detailed Guide"),(0,r.kt)("p",null,"{% youtube { id: EAm-3-Njkfw } %}"))}c.isMDXComponent=!0},72577:(e,n,t)=>{t.d(n,{Z:()=>A});const A="data:image/png;base64,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"}}]);