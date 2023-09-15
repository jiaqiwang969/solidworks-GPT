"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[96953],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>w});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=s.createContext({}),l=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return s.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,w=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?s.createElement(w,a(a({ref:n},d),{},{components:t})):s.createElement(w,a({ref:n},d))}));function w(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=t(87462),r=(t(67294),t(3905));const o={title:"\u4f7f\u7528SOLIDWORKS\u548cWindows API\u8fd0\u884c\u529b\u5b66\u914d\u5bf9\u547d\u4ee4",caption:"\u8fd0\u884c\u529b\u5b66\u914d\u5bf9\u547d\u4ee4"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/force-mate/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/force-mate/index",title:"\u4f7f\u7528SOLIDWORKS\u548cWindows API\u8fd0\u884c\u529b\u5b66\u914d\u5bf9\u547d\u4ee4",description:"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u548cWindows API\u7684\u7ec4\u5408\u6765\u8fd0\u884c\u5177\u6709\u91cd\u5efa\u9519\u8bef\u7684\u914d\u5bf9\u7684\u201cForce Mate\u201d\u547d\u4ee4\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/force-mate/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/force-mate",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/force-mate/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/force-mate/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/force-mate/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS\u548cWindows API\u8fd0\u884c\u529b\u5b66\u914d\u5bf9\u547d\u4ee4",caption:"\u8fd0\u884c\u529b\u5b66\u914d\u5bf9\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"\u5728SOLIDWORKS\u88c5\u914d\u4f53\u4e2d\u7ffb\u8f6c\u6700\u540e\u4e00\u4e2a\u63d2\u5165\u7684\u5bf9\u9f50\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/flip-last/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u88ab\u538b\u5236\u7684\u7ea6\u675f\u79fb\u52a8\u5230\u7279\u5f81\u6587\u4ef6\u5939\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/move-suppressed-to-folder/"}},c={},l=[{value:"image: force-mate.png",id:"image-force-matepng",level:2}],d={toc:l},p="wrapper";function u(e){let{components:n,...o}=e;return(0,r.kt)(p,(0,s.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u548cWindows API\u7684\u7ec4\u5408\u6765\u8fd0\u884c\u5177\u6709\u91cd\u5efa\u9519\u8bef\u7684\u914d\u5bf9\u7684\u201cForce Mate\u201d\u547d\u4ee4\u3002"),(0,r.kt)("h2",{id:"image-force-matepng"},"image: force-mate.png"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4e0a\u4e0b\u6587\u83dc\u5355\u4e2d\u7684Force Mate\u547d\u4ee4",src:t(20328).Z,width:"454",height:"369"}),"{ width=350 }"),(0,r.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u8fd0\u884c\u201cForce Mate\u201d\u547d\u4ee4\u4ee5\u89e3\u51b3\u5177\u6709\u91cd\u5efa\u9519\u8bef\u7684\u914d\u5bf9\u7684\u7ea6\u675f\u3002\u6b64\u5b8f\u57fa\u4e8eWindows\u548cSOLIDWORKS API\u7684\u7ec4\u5408\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n \nDim swApp As SldWorks.SldWorks\n \nSub main()\n\n    On Error Resume Next\n    \n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        \n        Dim swMateFeat As SldWorks.Feature\n        Set swMateFeat = swAssy.SelectionManager.GetSelectedObject6(1, -1)\n        \n        Dim swMate As SldWorks.Mate2\n        Set swMate = swMateFeat.GetSpecificFeature2\n        \n        If Not swMate Is Nothing Then\n            \n            Dim isWarn As Boolean\n            If swMateFeat.GetErrorCode2(isWarn) = swFeatureError_e.swFeatureErrorNone Or True = isWarn Then\n                MsgBox "Force\u547d\u4ee4\u4ec5\u9002\u7528\u4e8e\u5177\u6709\u91cd\u5efa\u9519\u8bef\u7684\u914d\u5bf9"\n            Else\n                ForceMate swMate\n            End If\n            \n        Else\n            MsgBox "\u8bf7\u9009\u62e9\u914d\u5bf9"\n        End If\n    Else\n       MsgBox "\u8bf7\u6253\u5f00\u88c5\u914d\u4f53"\n    End If\n     \nEnd Sub\n\nSub ForceMate(mate As SldWorks.Mate2)\n\n    Dim swMateFeat As SldWorks.Feature\n    Set swMateFeat = mate\n    swMateFeat.Select2 False, -1\n    \n    Const WM_COMMAND As Long = &H111\n    Const CMD_FORCE_MATE As Long = 13724\n    \n    Dim swFrame As SldWorks.Frame\n        \n    Set swFrame = swApp.Frame\n        \n    SendMessage swFrame.GetHWnd(), WM_COMMAND, CMD_FORCE_MATE, 0\n\nEnd Sub\n')))}u.isMDXComponent=!0},20328:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/force-mate-a168af6cb8ff32025745a07b0eaf0620.png"}}]);