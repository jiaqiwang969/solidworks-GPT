"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[51040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),k=a,u=p["".concat(l,".").concat(k)]||p[k]||m[k]||s;return n?o.createElement(u,r(r({ref:t},c),{},{components:n})):o.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,r[1]=i;for(var d=2;d<s;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const s={title:"Hosting user control in SOLIDWORKS Task Pane using SwEx.AddIn framework",caption:"Task Pane",description:"Hosting WinForms user control in SOLIDWORKS Task Pane panel using SwEx.AddIn framework","toc-group-name":"labs-solidworks-swex",sidebar_position:0},r=void 0,i={unversionedId:"codestack/labs/solidworks/swex/add-in/hosting-user-controls/task-pane/index",id:"codestack/labs/solidworks/swex/add-in/hosting-user-controls/task-pane/index",title:"Hosting user control in SOLIDWORKS Task Pane using SwEx.AddIn framework",description:"Hosting WinForms user control in SOLIDWORKS Task Pane panel using SwEx.AddIn framework",source:"@site/docs/codestack/labs/solidworks/swex/add-in/hosting-user-controls/task-pane/index.md",sourceDirName:"codestack/labs/solidworks/swex/add-in/hosting-user-controls/task-pane",slug:"/codestack/labs/solidworks/swex/add-in/hosting-user-controls/task-pane/",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/add-in/hosting-user-controls/task-pane/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/add-in/hosting-user-controls/task-pane/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Hosting user control in SOLIDWORKS Task Pane using SwEx.AddIn framework",caption:"Task Pane",description:"Hosting WinForms user control in SOLIDWORKS Task Pane panel using SwEx.AddIn framework","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Hosting custom user controls in SOLIDWORKS panels using SwEx.AddIn framework",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/add-in/hosting-user-controls/"},next:{title:"Issues report page for SwEx.AddIn framework for SOLIDWORKS add-ins",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/add-in/issues/"}},l={},d=[{value:"Defining Commands",id:"defining-commands",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...s}=e;return(0,a.kt)(p,(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Any ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.usercontrol?view=netframework-4.8"},"System.Windows.Forms.UserControl")," can be hosted in the Task Pane by calling the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/Overload_CodeStack_SwEx_AddIn_Base_ISwAddInEx_CreateTaskPane.htm"},"ISwAddInEx.CreateTaskPane")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"MyControlHost ctrl;\nvar taskPaneView = CreateTaskPane<MyControlHost>(out ctrl);\n")),(0,a.kt)("p",null,"Both COM-visible and not COM-visible controls are supported"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public partial class MyControlHost : UserControl\n{\n    public IssuesControlHost()\n    {\n        InitializeComponent();\n    }\n}\n...\n[ComVisible(true)]\npublic partial class MyComVisibleControlHost : UserControl\n{\n    public IssuesControlHost()\n    {\n        InitializeComponent();\n    }\n}\n")),(0,a.kt)("p",null,"It is recommended to use COM-visible controls when hosting Windows Presentation Foundation (WCF) control in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.integration.elementhost?view=netframework-4.8"},"System.Windows.Forms.Integration.ElementHost")," as keypresses might not be handled properly in com-invisible controls."),(0,a.kt)("h2",{id:"defining-commands"},"Defining Commands"),(0,a.kt)("p",null,"It is possible to define task pane commands to be added as buttons. It is required to declare the enumeration with commands and provides the commands handler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public enum TaskPaneCommands_e\n{\n    Command1\n}\n\n...\nTaskPaneControl ctrl;\nvar taskPaneView = CreateTaskPane<TaskPaneControl, TaskPaneCommands_e>(OnTaskPaneCommandClick, out ctrl);\n...\n\nprivate void OnTaskPaneCommandClick(TaskPaneCommands_e cmd)\n{\n    switch (cmd)\n    {\n        case TaskPaneCommands_e.Command1:\n            //TODO: handle command\n            break;\n    }\n}\n")),(0,a.kt)("p",null,"Commands can be attributed with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/common/html/T_CodeStack_SwEx_Common_Attributes_TitleAttribute.htm"},"TitleAttribute")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/common/html/T_CodeStack_SwEx_Common_Attributes_IconAttribute.htm"},"IconAttribute")," or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_TaskPaneIconAttribute.htm"},"TaskPaneIconAttribute")," for specifying the tooltip and icon respectively."),(0,a.kt)("p",null,"Standard icon can be set by using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_TaskPaneStandardButtonAttribute.htm"},"TaskPaneStandardButtonAttribute")," attribute where the values defined in ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/swconst/SolidWorks.Interop.swconst~SolidWorks.Interop.swconst.swTaskPaneBitmapsOptions_e.html?id=483920098ca24c378c00773c02483619"},"swTaskPaneBitmapsOptions_e")," enumeration"),(0,a.kt)("p",null,"Please see the image below for the diagram of elements of Task Pane."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Task Pane control",src:n(26679).Z,width:"799",height:"596"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"WinForms User Control hosted in the Task Pane"),(0,a.kt)("li",{parentName:"ol"},"Task Pane button with the custom icon"),(0,a.kt)("li",{parentName:"ol"},"Task Pane button with default icon"),(0,a.kt)("li",{parentName:"ol"},"Task Pane button with standard swTaskPaneBitmapsOptions_Back icon"),(0,a.kt)("li",{parentName:"ol"},"Task Pane button with standard swTaskPaneBitmapsOptions_Next icon"),(0,a.kt)("li",{parentName:"ol"},"Task Pane button with standard swTaskPaneBitmapsOptions_Ok icon"),(0,a.kt)("li",{parentName:"ol"},"Task Pane button with standard swTaskPaneBitmapsOptions_Help icon"),(0,a.kt)("li",{parentName:"ol"},"Task Pane button with standard swTaskPaneBitmapsOptions_Options icon"),(0,a.kt)("li",{parentName:"ol"},"Task Pane button with standard swTaskPaneBitmapsOptions_Close icon"),(0,a.kt)("li",{parentName:"ol"},"Tooltip for Task Pane button"),(0,a.kt)("li",{parentName:"ol"},"Custom icon for Task Pane Tab"),(0,a.kt)("li",{parentName:"ol"},"Default icon for Task Pane Tab"),(0,a.kt)("li",{parentName:"ol"},"Tooltip for Task Pane Tab")))}m.isMDXComponent=!0},26679:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/task-pane-ec9f3edbb13b3f0fac7eee19f191ea4b.png"}}]);