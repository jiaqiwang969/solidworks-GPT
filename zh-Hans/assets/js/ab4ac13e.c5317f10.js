"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[35609],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?o.createElement(g,i(i({ref:n},u),{},{components:t})):o.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20153:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={title:"\u4f7f\u7528SOLIDWORKS API\u66f4\u6539\u6a21\u578b\u4e2d\u7684\u5168\u5c40\u53d8\u91cf\u503c",image:"equation-manager-global-variable.png",labels:["equation","variable"]},i=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/change-global-variable-value/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/change-global-variable-value/index",title:"\u4f7f\u7528SOLIDWORKS API\u66f4\u6539\u6a21\u578b\u4e2d\u7684\u5168\u5c40\u53d8\u91cf\u503c",description:"\u5e26\u6709\u5168\u5c40\u53d8\u91cf\u7684\u65b9\u7a0b\u7ba1\u7406\u5668",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/change-global-variable-value/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/change-global-variable-value",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/change-global-variable-value/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/change-global-variable-value/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/change-global-variable-value/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u66f4\u6539\u6a21\u578b\u4e2d\u7684\u5168\u5c40\u53d8\u91cf\u503c",image:"equation-manager-global-variable.png",labels:["equation","variable"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u8fdb\u884c\u5757\u6a21\u578b\u7f16\u8f91",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/block-model-editing/"},next:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/clear-layer/"}},l={},c=[],u={toc:c},d="wrapper";function p(e){let{components:n,...a}=e;return(0,r.kt)(d,(0,o.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5e26\u6709\u5168\u5c40\u53d8\u91cf\u7684\u65b9\u7a0b\u7ba1\u7406\u5668",src:t(23879).Z,width:"1019",height:"288"})),(0,r.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u5728\u65b9\u7a0b\u7ba1\u7406\u5668\u4e2d\u6309\u540d\u79f0\u4fee\u6539\u5168\u5c40\u53d8\u91cf\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u5728\u5b8f\u7684\u5934\u90e8\u66f4\u6539\u53d8\u91cf\u7684\u540d\u79f0\u548c\u503c\u5e38\u91cf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const VAR_NAME As String = "Factor"\nConst NEW_VALUE As Double = 0.75\n\nDim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swEqMgr As SldWorks.EquationMgr\n        \n        Set swEqMgr = swModel.GetEquationMgr\n        \n        If SetEquationValue(swEqMgr, VAR_NAME, NEW_VALUE) Then\n            swModel.ForceRebuild3 True\n        Else\n            MsgBox "\u65e0\u6cd5\u627e\u5230\u65b9\u7a0b\u5f0f " & name\n        End If\n    \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n\nFunction SetEquationValue(eqMgr As SldWorks.EquationMgr, name As String, value As Double) As Boolean\n    \n    Dim index As Integer\n    index = GetEquationIndexByName(eqMgr, name)\n    \n    If index <> -1 Then\n        eqMgr.Equation(index) = """" & name & """=" & NEW_VALUE\n        SetEquationValue = True\n    Else\n        SetEquationValue = False\n    End If\n        \nEnd Function\n\nFunction GetEquationIndexByName(eqMgr As SldWorks.EquationMgr, name As String) As Integer\n    \n    Dim i As Integer\n        \n    GetEquationIndexByName = -1\n        \n    For i = 0 To eqMgr.GetCount - 1\n        \n        Dim eqName As String\n        eqName = Trim(Split(eqMgr.Equation(i), "=")(0))\n        eqName = Mid(eqName, 2, Len(eqName) - 2) \'\u4ece\u540d\u79f0\u4e2d\u5220\u9664""\u7b26\u53f7\n        \n        If UCase(eqName) = UCase(VAR_NAME) Then\n            GetEquationIndexByName = i\n            Exit Function\n        End If\n    Next\n    \nEnd Function\n')))}p.isMDXComponent=!0},23879:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/equation-manager-global-variable-72908f7f723612888a633dabf72dc14e.png"}}]);