"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[84832],{3905:(n,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>g});var s=o(67294);function t(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function i(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,s)}return o}function A(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){t(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function m(n,e){if(null==n)return{};var o,s,t=function(n,e){if(null==n)return{};var o,s,t={},i=Object.keys(n);for(s=0;s<i.length;s++)o=i[s],e.indexOf(o)>=0||(t[o]=n[o]);return t}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(s=0;s<i.length;s++)o=i[s],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(t[o]=n[o])}return t}var r=s.createContext({}),l=function(n){var e=s.useContext(r),o=e;return n&&(o="function"==typeof n?n(e):A(A({},e),n)),o},p=function(n){var e=l(n.components);return s.createElement(r.Provider,{value:e},n.children)},a="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return s.createElement(s.Fragment,{},e)}},d=s.forwardRef((function(n,e){var o=n.components,t=n.mdxType,i=n.originalType,r=n.parentName,p=m(n,["components","mdxType","originalType","parentName"]),a=l(o),d=t,g=a["".concat(r,".").concat(d)]||a[d]||c[d]||i;return o?s.createElement(g,A(A({ref:e},p),{},{components:o})):s.createElement(g,A({ref:e},p))}));function g(n,e){var o=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var i=o.length,A=new Array(i);A[0]=d;var m={};for(var r in e)hasOwnProperty.call(e,r)&&(m[r]=e[r]);m.originalType=n,m[a]="string"==typeof n?n:t,A[1]=m;for(var l=2;l<i;l++)A[l]=o[l];return s.createElement.apply(null,A)}return s.createElement.apply(null,o)}d.displayName="MDXCreateElement"},82483:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>A,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var s=o(87462),t=(o(67294),o(3905));const i={layout:"sw-tool",title:"Set multiple assembly components solving (rigid or flexible) using SOLIDWORKS API",caption:"Set Components Solving (Rigid or Flexible)",description:"VBA macro to batch set the rigid or flexible option for selected components in the assembly using SOLIDWORKS API",image:"batch-set-solving.png",labels:["batch","solving","rigid","flexible"],group:"Assembly"},A=void 0,m={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-solving/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-solving/index",title:"Set multiple assembly components solving (rigid or flexible) using SOLIDWORKS API",description:"VBA macro to batch set the rigid or flexible option for selected components in the assembly using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-solving/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-solving",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-solving/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-solving/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-solving/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Set multiple assembly components solving (rigid or flexible) using SOLIDWORKS API",caption:"Set Components Solving (Rigid or Flexible)",description:"VBA macro to batch set the rigid or flexible option for selected components in the assembly using SOLIDWORKS API",image:"batch-set-solving.png",labels:["batch","solving","rigid","flexible"],group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"macro to automatically assign the SOLIDWORKS component references in a sequential order",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-sequential-component-reference/"},next:{title:"SOLIDWORKS Macro shows selected assembly component in the Window folder",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/show-selected-assembly-component-window-folder/"}},r={},l=[],p={toc:l},a="wrapper";function c(n){let{components:e,...i}=n;return(0,t.kt)(a,(0,s.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Setting the solving for multiple assembly components",src:o(948).Z,width:"100",height:"100"})),(0,t.kt)("p",null,"User can change the solving options (rigid or flexible) for assembly components using components options page or toolbar command. This is however only limited for one component at a time."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Solving options for the components page",src:o(96404).Z,width:"595",height:"413"})),(0,t.kt)("p",null,"This VBA macro allows to set either rigid or solved options for all selected components as one command using SOLIDWORKS API."),(0,t.kt)("p",null,"Specify the option as follows:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},"Const SET_FLEXIBLE As Boolean = True 'True - set to flexible, False - set to Rigid\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Const SET_FLEXIBLE As Boolean = True\n\nDim swApp As SldWorks.SldWorks\nDim swAssy As SldWorks.AssemblyDoc\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n    \n        Dim vComps As Variant\n        vComps = GetSelectedAssemblyComponents\n        \n        If Not IsEmpty(vComps) Then\n            \n            Dim solveOpts As swComponentSolvingOption_e\n            \n            If SET_FLEXIBLE Then\n                solveOpts = swComponentFlexibleSolving\n            Else\n                solveOpts = swComponentRigidSolving\n            End If\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vComps)\n                \n                Dim swComp As SldWorks.Component2\n                Set swComp = vComps(i)\n                \n                SetSolvingFlag swComp, solveOpts\n                \n            Next\n            \n        Else\n            MsgBox "Please select assembly components"\n        End If\n    \n    Else\n        MsgBox "Please open assembly"\n    End If\n    \n    \n    \nEnd Sub\n\nFunction GetSelectedAssemblyComponents() As Variant\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = swAssy.SelectionManager\n    \n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swComps() As SldWorks.Component2\n    \n    Dim i As Integer\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = swSelMgr.GetSelectedObjectsComponent2(i)\n        \n        Const ASM_EXT As String = ".sldasm"\n        \n        Dim ext As String\n        ext = Right(swComp.GetPathName(), Len(ASM_EXT))\n        \n        If LCase(ext) = LCase(ASM_EXT) Then\n            \n            If isInit Then\n                ReDim Preserve swComps(UBound(swComps) + 1)\n            Else\n                ReDim swComps(0)\n                isInit = True\n            End If\n            \n            Set swComps(UBound(swComps)) = swComp\n            \n        End If\n        \n    Next\n    \n    If isInit Then\n        GetSelectedAssemblyComponents = swComps\n    Else\n        GetSelectedAssemblyComponents = Empty\n    End If\n    \nEnd Function\n\nSub SetSolvingFlag(comp As SldWorks.Component2, solveOpts As swComponentSolvingOption_e)\n    \n    comp.Select4 False, Nothing, False\n    \n    Dim suppOpts As Long\n    Dim isVisible As Boolean\n    Dim exlFromBom As Boolean\n    Dim isEnv As Boolean\n    Dim useNamedConf As Boolean\n    Dim refConfName As String\n    \n    suppOpts = comp.GetSuppression()\n    isVisible = comp.Visible\n    exlFromBom = comp.ExcludeFromBOM\n    isEnv = comp.IsEnvelope\n    useNamedConf = False\n    refConfName = ""\n    \n    swAssy.CompConfigProperties5 suppOpts, solveOpts, isVisible, useNamedConf, refConfName, exlFromBom, isEnv\n    \nEnd Sub\n')))}c.isMDXComponent=!0},948:(n,e,o)=>{o.d(e,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURUcxCo/G3a2EIGebtwU3VdvLenJRGOHd2JmMdOq+IPjcSypdeff391I9E720pc+kIJ93INK7afbmjb7L0nyyzTxwi7aYTIdhH5qDQv7+/l19kKB+NvfLIFhFIejVfv3vlJJrIrmoYFQ7Dujl4g5BXpjP5qiHPZp4GEhsgu/ehl5JG/DFIItkIFg+EGqguQAAAAAzZgAzmQAzzAAz/wBmAABmMwBmZgBmmQBmzABm/wCZAACZMwCZZgCZmQCZzACZ/wDMAADMMwDMZgDMmQDMzADM/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNmZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///zpqiIwAAAAwdFJOU///////////////////////////////////////////////////////////////AGKl0HgAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH0SURBVGhD7ZjrTsJAEIVRUbxUQcBLlQqKeCv6/o9nu0xhl846c1ZqkOz3q2ln8uWEtqGnlf4BUQIRJRBRAvGzJEkH7RV0EkdIMngezhZ8NSahCIYrhcSTXJAMKw7aM00SPrlWMlRJKILBSr5hCQ2vJW9K4szvrqRlkU2bkswvxxW3mb20t0FJ17bYS2d3NOJAoQ3e5DXJyLbYS29JQjM2quR1SWFZQs+VgXXokjOS0fx0xfr1dVTJfy9RJN+ARJ7fYUnOLbE3lgGR0ONU0MvdpZKs49VAkslL39yE7/e93F6alycfzy98FlXySnLSmzwYS/96UpOMDz+O3T0T0KBJXklG+T7d6wW0UEJnbj6fFoMElnwpcVPXoUECSx4qgZIHS5D5KAmRZK/NS5JpYWk8SWlBJFjy5fE0O6LLPI4ETL467pjXjh8aW4Ald3cBkOTBEiR5uAQgSiC2TxJaUGBJAgsKSEIRDJqCogKT0GeBuqAgAiW679SKKPl3EnptG/CCokKSaD7TRSQJWFDwSBKwoOARJVhBwSNLnL8+wriHKIHYCglYUPDwEnqRFIAFBY9HElpQ8HgkYEEh4JGABYWAT+L+3nX4PQ9REiUWaEEhwA7DBYUAP4wWFAK+YaigkPAOQwWFADQcSpRARAlElEBECUCafgOl5WlcKmrz3AAAAABJRU5ErkJggg=="},96404:(n,e,o)=>{o.d(e,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlMAAAGdCAMAAAABlQaDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAIerh4c2AP7+/oc2YPDw7wA2hzYAAO0cJEW714dghwBgqzYANs6HNpvd7QAANjZgqzYAYIdgAKWmpm2bx4er8BN8siE6Tm1tm5ttbTY2h7W5vQAAYIc2NmAAAI6Pj5mamoeHYKvwqwA2NjaHh2Crq6vw8GlpaZtthMrFwGA2YBGSzTdUamAANmAAYIRtm1lvgqurzu2pYKvOh5Odp3BydqtgNrGEhK2ytYfN8ISxsQw9WwVJc5vHx2A2ADaHzpttmwx3r8Lm+mA2NoSEsbKzszY2YG2Ese3LhtTg5aGiomCr8G1thDY2Nrm9wnqKl6tgACWg0avwzrGEbWBgqzY2ALHb2z5qhIRtbYKHkBQrPIfOzrG2umCHh7HHsWp+jR4/WM/R1CuNtoSbx4Sx24RthGCrzs6Hh0NabQotRZubx66zuLq7u63Z8JuxsbfAx+/vq7GEm3eLmXZ4fJGSkofOqwVPfB6ZzZuEhA0lNylGXC2k0dDa4GeAk4SEhL7CxaSssqbg75eirG+CkQ9Oc2B1hiJBWhqa0bHb8ERecjtYbw18tBYuQQgmO4+QkMXo9yQ9UAlRfHl6fnCDkh9BWg15rzhVbFtwgpCeqQAAAJkzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///74nYdQAAACadFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wDLsIVjAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAeDElEQVR4Xu2di4MbR33HFR1jlxgRwEBKbN8ZSnIYMAVBwSmPA1obKddelNIWSq/AQVpIHcoVXCgk9EIAp4GER8Prz+3vNbuzeqxmpZE0e/p+fNqd1+7Jms/N7mr3t9txwx13Xrjlsvy/7NAbO//sDC3hzpVTx2duJ0Pc2bG9wfPMOXXKHd/Kkm1Q6tw6BTYHnAKpgVMgNXAKpAZOgdTAKZAaOAVSA6dAakKnyjQAi1OOTR0WDIClKTd35FSW58hA21CfGHYKgJTAKZAaOAVSA6dAauAUSA2cAqmJcKrfuXC6e2iZWcxvMQYvELXmWSy+JFgtVae6nc7Vxyxd0J3r083HLdWQuWuexcK/EayB0KnT3QPnBm+znGd+/y3aw4ubAadyJnRqREppotO5MKSOe+Bi5/B0t9O5JH1Ipe+++Tgn6cWVF4b9TqdzOLgYtCiW0zVRg6uPSYGMf93OQywDtTs4vflf4ZrlV/uGuvJwdeXSkiV0SV2h/BZeAcgBdkpO11CPfsD6pcf9eYmGLZKGjRCJpLT3UOEUVTr34NCNtSiX4zXpKqWtVQ4e0eSHeB3Bch+S5tZQVx6sLlhasn5JK7I3Lv8PsCGkCwRyaminawZv1q7hzmIbrOOC2XjWWodF5XJW6ac0kfk1W9TyvliQlC/Ria6uKLSleTJWRMj/A2yIUqrg+in/5y5z67FgNllKQwlthMqhq9pC17VLW0HNUN/Txo6by+8pG/rfK2U09d4EqwuXljpbUov0t4DNMv2aPDsM016LGaf6uhkKi8rlZF3FIr5CS8pymymS8g2rmerSPKGXFflSsEmmO9Xnv3Y67hvZjkzZcfyiEjeiQaF74HerxKlyF2tsOVspmXq6y4vai+BZuD8lea7wDXVpv7rq0lIXLqks/LUESMR0pxwfwVFHFgdc0nG+//jLq0dpTgdZdvgnRZSmTWD1uK9wijdOB5R5p66XszynxQ6pRdGQ89LcGtrSfnWVpbXOfqMVyW8Bm2WGU3Pxu/HNMEXmM7Vh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"}}]);