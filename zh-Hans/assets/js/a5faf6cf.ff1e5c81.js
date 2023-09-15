"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[43894],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>u});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var d=r.createContext({}),l=function(n){var e=r.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=l(n.components);return r.createElement(d.Provider,{value:e},n.children)},p="mdxType",f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,s=n.originalType,d=n.parentName,c=a(n,["components","mdxType","originalType","parentName"]),p=l(t),m=o,u=p["".concat(d,".").concat(m)]||p[m]||f[m]||s;return t?r.createElement(u,i(i({ref:e},c),{},{components:t})):r.createElement(u,i({ref:e},c))}));function u(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var d in e)hasOwnProperty.call(e,d)&&(a[d]=e[d]);a.originalType=n,a[p]="string"==typeof n?n:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54216:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const s={title:"SOLIDWORKS\u5b8f\u4ee5\u67e5\u627e\u96f6\u4ef6\u4e4b\u95f4\u7684\u51e0\u4f55\u5dee\u5f02",image:"part-bodies-diff.png",labels:["geometry","transform","diff","compare"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/bodies-diff/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/bodies-diff/index",title:"SOLIDWORKS\u5b8f\u4ee5\u67e5\u627e\u96f6\u4ef6\u4e4b\u95f4\u7684\u51e0\u4f55\u5dee\u5f02",description:"\u6b64\u5b8f\u5141\u8bb8\u901a\u8fc7\u5176\u51e0\u4f55\u5f62\u72b6\u6bd4\u8f83\u4e24\u4e2a\u96f6\u4ef6\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/bodies-diff/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/bodies-diff",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/bodies-diff/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/bodies-diff/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/bodies-diff/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS\u5b8f\u4ee5\u67e5\u627e\u96f6\u4ef6\u4e4b\u95f4\u7684\u51e0\u4f55\u5dee\u5f02",image:"part-bodies-diff.png",labels:["geometry","transform","diff","compare"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u8fdb\u884c\u5757\u6a21\u578b\u7f16\u8f91",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/block-model-editing/"},next:{title:"Macro gets extreme points on body using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/body-extreme-points/"}},d={},l=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u6307\u4ee4",id:"\u6307\u4ee4",level:3}],c={toc:l},p="wrapper";function f(n){let{components:e,...s}=n;return(0,o.kt)(p,(0,r.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6b64\u5b8f\u5141\u8bb8\u901a\u8fc7\u5176\u51e0\u4f55\u5f62\u72b6\u6bd4\u8f83\u4e24\u4e2a\u96f6\u4ef6\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibody2~getcoincidencetransform2.html"},"SOLIDWORKS API\u7684IBody2::GetCoincidenceTransform2"),"\u6765\u6bd4\u8f83\u96f6\u4ef6\uff0c\u5982\u679c\u76f8\u7b49\uff0c\u5219\u627e\u5230\u5b83\u4eec\u4e4b\u95f4\u7684\u53d8\u6362\u3002"),(0,o.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b8f\u652f\u6301\u591a\u4f53\u96f6\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u5373\u4f7f\u53ef\u6bd4\u8f83\u7684\u96f6\u4ef6\u4f4d\u4e8e\u4e0d\u540c\u7684\u4f4d\u7f6e\uff08\u5373\u79fb\u52a8\u6216\u65cb\u8f6c\uff09\uff0c\u5b8f\u4e5f\u4f1a\u6bd4\u8f83\u5b83\u4eec\u7684\u51e0\u4f55\u4f53\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u6bd4\u8f83\u7684\u96f6\u4ef6\u53ef\u80fd\u5177\u6709\u4e0d\u540c\u6570\u91cf\u7684\u51e0\u4f55\u4f53"),(0,o.kt)("li",{parentName:"ul"},"\u5b8f\u5c06\u5c1d\u8bd5\u627e\u5230\u4e24\u4e2a\u96f6\u4ef6\u4e4b\u95f4\u6700\u5408\u9002\u7684\u53d8\u6362")),(0,o.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u8981\u6bd4\u8f83\u7684\u539f\u59cb\u96f6\u4ef6\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u539f\u59cb\u96f6\u4ef6",src:t(36690).Z,width:"487",height:"228"}),"{ width=250 }"),(0,o.kt)("p",null,"\u8981\u6bd4\u8f83\u7684\u96f6\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u8981\u6bd4\u8f83\u7684\u96f6\u4ef6",src:t(23502).Z,width:"609",height:"246"}),"{ width=250 }"),(0,o.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u96f6\u4ef6\u5177\u6709\u4fee\u6539\u540e\u7684\u51e0\u4f55\u5f62\u72b6\uff0c\u5e76\u5728\u7a7a\u95f4\u4e2d\u91cd\u65b0\u5b9a\u4f4d\u3002\u7b2c\u4e8c\u4e2a\u96f6\u4ef6\u4e2d\u7684\u4e00\u4e9b\u51e0\u4f55\u4f53\u5df2\u88ab\u5220\u9664\u3002"),(0,o.kt)("p",null,"\u8be5\u5b8f\u8ba1\u7b97\u51fa\u4ee5\u4e0b\u7ed3\u679c\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u7ed3\u679c\u5dee\u5f02\u6587\u4ef6",src:t(11784).Z,width:"528",height:"233"}),"{ width=250 }"),(0,o.kt)("h3",{id:"\u6307\u4ee4"},"\u6307\u4ee4"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6253\u5f00\u539f\u59cb\u96f6\u4ef6\u6587\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5b8f\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u8981\u4e0e\u4e4b\u6bd4\u8f83\u7684\u96f6\u4ef6\u6587\u4ef6\u7684\u5b8c\u6574\u8def\u5f84"),(0,o.kt)("li",{parentName:"ul"},"\u7ed3\u679c\u5c06\u5728\u539f\u59cb\u96f6\u4ef6\u4e2d\u663e\u793a\u7b2c\u4e8c\u4e2a\u96f6\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u7ee7\u7eed\u8fd0\u884c\u5b8f\uff08F5\uff09\u4ee5\u6e05\u9664\u9884\u89c8")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    If Not swPart Is Nothing Then\n        \n        Dim otherFilePath As String\n        otherFilePath = InputBox("\u8bf7\u6307\u5b9a\u8981\u6bd4\u8f83\u7684\u96f6\u4ef6\u8def\u5f84")\n        \n        If otherFilePath <> "" Then\n            \n            Dim swOtherPart As SldWorks.PartDoc\n            Set swOtherPart = swApp.OpenDoc6(otherFilePath, swDocumentTypes_e.swDocPART, swOpenDocOptions_e.swOpenDocOptions_Silent, "", 0, 0)\n            \n            If Not swOtherPart Is Nothing Then\n                Dim swXform As SldWorks.MathTransform\n                Set swXform = GetClosestTransform(swPart, swOtherPart)\n                PreviewPart swOtherPart, swXform, swPart\n            Else\n                MsgBox "\u65e0\u6cd5\u6253\u5f00\u8981\u6bd4\u8f83\u7684\u96f6\u4ef6"\n            End If\n            \n        End If\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u96f6\u4ef6"\n    End If\n        \nEnd Sub\n\nSub PreviewPart(part As SldWorks.PartDoc, transform As SldWorks.MathTransform, context As PartDoc)\n    \n    Dim vBodies As Variant\n    \n    vBodies = part.GetBodies2(swBodyType_e.swSolidBody, True)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vBodies)\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = vBodies(i)\n        Set swBody = swBody.Copy\n        \n        If Not transform Is Nothing Then\n            Debug.Print swBody.ApplyTransform(transform)\n        End If\n        \n        Set vBodies(i) = swBody\n        swBody.Display3 context, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n        \n    Next\n    \n    Stop \'\u7ee7\u7eed\u8fd0\u884c\u5b8f\u4ee5\u9690\u85cf\u9884\u89c8\n    \nEnd Sub\n\nFunction GetClosestTransform(thisPart As SldWorks.PartDoc, otherPart As SldWorks.PartDoc) As SldWorks.MathTransform\n\n    Dim vThisBodies As Variant\n    Dim vOtherBodies As Variant\n    \n    vThisBodies = thisPart.GetBodies2(swBodyType_e.swSolidBody, True)\n    vOtherBodies = otherPart.GetBodies2(swBodyType_e.swSolidBody, True)\n    \n    Dim transformsHits As Object\n    Set transformsHits = CreateObject("Scripting.Dictionary") \'\u7531\u4e8e\u67d0\u4e9b\u539f\u56e0\uff0c\u6709\u65f6\u5728\u521b\u5efa\u65f6\u4f1a\u6dfb\u52a0\u7b2c\u4e00\u4e2a\u7a7a\u5143\u7d20\n        \n    If Not IsEmpty(vThisBodies) And Not IsEmpty(vOtherBodies) Then\n        \n        Dim i As Integer\n        Dim j As Integer\n        \n        For i = 0 To UBound(vOtherBodies)\n            \n            Dim swOtherBody As SldWorks.Body2\n                        \n            Set swOtherBody = vOtherBodies(i)\n            \n            For j = 0 To UBound(vThisBodies)\n                \n                Dim swThisBody As SldWorks.Body2\n                Set swThisBody = vThisBodies(j)\n                Dim swTransform As SldWorks.MathTransform\n                \n                If swThisBody.GetCoincidenceTransform2(swOtherBody, swTransform) Then\n                    \n                    If Not swTransform Is Nothing Then\n                        \n                        Dim contains As Boolean\n                        contains = False\n                        For Each key In transformsHits.Keys\n                            If Not key Is Nothing Then\n                                Dim tx As SldWorks.MathTransform\n                                Set tx = key\n                                If CompareTransforms(swTransform, tx) Then\n                                    transformsHits(tx) = transformsHits(tx) + 1\n                                    contains = True\n                                    Exit For\n                                End If\n                            End If\n                        Next\n                        \n                        If Not contains Then\n                            transformsHits.Add swTransform, 1\n                        End If\n                        \n                    End If\n                    \n                End If\n                \n            Next\n            \n        Next\n        \n    End If\n    \n    Dim curMaxHit As Integer\n    curMaxHit = 0\n    \n    For Each key In transformsHits.Keys\n        If Not key Is Nothing Then\n            Dim curTx As SldWorks.MathTransform\n            Set curTx = key\n            If transformsHits(curTx) > curMaxHit Then\n                curMaxHit = transformsHits(curTx)\n                Set GetClosestTransform = curTx\n            End If\n        End If\n    Next\n\nEnd Function\n\nFunction CompareTransforms(firstTransform As SldWorks.MathTransform, secondTransform As SldWorks.MathTransform) As Boolean\n    \n    Dim vFirstArrayData As Variant\n    vFirstArrayData = firstTransform.ArrayData\n    \n    Dim vSecondArrayData As Variant\n    vSecondArrayData = secondTransform.ArrayData\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vFirstArrayData)\n        If Not CompareValues(CDbl(vFirstArrayData(i)), CDbl(vSecondArrayData(i))) Then\n            CompareTransforms = False\n            Exit Function\n        End If\n    Next\n    \n    CompareTransforms = True\n    \nEnd Function\n\nFunction CompareValues(firstValue As Double, secondValue As Double, Optional tol As Double = 0.00000001) As Boolean\n        \n    CompareValues = Abs(secondValue - firstValue) <= tol\n    \nEnd Function\n')))}f.isMDXComponent=!0},36690:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/original-part-ab140f428bb8686cd9242a19a8c6e6a5.png"},11784:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/part-bodies-diff-f31ae4e7f9811971273039d8c9f35f57.png"},23502:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/part-to-compare-7f77dd0eb4f839a2a29ce4846c4dd12f.png"}}]);