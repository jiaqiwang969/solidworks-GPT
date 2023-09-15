"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[31639],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},w=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(t),w=s,m=p["".concat(c,".").concat(w)]||p[w]||u[w]||r;return t?o.createElement(m,i(i({ref:n},d),{},{components:t})):o.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=w;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}w.displayName="MDXCreateElement"},18189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(87462),s=(t(67294),t(3905));const r={title:"VBA\u5b8f\u8c03\u7528SOLIDWORKS API\u4e2d\u7684\u663e\u793a\u6240\u6709\u7ec4\u4ef6\u547d\u4ee4",image:"assembly-show-with-dependents.png",labels:["\u88c5\u914d\u4f53","\u7ec4\u4ef6","\u663e\u793a"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-with-dependents/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-with-dependents/index",title:"VBA\u5b8f\u8c03\u7528SOLIDWORKS API\u4e2d\u7684\u663e\u793a\u6240\u6709\u7ec4\u4ef6\u547d\u4ee4",description:"\u88c5\u914d\u4f53\u4e2d\u7684\u663e\u793a\u4f9d\u8d56\u9879\u547d\u4ee4{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-with-dependents/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-with-dependents",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-with-dependents/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-with-dependents/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-with-dependents/index.md",tags:[],version:"current",frontMatter:{title:"VBA\u5b8f\u8c03\u7528SOLIDWORKS API\u4e2d\u7684\u663e\u793a\u6240\u6709\u7ec4\u4ef6\u547d\u4ee4",image:"assembly-show-with-dependents.png",labels:["\u88c5\u914d\u4f53","\u7ec4\u4ef6","\u663e\u793a"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS\u5b8f\u5728\u7a97\u53e3\u6587\u4ef6\u5939\u4e2d\u663e\u793a\u6240\u9009\u88c5\u914d\u7ec4\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-selected-assembly-component-window-folder/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5904\u7406\u8349\u56fe",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:n,...r}=e;return(0,s.kt)(p,(0,o.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u88c5\u914d\u4f53\u4e2d\u7684\u663e\u793a\u4f9d\u8d56\u9879\u547d\u4ee4",src:t(25402).Z,width:"363",height:"461"}),"{ width=250 }"),(0,s.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u548cWindows API\u8c03\u7528\u201c\u663e\u793a\u4f9d\u8d56\u9879\u201d\u547d\u4ee4\u6765\u4e00\u6b21\u6027\u663e\u793a\u6240\u6709\u7ec4\u4ef6\u6216\u88c5\u914d\u4f53\u3002"),(0,s.kt)("p",null,"\u5b8f\u5c06\u4e3a\u6240\u9009\u7ec4\u4ef6\u6216\u88c5\u914d\u4f53\u8c03\u7528\u8be5\u547d\u4ee4\uff08\u5982\u679c\u6ca1\u6709\u9009\u62e9\u7ec4\u4ef6\uff09\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n \nDim swApp As SldWorks.SldWorks\n \nSub main()\n \n     Set swApp = Application.SldWorks\n     \n     Dim swAssy As SldWorks.AssemblyDoc\n     Set swAssy = swApp.ActiveDoc\n     \n     If Not swAssy Is Nothing Then\n     \n        Dim swComp As SldWorks.Component2\n        Set swComp = swAssy.SelectionManager.GetSelectedObjectsComponent3(1, -1)\n        \n        If swComp Is Nothing Then\n            Set swComp = swAssy.ConfigurationManager.ActiveConfiguration.GetRootComponent3(False)\n        End If\n        \n        ShowWithDependents swComp\n        \n     Else\n        MsgBox "\u8bf7\u6253\u5f00\u88c5\u914d\u4f53"\n     End If\n     \n End Sub\n \nSub ShowWithDependents(comp As SldWorks.Component2)\n    \n    comp.Select4 False, Nothing, False\n    \n    Const WM_COMMAND As Long = &H111\n    Const SHOW_WITH_DEPENDENTS_CMD As Long = 33227\n    \n    Dim swFrame As SldWorks.Frame\n    \n    Set swFrame = swApp.Frame\n    \n    SendMessage swFrame.GetHWnd(), WM_COMMAND, SHOW_WITH_DEPENDENTS_CMD, 0\n     \nEnd Sub\n')))}u.isMDXComponent=!0},25402:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/assembly-show-with-dependents-b6fa3aec5b2cf58b85c1d128b199418b.png"}}]);