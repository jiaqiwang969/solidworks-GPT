"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[74535],{3905:(t,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>m});var e=o(67294);function r(t,a,o){return a in t?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o,t}function i(t,a){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),o.push.apply(o,e)}return o}function n(t){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){r(t,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(o,a))}))}return t}function c(t,a){if(null==t)return{};var o,e,r=function(t,a){if(null==t)return{};var o,e,r={},i=Object.keys(t);for(e=0;e<i.length;e++)o=i[e],a.indexOf(o)>=0||(r[o]=t[o]);return r}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(e=0;e<i.length;e++)o=i[e],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var s=e.createContext({}),l=function(t){var a=e.useContext(s),o=a;return t&&(o="function"==typeof t?t(a):n(n({},a),t)),o},d=function(t){var a=l(t.components);return e.createElement(s.Provider,{value:a},t.children)},u="mdxType",A={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},p=e.forwardRef((function(t,a){var o=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),u=l(o),p=r,m=u["".concat(s,".").concat(p)]||u[p]||A[p]||i;return o?e.createElement(m,n(n({ref:a},d),{},{components:o})):e.createElement(m,n({ref:a},d))}));function m(t,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var i=o.length,n=new Array(i);n[0]=p;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=t,c[u]="string"==typeof t?t:r,n[1]=c;for(var l=2;l<i;l++)n[l]=o[l];return e.createElement.apply(null,n)}return e.createElement.apply(null,o)}p.displayName="MDXCreateElement"},74634:(t,a,o)=>{o.r(a),o.d(a,{assets:()=>s,contentTitle:()=>n,default:()=>A,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var e=o(87462),r=(o(67294),o(3905));const i={layout:"sw-macro-fix",title:"\u4fee\u590d\u8fd0\u884c\u65e7\u7248 SWBasic (*.swb) SOLIDWORKS \u5b8f\u65f6\u7684\u9519\u8bef",image:"swbasic-swb-macro-filter.png",labels:["\u5b8f","\u6545\u969c\u6392\u9664"]},n=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/swb-macro-error/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/swb-macro-error/index",title:"\u4fee\u590d\u8fd0\u884c\u65e7\u7248 SWBasic (*.swb) SOLIDWORKS \u5b8f\u65f6\u7684\u9519\u8bef",description:"\u75c7\u72b6",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/swb-macro-error/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/swb-macro-error",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/swb-macro-error/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/swb-macro-error/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/swb-macro-error/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"\u4fee\u590d\u8fd0\u884c\u65e7\u7248 SWBasic (*.swb) SOLIDWORKS \u5b8f\u65f6\u7684\u9519\u8bef",image:"swbasic-swb-macro-filter.png",labels:["\u5b8f","\u6545\u969c\u6392\u9664"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528API\u5728SOLIDWORKS\u6a21\u578b\u4e2d\u6682\u505c\u91cd\u5efa\u64cd\u4f5c\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/suspend-rebuild/"},next:{title:"\u4f7f\u7528\u5b8f\u5728SOLIDWORKS\u4e2d\u4f7f\u7528API\u66f4\u6539\u7cfb\u7edf\u9875\u9762\u8bbe\u7f6e\u9009\u9879",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/system-page-setup/"}},s={},l=[{value:"\u75c7\u72b6",id:"\u75c7\u72b6",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",level:2}],d={toc:l},u="wrapper";function A(t){let{components:a,...i}=t;return(0,r.kt)(u,(0,e.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u75c7\u72b6"},"\u75c7\u72b6"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u9009\u62e9 SWBasic \u5b8f (*.swb)",src:o(31004).Z,width:"886",height:"195"})),(0,r.kt)("p",null,"\u5728\u7f16\u8f91\u5e26\u6709\u201c\u7f16\u8bd1\u9519\u8bef\uff1a\u672a\u5b9a\u4e49\u7684\u7528\u6237\u7c7b\u578b\u201d\u9519\u8bef\u7684 *.swb \u683c\u5f0f\u7684\u65e7\u7248 SOLIDWORKS \u5b8f\u65f6\u5931\u8d25\u3002\u5982\u679c\u4ece\u201c\u5de5\u5177\u201d->\u201c\u5b8f\u201d->\u201c\u8fd0\u884c\u201d\u83dc\u5355\u4e2d\u8fd0\u884c\uff0c\u901a\u5e38\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u7f16\u8bd1\u9519\u8bef\uff1a\u672a\u5b9a\u4e49\u7684\u7528\u6237\u7c7b\u578b",src:o(84921).Z,width:"691",height:"441"}),"{ width=300 }"),(0,r.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,r.kt)("p",null,"SWBasic \u5b8f\u662f\u4ee5 ASCII \u683c\u5f0f\uff08\u5373\u7eaf\u6587\u672c\uff09\u5b58\u50a8\u7684\u811a\u672c\uff0c\u65e0\u6cd5\u5b58\u50a8\u4efb\u4f55\u5f15\u7528\u4fe1\u606f\u3002SOLIDWORKS \u7c7b\u578b\u5728 SOLIDWORKS \u7c7b\u578b\u5e93\u4e2d\u5b9a\u4e49\uff0c\u8fd9\u4e9b\u7c7b\u578b\u5e93\u5728 SWBasic \u5b8f\u4e2d\u9ed8\u8ba4\u4e0d\u88ab\u5f15\u7528\u3002"),(0,r.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6cd5"},"\u89e3\u51b3\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6253\u5f00\u8981\u7f16\u8f91\u7684\u5b8f\uff08\u201c\u5de5\u5177\u201d->\u201c\u5b8f\u201d->\u201c\u7f16\u8f91\u201d\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5bfc\u822a\u5230 ",(0,r.kt)("em",{parentName:"li"},"\u201c\u5de5\u5177\u201d->\u201c\u5f15\u7528\u201d")," \u83dc\u5355")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"VBA \u7f16\u8f91\u5668\u4e2d\u7684\u5f15\u7528\u83dc\u5355",src:o(96853).Z,width:"582",height:"226"}),"{ width=300 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u6240\u6709 SOLIDWORKS \u7c7b\u578b\u5e93")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"VBA \u5f15\u7528\u5bf9\u8bdd\u6846\u4e2d\u7684 SOLIDWORKS \u7c7b\u578b\u5e93",src:o(38601).Z,width:"543",height:"458"}),"{ width=300 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ee5 *.swp \u683c\u5f0f\u4fdd\u5b58\u5b8f")))}A.isMDXComponent=!0},84921:(t,a,o)=>{o.d(a,{Z:()=>e});const e=o.p+"assets/images/swb-macro-user-defined-type-not-defined-error-c96acbda6749d8a5cc9c464c15e6fdf9.png"},31004:(t,a,o)=>{o.d(a,{Z:()=>e});const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3YAAADDCAMAAAD5nHPkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAD/AAAthOvJhO0cJGxsbIjHpv//thuLmXAzAG2cx3/C5d3e4ZCBOAAAOIqsg67W6ifO42SMjHqKnNnZ2fDw8Krl9iQANtv//zc4jTcAANLS1OHO/8SmiLa2ZjqS7KlfAMWabSUlJW1thH+Z/wBRpz/O8vL/8orIyMPk9dru7k6R63/e/22axCUAYLq5uXEzOM2GNaurqoRehMPDxjg7APb295ptbdLb5ezsxO7asJagaJvF76Cr/2+lwurq64Ou1lrO/04AOMfHyVRTVDOr/wAAX9ju+tv/2zdWbcjn94WFhWlVACByytWMY67Sif/bkLb//1Sx7VAAAHi94mWu1qKiojqQ2/+2ZnONXUp0jm2Escfn1HFvNLHb8MG8/2QAZYXG6Iadq7L5smrPu7bP5sH//8vLzcHO/9bl9TY3Y7nR6W6j9iAAAGY6AJaqtABfigBcsN3w+jOZ/1Ck9qzBzuPp76uts7ZmAP7+/u7FmtXV17CDbZptg5Db/5A6AOvr15BcAC2B09u2ZlyXuX3N7M7O0Z67zKDu//uzjTk5ObCEjM7p+AA6kNuQOmLI6QA2Yzpmtu7uqYRtbZPN7INtm7b/23K53wsMDcnr652dnWW2/4zK61+p7TQANTO8/8Lr6wBfqjQAX4OGjWS0tOXl5dPs+W1tmqq8x8ilYoU1ACEuhVEuAGJhYZKSXm/F9ixiipjR746NjTWFzOrryWQAAABmtiGsvl8ANeDx+baQOo7m9tDqscidnWd0gtqwg1QvNd3t9X/O////25BmkKOBZafr6+6pXy0vMY6Zw5WVlYODrh4eHsXlsHd2dZi5/2FQAMbFiq6Zr2y12wAAZcXH0pbOzTaKsUys6ZquwzoAZZA6OoXN7+/wzH50NbaQkGvN7AA1hrKystbq6qyBNx9vpsHe/87v7zaHz+H//5ltmeLj6vDx3Mbw8ZKxhuHu/zoAOYSx2yBRqERERH+8/7y9vxZzf6/G3arv7+/OhpXPqVqZ/2YAOlKmsINthAAAAAFRLnsAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAfkElEQVR4Xu2dC5xU1X3HJ1rcai3mwaiAiUuMbbYlUoiOhcROKGIjqFm1wW185wGtaR5W0+4KEdckhBAlCZI0AZRgnRiIgK+laUxLDEmgtDHagForRAiNtTU+mtKqMX76+/3//3MfszO7OzO7M8Pw/352Zs4953/OvbOcL+fcuzPnZnpamdz2XC6bzefHkPnjF804edH2fM+fWanjDDcle9wHld+KZXPtHGf4cO1AJdplCxLlODXg2oEKtMsXco5TM65dRdqNsV+b49TCdulw2uPGL5o3Y79r59o5Iw20y+cLhfEE1p3s2rl2zogzpSCj3ZGEnW7+vDmu3aDa4TemZI+crzmOUwEzpmxPM2eSazeodgXb7OkpzPAB0KmYQiGfLcK1G1y7nG335DE/1zzHGTKuXY3aLZo/qZDVXMcZIq5dhdrJryjWric7Zsak9K9w8hpLgPb/sMTAMCwROjlzxguWrJD2/hVTjUU7SR5kWYZ49NWx69QL78fL0wtGjZJENnsNXifo1uZR4IiQO+2mUaNu/znSVhrqclvyEcUKo0a9XTZQ/4RLsllWe94yEDmKeRP4BHadqq0Xw7gjshOkcILsBGk5mmRL2M8E7HhCyKsU1w7Uol0u15MbonZb9zxpqX6ktXvxlsctlWCA2gOSbqxptHt6wQlT2KufXnCEPCTr7dnNF94vW5ujDo3cpz8LteiAlYa6kqduKPRWmDb7Fdj19z+HXSYiDaGLE0yfzbNLaadHMun+aygzdoNG5KiQO+2mREuGa1cLlWt3ZNBOZgyYZSapXbtbS4x1VWuXaqxptAMiybQvooPLE5/FEm7F2mkZXl+5JCq1ujQiKidBg6cXPPxxHdRs3NKipxc8n50wW4bHpxeU1A47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"},38601:(t,a,o)=>{o.d(a,{Z:()=>e});const e=o.p+"assets/images/vba-sw-references-162af64f9b00c6ed6f2e207ea484eb21.png"},96853:(t,a,o)=>{o.d(a,{Z:()=>e});const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkYAAADiCAMAAACcEfiPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAADCyMHrgegAAgIw4ACXQKmYAjEqJnu0cJGCo3gAANlrO//zixuTMXICYcHlrL4WvgDQ0NJm10fDgcABQnzgAACcANAAAAOTp7np7emm0t5HC3axhADOZ/wArfNKJN6/H/f39/dS4qGeJ1ylbiiYAWp651bLK5GhpaPPz863RjafAvTY3jABxAMLd1PD9/fD48ODg4FBmPIluXna+2kciBXBLHl+GhsCoMNuQl+7VuL/N2wA6wrfP6GMANyVru45kjv3v1QAAVqjBnXSiojOs/3VLAKa/263z86ioqDoAgKG61htNfdvf5gA0XuD40MrKymUAZSyC3cCdY7y8vB4eHmNSg+HO/2MAAEpxg9Dyy7W1tfuzjWGu9JOv+l1/zqR6O4KHkABm1kOJ3POtYQA2iazF4JmZmaSIWP/2mcDQ/485OUFGPDo6wkAAVjgAONDd/6hmMcDc/P+2rcG8/7Zmg+Ds/1N8QH/e//TSidr9/TeK0q7HwcC9jgAApXyf8WBgq6mpxgBhrUyd/AAAZGRkAMHBwURkrX5zRrX9/aK82HymYLiptYCq8DmO2QBMm6KXomUtMdH09F8sAMbi+6qcwUpowNTU1HGAjGW1/fzZjk5TUyBhoolZAOLGqf392aTe/PPzraypfqjB3UQAMv/bwiYAACAhVwA/czY3ZZA6hgAAHyBKoXJETzQAHvy0ZGYArYhbKojR84ODXQAeSnKY4KDA9ripxo1rMaussgAlW6ake9Tv/c+zYv38tMDds4CAgLPG1LD3sI2NjaC48AQwgLNkABA8kGsyADqQ61B4zDoAntqPOWCYVa+MNwBZszBYq7jV8KuMWcaptGy+/FtdW/Dvztra2ZSKWdeNZHrE3zgAY0F0okUAAIvU9wCKAKvEwJRwMT2NteH9/XtPAKhmZCZwwO3omvDo4E9PT7m6xISc2rDJoQBjskoeQf394v/e/6SPd2WCwJF6QAA5jkWO4Y7a/Q0NDbX92tS4SYtbYKCgoLW4dVyk2vX10wAAAK0RzNEAAAEAdFJOU///////////////////////////////AP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wC4CICSAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAco0lEQVR4Xu2dD5wcZXnHR7NijdAQy/G5SEzYCyk5EmKjgIUqSAKJEWtPiHoaiVTCJSolMfzRI0BajRdSTVI4SsyBHCEQFUOvqGeJyLmWuqQYKQQhCAYNRKhKqkiMTU/y6e953ud9Z2Z3dm82O+zf5/vJ7rzzvu+88868333fdzY7c167opSNN1ZRysZLK0rZeG9QlLJRjZQEUI2UBFCNlARQjZQE8P5cUcpGNVISQDVSEkA1UhJANVISwDtHUcpGNVISQDVSEkA1UhLA+0dFKZvYGt2zTgJg9hkSKA5lC2S9x5t5kgRLZHb+hkUKW+x5F5pQTdd51q4Jx0gQuamm93he/u4Cx8BB/+hqibI1Whw4GTmEm+Teo1+WUIAiWxclsjBhsatpDdd5au/ox/xyqMpTe0mhxbmOBI/hHq7Y7ObWaHLE5/qQmySqMCFJjV7JOvvlTL0Ogt0TXWzwGGZdQiXUpEZg3Zw5U3uf6fVGvzxnDvpMWoSZ7XkTxiDXHHS7lDr7DBdGEm0vCYZ7NyP/MSYbZyWox/YzShbeetbtFDH5pKm9r9018ySbI1gRFOIqyPiF0SKHxRxV+3WGRrw0NZ6160JZ87PkHsOce6hms13G2sE7CUe7Di9Uc/aEY9DxznnRHrgF8ThDdAoogLNG59mG+WTYFcNbX+Yyw01CJ93PaLPQ1n6TfAUByRGqCDeJqaDEmMJQEJcShjWqgzr7GpEdflVclrxjkEOrRY02bdp07+Qnp/aewUv8Q0SYWbe/Du+z15nA1N4LN80+ww/vmHCMv+JD0cjGLwMVHcpIWdzWtg42R6giKMRWUGJcYYE4y4519VFnKscwG4XvmCn5XBYTCB7DpnunYRPKXWuQRqgmV/K2o7H0pJKz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"}}]);