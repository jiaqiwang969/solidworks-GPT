"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[5565],{3905:(e,t,A)=>{A.d(t,{Zo:()=>m,kt:()=>z});var o=A(67294);function r(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function n(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,o)}return A}function a(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?n(Object(A),!0).forEach((function(t){r(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):n(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function s(e,t){if(null==e)return{};var A,o,r=function(e,t){if(null==e)return{};var A,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)A=n[o],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)A=n[o],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),A=t;return e&&(A="function"==typeof e?e(t):a(a({},t),e)),A},m=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},M=o.forwardRef((function(e,t){var A=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(A),M=r,z=c["".concat(i,".").concat(M)]||c[M]||p[M]||n;return A?o.createElement(z,a(a({ref:t},m),{},{components:A})):o.createElement(z,a({ref:t},m))}));function z(e,t){var A=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=A.length,a=new Array(n);a[0]=M;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<n;l++)a[l]=A[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,A)}M.displayName="MDXCreateElement"},57152:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=A(87462),r=(A(67294),A(3905));const n={title:"Text Box control in SOLIDWORKS Property Manager Page",caption:"Text Box",description:"Overview of options applied to Text Box control",image:"text-box.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0},a=void 0,s={unversionedId:"codestack/labs/solidworks/swex/pmpage/controls/text-box/index",id:"codestack/labs/solidworks/swex/pmpage/controls/text-box/index",title:"Text Box control in SOLIDWORKS Property Manager Page",description:"Overview of options applied to Text Box control",source:"@site/docs/codestack/labs/solidworks/swex/pmpage/controls/text-box/index.md",sourceDirName:"codestack/labs/solidworks/swex/pmpage/controls/text-box",slug:"/codestack/labs/solidworks/swex/pmpage/controls/text-box/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/pmpage/controls/text-box/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/pmpage/controls/text-box/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Text Box control in SOLIDWORKS Property Manager Page",caption:"Text Box",description:"Overview of options applied to Text Box control",image:"text-box.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Tab control in SOLIDWORKS property Manager Page",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/pmpage/controls/tab/"},next:{title:"Handling events of SOLIDWORKS property manager page",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/pmpage/events/"}},i={},l=[],m={toc:l},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Text Box control",src:A(15730).Z,width:"250",height:"35"})),(0,r.kt)("p",null,"Text box control will be automatically generated for all properties of type ",(0,r.kt)("em",{parentName:"p"},"string"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Public Class TextBoxDataModel\n    Public Property Text As String\nEnd Class\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class TextBoxDataModel\n{\n    public string Text { get; set; }\n}\n")),(0,r.kt)("p",null,"Additional options can be specified via ",(0,r.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_TextBoxOptionsAttribute.htm"},"TextBoxOptionsAttribute")))}p.isMDXComponent=!0},15730:(e,t,A)=>{A.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAAjCAMAAACKA+foAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURauts9rb3f////f39+Pp77u9wuLj6uvt8Nvf5gAAAAD/AP//AAAA//8A/wD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMwAAZgAAmQAAzAAA/wAzAAAzMwAzZgAzmQAzzAAz/wBmAABmMwBmZgBmmQBmzABm/wCZAACZMwCZZgCZmQCZzACZ/wDMAADMMwDMZgDMmQDMzADM/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNmZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///4IJMW4AAAAodFJOU////////////wD///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABL5hn/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAX0lEQVRoQ+3YMQ7AIBDEQNiEXP7/YpCQSP5gu1npummvXcySSMclndim99FQjX7oT60FVe9H3xdO0qWjki4dlXTpqKRLRyVdOirp0lFJl47qR+c+o+uGVYeOTDoxMj2ZFl1OpNwaR4QAAAAASUVORK5CYII="}}]);