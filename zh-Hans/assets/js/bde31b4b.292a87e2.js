"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[54748],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||s;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const s={title:"Traverse feature manager nodes using SOLIDWORKS API",caption:"Traverse Feature Nodes"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-feature-nodes/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-feature-nodes/index",title:"Traverse feature manager nodes using SOLIDWORKS API",description:"Example demonstrates how to traverse nodes in the Feature Manager Tree using SOLIDWORKS API",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-feature-nodes/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-feature-nodes",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-feature-nodes/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-feature-nodes/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-feature-nodes/index.md",tags:[],version:"current",frontMatter:{title:"Traverse feature manager nodes using SOLIDWORKS API",caption:"Traverse Feature Nodes"},sidebar:"tutorialSidebar",previous:{title:"Toggle Show Comment Indicator option using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/toggle-show-comment-indicator/"},next:{title:"\u5728 SOLIDWORKS \u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u4ee5\u53cd\u5411\u987a\u5e8f\u904d\u5386",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-reverse/"}},d={},c=[{value:"labels: traverse, feature, node",id:"labels-traverse-feature-node",level:2}],l={toc:c},u="wrapper";function p(e){let{components:t,...s}=e;return(0,o.kt)(u,(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Example demonstrates how to traverse nodes in the Feature Manager Tree using SOLIDWORKS API\nimage: feature-manager-tree.png"),(0,o.kt)("h2",{id:"labels-traverse-feature-node"},"labels: ","[traverse, feature, node]"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature Manager Tree",src:r(30495).Z,width:"258",height:"574"}),"{ width=150 }"),(0,o.kt)("p",null,"This example demonstrates how to traverse nodes in the Feature Manager Tree using SOLIDWORKS API. Nodes traversed in the exact order they are rendered in the tree and the exact text is extracted."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.itreecontrolitem.html"},"ITreeControlItem")," SOLIDWORKS API interface represents the node element and allows its automation."),(0,o.kt)("p",null,"This macro can be useful if it is required to get the exact features hierarchy and order or get the nodes of the system features (like history, design journal etc.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const OFFSET_SYMBOL = " "\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n\n    If Not swModel Is Nothing Then\n    \n        Dim swFeatMgr As SldWorks.FeatureManager\n        \n        Set swFeatMgr = swModel.FeatureManager\n        \n        Dim swRootFeatNode As SldWorks.TreeControlItem\n        \n        Set swRootFeatNode = swFeatMgr.GetFeatureTreeRootItem2(swFeatMgrPane_e.swFeatMgrPaneBottom)\n        \n        If Not swRootFeatNode Is Nothing Then\n            TraverseFeatureNode swRootFeatNode, ""\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\nEnd Sub\n\nSub TraverseFeatureNode(featNode As SldWorks.TreeControlItem, offset As String)\n    \n    Debug.Print offset & featNode.Text\n    \n    Dim swChildFeatNode As SldWorks.TreeControlItem\n    \n    Set swChildFeatNode = featNode.GetFirstChild()\n    \n    While Not swChildFeatNode Is Nothing\n        TraverseFeatureNode swChildFeatNode, offset + OFFSET_SYMBOL\n        Set swChildFeatNode = swChildFeatNode.GetNext\n    Wend\n    \nEnd Sub\n')))}p.isMDXComponent=!0},30495:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/feature-manager-tree-c3e240244a9ff548eb933bffc65105b1.png"}}]);