"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[73221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:i,a[1]=d;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={title:"Entry Point of SwEx.AddIn framework",caption:"Entry Point",description:"Instructions on starting the coding with the SwEx.AddIn framework for SOLIDWORKS","toc-group-name":"labs-solidworks-swex",order:2},a=void 0,d={unversionedId:"codestack/labs/solidworks/swex/add-in/getting-started/entry-point/index",id:"codestack/labs/solidworks/swex/add-in/getting-started/entry-point/index",title:"Entry Point of SwEx.AddIn framework",description:"Instructions on starting the coding with the SwEx.AddIn framework for SOLIDWORKS",source:"@site/docs/codestack/labs/solidworks/swex/add-in/getting-started/entry-point/index.md",sourceDirName:"codestack/labs/solidworks/swex/add-in/getting-started/entry-point",slug:"/codestack/labs/solidworks/swex/add-in/getting-started/entry-point/",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/add-in/getting-started/entry-point/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/add-in/getting-started/entry-point/index.md",tags:[],version:"current",frontMatter:{title:"Entry Point of SwEx.AddIn framework",caption:"Entry Point",description:"Instructions on starting the coding with the SwEx.AddIn framework for SOLIDWORKS","toc-group-name":"labs-solidworks-swex",order:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started with SwEx.AddIn to develop advanced add-ins for SOLIDWORKS",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/add-in/getting-started/"},next:{title:"Hosting custom user controls in SOLIDWORKS panels using SwEx.AddIn framework",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/add-in/hosting-user-controls/"}},s={},l=[{value:"Registering the add-in",id:"registering-the-add-in",level:2},{value:"C#",id:"c",level:3},{value:"VB.NET",id:"vbnet",level:3},{value:"OnConnect",id:"onconnect",level:2},{value:"OnDisconnect",id:"ondisconnect",level:2},{value:"Accessing SOLIDWORKS application objects",id:"accessing-solidworks-application-objects",level:2},{value:"App property",id:"app-property",level:3},{value:"AddInCookie property",id:"addincookie-property",level:3},{value:"CmdMgr property",id:"cmdmgr-property",level:3},{value:"Unregistering add-in",id:"unregistering-add-in",level:2}],c={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"registering-the-add-in"},"Registering the add-in"),(0,i.kt)("p",null,"In order to register the SOLIDWORKS add-in with SwEx framework it is required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a public class which inherits the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_SwAddInEx.htm"},"SwAddInEx")," class"),(0,i.kt)("li",{parentName:"ul"},"Make this class com visible by adding the ",(0,i.kt)("em",{parentName:"li"},"System.Runtime.InteropServices.ComVisibleAttribute")," attribute"),(0,i.kt)("li",{parentName:"ul"},"Add the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_AutoRegisterAttribute.htm"},"AutoRegisterAttribute")," attribute to add the required information to the registry.")),(0,i.kt)("h3",{id:"c"},"C","#"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.AddIn;\nusing CodeStack.SwEx.AddIn.Attributes;\nusing System;\nusing System.Runtime.InteropServices;\n\nnamespace CodeStack.SwEx\n{\n    [AutoRegister("MyAddIn title", "MyAddIn description", true)]\n    [ComVisible(true), Guid("025F9A68-F2FE-46CF-8BA2-8E19FBCDE9A0")]\n    public class MyAddIn : SwAddInEx\n    {\n        public override bool OnConnect()\n        {\n            // Initialize the add-in, create menu, load data etc.\n            return true;\n        }\n\n        public override bool OnDisconnect()\n        {\n            // Dispose the add-in\'s resources\n            return true;\n        }\n    }\n}\n\n')),(0,i.kt)("h3",{id:"vbnet"},"VB.NET"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Imports CodeStack.SwEx.AddIn\nImports CodeStack.SwEx.AddIn.Attributes\nImports System.Runtime.InteropServices\n\n<AutoRegister("MyAddIn title", "MyAddIn description", True)>\n<ComVisible(True), Guid("025F9A68-F2FE-46CF-8BA2-8E19FBCDE9A0")>\nPublic Class MyAddIn\n    Inherits SwAddInEx\n\n    Public Overrides Function OnConnect() As Boolean\n        \'Initialize the add-in, create menu, load data etc.\n        Return True\n    End Function\n\n    Public Overrides Function OnDisconnect() As Boolean\n        \'Dispose the add-in\'s resources\n        Return True\n    End Function\n\nEnd Class\n\n')),(0,i.kt)("h2",{id:"onconnect"},"OnConnect"),(0,i.kt)("p",null,"This function is called within the ConnectToSw entry point. Override this function to initialize the add-in."),(0,i.kt)("p",null,"Return the result of the initialization. Return ",(0,i.kt)("em",{parentName:"p"},"true")," to indicate that the initialization is successful. Return 'false' to cancel the loading of the add-in."),(0,i.kt)("p",null,"This override should be used to validate license (return false if the validation is failed), add command manager, task pane views, initialize events manager, etc."),(0,i.kt)("h2",{id:"ondisconnect"},"OnDisconnect"),(0,i.kt)("p",null,"This function is called within the DisconnectFromSw function. Use the function to release all resources. You do not need to release the com pointers to SOLIDWORKS or command manager as those will be automatically released by SwEx framework."),(0,i.kt)("h2",{id:"accessing-solidworks-application-objects"},"Accessing SOLIDWORKS application objects"),(0,i.kt)("p",null,"SwEx framework provides the access to the following objects which are preassigned by the framework"),(0,i.kt)("h3",{id:"app-property"},"App property"),(0,i.kt)("p",null,"Pointer to SOLIDWORKS application"),(0,i.kt)("h3",{id:"addincookie-property"},"AddInCookie property"),(0,i.kt)("p",null,"Add-in id"),(0,i.kt)("h3",{id:"cmdmgr-property"},"CmdMgr property"),(0,i.kt)("p",null,"Pointer to command manager"),(0,i.kt)("h2",{id:"unregistering-add-in"},"Unregistering add-in"),(0,i.kt)("p",null,"Add-in will be automatically removed and all COM objects unregistered when project is cleaned in Visual Studio"))}p.isMDXComponent=!0}}]);