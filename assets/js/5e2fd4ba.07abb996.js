"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[40387],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(k,s(s({ref:t},p),{},{components:o})):r.createElement(k,s({ref:t},p))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},32370:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={title:"Automating SOLIDWORKS parts, assemblies and drawings using API",caption:"Document",description:"Articles and examples explaining the ways of automating SOLIDWORKS documents (parts, assemblies and drawings) via API",image:"solidworks-document-api.png",order:2},s=void 0,i={unversionedId:"codestack/solidworks-api/document/index",id:"codestack/solidworks-api/document/index",title:"Automating SOLIDWORKS parts, assemblies and drawings using API",description:"Articles and examples explaining the ways of automating SOLIDWORKS documents (parts, assemblies and drawings) via API",source:"@site/docs/codestack/solidworks-api/document/index.md",sourceDirName:"codestack/solidworks-api/document",slug:"/codestack/solidworks-api/document/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/index.md",tags:[],version:"current",frontMatter:{title:"Automating SOLIDWORKS parts, assemblies and drawings using API",caption:"Document",description:"Articles and examples explaining the ways of automating SOLIDWORKS documents (parts, assemblies and drawings) via API",image:"solidworks-document-api.png",order:2},sidebar:"tutorialSidebar",previous:{title:"Installing SOLIDWORKS add-in by manual registration",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/deployment/manual/"},next:{title:"Configuring document appearance using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/appearance/"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Automating of SOLIDWORKS documents with API",src:o(67526).Z,width:"373",height:"310"}),"{ width=200 }"),(0,n.kt)("p",null,"SOLIDWORKS documents (parts, assemblies and drawings) provide large amount of API functions for automation."),(0,n.kt)("p",null,"There are common functionalities which are available for all types of documents and usually accessible via ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/English/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2.html"},"IModelDoc2")," or ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension.html"},"IModelDocExtension")," SOLIDWORKS API interfaces."),(0,n.kt)("p",null,"This includes but not limited to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Annotations"),(0,n.kt)("li",{parentName:"ul"},"Sketch"),(0,n.kt)("li",{parentName:"ul"},"Feature Manager")),(0,n.kt)("p",null,"There are also specific functionalities available only for the specific types of documents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Parts APIs are available via ",(0,n.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ipartdoc.html"},"IPartDoc")," interface"),(0,n.kt)("li",{parentName:"ul"},"Assemblies APIs are available via ",(0,n.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iassemblydoc.html"},"IAssemblyDoc")," interface"),(0,n.kt)("li",{parentName:"ul"},"Drawings APIs are available via ",(0,n.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.idrawingdoc.html"},"IDrawingDoc")," interface")),(0,n.kt)("p",null,"Specific interface can be cast to the generic interface and vice verse."),(0,n.kt)("p",null,"IModelDocExtension can be accessed via ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldoc2~extension.html"},"IModelDoc2::Extension")," property."))}u.isMDXComponent=!0},67526:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/solidworks-document-api-e1cf195cfb2d80e998dc0199cf9bbe9e.png"}}]);