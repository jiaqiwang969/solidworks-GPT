"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[21425],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=s(r),f=o,u=c["".concat(p,".").concat(f)]||c[f]||m[f]||i;return r?n.createElement(u,a(a({ref:t},l),{},{components:r})):n.createElement(u,a({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:o,a[1]=d;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},71732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={title:"Getting Started: SOLIDWORKS PDM API Development",caption:"Getting Started",description:"Introduction to SOLIDWORKS PDM API, explanation of different ways of accessing API from add-ins and stand-alone applications",labels:["pdm api","getting started"],sidebar_position:0},a=void 0,d={unversionedId:"codestack/solidworks-pdm-api/getting-started/index",id:"codestack/solidworks-pdm-api/getting-started/index",title:"Getting Started: SOLIDWORKS PDM API Development",description:"Introduction to SOLIDWORKS PDM API, explanation of different ways of accessing API from add-ins and stand-alone applications",source:"@site/docs/codestack/solidworks-pdm-api/getting-started/index.md",sourceDirName:"codestack/solidworks-pdm-api/getting-started",slug:"/codestack/solidworks-pdm-api/getting-started/",permalink:"/solidworks-GPT/docs/codestack/solidworks-pdm-api/getting-started/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-pdm-api/getting-started/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Getting Started: SOLIDWORKS PDM API Development",caption:"Getting Started",description:"Introduction to SOLIDWORKS PDM API, explanation of different ways of accessing API from add-ins and stand-alone applications",labels:["pdm api","getting started"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"getting started",permalink:"/solidworks-GPT/docs/category/getting-started-1"},next:{title:"Developing add-ins using SOLIDWORKS PDM API",permalink:"/solidworks-GPT/docs/codestack/solidworks-pdm-api/getting-started/add-ins/"}},p={},s=[{value:"Interops in .NET",id:"interops-in-net",level:2},{value:"Framework 4.0 or newer",id:"framework-40-or-newer",level:3},{value:"Framework 2.0 or older",id:"framework-20-or-older",level:3}],l={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section introduces to SOLIDWORKS PDM API. It explains the differences between PDM add-ins and stand-alone application and provides detailed guidelines of creating the ones."),(0,o.kt)("p",null,"The root object in SOLIDWORKS PDM API is a ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmvault5.html"},"IEdmVault5")," which provides an access to various section of the functionality."),(0,o.kt)("p",null,"This interface can be explicitly cast to another manager interfaces, such as ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmAddInMgr9.html?id=96f8b929514a423d8cb220fbe54bb940#Pg0"},"IEdmAddInMgr9"),", ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmRevisionMgr3.html?id=755088fcb7fc40a99dfb42fb5e5b237e#Pg0"},"IEdmRevisionMgr3"),", etc."),(0,o.kt)("p",null,"The most popular way of extending the system is by implementing the add-in via ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmaddin5.html"},"IEdmAddIn5")," SOLIDWORKS PDM API interface."),(0,o.kt)("h2",{id:"interops-in-net"},"Interops in .NET"),(0,o.kt)("p",null,"If you are building the application in .NET (C# or VB.NET) you will need to use SOLIDWORKS PDM API interop to access the signatures of API methods."),(0,o.kt)("h3",{id:"framework-40-or-newer"},"Framework 4.0 or newer"),(0,o.kt)("p",null,"You need to add the reference to ",(0,o.kt)("em",{parentName:"p"},"EPDM.Interop.epdm.dll")," which is located in the installation folder of PDM (usually ",(0,o.kt)("em",{parentName:"p"},"C:\\Program Files\\SOLIDWORKS PDM\\EPDM.Interop.epdm.dll"),")."),(0,o.kt)("p",null,"Note, although you can add the reference to ",(0,o.kt)("em",{parentName:"p"},"EdmInterface.dll")," (type library) this will generate the ",(0,o.kt)("em",{parentName:"p"},"Interop.EdmLib.dll")," which can be used by .NET, however this interop will not have a strong name which may introduce conflicts with other add-ins."),(0,o.kt)("p",null,"It is recommended to set the ",(0,o.kt)("em",{parentName:"p"},"Embed Interop Types")," option to ",(0,o.kt)("em",{parentName:"p"},"False")," for the interop otherwise the add-in may misbehave."),(0,o.kt)("h3",{id:"framework-20-or-older"},"Framework 2.0 or older"),(0,o.kt)("p",null,"Newer versions of SOLIDWORKS PDM do not provide the interop compatible with .NET Framework 2.0 or older. So it is required to generate this interop from the type library (",(0,o.kt)("em",{parentName:"p"},"EdmInterface.dll"),")."),(0,o.kt)("p",null,"Either add this reference directly to your project (usually ",(0,o.kt)("em",{parentName:"p"},"C:\\Program Files\\SOLIDWORKS PDM\\EdmInterface.dll"),"), this will generate the ",(0,o.kt)("em",{parentName:"p"},"Interop.EdmLib.dll")," in the bin folder after rebuild which you can reference by other projects."),(0,o.kt)("p",null,"Or alternatively use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/framework/tools/tlbimp-exe-type-library-importer"},"tlbim.exe")," utility to generate the interop using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> TlbImp.exe "EdmInterface.dll" "/out:Interop.EdmLib.dll" /namespace:EdmLib\n')))}m.isMDXComponent=!0}}]);