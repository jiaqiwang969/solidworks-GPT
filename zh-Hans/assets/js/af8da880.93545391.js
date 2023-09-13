"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[37953],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),g=n,u=c["".concat(l,".").concat(g)]||c[g]||m[g]||i;return r?a.createElement(u,o(o({ref:t},d),{},{components:r})):a.createElement(u,o({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},82535:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Getting started: Developing applications with SOLIDWORKS API",caption:"Getting Started",description:"Detailed guides of getting started with developing applications for SOLIDWORKS via API",image:"solidworks-api-getting-started.png",order:1},o=void 0,s={unversionedId:"codestack/solidworks-api/getting-started/index",id:"codestack/solidworks-api/getting-started/index",title:"Getting started: Developing applications with SOLIDWORKS API",description:"Detailed guides of getting started with developing applications for SOLIDWORKS via API",source:"@site/docs/codestack/solidworks-api/getting-started/index.md",sourceDirName:"codestack/solidworks-api/getting-started",slug:"/codestack/solidworks-api/getting-started/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/index.md",tags:[],version:"current",frontMatter:{title:"Getting started: Developing applications with SOLIDWORKS API",caption:"Getting Started",description:"Detailed guides of getting started with developing applications for SOLIDWORKS via API",image:"solidworks-api-getting-started.png",order:1},sidebar:"tutorialSidebar",previous:{title:"Untrim face or surface with temporary geometry using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/untrim-surface/"},next:{title:"How to develop add-ins for SOLIDWORKS automation via API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/add-ins/"}},l={},p=[{value:"References For .NET Projects",id:"references-for-net-projects",level:2},{value:"COM Type Libraries",id:"com-type-libraries",level:3},{value:"Primary Interop Assemblies (PIA)",id:"primary-interop-assemblies-pia",level:3},{value:"Differences",id:"differences",level:3},{value:"Best Practices",id:"best-practices",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Getting started with SOLIDWORKS API",src:r(45927).Z,width:"796",height:"472"}),"{ width=400 }"),(0,n.kt)("p",null,"SOLIDWORKS API can be used in any COM-compatible language (i.e. C++, C#, VB.NET and Visual Basic). There are different types of applications which can be developed using the SOLIDWORKS API. Please refer the comparison table below for selecting the right type of the application which suits the requirements."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:"center"},"VBA Macros"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Add-ins"),(0,n.kt)("th",{parentName:"tr",align:"center"},"VSTA Macros"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Stand-Alones"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Scripts"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Easy to start"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Average time spent for a not experienced user to start a solution")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Easy To Deploy"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No (should be easy but in practice usually a lot of problems)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Time spent to make your software work on another machines")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Protected Code"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No (only password protection)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes (binaries)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes (binaries)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes (binaries)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"A ways to IP protect your code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Scope of available Utility Libraries"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No (only obsolete VB6 libraries)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Availability of utility functions for working with Databases, Files, XML etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Scope of available SolidWorks functions"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Limited"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Full"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Limited"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Limited"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Limited"),(0,n.kt)("td",{parentName:"tr",align:null},"Some interfaces will only operate within the add-in such as the ones from SWPublished library")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Reliability"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No (usually the problems with missed libraries etc)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"How much the solution is reliable across the SoldiWorks versions and PC workstations.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Debugging"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Easy (out of process)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Complicated (in-process). Slow to restart because requiring to restart add-in/SolidWorks"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Complicated (in-process)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Easy (out of process)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"For in-process applications it is not possible to see and change SolidWorks at runtime from UI.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Requirement of additional software"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Development IDE required"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No (Yes for SW 2018)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Development IDE required"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Development IDE usually consist of code text editor and compiler (e.g Visual Studio, Eclipse, CBuilder etc.)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"User Friendly for the beginners"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Performance"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Normal"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Good"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Good"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Normal"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Normal"),(0,n.kt)("td",{parentName:"tr",align:null},"Operating performance")))),(0,n.kt)("h2",{id:"references-for-net-projects"},"References For .NET Projects"),(0,n.kt)("p",null,"SOLIDWORKS is a COM based application so when using SOLIDWORKS API from .NET applications it is required to add the assembly interops to enable the communication with COM."),(0,n.kt)("p",null,"There are 2 general ways of generating the the required type libraries"),(0,n.kt)("h3",{id:"com-type-libraries"},"COM Type Libraries"),(0,n.kt)("p",null,"By adding the reference to Type Library (*.tlb) files directly to the .NET project (sldworks.tlb, swconst.tlb, swpublished.tlb). This can be done either by browsing the corresponding type library file or by finding the registered reference in the COM tab. These steps are equivalent of using the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/framework/tools/tlbimp-exe-type-library-importer"},"tlbimp")," utility as Visual Studio will convert type library to interop in the background."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Adding the references from COM tab",src:r(45444).Z,width:"875",height:"313"})),(0,n.kt)("p",null,"As the result, the converted .NET interop equivalent is used in the project"),(0,n.kt)("h3",{id:"primary-interop-assemblies-pia"},"Primary Interop Assemblies (PIA)"),(0,n.kt)("p",null,"By adding the interop assemblies shipped with SOLIDWORKS installation (SolidWorks.Interop.sldworks.dll, SolidWorks.Interop.swconst.dll, SolidWorks.Interop.swpublished.dll). Those types of interops are called Primary Interop Assemblies (PIA). Interop libraries are located at ",(0,n.kt)("strong",{parentName:"p"},"SOLIDWORKS Installation Folder"),"\\api\\redist for projects targeting Framework 4.0 onwards and ",(0,n.kt)("strong",{parentName:"p"},"SOLIDWORKS Installation Folder"),"\\api\\redist\\CLR2 for projects targeting Framework 2.0 and 3.5."),(0,n.kt)("p",null,"For projects targeting Framework 4.0 I recommend to set the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/dotnet/framework/interop/type-equivalence-and-embedded-interop-types"},"Embed Interop Types"))," option to ",(0,n.kt)("em",{parentName:"p"},"False"),".\nOtherwise it is possible to have unpredictable behaviour of the application when calling the SOLIDWORKS API due to a type cast issue, however this happens in rare circumstances.  "),(0,n.kt)("h3",{id:"differences"},"Differences"),(0,n.kt)("p",null,"One of the differences is different names and namespaces. For interops generated from type libraries default namespace is ",(0,n.kt)("em",{parentName:"p"},"SldWorks"),", ",(0,n.kt)("em",{parentName:"p"},"SWPublished"),", etc (it is possible to change the default namespace by using ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/framework/tools/tlbimp-exe-type-library-importer"},"tlbimp")," utility), while ",(0,n.kt)("em",{parentName:"p"},"SldWorks.Interop")," prefix in namespace names is used in other case."),(0,n.kt)("p",null,"But there is another major difference. "),(0,n.kt)("p",null,"Interops, generated from COM type libraries are not ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/assembly/create-use-strong-named"},"strong named"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"No strong names for interops generated from type libraries",src:r(5386).Z,width:"428",height:"504"})),(0,n.kt)("p",null,"While interops shipped with SOLIDWORKS installation (PIA) are ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/assembly/create-use-strong-named"},"strong named"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Strong names of assembly interops",src:r(47259).Z,width:"436",height:"538"})),(0,n.kt)("p",null,"There will be almost no difference if you are building ",(0,n.kt)("a",{parentName:"p",href:"stand-alone"},"out-of-process stand-alone")," applications (unless your *.exe supports plugins mechanism and can load libraries which reference SOLIDWORKS interops), but it can cause major issues for ",(0,n.kt)("a",{parentName:"p",href:"add-ins"},"in-process add-in")," applications if multiple add-ins refer different versions of unsigned (not strong named) interops. Similar issue is demonstrated in ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ZeWDoJ5TC7o"},"this YouTube video")),(0,n.kt)("h3",{id:"best-practices"},"Best Practices"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use Primary Interop Assemblies (PIA) shipped with installation and avoid using the COM type libraries"),(0,n.kt)("li",{parentName:"ul"},"Do not refer the interops directly from installation folder. This would not allow compilation of the project on other computers where Interops are not placed in the same directory or not added to the GAC. In particular this would prevent implementing ",(0,n.kt)("a",{parentName:"li",href:"https://blog.xarial.com/ci-cd/"},"Continuous Integration/Continuous Delivery (CI/CD)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Instead place the interops onto the ",(0,n.kt)("a",{parentName:"li",href:"https://www.nuget.org/"},"NuGet Server")," and add this as the package. You can use either in-house hosted server or use a public one."),(0,n.kt)("li",{parentName:"ul"},"If the above option is not possible, then add the libraries in the same folder as the project (e.g. create folder ",(0,n.kt)("em",{parentName:"li"},"thirdpty")," next to the solution *.sln file and copy interops in there) and browse the interops from this folder to add relative path references.")))))}m.isMDXComponent=!0},5386:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/com-strong-name-false-cb4fece82c9daea82dc4ee74bcbdb082.png"},45444:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/com-tab-references-534b4ff5b4c36eb7874a12ac71e841c2.png"},47259:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/net-strong-name-true-43f4f0ec1b9353c53c2a5a5fcfba4f19.png"},45927:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/solidworks-api-getting-started-92bdf6c9855d7b5b3a26aee73c216b58.png"}}]);