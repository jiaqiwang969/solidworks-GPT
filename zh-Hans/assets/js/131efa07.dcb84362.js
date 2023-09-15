"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[18217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>w});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=s.createContext({}),d=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return s.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,w=m["".concat(c,".").concat(u)]||m[u]||p[u]||r;return n?s.createElement(w,i(i({ref:t},l),{},{components:n})):s.createElement(w,i({ref:t},l))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[m]="string"==typeof e?e:o,i[1]=a;for(var d=2;d<r;d++)i[d]=n[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(87462),o=(n(67294),n(3905));const r={},i="\u4f7f\u7528SOLIDWORKS API\u5728\u5750\u6807\u7cfb\u4e4b\u95f4\u6dfb\u52a0\u914d\u5408\u5173\u7cfb",a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/add-mate-between-coordinate-systems/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/add-mate-between-coordinate-systems/index",title:"\u4f7f\u7528SOLIDWORKS API\u5728\u5750\u6807\u7cfb\u4e4b\u95f4\u6dfb\u52a0\u914d\u5408\u5173\u7cfb",description:"\u8be5\u5b8f\u5728\u4e24\u4e2a\u9009\u5b9a\u7ec4\u4ef6\u7684\u4e24\u4e2a\u5750\u6807\u7cfb\u4e4b\u95f4\u6dfb\u52a0\u4e86\u4e00\u4e2a\u91cd\u5408\u7684\u914d\u5408\u5173\u7cfb\u3002\u8fd9\u4e9b\u7ec4\u4ef6\u5fc5\u987b\u5305\u542b\u540d\u4e3aCoordinate System1\u7684\u5750\u6807\u7cfb\u7279\u5f81\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/add-mate-between-coordinate-systems/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/add-mate-between-coordinate-systems",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/add-mate-between-coordinate-systems/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/add-mate-between-coordinate-systems/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/add-mate-between-coordinate-systems/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Automating Mating Relationships in Assemblies with SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/"},next:{title:"\u5728SOLIDWORKS\u88c5\u914d\u4f53\u4e2d\u7ffb\u8f6c\u6700\u540e\u4e00\u4e2a\u63d2\u5165\u7684\u5bf9\u9f50\u5173\u7cfb\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/flip-last/"}},c={},d=[],l={toc:d},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f7f\u7528solidworks-api\u5728\u5750\u6807\u7cfb\u4e4b\u95f4\u6dfb\u52a0\u914d\u5408\u5173\u7cfb"},"\u4f7f\u7528SOLIDWORKS API\u5728\u5750\u6807\u7cfb\u4e4b\u95f4\u6dfb\u52a0\u914d\u5408\u5173\u7cfb"),(0,o.kt)("p",null,"\u8be5\u5b8f\u5728\u4e24\u4e2a\u9009\u5b9a\u7ec4\u4ef6\u7684\u4e24\u4e2a\u5750\u6807\u7cfb\u4e4b\u95f4\u6dfb\u52a0\u4e86\u4e00\u4e2a\u91cd\u5408\u7684\u914d\u5408\u5173\u7cfb\u3002\u8fd9\u4e9b\u7ec4\u4ef6\u5fc5\u987b\u5305\u542b\u540d\u4e3a",(0,o.kt)("em",{parentName:"p"},"Coordinate System1"),"\u7684\u5750\u6807\u7cfb\u7279\u5f81\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u91cd\u5408\u914d\u5408\u5173\u7cfb\u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762",src:n(67566).Z,width:"640",height:"265"}),"{ width=640 }"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iassemblydoc~addmate3.html"},"IAssemblyDoc::AddMate3")," SOLIDWORKS API\u63d2\u5165\u914d\u5408\u5173\u7cfb\u7279\u5f81\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swAssy As SldWorks.AssemblyDoc\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swAssy = swApp.ActiveDoc\n        \n    If Not swAssy Is Nothing Then\n    \n        Set swSelMgr = swAssy.SelectionManager\n                \n        Dim swCs1 As SldWorks.Feature\n        Dim swCs2 As SldWorks.Feature\n    \n        Set swCs1 = GetCoordinateSystemFromSelection(1, "Coordinate System1")\n        Set swCs2 = GetCoordinateSystemFromSelection(2, "Coordinate System1")\n        \n        swCs1.Select2 False, 1\n        swCs2.Select2 True, 1\n        \n        swAssy.AddMate3 swMateType_e.swMateCOINCIDENT, swMateAlign_e.swMateAlignCLOSEST, False, 0, 0, 0, 0, 0, 0, 0, 0, False, 0\n        \n        swAssy.EditRebuild\n    \n    Else\n        \n        MsgBox "\u8bf7\u6253\u5f00\u88c5\u914d\u4f53"\n    \n    End If\n    \nEnd Sub\n\nFunction GetCoordinateSystemFromSelection(index As Integer, name As String) As SldWorks.Feature\n    \n    Dim swComp As SldWorks.Component2\n    Dim swCoordSys As SldWorks.Feature\n    \n    Set swComp = swSelMgr.GetSelectedObjectsComponent2(index)\n    \n    If Not swComp Is Nothing Then\n    \n        Set swCoordSys = swComp.FeatureByName(name)\n        \n        If swCoordSys Is Nothing Then\n            MsgBox "\u7ec4\u4ef6 " & swComp.Name2 & " \u4e0d\u5305\u542b\u7279\u5f81 " & name\n            End\n        End If\n    \n    Else\n        \n        MsgBox "\u8bf7\u9009\u62e92\u4e2a\u7ec4\u4ef6"\n        End\n        \n    End If\n    \n    Set GetCoordinateSystemFromSelection = swCoordSys\n    \nEnd Function\n')))}p.isMDXComponent=!0},67566:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/sw-mate-coincident-3065c16fa9b47b5ab4592231a16be6c9.png"}}]);