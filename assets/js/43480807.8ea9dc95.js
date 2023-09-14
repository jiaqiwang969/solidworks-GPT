"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[37306],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>w});var n=t(67294);function s(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){s(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,s=function(e,o){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(s[t]=e[t]);return s}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=n.createContext({}),l=function(e){var o=n.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},c=function(e){var o=l(e.components);return n.createElement(d.Provider,{value:o},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),u=s,w=p["".concat(d,".").concat(u)]||p[u]||m[u]||r;return t?n.createElement(w,a(a({ref:o},c),{},{components:t})):n.createElement(w,a({ref:o},c))}));function w(e,o){var t=arguments,s=o&&o.mdxType;if("string"==typeof e||s){var r=t.length,a=new Array(r);a[0]=u;var i={};for(var d in o)hasOwnProperty.call(o,d)&&(i[d]=o[d]);i.originalType=e,i[p]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<r;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},25474:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=t(87462),s=(t(67294),t(3905));const r={title:"Add components to assembly using SOLIDWORKS API",caption:"Add Components To Assembly",description:"Example Demonstrates 2 different ways to add component into the assembly tree (single component add or batch adding)",labels:["add component","assembly","example","solidworks api"],"redirect-from":["/2018/03/solidworks-api-assembly-add-components.html","/solidworks-api/document/assembly/add-components"]},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/add/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/add/index",title:"Add components to assembly using SOLIDWORKS API",description:"Example Demonstrates 2 different ways to add component into the assembly tree (single component add or batch adding)",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/add/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/add",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/add/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/add/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/add/index.md",tags:[],version:"current",frontMatter:{title:"Add components to assembly using SOLIDWORKS API",caption:"Add Components To Assembly",description:"Example Demonstrates 2 different ways to add component into the assembly tree (single component add or batch adding)",labels:["add component","assembly","example","solidworks api"],"redirect-from":["/2018/03/solidworks-api-assembly-add-components.html","/solidworks-api/document/assembly/add-components"]},sidebar:"tutorialSidebar",previous:{title:"Assembly components automation using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/"},next:{title:"Macro for extended advanced selections using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/advanced-selection/"}},d={},l=[],c={toc:l},p="wrapper";function m(e){let{components:o,...r}=e;return(0,s.kt)(p,(0,n.Z)({},c,r,{components:o,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This example Demonstrates 2 different ways to add component into the assembly tree using SOLIDWORKS API."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Traditional way to add component via ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IAssemblyDoc~AddComponent5.html"},"AddComponentX")," SOLIDWORKS API requires the model to be loaded into the memory. Otherwise the operation fails."),(0,s.kt)("li",{parentName:"ul"},"More advanced way is to use the ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAssemblyDoc~AddComponents3.html"},"AddComponents ")," SOLIDWORKS API. This method allows batch insertion of different components without the need to open the model beforehand.")),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:t(45524).Z},"Download Example Files")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swMathUtils As SldWorks.MathUtility\nDim swAssy As SldWorks.AssemblyDoc\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        \n        Dim comp1Path As String\n        Dim comp2Path As String\n        \n        comp1Path = swApp.GetCurrentMacroPathFolder() & "\\Part1.sldprt"\n        comp2Path = swApp.GetCurrentMacroPathFolder() & "\\Part2.sldprt"\n        \n        Dim swComp As SldWorks.Component2\n        \n        \'Following API call will fail as it is required to have the model loaded into the memory\n        Set swComp = swAssy.AddComponent4(comp1Path, "", 0, 0, 0)\n        \n        Debug.Assert Not swComp Is Nothing\n                \n        \'Loading model invisibly\n        swApp.DocumentVisible False, swDocumentTypes_e.swDocPART\n        swApp.OpenDoc6 comp1Path, swDocumentTypes_e.swDocPART, swOpenDocOptions_e.swOpenDocOptions_Silent, "", 0, 0\n        swApp.DocumentVisible True, swDocumentTypes_e.swDocPART\n        \n        \'Now this API call succeeded\n        Set swComp = swAssy.AddComponent4(comp1Path, "", 0, 0, 0)\n        \n        Debug.Assert Not swComp Is Nothing\n        \n        Dim strCompNames(0) As String\n        Dim vTransformData As Variant\n        Dim vComps As Variant\n        strCompNames(0) = comp2Path\n        \n        vTransformData = swMathUtils.CreateTransform(Empty).ArrayData\n        \n        \'It is not required to load document into memory if this method is used\n        vComps = swAssy.AddComponents(strCompNames, vTransformData)\n    \n        Debug.Assert UBound(vComps) <> 1\n        \n    Else\n        \n        MsgBox "Please open or create assembly"\n        \n    End If\n\nEnd Sub\n\n\n')))}m.isMDXComponent=!0},45524:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/files/parts-9ce2e66c88e0d8e6ba899d7af67028a6.zip"}}]);