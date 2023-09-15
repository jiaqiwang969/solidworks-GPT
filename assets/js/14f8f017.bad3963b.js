"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[26153],{3905:(t,o,e)=>{e.d(o,{Zo:()=>p,kt:()=>m});var n=e(67294);function r(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}function a(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?a(Object(e),!0).forEach((function(o){r(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}function s(t,o){if(null==t)return{};var e,n,r=function(t,o){if(null==t)return{};var e,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)e=a[n],o.indexOf(e)>=0||(r[e]=t[e]);return r}(t,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)e=a[n],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var l=n.createContext({}),c=function(t){var o=n.useContext(l),e=o;return t&&(e="function"==typeof t?t(o):i(i({},o),t)),e},p=function(t){var o=c(t.components);return n.createElement(l.Provider,{value:o},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var o=t.children;return n.createElement(n.Fragment,{},o)}},f=n.forwardRef((function(t,o){var e=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(e),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return e?n.createElement(m,i(i({ref:o},p),{},{components:e})):n.createElement(m,i({ref:o},p))}));function m(t,o){var e=arguments,r=o&&o.mdxType;if("string"==typeof t||r){var a=e.length,i=new Array(a);i[0]=f;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=t,s[d]="string"==typeof t?t:r,i[1]=s;for(var c=2;c<a;c++)i[c]=e[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}f.displayName="MDXCreateElement"},75415:(t,o,e)=>{e.r(o),e.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=e(87462),r=(e(67294),e(3905));const a={caption:"Flash Toolbar Buttons",title:"Macro to highlight/flash specific buttons in SOLIDWORKS toolbar",description:"VBA macro demonstrates how to highlight/flash specific toolbar button by id in SOLIDWORKS toolbar",image:"flash-buttons.gif"},i=void 0,s={unversionedId:"codestack/solidworks-api/application/frame/flash-toolbar-buttons/index",id:"codestack/solidworks-api/application/frame/flash-toolbar-buttons/index",title:"Macro to highlight/flash specific buttons in SOLIDWORKS toolbar",description:"VBA macro demonstrates how to highlight/flash specific toolbar button by id in SOLIDWORKS toolbar",source:"@site/docs/codestack/solidworks-api/application/frame/flash-toolbar-buttons/index.md",sourceDirName:"codestack/solidworks-api/application/frame/flash-toolbar-buttons",slug:"/codestack/solidworks-api/application/frame/flash-toolbar-buttons/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/application/frame/flash-toolbar-buttons/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/application/frame/flash-toolbar-buttons/index.md",tags:[],version:"current",frontMatter:{caption:"Flash Toolbar Buttons",title:"Macro to highlight/flash specific buttons in SOLIDWORKS toolbar",description:"VBA macro demonstrates how to highlight/flash specific toolbar button by id in SOLIDWORKS toolbar",image:"flash-buttons.gif"},sidebar:"tutorialSidebar",previous:{title:"Macro to close all SOLIDWORKS documents except active",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/application/frame/close-all-documents-except-active/"},next:{title:"Notify the completion of long running SOLIDWORKS command using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/application/frame/long-command-completion-notifier/"}},l={},c=[],p={toc:c},d="wrapper";function u(t){let{components:o,...a}=t;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA macro demonstrates how to flash standard toolbar buttons in SOLIDWORKS toolbars similarly to SOLIDWORKS tutorials files."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Flashing sketch line command",src:e(35890).Z,width:"112",height:"148"})),(0,r.kt)("p",null,"In order to flash toolbar it is required to find its id. Follow the ",(0,r.kt)("a",{parentName:"p",href:"https://blog.codestack.net/missing-solidworks-api-command#calling-windows-command"},"Calling Windows Commands")," section of the blog post for the instruction of how retrieve this id."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note, the id of command is persistent across SOLIDWORKS sessions and releases.")),(0,r.kt)("p",null,"Unlike standard commands, custom commands added with ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/add-ins/"},"SOLIDWORKS add-ins")," are not persistent across different installations. In order to dynamically retrieve the id of the custom command, use ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISldWorks~GetCommandID.html"},"ISldWorks::GetCommandID")," API and pass persistent ",(0,r.kt)("strong",{parentName:"p"},"command user id")," and guid of the add-in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    \'flash line button and show tooltip\n    FlashToolbarButton 32873\n    \n    \'only show tooltip for a new file button\n    FlashToolbarButton 57600, True\n    \nEnd Sub\n\nSub FlashToolbarButton(buttonId As Long, Optional tooltipOnly As Boolean = False)\n    \n    swApp.ShowBubbleTooltip buttonId, IIf(tooltipOnly, "", CStr(buttonId)), 0, "", ""\n    \nEnd Sub\n')))}u.isMDXComponent=!0},35890:(t,o,e)=>{e.d(o,{Z:()=>n});const n=e.p+"assets/images/flash-buttons-77daf1ce7309cbd4cf3803d00ef9fecc.gif"}}]);