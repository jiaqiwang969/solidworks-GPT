"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[9334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>M});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=s.createContext({}),c=function(e){var t=s.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},A=function(e){var t=c(e.components);return s.createElement(m.Provider,{value:t},e.children)},k="mdxType",S={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},a=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,A=r(e,["components","mdxType","originalType","parentName"]),k=c(n),a=i,M=k["".concat(m,".").concat(a)]||k[a]||S[a]||o;return n?s.createElement(M,l(l({ref:t},A),{},{components:n})):s.createElement(M,l({ref:t},A))}));function M(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=a;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r[k]="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}a.displayName="MDXCreateElement"},42371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>S,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(87462),i=(n(67294),n(3905));const o={title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u9009\u5b9a\u7684\u8349\u56fe\u6bb5\u4fe1\u606f",image:"selected-sketch-segments.png",labels:["\u8349\u56fe\u6bb5","\u9009\u5b9a"]},l=void 0,r={unversionedId:"codestack/solidworks-api/document/sketch/get-selected-sketch-segments-info/index",id:"codestack/solidworks-api/document/sketch/get-selected-sketch-segments-info/index",title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u9009\u5b9a\u7684\u8349\u56fe\u6bb5\u4fe1\u606f",description:"\u5728\u6d3b\u52a8\u8349\u56fe\u4e2d\u9009\u62e9\u7684\u8349\u56fe\u6bb5{ width=450 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/sketch/get-selected-sketch-segments-info/index.md",sourceDirName:"codestack/solidworks-api/document/sketch/get-selected-sketch-segments-info",slug:"/codestack/solidworks-api/document/sketch/get-selected-sketch-segments-info/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/sketch/get-selected-sketch-segments-info/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/sketch/get-selected-sketch-segments-info/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u9009\u5b9a\u7684\u8349\u56fe\u6bb5\u4fe1\u606f",image:"selected-sketch-segments.png",labels:["\u8349\u56fe\u6bb5","\u9009\u5b9a"]},sidebar:"tutorialSidebar",previous:{title:"\u5c06\u8349\u56fe\u70b9\u5750\u6807\u5bfc\u51fa\u4e3aCSV\u6587\u4ef6\u7684VBA\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/sketch/export-point-coordinates/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u6240\u9009\u8349\u56fe\u4e2d\u7ebf\u6bb5\u7684\u603b\u957f\u5ea6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/sketch/get-sketch-segments-total-length/"}},m={},c=[],A={toc:c},k="wrapper";function S(e){let{components:t,...o}=e;return(0,i.kt)(k,(0,s.Z)({},A,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u5728\u6d3b\u52a8\u8349\u56fe\u4e2d\u9009\u62e9\u7684\u8349\u56fe\u6bb5",src:n(93127).Z,width:"647",height:"498"}),"{ width=450 }"),(0,i.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u4ece\u9009\u5b9a\u7684\u8349\u56fe\u6bb5\u4e2d\u63d0\u53d6\u7279\u5b9a\u7684\u8349\u56fe\u6bb5\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u5b8f\u5c06\u904d\u5386\u6240\u6709\u9009\u5b9a\u7684\u5bf9\u8c61\u5e76\u8fc7\u6ee4\u8349\u56fe\u6bb5\u3002\u5b8f\u5c06\u8bc6\u522b\u6bb5\u7684\u7c7b\u578b\u5e76\u5c06\u6307\u9488\u8f6c\u6362\u4e3a\u7279\u5b9a\u7684\u5b50\u7c7b\u578b\uff08\u4f8b\u5982\u7ebf\u6bb5\u3001\u6837\u6761\u3001\u5f27\u7ebf\u3001\u629b\u7269\u7ebf\u3001\u6587\u672c\u7b49\uff09\u3002"),(0,i.kt)("p",null,"\u4fe1\u606f\u5c06\u8f93\u51fa\u5230VBA\u7f16\u8f91\u5668\u7684\u5373\u65f6\u7a97\u53e3\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u8349\u56fe\u6bb5\u7684\u7279\u5b9a\u4fe1\u606f\u6253\u5370\u5230VBA\u7f16\u8f91\u5668\u7684\u5373\u65f6\u7a97\u53e3",src:n(37183).Z,width:"408",height:"287"}),"{ width=350 }"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swSelMgr As SldWorks.SelectionMgr\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim i As Integer\n        \n        For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n            If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelSKETCHSEGS Or _\n                swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelEXTSKETCHSEGS Then\n                \n                Dim swSkSeg As SldWorks.SketchSegment\n                Set swSkSeg = swSelMgr.GetSelectedObject6(i, -1)\n                \n                Debug.Print "\u7d22\u5f15\u4e3a " & i & " \u7684\u8349\u56fe\u6bb5"\n                \n                PrintSketchSegmentInfo swSkSeg\n                \n                Debug.Print ""\n                \n            End If\n        Next\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n\nFunction PrintSketchSegmentInfo(skSeg As SldWorks.SketchSegment)\n\n    Select Case skSeg.GetType()\n        Case swSketchSegments_e.swSketchARC\n            Dim swSkArc As SldWorks.SketchArc\n            Set swSkArc = skSeg\n            Debug.Print "\u5f27\u7ebf"\n            Debug.Print "\u534a\u5f84: " & swSkArc.GetRadius()\n        \n        Case swSketchSegments_e.swSketchELLIPSE\n            Dim swSkEllipse As SldWorks.SketchEllipse\n            Set swSkEllipse = skSeg\n            Dim swMajPoint As SldWorks.SketchPoint\n            Set swMajPoint = swSkEllipse.GetMajorPoint2()\n            Debug.Print "\u692d\u5706"\n            Debug.Print "\u4e3b\u70b9: " & swMajPoint.X & "," & swMajPoint.Y & "," & swMajPoint.Z\n        \n        Case swSketchSegments_e.swSketchLINE\n            Dim swSkLine As SldWorks.SketchLine\n            Set swSkLine = skSeg\n            Debug.Print "\u7ebf\u6bb5"\n            Debug.Print "\u89d2\u5ea6: " & swSkLine.Angle\n            \n        Case swSketchSegments_e.swSketchPARABOLA\n            Dim swSkParabola As SldWorks.SketchParabola\n            Set swSkParabola = skSeg\n            Dim swApexPoint As SldWorks.SketchPoint\n            Set swApexPoint = swSkParabola.GetApexPoint2\n            Debug.Print "\u629b\u7269\u7ebf"\n            Debug.Print "\u9876\u70b9: " & swApexPoint.X & "," & swApexPoint.Y & "," & swApexPoint.Z\n        \n        Case swSketchSegments_e.swSketchSPLINE\n            Dim swSkSpline As SldWorks.SketchSpline\n            Set swSkSpline = skSeg\n            Dim vSplinePts As Variant\n            vSplinePts = swSkSpline.GetPoints2()\n            Debug.Print "\u6837\u6761\u66f2\u7ebf"\n            Debug.Print "\u70b9\u6570: " & UBound(vSplinePts) + 1\n        \n        Case swSketchSegments_e.swSketchTEXT\n            Dim swSkText As SldWorks.SketchText\n            Set swSkText = skSeg\n            Debug.Print "\u6587\u672c"\n            Debug.Print swSkText.Text\n        Case Else\n            Err.Raise vbError, "", "\u4e0d\u652f\u6301\u7684\u8349\u56fe\u6bb5"\n    End Select\n    \nEnd Function\n')))}S.isMDXComponent=!0},37183:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,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"},93127:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/selected-sketch-segments-3465e71cc3623f50239d7c56327cf71b.png"}}]);