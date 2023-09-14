"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[35279],{3905:(e,o,r)=>{r.d(o,{Zo:()=>l,kt:()=>p});var t=r(67294);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function i(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?i(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=t.createContext({}),A=function(e){var o=t.useContext(a),r=o;return e&&(r="function"==typeof e?e(o):c(c({},o),e)),r},l=function(e){var o=A(e.components);return t.createElement(a.Provider,{value:o},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(e,o){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=A(r),u=n,p=m["".concat(a,".").concat(u)]||m[u]||g[u]||i;return r?t.createElement(p,c(c({ref:o},l),{},{components:r})):t.createElement(p,c({ref:o},l))}));function p(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=u;var s={};for(var a in o)hasOwnProperty.call(o,a)&&(s[a]=o[a]);s.originalType=e,s[m]="string"==typeof e?e:n,c[1]=s;for(var A=2;A<i;A++)c[A]=r[A];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13090:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>A});var t=r(87462),n=(r(67294),r(3905));const i={layout:"sw-macro-fix",title:"How to fix Missing COM (ActiveX) Component error",caption:"Missing COM Component",description:"How to fix Runtime error 429 in VBA macros",image:"runtime-error-429.png",labels:["macro","troubleshooting"]},c=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/missing-com-component/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/missing-com-component/index",title:"How to fix Missing COM (ActiveX) Component error",description:"How to fix Runtime error 429 in VBA macros",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/missing-com-component/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/missing-com-component",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/missing-com-component/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/missing-com-component/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/missing-com-component/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"How to fix Missing COM (ActiveX) Component error",caption:"Missing COM Component",description:"How to fix Runtime error 429 in VBA macros",image:"runtime-error-429.png",labels:["macro","troubleshooting"]},sidebar:"tutorialSidebar",previous:{title:"How to fix merged SOLIDWORKS macro errors",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/merged-macro-error/"},next:{title:"How to fix Missing SOLIDWORKS Type Library References error",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/missing-solidworks-type-library-references/"}},a={},A=[{value:"Symptoms",id:"symptoms",level:2},{value:"Cause",id:"cause",level:2},{value:"Resolution",id:"resolution",level:2}],l={toc:A},m="wrapper";function g(e){let{components:o,...i}=e;return(0,n.kt)(m,(0,t.Z)({},l,i,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"symptoms"},"Symptoms"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Run-time error '429': ActiveX component can't create object")," error is displayed when running the macro. Usually the ",(0,n.kt)("em",{parentName:"p"},"CreateObject")," function is highlighted:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim obj as Object\nSet obj = CreateObject("ComComponentProgId")\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Run-time error &#39;429&#39;: ActiveX component can&#39;t create object",src:r(79911).Z,width:"448",height:"268"}),"{ width=350 }"),(0,n.kt)("h2",{id:"cause"},"Cause"),(0,n.kt)("p",null,"Required COM Component (ActiveX) is not registered on the target machine. This is usually either when target application is not installed (for example Excel, MS Access etc.) or the component is registered in the x32 system while macro is running in x64 environment (since SOLIDWORKS 2012)."),(0,n.kt)("h2",{id:"resolution"},"Resolution"),(0,n.kt)("p",null,"Install the required COM components into the correct environment. It might be required to contact the vendor of the component or the developer of the macro for more information about the used ActiveX Component."))}g.isMDXComponent=!0},79911:(e,o,r)=>{r.d(o,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAEMCAMAAABk0ZaOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAADySwdKYVgBgYH6sgCYAAIfOq/Dw8HZrMdLS0gAAVlYAAHe21Kvwq3BwcF4rAKC61tTUl6nW4CUrMSjP5LnR6YODgyVrnAA2YPTivq3GwCYAMpm10VcAMaK8mjvD6qPm9ISEXjWGzda6ewAANNTV1r7i9JPEwHsxAOvsqLh6MjF6e5eDg6vwziUAVwBMm6zF30U9PHVLAHzH4YOXvkPM8V6o7KtgAKa/26OiesHu9dvc3BoaGmAAYBtDStbYujF6urnZ2qK82LLL5UGH2a2ytYdgh42+2QBZneuoXrh6V6OGV5eDl4Xf9MPX7IODl1ab2gArfPTQqpZVVlrN687Oh1ONuc/Pz+vKhajB3Ze+vvDwzoc2NgkCAnrEwDY2h76Xg0QAMZbV1jQ0NF8ANTEAWTUAAHjc849sWKqDl8nQ0snb7524016J3I+PjwA2NgAtf76+qofO8CVru+K+l12k2zx/sWAsMoOq0LDIoUVOWs7wzs7wq4eHh4c2AETV+dD00D3N8ZZVADYANmGNfhQWFqqXvnm41wBgh+L00EMAAI1rMQAAX3a/27DIwsDDxqeJfJbH4VkAMl8AANvcnD7P9KypfiYrWM6HYKo7GWTX8yoiIXq823lNAJe+4vDwq4ODqgBXVyZtvqvw8NfY2JFuMqqLWZePWzYAYM6HNgBgq1+m3UKInNLh8ZTi9JorCUWN4PT00JeDqre7vnrE3wAAAITK7C0nJQA2h6fAnJvb3JHC3aS+urXV1kYAW0rR8qjs7DZgq9fq8wBPn9rbvRxUW7C1uKzp9CIcG5zl9OK+qmEsAHxQAFkAAFTT8qqDg9iaVwAweq6OWkOK3JZwM0DR9jaHh7CsgHS82KelfNzdv0JCQqzFn13V83nA3ajCvmA2AIerh4/A3Fid3WGp4NfYmmvZ8wAAWEbX+zJ9v6rDnidwwdy9ffDOhzErKdqcWGCr8GKO4fCrYGrd+aWIV4eHYI3h9KfAvSYAWZPE39XWmrm5udabWGCo36eJWAAAAHc+JuIAAAEAdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A/////////////////////////////////////////////////////////////////////////////////////////////////wDsKOdYAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAPU0lEQVR4Xu2cDZgVVRnHx4puQrWWQqkhRYthH7JByNJqaitpWQRUJJEFQluakaFQlmJkZYFoCpIluiYLtZgl6eNX9oVGFhh+ZqhBhbYmrdBmSfnx9L7n/Ofj3jv33tnLuPLK/ydz55zzno8753fPzOAzQ1AgpqFA41CgcSjQOKHAGcQWhx7qxXmBMx54ssUliBnWvONrunMCZ8xqeQ2xxppXqkEn8AH6s8jbfw2BM55ECbHFb+Q66ARyAdokElhAAbHFa2eEAk8mFqFA4/w2ErgXsciPKNA2FGgcCjQOBRqHAo1DgcaJBb6TWOQ/qQJHNs5x+wMWjJBM/z+6TE0WBnHNkdLQ7yo3H3mq3y8MBKQTZB53t6aCQMznwr29h0yM3V+sHzvxaJc51s3+AQuOcrl0IoEyyNh+1WqSilQQuLeb/5sbeiXwYGkTCvTqvMZKJAWGS5b0kvdFApsTjHxVw1Gye3ziS0ZI5lRJ6mnuqJsbfrig/yKXlvLmx4OgcY4PSdbtRiIkrXSnH9rc1bxxulQee/Ci5rH9gmDi0ehYWOiqSiYM+I7jcV0tkkoFgacunPhXt4OBhV2Lmjd+5omGb6swST/RMKJ54/5zmr81J8o2b9yxqLn5GW2nPOOK73bNfU0nUCt9ao5vkBSo1cMAOo7H9dVIGp+MBE5JcOkVN06/csrGHZtWjNDMlBsX3K3FmxuumDJFI1M0Jn8kEWXdNuWZiT/Vmr7clUjzRE2f9PUk4lghqyxwAwgSQJ14XFKZSgL1j9iDwJVdbko3N8h8+vSj06/c3KCzHmW9m5WhQHTg9r6m1vGV1FhSoFTb3KB1fcBXT4xLKhMLbEpw6RVNS3d87PNPN624xWVWdl2rxfutu7oJ6UenP93U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"}}]);