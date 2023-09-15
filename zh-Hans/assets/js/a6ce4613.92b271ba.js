"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[71126],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),c=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},A=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(r),A=n,m=u["".concat(a,".").concat(A)]||u[A]||l[A]||s;return r?o.createElement(m,i(i({ref:t},d),{},{components:r})):o.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=A;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<s;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}A.displayName="MDXCreateElement"},6587:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const s={title:"\u4f7f\u7528SOLIDWORKS API\u811a\u672c\u63d0\u53d6\u6587\u4ef6\u7684\u8d28\u91cf\u5c5e\u6027",image:"msgbox-mass-properties.png",labels:["\u8d28\u91cf\u5c5e\u6027","vbScript"]},i=void 0,p={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/get-mass-properties/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/get-mass-properties/index",title:"\u4f7f\u7528SOLIDWORKS API\u811a\u672c\u63d0\u53d6\u6587\u4ef6\u7684\u8d28\u91cf\u5c5e\u6027",description:"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528vbScript\u901a\u8fc7SOLIDWORKS API\u4ece\u6307\u5b9a\u7684\u6587\u4ef6\u4e2d\u63d0\u53d6\u8d28\u91cf\u5c5e\u6027\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/get-mass-properties/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/get-mass-properties",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/get-mass-properties/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/get-mass-properties/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/get-mass-properties/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u811a\u672c\u63d0\u53d6\u6587\u4ef6\u7684\u8d28\u91cf\u5c5e\u6027",image:"msgbox-mass-properties.png",labels:["\u8d28\u91cf\u5c5e\u6027","vbScript"]},sidebar:"tutorialSidebar",previous:{title:"\u901a\u8fc7vbScript\u6279\u91cf\u5bfc\u51faSOLIDWORKS\u6a21\u578b",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/batch-export/"},next:{title:"\u4eceWindows\u6587\u4ef6\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\u4ee5\u5feb\u901f\u67e5\u770b\u6a21\u5f0f\u6253\u5f00SOLIDWORKS\u88c5\u914d\u4f53",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/open-quick-view/"}},a={},c=[],d={toc:c},u="wrapper";function l(e){let{components:t,...s}=e;return(0,n.kt)(u,(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528vbScript\u901a\u8fc7SOLIDWORKS API\u4ece\u6307\u5b9a\u7684\u6587\u4ef6\u4e2d\u63d0\u53d6\u8d28\u91cf\u5c5e\u6027\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u6587\u672c\u6587\u4ef6\u5e76\u5c06\u5176\u547d\u540d\u4e3a",(0,n.kt)("em",{parentName:"li"},"get-mass-prps.vbs")),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u4ee5\u4e0b\u4ee3\u7801\u590d\u5236\u7c98\u8d34\u5230\u6587\u4ef6\u4e2d")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vbs"},'Dim swApp\nSet swApp = CreateObject("SldWorks.Application")\n\nDim filePath\nfilePath = InputBox("\u6307\u5b9a\u96f6\u4ef6\u6587\u4ef6\u7684\u8def\u5f84")\n\nDim docSpec\nSet docSpec = swApp.GetOpenDocSpec(filePath)\ndocSpec.ReadOnly = True\ndocSpec.Silent = True\n\nDim swModel\nSet swModel = swApp.OpenDoc7(docSpec)\n\nDim swMassPrps\nSet swMassPrps = swModel.Extension.CreateMassProperty()\n\nMsgBox "\u8d28\u91cf: " & swMassPrps.Mass & vbLf & "\u4f53\u79ef: " & swMassPrps.Volume & vbLf & "\u8868\u9762\u79ef: " & swMassPrps.SurfaceArea\n\nswApp.CloseDoc swModel.GetTitle()\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u53cc\u51fb\u8fd0\u884c\u811a\u672c"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u663e\u793a\u7684\u8f93\u5165\u6846\u4e2d\u6307\u5b9aSOLIDWORKS\u6587\u4ef6\uff08\u96f6\u4ef6\u6216\u88c5\u914d\uff09\u7684\u5b8c\u6574\u8def\u5f84"),(0,n.kt)("li",{parentName:"ul"},"\u7ed3\u679c\u5c06\u5728\u6d88\u606f\u6846\u4e2d\u663e\u793a\u6307\u5b9a\u6a21\u578b\u7684\u8d28\u91cf\u5c5e\u6027\u503c")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5728\u6d88\u606f\u6846\u4e2d\u663e\u793a\u6307\u5b9a\u6a21\u578b\u7684\u8d28\u91cf\u5c5e\u6027",src:r(57414).Z,width:"314",height:"238"}),"{ width=250 }"))}l.isMDXComponent=!0},57414:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAADuCAMAAACeRDvjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAACjP5Ifg9BtDStu2ZqtgAAAANv//tpC2kEMUIofO8ABgqzYANpCQOvDwq/DOh/7+/puftTQ0NIc2AAA2hzpmtn9ANma2tq3G4JVrZ6O92dmajtzc3JBmkOfn587w8DoAZmUAAI+Pj7fQ6V09TTYAAP//2/Dw8D/O8pDbtpdUS2YAOgAAZchpVzqQtmRkZKnW4GCr8KfA3OLi4qlCLzo6Zp651Oi9tbb/27t9ceWhlLZmZrLL5ZA6ZrbbkFTT8teQgr5SPaG711NWZhQWFs6HNpm10fLOyP+2ZmlpaZCQZnvc9H48Mk8mNdv//+CroKjC3btaR810Y7uam9uQZjaHzrm5ubdIM6ro9NuQOp1EM2a22/Dwzv/bkP+2kABmtqV2cEJCQrb//7aQkGYAZma2/2ZmttJ+bpg3JJDb/+GYi6Y8KLZmAPCrYJC2/9v/27BdTGTX86CgoN2jmLhgUOS0qzqQ28Hu9baQOoZMReOdj+3EvbF8eDo6OkfQ8pA6OgA6kM2LfqtSQqFNP45BN7JBKhxUW5Pi9JA6ANvp7OemmbyGgd2Thavw8O/JwumpnMJmVcNeShoaGqCmvGvZ86ZYSd+Uh+zGwDoAOl3V87dDLPPSy5hGOcOCdrpJM9Lw957l9LODf9yViIPe9EPP8ql6dI1KQXPb80zR8o5GOrZgT4JGPVApODoAANqdkb+LhIA9NI3h9OimmaFGNAAAOp5XTshqWL5bSahZSZFGPAAAAMwAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///6axaKkAAAC7dFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBh8v5oAAAACXBIWXMAAA7DAAAOwwHHb6hkAAALw0lEQVR4Xu2biZscRRmHBzWuDQrD4oUryhjcVUlAjYh44xhY1IgaRVYZI9Go0cUDZD1iJBrBGGNU0BiJt+JJ8ELU/87vrGN2ku587Kx5dn/vE+abrvq6uurt6p6ZLrbXB0GgLgzUhYG6MFAXBurCJHWzoAMPPmi6CFM3e+dtO/QdOCvfeerb7Z2pm33JjptAJ375Snen6u6Euc586QFRZupmb7Ni0IHb7X6n6jDpbnroqqadqx6izFpdX3ffzOzafaqd3bso8/ZZMefqXrvpaU59v51TDWX+CupqmpuP/kM4epT+8fu8nbgZ6ibQHH99O8dZ3bdrdW/b9DTHv5r563A4/HURneMNZULdGM2BT2eGJGX4yG++K/EbVkgcmKDuBZue5sCJxDFW1h9+VMMNx6z4xIkDDWX+HepqKnVfU2nycvnPx9Q9BepqSnUnjj0i2ojh5Te81QoJUffbWt2rNz3N3MMF939L3Q3f9an7rYiZayjznbW692x6anUP/2z4Imb4t89YgTDXUCbUjdHM/aLgsJojd3/6oBUxou4Ptbrnb3oqdYeHOwh9+W/hbq6hzB9BXU2lbvhCYvhcDa+xQgLqJtE8dmOGnQ3/8qHfS/ynFRKPsbovQF1Nc88PM/+iH2BfOfzef7+C4ze1jLmH1f20VvfGTU9z6/YnGHrd/sT2L/7nx5//Ab37M0cuIqjy1oYyoW6M5t73tXMvq3sL1NU013+yneuhbgKP7v5JO7sfpcw/1uq2bnou3WVLN2dj16WUCXVhvg51UX4HdVEqdb3+VtkAHdj6MnEGdecO1IWBujBQFwbqwkBdGKgLA3VhoC4M1IWBujBQFwbqwkBdGKgLA3VhoC4M1IWBujBQFwbqwkBdGKgLA3VhoC4M1IWBujBQFwbqwkBdGKgLA3VhoC4M1IWBujBQFwbqwkBdGKgL06Zu+fH9EmcGeySekZnBoXfb235/SfZa7vW27aVo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"}}]);