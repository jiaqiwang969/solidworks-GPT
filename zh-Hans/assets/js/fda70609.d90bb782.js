"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[62325],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>f});var t=o(67294);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,i=function(e,n){if(null==e)return{};var o,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(o),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return o?t.createElement(f,s(s({ref:n},p),{},{components:o})):t.createElement(f,s({ref:n},p))}));function f(e,n){var o=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=o.length,s=new Array(r);s[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<r;c++)s[c]=o[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},78858:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=o(87462),i=(o(67294),o(3905));const r={layout:"sw-macro-fix",title:"Fix incorrect use of 32-bit versions of Windows API functions in SOLIDWORKS macros",caption:"Incorrect Use Of 32-bit Versions Of Windows API Functions",description:"Fixing the Compile error - The code in this project must be updated for use on 64-bit systems when macro is utilizing Windows API functions",image:"declare-function-win-api.png",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-incorrect-use-of-32-bit-versions-of-win-api.html"]},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/index",title:"Fix incorrect use of 32-bit versions of Windows API functions in SOLIDWORKS macros",description:"Fixing the Compile error - The code in this project must be updated for use on 64-bit systems when macro is utilizing Windows API functions",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"Fix incorrect use of 32-bit versions of Windows API functions in SOLIDWORKS macros",caption:"Incorrect Use Of 32-bit Versions Of Windows API Functions",description:"Fixing the Compile error - The code in this project must be updated for use on 64-bit systems when macro is utilizing Windows API functions",image:"declare-function-win-api.png",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-incorrect-use-of-32-bit-versions-of-win-api.html"]},sidebar:"tutorialSidebar",previous:{title:"Macro feature to increment the numeric value in the note via SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/increment-revision/"},next:{title:"Macro to save bodies into individual SOLIDWORKS part documents",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-bodies-to-part/"}},l={},c=[{value:"Symptoms",id:"symptoms",level:2},{value:"Cause",id:"cause",level:2},{value:"Resolution",id:"resolution",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...r}=e;return(0,i.kt)(u,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"symptoms"},"Symptoms"),(0,i.kt)("p",null,"System is updated from SOLIDWORKS older than 2012 to a newer version.\nOr some legacy macro is run.\nMacro is utilizing Windows API functions (e.g. has browse file/folder dialog, connects to registry, uses windows handles) via ",(0,i.kt)("em",{parentName:"p"},"Declare Function")," statement.\nWhen started the ",(0,i.kt)("em",{parentName:"p"},"Compile error: The code in this project must be updated for use on 64-bit systems")," is displayed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Windows API Declare function incompatibility error",src:o(71841).Z,width:"640",height:"187"}),"{ width=640 height=185 }"),(0,i.kt)("h2",{id:"cause"},"Cause"),(0,i.kt)("p",null,"SOLIDWORKS has updated the Visual Basic for Application environment in 2013 release from VB6 to VB7.\nVB6 is 32bit application while ",(0,i.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/vba/language-reference-vba/articles/64-bit-visual-basic-for-applications-overview"},"VB7")," is 64bit application.\nDue to the difference in variables size in 32/64 it is required to use PtrSafe keyword to assert the environment that it is safe to run the macro in x64 systems and LongPtr or LongLong to properly resolve the Long type variable in 32 and 64 bit environments."),(0,i.kt)("h2",{id:"resolution"},"Resolution"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Modify all of the declaration and include PtrSafe keyword and LongPtr as the variable declarations for Long types"),(0,i.kt)("li",{parentName:"ul"},"If it is required to support older versions of SOLIDWORKS (prior to 2012) it is possible to use pre-compile conditional statements #IF-#Else")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n    Private Type BROWSEINFO\n      hOwner As LongPtr\n      pidlRoot As Long\n      pszDisplayName As String\n      lpszTitle As String\n      ulFlags As Long\n      lpfnCallback As LongPtr\n      lParam As LongPtr\n      iImage As Long\n    End Type\n\n    Private Declare PtrSafe Function SHBrowseForFolder Lib "Shell32" (lpbi As BROWSEINFO) As Long\n    Private Declare PtrSafe Function SHGetPathFromIDList Lib "Shell32" (ByVal pidList As LongPtr, ByVal lpBuffer As String) As Long\n    Private Declare PtrSafe Sub CoTaskMemFree Lib "ole32" (ByVal hMem As LongPtr)\n#Else\n    Private Type BROWSEINFO\n        hOwner As Long\n        pidlRoot As Long\n        pszDisplayName As Long\n        lpszTitle As String\n        ulFlags As Long\n        lpfnCallback As Long\n        lParam As Long\n        iImage As Long\n    End Type\n    \n    Private Declare Function SHBrowseForFolder Lib "Shell32" (lpbi As BROWSEINFO) As Long\n    Private Declare Function SHGetPathFromIDList Lib "Shell32" (ByVal pidList As Long, ByVal lpBuffer As String) As Long\n    Private Declare Sub CoTaskMemFree Lib "ole32" (ByVal hMem As Long)\n#End If\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n        \n    swApp.SendMsgToUser "Selected folder " & BrowseForFolder\n    \nEnd Sub\n\nPublic Function BrowseForFolder() As String\n  \n    Dim bi As BROWSEINFO\n    Dim pidl As Long\n    Dim path As String\n  \n    bi.lpszTitle = ""\n    bi.ulFlags = 0\n    \n    pidl = SHBrowseForFolder(bi)\n    If pidl <> 0 Then\n    \n        path = Space$(265)\n        SHGetPathFromIDList pidl, path\n        path = Left$(path, InStr(path, Chr$(0)) - 1)\n    \n        CoTaskMemFree lngPIDL\n    End If\n    \n    BrowseForFolder = path\n    \nEnd Function\n\n')))}d.isMDXComponent=!0},71841:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/declare-function-win-api-3a639327dceb5ec2730f4b32ff4988b4.png"}}]);