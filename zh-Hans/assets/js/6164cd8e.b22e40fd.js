"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[27492],{3905:(n,e,o)=>{o.d(e,{Zo:()=>m,kt:()=>f});var t=o(67294);function s(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function i(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function r(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){s(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function a(n,e){if(null==n)return{};var o,t,s=function(n,e){if(null==n)return{};var o,t,s={},i=Object.keys(n);for(t=0;t<i.length;t++)o=i[t],e.indexOf(o)>=0||(s[o]=n[o]);return s}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)o=i[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(s[o]=n[o])}return s}var l=t.createContext({}),c=function(n){var e=t.useContext(l),o=e;return n&&(o="function"==typeof n?n(e):r(r({},e),n)),o},m=function(n){var e=c(n.components);return t.createElement(l.Provider,{value:e},n.children)},d="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(n,e){var o=n.components,s=n.mdxType,i=n.originalType,l=n.parentName,m=a(n,["components","mdxType","originalType","parentName"]),d=c(o),p=s,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return o?t.createElement(f,r(r({ref:e},m),{},{components:o})):t.createElement(f,r({ref:e},m))}));function f(n,e){var o=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var i=o.length,r=new Array(i);r[0]=p;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a[d]="string"==typeof n?n:s,r[1]=a;for(var c=2;c<i;c++)r[c]=o[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},78710:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=o(87462),s=(o(67294),o(3905));const i={layout:"sw-tool",title:"Macro animates switching of configurations using SOLIDWORKS API",caption:"Animate Configurations"},r=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/animate-configurations/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/animate-configurations/index",title:"Macro animates switching of configurations using SOLIDWORKS API",description:"Macro demonstrates how to create an animation from configurations to represents model history or sheet metal folding",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/animate-configurations/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/animate-configurations",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/animate-configurations/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/animate-configurations/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/animate-configurations/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro animates switching of configurations using SOLIDWORKS API",caption:"Animate Configurations"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u7ebf\u5bf9\u9f50\u5230\u8f74\u5411",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/align-line-along-axis/"},next:{title:"Explanation of SOLIDWORKS API Object Model and Object Relationships",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/"}},l={},c=[{value:"group: Motion Study",id:"group-motion-study",level:2}],m={toc:c},d="wrapper";function u(n){let{components:e,...i}=n;return(0,s.kt)(d,(0,t.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Macro demonstrates how to create an animation from configurations to represents model history or sheet metal folding\nimage: animate-configurations.svg\nlabels: ","[motion, animation, sheet metal, bending]"),(0,s.kt)("h2",{id:"group-motion-study"},"group: Motion Study"),(0,s.kt)("p",null,"{% youtube { id: t35Kjjq509w } %}"),(0,s.kt)("p",null,"Macro demonstrates how to create an animation from configurations using SOLIDWORKS API."),(0,s.kt)("p",null,"This could be useful when it is required to create an animation to represents model history or sheet metal folding."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Open part or assembly"),(0,s.kt)("li",{parentName:"ul"},"Select configurations in the order they should be animated")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Multiple configurations selected in the configurations tab",src:o(74159).Z,width:"948",height:"427"}),"{ width=350 }"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Run the macro. New assembly created with configurations set as animation steps.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Sheet metal bending animation",src:o(57105).Z,width:"969",height:"768"}),"{ width=450 }"),(0,s.kt)("p",null,"Macro parameters (time of the bend transition and pause between folding operations) can be changed by modifying the constants at the top of the macro"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const TRANSITION_TIME As Double = 0.5\nConst PAUSE_TIME As Double = 2\n")),(0,s.kt)("p",null,"Refer the ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/features-manager/create-feature-configurations/"},"Suppress Features In New Configurations")," for a macro to create configurations from features."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const TRANSITION_TIME As Double = 0.5\nConst PAUSE_TIME As Double = 2\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n    \n    Set swApp = Application.SldWorks\n\n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n                \n        If swModel.GetPathName() <> "" Then\n                \n            Dim vConfs As Variant\n            vConfs = GetSelectedConfigurations(swModel)\n            \n            If Not IsEmpty(vConfs) Then\n                \n                Dim swAssy As SldWorks.AssemblyDoc\n                 \n                Set swAssy = NewAssembly\n                \n                    If Not swAssy Is Nothing Then\n                    Dim vComps As Variant\n                    vComps = CreateComponents(swAssy, swModel, vConfs)\n                    Dim swMotionStudyMgr As Object\n                    Set swMotionStudyMgr = swAssy.Extension.GetMotionStudyManager()\n                \n                    Dim swMotionStudy As Object\n                    Set swMotionStudy = swMotionStudyMgr.CreateMotionStudy()\n                \n                    CreateFrames swMotionStudy, vComps, TRANSITION_TIME, PAUSE_TIME\n                Else\n                \n                    MsgBox "Failed to create new assembly"\n                End If\n            Else\n                MsgBox "Please select configurations"\n            End If\n            \n        Else\n            MsgBox "Please save document"\n        End If\n        \n    Else\n        MsgBox "Please open part or assembly"\n    End If\n\nEnd Sub\n\nSub CreateFrames(motionStudy As Object, vComps As Variant, transitionTime As Double, pauseTime As Double)\n    \n    Dim i As Integer\n    Dim swCompToHide As SldWorks.Component2\n    Dim swCompToShow As SldWorks.Component2\n        \n    motionStudy.SetTime 0\n    \n    Set swCompToShow = vComps(0)\n    swCompToShow.Visible = True\n    \n    For i = 1 To UBound(vComps)\n        Set swCompToHide = vComps(i)\n        swCompToHide.Visible = False\n    Next\n    \n    Dim curTime As Double\n    curTime = 0\n    \n    For i = 1 To UBound(vComps)\n                \n        Set swCompToHide = vComps(i - 1)\n        Set swCompToShow = vComps(i)\n        \n        motionStudy.SetTime curTime + transitionTime\n        swCompToHide.Visible = False\n        \n        motionStudy.SetTime curTime + transitionTime\n        swCompToShow.Visible = True\n        \n        curTime = i * showTime + i * pauseTime\n        motionStudy.SetTime curTime\n        \n        swCompToShow.Visible = False\n        swCompToShow.Visible = True\n            \n        If i <> UBound(vComps) Then\n        \n            Dim swCompToLock As SldWorks.Component2\n            Set swCompToLock = vComps(i + 1)\n            \n            swCompToLock.Visible = True\n            swCompToLock.Visible = False\n            \n        End If\n        \n    Next\n    \nEnd Sub\n\nFunction CreateComponents(assy As SldWorks.AssemblyDoc, model As SldWorks.ModelDoc2, confs As Variant) As Variant\n    \n    Dim i As Integer\n\n    Dim swComps() As SldWorks.Component2\n    ReDim swComps(UBound(confs))\n    \n    Dim dMatrix(15) As Double\n    dMatrix(0) = 1: dMatrix(1) = 0: dMatrix(2) = 0: dMatrix(3) = 0\n    dMatrix(4) = 1: dMatrix(5) = 0: dMatrix(6) = 0: dMatrix(7) = 0\n    dMatrix(8) = 1: dMatrix(9) = 0: dMatrix(10) = 0: dMatrix(11) = 0\n    dMatrix(12) = 1: dMatrix(13) = 0: dMatrix(14) = 0: dMatrix(15) = 0\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    Dim swTransform As SldWorks.MathTransform\n    Set swTransform = swMathUtils.CreateTransform(dMatrix)\n    \n    For i = 0 To UBound(confs)\n\n        Dim swComp As SldWorks.Component2\n        Set swComp = assy.AddComponent5(model.GetPathName(), swAddComponentConfigOptions_e.swAddComponentConfigOptions_CurrentSelectedConfig, "", True, confs(i), 0, 0, 0)\n        swComp.Select4 False, Nothing, False\n        assy.UnfixComponent\n        swComp.Transform2 = swTransform\n        swComp.ReferencedConfiguration = confs(i)\n        swComp.Select4 False, Nothing, False\n        assy.FixComponent\n        Set swComps(i) = swComp\n    Next\n\n    CreateComponents = swComps\n    \nEnd Function\n\nFunction NewAssembly() As SldWorks.AssemblyDoc\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Dim assyTemplate As String\n    assyTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplateAssembly)\n    \n    If assyTemplate <> "" Then\n        Set swAssy = swApp.NewDocument(assyTemplate, 0, 0, 0)\n    Else\n        Err.Raise vbObjectError, , "Assembly default template is not specified"\n    End If\n    \n    Set NewAssembly = swAssy\n    \nEnd Function\n\nFunction GetSelectedConfigurations(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim confNames() As String\n    Dim isInit As Boolean\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    Dim i As Integer\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        Dim swConf As SldWorks.Configuration\n        On Error Resume Next\n        \n        Set swConf = swSelMgr.GetSelectedObject6(i, -1)\n        \n        If Not swConf Is Nothing Then\n            If True = isInit Then\n                ReDim Preserve confNames(UBound(confNames) + 1)\n            Else\n                isInit = True\n                ReDim confNames(0)\n            End If\n            \n            confNames(UBound(confNames)) = swConf.Name\n            \n        End If\n        \n    Next\n    \n    GetSelectedConfigurations = confNames\n    \nEnd Function\n')))}u.isMDXComponent=!0},57105:(n,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/motion-study-configuration-animation-79ffc442c3aa1fde01412f5721407119.png"},74159:(n,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/sheet-metal-bending-animation-5b5ca3e550ddd7450c27d3746aea4d70.png"}}]);