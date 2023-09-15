"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[82498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u4f7f\u7528SOLIDWORKS API\u904d\u5386\u7279\u5f81\u7ba1\u7406\u5668\u8282\u70b9",image:"feature-manager-tree.png",labels:["\u904d\u5386","\u7279\u5f81","\u8282\u70b9"]},s=void 0,i={unversionedId:"codestack/solidworks-api/document/features-manager/traverse-feature-nodes/index",id:"codestack/solidworks-api/document/features-manager/traverse-feature-nodes/index",title:"\u4f7f\u7528SOLIDWORKS API\u904d\u5386\u7279\u5f81\u7ba1\u7406\u5668\u8282\u70b9",description:"\u7279\u5f81\u7ba1\u7406\u5668\u6811{ width=150 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/features-manager/traverse-feature-nodes/index.md",sourceDirName:"codestack/solidworks-api/document/features-manager/traverse-feature-nodes",slug:"/codestack/solidworks-api/document/features-manager/traverse-feature-nodes/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/features-manager/traverse-feature-nodes/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/features-manager/traverse-feature-nodes/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u904d\u5386\u7279\u5f81\u7ba1\u7406\u5668\u8282\u70b9",image:"feature-manager-tree.png",labels:["\u904d\u5386","\u7279\u5f81","\u8282\u70b9"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5207\u6362\u663e\u793a\u6ce8\u91ca\u6307\u793a\u5668\u9009\u9879",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/features-manager/toggle-show-comment-indicator/"},next:{title:"\u53cd\u5411\u904d\u5386 SOLIDWORKS \u7279\u5f81\u7ba1\u7406\u5668\u6811",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/features-manager/traverse-reverse/"}},d={},l=[],c={toc:l},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u7279\u5f81\u7ba1\u7406\u5668\u6811",src:r(90077).Z,width:"258",height:"574"}),"{ width=150 }"),(0,o.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u904d\u5386\u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u7684\u8282\u70b9\u3002\u8282\u70b9\u6309\u7167\u5b83\u4eec\u5728\u6811\u4e2d\u5448\u73b0\u7684\u987a\u5e8f\u8fdb\u884c\u904d\u5386\uff0c\u5e76\u63d0\u53d6\u51fa\u786e\u5207\u7684\u6587\u672c\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.itreecontrolitem.html"},"SOLIDWORKS API\u63a5\u53e3ITreeControlItem"),"\u4ee3\u8868\u8282\u70b9\u5143\u7d20\uff0c\u5e76\u5141\u8bb8\u8fdb\u884c\u81ea\u52a8\u5316\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\u83b7\u53d6\u786e\u5207\u7684\u7279\u5f81\u5c42\u6b21\u7ed3\u6784\u548c\u987a\u5e8f\uff0c\u6216\u8005\u83b7\u53d6\u7cfb\u7edf\u7279\u5f81\u7684\u8282\u70b9\uff08\u5982\u5386\u53f2\u8bb0\u5f55\u3001\u8bbe\u8ba1\u65e5\u5fd7\u7b49\uff09\uff0c\u5219\u6b64\u5b8f\u53ef\u80fd\u5f88\u6709\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const OFFSET_SYMBOL = " "\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n\n    If Not swModel Is Nothing Then\n    \n        Dim swFeatMgr As SldWorks.FeatureManager\n        \n        Set swFeatMgr = swModel.FeatureManager\n        \n        Dim swRootFeatNode As SldWorks.TreeControlItem\n        \n        Set swRootFeatNode = swFeatMgr.GetFeatureTreeRootItem2(swFeatMgrPane_e.swFeatMgrPaneBottom)\n        \n        If Not swRootFeatNode Is Nothing Then\n            TraverseFeatureNode swRootFeatNode, ""\n        End If\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\nEnd Sub\n\nSub TraverseFeatureNode(featNode As SldWorks.TreeControlItem, offset As String)\n    \n    Debug.Print offset & featNode.Text\n    \n    Dim swChildFeatNode As SldWorks.TreeControlItem\n    \n    Set swChildFeatNode = featNode.GetFirstChild()\n    \n    While Not swChildFeatNode Is Nothing\n        TraverseFeatureNode swChildFeatNode, offset + OFFSET_SYMBOL\n        Set swChildFeatNode = swChildFeatNode.GetNext\n    Wend\n    \nEnd Sub\n')))}p.isMDXComponent=!0},90077:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/feature-manager-tree-c3e240244a9ff548eb933bffc65105b1.png"}}]);