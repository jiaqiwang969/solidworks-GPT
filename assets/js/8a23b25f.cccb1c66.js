"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[6199],{3905:(e,n,o)=>{o.d(n,{Zo:()=>m,kt:()=>b});var t=o(67294);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function s(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?s(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function r(e,n){if(null==e)return{};var o,t,i=function(e,n){if(null==e)return{};var o,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=t.createContext({}),l=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},m=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=l(o),u=i,b=d["".concat(c,".").concat(u)]||d[u]||p[u]||s;return o?t.createElement(b,a(a({ref:n},m),{},{components:o})):t.createElement(b,a({ref:n},m))}));function b(e,n){var o=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=o.length,a=new Array(s);a[0]=u;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[d]="string"==typeof e?e:i,a[1]=r;for(var l=2;l<s;l++)a[l]=o[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6991:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=o(87462),i=(o(67294),o(3905));const s={caption:"Combine Identical Components",title:"Combine identical components command in SOLIDWORKS BOM table",description:"Macro to emulate combine identical components command in SOLIDWORKS BOM table",image:"combine-identical-components.png"},a=void 0,r={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/combine-identical-components/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/combine-identical-components/index",title:"Combine identical components command in SOLIDWORKS BOM table",description:"Macro to emulate combine identical components command in SOLIDWORKS BOM table",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/combine-identical-components/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/combine-identical-components",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/combine-identical-components/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/combine-identical-components/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/combine-identical-components/index.md",tags:[],version:"current",frontMatter:{caption:"Combine Identical Components",title:"Combine identical components command in SOLIDWORKS BOM table",description:"Macro to emulate combine identical components command in SOLIDWORKS BOM table",image:"combine-identical-components.png"},sidebar:"tutorialSidebar",previous:{title:"Macro to colorize SOLIDWORKS sheet metal and weldment cut-list items",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/colorize-cut-lists/"},next:{title:"Compare model views transformations using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/compare-model-views/"}},c={},l=[],m={toc:l},d="wrapper";function p(e){let{components:n,...s}=e;return(0,i.kt)(d,(0,t.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Combine identical components command",src:o(9448).Z,width:"418",height:"412"})),(0,i.kt)("p",null,"This VBA macro demonstrates how to emulate the ",(0,i.kt)("em",{parentName:"p"},"Combine identical component")," command which is missing in SOLIDWORKS API."),(0,i.kt)("p",null,"Select BOM table to combine identical components. By default, all components are combined, however it is possible to specify the rows to combine by changing the parameters of ",(0,i.kt)("strong",{parentName:"p"},"CombineIdenticalComponents")," function in the macro."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    Dim swBomTable As SldWorks.TableAnnotation\n    Set swBomTable = swModel.SelectionManager.GetSelectedObject6(1, -1)\n    \n    CombineIdenticalComponents swModel, swBomTable, 1, swBomTable.RowCount - 1\n    \nEnd Sub\n\nSub CombineIdenticalComponents(model As SldWorks.ModelDoc2, table As SldWorks.BomTableAnnotation, startRowIndex As Integer, entRowIndex As Integer)\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    Dim swSelData As SldWorks.SelectData\n    Set swSelData = swSelMgr.CreateSelectData\n    \n    Dim swTableAnnotation As SldWorks.TableAnnotation\n    Set swTableAnnotation = table\n    \n    Dim swAnn As SldWorks.Annotation\n    Set swAnn = swTableAnnotation.GetAnnotation()\n    \n    swSelData.SetCellRange startRowIndex, entRowIndex, 0, 0\n    \n    swAnn.Select3 False, swSelData\n    \n    RunCombineIdenticalComponentsCommand\n    \nEnd Sub\n\nSub RunCombineIdenticalComponentsCommand(Optional dummy = Empty)\n    \n    Const WM_COMMAND As Long = &H111\n        \n    Dim swFrame As SldWorks.Frame\n        \n    Set swFrame = swApp.Frame\n        \n    Const CMD_COMBINE_IDENTICAL_COMPONENTS As Long = 24378\n        \n    SendMessage swFrame.GetHWnd(), WM_COMMAND, CMD_COMBINE_IDENTICAL_COMPONENTS, 0\n    \nEnd Sub\n')))}p.isMDXComponent=!0},9448:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/combine-identical-components-fbb3f0e2ce7efd534938f0c8e5b2b528.png"}}]);