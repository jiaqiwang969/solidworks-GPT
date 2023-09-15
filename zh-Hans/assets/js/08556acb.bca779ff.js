"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[76366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>w,kt:()=>A});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),a=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},w=function(e){var t=a(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,w=c(e,["components","mdxType","originalType","parentName"]),p=a(n),g=r,A=p["".concat(l,".").concat(g)]||p[g]||u[g]||s;return n?o.createElement(A,i(i({ref:t},w),{},{components:n})):o.createElement(A,i({ref:t},w))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var a=2;a<s;a++)i[a]=n[a];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},66826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=n(87462),r=(n(67294),n(3905));const s={layout:"sw-tool",title:"\u5c06SOLIDWORKS\u7ec4\u4ef6\u7684\u8def\u5f84\u590d\u5236\u5230\u526a\u8d34\u677f\u7684\u5b8f",caption:"\u590d\u5236\u7ec4\u4ef6\u8def\u5f84"},i=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-path/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-path/index",title:"\u5c06SOLIDWORKS\u7ec4\u4ef6\u7684\u8def\u5f84\u590d\u5236\u5230\u526a\u8d34\u677f\u7684\u5b8f",description:"\u4f7f\u7528SOLIDWORKS API\u5c06\u9009\u5b9a\u7ec4\u4ef6\u7684\u8def\u5f84\u590d\u5236\u5230\u526a\u8d34\u677f\u7684\u5b8f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-path/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-path",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-path/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-path/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-path/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u5c06SOLIDWORKS\u7ec4\u4ef6\u7684\u8def\u5f84\u590d\u5236\u5230\u526a\u8d34\u677f\u7684\u5b8f",caption:"\u590d\u5236\u7ec4\u4ef6\u8def\u5f84"},sidebar:"tutorialSidebar",previous:{title:"Copy SOLIDWORKS file specific custom properties to configuration",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-file-specific-to-configuration/"},next:{title:"\u5c06\u7ed8\u56fe\u89c6\u56fe\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u590d\u5236\u5230SOLIDWORKS\u7ed8\u56fe\u6587\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-view-properties/"}},l={},a=[{value:"group: \u7ec4\u4ef6\u88c5\u914d",id:"group-\u7ec4\u4ef6\u88c5\u914d",level:2}],w={toc:a},p="wrapper";function u(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,o.Z)({},w,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\u5c06\u9009\u5b9a\u7ec4\u4ef6\u7684\u8def\u5f84\u590d\u5236\u5230\u526a\u8d34\u677f\u7684\u5b8f\nimage: copy-component-path.png\nlabels: ","[\u8def\u5f84, \u526a\u8d34\u677f, \u7ec4\u4ef6]"),(0,r.kt)("h2",{id:"group-\u7ec4\u4ef6\u88c5\u914d"},"group: \u7ec4\u4ef6\u88c5\u914d"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5728\u7279\u5f81\u6811\u4e2d\u9009\u62e9\u7684\u7ec4\u4ef6",src:n(82780).Z,width:"316",height:"381"}),"{ width=250 }"),(0,r.kt)("p",null,"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u5c06\u9009\u5b9a\u7ec4\u4ef6\u7684\u5b8c\u6574\u8def\u5f84\u590d\u5236\u5230\u526a\u8d34\u677f\u4e2d\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u53ef\u4ee5\u5728\u88c5\u914d\u6216\u7ed8\u56fe\u6587\u6863\u4e2d\u9009\u62e9"),(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u53ef\u4ee5\u5728\u7279\u5f81\u6811\u6216\u56fe\u5f62\u533a\u57df\u4e2d\u9009\u62e9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8fd8\u53ef\u4ee5\u9009\u62e9\u7ec4\u4ef6\u5b9e\u4f53\uff08\u4f8b\u5982\u9762\u6216\u8fb9\uff09\u4ee5\u83b7\u53d6\u7ec4\u4ef6\u7684\u8def\u5f84")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swComp As SldWorks.Component2\n        \n        If TypeOf swModel Is SldWorks.AssemblyDoc Then\n            \n            Set swComp = swSelMgr.GetSelectedObjectsComponent4(1, -1)\n            \n        ElseIf TypeOf swModel Is SldWorks.DrawingDoc Then\n            \n            Dim swDrawComp As SldWorks.DrawingComponent\n            Set swDrawComp = swSelMgr.GetSelectedObjectsComponent4(1, -1)\n            \n            If swDrawComp Is Nothing Then\n                \'\u5bf9\u4e8e\u5728\u56fe\u5f62\u89c6\u56fe\u4e2d\u9009\u62e9\u7684\u5b9e\u4f53\uff0c\u7b2c\u4e00\u4e2a\u9009\u62e9\u662f\u89c6\u56fe\u672c\u8eab\n                Set swDrawComp = swSelMgr.GetSelectedObjectsComponent4(2, -1)\n            End If\n            \n            If Not swDrawComp Is Nothing Then\n                Set swComp = swDrawComp.Component\n            End If\n            \n        Else\n            MsgBox "\u4ec5\u652f\u6301\u96f6\u4ef6\u548c\u7ed8\u56fe"\n            End\n        End If\n        \n        If Not swComp Is Nothing Then\n            \n            Dim path As String\n            path = swComp.GetPathName\n            Debug.Print path\n            SetTextToClipboard path\n            \n        Else\n            MsgBox "\u8bf7\u9009\u62e9\u7ec4\u4ef6"\n        End If\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6587\u6863"\n    End If\n    \nEnd Sub\n\nSub SetTextToClipboard(text As String)\n    \n    Dim dataObject As Object\n    Set dataObject = CreateObject("new:{1C3B4210-F441-11CE-B9EA-00AA006B1A69}")\n    dataObject.SetText text\n    dataObject.PutInClipboard\n    Set dataObject = Nothing\n    \nEnd Sub\n')))}u.isMDXComponent=!0},82780:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAAF9CAMAAACu3yT9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAA+3ECYOoff394s4AGWyrmM4i7q6twAANxxtjyUAM2yJJwwMDI2vjYfE3HasgAAtgF1xM7BjACVxwzgAAMPQ1wBRoqXHoeDOWL+ZHrGhdAA3VAc7WLG6C7lzc5G7zlqP2CGElSUAW8YWG2hLFsPb7GOw94p3VSUtgLDUix5MV0cxCjaOxHuScpuammMAAFOHo/ewY2MAODg4OHhdG+bBCgAAWziK1KF7H1hYWNfX1riZOnnA3sRZQF0tAKBHRABjsGSHm2hoaLrJ06urqxGaFXQYFcizVpiwvRicZhJKaMWuXtbSxLDCyzqLri11mmebtorT9mMAY97h3eFnaPfUiyUAAHpfYL3AwYyMi7PQ6CpkwDg4Y2Ow1Ni6M/E2A9TU0+/ICo9xM9LV2SVcfNaur6WDMWiqx3Zzc6qTSU+KjRsbGyoqKpy+7VM+E0xMTMi7j7KysluauERERJBqIEhvgzgAYvewiwA4i0OP46vL5Itji5Spts/LrHyxzYZwOLoyJFKlVjgAOKbI4wNCX/jiXT17moEpLGNjAKGTaIaovdSLYuZ+f1wwNZGAM9DAb/fHx12gFTIyMtT19m+d4FbDCnZxgNSLON+4HvLec7GNjvX1sV1RgHK31aasgIKCgt7Le83NzdW1JCMjI+Kzt1aUskVnTs+oHa2JODIzIa+KGnbH43h4eJjO5aSko8DW5UiLS+ZWVcXFxcGtRZ1dX5R0FTFwkcPKwI6MYBpTcUMAM+/v3FV3pDpvyWJiYWNPHYtkIIGbqc7c48vf7iJVo6Wch9IcAbaol4Kv6imbKU2KqCpkhGGiwOc2MV2s40KItWJIEEMAANKxY36TmcSSl926DTGDqu2Ski9TSwAAYy98oWywzpKAQtTIyaWPWqbHw5SUlN3FXNvb2tO4SMzGuos4OPXmjHZRADs0hzhmsfCmpnJbJ99HSSdUbfbKIC1ri9ApLbD29q6VN1GOrGWGZY/I4z0/QEyRs5+IeUsiIu7DH8vV2rVVL0mFoxQUFAAAAH1ejcIAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAhHElEQVR4Xu2dDZwcZX3Hj87p0Ta+9Ega8axYbZLaqxfCocEzRRIjWBQCHocJWL1ihNg7E8OFN0WsDQFRhHZjG8qVXJYzQmNINJgUOhKiJ1qFUqAYS6AJOWKigpcENCop9+n/7XnmeWZnd2efucTb3ef3ye3MPPO8fuf/PDN5/vvMNgTjUm3z8/l8mxyMFw3IVmu8wst3Dw97eG7KLx0Om/JyMF5ULfCCfFvbeGNXPfDGozy8DPLwMigGL+z28NIrBi8fNORD2fcqpxi87qAh3CT7XuXk4WVQIbxAwdvkVVIl4XmVk4eXQR5eBnl4GVQC3kCNSJpzBFQIb7hCyxvoTqffWjyp5xFQIbx8hTM/Hp4SwKv0IfnIQ+noDMPODjnQisfrOHz19aeffvo798ix0lGF11EUXrhn2uIH+uVAy2zEt1pi+pacANmNzeVy3XPgAzYxFcIbDvv6wmE50IrF+8iJD37zwH8+9/rHv/FOCREdVXjDshvXnmc/tmbv3pufWvw+CRCZjWiZFVOLnADF4AW57lwfXKeBXF6CRHF4HcNhcOhQEA7HbM+Od3jhN//j8a9//cbfDH7g8esljHVU4clegVpPvnj3P+9936cva7nssASRLHgPxVQa3gDZ3hwJEsXgdYThhjl9h+ZsCEObnhXvI/vf8PGVP7vxvJ8NDg5+8cvXmzHHB7yRO9ZN+++fX/fQKy95qeU9Egiy4BVIToDi8AgcZhDruHa8jnDTknZQLndok03PjNfxzZ9+6YLg73903o+29gwOfuCjJr2xhWc9+aSEFzblto2MjLTc+8Iltz350r0vtUg4yGwEwTBlgInDWxqGYVl4wO5Q+0B3e3t+fW/vfIueGe/wwplf+viXwfJu/N4g0Lv1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"}}]);