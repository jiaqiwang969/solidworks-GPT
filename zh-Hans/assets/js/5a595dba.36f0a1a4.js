"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[99202],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>b});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=l(t),u=i,b=d["".concat(c,".").concat(u)]||d[u]||p[u]||s;return t?o.createElement(b,a(a({ref:n},m),{},{components:t})):o.createElement(b,a({ref:n},m))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=u;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[d]="string"==typeof e?e:i,a[1]=r;for(var l=2;l<s;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},185:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=t(87462),i=(t(67294),t(3905));const s={caption:"Combine Identical Components",title:"Combine identical components command in SOLIDWORKS BOM table",description:"Macro to emulate combine identical components command in SOLIDWORKS BOM table",image:"combine-identical-components.png"},a=void 0,r={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/combine-identical-components/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/combine-identical-components/index",title:"Combine identical components command in SOLIDWORKS BOM table",description:"Macro to emulate combine identical components command in SOLIDWORKS BOM table",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/combine-identical-components/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/combine-identical-components",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/combine-identical-components/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/combine-identical-components/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/combine-identical-components/index.md",tags:[],version:"current",frontMatter:{caption:"Combine Identical Components",title:"Combine identical components command in SOLIDWORKS BOM table",description:"Macro to emulate combine identical components command in SOLIDWORKS BOM table",image:"combine-identical-components.png"},sidebar:"tutorialSidebar",previous:{title:"Tables (BOM, General, Revision etc.) automation using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/"},next:{title:"Export SOLIDWORKS table to CSV using VBA macro",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/export-table-csv/"}},c={},l=[],m={toc:l},d="wrapper";function p(e){let{components:n,...s}=e;return(0,i.kt)(d,(0,o.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Combine identical components command",src:t(33976).Z,width:"418",height:"412"})),(0,i.kt)("p",null,"This VBA macro demonstrates how to emulate the ",(0,i.kt)("em",{parentName:"p"},"Combine identical component")," command which is missing in SOLIDWORKS API."),(0,i.kt)("p",null,"Select BOM table to combine identical components. By default, all components are combined, however it is possible to specify the rows to combine by changing the parameters of ",(0,i.kt)("strong",{parentName:"p"},"CombineIdenticalComponents")," function in the macro."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    Dim swBomTable As SldWorks.TableAnnotation\n    Set swBomTable = swModel.SelectionManager.GetSelectedObject6(1, -1)\n    \n    CombineIdenticalComponents swModel, swBomTable, 1, swBomTable.RowCount - 1\n    \nEnd Sub\n\nSub CombineIdenticalComponents(model As SldWorks.ModelDoc2, table As SldWorks.BomTableAnnotation, startRowIndex As Integer, entRowIndex As Integer)\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    Dim swSelData As SldWorks.SelectData\n    Set swSelData = swSelMgr.CreateSelectData\n    \n    Dim swTableAnnotation As SldWorks.TableAnnotation\n    Set swTableAnnotation = table\n    \n    Dim swAnn As SldWorks.Annotation\n    Set swAnn = swTableAnnotation.GetAnnotation()\n    \n    swSelData.SetCellRange startRowIndex, entRowIndex, 0, 0\n    \n    swAnn.Select3 False, swSelData\n    \n    RunCombineIdenticalComponentsCommand\n    \nEnd Sub\n\nSub RunCombineIdenticalComponentsCommand(Optional dummy = Empty)\n    \n    Const WM_COMMAND As Long = &H111\n        \n    Dim swFrame As SldWorks.Frame\n        \n    Set swFrame = swApp.Frame\n        \n    Const CMD_COMBINE_IDENTICAL_COMPONENTS As Long = 24378\n        \n    SendMessage swFrame.GetHWnd(), WM_COMMAND, CMD_COMBINE_IDENTICAL_COMPONENTS, 0\n    \nEnd Sub\n')))}p.isMDXComponent=!0},33976:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/combine-identical-components-fbb3f0e2ce7efd534938f0c8e5b2b528.png"}}]);