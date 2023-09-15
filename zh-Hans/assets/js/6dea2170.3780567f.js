"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[34003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>z,kt:()=>i});var A=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,A)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,A,r=function(e,t){if(null==e)return{};var n,A,r={},m=Object.keys(e);for(A=0;A<m.length;A++)n=m[A],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(A=0;A<m.length;A++)n=m[A],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=A.createContext({}),M=function(e){var t=A.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},z=function(e){var t=M(e.components);return A.createElement(a.Provider,{value:t},e.children)},l="mdxType",Z={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},p=A.forwardRef((function(e,t){var n=e.components,r=e.mdxType,m=e.originalType,a=e.parentName,z=s(e,["components","mdxType","originalType","parentName"]),l=M(n),p=r,i=l["".concat(a,".").concat(p)]||l[p]||Z[p]||m;return n?A.createElement(i,o(o({ref:t},z),{},{components:n})):A.createElement(i,o({ref:t},z))}));function i(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=n.length,o=new Array(m);o[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[l]="string"==typeof e?e:r,o[1]=s;for(var M=2;M<m;M++)o[M]=n[M];return A.createElement.apply(null,o)}return A.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>Z,frontMatter:()=>m,metadata:()=>s,toc:()=>M});var A=n(87462),r=(n(67294),n(3905));const m={title:"SOLIDWORKS \u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762\u4e2d\u7684\u6570\u5b57\u6846",image:"number-box-units-wheel.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0},o=void 0,s={unversionedId:"codestack/labs/solidworks/swex/pmpage/controls/number-box/index",id:"codestack/labs/solidworks/swex/pmpage/controls/number-box/index",title:"SOLIDWORKS \u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762\u4e2d\u7684\u6570\u5b57\u6846",description:"\u7b80\u5355\u7684\u6570\u5b57\u6846",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/labs/solidworks/swex/pmpage/controls/number-box/index.md",sourceDirName:"codestack/labs/solidworks/swex/pmpage/controls/number-box",slug:"/codestack/labs/solidworks/swex/pmpage/controls/number-box/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/pmpage/controls/number-box/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/pmpage/controls/number-box/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"SOLIDWORKS \u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762\u4e2d\u7684\u6570\u5b57\u6846",image:"number-box-units-wheel.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS \u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762\u4e2d\u7684\u5206\u7ec4\u6846",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/pmpage/controls/group/"},next:{title:"\u5728SOLIDWORKS Property Page\u4e2d\u4f7f\u7528SwEx.PMPage\u6846\u67b6\u521b\u5efa\u9009\u9879\u6846\u63a7\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/pmpage/controls/option-box/"}},a={},M=[],z={toc:M},l="wrapper";function Z(e){let{components:t,...m}=e;return(0,r.kt)(l,(0,A.Z)({},z,m,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u7b80\u5355\u7684\u6570\u5b57\u6846",src:n(16721).Z,width:"252",height:"35"})),(0,r.kt)("p",null,"\u6570\u5b57\u6846\u5c06\u81ea\u52a8\u4e3a ",(0,r.kt)("em",{parentName:"p"},"int")," \u548c ",(0,r.kt)("em",{parentName:"p"},"double")," \u7c7b\u578b\u7684\u5c5e\u6027\u521b\u5efa\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Imports CodeStack.SwEx.PMPage.Attributes\nImports SolidWorks.Interop.swconst\n\nPublic Class NumberBoxDataModel\n\n    Public Property Number As Integer\n    Public Property FloatingNumber As Double\n\n\nEnd Class\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using CodeStack.SwEx.PMPage.Attributes;\nusing SolidWorks.Interop.swconst;\n\npublic class NumberBoxDataModel\n{\n    public int Number { get; set; }\n    public double FloatingNumber { get; set; }\n\n}\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_NumberBoxOptionsAttribute.htm"},"NumberBoxOptionsAttribute")," \u81ea\u5b9a\u4e49\u6570\u5b57\u6846\u7684\u6837\u5f0f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5177\u6709\u9644\u52a0\u6837\u5f0f\u7684\u6570\u5b57\u6846\uff0c\u5141\u8bb8\u6307\u5b9a\u5355\u4f4d\u5e76\u663e\u793a\u62c7\u6307\u8f6e\u4ee5\u66f4\u6539\u503c",src:n(72088).Z,width:"250",height:"84"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Imports CodeStack.SwEx.PMPage.Attributes\nImports SolidWorks.Interop.swconst\n\nPublic Class NumberBoxDataModel\n\n\n    <NumberBoxOptions(swNumberboxUnitType_e.swNumberBox_Length, 0, 1000, 0.01, True, 0.02, 0.001,\n                      swPropMgrPageNumberBoxStyle_e.swPropMgrPageNumberBoxStyle_Thumbwheel)>\n    Public Property Length As Double\n\nEnd Class\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using CodeStack.SwEx.PMPage.Attributes;\nusing SolidWorks.Interop.swconst;\n\npublic class NumberBoxDataModel\n{\n\n    [NumberBoxOptions(swNumberboxUnitType_e.swNumberBox_Length, 0, 1000, 0.01, true, 0.02, 0.001,\n        swPropMgrPageNumberBoxStyle_e.swPropMgrPageNumberBoxStyle_Thumbwheel)]\n    public double Length { get; set; }\n}\n")))}Z.isMDXComponent=!0},72088:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,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"},16721:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAAjCAMAAACHHZevAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAJDb/3Z2dv/bkPb29gA6kGYAOjqQ29rb3ZA6AP///52dne7u7tuQOklJSToAZtv//7+/vx4eHgBmtrb/////trZmAOTk5OPp72a2/2YAZuvt8Do6kDIyMqurq4aGhl1dXeLj6ra2tszMzCoqKlVVVTw8PKuts2ZmZtvf5iMjI6WlpYyMjHl5ebu9wgAAAAAzZgAzmQAzzAAz/wBmAABmMwBmZgBmmQBmzABm/wCZAACZMwCZZgCZmQCZzACZ/wDMAADMMwDMZgDMmQDMzADM/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNmZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///7F7v34AAAAwdFJOU///////////////////////////////////////////////////////////////AGKl0HgAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEVSURBVGhD7dnHEoIwEIDhqKti7L2g2MCCwvs/nkmWIjNx5Lyb/wA54OEjwzIOAhjHHu+ld7qlHqzXg0owQLvBn31JN//5B59dRzOHr+TwOk54RcUzQzxAiHqGeIDZ4WT0NvxQiPYEl5TK8ADxKHkftd6CH7Yn0JubJalyfNTsB5fpxYqH3lbK1nhhfkCpYuezbPhlp5EdiFUMvCILfqc2nS3e7Ly+A8Sqg8dnfk9v3NfB62kvV12zJFUtvFwJQfBNVxNPNIev5PA6NnjkqljiD3Ec3h5vnniITslrynPnFbgZXH/+nyeawmu71gdo54ZHbB4vPFqLWOGRWlbBU/9chdSyb7y/oZyfD7yv0G7wbHN4ngF8AOv/Y+r76R+aAAAAAElFTkSuQmCC"}}]);