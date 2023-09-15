"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[66221],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>w});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=o.createContext({}),a=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=a(e.components);return o.createElement(i.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=a(t),u=s,w=d["".concat(i,".").concat(u)]||d[u]||m[u]||r;return t?o.createElement(w,l(l({ref:n},p),{},{components:t})):o.createElement(w,l({ref:n},p))}));function w(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[d]="string"==typeof e?e:s,l[1]=c;for(var a=2;a<r;a++)l[a]=t[a];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=t(87462),s=(t(67294),t(3905));const r={},l=void 0,c={unversionedId:"codestack/solidworks-api/document/assembly/components/count-all-selected-components/index",id:"codestack/solidworks-api/document/assembly/components/count-all-selected-components/index",title:"index",description:"\u8fd9\u4e2a\u5b8f\u4f7f\u7528SOLIDWORKS API\u6765\u8ba1\u7b97\u5728\u88c5\u914d\u4f53\u4e2d\u9009\u62e9\u7684\u6240\u6709\u552f\u4e00\u7ec4\u4ef6\u7684\u6570\u91cf\u3002\u7ec4\u4ef6\u53ef\u4ee5\u5728\u7279\u5f81\u7ba1\u7406\u6811\u6216\u56fe\u5f62\u533a\u57df\u4e2d\u9009\u62e9\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/assembly/components/count-all-selected-components/index.md",sourceDirName:"codestack/solidworks-api/document/assembly/components/count-all-selected-components",slug:"/codestack/solidworks-api/document/assembly/components/count-all-selected-components/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/count-all-selected-components/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/assembly/components/count-all-selected-components/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5c06SOLIDWORKS\u7ec4\u4ef6\u7684\u8def\u5f84\u590d\u5236\u5230\u526a\u8d34\u677f\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/copy-path/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u7ec4\u4ef6\u4f4d\u7f6e\u5bfc\u51fa\u4e3aCSV\u7684VBA\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/export-positions/"}},i={},a=[],p={toc:a},d="wrapper";function m(e){let{components:n,...r}=e;return(0,s.kt)(d,(0,o.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u8fd9\u4e2a\u5b8f\u4f7f\u7528SOLIDWORKS API\u6765\u8ba1\u7b97\u5728\u88c5\u914d\u4f53\u4e2d\u9009\u62e9\u7684\u6240\u6709\u552f\u4e00\u7ec4\u4ef6\u7684\u6570\u91cf\u3002\u7ec4\u4ef6\u53ef\u4ee5\u5728\u7279\u5f81\u7ba1\u7406\u6811\u6216\u56fe\u5f62\u533a\u57df\u4e2d\u9009\u62e9\u3002"),(0,s.kt)("p",null,"\u5982\u679c\u53ea\u9009\u62e9\u4e86\u7ec4\u4ef6\u7684\u5b9e\u4f53\uff08\u4f8b\u5982\u9762\u6216\u8fb9\uff09\uff0c\u5b8f\u4e5f\u4f1a\u8ba1\u7b97\u7ec4\u4ef6\u7684\u6570\u91cf\uff0c\u4f7f\u7528\u7684\u662f",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectionMgr.html"},"ISelectionMgr")," SOLIDWORKS API\u63a5\u53e3\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u5728\u72b6\u6001\u680f\u4e2d\u663e\u793a\u6240\u9009\u7ec4\u4ef6\u7684\u6570\u91cf",src:t(10817).Z,width:"314",height:"320"}),"{ width=320 }"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swAssy As SldWorks.AssemblyDoc\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n            \n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swAssy.SelectionManager\n        \n        Dim swCompsColl As Collection\n        Set swCompsColl = New Collection\n        \n        Dim i As Integer\n        \n        For i = 0 To swSelMgr.GetSelectedObjectCount2(-1)\n            \n            Dim swComp As SldWorks.Component2\n            Set swComp = swSelMgr.GetSelectedObjectsComponent2(i)\n            \n            If Not swComp Is Nothing Then\n                If Not Contains(swCompsColl, swComp) Then \'\u53ea\u83b7\u53d6\u552f\u4e00\u7684\u7ec4\u4ef6\n                    swCompsColl.Add swComp\n                End If\n            End If\n            \n        Next\n        \n        Dim swFrame As SldWorks.Frame\n        Set swFrame = swApp.Frame\n        swFrame.SetStatusBarText "\u5df2\u9009\u62e9 " & swCompsColl.Count() & " \u4e2a\u7ec4\u4ef6"\n    \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u88c5\u914d\u4f53"\n    End If\n    \nEnd Sub\n\nFunction Contains(coll As Collection, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To coll.Count\n        If coll.item(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\n')))}m.isMDXComponent=!0},10817:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/status-bar-selected-comps-361f4ce8bf20f1eaa6791dd0aef89bd2.png"}}]);