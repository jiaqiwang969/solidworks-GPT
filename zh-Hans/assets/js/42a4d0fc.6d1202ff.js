"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[68658],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},P=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(r),P=i,f=u["".concat(c,".").concat(P)]||u[P]||p[P]||n;return r?o.createElement(f,s(s({ref:t},d),{},{components:r})):o.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=P;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<n;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}P.displayName="MDXCreateElement"},27041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=r(87462),i=(r(67294),r(3905));const n={title:"Convert Solid To Surface feature in Geometry++",caption:"Convert Solid To Surface",description:"Converts solid bodies to surface bodies in SOLIDWORKS part document preserving the parametric functionality",image:"icon.png","toc-group-name":"labs-solidworks-geometry-plus-plus"},s=void 0,a={unversionedId:"codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/convert-solid-to-surface/index",id:"codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/convert-solid-to-surface/index",title:"Convert Solid To Surface feature in Geometry++",description:"Converts solid bodies to surface bodies in SOLIDWORKS part document preserving the parametric functionality",source:"@site/docs/codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/convert-solid-to-surface/index.md",sourceDirName:"codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/convert-solid-to-surface",slug:"/codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/convert-solid-to-surface/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/convert-solid-to-surface/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/convert-solid-to-surface/index.md",tags:[],version:"current",frontMatter:{title:"Convert Solid To Surface feature in Geometry++",caption:"Convert Solid To Surface",description:"Converts solid bodies to surface bodies in SOLIDWORKS part document preserving the parametric functionality",image:"icon.png","toc-group-name":"labs-solidworks-geometry-plus-plus"},sidebar:"tutorialSidebar",previous:{title:"Bodies fillet feature in Geometry++",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/body-fillet/"},next:{title:"Crop Bodies feature in Geometry++",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/labs/solidworks/geometry-plus-plus/user-guide/crop-bodies/"}},c={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This feature converts solid bodies to surface bodies."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convert solid body to surface body property manager page",src:r(4497).Z,width:"327",height:"365"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select solid body or bodies to convert"),(0,i.kt)("li",{parentName:"ul"},"Click green tick")),(0,i.kt)("p",null,"New feature is added to the feature manager tree."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Solid to surface feature in the feature manager tree",src:r(35893).Z,width:"329",height:"488"})),(0,i.kt)("p",null,"All selected solid bodies are replaced by corresponding surface bodies. Feature is fully parametric. If some of the base features which were forming solid bodies modified the surface body feature is modified as well."))}p.isMDXComponent=!0},4497:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAAFtCAMAAACjoFgJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAi/CQBjsPf393sbGEVmo6Hq/QA4OHpfYJCbn/PJGkYZGQA4i6iCJEaR1eZWVQAAODOZ/94lABGaFbTO8qOj21rO/2aj24ArMCIiIiBUgmMAON/f3/finlQ+FJnG702Usw0NDXij4rBjALG6C8CVnSZdfQA3VaaZZsezVc/k93/e/2MAAFlXV3+Z/w9GahicZlRzfnJbJtSLOAAAY6urrER7mcYWGxlstHhfHFKt4uHO/2MAY35+fsiUl1Sbu3rC4PewY/jcVUWEwMD292VERIWFRYHCamuz0sKsQ7lzc6PbwDmbBTNtjGOw9zgAAJOTk9kzMm0YGMzS122csoXA9xkZRjIyMit3l7fEzSVGS5etvNTU1JJGGZx4GhlGktPX29bW1jmI1MG8/7aYPFqZ/5KS1leCmpLWtUcxCoV7UaNmRXqNlbCw1EREZUt1i8vKyoXD39nZ2IXQ7mOryueAgTiLixkZbdujZo+xj/TddrL399yvsos4AHiyztCsHvb3s1ySsGdnZ1qiwbS0tEiLS2ykwZ1dXyhkwXiUeYVFRaSkopLS7Tg4i0RERGSUHioqKTo6OhKzE46OjWOLnkRrgcRZQKmKOMH//7yZHoHK54ODg2iGkqi4wpnZ8sCFRcwoKjZxwtaSRpJvFhMTEz9dY3K72mZmRdvh5vS9tZV7K8TExJ+XfKmlj2aLaLywg7VtGbu7u+HBNFbDCuHl6G2TpWu650OJqSxkg4qKaGd6eFSIp+Pj46KMRY2ksmOwsNmSXTgAOOa/Iu7u4mObud66DaCr/9GQkHxxckVFhXCtzrOQk221tWNMEuFnaD9xQimbKW+U2IzL5tbPxPXWj22190ZGGT1ykcrFubCnfK9SPYx4O9vb2lqP2HSqw0hldKK/94w4OISfrjKBqJHW999HSfe2ce6en4xlII65zVKlVorU9oQnJpqZmcK8qxkZGYtji2GjwX+61efOZJmMaFR/ktK4R2l7YdW8vaPb9x1WdUmDoDZpxExLS8q1ZQAAAC0sBUEAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAWDklEQVR4Xu2dC3wV1ZnAqVNZBdFVd7XZ3lCQFTXKdq0NvtbykhW6RlGpwZJVo7QsavUGYdWIIYE0dU02TSQuj1CkvroarI2rNZoLu8ukrdLFrTFs2nqb2qqUlo1ZgrGlUX77fed8Z+7M3Mfci19wQr7/jztz5pzvnJnzz3ncexN/jrKEHGmmswfxmDNpPLYIuSDjkQvxyIN45EE88iAeeRCPPAwnj9He3iglQ8cw8hitbW0pDKvIYeSxtzUaLemli7AxnDxGS+LxcHtsUEeHkM7r6nisNdzzusErUvaZnDEePSJD6jHMOB7dIsVjzsh45GE4rY9hhjyqo4N4zBnt0Yd4zBnxyEMaj/R7ByE7ZDxyIR55EI88iEce0nhsPkKgDg09aTyWZEe2z9lM8UGwx9H9hx7xyEN2HkvjkZhtx2JxujYMvcfSiG1HSunCwR9Xes22T139yU/+/A90bQiZx3gstvTdW8Zved1v0l172xk+tlEB4O13cXFxySo4wMlHsse4XV9v+398/rgbF7cdfdVV73zx9G/8inKIkHmMvfu5reVdXeVvjN8SoyyNu/YZ032cQQWAz6NVXFJcjx8CiqOURSSNs3jMrm+0Y3HfiPTGXTO5/bTTTzhh+di8Y370v5SnCZlHe8m4PWftP7j1qUVLbMrSeDzu85HZY7Makasoi/B5XBqJ1a6qr19VG4sspSyNJ+7Gol+8WfDk8ld/k5eXN/sPn3IrD5PHUlgal4zZvn7PopkzZ2bymAQVAH6PyiEW+Ga2N25prOXDRqC4uLEl5hHpjitd/O3T/sxCj1P68vKOWeEWGSaPsci7t+wcM2bMHtCYyaPy4sJ2Zfg9VsdiMSy2M3ksjbQ0NjaXNDZGL2loaPFsNu64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"},35893:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/solid-to-surface-feature-09faf8614a058e77cb842fb71c162b01.png"}}]);