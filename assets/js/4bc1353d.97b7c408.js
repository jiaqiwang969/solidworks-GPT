"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[37211],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>f});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),l=function(e){var o=r.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},p=function(e){var o=l(e.components);return r.createElement(c.Provider,{value:o},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},u=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),u=n,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(f,s(s({ref:o},p),{},{components:t})):r.createElement(f,s({ref:o},p))}));function f(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var c in o)hasOwnProperty.call(o,c)&&(i[c]=o[c]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88036:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(87462),n=(t(67294),t(3905));const a={title:"Application frame customization using SOLIDWORKS API",caption:"Frame",description:"Automating SOLIDWORKS frame (menu, toolbars, command manager) using API",labels:["frame","menu","toolbar","commands"]},s=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/index",title:"Application frame customization using SOLIDWORKS API",description:"Automating SOLIDWORKS frame (menu, toolbars, command manager) using API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/index.md",tags:[],version:"current",frontMatter:{title:"Application frame customization using SOLIDWORKS API",caption:"Frame",description:"Automating SOLIDWORKS frame (menu, toolbars, command manager) using API",labels:["frame","menu","toolbar","commands"]},sidebar:"tutorialSidebar",previous:{title:"Example to format portions of the note text with different formats",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/format-note-text/"},next:{title:"VBA macro to capture SOLIDWORKS commands via API event handlers",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/capture-commands/"}},c={},l=[],p={toc:l},m="wrapper";function d(e){let{components:o,...t}=e;return(0,n.kt)(m,(0,r.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Elements displayed in the SOLIDWORKS application frame, such as menu, command manager and tabs, toolbars can be customized using ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFrame.html"},"IFrame")," and ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISldWorks.html"},"ISldWorks")," SOLIDWORKS API Interfaces."),(0,n.kt)("p",null,"In addition frame object provides the access to SOLIDWORKS windows handler via ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iframe~gethwnd.html"},"IFrame::GetHWnd")," method which enables the usage of ",(0,n.kt)("a",{parentName:"p",href:"https://blog.codestack.net/2019/03/solidworks-api-command-doesnt-exist.html"},"Windows API to invoke SOLIDWORKS commands"),"."),(0,n.kt)("p",null,"This section contains examples of using SOLIDWORKS API and Windows API to automate application frame."))}d.isMDXComponent=!0}}]);