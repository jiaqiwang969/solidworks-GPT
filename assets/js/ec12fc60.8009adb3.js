"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[13453],{3905:(t,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>h});var n=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function m(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},l=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",A={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,l=m(t,["components","mdxType","originalType","parentName"]),d=c(o),p=a,h=d["".concat(s,".").concat(p)]||d[p]||A[p]||i;return o?n.createElement(h,r(r({ref:e},l),{},{components:o})):n.createElement(h,r({ref:e},l))}));function h(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=o.length,r=new Array(i);r[0]=p;var m={};for(var s in e)hasOwnProperty.call(e,s)&&(m[s]=e[s]);m.originalType=t,m[d]="string"==typeof t?t:a,r[1]=m;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},20002:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>A,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var n=o(87462),a=(o(67294),o(3905));const i={layout:"sw-tool",title:"VBA macro to capture SOLIDWORKS commands via API event handlers",caption:"Capture SOLIDWORKS Commands",description:"Macro allows capturing SOLIDWORKS and user commands into the list box",image:"capturing-hide-command-id.png",labels:["command","event"],group:"Developers"},r=void 0,m={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/capture-commands/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/capture-commands/index",title:"VBA macro to capture SOLIDWORKS commands via API event handlers",description:"Macro allows capturing SOLIDWORKS and user commands into the list box",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/capture-commands/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/capture-commands",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/capture-commands/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/capture-commands/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/capture-commands/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"VBA macro to capture SOLIDWORKS commands via API event handlers",caption:"Capture SOLIDWORKS Commands",description:"Macro allows capturing SOLIDWORKS and user commands into the list box",image:"capturing-hide-command-id.png",labels:["command","event"],group:"Developers"},sidebar:"tutorialSidebar",previous:{title:"Application frame customization using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/"},next:{title:"Macro to close all SOLIDWORKS documents except active",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/close-all-documents-except-active/"}},s={},c=[{value:"Capturing standard commands",id:"capturing-standard-commands",level:2},{value:"Capturing commands from the custom add-ins",id:"capturing-commands-from-the-custom-add-ins",level:2},{value:"Creating macro",id:"creating-macro",level:2}],l={toc:c},d="wrapper";function A(t){let{components:e,...i}=t;return(0,a.kt)(d,(0,n.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This macro allows capturing of SOLIDWORKS command ids (e.g. toolbar, page button or context menu clicks). Commands are defined in the ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/swcommands/solidworks.interop.swcommands~solidworks.interop.swcommands.swcommands_e.html"},"swCommands_e")," enumeration and can be called using the ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~runcommand.html"},"ISldWorks::RunCommand")," SOLIDWORKS API method."),(0,a.kt)("p",null,"This could be in particularly useful when certain SOLIDWORKS APIs are not available in the SDK."),(0,a.kt)("p",null,"All commands have user friendly names however they could not always match the names in the user interface. This fact could make it hard to find the correct command (as there are currently more than 3000 commands available). For example Hide Sketch command in User Interface corresponds to ",(0,a.kt)("em",{parentName:"p"},"swCommands_Blank_Refgeom")," command id."),(0,a.kt)("h2",{id:"capturing-standard-commands"},"Capturing standard commands"),(0,a.kt)("p",null,"This macro helps to capture the id of command directly from SOLIDWORKS by clicking the required command."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run the macro. Form with list is displayed"),(0,a.kt)("li",{parentName:"ul"},"Perform the required action (i.e. click button or menu item)"),(0,a.kt)("li",{parentName:"ul"},"Command id is recorded and displayed in the list")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Capturing sketch hide command id",src:o(75607).Z,width:"726",height:"420"}),"{ width=350 }"),(0,a.kt)("p",null,"The command id can be looked up in the the ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/swcommands/solidworks.interop.swcommands~solidworks.interop.swcommands.swcommands_e.html"},"commands list")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hide sketch command id in swCommands_e enumeration",src:o(38123).Z,width:"854",height:"372"}),"{ width=350 }"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It is not required to explicitly use ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/swcommands/solidworks.interop.swcommands~solidworks.interop.swcommands.swcommands_e.html"},"swCommands_e")," enumeration as it is defined in another interop (",(0,a.kt)("em",{parentName:"p"},"solidworks.interop.swcommands.dll"),"). Instead command id can be defined as an integer or custom enumeration.")),(0,a.kt)("h2",{id:"capturing-commands-from-the-custom-add-ins"},"Capturing commands from the custom add-ins"),(0,a.kt)("p",null,"For the standard SOLIDWORKS commands, User Command argument will be equal to 0. However commands cannot be defined for any custom add-in or ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/macro-buttons/"},"Macro Buttons")),(0,a.kt)("p",null,"If this command is clicked, the command id would be equal to one of the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"User specific command ids",src:o(79919).Z,width:"1065",height:"187"}),"{ width=450 }"),(0,a.kt)("p",null,"Command would indicate the type of the button (minimized toolbar, menu, macro button etc.), and the User Command Id will be equal to the user id of a custom button. This is a command user id which can be retrieved via ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICommandGroup~CommandID.html"},"ICommandGroup::CommandId")," property while creating the custom commands manager in the SOLIDWORKS add-in."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Capturing the commands from the custom add-in",src:o(48823).Z,width:"400",height:"257"}),"{ width=250 }"),(0,a.kt)("h2",{id:"creating-macro"},"Creating macro"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add User Form module to the macro and name it ",(0,a.kt)("em",{parentName:"li"},"CommandsMonitorForm"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"VBA project structure",src:o(31183).Z,width:"766",height:"271"}),"{ width=450 }"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Drag-n-drop the List Box control onto the form and name it ",(0,a.kt)("em",{parentName:"li"},"lstLog"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Adding list box control to the form",src:o(60506).Z,width:"1076",height:"460"}),"{ width=450 }"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add the code to corresponding modules")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Macro")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},"Sub main()\n    CommandsMonitorForm.Show vbModeless\nEnd Sub\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CommandsMonitorForm")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Dim WithEvents swApp As SldWorks.SldWorks\n\nPrivate Sub UserForm_Initialize()\n    Set swApp = Application.SldWorks\nEnd Sub\n\nPrivate Function swApp_CommandOpenPreNotify(ByVal Command As Long, ByVal UserCommand As Long) As Long\n    lstLog.AddItem "Command: " & Command & "; User Command:" & UserCommand\nEnd Function\n')))}A.isMDXComponent=!0},60506:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/add-list-box-control-65af831aa1ffddfd4017e0fb267c5fdb.png"},75607:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/capturing-hide-command-id-0810a06e7cb0f21f2ded8f76997f7f26.png"},48823:(t,e,o)=>{o.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEBCAMAAABhWwMYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAADqQ29uQOpCQZgBmZv7+/nrF3+i9tSYAAAD/AHVLAJuftdTt1DoAAAA6kJDb/+fn5wAAMpdUSzoAOijP5P+2ZqCmvNbw1nvc9D33Pe/87zo6kHn1eX48MmYAAKa/vNv/tl09Tbb//16l29eQgvDw8E8mNf/bkAAAV6OGVyVrnD/O8r/V7Kvtqxb9FtLh8XjB3aCgoLLL5c10Y6lCL0MUIln2WbZmADo6AFwrAABmtiYrWAArfEGG2DoAZltqV+WhlLnR6ebz5v//26a/22a2/5651aG719zc3JC2kL5bSaK82CYAMpA6AJm10UKInKake45rMZTxlCr5KqzF32YAOlTT8qtSQkn2SY+PjxQWFrt9ccja7vLOyJDbttfl86jC3UJCQsLswv//tmz1bKY8KHa/2pg3JNmajrhgUNJ+bpzl9OLi4t2jmNuQZlNWZrdIMxtDSuX+5ZVrZ2Zmtou82GY6kDQ0NABMnTb4Ntr+/iVruiYAWbuam6V2cMTY7aK8mgAAZovyi6nW4Nv027a2ZqK8ueS0q4ZMReGYi+Dt4EH2QZPF4I3h9EQAMrfutyH6IWTX857ynr6Jg5A6OrBdTGJQf5hGOcze8OCroFL2Ut753sHu9Tpmtrm5uaeJfO3EveOdj6mLWb5SPUWN4MJmVdvo22lpaYLzgqvEwHL0ckfQ8o6/29vn9AAAOmH1Yc/oz2Co3nlNALJBKhxUW/L+8qnCnadYSUIAAO/IweemmTL4MiZtvqypft2ThR37Hc2Lfjn4OZ1EM0OK3GAsAOmpnKzp9I5BN2vZ866OWkL4QqFNP7F8eLtaR4JGPRoaGq7GoMhpV4Xf9MjyyLODf5Ti9F3V831QAN+Uh+zGwJNvMqPm9AAtf7dDLPPSy5HC3a7HwXPb87pJM9yViKvxq6l6dMNeSsOCdmKr4Y1KQbCsgEzR8qjCvrZgT9qdkZ5XTuj16CdwwaaIV39ANlApOI9GO/DLxEPP8pfI4uimmYA9NKimfaFGNAAAWZdxMwAAAPsShDwAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAMPElEQVR4Xu2cC3wcVRWHp5UtDWxFhLBGayutNvVRxOg2BktVGkQFlHa2GkVsIBGrFleD2hao2rqCGiRr8MVWsVbUENFgMfJYSozUR6kKikpVQNSiqIgWEZ/15zn3ntmdzSa7TTYzc0z+X9i5c+/cmd75f3Nnd7ItTgyoAkKU4QlZD6Ll9tutCCtk/dlXrjMrIDLWvP21XBgh61+z7hUgai54HxsxQs6GDw186msiZP2V0gKi5dv0PmKEYILooCBkUBpAtPxivQiJvQRoAEKU8RYI0cVPIEQXEBIwxxybrM6xx0hvv5BTQBAs2nRvdTYtkt6nnAIhAZO891vVuTcpvSEkcJJn3fRPw0030X+8XqwXOAtCQiP56Iuq8+hoQk4FQZC88bNFLk+n0z/2lR43JqX3qad+eDQhF7ecyMXTl73TVEdwmEOYDmPy3htG33Uaktz2wSJpSjp9/28uN+U3pJHYVpuQC2VlLC5uOfKFECIkt+0tcAuLiKXfbYszb5HmvXsDFkKMses0pETI96wKszj/d6MK+VFBSGuR+S0ncvHwsmtaH3acIxe2tq40xfyWV96w+NzDLjSduM3ZwJ1N4zNa6D52xmxn8bm8jXcFjF/I3lvuNzKI9PlnPlUaiW1J6d3aOoaQW7mgVM84bWHrZxa2rmQ1i8+d3/ICkiNCVlL081s20Ms0kq+VzrJruMXuajqB5Np7fFz3HWsk/eQ3XidNzNqikCcUhLQXeXDXrVxsX/bLf190PK18/bKFpvHBXTdTbQfNjAPHm7Z22i6NG6jbDbQb7WR3pSVoby8Vcs8n0o9j0v96gzQY1iald3t7FSEP7nI4ZP5c5TgkhNt3sID27Qesqq8WG6kCISNJrv21jz3WBxn529uk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"},38123:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/sw-commands-id-5b1f01b0ec15916268bb3952ab291830.png"},79919:(t,e,o)=>{o.d(e,{Z:()=>n});const n="data:image/png;base64,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"},31183:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/vba-macro-project-57bb37373ba524734765028183992d40.png"}}]);