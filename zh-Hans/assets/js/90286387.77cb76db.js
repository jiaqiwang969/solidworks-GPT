"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[41508],{3905:(n,e,o)=>{o.d(e,{Zo:()=>d,kt:()=>u});var t=o(67294);function s(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function i(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function r(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){s(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function a(n,e){if(null==n)return{};var o,t,s=function(n,e){if(null==n)return{};var o,t,s={},i=Object.keys(n);for(t=0;t<i.length;t++)o=i[t],e.indexOf(o)>=0||(s[o]=n[o]);return s}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)o=i[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(s[o]=n[o])}return s}var l=t.createContext({}),p=function(n){var e=t.useContext(l),o=e;return n&&(o="function"==typeof n?n(e):r(r({},e),n)),o},d=function(n){var e=p(n.components);return t.createElement(l.Provider,{value:e},n.children)},c="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},w=t.forwardRef((function(n,e){var o=n.components,s=n.mdxType,i=n.originalType,l=n.parentName,d=a(n,["components","mdxType","originalType","parentName"]),c=p(o),w=s,u=c["".concat(l,".").concat(w)]||c[w]||m[w]||i;return o?t.createElement(u,r(r({ref:e},d),{},{components:o})):t.createElement(u,r({ref:e},d))}));function u(n,e){var o=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var i=o.length,r=new Array(i);r[0]=w;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a[c]="string"==typeof n?n:s,r[1]=a;for(var p=2;p<i;p++)r[p]=o[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}w.displayName="MDXCreateElement"},18106:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var t=o(87462),s=(o(67294),o(3905));const i={title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u6240\u6709\u53ef\u89c1\u7ec4\u4ef6",image:"drawing-view-feature-tree.png",labels:["\u53ef\u89c1\u7ec4\u4ef6","\u7ed8\u56fe\u89c6\u56fe"]},r=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/get-all-visible-components/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/get-all-visible-components/index",title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u6240\u6709\u53ef\u89c1\u7ec4\u4ef6",description:"\u7ed8\u56fe\u89c6\u56fe\u7279\u5f81\u6811{ width=350 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/get-all-visible-components/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/get-all-visible-components",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/get-all-visible-components/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/get-all-visible-components/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/get-all-visible-components/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u6240\u6709\u53ef\u89c1\u7ec4\u4ef6",image:"drawing-view-feature-tree.png",labels:["\u53ef\u89c1\u7ec4\u4ef6","\u7ed8\u56fe\u89c6\u56fe"]},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/find-specific-edge-in-drawing-view/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u7ed8\u56fe\u89c6\u56fe\u83b7\u53d6\u5b9e\u4f53\u548c\u6750\u6599",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/get-view-bodies/"}},l={},p=[],d={toc:p},c="wrapper";function m(n){let{components:e,...i}=n;return(0,s.kt)(c,(0,t.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u7ed8\u56fe\u89c6\u56fe\u7279\u5f81\u6811",src:o(47154).Z,width:"613",height:"773"}),"{ width=350 }"),(0,s.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u4f7f\u7528SOLIDWORKS API\u4ece\u9009\u5b9a\u7684\u7ed8\u56fe\u89c6\u56fe\u4e2d\u63d0\u53d6\u6240\u6709\u53ef\u89c1\u7ec4\u4ef6\u3002\u8be5\u5b8f\u5c06\u63d0\u53d6\u6240\u6709\u7c7b\u578b\u7684\u7ec4\u4ef6\uff08\u96f6\u4ef6\u7ec4\u4ef6\u548c\u88c5\u914d\u4f53\u7ec4\u4ef6\uff09\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2013/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iview~getvisiblecomponents.html"},"IView::GetVisibleComponents")," SOLIDWORKS API\u65b9\u6cd5\u53ea\u63d0\u53d6\u96f6\u4ef6\u7ec4\u4ef6\uff08\u5373sldprt\u6587\u4ef6\uff09\uff0c\u800c\u6240\u6709\u5b50\u88c5\u914d\u4f53\u7ec4\u4ef6\u4e0d\u4f1a\u88ab\u8fd4\u56de\u3002\u6b64\u5916\uff0c\u6b64\u51fd\u6570\u8fd4\u56de\u7684",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IComponent2.html"},"IComponent2"),"\u63a5\u53e3\u6307\u9488\u662f\u7ed8\u56fe\u4e0a\u4e0b\u6587\u7ec4\u4ef6\u3002",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2~getparent.html"},"IComponent2::GetParent")," SOLIDWORKS API\u65b9\u6cd5\u5bf9\u4e8e\u6240\u6709\u7ec4\u4ef6\u90fd\u8fd4\u56deNothing\uff0c\u8fd9\u610f\u5473\u7740\u65e0\u6cd5\u627e\u5230\u7236\u5b50\u88c5\u914d\u4f53\u3002"),(0,s.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u89e3\u51b3\u4e86\u8fd9\u4e9b\u9650\u5236\uff0c\u5e76\u8fd4\u56de\u5176\u88c5\u914d\u4f53\u6587\u6863\u4e0a\u4e0b\u6587\u4e2d\u7684\u6240\u6709\u7ec4\u4ef6\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swView As SldWorks.view\n        Set swView = swModel.SelectionManager.GetSelectedObjectsDrawingView2(1, -1)\n        \n        If Not swView Is Nothing Then\n            \n            Dim vComps As Variant\n            vComps = GetAllVisibleComponents(swView)\n            \n            If Not IsEmpty(vComps) Then\n                \n                Dim i As Integer\n                Dim swComp As SldWorks.Component2\n                \n                For i = 0 To UBound(vComps)\n                    Set swComp = vComps(i)\n                    Debug.Print swComp.Name2\n                Next\n            End If\n            \n        Else\n            MsgBox "\u8bf7\u9009\u62e9\u7ed8\u56fe\u89c6\u56fe"\n        End If\n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n\nFunction GetAllVisibleComponents(view As SldWorks.view) As Variant\n        \n    Dim swRootModel As SldWorks.ModelDoc2\n    Set swRootModel = view.RootDrawingComponent.Component.GetModelDoc2\n    \n    Dim vComps As Variant\n    vComps = view.GetVisibleComponents()\n            \n    Dim swAllComps() As SldWorks.Component2\n    Dim isInit As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n        \n        Dim swCorrComp As SldWorks.Component2\n        Set swCorrComp = GetCorrespondingComponent(swRootModel, swComp)\n            \n        While Not swCorrComp Is Nothing\n                                    \n            Dim add As Boolean\n            add = False\n\n            If Not isInit Then\n                ReDim swAllComps(0)\n                isInit = True\n                add = True\n            Else\n                If Not Contains(swAllComps, swCorrComp) Then\n                    ReDim Preserve swAllComps(UBound(swAllComps) + 1)\n                    add = True\n                End If\n            End If\n\n            If add Then\n                Set swAllComps(UBound(swAllComps)) = swCorrComp\n            End If\n            \n            Set swCorrComp = swCorrComp.GetParent\n\n        Wend\n        \n    Next\n    \n    GetAllVisibleComponents = swAllComps\n    \nEnd Function\n\nFunction GetCorrespondingComponent(assy As SldWorks.AssemblyDoc, swDrawComp As SldWorks.Component2) As SldWorks.Component2\n        \n    Dim name As String\n    name = swDrawComp.Name2\n    \n    Dim vNameParts As Variant\n    vNameParts = Split(name, "/")\n    \n    Dim swComp As SldWorks.Component2\n    \n    Dim swCompFeat As SldWorks.Feature\n    \n    Dim i As Integer\n    i = 0\n    \n    While swCompFeat Is Nothing\n        Set swCompFeat = assy.FeatureByName(vNameParts(i))\n        i = i + 1\n    Wend\n    \n    Set swComp = swCompFeat.GetSpecificFeature2\n    \n    For i = i To UBound(vNameParts)\n                \n        Set swCompFeat = swComp.FeatureByName(vNameParts(i))\n        \n        If swCompFeat Is Nothing Then\n            Set GetComponentByName = Nothing\n            Exit Function\n        End If\n        \n        Set swComp = swCompFeat.GetSpecificFeature2\n        \n    Next\n    \n    Set GetCorrespondingComponent = swComp\n    \nEnd Function\n\nFunction Contains(vArr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vArr)\n        If vArr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')))}m.isMDXComponent=!0},47154:(n,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/drawing-view-feature-tree-95ff8c3d754fd3c8c58bfed6e0375fd2.png"}}]);