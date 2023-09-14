"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[25802],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>h});var r=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,r,a=function(t,e){if(null==t)return{};var o,r,a={},n=Object.keys(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var o=t.components,a=t.mdxType,n=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(o),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||n;return o?r.createElement(h,i(i({ref:e},u),{},{components:o})):r.createElement(h,i({ref:e},u))}));function h(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=o.length,i=new Array(n);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:a,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1039:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=o(87462),a=(o(67294),o(3905));const n={title:"Run SOLIDWORKS macro automatically on application start",caption:"Run Macro On SOLIDWORKS Start",description:"Setting up to run macro automatically once SOLIDWORKS application loads",image:"shortcut-with-macro-run.png",labels:["macro","auto run"]},i=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-macro-on-solidworks-start/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-macro-on-solidworks-start/index",title:"Run SOLIDWORKS macro automatically on application start",description:"Setting up to run macro automatically once SOLIDWORKS application loads",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-macro-on-solidworks-start/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-macro-on-solidworks-start",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-macro-on-solidworks-start/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-macro-on-solidworks-start/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-macro-on-solidworks-start/index.md",tags:[],version:"current",frontMatter:{title:"Run SOLIDWORKS macro automatically on application start",caption:"Run Macro On SOLIDWORKS Start",description:"Setting up to run macro automatically once SOLIDWORKS application loads",image:"shortcut-with-macro-run.png",labels:["macro","auto run"]},sidebar:"tutorialSidebar",previous:{title:"Run VBA and VSTA macros in SOLIDWORKS",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run/"},next:{title:"Fix failed SOLIDWORKS VSTA (C# or VB.NET) macro",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-vsta-macro-error/"}},c={},l=[{value:"Settings up the shortcut to start SOLIDWORKS and run the macro",id:"settings-up-the-shortcut-to-start-solidworks-and-run-the-macro",level:2}],u={toc:l},p="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In some cases it might be required to automatically run macro when SOLIDWORKS starts. For example some logging needs to be done or settings applied."),(0,a.kt)("p",null,"Fortunately, SOLIDWORKS application accepts command line parameter ",(0,a.kt)("em",{parentName:"p"},"/m")," which will run the specified macro automatically."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},'"Path to SLDWORKS.exe" /m "Path to a macro"\n')),(0,a.kt)("h2",{id:"settings-up-the-shortcut-to-start-solidworks-and-run-the-macro"},"Settings up the shortcut to start SOLIDWORKS and run the macro"),(0,a.kt)("p",null,"The most common option to utilize this functionality would be to specify the path to a macro directly in the SOLIDWORKS shortcut on your Windows Desktop. In this case the macro will be run automatically when you are clicking the SOLIDWORKS application shortcut icon (usual routine). Follow the steps below for the instructions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows OS allows to specify command line arguments in the ",(0,a.kt)("em",{parentName:"li"},"Target")," field of the shortcut options. The default shortcut has this option disabled and it cannot be changed.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Default options of SOLIDWORKS shortcut",src:o(3838).Z,width:"495",height:"626"}),"{ width=350 }"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove the default SOLIDWORKS shortcut"),(0,a.kt)("li",{parentName:"ul"},"Navigate to SOLIDWORKS installation folder (usually ",(0,a.kt)("em",{parentName:"li"},"C:\\Program Files\\SOLIDWORKS Corp\\SOLIDWORKS"),")."),(0,a.kt)("li",{parentName:"ul"},"Find the ",(0,a.kt)("em",{parentName:"li"},"SLDWORKS.EXE")," file."),(0,a.kt)("li",{parentName:"ul"},"Select the file and click Right Mouse Button. Select ",(0,a.kt)("em",{parentName:"li"},"Send To"),"->",(0,a.kt)("em",{parentName:"li"},"Desktop (create shortcut)"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SOLIDWORKS.exe file location",src:o(24430).Z,width:"1033",height:"859"}),"{ width=550 }"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shortcut is added to desktop. Rename as required (pin to task bar if needed)."),(0,a.kt)("li",{parentName:"ul"},"Select the shortcut icon, click Right Mouse Button and select ",(0,a.kt)("em",{parentName:"li"},"Options")," command"),(0,a.kt)("li",{parentName:"ul"},"Add the following text after the path to SLDWORKS.EXE in the ",(0,a.kt)("em",{parentName:"li"},"target")," field:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},'/m "Full Path To Macro" \n')),(0,a.kt)("p",null,"If you macro path contains an empty space, enclose the path into double quotes."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},'"C:\\Program Files\\SOLIDWORKS Corp\\SOLIDWORKS\\SLDWORKS.EXE" /m "C:\\My Macros\\Macro1.swb"\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shortcut with macro path",src:o(16684).Z,width:"628",height:"676"}),"{ width=450 }"),(0,a.kt)("p",null,"Use this shortcut to start SOLIDWORKS. Specified macro will be run automatically."))}m.isMDXComponent=!0},3838:(t,e,o)=>{o.d(e,{Z:()=>r});const r=o.p+"assets/images/default-shortcut-options-2594f2b543927c0c49311ba1c78dcc55.png"},16684:(t,e,o)=>{o.d(e,{Z:()=>r});const r=o.p+"assets/images/shortcut-with-macro-run-9d3a6432329a48d29f56239da9d4cb90.png"},24430:(t,e,o)=>{o.d(e,{Z:()=>r});const r=o.p+"assets/images/sldworks-exe-location-7b820554332fde324101df638553d544.png"}}]);