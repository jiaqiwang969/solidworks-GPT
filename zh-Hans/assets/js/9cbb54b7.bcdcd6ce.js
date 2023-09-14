"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[87625],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),g=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=g(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=g(r),u=i,d=l["".concat(c,".").concat(u)]||l[u]||p[u]||n;return r?o.createElement(d,a(a({ref:t},m),{},{components:r})):o.createElement(d,a({ref:t},m))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:i,a[1]=s;for(var g=2;g<n;g++)a[g]=r[g];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>g});var o=r(87462),i=(r(67294),r(3905));const n={layout:"sw-macro-fix",title:"SOLIDWORKS macro error when preconditions are not met",caption:"Macro Preconditions Are Not Met",description:"Fixing the Run-time Error '91' or Run-time error '13' when running the macro",image:"vba-error-type-mismatch.png",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-macros-precondition-are-not-met.html"]},a=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/preconditions-not-met/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/preconditions-not-met/index",title:"SOLIDWORKS macro error when preconditions are not met",description:"Fixing the Run-time Error '91' or Run-time error '13' when running the macro",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/preconditions-not-met/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/preconditions-not-met",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/preconditions-not-met/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/preconditions-not-met/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/preconditions-not-met/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"SOLIDWORKS macro error when preconditions are not met",caption:"Macro Preconditions Are Not Met",description:"Fixing the Run-time Error '91' or Run-time error '13' when running the macro",image:"vba-error-type-mismatch.png",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-macros-precondition-are-not-met.html"]},sidebar:"tutorialSidebar",previous:{title:"Macro create precise part bounding box using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/precise-bounding-box/"},next:{title:"Macro to print SOLIDWORKS documents",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/print/"}},c={},g=[{value:"Symptoms",id:"symptoms",level:2},{value:"Cause",id:"cause",level:2},{value:"Resolution",id:"resolution",level:2}],m={toc:g},l="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"symptoms"},"Symptoms"),(0,i.kt)("p",null,"Running the SOLIDWORKS macro which processes the active model or selection produces ",(0,i.kt)("em",{parentName:"p"},"Run-time Error '91': Object variable or With block variable not set")," error\nor ",(0,i.kt)("em",{parentName:"p"},"Run-time error '13': Type mismatch")," error or misbehaves in any other way.  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&#39;Run-time error &#39;13&#39;: Type mismatch&#39; error when running the macro",src:r(58833).Z,width:"320",height:"192"}),"{ width=320 height=191 }"),(0,i.kt)("h2",{id:"cause"},"Cause"),(0,i.kt)("p",null,"Depending on the functionality of the macro it may require certain preconditions to be met, such as part or assembly opened or specific objects (e.g. body, feature, dimension etc.) selected."),(0,i.kt)("p",null,"If the errors are not handling properly in the macro and user friendly message is not displayed VBA environment will fail."),(0,i.kt)("h2",{id:"resolution"},"Resolution"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Investigate the preconditions of the macro. If possible contact the developer of the macro or compare the differences between conditions where it works and not"),(0,i.kt)("li",{parentName:"ul"},"Investigate the code. Check what code line is highlighted when error happens.\nFor example if ",(0,i.kt)("em",{parentName:"li"},"swModel "),"or ",(0,i.kt)("em",{parentName:"li"},"Part "),"variable is ",(0,i.kt)("em",{parentName:"li"},"Nothing "),"then it is required for the model to be open.\nIf object assigned from ",(0,i.kt)("em",{parentName:"li"},"GetSelectedObjectX "),"method is ",(0,i.kt)("em",{parentName:"li"},"Nothing "),"then incorrect or no selection was made prior of running the macro")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Run-time tooltip displaying that the pointer is Nothing",src:r(60806).Z,width:"400",height:"176"}),"{ width=400 height=175 }"))}p.isMDXComponent=!0},60806:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/sw-body-is-nothing-504fb2fb20d09ecc3eb72db43742423a.png"},58833:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADACAMAAABCiUr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURTAEAN/doQCy1KOniO/dwaDKigBTofP19vPq4PPz4u/x8vr58PDw8PX19IpsNoOw0GJ0kUy408zLi2I4AHrb8JVrALK/yitOlQhMZMGxcJOTlIPU7trk7Y+8zLHi5MjIyJyFZkw+OcXIysi7qrSnb2tra1ZCZQEAPUGJqF+QvePh0JjAy9fSwcXZ7XZBN67HzEjS9LfP6NLdzjcEP6GLU6SflrCvmbmLXoBrYpu84XmDny81dEpolQCXybrN34iwvcezllZicNTb4Mfj8Zq20qzF4Nnn9O3m13KPv4RRJqjL6M/W2jBfjI+grmZEUjqdz4yUbie52bq7u5N3Rb6deK2rqdvbz4G94q/I41o8WLS0tHvI2Exeg5mut3CrxszP0c2iFmiSn5Wx0AAAb7/cuZWAeTJwnE8mR3ZtVqjB3KW/202Eh+zt7eHd29TOqy1LaXKcqaW8xtzU0L/U67mgntTU1LLL5cS8iGpeTkd3p2ebzvLz10YpB+zu8P7+/p7L47LU48bSsFA7JM7c66zc6NDt82uv1Xmjw9a/n7KdWuXm5/Du66h6Ro+929ra2gCy32hiaaK82OPv9pmrwzRPWcTCwKpiRt3h5FCSx0dOintXUpWWfoiIhrrR6pmbojUKbODjubbP6VSIrz4OG/r56GOQsIp+Ub3m7dPt3a+7vGKdv7KxrjJ1udvd3l1+rJ+vpoumyWxHa9XBqeLy4z5Pg1ZSVYKeqZ9dEbTN58qhXz9XbdPh6QwpaI3E5uHh4Z+61nhaQoiw3AVBhOHn7c2YRTdbpcDb3qJtK3qj06KiqK6TiPv32Xt5ecLR4qXB0p241O/wuHJzcevMppiYmNiwa8axom5dXNbKxZeATN24iqWSf/P067LH39LZ3WbC21F0mszd7wAfO0eJtqvd9rOjZWZQKolsVQCi0aO2w/vo0GvS6j86dLLM2KuUVEZ5vMK9uy0YSdjc4a2/0tHh85O03VFQaKSsuZvO7UNGT6LD5NrTjUgJAI/K2WJtiHJbCgAAAANQsagAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAQBElEQVR4Xu2dC1gTV77Ay+otEBKxdBdbroqWohJgvbXgk7qQEqRaHwWDkStydesj2dQqmBRhAbetIkG4JDQXVoFFirqQClaRZaVBrRWl4INSEItsXUEuXWOtPMXqfvecmROYPIpkTrf3Mz0/zMw5/znzZ/zlnDmTTPjyVBIBCyIQEyRQRrAWHm2OEigX5WoJ1iEqCxsSKPd8oXshwUr03rUGgaIX1gevJ1jLzgouLVCW2x1MsJ71D+EghgJFC1GIYBUP7yKB2ovBlwnW85/DAi+fIlgPEYgJEYgJQyCKEKxBZaEHqgxLuvADqAxbqbXKQmM6ohpqSGPe7omGKRD+XyHBVAEsgy9TdctcppupTsFGpy6fCqZqTKgGp8BMb5RmxKRPIOYCs57KkapUZU+FSutT6Iglut4NmLR0vUoldVswT3Wp/lzUo3S0ZYhNF8Ci9sNHcRN66QDk1EhJn0QYAumANOv7T9NV0tzpoRKhRCWVSCTgIVWBNV2jQ9LZryd3n3aWqFTF989Iu27tlghRW5XK0G61s1Qlrb0t6Y7zkg7viZLSv8wG+NuQwFiVlCJrzbJ4SVdfXKhkk7Mk94OpH5V98PbB4GdP3i+V1p64v2Oe2/2+T4723/p7wNwPPwgFQjpLhVELpI0TJPvfnpqz4iOJ9r5uzHMnFqRLVjsD0f23hd3NF4SH3r7/NbX7ZZB0A0gKNtkEEoZA2DEAWX/cHzDoVjg3VLj6TNnt9O71ZX86o99csnjbMudDOdeDu6adEfuXJ8MeuM9ZCNqP2Ti4/+Zg/jnXW6u6g1fcFGr7dP2Dik4vIRAokfRPHR/3bbIka7ErvbtqWm/ZApCU+lW2wLBAXzog7PpjcF/6aedOKLBlxqBEWHZuMHKT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"}}]);