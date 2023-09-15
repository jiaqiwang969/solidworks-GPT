"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[82264],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(i),f=n,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return i?r.createElement(m,a(a({ref:t},p),{},{components:i})):r.createElement(m,a({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},9854:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const o={title:"Installing the SOLIDWORKS add-in by creating the msi-installer",caption:"Installer",description:"Creating the installer .msi package for deploying applications for SOLIDWORKS"},a=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/installer/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/installer/index",title:"Installing the SOLIDWORKS add-in by creating the msi-installer",description:"Creating the installer .msi package for deploying applications for SOLIDWORKS",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/installer/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/installer",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/installer/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/installer/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/installer/index.md",tags:[],version:"current",frontMatter:{title:"Installing the SOLIDWORKS add-in by creating the msi-installer",caption:"Installer",description:"Creating the installer .msi package for deploying applications for SOLIDWORKS"},sidebar:"tutorialSidebar",previous:{title:"Macro to insert SOLIDWORKS Revision table and attach to the anchor point",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-revision-table/"},next:{title:"Creating the Visual Studio Installer (VSI) for SOLIDWORKS application",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/installer/vsi/"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Installer package (.msi) is the most robust way to deliver the best user experience when deploying the application. Installers can provide friendly step-by-step wizard with ability to specify options while installing the products. There are multiple installer options available"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"vsi"},"Microsoft Visual Studio Installer Projects")," would provide the easiest and quickest way to create an installer from the built binaries. This option however has a limited functionality and flexibility when customizing the installer."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"wix"},"WiX")," is a popular free framework for creating the installers by defining the rules in XML format. This framework provides extensive flexibility and allows to build any customization into the installer."),(0,n.kt)("p",null,"Another options include but not limited to"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/InstallShield"},"InstallShield")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Nullsoft_Scriptable_Install_System"},"Nullsoft Scriptable Install System")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/desktop/msi/orca-exe"},"Orca"))))}d.isMDXComponent=!0}}]);