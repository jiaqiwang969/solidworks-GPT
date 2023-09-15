"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[34567],{3905:(M,I,i)=>{i.d(I,{Zo:()=>c,kt:()=>n});var t=i(67294);function j(M,I,i){return I in M?Object.defineProperty(M,I,{value:i,enumerable:!0,configurable:!0,writable:!0}):M[I]=i,M}function N(M,I){var i=Object.keys(M);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(M);I&&(t=t.filter((function(I){return Object.getOwnPropertyDescriptor(M,I).enumerable}))),i.push.apply(i,t)}return i}function u(M){for(var I=1;I<arguments.length;I++){var i=null!=arguments[I]?arguments[I]:{};I%2?N(Object(i),!0).forEach((function(I){j(M,I,i[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(i)):N(Object(i)).forEach((function(I){Object.defineProperty(M,I,Object.getOwnPropertyDescriptor(i,I))}))}return M}function g(M,I){if(null==M)return{};var i,t,j=function(M,I){if(null==M)return{};var i,t,j={},N=Object.keys(M);for(t=0;t<N.length;t++)i=N[t],I.indexOf(i)>=0||(j[i]=M[i]);return j}(M,I);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);for(t=0;t<N.length;t++)i=N[t],I.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(M,i)&&(j[i]=M[i])}return j}var D=t.createContext({}),L=function(M){var I=t.useContext(D),i=I;return M&&(i="function"==typeof M?M(I):u(u({},I),M)),i},c=function(M){var I=L(M.components);return t.createElement(D.Provider,{value:I},M.children)},y="mdxType",o={inlineCode:"code",wrapper:function(M){var I=M.children;return t.createElement(t.Fragment,{},I)}},e=t.forwardRef((function(M,I){var i=M.components,j=M.mdxType,N=M.originalType,D=M.parentName,c=g(M,["components","mdxType","originalType","parentName"]),y=L(i),e=j,n=y["".concat(D,".").concat(e)]||y[e]||o[e]||N;return i?t.createElement(n,u(u({ref:I},c),{},{components:i})):t.createElement(n,u({ref:I},c))}));function n(M,I){var i=arguments,j=I&&I.mdxType;if("string"==typeof M||j){var N=i.length,u=new Array(N);u[0]=e;var g={};for(var D in I)hasOwnProperty.call(I,D)&&(g[D]=I[D]);g.originalType=M,g[y]="string"==typeof M?M:j,u[1]=g;for(var L=2;L<N;L++)u[L]=i[L];return t.createElement.apply(null,u)}return t.createElement.apply(null,i)}e.displayName="MDXCreateElement"},55503:(M,I,i)=>{i.r(I),i.d(I,{assets:()=>D,contentTitle:()=>u,default:()=>o,frontMatter:()=>N,metadata:()=>g,toc:()=>L});var t=i(87462),j=(i(67294),i(3905));const N={title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u52a8\u5316\u8fd0\u52a8\u7814\u7a76",image:"motion-study.svg",sidebar_position:10},u=void 0,g={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/motion-study/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/motion-study/index",title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u52a8\u5316\u8fd0\u52a8\u7814\u7a76",description:"SOLIDWORKS\u8fd0\u52a8\u7814\u7a76API{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/motion-study/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/motion-study",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/motion-study/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/motion-study/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/motion-study/index.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u52a8\u5316\u8fd0\u52a8\u7814\u7a76",image:"motion-study.svg",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\u624b\u52a8\u6ce8\u518c\u5b89\u88c5SOLIDWORKS\u63d2\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/deployment/manual/"},next:{title:"Macro animates switching of configurations using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/motion-study/animate-configurations/"}},D={},L=[],c={toc:L},y="wrapper";function o(M){let{components:I,...N}=M;return(0,j.kt)(y,(0,t.Z)({},c,N,{components:I,mdxType:"MDXLayout"}),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"SOLIDWORKS\u8fd0\u52a8\u7814\u7a76API",src:i(14974).Z,width:"38",height:"37"}),"{ width=250 }"),(0,j.kt)("p",null,"SOLIDWORKS\u8fd0\u52a8\u7814\u7a76API\u63d0\u4f9b\u4e86\u5355\u72ec\u7684",(0,j.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/swmotionstudyapi/SolidWorks.Interop.swmotionstudy~SolidWorks.Interop.swmotionstudy_namespace.html"},"SwMotionStudy"),"\u5e93\u4e2d\u7684\u7279\u5b9a\u63a5\u53e3\u3002\u5982\u679c\u9700\u8981\u4f7f\u7528",(0,j.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/variables/declaration#early-binding-and-late-binding"},"\u65e9\u671f\u7ed1\u5b9a"),"\uff0c\u5219\u9700\u8981\u663e\u5f0f\u6dfb\u52a0\u5bf9\u8be5\u5e93\u7684\u5f15\u7528\u3002"),(0,j.kt)("p",null,"\u57fa\u672c\u63a5\u53e3",(0,j.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/swmotionstudyapi/SolidWorks.Interop.swmotionstudy~SolidWorks.Interop.swmotionstudy.IMotionStudyManager.html"},"IMotionStudyManager"),"\u53ef\u4ee5\u901a\u8fc7",(0,j.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDocExtension~GetMotionStudyManager.html"},"SOLIDWORKS API\u65b9\u6cd5IModelDocExtension::GetMotionStudyManager"),"\u8fdb\u884c\u8bbf\u95ee\u3002"),(0,j.kt)("p",null,"\u672c\u8282\u5305\u542b\u4e86\u4f7f\u7528API\u81ea\u52a8\u5316SOLIDWORKS\u4e2d\u7684\u8fd0\u52a8\u7814\u7a76\u7684\u5b8f\u548c\u4ee3\u7801\u793a\u4f8b\u3002"))}o.isMDXComponent=!0},14974:(M,I,i)=>{i.d(I,{Z:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzcuNTA3IDM3LjMxOCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii42NzkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iLjMzMyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDI9IjAiIHkxPSIzLjEiIHkyPSIxMjIuOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM4ODhhODUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiYWJkYjYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iIzg4OGE4NSIvPjxzdG9wIG9mZnNldD0iLjc4IiBzdG9wLWNvbG9yPSIjNTU1NzUzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMmUzNDM2Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImUiPjxzdG9wIHN0b3AtY29sb3I9IiMyZTM0MzYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyZTM0MzYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIj48c3RvcCBzdG9wLWNvbG9yPSIjZWVlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDJkMmQyIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImciPjxzdG9wLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iLjUzNiIvPjwvbGluZWFyR3JhZGllbnQ+PG1hcmtlciBpZD0icCIgb3JpZW50PSJhdXRvIiBvdmVyZmxvdz0idmlzaWJsZSIgcmVmWD0iMCIgcmVmWT0iMCI+PHBhdGggZmlsbD0iIzQ4OTg1ZCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiM0ODk4NWQiIHN0cm9rZS13aWR0aD0iLjUzMzIiIGQ9Ik00IDBsMi0yLTcgMiA3IDJ6Ii8+PC9tYXJrZXI+PG1hcmtlciBpZD0ibyIgb3JpZW50PSJhdXRvIiBvdmVyZmxvdz0idmlzaWJsZSIgcmVmWD0iMCIgcmVmWT0iMCI+PHBhdGggZmlsbD0iI2QzMmQyZCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiNkMzJkMmQiIHN0cm9rZS13aWR0aD0iLjUzMzIiIGQ9Ik00IDBsMi0yLTcgMiA3IDJ6Ii8+PC9tYXJrZXI+PHJhZGlhbEdyYWRpZW50IGlkPSJuIiBjeD0iMjQuMDM0IiBjeT0iMjQiIHI9IjIzLjg1NyIgZng9IjI0LjAzNCIgZnk9IjI0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC4xNTAzNyAwIDAgLjE1MDM3IDc1LjUxMyAxNDcuMDMzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNoIi8+PGxpbmVhckdyYWRpZW50IGlkPSJoIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN2M3YzdjIi8+PC9saW5lYXJHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9Im0iIGN4PSIyNC4wMzQiIGN5PSIyNCIgcj0iMjMuODU3IiBmeD0iMjQuMDM0IiBmeT0iMjQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjE1MDM3IDAgMCAuMTUwMzcgNzEuODE3IDE0MS4zNzYpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2giLz48cmFkaWFsR3JhZGllbnQgaWQ9ImwiIGN4PSIyNC4wMzQiIGN5PSIyNCIgcj0iMjMuODU3IiBmeD0iMjQuMDM0IiBmeT0iMjQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjMxNzM4IDAgMCAuMzE3MzggNTIuOTA1IDE1NC44MzcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2kiLz48bGluZWFyR3JhZGllbnQgaWQ9ImkiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzMzgyYmEiLz48L2xpbmVhckdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iayIgY3g9IjI0LjAzNCIgY3k9IjI0IiByPSIyMy44NTciIGZ4PSIyNC4wMzQiIGZ5PSIyNCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguMzE3MzggMCAwIC4zMTczOCA0NS4yMzkgMTQzLjAyOCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjaCIvPjxyYWRpYWxHcmFkaWVudCBpZD0iaiIgY3g9IjI0LjAzNCIgY3k9IjI0IiByPSIyMy44NTciIGZ4PSIyNC4wMzQiIGZ5PSIyNCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguMzE3MzggMCAwIC4zMTczOCA1Ny4wNTYgMTM1LjIzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNoIi8+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjaikiIHN0cm9rZT0iIzBmMjYwZiIgc3Ryb2tlLXdpZHRoPSIuMTIiIGQ9Ik02NC42ODYgMTM1LjI3NmMtLjQzNyAwLS44NjUuMDQtMS4yODIuMTFsLS4yMDMgMi4xNTRjLS40My4xMi0uODM4LjI4OC0xLjIyLjUwM2wtMS42NjQtMS4zNzVhNy42MDcgNy42MDcgMCAwIDAtMS44MTYgMS44MTJsMS4zNzggMS42NjVhNS40OCA1LjQ4IDAgMCAwLS41MDYgMS4yMmwtMi4xNS4yMDNhNy41OTkgNy41OTkgMCAwIDAgMCAyLjU2NGwyLjE1LjIwM2MuMTIuNDMuMjkyLjgzOC41MDYgMS4yMmwtMS4zNzQgMS42NjRhNy42MTUgNy42MTUgMCAwIDAgMS44MDkgMS44MTJsMS42NjctMS4zNzhjLjM4Mi4yMTUuNzg5LjM4NiAxLjIyLjUwNmwuMjAzIDIuMTU0Yy40MTcuMDcuODQ1LjEwNyAxLjI4Mi4xMDcuNDM3IDAgLjg2Mi0uMDM2IDEuMjc4LS4xMDdsLjIwNC0yLjE1NGE1LjQ2IDUuNDYgMCAwIDAgMS4yMi0uNTA2bDEuNjY3IDEuMzc4YTcuNjE3IDcuNjE3IDAgMCAwIDEuODA5LTEuODEybC0xLjM3NS0xLjY2NWMuMjE1LS4zOC4zODctLjc5LjUwNy0xLjIybDIuMTUtLjIwM2MuMDcxLS40MTcuMTEtLjg0NC4xMS0xLjI4MSAwLS40MzctLjA0LS44NjYtLjExLTEuMjgybC0yLjE1LS4yMDRhNS40OCA1LjQ4IDAgMCAwLS41MDctMS4yMmwxLjM3OC0xLjY2NGE3LjYxMSA3LjYxMSAwIDAgMC0xLjgxNi0xLjgxMmwtMS42NjQgMS4zNzVhNS40NTkgNS40NTkgMCAwIDAtMS4yMi0uNTAzbC0uMjAzLTIuMTU0YTcuNTg1IDcuNTg1IDAgMCAwLTEuMjc4LS4xMXptMCA0LjY5YTIuODgxIDIuODgxIDAgMCAxIDIuODggMi44ODQgMi44ODEgMi44ODEgMCAxIDEtNS43NjQgMCAyLjg4NCAyLjg4NCAwIDAgMSAyLjg4NC0yLjg4NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NS4yMzUgLTEzNS4yMTYpIi8+PHBhdGggZmlsbD0idXJsKCNrKSIgc3Ryb2tlPSIjMGYyNjBmIiBzdHJva2Utd2lkdGg9Ii4xMiIgZD0iTTUyLjg2OSAxNDMuMDczYy0uNDM3IDAtLjg2Ni4wNC0xLjI4Mi4xMWwtLjIwMyAyLjE1NGMtLjQzMS4xMi0uODM5LjI4OC0xLjIyLjUwM2wtMS42NjQtMS4zNzVhNy42MDggNy42MDggMCAwIDAtMS44MTYgMS44MTNsMS4zNzggMS42NjRhNS40OCA1LjQ4IDAgMCAwLS41MDcgMS4yMmwtMi4xNS4yMDNhNy41OTkgNy41OTkgMCAwIDAgMCAyLjU2NGwyLjE1LjIwM2MuMTIuNDMuMjkyLjgzOS41MDcgMS4yMmwtMS4zNzUgMS42NjRhNy42MTUgNy42MTUgMCAwIDAgMS44MSAxLjgxMmwxLjY2Ny0xLjM3OGMuMzgxLjIxNS43ODkuMzg2IDEuMjIuNTA2bC4yMDMgMi4xNTRjLjQxNi4wNy44NDUuMTA3IDEuMjgyLjEwNy40MzYgMCAuODYxLS4wMzYgMS4yNzgtLjEwN2wuMjAzLTIuMTU0YTUuNDYgNS40NiAwIDAgMCAxLjIyLS41MDZsMS42NjggMS4zNzhhNy42MTcgNy42MTcgMCAwIDAgMS44MDktMS44MTJsLTEuMzc1LTEuNjY1Yy4yMTUtLjM4LjM4Ni0uNzkuNTA2LTEuMjJsMi4xNS0uMjAzYy4wNzItLjQxNy4xMS0uODQ0LjExLTEuMjgxIDAtLjQzNy0uMDM5LS44NjUtLjExLTEuMjgybC0yLjE1LS4yMDNhNS40OCA1LjQ4IDAgMCAwLS41MDYtMS4yMmwxLjM3OC0xLjY2NGE3LjYxMiA3LjYxMiAwIDAgMC0xLjgxNi0xLjgxM2wtMS42NjQgMS4zNzVhNS40NTggNS40NTggMCAwIDAtMS4yMi0uNTAzbC0uMjAzLTIuMTUzYTcuNTg1IDcuNTg1IDAgMCAwLTEuMjc5LS4xMXptMCA0LjY5YTIuODgxIDIuODgxIDAgMCAxIDIuODggMi44ODQgMi44ODEgMi44ODEgMCAxIDEtNS43NjQgMCAyLjg4NCAyLjg4NCAwIDAgMSAyLjg4NC0yLjg4NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NS4yMzUgLTEzNS4yMTYpIi8+PHBhdGggZmlsbD0idXJsKCNsKSIgc3Ryb2tlPSIjMGYyNjBmIiBzdHJva2Utd2lkdGg9Ii4xMiIgZD0iTTYwLjUzNSAxNTQuODgyYy0uNDM3IDAtLjg2NS4wNC0xLjI4Mi4xMWwtLjIwMyAyLjE1NGMtLjQzLjEyLS44MzguMjg4LTEuMjIuNTAzbC0xLjY2NC0xLjM3NWE3LjYwNyA3LjYwNyAwIDAgMC0xLjgxNiAxLjgxMmwxLjM3OCAxLjY2NGE1LjQ4IDUuNDggMCAwIDAtLjUwNiAxLjIybC0yLjE1LjIwM2E3LjU5OSA3LjU5OSAwIDAgMCAwIDIuNTY0bDIuMTUuMjAzYy4xMi40My4yOTIuODQuNTA2IDEuMjJsLTEuMzc0IDEuNjY0YTcuNjE1IDcuNjE1IDAgMCAwIDEuODA5IDEuODEzbDEuNjY3LTEuMzc5Yy4zODIuMjE2Ljc4OS4zODcgMS4yMi41MDdsLjIwMyAyLjE1M2MuNDE3LjA3MS44NDUuMTA3IDEuMjgyLjEwNy40MzcgMCAuODYyLS4wMzYgMS4yNzgtLjEwN2wuMjA0LTIuMTUzYTUuNDYgNS40NiAwIDAgMCAxLjIyLS41MDdsMS42NjcgMS4zNzlhNy42MTcgNy42MTcgMCAwIDAgMS44MS0xLjgxM2wtMS4zNzYtMS42NjRjLjIxNS0uMzguMzg3LS43OS41MDctMS4yMmwyLjE1LS4yMDNjLjA3MS0uNDE3LjExLS44NDQuMTEtMS4yODIgMC0uNDM3LS4wNC0uODY1LS4xMS0xLjI4MmwtMi4xNS0uMjAzYTUuNDggNS40OCAwIDAgMC0uNTA3LTEuMjJsMS4zNzktMS42NjRhNy42MTIgNy42MTIgMCAwIDAtMS44MTYtMS44MTJsLTEuNjY1IDEuMzc1YTUuNDU4IDUuNDU4IDAgMCAwLTEuMjItLjUwM2wtLjIwMy0yLjE1NGE3LjU4NSA3LjU4NSAwIDAgMC0xLjI3OC0uMTF6bTAgNC42OWEyLjg4MSAyLjg4MSAwIDAgMSAyLjg4IDIuODgzIDIuODgxIDIuODgxIDAgMSAxLTUuNzY0IDAgMi44ODQgMi44ODQgMCAwIDEgMi44ODQtMi44ODR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUuMjM1IC0xMzUuMjE2KSIvPjxwYXRoIGZpbGw9InVybCgjbSkiIHN0cm9rZT0iIzBmMjYwZiIgc3Ryb2tlLXdpZHRoPSIuMDU3IiBkPSJNNzUuNDMxIDE0MS4zOTdjLS4yMDYgMC0uNDEuMDE5LS42MDcuMDUybC0uMDk2IDEuMDJhMi41ODcgMi41ODcgMCAwIDAtLjU3OC4yMzlsLS43ODgtLjY1MWEzLjYwNCAzLjYwNCAwIDAgMC0uODYuODU4bC42NTIuNzg5Yy0uMTAyLjE4LS4xODMuMzc0LS4yNC41NzhsLTEuMDE4LjA5NmEzLjYxMyAzLjYxMyAwIDAgMCAwIDEuMjE0bDEuMDE4LjA5N2MuMDU3LjIwNC4xMzguMzk3LjI0LjU3OGwtLjY1MS43ODhjLjIzNS4zMzIuNTI1LjYyMy44NTcuODU5bC43OS0uNjUzYy4xOC4xMDIuMzc0LjE4My41NzguMjRsLjA5NiAxLjAyYTMuNjE3IDMuNjE3IDAgMCAwIDEuMjEzIDBsLjA5Ni0xLjAyYy4yMDUtLjA1Ny4zOTctLjEzOC41NzgtLjI0bC43OS42NTNjLjMzMy0uMjM2LjYyMi0uNTI3Ljg1Ny0uODU5bC0uNjUtLjc4OGMuMS0uMTguMTgyLS4zNzQuMjQtLjU3OGwxLjAxOC0uMDk3YTMuNiAzLjYgMCAwIDAgMC0xLjIxNGwtMS4wMTktLjA5NmEyLjU5NyAyLjU5NyAwIDAgMC0uMjQtLjU3OGwuNjUzLS43ODlhMy42MDYgMy42MDYgMCAwIDAtLjg2LS44NThsLS43ODkuNjVhMi41ODYgMi41ODYgMCAwIDAtLjU3OC0uMjM3bC0uMDk2LTEuMDJhMy41OTggMy41OTggMCAwIDAtLjYwNi0uMDUzem0wIDIuMjIyYTEuMzY1IDEuMzY1IDAgMSAxLTEuMzY2IDEuMzY2YzAtLjc1NC42MTItMS4zNjYgMS4zNjYtMS4zNjZ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUuMjM1IC0xMzUuMjE2KSIvPjxwYXRoIGZpbGw9InVybCgjbikiIHN0cm9rZT0iIzBmMjYwZiIgc3Ryb2tlLXdpZHRoPSIuMDU3IiBkPSJNNzkuMTI3IDE0Ny4wNTRjLS4yMDYgMC0uNDEuMDE5LS42MDcuMDUybC0uMDk2IDEuMDJhMi41ODcgMi41ODcgMCAwIDAtLjU3OC4yMzlsLS43ODgtLjY1MWEzLjYwNCAzLjYwNCAwIDAgMC0uODYuODU4bC42NTIuNzg5Yy0uMTAyLjE4LS4xODMuMzc0LS4yNC41NzhsLTEuMDE4LjA5NmEzLjYxNCAzLjYxNCAwIDAgMCAwIDEuMjE0bDEuMDE4LjA5N2MuMDU3LjIwMy4xMzguMzk3LjI0LjU3OGwtLjY1MS43ODhjLjIzNS4zMzIuNTI1LjYyMy44NTcuODU5bC43OS0uNjUzYy4xOC4xMDIuMzc0LjE4My41NzguMjRsLjA5NiAxLjAyYTMuNjE3IDMuNjE3IDAgMCAwIDEuMjEzIDBsLjA5Ni0xLjAyYy4yMDUtLjA1Ny4zOTgtLjEzOC41NzgtLjI0bC43OS42NTNjLjMzMy0uMjM2LjYyMi0uNTI3Ljg1Ny0uODU5bC0uNjUtLjc4OGMuMS0uMTguMTgyLS4zNzUuMjQtLjU3OGwxLjAxOC0uMDk3YTMuNiAzLjYgMCAwIDAgMC0xLjIxNGwtMS4wMTktLjA5NmEyLjU5NSAyLjU5NSAwIDAgMC0uMjQtLjU3OGwuNjUzLS43ODlhMy42MDYgMy42MDYgMCAwIDAtLjg2LS44NThsLS43ODkuNjVhMi41ODYgMi41ODYgMCAwIDAtLjU3OC0uMjM3bC0uMDk2LTEuMDJhMy41OTggMy41OTggMCAwIDAtLjYwNi0uMDUzem0wIDIuMjIyYTEuMzY1IDEuMzY1IDAgMSAxLTEuMzY2IDEuMzY2YzAtLjc1NC42MTItMS4zNjYgMS4zNjYtMS4zNjZ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUuMjM1IC0xMzUuMjE2KSIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QzMmQyZCIgc3Ryb2tlLXdpZHRoPSIuNjUiIG1hcmtlci1zdGFydD0idXJsKCNvKSIgZD0iTTY2LjYwNiAxNTQuMTcyYzQuMTY5IDQuMDkzIDUuOTM3IDkuMTQ1IDEuMTU1IDEzLjk4OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1LjIzNSAtMTM1LjIxNikiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM0ODk4NWQiIHN0cm9rZS13aWR0aD0iLjY1IiBtYXJrZXItc3RhcnQ9InVybCgjcCkiIGQ9Ik01Ny4zMDEgMTcxLjk4OWMtNS4yODctMi40ODUtOC42MjYtNi42NjgtNS43MTQtMTIuODIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NS4yMzUgLTEzNS4yMTYpIi8+PC9zdmc+"}}]);