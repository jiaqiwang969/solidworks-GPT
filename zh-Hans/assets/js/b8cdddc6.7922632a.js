"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[9774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=l,u=d["".concat(s,".").concat(k)]||d[k]||m[k]||a;return n?o.createElement(u,r(r({ref:t},c),{},{components:n})):o.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},80683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),l=(n(67294),n(3905));const a={layout:"sw-tool",title:"\u5728\u65b0\u6587\u6863\u521b\u5efa\u65f6\u8fd0\u884c\u5b8f",image:"new-document.png",labels:["\u65b0\u6587\u6863"],group:"\u6a21\u578b"},r=void 0,i={unversionedId:"codestack/solidworks-api/application/documents/handle-new-document/index",id:"codestack/solidworks-api/application/documents/handle-new-document/index",title:"\u5728\u65b0\u6587\u6863\u521b\u5efa\u65f6\u8fd0\u884c\u5b8f",description:"\u5728SOLIDWORKS\u4e2d\u521b\u5efa\u65b0\u6587\u6863{ width=350 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/application/documents/handle-new-document/index.md",sourceDirName:"codestack/solidworks-api/application/documents/handle-new-document",slug:"/codestack/solidworks-api/application/documents/handle-new-document/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/application/documents/handle-new-document/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/application/documents/handle-new-document/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u5728\u65b0\u6587\u6863\u521b\u5efa\u65f6\u8fd0\u884c\u5b8f",image:"new-document.png",labels:["\u65b0\u6587\u6863"],group:"\u6a21\u578b"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5728\u6587\u6863\u4fdd\u5b58\u65f6\u81ea\u52a8\u8fd0\u884cVBA\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/application/documents/handle-document-save/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u9759\u9ed8\u4fdd\u5b58\u6240\u6709\u6253\u5f00\u7684\u6587\u6863\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/application/documents/save-all-silently/"}},s={},p=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5b8f\u6a21\u5757",id:"\u5b8f\u6a21\u5757",level:2},{value:"FileNewWatcher \u7c7b\u6a21\u5757",id:"filenewwatcher-\u7c7b\u6a21\u5757",level:2},{value:"HandlerModule \u6a21\u5757",id:"handlermodule-\u6a21\u5757",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u5728SOLIDWORKS\u4e2d\u521b\u5efa\u65b0\u6587\u6863",src:n(53513).Z,width:"775",height:"556"}),"{ width=350 }"),(0,l.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u5904\u7406\u5728SOLIDWORKS\u4e2d\u521b\u5efa\u65b0\u6587\u6863\uff08\u96f6\u4ef6\u3001\u88c5\u914d\u6216\u56fe\u7eb8\uff09\u7684\u4e8b\u4ef6\uff0c\u5e76\u5141\u8bb8\u5728\u6b64\u4e8b\u4ef6\u53d1\u751f\u65f6\u81ea\u52a8\u8fd0\u884c\u81ea\u5b9a\u4e49\u4ee3\u7801\u6216\u5176\u4ed6\u5b8f\u3002\u6b64\u5b8f\u8fd8\u5904\u7406\u5728SOLIDWORKS\u88c5\u914d\u4e2d\u521b\u5efa\u65b0\u865a\u62df\u6587\u6863\u7684\u60c5\u51b5\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u65b0\u7684\u5b8f\uff08\u4f8b\u5982",(0,l.kt)("em",{parentName:"li"},"RunOnNewDocCreated.swp"),"\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u4ee3\u7801\u590d\u5236\u5230\u5b8f\u7684\u76f8\u5e94\u6a21\u5757\u4e2d\u3002VBA\u5b8f\u6811\u5e94\u8be5\u7c7b\u4f3c\u4e8e\u4e0b\u9762\u7684image: ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u5b8f\u6587\u4ef6\u6811",src:n(88027).Z,width:"294",height:"202"}),"{ width=250 }"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u4ee3\u7801\u653e\u5165",(0,l.kt)("em",{parentName:"li"},"HandlerModule"),"\u6a21\u5757\u7684",(0,l.kt)("em",{parentName:"li"},"main"),"\u5b50\u7a0b\u5e8f\u4e2d\u3002\u5c06",(0,l.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html"},"IModelDoc2"),"\u6587\u6863\u7684\u6307\u9488\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u3002\u5728\u6b64\u4e8b\u4ef6\u5230\u8fbe\u65f6\uff0c\u4f7f\u7528\u6b64\u6307\u9488\u800c\u4e0d\u662f",(0,l.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~activedoc.html"},"ISldWorks::ActiveDoc"),"\uff0c\u56e0\u4e3a\u65b0\u6587\u6863\u53ef\u80fd\u8fd8\u6ca1\u6709\u8bbe\u7f6e\u4e3a\u6d3b\u52a8\u6587\u6863\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vb"},"Sub main(model As SldWorks.ModelDoc2)\n    'TODO: \u5728\u8fd9\u91cc\u6dfb\u52a0\u4f60\u7684\u4ee3\u7801\nEnd Sub\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06\u6b64\u5b8f\u4e0e\u6bcf\u4e2aSOLIDWORKS\u4f1a\u8bdd\u81ea\u52a8\u8fd0\u884c\u3002\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start/"},"\u5728SOLIDWORKS\u542f\u52a8\u65f6\u81ea\u52a8\u8fd0\u884c\u5b8f"),"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u4e86\u89e3\u5982\u4f55\u8fd0\u884c\u53e6\u4e00\u4e2a\u5b8f\u6216\u4e00\u7ec4\u5b8f\uff0c\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/application/frame/run-macros-group/"},"\u8fd0\u884c\u4e00\u7ec4\u5b8f"),"\u6587\u7ae0\u3002")),(0,l.kt)("h2",{id:"\u5b8f\u6a21\u5757"},"\u5b8f\u6a21\u5757"),(0,l.kt)("p",null,"\u542f\u52a8\u65b0\u6587\u6863\u521b\u5efa\u4e8b\u4ef6\u76d1\u89c6\u7684\u5165\u53e3\u70b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swFileNewWatcher As FileNewWatcher\n\nSub main()\n    \n    Set swFileNewWatcher = New FileNewWatcher\n    \n    While True\n        DoEvents\n    Wend\n    \nEnd Sub\n")),(0,l.kt)("h2",{id:"filenewwatcher-\u7c7b\u6a21\u5757"},"FileNewWatcher \u7c7b\u6a21\u5757"),(0,l.kt)("p",null,"\u5904\u7406SOLIDWORKS\u65b0\u6587\u6863API\u901a\u77e5\u7684\u7c7b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vb"},"Dim WithEvents swApp As SldWorks.SldWorks\n\nPrivate Sub Class_Initialize()\n    Set swApp = Application.SldWorks\nEnd Sub\n\nPrivate Function swApp_FileNewNotify2(ByVal NewDoc As Object, ByVal DocType As Long, ByVal TemplateName As String) As Long\n    HandlerModule.main NewDoc\nEnd Function\n")),(0,l.kt)("h2",{id:"handlermodule-\u6a21\u5757"},"HandlerModule \u6a21\u5757"),(0,l.kt)("p",null,"\u9700\u8981\u4e3a\u6bcf\u4e2a\u65b0\u521b\u5efa\u7684\u6587\u6863\u8fd0\u884c\u7684\u81ea\u5b9a\u4e49VBA\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vb"},'Sub main(model As SldWorks.ModelDoc2)\n    \'TODO: \u5b9e\u73b0\u8fc7\u7a0b\n    MsgBox "\u521b\u5efa\u6587\u4ef6: " & model.GetTitle()\nEnd Sub\n')))}m.isMDXComponent=!0},88027:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASYAAADKCAMAAAA/6x2lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAIerhwD/AFBAQAD//wBgqzYAAGCrq4CAAP//26CqwP/ggP8A/wCAgAAANtv/2wBkZDkAOaC20DZgq29OVKOQgeCpMIfOq6vw8PDwzkN8sf//AIc2ADYAYAA2hzZgh7CAEKDA//DOcFqRxv7+/oCAgM7w8Ovr64fO8Lm5umCr8PHx8fD2/zOZ/7b/tmAANgAAZGZmZjk5j2QAAKCgoJBmAENOVFqRm5CIcMrKym+lsQBmkNDi/86HYFpOVNu2ZqtgNpGRkZDb/2lpaYCo8M7wq7CokDaHzr/Nscba7v//toB4cNCQENv//2MAYzAoIL/M2ylCctvbkI05OUBz4AA6OrKysrb///+2ZoRlVGa223CLsJjN22+l27+lgzpmkCAQEIdgh7+5m//qoL/MxWa2/9PT02A2hzaHh86HNoR8m1pOg/BoQPDGYGZmtmZmAKvN26uRbENObPC0QLDQ8PDOh6tgANfl82CY8MDAwEtjp6qqqjqQ21CC4PB4UHBwYP/wsGYAOoAAgKurYOTu+KCgkDo6ANv/ttuQOtLh8ba2Ztbc3VpObKB4IMDQ8Jh8VLnR6rbbkICYsLCwwISl25CowICo/zY2Nt/f3zBIYPDgoMCMEPCrYABmtoCQsLb/2zBk0JA6APDgkG+Rm//bkOC4UG9ObLZmAMrc7+Dr/2BQUP/wwFplm7DA4IKHkFplg//QcIS52/CAYNuQZqC44ICg8OCaIAA6kJBwIPDwq5C2kEN8m2CN4GB4kDoAZtDY4JC1/6ulg5DbtoSRbPCoMFplbG9Og0NOg6CYkNDQ4G+lxpCo8P/gkM7OhyAgEJCgwOCgMMCUIHCY4IeHYP/YgNnZ2fC8UJCQZnBgUEA4MNDY/7CAINCcIHCc8JBmkPDQYJCIgGa2tvDosKCYgODo4OPj42B8oP/okNvn9ENlm2Y6kLCgkMnKuwAAOpCQtjpmtvCIcJi5mzqQkIBwYJiRbJjNsXCEoDoAAMDY8FBQQGBgULZmOs3e8Do6Ov/YcAAAAMIgvfUAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAT5klEQVR4Xu2dC5wdV13Hx5pUtpTSaojNQ2jL3bR5tF27IRDoQxKEeDUhtU2zsSTqNglEgyRogosBG3l0eW4VpalkxejKGmiVQum6tYZaH6ggyCNFhAotLJhiKCCw5RE+/n7////M4965NzN7Z+7ex/xu7j3n/OecM+d87/+cmTk7k+v9pejW5YXqqcCUSAWmRPJ+ILp1Y6E4KaSVKwtMvkpVWuswrS0w+SpNVWhlgSlGpSmF4iuM6Q2iAlNSTCOrVq16+V1WxNfIh15ksXpi2VULLREVN53YYwlqRHeyNz77Xta06umWqhA3JmqPqMYeaiohJrRtbzWnam2L9Fo0ghatmxfTuXXzmDnCekSp1cJE87p5cTC2b6F121ZLVqi6VTPC5HkCRoKamLZvqfE9hlUD08a91faNI2qT7aaRZwrPepjQjpitcfUHygwTAelnPUzbtzyb3yX9m7uhlQlxMxq3chRVNkAxLdy47l3INvjrL9q+5d+2sMi6efrdD775LmdCjdvoFdIJrVh9ETlhs75pFrcn2a+rC410LWR1g1fLoLZWmZHJE9/SqhJLBx0JKaV6mLZu3/LX2M9etEO+UhmKaAbbTePgH9byJqAIYWLvT+yR3kLoojOxRmYnD6uYFW5jJ0e2OkyszG+D7tfVBZu00Br1lLs0k7TKGbkfqTGNbG4CI6VUGxMmERl30l32l1ZJAKD7OuMw4bukNcCEShBGMKmJNQoE8z1UzOTIn9+xh2nDhKhsZQnbbwiTayHKikU44+2MWjQ80pPITeGOUg1M2lXZtTaJe0OntmEDtNW102FaN88/7qBF0hlpn2BCAr2PYFKTfB341sHDVcyO/fO333UXKw68yW+DVeLqshZaWdSFwDA5I78N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"},53513:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/new-document-42f67e3f2b4e697100bc14febff5b62e.png"}}]);