"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[6801],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>p});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(t),b=i,p=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return t?r.createElement(p,a(a({ref:n},m),{},{components:t})):r.createElement(p,a({ref:n},m))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},60254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const o={title:"\u5728Visual Basic\u4e2d\u4f7f\u7528\u9012\u5f52\u6280\u672f",caption:"\u9012\u5f52"},a=void 0,l={unversionedId:"codestack/visual-basic/algorithms/recursion/index",id:"codestack/visual-basic/algorithms/recursion/index",title:"\u5728Visual Basic\u4e2d\u4f7f\u7528\u9012\u5f52\u6280\u672f",description:"\u89e3\u91ca\u9012\u5f52\u5e76\u5728Visual Basic\u4e2d\u4f7f\u7528\u5b83\u6765\u8f93\u51fa\u7269\u6599\u6e05\u5355\uff08BOM\uff09\u7684\u7ed3\u6784",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/visual-basic/algorithms/recursion/index.md",sourceDirName:"codestack/visual-basic/algorithms/recursion",slug:"/codestack/visual-basic/algorithms/recursion/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/visual-basic/algorithms/recursion/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/visual-basic/algorithms/recursion/index.md",tags:[],version:"current",frontMatter:{title:"\u5728Visual Basic\u4e2d\u4f7f\u7528\u9012\u5f52\u6280\u672f",caption:"\u9012\u5f52"},sidebar:"tutorialSidebar",previous:{title:"Visual Basic \u7b97\u6cd5\u96c6\u5408",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/visual-basic/algorithms/"},next:{title:"Visual Basic \u4e2d\u7684\u963b\u585e\u548c\u975e\u963b\u585e\u7b49\u5f85\u51fd\u6570",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/visual-basic/algorithms/wait/"}},s={},c=[{value:"\u89e3\u91ca\u9012\u5f52\u5e76\u5728Visual Basic\u4e2d\u4f7f\u7528\u5b83\u6765\u8f93\u51fa\u7269\u6599\u6e05\u5355\uff08BOM\uff09\u7684\u7ed3\u6784",id:"\u89e3\u91ca\u9012\u5f52\u5e76\u5728visual-basic\u4e2d\u4f7f\u7528\u5b83\u6765\u8f93\u51fa\u7269\u6599\u6e05\u5355bom\u7684\u7ed3\u6784",level:2},{value:"BomItem\u7c7b",id:"bomitem\u7c7b",level:2}],m={toc:c},u="wrapper";function d(e){let{components:n,...o}=e;return(0,i.kt)(u,(0,r.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u89e3\u91ca\u9012\u5f52\u5e76\u5728visual-basic\u4e2d\u4f7f\u7528\u5b83\u6765\u8f93\u51fa\u7269\u6599\u6e05\u5355bom\u7684\u7ed3\u6784"},"\u89e3\u91ca\u9012\u5f52\u5e76\u5728Visual Basic\u4e2d\u4f7f\u7528\u5b83\u6765\u8f93\u51fa\u7269\u6599\u6e05\u5355\uff08BOM\uff09\u7684\u7ed3\u6784"),(0,i.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u9700\u8981\u89e3\u6790\u5206\u5c42\u6570\u636e\u3002\u8fd9\u662f\u4e00\u79cd\u6811\u5f62\u7ed3\u6784\u7684\u6570\u636e\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u7ec4\u8282\u70b9\uff0c\u6bcf\u4e2a\u8282\u70b9\u53ef\u80fd\u5305\u542b\u5b50\u8282\u70b9\u7684\u96c6\u5408\uff0c\u6bcf\u4e2a\u5b50\u8282\u70b9\u53c8\u53ef\u4ee5\u6709\u81ea\u5df1\u7684\u5b50\u8282\u70b9\u96c6\u5408\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002\u5206\u5c42\u6570\u636e\u7684\u793a\u4f8b\u662f\u5305\u542b\u53ef\u80fd\u5177\u6709\u5b50\u8282\u70b9\u7684\u8282\u70b9\u7684XML\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/loops/"},"\u5faa\u73af"),"\u6765\u89e3\u6790\u8fd9\u4e9b\u6570\u636e\uff0c\u4f46\u8fd9\u4e2a\u4efb\u52a1\u4f1a\u53d8\u5f97\u590d\u6742\uff0c\u5e76\u4e14\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u4f1a\u53d7\u5230\u5f71\u54cd\u3002\u66f4\u7b80\u5355\u7684\u89e3\u51b3\u65b9\u6848\u662f\u4f7f\u7528\u9012\u5f52\u6280\u672f\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u5c06\u89e3\u6790\u5355\u4e2a\u8282\u70b9\uff08\u6216\u5355\u4e2a\u5c42\u7ea7\u4e0a\u7684\u8282\u70b9\uff09\uff0c\u7136\u540e\u9012\u5f52\u8c03\u7528\u81ea\u8eab\u6765\u5904\u7406\u6240\u6709\u5b50\u8282\u70b9\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u7269\u6599\u6e05\u5355\uff08BOM\uff09\u7ed3\u6784\u8868\u793a\u4e00\u4e2a\u4ea7\u54c1\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BOM\u7ed3\u6784\u793a\u4f8b",src:t(75396).Z,width:"303",height:"266"}),"{ width=350 }"),(0,i.kt)("p",null,"\u5728Visual Basic\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7c7b\u6765\u63cf\u8ff0\u8fd9\u4e2a\u7ed3\u6784\uff0c\u5176\u4e2d",(0,i.kt)("strong",{parentName:"p"},"Children"),"\u53d8\u91cf\u53ef\u80fd\u5305\u542b\u5b50\u88c5\u914d\u8282\u70b9\u3002"),(0,i.kt)("h2",{id:"bomitem\u7c7b"},"BomItem\u7c7b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Public Name As String\nPublic Qty As Integer\nPublic Children As Variant\n")),(0,i.kt)("p",null,"\u4e3a\u4e86\u8f93\u51fa\u7ed3\u6784\uff0c\u53ef\u4ee5\u7f16\u5199\u4ee5\u4e0b\u51fd\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Sub main()\n    \n    Dim bom As New BomItem\n    bom.Name = "A"\n    bom.Qty = 1\n    \n    Dim bomChildren(1) As BomItem\n        \n    Set bomChildren(0) = New BomItem\n    bomChildren(0).Name = "B"\n    bomChildren(0).Qty = 2\n    \n    Set bomChildren(1) = New BomItem\n    bomChildren(1).Name = "C"\n    bomChildren(1).Qty = 3\n    \n    bom.Children = bomChildren\n    \n    Dim bomSubChildren(2) As BomItem\n        \n    Set bomSubChildren(0) = New BomItem\n    bomSubChildren(0).Name = "D"\n    bomSubChildren(0).Qty = 1\n    \n    Set bomSubChildren(1) = New BomItem\n    bomSubChildren(1).Name = "E"\n    bomSubChildren(1).Qty = 5\n    \n    Set bomSubChildren(2) = New BomItem\n    bomSubChildren(2).Name = "F"\n    bomSubChildren(2).Qty = 1\n    \n    bomChildren(0).Children = bomSubChildren\n    \n    PrintBom bom\n    \nEnd Sub\n\nSub PrintBom(bom As BomItem, Optional level As Integer = 0)\n    \n    Dim offset As String\n    offset = String(level, "-")\n    \n    Debug.Print offset & bom.Name & " (" & bom.Qty & ")"\n    \n    If Not IsEmpty(bom.Children) Then\n        Dim i As Integer\n        For i = 0 To UBound(bom.Children)\n            Dim child As BomItem\n            Set child = bom.Children(i)\n            PrintBom child, level + 1\n        Next\n    End If\n    \nEnd Sub\n')),(0,i.kt)("p",null,"\u7ed3\u679c\u5c06\u8f93\u51fa\u4ee5\u4e0b\u4fe1\u606f\u5230VBA\u7f16\u8f91\u5668\u7684\u5373\u65f6\u7a97\u53e3\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"A (1)\n-B (2)\n--D (1)\n--E (5)\n--F (1)\n-C (3)\n")))}d.isMDXComponent=!0},75396:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/bom-dc534808780658016a66f54c5dcde975.svg"}}]);