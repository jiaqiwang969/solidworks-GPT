"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[13668],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},I=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),p=d(a),I=n,u=p["".concat(s,".").concat(I)]||p[I]||c[I]||i;return a?r.createElement(u,l(l({ref:e},m),{},{components:a})):r.createElement(u,l({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=I;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}I.displayName="MDXCreateElement"},23598:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"\u4f7f\u7528\u53d8\u6362\u5728SOLIDWORKS API\u4e2d\u64cd\u4f5c",caption:"\u53d8\u6362"},l=void 0,o={unversionedId:"codestack/solidworks-api/geometry/transformation/index",id:"codestack/solidworks-api/geometry/transformation/index",title:"\u4f7f\u7528\u53d8\u6362\u5728SOLIDWORKS API\u4e2d\u64cd\u4f5c",description:"\u4f7f\u7528SOLIDWORKS API\u5e94\u7528\u548c\u8bfb\u53d6\u53d8\u6362\uff08\u7ec4\u4ef6\u3001\u5b9e\u4f53\u3001\u8349\u56fe\u7b49\uff09",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/geometry/transformation/index.md",sourceDirName:"codestack/solidworks-api/geometry/transformation",slug:"/codestack/solidworks-api/geometry/transformation/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/transformation/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/transformation/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528\u53d8\u6362\u5728SOLIDWORKS API\u4e2d\u64cd\u4f5c",caption:"\u53d8\u6362"},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS VBA\u5b8f\u590d\u5236\u9884\u9009\u9762",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/surface-offset-equal/"},next:{title:"\u88c5\u914d\u4e2d\u7684\u7ec4\u4ef6\u53d8\u6362",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/transformation/assembly-component-transformation/"}},s={},d=[{value:"labels: transform,math",id:"labels-transformmath",level:2},{value:"\u5355\u4f4d\u77e9\u9635",id:"\u5355\u4f4d\u77e9\u9635",level:2},{value:"Visual Basic",id:"visual-basic",level:3},{value:"C#",id:"c",level:3}],m={toc:d},p="wrapper";function c(t){let{components:e,...i}=t;return(0,n.kt)(p,(0,r.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\u5e94\u7528\u548c\u8bfb\u53d6\u53d8\u6362\uff08\u7ec4\u4ef6\u3001\u5b9e\u4f53\u3001\u8349\u56fe\u7b49\uff09\nsidebar_position: 2"),(0,n.kt)("h2",{id:"labels-transformmath"},"labels: ","[transform,math]"),(0,n.kt)("p",null,"\u5728SOLIDWORKS API\u4e2d\uff0c\u53d8\u6362\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imathtransform.html"},"IMathTransform"),"\u63a5\u53e3\u8868\u793a\u3002\u8fd9\u662f\u4e00\u4e2a4x4\u7684\u53d8\u6362\u77e9\u9635\uff0c\u4fdd\u5b58\u4e86\u53d8\u6362\u3001\u7f29\u653e\u548c\u5e73\u79fb\u7684\u4fe1\u606f\u3002"),(0,n.kt)("p",null,"\u77e9\u9635\u6570\u7ec4\u753116\u4e2a\u53cc\u7cbe\u5ea6\u6570\uff080\u523015\uff09\u8868\u793a\uff0c\u6309\u7167\u4ee5\u4e0b\u987a\u5e8f\u6392\u5217\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"13")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"14")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"11"),(0,n.kt)("td",{parentName:"tr",align:null},"12")))),(0,n.kt)("p",null,"0-8 - \u77e9\u9635\u7684\u65cb\u8f6c\u90e8\u5206"),(0,n.kt)("p",null,"9-11 - \u77e9\u9635\u7684\u5e73\u79fb\u90e8\u5206\uff08x\u3001y\u3001z\uff09"),(0,n.kt)("p",null,"12 - \u7f29\u653e\u56e0\u5b50"),(0,n.kt)("p",null,"13-15 - \u672a\u4f7f\u7528"),(0,n.kt)("p",null,"\u77e9\u9635\u63cf\u8ff0\u4e86SOLIDWORKS\u4e2d\u5404\u79cd\u5143\u7d20\u7684\u65b9\u5411\u548c\u5e73\u79fb\uff0c\u4f8b\u5982\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5728\u88c5\u914d\u4f53\u4e2d\u7684\u4f4d\u7f6e"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u4f53\u7684\u76f8\u5bf9\u79fb\u52a8"),(0,n.kt)("li",{parentName:"ul"},"\u8349\u56fe\u5750\u6807\u7cfb\u4e0e\u6a21\u578b\u5750\u6807\u7cfb\u4e4b\u95f4\u7684\u5173\u7cfb"),(0,n.kt)("li",{parentName:"ul"},"\u76f8\u673a\u65b9\u5411\u548c\u6a21\u578b\u89c6\u56fe\u65cb\u8f6c")),(0,n.kt)("p",null,"\u5728\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u8868\u793a\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5c06\u53d8\u6362\u89c6\u4e3a\u60a8\u9700\u8981\u5e94\u7528\u4e8e\u539f\u59cb\u4f4d\u7f6e\uff08\u4f4d\u7f6e\u3001\u65cb\u8f6c\uff09\u4ee5\u5230\u8fbe\u76ee\u6807\u4f4d\u7f6e\u7684\u503c\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"transform.svg",src:a(18035).Z,width:"136",height:"114"}),"{ width=250 }"),(0,n.kt)("h2",{id:"\u5355\u4f4d\u77e9\u9635"},"\u5355\u4f4d\u77e9\u9635"),(0,n.kt)("p",null,"\u8868\u793a\u65e0\u65cb\u8f6c\u3001\u7f29\u653e\u6216\u53d8\u6362\u7684\u5355\u4f4d\u77e9\u9635\u7b49\u4e8e"),(0,n.kt)("h3",{id:"visual-basic"},"Visual Basic"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"Dim dMatrix(15) As Double\ndMatrix(0) = 1: dMatrix(1) = 0: dMatrix(2) = 0: dMatrix(3) = 0\ndMatrix(4) = 1: dMatrix(5) = 0: dMatrix(6) = 0: dMatrix(7) = 0\ndMatrix(8) = 1: dMatrix(9) = 0: dMatrix(10) = 0: dMatrix(11) = 0\ndMatrix(12) = 1: dMatrix(13) = 0: dMatrix(14) = 0: dMatrix(15) = 0\n")),(0,n.kt)("h3",{id:"c"},"C#"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"var matrix = new double[]\n{\n    1, 0, 0, 0,\n    1, 0, 0, 0,\n    1, 0, 0, 0,\n    1, 0, 0, 0\n};\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imathutility.html"},"IMathUtility"),"\u662f\u4e00\u4e2aSOLIDWORKS API\u5b9e\u7528\u7a0b\u5e8f\u63a5\u53e3\uff0c\u63d0\u4f9b\u57fa\u4e8e\u8f93\u5165\u53c2\u6570\uff08\u5982\u65cb\u8f6c\u89d2\u5ea6\u3001\u5e73\u79fb\u3001\u539f\u59cb\u6570\u636e\uff09\u7684\u53d8\u6362\u7ec4\u5408\u64cd\u4f5c\u7684\u8bbf\u95ee\u3002"),(0,n.kt)("p",null,"\u5728\u8ba1\u7b97\u53d8\u6362\u548c\u5e73\u79fb\u65f6\uff0c\u901a\u5e38\u4f7f\u7528\u4ee5\u4e0b\u63a5\u53e3\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imathvector.html"},"IMathVector")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imathpoint.html"},"IMathPoint"))),(0,n.kt)("p",null,"\u672c\u793a\u4f8b\u5305\u542b\u4e86\u89e3\u4f7f\u7528\u53d8\u6362\u77e9\u9635\u7684\u6587\u7ae0\u548c\u6559\u7a0b\u3002"))}c.isMDXComponent=!0},18035:(t,e,a)=>{a.d(e,{Z:()=>r});const r="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzYuMjc1IDExNC4wNzIiPjxkZWZzPjxtYXJrZXIgaWQ9ImEiIG9yaWVudD0iYXV0byIgb3ZlcmZsb3c9InZpc2libGUiIHJlZlg9IjAiIHJlZlk9IjAiPjxwYXRoIGZpbGw9IiMzOTU3Y2QiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMzk1N2NkIiBzdHJva2Utd2lkdGg9IjEuMDY2NCIgZD0iTS0xMCAwbC00IDRMMCAwbC0xNC00eiIvPjwvbWFya2VyPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDAuMTYgLTUuOTA4KSI+PHJlY3Qgd2lkdGg9IjMxLjc1IiBoZWlnaHQ9IjUxLjM3MyIgeD0iNDAuODIxIiB5PSI2Ny45NDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjMyMyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgZmlsbCBzdHJva2UiIHJ5PSI1Ii8+PHRleHQgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHg9IjQ0LjI3OCIgeT0iMTA0LjYxIiBmaWxsPSIjZTQyMjIyIiBzdHJva2Utd2lkdGg9Ii45MDEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjM2LjA1NyIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHdvcmQtc3BhY2luZz0iMCI+PHRzcGFuIHg9IjQ0LjI3OCIgeT0iMTA0LjYxIj5BPC90c3Bhbj48L3RleHQ+PHRleHQgc3R5bGU9ImxpbmUtaGVpZ2h0OjEuMjUiIHg9IjYzLjIyMSIgeT0iMTQyLjg1OCIgZmlsbD0iI2U0MjIyMiIgc3Ryb2tlLXdpZHRoPSIuOTAxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzNi4wNTciIGZvbnQtd2VpZ2h0PSI0MDAiIGxldHRlci1zcGFjaW5nPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDcuNTg1KSIgd29yZC1zcGFjaW5nPSIwIj48dHNwYW4geD0iNjMuMjIxIiB5PSIxNDIuODU4IiBmaWxsPSIjM2E4NDE3Ij5CPC90c3Bhbj48L3RleHQ+PHJlY3Qgd2lkdGg9IjMxLjc1IiBoZWlnaHQ9IjUxLjM3MyIgeD0iNTkuMjkzIiB5PSIxMDYuMzMyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zMjMiIHBhaW50LW9yZGVyPSJtYXJrZXJzIGZpbGwgc3Ryb2tlIiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ3LjU4NSkiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzOTU3Y2QiIG1hcmtlci1lbmQ9InVybCgjYSkiIGQ9Ik04MC40NCA4OS45MTFjMTIuODU4LTIuMDkzIDI1LjcxNS00LjE4NiAzNS4wMzktMTAuNjc1IDkuMzIzLTYuNDg5IDE1LjExMi0xNy4zNzIgMjAuOTAyLTI4LjI1NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjM3OCAyLjY0NikiLz48dGV4dCBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgeD0iMjIuMjgzIiB5PSIxNDMuMjc0IiBmaWxsPSIjMzk1N2NkIiBzdHJva2Utd2lkdGg9Ii4yNjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwLjU4MyIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjAiIHRyYW5zZm9ybT0icm90YXRlKC0zMy44NjUpIiB3b3JkLXNwYWNpbmc9IjAiPjx0c3BhbiB4PSIyMi4yODMiIHk9IjE0My4yNzQiPnRyYW5zZm9ybTwvdHNwYW4+PC90ZXh0PjwvZz48L3N2Zz4="}}]);