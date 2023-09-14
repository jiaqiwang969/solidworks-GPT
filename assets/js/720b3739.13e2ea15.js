"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[17825],{3905:(e,r,o)=>{o.d(r,{Zo:()=>l,kt:()=>w});var t=o(67294);function i(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function A(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){i(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function c(e,r){if(null==e)return{};var o,t,i=function(e,r){if(null==e)return{};var o,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(i[o]=e[o]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=t.createContext({}),a=function(e){var r=t.useContext(s),o=r;return e&&(o="function"==typeof e?e(r):A(A({},r),e)),o},l=function(e){var r=a(e.components);return t.createElement(s.Provider,{value:r},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var o=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=a(o),m=i,w=g["".concat(s,".").concat(m)]||g[m]||u[m]||n;return o?t.createElement(w,A(A({ref:r},l),{},{components:o})):t.createElement(w,A({ref:r},l))}));function w(e,r){var o=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=o.length,A=new Array(n);A[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[g]="string"==typeof e?e:i,A[1]=c;for(var a=2;a<n;a++)A[a]=o[a];return t.createElement.apply(null,A)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},85251:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>A,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var t=o(87462),i=(o(67294),o(3905));const n={layout:"sw-macro-fix",title:"How to fix merged SOLIDWORKS macro errors",caption:"Merged Macro Does Not Work",description:"Fixing Run-time error '424' - Object required for macros which work correctly independently but failed to work when merged to one",image:"error-object-required.png",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-merged-macro-does-not-work.html"]},A=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/merged-macro-error/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/merged-macro-error/index",title:"How to fix merged SOLIDWORKS macro errors",description:"Fixing Run-time error '424' - Object required for macros which work correctly independently but failed to work when merged to one",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/merged-macro-error/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/merged-macro-error",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/merged-macro-error/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/merged-macro-error/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/merged-macro-error/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"How to fix merged SOLIDWORKS macro errors",caption:"Merged Macro Does Not Work",description:"Fixing Run-time error '424' - Object required for macros which work correctly independently but failed to work when merged to one",image:"error-object-required.png",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-merged-macro-does-not-work.html"]},sidebar:"tutorialSidebar",previous:{title:"Failed to run SOLIDWORKS macro with multiple entry points",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/macro-multiple-entry-points/"},next:{title:"How to fix Missing COM (ActiveX) Component error",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/missing-com-component/"}},s={},a=[{value:"Symptoms",id:"symptoms",level:2},{value:"Cause",id:"cause",level:2},{value:"Resolution",id:"resolution",level:2}],l={toc:a},g="wrapper";function u(e){let{components:r,...n}=e;return(0,i.kt)(g,(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"symptoms"},"Symptoms"),(0,i.kt)("p",null,"SOLIDWORKS macros work correctly independently but failed to work when merged to one. Possibly, the error is displayed: ",(0,i.kt)("em",{parentName:"p"},"Run-time error '424': Object required")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Run-time error &#39;424&#39;: Object required when running the macro",src:o(10817).Z,width:"320",height:"193"}),"{ width=320 height=193 }"),(0,i.kt)("h2",{id:"cause"},"Cause"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Merged macros might not be compatible"),(0,i.kt)("li",{parentName:"ul"},"There might be required initialization from the source macro which was not copied to the destination macro"),(0,i.kt)("li",{parentName:"ul"},"Variable naming might be different between source and target macros  ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Code block inserted from recorded macro",src:o(5617).Z,width:"320",height:"222"}),"{ width=320 height=221 }"),(0,i.kt)("h2",{id:"resolution"},"Resolution"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identify which line fails"),(0,i.kt)("li",{parentName:"ul"},"Check the state of variables. Hover the mouse and see if it is not shown as ",(0,i.kt)("em",{parentName:"li"},"Nothing "),"in the tooltip."),(0,i.kt)("li",{parentName:"ul"},"Make sure that the correct portion of the macro is copied"),(0,i.kt)("li",{parentName:"ul"},"Make sure that required initialization is copied as well (if applicable)"),(0,i.kt)("li",{parentName:"ul"},"Make sure that the variables naming is consistent")))}u.isMDXComponent=!0},10817:(e,r,o)=>{o.d(r,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADBCAMAAACJ1ZlRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAALzdyplkFs7EfvX4zyNuuvDmrZOiuO7o3uzx5/bz3PPy7/T09Pb08vDw8JTD3FAOADZzqoqpy1FCdZKFg7bM2OLcpq6+wT+11gFTfa+fk2Ved3lQIMnHxoq3wNnf5aukawDB7HCTrc/cqb3R25fL7UQpR8bb5W6wz4l3b0RmgDFGdLS0s1V8qu72+rGcpE5gaGZ3mh4CSai5y+Po7s3g6ZGdp9rY05uwyMrQ1KPK0J7M47XP6kDG6F4tSq3JqrXO5z+Bj204AZBtRgAPdQCluKC61qnY8s21k7CJX29fZWuaw1iYw5eRh+vQue7kzmpWS9GiY8Lk9iVGkbTFzb/U63hzdOjn6HWx3z5UjrWBRXqBkdjl87DI44u73a+vrczezT5EY8C+sbrR6jWezJ+ruZm10brj5avF4M/s+FCuzb7W9kV4ofDt6t3u0rzO4paWlqK82JeSZ7PM5cTY7ers76nC3aivjVpCLAcJOH9wTtPPo+vs7CxsktrQjF1GRd/txleRtgcvTHxmXj1omZt+O+T75wJ1jZa42NPPzWGawvDevhYwfJ241M+5ucW4pbqvb4GDfIG1zkJ2u8W2eHed1+Lf3NLV2Lm6uWYPMbzF0mNDV5/U8eLv9r6+vuLz5/7+/le62Z2bqWyLlM7g8mDE5Mnc6KCbmk5Yib/CxNDa3rff9o2x2oKRlVV9nmthN05omGzM6gBnhICUrPLw0HpcTUpAS3JEL9/f4Nve3bqumKW/29ra2qqztU9VeKm80sfIkK7H4WFVYnyewqSbtCwnS87Ozph+aU06ZL6imbjBx3R4fdPT06e/2fr44aWzxenx9CtVmsCWZrvK0nVGR16ft/byvjYqbcrc79Pi8uG6iVWGiZGvzpyETWdweC5dea3D1eTk5IyKjEeBqtbW1qaYfZiOd2Km0MnEnimi0qGlqd/NqYJ1YdLj7Ju63ePfvGer09vr9WCHuevz92CPz3OHpHBra7vM6TcAAKbI6JeejNanek2OsqdmR1vL7AAAAFLdR4IAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAQVUlEQVR4Xu3dDVRT5/3A8TpRkNxcV3zBahkOQwGlvoyIUWzn5v7iCy+WRgTlxbYLhA4UDERFRJ3YFagrAiJToRStiIqyAS41QYxUsYMilmrRopWA1oGCEeX/17qePffmQXNDlCTPzv5H/H2PJM997s2TnI83IY3l8FIBRBQAEgaAhOkA6VzIvNwpFg4DFmlyWyCzOlgSzvqxgLlFgmbIzOJ/kdoLSGnEzRGQuXl59gImFYXiOciMvH7zGNB9VcQ2yMwivL7TA8STkBlxzsBt8yAzA0DCuIB4EjIjACTMGGCcMk53qRs8pTgl3hvHHs3Ebj5JN4GO4yzzzEWfv7iALEOcaPlhdOlxv3ne8kzdjLHmldwfjozjlJ52SubC06lTt+Nxomrm76Bw7977zHq9Wd8fjkcDImOA1v+XhUh811XHiT5EAowC+8Vy6S7Q/hspzZJxyEJZs6Ezzv7YDlEz3svGHOH5NnMzt1LRrZc7n9w8QsRcPT7weU8fcIluSik5NilM6bHwdPVX1vOU58rK7M7ZldkpPcvKtik90JYcTVXLJYkTq0eedopQKiu/PSwvmuRl3SyXoEOsP1RK7JRo1Cz3PC+Pi5O73ZWKvt1WhW6OVi4r6xTZKeVoo3NgECo5gOjEQMklwd8skkqCK6qrzh72+PsF33sP1939cOTE6u3BVbdaNT5oyvNstUfib+xiX6veplR+9eoi6fYs9ZZ7lacWuWUeDZLeiFYGVpdMivM8L1UqpW53ZWii/Yj1qbv2i9PcgjRZ0qKp1dt3fKW7t+e8r5w36APK2STB7SnKRFcEOOLD1UOkUunD82r7d8KkHoszEy88CF3dKpWu2eC1+pG08qwXc/zDLLRHfeue+zuH1WIEeL3VSy6y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"},5617:(e,r,o)=>{o.d(r,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADeCAMAAAB7VSkfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAA6vJrgQHbbCFY/r2y7Kimx9ruesAAOLMoACWbu9/pPJAAHukvuwCYtnY15V8bKXO3c7y+4V9rWBQULelvvFtZuDj63Kkz09JZ+PBoXakZsTM4JWDku83RewAImJDq/fN3OPSvl59kr6igNvv8YqHvaemp7fA2Z/QyveWZ5KDAGAnkDoADs6ynvSvusXZ8PjX8Zi807q7u/RxOneLofrOxJqZmIJ2jv336wtVef7+/qetY04FSO48b4yTpL2lkJqlvqnQ8szJyPS51PGbzO9mk/Hl1uv3/XRyfHxlY+jj2by3oLWPepaBgNi/woO6qenq62aN0oeV04hgD3adSH5ljMfl8Jqw0J2UoqWIjZi86encvvnTsvOgpvSWhPDx4Eo7Tc7Qlo2zf4d3b6G9kvRpAMq7s/Dr7cyrkZeVvvzjurCJTfTx7O9ydPeTQ5zBq8Wuv3tRQs+lbnR2kNnp+fjp4+0GQoqMjuW/u/r187ve9/FbYM3d4SoReVhgcbTM38DAwJWisH1rqkVQqD9HhvT1+czO0+bZ0rigr8aYiqS2vczk/Id3gYuPsOTbq4+szqiNgWyIs7vLuqaCcU5mjvFUOPz02rOzspSRj+Lm46jA1GMzM8XE1bm7VWSnjfe+n467wfi+v3V+nd7QzMvQrdS9oOneyrSXiaSosv3q17i9eKeckZt5qe9SgdPa64hpSGJqhO+Gt76ZaHiWsbi/juHMsfLy8/WxjpCv3M7R3vApAOL1/fGChM3Wx/XaxeLq9qSZwpSPmZClwfrn8niSx8XDx4aNm/v695RNjrOzw2cSAKaTkzlhiYmYvfTA7aWt0bjP7fX7/dTm8O0rYWVxqfbmyZNvXafB5GxMZbve4AQxZtq8j3emlL6pnfRyUvFIH6aowY6asld1vOnt9KGXsNfDrWdha/WBZvF7fGhWlHh2uYi3mP3149CpgNOuurfO0ebc3cK0rbS6zPJPU3qEjdra45WNf52yfvna2w4AKoaDkomFgOvm5O0ZJPVvJAAAAIJUsaMAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAg20lEQVR4Xu2dDVxUVd74c5Xw79rgC5E+2P4jFOz5LyKEePe3BYg1oyg4tRsvopLZyktjajJN19gAN8RVeVEKZojNZAQkjCxllEVBIDhLRHIpNCsKdsTKxgRWzAdm9/P8zr2XF035W9cU7H4/H2buPffcF77zO+e+nXvuHSAjiUEC2VhxQOZHQAVau7uL8avjcT7lalgV3Zw4OJju7gpxqA+FwsARG53wU9jEWxUO7GWzMr6O4lAfRKFQcxabWhU/lt5oVZg1im5+RIBJpxs3bKECN3+cU7cUWAczELPJzJqFKQBqtYaLVAOxmjvsHmoE1qwxqCDSpDaI02HdN/8sQwVqc5KYkOe3erI7kKiNOBypdjqed3+c1eaAihhwmRo1WJMgtQ6samANZlaYgyxq7Zy8DSCD/hRWdfvJPK+4DpsdNAfOYiZWDtpzcAtAYzD1rWVYQQVGYujZT7Sefgyq923aFH1WDCun2r3vb3QezzGVb0DBzirIX7h9kVeZ2yehvu8JGUA7owt12Yfsu1MYJ89MBCPOTQWWfO6yMCTAI9krIJv07g2Mh/xViT4pXEwXa5fD6LO2HxDi0jK3DIz4KyzG2abWZn1yMj/ezUPpkanfm7ERnBboE6ug3ZFZ6GrRb11/Dz/HMKNP4Lp5oMWvoI3fbQwSi0x74uYmSM42JJ2rUNbSEFkcDGPGa+dyvCDKd0txHnI6vlQof6ij6GIVisHplh4OgtK0jz8XuLfUbSOQolj462HMEWPvvBQstZs395XrTP0qDxxGgUofgNVLlXunpXzW7RYMDK4oYwIQKOnUu4NSvzlOnGN40S9wIy+wJva7bX0CwRpwcWKhzap7wlRuL3mvP0lsYoEdr0zBf3OekOEfO05/jGkO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"}}]);