"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[40403],{3905:(n,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>w});var s=o(67294);function t(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function i(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,s)}return o}function r(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){t(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function c(n,e){if(null==n)return{};var o,s,t=function(n,e){if(null==n)return{};var o,s,t={},i=Object.keys(n);for(s=0;s<i.length;s++)o=i[s],e.indexOf(o)>=0||(t[o]=n[o]);return t}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(s=0;s<i.length;s++)o=i[s],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(t[o]=n[o])}return t}var p=s.createContext({}),a=function(n){var e=s.useContext(p),o=e;return n&&(o="function"==typeof n?n(e):r(r({},e),n)),o},l=function(n){var e=a(n.components);return s.createElement(p.Provider,{value:e},n.children)},m="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return s.createElement(s.Fragment,{},e)}},u=s.forwardRef((function(n,e){var o=n.components,t=n.mdxType,i=n.originalType,p=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),m=a(o),u=t,w=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return o?s.createElement(w,r(r({ref:e},l),{},{components:o})):s.createElement(w,r({ref:e},l))}));function w(n,e){var o=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var i=o.length,r=new Array(i);r[0]=u;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=n,c[m]="string"==typeof n?n:t,r[1]=c;for(var a=2;a<i;a++)r[a]=o[a];return s.createElement.apply(null,r)}return s.createElement.apply(null,o)}u.displayName="MDXCreateElement"},73110:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=o(87462),t=(o(67294),o(3905));const i={title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u5e76\u9009\u62e9\u88c5\u914d\u4e2d\u7684\u6240\u6709\u53ef\u89c1\u90e8\u4ef6",image:"components-tree.png",labels:["components","suppressed","hidden","select"]},r=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible/index",title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u5e76\u9009\u62e9\u88c5\u914d\u4e2d\u7684\u6240\u6709\u53ef\u89c1\u90e8\u4ef6",description:"\u5728\u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u9009\u62e9\u7684\u90e8\u4ef6{ width=350 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u5e76\u9009\u62e9\u88c5\u914d\u4e2d\u7684\u6240\u6709\u53ef\u89c1\u90e8\u4ef6",image:"components-tree.png",labels:["components","suppressed","hidden","select"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u88c5\u914d\u7ec4\u4ef6\u7684\u5b9e\u4f8bID",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-instance-id/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u6279\u91cf\u6dfb\u52a0\u7ec4\u4ef6\u5e76\u5c06\u5176\u5b9a\u4f4d\u5728\u7f51\u683c\u4e2d",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/insert-position/"}},p={},a=[],l={toc:a},m="wrapper";function d(n){let{components:e,...i}=n;return(0,t.kt)(m,(0,s.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"\u5728\u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u9009\u62e9\u7684\u90e8\u4ef6",src:o(59163).Z,width:"277",height:"695"}),"{ width=350 }"),(0,t.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u83b7\u53d6\u6d3b\u52a8\u88c5\u914d\u4e2d\u6240\u6709\u53ef\u89c1\uff08\u672a\u6291\u5236\u548c\u672a\u9690\u85cf\uff09\u90e8\u4ef6\u7684\u6307\u9488\u3002\u4f7f\u7528\u591a\u9009SOLIDWORKS API\u9009\u62e9\u6240\u6709\u90e8\u4ef6\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        Dim vComps As Variant\n        vComps = GetVisibleComponents(swAssy, False)\n        swAssy.Extension.MultiSelect2 vComps, False, Nothing\n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u88c5\u914d\u6587\u6863"\n    End If\n    \nEnd Sub\n\nFunction GetVisibleComponents(assy As SldWorks.AssemblyDoc, topLevelOnly As Boolean) As Variant\n    \n    Dim swVisComps() As SldWorks.Component2\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim vComps As Variant\n    vComps = assy.GetComponents(topLevelOnly)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n        \n        If False = swComp.IsSuppressed() And IsVisible(swComp) Then\n            \n            If Not isInit Then\n                ReDim swVisComps(0)\n                isInit = True\n            Else\n                ReDim Preserve swVisComps(UBound(swVisComps) + 1)\n            End If\n            \n            Set swVisComps(UBound(swVisComps)) = swComp\n        \n        End If\n        \n    Next\n    \n    GetVisibleComponents = swVisComps\n    \nEnd Function\n\nFunction IsVisible(comp As SldWorks.Component2) As Boolean\n    \n    Dim swThisComp As SldWorks.Component2\n    Set swThisComp = comp\n    \n    While Not swThisComp Is Nothing\n        If swThisComp.Visible = swComponentVisibilityState_e.swComponentHidden Then\n            IsVisible = False\n            Exit Function\n        End If\n        Set swThisComp = swThisComp.GetParent\n    Wend\n    \n    IsVisible = True\n    \nEnd Function\n')))}d.isMDXComponent=!0},59163:(n,e,o)=>{o.d(e,{Z:()=>s});const s=o.p+"assets/images/components-tree-c0f2d8ea25915719e670626154d203ea.png"}}]);