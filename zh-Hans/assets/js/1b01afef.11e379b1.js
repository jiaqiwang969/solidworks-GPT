"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[3760],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(t),c=o,g=u["".concat(l,".").concat(c)]||u[c]||d[c]||a;return t?r.createElement(g,s(s({ref:n},m),{},{components:t})):r.createElement(g,s({ref:n},m))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},99428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={layout:"sw-tool",title:"\u5c06SOLIDWORKS\u6587\u4ef6\u5bfc\u51fa\u4e3a\u591a\u79cd\u683c\u5f0f\u7684\u5b8f",caption:"\u5bfc\u51fa\u4e3a\u591a\u79cd\u683c\u5f0f"},s=void 0,i={unversionedId:"codestack/solidworks-api/import-export/export-multi-formats/index",id:"codestack/solidworks-api/import-export/export-multi-formats/index",title:"\u5c06SOLIDWORKS\u6587\u4ef6\u5bfc\u51fa\u4e3a\u591a\u79cd\u683c\u5f0f\u7684\u5b8f",description:"\u5c06\u6587\u4ef6\uff08\u6216\u53ef\u9009\u7684\u6240\u6709\u914d\u7f6e\u6216\u7ed8\u56fe\u5de5\u4f5c\u8868\uff09\u5bfc\u51fa\u4e3aSOLIDWORKS\u652f\u6301\u7684\u591a\u79cd\u683c\u5f0f\u7684VBA\u5b8f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/import-export/export-multi-formats/index.md",sourceDirName:"codestack/solidworks-api/import-export/export-multi-formats",slug:"/codestack/solidworks-api/import-export/export-multi-formats/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/export-multi-formats/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/import-export/export-multi-formats/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u5c06SOLIDWORKS\u6587\u4ef6\u5bfc\u51fa\u4e3a\u591a\u79cd\u683c\u5f0f\u7684\u5b8f",caption:"\u5bfc\u51fa\u4e3a\u591a\u79cd\u683c\u5f0f"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u88c5\u914d\u4f53\u6216\u96f6\u4ef6\u5bfc\u51fa\u4e3aIFC 2x3\u62164",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/export-ifc/"},next:{title:"\u5b8f\u4ee5\u5c06\u6d3b\u52a8\u7ed8\u56fe\u4fdd\u5b58\u4e3aPDF\u6587\u4ef6\u5e76\u5173\u95ed\u7ed8\u56fe",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/export-pdf-browse-folder/"}},l={},p=[{value:"group: \u5bfc\u5165/\u5bfc\u51fa",id:"group-\u5bfc\u5165\u5bfc\u51fa",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u8f93\u51fa\u540d\u79f0\u6a21\u677f",id:"\u8f93\u51fa\u540d\u79f0\u6a21\u677f",level:3},{value:"\u5bfc\u51fa\u9009\u9879",id:"\u5bfc\u51fa\u9009\u9879",level:3},{value:"\u5c06\u7ec4\u4ef6\u6570\u91cf\u5305\u542b\u5230\u6587\u4ef6\u540d\u4e2d",id:"\u5c06\u7ec4\u4ef6\u6570\u91cf\u5305\u542b\u5230\u6587\u4ef6\u540d\u4e2d",level:3},{value:"\u5904\u7406\u6240\u6709\u914d\u7f6e",id:"\u5904\u7406\u6240\u6709\u914d\u7f6e",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2}],m={toc:p},u="wrapper";function d(e){let{components:n,...a}=e;return(0,o.kt)(u,(0,r.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5c06\u6587\u4ef6\uff08\u6216\u53ef\u9009\u7684\u6240\u6709\u914d\u7f6e\u6216\u7ed8\u56fe\u5de5\u4f5c\u8868\uff09\u5bfc\u51fa\u4e3aSOLIDWORKS\u652f\u6301\u7684\u591a\u79cd\u683c\u5f0f\u7684VBA\u5b8f\nimage: batch-export.svg\nlabels: ","[\u5bfc\u51fa]"),(0,o.kt)("h2",{id:"group-\u5bfc\u5165\u5bfc\u51fa"},"group: \u5bfc\u5165/\u5bfc\u51fa"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5177\u6709\u652f\u6301\u7684\u683c\u5f0f\u5217\u8868\u7684\u4fdd\u5b58\u6587\u4ef6\u5bf9\u8bdd\u6846",src:t(99892).Z,width:"952",height:"631"}),"{ width=500 }"),(0,o.kt)("p",null,"\u6b64VBA\u5b8f\u5141\u8bb8\u5c06\u6d3b\u52a8SOLIDWORKS\u6587\u6863\u5bfc\u51fa\u4e3aSOLIDWORKS\u652f\u6301\u7684\u591a\u79cd\u683c\u5f0f\u3002\u5b8f\u652f\u6301\u7075\u6d3b\u7684\u9009\u9879\u6765\u6307\u5b9a\u6587\u4ef6\u8def\u5f84\uff0c\u5e76\u5141\u8bb8\u540c\u65f6\u5bfc\u51fa\u591a\u79cd\u683c\u5f0f\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u76ee\u5f55\u4e0d\u5b58\u5728\uff0c\u5b8f\u5c06\u81ea\u52a8\u521b\u5efa\u76ee\u5f55\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539",(0,o.kt)("strong",{parentName:"p"},"OUT_NAME_TEMPLATES"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"OUT_FOLDER"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"ALL_CONFIGS"),"\u5e38\u91cf\u6765\u914d\u7f6e\u5b8f"),(0,o.kt)("h3",{id:"\u8f93\u51fa\u540d\u79f0\u6a21\u677f"},"\u8f93\u51fa\u540d\u79f0\u6a21\u677f"),(0,o.kt)("p",null,"\u6b64\u5e38\u91cf\u5141\u8bb8\u6307\u5b9a\u5bfc\u51fa\u6587\u4ef6\u7684\u8f93\u51fa\u8def\u5f84\u6a21\u677f\u3002\u5b83\u5e94\u5305\u542b\u5b9a\u4e49\u5bfc\u51fa\u683c\u5f0f\u7684\u6269\u5c55\u540d\u3002"),(0,o.kt)("p",null,"\u8fd9\u53ef\u4ee5\u662f\u7edd\u5bf9\u8def\u5f84\u6216\u76f8\u5bf9\u8def\u5f84\u3002\u5982\u679c\u662f\u540e\u8005\uff0c\u5219\u7ed3\u679c\u5c06\u76f8\u5bf9\u4e8e\u6587\u4ef6\u76ee\u5f55\u4fdd\u5b58\uff0c\u6216\u8005\u5982\u679c\u4e0d\u4e3a\u7a7a\uff0c\u5219\u76f8\u5bf9\u4e8e",(0,o.kt)("strong",{parentName:"p"},"OUT_FOLDER"),"\u5e38\u91cf\u6307\u5b9a\u7684\u76ee\u5f55\u4fdd\u5b58\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OUT_FOLDER"),"\u53ef\u4ee5\u4f5c\u4e3a",(0,o.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/macro-arguments/"},"\u5b8f\u7684\u53c2\u6570"),"\u4f20\u9012")),(0,o.kt)("p",null,"\u652f\u6301\u4ee5\u4e0b\u5360\u4f4d\u7b26"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"<","_","FileName","_","> - \u6587\u6863\u6587\u4ef6\u7684\u540d\u79f0\uff08\u4e0d\u5305\u62ec\u6269\u5c55\u540d\uff09"),(0,o.kt)("li",{parentName:"ul"},"<","_","ConfName","_","> - \u6b64\u6587\u4ef6\u7684\u6d3b\u52a8\u914d\u7f6e\u7684\u540d\u79f0\u3002\u5982\u679c\u5c06",(0,o.kt)("strong",{parentName:"li"},"ALL_CONFIGS"),"\u9009\u9879\u8bbe\u7f6e\u4e3a",(0,o.kt)("strong",{parentName:"li"},"True"),"\uff0c\u5219\u4f1a\u66f4\u6539\u6b64\u914d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"<","[PropertyName]","> - \u4efb\u4f55\u81ea\u5b9a\u4e49\u5c5e\u6027\u7684\u540d\u79f0\uff0c\u4f8b\u5982\\<PartNo",">","\u5c06\u66ff\u6362\u4e3a\u81ea\u5b9a\u4e49\u5c5e\u6027",(0,o.kt)("em",{parentName:"li"},"PartNo"),"\u7684\u503c\u3002\u5c06\u5c1d\u8bd5\u4ece\u914d\u7f6e\u4e2d\u8bfb\u53d6\u5c5e\u6027\uff0c\u5982\u679c\u4e0d\u53ef\u7528\uff0c\u5219\u4f7f\u7528\u901a\u7528\u5c5e\u6027\u3002")),(0,o.kt)("p",null,"\u5360\u4f4d\u7b26\u5c06\u5728\u8fd0\u884c\u65f6\u89e3\u6790\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u5728\u5b8f\u7684\u5f00\u5934\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"Array"),"\u51fd\u6570\u586b\u5145\u5e38\u91cf\u6765\u914d\u7f6e\u503c\u3002\u6839\u636e\u9700\u8981\u6307\u5b9a\u5c3d\u53ef\u80fd\u591a\u7684\u6570\u7ec4\u5143\u7d20\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c06\u6d3b\u52a8\u6587\u6863\u5bfc\u51fa\u4e3aPDF\u3001DXF\u548cJPG\uff0c\u5e76\u5c06\u8f93\u51fa\u6587\u4ef6\u547d\u540d\u4e3a",(0,o.kt)("strong",{parentName:"p"},"PartNo"),"\u81ea\u5b9a\u4e49\u5c5e\u6027\u3002\u6587\u4ef6\u5c06\u4fdd\u5b58\u5728\u4e0e\u539f\u59cb\u6587\u4ef6\u76f8\u540c\u7684\u6587\u4ef6\u5939\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Sub main()\n        \n    OUT_NAME_TEMPLATES = Array("<PartNo>.pdf", "<PartNo>.dxf", "<PartNo>.jpg")\n')),(0,o.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c06\u6d3b\u52a8\u6587\u4ef6\u5bfc\u51fa\u4e3aParasolid\u683c\u5f0f\u5230",(0,o.kt)("strong",{parentName:"p"},"D:\\Exports"),"\u6587\u4ef6\u5939\u3002\u6587\u4ef6\u4ee5\u539f\u59cb\u6587\u4ef6\u7684\u540d\u79f0\u547d\u540d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Sub main()\n        \n    OUT_NAME_TEMPLATES = Array("D:\\Exports\\<_FileName_>.x_t")\n')),(0,o.kt)("h3",{id:"\u5bfc\u51fa\u9009\u9879"},"\u5bfc\u51fa\u9009\u9879"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u66f4\u6539",(0,o.kt)("strong",{parentName:"p"},"STEP_VERSION"),"\u5e38\u91cf\u7684\u503c\u6765\u914d\u7f6eSTEP\u683c\u5f0f\u7684\u5bfc\u51fa\u9009\u9879\u3002\u5c06\u5176\u8bbe\u7f6e\u4e3a",(0,o.kt)("strong",{parentName:"p"},"214"),"\u4ee5\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"AP214"),"\u683c\u5f0f\uff0c\u6216\u5c06\u5176\u8bbe\u7f6e\u4e3a",(0,o.kt)("strong",{parentName:"p"},"203"),"\u4ee5\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"AP203"),"\u683c\u5f0f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Const STEP_VERSION As Long = 214 '203 or 214\n")),(0,o.kt)("p",null,"\u8981\u5bfc\u51fa3D PDF\uff0c\u8bf7\u5c06",(0,o.kt)("strong",{parentName:"p"},"PDF_3D"),"\u5e38\u91cf\u8bbe\u7f6e\u4e3a",(0,o.kt)("strong",{parentName:"p"},"True")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Const PDF_3D As Boolean = True\n")),(0,o.kt)("h3",{id:"\u5c06\u7ec4\u4ef6\u6570\u91cf\u5305\u542b\u5230\u6587\u4ef6\u540d\u4e2d"},"\u5c06\u7ec4\u4ef6\u6570\u91cf\u5305\u542b\u5230\u6587\u4ef6\u540d\u4e2d"),(0,o.kt)("p",null,"\u5982\u679c\u6b64\u5b8f\u7528\u4e8e\u5bfc\u51fa\u88c5\u914d\u4f53\u7684\u6240\u6709\u7ec4\u4ef6\uff0c\u5219\u53ef\u80fd\u9700\u8981\u5c06BOM\u6570\u91cf\u5305\u542b\u5230\u6587\u4ef6\u540d\u4e2d\u3002\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/assembly/components/write-quantities/"},"\u5c06SOLIDWORKS\u88c5\u914d\u4f53\u4e2d\u7684\u7ec4\u4ef6\u6570\u91cf\u5199\u5165\u81ea\u5b9a\u4e49\u5c5e\u6027"),"\u5b8f\u3002\u5728\u5bfc\u51fa\u4e4b\u524d\uff0c\u5bf9\u88c5\u914d\u4f53\u8fd0\u884c\u6b64\u5b8f\u4ee5\u521b\u5efa\u5177\u6709\u6570\u91cf\u503c\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\uff0c\u7136\u540e\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"\\<Qty",">"),"\u5360\u4f4d\u7b26\u5c06\u5176\u5305\u542b\u5230\u8f93\u51fa\u6587\u4ef6\u540d\u4e2d\u3002"),(0,o.kt)("h3",{id:"\u5904\u7406\u6240\u6709\u914d\u7f6e"},"\u5904\u7406\u6240\u6709\u914d\u7f6e"),(0,o.kt)("p",null,"\u5982\u679c\u5c06",(0,o.kt)("strong",{parentName:"p"},"ALL_CONFIGS"),"\u5e38\u91cf\u8bbe\u7f6e\u4e3a",(0,o.kt)("strong",{parentName:"p"},"True"),"\uff0c\u5b8f\u5c06\u9010\u4e2a\u6fc0\u6d3b\u6240\u6709\u914d\u7f6e\uff08\u5bf9\u4e8e\u88c5\u914d\u4f53\u548c\u96f6\u4ef6\uff09\u6216\u6240\u6709\u5de5\u4f5c\u8868\uff08\u5bf9\u4e8e\u7ed8\u56fe\uff09\u5e76\u8fd0\u884c\u5bfc\u51fa\u547d\u4ee4\u3002"),(0,o.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,o.kt)("p",null,"\u5982\u679c\u5b8f\u62a5\u544a\u9519\u8bef\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u4e0d\u4f1a\u7acb\u5373\u660e\u786e\u5bfc\u81f4\u9519\u8bef\u7684\u539f\u56e0\uff0c\u56e0\u4e3a\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f\u88ab\u5f02\u5e38\u5904\u7406\u7a0b\u5e8f\u201c\u541e\u566c\u201d\u4e86\u3002\u4e3a\u4e86\u7981\u7528\u9519\u8bef\u5904\u7406\u5e76\u663e\u793a\u5bfc\u81f4\u9519\u8bef\u7684\u786e\u5207\u884c\uff0c\u8bf7\u5728\u4ee3\u7801\u4e2d\u7684\u6240\u6709",(0,o.kt)("em",{parentName:"p"},"On Error GoTo catch_"),"\u884c\u4e4b\u524d\u653e\u7f6e\u6487\u53f7'\u7b26\u53f7\uff0c\u5982\u4e0b\u6240\u793a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},"Sub main()\n        \n    Set swApp = Application.SldWorks\n    \ntry_:\n    'On Error GoTo catch_\n")),(0,o.kt)("p",null,"\u8bf7\u63d0\u4ea4",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xarial/codestack/issues/new?labels=bug"},"\u9519\u8bef\u62a5\u544a"),"\uff0c\u5e76\u9644\u4e0a\u6b64\u9519\u8bef\u7684\u5feb\u7167\u548c\u7528\u4e8e\u91cd\u73b0\u7684\u6a21\u578b\uff08\u5982\u679c\u53ef\u80fd\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const ALL_CONFIGS As Boolean = False\nConst OUT_FOLDER As String = ""\nConst STEP_VERSION As Long = 214 \'203 or 214\nConst PDF_3D As Boolean = False \'True to export 3D PDF\n\nDim OUT_NAME_TEMPLATES As Variant\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n        \n    Dim origStepVersion As Long\n        \n    OUT_NAME_TEMPLATES = Array("PDFs\\<_FileName_>_<_ConfName_>_<PartNo>.pdf", "IMGs\\<_FileName_>_<_ConfName_>_<PartNo>.jpg")\n    \n    Set swApp = Application.SldWorks\n    \ntry_:\n    On Error GoTo catch_\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    If swModel Is Nothing Then\n        Err.Raise vbError, "", "\u8bf7\u6253\u5f00\u6587\u6863"\n    End If\n    \n    If swModel.GetPathName() = "" Then\n        Err.Raise vbError, "", "\u8bf7\u4fdd\u5b58\u6a21\u578b"\n    End If\n    \n    Dim outFolder As String\n    \n    If Not TryGetOutDirFromArguments(outFolder) Then\n        outFolder = OUT_FOLDER\n    End If\n    \n    ReadOptions origStepVersion\n    SetupOptions STEP_VERSION\n    \n    ExportFile swModel, OUT_NAME_TEMPLATES, ALL_CONFIGS, outFolder\n    \n    GoTo finally_\n    \ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n\n    SetupOptions origStepVersion\n\nEnd Sub\n\nSub ReadOptions(ByRef stepVersion As Long)\n\n    stepVersion = swApp.GetUserPreferenceIntegerValue(swUserPreferenceIntegerValue_e.swStepAP)\n    \nEnd Sub\n\nSub SetupOptions(stepVersion As Long)\n    \n    If False = swApp.SetUserPreferenceIntegerValue(swUserPreferenceIntegerValue_e.swStepAP, stepVersion) Then\n        Err.Raise vbError, "", "\u65e0\u6cd5\u5c06Step\u5bfc\u51fa\u7248\u672c\u8bbe\u7f6e\u4e3a" & stepVersion\n    End If\n    \nEnd Sub\n\nSub ExportFile(model As SldWorks.ModelDoc2, vOutNameTemplates As Variant, allConfigs As Boolean, outFolder As String)\n    \n    Dim i As Integer\n    Dim j As Integer\n    \n    Dim curConf As String\n    \n    If model.GetType() = swDocumentTypes_e.swDocDRAWING Then\n        Dim swDraw As SldWorks.DrawingDoc\n        Set swDraw = model\n        curConf = swDraw.GetCurrentSheet().GetName\n    Else\n        curConf = model.ConfigurationManager.ActiveConfiguration.Name\n    End If\n    \n    Dim vConfs As Variant\n    \n    If allConfigs Then\n        If model.GetType() = swDocumentTypes_e.swDocDRAWING Then\n            vConfs = model.GetSheetNames()\n        Else\n            vConfs = model.GetConfigurationNames()\n        End If\n    Else\n        Dim sConfs(0) As String\n        sConfs(0) = curConf\n        vConfs = sConfs\n    End If\n    \n    For i = 0 To UBound(vConfs)\n    \n        If model.GetType() = swDocumentTypes_e.swDocDRAWING Then\n            curConf = swDraw.ActivateSheet(CStr(vConfs(i)))\n        Else\n            model.ShowConfiguration2 CStr(vConfs(i))\n        End If\n                \n        For j = 0 To UBound(vOutNameTemplates)\n            \n            Dim errs As Long\n            Dim warns As Long\n        \n            Dim outNameTemplate As String\n            outNameTemplate = vOutNameTemplates(j)\n            \n            Dim outFilePath As String\n            outFilePath = ComposeOutFileName(outNameTemplate, model, outFolder)\n\n            Dim outDir As String\n            outDir = Left(outFilePath, InStrRev(outFilePath, "\\"))\n    \n            CreateDirectories outDir\n            \n            Dim swExportData As Object\n            \n            If LCase(GetExtension(outFilePath)) = LCase("pdf") Then\n                Dim swExportPdfData As SldWorks.ExportPdfData\n                Set swExportPdfData = swApp.GetExportFileData(swExportDataFileType_e.swExportPdfData)\n                swExportPdfData.ViewPdfAfterSaving = False\n                swExportPdfData.ExportAs3D = PDF_3D\n                Set swExportData = swExportPdfData\n            Else\n                Set swExportData = Nothing\n            End If\n            \n            If False = model.Extension.SaveAs(outFilePath, swSaveAsVersion_e.swSaveAsCurrentVersion, swSaveAsOptions_e.swSaveAsOptions_Silent, swExportData, errs, warns) Then\n                Err.Raise vberrror, "", "\u5bfc\u51fa\u5230" & outFilePath & "\u5931\u8d25"\n            End If\n            \n        Next\n        \n    Next\n    \n    If model.GetType() = swDocumentTypes_e.swDocDRAWING Then\n        curConf = swDraw.ActivateSheet(curConf)\n    Else\n        model.ShowConfiguration2 curConf\n    End If\n    \nEnd Sub\n\nFunction ComposeOutFileName(template As String, model As SldWorks.ModelDoc2, outFolder As String) As String\n\n    Dim regEx As Object\n    Set regEx = CreateObject("VBScript.RegExp")\n    \n    regEx.Global = True\n    regEx.IgnoreCase = True\n    regEx.Pattern = "<[^>]*>"\n    \n    Dim regExMatches As Object\n    Set regExMatches = regEx.Execute(template)\n    \n    Dim i As Integer\n    \n    Dim outFileName As String\n    outFileName = template\n    \n    For i = regExMatches.Count - 1 To 0 Step -1\n        \n        Dim regExMatch As Object\n        Set regExMatch = regExMatches.Item(i)\n                    \n        Dim tokenName As String\n        tokenName = Mid(regExMatch.Value, 2, Len(regExMatch.Value) - 2)\n        \n        outFileName = Left(outFileName, regExMatch.FirstIndex) & ResolveToken(tokenName, model) & Right(outFileName, Len(outFileName) - (regExMatch.FirstIndex + regExMatch.Length))\n    Next\n    \n    ComposeOutFileName = ReplaceInvalidPathSymbols(GetFullPath(model, outFileName, outFolder))\n    \nEnd Function\n\nFunction ReplaceInvalidPathSymbols(path As String) As String\n    \n    Const REPLACE_SYMB As String = "_"\n    \n    Dim res As String\n    res = Right(path, Len(path) - Len("X:\\"))\n    \n    Dim drive As String\n    drive = Left(path, Len("X:\\"))\n    \n    Dim invalidSymbols As Variant\n    invalidSymbols = Array("/", ":", "*", "?", """", "<", ">", "|")\n    \n    Dim i As Integer\n    For i = 0 To UBound(invalidSymbols)\n        Dim invalidSymb As String\n        invalidSymb = CStr(invalidSymbols(i))\n        res = Replace(res, invalidSymb, REPLACE_SYMB)\n    Next\n    \n    ReplaceInvalidPathSymbols = drive + res\n    \nEnd Function\n\nFunction ResolveToken(token As String, model As SldWorks.ModelDoc2) As String\n    \n    Const FILE_NAME_TOKEN As String = "_FileName_"\n    Const CONF_NAME_TOKEN As String = "_ConfName_"\n    \n    Select Case LCase(token)\n        Case LCase(FILE_NAME_TOKEN)\n            ResolveToken = GetFileNameWithoutExtension(model.GetPathName)\n        Case LCase(CONF_NAME_TOKEN)\n            If model.GetType() = swDocumentTypes_e.swDocDRAWING Then\n                Dim swDraw As SldWorks.DrawingDoc\n                Set swDraw = model\n                ResolveToken = swDraw.GetCurrentSheet().GetName\n            Else\n                ResolveToken = model.ConfigurationManager.ActiveConfiguration.Name\n            End If\n        Case Else\n            \n            Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n            Dim resVal As String\n            resVal = ""\n            \n            If model.GetType() <> swDocumentTypes_e.swDocDRAWING Then\n                Set swCustPrpMgr = model.Extension.CustomPropertyManager(model.ConfigurationManager.ActiveConfiguration.Name)\n                swCustPrpMgr.Get2 token, "", resVal\n            End If\n            \n            If resVal = "" Then\n                Set swCustPrpMgr = model.Extension.CustomPropertyManager("")\n                swCustPrpMgr.Get2 token, "", resVal\n            End If\n            \n            ResolveToken = resVal\n    End Select\n    \nEnd Function\n\nFunction GetFileNameWithoutExtension(path As String) As String\n    GetFileNameWithoutExtension = Mid(path, InStrRev(path, "\\") + 1, InStrRev(path, ".") - InStrRev(path, "\\") - 1)\nEnd Function\n\nFunction GetExtension(path As String) As String\n    GetExtension = Right(path, Len(path) - InStrRev(path, "."))\nEnd Function\n\nFunction FileExists(filePath As String) As Boolean\n    FileExists = Dir(filePath) <> ""\nEnd Function\n\nSub CreateDirectories(path As String)\n\n    Dim fso As Object\n    Set fso = CreateObject("Scripting.FileSystemObject")\n\n    If fso.FolderExists(path) Then\n        Exit Sub\n    End If\n\n    CreateDirectories fso.GetParentFolderName(path)\n    \n    fso.CreateFolder path\n    \nEnd Sub\n\nFunction GetFullPath(model As SldWorks.ModelDoc2, path As String, outFolder As String)\n    \n    GetFullPath = path\n        \n    If IsPathRelative(path) Then\n        \n        If Left(path, 1) <> "\\" Then\n            path = "\\" & path\n        End If\n        \n        If outFolder = "" Then\n        \n            Dim modelPath As String\n            Dim modelDir As String\n            \n            modelPath = model.GetPathName\n            \n            modelDir = Left(modelPath, InStrRev(modelPath, "\\") - 1)\n            \n            outFolder = modelDir\n        Else\n            If Right(outFolder, 1) = "\\" Then\n                outFolder = Left(outFolder, Len(outFolder) - 1)\n            End If\n        End If\n        \n        GetFullPath = outFolder & path\n        \n    End If\n    \nEnd Function\n\nFunction IsPathRelative(path As String)\n    IsPathRelative = Mid(path, 2, 1) <> ":" And Not IsPathUnc(path)\nEnd Function\n\nFunction IsPathUnc(path As String)\n    IsPathUnc = Left(path, 2) = "\\\\"\nEnd Function\n\nFunction TryGetOutDirFromArguments(ByRef outDir As String) As Boolean\n\ntry_:\n\n    On Error GoTo catch_\n\n    Dim macroRunner As Object\n    Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")\n    \n    Dim param As Object\n    Set param = macroRunner.PopParameter(swApp)\n    \n    Dim vArgs As Variant\n    vArgs = param.Get("Args")\n    \n    outDir = CStr(vArgs(0))\n    TryGetOutDirFromArguments = True\n    GoTo finally_\n    \ncatch_:\n    TryGetOutDirFromArguments = False\nfinally_:\n\nEnd Function\n')))}d.isMDXComponent=!0},99892:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/file-save-dialog-8cf78925b229897a40d523f5bba89c28.png"}}]);