"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[43161],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>w});var n=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var d=n.createContext({}),l=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(o),u=s,w=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return o?n.createElement(w,a(a({ref:t},p),{},{components:o})):n.createElement(w,a({ref:t},p))}));function w(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=o.length,a=new Array(r);a[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<r;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},72611:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=o(87462),s=(o(67294),o(3905));const r={title:"Add components to assembly using SOLIDWORKS API",caption:"Add Components To Assembly",description:"Example Demonstrates 2 different ways to add component into the assembly tree (single component add or batch adding)",labels:["add component","assembly","example","solidworks api"],"redirect-from":["/2018/03/solidworks-api-assembly-add-components.html","/solidworks-api/document/assembly/add-components"]},a=void 0,i={unversionedId:"codestack/solidworks-api/document/assembly/components/add/index",id:"codestack/solidworks-api/document/assembly/components/add/index",title:"Add components to assembly using SOLIDWORKS API",description:"Example Demonstrates 2 different ways to add component into the assembly tree (single component add or batch adding)",source:"@site/docs/codestack/solidworks-api/document/assembly/components/add/index.md",sourceDirName:"codestack/solidworks-api/document/assembly/components/add",slug:"/codestack/solidworks-api/document/assembly/components/add/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/assembly/components/add/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/assembly/components/add/index.md",tags:[],version:"current",frontMatter:{title:"Add components to assembly using SOLIDWORKS API",caption:"Add Components To Assembly",description:"Example Demonstrates 2 different ways to add component into the assembly tree (single component add or batch adding)",labels:["add component","assembly","example","solidworks api"],"redirect-from":["/2018/03/solidworks-api-assembly-add-components.html","/solidworks-api/document/assembly/add-components"]},sidebar:"tutorialSidebar",previous:{title:"Assembly components automation using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/assembly/components/"},next:{title:"Macro for extended advanced selections using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/assembly/components/advanced-selection/"}},d={},l=[],p={toc:l},m="wrapper";function c(e){let{components:t,...r}=e;return(0,s.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This example Demonstrates 2 different ways to add component into the assembly tree using SOLIDWORKS API."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Traditional way to add component via ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IAssemblyDoc~AddComponent5.html"},"AddComponentX")," SOLIDWORKS API requires the model to be loaded into the memory. Otherwise the operation fails."),(0,s.kt)("li",{parentName:"ul"},"More advanced way is to use the ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAssemblyDoc~AddComponents3.html"},"AddComponents ")," SOLIDWORKS API. This method allows batch insertion of different components without the need to open the model beforehand.")),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:o(34980).Z},"Download Example Files")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swMathUtils As SldWorks.MathUtility\nDim swAssy As SldWorks.AssemblyDoc\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        \n        Dim comp1Path As String\n        Dim comp2Path As String\n        \n        comp1Path = swApp.GetCurrentMacroPathFolder() & "\\Part1.sldprt"\n        comp2Path = swApp.GetCurrentMacroPathFolder() & "\\Part2.sldprt"\n        \n        Dim swComp As SldWorks.Component2\n        \n        \'Following API call will fail as it is required to have the model loaded into the memory\n        Set swComp = swAssy.AddComponent4(comp1Path, "", 0, 0, 0)\n        \n        Debug.Assert Not swComp Is Nothing\n                \n        \'Loading model invisibly\n        swApp.DocumentVisible False, swDocumentTypes_e.swDocPART\n        swApp.OpenDoc6 comp1Path, swDocumentTypes_e.swDocPART, swOpenDocOptions_e.swOpenDocOptions_Silent, "", 0, 0\n        swApp.DocumentVisible True, swDocumentTypes_e.swDocPART\n        \n        \'Now this API call succeeded\n        Set swComp = swAssy.AddComponent4(comp1Path, "", 0, 0, 0)\n        \n        Debug.Assert Not swComp Is Nothing\n        \n        Dim strCompNames(0) As String\n        Dim vTransformData As Variant\n        Dim vComps As Variant\n        strCompNames(0) = comp2Path\n        \n        vTransformData = swMathUtils.CreateTransform(Empty).ArrayData\n        \n        \'It is not required to load document into memory if this method is used\n        vComps = swAssy.AddComponents(strCompNames, vTransformData)\n    \n        Debug.Assert UBound(vComps) <> 1\n        \n    Else\n        \n        MsgBox "Please open or create assembly"\n        \n    End If\n\nEnd Sub\n\n\n')))}c.isMDXComponent=!0},34980:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/parts-9ce2e66c88e0d8e6ba899d7af67028a6.zip"}}]);