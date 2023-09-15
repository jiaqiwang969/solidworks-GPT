"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[37953],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var r=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=r.createContext({}),g=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=g(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=g(o),p=i,m=u["".concat(c,".").concat(p)]||u[p]||A[p]||n;return o?r.createElement(m,s(s({ref:t},l),{},{components:o})):r.createElement(m,s({ref:t},l))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,s=new Array(n);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var g=2;g<n;g++)s[g]=o[g];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},18838:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>A,frontMatter:()=>n,metadata:()=>a,toc:()=>g});var r=o(87462),i=(o(67294),o(3905));const n={layout:"sw-macro-fix",title:"SOLIDWORKS\u5b8f\u5728\u4e0d\u6ee1\u8db3\u524d\u63d0\u6761\u4ef6\u65f6\u51fa\u73b0\u9519\u8bef",image:"vba-error-type-mismatch.png",labels:["\u5b8f","\u6545\u969c\u6392\u9664"],"redirect-from":["/2018/04/macro-troubleshooting-macros-precondition-are-not-met.html"]},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/troubleshooting/macros/preconditions-not-met/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/troubleshooting/macros/preconditions-not-met/index",title:"SOLIDWORKS\u5b8f\u5728\u4e0d\u6ee1\u8db3\u524d\u63d0\u6761\u4ef6\u65f6\u51fa\u73b0\u9519\u8bef",description:"\u75c7\u72b6",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/troubleshooting/macros/preconditions-not-met/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/troubleshooting/macros/preconditions-not-met",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/troubleshooting/macros/preconditions-not-met/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/troubleshooting/macros/preconditions-not-met/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/troubleshooting/macros/preconditions-not-met/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"SOLIDWORKS\u5b8f\u5728\u4e0d\u6ee1\u8db3\u524d\u63d0\u6761\u4ef6\u65f6\u51fa\u73b0\u9519\u8bef",image:"vba-error-type-mismatch.png",labels:["\u5b8f","\u6545\u969c\u6392\u9664"],"redirect-from":["/2018/04/macro-troubleshooting-macros-precondition-are-not-met.html"]},sidebar:"tutorialSidebar",previous:{title:"\u4fee\u590dSOLIDWORKS API\u4e2d\u6a21\u578b\u6807\u9898\u6269\u5c55\u540d\u4e0d\u4e00\u81f4\u7684\u95ee\u9898",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/troubleshooting/macros/model-title-inconsistency-displaying-extension/"},next:{title:"\u4fee\u590d\u65e0\u6cd5\u8fd0\u884c\u7684SOLIDWORKS VSTA\uff08C#\u6216VB.NET\uff09\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/troubleshooting/macros/run-vsta-macro-error/"}},c={},g=[{value:"\u75c7\u72b6",id:"\u75c7\u72b6",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",level:2}],l={toc:g},u="wrapper";function A(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u75c7\u72b6"},"\u75c7\u72b6"),(0,i.kt)("p",null,"\u8fd0\u884c\u5904\u7406\u6d3b\u52a8\u6a21\u578b\u6216\u9009\u62e9\u7684SOLIDWORKS\u5b8f\u65f6\uff0c\u4f1a\u51fa\u73b0\u201c\u8fd0\u884c\u65f6\u9519\u8bef'91'\uff1a\u5bf9\u8c61\u53d8\u91cf\u6216With\u5757\u53d8\u91cf\u672a\u8bbe\u7f6e\u201d\u9519\u8bef\u6216\u201c\u8fd0\u884c\u65f6\u9519\u8bef'13'\uff1a\u7c7b\u578b\u4e0d\u5339\u914d\u201d\u9519\u8bef\uff0c\u6216\u4ee5\u5176\u4ed6\u65b9\u5f0f\u51fa\u73b0\u9519\u8bef\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&#39;\u8fd0\u884c\u65f6\u9519\u8bef&#39;13&#39;\uff1a\u8fd0\u884c\u5b8f\u65f6\u51fa\u73b0\u7c7b\u578b\u4e0d\u5339\u914d\u7684\u9519\u8bef",src:o(35897).Z,width:"320",height:"192"}),"{ width=320 height=191 }"),(0,i.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,i.kt)("p",null,"\u6839\u636e\u5b8f\u7684\u529f\u80fd\uff0c\u53ef\u80fd\u9700\u8981\u6ee1\u8db3\u67d0\u4e9b\u524d\u63d0\u6761\u4ef6\uff0c\u4f8b\u5982\u6253\u5f00\u96f6\u4ef6\u6216\u88c5\u914d\uff0c\u6216\u9009\u62e9\u7279\u5b9a\u5bf9\u8c61\uff08\u4f8b\u5982\u4f53\u3001\u7279\u5f81\u3001\u5c3a\u5bf8\u7b49\uff09\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5b8f\u4e2d\u6ca1\u6709\u6b63\u786e\u5904\u7406\u9519\u8bef\u5e76\u663e\u793a\u7528\u6237\u53cb\u597d\u7684\u6d88\u606f\uff0cVBA\u73af\u5883\u5c06\u5931\u8d25\u3002"),(0,i.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6cd5"},"\u89e3\u51b3\u65b9\u6cd5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8c03\u67e5\u5b8f\u7684\u524d\u63d0\u6761\u4ef6\u3002\u5982\u679c\u53ef\u80fd\uff0c\u8bf7\u8054\u7cfb\u5b8f\u7684\u5f00\u53d1\u4eba\u5458\uff0c\u6216\u6bd4\u8f83\u5b83\u6b63\u5e38\u5de5\u4f5c\u548c\u4e0d\u6b63\u5e38\u5de5\u4f5c\u7684\u6761\u4ef6\u4e4b\u95f4\u7684\u5dee\u5f02\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u4ee3\u7801\u3002\u67e5\u770b\u5728\u51fa\u73b0\u9519\u8bef\u65f6\u54ea\u4e00\u884c\u4ee3\u7801\u88ab\u7a81\u51fa\u663e\u793a\u3002\n\u4f8b\u5982\uff0c\u5982\u679c",(0,i.kt)("em",{parentName:"li"},"swModel"),"\u6216",(0,i.kt)("em",{parentName:"li"},"Part"),"\u53d8\u91cf\u4e3a",(0,i.kt)("em",{parentName:"li"},"Nothing"),"\uff0c\u5219\u8981\u6c42\u6a21\u578b\u5df2\u6253\u5f00\u3002\n\u5982\u679c\u4ece",(0,i.kt)("em",{parentName:"li"},"GetSelectedObjectX"),"\u65b9\u6cd5\u5206\u914d\u7684\u5bf9\u8c61\u4e3a",(0,i.kt)("em",{parentName:"li"},"Nothing"),"\uff0c\u5219\u5728\u8fd0\u884c\u5b8f\u4e4b\u524d\u9009\u62e9\u4e0d\u6b63\u786e\u6216\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u5bf9\u8c61\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u8fd0\u884c\u65f6\u5de5\u5177\u63d0\u793a\u663e\u793a\u6307\u9488\u4e3aNothing",src:o(30359).Z,width:"400",height:"176"}),"{ width=400 height=175 }"))}A.isMDXComponent=!0},30359:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/sw-body-is-nothing-504fb2fb20d09ecc3eb72db43742423a.png"},35897:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADACAMAAABCiUr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURTAEAN/doQCy1KOniO/dwaDKigBTofP19vPq4PPz4u/x8vr58PDw8PX19IpsNoOw0GJ0kUy408zLi2I4AHrb8JVrALK/yitOlQhMZMGxcJOTlIPU7trk7Y+8zLHi5MjIyJyFZkw+OcXIysi7qrSnb2tra1ZCZQEAPUGJqF+QvePh0JjAy9fSwcXZ7XZBN67HzEjS9LfP6NLdzjcEP6GLU6SflrCvmbmLXoBrYpu84XmDny81dEpolQCXybrN34iwvcezllZicNTb4Mfj8Zq20qzF4Nnn9O3m13KPv4RRJqjL6M/W2jBfjI+grmZEUjqdz4yUbie52bq7u5N3Rb6deK2rqdvbz4G94q/I41o8WLS0tHvI2Exeg5mut3CrxszP0c2iFmiSn5Wx0AAAb7/cuZWAeTJwnE8mR3ZtVqjB3KW/202Eh+zt7eHd29TOqy1LaXKcqaW8xtzU0L/U67mgntTU1LLL5cS8iGpeTkd3p2ebzvLz10YpB+zu8P7+/p7L47LU48bSsFA7JM7c66zc6NDt82uv1Xmjw9a/n7KdWuXm5/Du66h6Ro+929ra2gCy32hiaaK82OPv9pmrwzRPWcTCwKpiRt3h5FCSx0dOintXUpWWfoiIhrrR6pmbojUKbODjubbP6VSIrz4OG/r56GOQsIp+Ub3m7dPt3a+7vGKdv7KxrjJ1udvd3l1+rJ+vpoumyWxHa9XBqeLy4z5Pg1ZSVYKeqZ9dEbTN58qhXz9XbdPh6QwpaI3E5uHh4Z+61nhaQoiw3AVBhOHn7c2YRTdbpcDb3qJtK3qj06KiqK6TiPv32Xt5ecLR4qXB0p241O/wuHJzcevMppiYmNiwa8axom5dXNbKxZeATN24iqWSf/P067LH39LZ3WbC21F0mszd7wAfO0eJtqvd9rOjZWZQKolsVQCi0aO2w/vo0GvS6j86dLLM2KuUVEZ5vMK9uy0YSdjc4a2/0tHh85O03VFQaKSsuZvO7UNGT6LD5NrTjUgJAI/K2WJtiHJbCgAAAANQsagAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAQBElEQVR4Xu2dC1gTV77Ay+otEBKxdBdbroqWohJgvbXgk7qQEqRaHwWDkStydesj2dQqmBRhAbetIkG4JDQXVoFFirqQClaRZaVBrRWl4INSEItsXUEuXWOtPMXqfvecmROYPIpkTrf3Mz0/zMw5/znzZ/zlnDmTTPjyVBIBCyIQEyRQRrAWHm2OEigX5WoJ1iEqCxsSKPd8oXshwUr03rUGgaIX1gevJ1jLzgouLVCW2x1MsJ71D+EghgJFC1GIYBUP7yKB2ovBlwnW85/DAi+fIlgPEYgJEYgJQyCKEKxBZaEHqgxLuvADqAxbqbXKQmM6ohpqSGPe7omGKRD+XyHBVAEsgy9TdctcppupTsFGpy6fCqZqTKgGp8BMb5RmxKRPIOYCs57KkapUZU+FSutT6Iglut4NmLR0vUoldVswT3Wp/lzUo3S0ZYhNF8Ci9sNHcRN66QDk1EhJn0QYAumANOv7T9NV0tzpoRKhRCWVSCTgIVWBNV2jQ9LZryd3n3aWqFTF989Iu27tlghRW5XK0G61s1Qlrb0t6Y7zkg7viZLSv8wG+NuQwFiVlCJrzbJ4SVdfXKhkk7Mk94OpH5V98PbB4GdP3i+V1p64v2Oe2/2+T4723/p7wNwPPwgFQjpLhVELpI0TJPvfnpqz4iOJ9r5uzHMnFqRLVjsD0f23hd3NF4SH3r7/NbX7ZZB0A0gKNtkEEoZA2DEAWX/cHzDoVjg3VLj6TNnt9O71ZX86o99csnjbMudDOdeDu6adEfuXJ8MeuM9ZCNqP2Ti4/+Zg/jnXW6u6g1fcFGr7dP2Dik4vIRAokfRPHR/3bbIka7ErvbtqWm/ZApCU+lW2wLBAXzog7PpjcF/6aedOKLBlxqBEWHZuMHKT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"}}]);