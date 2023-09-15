"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[64305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>w});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),c=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,g=A(e,["components","mdxType","originalType","parentName"]),d=c(n),l=r,w=d["".concat(a,".").concat(l)]||d[l]||p[l]||s;return n?o.createElement(w,i(i({ref:t},g),{},{components:n})):o.createElement(w,i({ref:t},g))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=l;var A={};for(var a in t)hasOwnProperty.call(t,a)&&(A[a]=t[a]);A.originalType=e,A[d]="string"==typeof e?e:r,i[1]=A;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},46128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>A,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const s={title:"\u4f7f\u7528SOLIDWORKS API\u5728\u4e24\u4e2a\u7ebf\u6bb5\u4e4b\u95f4\u6dfb\u52a0\u667a\u80fd\u5c3a\u5bf8",image:"dimension-name.png",labels:["dimension","example","solidworks api"],"redirect-from":["/2018/03/solidworks-api-dimensions-add-dimensions-to-sketch-segment.html"]},i=void 0,A={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-smart-dimension-between-two-segments/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-smart-dimension-between-two-segments/index",title:"\u4f7f\u7528SOLIDWORKS API\u5728\u4e24\u4e2a\u7ebf\u6bb5\u4e4b\u95f4\u6dfb\u52a0\u667a\u80fd\u5c3a\u5bf8",description:"\u8be5\u793a\u4f8b\u4f7f\u7528SOLIDWORKS API\u5728\u4e24\u4e2a\u9009\u5b9a\u7684\u8349\u56fe\u7ebf\u6bb5\uff08\u4f8b\u5982\u8349\u56fe\u7ebf\uff09\u4e4b\u95f4\u6dfb\u52a0\u5c3a\u5bf8\u3002\u5c3a\u5bf8\u5c06\u653e\u7f6e\u5728\u4e24\u4e2a\u9009\u5b9a\u70b9\u7684\u4e2d\u95f4\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-smart-dimension-between-two-segments/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-smart-dimension-between-two-segments",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-smart-dimension-between-two-segments/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-smart-dimension-between-two-segments/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-smart-dimension-between-two-segments/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u5728\u4e24\u4e2a\u7ebf\u6bb5\u4e4b\u95f4\u6dfb\u52a0\u667a\u80fd\u5c3a\u5bf8",image:"dimension-name.png",labels:["dimension","example","solidworks api"],"redirect-from":["/2018/03/solidworks-api-dimensions-add-dimensions-to-sketch-segment.html"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u6dfb\u52a0\u548c\u8bfb\u53d6\u5e26\u53c2\u6570\u7684\u7ec4\u4ef6\u5c5e\u6027",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-parameters-components/"},next:{title:"\u5728SOLIDWORKS\u6a21\u578b\u4e2d\u6dfb\u52a0\u6c34\u5370\u7684\u5b8f\u7279\u5f81",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-watermark/"}},a={},c=[],g={toc:c},d="wrapper";function p(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,o.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8be5\u793a\u4f8b\u4f7f\u7528SOLIDWORKS API\u5728\u4e24\u4e2a\u9009\u5b9a\u7684\u8349\u56fe\u7ebf\u6bb5\uff08\u4f8b\u5982\u8349\u56fe\u7ebf\uff09\u4e4b\u95f4\u6dfb\u52a0\u5c3a\u5bf8\u3002\u5c3a\u5bf8\u5c06\u653e\u7f6e\u5728\u4e24\u4e2a\u9009\u5b9a\u70b9\u7684\u4e2d\u95f4\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5e26\u6709\u540d\u79f0\u7684\u5c3a\u5bf8",src:n(56596).Z,width:"320",height:"238"}),"{ width=320 height=237 }"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528SOLIDWORKS API\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u6dfb\u52a0\u5c3a\u5bf8\u65f6\uff0c\u91cd\u8981\u7684\u662f\u7981\u7528\u8f93\u5165\u5c3a\u5bf8\u503c\u9009\u9879\uff0c\u5426\u5219\u5b8f\u5c06\u88ab\u4e2d\u65ad\u5e76\u9700\u8981\u7528\u6237\u8f93\u5165\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u4e34\u65f6\u79fb\u9664\u4e86\u6b64\u9009\u9879\uff0c\u5e76\u5728\u63d2\u5165\u5c3a\u5bf8\u540e\u6062\u590d\u539f\u59cb\u503c\uff0c\u4ee5\u786e\u4fdd\u4e0d\u5f71\u54cd\u7528\u6237\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u521b\u5efa\u65f6\u8f93\u5165\u5c3a\u5bf8\u503c\u7684\u9009\u9879",src:n(50170).Z,width:"640",height:"200"}),"{ width=640 height=198 }"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swSelMgr = swModel.SelectionManager\n                \n        If swSelMgr.GetSelectedObjectCount2(-1) = 2 Then\n    \n            Dim vPt1 As Variant\n            Dim vPt2 As Variant\n            \n            vPt1 = swSelMgr.GetSelectionPoint2(1, -1)\n            vPt2 = swSelMgr.GetSelectionPoint2(2, -1)\n            \n            Dim inputDimDefVal As Boolean\n            inputDimDefVal = swApp.GetUserPreferenceToggle(swUserPreferenceToggle_e.swInputDimValOnCreate)\n        \n            swApp.SetUserPreferenceToggle swUserPreferenceToggle_e.swInputDimValOnCreate, False\n\n            swModel.AddDimension2 (vPt1(0) + vPt2(0)) / 2, (vPt1(1) + vPt2(1)) / 2, (vPt1(2) + vPt2(2)) / 2\n            \n            swApp.SetUserPreferenceToggle swUserPreferenceToggle_e.swInputDimValOnCreate, inputDimDefVal\n    \n        Else\n            MsgBox "\u8bf7\u9009\u5b9a\u8349\u56fe\u7ebf\u6bb5\u4ee5\u6dfb\u52a0\u5c3a\u5bf8"\n        End If\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n')))}p.isMDXComponent=!0},56596:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADuCAMAAAB/Ly6yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAANCKAAAA8gDYh233c3B5W15xapef8rwAAFhj2pj0nioyKsLPqS018nuE1rm98vL+8tLX0tPgxNjc2P6Cg8/U8gCoAJSfls50AOHn4XYAza/nj9S1Y4LcAIqT3EVZWImNiQAhHt/p7MyhzUhI8tXn2q+z7Ght8tTh1K25r+rBzZ6tACzBQu5DAPilom/3h77H8pij1GbVtNlbYs7azvvT0q/2qvfc2QMa8v4qPtbg8ZDull1o44SM6nOEfVTNYJSf1a235VFU8tTg3ru9u7rHm8LGwtfk1uHu2t/u5MjOyZXFAD9HP93o3amsqcbQ8eHt4ens6b0ArOj06Nnl2d7h3jxH6HR75yAkIKSt5Xl76PpDVPfRylphWq//wfoAAKGhodHd0ZOVk4H+hskAL7zF319n8v62spOY7q+bAE5i9lL/XoLzaK638n2H6a+1ruPy6YiO8rXNaLi/05+n8tPa8v/t8HJvchUj8vmmrFNb8rvC8oKKgvCUlaW2rWtz8q7/tLXsmJ60AKav8srVykBG8uLr8syCAFpi8UtV56iwkc/h1MPL8cTRvo+Q8rO6s9nk7djd8snT66ip8pib8vnUzRITErS78uFzd5iYmL3Jvnv8gKqyqrG28oCG8jQ5NGNq8sHF8enx8f/ezcnM8snVtGBkYNrnzGBk8XT6elhc8bW+teDk8Zyl8v6vrM7X8mZu8qKr8tri8oP/iJ2ppXB28UpR8st7ALbA8nuD8oKK8nV7dYqS8o+Y8sfJ+HN78cPNw6Gj8quy8vnBw3p98svU8qSzALyz+or/hzdA8nvdtDQ98ZOa8pOak7H/tfDz4rnEuYT7fLr/v4yUjIB7gFJXUklLSZuim/+Pk9PfyoJ6+qOso93n8kJK8tzp0yUtJf+6rGVqZXr/inBv8qCuAA0T8qf+rTk+OfTj273KoP6uq3uDexYaFsXQxWFq1jxE8q/AtjfCSbS/3AAJAJ71pMC/+qmt7kpN8pbynB8q8pCV8rOys7X/utthbDIzMgAAAEPqWBEAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAbvElEQVR4Xu1dDXwcx1W/HgWXQps1xgTz/dHiK4bWgALFEKAmrZPAxRfuXCi0ECXgtIBxDBYF2aASK6oAU2PiYnAcRz7S1InjbyxsJUapYguK5SYkJGmJnBBiWkoiwkchYAI/3szO7u3Mvv/dvru5O0n1/+fRjufevX37Zua/b2dn5nLBqnLAosccHZRLJmOjXDQZBwVzdPBZcFIgXuTFgS1IC7BRaHrQa44hcgG4FOhAcC0yKz4qc2AJnFSmBVyq1IF2reXM8RKaBG6BCFJ5FlebY4sQ2uLFdEdLLigAtaAFCzkQFCMOrJijA9SFAQcCLchGmRaH23KlAikm+4qkRqWSOtKZyg9RXh3pw1oqBeXepDAJhIk+tgSNUInOprQprZGw+vAjVG2xUKytFBRqGpOnpnMmhEKNlCrE5zUhlUKh3lg4oa1ULJWTwrHGyiB9mBCOBAqVtH1KgK40IZgjIU3GjZJuudwHyZRJSKUuCbbhtHIO9AKqyzkL22G5QDVUDn44kCOSo9Xgs8CD3eBAiekKbhwIvh4QM3BADgSnY6rhzvzS4COyWlOUxQA50L7EGK2brmGL4zgQXGLr2JQfMbn5gC4E0hsnqiY3H4DjQNCw1f2bA+hN6eLFb6U/b88srqHvd2kIbRHGgaDYjQM7zYErxlX7m8scuMocQ3jjQCCeKh4eMhkWWbXUR5tMZ9FpDpya0AfhJc5i4DgQdG3UbYAWR/pi6L/gS7OJRwAciGxBWmTioNjp2uRAk3PRDg6c7jc3YORAPxwItLRkeg2uAxFQBQAAj1jF24cbBTBZtDSGH/FsWjrKgbdtNZl5BBwHghaIgqkM1fjgnSaD40BZY5Da0rzpSbhxILqJeOfA1eMmQ2gvB7Y3DszK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"},50170:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/input-dimension-value-option-7d0d724ae02424d5ef39ce9409fa948b.png"}}]);