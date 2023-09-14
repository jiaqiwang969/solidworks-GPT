"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[24386],{3905:(n,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>d});var s=o(67294);function t(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function i(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,s)}return o}function r(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){t(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function m(n,e){if(null==n)return{};var o,s,t=function(n,e){if(null==n)return{};var o,s,t={},i=Object.keys(n);for(s=0;s<i.length;s++)o=i[s],e.indexOf(o)>=0||(t[o]=n[o]);return t}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(s=0;s<i.length;s++)o=i[s],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(t[o]=n[o])}return t}var a=s.createContext({}),l=function(n){var e=s.useContext(a),o=e;return n&&(o="function"==typeof n?n(e):r(r({},e),n)),o},c=function(n){var e=l(n.components);return s.createElement(a.Provider,{value:e},n.children)},A="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return s.createElement(s.Fragment,{},e)}},u=s.forwardRef((function(n,e){var o=n.components,t=n.mdxType,i=n.originalType,a=n.parentName,c=m(n,["components","mdxType","originalType","parentName"]),A=l(o),u=t,d=A["".concat(a,".").concat(u)]||A[u]||p[u]||i;return o?s.createElement(d,r(r({ref:e},c),{},{components:o})):s.createElement(d,r({ref:e},c))}));function d(n,e){var o=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var i=o.length,r=new Array(i);r[0]=u;var m={};for(var a in e)hasOwnProperty.call(e,a)&&(m[a]=e[a]);m.originalType=n,m[A]="string"==typeof n?n:t,r[1]=m;for(var l=2;l<i;l++)r[l]=o[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,o)}u.displayName="MDXCreateElement"},31472:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var s=o(87462),t=(o(67294),o(3905));const i={layout:"sw-tool",title:"Macro for components configurations permutation using SOLIDWORKS API",caption:"Components Configurations Permutation",description:"Macro performs a permutation for each components in the root level of the assembly using SOLIDWORKS API and saves the results as individual files",image:"component-configurations.png",labels:["permutation","component","generation","configuration"],group:"Assembly"},r=void 0,m={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/permutation/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/permutation/index",title:"Macro for components configurations permutation using SOLIDWORKS API",description:"Macro performs a permutation for each components in the root level of the assembly using SOLIDWORKS API and saves the results as individual files",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/permutation/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/permutation",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/permutation/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/permutation/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/permutation/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro for components configurations permutation using SOLIDWORKS API",caption:"Components Configurations Permutation",description:"Macro performs a permutation for each components in the root level of the assembly using SOLIDWORKS API and saves the results as individual files",image:"component-configurations.png",labels:["permutation","component","generation","configuration"],group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS macro to change configuration specific properties for component in pattern",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/pattern-seed-configuration-properties/"},next:{title:"Purge components configurations (remove all unused configurations) from SOLIDWORKS assembly",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/purge-configurations/"}},a={},l=[{value:"Options",id:"options",level:2},{value:"Notes",id:"notes",level:2}],c={toc:l},A="wrapper";function p(n){let{components:e,...i}=n;return(0,t.kt)(A,(0,s.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This macro generates the assemblies for each combination of top level components configurations (permutation) using SOLIDWORKS API."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Component configurations",src:o(38522).Z,width:"740",height:"406"}),"{ width=450 }"),(0,t.kt)("p",null,"Resulting combinations are saved to the external assemblies (one file per combination)."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Generated assemblies for each combination of components configurations",src:o(93332).Z,width:"786",height:"219"}),"{ width=350 }"),(0,t.kt)("h2",{id:"options"},"Options"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"OUT_FOLDER")," - Full path to output folder where the resulting files need to be saved")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Const OUT_FOLDER As String = "OUTPUT FOLDER PATH"\n')),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"PERMUTE_ASSEMBLY_CONF")," option allows to specify if the configurations of assembly need to be used in permutation or only components")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},"Const PERMUTE_ASSEMBLY_CONF As Boolean = True 'True to include assembly configurations, false to only include components\n")),(0,t.kt)("h2",{id:"notes"},"Notes"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Original states of the components will not be restored as the result of running the macro. It is recommended to open the assembly as read only"),(0,t.kt)("li",{parentName:"ul"},"Total number of files equals to {number of configuration of component 1}x{number of configuration of component 2}x...x{number of configuration of component n}")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Const PERMUTE_ASSEMBLY_CONF As Boolean = True\nConst OUT_FOLDER As String = "OUTPUT FOLDER PATH"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n       \n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    Set swAssy = GetActiveAssembly(swApp)\n    \n    If Not swAssy Is Nothing Then\n        \n        If swAssy.ResolveAllLightWeightComponents(True) = swComponentResolveStatus_e.swResolveOk Then\n        \n            PermuteAssembly swAssy, PERMUTE_ASSEMBLY_CONF\n            \n        Else\n            MsgBox "Components must be resolved"\n        End If\n        \n    Else\n        MsgBox "Please open assembly"\n    End If\n    \nEnd Sub\n\nSub PermuteAssembly(assy As SldWorks.AssemblyDoc, permuteAssemblyConfs As Boolean)\n    \n    Dim vComps As Variant\n    \n    If permuteAssemblyConfs Then\n        \n        Dim vAssyConfs As Variant\n        vAssyConfs = assy.GetConfigurationNames()\n        Dim i As Integer\n        \n        For i = 0 To UBound(vAssyConfs)\n            assy.ShowConfiguration CStr(vAssyConfs(i))\n            vComps = assy.GetComponents(True)\n            PermuteComponents assy, vComps\n        Next\n        \n    Else\n        vComps = swAssy.GetComponents(True)\n        PermuteComponents assy, vComps\n    End If\n    \nEnd Sub\n\nSub PermuteComponents(assy As SldWorks.AssemblyDoc, vComps As Variant)\n    \n    If Not IsEmpty(vComps) And UBound(vComps) > -1 Then\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(0)\n        \n        If Not swComp.IsSuppressed() Then\n            \n            Dim vNextComps() As SldWorks.Component2\n            \n            If UBound(vComps) > 0 Then\n                ReDim vNextComps(UBound(vComps) - 1)\n                Dim k As Integer\n                For k = 1 To UBound(vComps)\n                    Set vNextComps(k - 1) = vComps(k)\n                Next\n            End If\n        \n            Dim swCompModel As SldWorks.ModelDoc2\n            Set swCompModel = swComp.GetModelDoc2\n            Dim vConfNames As Variant\n            vConfNames = swCompModel.GetConfigurationNames\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vConfNames)\n                \n                swComp.ReferencedConfiguration = CStr(vConfNames(i))\n                PermuteComponents assy, vNextComps\n                \n            Next\n            \n        End If\n    Else\n        assy.EditRebuild\n        ExportCurrentAssemblySnapshot assy, OUT_FOLDER\n    End If\n    \nEnd Sub\n\nFunction ExportCurrentAssemblySnapshot(assy As SldWorks.AssemblyDoc, outFolder As String) As Boolean\n    \n    Dim fso As Object\n    Set fso = CreateObject("Scripting.FileSystemObject")\n\n    Dim filePath As String\n    Dim index As Integer\n    index = 1\n    Const EXT As String = ".sldasm"\n    \n    Do\n        filePath = TrimEnd(outFolder, "\\") & "\\" & TrimEnd(assy.GetTitle(), EXT) & index & EXT\n        index = index + 1\n    Loop While fso.FileExists(filePath)\n    \n    Dim swAssyModel As SldWorks.ModelDoc2\n    Set swAssyModel = assy\n    \n    ExportCurrentAssemblySnapshot = swAssyModel.Extension.SaveAs(filePath, swSaveAsVersion_e.swSaveAsCurrentVersion, swSaveAsOptions_e.swSaveAsOptions_Silent + swSaveAsOptions_e.swSaveAsOptions_Copy, Nothing, 0, 0)\n    \nEnd Function\n\nFunction GetActiveAssembly(app As SldWorks.SldWorks) As SldWorks.AssemblyDoc\n    \n    On Error Resume Next\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    Set swAssy = app.ActiveDoc\n    \n    Set GetActiveAssembly = swAssy\n    \nEnd Function\n\nFunction TrimEnd(inputText As String, text As String) As String\n    \n    Dim textLen As Integer\n    textLen = Len(text)\n    \n    If LCase(Right(inputText, textLen)) = LCase(text) Then\n        inputText = Left(inputText, Len(inputText) - textLen)\n    End If\n    \n    TrimEnd = inputText\n    \nEnd Function\n')))}p.isMDXComponent=!0},38522:(n,e,o)=>{o.d(e,{Z:()=>s});const s=o.p+"assets/images/component-configurations-092de82e856079c0afa1970c93d4dc1b.png"},93332:(n,e,o)=>{o.d(e,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxIAAADbCAMAAADOFVcYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAF32XWVlAABls/zPn9/q99iOOfz82PH1+fz8/GWzswAAZY7Ys0BidGUAAGVls7jPuNizZZ+fn4dtbfzkuLfk+2Wz/ExgqAA5jriHbY45ADkAAG2HuGerZ7bK4odth8+4h8WXeuX8z8Hj9G1tbTmO2Ie45TkAZYv9i4dtn32izp+fzzkAOQAAOZ9th21gemUAOZ/P5Z9tbTxecrP8/OHr9/zYjvz8s7NlAIeHh7iHnzmOs3P+c8+fbbifuKnj/Dk5ZZ+HbbOOOUyX0oeHuMWxkeT85W2x5/z85dj8/Dk5ObXytZDjkFabwOHLqPyzjsWxvYahz8/85a3E4GU5jri4n46zjoeHbYbI62aJmp9tn2rdariHh45ljp/P/Nj82PyzZW1th6l9euT8/Ex9vZf/l445Zc/8/IHzgeW4h6mXvamxkUxgkW1tn4xgem2fz9iOZfzPuI7Y/M+fn83a6sT/xGe6Z21gkW2x0vz8z8X8/J+fbevx+G6mw+GxkanLvfzLqOGxqJzvnJ+vw3r8ep7/nmzCbIexxZ7T722X0ozL/LNlZWD/YG19kYxgkW1gqPb4+s+4uOTt90xgeo6OZY2t1G2xvWH2Ya3Z8Y7M7Ie4z22Hn7jM5LHG4ej/6AAAAJlmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///w9T428AAACgdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wCJAz2QAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAYU0lEQVR4Xu2ci58dx1GFBRaSNwbx0MqxZONEIBQntnGQjSSDlgQM0SYQwJh3wPiJEWAZZARsMI4hEIKBYBABAwl/K3VOVfV0z5272rv3obl7z/ez7sx01cz0TNeZ7pl117E/E0JUHPuqEKLi2JZYGN8Vy3ExzlrNyCouIs6xPpJ4OpYjRpJYGpLEJE9/8XtibbxIEktDkpjg6S/+5td/K9ZHiySxNCSJPk//9X9//cMzX42tsSJJLA1JosfT/3Dmww9/2IjtkSJJLA1JYj2RJJaGJLGeSBJLQ5JYTySJpSFJrCc/HstxMc5azcgqLiLOIUksEEliadxDSZz/489g8e5z3BIzUdrt3TvgemzNDO7++Y9+Gcf56Je5UjNr22StzrNSd9azZTtJ4DLy/iyWaZK489qrtpAkDkMnCdy+vZt1q73H+3ow8u5v/wWfTz0OKwnj/No2a17E7iu4hF8++L2cgWmS+M+beLhJEoehlUQ0X3AoSfzr0JNwoyUx/JRYDNMkcf099th277afusMu4/xfvnLnzvu2xYeejQl8bCUm6EliC7cy7mJ099Xdm7itPqQxx9d+ztbOX48yW+n2S+ss9CXBn3dfe/X8dTuqjwnG36Z5EXs33/cVuy3v2f3p39V5mCoJ3jK06d98xp9zeL141+4dN+xWsqXFAH1J4JGWd5G9RH332ttqhX6z4cGxsimBvQRWcr9inYW+JFCT3VfeN3ld93OuQ5t2tzZe0fik8Lovqv7TJYGGzM4Ztw/3keK0jb1vmBpxP8UAfUnwbhm4i/jX3L2J2woF+ApMtSRyv846C31J4Cg4MjessfPo9Bgr3UVYvwo1uCQQqwur/3RJQHVsU3TckIQV8bTWdt5X3ZEkBulLggPfuIuURX33mtvKZ5xt+dsDdoc5JZH7ddZZ6EsCR8wz4Jxr0abVRXS9qAnBfhdW/30ksXfzut2yvZvRkCxq2k4M8++xzKi1G1buIv/Vd2/ytiI8uTIhidivs85CqZUdi7u+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"}}]);