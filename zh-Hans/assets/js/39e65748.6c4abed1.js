"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[99653],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>b});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(o),d=r,b=m["".concat(p,".").concat(d)]||m[d]||A[d]||i;return o?n.createElement(b,a(a({ref:t},l),{},{components:o})):n.createElement(b,a({ref:t},l))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},17524:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>A,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const i={title:"Option box control in SOLIDWORKS Property Page with SwEx.PMPage framework",caption:"Option Box",description:"Overview of SOLIDWORKS Property Manager Page option box control creation and customization using SwEx.PMPage framework",image:"options-box.png","toc-group-name":"labs-solidworks-swex",labels:["option","pmpage"],sidebar_position:0},a=void 0,s={unversionedId:"codestack/labs/solidworks/swex/pmpage/controls/option-box/index",id:"codestack/labs/solidworks/swex/pmpage/controls/option-box/index",title:"Option box control in SOLIDWORKS Property Page with SwEx.PMPage framework",description:"Overview of SOLIDWORKS Property Manager Page option box control creation and customization using SwEx.PMPage framework",source:"@site/docs/codestack/labs/solidworks/swex/pmpage/controls/option-box/index.md",sourceDirName:"codestack/labs/solidworks/swex/pmpage/controls/option-box",slug:"/codestack/labs/solidworks/swex/pmpage/controls/option-box/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/pmpage/controls/option-box/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/pmpage/controls/option-box/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Option box control in SOLIDWORKS Property Page with SwEx.PMPage framework",caption:"Option Box",description:"Overview of SOLIDWORKS Property Manager Page option box control creation and customization using SwEx.PMPage framework",image:"options-box.png","toc-group-name":"labs-solidworks-swex",labels:["option","pmpage"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Number Box in SOLIDWORKS Property Manager Page",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/pmpage/controls/number-box/"},next:{title:"Options of SOLIDWORKS Property Manager Page",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/pmpage/controls/page/"}},p={},c=[],l={toc:c},m="wrapper";function A(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Option box control",src:o(8484).Z,width:"225",height:"92"})),(0,r.kt)("p",null,"Options group can be defined by decorating the property of type Enum with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_OptionBoxAttribute.htm"},"OptionBoxAttribute"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Imports CodeStack.SwEx.Common.Attributes\nImports CodeStack.SwEx.PMPage.Attributes\n\nPublic Class OptionBoxDataModel\n\n    Public Enum Options_e\n        Option1\n        Option2\n        <Title("Third Option")>\n        Option3\n    End Enum\n\n    <OptionBox>\n    Public Property Options As Options_e\n\nEnd Class\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.Common.Attributes;\nusing CodeStack.SwEx.PMPage.Attributes;\n\npublic class OptionBoxDataModel\n{\n    public enum Options_e\n    {\n        Option1,\n        Option2,\n        [Title("Third Option")]\n        Option3\n    }\n\n    [OptionBox]\n    public Options_e Options { get; set; }\n}\n')))}A.isMDXComponent=!0},8484:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAABcCAMAAACvOSLjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAACWg0dT3sAA4i4s4AJahrNfZ3GMAAFlvgvewY/f39wAAOABjsGOw97fAx4uLY5vd7WMAOAA4ODiLizgAAGOwsIvU987s72MAYzdUarW1tbBjAI6Pj/fUizgAONSLOM3NzQAAYww9WxGSzT5qhIs4OJOdp9/g4DiL1LD398Lm+gVJc7u7u2eAk8vP1Yuwiwx3rzgAY9T396SssuLj4/f3sEW718bHxyuNthQrPCE6TneLmdLT1LK2vNr5/5qbm6OkpLi9w63Z8A0lNx4/WNrc3uvr6UNabcbIy5GSkgotRdze36mqqgVPfB6ZzdHU2XCDkilGXOb//7rZ6i2k0b7Cxc3Q1abg7w18tA9Oc2p+jWB1hiJBWkRechqa0TtYb2+CkRYuQQgmOxN8srS4viQ9UI+QkMXo9wlRfHuKl5CeqZijrR9BWjhVbFtwgg15r3qLmAAAAGYAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///72MylAAAABydFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AHzXy+gAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAO5SURBVHhe7ZvrW9MwFIeDQ+ciXtCJuA0Z3go6QWEVRcaKurgxVFSGt4GCivfL///Jc5Lswp6yrZ+a0+V9urbJ+iEvSdMtP8Z41LGG9LGG9LGG9BkcQydVzGSKKUcXI4Q2THlZwbnIeilVjhDK0MuBXqkEkjlPVkQIaZjKcVEu/DxaKINil1504yf1GSHQ0PG4KHz89eHi442a4J66F904YyfG5KnEHW0rtDFxyb/eGNAwleXl47curLy6+uXPMs/KTpxIQnfJncbf0I2fpWBYFOL67xsvV15vXn6xIEQR69PTuE/E5t3RuSSbmplIMjYiLdOMxeZBGKrR/7C+NQY0rHDn3ZOHX8/cHfq0+09Asdlud3zGjYPPJJqOyVo45ekR6LzYfGJqhohhhuff37+3uTm08+bRhoAijM870HjZfGmgj80iiKsiEUMYpd+X3j7b2blyc+kHl6NUt1urcHGtaTiu+k0XiRjiTFNf+/b39tO1elXNNGK4dR+iRrPTOopEDPP7nC/Ud/f2duunON/PY72cRhPwuHDjIzC7wI2nldL6PiRliE98vrWxvf2g2nri4+SpZpLTcvLkkx1zqTQUw+zgY9M8pCFfz8EHNkTk1tVJE+P7qBfKkJcri/BRxlmswOe2g0TFEDrPy2S8Rle2ERnD6GIN6WMN6WMN6WMN6WMN6TM4hja3oIsyHJDcYnU10rnF59rs7NbzcuDcIm36Mo00xNVEKXistBUwt0hMwwsXrMwFDYtCFNCv6uRFNmhuAe64SGwuaFjhzir0X14Ax4LmFvLPgAdTQcMMz9dK0H8Ad4LmFnpvLnqU1hzUA/KBcwvT51c90ywvK0HYB8stZNlo0BBziywMTwB2gXIL8wWlocwtqlV5HwbMLaCgLjMXaWhzC9JoQ5tbEMYa0sca0sca0sca0sca0mdwDG1uQRdlOLi5hf5yeGA9resXRgNX3tDQJ7fAfxtlLHbEx6Zp2O8vMkIGDf1yC9Vev0Y36vpMNkIHDf1yi4bhXJJN4zme4ToiY+e0SIBkI1TQ0Ce3aBiqdAINMb6QocWkGpnyfTj0k2yEChr65BYNQ9VotbXVAQGSjXDRo7Qzt2izgZfaZLv1G61D72QjZPRM05lbaAPdSrW11eGVff8iI2TQ0C+3aNnAS21QCbcXT+snRJ/Jhrw2TNDQN7eQjdOtVBtU4s8rzjda3V+yoa4NEWnYLbfojQkaXVCGXXKL3tAwPDy36A0Rw+hiDeljDeljDeljDeljDekTdUPO/wOU5854vVbNeQAAAABJRU5ErkJggg=="}}]);