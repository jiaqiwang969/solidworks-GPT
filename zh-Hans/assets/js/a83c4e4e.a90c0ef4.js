"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[79191],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",w={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,b=p["".concat(l,".").concat(u)]||p[u]||w[u]||i;return t?r.createElement(b,a(a({ref:n},c),{},{components:t})):r.createElement(b,a({ref:n},c))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},76985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>w,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const i={title:"\u6e05\u9664\u4fee\u8ba2\u8868\u5e76\u4f7f\u7528SOLIDWORKS API\u6dfb\u52a0\u65b0\u7684\u4fee\u8ba2",caption:"\u6e05\u9664\u4fee\u8ba2\u8868\u5e76\u6dfb\u52a0\u65b0\u7684\u4fee\u8ba2"},a=void 0,s={unversionedId:"codestack/solidworks-api/document/drawing/clear-revision-table-new-revision/index",id:"codestack/solidworks-api/document/drawing/clear-revision-table-new-revision/index",title:"\u6e05\u9664\u4fee\u8ba2\u8868\u5e76\u4f7f\u7528SOLIDWORKS API\u6dfb\u52a0\u65b0\u7684\u4fee\u8ba2",description:"\u8be5\u793a\u4f8b\u4f7f\u7528SOLIDWORKS API\u627e\u5230\u4fee\u8ba2\u8868\u5e76\u5220\u9664\u6240\u6709\u4fee\u8ba2\uff0c\u7136\u540e\u6dfb\u52a0\u5e26\u6709\u81ea\u5b9a\u4e49\u6570\u636e\u7684\u65b0\u884c\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/drawing/clear-revision-table-new-revision/index.md",sourceDirName:"codestack/solidworks-api/document/drawing/clear-revision-table-new-revision",slug:"/codestack/solidworks-api/document/drawing/clear-revision-table-new-revision/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/clear-revision-table-new-revision/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/drawing/clear-revision-table-new-revision/index.md",tags:[],version:"current",frontMatter:{title:"\u6e05\u9664\u4fee\u8ba2\u8868\u5e76\u4f7f\u7528SOLIDWORKS API\u6dfb\u52a0\u65b0\u7684\u4fee\u8ba2",caption:"\u6e05\u9664\u4fee\u8ba2\u8868\u5e76\u6dfb\u52a0\u65b0\u7684\u4fee\u8ba2"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u4e2d\u66f4\u6539\u6240\u9009\u5bf9\u8c61\u7684\u56fe\u5c42\u7684SOLIDWORKS\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/change-layer-selected-drawing-objects/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u6587\u4ef6\u8def\u5f84\u590d\u5236\u5230\u88c5\u914d\u7ec4\u4ef6\u7684\u6240\u6709\u56fe\u7eb8\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/copy-drawing-paths/"}},l={},d=[],c={toc:d},p="wrapper";function w(e){let{components:n,...i}=e;return(0,o.kt)(p,(0,r.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8be5\u793a\u4f8b\u4f7f\u7528SOLIDWORKS API\u627e\u5230\u4fee\u8ba2\u8868\u5e76\u5220\u9664\u6240\u6709\u4fee\u8ba2\uff0c\u7136\u540e\u6dfb\u52a0\u5e26\u6709\u81ea\u5b9a\u4e49\u6570\u636e\u7684\u65b0\u884c\u3002\nimage: sw-revision-table.png\nlabels: ","[\u6dfb\u52a0\u4fee\u8ba2, \u6e05\u9664\u4fee\u8ba2, \u56fe\u7eb8.\u4fee\u8ba2\u8868, \u793a\u4f8b, solidworks api]","\nredirect-from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/2018/03/solidworks-api-drawing-clear-rev-table-add-new-row.html")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u8be5\u793a\u4f8b\u4f7f\u7528SOLIDWORKS API\u627e\u5230\u4fee\u8ba2\u8868\u5e76\u5220\u9664\u6240\u6709\u4fee\u8ba2\uff0c\u7136\u540e\u6dfb\u52a0\u5e26\u6709\u81ea\u5b9a\u4e49\u6570\u636e\u7684\u65b0\u884c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u4fee\u8ba2\u8868",src:t(34617).Z,width:"640",height:"178"}),"{ width=640 }"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.irevisiontableannotation.html"},"IRevisionTableAnnotation")," SOLIDWORKS API\u63a5\u53e3\u7528\u4e8e\u7ba1\u7406\u6b64\u7c7b\u578b\u8868\u7684\u7279\u5b9a\u529f\u80fd\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swDraw As SldWorks.DrawingDoc\nDim swSheet As SldWorks.Sheet\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n    \n        Set swSheet = swDraw.GetCurrentSheet\n        \n        Dim swRevTable As SldWorks.RevisionTableAnnotation\n\n        Set swRevTable = swSheet.RevisionTable\n        \n        If Not swRevTable Is Nothing Then\n            \n            ClearRevisionTable swRevTable\n            \n            AddRevision swRevTable, "001", Array("\u6837\u672c\u533a\u57df", "", "\u63cf\u8ff0", "", "\u7ba1\u7406\u5458")\n            \n        Else\n            MsgBox "\u56fe\u7eb8\u4e2d\u6ca1\u6709\u4fee\u8ba2\u8868"\n        End If\n    \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u56fe\u7eb8"\n    End If\n    \nEnd Sub\n\nSub ClearRevisionTable(swRevTable As SldWorks.RevisionTableAnnotation)\n    \n    Dim swTableAnn As SldWorks.TableAnnotation\n    \n    Set swTableAnn = swRevTable\n            \n    Dim i As Integer\n    \n    For i = swTableAnn.RowCount - 1 To 0 Step -1\n        \n        Dim revId As Long\n        revId = swRevTable.GetIdForRowNumber(i)\n        \n        If revId <> 0 Then\n            swRevTable.DeleteRevision revId, True\n        End If\n        \n    Next\n    \nEnd Sub\n\nSub AddRevision(swRevTable As SldWorks.RevisionTableAnnotation, revName As String, rowData As Variant)\n    \n    Dim i As Integer\n    Dim swTableAnn As SldWorks.TableAnnotation\n    \n    Set swTableAnn = swRevTable\n    \n    swRevTable.AddRevision revName\n            \n    For i = 0 To UBound(rowData)\n                \n        If rowData(i) <> "" Then\n            \n            swTableAnn.Text(swTableAnn.RowCount - 1, i) = rowData(i)\n        \n        End If\n                \n    Next\n    \nEnd Sub\n\n')))}w.isMDXComponent=!0},34617:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/sw-revision-table-f18733675d6f94a0e86b95afda25ee86.png"}}]);