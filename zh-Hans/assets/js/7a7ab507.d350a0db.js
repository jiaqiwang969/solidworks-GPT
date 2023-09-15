"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[80547],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>v});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function A(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var f=n.createContext({}),i=function(t){var e=n.useContext(f),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},d=function(t){var e=i(t.components);return n.createElement(f.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,f=t.parentName,d=A(t,["components","mdxType","originalType","parentName"]),m=i(r),u=a,v=m["".concat(f,".").concat(u)]||m[u]||c[u]||o;return r?n.createElement(v,s(s({ref:e},d),{},{components:r})):n.createElement(v,s({ref:e},d))}));function v(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,s=new Array(o);s[0]=u;var A={};for(var f in e)hasOwnProperty.call(e,f)&&(A[f]=e[f]);A.originalType=t,A[m]="string"==typeof t?t:a,s[1]=A;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67630:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>f,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>A,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u4f7f\u7528SOLIDWORKS API\u7f16\u7a0bVBA\u548cVSTA\u5b8f",caption:"\u5b8f"},s=void 0,A={unversionedId:"codestack/solidworks-api/getting-started/macros/index",id:"codestack/solidworks-api/getting-started/macros/index",title:"\u4f7f\u7528SOLIDWORKS API\u7f16\u7a0bVBA\u548cVSTA\u5b8f",description:"\u4ecb\u7ecd\u4f7f\u7528SOLIDWORKS API\u5f00\u53d1VBA\u548cVSTA SOLIDWORKS\u5b8f\u7684SOLIDWORKS\u81ea\u52a8\u5316",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/getting-started/macros/index.md",sourceDirName:"codestack/solidworks-api/getting-started/macros",slug:"/codestack/solidworks-api/getting-started/macros/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/macros/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/macros/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u7f16\u7a0bVBA\u548cVSTA\u5b8f",caption:"\u5b8f"},sidebar:"tutorialSidebar",previous:{title:"\u901a\u8fc7SWBasic\u5b8f\u5c06\u53c2\u6570\u4f20\u9012\u7ed9SOLIDWORKS\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/inter-process-communication/pass-parameters-to-vba-macro/via-swb-macro/"},next:{title:"Creating and Running VSTA Macros in SOLIDWORKS (C# and VB.NET)",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/macros/create-vsta/"}},f={},i=[{value:"sidebar_position: 2",id:"sidebar_position-2",level:2}],d={toc:i},m="wrapper";function c(t){let{components:e,...o}=t;return(0,a.kt)(m,(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4ecb\u7ecd\u4f7f\u7528SOLIDWORKS API\u5f00\u53d1VBA\u548cVSTA SOLIDWORKS\u5b8f\u7684SOLIDWORKS\u81ea\u52a8\u5316\nimage: macro-toolbar.png\nlabels: ","[\u5b8f, VBA]"),(0,a.kt)("h2",{id:"sidebar_position-2"},"sidebar_position: 2"),(0,a.kt)("p",null,"{% youtube { id: JwFHVSpesVI } %}"),(0,a.kt)("p",null,"\u5b8f\u662f\u7c7b\u4f3c\u811a\u672c\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728SOLIDWORKS\u73af\u5883\u4e2d\u6267\u884c\u548c\u7f16\u8f91\u3002"),(0,a.kt)("p",null,"\u5b8f\u5229\u7528SOLIDWORKS API\u548c\u7b2c\u4e09\u65b9\u7ec4\u4ef6API\uff08\u5982Excel\u6216\u6587\u4ef6\u7cfb\u7edf\uff09\u6765\u8865\u5145SOLIDWORKS\u529f\u80fd\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5b8f\u88ab\u7528\u4f5c\u81ea\u52a8\u5316\u811a\u672c\uff0c\u4ee5\u589e\u5f3a\u91cd\u590d\u7684\u4efb\u52a1\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4ece\u5404\u79cd\u8d44\u6e90\uff08\u5982\u5b98\u65b9",(0,a.kt)("a",{parentName:"p",href:"https://forum.solidworks.com/community/api"},"SOLIDWORKS\u8bba\u575b"),"\u6216",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-tools"},"CodeStack 'Goodies'"),"\uff09\u4e0b\u8f7d\u6570\u5343\u4e2a\u5b8f\u3002"),(0,a.kt)("p",null,"SOLIDWORKS\u652f\u6301\u7684\u5b8f\u6709\u4e24\u4e2a\u4e3b\u8981\u7c7b\u522b\uff1aVSTA\u548cVBA\u5b8f\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/types"},"\u5b8f\u7c7b\u578b"),"\u6587\u7ae0\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5b8f\u5de5\u5177\u680f",src:r(41967).Z,width:"162",height:"40"})),(0,a.kt)("p",null,"\u5b8f\u5de5\u5177\u680f\u63d0\u4f9b\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/getting-started/macros/run/"},"\u8fd0\u884c\u5b8f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/getting-started/macros/recording/"},"\u5f55\u5236\u5b8f"),"\uff08\u4ee5\u53ca\u505c\u6b62\u5f55\u5236\u548c\u6682\u505c\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u65b0\u7684\u7a7a\u767d\u5b8f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/getting-started/macros/edit/"},"\u7f16\u8f91\u5b8f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/getting-started/macros/macro-buttons/"},"\u5c06\u5b8f\u5206\u914d\u7ed9\u6309\u94ae"))),(0,a.kt)("p",null,"\u4e0a\u8ff0\u547d\u4ee4\u4e5f\u53ef\u4ee5\u4ece\u83dc\u5355\u4e2d\u4f7f\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5b8f\u83dc\u5355",src:r(59406).Z,width:"495",height:"284"}),"{ width=300 }"),(0,a.kt)("p",null,"\u7531\u4e8e\u5b8f\u901a\u5e38\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u56e0\u6b64\u80fd\u591f\u8c03\u8bd5\u548c\u6392\u9664\u5b8f\u4ee5\u786e\u4fdd\u8d28\u91cf\u975e\u5e38\u91cd\u8981\u3002\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/troubleshooting/macros/"},"\u5b8f\u6545\u969c\u6392\u9664"),"\u4ee5\u4e86\u89e3\u5b8f\u4e2d\u6700\u5e38\u89c1\u7684\u9519\u8bef\u7684\u89e3\u91ca\u548c\u89e3\u51b3\u65b9\u6cd5\u3002"))}c.isMDXComponent=!0},41967:(t,e,r)=>{r.d(e,{Z:()=>n});const n="data:image/png;base64,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"},59406:(t,e,r)=>{r.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe8AAAEcCAMAAADZUcxIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAN+yMzKCAPf39wBji/feSGMAAFpaWmOxsQAAOLGxsTgAOGOLi5YyAFdXV+jo6DiLi5Db/7TA1gA3Vff0tCUlJbBjAFVVVeDh4Iuwi3+zzOXl5ff31swzM3R0dLTsr4uMizgAAAA4i2MAONLtt+HLtDw+QJ2dnR5XdbBjODgAYwAAYziL1GMAY7TL4bW1u76+vvewi4vU9+6jk86SIjg4Y8TExGOw99SLY4s4OBYWFsH29zIyMuRuVIKCgvewY6CgoP/bkNbL1tkoAcC0tNvb2ouw9zhjsNbAtN3e3ffUizk5OcC0wGNiYotji+HW1rCLizqQtmNjABpScNilL06RI2M4ALCwY5CntDg4i5PB1rno3BdObDg4AF+hvzKHr69dD2pqatw1EdSLOKqemCtnhWOw1G2OV/+2tpqkk0tLS8vLy7DUi8u0wJWVlSwsLABjsIs4ANLS0tuQOnp6erCLOPXPxv+2Zqenp2a2/0ePGtSwYziLsHvC4DqQ24uLOMC0yzNvjW2pxo6Pkfnqf0B5l1STsUJCQpA6AAA6kOzWwB0dHfDk3rS0y/niUdbW1gA4Yyhjgcu0tOC1Pc6UKpC2/zJph8DW7G9vbz+PtEmFo8DL4UeTtzl3lZnC1q9eE9moNtjY2FGZu2KjwPXQyM+ZMq9fFyNde5A6OjBti/fr1vvnXDaJsbaQOtuQZjVzkdmrPdu2Ztw4FC5qiOG5Q/nfQHKsxxhPbQAAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///xqXu94AAAC5dFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AQAvpHgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAHHNJREFUeF7tnY1/HEd5xw9vKzVKk62ry/ngjmA5xKGJaIRpToA2ktzkgnWqKS19wUDrOqK09VHLuigkKZSWlzZ2DKi4tDEtJRxQSN0XWtKXf6/P73lmdmf3ds8n3d2ubme+H/t2d3ZupJ3vzsye7pndildSXm71fbXqiJiK74VDot42UZzvVKbjWy1HxPnOD+fbLpzv0tBSy6HY6HtxUa1E9ALmod1dlZDNiT97l1rLwG8lyDzv2ioD0VZJY9AaRbiFvhd/8qUB4UGDF/U769nCu3xK9LwTJ06olHRavm/UfKtRz/RgZlPLAcRi46DVOpDfMZPWKC3cPt+LX/rEJ95KCg/41W8/7J3OFB60er1ei3LeQzj77iu8Vn1M372WV+/1641G/aBbV4mpUBH3Fl4i39+9rFaYLN+k+59+8vvfTAgX31593/cyW3hAunu9h4Nrf3LixB+9vB1k/dqJ9j2ub3+r1fb9BtMfJhT7hu1nYr5rFWJ5475z1feuqaQkteu82LlOuXgtDV0TXF7lptoKSZYeVVxtGa878jOI7N8jhXdcNoVn+Cbdby0ufvOvfxwXrnw39qnPvJIhPOgKB/6JE7/d6HfVewZItu+tbJdqSWTn8QHbrtfrw4TzriH7mbhvrm4iu543nsCe6tyqbKYTCUwtaEq+v3zZFJ7ue/FfuC9f/PE/vCcmXLnz9/f37wz3vUWlUof+bsqr0pMk2vdWO9ulWhLZedh2vdXt9tr1+lYvu0uXIjILEg7rW0yL9UwK8U26/80QnuqbdP8he158z199zBSufTfaB71ulm9cRy+skGxhk67e1K4YLb9htu92lu92q6vWiG7WFTr5pqbNRbR7W+228Z4E6scMF57imyoZ9Vydq1RSWjF36JQxyoJ37ZxZ8zZCTUnfzRvSq6slEl+oVMJzJs23FM2/yrvmKkPGDkAN+9v0//KX3/FdlZLue/Et0U1NZvFjX/o/Q7iI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"}}]);