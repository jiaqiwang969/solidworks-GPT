"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[39689],{3905:(e,n,s)=>{s.d(n,{Zo:()=>p,kt:()=>w});var t=s(67294);function o(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function i(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function r(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?i(Object(s),!0).forEach((function(n){o(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function c(e,n){if(null==e)return{};var s,t,o=function(e,n){if(null==e)return{};var s,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)s=i[t],n.indexOf(s)>=0||(o[s]=e[s]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)s=i[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var a=t.createContext({}),l=function(e){var n=t.useContext(a),s=n;return e&&(s="function"==typeof e?e(n):r(r({},n),e)),s},p=function(e){var n=l(e.components);return t.createElement(a.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var s=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(s),m=o,w=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return s?t.createElement(w,r(r({ref:n},p),{},{components:s})):t.createElement(w,r({ref:n},p))}));function w(e,n){var s=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=s.length,r=new Array(i);r[0]=m;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[d]="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=s[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,s)}m.displayName="MDXCreateElement"},93736:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(87462),o=(s(67294),s(3905));const i={title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u5e76\u9009\u62e9\u88c5\u914d\u4e2d\u7684\u6240\u6709\u53ef\u89c1\u90e8\u4ef6",caption:"\u4ec5\u83b7\u53d6\u548c\u9009\u62e9\u53ef\u89c1\u90e8\u4ef6"},r=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-visible/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-visible/index",title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u5e76\u9009\u62e9\u88c5\u914d\u4e2d\u7684\u6240\u6709\u53ef\u89c1\u90e8\u4ef6",description:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u5e76\u9009\u62e9\u6240\u6709\u53ef\u89c1\u90e8\u4ef6\uff08\u672a\u6291\u5236\u548c\u672a\u9690\u85cf\uff09\u7684VBA\u5b8f\u793a\u4f8b",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-visible/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-visible",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-visible/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-visible/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-visible/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u5e76\u9009\u62e9\u88c5\u914d\u4e2d\u7684\u6240\u6709\u53ef\u89c1\u90e8\u4ef6",caption:"\u4ec5\u83b7\u53d6\u548c\u9009\u62e9\u53ef\u89c1\u90e8\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u7269\u4f53\u8d28\u91cf",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-view-bodies-mass/"},next:{title:"\u5165\u95e8\uff1a\u4f7f\u7528SOLIDWORKS API\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/"}},a={},l=[{value:"labels: components,suppressed,hidden,select",id:"labels-componentssuppressedhiddenselect",level:2}],p={toc:l},d="wrapper";function u(e){let{components:n,...i}=e;return(0,o.kt)(d,(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u5e76\u9009\u62e9\u6240\u6709\u53ef\u89c1\u90e8\u4ef6\uff08\u672a\u6291\u5236\u548c\u672a\u9690\u85cf\uff09\u7684VBA\u5b8f\u793a\u4f8b\nimage: components-tree.png"),(0,o.kt)("h2",{id:"labels-componentssuppressedhiddenselect"},"labels: ","[components,suppressed,hidden,select]"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5728\u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u9009\u62e9\u7684\u90e8\u4ef6",src:s(69521).Z,width:"277",height:"695"}),"{ width=350 }"),(0,o.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u83b7\u53d6\u6d3b\u52a8\u88c5\u914d\u4e2d\u6240\u6709\u53ef\u89c1\uff08\u672a\u6291\u5236\u548c\u672a\u9690\u85cf\uff09\u90e8\u4ef6\u7684\u6307\u9488\u3002\u4f7f\u7528\u591a\u9009SOLIDWORKS API\u9009\u62e9\u6240\u6709\u90e8\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        Dim vComps As Variant\n        vComps = GetVisibleComponents(swAssy, False)\n        swAssy.Extension.MultiSelect2 vComps, False, Nothing\n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u88c5\u914d\u6587\u6863"\n    End If\n    \nEnd Sub\n\nFunction GetVisibleComponents(assy As SldWorks.AssemblyDoc, topLevelOnly As Boolean) As Variant\n    \n    Dim swVisComps() As SldWorks.Component2\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim vComps As Variant\n    vComps = assy.GetComponents(topLevelOnly)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n        \n        If False = swComp.IsSuppressed() And IsVisible(swComp) Then\n            \n            If Not isInit Then\n                ReDim swVisComps(0)\n                isInit = True\n            Else\n                ReDim Preserve swVisComps(UBound(swVisComps) + 1)\n            End If\n            \n            Set swVisComps(UBound(swVisComps)) = swComp\n        \n        End If\n        \n    Next\n    \n    GetVisibleComponents = swVisComps\n    \nEnd Function\n\nFunction IsVisible(comp As SldWorks.Component2) As Boolean\n    \n    Dim swThisComp As SldWorks.Component2\n    Set swThisComp = comp\n    \n    While Not swThisComp Is Nothing\n        If swThisComp.Visible = swComponentVisibilityState_e.swComponentHidden Then\n            IsVisible = False\n            Exit Function\n        End If\n        Set swThisComp = swThisComp.GetParent\n    Wend\n    \n    IsVisible = True\n    \nEnd Function\n')))}u.isMDXComponent=!0},69521:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/components-tree-c0f2d8ea25915719e670626154d203ea.png"}}]);