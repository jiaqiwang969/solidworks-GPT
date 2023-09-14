"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[46068],{3905:(n,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>w});var a=t(67294);function m(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){m(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,m=function(n,e){if(null==n)return{};var t,a,m={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(m[t]=n[t]);return m}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(m[t]=n[t])}return m}var A=a.createContext({}),r=function(n){var e=a.useContext(A),t=e;return n&&(t="function"==typeof n?n(e):d(d({},e),n)),t},i=function(n){var e=r(n.components);return a.createElement(A.Provider,{value:e},n.children)},c="mdxType",l={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,m=n.mdxType,o=n.originalType,A=n.parentName,i=s(n,["components","mdxType","originalType","parentName"]),c=r(t),u=m,w=c["".concat(A,".").concat(u)]||c[u]||l[u]||o;return t?a.createElement(w,d(d({ref:e},i),{},{components:t})):a.createElement(w,d({ref:e},i))}));function w(n,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof n||m){var o=t.length,d=new Array(o);d[0]=u;var s={};for(var A in e)hasOwnProperty.call(e,A)&&(s[A]=e[A]);s.originalType=n,s[c]="string"==typeof n?n:m,d[1]=s;for(var r=2;r<o;r++)d[r]=t[r];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},72444:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>A,contentTitle:()=>d,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var a=t(87462),m=(t(67294),t(3905));const o={title:"Hosting SOLIDWORKS commands in menu, toolbar and context menu using SwEx.AddIn",caption:"Hosting Commands",description:"Hosting options for SOLIDWORKS commands using SwEx.AddIn (command group, context menu, toolbar and commands tab box)",image:"commands-toolbar.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0,"redirect-from":["/labs/solidworks/swex/add-in/commands-manager/adding-command-group/","/labs/solidworks/swex/add-in/commands-manager/tab-boxes/","/labs/solidworks/swex/add-in/commands-manager/adding-context-menu/"]},d=void 0,s={unversionedId:"codestack/labs/solidworks/swex/add-in/commands-manager/hosting-commands/index",id:"codestack/labs/solidworks/swex/add-in/commands-manager/hosting-commands/index",title:"Hosting SOLIDWORKS commands in menu, toolbar and context menu using SwEx.AddIn",description:"Hosting options for SOLIDWORKS commands using SwEx.AddIn (command group, context menu, toolbar and commands tab box)",source:"@site/docs/codestack/labs/solidworks/swex/add-in/commands-manager/hosting-commands/index.md",sourceDirName:"codestack/labs/solidworks/swex/add-in/commands-manager/hosting-commands",slug:"/codestack/labs/solidworks/swex/add-in/commands-manager/hosting-commands/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/add-in/commands-manager/hosting-commands/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/add-in/commands-manager/hosting-commands/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Hosting SOLIDWORKS commands in menu, toolbar and context menu using SwEx.AddIn",caption:"Hosting Commands",description:"Hosting options for SOLIDWORKS commands using SwEx.AddIn (command group, context menu, toolbar and commands tab box)",image:"commands-toolbar.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0,"redirect-from":["/labs/solidworks/swex/add-in/commands-manager/adding-command-group/","/labs/solidworks/swex/add-in/commands-manager/tab-boxes/","/labs/solidworks/swex/add-in/commands-manager/adding-context-menu/"]},sidebar:"tutorialSidebar",previous:{title:"Defining commands buttons in SOLIDWORKS toolbar using SwEx.AddIn framework",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/add-in/commands-manager/defining-commands/"},next:{title:"Adding sub-menus and spacers to SOLIDWORKS command manager using SwEx.AddIn",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/add-in/commands-manager/sub-menu-and-spacers/"}},A={},r=[{value:"Command Group",id:"command-group",level:2},{value:"Menu",id:"menu",level:3},{value:"Toolbar",id:"toolbar",level:3},{value:"Command Tab Box",id:"command-tab-box",level:3},{value:"Context Menu",id:"context-menu",level:2}],i={toc:r},c="wrapper";function l(n){let{components:e,...o}=n;return(0,m.kt)(c,(0,a.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/swex/add-in/commands-manager/defining-commands/"},"Defined commands")," can be hosted in different locations of SOLIDWORKS commands area: ",(0,m.kt)("a",{parentName:"p",href:"#command-group"},"command group"),", which includes ",(0,m.kt)("a",{parentName:"p",href:"#menu"},"menu"),", ",(0,m.kt)("a",{parentName:"p",href:"#toolbar"},"toolbar")," and ",(0,m.kt)("a",{parentName:"p",href:"#command-tab-box"},"command tab box (ribbon)")," as well as in the ",(0,m.kt)("a",{parentName:"p",href:"#context-menu"},"context menu")),(0,m.kt)("h2",{id:"command-group"},"Command Group"),(0,m.kt)("p",null,"In order to add command group it is required to call the ",(0,m.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/M_CodeStack_SwEx_AddIn_SwAddInEx_AddCommandGroup__1.htm"},"AddCommandGroup")," method and pass the enumeration type as a generic parameter."),(0,m.kt)("p",null,"It is required to provide the void handler function with a parameter of enumerator which will be called by framework when command is clicked."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-vb"},"Public Overrides Function OnConnect() As Boolean\n    AddCommandGroup(Of CommandsA_e)(AddressOf OnCommandsAButtonClick)\n    AddCommandGroup(Of CommandsB_e)(AddressOf OnCommandsBButtonClick)\n    AddCommandGroup(Of CommandsC_e)(AddressOf OnCommandsCButtonClick)\n    Return True\nEnd Function\n\nPrivate Sub OnCommandsAButtonClick(ByVal cmd As CommandsA_e)\nEnd Sub\n\nPrivate Sub OnCommandsBButtonClick(ByVal cmd As CommandsB_e)\nEnd Sub\n\nPrivate Sub OnCommandsCButtonClick(ByVal cmd As CommandsC_e)\nEnd Sub\n")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cs"},"public override bool OnConnect()\n{\n    AddCommandGroup<CommandsA_e>(OnCommandsAButtonClick);\n    AddCommandGroup<CommandsB_e>(OnCommandsBButtonClick);\n    AddCommandGroup<CommandsC_e>(OnCommandsCButtonClick);\n\n    return true;\n}\n\nprivate void OnCommandsAButtonClick(CommandsA_e cmd)\n{\n    //TODO: handle the button click\n}\n\nprivate void OnCommandsBButtonClick(CommandsB_e cmd)\n{\n    //TODO: handle the button click\n}\n\nprivate void OnCommandsCButtonClick(CommandsC_e cmd)\n{\n    //TODO: handle the button click\n}\n")),(0,m.kt)("h3",{id:"menu"},"Menu"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Commands displayed in the SOLIDWORKS menu",src:t(26846).Z,width:"628",height:"274"}),"{ width=350 }"),(0,m.kt)("p",null,"By default command will be added to menu and ",(0,m.kt)("a",{parentName:"p",href:"#toolbar"},"toolbar"),". This behaviour can be changed by assigning the ",(0,m.kt)("em",{parentName:"p"},"hasMenu")," boolean parameter of the ",(0,m.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_CommandItemInfoAttribute.htm"},"CommandItemInfoAttribute")," attribute."),(0,m.kt)("h3",{id:"toolbar"},"Toolbar"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Commands displayed in the SOLIDWORKS toolbar",src:t(52427).Z,width:"531",height:"477"}),"{ width=350 }"),(0,m.kt)("p",null,"By default command will be added to ",(0,m.kt)("a",{parentName:"p",href:"#menu"},"menu")," and toolbar. This behaviour can be changed by assigning the ",(0,m.kt)("em",{parentName:"p"},"hasToolbar")," boolean parameter of the ",(0,m.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_CommandItemInfoAttribute.htm"},"CommandItemInfoAttribute")," attribute."),(0,m.kt)("h3",{id:"command-tab-box"},"Command Tab Box"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Commands added to command tab box",src:t(74780).Z,width:"639",height:"171"}),"{ width=450 }"),(0,m.kt)("p",null,"Command item can be added to tab box by setting the ",(0,m.kt)("em",{parentName:"p"},"showInCmdTabBox")," parameter of\n",(0,m.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_CommandItemInfoAttribute.htm"},"CommandItemInfoAttribute")," to ",(0,m.kt)("em",{parentName:"p"},"true")," for the specific command defined in the enumeration."),(0,m.kt)("p",null,(0,m.kt)("em",{parentName:"p"},"textStyle")," parameter allows to specify the alignment of the hint text relative to the icon."),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Text display styles in command tab box",src:t(73793).Z,width:"258",height:"115"}),"{ width=250 }"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"Icon only (without text) (swCommandTabButton_NoText)"),(0,m.kt)("li",{parentName:"ul"},"Text below icon (swCommandTabButton_TextBelow)"),(0,m.kt)("li",{parentName:"ul"},"Text to the right to icon, aligned horizontally (swCommandTabButton_TextHorizontal)")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-vb"},"Imports CodeStack.SwEx.AddIn.Attributes\nImports CodeStack.SwEx.AddIn.Enums\nImports SolidWorks.Interop.swconst\n\nPublic Enum CommandsC_e\n\n    <CommandItemInfo(True, True, swWorkspaceTypes_e.Assembly, True, swCommandTabButtonTextDisplay_e.swCommandTabButton_NoText)>\n    CommandC1\n\n    <CommandItemInfo(True, True, swWorkspaceTypes_e.AllDocuments, True, swCommandTabButtonTextDisplay_e.swCommandTabButton_TextBelow)>\n    CommandC2\n\n    <CommandItemInfo(True, True, swWorkspaceTypes_e.AllDocuments, True, swCommandTabButtonTextDisplay_e.swCommandTabButton_TextHorizontal)>\n    CommandC3\n\nEnd Enum\n")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cs"},"using CodeStack.SwEx.AddIn.Attributes;\nusing CodeStack.SwEx.AddIn.Enums;\nusing SolidWorks.Interop.swconst;\n\npublic enum CommandsC_e\n{\n    [CommandItemInfo(true, true, swWorkspaceTypes_e.Assembly,\n        true, swCommandTabButtonTextDisplay_e.swCommandTabButton_NoText)]\n    CommandC1,\n\n    [CommandItemInfo(true, true, swWorkspaceTypes_e.AllDocuments,\n        true, swCommandTabButtonTextDisplay_e.swCommandTabButton_TextBelow)]\n    CommandC2,\n\n    [CommandItemInfo(true, true, swWorkspaceTypes_e.AllDocuments,\n        true, swCommandTabButtonTextDisplay_e.swCommandTabButton_TextHorizontal)]\n    CommandC3,\n}\n")),(0,m.kt)("h2",{id:"context-menu"},"Context Menu"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Commands displayed in the context menu",src:t(70858).Z,width:"525",height:"178"}),"{ width=250 }"),(0,m.kt)("p",null,"In order to add context menu it is required to call the ",(0,m.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/M_CodeStack_SwEx_AddIn_SwAddInEx_AddContextMenu__1.htm"},"AddContextMenu")," method and pass the enumeration as a template parameter."),(0,m.kt)("p",null,"It is required to provide the void handler function with a parameter of enumeration which will be called by framework when command is clicked."),(0,m.kt)("p",null,"It is optionally required to specify the selection type of where this menu should be displayed."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-vb"},"Public Overrides Function OnConnect() As Boolean\n    AddContextMenu(Of CommandsD_e)(AddressOf OnCommandsDContextMenuClick)\n    AddContextMenu(Of CommandsE_e)(AddressOf OnCommandsEContextMenuClick, swSelectType_e.swSelFACES)\n    Return True\nEnd Function\n\nPrivate Sub OnCommandsDContextMenuClick(ByVal cmd As CommandsD_e)\n    'TODO: handle the context menu click\nEnd Sub\n\nPrivate Sub OnCommandsEContextMenuClick(ByVal cmd As CommandsE_e)\n    'TODO: handle the context menu click\nEnd Sub\n")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cs"},"public override bool OnConnect()\n{\n    AddContextMenu<CommandsD_e>(OnCommandsDContextMenuClick);\n    AddContextMenu<CommandsE_e>(OnCommandsEContextMenuClick, swSelectType_e.swSelFACES);\n\n    return true;\n}\n\nprivate void OnCommandsDContextMenuClick(CommandsD_e cmd)\n{\n    //TODO: handle the context menu click\n}\n\nprivate void OnCommandsEContextMenuClick(CommandsE_e cmd)\n{\n    //TODO: handle the context menu click\n}\n")))}l.isMDXComponent=!0},73793:(n,e,t)=>{t.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAABzCAMAAABEmPyyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAIG+vgBjsLD3sJxgGTgAALCwY2xsbLu7u2MAAAAAY/ewYz5/nGMAOLl/PjgAY3+cf2E9Pff395zU1NTUnD5hYdTUuWCc1H8+GTQ0NItjOBgYGAA4i/f31GOw99SLYz4+YaOjo4E+PtS5fz5hoD4+gTiL1GMAY7nUuffUi/f3sNTU1KysrIvU94G+9zgAOLBjAIGg24uwiwAAOIKCgve+gUlJSRlgnOLi4tScf9SLOLnU1PewsIs4ABk+f4GBPq3u99v3vllZWZqbmtfX1xkZYD5/ubOzsz4ZGY2NjSUlJcjIyGAZPmM4Y4s4OJOUkxkZPn9gf2FhPmAZGffboD4ZYGOL1D09Pff3vmGg22JiYmOLiz4ZPnV1dTg4i6+vr9ugYff326CBPqBhPn+51NugoFNTU8TExIGgoHt7e2Ggvj6BvsvMzNScYMbGxoG+20ZGRr6BPouLOCsrK05OTwAAAGYzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///4jpREEAAAB2dFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wABYqlHAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIFklEQVR4Xu2bDVcbRRSGY00lgFZZKx9GsAGaCgFM27RdUWokSErRRi2aggLVIhEJaG3///G9d2azH9ndzm7COQzMe87uzs7MXuY+e+/sJEsy1qWXQWAQGASQRFDYX1hY2HdUL+REdVr12dzZSiJYEAdH7R7H3GdzZ6swBO1WQZbSqs/mzlYhCEola7/HQffZ3NlKItgXB5Z9Ch8CoZxQfTZ3tgpBYK1tYkLradAx5soZaEqexIp7Zj6RZ0Lzg8Ga3hVEYJdK7faCbVm1XhjEmCsXZSFSw1dkwZq/VZUlqflBXP3poqdLHxQWBUIb8phGMeZ6QjD3vqg4WwQ2iY4NcZ5KMeYEgmVE8/KV+VtvD2buLlrW5ArH9+STO1eH/nMTRSCQjVxBUYAruQslBfaOjdTqSgSohAncDg8CxTVPjDnK8KGqVZ6a24MTKA0PVSdXcFdBZXKFXA1EgdPImruKK0SXyZWiNf/eomNDtKdRWCKUcNsiYiAwQUSteWLMyUSY2/t4kTwgV6Y4viefLKKIpgACp1HWlTMwQF2GiUq56NgQrWkkEeTsw52cdf/UWh0o2CXMXhG++RBEr3nq1u7RwsDrxsbOLmZEnzlnLljGUQR6ucjeEAJ2NIDAaRRVFAhTAgE9LzJFx4ZoTCMHQak5sHP6+Mia2F21WlYjakXrRRCz5smd5iv2ZtNarbzatP3m5GDnvx9xo4DjOBKBbJR1nACdKECfvkXBWv7IPrz/qjUxcbTWqkVOhd4Ij1nz5OzGq4oNBP8W7FO/OYGAop/mArjCcwAdr0hHAwicRtLcL9g+Fw9FOTU6NtKrkwgVy9pd2yg02q/tmIeBL8mjl1C5td2jNZjcOIVlvzle8BTLGHcZT4R3eG7kyR1eCAQ48T0RPMshKlIjd6GToWrHRmp1TYfttaipkNTpF7+Ecs212jHmhIu9qXcbEkFdHKB2K4aAPwqEwp6eiubOFQL3VuZqshAqFwE98X1rHq8UzZ0vBIVCoVZrQBt1LHnquVz4M8FNhK41j1eq5s6FJAIoV6+LkdcKhQUataz3yZcIMUsoRXPnQi4CJeXs+zV7Z7ddOKoF1zzaKiGCutVsHzYKmxM7dSuw5tFWiRFMbK5WmpXczmN7M2YJpZMSJ8JhwR7YzTWOGq24JZROShwFjkpxax6tlBpB/BJKJyVEoLqE0klJEei05lFUQgSQPmseRSVHcOFkEBgEBgFkECgiUH8XqqEUEbzxa3r3a1/tZBAkQqD2LlQ7qc8FQ4rvQrVTokRQeheqnZLNBSrvQrVTIgRK70K1UxIEau9CtZP6dKj6LlQ7qSHwqh9vwc6VDAKDIA2CCyeDwCAwCCCDwCBQQsBLQ+ff3oSWMxl9F8RBKUVB91JA/ivkhZBBkASB53cBjIA+Jv26J474iITkoA9P+kkdge93AfQheaWIjT408+8C6Eukry44At/vAoCAz+f2nN8F0H9H6yl1BL7fBQABnxMCfmAUrbmrmn5jkACB/KKMaxwE2PGRNT+oJYOkc4F8EuBIvweguUD+LmB4CmcXHAHP/PKO89IIkX/3jnwiDFVxpulySQlBtDT+1rSj3hBomv1+pUdAK6UL8cK9x0S4CDIIDAKDADIIDAKDADIIDAKDADIIrEyl/5Kmz7nkYCuVTKnv0gWBPFoGgUFgEEAGgUFgEEAGQQDB6PjDL2UxXtn1YMFVAMHvL5qkJXmqpud0ybY8ORtFIJhp/nYgi/E6CwRbI7OyJC/pCwLXakARCLLr2QeyGK9kCNR8ed50BvuSiW3dlqc9ybUaUDiC698dzPz8IQon+fwPB3JfuiYO2XfH8/mxmUf5b9Eju45aShogYGrX3AyKQPCyeaOK3ew3081/cJcpKuBq89iynk0335qe/aNz47dGOtDcHkt0PVpuVums24K3ZsmtoFNYw4X0570KR3Dy8MvR8THkA9LhiwOxZ+dO4HYWHK7B7dFxuJzNr2PioMI6XYUyLpPqRgDdrGJUx1sjN+goKmS4z9J4cXAR3HNG6+2xg8JHcAQeR1igGuFyc6lTIRAQATUEFNXX4JcIBbFHZNA0OcY3+/pTeEou850nRriEeoi+QhEI4NnNr+EjRnfMNxrbEhVovBSsnZB9Tr1J3h7HNEVuw0V2uNvCMZMjxuhz3KkQVvGn/f5DoQjIJd6NjufhqtgjG0hAAD7MgxHQFEBnVMBG4Bx1IxBhTSwwnGfTGBhV8uCogPFSCHcj8Pdg9+6hKsICtfOTBJHiXsB9gCkYBOEIkN4k8m7mEWU87SkHWNEITh5+5smDWATw7c0I7smESIVA0AsgoE6OUUdhCEbHyS85sYkT7Dk0SH4EdNd5huDaDzx5EIkAcfkTihgdT09L8JSGyWEsEMibT+NFxdZtfw8PglAL1C7o/UkTjrygYxXpwUdHYQikszOPxk7G4Lzcl7JwdPRHceNdBMiM609Rw+GQbXryIHwu4Du1TdmJI2nWaWCXCAGGL2HBK9K2v4cXgajubhc1PPd2LoAh2jFWj8IQZPn2w+0HePIhHcQe9SI5/AjoCUl+M4JOpLDCEfz9AiNDmR6Kf/GzzffIo544lbHK12D8vh5eBGEWuJ2v5IeGrGCrjMBPIHwuSC2C4iqAICjH4fTq3QKprwjkJOLoEiLIcka4uoxRENAbEJwXGQQGgUEAGQQeBPLF2iWUJKDwZlmTm5peBgEjKJWiN4EgrMXZrJZPdIleEggqkZuDILyVNu3FiUBTQ9QmEiGsxdn0lmX9DyI1oKGcXNTRAAAAAElFTkSuQmCC"},74780:(n,e,t)=>{t.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAn8AAACrCAMAAAAgoArZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAIuwiwBjsPj4+JxgGQAAY2tra7CwYzgAAK+vr49toDiLi2MAADgAY9TU1Ll/PniUpGBgGWA+GSlffp/I2wA4iz4+YbnUnD4+GRMTE5KqtbPDzC54nZOTk2Ow90SMq+Ox9mE9Pbl/YAA3VSsrK4tjOD4+gbmDz1iiwcDy9PewY2WvzmMAOH/I5Xp6ehk+f7bK1WMAYwAAOPfUixlgnDgAOD5/uZG4yz5hoLBjAIE+Pll9kH9JmBNNaxkZYE9PT4s4ANSLOD54lixtkIG+93641KXQ42AZGU6Yt2OL1ERERNScfyIiInCOn2ylw6Jquve+gby8vE0XaaysrIGBPglAXjIyMn9/fz4ZGZubmziL1PfxsD5hYTGGrhkZPtaj6tSLY4KCgtS5f3i/3WIue0yVtH9gf2JiYiNigGM4Y93e3RkZGT4ZYIrS7sXFxWAZPj5gnKrR4x9aeJx/f3O31ZLY8n+cf4Ce12WnxZa90Is4OFmYtu2qqipniD09PePc50lJSUWBnmOLi3R0dFpaWnifsurq4cmT3+y8/kBpf5re+oeHh97y86ZxvWGg2zRxkj4ZPqu9xmKjwTg4i7TltLGxsVOQrtugYaSkpC50mLa2ti98olycup1/PnC00qBhPrmcYBZJZXzE4p6yvtDQv8DZ5FF2i38+GQU7WS1ac4xpnrnU1JNfq7CLizJtjIrU9mCgvrJ5yYqKipy5f4qtwIGcq2FhPtTUnEJ7mSJSbIylsoG+vptgtEJ2k16ox2ywzZzU1FaUskmAnVWJp1NTU2msylSYtpPd/CdaeL6BPhk+YCljgm6412KDlj6BvsKxy5rC1cGM122y0DV1l2Gbud6s8YG92y1xlDJmhKzx9ztvjVGbulmVs2GrylWfvsHP1oLL6ixnhmCc1NScYBhScFKGojR5mw1FYtnb2yxrjDCAp67Y6YdSoMyY4YGgoHCqyIXP7Tx9nOe2+d3j54Cqv3W72Th3lqS4w6HG10h9m1CNq6p2wUqFo02LqIuLOAAAAB3ZL8QAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAadElEQVR4Xu2dC5xcVXnAozdMSUsntNDH1iyVztQCkYDGogE1QAih0/Gx2WaSZYs2G+jaXZlWaiuKGZfueqlkJDa4sNlELDA2sbYJptBAy8NosNgARaRuIyBIsNmAVLC1WiT9+X3f+e6955z72HlscjOb7/9jZ84973vPf8459+6wmeUAq1fj60ymfzSOfs4xUznCh5b8m/mIf0co6F82q8IzGPHvCEX5N/PX33g4x0ylHdbfmb//O3ppB/+EmYv4J6TJke7fakFID5n/hDQR/4Q0Ef+ENEH/joLnz8IRivJPnv8J6UDrb1rPn9fxu3DUkur+7yjwz414EQIa2/+VNTjKY7kGR3kUi3jZC4VJdRhQv3+XXMIBg5wBR9ps/TUOmEy+5h13PcThGOb9Jwd8CvgSOo0ELvF4Dthk+FcCOAiYRwbhbgCXPMcBDawjthZiN79HU91dAfwKVHUmnOThzslUMnPMD9UYZyXGODKWxvZ/mnQh//5S8YMfvDbkn4MCFgoF2/OW/du+/cUXnz79llvW/PCDj8b491cH9tzFwYDJ4+/KPXvnhm2fv5Ujopi3Mexf9ak7bo4TPQKX7VP6bXIRTnJgLEucCuARJ1hEdAN4Lso//yWGQmExhyIZLRQq4AwfBTVxAPpuVd5V6p50st2lLj4mjDxWAZv+Bvd/5UD1kH8vsH2v/XrYPxQQ/LMFbNm/y198GvQD+2667/4YLW6e/+S2FcaUdesn9r/t6vv/DNnwnf0DHBuBPe6TP7rjEy9t/mAD/nG/6aoFLwoYmtKEDx5xgsnGSP2a8A/kqlQWxyYDIxXjYvhZSzgVgnwly78uPnQNAVVkRwe+VpOag+m4ErP/4yWW4CjCrU1mPaykj136E159CY4lwD+nmKXzNwU0/Kuek8udU+UDmxj/ePK76dH7r7wySovqrfu/8eT8+ZfteQ1HIFtXLL32WrTvcmD9zf/E0RYbN3KAGTg+t+2RwvPgelRDcTuAJP+0qcY+CojWr2v1pk0rjVkHoQqwIoYiA2BucxaXKnwUpqvSySFFyXF3DA2tc9E/F/yDH6NKPOofAW0hZH6uYEnt6AA7qvaEaTKS74nZ/3lmVauuNc/VtLxW0s/GLcHon1Ms4ebCFNDw75ytt6zZeg4f2MT4509+V264LTT6Tz204tn1j3/73nvnz3/ywFaOBHLnX7FU6Xf65j374/aNG7/BASa34fRbni88D41F+vf06WuixEzwzykMcSCBjXY3EHcdXcrSAr02gAY7GHFj7CsoZh4a7d/BMSGGC+ZaUHJ2jLvu+A6yj/ybNKqc0+04mVLZGam6Y3M4DqA8Y4sL6yIWbOi76jqSz8N2NHr/p9ZZsM+1/XNqwUnbSXFLMPnnFPPUsi6g4V9uzQfvi5zEkBj/blmjJr8Nt22+yipa3f/SV095/KLLHv/2KSDg/PVBcu6bu/bfdvmamw4+u3XPVx+NXk6tyQ/IwUR74fMXPhq90Md1Xt0mBOrpxhTobiaRjRMR+jmrK/1wFWsjpQUcwdBgByNujD1NhzgQY5vmqRibLBhjUHJ2w/hnh8i+kjtQKmWNKjPQicxwoTriurUMxwGUJ9MzBtER/g0H9uXzsBuN2f/VBpR92RpH+Lg1lxfg8BK8PHoJVv6hgNiwJqDp331X3rYrUgYgxj9v8tu8+YkbrKJv++q/PD3/lMcvu+yix0+BJXh+kJxbuvS2B65YccXV961Zsyb6viVi3HOg+gcKF0JjUQWg85sjOu8+9xyOggEnTe0fbpij9Ouq8He2R/KjKsDQfOpPqq4xvZbyPArz5oU/W8SOIWNtQpEKOF4V5d/kZNbyD1fyTNdiFG1AW9UxTw12fx1dIJDtH0x/sJ6XnO48zMWLi90x+z+cE0k/q0tIeVKLNKfA5Zf6S/Br/z3k32Qxj+ejCWitv7tejl9/I7bbMOq89G6+atcNB83Rf8c3HnxaF/DxmzkBSt30/e/fkPshLN00eUboNBEx7eRA9QsLJ0Yt9EBu866XX4lIULcJzc1/kByZYyVuYnB7WssPc5SCtm/BHq6H35FCsVgcxMA8e1/rkR2yJyF0hz4xYF+p1FVaGZ7/qpmu7spiWCSt+W+so1br6Izwb7gEH5lSfhz1g16p+4/I539uFvTTL5dH2QmyW6vz8hfUEoz6/ZbtX9XNFos07/rlDf8S7z+ei1w0crAaXgn2PXHDywet0c+dci8K+CguwRdddMq93wlugXPvfOdjj+Xuo4c2UD5sTZR+4Pqj9534gUfCCz0Rd/+xaRO+RvtXib8VICL927Rp0zwot3HjxIRTLR44sHYtJ9AaYf4XrBm7YaQJKKcCIToL9lIH9x8KnPsUhk7dY1U30+WOwNLcY+3/hjqA3VVYs1WcB4gMr7j0qmP1/CX6+V85vPcjyqimCk5qm0Fk+Qt3L/8J2ffeuy/9GEeyfzid1opFbLvoCWhtOBKYOMABg5w/+b3yytWWf7DtAwFffBAF/PWXrvgbjgdyGx6D1fpKb+kOWTOxZD2HdHKQ+cTBR6C1KP/iSPIPbwcSmMD1l8MBoN88GMOJiYkl4N9agBOAhPlvaDE9+UNrLfrVdqyS16YwBcVbcBKRhXuSzLhbKw1AiOMAyNON+nUM9oT8y9AD6XwxOPOY/R8Q75+TnaT2QpvD5ddcs/zSvwP73vu9v+UoBP1D/aDCIbAPUPEN+Lf2BA4Y5HDy24WT39W3n6k/YoGk95GA17744EUf/9FTxvO/3BNPvPzd3Aa078TPnXqqWQ6J0o9c/3HHI9BaI/7No3k7pB7hX4ZIoj8FyIISXPclS/hIYwgv8RBeajo0RqdUApdRWptR8iqfD01/U1MC89wBaE17LAyxVSdDD/86YANqGjSpnv7oJx63/4OiAwPR/pXLWZiZo5ZtvOt44a3fe+8Lb/03jiGguSrYPASf5yHSL9m/uwk+YB54gN6spJw/+d15ppXkC/i/n/hvKyl3w1de+b/cZpz8PmclAf7AWkk5mGk//OM333Dw/FxkDxkzyZ23kT53hEoKhmqQNmSESuIDYomnXzhpvMS/RrOTYD4amMQHJW5EqUr/2ASdm520G3Wu5fGexk7SiEgqwXa+pzzJ58WR2AsHOgidyJTsUpn8OL7R8HNS7P4P/JuM9A/AKdB2m1n+wjXLr7F+AwLtlYtj7sggTX7aY9OW/ePJ7+o7zw/5xwKuPz5c6pUv33lP7ipcuqP886YdKwld/3DHm7c9+9BTkT1krCS12yfn7HHiXxEQdlKgX1Rbw/nFtWq1FkoqDQzATSqM/EBUqR1LltAmxk4aLcHqN1zAYbGTNMJJMGc62e5MpctKgg5UYecH82LoY5DRfv/MSQn7v8lsM/7BEvx17d4DKVbLHbWSWy4VR3HyC2aAmPWXOmbC/llJatdPnPOaUCkU8CXa91ml9t/zrW/lduHc+eZTrVL6+mSVuuqJXbd3HH8r3SFZpXTMpJcmToVX5Z9dSvPPTlpyIFh8rSTAHcbLOJixk+g+gZbTBeVwKecA76GtpOpQIZstqp1mRCkPO8m/h7CTtO8fRHbDQyUl7P+sp3satATH+Ad88YuWf2VwLjM6ObzO6YfrFnwnIm7/98l3ccDH8y8iySeUBAK+Td1Qm0m5Fdv+I3eQ5s6Pg7Yci+jjbpXKHVz/7B3+PrLebvzPxFfglf0zk3CAOAjU2w3FaGbtngzcc5pJJf0Wtd4egjD5dT0lWhgbKKXpF1WqVsorPaaqMH7/lwzUHmfn8p980vQP9XOyhWxXxskWBwdHODrev/Bnxvcv9uMUlbTifXyvYCXlVpyQe2XXywef3XozbA45Etm2jQOEkZT7PEx9/oxVbzeqXz7w3ad8/4wkECXOv4RueOzZg69mkuFfZCmFnVSqFL2Fsd5Shn4RpQr5vHriM1WF8fu/ZJL8e9fdpn+K4QUV2GOMDNYx/4U73Zx/To5/7Wsn5bbmrn5ga+6cgforJJMb9c91z/zy2rXf2QOccMIJmMT3pkCCfyaRSZH+EXzQQIWdwaa83lLeb1MUoVIrcaNPD8enqjB+/5dMwuqMSzAHDZR3O7RnIYfcP2VNRBLsGD//FG/lKCKK6Uhyq7ffA/6BfXAKRpLmCtBoW2Az0GgphZ3kZnZ4z/2np0LQE9Y5ur2fqlT8/u8wEOffDMJbevUXIaDZ/d+0cBT4JyTT7P5PEKaDZvd/gjAdpLr/E456Ut3/CUc94p+QJvL3J4U0kflPSBPxT0gT8U9IE/FPSBPxT0gT8U9IE/FPSBPxT0gT8U9IE/FPSBPxT0gT8U9IE/FPSJMk/8bmdHd3z/EYHwv9weEkmizcUptC25HkXze/M7WGXGiycEttCm1Hsn/Vqv8HIWvlKf8tEYMmC7fUptB2TOEfh+j/kZvTkAxNFm6pTaHtSPJP+6OqjlsDN6zFMZEmC7fUptB21Osf/bHTsQZkaLJwS20KbUdd/g1ks7Vat+s4PfXL0GThltoU2o665z+F+S80JdFk4ZbaFNqOuvxTfzwcAm4T/jVWuKU2hbajLv/w71pnx6oNqdBk4ZbaFNqO+u8/XKfaiApNFm6pTaHtSPJv3N3d3+UM1ZyRzJibhTuBRn4Z0TU51DPZP1wbW9AD9xJ1Fx53hxd0ZxZ3dvYPOw23KbQdSf51ZSuZ/nJxQbU0PFItO538N6rrY9Sp1HZ3jtVK/aPOQP2Fu8qDqydrFWdkZb7mNtqm0HYk+ze4wN09lC+XSiuz5Z7GVkL0b2RdZfV4f9Gt1V943O3Mr3TBv0JPI8WENiV5/V3nOMPZHWOd2cXuQIMqdA3s7nEzw12dCzrL7mTdhbuywwuy7mqns+Z0NVBMaFPqu/+oZRu+DQ3+adpsI4WDNsuNtym0HUn+BQrVyg2r0GThltoU2o4k/4JffHXp/5ZnfTRZuKU2hbYj0b+xsZ6enk5gx+icOaPj410NPAxpsnBLbQptR5J/QNf4KBiBSoyNdY82KEOThVtqU2gvpvBPEA4p4p+QJuKfkCbin5Am4p+QJoF/i2YBJ/FBIpRz1i8F/6OaRv21GDRZTGh3NP8u5kAsp72aA07vG/ZyyKaRWjSaLCa0O+KfkCa2f+fBsnreq3vf8OnjZr1xu+O459JC637kVcce8//BEqn840SDRmrRaLKY0O6Y+79j9jqLTlp4fbX3OAiddsxe91yYdcAK91z0zJr/vESOUzRSi0aTxYR2J7T+Lrz+N7c7va+n6eekhT+Pnn1kOwQhyfLPS+Q4RSO1aDRZTGh3wvu/8+Bdra+LLj4NZx5UgCyz/PMSOU7RSC0aTRYT2p2Qf71/dHIwBcEqmOAfJ3KcopFaNJosJrQ7tn+47uEWDEabtl74/mq2zPLPSzRopBaNJosJ7Y55/zHr4kUwzIvgFvRn6H7A6T2Ob0FRATjgW1C1RHKiQSO1aDRZTGh3Av90lF+t0mQt09O40BaIf0KaiH9CmkT7JwiHB/FPSBPxT0gT8U9IE/FPSBPxT0gTzT/8HQR+7W4qet+w9zTOt/B649cf9FsM81ci582aNdUvziJKRf5qRZiB6P5d7DieWEloz+cs/6Ke3dm/II4iVKr3OOjLH2yXX/rOeCz/3HPpiwCJHAb/6Kt/gPg30wn5d5JzGi3D9K33vSqMq+gxeyGRFkWwBYXBJfIvov3Tv5iP/nlZ8f0krzaNUCma/ygj5Fel/G/lCzMJy7/zQIy/r+JXS9W33lUYp6OP+t+HV/7RTLnI3qORSV5GisEvUEFWrA7fe1+/XdVGiUy41EJwH95w/uNS3rfyKVmYKVj3Hzy+5FfwXauFv43zjvd9eIjAODyKXn+9jBQD/nlZ6QvNiy5WtemES2FvwG/0j0t530rlZGFmYM1/yMJj0UNlggrjG6zLKILvHx1F++dlpBjwz8sKizlwsapNJ1wKWHgsNIn+qVKUx++jMEMI+4drHAw2mcBhiO09zv8+PETAf3REzuhQZi8jxXj+wUuQG2rjEBEuBeC6689/kEfmv5lIhH8w3rANVP6p8Gkn4ch734dX/uEtgtoj6pBJXkYCC3BWvqtQtVEiEyq18HfgB5Zp9I9Led/Kp3RhphD2D29Df47nPw7jKkwm6Pe/EPnGV0Xf/3JGhJ4/e1kx/hivNo1QKQziGg3v6v73GGiSv5UvzCQ0/w4tOJW1gnJUmGEcLv+sHV/jiH8zksPhH67i1h1v44h/M5LDtv4KQgTin5Am4p+QJuKfkCbin5Am4p+QJuKfkCbin5Am4p+QJuKfkCbin5Ams1YLMwEeziMc7qzGrOy0s5rfm6S14i02rjF9NR0G2sU/fg8Q/+IQ/6Yf8a9+xL/pR/yrH/Fv+hH/6kf8m37Ev/oR/6Yf8a9+xL/pR/yrH/Fv+pnKv9qWM77AwWRmn2UHArSBm/0mDjSAPu6zBwcH3wS9eoaPQ4SStNJzofDge5bykU9EjyOx/FNd4QBdJXVy0MoZX6CmBrFiFTk7yBBkxywYMxdf9mFuv07EuPaUxwxwNdHYA/vZCnIBH9XHjVjkOj44NEzlX1/lU6HximR6/dunX9mgeG0LFv/TL9iSadkT/YtuPMo/owOM4Z/XlezOZZh19tu/5J/cXIigpnYug9h9mFLbgtpj36zsO5dB45i5b9UzQZ0K49qH/aN2YmnWv96T3+L9BQFVZFr802o1mcq/2WfVacxh8a+PB+QI8M/rCs9sdGK2fyQUZez71K9CtzBoZ+fM5KFfp8K49q37V59IN1Y8U75GuvZ+SB21RlCrxRT+7fzjpX3vh48qrA64cKlXnPnxbfZLWwYHn+lbNUgf5rN4PYDR9C8sE/YPCmHmYATUugPNQdr7v2QsQ1rxncuUXChZbQs0q3rC2bGSZ2pbHttirLFh/7xWuRPYY69hv2N+jVpVhn9eV7x3ckvVz0ohMPnVttAMh2kgdSg7Zpz7Jsrk16Xwrz325ozPYGY/QEA7/tnyyATE+Pe1yi/vhZe3ZM+ufBPmN5wPwbPKwyDa2ZV/Pvstn/GnvN6TfWODHBdgeUh53al4FK5Bj7kgiMBDqA0KYvM6U/gHV4wmFLxcv7tUvdL1xVVlNpzxXBgtWjZmw/ZFBc6iyUOfh8L+/cZSyuxlnAu14bGvgTH96AbRlorK4ETi9YSyYyV9H6KVjicZIuyf1yp3wvDPi1M1cvWM4Z/XFS8d3Qn7h1cMg7PPwgoh3c6OGSCHV1LVqYAS6iLi2ezDj4MfUJB/6mx5ZDTC/gGvOxWUeLj3ZHDobDxGjygBpieK0fx7t6+KlqMfAr8PFoFuMTVQDPlWucCPUP6hfg36h0sTXj/1QVSvNFZkACTQR5avrbqaPJr80SXC/iFQijNSjX4AS9Lwe+jjDvMTdAlax7Hwe4LZefKgmSSmcZwg4fOid4+6rvnnxVGNXvWM6R93Jdk/rAJywBv+B1mM7NQbOJjrz12qToV37akbWLcfYMg/dbb6CSti/AOtXvd7OBWBhzTFwQ9MVPACMbhG+ivljZgb0XM8jPck14FfZFu4hodJWxQc8jzsR6haoWlVo0ayf/TpxJfalkEYBvUKUz0C1w/Ona4JD6I6wgD88AAQEf6hCqoUZFSDgiOEteG1xBp9zHHHCaC2pYJF/J6QMWpkyRfqN6P7x4173Qs64TfsxVGNVDuessLyT3Ul2T/sCKRAbdAvOjEzO75hv3DuVvjzm3/tlVtQoR/YuWwQ9zzknzpbNTI6Yf94NQURwYXes3EigkjlGwRAFlw5w/6ZOcitd0NUTA2YTvfNMEcGBSgPOGpPf1P4RxOGeozQtwovEb56l5BMi/Zv3xmfDqaNCP/oJpCGmDI25J+63BWcMfyeUFXqoB7/VKt+JzT/tI75NfqE/MN2vKbwPewfnQdsjeEIJIMDOzu1Acl0Q+ynIP61V92APH6A0fyDFxqfgCT/QKyp/Xs3r8NN+afUtfzDTF6lHon+qV0xXU/vAF69C2T5h5cFr5CK/XP6rDIh/+iTjNWqjKpGHH6qDSqhcfOwxh3mDLjsc0FAvyeYnQ/q8Y9b9Trh+QcN+3FajT5h/7RJD984iOVVUzy9/esvwtu+t/8CXkArO11VyBw861Nl+HJjXaobkNkPMJCmnS0X8IjzD5bDf4QgqEH3AxeAZugIrZ7KP2+RBFkgovdDZg7Nv8gaMF2p+1HcbHIBv1ZYlendI9E/HoC+Vc/sw/tNfqXPau0P1ZQX+AcLAD1EwNjs7Ip/lYCwf1Bx3yq84ioj1QjXj+5B/IdmHkHxvj+BF1irsBe4ZHk9oex4gPcfU/sHrUIn/U5Aj72G/Ti/RqyeMfzzugLFvDPw1PD961tFEX2rcLLeuYw2eXb2fRCLmTHerxMIrn3y/Yc6Wx4ZjbB/CM5R19EWTd0awKykEsgn9A/cYVNBKeQ6M4fun4qOSKcYutnxC0BF+EJOayT6h+cLwODgY4mz4GLwI321Jpv+4cMYurSYQxfA9A/XFPr1wBl/jbVzRlxssBzsbN7+DzAHwX7Gv8xacdz44M6HrjUazz1R2eHgPbA0J/iHjeNGCQedDqkTdB7csBfn10jdUhj+eV2hxvlpkTq5z/AJcjJmoOtIzhnZ8RUTWdYzfsWvExKpDCTj3AgFMI8fILCrtM2Bs/VGJiDav9s+ixPRZ+n5y3/RYxTj6QpmhENvicQyII+RQ/cvqgZKp5J0i+xFYK3kn6nfFPu/pjHWT3PgTMyM0SQUr4PWSutMX02HgfDAGni2NU/rNSCHxj97L8LvYayM0Yh/TXA0+zdbWzyR2IGzM0Yj/jXBUT3/WbQ4cOJfE0zh35GC+Fc/4t/0I/7Vj/g3/Yh/9SP+TT/iX/2If9NPhH/8dzgE4TDA1gVM/fev2uSjdYQiVy8Z8e/QIlcvGfQvm43/UVcwKsX7ccpCHOLfVCj/Vsf+eP5Fp+KPkIRcn2Ro/cV9YdyPuoJRKd6PkIBcn2Rk/3dokauXjPh3aJGrl4z4d2iRq5fM1P4JwqFD/BPSRPwT0kT8E9JE/BPSRPwT0kT8E9JE/BPSRPwT0kT8E9JE/BPSRPwT0sNxfgp8sydz3AoO+gAAAABJRU5ErkJggg=="},70858:(n,e,t)=>{t.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAg0AAACyCAMAAAD2xQwvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAANSwY2NjAPn5+QBjiwAAY2OwsFRUVGMAAKqqqsXFxThjsIuLOAA3VVCNqwAAOIs4AH/H5bDUi42NjXV2dgA4izgAYzgAODiL1EFBQdPT02Ow95mamTgAABgYGC5bdDg4Y5+zvoKCgtSLY7BjAHC109SLOPewizg4iziLi7y8vItji1mYtqvz+WMAOKSkpPewY2MAYzIyMvfUi2WnxXyXpos4ODiLsIrU9mJiYgBjsDlxj0lJSWOLi8jIyNPb17CLi/+2Zvnzq3e925OTk2M4ADg4AEN/nWa2/zqQ27CLONuQOl6evGOw1K6vrzFti2xsbCUlJT17mZA6AEuHpXZ4fgA6kMfHx7W1tjg4OLGxsZ+fn2yvzXW72YPM6szMzFlZWVWTsePj43zD4S1nhUmEokF9m2mryTZzkTp4llybuYbQ7mOkwhsfKAA4Y3t7ezqQtk5OTysrK7H0rDt1k/+2kGa223K31VeVs5BmkDRvjUSCoE6LqW6y0D94lmepx3nA3lKPrX+aqGChvwAAAGaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///zVYvKUAAACFdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBtaF5CAAAACXBIWXMAAA7DAAAOwwHHb6hkAAASXElEQVR4Xu2dj18cxRmHqSsGqKlngYj8sHq9YkQR9GwFjMGctImJxii2OYhKPGuMmpaqaWsTNbb+432/7/vOzO7e3gG33K/lfT5JbndmdnK377MzS27e7Eg5Ctz42591yziA8uT4rG4WiIQNjXpDt4wDOAE2GIfGbDACZoMRMBuMgNlgBMwGI2A2GAGzwQiYDUag4DY8cxo8o3vGARTchtOfrq199dNp3TMOoOg2kAxffXybRwjwPy03Mim6DeTCx48//ulPb3707999+OGD1qNEaVo3iMWN9EYTlcfW8NK6QVQZIeZ0h6jM6EabY/pN0W24f//ixVvvv//FF3dv3753793Tv9eKNNWdJzi8TJMNqzFVhMoIF7WzwUVfMRv6RbDh4hpBAwQNDxgdPm81OFRmKiFIh7HhuTFE12wYAoINt8SFxz998yNy4ZU7LWyovbhWPbOMLRrgpy8jXn6DN0doa1FepGhmdZTac2SpnOYN2FQbo6lBo+2i747ifd+pHBOVHhlDN4NC0W14fw03DhgYfvjwwZ2fv2xhAy7+Eib5Cm2sInp+w1VHi4hbSUsotgg/Ir+IlqPLaCNHys2C2uCPwr7vVI+JSk+H+WkAKLoNX/Ak8SYmiVfuvP3Cdy1sQKgQWRojsLcRNhhEWkp0BMEBVbrToGOkvDSH3crrZ3WfWtCYMLocjqIjfKfumKikA8iAUHgbZJL44fMHd97+8rtPfpVtAyLJf0iwKcZ+g+Hrnod0H2voM40GqxR1giI7V3vp2xfXeBzRFvGj4I/rNHYMGg0MRbfhtkwSn9Mk8cIn//3+g2wbMLcTMxo8xMttMNk21MZmfEticaN6lqaJRb3cM2xI9U6YDT0gZoObJDAwfPDZ/WwbZMCma50HCYzlfoOBDVISmykQ6kddS6J69jIF/GEXYLEhHEX7qd4Js6EHBBvu6d0jDwyfXbyVaYMGp7ow1+ouEtdyBX+4iV5iXeGWKH8eQwX9lFDdUV20RTgK+6F3PcZs6AHBhndpYPiZ7h7FhR/vZtqAIAHc+pfo50GeIPwG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"},26846:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/commands-menu-2b2dcbcd4b4b0fd665e7d58d78c748d1.png"},52427:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/commands-toolbar-be5c6e183bc0557645950c4e3cbd6446.png"}}]);