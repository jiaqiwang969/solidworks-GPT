"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[30144],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},A="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),A=c(o),u=a,g=A["".concat(s,".").concat(u)]||A[u]||d[u]||n;return o?r.createElement(g,i(i({ref:t},p),{},{components:o})):r.createElement(g,i({ref:t},p))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[A]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},14759:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=o(87462),a=(o(67294),o(3905));const n={layout:"sw-macro-fix",title:"\u4fee\u590dVSTA\uff08C#\u6216VB.NET\uff09SOLIDWORKS\u5b8f\u4e2d\u7684\u65e0\u6548\u547d\u540d\u7a7a\u95f4",image:"vsta-copy-example-compile-error.png",labels:["\u5b8f","\u6545\u969c\u6392\u9664","vsta"]},i=void 0,l={unversionedId:"codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/index",id:"codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/index",title:"\u4fee\u590dVSTA\uff08C#\u6216VB.NET\uff09SOLIDWORKS\u5b8f\u4e2d\u7684\u65e0\u6548\u547d\u540d\u7a7a\u95f4",description:"\u75c7\u72b6",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace",slug:"/codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"\u4fee\u590dVSTA\uff08C#\u6216VB.NET\uff09SOLIDWORKS\u5b8f\u4e2d\u7684\u65e0\u6548\u547d\u540d\u7a7a\u95f4",image:"vsta-copy-example-compile-error.png",labels:["\u5b8f","\u6545\u969c\u6392\u9664","vsta"]},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/too-long-vba-macro-line/"},next:{title:"solidworks-pdm-api",permalink:"/solidworks-GPT/zh-Hans/docs/category/solidworks-pdm-api"}},s={},c=[{value:"\u75c7\u72b6",id:"\u75c7\u72b6",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",level:2}],p={toc:c},A="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(A,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u75c7\u72b6"},"\u75c7\u72b6"),(0,a.kt)("p",null,"\u5c06SOLIDWORKS VSTA\u5b8f\uff08C#\u6216VB.NET\uff09\u7684\u793a\u4f8b\u4ee3\u7801\u4eceSOLIDWORKS API\u5e2e\u52a9\u6587\u6863\u6216\u4efb\u4f55\u6765\u6e90\u590d\u5236\u5230\u4ee3\u7801\u4e2d\u65f6\uff0c\u4f1a\u663e\u793a\u591a\u4e2a\u7f16\u8bd1\u9519\u8bef\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MacroName.SolidWorksMacro\u4e0d\u5305\u542b'SwApp'\u7684\u5b9a\u4e49"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u524d\u4e0a\u4e0b\u6587\u4e2d\u4e0d\u5b58\u5728\u540d\u79f0'Main'")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5c06\u793a\u4f8b\u4ee3\u7801\u4ece\u793a\u4f8b\u590d\u5236\u5230VSTA\u5b8f\u65f6\u7684\u7f16\u8bd1\u9519\u8bef",src:o(78334).Z,width:"1039",height:"406"}),"{ width=450 }"),(0,a.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,a.kt)("p",null,"VSTA\u5b8f\u57fa\u4e8e\u591a\u4e2a\u8fde\u63a5\u7684\u6587\u4ef6\uff0c\u8fd9\u4e9b\u6587\u4ef6\u5fc5\u987b\u4f4d\u4e8e\u76f8\u540c\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u3002\u5f53\u521b\u5efa\u65b0\u5b8f\u65f6\uff0c\u547d\u540d\u7a7a\u95f4\u53ef\u80fd\u4e0e\u793a\u4f8b\u6e90\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684\u547d\u540d\u7a7a\u95f4\u4e0d\u76f8\u7b49\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"namespace MacroName.csproj\n{\n  ...\n}\n")),(0,a.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6cd5"},"\u89e3\u51b3\u65b9\u6cd5"),(0,a.kt)("p",null,"\u5c06",(0,a.kt)("em",{parentName:"p"},"SolidWorksMacro.cs"),"\u6587\u4ef6\u4e2d\u7684\u547d\u540d\u7a7a\u95f4\u66f4\u6539\u4e3a\u4e0e\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4\u5339\u914d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6253\u5f00\u9879\u76ee\u5c5e\u6027\u9875\u9762")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"VSTA\u5b8f\u9879\u76ee\u5c5e\u6027",src:o(17821).Z,width:"288",height:"319"}),"{ width=250 }"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u590d\u5236",(0,a.kt)("em",{parentName:"li"},"\u5e94\u7528\u7a0b\u5e8f"),"\u9009\u9879\u5361\u4e2d\u7684",(0,a.kt)("em",{parentName:"li"},"\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4"),"\u5b57\u6bb5\u4e2d\u7684\u503c")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"VSTA\u9879\u76ee\u7684\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4",src:o(90614).Z,width:"865",height:"390"}),"{ width=350 }"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u547d\u540d\u7a7a\u95f4\u91cd\u547d\u540d\u4e3a\u590d\u5236\u7684\u503c")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u91cd\u547d\u540d\u547d\u540d\u7a7a\u95f4\u4ee5\u5339\u914d\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4",src:o(22150).Z,width:"1261",height:"479"}),"{ width=500 }"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u6784\u5efa\u5b8f")))}d.isMDXComponent=!0},22150:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/modified-namespace-68f302a143ae245f978fc04a3f9e4032.png"},90614:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/project-default-namespace-fd54e4d901ebe4c55e6d549fc9712e91.png"},17821:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAE/CAMAAADR3e78AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAFm9LAAsbvDBNe0cJG1tbTO8/445ADN/wQAAOf39/YKIkLWPOcG8/+/u5zAwMDkAANPZ5GTJMStDcniNtzOZ/ysAOQGWAaduLP21Zd/CeGxZjlyO8G6Y6wBaoRqjGurq6n/d/+rctIvDw5idodXRvtXw/bX9/Sxup0wAN/Ly8p2ou7q7sNra2v398Dk5AE6Lw25/l8OLTgA5ZSsAZWR1jAAAZYqNj8XM2+HO/8bFuLVlAPfvqYtOAJ7YnkZxPllmdjeIzlrO/8TCqLKysqeprTB+p6DO/8LK11OI8XR8h2Cr8Nrf6dmOOY+1/VVVVcDd/IyRmKnG4mW12mUAAIeXseXHcFmiU/zaj0FckSt92Ki41Ex+48LO5GW1tS5OJ+Pm7MK+jrvE1D5SbJutwsfHx2wxADOr/+qsCuHh4ZOhtuLGqbipuGUAOY7a/OXj2LLKsaDu/4KSqGy+/MDd2H9/f/zixgAyjjI1ZcCdjr+pqdr9/f392sCdZYuZrb+/wDpkurjU70WqIniDlGa6YLy8vJylqysAAM/PzwBltX+Z/6e/xDlQgCwsLJZUAOrt8ampxj1ARUtkprDB2FhfAEuHRABOixp/DTmPtd/s4s7h0Lu9wtLe9V+M5X6OqnnJedW4qT9sydLS0kJ13OTs+0lJSY9lj2yLyL7DyamtuZGpjeLf0qCgoDRJY5+9/8PDw6Xd/GYAZsjdytqPZTNYpkyd/K+5y8Dds7ipxllrg2SFxcvLy3SFnuH9/UhwvZimvbLL6cH///39tXmInqSyx42ctOry6qCr/yyQFpDb/0ZadPPRX1qY/mU5ADkAOZGRkX6k7WGyW7S2uKV9OZGam/394gBZs2yEoDhhMUwAAEyds2N7qq+vrtLJrKKtvf3v1cvR3N/s3bzI31SQTbW+z9q1ZebPlF9fX9XG1Tg4OD5Yi6ioqLW5vcrT5Z2jo2S1/W6nw4+ft4SWubXajzkAZYlZAAeYBwA5j8apuFN6yjmP2pWgqPDVuXuKodvk9gAAAFYexpcAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAWXElEQVR4Xu2dD5wU51nHtyo5GYxCCZ5oYjdKEjtkYqMGKKQmJpca4p05KqTXktiFsMS9Giw0YA2XLElcurTqNtA/IqDNcLWhQrdqSyVLenA5TKgR0gvRVgkQGq3xOM7EAoZ/H5/ned93dmb/zc7y7s7O7Ptt2J1539u7m29/7zt788zMRvTKpPizri9e/6EP/fefAJMn38WbOL3f3lEE68m/OrBUL6gWWkBQy6MEuaAEuaAEuaAEuRDZrqhIRCvLlJrgLw4NSpALSpALeUF//J3vfPCD3//c52655bvf/chHoIFvsUfYNwsPNkHvfOc73vH444+/8MILX/iCEiQoTtD3v/Kxr9yiBAnygob4s6adfk3fAU+wtVdrz7PN3quz5wrs1V7EJ/YtwoMQtAE4HtMzqKf9dMwS9F7c6Cm39bsJWq79ZsgF3XzzzX2vvat948b20+1/1ykE9Wufos13FTRlymXhFrTw5g0bMu0btb863f6P7e2WoPcuv5y2/WoQ9MCz0IgSboPny6csv3wv2MNlJi/kgoZ6NmhaOyxk2tvbX5tlCboNNxueQMJtMB8tx2fw8sBXIVWwjsvUGHpBS/5poXbxXRv7f/10+8faNy60BE3Z+zxE51MoCEELezFUoAWnJ+jFaOE4DLmggR8d0rWN7e0b9dN/oV+0CYL/wA4JwuGkvXgZm5ZgiKEUWiZNIRfU+3tL+l/as3lzZpvev3nzUF4QxGP58yQI9+NgoWUFDfRfvLh58507NixcuNAmaMrybthyEEQDCaakB55FHUwQW26JIda7o/fiVVdt2bKYl22gCbYWBV2G74VIEM5GYOFqiA1O0jgV4TKbjcIuCBRtPjZr8eLXUQ0Dt58mYkwO7b00bQwtXA0L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"},78334:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/vsta-copy-example-compile-error-525ba90a0c4bd53d26c3bb09c05632ff.png"}}]);