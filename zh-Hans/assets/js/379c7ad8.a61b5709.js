"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[6938],{3905:(e,n,t)=>{t.d(n,{Zo:()=>w,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},w=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,w=a(e,["components","mdxType","originalType","parentName"]),l=d(t),u=i,m=l["".concat(c,".").concat(u)]||l[u]||p[u]||s;return t?r.createElement(m,o(o({ref:n},w),{},{components:t})):r.createElement(m,o({ref:n},w))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[l]="string"==typeof e?e:i,o[1]=a;for(var d=2;d<s;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},56429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const s={caption:"\u91cd\u547d\u540d\u56fe\u7eb8\u89c6\u56fe",title:"\u5b8f\u4ee5\u56fe\u7eb8\u540d\u79f0\u91cd\u547d\u540d\u6240\u6709\u56fe\u7eb8\u89c6\u56fe"},o=void 0,a={unversionedId:"codestack/solidworks-api/document/drawing/rename-views-after-sheets/index",id:"codestack/solidworks-api/document/drawing/rename-views-after-sheets/index",title:"\u5b8f\u4ee5\u56fe\u7eb8\u540d\u79f0\u91cd\u547d\u540d\u6240\u6709\u56fe\u7eb8\u89c6\u56fe",description:"VBA\u5b8f\u53ef\u5c06\u6d3b\u52a8SOLIDWORKS\u56fe\u7eb8\u6587\u6863\u4e2d\u7684\u6240\u6709\u56fe\u7eb8\u89c6\u56fe\u91cd\u547d\u540d\u4e3a\u6240\u5728\u56fe\u7eb8\u7684\u540d\u79f0\u540e\u8ddf\u7d22\u5f15\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/drawing/rename-views-after-sheets/index.md",sourceDirName:"codestack/solidworks-api/document/drawing/rename-views-after-sheets",slug:"/codestack/solidworks-api/document/drawing/rename-views-after-sheets/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/rename-views-after-sheets/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/drawing/rename-views-after-sheets/index.md",tags:[],version:"current",frontMatter:{caption:"\u91cd\u547d\u540d\u56fe\u7eb8\u89c6\u56fe",title:"\u5b8f\u4ee5\u56fe\u7eb8\u540d\u79f0\u91cd\u547d\u540d\u6240\u6709\u56fe\u7eb8\u89c6\u56fe"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u5c5e\u6027\u503c\u91cd\u547d\u540dSOLIDWORKS\u56fe\u7eb8\u5de5\u4f5c\u8868",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/rename-sheets-custom-properties-values/"},next:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/replace-sheet-format/"}},c={},d=[{value:"VBA\u5b8f\u53ef\u5c06\u6d3b\u52a8SOLIDWORKS\u56fe\u7eb8\u6587\u6863\u4e2d\u7684\u6240\u6709\u56fe\u7eb8\u89c6\u56fe\u91cd\u547d\u540d\u4e3a\u6240\u5728\u56fe\u7eb8\u7684\u540d\u79f0\u540e\u8ddf\u7d22\u5f15\u3002",id:"vba\u5b8f\u53ef\u5c06\u6d3b\u52a8solidworks\u56fe\u7eb8\u6587\u6863\u4e2d\u7684\u6240\u6709\u56fe\u7eb8\u89c6\u56fe\u91cd\u547d\u540d\u4e3a\u6240\u5728\u56fe\u7eb8\u7684\u540d\u79f0\u540e\u8ddf\u7d22\u5f15",level:2}],w={toc:d},l="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(l,(0,r.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"vba\u5b8f\u53ef\u5c06\u6d3b\u52a8solidworks\u56fe\u7eb8\u6587\u6863\u4e2d\u7684\u6240\u6709\u56fe\u7eb8\u89c6\u56fe\u91cd\u547d\u540d\u4e3a\u6240\u5728\u56fe\u7eb8\u7684\u540d\u79f0\u540e\u8ddf\u7d22\u5f15"},"VBA\u5b8f\u53ef\u5c06\u6d3b\u52a8SOLIDWORKS\u56fe\u7eb8\u6587\u6863\u4e2d\u7684\u6240\u6709\u56fe\u7eb8\u89c6\u56fe\u91cd\u547d\u540d\u4e3a\u6240\u5728\u56fe\u7eb8\u7684\u540d\u79f0\u540e\u8ddf\u7d22\u5f15\u3002"),(0,i.kt)("p",null,"\u6b64VBA\u5b8f\u5141\u8bb8\u5c06\u6d3b\u52a8SOLIDWORKS\u56fe\u7eb8\u6587\u6863\u4e2d\u6240\u6709\u56fe\u7eb8\u89c6\u56fe\u91cd\u547d\u540d\u4e3a\u56fe\u7eb8\u540d\u79f0\u540e\u8ddf\u7d22\u5f15\u3002"),(0,i.kt)("p",null,"\u8be6\u7ec6\u548c\u5256\u89c6\u56fe\u5c06\u88ab\u6392\u9664\u5728\u91cd\u547d\u540d\u8fc7\u7a0b\u4e4b\u5916\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        If swModel.GetType() = swDocumentTypes_e.swDocDRAWING Then\n            \n            Dim swDraw As SldWorks.DrawingDoc\n            \n            Set swDraw = swModel\n            \n            Dim vSheets As Variant\n            vSheets = swDraw.GetViews\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vSheets)\n                \n                Dim vViews As Variant\n                vViews = vSheets(i)\n                \n                Dim swSheetView As SldWorks.View\n                \n                Set swSheetView = vViews(0)\n                \n                Dim j As Integer\n                \n                Dim nextViewIndex As Integer\n                nextViewIndex = 0\n                \n                For j = 1 To UBound(vViews)\n                    \n                    Dim swView As SldWorks.View\n                    Set swView = vViews(j)\n                    \n                    Dim viewType As Integer\n                    viewType = swView.Type\n                    \n                    If viewType <> swDrawingViewTypes_e.swDrawingDetailView And viewType <> swDrawingViewTypes_e.swDrawingSectionView Then\n                        \n                        nextViewIndex = nextViewIndex + 1\n                        \n                        Dim newViewName As String\n                        newViewName = swSheetView.Name & "(" & nextViewIndex & ")"\n                        \n                        If False = swView.SetName2(newViewName) Then\n                            Err.Raise vbError, "", "Failed to rename " & swView.Name & " to " & ""\n                        End If\n                    End If\n                    \n                Next\n                \n            Next\n            \n        Else\n            Err.Raise vbError, "", "Active document is not a drawing"\n        End If\n    Else\n        Err.Raise vbError, "", "Please open the drawing"\n    End If\n    \nEnd Sub\n')))}p.isMDXComponent=!0}}]);