"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[81638],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>u});var a=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,a,r=function(e,o){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var o=a.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):n(n({},o),e)),t},p=function(e){var o=c(e.components);return a.createElement(s.Provider,{value:o},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},A=a.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),A=r,u=m["".concat(s,".").concat(A)]||m[A]||d[A]||i;return t?a.createElement(u,n(n({ref:o},p),{},{components:t})):a.createElement(u,n({ref:o},p))}));function u(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,n=new Array(i);n[0]=A;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[m]="string"==typeof e?e:r,n[1]=l;for(var c=2;c<i;c++)n[c]=t[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}A.displayName="MDXCreateElement"},87623:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={layout:"sw-macro-fix",title:"Fix invalid namespace in VSTA (C# or VB.NET) SOLIDWORKS macro",caption:"Invalid Namespace In VSTA (C# or VB.NET) Macro",description:"Fixing the compile error of VSTA macro when the code is copied from the example",image:"vsta-copy-example-compile-error.png",labels:["macro","troubleshooting","vsta"]},n=void 0,l={unversionedId:"codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/index",id:"codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/index",title:"Fix invalid namespace in VSTA (C# or VB.NET) SOLIDWORKS macro",description:"Fixing the compile error of VSTA macro when the code is copied from the example",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace",slug:"/codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"Fix invalid namespace in VSTA (C# or VB.NET) SOLIDWORKS macro",caption:"Invalid Namespace In VSTA (C# or VB.NET) Macro",description:"Fixing the compile error of VSTA macro when the code is copied from the example",image:"vsta-copy-example-compile-error.png",labels:["macro","troubleshooting","vsta"]},sidebar:"tutorialSidebar",previous:{title:"Fix too long SOLIDWORKS VBA macro line error",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/too-long-vba-macro-line/"},next:{title:"solidworks-pdm-api",permalink:"/solidworks-GPT/docs/category/solidworks-pdm-api"}},s={},c=[{value:"Symptoms",id:"symptoms",level:2},{value:"Cause",id:"cause",level:2},{value:"Resolution",id:"resolution",level:2}],p={toc:c},m="wrapper";function d(e){let{components:o,...i}=e;return(0,r.kt)(m,(0,a.Z)({},p,i,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"symptoms"},"Symptoms"),(0,r.kt)("p",null,"Example for SOLIDWORKS VSTA macro (C# or VB.NET) is copied from the SOLIDWORKS API Help documentation or from any source as a code. Number of compilation error are displayed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MacroName.SolidWorksMacro doesn't contain a definition for 'SwApp'"),(0,r.kt)("li",{parentName:"ul"},"The name 'Main' doesn't exist in the current context")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Compile error when code is copied from the example into the VSTA macro",src:t(67791).Z,width:"1039",height:"406"}),"{ width=450 }"),(0,r.kt)("h2",{id:"cause"},"Cause"),(0,r.kt)("p",null,"VSTA macro is based on multiple connected files which must reside in the same namespace. When new macro is created the namespace might not be equal to the one\nused in the example source code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"namespace MacroName.csproj\n{\n  ...\n}\n")),(0,r.kt)("h2",{id:"resolution"},"Resolution"),(0,r.kt)("p",null,"Change the namespace in the ",(0,r.kt)("em",{parentName:"p"},"SolidWorksMacro.cs")," file to match the default namespace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the project properties page")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"VSTA macro project properties",src:t(91750).Z,width:"288",height:"319"}),"{ width=250 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy the value in the ",(0,r.kt)("em",{parentName:"li"},"Default Namespace")," field of the ",(0,r.kt)("em",{parentName:"li"},"Application")," tab")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Default namespace of the VSTA project",src:t(19323).Z,width:"865",height:"390"}),"{ width=350 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rename the namespace to the copied value")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Renamed namespace to match the default namespace",src:t(55588).Z,width:"1261",height:"479"}),"{ width=500 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rebuild the macro")))}d.isMDXComponent=!0},55588:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/modified-namespace-68f302a143ae245f978fc04a3f9e4032.png"},19323:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/project-default-namespace-fd54e4d901ebe4c55e6d549fc9712e91.png"},91750:(e,o,t)=>{t.d(o,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAE/CAMAAADR3e78AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAFm9LAAsbvDBNe0cJG1tbTO8/445ADN/wQAAOf39/YKIkLWPOcG8/+/u5zAwMDkAANPZ5GTJMStDcniNtzOZ/ysAOQGWAaduLP21Zd/CeGxZjlyO8G6Y6wBaoRqjGurq6n/d/+rctIvDw5idodXRvtXw/bX9/Sxup0wAN/Ly8p2ou7q7sNra2v398Dk5AE6Lw25/l8OLTgA5ZSsAZWR1jAAAZYqNj8XM2+HO/8bFuLVlAPfvqYtOAJ7YnkZxPllmdjeIzlrO/8TCqLKysqeprTB+p6DO/8LK11OI8XR8h2Cr8Nrf6dmOOY+1/VVVVcDd/IyRmKnG4mW12mUAAIeXseXHcFmiU/zaj0FckSt92Ki41Ex+48LO5GW1tS5OJ+Pm7MK+jrvE1D5SbJutwsfHx2wxADOr/+qsCuHh4ZOhtuLGqbipuGUAOY7a/OXj2LLKsaDu/4KSqGy+/MDd2H9/f/zixgAyjjI1ZcCdjr+pqdr9/f392sCdZYuZrb+/wDpkurjU70WqIniDlGa6YLy8vJylqysAAM/PzwBltX+Z/6e/xDlQgCwsLJZUAOrt8ampxj1ARUtkprDB2FhfAEuHRABOixp/DTmPtd/s4s7h0Lu9wtLe9V+M5X6OqnnJedW4qT9sydLS0kJ13OTs+0lJSY9lj2yLyL7DyamtuZGpjeLf0qCgoDRJY5+9/8PDw6Xd/GYAZsjdytqPZTNYpkyd/K+5y8Dds7ipxllrg2SFxcvLy3SFnuH9/UhwvZimvbLL6cH///39tXmInqSyx42ctOry6qCr/yyQFpDb/0ZadPPRX1qY/mU5ADkAOZGRkX6k7WGyW7S2uKV9OZGam/394gBZs2yEoDhhMUwAAEyds2N7qq+vrtLJrKKtvf3v1cvR3N/s3bzI31SQTbW+z9q1ZebPlF9fX9XG1Tg4OD5Yi6ioqLW5vcrT5Z2jo2S1/W6nw4+ft4SWubXajzkAZYlZAAeYBwA5j8apuFN6yjmP2pWgqPDVuXuKodvk9gAAAFYexpcAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAWXElEQVR4Xu2dD5wU51nHtyo5GYxCCZ5oYjdKEjtkYqMGKKQmJpca4p05KqTXktiFsMS9Giw0YA2XLElcurTqNtA/IqDNcLWhQrdqSyVLenA5TKgR0gvRVgkQGq3xOM7EAoZ/H5/ned93dmb/zc7y7s7O7Ptt2J1539u7m29/7zt788zMRvTKpPizri9e/6EP/fefAJMn38WbOL3f3lEE68m/OrBUL6gWWkBQy6MEuaAEuaAEuaAEuRDZrqhIRCvLlJrgLw4NSpALSpALeUF//J3vfPCD3//c52655bvf/chHoIFvsUfYNwsPNkHvfOc73vH444+/8MILX/iCEiQoTtD3v/Kxr9yiBAnygob4s6adfk3fAU+wtVdrz7PN3quz5wrs1V7EJ/YtwoMQtAE4HtMzqKf9dMwS9F7c6Cm39bsJWq79ZsgF3XzzzX2vvat948b20+1/1ykE9Wufos13FTRlymXhFrTw5g0bMu0btb863f6P7e2WoPcuv5y2/WoQ9MCz0IgSboPny6csv3wv2MNlJi/kgoZ6NmhaOyxk2tvbX5tlCboNNxueQMJtMB8tx2fw8sBXIVWwjsvUGHpBS/5poXbxXRv7f/10+8faNy60BE3Z+zxE51MoCEELezFUoAWnJ+jFaOE4DLmggR8d0rWN7e0b9dN/oV+0CYL/wA4JwuGkvXgZm5ZgiKEUWiZNIRfU+3tL+l/as3lzZpvev3nzUF4QxGP58yQI9+NgoWUFDfRfvLh58507NixcuNAmaMrybthyEEQDCaakB55FHUwQW26JIda7o/fiVVdt2bKYl22gCbYWBV2G74VIEM5GYOFqiA1O0jgV4TKbjcIuCBRtPjZr8eLXUQ0Dt58mYkwO7b00bQwtXA0L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"},67791:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/vsta-copy-example-compile-error-525ba90a0c4bd53d26c3bb09c05632ff.png"}}]);