"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[95365],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=s,f=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return t?o.createElement(f,a(a({ref:n},m),{},{components:t})):o.createElement(f,a({ref:n},m))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,a=new Array(r);a[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},22610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(87462),s=(t(67294),t(3905));const r={layout:"sw-tool",title:"Remove all mates and fix components in SOLIDWORKS assembly",caption:"Remove All Mates And Fix Components",description:"VBA macro to remove all mates and fix all top level components in the active SOLIDWORKS assembly",image:"remove-mates.svg",labels:["mates","remove","components","fix"],group:"Assembly"},a=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/fix-remove-mates/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/fix-remove-mates/index",title:"Remove all mates and fix components in SOLIDWORKS assembly",description:"VBA macro to remove all mates and fix all top level components in the active SOLIDWORKS assembly",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/fix-remove-mates/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/fix-remove-mates",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/fix-remove-mates/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/fix-remove-mates/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/fix-remove-mates/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Remove all mates and fix components in SOLIDWORKS assembly",caption:"Remove All Mates And Fix Components",description:"VBA macro to remove all mates and fix all top level components in the active SOLIDWORKS assembly",image:"remove-mates.svg",labels:["mates","remove","components","fix"],group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"Fix or float component in active or all configurations using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/fix-float/"},next:{title:"Get the pointer to component from name using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-by-name/"}},l={},c=[],m={toc:c},d="wrapper";function p(e){let{components:n,...r}=e;return(0,s.kt)(d,(0,o.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Mates in the Feature Manager Tree",src:t(70606).Z,width:"212",height:"246"})),(0,s.kt)("p",null,"This VBA macro remove all mates from the active assembly and fixes all the top level components."),(0,s.kt)("p",null,"Macro allows to configure the actions to perform on the assembly by changing the values of the constants"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const FIX_COMPONENTS As Boolean = True 'True to fix components, False to keep components as is\nConst REMOVE_MATES As Boolean = True 'True to remove mates, False to keep mates\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Macro will fix all top level components, excluding all components which are instances of the pattern")),(0,s.kt)("p",null,"This allows to significantly improve the performance of the assembly."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const FIX_COMPONENTS As Boolean = True\nConst REMOVE_MATES As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        If swModel.GetType() <> swDocumentTypes_e.swDocASSEMBLY Then\n            Err.Raise vbError, "Only assembly document is supported"\n        End If\n        \n        Dim swAssy As SldWorks.AssemblyDoc\n        Set swAssy = swModel\n        \n        If REMOVE_MATES Then\n        \n            Dim vMates As Variant\n            vMates = GetAllMates(swAssy)\n            \n            If Not IsEmpty(vMates) Then\n                \n                If swModel.Extension.MultiSelect2(vMates, False, Nothing) = UBound(vMates) + 1 Then\n                    If False = swModel.Extension.DeleteSelection2(swDeleteSelectionOptions_e.swDelete_Absorbed) Then\n                        Err.Raise vbError, "", "Failed to delete mates"\n                    End If\n                Else\n                    Err.Raise vbError, "", "Failed to select mates for deletion"\n                End If\n            End If\n        \n        End If\n        \n        If FIX_COMPONENTS Then\n            \n            Dim vComps As Variant\n            vComps = GetAllComponents(swAssy)\n            \n            If Not IsEmpty(vComps) Then\n                If swAssy.Extension.MultiSelect2(vComps, False, Nothing) = UBound(vComps) + 1 Then\n                    swAssy.FixComponent\n                Else\n                    Err.Raise vbError, "", "Failed to select components"\n                End If\n            End If\n            \n        End If\n        \n    Else\n        Err.Raise vbError, "", "Please open assemby document"\n    End If\n    \nEnd Sub\n\nFunction GetAllMates(assm As SldWorks.AssemblyDoc) As Variant\n    \n    Dim swMates() As SldWorks.Feature\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = assm\n    \n    Dim swMateGroupFeat As SldWorks.Feature\n    \n    Dim featIndex As Integer\n    featIndex = 0\n        \n    Do\n        Set swMateGroupFeat = swModel.FeatureByPositionReverse(featIndex)\n        \n        featIndex = featIndex + 1\n    Loop While swMateGroupFeat.GetTypeName2() <> "MateGroup"\n    \n    Dim swMateFeat As SldWorks.Feature\n    \n    Set swMateFeat = swMateGroupFeat.GetFirstSubFeature\n    \n    While Not swMateFeat Is Nothing\n        \n        If TypeOf swMateFeat.GetSpecificFeature2() Is SldWorks.Mate2 Then\n            If isInit Then\n                ReDim Preserve swMates(UBound(swMates) + 1)\n            Else\n                ReDim swMates(0)\n                isInit = True\n            End If\n            Set swMates(UBound(swMates)) = swMateFeat\n        End If\n        \n        Set swMateFeat = swMateFeat.GetNextSubFeature\n    Wend\n    \n    If isInit Then\n        GetAllMates = swMates\n    Else\n        GetAllMates = Empty\n    End If\n    \nEnd Function\n\nFunction GetAllComponents(assm As SldWorks.AssemblyDoc) As Variant\n    \n    Dim swComps() As SldWorks.Component2\n    Dim isInit As Boolean\n    isInit = False\n        \n    Dim vComps As Variant\n    vComps = assm.GetComponents(True)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n        \n        If False = swComp.IsPatternInstance Then\n            If Not isInit Then\n                isInit = True\n                ReDim swComps(0)\n            Else\n                ReDim Preserve swComps(UBound(swComps) + 1)\n            End If\n            Set swComps(UBound(swComps)) = swComp\n        End If\n\n    Next\n    \n    If isInit Then\n        GetAllComponents = swComps\n    Else\n        GetAllComponents = Empty\n    End If\n    \nEnd Function\n')))}p.isMDXComponent=!0},70606:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,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"}}]);