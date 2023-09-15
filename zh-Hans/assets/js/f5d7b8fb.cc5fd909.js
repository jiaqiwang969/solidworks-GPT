"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[62834],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},s=Object.keys(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),p=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},d="mdxType",A={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,s=t.originalType,l=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=p(a),c=n,u=d["".concat(l,".").concat(c)]||d[c]||A[c]||s;return a?r.createElement(u,o(o({ref:e},m),{},{components:a})):r.createElement(u,o({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=a.length,o=new Array(s);o[0]=c;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[d]="string"==typeof t?t:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1891:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>A,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const s={title:"\u4f7f\u7528API\u81ea\u5b9a\u4e49SOLIDWORKS PDM\u8f6c\u6362\u4efb\u52a1",caption:"\u81ea\u5b9a\u4e49SOLIDWORKS PDM\u8f6c\u6362\u4efb\u52a1"},o=void 0,i={unversionedId:"codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/customizing-solidworks-pdm-convert-task/index",id:"codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/customizing-solidworks-pdm-convert-task/index",title:"\u4f7f\u7528API\u81ea\u5b9a\u4e49SOLIDWORKS PDM\u8f6c\u6362\u4efb\u52a1",description:"\u66f4\u6539\u6807\u51c6\u4efb\u52a1\u7684\u811a\u672c\u6307\u5357\u3002\u81ea\u5b9a\u4e49\u5b9e\u7528\u7a0b\u5e8f\u7b80\u5316PDM\u4efb\u52a1\u7684\u8c03\u8bd5",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/customizing-solidworks-pdm-convert-task/index.md",sourceDirName:"codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/customizing-solidworks-pdm-convert-task",slug:"/codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/customizing-solidworks-pdm-convert-task/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/customizing-solidworks-pdm-convert-task/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/customizing-solidworks-pdm-convert-task/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528API\u81ea\u5b9a\u4e49SOLIDWORKS PDM\u8f6c\u6362\u4efb\u52a1",caption:"\u81ea\u5b9a\u4e49SOLIDWORKS PDM\u8f6c\u6362\u4efb\u52a1"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u914d\u7f6e\u5185\u7f6e\u4efb\u52a1",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/"},next:{title:"\u5f00\u53d1\u548c\u81ea\u5b9a\u4e49SOLIDWORKS PDM\u4efb\u52a1",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/pdm-tasks/"}},l={},p=[],m={toc:p},d="wrapper";function A(t){let{components:e,...s}=t;return(0,n.kt)(d,(0,r.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u66f4\u6539\u6807\u51c6\u4efb\u52a1\u7684\u811a\u672c\u6307\u5357\u3002\u81ea\u5b9a\u4e49\u5b9e\u7528\u7a0b\u5e8f\u7b80\u5316PDM\u4efb\u52a1\u7684\u8c03\u8bd5\nimage: pdm-convert-task-script.png\nlabels: ","[\u8f6c\u6362\u4efb\u52a1, \u8c03\u8bd5, solidworks pd, \u4efb\u52a1]","\nredirect-from:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/2018/03/customizing-solidworks-pdm-convert-task.html")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"SOLIDWORKS PDM\u4efb\u52a1\u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u5185\u7f6e\u529f\u80fd\uff0c\u5141\u8bb8\u76f4\u63a5\u4ecePDM\u5e93\u7684\u4e0a\u4e0b\u6587\u83dc\u5355\u6216\u5de5\u4f5c\u6d41\u72b6\u6001\u66f4\u6539\u89e6\u53d1\u5668\u4e2d\u8fd0\u884c\u81ea\u5b9a\u4e49\u529f\u80fd\u3002\u5b9e\u9645\u5de5\u4f5c\u53ef\u4ee5\u5728\u672c\u5730\u8ba1\u7b97\u673a\u4e0a\u6216\u59d4\u6d3e\u7684\u8fdc\u7a0b\u4efb\u52a1\u670d\u52a1\u5668\u4e0a\u6267\u884c\u3002"),(0,n.kt)("p",null,"SOLIDWORKS PDM\u63d0\u4f9b\u4e86\u51e0\u4e2a\u5f00\u7bb1\u5373\u7528\u7684\u4efb\u52a1"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u7ba1\u7406\u9762\u677f\u4e2d\u7684\u6807\u51c6\u4efb\u52a1\u5217\u8868",src:a(16114).Z,width:"204",height:"320"}),"{ width=203 height=320 }"),(0,n.kt)("p",null,"\u8fd9\u4e9b\u4efb\u52a1\u53ef\u4ee5\u901a\u8fc7\u4efb\u52a1\u8bbe\u7f6e\u8fdb\u884c\u9ad8\u5ea6\u81ea\u5b9a\u4e49\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u4ece\u8bbe\u7f6e\u9875\u9762\u66f4\u6539",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/enterprisepdm/admin/t_configure_convert.htm"},"\u8f6c\u6362\u4efb\u52a1"),"\u7684\u8f6c\u6362\u8bbe\u7f6e\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u8f6c\u6362\u4efb\u52a1\u7684\u8f6c\u6362\u8bbe\u7f6e",src:a(6865).Z,width:"320",height:"309"}),"{ width=320 height=308 }"),(0,n.kt)("p",null,"\u8fd8\u53ef\u4ee5\u6307\u5b9a\u8f93\u51fa\u540d\u79f0\u548c\u6587\u4ef6\u5939\uff0c\u5e76\u80fd\u591f\u4f7f\u7528\u5360\u4f4d\u7b26\uff08\u4f8b\u5982\u6587\u4ef6\u540d\u3001\u6587\u4ef6\u5939\u3001\u53d8\u91cf\u503c\u3001\u914d\u7f6e\u540d\u79f0\u7b49\uff09\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u8f6c\u6362\u4efb\u52a1\u7684\u8f93\u51fa\u8bbe\u7f6e",src:a(35942).Z,width:"320",height:"169"}),"{ width=320 height=168 }"),(0,n.kt)("p",null,"\u4efb\u52a1\u63d0\u4f9b\u4e86\u5f00\u6e90\u53ef\u7f16\u8f91\u7684\u811a\u672c\uff0c\u4f7fAPI\u5f00\u53d1\u4eba\u5458\u548cPDM\u7ba1\u7406\u5458\u80fd\u591f\u8fdb\u4e00\u6b65\u81ea\u5b9a\u4e49\u4efb\u52a1\u7684\u903b\u8f91\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u8f6c\u6362\u4efb\u52a1\u7684\u9ad8\u7ea7\u811a\u672c\u9009\u9879",src:a(48499).Z,width:"320",height:"241"}),"{ width=320 height=241 }"),(0,n.kt)("p",null,"\u811a\u672c\u5229\u7528SOLIDWORKS API\u7f16\u5199\uff0c\u4f7f\u7528Visual Basic\u8bed\u8a00\uff08\u4e0e.swp\u5b8f\u4e2d\u4f7f\u7528\u7684\u8bed\u8a00\u76f8\u540c\uff09\u3002\u811a\u672c\u7684\u4e3b\u8981\u804c\u8d23\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u5904\u7406\u6587\u4ef6\u6269\u5c55\u540d\u662f\u5426\u53d7\u652f\u6301"),(0,n.kt)("li",{parentName:"ul"},"\u6253\u5f00SOLIDWORKS\u6587\u4ef6\uff08\u9002\u7528\u4e8e\u672c\u5730\u6216\u5916\u90e8\u6587\u4ef6\u683c\u5f0f\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u66ff\u6362\u6240\u6709\u5360\u4f4d\u7b26\u6765\u7ec4\u6210\u8f93\u51fa\u6587\u4ef6\u540d"),(0,n.kt)("li",{parentName:"ul"},"\u5904\u7406\u6307\u5b9a\u7684\u8f93\u51fa\u9009\u9879\uff08\u5982\u8d28\u91cf\u548c\u683c\u5f0f\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u904d\u5386\u914d\u7f6e\u6216\u56fe\u7eb8\u9875\uff08\u6839\u636e\u9009\u9879\u6307\u5b9a\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u8bb0\u5f55\u4efb\u4f55\u9519\u8bef"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u6587\u4ef6\u4fdd\u5b58\u5230\u6307\u5b9a\u7684\u8f93\u51fa\u6587\u4ef6\u5939"),(0,n.kt)("li",{parentName:"ul"},"\u5173\u95ed\u6587\u4ef6")),(0,n.kt)("p",null,"\u4f8b\u5982\uff0c\u8981\u4e3a\u8f93\u51fa\u6587\u4ef6\u8bbe\u7f6ePDF\u8f93\u51fa\u7684DPI\u8bbe\u7f6e\uff0c\u9700\u8981\u5c06\u4ee5\u4e0b\u884c\u6dfb\u52a0\u5230",(0,n.kt)("em",{parentName:"p"},"SetConversionOptions"),"\u51fd\u6570\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"swApp.SetUserPreferenceIntegerValue swUserPreferenceIntegerValue_e.swPDFExportShadedDraftDPI, 600\nswApp.SetUserPreferenceIntegerValue swUserPreferenceIntegerValue_e.swPDFExportOleDPI, 600\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u8bbe\u7f6e\u8f93\u51fa\u6587\u4ef6DPI\u7684\u4ee3\u7801\u5757",src:a(26437).Z,width:"640",height:"210"}),"{ width=640 height=210 }"),(0,n.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cSOLIDWORKS\u7684\u542f\u52a8\u548c\u5173\u95ed\u4ee5\u53ca\u8f93\u51fa\u6587\u4ef6\u7684\u7b7e\u5165\u548c",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/enterprisepdm/fileexplorer/t_Creating_a_Topic_Reference.htm"},"\u7c98\u8d34\u4e3a\u5f15\u7528"),"\uff08\u5982\u679c\u6307\u5b9a\uff09\u662f\u5728\u811a\u672c\u8303\u56f4\u4e4b\u5916\u6267\u884c\u7684\u3002"),(0,n.kt)("p",null,"\u4e3a\u4e86\u62e6\u622a\u4efb\u52a1\u6267\u884c\u4ee5\u8fdb\u884c\u8c03\u8bd5\uff0c\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u6dfb\u52a0",(0,n.kt)("em",{parentName:"p"},"Debug.Assert False"),"\u8bed\u53e5\uff0c\u5e76\u786e\u4fdd\u5c06\u4e13\u7528\u4efb\u52a1\u4e3b\u673a\u8bbe\u7f6e\u4e3a\u672c\u5730\u8ba1\u7b97\u673a\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u9009\u62e9\u8fd0\u884c\u4efb\u52a1\u7684\u4e3b\u673a",src:a(48360).Z,width:"320",height:"114"}),"{ width=320 height=113 }"),(0,n.kt)("p",null,"\u4e00\u65e6\u542f\u52a8\u4efb\u52a1\uff0c\u8be5\u5b8f\u5c06\u5728VBA\u7f16\u8f91\u5668\u4e2d\u53ef\u7528\u4e8e\u8c03\u8bd5\u3002\u8fd9\u79cd\u65b9\u6cd5\u6709\u4e00\u4e9b\u9650\u5236\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u8c03\u8bd5\u529f\u80fd\u88ab\u9501\u5b9a\u3002\u53ea\u80fd\u9010\u6b65\u8c03\u8bd5\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u5b8f\u5305\u542b\u7f16\u8bd1\u9519\u8bef\uff0c\u5219\u8c03\u8bd5\u5c06\u65e0\u6cd5\u5de5\u4f5c\u3002\n\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u9650\u5236\uff0c\u6211\u5f00\u53d1\u4e86\u4e00\u4e2a\u63a7\u5236\u53f0\u5b9e\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u62e6\u622a\u8c03\u8bd5\u5b8f\u5e76\u5c06\u5176\u590d\u5236\u5230\u6307\u5b9a\u4f4d\u7f6e\u4ee5\u4f9b\u540e\u7eed\u6545\u969c\u6392\u9664\u3002")),(0,n.kt)("p",null,"\u5f53\u542f\u52a8\u4efb\u52a1\u65f6\uff0cSOLIDWORKS\u5c06\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u542f\u52a8SOLIDWORKS"),(0,n.kt)("li",{parentName:"ol"},"\u5728\u4e34\u65f6\u4f4d\u7f6e\u521b\u5efa\u65b0\u7684\u6587\u672c\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ol"},"\u5c06\u811a\u672c\u5185\u5bb9\u590d\u5236\u5230\u6587\u4ef6\u4e2d"),(0,n.kt)("li",{parentName:"ol"},"\u66ff\u6362\u6240\u6709\u5360\u4f4d\u7b26\uff08\u4f8b\u5982\u6587\u4ef6\u540d\u3001\u53d8\u91cf\u503c\u7b49\uff09"),(0,n.kt)("li",{parentName:"ol"},"\u5c06\u6587\u4ef6\u91cd\u547d\u540d\u4e3a*.swb"),(0,n.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u5b8f"),(0,n.kt)("li",{parentName:"ol"},"\u5220\u9664\u5b8f")),(0,n.kt)("p",null,"\u5982\u679c\u6b65\u9aa45\u4e2d\u7684\u5b8f\u5305\u542b\u7f16\u8bd1\u9519\u8bef\uff0c\u5219\u6b65\u9aa46\u5c06\u5931\u8d25\uff0c\u5b8f\u5c06\u65e0\u6cd5\u542f\u52a8\u8c03\u8bd5\u3002\u65e0\u8bba\u6b65\u9aa46\u662f\u5426\u5931\u8d25\uff0c\u6b65\u9aa47\u90fd\u5c06\u6267\u884c\u3002\u56e0\u6b64\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u65e0\u6cd5\u68c0\u67e5\u5b8f\u662f\u5426\u5b58\u5728\u7f16\u8bd1\u9519\u8bef\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"CopyTaskScript"),"\u5b9e\u7528\u7a0b\u5e8f\u5c06\u62e6\u622a\u6b65\u9aa46\uff0c\u5e76\u5728\u5220\u9664\u4e4b\u524d\u5c06\u6587\u4ef6\u590d\u5236\u5230\u6307\u5b9a\u7684\u6587\u4ef6\u5939\uff0c\u4ee5\u4fbf\u5728SOLIDWORKS\u4e2d\u6253\u5f00\u5e76\u8fdb\u884c\u6545\u969c\u6392\u9664\u3002"),(0,n.kt)("p",null,"\u6211\u5df2\u5c06\u8be5\u5b9e\u7528\u7a0b\u5e8f\u53d1\u5e03\u5230",(0,n.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/pdm-copy-task-script"},"GitHub"),"\u3002"),(0,n.kt)("p",null,"\u8bf7\u89c2\u770b\u4ee5\u4e0b\u89c6\u9891\u6f14\u793a\uff1a"),(0,n.kt)("center",null,(0,n.kt)("iframe",{allow:"autoplay; encrypted-media",allowfullscreen:"",frameborder:"0",width:"560",height:"315",src:"https://www.youtube.com/embed/kNRbmTDAyBA"})))}A.isMDXComponent=!0},6865:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/convert-task-conversion-settings-f6d3fc168dc946e6585972110e0e46a4.png"},35942:(t,e,a)=>{a.d(e,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAACpCAMAAABtchRmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURRkBQtTPmqqXXt/syfr81F+bw+7pvu3q5fPy4u3w9PDw8PX19PPz9Ih4UqWtukd2manS8LyiXwNGcaa2yqzT15p9LXJ+lJGYmFg6aZynuWE0G7utmNPc4rO+yd/Y0Ob5+qCxl5SAcmByhcG7tfr59n1YAxt4rZWzz/7+/nGtylVjgdvToYmNlzxDZNK8l8fS0sLIzdLo8YJ3e7ufgLW0s6GNb+Dr4IhJP8bS4M3R2aPB23WIpODXu56enn+et1+BrOnizmZ1k+Tj48+pf76yo5d9Wz9nkevs7KCah5Kwq1BGWXRhZAguTmZgfHl3brPF1unt8Xq0zx1ee4yCfJWIhLrKt8nd0dXJuKmilKmTfJm52tjHp8PN2uTr8aW9s77UxPDs1IKRq5m4wabGz9ra2vDu6/D56z1Ved/Rscjd6tHFhrPT6FB9q4t7Zq+fgnyfwl+EnnpthdHh7KaOVndVL7i5vMjq+2ZfaEALE4dnRr3FqnF9iWGTutTRysO8lrOyl+zfwFc7P4yTobaCRqarqh4/ZICMmoSpv8PCw9XX2aampnaStYiHi+Dl6Yi3z6q5zId3crTK4u/Zr8zLzMGwgPLy7NDQ0OnEmJiKd4Vqan98hrvc9E6NtV9ZV6jJ4VRwmOTp7LKIbT45SbrV2IObrWhsjZ6WlpGpw8bh8vf4+MCocZt+SYuet6+/q6rCwm5zga2shlN8nkxacufw6XCcv2J5n5VkJ7WdbZm8zuzl2uDl0hhmn87Yv66wocaulJeKYoq+2+Piwdvi6iJEgbW6wqeywqaRh5aTidWwjJXH4/Ht3LvH136AlODf3cO6poVpWM7VsNfv+mmLsEFLdWhldNnq1/r75WyEnpCaqKu80Jmiq7KuqZ6lgPXuyrvY6LrAzb6vjOi3jNTizoijwWhtf9rq8FlaamhOOeHcreLz+HWSqMzb43VaUMvFuZKRk+TKqoeEg6eabmBIT/j06HVsb62trdve4svDpurz+LXHxNXEl6m0rYmrzPjl0IiEcwAAAI7TOIMAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAdCklEQVR4Xu2dCVwTV8LAa0WSOTxaXFzL4aLZBY8iYujHfUQxtn6aWBA5EuUIKCqgdNGtCFLaRUBAEEMRKdJFwSAVD6jaVSxURAkgUOTQcqyABVHEgggW/X3vzUw4VNJo2tVP5v8jM++elz8zmclkZt5bKI1S0AKVhBaoJLRAJaEFKgktUElogUpCC1SS30kgQ8SnQmONIYH5hl3TEVySz8NxDJdgqAS84BwFf4hEguIg2raRhYEkEHKd1IeiOMjHJRI837Q+sB0UG4sMCWzz01u45obFWsFdi9pZRTzXdIs46xvpFv7WF3HUNX1a62pja62jk1dFpte5ForLvvnMnY+bR3YaW1tYeJ/+ePuKaYVjcx0kBaampqJtJx+UPPwhdZylb/OG3JCaGYt9TpT/EL3wTN4Ahr1zRd9yp3Pbjg0x5nOClp87IbZNS/JH8Q07XGpOOfpMGDchvyfI0Bs2MxbgEs4oCIGpOI6jbbnzo9smsObuOp4yd0Al8JzNOfXyHSzrLfbeqPjbCtXcnaYhOzZcUXWTGK6y8rqQNq8dCLxSX7L4drnV3Nn1JTMSGzDQzFiAP9wgFMjlw8+vtso+vC2ZNdfSN2Vujkrg3UrzOeXJmOfR2wiKZQ5c3lXWvC95XI65etDhm4eD3ksDKxy+YaX+oaZdLn9rS84PPKXTMFY+BfFUKgAZEmgtQNCzAszaJMjf2phpwJ/FbvxOgIp9TUEmk81uL2YHCBjs7S2TOtDV7ADhai0+vmFzQCuDzZZyZxkYoPEFRINjgFEEjgQHu1iYenZZKxHFqVeIGbH3BdlgV7zhexaMgBBMgOXGBAoJlMHtpQIUDA4VgDCGtzR2eCGBNM9CC1QSWqCSKCIQgd/hSJ7OI/YtYxr5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"},48499:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/pdm-convert-task-script-ce8268ffdb413a581cecd29f708d1b3a.png"},48360:(t,e,a)=>{a.d(e,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAByCAMAAAAVi/iKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAUTrrToY+sg/r61c7nzwBolrKhc5RnK6ywtdbq6vDq5IeNlfLw4vX08uzy9PDw8PT09bbU1XdkRoFJaDOs18WpdACKxLDBudLS0pamx6KJcCxlgtnd08TDunAJAcewl0+It8DTx6qqqm12kmdqeLZ4HXGOvYd3h6SgjNPa4oOXrqG/x/7+/t3Sv8LS2be6tMPDxNS3k2J8h05xooSkwkIzQZGIkqZYTpKntpF/a67E0+Pf2Embxd3s3GqJqbiynqeRfAAzX5R/Usbb6sm+grSghOLj4+Ls64q0ybC7w+TXqunYwMjJylV7npOLh3hvc6mWYJq82+v66sW4ppO01WBSRnmayWlfYKScl9PApqjR63aht2iFuodxXOvr69TNxsenhM7SvrHJ2Yd2a01gf8edf9HIt6KiodfY2MHV5Kuyv7quisO8suHazJmOccvr99Li7Hx7gcnUsO7q0nCGmHKQxZu1vJSVn+n59bOooKR6YWR9oiJDcezrvtzc3bmZb4aiqpizyGRriYyEcrzBpYupxNPV1zhfkYSDis3VzJe+04SavKLG2nlnYGqmytrGpOvt8N7l2ZmsqmGVuMrIlIqWnnOVqsfM01dBW19wlrG2u+3j1OPv9El3h7vExea9lnZbgMuUXrfi98bIpz1IYqqag+vgy7Wzs9jr82U9Iu/u7NnV0igVNOvy7fTsybvM3mJ/t4q61sjg2JOCX4xrSebgs9/dwaCotevs29vIjrWulFaGpbfS492nc8SzidrTsKS61AFMdHN9ipmTinmXt5WDd9vLuJ6x0mycu3qFlJ/H5H+jzKuER4uFhrOsqsnh75VqWpeVk666zHZzfoZ6d5mMe7m6vdvj6nuGhtPGmufm47zH0aiWbd7f4LbW7Jqqy9Pfuz15nL60dcvY4rKij7myrKaJWtrw/O7ivvn49tfSoMm7levMpqSxpX1ubmyJvpuZm7DGyltUacvS2a/M5YiiuHaKpff46J2jqoiDfYCMns3DuY2Yq/Pz7PLv2wAAAP4IIKEAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAUWklEQVR4Xu2cCVwTV/7A3bV/NkAmb/D/dxst/K3AatEAaXX9c6xKRcIVUcS2RNagYCEcURDKUZZYUCgol6tCkZTuajkW/sIqchRcoFwVaKDhCBKB0gJqoLZYtOFw+OybSVBQKdh4bZ0vEn7vzTuSrzPz3rxMsuC9H74GJL+cBStIgSpBClQRUqCKkAJVhBSoIqRAFSEFqggpUEVmCkRRZUAyX6YLlMay2YIcZYJkfkwTKGAKWCw6U5kimR/3BHIl3FP1wd0CNsDo1kQOPxsAal+AJo1ITaekD1FGSuT9Xvfl4OSeLb/1kOy7YLmKjpSYdyiDB9CIVjwHjB5SelHZIpYrVATo4I6f6+QJc08gm0UxaS7TZzG58kOWALC6wbY4LlpYVuRvwEKkgiRYRCroZgEpMO8eLONyBdYYSyAV4C+aKpBmmLGABkxoCKxhYRYmYMHsAi21SlYSJuiGZTCBIIcloGmYd2sIuBosQZKUqyF1N8PMBTRpNwu2DDCfKOupfpJYSRodsC0YsmCXRa1+GN4T9YJlRmU3yCFiUze8Vo6g+8Q5DdjbM2LBij8rBRpz3+g5/T9vprO58lpLpOKn/tVXozqQxI913mmKXC86vIIG7CP3tOlJ/1Z+e8BiS2y18U/hCzZ+NKAfApB9xZ6md97Xsig+dH4ppUq7LZ3iE+HgBV/uarXxpXHLTDJ6AOgMayr96V2b8lSryNLbJyIPRmXcGnTZFXGmJkOrIFnHPT0YxdSSe6v6a1CQFnO4xmlVxmoH4/FjP+qI/a2vrt5q9Jq3qBmULLrZdef9iz7FDvtBya4I7aZdbgeDdH3WOhgoXsMzYMEPUwIlXP3/+v3v32QTAmV/D6xe+20PQgu/FFAf0m6sfyNVCNIchvP7X7Oxqy8+kJD5zg293g3U+rNX9yN5b4TIrHoGTVYKNx9dKbPItwhmLvrrWByCdTUv3ll4x/1k+w6E+rv9snfjFqZujCtMyDu5sSEv0Lln0MbC8ssP2oOqm6lWJ1toyFDDJ+cmI4VIov6NsKSrl65/fqO+P4Ehj7Hu0jpZ8s5f224h1IJreEcXPjBtQOTt+xPr9zUm1nuf+f+eZ3cM3xNI50kWfP5mFVeSBA9hdLcL3+jbnQgIfzWgavu+9KpuHShwxLD+wEdehoL+376aubXPtSisRM96034w2arO39fTGeTed3D199a1RiP2/vEXXfsAts1y8U67D9orc2F89aL0YNT1so2OdgnXxzc22Ln031pss9Tr4Dl+bLulRkpmqxAp32F33D6VBuoCO5jmonrDvQZsjy3Inpju32nFSL/3cvUD1E37ocAoU7O6ZiDfZ3mw4bNGV3OL37qsg2frZ8Q9gUDCitY9Bdh0gG0UB6uHBhvxh/1ATj/F9qyx0FdsSwNpzmKvzHpahbiY1X9lj7i4pIV66qxTNkCLxBRfv6KL9uIIULfObBIWCxCPwtNUnedAc6ZbmnOwHwCTDsGC0HXZhl6ZbgHpQ5HD1zLFoxfrRtc7B5/39dMIFZshIE18flkwHJ4wJ7Ftlp/9F7Cjs07ilrphz2yn1UVEix6jxn5F+ZnOwbDXuuBY5+F8jjio92Id85ntgtMEcplslkDCU6YeDrIs4sEx+ZFByh1lyvA/nmkCAeim87jKcDZmTjx+KbNPWP7jmCGQ5NEhBaoIKVBFSIEqMkMgiyeYaxAhuY9pAqXMWDqdSVemZmFeC4aoqrOy++s/pL35PJGnMTmcJlDCEqSkcNlwIogiDz49QgqK+c4655/2bA29lME8ub+3ADhrnwY66X03PdWLRpZyLWY6UxuVfydnNvNkuCeQzotmjkSz8Uu5C+O1+UhOEsCPZy7Al1i56OZzCFj4oXVtM5E3BYy4SQAvslA/G1Hk52BDO/A8+Es0kITiIchRbuUCjMhWbMSzELWdCLFVUQKAojD8lU/lDEXlbcFt4bHdBhpRMqnE/Rrs1DCf6D7ADPaG6ewJg9dMOVx0aC2NKBxONPOEuSdQwmVGC1gsfDmrttm+vl1zeYYooqLVQbM9Klx/LOLqx0ZoxYK/HoqJDHES3RaCSU1rNcsMcXFFzPj6Q5pGqOEfTQ7HjMMXWtF6sl+/7WJdTIwfJ6beerfmnaIqB0uAVoha4Y6Z2RYT2z5WWagvWtceVaR/6ItBx0KTC2GxDg4Xh6qChGnrktw7nG7EOxylVrfHVbSOmSFY194DH4lMSqodKlGs/C8vO7cdTXOoHq1+OZiGccyWjZ/sQMODSi/7G5R6fvqy5/lq90q1vcudq7+YFO3b8FQFGielsLg5OVw2V76palzb/dp3CZOtZ97O05Pr9f45IPVEgwwsTA2p9dumFZ/+jiWY9LfeprU1feTCTdObrdfg3ll/dmv24gaEums/Vr4jPNmi57PG97MXVxaspr9vY3UJgLThXTYo9u4R2SeXJlMHE8ID5Zf31ASsOXHOLmrz6deTnV712cEAWLXH38ysluvJDxnreXx4Jur6cQTtdFy4pqR+qMwpVYgWHkWdqn/U0WOPbIJ2sKGgpREpSWihS/+tz45kLE+Wj6mHWpSdcfzumwl957iFT3cPZHcLpPjZSEIsZ022Xfvu0mTrYZu88e16vY0BeifOQYFrQtrVD5rFGzE7wGTV2avNuRz/RW7s9ZevwUO4ivs9IdA9Gyt3xAV2vg0FOpp7tL212nUEoH/Y+V0UilnF4QL1Bhuvr4ICowiBt7/t2Z0cO+IThwDU6cfztauKNsjbmwJH2Gd2FB6Xgc4dC8NKxneXuabQQOF79t/ITf1yOVWH6i0RbCjC3LXWSyHwXEY6rBa6duGWMzs++YbO7m/IK3uqArkSLosL0G4mkB+yROA5hmraFjXYmBe4PbL307Yj9vpaQHbh5Jj6ttPl9evUAWZx+R9aonabCj3RS1VQoOyrVaWtgUJ4qOqL9jmGH6/T9/d7XT9yvah6VVGkgxlAOVWLolBQFO/P3rU1wi7h+k9Q4KfucfZbF7lwUpdvXWfr4wgF1v2F9m7C9TD5IfVazeIzUYWvyoDhj78JK6k6JnIwoYG0jyjuoo/SY2qDxmJbs5GhIAexpjoUmAEFdhnF37gcu/VQ2Z4flzuI7/D1C57uIQwEkm4ul42/qSSDw5gMAygDQWVABhiFl2DEgJkMmQwfohn4WgrKYCDwH/yDwrL4tql8GYrQYIKBh4CB5+N1FY8wTdSSwZYZdmuJ+rAAkYdvRmEtfBvsB+bjEQyItIxonSFjwA5habgJPkMZkQvLwdooAp+esjmYjUewwpNmmkAgZTOZAmU8g8wWZfCYyWx5CrvIE2bBn/95VyD8r5xleorvG0+CJ9XuU2SmQJJHhhSoIqRAFSEFqggUuEQZ4mMIeXvWozJ9DxRIjI3Z+FU4yfyZtgey2fBSpFsCDc5vR1Qur8yb+4ujD2vhoY3eN9t51I6fKPcEspis9PT0aCkTYBuHxV7wUoBYAyTWBmUTfvhFCQRmoURkaGn3J3hpoVANc1BiC345gUcIkNVZElWINvCfAHzJQVGKyAR1zXYr8CQeG3rBVvFNmZE0mK7zwwsC/gj8Q2Xz3ahMGow8YIswV2ZX8xzNv+8JZLLYKbxuHr6cZeqVw/fGstaHFgsnnSkTlgHpu8KsB0b9ANAYKM4uahrtANSu1N8E6nrJBzyzAcCcRvvqPL3SBjyvbHQrafLMz/Sa1NmXqj4xask3pgiRrKSJjsz0Q6NmqAcsZUxZ31QsBNimDYdbR/uwgeIOgKntXa6r60UdGNUZ1/amYZxmQ0/vJGB4ZaLJWyrxeUXHVltXt6MgVd1p1E/etG/tcykwK4ktYHG5UjZXXnCnacSi2sTHbZnZ0krXLsfC5IzKTpu62zS0s2YoYXNNeQSK+URVfJM4fiaisIaGVqzRdtri2nog1XBvbFXvhx6RZxrz6l/bUZRsWHOijJWE/h/vgtvuuDa2/3o97fEDH7JKKzk2CKZ2pCKMc4kTxYlCsaGj1mfiyzYfL/GNOWkAfd7cZcnmIp1B7mZdWqLDx4vqz/Yvut3/RYVL3e2hiM7nU6CEGy3NgQckvqCaL6XZf6r+h8BqyffXZOUN4S79PX//uPprGvJuXN4/NzckRtGwIcfChDxNizfES5LQfx1hfOcir3359sL6kJW9l6grD5/LO1m685NXxEdP4EssnSaenv4lopB1nM+H7xxIkF99o3oHgpTvLDwacBy2uwRFOneEb+FXSZ3HghYdRaHAnkSHVUKEE1TdvHn1ugOwo8NR15NLe/71sbj4/f12R59LgQK2lIWf2CVAXmAm0Ha4caf/CJ9n0aJjtXa3i1UUZ615Cg1N3LAsAQpcS0OGagYT8uqdbpuz4R6Y6uq016P1QM3Cqu2tvWEegXtWDAWWNhpuEKScOIefy/5oefD3C/23j2lHGrAHE2TLluQaQYGNgzV5ZZwa8xQAOlcklnlE6oxwLidbRUCBLbaZIj+4B4qav10tOrCmSLPf5vXk0qiKDeYp5Ta7XZ5LgYBJlxJDCcBcm3TTU2QT1r4Ua3mTrcZAukHagNBD1wCe7TxshfyONBhpZMX2UUdkE3guqKN08Cl+JX1YCqCH7/XuQCZsRzQG1A11R9LgiRNosIVpfRidRhfydVNK+gDmS+kgWjCgpmAeFNhCzkCfByXlWJO3NT1HR4jx1Sd0+wAwN4A1uuncifSRHN9TBlK8xT75wKlndzvlg0wTmENnQvCbZeE0BoFHnmIEVYyTypFT+YgzPQ0fp2Y+aPglGOEpWGWqtHIbRFmeyMBjRetThYl85TZlVRyiNfyXKKyo/LwwTSCcqXEfxwzreZqlPXlmCCR5dEiBKrLgn6RAlSAFqggpUEVIgSpCClQRUqCKkAJVZMEPb1cqw18pXKbksTDLB6kXNDb+ugWiEvbjuXZmGz+0nRdA4OO6Ns8iBaoGKfBBHmn1aU6BfF3nfMWi3NR7ayhAJ93wxUF8HU6xVke8SafYqMxDZYbNASnE+h2exHSEi/HPYsKtAHP1I95HQ2WJNUSjzwBUIuXOJKlko+doNn7rfPmqPgS/QZ4LUPmXp/Eb3T36AD8fVsrMR5Sl75Izl0BqvBc13dzzitx3IN3X++zEQAuVeZY59Bcjvmf+pC/l2AC+9myoazuRzY+eyLK1nmhqQVw9+yazsjZt2JPimuUt5Dfp+oGARSY+45SOkiZvGqDu+ik261RHmi7FaYmrkSF8Zk+fBwVyM1uv7bYpGfA+tsiEbWx7LLTlbJ1nepcJpYML1OIA3y2ziaL2yoiy8D3mEmh3HAXYJq3al95hx9suPX8h/fvz9dtbz5TlxmiLYvWNFifwo9GAeK89V093Brm3fHkznnnBKGZPYO+nI2o2gx9YLLEyW3pz206EaurmU3PwyG4zq1sA2xdB7X8raJsjf+PlVdacZ3KuQCXd91MUXyy+UmpiZbNpddcGdrtt7c34K8YFJksjWCy1I6zO419G6fiU8ZSF7yKdS2BhGQo0/hvtv1kf0t68Oa42JOPK+PaVvZfs3xIHs+/Q0qrbLgLAaTPZdzoxyCF7c9Q6odqSO7KVy2vQ8p2FH7xGfGfCtzvxrzIobxhs/EO9KB/IM3o+c+HczoyJMf60krhd9+mDSgT3Y7i1dA3rwhtjEV1aBx35/7js77bs+5MFPeW3Bd1duMC6Mb3SSyxl4buw5hKIfeUWQCm40v5SVYip5bdxtby29TGxe3vX8P39JmLHaRyDZRFoWkuaeF/DwSAHr6taIt5X5/0NA3s3oOWNdlBgp01t/pdQ4NJb5Y6DjbsrDb0AkuG4+Nzr46dYyy6b1DZzvlB09HSBAnn3sUffYHdyxqoJ2wK3riPapqudbIvrxhbd8jkqEGyLop84Hspe+tstyrL3mFXg1JUITWNAt3lS10jOprla87ULTPoQQ8qVJI6RuW4LdYSW1uQthCOEbh9VN/2Y6R0javyoJcLX9ZtMgRWXR9M7zC0zjTf1IGgmJdYvrU8+QLEGIK1J3YnC48MaBmk3c/sUHT1doMBopYIpYrOiBaHLQ4NTfEd8r/BcnYO1Q4Nv+hpNpPN4vsPBL9/0FQdF99sqC08RPadA2BcsoRwq0UnR1J0sxD88C39UDL3yaj9kUlOoGIXxXMVjqGcw/pEsZYr4g7/ZBh/xqs9kDIZ9S3j0+4E5PDqPR4+GP3SoF8a5MKVIROcSObnKsnfpnlvgDH72u4CkSbAA/gG4GUgFj+ULFR4vDxP4i3hUgb8W0Cz6A+PBL6GbR3kxBYJuT93HwvDDj8lfv0B4Fn48KJu7j2kCleVIZkPpaSb3BEYrFw5JZoH50JWHuwIRCoPkZ6E/9HOEpMB5E/1wgW/fE8hkK2Aqa5DMYE6BKJMO7UULeBLiU7yAIeMmMXK4MMRj4uO7MIOAGsywHxYPt+DbXhhmFai4xocC2eyUFEHLUYGEcfBPDPvPrYclYwadr1xjMGQrGYllDKcWT0l1PtHWd/97miH393uh/M1LIK+7O/WKVMKw+lF99xrDZCgo7xJet6t5YJ0wIzaQaAgKHc5cwZCJoNoXibkFMkeucL8OAywJo994/IZY6KSpKVQITPzam2O0DuVoahLS0rYO7xWSAglm7IG81FUfpsjgHpix/ytLhw6U8XrDQhe8bkD8kbSqCHge/MQGT/pYMjqPyPxJgZAZe2C0wedHgYwrYZTu15A5HxMNn6T5vIFrktX2yE0tJ6uHg4X4jdS5KAPrYAherFPgfPZAOmsEv2KWKGsQ35AxGerpWRyiSOMZdDgnz1YmXyzmFighFhjp9CxlDZIZzCmQoXj3jssFyhokM5hbIMnPMpvA90iB84MUqCKkQBUhBaoIKVBFSIEqQgpUEVKgiswi8D1S4DwhBaoIKVBFSIEqQgpUEVKgipACVWQ2gT+QAucHKVBFSIEqMqtAxXeokgLnghSoIqRAFSEFqsgsAn8gBc4TUqCKPEwgAP8GPxiJ9FUN2ZUAAAAASUVORK5CYII="},26437:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/set-dpi-output-9b85353b925557117e6e323301657fc2.png"},16114:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/standard-sw-pdm-tasks-2d68070c5ebc5baf7cc571523b1f7c38.png"}}]);