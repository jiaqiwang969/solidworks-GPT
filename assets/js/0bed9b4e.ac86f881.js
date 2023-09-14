"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[46833],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>h});var a=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,a,r=function(t,e){if(null==t)return{};var o,a,r={},n=Object.keys(t);for(a=0;a<n.length;a++)o=n[a],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)o=n[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var o=t.components,r=t.mdxType,n=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(o),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||n;return o?a.createElement(h,i(i({ref:e},u),{},{components:o})):a.createElement(h,i({ref:e},u))}));function h(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},80508:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=o(87462),r=(o(67294),o(3905));const n={title:"Run SOLIDWORKS macro automatically on application start",caption:"Run Macro On SOLIDWORKS Start",description:"Setting up to run macro automatically once SOLIDWORKS application loads",image:"shortcut-with-macro-run.png",labels:["macro","auto run"]},i=void 0,s={unversionedId:"codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start/index",id:"codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start/index",title:"Run SOLIDWORKS macro automatically on application start",description:"Setting up to run macro automatically once SOLIDWORKS application loads",source:"@site/docs/codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start/index.md",sourceDirName:"codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start",slug:"/codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start/index.md",tags:[],version:"current",frontMatter:{title:"Run SOLIDWORKS macro automatically on application start",caption:"Run Macro On SOLIDWORKS Start",description:"Setting up to run macro automatically once SOLIDWORKS application loads",image:"shortcut-with-macro-run.png",labels:["macro","auto run"]},sidebar:"tutorialSidebar",previous:{title:"Run VBA and VSTA macros in SOLIDWORKS",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/macros/run/"},next:{title:"How to develop add-ins for SOLIDWORKS automation via API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/add-ins/"}},l={},c=[{value:"Settings up the shortcut to start SOLIDWORKS and run the macro",id:"settings-up-the-shortcut-to-start-solidworks-and-run-the-macro",level:2}],u={toc:c},p="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In some cases it might be required to automatically run macro when SOLIDWORKS starts. For example some logging needs to be done or settings applied."),(0,r.kt)("p",null,"Fortunately, SOLIDWORKS application accepts command line parameter ",(0,r.kt)("em",{parentName:"p"},"/m")," which will run the specified macro automatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},'"Path to SLDWORKS.exe" /m "Path to a macro"\n')),(0,r.kt)("h2",{id:"settings-up-the-shortcut-to-start-solidworks-and-run-the-macro"},"Settings up the shortcut to start SOLIDWORKS and run the macro"),(0,r.kt)("p",null,"The most common option to utilize this functionality would be to specify the path to a macro directly in the SOLIDWORKS shortcut on your Windows Desktop. In this case the macro will be run automatically when you are clicking the SOLIDWORKS application shortcut icon (usual routine). Follow the steps below for the instructions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows OS allows to specify command line arguments in the ",(0,r.kt)("em",{parentName:"li"},"Target")," field of the shortcut options. The default shortcut has this option disabled and it cannot be changed.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Default options of SOLIDWORKS shortcut",src:o(75809).Z,width:"495",height:"626"}),"{ width=350 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove the default SOLIDWORKS shortcut"),(0,r.kt)("li",{parentName:"ul"},"Navigate to SOLIDWORKS installation folder (usually ",(0,r.kt)("em",{parentName:"li"},"C:\\Program Files\\SOLIDWORKS Corp\\SOLIDWORKS"),")."),(0,r.kt)("li",{parentName:"ul"},"Find the ",(0,r.kt)("em",{parentName:"li"},"SLDWORKS.EXE")," file."),(0,r.kt)("li",{parentName:"ul"},"Select the file and click Right Mouse Button. Select ",(0,r.kt)("em",{parentName:"li"},"Send To"),"->",(0,r.kt)("em",{parentName:"li"},"Desktop (create shortcut)"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SOLIDWORKS.exe file location",src:o(38341).Z,width:"1033",height:"859"}),"{ width=550 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shortcut is added to desktop. Rename as required (pin to task bar if needed)."),(0,r.kt)("li",{parentName:"ul"},"Select the shortcut icon, click Right Mouse Button and select ",(0,r.kt)("em",{parentName:"li"},"Options")," command"),(0,r.kt)("li",{parentName:"ul"},"Add the following text after the path to SLDWORKS.EXE in the ",(0,r.kt)("em",{parentName:"li"},"target")," field:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},'/m "Full Path To Macro" \n')),(0,r.kt)("p",null,"If you macro path contains an empty space, enclose the path into double quotes."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},'"C:\\Program Files\\SOLIDWORKS Corp\\SOLIDWORKS\\SLDWORKS.EXE" /m "C:\\My Macros\\Macro1.swb"\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shortcut with macro path",src:o(91898).Z,width:"628",height:"676"}),"{ width=450 }"),(0,r.kt)("p",null,"Use this shortcut to start SOLIDWORKS. Specified macro will be run automatically."))}d.isMDXComponent=!0},75809:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/default-shortcut-options-2594f2b543927c0c49311ba1c78dcc55.png"},91898:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/shortcut-with-macro-run-9d3a6432329a48d29f56239da9d4cb90.png"},38341:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/sldworks-exe-location-7b820554332fde324101df638553d544.png"}}]);