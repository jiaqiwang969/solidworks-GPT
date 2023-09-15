"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[20006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>w});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=s,w=d["".concat(i,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(w,a(a({ref:t},c),{},{components:n})):o.createElement(w,a({ref:t},c))}));function w(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:s,a[1]=p;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=n(87462),s=(n(67294),n(3905));const r={title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u7ec4\u4ef6\u6dfb\u52a0\u5230\u88c5\u914d\u4f53",caption:"\u6dfb\u52a0\u7ec4\u4ef6\u5230\u88c5\u914d\u4f53"},a=void 0,p={unversionedId:"codestack/solidworks-api/document/assembly/components/add/index",id:"codestack/solidworks-api/document/assembly/components/add/index",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u7ec4\u4ef6\u6dfb\u52a0\u5230\u88c5\u914d\u4f53",description:"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u4f7f\u7528SOLIDWORKS API\u5c06\u7ec4\u4ef6\u6dfb\u52a0\u5230\u88c5\u914d\u4f53\u6811\u4e2d\u7684\u4e24\u79cd\u4e0d\u540c\u65b9\u6cd5\uff08\u5355\u4e2a\u7ec4\u4ef6\u6dfb\u52a0\u6216\u6279\u91cf\u6dfb\u52a0\uff09",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/assembly/components/add/index.md",sourceDirName:"codestack/solidworks-api/document/assembly/components/add",slug:"/codestack/solidworks-api/document/assembly/components/add/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/add/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/assembly/components/add/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u7ec4\u4ef6\u6dfb\u52a0\u5230\u88c5\u914d\u4f53",caption:"\u6dfb\u52a0\u7ec4\u4ef6\u5230\u88c5\u914d\u4f53"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u52a8\u5316\u88c5\u914d\u7ec4\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u8fdb\u884c\u6269\u5c55\u9ad8\u7ea7\u9009\u62e9\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/advanced-selection/"}},i={},l=[],c={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u4f7f\u7528SOLIDWORKS API\u5c06\u7ec4\u4ef6\u6dfb\u52a0\u5230\u88c5\u914d\u4f53\u6811\u4e2d\u7684\u4e24\u79cd\u4e0d\u540c\u65b9\u6cd5\uff08\u5355\u4e2a\u7ec4\u4ef6\u6dfb\u52a0\u6216\u6279\u91cf\u6dfb\u52a0\uff09\nlabels: ","[\u6dfb\u52a0\u7ec4\u4ef6, \u88c5\u914d\u4f53, \u793a\u4f8b, solidworks api]","\nredirect-from:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"/2018/03/solidworks-api-assembly-add-components.html"),(0,s.kt)("li",{parentName:"ul"},"/solidworks-api/document/assembly/add-components")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u4f7f\u7528SOLIDWORKS API\u5c06\u7ec4\u4ef6\u6dfb\u52a0\u5230\u88c5\u914d\u4f53\u6811\u4e2d\u7684\u4e24\u79cd\u4e0d\u540c\u65b9\u6cd5\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4f20\u7edf\u7684\u65b9\u6cd5\u662f\u901a\u8fc7",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IAssemblyDoc~AddComponent5.html"},"SOLIDWORKS API\u7684AddComponentX"),"\u6765\u6dfb\u52a0\u7ec4\u4ef6\u3002\u8be5\u65b9\u6cd5\u8981\u6c42\u5c06\u6a21\u578b\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u5426\u5219\u64cd\u4f5c\u5c06\u5931\u8d25\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u66f4\u9ad8\u7ea7\u7684\u65b9\u6cd5\u662f\u4f7f\u7528",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAssemblyDoc~AddComponents3.html"},"SOLIDWORKS API\u7684AddComponents"),"\u3002\u8be5\u65b9\u6cd5\u5141\u8bb8\u5728\u4e0d\u4e8b\u5148\u6253\u5f00\u6a21\u578b\u7684\u60c5\u51b5\u4e0b\u6279\u91cf\u63d2\u5165\u4e0d\u540c\u7684\u7ec4\u4ef6\u3002")),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:n(83451).Z},"\u4e0b\u8f7d\u793a\u4f8b\u6587\u4ef6")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swMathUtils As SldWorks.MathUtility\nDim swAssy As SldWorks.AssemblyDoc\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        \n        Dim comp1Path As String\n        Dim comp2Path As String\n        \n        comp1Path = swApp.GetCurrentMacroPathFolder() & "\\Part1.sldprt"\n        comp2Path = swApp.GetCurrentMacroPathFolder() & "\\Part2.sldprt"\n        \n        Dim swComp As SldWorks.Component2\n        \n        \'\u4ee5\u4e0bAPI\u8c03\u7528\u5c06\u5931\u8d25\uff0c\u56e0\u4e3a\u9700\u8981\u5c06\u6a21\u578b\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\n        Set swComp = swAssy.AddComponent4(comp1Path, "", 0, 0, 0)\n        \n        Debug.Assert Not swComp Is Nothing\n                \n        \'\u4ee5\u4e0d\u53ef\u89c1\u65b9\u5f0f\u52a0\u8f7d\u6a21\u578b\n        swApp.DocumentVisible False, swDocumentTypes_e.swDocPART\n        swApp.OpenDoc6 comp1Path, swDocumentTypes_e.swDocPART, swOpenDocOptions_e.swOpenDocOptions_Silent, "", 0, 0\n        swApp.DocumentVisible True, swDocumentTypes_e.swDocPART\n        \n        \'\u73b0\u5728\u8fd9\u4e2aAPI\u8c03\u7528\u6210\u529f\u4e86\n        Set swComp = swAssy.AddComponent4(comp1Path, "", 0, 0, 0)\n        \n        Debug.Assert Not swComp Is Nothing\n        \n        Dim strCompNames(0) As String\n        Dim vTransformData As Variant\n        Dim vComps As Variant\n        strCompNames(0) = comp2Path\n        \n        vTransformData = swMathUtils.CreateTransform(Empty).ArrayData\n        \n        \'\u5982\u679c\u4f7f\u7528\u6b64\u65b9\u6cd5\uff0c\u5219\u4e0d\u9700\u8981\u5c06\u6587\u6863\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\n        vComps = swAssy.AddComponents(strCompNames, vTransformData)\n    \n        Debug.Assert UBound(vComps) <> 1\n        \n    Else\n        \n        MsgBox "\u8bf7\u6253\u5f00\u6216\u521b\u5efa\u88c5\u914d\u4f53"\n        \n    End If\n\nEnd Sub\n\n\n')))}m.isMDXComponent=!0},83451:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/parts-9ce2e66c88e0d8e6ba899d7af67028a6.zip"}}]);