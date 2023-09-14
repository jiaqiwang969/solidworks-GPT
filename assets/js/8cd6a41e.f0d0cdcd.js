"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[68830],{3905:(i,I,M)=>{M.d(I,{Zo:()=>u,kt:()=>r});var e=M(67294);function t(i,I,M){return I in i?Object.defineProperty(i,I,{value:M,enumerable:!0,configurable:!0,writable:!0}):i[I]=M,i}function j(i,I){var M=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);I&&(e=e.filter((function(I){return Object.getOwnPropertyDescriptor(i,I).enumerable}))),M.push.apply(M,e)}return M}function c(i){for(var I=1;I<arguments.length;I++){var M=null!=arguments[I]?arguments[I]:{};I%2?j(Object(M),!0).forEach((function(I){t(i,I,M[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(M)):j(Object(M)).forEach((function(I){Object.defineProperty(i,I,Object.getOwnPropertyDescriptor(M,I))}))}return i}function N(i,I){if(null==i)return{};var M,e,t=function(i,I){if(null==i)return{};var M,e,t={},j=Object.keys(i);for(e=0;e<j.length;e++)M=j[e],I.indexOf(M)>=0||(t[M]=i[M]);return t}(i,I);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(i);for(e=0;e<j.length;e++)M=j[e],I.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(i,M)&&(t[M]=i[M])}return t}var o=e.createContext({}),n=function(i){var I=e.useContext(o),M=I;return i&&(M="function"==typeof i?i(I):c(c({},I),i)),M},u=function(i){var I=n(i.components);return e.createElement(o.Provider,{value:I},i.children)},s="mdxType",l={inlineCode:"code",wrapper:function(i){var I=i.children;return e.createElement(e.Fragment,{},I)}},g=e.forwardRef((function(i,I){var M=i.components,t=i.mdxType,j=i.originalType,o=i.parentName,u=N(i,["components","mdxType","originalType","parentName"]),s=n(M),g=t,r=s["".concat(o,".").concat(g)]||s[g]||l[g]||j;return M?e.createElement(r,c(c({ref:I},u),{},{components:M})):e.createElement(r,c({ref:I},u))}));function r(i,I){var M=arguments,t=I&&I.mdxType;if("string"==typeof i||t){var j=M.length,c=new Array(j);c[0]=g;var N={};for(var o in I)hasOwnProperty.call(I,o)&&(N[o]=I[o]);N.originalType=i,N[s]="string"==typeof i?i:t,c[1]=N;for(var n=2;n<j;n++)c[n]=M[n];return e.createElement.apply(null,c)}return e.createElement.apply(null,M)}g.displayName="MDXCreateElement"},20631:(i,I,M)=>{M.r(I),M.d(I,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>j,metadata:()=>N,toc:()=>n});var e=M(87462),t=(M(67294),M(3905));const j={title:"Managing System Options And User Preferences using SOLIDWORKS API",caption:"Options",description:"Articles and example to control user preferences and system options at document and application levels using SOLIDWORKS API",image:"solidworks-options.svg",labels:["preferences","options"],sidebar_position:8},c=void 0,N={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/index",title:"Managing System Options And User Preferences using SOLIDWORKS API",description:"Articles and example to control user preferences and system options at document and application levels using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/index.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Managing System Options And User Preferences using SOLIDWORKS API",caption:"Options",description:"Articles and example to control user preferences and system options at document and application levels using SOLIDWORKS API",image:"solidworks-options.svg",labels:["preferences","options"],sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"VBA macro to scale the geometry of the imported features using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part/"},next:{title:"Managing system options (application level) using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/application/"}},o={},n=[],u={toc:n},s="wrapper";function l(i){let{components:I,...j}=i;return(0,t.kt)(s,(0,e.Z)({},u,j,{components:I,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"SOLIDWORKS options API automation",src:M(20911).Z,width:"53",height:"76"}),"{ width=250 }"),(0,t.kt)("p",null,"Most of options in SOLIDWORKS are controlled via SetUserPreference SOLIDWORKS API method. There versions of methods to control text, integer, toggle, numeric properties, etc. properties."),(0,t.kt)("p",null,"The easies way to find the required identifier of the user preference would be using the following ",(0,t.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapiprogguide/overview/system_options_and_document_properties.htm"},"System Options Table")," or by simply ",(0,t.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/recording"},"recording the macro")," and changing the target property. The corresponding SOLIDWORKS API call will be written to the macro."),(0,t.kt)("p",null,"All system options can be grouped by two categories: application level and document level."),(0,t.kt)("p",null,"This section contains the code examples and macros for automation user preferences and application settings."))}l.isMDXComponent=!0},20911:(i,I,M)=>{M.d(I,{Z:()=>e});const e="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTMuNDI5IDc2LjI5Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjY3OSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1vcGFjaXR5PSIuMzMzIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4Mj0iMCIgeTE9IjMuMSIgeTI9IjEyMi45IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzg4OGE4NSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2JhYmRiNiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJkIj48c3RvcCBzdG9wLWNvbG9yPSIjODg4YTg1Ii8+PHN0b3Agb2Zmc2V0PSIuNzgiIHN0b3AtY29sb3I9IiM1NTU3NTMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyZTM0MzYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzJlMzQzNiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJlMzQzNiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImYiPjxzdG9wIHN0b3AtY29sb3I9IiNlZWUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkMmQyZDIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZyI+PHN0b3AvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1vcGFjaXR5PSIuNTM2Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImkiPjxzdG9wIHN0b3AtY29sb3I9IiNlZWUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0icyIgeDE9IjEyNi4zNTgiIHgyPSIyNjAuMjMiIHkxPSI0Ny41MzQiIHkyPSI0Ny41MzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjaCIvPjxsaW5lYXJHcmFkaWVudCBpZD0iaCIgeDI9IjAiIHkxPSIzLjEiIHkyPSIxMjIuOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM4ODhhODUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiYWJkYjYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibCIgeDE9Ijg4LjA3MSIgeDI9IjI5My41NDIiIHkxPSIzNjAuNTQiIHkyPSI2OS43MDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjaSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iayIgeDE9IjkxLjgwMiIgeDI9IjI5OC4xOTEiIHkxPSIzNDguNTg3IiB5Mj0iNTguMzIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC4yMTQ3NyAwIDAgLjIxMjc0IDgzLjAxOCAxNDAuNzgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2oiLz48bGluZWFyR3JhZGllbnQgaWQ9ImoiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2U4YTZhNiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhlNTQ1NCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJtIiB4MT0iODguMDcxIiB4Mj0iMjkzLjU0MiIgeTE9IjM2MC41NCIgeTI9IjY5LjcwNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJuIiB4MT0iODguMDcxIiB4Mj0iMjkzLjU0MiIgeTE9IjM2MC41NCIgeTI9IjY5LjcwNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJvIiB4MT0iODguMDcxIiB4Mj0iMjkzLjU0MiIgeTE9IjM2MC41NCIgeTI9IjY5LjcwNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJwIiB4MT0iODguMDcxIiB4Mj0iMjkzLjU0MiIgeTE9IjM2MC41NCIgeTI9IjY5LjcwNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJxIiB4MT0iODguMDcxIiB4Mj0iMjkzLjU0MiIgeTE9IjM2MC41NCIgeTI9IjY5LjcwNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJyIiB4MT0iODguMDcxIiB4Mj0iMjkzLjU0MiIgeTE9IjM2MC41NCIgeTI9IjY5LjcwNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJ0IiB4MT0iMTI2LjM1OCIgeDI9IjI2MC4yMyIgeTE9IjQ3LjUzNCIgeTI9IjQ3LjUzNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNoIi8+PGxpbmVhckdyYWRpZW50IGlkPSJ1IiB4MT0iMTI2LjM1OCIgeDI9IjI2MC4yMyIgeTE9IjQ3LjUzNCIgeTI9IjQ3LjUzNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNoIi8+PGxpbmVhckdyYWRpZW50IGlkPSJ2IiB4MT0iMTI2LjM1OCIgeDI9IjI2MC4yMyIgeTE9IjQ3LjUzNCIgeTI9IjQ3LjUzNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNoIi8+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjaykiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9Ii40MjgiIGQ9Ik0xNTAuMTY3IDIxNy45MDdjMCAxLjE3LTEuMTg4IDIuMTE5LTIuNjUzIDIuMTE5aC00NS42NjVjLTEuNDY1IDAtMi42NTMtLjk0OS0yLjY1My0yLjEydi02NC45MDNjMC0xLjE3IDEuMTg4LTIuMTE5IDIuNjUzLTIuMTE5aDQ1LjY2NWMxLjQ2NSAwIDIuNjUzLjk1IDIuNjUzIDIuMTJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTcuNTk1IC0xNDMuOTUpIi8+PGcgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZmlsbD0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuMzk2MDgiIGQ9Ik02LjMzNiA4LjY5OGw0MS40NTUgNC4yODYtNi4xMTkgNTkuMTcyTC4yMTcgNjcuODd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIuMzk2MDgiIGQ9Ik05Ljg4MiAxNy45OTFsNC45MjQuNTEtLjUzNiA1LjE5LTQuOTI1LS41MDl6TTE4LjkyNyAyNC4xNzNsMjMuODY3IDIuNDY4TTguNzI0IDI5LjkxM2w0LjkyNC41MS0uNTM2IDUuMTktNC45MjUtLjUwOXpNMTcuNzcgMzYuMDk1bDIzLjg2NiAyLjQ2OE03LjM1NCA0Mi40ODZsNC45MjUuNTEtLjUzNyA1LjE5LTQuOTI0LS41MDl6TTE2LjQgNDguNjY4bDIzLjg2NyAyLjQ2OE02LjE5NiA1NC40MDhsNC45MjUuNTEtLjUzNyA1LjE5TDUuNjYgNTkuNnpNMTUuMjQyIDYwLjU5bDIzLjg2NyAyLjQ2OCIvPjwvZz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBmaWxsPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii4zOTYwOCIgZD0iTTcuMDUgOS44NzVsNDEuNjY4LjgyOC0xLjE4MiA1OS40NzUtNDEuNjY4LS44Mjh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIuMzk2MDgiIGQ9Ik0xMS4zNTYgMTguODQybDQuOTUuMDk4LS4xMDQgNS4yMTgtNC45NS0uMDk5ek0yMC44ODMgMjQuMjVsMjMuOTkuNDc3TTExLjE5MiAzMC44MTlsNC45NS4wOTgtLjEwNCA1LjIxOC00Ljk1LS4wOTl6TTIwLjcyIDM2LjIyN2wyMy45OS40NzdNMTAuODcyIDQzLjQ2Mmw0Ljk1LjA5OC0uMTA0IDUuMjE4LTQuOTUtLjA5OHpNMjAuNCA0OC44N2wyMy45OS40NzhNMTAuNzA4IDU1LjQzOWw0Ljk1LjA5OC0uMTAzIDUuMjE4LTQuOTUtLjA5OXpNMjAuMjM2IDYwLjg0OGwyMy45OS40NzYiLz48L2c+PGcgZmlsbD0idXJsKCNsKSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJzY2FsZSguMTk4MDQpIHJvdGF0ZSgtNS43MDIgMy45OTcgNjQ1Ljk3MSkiPjxwYXRoIGZpbGw9InVybCgjbSkiIGQ9Ik04OC4wNzEgNjAuMTU0aDIxMC40NDVWMzYwLjU0SDg4LjA3MXoiLz48cGF0aCBmaWxsPSIjNTljZjg0IiBkPSJNMTEwLjcwOCAxMDQuOTkzaDI1djI2LjM1MmgtMjV6Ii8+PHBhdGggZmlsbD0idXJsKCNuKSIgZD0iTTE1OS4zNTIgMTMxLjM0NWgxMjEuMTYyIi8+PHBhdGggZmlsbD0iI2QwNTQ1NCIgZD0iTTExMS4wODMgMTY1LjQ3NWgyNXYyNi4zNTJoLTI1eiIvPjxwYXRoIGZpbGw9InVybCgjbykiIGQ9Ik0xNTkuNzI3IDE5MS44MjZoMTIxLjE2MiIvPjxwYXRoIGZpbGw9IiM0NTUwYTUiIGQ9Ik0xMTAuNzM2IDIyOS4zMzloMjV2MjYuMzUyaC0yNXoiLz48cGF0aCBmaWxsPSJ1cmwoI3ApIiBkPSJNMTU5LjM4IDI1NS42OWgxMjEuMTYzIi8+PHBhdGggZmlsbD0idXJsKCNxKSIgZD0iTTExMS4xMTEgMjg5LjgyaDI1djI2LjM1MmgtMjV6Ii8+PHBhdGggZmlsbD0idXJsKCNyKSIgZD0iTTE1OS43NTUgMzE2LjE3MmgxMjEuMTYzIi8+PC9nPjxnIGZpbGw9InVybCgjcykiIHRyYW5zZm9ybT0ibWF0cml4KC4yNzIgMCAwIC4yNzIgLTI1LjY4OCAtNy4xNSkiPjxwYXRoIGZpbGw9InVybCgjdCkiIGQ9Ik0yMzIuNjY3IDQyLjM2N3Y4LjM2Ni0uMjg4IDQuMDM5aDE4Ljk5OWM0LjQ1MyAwIDguMDY0IDMuOTgzIDguMDY0IDguODk4djQuODk4SDEyNi44NTh2LTQuODk4YzAtNC45MTUgMy42MS04Ljg5OCA4LjA2NC04Ljg5OGgxOVY1MC41NHYuMjg4LTguNDY1aDMwLjExN2MyLjgyOSAwIDUuNTUzLjE4OCA4LjQ1LjA2NGE4OC44NDMgODguODQzIDAgMCAxIDYuNzIyLS4wNmMxLjIzNS4wMzggMi4yNTIuMDIxIDMuNDg2LS4wMDIgMS45MTYtLjAzNiAzLjgzNSAwIDUuNzUxIDBsMTUuNTEzLjAwMSA4LjcwNi4wMDF6Ii8+PHBhdGggZmlsbD0idXJsKCN1KSIgZD0iTTE4NS41NDEgNDEuNjcyYzEuMjkgMCAzLjcyNy41NTMgMy45NjUtMS4xMjUuMTQtLjk4MS0uNDM1LTEuMjM2LS42ODItMS45NTktLjI2Ni0uNzc3LS4xNzYtMi4wMjQtLjI3NC0yLjg1Mi0uMjE2LTEuODE4Ljg2OS0zLjY5NSAyLjUyOC00LjUgMS4zOTQtLjY3NyAzLjQ0My0xLjY4OCA0Ljc4My0uNDQyIDEuMTM1IDEuMDUzIDEuNzg4IDIuOTcgMi4yMzkgNC41MjEuNjgxIDIuMzM1LS43NSA1LjM5NS0yLjYzNCA2LjU1Mi0uMzQuMjA4LS42OS41LTEuMDc0LjU5LS4yOTIuMDY5LS42NDcuMDA1LS45NDQuMDA3LS40MzkuMDAyLS44OTYuMDAxLTEuMzIzLS4xMjUtLjQ1OS0uMTM1LS40NjUtLjMxOS0uNzI1LS42Ny0uNDc5LS42NS0xLjQzMy0uNjAxLTIuMTA4LS43NDYtMS4wMi0uMjE5LTIuMTkxLjA5LTMuMTAyLjYwNy0uMzkxLjIyMi0uOTc3LjU5NC0xLjE0NyAxLjA3Ny0uMjA5LjU5NC4zNzEuNTIuNzc0LjUyNSAzLjEwOC4wNCA2LjIxNi4wODYgOS4zMjQuMTQ0IDEuMjUuMDIzIDIuNS4wNDMgMy43NDkuMDU0LjQ3NC4wMDQgMS4zNjkuMjA1IDEuODAxLS4wMDEuMzY0LS4xNzMuNDgzLS44NzEuNTY1LTEuMjU1LjMyNC0xLjQ5OC42NTYtMi45ODYuOTk5LTQuNDc5LjAyMS0uMDkyLjA0LS4xODYuMDYtLjI3OS4xMzctLjY5NS0uMDM5LTEuNTkxLS4xNS0yLjI4My0uMjM4LTEuNDg5LS43NC0yLjkyOC0xLjU1Ny00LjE1LS4zNC0uNTA5LS41NTgtMS4wMzItMS4wMi0xLjQ2Ni0uNTE0LS40ODMtMS4xNjctLjczNS0xLjY5OS0xLjIwMi0uNTAyLS40MzktLjg0MS0uODUyLTEuNDY1LTEuMTMtLjQ1NC0uMjAzLS45OTYtLjM3NS0xLjQ2Ny0uMzcyLS41NDUuMDAzLTEuMTE1LS4wNjQtMS42My4xMDYtLjUwNS4xNjgtMS4wMzMuMzMzLTEuNTU0LjQzNS0xLjIuMjM0LTIuNDE3LjIwMS0zLjQxNyAxLjA0MmE5LjQzOSA5LjQzOSAwIDAgMC0xLjU2NiAxLjY2OGMtLjQ3Ny42NDUtLjc1NSAxLjQ0MS0xLjExOCAyLjE5Ni0uNDU2Ljk0Ni0uOTEgMS45MDQtMS4yMzIgMi45MTctLjI1Mi43OTItLjIxNCAxLjY0LS4xNDQgMi40NjguMDUyLjYwOS4zMzMgMS4yLjQ1NCAxLjc5Ny4yMjggMS4xMTYuNjA3IDIuMjI5Ljk4MiAzLjI4OSIvPjxwYXRoIGZpbGw9InVybCgjdikiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTg1LjUyOCA0MS45NzVjLS41ODgtMS40MTgtMS4xMzItMy4xNTUtMS4xMzItNC45NCAwLTUuNjU5IDMuOTg0LTEwLjI0NiA4Ljg5OS0xMC4yNDYgNC45MTUgMCA4Ljk5NSA0LjE0OCA4LjkgMTAuMjQ2LS4wMjUgMS41ODEtLjY3OSAzLjc3Ni0xLjUwMyA1LjMzdjBsMzEuOTc1LjAwMnY4LjM2Ni0uMjg5IDQuMDM5aDE4Ljk5OWM0LjQ1MyAwIDguMDY0IDMuOTg0IDguMDY0IDguODk4djQuODk4SDEyNi44NTh2LTQuODk4YzAtNC45MTUgMy42MS04Ljg5OCA4LjA2NC04Ljg5OGgxOXYtMy45NDUuMjg5LTguNDY1aDMwLjExN2wxLjY1Ni4wMDRhMTguMzkgMTguMzkgMCAwIDEtLjE2Ny0uMzkxIi8+PGVsbGlwc2UgY3g9IjE5My40MDUiIGN5PSIzNi4yNTgiIGZpbGw9IiMyNjI4MjMiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiByeD0iNS4xNzQiIHJ5PSI2LjEwOCIvPjwvZz48L3N2Zz4="}}]);