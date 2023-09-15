"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[14206],{3905:(t,A,n)=>{n.d(A,{Zo:()=>Z,kt:()=>c});var s=n(67294);function e(t,A,n){return A in t?Object.defineProperty(t,A,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[A]=n,t}function o(t,A){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);A&&(s=s.filter((function(A){return Object.getOwnPropertyDescriptor(t,A).enumerable}))),n.push.apply(n,s)}return n}function r(t){for(var A=1;A<arguments.length;A++){var n=null!=arguments[A]?arguments[A]:{};A%2?o(Object(n),!0).forEach((function(A){e(t,A,n[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(A){Object.defineProperty(t,A,Object.getOwnPropertyDescriptor(n,A))}))}return t}function m(t,A){if(null==t)return{};var n,s,e=function(t,A){if(null==t)return{};var n,s,e={},o=Object.keys(t);for(s=0;s<o.length;s++)n=o[s],A.indexOf(n)>=0||(e[n]=t[n]);return e}(t,A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)n=o[s],A.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(e[n]=t[n])}return e}var l=s.createContext({}),a=function(t){var A=s.useContext(l),n=A;return t&&(n="function"==typeof t?t(A):r(r({},A),t)),n},Z=function(t){var A=a(t.components);return s.createElement(l.Provider,{value:A},t.children)},i="mdxType",M={inlineCode:"code",wrapper:function(t){var A=t.children;return s.createElement(s.Fragment,{},A)}},k=s.forwardRef((function(t,A){var n=t.components,e=t.mdxType,o=t.originalType,l=t.parentName,Z=m(t,["components","mdxType","originalType","parentName"]),i=a(n),k=e,c=i["".concat(l,".").concat(k)]||i[k]||M[k]||o;return n?s.createElement(c,r(r({ref:A},Z),{},{components:n})):s.createElement(c,r({ref:A},Z))}));function c(t,A){var n=arguments,e=A&&A.mdxType;if("string"==typeof t||e){var o=n.length,r=new Array(o);r[0]=k;var m={};for(var l in A)hasOwnProperty.call(A,l)&&(m[l]=A[l]);m.originalType=t,m[i]="string"==typeof t?t:e,r[1]=m;for(var a=2;a<o;a++)r[a]=n[a];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}k.displayName="MDXCreateElement"},13003:(t,A,n)=>{n.r(A),n.d(A,{assets:()=>l,contentTitle:()=>r,default:()=>M,frontMatter:()=>o,metadata:()=>m,toc:()=>a});var s=n(87462),e=(n(67294),n(3905));const o={title:"\u7406\u89e3\u5728\u4f7f\u7528SOLIDWORKS API\u65f6\u7684\u8349\u56fe\u53d8\u6362",image:"sketch-coordinate-systems.png",labels:["\u53d8\u6362","\u8349\u56fe"]},r=void 0,m={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform/index",title:"\u7406\u89e3\u5728\u4f7f\u7528SOLIDWORKS API\u65f6\u7684\u8349\u56fe\u53d8\u6362",description:"\u5728\u5904\u7406\u8349\u56fe\u6bb5\uff08\u4f8b\u5982\u7ebf\u6bb5\u3001\u5f27\u7ebf\u7b49\uff09\u6216\u70b9\u65f6\uff0c\u9700\u8981\u8003\u8651\u5230\u4eceSOLIDWORKS API\u8fd4\u56de\u7684\u5750\u6807\u503c\uff08\u4f8b\u5982ISketchPoint::X\u5c5e\u6027\uff09\u662f\u76f8\u5bf9\u4e8e\u5c40\u90e8\u8349\u56fe\u5750\u6807\u7cfb\u7684\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform/index.md",tags:[],version:"current",frontMatter:{title:"\u7406\u89e3\u5728\u4f7f\u7528SOLIDWORKS API\u65f6\u7684\u8349\u56fe\u53d8\u6362",image:"sketch-coordinate-systems.png",labels:["\u53d8\u6362","\u8349\u56fe"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u6d3e\u751f\u96f6\u4ef6\u4e2d\u7684\u5bf9\u5e94\u5b9e\u4f53\uff08\u9762\u3001\u8fb9\u548c\u9876\u70b9\uff09",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tracking-objects/tracking-ids/derived-part-get-corresponding-entity/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u901a\u8fc7\u5c4f\u5e55\u50cf\u7d20\u5e73\u79fb\u6a21\u578b\u89c6\u56fe",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/transform-pan-view/"}},l={},a=[{value:"\u4ece\u8349\u56fe\u70b9\u8bfb\u53d6\u5c40\u90e8\u5750\u6807",id:"\u4ece\u8349\u56fe\u70b9\u8bfb\u53d6\u5c40\u90e8\u5750\u6807",level:2},{value:"\u4ece\u8349\u56fe\u70b9\u68c0\u7d22\u5168\u5c40\u5750\u6807",id:"\u4ece\u8349\u56fe\u70b9\u68c0\u7d22\u5168\u5c40\u5750\u6807",level:2},{value:"\u6839\u636e\u5168\u5c40\u5750\u6807\u5728\u8349\u56fe\u4e2d\u521b\u5efa\u70b9",id:"\u6839\u636e\u5168\u5c40\u5750\u6807\u5728\u8349\u56fe\u4e2d\u521b\u5efa\u70b9",level:2}],Z={toc:a},i="wrapper";function M(t){let{components:A,...o}=t;return(0,e.kt)(i,(0,s.Z)({},Z,o,{components:A,mdxType:"MDXLayout"}),(0,e.kt)("p",null,"\u5728\u5904\u7406\u8349\u56fe\u6bb5\uff08\u4f8b\u5982\u7ebf\u6bb5\u3001\u5f27\u7ebf\u7b49\uff09\u6216\u70b9\u65f6\uff0c\u9700\u8981\u8003\u8651\u5230\u4eceSOLIDWORKS API\u8fd4\u56de\u7684\u5750\u6807\u503c\uff08\u4f8b\u5982",(0,e.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchPoint~X.html"},"ISketchPoint::X"),"\u5c5e\u6027\uff09\u662f\u76f8\u5bf9\u4e8e\u5c40\u90e8\u8349\u56fe\u5750\u6807\u7cfb\u7684\u3002"),(0,e.kt)("p",null,"\u8fd9\u4e9b\u503c\u5bf9\u4e8e3D\u8349\u56fe\u6216\u5728Front\u5e73\u9762\u4e0a\u521b\u5efa\u76842D\u8349\u56fe\uff08\u5982\u679c\u672a\u79fb\u52a8\uff09\u5c06\u5339\u914d\uff0c\u4f46\u5728\u5176\u4ed6\u60c5\u51b5\u4e0b\u5c06\u4e0d\u540c\u3002"),(0,e.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5bf9\u4e8e\u5c40\u90e8\u8349\u56fe\u5750\u6807\u7cfb\uff08\u5728\u8349\u56fe\u70b9\u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762\u4e2d\uff09\uff0c\u8be5\u70b9\u7684\u503c\u663e\u793a\u4e3a{ -50, 10, 0 }\uff0c\u5bf9\u4e8e\u5168\u5c40\u5750\u6807\u7cfb\uff08\u5728SOLIDWORKS\u72b6\u6001\u680f\u4e2d\uff09\uff0c\u8be5\u70b9\u7684\u503c\u663e\u793a\u4e3a{ -50, 0, -10 }\u3002\u8fd9\u79cd\u5dee\u5f02\u662f\u7531\u4e8e2D\u8349\u56fe\u662f\u5728Top\u5e73\u9762\u4e0a\u521b\u5efa\u7684\u3002"),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"\u5c40\u90e8\u548c\u5168\u5c40\u5750\u6807\u7cfb\u7684\u4e0d\u540c\u503c\u3002",src:n(63770).Z,width:"677",height:"696"}),"{ width=450 }"),(0,e.kt)("p",null,"\u6fc0\u6d3b\u8349\u56fe\u65f6\uff0c2D\u8349\u56fe\u7684\u5c40\u90e8\u5750\u6807\u7cfb\u663e\u793a\u4e3a\u7ea2\u8272\u7684X\u548cY\u7bad\u5934\u3002\u5168\u5c40\u5750\u6807\u7cfb\u5728SOLIDWORKS\u6a21\u578b\u7a97\u53e3\u7684\u53f3\u4e0b\u89d2\u7528\u7ea2\u8272\u3001\u7eff\u8272\u548c\u84dd\u8272\u7684\u4e09\u8f74\u8868\u793a\u3002"),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"\u5c40\u90e8\u8349\u56fe\u5750\u6807\u7cfb\u548c\u5168\u5c40\u5750\u6807\u7cfb",src:n(87854).Z,width:"428",height:"305"}),"{ width=350 }"),(0,e.kt)("h2",{id:"\u4ece\u8349\u56fe\u70b9\u8bfb\u53d6\u5c40\u90e8\u5750\u6807"},"\u4ece\u8349\u56fe\u70b9\u8bfb\u53d6\u5c40\u90e8\u5750\u6807"),(0,e.kt)("p",null,"\u4ee5\u4e0b\u5b8f\u5c06\u8bfb\u53d6\u6240\u9009\u8349\u56fe\u70b9\u76f8\u5bf9\u4e8e\u5c40\u90e8\u8349\u56fe\u5750\u6807\u7cfb\u7684\u5750\u6807\uff0c\u5e76\u5c06\u5176\u8f93\u51fa\u5230SOLIDWORKS\u7684\u5373\u65f6\u7a97\u53e3\u4e2d\u3002"),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"\u63d0\u53d6\u7684\u8349\u56fe\u70b9\u5750\u6807",src:n(72188).Z,width:"656",height:"183"}),"{ width=350 }"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"\u5728Front\u5e73\u9762\u4e0a\u521b\u5efa\u4e00\u4e2a\u8349\u56fe\u5e76\u521b\u5efa\u4e00\u4e2a\u8349\u56fe\u70b9"),(0,e.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6b64\u70b9"),(0,e.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5b8f\u5e76\u4e0e\u5168\u5c40\u5750\u6807\u503c\u8fdb\u884c\u6bd4\u8f83\uff08\u7ed3\u679c\u4ee5\u7c73\u4e3a\u5355\u4f4d\u6253\u5370\uff09"),(0,e.kt)("li",{parentName:"ul"},"\u503c\u5c06\u5339\u914d")),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"\u8349\u56fe\u70b9\u7684\u5168\u5c40\u5750\u6807",src:n(28311).Z,width:"647",height:"58"}),"{ width=350 }"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"\u5728\u4efb\u4f55\u5e73\u9762\u4e0a\u521b\u5efa\u65b0\u7684\u8349\u56fe\uff0c\u4f46\u4e0d\u662fFront\u5e73\u9762\uff08\u4f8b\u5982Top\u5e73\u9762\uff09"),(0,e.kt)("li",{parentName:"ul"},"\u91cd\u590d\u4e0a\u8ff0\u6b65\u9aa4"),(0,e.kt)("li",{parentName:"ul"},"\u73b0\u5728\u5750\u6807\u4e0d\u5339\u914d\u3002")),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swSkPt As SldWorks.SketchPoint\n    Set swSkPt = swModel.SelectionManager.GetSelectedObject6(1, -1)\n    \n    Debug.Print swSkPt.X & "; " & swSkPt.Y & "; " & swSkPt.Z\n    \nEnd Sub\n\n')),(0,e.kt)("h2",{id:"\u4ece\u8349\u56fe\u70b9\u68c0\u7d22\u5168\u5c40\u5750\u6807"},"\u4ece\u8349\u56fe\u70b9\u68c0\u7d22\u5168\u5c40\u5750\u6807"),(0,e.kt)("p",null,"\u4e3a\u4e86\u627e\u5230\u76f8\u5bf9\u4e8e\u5168\u5c40\u5750\u6807\u7cfb\u7684\u5750\u6807\u503c\uff0c\u9700\u8981\u901a\u8fc7",(0,e.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketch~ModelToSketchTransform.html"},"SOLIDWORKS API\u5c5e\u6027ISketch::ModelToSketchTransform"),"\u627e\u5230\u8349\u56fe\u5230\u6a21\u578b\u7684",(0,e.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/geometry/transformation/"},"\u53d8\u6362\u77e9\u9635"),"\uff0c\u5e76\u5c06\u5176\u5e94\u7528\u4e8e\u70b9\u7684\u5750\u6807\u3002"),(0,e.kt)("p",null,"\u4e0b\u9762\u7684\u5b8f\u53ef\u4ee5\u7528\u4e8e\u6267\u884c\u4e0a\u4e00\u6bb5\u4e2d\u7684\u6b65\u9aa4\uff0c\u4f46\u73b0\u5728\u63d0\u53d6\u7684\u5750\u6807\u5c06\u4e0e\u5168\u5c40\u5750\u6807\u7cfb\u4e2d\u7684\u503c\u5339\u914d\u3002"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swSkPt As SldWorks.SketchPoint\n    Set swSkPt = swModel.SelectionManager.GetSelectedObject6(1, -1)\n    \n    Dim swSketch As SldWorks.Sketch\n    Set swSketch = swSkPt.GetSketch\n    \n    '\u83b7\u53d6\u8349\u56fe\u5230\u6a21\u578b\u7684\u53d8\u6362\uff08\u901a\u8fc7\u6c42\u9006\u6a21\u578b\u5230\u8349\u56fe\u7684\u53d8\u6362\uff09\n    Dim swTransform As SldWorks.MathTransform\n    Set swTransform = swSketch.ModelToSketchTransform.Inverse\n        \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim dPt(2) As Double\n    dPt(0) = swSkPt.X\n    dPt(1) = swSkPt.Y\n    dPt(2) = swSkPt.Z\n    \n    '\u4ece\u5750\u6807\u521b\u5efa\u6570\u5b66\u70b9\n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(dPt)\n    \n    '\u901a\u8fc7\u53d8\u6362\u79fb\u52a8\u70b9\n    Set swMathPt = swMathPt.MultiplyTransform(swTransform)\n    \n    '\u8bfb\u53d6\u65b0\u7684\u5750\u6807\u503c\n    Dim vPt As Variant\n    vPt = swMathPt.ArrayData\n    \n    Debug.Print vPt(0) & \"; \" & vPt(1) & \"; \" & vPt(2)\n    \nEnd Sub\n")),(0,e.kt)("h2",{id:"\u6839\u636e\u5168\u5c40\u5750\u6807\u5728\u8349\u56fe\u4e2d\u521b\u5efa\u70b9"},"\u6839\u636e\u5168\u5c40\u5750\u6807\u5728\u8349\u56fe\u4e2d\u521b\u5efa\u70b9"),(0,e.kt)("p",null,"\u5f53\u9700\u8981\u6839\u636e\u5168\u5c40\u5750\u6807\u503c\u57282D\u8349\u56fe\u4e2d\u521b\u5efa\u8349\u56fe\u70b9\u65f6\uff0c\u5e94\u4f7f\u7528\u9006\u53d8\u6362\u3002\u4ee5\u4e0b\u793a\u4f8b\u6839\u636eXYZ\u503c\u5728\u6d3b\u52a8\u8349\u56fe\u4e2d\u63d2\u5165\u4e00\u4e2a\u8349\u56fe\u70b9\u3002"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n        \n    Dim swSketch As SldWorks.Sketch\n    Set swSketch = swModel.SketchManager.ActiveSketch\n    \n    '\u83b7\u53d6\u6a21\u578b\u5230\u8349\u56fe\u7684\u53d8\u6362\n    Dim swTransform As SldWorks.MathTransform\n    Set swTransform = swSketch.ModelToSketchTransform\n        \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim dPt(2) As Double\n    dPt(0) = 0.025\n    dPt(1) = 0\n    dPt(2) = 0.1\n    \n    '\u4ece\u5750\u6807\u521b\u5efa\u6570\u5b66\u70b9\n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(dPt)\n    \n    '\u901a\u8fc7\u53d8\u6362\u79fb\u52a8\u70b9\n    Set swMathPt = swMathPt.MultiplyTransform(swTransform)\n    \n    '\u8bfb\u53d6\u65b0\u7684\u5750\u6807\u503c\n    Dim vPt As Variant\n    vPt = swMathPt.ArrayData\n    \n    swModel.SketchManager.CreatePoint vPt(0), vPt(1), vPt(2)\n    \nEnd Sub\n")))}M.isMDXComponent=!0},72188:(t,A,n)=>{n.d(A,{Z:()=>s});const s="data:image/png;base64,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"},63770:(t,A,n)=>{n.d(A,{Z:()=>s});const s=n.p+"assets/images/global-local-coordinates-79460f85c476e5791163769608621b21.png"},87854:(t,A,n)=>{n.d(A,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAawAAAExCAMAAAAX7mYDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAGa2/2YAAAA6kLb/tmZmOv+2ZgAAOgBmtrIZGRkrGWJi8bb//wAA/9uQOjqQ23oZGdvbkDoAAP8AABkZnZDb2wAAZv9CQv/+/v+cnLb/2wCAAJA6AEVF5Nv//yIi0/8hIRkZdGQZGf+9vf9jYxlUGRkZUmaQkP//2ysZGRkZNBkZtBkcGf//tv+MjJIZGbZmAMsaGjo6kP/OzhlBGToAZv8PDzo6Oigo3JDb/xlkGXNz+RkZhBkZwEsZGf+trf/bkKQZGf9ycv8yMkxM///e3rwaGhkZYDQ08RkZq/9SUhldGRkzGYQZGW0ZGRkZkz4+4RoayBkZuhkZQlZW7BkZJFQZGTsZGWNj/xk6GYoZGZkZGcMaGi8v6BlLGdAaGv8qKnt7/RkZohkZfRkZahkZizMz3KgZGWlp9BkZWRkkGU9P6BkZSx8fzScn2v85OXIZGVsZGf+ysisr4jg4+EEZGRkZKzAw6v8REVlZ7QAAAGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///9gOCVoAAAB7dFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AJPDqOoAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAzISURBVHhe7Z0LexPHFYaFSIUhRhCvY0TiBgiQKHWNRSBNQ3AQtoGYGFFDL2DTEG5tSpMWkl7ov++5zO6OjIR2Ja/kM/u9YHt2tDOb57yey85MHioNYAbIMgRkGQKyDAFZhoAsQ0CWISDLEJBlCMgyBGQZArIMAVmGgCxDQJYhIMsQkGUIyDIEZBkCsgwBWYaALENAliEgyxCQZQjIMgRkGQKyDAFZhoAsQ0CWISDLEJBlCMgyBGQZArIMAVmGgCxDQJYhIMsQkGUIyDIEZBkCsgwBWYaALENAliEgyxCQZQjIMgRkGQKyDAFZhoAsQ0CWISBLqB/4wqX6URt4x5tozxxxqVEouaxapVLZ/8GQslpUuLLPXbwZkVWvjGis3LLqHOv61FCy2jNsebGayRZkjcxilePN9JC1WCWJKTtlpWWzMKAb3PGsfpRcVhyj/LIGt0UfyBqZ5nw85HDo9WqxqgNRnQckFsLD2tw0y6IxKjHUnKe8GCop93Ql63NvVSvkoD1Dw+I7LKvG9dbmppN6uOquZ8UP70O5xywKpMaYZbU4TO0Zim+NBxf32y5pGtYosEc8RX4vqOmWRjtJkgEOu1RI6URWWk/dKybPSh/em3LLkobAISNZErVGS2y0KE8D2JznjwmJtPtO+B2XlhFPXtJNJzRHLpysrnpIEH3iaksf3puSyxJdElntmVzU6hQ1TSaDjY5ZyaXXsmJvFGov6Qa15rzkSDmV1V2PL8t7eG9KL4siSzGsH/iF/K7LoEEMlJW0uAGyXE5vWTJWcZvTu7yH9wayJIZxNxhHm9BkP1nOBeMZ8pIZZMkTJaV3xaX7AlkSVfparFKEX2swSQBf776SyLIad6eXdDY1xxuzknq0ak+W9/DelFoWTaM5hC6ysiShDnhRw4VOFjlqNBvcIYvK8efN+SNaRid4XtLJ0uq92WBSj9xGXR994p6VPrw35W5Z8qLD4ZfISlxl4JBw0byec3lgoai+Jkvv5PhrSltFmnSyuJrK1GL1dVmkiKY175Lt5Fnpw3uCbtAQkGUIyDIEZBkCsgwBWYaALENA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"},28311:(t,A,n)=>{n.d(A,{Z:()=>s});const s="data:image/png;base64,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"}}]);