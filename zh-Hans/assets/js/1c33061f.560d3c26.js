"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[81462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},A="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},S=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),A=l(n),S=r,g=A["".concat(c,".").concat(S)]||A[S]||m[S]||s;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=S;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[A]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}S.displayName="MDXCreateElement"},67582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const s={title:"\u4f7f\u7528SOLIDWORKS API\u901a\u8fc7\u8f6e\u5ed3\u521b\u5efa\u66f2\u9762\u653e\u6837\u7279\u5f81",image:"lofted-surface-sketch-contours.png",labels:["\u66f2\u9762","\u653e\u6837","\u8f6e\u5ed3"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/contrours-surface-loft/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/contrours-surface-loft/index",title:"\u4f7f\u7528SOLIDWORKS API\u901a\u8fc7\u8f6e\u5ed3\u521b\u5efa\u66f2\u9762\u653e\u6837\u7279\u5f81",description:"\u4f7f\u7528\u8f6e\u5ed3\u4f5c\u4e3a\u5256\u9762\u521b\u5efa\u66f2\u9762\u653e\u6837\u7279\u5f81{ width=500 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/contrours-surface-loft/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/contrours-surface-loft",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/contrours-surface-loft/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/contrours-surface-loft/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/contrours-surface-loft/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u901a\u8fc7\u8f6e\u5ed3\u521b\u5efa\u66f2\u9762\u653e\u6837\u7279\u5f81",image:"lofted-surface-sketch-contours.png",labels:["\u66f2\u9762","\u653e\u6837","\u8f6e\u5ed3"]},sidebar:"tutorialSidebar",previous:{title:"\u6355\u83b7 SOLIDWORKS API \u901a\u77e5\u4e2d\u7684\u65b0\u7279\u5f81\u521b\u5efa\u4e8b\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/catch-new-feature-creation-event/"},next:{title:"SOLIDWORKS\u5b8f\u4ee5\u5728\u65b0\u914d\u7f6e\u4e2d\u521b\u5efa\u548c\u6291\u5236\u7279\u5f81",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/create-feature-configurations/"}},c={},l=[],u={toc:l},A="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(A,(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4f7f\u7528\u8f6e\u5ed3\u4f5c\u4e3a\u5256\u9762\u521b\u5efa\u66f2\u9762\u653e\u6837\u7279\u5f81",src:n(11154).Z,width:"1014",height:"635"}),"{ width=500 }"),(0,r.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u901a\u8fc7\u8f6e\u5ed3\u4f5c\u4e3a\u5256\u9762\u521b\u5efa\u66f2\u9762\u653e\u6837\u7279\u5f81\u3002"),(0,r.kt)("p",null,"\u66f2\u9762\u653e\u6837\u7279\u5f81\u4e0d\u63a5\u53d7\u5256\u9762\u4e2d\u7684\u8349\u56fe\u6bb5\u4f5c\u4e3a\u5b9e\u4f53\u3002\u8fd9\u610f\u5473\u7740\u5982\u679c\u53ea\u9700\u8981\u4f7f\u7528\u8349\u56fe\u4e2d\u7684\u51e0\u4e2a\u6bb5\u4f5c\u4e3a\u5256\u9762\uff08\u800c\u4e0d\u662f\u6574\u4e2a\u8349\u56fe\uff09\uff0c\u5219\u65e0\u6cd5\u901a\u8fc7\u9009\u62e9\u8349\u56fe\u6bb5\u6765\u521b\u5efa\u7279\u5f81\u3002\u5fc5\u987b\u4f7f\u7528\u8349\u56fe\u8f6e\u5ed3\u6765\u4ee3\u66ff\u3002"),(0,r.kt)("p",null,"\u8349\u56fe\u6bb5\u5728\u7528\u6237\u754c\u9762\u4e2d\u4e5f\u4e0d\u53d7\u652f\u6301\u3002\u5f53\u9009\u62e9\u6bb5\u65f6\uff0c\u4f1a\u663e\u793a\u4ee5\u4e0b\u9009\u62e9\u7ba1\u7406\u5668\uff0c\u5141\u8bb8\u9009\u62e9\u5f00\u653e\u6216\u95ed\u5408\u73af\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u9009\u62e9\u5256\u9762\u65f6\u7684\u9009\u62e9\u7ba1\u7406\u5668",src:n(50866).Z,width:"529",height:"207"}),"{ width=250 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6253\u5f00\u96f6\u4ef6\u5e76\u9009\u62e9\u7528\u4e8e\u5256\u9762\u7684\u8349\u56fe\u6bb5\u3002\u652f\u6301\u4efb\u4f55\u7c7b\u578b\u7684\u8349\u56fe\u6bb5\uff08\u6837\u6761\u7ebf\u3001\u76f4\u7ebf\u3001\u5f27\u7b49\uff09\u3002\u8349\u56fe\u4e2d\u53ef\u80fd\u6709\u591a\u4e2a\u8349\u56fe\u6bb5\uff0c\u53ea\u80fd\u9009\u62e9\u5176\u4e2d\u7684\u51e0\u4e2a\u4f5c\u4e3a\u5256\u9762\u3002\u8349\u56fe\u6bb5\u4e5f\u53ef\u4ee5\u4f4d\u4e8e\u4e0d\u540c\u7684\u8349\u56fe\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5b8f\u5c06\u4e3a\u6bcf\u4e2a\u8349\u56fe\u6bb5\u627e\u5230\u76f8\u5e94\u7684\u8349\u56fe\u8f6e\u5ed3\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5b8f\u5c06\u4f7f\u7528\u76f8\u5e94\u7684\u8349\u56fe\u8f6e\u5ed3\u521b\u5efa\u66f2\u9762\u653e\u6837\u7279\u5f81\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6b64\u5b8f\u4e0d\u662f\u7528\u4e8e\u5728\u540c\u4e00\u8349\u56fe\u4e2d\u67e5\u627e\u8349\u56fe\u6bb5\u7684\u6700\u4f73\u6027\u80fd\u4ee3\u7801\uff0c\u56e0\u4e3a\u5b83\u5c06\u5bf9\u8349\u56fe\u4e2d\u7684\u6240\u6709\u8349\u56fe\u6bb5\u8fdb\u884c\u5b8c\u6574\u904d\u5386\uff0c\u4ee5\u67e5\u627e\u5404\u4e2a\u8349\u56fe\u6bb5\u7684\u76f8\u5e94\u8f6e\u5ed3\u3002\u53ef\u4ee5\u4fee\u6539\u5b8f\u4ee5\u5728\u4e00\u6b21\u904d\u5386\u5faa\u73af\u4e2d\u67e5\u627e\u591a\u4e2a\u8349\u56fe\u8f6e\u5ed3\uff0c\u907f\u514d\u91cd\u590d\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Dim swModel As SldWorks.ModelDoc2\n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swApp = Application.SldWorks\n    Set swModel = swApp.ActiveDoc\n\n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swContours() As SldWorks.SketchContour\n    ReDim swContours(swSelMgr.GetSelectedObjectCount2(-1) - 1)\n    \n    Dim i As Integer\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        Dim swSkSeg As SldWorks.SketchSegment\n        Set swSkSeg = swSelMgr.GetSelectedObject6(i, -1)\n        Set swContours(i - 1) = GetSketchContour(swSkSeg)\n    Next\n    \n    swModel.ClearSelection2 True\n    \n    Dim swSelData As SldWorks.SelectData\n        \n    Set swSelData = swSelMgr.CreateSelectData\n    \n    swSelData.Mark = 1\n        \n    For i = 0 To UBound(swContours)\n        Dim swSkContour As SldWorks.SketchContour\n        Set swSkContour = swContours(i)\n        swSkContour.Select2 True, swSelData\n    Next\n    \n    swModel.InsertLoftRefSurface2 False, True, False, 1, 0, 0\n\nEnd Sub\n\nFunction GetSketchContour(sketchSeg As SldWorks.SketchSegment) As SldWorks.SketchContour\n    \n    Dim swSketch As SldWorks.Sketch\n    Set swSketch = sketchSeg.GetSketch\n    \n    Dim vSketchContours As Variant\n    \n    vSketchContours = swSketch.GetSketchContours\n    \n    If Not IsEmpty(vSketchContours) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vSketchContours)\n            \n            Dim swSkContour As SldWorks.SketchContour\n            Set swSkContour = vSketchContours(i)\n            \n            Dim vSegs As Variant\n            vSegs = swSkContour.GetSketchSegments()\n            \n            If Not IsEmpty(vSegs) Then\n                \n                Dim j As Integer\n                \n                Dim swCurSkSeg As SldWorks.SketchSegment\n                Set swCurSkSeg = vSegs(j)\n                \n                If swApp.IsSame(sketchSeg, swCurSkSeg) = swObjectEquality.swObjectSame Then\n                    Set GetSketchContour = swSkContour\n                    Exit Function\n                End If\n                \n            End If\n            \n        Next\n        \n    End If\n    \nEnd Function\n")))}m.isMDXComponent=!0},11154:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/lofted-surface-sketch-contours-c45bab9e5976f163785c564383f9a034.png"},50866:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhEAAADPCAMAAAB863NWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQQEBFycugD/AP7+/iBXdcrjwaUBAerq6kJCQvL/8ry8vIqKipOTkwA3VcEqKdLS0nZ2dkalI9V2dSMjI9wCAub/5vbw8Ojx5Yegrvb29vf09HO516fTl7hLSlpaWtseHp6enkmEosXFxYfDcMQBAYCAgHRRUfRMTOvCwhkZGRdJZYiLmjExMewuLs6wsOyZh2mryX/I5srKymprazVxj9woAJokI9bW13OMc3FbW6ysresBAc0kIE6Qrs5hYN7f4Dk5ORUAAGNjY5yIiMCLi4UrK1RUVP2ZmcwCAUJ8mrwBAWOkwf07O+/U1CsrK3vC4IfQ7mVlZW2wzrW1tftbW7YUFN3Ly/yDg9kREO/w8E6KqM0PD/Pj496WlYWFh7IBAOm1tfQBAVWUstvb28A7O4c9PfYuLuXJzDt1k+QBAdNsa9MBAMdPTj0qKuIjI8AMCna82oPM6qMYF8DAwHhdXWaoxr4zMh5PaUaAnlmYtvyPj9PozF+gvuLi42+00j94lorU8uogIFCNq/oAAI41NfnV1f5DQ6sBAUyIpvHMzP6goHm/3VlPT8ovL/HU00dISH1NTPtMTHp6e3K21BpLZvwxMVORr8xSUcIxMNh0c9BkY3lhYThwjiFZd0B5lwAAAJlmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///5smHWAAAACgdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wCJAz2QAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAN5klEQVR4Xu3di38UVxUH8IVVA3mYYAKyscY0JIq6SLsRA4kViq+Q1tQ0tLpaSWl8QKNYjJX6SFvrIz6rKK1tffyt3nvnzO6d3TuzszPnPuf8WpLJzP1MdM63v7ss0NaOW8rRo3WKi7EmgpmA/wkUp2JRBNWEk7EpgmrCxdgVQTXhXiyLoJpwLtZFUE04FvsiyIRbcUEEbR0uxQ0RVBPuxBERVBPOxBkRVBOOxB0RVBNuxCURVBMuxCkRZMKBOCaCtg7rcU4E1YTluCeCasJuXBRBNWEzToqgmrAYR0VQTViLqyKoJmzFXRFUE3bisAgyYSVOi6Ctw0IcF0E1YTyui6CaMB33RVBNmI0HIqgmjMYLEVQTBuOHCDJhLr6IoK3DVPwRQTVhJh6JoJowEq9EUE0YiF8iqCb0xzcRVBO6450IMqE5HoqgrUNrvBRBNaExfoqgmtAXX0VQTeiKtyKoJjTFYxFUE1riswiqCR3xWwTVBH48F0Em0OO9CNo6kBOACKoJ1IQggmoCM2GIoJrASyAiqCbQEowIqgmkhCOCTOAkJBG0dWAkLBFUE+UTmAiqidIJTgTVRMmEJ4JqolxCFEE1USZhiLjqUeDBO5tARHzam5AIIyEReCERhkMijIRE4IVEGA6JMBISgRcSYTgkwkhIBF5IhOGQCCMhEXgJRETDm5AIIyEReAlGxHhm+CzgMCViXAMDi1MCizJDIoyEi4D/Q8pEIuALZfKKgOXKkAh3wkXAE1cmEiEOU5JXBHxWJtc9SISRkAi8kIgouaaJcQ8SYSSmRfzuN7PRQSJp96gv1OGIJUARR+XAOdsxLOLNmV+oSKTdoz4lSNRb/GNoIgBCT+CivRgW8d7O3ldvXhKHPM/tnRKf0+5Rn2Ik6vX9qdBEwPjVgTWWYnrX+NDO+p9u/rSxJb54/hM3N8SB6h7iIU9NTY2xH4GJgMn3zB7OicApGzH+yvJzrCXWPr61zA5fvL62GJ3sv0d9flxQgAQlInPqcNEeCrWI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"}}]);