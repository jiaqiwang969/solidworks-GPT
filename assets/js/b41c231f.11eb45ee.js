"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[15345],{3905:(e,A,t)=>{t.d(A,{Zo:()=>c,kt:()=>d});var o=t(67294);function a(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function r(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);A&&(o=o.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?r(Object(t),!0).forEach((function(A){a(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function n(e,A){if(null==e)return{};var t,o,a=function(e,A){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],A.indexOf(t)>=0||(a[t]=e[t]);return a}(e,A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),l=function(e){var A=o.useContext(s),t=A;return e&&(t="function"==typeof e?e(A):i(i({},A),e)),t},c=function(e){var A=l(e.components);return o.createElement(s.Provider,{value:A},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var A=e.children;return o.createElement(o.Fragment,{},A)}},p=o.forwardRef((function(e,A){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),u=l(t),p=a,d=u["".concat(s,".").concat(p)]||u[p]||f[p]||r;return t?o.createElement(d,i(i({ref:A},c),{},{components:t})):o.createElement(d,i({ref:A},c))}));function d(e,A){var t=arguments,a=A&&A.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var n={};for(var s in A)hasOwnProperty.call(A,s)&&(n[s]=A[s]);n.originalType=e,n[u]="string"==typeof e?e:a,i[1]=n;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},75888:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>n,toc:()=>l});var o=t(87462),a=(t(67294),t(3905));const r={title:"SwEx.MacroFeature - advanced framework for SOLIDWORKS macro feature",caption:"SwEx.MacroFeature",description:"Framework for simplified development of custom macro features using SOLIDWORKS API","toc-group-name":"labs-solidworks-swex",sidebar_position:0},i=void 0,n={unversionedId:"codestack-clone/labs/solidworks/swex/macro-feature/index",id:"codestack-clone/labs/solidworks/swex/macro-feature/index",title:"SwEx.MacroFeature - advanced framework for SOLIDWORKS macro feature",description:"Framework for simplified development of custom macro features using SOLIDWORKS API",source:"@site/docs/codestack-clone/labs/solidworks/swex/macro-feature/index.md",sourceDirName:"codestack-clone/labs/solidworks/swex/macro-feature",slug:"/codestack-clone/labs/solidworks/swex/macro-feature/",permalink:"/solidworks-GPT/docs/codestack-clone/labs/solidworks/swex/macro-feature/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/labs/solidworks/swex/macro-feature/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"SwEx.MacroFeature - advanced framework for SOLIDWORKS macro feature",caption:"SwEx.MacroFeature",description:"Framework for simplified development of custom macro features using SOLIDWORKS API","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Localizing SOLIDWORKS add-ins using SwEx framework",permalink:"/solidworks-GPT/docs/codestack-clone/labs/solidworks/swex/localization/"},next:{title:"Storing data (parameters, bodies, selection) in SOLIDWORKS macro feature",permalink:"/solidworks-GPT/docs/codestack-clone/labs/solidworks/swex/macro-feature/data/"}},s={},l=[{value:"What is macro feature?",id:"what-is-macro-feature",level:2}],c={toc:l},u="wrapper";function f(e){let{components:A,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:A,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SwEx.MacroFeature framework for SOLIDWORKS",src:t(92988).Z,width:"128",height:"128"})),(0,a.kt)("p",null,"SwEx.MacroFeature provides utilities for simplified development of SOLIDWORKS macro features based on the data model."),(0,a.kt)("p",null,"{% youtube { id: 3qLUvlFZIek } %}"),(0,a.kt)("p",null,"Source code is available on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/swex-macrofeature"},"GitHub")),(0,a.kt)("h2",{id:"what-is-macro-feature"},"What is macro feature?"),(0,a.kt)("p",null,"Macro feature is a custom element which could be added into Feature Manager Design tree using SOLIDWORKS API. This element will behave in exactly the same way as any other standard feature (e.g. Boss-Extrude, Move-Copy Body, Mate, etc.)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Macro feature in the feature manager tree",src:t(86259).Z,width:"277",height:"176"}),"{ width=250 }"),(0,a.kt)("p",null,"Macro feature supports parametric nature of SOLIDWORKS and could regenerate if any of the parents changed."),(0,a.kt)("p",null,"Macro feature provides 3 main handlers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Regeneration - called when feature is rebuilt (either as a result of model force rebuild operation or as a result of the updated of any of the dependencies). Macro feature can create new body or bodies or be only a metadata element."),(0,a.kt)("li",{parentName:"ul"},"Edit - called when feature definition is requested to be edited by the user"),(0,a.kt)("li",{parentName:"ul"},"State update - called every time state is updated (i.e. feature is selected, refreshed etc.)")),(0,a.kt)("p",null,"Macro feature can store additional metadata parameters (including dimensions and selection references)."))}f.isMDXComponent=!0},86259:(e,A,t)=>{t.d(A,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARUAAACwCAMAAAAWlgo5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAALeoFAAAVbD3sIoAAyRsimOwsMLCxWxsbO0cJENDQwA3VaeoqDAAAJ9zCKtoacO5XQBVlyYOoff39+fkztfSpZdVAB4eHoPE0DB3touwi5WVlQAwdzAAMK+vr3WOm2MAY0yWtNT31DAAVfb21Pb2sHcwAGOw9wAAOJebpvewixxVcos4Y9SLOMbGyjg4Y1UAMM/P0TCSpYuw97bU1H9/f7BjADiL1PewY9vx9ZzS6O/u5PHx8ujo6ezs7O/v71UAAJjo+JksLKOjo16w0gBjsL2wL7Z3MMvT5W+Xqotji1FRUV1dXWdmZp+4u2NjAMrEf1WX1AhAXTaOxAA4i7q6usHP1iMzPJ2dnYsfAjF3leDS0jg4i3W21BtIYdSLY1alxdPT1N3h5UJWZtDLnJBPIXJycs7Y3GWnxU+Dn+Xl5eri4t/f4OLi4qepvL+vFIqKioHT4ovUsLKGhsvLzStEU7DUiwAAY+re3tS2d66dCzE5PdfX13fP4Nbb3qCksDhjsNna259ERE+cvGGGkM3HkouLY2msyvfUi9T392qjwTZujCRXc3d3d7CLOLWsQwBji7aXVQpKaC9OYLD399XV2KWYHq1iYjx2lJ0EBJbT08i3FILL6Ys4AISFm0lJSVycunS72FRzhLD31NSwY6q8xQ48VkyNqGMAAG600i0tLdTUtkVkddSXVZugpDiLsGJhYWansrusJYmfrEVqfos4OHp6erO1uLy9vzgAOHiqvypifzhaZrOlHEV9mz2HpYvU95K2xzIyMrKyslGLqVqpyYoOAZVgL87KjGScur3K0afb8BdPbbuvPFWTscK3IGywzqZMTLuuGXm924ODgwQ8WRNDXdTTlmGiwGW63ISQlzg4OMO7alJia2N4g7Z3VXZ6famfHQAAAL6zSqurq8OzFNC/FnCsyi1qh8W1FrusEXefvTgAAGMAOBZaeDgAYyUlJTx8mpw5Oc3N0FmWtFOQro3J4S9TZwxFYnm00mKuzpMEBSJdejFedn3F4wAAAOgtoeIAAAEAdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A/////////////////////////////////////wBm1e7BAAAACXBIWXMAAA7DAAAOwwHHb6hkAAASZ0lEQVR4Xu2dD3wb5XnHlW2pMl3YYNempaKh7eSYjlmrW/ynzJboREiZko5mMXNTwtDaeqnQNW6rNgvz6ATtIkjFNpMwglH+dIM4UErWdk620JTKSVsoZIGIklb0Tz6x+dNmBOpkpE2Wz57neZ873Ukn2ZLOss7c74Pu3nve9y56vn7e907vo1e45NexvLLcFQx0J1CbIhN+tyxnqcKh4lApkEPFTA4VM1lDJTgRyi4Lh+f1jybYYm9ZQSXgDWdDo/FYLN7TO2/pGFvtLAuoJMJjAS6CIt4++8eLBVTm9dCu6/H/uxZ3wd3z6NjOsoDK0oW47b74mUuvfxwupoyEyQxqcblcazfygUHtUONazAdmau/ggkEtlzzKpelV5VR28V5TODviVy7+wavbpf3Lv97a09bmEXZfGol0NosjUOeK27gktwORpmFTz4VMqSRz/9mwVAqxeGK9bY+8uPrec9Lh2ze81jYqM5WWPAShAirFDXQyo+JLv+F/GpdKARZPMBCT7r333GHpVy+8IKGBzE3DHCVN6EryxEbsNWqnEVRo43JBt9AoYafDMlDR26jntCymS9VBVVExYvEEoop07vD2ndILtz+Wp9KpjigqlcJYSWJ3QK+hJVb50s1yC5zkS0MlUNFsogleoqGpcInliSox6fD2Q+ul2x87KcHlpkIFQgKPqA5cx73mNbYFKnobNEFAon76Zcm4khiQdq5ffUQ6eWq/BBcrR6VpmG5LECvUwzrxXuRyNSMF6FDiHDwBxxW2cRPsbw1MhfeaPIlIRFp/ZNtJaf8n9kmBbkVQoQ6CMlBhYQ9CBBq6zhXvhFgwUtHbIFoEnTL3LetUOZUieSITcenItoP7pX377pagOwkqNDygiAohMFLx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"},92988:(e,A,t)=>{t.d(A,{Z:()=>o});const o="data:image/png;base64,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"}}]);