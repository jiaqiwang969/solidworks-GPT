"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[49086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,m=d["".concat(l,".").concat(u)]||d[u]||g[u]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"Getting started with SOLIDWORKS eDrawings API",caption:"Getting Started",description:"Instructions of getting started developing applications using eDrawings API",image:"edrawings.png",labels:["edrawings","getting started"],sidebar_position:0},a=void 0,s={unversionedId:"codestack-clone/edrawings-api/gettings-started/index",id:"codestack-clone/edrawings-api/gettings-started/index",title:"Getting started with SOLIDWORKS eDrawings API",description:"Instructions of getting started developing applications using eDrawings API",source:"@site/docs/codestack-clone/edrawings-api/gettings-started/index.md",sourceDirName:"codestack-clone/edrawings-api/gettings-started",slug:"/codestack-clone/edrawings-api/gettings-started/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/edrawings-api/gettings-started/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/edrawings-api/gettings-started/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Getting started with SOLIDWORKS eDrawings API",caption:"Getting Started",description:"Instructions of getting started developing applications using eDrawings API",image:"edrawings.png",labels:["edrawings","getting started"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"getting started",permalink:"/solidworks-GPT/zh-Hans/docs/category/getting-started-2"},next:{title:"Hosting eDrawings control in Windows Forms",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/edrawings-api/gettings-started/winforms/"}},l={},c=[],p={toc:c},d="wrapper";function g(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"eDrawings application",src:n(15425).Z,width:"957",height:"674"}),"{ width=350 }"),(0,i.kt)("p",null,"eDrawings API can be utilized by hosting the eDrawings ActiveX control and calling its methods. "),(0,i.kt)("p",null,"Control implements ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/emodelapi/eDrawings.Interop.EModelViewControl~eDrawings.Interop.EModelViewControl.IEModelViewControl.html"},"IEModelViewControl")," interface and represents the top most object in API objects model."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/emodelapi/eDrawings.Interop.EModelMarkupControl~eDrawings.Interop.EModelMarkupControl.IEModelMarkupControl.html"},"IEModelMarkupControl")," enables API access to markup functionality of eDrawings. Follow ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/edrawings-api/markup/"},"Utilizing markup functionality using SOLIDWORKS eDrawings API")," for more information about eDrawings markup API."),(0,i.kt)("p",null,"eDrawings control can be hosted in unmanaged applications as ActiveX control as well as .NET applications on ",(0,i.kt)("a",{parentName:"p",href:"winforms"},"User Forms"),", ",(0,i.kt)("a",{parentName:"p",href:"wpf"},"WPF application")," and HTML pages."),(0,i.kt)("p",null,"Interop dll can be located in the installation folder of the eDrawings. Usually ",(0,i.kt)("em",{parentName:"p"},"%commonprogramfiles%\\eDrawings","[Version]","\\eDrawings.Interop.EModelViewControl.dll")),(0,i.kt)("p",null,"In .NET applications eDrawings host control can be created by implementing ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.axhost"},"AxHost"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'public class EDrawingHost : AxHost\n{\n    public EDrawingHost() : base("22945A69-1191-4DCF-9E6F-409BDE94D101")\n    {\n        m_IsLoaded = false;\n    }\n}\n')),(0,i.kt)("p",null,"The guid of the control can be located in the registry."),(0,i.kt)("p",null,"Version independent guid can be found at ",(0,i.kt)("em",{parentName:"p"},"HKEY_CLASSES_ROOT\\EModelView.EModelNonVersionSpecificViewControl\\CLSID")," registry key and equal to ",(0,i.kt)("em",{parentName:"p"},"{22945A69-1191-4DCF-9E6F-409BDE94D101}")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Version independent GUID of eDrawings control",src:n(48225).Z,width:"1087",height:"337"})),(0,i.kt)("p",null,"If multiple versions of the eDrawings control installed the version independent GUID would correspond the to current version which is set in the ",(0,i.kt)("em",{parentName:"p"},"HKEY_CLASSES_ROOT\\EModelView.EModelViewControl\\CurVer")," registry key:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Current version of eDrawings control",src:n(57344).Z,width:"1052",height:"256"})),(0,i.kt)("p",null,"In order to enable specific version of eDrawings it is required to use the specific guid. For example for the eDrawings 2018 guid can be found at ",(0,i.kt)("em",{parentName:"p"},"HKEY_CLASSES_ROOT\\EModelView.EModelViewControl.18\\CLSID")," registry key and equal to ",(0,i.kt)("em",{parentName:"p"},"{a338ddd7-0c6c-43c9-8d1c-c2825ca9ac7c}"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Version specific guid of eDrawings control",src:n(80785).Z,width:"1052",height:"283"})),(0,i.kt)("p",null,"eDrawings interfaces from the ",(0,i.kt)("em",{parentName:"p"},"eDrawings.Interop.EModelViewControl.dll")," are neither backwards nor forward compatible. It means OCX control can only be cast to the corresponding interop version as all interfaces have different GUIDs in different versions. As a workaround it is possible to use late binding and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.comeventshelper?view=netcore-3.1"},"ComEventsHelper")," to access eDrawings API. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xarial/cad-plus/blob/master/src/SwEDrawingsHost/EDrawingsControl.cs"},"this implementation"),"."))}g.isMDXComponent=!0},80785:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/edrawings-2018-specific-version-e9bf3e323dcaa7c538540d926082a9aa.png"},57344:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/edrawings-control-current-version-905db891e62caa6d062eb85de19b0b9e.png"},15425:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/edrawings-e17bef4fc3217f248d510b65327f4113.png"},48225:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/non-version-specific-guid-cb7a87d1f511cd538272ad4d966d0dc7.png"}}]);