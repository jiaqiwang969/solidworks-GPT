"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[44742],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var s=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,s,n=function(e,t){if(null==e)return{};var o,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=s.createContext({}),A=function(e){var t=s.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=A(e.components);return s.createElement(l.Provider,{value:t},e.children)},w="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),w=A(o),p=n,u=w["".concat(l,".").concat(p)]||w[p]||d[p]||r;return o?s.createElement(u,a(a({ref:t},c),{},{components:o})):s.createElement(u,a({ref:t},c))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[w]="string"==typeof e?e:n,a[1]=i;for(var A=2;A<r;A++)a[A]=o[A];return s.createElement.apply(null,a)}return s.createElement.apply(null,o)}p.displayName="MDXCreateElement"},72476:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>A});var s=o(87462),n=(o(67294),o(3905));const r={title:"\u4f7f\u7528SOLIDWORKS API\u663e\u793a\u7f16\u8f91\u6750\u6599\u5bf9\u8bdd\u6846",caption:"\u663e\u793a\u7f16\u8f91\u6750\u6599\u5bf9\u8bdd\u6846"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/materials/show-edit-material-dialog/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/materials/show-edit-material-dialog/index",title:"\u4f7f\u7528SOLIDWORKS API\u663e\u793a\u7f16\u8f91\u6750\u6599\u5bf9\u8bdd\u6846",description:"\u4f7f\u7528SOLIDWORKS API\u548cWindows API\u6253\u5f00SOLIDWORKS\u96f6\u4ef6\u6587\u6863\u4e2d\u7684\u7f16\u8f91\u6750\u6599\u5bf9\u8bdd\u6846\u7684VBA\u5b8f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/materials/show-edit-material-dialog/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/materials/show-edit-material-dialog",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/materials/show-edit-material-dialog/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/materials/show-edit-material-dialog/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/materials/show-edit-material-dialog/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u663e\u793a\u7f16\u8f91\u6750\u6599\u5bf9\u8bdd\u6846",caption:"\u663e\u793a\u7f16\u8f91\u6750\u6599\u5bf9\u8bdd\u6846"},sidebar:"tutorialSidebar",previous:{title:"\u4ece\u6750\u6599\u590d\u5236SOLIDWORKS\u81ea\u5b9a\u4e49\u5c5e\u6027\u5230\u6a21\u578b\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/materials/copy-custom-property/"},next:{title:"Automating Mating Relationships in Assemblies with SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/"}},l={},A=[{value:"labels: \u7f16\u8f91\u6750\u6599",id:"labels-\u7f16\u8f91\u6750\u6599",level:2}],c={toc:A},w="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(w,(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\u548cWindows API\u6253\u5f00SOLIDWORKS\u96f6\u4ef6\u6587\u6863\u4e2d\u7684\u7f16\u8f91\u6750\u6599\u5bf9\u8bdd\u6846\u7684VBA\u5b8f\nimage: edit-material-command.png"),(0,n.kt)("h2",{id:"labels-\u7f16\u8f91\u6750\u6599"},"labels: ","[\u7f16\u8f91\u6750\u6599]"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SOLIDWORKS\u96f6\u4ef6\u4e2d\u7684\u7f16\u8f91\u6750\u6599\u83dc\u5355\u547d\u4ee4",src:o(69298).Z,width:"395",height:"272"}),"{ width=350 }"),(0,n.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u4f7f\u7528SOLIDWORKS API\u548cWindows API\u7684\u7ec4\u5408\u6765\u6253\u5f00\u201c\u7f16\u8f91\u6750\u6599\u201d\u5bf9\u8bdd\u6846\uff0c\u4ee5\u5206\u914d\u6216\u66f4\u6539\u6d3b\u52a8SOLIDWORKS\u96f6\u4ef6\u6587\u6863\u7684\u6750\u6599\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        If swModel.GetType() = swDocumentTypes_e.swDocPART Then\n        \n            Const WM_COMMAND As Long = &H111\n            Const EDIT_MATERIAL As Long = 59526\n            \n            Dim swFrame As SldWorks.Frame\n            \n            Set swFrame = swApp.Frame\n            \n            SendMessage swFrame.GetHWnd(), WM_COMMAND, EDIT_MATERIAL, 0\n        \n        End If\n        \n    End If\n    \nEnd Sub\n')))}d.isMDXComponent=!0},69298:(e,t,o)=>{o.d(t,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYsAAAEQCAMAAAB2n6g5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAPTPC3ZRAHZxMwAtgPn5+XR0dHW72cwzMyVxogAAOBUVFbm5uZ6TZouwi2OwsIJgDSUAMzgAANOqHgBRot7EYgA3Vbfj1bBjAKbIoiVxw66kiyUAW76aByUtMzg4YycqpYtjix9aeHaTo2MAOLrU6WMAAEcxCrDUi6qqqjiL1AAAW12s41FRUTxxj/ewY4l0OqbI44s4AIzR7L3J0PT01Vd/ll0tALmYOn2bq2xsbDaOxNO4SffUizg4ONIcAaGTaHmCirrEyvewi49xW8vGucPDw4w4OO0cJJR0E7GxscOvYj8/P83d5NrWywBjsJG7zmMAYzhjsDIyMiMjI67J1U+NqV0tM42NjZmZmTiLsWWkwaa7xWOw1GOw93tgHwA4i8yuVvjeRKeAJ9uQOtXFdmNjAGM4i+7CHzqQ2yUAAHRWGqGYcAtEYqeGPaOPS0NRW+rchtbMr7CLizB/pTgAY/njXeswA9SLY/+2ZpDb/9SLOI/I4zgAOHbH4sCYHT2EpVubudjZ2FE7Es7OzuSwMGJiYpOTk9Pj8SplhaCgoIZvOP/bkNfQxLDO5qaDL0KItd7f3YODgxsbG7ClkKasgGa2/2qLnnN7gszR0QA6kJpzJCoqKsa4kpaywYvU92RJFcjO0kMAM4tkIJFsFLKfb6vCzc6WLdvc2kRERK6PRI+Qj+rq6dX39y96n4HK5kOP49bX1fw/BVxcW49xMwAAY0yRs4+PW+G2HsLe6LWPHNOwY2iYsHbIw0tLS5A6APbKIKKWgUqKp/jpfHh4eNPT04BfDIGovN3ET7OSOavL5F6EnEMAAGmsyrimd86SIjGDqi1wlJSBQxRHY6B/FaaPW1SRr7z0+UMAW/jgUdu2ZlE6DaN7ILmvnff3sKyGG5BpILXAyODMd4VmGHRcKAo/W7jT6OLe0iddfK+KN+G5Q8HL0qbIw7D19lZBF2meuCtrjN+0OS51mVuRrFGGofjqj9uQZvrUDIp6VUaFo6CXcG+00t7k3oJlFtLMvAAAAA1wwsUAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAZx0lEQVR4Xu2dD5xc1VXHh8gLGGKrwcKApYjQpAnQlaXTVGS3BSRITE3oRExAI1aqFCv+aRJM10KJNImIwSRGKo2CxuquzAZSEmxaTSKyVgLFUIT4p25pqTG1BDA1WjD68fzOOfe++2bezLzJzs7et3N/n9159737Z+ad77t/3rtn7hSiaF5E4hdWuVTWUNdJjLCRXydAtSyicmAxMUph0b0KLPxRYOGPAgt/FFj4I19YBJHYJBPOIsgqsPBHgYU/8oNF5cpvvfw9/6Y7XSsfWFz5tS9+4JePfuD7X/4dPdCl8oHFrC+/8NNv+tyfffJds/RAl8oLFntvun3ru/525crAYmJkWfzftx7Yu3fv1pUkh0WxUChMu193qjWQjCkujAYoeaEwRw+IBgo7D2vQqphMktSYC3EKKGbPhlNdiMCEs5j1U0e3prGgD15l8ijquWEYm77+j7oRPXQiAziZ0ZmuAfoSiVQoVkup1ZgLSSnAUTqLUi8yfRilTTyL2z9pWFz6wI9yFIQPXuqt+vRigFLvG89zLFS6inbYCnpeqr4VKSZpzmIshaQU4CidhUN74lns/cypzOLSe275kS/++r9UONay6JtRKNBpk/1n7vxZqcwDC0ddFqgWaoWoB5cktRRUodBeLDTZOQPsSsXaJoFUXKYBDrVcyOjPJYE4BTAvLqM4h0oBORzSoor8mXGQqpF8hqIXLFif/dLXv3qU9IvaTgmLZdGv3s/XWan3bDIEX4xkjQSLAVxuagVcZDhFWIMvac3umjG+pAds3yCh1gvpmyFZVE4BlAabKyhEZXNVQTYtCrlxdlD8KSaeBWoF6dQv/cybjn71lnscFqb/o08uzZU5hQQLvrbVChTBcUjEZoQoVxqL2I4m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"}}]);