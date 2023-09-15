"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[87072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},w=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(n),w=r,f=u["".concat(c,".").concat(w)]||u[w]||p[w]||s;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=w;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}w.displayName="MDXCreateElement"},46456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const s={title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u94a3\u91d1\u5c55\u5f00\u56fe\u6848\u4e2d\u67e5\u627e\u5207\u5272\u6e05\u5355\u9879",image:"cut-list-folder-flat-pattern.png",labels:["\u94a3\u91d1","\u5207\u5272\u6e05\u5355","\u5c55\u5f00\u56fe\u6848"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-body-flat-pattern/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-body-flat-pattern/index",title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u94a3\u91d1\u5c55\u5f00\u56fe\u6848\u4e2d\u67e5\u627e\u5207\u5272\u6e05\u5355\u9879",description:"\u5207\u5272\u6e05\u5355\u6587\u4ef6\u5939\u548c\u5c55\u5f00\u56fe\u6848\u7279\u5f81{ width=200 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-body-flat-pattern/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-body-flat-pattern",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-body-flat-pattern/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-body-flat-pattern/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-body-flat-pattern/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u94a3\u91d1\u5c55\u5f00\u56fe\u6848\u4e2d\u67e5\u627e\u5207\u5272\u6e05\u5355\u9879",image:"cut-list-folder-flat-pattern.png",labels:["\u94a3\u91d1","\u5207\u5272\u6e05\u5355","\u5c55\u5f00\u56fe\u6848"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u6240\u6709\u53ef\u89c1\u7ec4\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-all-visible-components/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u4eceBoss-Extrude\u7279\u5f81\u4e2d\u63d0\u53d6\u9009\u62e9",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-boss-extrude-selection/"}},c={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5207\u5272\u6e05\u5355\u6587\u4ef6\u5939\u548c\u5c55\u5f00\u56fe\u6848\u7279\u5f81",src:n(58372).Z,width:"299",height:"518"}),"{ width=200 }"),(0,r.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u6f14\u793a\u4e86\u5982\u4f55\u4ece\u9009\u5b9a\u7684\u94a3\u91d1\u5c55\u5f00\u56fe\u6848\u7279\u5f81\u4e2d\u627e\u5230\u76f8\u5e94\u7684\u5207\u5272\u6e05\u5355\u6587\u4ef6\u5939\u7279\u5f81\u3002"),(0,r.kt)("p",null,"\u8be5\u5b8f\u652f\u6301\u94a3\u91d1\u7279\u5f81\u7684\u5c55\u5f00\u548c\u8fd8\u539f\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = swModel.SelectionManager.GetSelectedObject6(1, -1)\n    \n    If Not swFeat Is Nothing Then\n    \n        If swFeat.GetTypeName2 = "FlatPattern" Then\n                    \n            Dim swFlatPattern As SldWorks.FlatPatternFeatureData\n            Set swFlatPattern = swFeat.GetDefinition\n            \n            Dim swFixedFace As SldWorks.Face2\n            Set swFixedFace = swFlatPattern.FixedFace2\n            \n            Dim swBody As SldWorks.Body2\n            Set swBody = swFixedFace.GetBody\n            \n            Dim swCutListFeat As SldWorks.Feature\n            \n            Set swCutListFeat = GetCutListFromBody(swModel, swBody)\n            \n            Debug.Print swCutListFeat.Name\n            \n        Else\n            Err.Raise vbError, "", "\u6240\u9009\u7279\u5f81\u4e0d\u662f\u94a3\u91d1\u5c55\u5f00\u56fe\u6848"\n        End If\n    \n    Else\n        Err.Raise vbError, "", "\u8bf7\u9009\u62e9\u7279\u5f81"\n    End If\n    \nEnd Sub\n\nFunction GetCutListFromBody(model As SldWorks.ModelDoc2, body As SldWorks.Body2) As SldWorks.Feature\n    \n    Dim swFeat As SldWorks.Feature\n    Dim swBodyFolder As SldWorks.BodyFolder\n    \n    Set swFeat = model.FirstFeature\n    \n    Do While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2 = "CutListFolder" Then\n            \n            Set swBodyFolder = swFeat.GetSpecificFeature2\n            \n            Dim vBodies As Variant\n            \n            vBodies = swBodyFolder.GetBodies\n            \n            Dim i As Integer\n            \n            If Not IsEmpty(vBodies) Then\n                For i = 0 To UBound(vBodies)\n                    \n                    Dim swCutListBody As SldWorks.Body2\n                    Set swCutListBody = vBodies(i)\n                    \n                    If swApp.IsSame(swCutListBody, body) = swObjectEquality.swObjectSame Then\n                        Set GetCutListFromBody = swFeat\n                        Exit Function\n                    End If\n                    \n                Next\n            End If\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Loop\n\nEnd Function\n')))}p.isMDXComponent=!0},58372:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cut-list-folder-flat-pattern-8322e6e21f3826a2456d75589f969113.png"}}]);