"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[1321],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(o),u=n,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||a;return o?r.createElement(f,i(i({ref:t},d),{},{components:o})):r.createElement(f,i({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},42767:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const a={title:"Usage of IEdmVault5 interface in SOLIDWORKS PDM API",caption:"Vault",description:"Collection of code examples and tutorials for usage of IEdmVault5 interface in SOLIDWORKS PDM API",sidebar_position:2},i=void 0,l={unversionedId:"codestack/solidworks-pdm-api/vault/index",id:"codestack/solidworks-pdm-api/vault/index",title:"Usage of IEdmVault5 interface in SOLIDWORKS PDM API",description:"Collection of code examples and tutorials for usage of IEdmVault5 interface in SOLIDWORKS PDM API",source:"@site/docs/codestack/solidworks-pdm-api/vault/index.md",sourceDirName:"codestack/solidworks-pdm-api/vault",slug:"/codestack/solidworks-pdm-api/vault/",permalink:"/solidworks-GPT/docs/codestack/solidworks-pdm-api/vault/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-pdm-api/vault/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Usage of IEdmVault5 interface in SOLIDWORKS PDM API",caption:"Vault",description:"Collection of code examples and tutorials for usage of IEdmVault5 interface in SOLIDWORKS PDM API",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"vault",permalink:"/solidworks-GPT/docs/category/vault"},next:{title:"List all vault views using SOLIDWORKS PDM API",permalink:"/solidworks-GPT/docs/codestack/solidworks-pdm-api/vault/list-views/"}},p={},s=[],d={toc:s},c="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmvault5.html"},"IEdmVault5")," interface is a root object in the SOLIDWORKS PDM API object model. It provides an access to the base services of the system, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User Management"),(0,n.kt)("li",{parentName:"ul"},"Batch operations"),(0,n.kt)("li",{parentName:"ul"},"Data card management"),(0,n.kt)("li",{parentName:"ul"},"Workflow management")),(0,n.kt)("p",null,"In the stand-alone application pointer to the vault can be created via constructor. To initialize the variable it is required to call the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmVault5~Login.html"},"IEdmVault5::Login")," or ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmVault5~LoginAuto.html"},"IEdmVault5::LoginAuto"),". The first method requires to enter all credentials while second one provides the integrated login, i.e. default SOLIDWORKS PDM login page is displayed or user can be automatically logged in."),(0,n.kt)("p",null,"Pointer to the initialized instance of ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmvault5.html"},"IEdmVault5")," is passed to the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmaddin5~oncmd.html"},"IEdmAddIn5:OnCmd")," overload when creating the SOLIDWORKS PDM add-in so it is not required to perform the login operation on that object in this case."))}m.isMDXComponent=!0}}]);