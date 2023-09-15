"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[51490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),f=l(n),u=o,m=f["".concat(c,".").concat(u)]||f[u]||p[u]||r;return n?i.createElement(m,s(s({ref:t},d),{},{components:n})):i.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[f]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<r;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const r={title:"Modify the definition of axis feature using SOLIDWORKS API",caption:"Modify Axis Definition",description:"VBA macro example to change the selection of the axis feature using SOLIDWORKS API",image:"axis-definition.png",labels:["axis","definition"]},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/modify-axis-definition/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/modify-axis-definition/index",title:"Modify the definition of axis feature using SOLIDWORKS API",description:"VBA macro example to change the selection of the axis feature using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/modify-axis-definition/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/modify-axis-definition",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/modify-axis-definition/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/modify-axis-definition/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/modify-axis-definition/index.md",tags:[],version:"current",frontMatter:{title:"Modify the definition of axis feature using SOLIDWORKS API",caption:"Modify Axis Definition",description:"VBA macro example to change the selection of the axis feature using SOLIDWORKS API",image:"axis-definition.png",labels:["axis","definition"]},sidebar:"tutorialSidebar",previous:{title:"Identify SOLIDWORKS API feature definition and specific type",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/identify-feature/"},next:{title:"Edit feature in the context of the assembly using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/modify-feature-definition-in-context/"}},c={},l=[],d={toc:l},f="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Axis property manager page",src:n(3014).Z,width:"279",height:"407"}),"{ width=250 }"),(0,o.kt)("p",null,"This VBA example demonstrates how to modify the definition and change the selection for the axis feature using SOLIDWORKS API."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the target axis feature to modify as first selection"),(0,o.kt)("li",{parentName:"ul"},"Select the objects to be set as the reference for the target axis. For example 2 intersecting planes, edge, etc.")),(0,o.kt)("p",null,"As the result the selected objects (second to the last) will be assigned to the axis (first selection)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Dim swSelMgr As SldWorks.SelectionMgr\n\n    Set swModel = swApp.ActiveDoc\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swFeat As SldWorks.Feature\n    Set swFeat = swSelMgr.GetSelectedObject6(1, -1)\n    \n    If Not swFeat Is Nothing Then\n    \n        Dim swAxisFeatDef As SldWorks.RefAxisFeatureData\n        Set swAxisFeatDef = swFeat.GetDefinition\n        \n        Dim i As Integer\n        \n        Dim swRefs() As Object\n        ReDim swRefs(swSelMgr.GetSelectedObjectCount2(-1) - 2)\n        \n        For i = 2 To swSelMgr.GetSelectedObjectCount2(-1)\n            Set swRefs(i - 2) = swSelMgr.GetSelectedObject6(i, -1)\n        Next\n        \n        swAxisFeatDef.AccessSelections swModel, Nothing\n        \n        swAxisFeatDef.SetSelections swRefs\n        \n        swFeat.ModifyDefinition swAxisFeatDef, swModel, Nothing\n        \n    End If\n    \nEnd Sub\n")))}p.isMDXComponent=!0},3014:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAGXCAMAAACuveQ+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAi/CRGaFff39kWFwGvG8HAYFzODqgAzi6PAoymBjr/09mZFRVI/FJB8NBkZRoVFRc/ptIHCanOa3JKSkpCntC4AAJxOQN4lAJ6PX6Pb25bf9trg5SZdfGGiv97GXH5+fgs8V0cxCrG6C2ZFhYVFZgBbsM3j7MXFxYzS7c/k9sSUmYWFwJRbANLBbcK8q7xXNxicZuvFCkVFZgwxRQAAOGZFZsCFRSMjI4VFhUVmo97b1GKAkFOj9/fzvEREhS4AOGebtLGxsffAhdqiZY5tcIXAwMYWGzs7O8WvSyttj5mZmbVtGcnS12NKEW6e4jmbBRISEsrFuc/k1AAAYyozN9XPv9yws4XA99LY3NHRz9fX1qN9H9TU1ImJiXJfHpe+z1qP2EJTW5rH8FZ+jTtFSr6bIKusrFVzqOeAgWZmo5JGGaTAzkYAY/bckauDNve1bRppsblzc0YZGWhoaHvC4KOFo0BnezZujbTEzGaj2/jiXfbKH4+vwKPb9kiLS7yoSIxlILoyJJizmQAzOOC7C3qbqzp+1BZJZWajo1mct8zMzEeCoIKdobXWksKrYFdXV2SUHhKzE+6enxlGkuTk4mdsgioqKn8rLq6UO4RkZD9xQqNmha/R5GWGZYy06nUzABkZbenp6oZwOCpkwLHf8XW82oRtTGq65kFwv66fcoVmhVbDCrq6umJhYYKDg4bC3BkZGcCFZtO6NVMAONvb20xziN9HSSlYcd66HpmHdpR0HMy3aPfHx0xLTG+OnlMAAMDA2y1ylfO7sSmbKdPGi1Kt4t/f3kaS1uc2MQA2VKCHRtTIyYTL5mmtyqTJ2lSFoKLA9dCtHrCKG4KltuFnaHiUeSxkgt3Mex1VeJLW9IO2y6JlZUFgbJywvHJycg5DYL2viaWkonTE99C/v2aFwFg8PeZWVTx1k22191JgZlKlVi98oqachURERHZgYdApLYp9R26y0EIlJreZOlaPq0hvgzIyMrOQk6m8xtaSRiBQaqNmRdG5STFvzgAAAPiANPoAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAYoElEQVR4Xu2dD5xU1XWANw7VmoUU7BJNEUSaxHWomlZbBmLHurvVcVeIG2MExgVjUUKkECOpiGBC066E0UpMxlUbjb6I0diRTNLxT0jBriGTjhXxX1HEQDe1ojETpOIEgfx6zr3nvXlv3nlvZpad2dmZ8/3Yuffde2eY+829973ZOXunKVBDdCVisblddDC81JaXWE8qJV5cxNpS8USMDoaXmvISiHV11YaWGvNSO4gXHvHCI154xAtPUw9lBAfihcfy0irYkPHigXjhES88TXMpIziwedlQJ1B3joym/PvXntIo9f/dQO2LMeTt6P8/MsQLj7eXaCoejxvxeIqOTSrvJZqOx9NROrAobBedOf6Oo48++vj/oWOTCnsBK58843tjfv3ZQjP2/3d8poDxVAE4+5HL5XqWwQ0kBbi9pIxs1ih8OQrbzdm2/fN7/+OxL03deTyVEBX2Ej9j/tMvL1ly+nfH/DpORRr7/5v5cgEZqgAKvARyPblsKxTnYlREuMZBKh7IRox4qmDEONvNnPj570x9441F14bumnrHXCpUDJEXSgF6XCI+5YXVF5z0kzs3vjvFoCKNw8ukAvy9bFAjZhkVEQVeovH4wLJsdtlAPO4U42g3Z/nnnjOeWvTSN0Oh0P9eeoe9ZSW9wJMzpqx84qrV7550ww1+XlxQBVDoRTnBioKZ5GwXjbduigC5XKTVKcbeLrrtoU/dHfg38PJIMhT6jUNMJb3E02e8M2vlypWrbwB8vKh+2rEVFHppg2W8qBfQEols6IlEYpP7+pxi7O1mvnLTp75z6TcXvbRoagjE/PZL/0kVQEW9TJm/ZHXei2MNdHpxDBLD8PFC4wXaUBHhaJeKb4q0GEYkZxjzQjnHim9vt+qa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"}}]);