"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[56933],{3905:(M,t,N)=>{N.d(t,{Zo:()=>D,kt:()=>a});var j=N(67294);function i(M,t,N){return t in M?Object.defineProperty(M,t,{value:N,enumerable:!0,configurable:!0,writable:!0}):M[t]=N,M}function u(M,t){var N=Object.keys(M);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);t&&(j=j.filter((function(t){return Object.getOwnPropertyDescriptor(M,t).enumerable}))),N.push.apply(N,j)}return N}function L(M){for(var t=1;t<arguments.length;t++){var N=null!=arguments[t]?arguments[t]:{};t%2?u(Object(N),!0).forEach((function(t){i(M,t,N[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(N)):u(Object(N)).forEach((function(t){Object.defineProperty(M,t,Object.getOwnPropertyDescriptor(N,t))}))}return M}function I(M,t){if(null==M)return{};var N,j,i=function(M,t){if(null==M)return{};var N,j,i={},u=Object.keys(M);for(j=0;j<u.length;j++)N=u[j],t.indexOf(N)>=0||(i[N]=M[N]);return i}(M,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(M);for(j=0;j<u.length;j++)N=u[j],t.indexOf(N)>=0||Object.prototype.propertyIsEnumerable.call(M,N)&&(i[N]=M[N])}return i}var e=j.createContext({}),c=function(M){var t=j.useContext(e),N=t;return M&&(N="function"==typeof M?M(t):L(L({},t),M)),N},D=function(M){var t=c(M.components);return j.createElement(e.Provider,{value:t},M.children)},y="mdxType",l={inlineCode:"code",wrapper:function(M){var t=M.children;return j.createElement(j.Fragment,{},t)}},n=j.forwardRef((function(M,t){var N=M.components,i=M.mdxType,u=M.originalType,e=M.parentName,D=I(M,["components","mdxType","originalType","parentName"]),y=c(N),n=i,a=y["".concat(e,".").concat(n)]||y[n]||l[n]||u;return N?j.createElement(a,L(L({ref:t},D),{},{components:N})):j.createElement(a,L({ref:t},D))}));function a(M,t){var N=arguments,i=t&&t.mdxType;if("string"==typeof M||i){var u=N.length,L=new Array(u);L[0]=n;var I={};for(var e in t)hasOwnProperty.call(t,e)&&(I[e]=t[e]);I.originalType=M,I[y]="string"==typeof M?M:i,L[1]=I;for(var c=2;c<u;c++)L[c]=N[c];return j.createElement.apply(null,L)}return j.createElement.apply(null,N)}n.displayName="MDXCreateElement"},91955:(M,t,N)=>{N.r(t),N.d(t,{assets:()=>e,contentTitle:()=>L,default:()=>l,frontMatter:()=>u,metadata:()=>I,toc:()=>c});var j=N(87462),i=(N(67294),N(3905));const u={title:"SOLIDWORKS PDM Professional API",image:"solidworks-pdm-api.svg",labels:["epdm"],sidebar_position:0},L=void 0,I={unversionedId:"codestack/solidworks-pdm-api/index",id:"codestack/solidworks-pdm-api/index",title:"SOLIDWORKS PDM Professional API",description:"SOLIDWORKS PDM API{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-pdm-api/index.md",sourceDirName:"codestack/solidworks-pdm-api",slug:"/codestack/solidworks-pdm-api/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-pdm-api/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"SOLIDWORKS PDM Professional API",image:"solidworks-pdm-api.svg",labels:["epdm"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"solidworks-pdm-api",permalink:"/solidworks-GPT/zh-Hans/docs/category/solidworks-pdm-api"},next:{title:"getting started",permalink:"/solidworks-GPT/zh-Hans/docs/category/getting-started-1"}},e={},c=[],D={toc:c},y="wrapper";function l(M){let{components:t,...u}=M;return(0,i.kt)(y,(0,j.Z)({},D,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SOLIDWORKS PDM API",src:N(87584).Z,width:"78",height:"41"}),"{ width=250 }"),(0,i.kt)("p",null,"SOLIDWORKS PDM Professional\uff08\u4ee5\u524d\u79f0\u4e3aSOLIDWORKS EPDM\uff09\u662f\u4e00\u79cd\u4ea7\u54c1\u6570\u636e\u7ba1\u7406\u7cfb\u7edf\uff0c\u53ef\u7528\u4e8e\u7ba1\u7406CAD\u6587\u6863\u7684\u751f\u547d\u5468\u671f\u3002"),(0,i.kt)("p",null,"\u4e3b\u8981\u529f\u80fd\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u96c6\u4e2d\u5f0f\u4fdd\u9669\u5e93\u4ee5\u4fdd\u62a4\u6570\u636e\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u5361\u7528\u4e8e\u7ba1\u7406\u5143\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u6d41\u7ba1\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u8bbf\u95ee\u7ba1\u7406"),(0,i.kt)("li",{parentName:"ul"},"BOM\uff08Bill of Materials\uff09\u7ba1\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u5e76\u53d1\u6587\u4ef6\u8bbf\u95ee\u7ba1\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u4e0eSOLIDWORKS\u548c\u5176\u4ed6CAD\u7cfb\u7edf\uff08\u5982AutoCAD\uff0cSolid Edge\uff0cProE\u7b49\uff09\u7684\u96c6\u6210")),(0,i.kt)("p",null,"SOLIDWORKS PDM\u662f\u4e00\u4e2a\u9ad8\u5ea6\u53ef\u914d\u7f6e\u7684\u7cfb\u7edf\uff0c\u53ef\u4ee5\u6839\u636e\u7279\u5b9a\u7684\u4e1a\u52a1\u6d41\u7a0b\u8fdb\u884c\u5b9a\u5236\u3002"),(0,i.kt)("p",null,"SOLIDWORKS PDM API\u63d0\u4f9b\u4e86\u8bbf\u95ee\u5927\u91cfAPI\u63a5\u53e3\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u6269\u5c55PDM\u7684\u529f\u80fd\u3002\u8fd9\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u521b\u5efa\u81ea\u52a8\u5316\u4efb\u52a1\u63d2\u4ef6\uff0c\u5e76\u80fd\u591f\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5e8f\u5217\u53f7\u63d2\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7SOLIDWORKS PDM\u94a9\u5b50\u5904\u7406\u5404\u79cd\u4e8b\u4ef6\uff1a\u6587\u4ef6\u7b7e\u5165/\u7b7e\u51fa\uff0c\u5de5\u4f5c\u6d41\u66f4\u6539\u7b49"),(0,i.kt)("li",{parentName:"ul"},"\u6269\u5c55\u83dc\u5355\u548c\u5de5\u5177\u680f")),(0,i.kt)("p",null,"\u672c\u8282\u5305\u542b\u4e86\u6700\u5e38\u89c1\u7684SOLIDWORKS PDM API\u529f\u80fd\u7684\u6559\u7a0b\u3001\u4ee3\u7801\u793a\u4f8b\u548c\u7247\u6bb5\u3002"))}l.isMDXComponent=!0},87584:(M,t,N)=>{N.d(t,{Z:()=>j});const j="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNzguMzMyIDQxLjEzMSI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJjIiBjeD0iOTUuOTExIiBjeT0iODguNjQxIiByPSIzMy45NDYiIGZ4PSI5NS45MTEiIGZ5PSI4OC42NDEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMS4xMzI1IC43MzI2NyAtLjU0MzE4IC44Mzk2MSAzNS40NCAtNTYuMDU0KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNhIi8+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmM2ZiZmYiLz48c3RvcCBvZmZzZXQ9Ii4yMzgiIHN0b3AtY29sb3I9IiM0ZWFmZjMiLz48c3RvcCBvZmZzZXQ9Ii42NzciIHN0b3AtY29sb3I9IiMzMzcwZTIiLz48c3RvcCBvZmZzZXQ9Ii45MDMiIHN0b3AtY29sb3I9IiMyNTRjZDYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyNTlmZjIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9Ijg3LjEyOCIgeDI9IjEyMS42MTMiIHkxPSI2OS4wNDUiIHkyPSI5My45MDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjYiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZGJkYmRiIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImUiIHgxPSI4Ny4xMjgiIHgyPSIxMjEuNjEzIiB5MT0iNjkuMDQ1IiB5Mj0iOTMuOTAxIiBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKDE4MCAxMDUuMTQzIDEwMS4wNzkpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2IiLz48L2RlZnM+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLjUxOTEzIDAgMCAuNTE5MTMgLTM1LjgzOCAtMzEuOTA3KSI+PGNpcmNsZSBjeD0iMTA1LjE3MiIgY3k9IjEwMC4wMTgiIHI9IjMzLjk0NiIgZmlsbD0idXJsKCNjKSIvPjxwYXRoIGZpbGw9InVybCgjZCkiIHN0cm9rZT0iIzcxNzE3MSIgc3Ryb2tlLW9wYWNpdHk9Ii44MiIgZD0iTTY5LjkyIDk0LjgzNGMtLjA5Ny0uMTU2LS4yNDgtMS41Ny0uMzM4LTMuMTQ0LS40My03LjU4NyAxLjk4OC0xNC4yNDEgNy4wNTItMTkuNDA2IDMuNTg0LTMuNjU1IDcuNjI2LTYuMDEgMTIuMzM2LTcuMTg3IDMuMDg1LS43NzIgOC44NTgtLjgzNyAxMS40NzctLjEzIDMuMzU2LjkwNSA2LjY5MiAyLjc5NSA5Ljk2MiA1LjY0My44OTYuNzggMS43NDggMS40MTggMS44OTMgMS40MTguMTQ2IDAgMi4zLTIuMSA0Ljc4OC00LjY2Nmw0LjUyMy00LjY2NVY5My45bC0yLjcxMi0uMDljLTMuNzYtLjEyNy0yNC4xNDMtLjYxOC0yNS41OTQtLjYxN2gtMS4xODZsMi45MDgtMi45NzZjMS42LTEuNjM3IDMuNjc1LTMuNzc4IDQuNjEyLTQuNzU2bDEuNzA0LTEuNzgtLjY0Mi0uNjgzYy0yLjYzLTIuNzk5LTcuNzUzLTQuMjA1LTEzLjAyMi0zLjU3My01LjYyLjY3My04LjA5IDEuODMzLTExLjgzNSA1LjU1OC0yLjExMyAyLjEwMi0zLjI4NyA0LjAyNC00LjkwNCA4LjAzMS0uNDY2IDEuMTU2LS45MjYgMS45NzQtMS4wMjIgMS44MTl6Ii8+PHBhdGggZmlsbD0idXJsKCNlKSIgc3Ryb2tlPSIjNzE3MTcxIiBzdHJva2Utb3BhY2l0eT0iLjgyIiBkPSJNMTQwLjM2NyAxMDcuMzIzYy4wOTYuMTU2LjI0OCAxLjU3LjMzNyAzLjE0NC40MyA3LjU4Ny0xLjk4OCAxNC4yNDEtNy4wNTIgMTkuNDA2LTMuNTgzIDMuNjU1LTcuNjI1IDYuMDEtMTIuMzM1IDcuMTg3LTMuMDg1Ljc3Mi04Ljg1OC44MzctMTEuNDc3LjEzLTMuMzU2LS45MDUtNi42OTItMi43OTUtOS45NjMtNS42NDMtLjg5NS0uNzgtMS43NDctMS40MTgtMS44OTItMS40MTgtLjE0NiAwLTIuMyAyLjEtNC43ODggNC42NjZsLTQuNTI0IDQuNjY1di0zMS4yMDRsMi43MTIuMDljMy43NjEuMTI3IDI0LjE0My42MTggMjUuNTk0LjYxN2gxLjE4N2wtMi45MDggMi45NzZhODQ1Ljk4NSA4NDUuOTg1IDAgMCAwLTQuNjEyIDQuNzU2bC0xLjcwNCAxLjc4LjY0MS42ODNjMi42MyAyLjc5OSA3Ljc1NCA0LjIwNSAxMy4wMjMgMy41NzMgNS42Mi0uNjczIDguMDg5LTEuODMzIDExLjgzNC01LjU1OCAyLjExNC0yLjEwMiAzLjI4OC00LjAyNCA0LjkwNS04LjAzMS40NjYtMS4xNTYuOTI2LTEuOTc0IDEuMDIyLTEuODE5eiIvPjwvZz48cGF0aCBzdHlsZT0ibGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDA7dGV4dC10cmFuc2Zvcm06bm9uZTt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO3NvbGlkLWNvbG9yOiMwMDA7c29saWQtb3BhY2l0eToxIiBmaWxsPSIjMjk1N2RhIiBkPSJNNDYuNDI2IDYuMzg3YTMuODE0IDMuODE0IDAgMCAwLTMuNzk5IDMuNzk5djE5Ljc0MmMwIDIuMDg3IDEuNzEzIDMuODAxIDMuOCAzLjgwMWgyOC4xMDZjMi4wODcgMCAzLjgtMS43MTQgMy44LTMuOFYxMC4xODVjMC0uNzE0LS4yMDEtMS4zODUtLjU1LTEuOTU3di0uMTIxaC0uMDc2YTMuODA2IDMuODA2IDAgMCAwLTMuMTc0LTEuNzIxem0yMy42MzQgMi40N2g1Ljc5OHY0LjQ5SDcwLjA2em0tOS4zNjcuOTY5aDcuNjM4djIuNTU0aC03LjYzOHptLTE1LjkxIDYuODYxaDMxLjM5NXYxMy4yNDFjMCAuOTMtLjcxNSAxLjY0NS0xLjY0NSAxLjY0NUg0Ni40MjZjLS45MyAwLTEuNjQzLS43MTUtMS42NDMtMS42NDV6IiBjb2xvcj0iIzAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI0MDAiIG92ZXJmbG93PSJ2aXNpYmxlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIxLjE3NyIgZD0iTTY5Ljg5NSAxOC43MzNjLS4yOCAwLS41Ni4wMzUtLjgzLjA3Ni0uMDQyLjY4OS0uMTUgMS4zNi0uNzIxIDEuNTk3LS41NzIuMjM3LTEuMTEtLjE3MS0xLjYyNy0uNjMtLjQ1My4zMzEtLjg2Ny43My0xLjE5OCAxLjE4My40Ni41Mi44ODMgMS4wNTMuNjQ1IDEuNjI3LS4yMzcuNTczLS45Mi42OC0xLjYxMi43MjJhNS4zOTIgNS4zOTIgMCAwIDAtLjA2MS44MjljMCAuMjg3LjAxOC41Ny4wNi44NDQuNjkyLjA0MyAxLjM3Ni4xMTggMS42MTMuNjkxLjIzOC41NzQtLjE4NSAxLjEzOS0uNjQ1IDEuNjU4LjMzLjQ1Ljc0OC44MzggMS4xOTggMS4xNjcuNTE2LS40NTYgMS4wNTctLjg1IDEuNjI3LS42MTQuNTczLjIzNy42OC45MDUuNzIyIDEuNTk3YTUuNTE4IDUuNTE4IDAgMCAwIDEuNjQyIDBjLjA0My0uNjkyLjE0OS0xLjM2LjcyMi0xLjU5Ny41Ny0uMjM2IDEuMTExLjE1OCAxLjYyNy42MTQuNDUtLjMyOS44NjgtLjcxOCAxLjE5OC0xLjE2Ny0uNDYtLjUyLS44ODMtMS4wODQtLjY0NS0xLjY1OC4yMzctLjU3My45MzYtLjY0OCAxLjYyNy0uNjlhNS40NiA1LjQ2IDAgMCAwIC4wNjItLjg0NWMwLS4yODMtLjAyLS41NTgtLjA2Mi0uODMtLjY5MS0uMDQyLTEuMzktLjE0OC0xLjYyNy0uNzItLjIzOC0uNTc1LjE4NS0xLjEwOS42NDUtMS42MjhhNS41MDMgNS41MDMgMCAwIDAtMS4xOTgtMS4xODJjLS41MTguNDU4LTEuMDU1Ljg2Ni0xLjYyNy42My0uNTctLjIzNy0uNjc5LS45MS0uNzIyLTEuNTk4YTUuMzEzIDUuMzEzIDAgMCAwLS44MTMtLjA3NnptMCAzLjYzOGMuOTc2IDAgMS43NjUuNzkgMS43NjUgMS43NjZzLS43ODkgMS43NjUtMS43NjUgMS43NjVjLS45NzcgMC0xLjc4MS0uNzg5LTEuNzgxLTEuNzY1IDAtLjk3Ny44MDQtMS43NjYgMS43OC0xLjc2NnoiIGNvbG9yPSIjMDAwIi8+PGcgYXJpYS1sYWJlbD0iQVBJIiBzdHlsZT0ibGluZS1oZWlnaHQ6MS4yNSIgZmlsbD0iI2M5MjQxYyIgc3Ryb2tlLXdpZHRoPSIxLjQ2OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTcuNjM5IiBmb250LXdlaWdodD0iNzAwIiBsZXR0ZXItc3BhY2luZz0iMCIgd29yZC1zcGFjaW5nPSIwIj48cGF0aCBkPSJNNTAuMjQ4IDI2LjU0NWgtMi44MjNsLS40NDUgMS4yNzZoLTEuODE1bDIuNTkzLTdoMi4xNTJsMi41OTMgN0g1MC42OXptLTIuMzczLTEuMjk4aDEuOTE4bC0uOTU3LTIuNzg2ek01My40MjcgMjAuODJoMi45OTZxMS4zMzcgMCAyLjA1LjU5Ni43MTcuNTkuNzE3IDEuNjg4IDAgMS4xMDItLjcxOCAxLjY5Ny0uNzEyLjU5LTIuMDQ5LjU5aC0xLjE5djIuNDNoLTEuODA2em0xLjgwNSAxLjMwOHYxLjk1NmguOTk5cS41MjUgMCAuODExLS4yNTQuMjg2LS4yNTcuMjg2LS43MjYgMC0uNDctLjI4Ni0uNzIyLS4yODYtLjI1NC0uODExLS4yNTR6TTYwLjQ2IDIwLjgyaDEuODA2djdINjAuNDZ6IiBzdHlsZT0iLWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonc2Fucy1zZXJpZiBCb2xkJyIvPjwvZz48L3N2Zz4="}}]);