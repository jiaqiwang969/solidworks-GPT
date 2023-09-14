"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[44131],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>h});var i=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,i,t=function(e,r){if(null==e)return{};var n,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=i.createContext({}),c=function(e){var r=i.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},d=function(e){var r=c(e.components);return i.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=t,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?i.createElement(h,s(s({ref:r},d),{},{components:n})):i.createElement(h,s({ref:r},d))}));function h(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[u]="string"==typeof e?e:t,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58672:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(87462),t=(n(67294),n(3905));const o={layout:"sw-addin-fix",title:"How to fix the error of SOLIDWORKS add-ins sharing common libraries",caption:"Add-ins which are using shared libraries cannot work together",description:"Fixing the issue of using different versions of shared library by enabling binding redirect",labels:["add-in","troubleshooting","shared library"]},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/shared-library-conflict/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/shared-library-conflict/index",title:"How to fix the error of SOLIDWORKS add-ins sharing common libraries",description:"Fixing the issue of using different versions of shared library by enabling binding redirect",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/shared-library-conflict/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/shared-library-conflict",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/shared-library-conflict/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/shared-library-conflict/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/shared-library-conflict/index.md",tags:[],version:"current",frontMatter:{layout:"sw-addin-fix",title:"How to fix the error of SOLIDWORKS add-ins sharing common libraries",caption:"Add-ins which are using shared libraries cannot work together",description:"Fixing the issue of using different versions of shared library by enabling binding redirect",labels:["add-in","troubleshooting","shared library"]},sidebar:"tutorialSidebar",previous:{title:"Fix missing Visual Studio SOLIDWORKS API SDK project templates",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/sdk-installation/"},next:{title:"Macro for extended advanced selections using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/advanced-selection/"}},l={},c=[{value:"Symptoms",id:"symptoms",level:2},{value:"Cause",id:"cause",level:2},{value:"Resolution",id:"resolution",level:2}],d={toc:c},u="wrapper";function p(e){let{components:r,...n}=e;return(0,t.kt)(u,(0,i.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"symptoms"},"Symptoms"),(0,t.kt)("p",null,"There are several SOLIDWORKS add-ins (usually from the same supplier) which cannot work together. SOLIDWORKS may crash or misbehave. Add-ins are working correctly if loaded independently."),(0,t.kt)("h2",{id:"cause"},"Cause"),(0,t.kt)("p",null,"When same library (even of different versions) are used by different projects within the same application domain (e.g. add-in in SOLIDWORKS) .NET framework will use the cached library. The cached library will be the one which is accessed first. For example the library can be accessed when add-in button is clicked."),(0,t.kt)("p",null,"This results in the issues when library is not backward and forward compatible (i.e. version is supported by both newer and older applications). This is usually not the case for the libraries as behaviour may be changed, bugs fixed or regression issues introduced in the newer versions of library."),(0,t.kt)("p",null,"This introduces the possible conflicts when resolving the assembly references."),(0,t.kt)("h2",{id:"resolution"},"Resolution"),(0,t.kt)("p",null,"Sign conflicting assembly with a ",(0,t.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/framework/app-domains/how-to-sign-an-assembly-with-a-strong-name"},"strong name"),". In this cases version specific assemblies will be used which will resolve conflict."),(0,t.kt)("p",null,"Hoverer, it might be the case where main project A refers the shared dll B with version 1 and also refers dll C which refers dll B with version 2, which means that it is required to have version 1 and 2 of B loaded at the same time. As dlls are usually compiled in the same directory it is either required to add them to different folders or use ",(0,t.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/framework/configure-apps/file-schema/runtime/bindingredirect-element"},"Binding Redirect")," element to redirect different versions of the shared library:"),(0,t.kt)("p",null,"Add the following snippet to ",(0,t.kt)("strong",{parentName:"p"},"app.config")," file:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<configuration>\n    <runtime>\n        <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">\n            <dependentAssembly>\n                <assemblyIdentity name="[Assembly Name]" publicKeyToken="[Public Key Token]" culture="neutral" />\n                <bindingRedirect oldVersion="0.0.0.0-9999.9999.9999.9999" newVersion="[Current Version]" />\n            </dependentAssembly>\n        </assemblyBinding>\n    </runtime>\n</configuration>\n')),(0,t.kt)("p",null,"You can use the following snippet to find the required identity information (i.e. assembly name, version, public key token and culture) from the shared library."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cs"},"System.Diagnostics.Debug.Print(typeof([Any type from the shared assembly]).Assembly.FullName);\n")),(0,t.kt)("p",null,"This will be printed as "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"[Assembly Name], Version=[Version], Culture=[Culture], PublicKeyToken=[Public Key Token]\n")),(0,t.kt)("p",null,"Video Demonstration: "),(0,t.kt)("p",null,"{% youtube { id: ZeWDoJ5TC7o } %}"),(0,t.kt)("p",null,"Be aware of backward compatibility when using binding redirect, i.e. redirecting from version 1 to 2 requires backward compatibility, otherwise this solution will not work."),(0,t.kt)("p",null,"If shared assembly is not signed with a strong name it is possible to resolve the conflict at runtime by capturing the ",(0,t.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.appdomain.assemblyresolve?view=netframework-4.8"},"AppDomain::AssemblyResolve")," event and returning the resolved assembly from the method handler."))}p.isMDXComponent=!0}}]);