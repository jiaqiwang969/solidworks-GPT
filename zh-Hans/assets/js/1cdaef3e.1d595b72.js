"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[56919],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>R});var a=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var I=a.createContext({}),c=function(e){var r=a.useContext(I),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(I.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},A=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,I=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(t),A=i,R=p["".concat(I,".").concat(A)]||p[A]||d[A]||n;return t?a.createElement(R,s(s({ref:r},l),{},{components:t})):a.createElement(R,s({ref:r},l))}));function R(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,s=new Array(n);s[0]=A;var o={};for(var I in r)hasOwnProperty.call(r,I)&&(o[I]=r[I]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<n;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}A.displayName="MDXCreateElement"},71730:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>I,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const n={title:"\u4f7f\u7528SOLIDWORKS PDM API\u5217\u51fa\u5b58\u50a8\u5e93\u4e2d\u7684\u6240\u6709\u53d8\u91cf",image:"pdm-variables.png",labels:["\u53d8\u91cf","\u5217\u8868"]},s=void 0,o={unversionedId:"codestack/solidworks-pdm-api/data-card/list-all-variables/index",id:"codestack/solidworks-pdm-api/data-card/list-all-variables/index",title:"\u4f7f\u7528SOLIDWORKS PDM API\u5217\u51fa\u5b58\u50a8\u5e93\u4e2d\u7684\u6240\u6709\u53d8\u91cf",description:"PDM\u53d8\u91cf\u5217\u8868SOLIDWORKS PDM\u7ba1\u7406\u9762\u677f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-pdm-api/data-card/list-all-variables/index.md",sourceDirName:"codestack/solidworks-pdm-api/data-card/list-all-variables",slug:"/codestack/solidworks-pdm-api/data-card/list-all-variables/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/data-card/list-all-variables/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-pdm-api/data-card/list-all-variables/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS PDM API\u5217\u51fa\u5b58\u50a8\u5e93\u4e2d\u7684\u6240\u6709\u53d8\u91cf",image:"pdm-variables.png",labels:["\u53d8\u91cf","\u5217\u8868"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS PDM API\u7ba1\u7406\u53d8\u91cf\u548c\u6570\u636e\u5361",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/data-card/"},next:{title:"hooks",permalink:"/solidworks-GPT/zh-Hans/docs/category/hooks"}},I={},c=[],l={toc:c},p="wrapper";function d(e){let{components:r,...n}=e;return(0,i.kt)(p,(0,a.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PDM\u53d8\u91cf\u5217\u8868SOLIDWORKS PDM\u7ba1\u7406\u9762\u677f",src:t(31429).Z,width:"328",height:"412"})),(0,i.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u4f7f\u7528SOLIDWORKS PDM API\u5217\u51fa\u4e86\u6307\u5b9a\u5b58\u50a8\u5e93\u4e2d\u7684\u6240\u6709\u53d8\u91cf\u3002\u53d8\u91cf\u540d\u79f0\u548cID\u5c06\u4ee5\u4ee5\u4e0b\u683c\u5f0f\u8f93\u51fa\u5230VBA\u7f16\u8f91\u5668\u7684\u5373\u65f6\u7a97\u53e3\u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Album(102)\nApproved by(53)\nApproved On(46)\nArtist(101)\nAssembly No.(67)\nAttachments(92)\nAuthor(55)\nBody(91)\nBOM Quantity(106)\nChecked by(58)\nChecked Date(62)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Sub main()\n\n    Dim swPdmVault As New EdmVault5\n    swPdmVault.LoginAuto "TestVault", 0\n    \n    If swPdmVault.IsLoggedIn Then\n        \n        Dim swPdmVarsMgr As IEdmVariableMgr7\n        Set swPdmVarsMgr = swPdmVault\n        \n        Dim swVarPost As IEdmPos5\n        Set swVarPost = swPdmVarsMgr.GetFirstVariablePosition()\n        \n        While Not swVarPost.IsNull\n            Dim swPdmVar As IEdmVariable5\n            Set swPdmVar = swPdmVarsMgr.GetNextVariable(swVarPost)\n            Debug.Print swPdmVar.Name & "(" & swPdmVar.ID & ")"\n        Wend\n    Else\n        Err.Raise vberr, "", "\u672a\u767b\u5f55"\n    End If\n\nEnd Sub\n')))}d.isMDXComponent=!0},31429:(e,r,t)=>{t.d(r,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAAGcCAMAAACMZck4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAADShM2zhaJpZAAArfF+m3ezYsTUAAO7u2qisyV1gbff4++rv+IU1AM6iTfL0+O/y+O0cJJGwwjUxADdGddzirAAAN6zF32A2jK2mZi0vO87ysSZtvoTN0qN3OYODg7/AxIY2OF6bvNnf8NewhAAAWEQAMpre76jCnbvg8rnR6QBNnTKErW+iw5651Wl636SIV9bX2itqiywmHq7G1u3txSuWK87O0ABhZOzv9YyMj1mFn46Znp+goDF9zv369qG71+Tl6YNsV9vf5Mvv1l8AAO6rYyYAMXhNAOfr9f39/rzK2TUAYy9G0sXU45rlnZptbbLL5YugvHS62SlffjWIjIbP+Vae7wBZq6GvunmBioy92V8AY2NgPCYAWdXc73d1ds7c7e/PjFd8kU6/TIaU5SYAAJOf6evr7DmB4nhtMaK/0oSqi8zd77Gzv9TY47W979nl66nx+Pfy54RokC503dDf8NPa7TMzM5ukqc2HOCQnKu/v7+Pp72lpaQA1i86IZIZhAGBhsTGBpydSn8Wabdzi8rCDbby8vNna218AN2yCsa3FwEhaspm10eTk5DM2PKK82L7jxVySr9DR09rn84Gqw7jEzVdaAHi87jSH1ZrE7c3x+TQANxkjWe3Fm5GVsoGFpbK7ykJY1zM2ix0dHS1zmKhgAIrNrUiLrHG8db/V60ZRWjI7XriSR1+r+KysrAAAY41qMe/ysWVug7Hb8G6ZssbQ2kV/nqTX93eH43rE3tXBmkdel26TrH+csF8rANeeX+/y1pCpu6zvsT5AQUMAAIaIZJpti0GvP6a+u5aWlh81aoOw2myLoGFmeVhYWLG32ntaiABgsODl9NXcqqmnfdTj8sbHy9TU15PE3kNykOXp9SUqRNOwa7h8NcbZ7EOJ29rj0V7RW6jB3GAxNW1tmqKs61Vo3JJvMgBdibDI4R1g0tbbzAAsWnrA8Edayp6jtlJaZ66EgsPs7bbO59rAhqW/2p+yxDtMmnuIrUWEvUaO4c/U9aqLWAAAAKGKhToAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAfFklEQVR4Xu2dD7xUVZ3AJxEpJpjZFWErEkotlFyg3STIxy49eT1GeOZWKlbCeyXS5v/1z/B88NrdJB7aPlD6Iz2xwqA/Jg+QUpR6IlDhFrRsT3BRoCgwas1SMEI+/f6d+2fmzp07M2fe3Hs53w8z557fPfe+O1/OvTP3/ubcSbSFiff8eD08fXD+XV/A2gNQ4KPt9Z/76es/d35b253zv8JR1VbNlcYwqVq5plUzR3OYBcWdv3kZSlzTabe8fDa0z0dmtrWdPR+gNeOSVuM7IYprScwJEe/54E954rRZOHEnPD1w101z5rz+c1+BefPnP/un9RwFqK01VybtVq5p1czRHNYDBrAO64N/Z5+P/7zgmXPoCf5zYONugXXSk8ymIkwioa/I1JwHfvPynPf8+GWeACX82qFncFS1dcxlkQi2UvC0auZamRjA8rRbLgLhBUQ+cNcvST3NRn/UNefPtxenQkRmDRVCIrNbFnZmDBWBIrMTO//LUCGJyZMnbzEeKyfR2ZldKNOGCkCRpkNqAEUmZdpQASgy8/eGijEiNQHn2kakDhIdHUakDhKZjBGpAxL5z06WHG7at6+5eV9T0+FXmi69VKKGIuSKPHCg6eLtixdns4sfeaSpOdvUJHFDEXJEHm1qeurNEzs62tpGzpr1XDbb3CwzDEUwIjVBIpdYNL366nPdc+rrO9va4O28G0TKDEMR3CIPNy1fnp21+KGHtuzo7uzsrIdj5GGe05hIJEariVM/ihNUXYs1eAKGW8FGu4HdHJtgZC0+jcXW1jp5cmh/Wh2Aa1rSiHVg1FZps2TJth5aFUPrcdJ4zodkyj3tSdEGpeIW2XRsyJAtP3hs/frHzs/u3g198tixJoxv68GtnvVReFX4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"}}]);