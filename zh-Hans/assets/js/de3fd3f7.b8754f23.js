"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[20646],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},w="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),w=c(t),u=o,m=w["".concat(l,".").concat(u)]||w[u]||p[u]||s;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[w]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},12255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const s={image:"selected-feature.png"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/view-select-corresponding-feature/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/view-select-corresponding-feature/index",title:"index",description:"\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u7684\u7279\u5f81{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/view-select-corresponding-feature/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/view-select-corresponding-feature",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/view-select-corresponding-feature/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/view-select-corresponding-feature/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/view-select-corresponding-feature/index.md",tags:[],version:"current",frontMatter:{image:"selected-feature.png"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u6309\u7c7b\u578b\u9009\u62e9\u6807\u51c6\u53c2\u8003\u51e0\u4f55\uff08\u4f8b\u5982\u524d\u5e73\u9762\u6216\u539f\u70b9\uff09",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/select-standard-ref-geometry/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5728\u6587\u6863\u4e2d\u7b49\u5f85\u7528\u6237\u9009\u62e9",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/wait-for-selection/"}},l={},c=[{value:"\u4f7f\u7528 GetCorresponding \u65b9\u6cd5",id:"\u4f7f\u7528-getcorresponding-\u65b9\u6cd5",level:2},{value:"\u4f7f\u7528 SelectById2 \u65b9\u6cd5",id:"\u4f7f\u7528-selectbyid2-\u65b9\u6cd5",level:2}],d={toc:c},w="wrapper";function p(e){let{components:n,...s}=e;return(0,o.kt)(w,(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u7684\u7279\u5f81",src:t(51333).Z,width:"339",height:"634"}),"{ width=250 }"),(0,o.kt)("p",null,"\u8fd9\u4e2a VBA \u5b8f\u6f14\u793a\u4e86\u5982\u4f55\u5728\u7ed8\u56fe\u4e2d\u7684\u6bcf\u4e2a\u89c6\u56fe\u4e2d\u627e\u5230\u6a21\u578b\u7a7a\u95f4\u4e2d\u8f93\u5165\u7279\u5f81\u7684\u6307\u9488\u5e76\u9009\u62e9\u5b83\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6253\u5f00\u521b\u5efa\u7ed8\u56fe\u89c6\u56fe\u7684\u6a21\u578b\uff08\u4f8b\u5982\u88c5\u914d\u6216\u96f6\u4ef6\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u9009\u62e9\u4efb\u4f55\u7279\u5f81"),(0,o.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5b8f\u3002\u5b8f\u505c\u6b62\u6267\u884c"),(0,o.kt)("li",{parentName:"ul"},"\u6fc0\u6d3b\u7ed8\u56fe"),(0,o.kt)("li",{parentName:"ul"},"\u7ee7\u7eed\u8fd0\u884c\u5b8f\u3002\u6bcf\u4e2a\u89c6\u56fe\u4e2d\u7684\u6240\u6709\u76f8\u5e94\u7279\u5f81\u90fd\u88ab\u9009\u62e9")),(0,o.kt)("h2",{id:"\u4f7f\u7528-getcorresponding-\u65b9\u6cd5"},"\u4f7f\u7528 GetCorresponding \u65b9\u6cd5"),(0,o.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u5229\u7528\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IView~GetCorresponding.html"},"IView::GetCorresponding")," API \u65b9\u6cd5\uff0c\u901a\u8fc7\u5c06\u6307\u9488\u4ece\u88c5\u914d\u4e0a\u4e0b\u6587\u8f6c\u6362\u4e3a\u7ed8\u56fe\u89c6\u56fe\u4e0a\u4e0b\u6587\u3002\u6b64 API \u4ec5\u9002\u7528\u4e8e SOLIDWORKS 2018 \u6216\u66f4\u65b0\u7248\u672c\uff0c\u5982\u679c\u9700\u8981\u53e6\u4e00\u79cd\u65b9\u6cd5\uff0c\u8bf7\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"#%E4%BD%BF%E7%94%A8-selectbyid2-%E6%96%B9%E6%B3%95"},"\u4f7f\u7528 SelectById2 \u65b9\u6cd5"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Set swFeat = swSelMgr.GetSelectedObject6(1, -1)\n    \n    \'\u6fc0\u6d3b\u7ed8\u56fe\n    Stop\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n        \n    Set swSelMgr = swDraw.SelectionManager\n    \n    Dim vViews As Variant\n    \n    vViews = swDraw.GetViews()(0)\n    \n    Dim i As Integer\n    \n    Dim swSelData As SldWorks.SelectData\n    Set swSelData = swSelMgr.CreateSelectData\n    \n    swDraw.ClearSelection2 True\n    \n    For i = 0 To UBound(vViews)\n        \n        Dim swView As SldWorks.View\n        \n        Set swView = vViews(i)\n        \n        If swView.ReferencedDocument Is swModel Then\n                    \n            Dim swViewFeat As SldWorks.Entity\n            Set swViewFeat = swFeat\n            \n            Set swViewFeat = swView.GetCorresponding(swFeat)\n            \n            swSelData.View = swView\n            \n            If Not swViewFeat Is Nothing Then\n                Debug.Print swViewFeat.Select4(True, swSelData)\n            Else\n                Debug.Print "\u65e0\u6cd5\u83b7\u53d6\u76f8\u5e94\u7684\u7279\u5f81"\n            End If\n            \n        End If\n        \n    Next\n    \nEnd Sub\n')),(0,o.kt)("h2",{id:"\u4f7f\u7528-selectbyid2-\u65b9\u6cd5"},"\u4f7f\u7528 SelectById2 \u65b9\u6cd5"),(0,o.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u5229\u7528\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~selectbyid2.html"},"IModelDocExtension::SelectByID2")," \u65b9\u6cd5\uff0c\u901a\u8fc7\u7ec4\u5408\u7279\u5f81\u540d\u79f0\u6765\u9009\u62e9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swRefModel As SldWorks.ModelDoc2\n    \n    Set swRefModel = swApp.ActiveDoc\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = swRefModel.SelectionManager.GetSelectedObject6(1, -1)\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = swRefModel.SelectionManager\n    \n    Dim selName As String\n    Dim selType As String\n    selName = swFeat.GetNameForSelection(selType)\n    \n    Stop\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    Set swDraw = swApp.ActiveDoc\n    \n    Dim swView As SldWorks.View\n    Set swView = swDraw.SelectionManager.GetSelectedObject6(1, -1)\n    \n    Dim drwSelPrefix As String\n    drwSelPrefix = swFeat.Name & "@" & swView.RootDrawingComponent.Name & "@" & swView.Name\n    \n    selName = Right(selName, Len(selName) - InStr(selName, "@"))\n    \n    If False = swDraw.Extension.SelectByID2(drwSelPrefix & "/" & selName, selType, 0, 0, 0, False, 0, Nothing, 0) Then\n        Err.Raise vbError, "", "\u65e0\u6cd5\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u76f8\u5e94\u7684\u7279\u5f81"\n    End If\n\nEnd Sub\n')))}p.isMDXComponent=!0},51333:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/selected-feature-f11dd36245daee85e5b0a29f0aeaab2c.png"}}]);