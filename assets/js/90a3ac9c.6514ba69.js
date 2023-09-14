"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[83995],{3905:(n,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>b});var o=a(67294);function m(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function t(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,o)}return a}function d(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?t(Object(a),!0).forEach((function(e){m(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function r(n,e){if(null==n)return{};var a,o,m=function(n,e){if(null==n)return{};var a,o,m={},t=Object.keys(n);for(o=0;o<t.length;o++)a=t[o],e.indexOf(a)>=0||(m[a]=n[a]);return m}(n,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);for(o=0;o<t.length;o++)a=t[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(m[a]=n[a])}return m}var s=o.createContext({}),i=function(n){var e=o.useContext(s),a=e;return n&&(a="function"==typeof n?n(e):d(d({},e),n)),a},u=function(n){var e=i(n.components);return o.createElement(s.Provider,{value:e},n.children)},c="mdxType",l={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var a=n.components,m=n.mdxType,t=n.originalType,s=n.parentName,u=r(n,["components","mdxType","originalType","parentName"]),c=i(a),p=m,b=c["".concat(s,".").concat(p)]||c[p]||l[p]||t;return a?o.createElement(b,d(d({ref:e},u),{},{components:a})):o.createElement(b,d({ref:e},u))}));function b(n,e){var a=arguments,m=e&&e.mdxType;if("string"==typeof n||m){var t=a.length,d=new Array(t);d[0]=p;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=n,r[c]="string"==typeof n?n:m,d[1]=r;for(var i=2;i<t;i++)d[i]=a[i];return o.createElement.apply(null,d)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},63537:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>l,frontMatter:()=>t,metadata:()=>r,toc:()=>i});var o=a(87462),m=(a(67294),a(3905));const t={title:"Adding sub-menus and spacers to SOLIDWORKS command manager using SwEx.AddIn",caption:"Sub-Menus And Spacers",description:"Adding sub-menus and spacers or command tab boxes in SOLIDWORKS command manager using SwEx.AddIn framework",image:"sub-menu-and-spacer.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0},d=void 0,r={unversionedId:"codestack-clone/labs/solidworks/swex/add-in/commands-manager/sub-menu-and-spacers/index",id:"codestack-clone/labs/solidworks/swex/add-in/commands-manager/sub-menu-and-spacers/index",title:"Adding sub-menus and spacers to SOLIDWORKS command manager using SwEx.AddIn",description:"Adding sub-menus and spacers or command tab boxes in SOLIDWORKS command manager using SwEx.AddIn framework",source:"@site/docs/codestack-clone/labs/solidworks/swex/add-in/commands-manager/sub-menu-and-spacers/index.md",sourceDirName:"codestack-clone/labs/solidworks/swex/add-in/commands-manager/sub-menu-and-spacers",slug:"/codestack-clone/labs/solidworks/swex/add-in/commands-manager/sub-menu-and-spacers/",permalink:"/solidworks-GPT/docs/codestack-clone/labs/solidworks/swex/add-in/commands-manager/sub-menu-and-spacers/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/labs/solidworks/swex/add-in/commands-manager/sub-menu-and-spacers/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Adding sub-menus and spacers to SOLIDWORKS command manager using SwEx.AddIn",caption:"Sub-Menus And Spacers",description:"Adding sub-menus and spacers or command tab boxes in SOLIDWORKS command manager using SwEx.AddIn framework",image:"sub-menu-and-spacer.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Hosting SOLIDWORKS commands in menu, toolbar and context menu using SwEx.AddIn",permalink:"/solidworks-GPT/docs/codestack-clone/labs/solidworks/swex/add-in/commands-manager/hosting-commands/"},next:{title:"Managing SOLIDWORKS documents life cycle via SwEx.AddIn framework",permalink:"/solidworks-GPT/docs/codestack-clone/labs/solidworks/swex/add-in/documents-management/"}},s={},i=[{value:"Adding spacer",id:"adding-spacer",level:2},{value:"Adding sub-menus",id:"adding-sub-menus",level:2},{value:"Example",id:"example",level:2}],u={toc:i},c="wrapper";function l(n){let{components:e,...t}=n;return(0,m.kt)(c,(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"adding-spacer"},"Adding spacer"),(0,m.kt)("p",null,"Spacer can be added between the commands by decorating the command using the ",(0,m.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_CommandSpacerAttribute.htm"},"CommandSpacerAttribute"),". Spacer will be added before this command."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-vb"},'<Title("AddInEx Commands")>\nPublic Enum Commands_e\n\n    Command1\n\n    <CommandSpacer>\n    Command2\n\nEnd Enum\n')),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cs"},"public enum Commands_e\n{\n    Command1,\n\n    [CommandSpacer]\n    Command2\n}\n")),(0,m.kt)("p",null,"If command tab tab boxes are created for this command group (i.e. ",(0,m.kt)("em",{parentName:"p"},"showInCmdTabBox")," parameter is set to ",(0,m.kt)("em",{parentName:"p"},"true")," in the ",(0,m.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/M_CodeStack_SwEx_AddIn_Attributes_CommandItemInfoAttribute__ctor_2.htm"},"CommandItemInfoAttribute"),"), spacer is not reflected in the corresponding command tab box."),(0,m.kt)("h2",{id:"adding-sub-menus"},"Adding sub-menus"),(0,m.kt)("p",null,"Sub-menus for the command groups can be defined by calling the corresponding overload of the ",(0,m.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/add-in/html/M_CodeStack_SwEx_AddIn_Attributes_CommandGroupInfoAttribute__ctor_2.htm"},"CommandGroupInfoAttribute")," attribute and specifying the type of the parent menu group"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-vb"},'<Title("Sub Menu Commands")>\n<CommandGroupInfo(GetType(Commands_e))>\nPublic Enum SubCommands_e\n    SubCommand1\n    SubCommand2\nEnd Enum\n')),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cs"},"[CommandGroupInfo(typeof(Commands_e))]\npublic enum SubCommands_e\n{\n    SubCommand1,\n    SubCommand2\n}\n")),(0,m.kt)("p",null,"Sub menus are rendered in separate tab boxes in the command tab."),(0,m.kt)("h2",{id:"example"},"Example"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-vb"},'<Title("AddInEx Commands")>\nPublic Enum Commands_e\n\n    Command1\n\n    <CommandSpacer>\n    Command2\n\nEnd Enum\n\n<Title("Sub Menu Commands")>\n<CommandGroupInfo(GetType(Commands_e))>\nPublic Enum SubCommands_e\n    SubCommand1\n    SubCommand2\nEnd Enum\n\nPublic Overrides Function OnConnect() As Boolean\n    AddCommandGroup(Of Commands_e)(AddressOf OnButtonClick)\n    AddCommandGroup(Of SubCommands_e)(AddressOf OnButtonClick)\n    Return True\nEnd Function\n\nPrivate Sub OnButtonClick(ByVal cmd As Commands_e)\nEnd Sub\n\nPrivate Sub OnButtonClick(ByVal cmd As SubCommands_e)\nEnd Sub\n')),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cs"},'[Title("AddInEx Commands")]\npublic enum Commands_e\n{\n    Command1,\n\n    [CommandSpacer]\n    Command2\n}\n\n[Title("Sub Menu Commands")]\n[CommandGroupInfo(typeof(Commands_e))]\npublic enum SubCommands_e\n{\n    SubCommand1,\n    SubCommand2\n}\n\npublic override bool OnConnect()\n{\n    AddCommandGroup<Commands_e>(OnButtonClick);\n    AddCommandGroup<SubCommands_e>(OnButtonClick);\n    return true;\n}\n\nprivate void OnButtonClick(Commands_e cmd)\n{\n}\n\nprivate void OnButtonClick(SubCommands_e cmd)\n{\n}\n')),(0,m.kt)("p",null,"The above commands configuration would result in the following menu and command tab boxes created:"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Sub-menus and spacer",src:a(11794).Z,width:"908",height:"231"})),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"Command1 and Command2 are commands of the top level menu defined in Commands_e enumeration"),(0,m.kt)("li",{parentName:"ul"},"Spacer is added between Command1 and Command2"),(0,m.kt)("li",{parentName:"ul"},"SubCommand1 and SubCommand2 are commands of SubCommands_e enumeration which is a sub menu of Commands_e enumeration")),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Command tab boxes",src:a(99439).Z,width:"408",height:"118"})),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"All commands (including sub menu commands) are added on the same command tab"),(0,m.kt)("li",{parentName:"ul"},"Command1 and Command2 are placed in a separate command tab boxes of SubCommand1 and SubCommand2"),(0,m.kt)("li",{parentName:"ul"},"Spacer between Command1 and Command2 is ignored in the commands tab")))}l.isMDXComponent=!0},99439:(n,e,a)=>{a.d(e,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAAB2CAMAAADC3HUhAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAMe6FSt9H/f392MAAD5/nJ+4uwA4i7m4sz5/uQAAOH8+GdSLOJy5fzN2JKR+DmE+PoG+94qZcGMAOABjsNTUubl/PmCcuYE+PtSLYxkZPhkZGfe+gYwDBJtjDD4+gX+51KOrnn9gfz4+YBlgnLKiEoODg6WaMtTU1DgAOKrr9zgAAFiNTPewY7nU1Kiiavfurm6UdKC+oJzU1DiL1AAAY2AZGWOw9zgAY2MAY6aeULBjABk+f7+wFJAnJ8XFxYvU96BhPos4ALCLi5UrLT5hoD4+PvfUi6+iJqIFBbCvpYs4Y4ShfoGBPtTCFrTtqrSoLGFhPnsNBz4ZGX+c1IvUsIuniYs4OGOLixkZYKSjlZFNTaieQ02EQJaUHj4ZYLurFD4ZPmOL1NS5f6qjZZA7O9Scf4GgoKqNEH0kFLl/YLOzsz5hYY0KBTg4i2AZPqioidugYZaskby8vGGg216OWsSyIp6RELKkHKyhNouLY66rmbi1p66rld3LF5JCQnWhcqGUEmFhYaSoc6egX7mcYDV5Lb2tG8e3FZkABKyjQpxgGTiLi662rMKyFNScYGCc1NTUnKDbvqmXE6yiSGCcnD6Bvsu6FaWbO2mVXpMEBbCwY7aoE7Ovr3KWaZJTU7Sxl76BPouwi6qmebirJq+lRLGtjqqjW6ugL6aYEoG+24sSBbe2tdbGF7KskZmol7CunaWdWLi3rXmbcrWnHbGmNqmbE7S0rYGg2zh6KXwRBrOwm2GgvgAAAMwzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP////z2zNwAAAC+dFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wCTsNOGAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAJZUlEQVR4Xu2ci38U1RXHFzc+IGkLavARbLBImkLRtSiKMWrSuimKjwoVqa2mjX34FoPWVkXBVzR1IZWyGtEWraW0WFtrn/rH9XfuPTNzZzaT7J29k57I+X7Y7J2ZO+fce74zdyafD1CpCmaAv09FVIxQKgOKSETfMacyS0zM9fz9+UfFCEXFCEXFCEXFCEXFCEXFCEXFCEXFCEXFCEXFCEXFCEXFCMVXzCR/h8MrYjEx4QedQ8BEnmKO/2Lyr/cFnadfxEJiwg86h5CJ/MTc9+Gtrx3e9z5vhcAzYhEx4QedQ9BEXmJO/uGDqWbzso95MwC+EQuICT/oHMIm8hFz/KuTh5vDzcPhVgXviP5iwg86h8CJPMS88OH4t6caw8O3vhlqkv4RvcWEH3QOoRO1LWby7vvfWNZsjO8/cfRomKuiSERPMeEHnUP4RO2KmfzxtlfvOLqssX/9P0809l3DezuhUEQ/MeEHnUMJidoUg8yzf/7S+vXLxn8+3mi+9rt/dXxVFIvoJSb8oHMoI1F7Yk7u2jY7+/DPvvzfN4ZPDDea/3jwzQ86zF0woo+Y8IPOoZRE7Ym5G5lnZy96+NX772k2phpTT43v+xsfKkjBiD5iwg86h1IStSfmtyb17Oy255558o/vv9KYat7+KR8qSMGIPmLCDzqHUhK1J4YWUcr8rYvvPPsv1e83m43v8ZGiFIzoIyb8oHMoJZHHwx+ZPzpt+8uXH55qPvXJ75/lI0UpFtH74R920DmUkahNMZR723Unn98+efETj73yyU0v3n4WHyhMoYheYkoYdA4lJGpXDH6Feu6d6rtfn/z7D6rPPl09K8D7TZGIfmJKGHQO4RO1Lcbw+n/e+uJ2bofBM6KnGEP4QecQNJGfmOrk469zKxR+EYuIKWHQOYRM5Cnm/00hMUsSFSMUFSMUFSMUFSMUFSOUjJieSqVyJrf9GHsEP2pd59qthM4ijm1Mnx2JqXW5+2tbN3Ar+ARKSpSdVyspMbUu6rzpKrvlB6UbWvHLlnl1FvFmFGLIiclial1XVKsX3GA3nHoFn0BZibLzaiUlZv6u80PpMNRMhM4jJt8Eixm7Or5yibhewSdQXqL0vFpxxYx9Lb40Ru2dtuu9jZVzcTdfifG47U2Vygr03fVdu0n3+11zzqvziOkJuHcM1wkpa1tv66LTw0+gvEQ+YjZRBsMohteDrdEzEQqBe7Dttr9pO48iF107oxj9kDk5M68AEdF2FozoGTO20UwzqlcXtjZduSH8BMpLhPa8C+GcYuwNvOsG+lPtQSyS67YBjZV2YdN0t7vzxBSPWB1Cj5hIDHZXrkjqdQ5Ow0TDTwCUlCg9r1ZSS5nJAmzeedLRSwWuAU5nutt0mXkFiJhezRMxOOOquF70jZmGnwBRTqL0vFpJPfzpRiNws+Jnfjo67lwHprsdYnZeHUfMjN8Rg9hxvfhCLmECRBmJFvKSFjO2kbrjJdCsnPjkpUPoHuTgdOYJiYWVzs3k6zRi9n5nMWM/wgcPYKoPIpvfPmilDz6BshItsI6BlBichF+bkIZeHmicOemo26+S64Du1xXv4XsIZ5uXD4eOIuKdBtB5DIuhaBU8O6kbfvOobX07yht4AiUlaplXKxkx0nGXss83KkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoKkYoS0zMqYOKEUplYKnAA5YPj7dDKoNlMsDfAVhCYvi7M1RMcFSMUFSMUFSMUFSMUFSMUFSMUMKL6e2+9lJuZphejs/uzbyVJm8/4YqZ7gOHeMOf1unWVtbXxf+7SG0lt6mxp16v7zVbhhFs1uureCuCOrm9vIlTZggvZqL+w7XczEBi5uBgnsiIlJiCMZjW6abK7y3G7lwaYqaXT1/CzQwixYzUD9Rv5HZaTPVY/YjZsIzMUf9jxlTt37xZhEUTM/Po2ol7aVmaXr66r4/q5TS4sNjGcjSxw+ymxemSZD+k9naf1913YXLbzSUGXamHGwOZsePezb3dv9mChZF7HLRfTMt0ayv7b+PS4Or/qWlGDRJTO7/+J2yj/CzmGK18x6xLLIORLCgijei+inrgSP+GzBbFpZOTkHEmdHAWVENwMbh2e7vpITDdtxwlRp2TBotZjbJN7Bx8YK3dba72aD/t6e1GKadpr2UOMatx9CC6uzESMevQ4B4TWFd/Mo+YPSinLTmVzZQnbrAYAnU1u/s3YMeR6CpfE1fTnnMjdT+AxkMotD3Z2XIi2EacibyULsZUGKUaNAsa1SVpWDEzW5KHNxU0EmMKayuLjva2M2Qf/rs3m67WfxIjEYPTox5OGCI7XRRpFeSgSGvoGt6D8sSNSMwRK4DLio3+W/hGMScSqOwq88N0x8Npr7mp0lumI/LFIZ2UHMchtBgSYH+Ya5vqk2rgQ1e6gVYuR4zdj46m4iaGpfWOwfpEoJsTIxGD/VGP3u7UO1x2uqbkpqx7qHS18+mZz41IDJXciOFlC4b4oRSLMedQj6T7GuxKb5EiQGLs3jjTHCtZcDFUKGAVzCtmZgsXtIgYdpuKkRYT2cdjKG62iqFHA0EXNlUpLhdVM18M+8AlH906bYih3rQnI4YOU8woPBNYjFlG7AJvVjCqT9KwYrjkZpExTwJ8kv1RZecVEx1MxTBikCd7Oo/JkJkuamTpx3KCAtl1hRs5YnD8O44j81ZmFiVeynLF0OMs1SfJBCiZS2AxUdF3HMLT4BCuaHIRN6IPJE3spK4TO6iodEVH+6mKC4uxXb9yaSoGvQXM4H3MnB71OHjIhmMy0zWloavWlIvAuhI1zO8xSW3NM8bs2MunmRPNTj6YVZHesiuZIwYNwjxsQPpXpMBi+F2KajR9erd5+XUaLIae4Hjvwqp37Uvoj8eA87qM7zbEmJcANFMxZrb07f4C33BRD3qf5lOIzHRHUC/7bS7mdd+gIkaNOcV8NkLrWHSeXYPIkvO6nKhIb6Hvul9jT7I3ymTEpL0Ef8YkRCVMGkVxxXRImOkuBipGKCpGKOWJCYeKKYyKCY6KEYqKEYqKEUogMfxXZZVwcGk7Y8G/7X+G4hDqflgY/WcYniymmMHB/I+SYXHFDOR+TqF/XNcGKMaiLmX0vMr7XK84oCambGVTrf4PU55i5HwNuDEAAAAASUVORK5CYII="},11794:(n,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/sub-menu-and-spacer-389f927f0873c43e41463ea4aae05cfc.png"}}]);