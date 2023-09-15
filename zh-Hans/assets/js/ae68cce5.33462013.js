"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[31684],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>A});var s=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,s,o=function(t,e){if(null==t)return{};var r,s,o={},l=Object.keys(t);for(s=0;s<l.length;s++)r=l[s],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(s=0;s<l.length;s++)r=l[s],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var n=s.createContext({}),c=function(t){var e=s.useContext(n),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},d=function(t){var e=c(t.components);return s.createElement(n.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},O=s.forwardRef((function(t,e){var r=t.components,o=t.mdxType,l=t.originalType,n=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=c(r),O=o,A=m["".concat(n,".").concat(O)]||m[O]||p[O]||l;return r?s.createElement(A,a(a({ref:e},d),{},{components:r})):s.createElement(A,a({ref:e},d))}));function A(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=r.length,a=new Array(l);a[0]=O;var i={};for(var n in e)hasOwnProperty.call(e,n)&&(i[n]=e[n]);i.originalType=t,i[m]="string"==typeof t?t:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}O.displayName="MDXCreateElement"},28078:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>n,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=r(87462),o=(r(67294),r(3905));const l={layout:"default",title:"SOLIDWORKS\u81ea\u52a8\u5316\u7684\u5b8f\u548c\u811a\u672c\u5e93",image:"macros-library.svg",labels:["\u5de5\u5177","solidworks","\u5b8f"],search:!1,styles:["/_assets/styles/catalogue.css"],"group-descriptions":{Model:"3D\u6a21\u578b\uff08\u96f6\u4ef6\u548c\u88c5\u914d\u4f53\uff09\u548c2D\u56fe\u7eb8\u7684\u81ea\u52a8\u5316",Materials:"SOLIDWORKS\u6750\u6599\u6570\u636e\u5e93\u548c\u96f6\u4ef6\u5c5e\u6027\u7684\u81ea\u52a8\u5316",Frame:"SOLIDWORKS\u83dc\u5355\u3001\u5de5\u5177\u680f\u3001\u7b2c\u4e09\u65b9\u63d2\u4ef6\u3001\u6587\u6863\u7ba1\u7406\u7684\u81ea\u52a8\u5316",Developers:"\u4e3a\u4f7f\u7528SOLIDWORKS API\u6784\u5efa\u8f6f\u4ef6\u7684\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u7684\u5b9e\u7528\u5de5\u5177","Custom Properties":"SOLIDWORKS\u901a\u7528\u3001\u914d\u7f6e\u548c\u5207\u5272\u6e05\u5355\u81ea\u5b9a\u4e49\u5c5e\u6027\u7684\u81ea\u52a8\u5316",Part:"SOLIDWORKS\u96f6\u4ef6\u6587\u6863\uff08*.sldprt\uff09\u7684\u81ea\u52a8\u5316\uff1a\u51e0\u4f55\u3001\u7279\u5f81\u6811",Assembly:"SOLIDWORKS\u88c5\u914d\u4f53\u6587\u6863\uff08*.sldasm\uff09\u7684\u81ea\u52a8\u5316\uff1a\u7ec4\u4ef6\u3001\u914d\u5408\u5173\u7cfb",Drawing:"SOLIDWORKS\u56fe\u7eb8\u6587\u6863\uff08*.slddrw\uff09\u7684\u81ea\u52a8\u5316\uff1a\u8868\u683c\u3001\u89c6\u56fe\u3001\u56fe\u7eb8",Security:"\u4e3a\u4f7f\u7528SOLIDWORKS API\u7684\u6a21\u578b\u548c\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u989d\u5916\u7684\u5b89\u5168\u6027\u548c\u4fdd\u62a4",Sketch:"SOLIDWORKS\u8349\u56fe\u3001\u7ebf\u6bb5\u548c\u5173\u7cfb\u7684\u81ea\u52a8\u5316",Performance:"\u63d0\u5347SOLIDWORKS\u6587\u6863\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u64cd\u4f5c\u6027\u80fd",Geometry:"SOLIDWORKS\u51e0\u4f55\u81ea\u52a8\u5316\uff1a\u81ea\u5b9a\u4e49\u7279\u5f81\u3001\u62d3\u6251\u4f18\u5316","Import/Export":"\u5c06SOLIDWORKS\u6587\u4ef6\u5bfc\u5165\u548c\u5bfc\u51fa\u5230\u4e0d\u540c\u683c\u5f0f\u7684\u81ea\u52a8\u5316","Motion Study":"SOLIDWORKS\u8fd0\u52a8\u7814\u7a76\u6a21\u5757\u7684\u81ea\u52a8\u5316",Options:"SOLIDWORKS\u6587\u6863\u548c\u7cfb\u7edf\u9009\u9879\u7684\u81ea\u52a8\u5316","Cut-List":"\u5728\u94a3\u91d1\u548c\u710a\u63a5\u96f6\u4ef6\u548c\u56fe\u7eb8\u4e2d\u81ea\u52a8\u5316SOLIDWORKS\u5207\u5272\u6e05\u5355"},"redirect-from":["/p/solidworks-goodies.html"],sidebar_position:0},a="SOLIDWORKS\u81ea\u52a8\u5316\u7684\u5b8f\u5e93",i={unversionedId:"codestack/solidworks-tools/index",id:"codestack/solidworks-tools/index",title:"SOLIDWORKS\u81ea\u52a8\u5316\u7684\u5b8f\u548c\u811a\u672c\u5e93",description:"{% social-share %}",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-tools/index.md",sourceDirName:"codestack/solidworks-tools",slug:"/codestack/solidworks-tools/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-tools/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-tools/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{layout:"default",title:"SOLIDWORKS\u81ea\u52a8\u5316\u7684\u5b8f\u548c\u811a\u672c\u5e93",image:"macros-library.svg",labels:["\u5de5\u5177","solidworks","\u5b8f"],search:!1,styles:["/_assets/styles/catalogue.css"],"group-descriptions":{Model:"3D\u6a21\u578b\uff08\u96f6\u4ef6\u548c\u88c5\u914d\u4f53\uff09\u548c2D\u56fe\u7eb8\u7684\u81ea\u52a8\u5316",Materials:"SOLIDWORKS\u6750\u6599\u6570\u636e\u5e93\u548c\u96f6\u4ef6\u5c5e\u6027\u7684\u81ea\u52a8\u5316",Frame:"SOLIDWORKS\u83dc\u5355\u3001\u5de5\u5177\u680f\u3001\u7b2c\u4e09\u65b9\u63d2\u4ef6\u3001\u6587\u6863\u7ba1\u7406\u7684\u81ea\u52a8\u5316",Developers:"\u4e3a\u4f7f\u7528SOLIDWORKS API\u6784\u5efa\u8f6f\u4ef6\u7684\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u7684\u5b9e\u7528\u5de5\u5177","Custom Properties":"SOLIDWORKS\u901a\u7528\u3001\u914d\u7f6e\u548c\u5207\u5272\u6e05\u5355\u81ea\u5b9a\u4e49\u5c5e\u6027\u7684\u81ea\u52a8\u5316",Part:"SOLIDWORKS\u96f6\u4ef6\u6587\u6863\uff08*.sldprt\uff09\u7684\u81ea\u52a8\u5316\uff1a\u51e0\u4f55\u3001\u7279\u5f81\u6811",Assembly:"SOLIDWORKS\u88c5\u914d\u4f53\u6587\u6863\uff08*.sldasm\uff09\u7684\u81ea\u52a8\u5316\uff1a\u7ec4\u4ef6\u3001\u914d\u5408\u5173\u7cfb",Drawing:"SOLIDWORKS\u56fe\u7eb8\u6587\u6863\uff08*.slddrw\uff09\u7684\u81ea\u52a8\u5316\uff1a\u8868\u683c\u3001\u89c6\u56fe\u3001\u56fe\u7eb8",Security:"\u4e3a\u4f7f\u7528SOLIDWORKS API\u7684\u6a21\u578b\u548c\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u989d\u5916\u7684\u5b89\u5168\u6027\u548c\u4fdd\u62a4",Sketch:"SOLIDWORKS\u8349\u56fe\u3001\u7ebf\u6bb5\u548c\u5173\u7cfb\u7684\u81ea\u52a8\u5316",Performance:"\u63d0\u5347SOLIDWORKS\u6587\u6863\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u64cd\u4f5c\u6027\u80fd",Geometry:"SOLIDWORKS\u51e0\u4f55\u81ea\u52a8\u5316\uff1a\u81ea\u5b9a\u4e49\u7279\u5f81\u3001\u62d3\u6251\u4f18\u5316","Import/Export":"\u5c06SOLIDWORKS\u6587\u4ef6\u5bfc\u5165\u548c\u5bfc\u51fa\u5230\u4e0d\u540c\u683c\u5f0f\u7684\u81ea\u52a8\u5316","Motion Study":"SOLIDWORKS\u8fd0\u52a8\u7814\u7a76\u6a21\u5757\u7684\u81ea\u52a8\u5316",Options:"SOLIDWORKS\u6587\u6863\u548c\u7cfb\u7edf\u9009\u9879\u7684\u81ea\u52a8\u5316","Cut-List":"\u5728\u94a3\u91d1\u548c\u710a\u63a5\u96f6\u4ef6\u548c\u56fe\u7eb8\u4e2d\u81ea\u52a8\u5316SOLIDWORKS\u5207\u5272\u6e05\u5355"},"redirect-from":["/p/solidworks-goodies.html"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"solidworks-tools",permalink:"/solidworks-GPT/zh-Hans/docs/category/solidworks-tools"},next:{title:"visual-basic",permalink:"/solidworks-GPT/zh-Hans/docs/category/visual-basic"}},n={},c=[{value:"\u5b8f\u5e93\u7ec4\u7ec7\u7684\u6700\u4f73\u5b9e\u8df5",id:"\u5b8f\u5e93\u7ec4\u7ec7\u7684\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u6279\u91cf\u8fd0\u884c",id:"\u6279\u91cf\u8fd0\u884c",level:2}],d={toc:c},m="wrapper";function p(t){let{components:e,...l}=t;return(0,o.kt)(m,(0,s.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"solidworks\u81ea\u52a8\u5316\u7684\u5b8f\u5e93"},"SOLIDWORKS\u81ea\u52a8\u5316\u7684\u5b8f\u5e93"),(0,o.kt)("p",null,"{% social-share %}"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/xarial/codestack/issues/new?labels=macro-request"},"\u8bf7\u6c42\u5b8f"),'{ target="_blank" class="download-button" }'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SOLIDWORKS\u5b8f\u5e93",src:r(151).Z,width:"133",height:"80"}),"{ width=400 }"),(0,o.kt)("p",null,"\u672c\u9875\u9762\u5305\u542b\u4e86\u4e00\u4e9b\u6709\u7528\u7684\u5b8f\u3001\u5b9e\u7528\u5de5\u5177\u548c\u811a\u672c\uff0c\u4f9bSOLIDWORKS\u5de5\u7a0b\u5e08\u4f7f\u7528\u3002\u5b8f\u6309\u7167\u7c7b\u522b\u8fdb\u884c\u5206\u7ec4\uff1a\u96f6\u4ef6\u88c5\u914d\u3001\u56fe\u7eb8\u3001\u6027\u80fd\u7b49\u7b49\u3002"),(0,o.kt)("p",null,"\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/"},"SOLIDWORKS API\u7f16\u7a0bVBA\u548cVSTA\u5b8f"),"\u90e8\u5206\uff0c\u4e86\u89e3\u5728SOLIDWORKS\u4e2d\u4f7f\u7528\u548c\u521b\u5efa\u5b8f\u7684\u6307\u5357\u3002"),(0,o.kt)("p",null,"\u627e\u4e0d\u5230\u9002\u5408\u60a8\u7684\u5b8f\uff1f\u63d0\u4ea4",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xarial/codestack/issues/new?labels=macro-request"},"\u8bf7\u6c42\u5b8f"),"\u8868\u5355\uff0c\u6211\u4eec\u7684\u56e2\u961f\u5c06\u5ba1\u67e5\u60a8\u7684\u8bf7\u6c42\uff0c\u5e76\u5c3d\u529b\u5c06\u5b8f\u6dfb\u52a0\u5230\u5e93\u4e2d\u3002"),(0,o.kt)("h2",{id:"\u5b8f\u5e93\u7ec4\u7ec7\u7684\u6700\u4f73\u5b9e\u8df5"},"\u5b8f\u5e93\u7ec4\u7ec7\u7684\u6700\u4f73\u5b9e\u8df5"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/"},"Toolbar+"),"\u662f\u4e00\u4e2a\u514d\u8d39\u4e14\u5f00\u6e90\u7684",(0,o.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/"},"SOLIDWORKS CAD+\u5de5\u5177\u96c6"),"\u63d2\u4ef6\uff0c\u5b83\u5141\u8bb8\u5728SOLIDWORKS\u73af\u5883\u4e2d\u7ec4\u7ec7\u81ea\u5b9a\u4e49\u5de5\u5177\u680f\u7684\u5b8f\u5e93\u3002\u8be5\u63d2\u4ef6\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5c06\u914d\u7f6e\u5b58\u50a8\u5728\u96c6\u4e2d\u4f4d\u7f6e\u6765\u7ba1\u7406\u591a\u7528\u6237\u73af\u5883\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5de5\u5177\u680f\u4e2d\u7684\u81ea\u5b9a\u4e49\u5b8f\u6309\u94ae",src:r(33998).Z,width:"434",height:"141"}),"{ width=450 }"),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528SOLIDWORKS\u7684\u539f\u751f\u529f\u80fd\u521b\u5efa\u5b8f\u6309\u94ae\u3002\u8bf7\u9605\u8bfb",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/macro-buttons/"},"\u5728SOLIDWORKS\u5de5\u5177\u680f\u4e2d\u521b\u5efa\u5b8f\u6309\u94ae"),"\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u6d4f\u89c8\u672c\u8282\u4ee5\u627e\u5230\u9002\u5408\u60a8\u9700\u6c42\u7684\u751f\u4ea7\u529b\u548c\u81ea\u52a8\u5316\u5de5\u5177\u3002"),(0,o.kt)("p",null,"\u5982\u9700\u5176\u4ed6\u751f\u4ea7\u529b\u63d2\u4ef6\uff0c\u8bf7\u8bbf\u95ee",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/"},"SOLIDWORKS\u5b9e\u9a8c\u5ba4"),"\u9875\u9762\u3002"),(0,o.kt)("h2",{id:"\u6279\u91cf\u8fd0\u884c"},"\u6279\u91cf\u8fd0\u884c"),(0,o.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u9700\u8981\u5bf9\u591a\u4e2a\u6587\u4ef6\u6216\u6587\u4ef6\u5939\u4e2d\u7684SOLIDWORKS\u6587\u4ef6\u6279\u91cf\u8fd0\u884c\u5b8f\u3002\u5c1d\u8bd5\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/batch/"},"Batch+"),"\uff0c\u5b83\u662f\u4e00\u4e2a\u514d\u8d39\u7684\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\uff0c\u662f",(0,o.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/"},"SOLIDWORKS CAD+\u5de5\u5177\u96c6"),"\u7684\u4e00\u90e8\u5206\u3002"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"{% catalogue { type: sw-tool } %}"))}p.isMDXComponent=!0},33998:(t,e,r)=>{r.d(e,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbIAAACNCAMAAADl9g/iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAADbAACVAABmtmOiwJDb/wA6OrZmAIGhbWlpaZtkZJA6AIytv///2wAAOuPZXs+sAJ+fnDFwIwA6kDoAAJDbtkKRtsO5NWaQkMzLuzoAOsnGoWFgSSwwdCtigsG7cff39/v2m/+2ZvLz88Ta5Nv//+PKA6mcE7b//9/ajXU4OLW2t4GbdYSEcKurqjB8otuQOvXbAGMzM0eLO6undP7+/sLS3Ga2/2YAOhYbdKdvb5KRiipceoyCDAGpAAAAZtjk6tbKQGYAAO3lgritJLa3scjDgnl6jLewgr6+u1KeEqvM246LOv/+qp+eiDoAZjqQ28QzM0ZEHqOVPkJFer+cAb22Wd7EAFyEm7q4nrKxq5WnjA97CIyMil9fXdXQh1tdhi5xlKzAzGaQ29jY1vHqitzantHRzTKGreXdc7+enqKcXJC2/+Dg3medLYpUVADEANrRWv/bkHZ1gmNjYt/XaL23bNTQnn58Xd/es+vt7svLypqXbmeTVkyNGma226WhcmtsggAAAKKtmi2SImGUrvz2ijxqhejo6f+2kJydrtDBIquojru7u5BmkEJ+nc7ETtzc28TEwunheu3UALGqVc/Pz5c2NlupGUlJQP75pDk8eYOgsYiJpJiYlrSrOeXk5JeVeq96eiElc7GxscS+etDDMk5QgdjVpY64zHqbZrSrccC7jP//tdnd47q3lDw/QtzZq42JeN3IDtTLUayus5KSkRykE5qamCxpisBISF+tK2ZmAODd3aedJzIyMr29v5GKIaipo6Ojo2aWRL+/v1iRLXZ4mv7lAGdpkuTba4iIhvHodtTU1KKik1KNqnJ8cnOpw/TtkYeDSpWVlPfxltPY3mpoSNuQZsejALayenKbWdbV1c/Oy8LCu5yagFVTNNXRkNv/28dpaZeXncy+X4ikfVWcvcnJw8zBQbm4rbSwkMK2JdzTYrereXCWq4B/e6yXl+rkktuQkKI+Pn6AnszHjGi8H7u7s4s5OY+MX6+oSt3ST4ODgyInfQAAACdmPK8AAAEAdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAczdcDAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAX0UlEQVR4Xu2dC3hUVX7A2XUtrogwq7XtYuBCVGRHJ6AMFMNKVLJCFGrXoPLIEmwMsDQo+IgmqysfLqbArWSUiKSOwRmMPCKCkA5abZwxCAmDj82uRQhIW9m4KCpVFkX4+v+fx32eO7mTkMkdc3/fJ3Pved075zfnf859gL0qbeJvkVy6n4JAkassvUBlfru4ypwAKmuxTS+X7ueZH7/bi8o7RT86xxlpJJ1JTQe4ys4gKVcWj9PtDtO5RsLJwWo5im5Q1slDdq6RMFvm2MNVRg526gwo63gjrjKbJJzL/ufVX+PH8199SXbbw9YZZ4+c8OGGDRvmZbN9BScqa/R4IiY8MZllG0m5MvM09Oo/orPnn376eZaQGHEjBrJX160evGTJ/U5S1hi2kDAxMs1M1NJZNygzHvLX6AyMnWv1s9IjbsRA9rHV7991w5MfO0iZN+KpF7cnR6adMBGNRD3iDkm5MsE0NO3Vr7766ulz2V57WDSip+XYYDDWnrL7Lv6Ac/HFH3z0Y5asYk9Zw9vPsi1rAr6WsBSOsD09QmW+CAw0obPUKxMwDY0FGmWK18uSxdg64+Zhg+96cu7cj02Fdcp+dayubtKk1asHQwxdsuS2+1iyikFZuF5PjCZ7Q2/TDWsaY2grHKR7BuRILvOkYVokNzcqjI0pVyaYhiZe8/TT33zzZbycIlnFfIpFIwpbHkWOvX/Dk01NK34P3Pwgy0H0yg6hrz+8fxeOyN0r21UWXDN1E3KEMOHRLzBx6baG0C6SbY23vh4GWrRF/GO0UibnCsdZNygzHhKMfXPN3T/7GXcmeRM6EzeicrAOmPQ+DLL7P1vw3XfXvbDs9ywHMSkDYzDr3fDkXBvKIpseomzevLm4uPh4M6Q9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"},151:(t,e,r)=>{r.d(e,{Z:()=>s});const s=r.p+"assets/images/macros-library-6999306307476d0e50cc8621eb13d9a2.svg"}}]);