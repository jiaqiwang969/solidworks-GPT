"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[33159],{3905:(e,n,o)=>{o.d(n,{Zo:()=>l,kt:()=>d});var t=o(67294);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,s=function(e,n){if(null==e)return{};var o,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var p=t.createContext({}),c=function(e){var n=t.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},l=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var o=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(o),f=s,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return o?t.createElement(d,r(r({ref:n},l),{},{components:o})):t.createElement(d,r({ref:n},l))}));function d(e,n){var o=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=o.length,r=new Array(i);r[0]=f;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[m]="string"==typeof e?e:s,r[1]=a;for(var c=2;c<i;c++)r[c]=o[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}f.displayName="MDXCreateElement"},84829:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=o(87462),s=(o(67294),o(3905));const i={title:"SOLIDWORKS macro to change configuration specific properties for component in pattern",caption:"Change Configuration Specific Properties For Component In Pattern",description:"Example demonstrates how to change the configuration specific properties (use same configuration as pattern seed component or use named configuration) of the component in the pattern using SOLIDWORKS API",image:"component-config-specific-properties.png",labels:["assembly","spattern","configuration","seed"]},r=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pattern-seed-configuration-properties/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pattern-seed-configuration-properties/index",title:"SOLIDWORKS macro to change configuration specific properties for component in pattern",description:"Example demonstrates how to change the configuration specific properties (use same configuration as pattern seed component or use named configuration) of the component in the pattern using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pattern-seed-configuration-properties/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pattern-seed-configuration-properties",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pattern-seed-configuration-properties/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pattern-seed-configuration-properties/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pattern-seed-configuration-properties/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS macro to change configuration specific properties for component in pattern",caption:"Change Configuration Specific Properties For Component In Pattern",description:"Example demonstrates how to change the configuration specific properties (use same configuration as pattern seed component or use named configuration) of the component in the pattern using SOLIDWORKS API",image:"component-config-specific-properties.png",labels:["assembly","spattern","configuration","seed"]},sidebar:"tutorialSidebar",previous:{title:"Passing the parameters to SOLIDWORKS Macro using the SWBasic macro",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pass-parameters-to-vba-macro/via-swb-macro/"},next:{title:"Macro for components configurations permutation using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/permutation/"}},p={},c=[],l={toc:c},m="wrapper";function u(e){let{components:n,...i}=e;return(0,s.kt)(m,(0,t.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Configuration specific properties for the seed component of the sketch driven pattern",src:o(88555).Z,width:"713",height:"259"})),(0,s.kt)("p",null,"This macro example demonstrates how to change the following configuration specific properties using SOLIDWORKS API."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use same configuration as pattern seed component"),(0,s.kt)("li",{parentName:"ul"},"Use named configuration")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iassemblydoc~compconfigproperties5.html"},"IAssemblyDoc::CompConfigProperties5")," SOLIDWORKS API is used to modify the multiple properties at a time for the selected component."),(0,s.kt)("p",null,"In the instance component of the pattern (e.g. Sketch Driven Pattern)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Enum SeedCompConfigOpts_e\n    UseSameConfigAsPatternSeed\n    UseNamedConfiguration\nEnd Enum\n\nDim swApp As SldWorks.SldWorks\nDim swAssy As SldWorks.AssemblyDoc\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    Dim swComp As SldWorks.Component2\n    \n    Set swComp = swAssy.SelectionManager.GetSelectedObject6(1, -1)\n    \n    If Not swComp Is Nothing Then\n        \n        \'Set use named to \'Config1\'\n        SetConfigSpecProps swComp, SeedCompConfigOpts_e.UseNamedConfiguration, "Config1"\n        \n        Stop\n        \n        \'Set use same configuration as pattern seed component\n        SetConfigSpecProps swComp, SeedCompConfigOpts_e.UseSameConfigAsPatternSeed\n    \n    Else\n        MsgBox "Please select component"\n    End If\n    \nEnd Sub\n\nSub SetConfigSpecProps(comp As SldWorks.Component2, opts As SeedCompConfigOpts_e, Optional namedConf As String = "")\n    \n    comp.Select4 False, Nothing, False\n    \n    Dim suppOpts As Long\n    Dim solveOpts As Long\n    Dim isVisible As Boolean\n    Dim exlFromBom As Boolean\n    Dim isEnv As Boolean\n    Dim useNamedConf As Boolean\n    Dim refConfName As String\n    \n    suppOpts = comp.GetSuppression()\n    solveOpts = comp.Solving\n    \n    If solveOpts = -1 Then\n        \'Note: for part components this will be -1 but the CompConfigProperties5 failse if -1 is passed\n        solveOpts = swComponentSolvingOption_e.swComponentRigidSolving\n    End If\n    \n    isVisible = comp.Visible\n    exlFromBom = comp.ExcludeFromBOM\n    isEnv = comp.isEnvelope\n        \n    Select Case opts\n        Case SeedCompConfigOpts_e.UseSameConfigAsPatternSeed\n            useNamedConf = False\n        Case SeedCompConfigOpts_e.UseNamedConfiguration\n            useNamedConf = True\n            refConfName = namedConf\n    End Select\n    \n    swAssy.CompConfigProperties5 suppOpts, solveOpts, isVisible, useNamedConf, refConfName, exlFromBom, isEnv\n    \nEnd Sub\n')))}u.isMDXComponent=!0},88555:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/component-config-specific-properties-dd8f8b90766f4cd1f31cced98deec929.png"}}]);