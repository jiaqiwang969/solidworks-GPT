"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[15405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||s;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={layout:"sw-tool",image:"renamed-cut-list-bodies.png",group:"\u5207\u5272\u6e05\u5355"},a=void 0,i={unversionedId:"codestack/solidworks-api/document/cut-lists/rename-cut-list-bodies/index",id:"codestack/solidworks-api/document/cut-lists/rename-cut-list-bodies/index",title:"index",description:"\u5728\u7279\u5f81\u7ba1\u7406\u5668\u4e2d\u91cd\u547d\u540d\u7684\u94a3\u91d1\u548c\u710a\u63a5\u4f53",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/cut-lists/rename-cut-list-bodies/index.md",sourceDirName:"codestack/solidworks-api/document/cut-lists/rename-cut-list-bodies",slug:"/codestack/solidworks-api/document/cut-lists/rename-cut-list-bodies/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/cut-lists/rename-cut-list-bodies/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/cut-lists/rename-cut-list-bodies/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",image:"renamed-cut-list-bodies.png",group:"\u5207\u5272\u6e05\u5355"},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS\u5b8f\u4ee5\u4ece\u5207\u5272\u6e05\u5355\u4e2d\u6392\u9664\u6240\u9009\u5b9e\u4f53",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/cut-lists/exclude-selected-bodies/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u6839\u636e\u81ea\u5b9a\u4e49\u5c5e\u6027\u91cd\u547d\u540d\u5207\u5272\u5217\u8868\u7279\u5f81",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/cut-lists/rename-cut-list-items/"}},c={},l=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...s}=e;return(0,o.kt)(u,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5728\u7279\u5f81\u7ba1\u7406\u5668\u4e2d\u91cd\u547d\u540d\u7684\u94a3\u91d1\u548c\u710a\u63a5\u4f53",src:n(61168).Z,width:"359",height:"306"})),(0,o.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u5141\u8bb8\u6839\u636e\u9884\u5b9a\u4e49\u7684\u547d\u540d\u6a21\u677f\u91cd\u547d\u540d\u5c5e\u4e8e\u5207\u5272\u6e05\u5355\u6587\u4ef6\u5939\uff08\u4f8b\u5982\u94a3\u91d1\u6216\u710a\u63a5\uff09\u7684\u6240\u6709\u4f53\u3002\u53ef\u4ee5\u4f7f\u7528\u81ea\u7531\u6587\u672c\u4e0e\u81ea\u5b9a\u4e49\u5c5e\u6027\u5360\u4f4d\u7b26\u76f8\u7ed3\u5408\uff0c\u4ee5\u5728\u540d\u79f0\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u5c5e\u6027\u3002"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u5c5e\u6027\u5fc5\u987b\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"<>"),"\u7b26\u53f7\u62ec\u8d77\u6765\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u8981\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"SM_"),"\u524d\u7f00\u91cd\u547d\u540d\u6240\u6709\u94a3\u91d1\u4f53\uff0c\u540e\u8ddf\u539a\u5ea6\u7684\u503c\uff0c\u5e94\u5c06",(0,o.kt)("strong",{parentName:"p"},"NAME_TEMPLATE"),"\u53d8\u91cf\u5b9a\u4e49\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const NAME_TEMPLATE As String = "SM_<Thickness>"\n')),(0,o.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u540e\uff0c\u5b8f\u53ef\u80fd\u9700\u8981\u6a21\u578b\u91cd\u5efa\u4ee5\u5237\u65b0\u7279\u5f81\u7684\u540d\u79f0"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u5207\u5272\u6e05\u5355\u6587\u4ef6\u5939\u4e2d\u6709\u591a\u4e2a\u4f53\uff0c\u5219\u4f7f\u7528\u7d22\u5f15\u6765\u533a\u5206\u540d\u79f0\uff0c\u4f8b\u5982-1\uff0c-2\uff0c-3"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u91cd\u547d\u540d\u4e4b\u524d\uff0c\u5b8f\u5c06\u6267\u884c\u5207\u5272\u6e05\u5355\u66f4\u65b0")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const NAME_TEMPLATE As String = "<PartNo>"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    ProcessCutLists swPart\n    \nEnd Sub\n\nSub ProcessCutLists(model As SldWorks.ModelDoc2)\n\n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = model.FirstFeature\n    \n    Do While Not swFeat Is Nothing\n        \n        Dim swBodyFolder As SldWorks.BodyFolder\n        \n        If swFeat.GetTypeName2() = "SolidBodyFolder" Then\n            Set swBodyFolder = swFeat.GetSpecificFeature2\n            swBodyFolder.UpdateCutList\n        ElseIf swFeat.GetTypeName2() = "CutListFolder" Then\n            Set swBodyFolder = swFeat.GetSpecificFeature2\n                        \n            Dim name As String\n            name = ComposeName(NAME_TEMPLATE, swFeat)\n            \n            RenameBodies swBodyFolder.GetBodies(), name\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Loop\n    \nEnd Sub\n\nSub RenameBodies(bodies As Variant, bodyName As String)\n    \n    If Not IsEmpty(bodies) Then\n    \n        Dim i As Integer\n        \n        For i = 0 To UBound(bodies)\n            Dim swBody As SldWorks.Body2\n            Set swBody = bodies(i)\n            \n            swBody.name = bodyName & IIf(i > 0, "-" & CStr(i), "")\n        Next\n    \n    End If\n    \nEnd Sub\n\nFunction ComposeName(template As String, cutListFeat As SldWorks.Feature) As String\n\n    Dim regEx As Object\n    Set regEx = CreateObject("VBScript.RegExp")\n    \n    regEx.Global = True\n    regEx.IgnoreCase = True\n    regEx.Pattern = "<[^>]*>"\n    \n    Dim regExMatches As Object\n    Set regExMatches = regEx.Execute(template)\n    \n    Dim i As Integer\n    \n    Dim outName As String\n    outName = template\n    \n    For i = regExMatches.Count - 1 To 0 Step -1\n        \n        Dim regExMatch As Object\n        Set regExMatch = regExMatches.Item(i)\n                    \n        Dim prpName As String\n        prpName = Mid(regExMatch.Value, 2, Len(regExMatch.Value) - 2)\n        \n        outName = Left(outName, regExMatch.FirstIndex) & GetPropertyValue(cutListFeat.CustomPropertyManager, prpName) & Right(outName, Len(outName) - (regExMatch.FirstIndex + regExMatch.Length))\n\n    Next\n    \n    ComposeName = outName\n    \nEnd Function\n\nFunction GetPropertyValue(custPrpMgr As SldWorks.CustomPropertyManager, prpName As String) As String\n    Dim resVal As String\n    custPrpMgr.Get2 prpName, "", resVal\n    GetPropertyValue = resVal\nEnd Function\n')))}p.isMDXComponent=!0},61168:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/renamed-cut-list-bodies-e727ab4b64534a578c7e491b519283bd.png"}}]);