"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[53936],{3905:(e,n,s)=>{s.d(n,{Zo:()=>l,kt:()=>f});var t=s(67294);function o(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function r(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function a(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach((function(n){o(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function c(e,n){if(null==e)return{};var s,t,o=function(e,n){if(null==e)return{};var s,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||(o[s]=e[s]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var i=t.createContext({}),p=function(e){var n=t.useContext(i),s=n;return e&&(s="function"==typeof e?e(n):a(a({},n),e)),s},l=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var s=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(s),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return s?t.createElement(f,a(a({ref:n},l),{},{components:s})):t.createElement(f,a({ref:n},l))}));function f(e,n){var s=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=s.length,a=new Array(r);a[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<r;p++)a[p]=s[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,s)}m.displayName="MDXCreateElement"},28892:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var t=s(87462),o=(s(67294),s(3905));const r={title:"Select all suppressed components in the assembly using SOLIDWORKS API",image:"select-suppressed-components.png",labels:["command","suppressed","components"]},a=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/select-suppressed/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/select-suppressed/index",title:"Select all suppressed components in the assembly using SOLIDWORKS API",description:"This VBA macro allows to select all suppressed components in the active SOLIDWORKS assembly in a batch using SOLIDWORKS and Windows API.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/select-suppressed/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/select-suppressed",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/select-suppressed/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/select-suppressed/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/select-suppressed/index.md",tags:[],version:"current",frontMatter:{title:"Select all suppressed components in the assembly using SOLIDWORKS API",image:"select-suppressed-components.png",labels:["command","suppressed","components"]},sidebar:"tutorialSidebar",previous:{title:"Run rotation animation for the component using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/run-rotation-animation/"},next:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/set-sequential-component-reference/"}},i={},p=[],l={toc:p},d="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(d,(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This VBA macro allows to select all suppressed components in the active SOLIDWORKS assembly in a batch using SOLIDWORKS and Windows API."),(0,o.kt)("p",null,"This executes the ",(0,o.kt)("em",{parentName:"p"},"Select Suppressed")," command of ",(0,o.kt)("em",{parentName:"p"},"Component Selection")," menu"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select Suppressed command for components",src:s(67093).Z,width:"818",height:"323"}),"{ width=500 }"),(0,o.kt)("p",null,"This is preferable option of selecting all suppressed components over the ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/assembly/components/traversing-tree"},"traversing components")," one-by-one due to the performance benefits."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n \nDim swApp As SldWorks.SldWorks\n \nSub main()\n    \n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        SelectSuppressedComponents\n    Else\n       MsgBox "Please open assembly"\n    End If\n     \nEnd Sub\n\nSub SelectSuppressedComponents()\n    \n    Const WM_COMMAND As Long = &H111\n    Const CMD_SELECT_SUPPRESSED_COMPS As Long = 54409\n    \n    Dim swFrame As SldWorks.Frame\n        \n    Set swFrame = swApp.Frame\n        \n    SendMessage swFrame.GetHWnd(), WM_COMMAND, CMD_SELECT_SUPPRESSED_COMPS, 0\n\nEnd Sub\n')))}u.isMDXComponent=!0},67093:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/select-suppressed-components-e1156cc95dedfac3eada1f17b89d389f.png"}}]);