"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[80355],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>d});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function I(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),m=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=I(e,["components","mdxType","originalType","parentName"]),p=m(i),o=n,d=p["".concat(c,".").concat(o)]||p[o]||N[o]||l;return i?a.createElement(d,r(r({ref:t},u),{},{components:i})):a.createElement(d,r({ref:t},u))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,r=new Array(l);r[0]=o;var I={};for(var c in t)hasOwnProperty.call(t,c)&&(I[c]=t[c]);I.originalType=e,I[p]="string"==typeof e?e:n,r[1]=I;for(var m=2;m<l;m++)r[m]=i[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}o.displayName="MDXCreateElement"},37198:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>N,frontMatter:()=>l,metadata:()=>I,toc:()=>m});var a=i(87462),n=(i(67294),i(3905));const l={title:"SOLIDWORKS Document Manager API\u7b80\u4ecb",caption:"Document Manager API"},r=void 0,I={unversionedId:"codestack/solidworks-document-manager-api/index",id:"codestack/solidworks-document-manager-api/index",title:"SOLIDWORKS Document Manager API\u7b80\u4ecb",description:"\u5305\u542b\u4f7f\u7528SOLIDWORKS Document Manager\u5e93\u7684\u793a\u4f8b\u548c\u6587\u7ae0\u7684\u96c6\u5408",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-document-manager-api/index.md",sourceDirName:"codestack/solidworks-document-manager-api",slug:"/codestack/solidworks-document-manager-api/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-document-manager-api/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS Document Manager API\u7b80\u4ecb",caption:"Document Manager API"},sidebar:"tutorialSidebar",previous:{title:"\u5728SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u4e2d\u5229\u7528\u4e3b\u8981\u7684ISwDMApplication\u5e94\u7528\u7a0b\u5e8f\u5bf9\u8c61",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/application/"},next:{title:"edrawings-api",permalink:"/solidworks-GPT/zh-Hans/docs/category/edrawings-api"}},c={},m=[{value:"\u4f18\u52bf",id:"\u4f18\u52bf",level:2},{value:"\u652f\u6301\u7684\u529f\u80fd",id:"\u652f\u6301\u7684\u529f\u80fd",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2}],u={toc:m},p="wrapper";function N(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5305\u542b\u4f7f\u7528SOLIDWORKS Document Manager\u5e93\u7684\u793a\u4f8b\u548c\u6587\u7ae0\u7684\u96c6\u5408\nimage: document-manager-api.svg\nlabels: ","[document manager]","\nredirect-from:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/2018/04/document-manager-api-getting-started.html\nsidebar_position: 0")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SOLIDWORKS Document Manager API",src:i(10742).Z,width:"31",height:"40"}),"{ width=150 }"),(0,n.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86SOLIDWORKS Document Manager API\uff0c\u8fd9\u662f\u7531SOLIDWORKS\u63d0\u4f9b\u7684\u529f\u80fd\u5f3a\u5927\u7684\u72ec\u7acb\u5e93\uff0c\u53ef\u4ee5\u516c\u5f00API\u5e76\u5141\u8bb8\u76f4\u63a5\u4eceSOLIDWORKS\u6587\u4ef6\u6d41\u4e2d\u8bfb\u53d6\u548c\u5199\u5165\u5143\u6570\u636e\u3002"),(0,n.kt)("h2",{id:"\u4f18\u52bf"},"\u4f18\u52bf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u8ba2\u9605\u7684\u5ba2\u6237\u6216SOLIDWORKS\u5408\u4f5c\u4f19\u4f34\uff08\u7814\u7a76\u3001\u89e3\u51b3\u65b9\u6848\u6216\u9ec4\u91d1\uff09\uff0c\u514d\u8d39\u63d0\u4f9b"),(0,n.kt)("li",{parentName:"ul"},"\u8f7b\u91cf\u7ea7 - \u5e93\u7684\u5927\u5c0f\u7ea6\u4e3a13 MB"),(0,n.kt)("li",{parentName:"ul"},"\u72ec\u7acb - \u4e0d\u9700\u8981\u5b89\u88c5SOLIDWORKS\u5373\u53ef\u8bbf\u95ee\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u5feb\u901f - \u76f4\u63a5\u4ece\u6d41\u4e2d\u8bbf\u95ee\u6570\u636e\uff0c\u65e0\u9700\u5c06\u5b8c\u6574\u6587\u4ef6\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d")),(0,n.kt)("h2",{id:"\u652f\u6301\u7684\u529f\u80fd"},"\u652f\u6301\u7684\u529f\u80fd"),(0,n.kt)("p",null,"\u4e0e\u5b8c\u6574\u7684SOLIDWORKS API\u76f8\u6bd4\uff0cDocument Manager\u7684\u529f\u80fd\u6709\u9650\u3002\u4ee5\u4e0b\u662fDocument Manager\u5e93\u652f\u6301\u7684\u4e3b\u8981\u6a21\u5757\u5217\u8868\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u57fa\u672c\u529f\u80fd"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u53d6/\u5199\u5165\u81ea\u5b9a\u4e49\u5c5e\u6027\uff08\u5305\u62ec\u914d\u7f6e\u7279\u5b9a\u548c\u6458\u8981\u4fe1\u606f\uff09",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u6587\u4ef6\u5173\u7cfb\uff08\u88c5\u914d\u4ef6\u6e05\u5355\u548c\u56fe\u7eb8\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u66ff\u6362\u6587\u4ef6\u5173\u7cfb\uff08\u7ec4\u4ef6\u548c\u56fe\u7eb8\u89c6\u56fe\u5f15\u7528\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u88c5\u914d\u4ef6\u4e2d\u7684\u7ec4\u4ef6\u53d8\u6362"),(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u6a21\u578b\u548c\u56fe\u7eb8\u4e2d\u7684\u8868\u683c\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u53d6",(0,n.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2015/english/api/sldworksapiprogguide/overview/third-party_data_in_solidworks_files.htm"},"\u7b2c\u4e09\u65b9\u5b58\u50a8\u6570\u636e")),(0,n.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u6709\u5173\u914d\u7f6e\u3001\u56fe\u7eb8\u89c6\u56fe\u53ca\u5176\u5c5e\u6027\u7684\u4fe1\u606f"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9884\u89c8\u529f\u80fd"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4ece\u6587\u4ef6\u548c\u914d\u7f6e\u83b7\u53d62D\u56fe\u50cf\u9884\u89c8"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DimXpert\u529f\u80fd"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bbf\u95eeDimXpert\u5c3a\u5bf8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bbf\u95eeDimXpert\u7279\u5f81"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u51e0\u4f55\u6d41\u529f\u80fd"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u83b7\u53d6Parasolid\u51e0\u4f55\u4f53"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"XML\u6d41\u529f\u80fd"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u5d4c\u5165\u5f0f\u88c5\u914dXML\u6570\u636e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u53d63D Content Central\u6570\u636e"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u66f2\u9762\u7ec6\u5206\u529f\u80fd"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u66f2\u9762\u7ec6\u5206\uff08\u4e09\u89d2\u5316\uff09\u6570\u636e\uff08\u5982\u679c\u5b58\u50a8\u5728\u6a21\u578b\u4e2d\uff09")))),(0,n.kt)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,n.kt)("p",null,"\u4f7f\u7528SOLIDWORKS Document Manager API\u53ef\u4ee5\u5f00\u53d1\u7684\u53ef\u80fd\u5e94\u7528\u7a0b\u5e8f\u5217\u8868\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4ee5\u4e0b\u7c7b\u578b\u7684\u8f6f\u4ef6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4ea7\u54c1\u6570\u636e\u7ba1\u7406\uff08PDM\uff09\u6216\u4ea7\u54c1\u751f\u547d\u5468\u671f\u7ba1\u7406\uff08PLM\uff09\u5e94\u7528\u7a0b\u5e8f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7269\u6599\u6e05\u5355",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9884\u89c8"),(0,n.kt)("li",{parentName:"ul"},"\u5c5e\u6027"))))),(0,n.kt)("li",{parentName:"ul"},"SOLIDWORKS\u6587\u4ef6\u76843D\u67e5\u770b\u5668"),(0,n.kt)("li",{parentName:"ul"},"\u5177\u6709\u5bfc\u5165SOLIDWORKS\u6587\u4ef6\u8981\u6c42\u7684CAD\u7cfb\u7edf"),(0,n.kt)("li",{parentName:"ul"},"\u5177\u6709\u8bbf\u95eeDimXpert\u6570\u636e\u8981\u6c42\u7684\u68c0\u6d4b\u8f6f\u4ef6")),(0,n.kt)("p",null,"\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"getting-started"},"\u5165\u95e8\u6307\u5357"),"\u6587\u7ae0\uff0c\u4e86\u89e3\u4f7f\u7528Document Manager\u8fdb\u884c\u5f00\u53d1\u6240\u9700\u7684\u6b65\u9aa4\u6982\u8ff0\u3002"))}N.isMDXComponent=!0},10742:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzAuNTU2IDQwLjQ5NyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJmIiBjeD0iODEuNzkiIGN5PSIxMDAuMzIiIHI9IjQ0LjQyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC43MDU5OCAtLjU2MyAuNjI2NTYgLjc4NTY4IC05MS4yNjEgNTguOCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjYSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZGJkYmRiIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIzMy44MjQiIHgyPSI0NC41NTYiIHkxPSI1Ni43NDEiIHkyPSI1Ni43NDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjYiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjYWNhNGE0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWVlIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iaCIgY3g9IjIxOS42MDgiIGN5PSIxOTguNjEzIiByPSI4Mi4yNzQiIGZ4PSIyMTkuNjA4IiBmeT0iMTk4LjYxMyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAuNjA4MDYgMCA1Ny4wNDgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2MiLz48bGluZWFyR3JhZGllbnQgaWQ9ImMiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2VlZWU1NyIvPjxzdG9wIG9mZnNldD0iLjY0OSIgc3RvcC1jb2xvcj0iI2YyZjY1NCIgc3RvcC1vcGFjaXR5PSIuNDk4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNWRiNTUwIiBzdG9wLW9wYWNpdHk9Ii45MTQiLz48L2xpbmVhckdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iaSIgY3g9IjIxOS42MDgiIGN5PSIxOTguNjEzIiByPSI4Mi4yNzQiIGZ4PSIyMTkuNjA4IiBmeT0iMTk4LjYxMyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAuNjA4MDYgMCA1Ny4wNDgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2MiLz48bGluZWFyR3JhZGllbnQgaWQ9ImoiIHgxPSI4NC4xNTMiIHgyPSIxMDMuNzM0IiB5MT0iMzE2Ljk2NyIgeTI9IjMyNS40OTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjZCIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWVlZTU3Ii8+PHN0b3Agb2Zmc2V0PSIuMjYyIiBzdG9wLWNvbG9yPSIjZWVmMjY0IiBzdG9wLW9wYWNpdHk9Ii40OTgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiNWIwNTAiIHN0b3Atb3BhY2l0eT0iLjkxNCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJrIiB4MT0iLTg2Mi45MTYiIHgyPSItODIxLjg3OCIgeTE9IjcwLjc3MyIgeTI9IjMwLjU3NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNlIi8+PGxpbmVhckdyYWRpZW50IGlkPSJlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyOTk5M2EiLz48c3RvcCBvZmZzZXQ9Ii41MTkiIHN0b3AtY29sb3I9IiMyY2NiMDAiIHN0b3Atb3BhY2l0eT0iLjQ3OCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOWExOCIgc3RvcC1vcGFjaXR5PSIuOTYxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCNmKSIgc3Ryb2tlPSIjMDMwMzAzIiBzdHJva2Utb3BhY2l0eT0iLjgyIiBzdHJva2Utd2lkdGg9Ii4yNjUiIGQ9Ik0xNC4xODkgNTEuMzR2NDAuMjMySDQ0LjQ4VjYyLjE5N0wzMy45MzIgNTEuMzR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQuMDU2IC01MS4yMDcpIi8+PHBhdGggZmlsbD0idXJsKCNnKSIgc3Ryb2tlPSIjMDMwMzAzIiBzdHJva2Utb3BhY2l0eT0iLjgyIiBzdHJva2Utd2lkdGg9Ii4yNjUiIGQ9Ik0zNS45MTYgNTkuNTI5bC4wNDYtMi44NDdjLjAyMy0yLjI1LS45NS0zLjgyLTIuMDMtNS4zNDJsMTAuNTI5IDEwLjc4M2MtMS4zODctLjkwMi0yLjkwNS0yLjQ0Ny01LjM3NC0yLjUyN3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNC4wNTYgLTUxLjIwNykiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM1MTUxNTEiIHN0cm9rZS1vcGFjaXR5PSIuODY4IiBzdHJva2Utd2lkdGg9Ii40MzEiIGQ9Ik0yLjA1OCA1LjQ5NmgxNi4xMjFNMi4wNTggMTAuNTRoMTYuMTIxIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTE1MTUxIiBzdHJva2Utb3BhY2l0eT0iLjg2OCIgc3Ryb2tlLXdpZHRoPSIuNTQiIGQ9Ik0yLjA1OCAxNS42MzdIMjcuNE0yLjA1OCAzNi4yNDdIMjcuNCIvPjxnIHN0cm9rZS13aWR0aD0iMS44MyI+PHBhdGggZmlsbD0idXJsKCNqKSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii4zNjkiIGQ9Ik04NC4xNTMgMzA4Ljg3djguMDk3aC04LjI2N3Y4LjUyNGgyNy44NDh2LTguNTI0aC04LjI2OHYtOC4wOThIODkuODF6IiB0cmFuc2Zvcm09Im1hdHJpeCguODcxMSAwIDAgLjg3MTEgLTYzLjcwMyAtMjUwLjc2NCkiLz48cGF0aCBmaWxsPSJ1cmwoI2spIiBzdHJva2U9IiMwMDAiIGQ9Ik0tODYyLjkxNiA3MC43NzNoNDEuMDM4VjMwLjU3N2gtNDAuNjV6IiB0cmFuc2Zvcm09Im1hdHJpeCguMTc1NSAwIDAgLjE3NTUgMTUzLjgzNiAxMi45MjcpIi8+PC9nPjwvc3ZnPg=="}}]);