"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[11865],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=o.createContext({}),d=function(e){var n=o.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(m.Provider,{value:n},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=d(t),u=a,f=l["".concat(m,".").concat(u)]||l[u]||p[u]||s;return t?o.createElement(f,r(r({ref:n},c),{},{components:t})):o.createElement(f,r({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=u;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[l]="string"==typeof e?e:a,r[1]=i;for(var d=2;d<s;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(87462),a=(t(67294),t(3905));const s={title:"Defining commands buttons in SOLIDWORKS toolbar using SwEx.AddIn framework",caption:"Defining Commands",description:"Explanations on the ways of defining the commands in groups using SwEx framework for SOLIDWORKS add-ins in C# and VB.NET","toc-group-name":"labs-solidworks-swex",sidebar_position:0},r=void 0,i={unversionedId:"codestack/labs/solidworks/swex/add-in/commands-manager/defining-commands/index",id:"codestack/labs/solidworks/swex/add-in/commands-manager/defining-commands/index",title:"Defining commands buttons in SOLIDWORKS toolbar using SwEx.AddIn framework",description:"Explanations on the ways of defining the commands in groups using SwEx framework for SOLIDWORKS add-ins in C# and VB.NET",source:"@site/docs/codestack/labs/solidworks/swex/add-in/commands-manager/defining-commands/index.md",sourceDirName:"codestack/labs/solidworks/swex/add-in/commands-manager/defining-commands",slug:"/codestack/labs/solidworks/swex/add-in/commands-manager/defining-commands/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/add-in/commands-manager/defining-commands/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/add-in/commands-manager/defining-commands/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Defining commands buttons in SOLIDWORKS toolbar using SwEx.AddIn framework",caption:"Defining Commands",description:"Explanations on the ways of defining the commands in groups using SwEx framework for SOLIDWORKS add-ins in C# and VB.NET","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Custom enable command state for SOLIDWORKS commands",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/add-in/commands-manager/command-states/"},next:{title:"Hosting SOLIDWORKS commands in menu, toolbar and context menu using SwEx.AddIn",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/add-in/commands-manager/hosting-commands/"}},m={},d=[{value:"Defining Commands",id:"defining-commands",level:2},{value:"Commands Decoration",id:"commands-decoration",level:2},{value:"Title",id:"title",level:3},{value:"Description",id:"description",level:3},{value:"Icon",id:"icon",level:3},{value:"Commands Scope",id:"commands-scope",level:2},{value:"User Assigned Command Group IDs",id:"user-assigned-command-group-ids",level:2}],c={toc:d},l="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"defining-commands"},"Defining Commands"),(0,a.kt)("p",null,"SwEx framework allows defining the commands in the enumeration (enum). In this case the enumeration value become the id of the corresponding command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},"Public Enum CommandsA_e\n    CommandA1\n    CommandA2\nEnd Enum\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public enum CommandsA_e\n{\n    CommandA1,\n    CommandA2\n}\n")),(0,a.kt)("h2",{id:"commands-decoration"},"Commands Decoration"),(0,a.kt)("p",null,"Commands can be decorated with the additional attributes to define look and feel of the command."),(0,a.kt)("h3",{id:"title"},"Title"),(0,a.kt)("p",null,"User friendly title can be defined using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/common/html/T_CodeStack_SwEx_Common_Attributes_TitleAttribute.htm"},"TitleAttribute"),". Alternatively, any attribute class which inherits ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.displaynameattribute?view=netframework-4.0"},"DisplayNameAttribute")," is supported as a title."),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"Description is a text displayed in the SOLIDWORKS command bar when user hovers the mouse over the command. Description can be defined using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.descriptionattribute?view=netframework-4.0"},"DescriptionAttribute")),(0,a.kt)("h3",{id:"icon"},"Icon"),(0,a.kt)("p",null,"Icon can be set using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_CommandIconAttribute.htm"},"CommandIconAttribute"),". There are multiple overloads of this attribute. User can provide"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Single master icon"),(0,a.kt)("li",{parentName:"ul"},"2 icons (small and large)"),(0,a.kt)("li",{parentName:"ul"},"6 icons for high resolution (supported from SOLIDWORKS 2016 onwards)")),(0,a.kt)("p",null,"Icon can be also specified using the generic ",(0,a.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/common/html/T_CodeStack_SwEx_Common_Attributes_IconAttribute.htm"},"IconAttribute"),"."),(0,a.kt)("p",null,"Regardless of the option selected above, SwEx framework will scale the icon appropriately to match the version of SOLIDWORKS. For example if single master icon specified for SOLIDWORKS 2016 onwards, 6 icons will be created to support high resolution, for older SOLIDWORKS, 2 icons will be created (large and small). If user specified 6 icons - all of them will be used 'as is' for SOLIDWORKS 2016 or newer, but they will be converted to 2 (small and large) icons for older versions as high resolutions icons are not supported in SOLIDWORKS older than 2016."),(0,a.kt)("p",null,"Transparency is supported. SwEx framework will automatically assign the required transparency key for compatibility with SOLIDWORKS."),(0,a.kt)("p",null,"Icons can be referenced from any static class. Usually this should be a resource class. It is required to specify the type of the resource class as first parameter, and the resource names as additional parameters. Use ",(0,a.kt)("em",{parentName:"p"},"nameof")," keyword to load the resource name to avoid usage of 'magic' strings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Imports CodeStack.SwEx.Common.Attributes\nImports CodeStack.SwEx.My.Resources\nImports System.ComponentModel\n\n<Title(GetType(Resources), NameOf(Resources.ToolbarTitle))>\n<Description("Command Group Title")>\n<Icon(GetType(Resources), NameOf(Resources.commands))>\nPublic Enum CommandsB_e\n\n    <Title("First Command")>\n    <Description("Hint text for first command")>\n    <Icon(GetType(Resources), NameOf(Resources.command1))>\n    CommandB1\n\n    <Title("Second Command")>\n    <Description("Hint text for second command")>\n    <Icon(GetType(Resources), NameOf(Resources.command2))>\n    CommandB2\n\n    <Title("Third Command")>\n    <Description("Hint text for third command")>\n    <Icon(GetType(Resources), NameOf(Resources.command3))>\n    CommandB3\n\nEnd Enum\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.Common.Attributes;\nusing CodeStack.SwEx.Properties;\nusing System.ComponentModel;\n\n[Title(typeof(Resources), nameof(Resources.ToolbarTitle))]\n[Description("Command Group Title")]\n[Icon(typeof(Resources), nameof(Resources.commands))]\npublic enum CommandsB_e\n{\n    [Title("First Command")]\n    [Description("Hint text for first command")]\n    [Icon(typeof(Resources), nameof(Resources.command1))]\n    CommandB1,\n\n    [Title("Second Command")]\n    [Description("Hint text for second command")]\n    [Icon(typeof(Resources), nameof(Resources.command2))]\n    CommandB2,\n\n    [Title("Third Command")]\n    [Description("Hint text for third command")]\n    [Icon(typeof(Resources), nameof(Resources.command3))]\n    CommandB3\n}\n')),(0,a.kt)("h2",{id:"commands-scope"},"Commands Scope"),(0,a.kt)("p",null,"Each command can be assigned with the operation scope (i.e. the environment where this command can be executed, e.g. Part, Assembly etc.). Scope can be assigned with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_CommandItemInfoAttribute.htm"},"CommandItemInfoAttribute")," attribute by specifying the values in ",(0,a.kt)("em",{parentName:"p"},"suppWorkspaces")," parameter of the attribute's constructor. The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Enums_swWorkspaceTypes_e.htm"},"swWorkspaceTypes_e")," is a flag enumeration, so it is possible to combine the workspaces."),(0,a.kt)("p",null,"Framework will automatically disable/enable the commands based on the active environment as per the specified scope. For additional logic for assigning the state visit ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/swex/add-in/commands-manager/command-states/"},"Custom Enable Command State")," article."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},"Imports CodeStack.SwEx.AddIn.Attributes\nImports CodeStack.SwEx.AddIn.Enums\n\nPublic Enum CommandsD_e\n\n    <CommandItemInfo(swWorkspaceTypes_e.Part)>\n    CommandD1\n\n    <CommandItemInfo(swWorkspaceTypes_e.Part Or swWorkspaceTypes_e.Assembly)>\n    CommandD2\n\nEnd Enum\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"using CodeStack.SwEx.AddIn.Attributes;\nusing CodeStack.SwEx.AddIn.Enums;\n\npublic enum CommandsD_e\n{\n    [CommandItemInfo(swWorkspaceTypes_e.Part)]\n    CommandD1,\n\n    [CommandItemInfo(swWorkspaceTypes_e.Part | swWorkspaceTypes_e.Assembly)]\n    CommandD2\n}\n")),(0,a.kt)("h2",{id:"user-assigned-command-group-ids"},"User Assigned Command Group IDs"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_CommandGroupInfoAttribute.htm"},"CommandGroupInfoAttribute")," allows to assign the static command id to the group. This should be applied to the enumerator definition. If this attribute is not used SwEx framework will assign the ids automatically."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},"Imports CodeStack.SwEx.AddIn.Attributes\n\n<CommandGroupInfo(2)>\nPublic Enum CommandsE_e\n    CommandE1\n    CommandE2\nEnd Enum\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"using CodeStack.SwEx.AddIn.Attributes;\n\n[CommandGroupInfo(2)]\npublic enum CommandsE_e\n{\n    CommandE1,\n    CommandE2\n}\n")))}p.isMDXComponent=!0}}]);