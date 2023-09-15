"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[95472],{3905:(e,n,s)=>{s.d(n,{Zo:()=>p,kt:()=>w});var t=s(67294);function r(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function o(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function i(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?o(Object(s),!0).forEach((function(n){r(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function a(e,n){if(null==e)return{};var s,t,r=function(e,n){if(null==e)return{};var s,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)s=o[t],n.indexOf(s)>=0||(r[s]=e[s]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)s=o[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var c=t.createContext({}),l=function(e){var n=t.useContext(c),s=n;return e&&(s="function"==typeof e?e(n):i(i({},n),e)),s},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var s=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(s),m=r,w=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return s?t.createElement(w,i(i({ref:n},p),{},{components:s})):t.createElement(w,i({ref:n},p))}));function w(e,n){var s=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=s.length,i=new Array(o);i[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<o;l++)i[l]=s[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,s)}m.displayName="MDXCreateElement"},79940:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=s(87462),r=(s(67294),s(3905));const o={title:"\u4f7f\u7528SOLIDWORKS API\u9009\u62e9\u6240\u6709\u6291\u5236\u7684\u7ec4\u4ef6",image:"select-suppressed-components.png",labels:["\u547d\u4ee4","\u6291\u5236","\u7ec4\u4ef6"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-suppressed/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-suppressed/index",title:"\u4f7f\u7528SOLIDWORKS API\u9009\u62e9\u6240\u6709\u6291\u5236\u7684\u7ec4\u4ef6",description:"\u8fd9\u4e2aVBA\u5b8f\u5141\u8bb8\u5728\u6d3b\u52a8\u7684SOLIDWORKS\u88c5\u914d\u4f53\u4e2d\u6279\u91cf\u9009\u62e9\u6240\u6709\u6291\u5236\u7684\u7ec4\u4ef6\uff0c\u4f7f\u7528SOLIDWORKS\u548cWindows API\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-suppressed/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-suppressed",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-suppressed/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-suppressed/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-suppressed/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u9009\u62e9\u6240\u6709\u6291\u5236\u7684\u7ec4\u4ef6",image:"select-suppressed-components.png",labels:["\u547d\u4ee4","\u6291\u5236","\u7ec4\u4ef6"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u6309\u7c7b\u578b\u9009\u62e9\u6807\u51c6\u53c2\u8003\u51e0\u4f55\u56fe\u5f62\uff08\u4f8b\u5982\u524d\u5e73\u9762\u6216\u539f\u70b9\uff09",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-standard-ref-geometry/"},next:{title:"\u901a\u8fc7SOLIDWORKS API\u5728\u9009\u5b9a\u8fb9\u4e0a\u521b\u5efa\u8349\u56fe\u70b9",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selected-edge-create-sketch-points/"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:n,...o}=e;return(0,r.kt)(d,(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u5141\u8bb8\u5728\u6d3b\u52a8\u7684SOLIDWORKS\u88c5\u914d\u4f53\u4e2d\u6279\u91cf\u9009\u62e9\u6240\u6709\u6291\u5236\u7684\u7ec4\u4ef6\uff0c\u4f7f\u7528SOLIDWORKS\u548cWindows API\u3002"),(0,r.kt)("p",null,"\u8fd9\u6267\u884c\u4e86",(0,r.kt)("em",{parentName:"p"},"\u7ec4\u4ef6\u9009\u62e9"),"\u83dc\u5355\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"\u9009\u62e9\u6291\u5236"),"\u547d\u4ee4\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u9009\u62e9\u6291\u5236\u547d\u4ee4",src:s(35694).Z,width:"818",height:"323"}),"{ width=500 }"),(0,r.kt)("p",null,"\u4e0e\u9010\u4e2a\u904d\u5386\u7ec4\u4ef6\u7684\u65b9\u6cd5\u76f8\u6bd4\uff0c\u8fd9\u662f\u9009\u62e9\u6240\u6709\u6291\u5236\u7684\u7ec4\u4ef6\u7684\u9996\u9009\u9009\u9879\uff0c\u56e0\u4e3a\u5b83\u5177\u6709\u66f4\u597d\u7684\u6027\u80fd\u4f18\u52bf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n \nDim swApp As SldWorks.SldWorks\n \nSub main()\n    \n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        SelectSuppressedComponents\n    Else\n       MsgBox "\u8bf7\u6253\u5f00\u88c5\u914d\u4f53"\n    End If\n     \nEnd Sub\n\nSub SelectSuppressedComponents()\n    \n    Const WM_COMMAND As Long = &H111\n    Const CMD_SELECT_SUPPRESSED_COMPS As Long = 54409\n    \n    Dim swFrame As SldWorks.Frame\n        \n    Set swFrame = swApp.Frame\n        \n    SendMessage swFrame.GetHWnd(), WM_COMMAND, CMD_SELECT_SUPPRESSED_COMPS, 0\n\nEnd Sub\n')))}u.isMDXComponent=!0},35694:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/select-suppressed-components-e1156cc95dedfac3eada1f17b89d389f.png"}}]);