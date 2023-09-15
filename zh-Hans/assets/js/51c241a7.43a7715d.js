"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[86412],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>w});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=o.createContext({}),l=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(a.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(t),m=s,w=p["".concat(a,".").concat(m)]||p[m]||u[m]||r;return t?o.createElement(w,i(i({ref:n},c),{},{components:t})):o.createElement(w,i({ref:n},c))}));function w(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=m;var d={};for(var a in n)hasOwnProperty.call(n,a)&&(d[a]=n[a]);d.originalType=e,d[p]="string"==typeof e?e:s,i[1]=d;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var o=t(87462),s=(t(67294),t(3905));const r={title:"\u4f7f\u7528SOLIDWORKS API\u5411\u5f2f\u66f2\u7ebf\u6dfb\u52a0\u5c3a\u5bf8",caption:"\u5411\u5f2f\u66f2\u7ebf\u6dfb\u52a0\u5c3a\u5bf8"},i=void 0,d={unversionedId:"codestack/solidworks-api/document/dimensions/add-bend-lines/index",id:"codestack/solidworks-api/document/dimensions/add-bend-lines/index",title:"\u4f7f\u7528SOLIDWORKS API\u5411\u5f2f\u66f2\u7ebf\u6dfb\u52a0\u5c3a\u5bf8",description:"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u5411\u94a3\u91d1\u5c55\u5f00\u56fe\u7684\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u5f2f\u66f2\u7ebf\u6dfb\u52a0\u5c3a\u5bf8\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/dimensions/add-bend-lines/index.md",sourceDirName:"codestack/solidworks-api/document/dimensions/add-bend-lines",slug:"/codestack/solidworks-api/document/dimensions/add-bend-lines/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/dimensions/add-bend-lines/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/dimensions/add-bend-lines/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u5411\u5f2f\u66f2\u7ebf\u6dfb\u52a0\u5c3a\u5bf8",caption:"\u5411\u5f2f\u66f2\u7ebf\u6dfb\u52a0\u5c3a\u5bf8"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5904\u7406\u5c3a\u5bf8",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/dimensions/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u4e3a\u5c3a\u5bf8\u6dfb\u52a0\u65b9\u7a0b",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/dimensions/add-equation/"}},a={},l=[],c={toc:l},p="wrapper";function u(e){let{components:n,...r}=e;return(0,s.kt)(p,(0,o.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u5411\u94a3\u91d1\u5c55\u5f00\u56fe\u7684\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u5f2f\u66f2\u7ebf\u6dfb\u52a0\u5c3a\u5bf8\u3002\nimage: sw-bend-lines.png\nlabels: ","[\u5f2f\u66f2\u7ebf, \u5c3a\u5bf8, \u793a\u4f8b, solidworks api]","\nredirect-from:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"/2018/03/solidworks-api-dimensions-dimension-bend-lines.html")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u5411\u94a3\u91d1\u5c55\u5f00\u56fe\u7684\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u5f2f\u66f2\u7ebf\u6dfb\u52a0\u5c3a\u5bf8\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u94a3\u91d1\u5c55\u5f00\u56fe\u4e2d\u5f2f\u66f2\u7ebf\u4e4b\u95f4\u7684\u5c3a\u5bf8",src:t(45084).Z,width:"400",height:"151"}),"{ width=400 height=150 }"),(0,s.kt)("p",null,"\u9700\u8981\u4f7f\u7528\u5177\u6709\u5206\u914d\u89c6\u56fe\u7684\u9009\u62e9\u6570\u636e\u5bf9\u8c61\u9009\u62e9\u8349\u56fe\u7ebf\uff0c\u5426\u5219\u5c3a\u5bf8\u521b\u5efa\u5c06\u5931\u8d25\u3002"),(0,s.kt)("p",null,"\u4f7f\u7528",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldoc~adddimension2.html"},"IModelDoc2::AddDimension2")," SOLIDWORKS API\u6765\u6dfb\u52a0\u5c3a\u5bf8\u3002\u5c3a\u5bf8\u4f4d\u4e8e(0, 0, 0)\u5750\u6807\u5904\u3002\u8bf7\u53c2\u8003",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/"},"\u5c3a\u5bf8\u53ef\u89c1\u5b9e\u4f53"),"\u793a\u4f8b\u4e2d\u7684\u4ee3\u7801\u7247\u6bb5\u4ee5\u8ba1\u7b97\u6700\u4f73\u5c3a\u5bf8\u4f4d\u7f6e\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\nDim swView As SldWorks.View\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swSelMgr = swModel.SelectionManager\n        \n        Set swView = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swView Is Nothing Then\n        \n            Dim vBendLines As Variant\n            vBendLines = swView.GetBendLines\n            \n            If UBound(vBendLines) >= 1 Then\n            \n                Dim swSelData As SldWorks.SelectData\n                Set swSelData = swSelMgr.CreateSelectData\n                swSelData.View = swView \'\u5fc5\u987b\u8bbe\u7f6e\n                \n                swModel.ClearSelection2 True\n                \n                Dim i As Integer\n                \n                For i = 0 To 1\n                    \n                    Dim swSkSeg As SldWorks.SketchSegment\n                                        \n                    Set swSkSeg = vBendLines(i)\n                    \n                    swSkSeg.Select4 True, swSelData\n                    \n                Next\n                \n                swModel.AddDimension2 0, 0, 0\n                \n            Else\n                MsgBox "\u7ed8\u56fe\u89c6\u56fe\u4e2d\u5e94\u81f3\u5c11\u67092\u6761\u5f2f\u66f2\u7ebf"\n            End If\n            \n        Else\n            MsgBox "\u8bf7\u9009\u62e9\u5e26\u6709\u5c55\u5f00\u56fe\u7684\u7ed8\u56fe\u89c6\u56fe"\n        End If\n    \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u7ed8\u56fe"\n    End If\nEnd Sub\n\n\n')))}u.isMDXComponent=!0},45084:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/sw-bend-lines-8d02f0f639f0a08e16b8da4cba5fc968.png"}}]);