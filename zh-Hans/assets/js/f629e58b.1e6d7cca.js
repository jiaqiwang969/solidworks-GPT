"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[84608],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||s;return a?n.createElement(b,o(o({ref:t},d),{},{components:a})):n.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const s={title:"\u5728Visual Basic 6 (VBA)\u4e2d\u5c06\u6570\u636e\u7f16\u7801\u548c\u89e3\u7801\u4e3aBase64\u5b57\u7b26\u4e32\u683c\u5f0f",caption:"Base64\u5b57\u7b26\u4e32"},o=void 0,i={unversionedId:"codestack/visual-basic/algorithms/data/encoding/base64/index",id:"codestack/visual-basic/algorithms/data/encoding/base64/index",title:"\u5728Visual Basic 6 (VBA)\u4e2d\u5c06\u6570\u636e\u7f16\u7801\u548c\u89e3\u7801\u4e3aBase64\u5b57\u7b26\u4e32\u683c\u5f0f",description:"\u5728Visual Basic 6 (VBA)\u4e2d\u5c06\u5b57\u8282\u6570\u7ec4\u7f16\u7801\u548c\u89e3\u7801\u4e3aBase64\u5b57\u7b26\u4e32\u683c\u5f0f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/visual-basic/algorithms/data/encoding/base64/index.md",sourceDirName:"codestack/visual-basic/algorithms/data/encoding/base64",slug:"/codestack/visual-basic/algorithms/data/encoding/base64/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/visual-basic/algorithms/data/encoding/base64/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/visual-basic/algorithms/data/encoding/base64/index.md",tags:[],version:"current",frontMatter:{title:"\u5728Visual Basic 6 (VBA)\u4e2d\u5c06\u6570\u636e\u7f16\u7801\u548c\u89e3\u7801\u4e3aBase64\u5b57\u7b26\u4e32\u683c\u5f0f",caption:"Base64\u5b57\u7b26\u4e32"},sidebar:"tutorialSidebar",previous:{title:"\u5728Visual Basic 6 (VBA)\u4e2d\u5bf9\u6570\u636e\u8fdb\u884c\u7f16\u7801",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/visual-basic/algorithms/data/encoding/"},next:{title:"\u5c06\u6570\u7ec4\u8f6c\u6362\u4e3a\u5b57\u5178\u7684 Visual Basic \u793a\u4f8b",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/visual-basic/algorithms/data/grouping/"}},c={},l=[{value:"labels: base64,\u7f16\u7801,\u89e3\u7801",id:"labels-base64\u7f16\u7801\u89e3\u7801",level:2},{value:"\u7f16\u7801",id:"\u7f16\u7801",level:2},{value:"\u89e3\u7801",id:"\u89e3\u7801",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728Visual Basic 6 (VBA)\u4e2d\u5c06\u5b57\u8282\u6570\u7ec4\u7f16\u7801\u548c\u89e3\u7801\u4e3aBase64\u5b57\u7b26\u4e32\u683c\u5f0f"),(0,r.kt)("h2",{id:"labels-base64\u7f16\u7801\u89e3\u7801"},"labels: ","[base64,\u7f16\u7801,\u89e3\u7801]"),(0,r.kt)("p",null,"Base64\u5b57\u7b26\u4e32\u5141\u8bb8\u4ee5\u5b57\u7b26\u4e32\u683c\u5f0f\u4fdd\u5b58\u5b57\u8282\u6570\u7ec4\u6570\u636e\u3002"),(0,r.kt)("h2",{id:"\u7f16\u7801"},"\u7f16\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Dim arr(5) As Byte\narr(0) = 1: arr(1) = 5: arr(2) = 2\narr(3) = 21: arr(4) = 101: arr(5) = 51\n\nDim base64Str As String\nbase64Str = ConvertToBase64String(arr) 'AQUCFWUz\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Function ConvertToBase64String(vArr As Variant) As String\n    \n    Dim xmlDoc As Object\n    Dim xmlNode As Object\n    \n    Set xmlDoc = CreateObject("MSXML2.DOMDocument")\n    \n    Set xmlNode = xmlDoc.createElement("b64")\n    \n    xmlNode.DataType = "bin.base64"\n    xmlNode.nodeTypedValue = vArr\n    \n    ConvertToBase64String = xmlNode.Text\n    \nEnd Function\n')),(0,r.kt)("h2",{id:"\u89e3\u7801"},"\u89e3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim base64Str As String\nbase64Str = "AQUCFWUz"\n\ndim vArr As Variant\nvArr = Base64ToArray(base64Str) \'\u5b57\u8282\u6570\u7ec4: 1, 5, 2, 21, 101, 51\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Private Function Base64ToArray(base64 As String) As Variant\n    \n    Dim xmlDoc As Object\n    Dim xmlNode As Object\n    \n    Set xmlDoc = CreateObject("MSXML2.DOMDocument")\n    Set xmlNode = xmlDoc.createElement("b64")\n    \n    xmlNode.DataType = "bin.base64"\n    xmlNode.Text = base64\n    \n    Base64ToArray = xmlNode.nodeTypedValue\n  \nEnd Function\n')))}p.isMDXComponent=!0}}]);