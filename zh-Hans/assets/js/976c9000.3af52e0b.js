"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[90590],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},A=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(o),A=n,m=g["".concat(c,".").concat(A)]||g[A]||d[A]||a;return o?r.createElement(m,i(i({ref:t},u),{},{components:o})):r.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=A;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[g]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}A.displayName="MDXCreateElement"},93527:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const a={layout:"sw-tool",title:"Macro to update XYZ curve from the linked file using SOLIDWORKS API",caption:"Update XYZ Curve From File",description:"VBA macro which updates coordinates of the free form (through XYZ points) curve from the linked external text file",image:"curve.svg",labels:["curve","linked","xyz","free form curve"],group:"Model"},i=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-curve/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-curve/index",title:"Macro to update XYZ curve from the linked file using SOLIDWORKS API",description:"VBA macro which updates coordinates of the free form (through XYZ points) curve from the linked external text file",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-curve/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-curve",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-curve/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-curve/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-curve/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to update XYZ curve from the linked file using SOLIDWORKS API",caption:"Update XYZ Curve From File",description:"VBA macro which updates coordinates of the free form (through XYZ points) curve from the linked external text file",image:"curve.svg",labels:["curve","linked","xyz","free form curve"],group:"Model"},sidebar:"tutorialSidebar",previous:{title:"Untrim face or surface with temporary geometry using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/untrim-surface/"},next:{title:"Upgrade legacy custom properties to a new architecture",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-legacy/"}},c={},l=[],u={toc:l},g="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Free form curve in SOLIDWORKS feature manager tree",src:o(31770).Z,width:"562",height:"491"}),"{ width=450 }"),(0,n.kt)("p",null,"SOLIDWORKS allows to insert the free form curve through XYZ coordinates from the external text file. This file however is not linked to the feature itself and the curve is not updated when external file changes."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Curve points loaded from file",src:o(64527).Z,width:"416",height:"307"}),"{ width=300 }"),(0,n.kt)("p",null,"This VBA macro allow to automatically link the external file with coordinates and update the selected curve with single click."),(0,n.kt)("p",null,"Example of curve file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"0mm 0mm 0mm\n10mm 10mm 10mm\n5mm 1mm 25mm\n")),(0,n.kt)("p",null,"Curve text file must be saved in the same folder where the SOLIDWORKS file is saved and must be named as ","[Model Title]","_","[Feature Name]",".sldcrv. For example if curve feature is named ",(0,n.kt)("em",{parentName:"p"},"Curve1")," and resides in the SOLIDWORKS file named Part1.sldprt, the curve text file must be named ",(0,n.kt)("em",{parentName:"p"},"Part1_Curve1.sldcrv"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swFeat Is Nothing Then\n            \n            Dim swCurveFeatDef As SldWorks.FreePointCurveFeatureData\n            Set swCurveFeatDef = swFeat.GetDefinition\n            \n            If Not swCurveFeatDef Is Nothing Then\n                \n                Dim filePath As String\n                filePath = swModel.GetPathName\n                filePath = Left(filePath, InStrRev(filePath, ".") - 1)\n                filePath = filePath & "_" & swFeat.Name & ".sldcrv"\n                \n                If False = swCurveFeatDef.LoadPointsFromFile(filePath) Then\n                    MsgBox "Failed to update curve"\n                End If\n                \n                swFeat.ModifyDefinition swCurveFeatDef, swModel, Nothing\n                \n            Else\n                MsgBox "Selected feature is not XYZ points curve"\n            End If\n        Else\n            MsgBox "Please select Curve XYZ feature"\n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n')))}d.isMDXComponent=!0},64527:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaAAAAEzCAMAAABAGieGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAADqQkO/v7wA6OtuQOnudfba22wA6kDQAALH4+ZA6ANDQ0ISo7FgAAAAAM5vam5pVTLDIoT17rRxUWyjP5Huc2lcAMTMzM7uam8nX2/7+/pA6OqCmvCYAWbnR6QAreznD6pycvIeHhwBOnnfA3GGp4HVLANrau1gAWOqoXmJQf5FuMl8sAMXZ7aaIWKW/2iVsvCYAMrLL5SYrWI2+2evJhNe6e5BmAAAAV1kyMjo6kDuSwc7T1n89NNra29r+/jWFzM10Y33d80LM8QBgq6mnfazF37dCK9TU1OWhlFyTvFl9fUMUIuzFv9re4F8ANZXH4UJCQqK82MNeStqcV3oxADo6Zpm10alfADJaoF41XlONuYKog7zb271+c1rO7N+UhpPEwP+3Y2a2/75SPf/bkIeHNhgYGJBmkKC61q3E1/37uFeb2szZ3uS0q21tbcLQ1Z24082GNah4c9J+bkJMADIyfZuftUGG2HBwcHq+n9majrdgTzx/sajC3aTJ46c/KzF7vGUAZXwxMVNWZtPY208nNoPJ7AA2NtvbkGUAANDd4ZVrZ5g3JHu8vLpJM0QAMTEAWjF6erZmAN2jmAAAZD3N8pDb/jqQ23S82Lx7MQAtf6W/nKjBnZzc3GA2h5xYMUTW+4+Pj7DIwj3Q9I/A3AAAAOGYi4U1AL6Jg16l22nY82a2tuvrqHq62jQANEQAAFdXnNbbngBeqNDi8IVKQnxPAABmtny+3dranFgAMn1ZfbBdTBtDSlecnF09TV6o6+CroGYAOpC2kI1rMQAAOofO8KfBvZxXAKO9uuOdj6NOP8JmVToAZrKAfJC2/yZvwXsxWPDOh8uGg0KInM6HYJxFNToAADZgYABXnLm5ud3l7zoAOtfcv4dgAKdYSUWN4ErR8jU1hQAxe3vF4KuMWY5HPfCrYOi9tdHW2eemmQAAWjIyWdy9fcXT13lNAO/Jwo5BN1jU8mCr8OmpnGGNfq3GwDYAYK3Gn2rd+qfp68hpV7xaSAA1hkOK3AAAAGXISH4AAAEAdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAu4c6IAAAACXBIWXMAAA7DAAAOwwHHb6hkAAATn0lEQVR4Xu2dC5xcV1nAr2Mwm2K2PiApK32Qlm6CaVOjqZHam2hoRJwmUDe6JV2oWyOWWWgTFRrjRpZuUgk+CkvSuMhKl/IzVDcNGppseBXFEqw8TLUaVqWShqBLaBUtpRJ/ft93vjtzZ/bcx5x7ZvZL+v1/mbnnnte9e/5z7r2ZO/NN0KWIRgUJRwUJxwhaqAjjDW8gMUbQwtd8aZ1ZU8Qw9XGjCAQtHJ/6RUUcq54lQyDoNepHJAd/0Aha+CXOUIQxD6cQCFrH64owIkFdvK4I49mFLGizIpJ7VJBsqoJuVUSigoSjgtrMiz9ZzuaTL+baKqjt7Lygks0FO7m2Cmo75cp/Z1Mpc20V1HbKlf/IRgXNHuWnfjabpyyCblDaQvmpv6nxoeHh4c/HlhFPlbn2DTckCPp0EAQr/5BXkrkcqgV33HA5VL38Ks5TUilf/yc1hmHwh3/t5g/R8lHOBK7PEPTZpSjnyjt4NZmYFRWUj/L1N9dAMWDILF7HmUCdoNJMQZ+++Mc4lYEKapo6QZ83aujpd+2CfjoStKzGHx24gxN3379s2XUXXvbZpX9/YOVvXAo5oG4ZHP46IR+5/KrqgpKxIsVOnaCbzeRp9AOCuPayZTZBV668zCQiQZ9Z+qP3L7vy4g8u+8zS/wNHH6zWaBAUL1LslLf9TJz/NIaGr/09ziC2WQRtr3Hl9GUm8b6779++nQRdZVYgTXkgiio8CdcIUPlJKIZHXZFip0HQY8MlZPjat3EGsa3Mtbdvtwk6OVMQDjoo+OFLt5/EC7cgYEFghhfwqCtS7JS3/UGMR4anDMNf5RzCJmhtjet+5KUm8b67IXHdhU88vfRxWDt58S/B8uT0E6YQefKL1QU86ooUO3WCHhle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"},31770:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/feature-manager-xyz-curve-f11898f2362108e42662f53c97ba364e.png"}}]);