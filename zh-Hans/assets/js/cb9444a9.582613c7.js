"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[27204],{3905:(n,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>u});var t=o(67294);function s(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function r(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function a(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){s(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function i(n,e){if(null==n)return{};var o,t,s=function(n,e){if(null==n)return{};var o,t,s={},r=Object.keys(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||(s[o]=n[o]);return s}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(s[o]=n[o])}return s}var m=t.createContext({}),c=function(n){var e=t.useContext(m),o=e;return n&&(o="function"==typeof n?n(e):a(a({},e),n)),o},p=function(n){var e=c(n.components);return t.createElement(m.Provider,{value:e},n.children)},l="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var o=n.components,s=n.mdxType,r=n.originalType,m=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),l=c(o),f=s,u=l["".concat(m,".").concat(f)]||l[f]||d[f]||r;return o?t.createElement(u,a(a({ref:e},p),{},{components:o})):t.createElement(u,a({ref:e},p))}));function u(n,e){var o=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var r=o.length,a=new Array(r);a[0]=f;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=n,i[l]="string"==typeof n?n:s,a[1]=i;for(var c=2;c<r;c++)a[c]=o[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}f.displayName="MDXCreateElement"},78753:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>m,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=o(87462),s=(o(67294),o(3905));const r={title:"Modify configuration parameters for components using SOLIDWORKS API",caption:"Modify Configuration Parameters For Multiple Components",description:"Example demonstrates how to modify parameters of multiple components in the specified configurations (e.g. suppression state) using SOLIDWORKS API",image:"modify-configurations.png",labels:["parameters","design table","components","configuration"]},a=void 0,i={unversionedId:"codestack-clone/solidworks-api/document/assembly/components/batch-modify-parameters/index",id:"codestack-clone/solidworks-api/document/assembly/components/batch-modify-parameters/index",title:"Modify configuration parameters for components using SOLIDWORKS API",description:"Example demonstrates how to modify parameters of multiple components in the specified configurations (e.g. suppression state) using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/document/assembly/components/batch-modify-parameters/index.md",sourceDirName:"codestack-clone/solidworks-api/document/assembly/components/batch-modify-parameters",slug:"/codestack-clone/solidworks-api/document/assembly/components/batch-modify-parameters/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/assembly/components/batch-modify-parameters/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/assembly/components/batch-modify-parameters/index.md",tags:[],version:"current",frontMatter:{title:"Modify configuration parameters for components using SOLIDWORKS API",caption:"Modify Configuration Parameters For Multiple Components",description:"Example demonstrates how to modify parameters of multiple components in the specified configurations (e.g. suppression state) using SOLIDWORKS API",image:"modify-configurations.png",labels:["parameters","design table","components","configuration"]},sidebar:"tutorialSidebar",previous:{title:"Load components presentation transforms from CSV file using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/assembly/components/apply-presentation-transform-from-csv/"},next:{title:"Macro to copy path of SOLIDWORKS component to clipboard",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/assembly/components/copy-path/"}},m={},c=[],p={toc:c},l="wrapper";function d(n){let{components:e,...r}=n;return(0,s.kt)(l,(0,t.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Modify component parameters in configurations",src:o(40703).Z,width:"673",height:"285"}),"{ width=350 }"),(0,s.kt)("p",null,"This example demonstrates how to use parameters (similar to design table parameters) to suppress all components in every configuration except of the active one using SOLIDWORKS API. It is not required to activate configuration or select any components to use the macro."),(0,s.kt)("p",null,"Multiple components can be modified in a batch mode to improve performance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        \n        Dim vConfNames As Variant\n        vConfNames = GetOtherConfigurations(swAssy)\n        \n        If Not IsEmpty(vConfNames) Then\n        \n            Dim vComps As Variant\n            vComps = swAssy.GetComponents(True)\n            \n            Dim i As Integer\n            \n            Dim paramNames() As String\n            Dim paramValues() As String\n            \n            ReDim paramNames(UBound(vComps))\n            ReDim paramValues(UBound(vComps))\n            \n            For i = 0 To UBound(vComps)\n                    \n                Dim swComp As SldWorks.Component2\n                Set swComp = vComps(i)\n                \n                Dim instId As Integer\n                Dim compName As String\n                compName = swComp.Name2\n                instId = CInt(Right(compName, Len(compName) - InStrRev(compName, "-")))\n                compName = Left(compName, InStrRev(compName, "-") - 1)\n                \n                paramNames(i) = "$STATE@" & compName & "<" & instId & ">"\n                paramValues(i) = "S"\n                                \n            Next\n            \n            For i = 0 To UBound(vConfNames)\n                \n                Dim swConfMgr As SldWorks.ConfigurationManager\n                Set swConfMgr = swAssy.ConfigurationManager\n                \n                If False = swConfMgr.SetConfigurationParams(CStr(vConfNames(i)), (paramNames), (paramValues)) Then\n                    MsgBox "Failed to set configuration parameters for " & CStr(vConfNames(i))\n                End If\n                \n            Next\n            \n        Else\n            MsgBox "There is no other configurations in the assembly"\n        End If\n    \n    Else\n        MsgBox "Please open assembly"\n    End If\n    \nEnd Sub\n\nFunction GetOtherConfigurations(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim vAllConfs As Variant\n    vAllConfs = model.GetConfigurationNames()\n    \n    If UBound(vAllConfs) > 0 Then\n        \n        Dim confs() As String\n        ReDim confs(UBound(vAllConfs) - 1)\n        \n        Dim curIndex As Integer\n        curIndex = 0\n        \n        Dim activeConf As String\n        activeConf = model.ConfigurationManager.ActiveConfiguration.Name\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vAllConfs)\n            If LCase(vAllConfs(i)) <> LCase(activeConf) Then\n                confs(curIndex) = vAllConfs(i)\n                curIndex = curIndex + 1\n            End If\n        Next\n        \n        GetOtherConfigurations = confs\n        \n    Else\n        GetOtherConfigurations = Empty\n    End If\n    \nEnd Function\n')))}d.isMDXComponent=!0},40703:(n,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/modify-configurations-a4e521b29ddf571380fb733682c0106d.png"}}]);