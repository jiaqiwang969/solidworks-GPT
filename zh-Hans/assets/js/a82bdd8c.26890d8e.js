"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[74143],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),u=s,b=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return t?o.createElement(b,a(a({ref:n},d),{},{components:t})):o.createElement(b,a({ref:n},d))}));function b(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,a=new Array(r);a[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<r;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},64285:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(87462),s=(t(67294),t(3905));const r={},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/combine-identical-components/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/combine-identical-components/index",title:"index",description:"Combine identical components command",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/combine-identical-components/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/combine-identical-components",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/combine-identical-components/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/combine-identical-components/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/combine-identical-components/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u52a8\u5316\u8868\u683c\uff08BOM\u3001\u901a\u7528\u3001\u4fee\u8ba2\u7b49\uff09",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/"},next:{title:"\u4f7f\u7528VBA\u5b8f\u5c06SOLIDWORKS\u8868\u683c\u5bfc\u51fa\u4e3aCSV",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/export-table-csv/"}},c={},l=[],d={toc:l},p="wrapper";function m(e){let{components:n,...r}=e;return(0,s.kt)(p,(0,o.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Combine identical components command",src:t(67584).Z,width:"418",height:"412"})),(0,s.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u6f14\u793a\u4e86\u5982\u4f55\u6a21\u62dfSOLIDWORKS API\u4e2d\u7f3a\u5931\u7684\u201c\u5408\u5e76\u76f8\u540c\u7ec4\u4ef6\u201d\u547d\u4ee4\u3002"),(0,s.kt)("p",null,"\u9009\u62e9BOM\u8868\u4ee5\u5408\u5e76\u76f8\u540c\u7684\u7ec4\u4ef6\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u7ec4\u4ef6\u90fd\u4f1a\u88ab\u5408\u5e76\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7\u66f4\u6539\u5b8f\u4e2d\u7684",(0,s.kt)("strong",{parentName:"p"},"CombineIdenticalComponents"),"\u51fd\u6570\u7684\u53c2\u6570\u6765\u6307\u5b9a\u8981\u5408\u5e76\u7684\u884c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    Dim swBomTable As SldWorks.TableAnnotation\n    Set swBomTable = swModel.SelectionManager.GetSelectedObject6(1, -1)\n    \n    CombineIdenticalComponents swModel, swBomTable, 1, swBomTable.RowCount - 1\n    \nEnd Sub\n\nSub CombineIdenticalComponents(model As SldWorks.ModelDoc2, table As SldWorks.BomTableAnnotation, startRowIndex As Integer, entRowIndex As Integer)\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    Dim swSelData As SldWorks.SelectData\n    Set swSelData = swSelMgr.CreateSelectData\n    \n    Dim swTableAnnotation As SldWorks.TableAnnotation\n    Set swTableAnnotation = table\n    \n    Dim swAnn As SldWorks.Annotation\n    Set swAnn = swTableAnnotation.GetAnnotation()\n    \n    swSelData.SetCellRange startRowIndex, entRowIndex, 0, 0\n    \n    swAnn.Select3 False, swSelData\n    \n    RunCombineIdenticalComponentsCommand\n    \nEnd Sub\n\nSub RunCombineIdenticalComponentsCommand(Optional dummy = Empty)\n    \n    Const WM_COMMAND As Long = &H111\n        \n    Dim swFrame As SldWorks.Frame\n        \n    Set swFrame = swApp.Frame\n        \n    Const CMD_COMBINE_IDENTICAL_COMPONENTS As Long = 24378\n        \n    SendMessage swFrame.GetHWnd(), WM_COMMAND, CMD_COMBINE_IDENTICAL_COMPONENTS, 0\n    \nEnd Sub\n')))}m.isMDXComponent=!0},67584:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/combine-identical-components-fbb3f0e2ce7efd534938f0c8e5b2b528.png"}}]);