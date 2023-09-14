"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[61476],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=d(n),m=r,u=c["".concat(s,".").concat(m)]||c[m]||g[m]||i;return n?a.createElement(u,o(o({ref:e},p),{},{components:n})):a.createElement(u,o({ref:e},p))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34606:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"How to create stand-alone (exe) applications using SOLIDWORKS API",caption:"Stand-Alone Application",description:"Two approaches to connect to SOLIDWORKS instance from the COM-compatible programming languages",image:"reg-edit-clsid_prog_id.png",labels:["article","clsid","instance","out-of-process","progid","rot","sdk","solidworks api","stand-alone"],"redirect-from":["/2018/03/connect-to-solidworks-from-stand-alone.html"],sidebar_position:4},o=void 0,l={unversionedId:"codestack/solidworks-api/getting-started/stand-alone/index",id:"codestack/solidworks-api/getting-started/stand-alone/index",title:"How to create stand-alone (exe) applications using SOLIDWORKS API",description:"Two approaches to connect to SOLIDWORKS instance from the COM-compatible programming languages",source:"@site/docs/codestack/solidworks-api/getting-started/stand-alone/index.md",sourceDirName:"codestack/solidworks-api/getting-started/stand-alone",slug:"/codestack/solidworks-api/getting-started/stand-alone/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/stand-alone/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/stand-alone/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to create stand-alone (exe) applications using SOLIDWORKS API",caption:"Stand-Alone Application",description:"Two approaches to connect to SOLIDWORKS instance from the COM-compatible programming languages",image:"reg-edit-clsid_prog_id.png",labels:["article","clsid","instance","out-of-process","progid","rot","sdk","solidworks api","stand-alone"],"redirect-from":["/2018/03/connect-to-solidworks-from-stand-alone.html"],sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Creating VB.NET add-in for SOLIDWORKS using API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/add-ins/vbnet/"},next:{title:"Create C# stand-alone application for SOLIDWORKS API automation",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/stand-alone/connect-csharp/"}},s={},d=[{value:"Method A - Activator and ProgId",id:"method-a---activator-and-progid",level:2},{value:"Connecting by creating an instance via <strong>Prog</strong>ram <strong>Id</strong>entified (progid) or Global Unique COM <strong>Cl</strong>a<strong>s</strong>s <strong>Id</strong>entifier (CLSID)",id:"connecting-by-creating-an-instance-via-program-identified-progid-or-global-unique-com-class-identifier-clsid",level:3},{value:"Method B - Running Object Table (ROT)",id:"method-b---running-object-table-rot",level:2},{value:"Connecting by querying the COM instance from the <strong>R</strong>unning <strong>O</strong>bject <strong>T</strong>able (ROT)",id:"connecting-by-querying-the-com-instance-from-the-running-object-table-rot",level:3}],p={toc:d},c="wrapper";function g(t){let{components:e,...i}=t;return(0,r.kt)(c,(0,a.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this article I will discuss 2 generic approaches connecting to SOLIDWORKS instance from the COM-compatible programming languages (e.g. C#, VB.NET, C++, Visual Basic 6) in order to utilize SOLIDWORKS API.  "),(0,r.kt)("p",null,"This is optional detailed explanation of these approaches.\nPlease follow the links below to access articles which demonstrate how to create a sample project and connect to SOLIDWORKS instance:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/getting-started/stand-alone/connect-csharp"},"Using C#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/getting-started/stand-alone/connect-vbnet"},"Using VB.NET")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/getting-started/stand-alone/connect-cpp"},"Using C++"))),(0,r.kt)("h2",{id:"method-a---activator-and-progid"},"Method A - Activator and ProgId"),(0,r.kt)("h3",{id:"connecting-by-creating-an-instance-via-program-identified-progid-or-global-unique-com-class-identifier-clsid"},"Connecting by creating an instance via ",(0,r.kt)("strong",{parentName:"h3"},"Prog"),"ram ",(0,r.kt)("strong",{parentName:"h3"},"Id"),"entified (progid) or Global Unique COM ",(0,r.kt)("strong",{parentName:"h3"},"Cl"),"a",(0,r.kt)("strong",{parentName:"h3"},"s"),"s ",(0,r.kt)("strong",{parentName:"h3"},"Id"),"entifier (CLSID)"),(0,r.kt)("p",null,"There are 2 type of program identifiers for SOLIDWORKS: version independent and version specific.  "),(0,r.kt)("p",null,"Program identifiers are registered in the Windows Registry:  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Class Id in the Windows registry",src:n(14479).Z,width:"640",height:"247"}),"{ width=640 }"),(0,r.kt)("p",null,"In the example above program identifier of the ",(0,r.kt)("strong",{parentName:"p"},"SldWorks.Application.23")," corresponds to the COM class identifier ",(0,r.kt)("strong",{parentName:"p"},"{D66FBAAE-4150-402F-8581-75D1652D696A}"),"  "),(0,r.kt)("p",null,"More information about this object (like type library class identifier, COM server location ","[i.e. path to ",(0,r.kt)("strong",{parentName:"p"},"sldworks.exe"),"]",") can be found at the registry branch related to the class identifier (i.e. ",(0,r.kt)("strong",{parentName:"p"},"HKEY_CLASSES_ROOT\\CLSID","{","D66FBAAE-4150-402F-8581-75D1652D696A}"),")  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Prog Id in the Windows registry",src:n(25246).Z,width:"640",height:"247"}),"{ width=640 }"),(0,r.kt)("p",null,"Version independent program identifier will be identical for all versions of SOLIDWORKS and equal to ",(0,r.kt)("strong",{parentName:"p"},'"SldWorks.Application"'),"."),(0,r.kt)("p",null,"If you use version independent identifier this will ensure that your code will be valid for any environment where SOLIDWORKS is installed.\nThis would however introduce ambiguity where multiple versions of SOLIDWORKS are installed.\nIn this case your program will connect to the version last installed or modified in the computer."),(0,r.kt)("p",null,"To use version specific program identifier it is required to specify the revision number after the program identifier, i.e. ",(0,r.kt)("strong",{parentName:"p"},'"SldWorks.Application.RevisionNumber"'),".\nPlease refer the table below for the list of SOLIDWORKS versions and its revision numbers:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Revision"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2005"),(0,r.kt)("td",{parentName:"tr",align:null},"13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2006"),(0,r.kt)("td",{parentName:"tr",align:null},"14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2007"),(0,r.kt)("td",{parentName:"tr",align:null},"15")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2008"),(0,r.kt)("td",{parentName:"tr",align:null},"16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2009"),(0,r.kt)("td",{parentName:"tr",align:null},"17")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2010"),(0,r.kt)("td",{parentName:"tr",align:null},"18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2011"),(0,r.kt)("td",{parentName:"tr",align:null},"19")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2012"),(0,r.kt)("td",{parentName:"tr",align:null},"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2013"),(0,r.kt)("td",{parentName:"tr",align:null},"21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2014"),(0,r.kt)("td",{parentName:"tr",align:null},"22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2015"),(0,r.kt)("td",{parentName:"tr",align:null},"23")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2016"),(0,r.kt)("td",{parentName:"tr",align:null},"24")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2017"),(0,r.kt)("td",{parentName:"tr",align:null},"25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2018"),(0,r.kt)("td",{parentName:"tr",align:null},"26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"27")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2020"),(0,r.kt)("td",{parentName:"tr",align:null},"28")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2021"),(0,r.kt)("td",{parentName:"tr",align:null},"29")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOLIDWORKS 2022"),(0,r.kt)("td",{parentName:"tr",align:null},"30")))),(0,r.kt)("p",null,"It is possible to get the revision number of SOLIDWORKS session via ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~revisionnumber.html"},"ISldWorks::RevisionNumber")," method.\nThe returned value is a string in the format: ",(0,r.kt)("strong",{parentName:"p"},"25.1.0")," where first number is a revision number.  "),(0,r.kt)("p",null,"There are few limitations when using this method:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is not always predictable whether this method will connect to already running instance of SOLIDWORKS or will create new one"),(0,r.kt)("li",{parentName:"ul"},"It is not possible to specify which of the running SOLIDWORKS sessions to connect to (e.g. when more than one SOLIDWORKS session is open)"),(0,r.kt)("li",{parentName:"ul"},"If new session is created as the result of running this method this session will be invisible by default and started with ",(0,r.kt)("em",{parentName:"li"},"/embed")," flag.\nThat means that session is started lightweight and no add-ins are loaded.\nThis was designed to allow embedding OLE objects into the 3rd party applications (such as Microsoft Office).")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SOLIDWORKS Part Document OLE object in Excel",src:n(84327).Z,width:"400",height:"178"}),"{ width=400 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is not possible to create more than one active sessions of SOLIDWORKS")),(0,r.kt)("h2",{id:"method-b---running-object-table-rot"},"Method B - Running Object Table (ROT)"),(0,r.kt)("h3",{id:"connecting-by-querying-the-com-instance-from-the-running-object-table-rot"},"Connecting by querying the COM instance from the ",(0,r.kt)("strong",{parentName:"h3"},"R"),"unning ",(0,r.kt)("strong",{parentName:"h3"},"O"),"bject ",(0,r.kt)("strong",{parentName:"h3"},"T"),"able (ROT)"),(0,r.kt)("p",null,"When COM server creates an object instance it creates a moniker for this instance and registers it in the Running Objects Table (ROT).\nROT enables interprocess communication with 3rd party applications by allowing to lookup the objects from the running processes via Windows APIs (",(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/windows/desktop/ms684004(v=vs.85).aspx"},"GetRunningObjectTable"),")"),(0,r.kt)("p",null,"Below is an example of Running Object Table with several registered COM objects:  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"!{00024505-0014-0000-C000-000000000046}")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"!Microsoft Visual Studio Telemetry:11004")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"!{31F45B04-7198-45ED-A13F-F224A4A1686A}")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SolidWorks_PID_15212")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"!VisualStudio.DTE.14.0:16144")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using this approach it is possible to connect to any session of SOLIDWORKS from its process id"),(0,r.kt)("li",{parentName:"ul"},"It is possible to create as many sessions as needed by starting new SOLIDWORKS instance via shell or start process APIs")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Object might not be successfully retrieved form the ROT if the SOLIDWORKS application and the stand-alone application are run with different permission levels (e.g. one is run as administrator while other is not). Run them under the same user to enable communication.")),(0,r.kt)("p",null,"Please follow the links at the beginning of the articles for the detailed guides with code examples for connecting to SOLIDWORKS instance."))}g.isMDXComponent=!0},84327:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/excel-ole-object-13db6fcb520faeb8be81d999502198ad.png"},14479:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/reg-edit-clsid-4ed3fae7131826abd68460b995853f80.png"},25246:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/reg-edit-clsid_prog_id-702c04614dc036d847d91c3f9aa34c8e.png"}}]);