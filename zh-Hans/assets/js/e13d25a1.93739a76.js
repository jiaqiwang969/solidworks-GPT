"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[88519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),m=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(a.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,c=A(e,["components","mdxType","originalType","parentName"]),l=m(n),p=r,g=l["".concat(a,".").concat(p)]||l[p]||d[p]||s;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var A={};for(var a in t)hasOwnProperty.call(t,a)&&(A[a]=t[a]);A.originalType=e,A[l]="string"==typeof e?e:r,i[1]=A;for(var m=2;m<s;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>A,toc:()=>m});var o=n(87462),r=(n(67294),n(3905));const s={title:"Macro gets extreme points on body using SOLIDWORKS API",caption:"Get Extreme Points On Body",description:"Example will find the extreme points of the selected body in XYZ directions and create a sketch points",image:"body-extreme-sketch-points.png",labels:["body","bounding box","direction","example","extreme points","solidworks api"],"redirect-from":["/2018/03/get-extreme-points-on-body.html"]},i=void 0,A={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/body-extreme-points/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/body-extreme-points/index",title:"Macro gets extreme points on body using SOLIDWORKS API",description:"Example will find the extreme points of the selected body in XYZ directions and create a sketch points",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/body-extreme-points/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/body-extreme-points",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/body-extreme-points/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/body-extreme-points/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/body-extreme-points/index.md",tags:[],version:"current",frontMatter:{title:"Macro gets extreme points on body using SOLIDWORKS API",caption:"Get Extreme Points On Body",description:"Example will find the extreme points of the selected body in XYZ directions and create a sketch points",image:"body-extreme-sketch-points.png",labels:["body","bounding box","direction","example","extreme points","solidworks api"],"redirect-from":["/2018/03/get-extreme-points-on-body.html"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS macro to find the geometrical difference between parts",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/bodies-diff/"},next:{title:"Create body rotation animation using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/body-rotate-animation/"}},a={},m=[],c={toc:m},l="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(l,(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Extreme points are usually used to find the most remote points in the specified directions. The points can be found using the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibody2~getextremepoint.html"},"IBody2::GetExtremePoint")," SOLIDWORKS API."),(0,r.kt)("p",null,"This function expects direction vector as an input and returns the X, Y, Z coordinate of the extreme point in this direction as out parameters."),(0,r.kt)("p",null,"It is not required to specify the point on the vector when defining the direction.\nThis function is usually used to find the bounding dimension of the body, especially when the body orientation is not aligned with global XYZ coordinate as it is not required to reorient the body to find its best fit bounding box."),(0,r.kt)("p",null,"Unlike bounding box returned via ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibody2~getbodybox.html"},"IBody2::GetBodyBox")," or any other bounding box function extreme points are precise which means that this data can be used for comparison and calculation purposes."),(0,r.kt)("p",null,"Image below demonstrates typical extreme points in multiple directions of the model."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Extreme points of the body in +X,-X,+Y and -Y directions",src:n(27303).Z,width:"829",height:"403"}),"{ width=400 }"),(0,r.kt)("p",null,"The following code example will find the extreme points of the selected body in XYZ directions and create a sketch points."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sketch points created in the extreme directions of the body",src:n(44957).Z,width:"320",height:"218"}),"{ width=320 height=217 }"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swSelMgr = swModel.SelectionManager\n        \n        If swSelMgr.GetSelectedObjectType3(1, -1) = swSelectType_e.swSelSOLIDBODIES Then\n        \n            Dim swBody As SldWorks.Body2\n        \n            Set swBody = swSelMgr.GetSelectedObject6(1, -1)\n        \n            swModel.ClearSelection2 True\n            \n            swModel.SketchManager.Insert3DSketch True\n            swModel.SketchManager.AddToDB = True\n            \n            Dim vDirs(5) As Variant\n            vDirs(0) = Array(1, 0, 0)\n            vDirs(1) = Array(0, 1, 0)\n            vDirs(2) = Array(0, 0, 1)\n            vDirs(3) = Array(-1, 0, 0)\n            vDirs(4) = Array(0, -1, 0)\n            vDirs(5) = Array(0, 0, -1)\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vDirs)\n                \n                Dim x As Double\n                Dim y As Double\n                Dim z As Double\n            \n                swBody.GetExtremePoint vDirs(i)(0), vDirs(i)(1), vDirs(i)(2), x, y, z\n                swModel.SketchManager.CreatePoint x, y, z\n                \n            Next\n                \n            swModel.SketchManager.AddToDB = False\n            swModel.SketchManager.Insert3DSketch True\n        \n        Else\n            \n            MsgBox "Please select solid body"\n            \n        End If\n        \n    Else\n        \n        MsgBox "Please open part or assembly"\n        \n    End If\n    \nEnd Sub\n\n')))}d.isMDXComponent=!0},44957:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADaCAMAAADgxGsJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAAA1HQbG/7+/gCNAGmTdwB2AGFiZrrVukVIUWrDcp6isHN0dgAAWiabLZ6Umba1trjnupRcXE5RXzYvPwHHAYEsYtbm1j9bS/+Xl/+zs2doanh5e5HGoYaHjCW8LVlbZKbCtMbJ2AAAlR0iMpm4mbm8y9H/0TU3P5oAAEJnT36TiQD/AD942M/Pz3V2f0DtRX7giY77joGBg65tbd/f362wv2JcdGllepmcqkuMU1RXZC9VOb4aGhgXbb1eXr+/v11eY5CUo1paomPpZczQ3lFRVgClAMHEzHFzfC4vNgBBlGu2dc7nzsTH1aKio3CHejc6QIWIlaWptnV3f8AAAOvW1hPDFmGBcf/l5basrHZ2nYyQnj15SEvKV2mFdT4tSVtXaygpL3hyhLe3uG5wecfHx36Bj6P/ozM1PlJzYBcXjVdZXhcaJjfCPDAxOOHCwjI0O2lrdHV3gqKkqlJVYaaorT5ASaWcnG5vc9NWVomMmiooMnp9h1ZZZ2Zocd1hYRERvVBSXby/zSktPNbV1gADbt393c2+voP5cFhbaEpMVn1/irT/tJGSkzk7Q+Pj42FfbyssM9jZ2Lm8xcP/w53jnm//byp4MWyHfezs7AIDH6uts6+wsXV5h+Tp5NDP0Njb6ZOUmFKSYkx4Wtzc2xQTnlhsaMPCw7EAAA38DwDfAGFjbdPT03h7hf/Cwt3f3Wtudw7TENpaWc7VzjPdPtfW1pydoaioqIyMq8fJzpOkk25ugUllVrCzvv+qqmNlcH25hMHF03ExMbKysm5xgMvLy8nM24CCjV1garu7u7S3xXSBgk1PWgC4AM7S4aamptHU5iYkb52grKqtu5WYpXWQh8v/y2/Rdbv/u+n/6X7vfpWXnYyNkmD9X2Zpd7m5111gbhfSG6Klsqysrf/MzIf/h4qLjJP+k0J5T6v/q7a6yCPLKQCVAC2oNZLPkqTNpFVnXgrECnDXeswZGYKFkrG0wr7B0Ef3S0yXVFaiZRESrMsAACUmLJubmwAAANHPK5oAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAU7ElEQVR4Xu2dD3wb113AN9QtO5KOQBh/mqzTXFBvI1iDYIO5UZxsTisNbGxrbANvUBN5GMzMnXy+hkwWk5cGdG7UKRmDa5pRbwZ3yF7FICmDFlU4VmSjucY2sJBQUhmyzYy/iwyszYf33r07S4n+3F+d/n2bT6Mk/qN88/783u/93rvX2JrooilQJ02BOmkK1ElToE6aAnXSFKiTpkCdNAXqpClQJ02BOmkK1ElToE6aAnXSFKiTpkCdNAXqpClQJ02BElfwzyppCkTqHvvk1/4O/0olTYFA4Je/8jsHP/ftAv6lOpoCbbZT/3jw5Q/96WcensG/VkVToO3k+Ife8ZH3v///zlNaDDa8QGGx/c2/95nf/cOHf2xZ6H8c/6YKGl3gI88nMz8aevgX0xR16ansafy7KmhsgW3HWnZfp0IU+9l3fvVX3h5ez/bgP1BOQwvsmey+FApNsMH0c//2x2/8nrhj1aV6Km5cgcIXuyf72NAEFUzzxAffd/BfP7tvoGXrGP5TxTSswKG1pzbiIdB70zxPcL1vecsbn6MmMisbaptggwq88FDCMQEHP9j8uMh3fpD46jvfHqSYrsQN/BFKaUiBwtWs4zzWxxM0TSA+GmT3ZbqOqAxlGlFgZ3f3wHWp99KjnOiPCHNB1jW5ojKUaTyBx9a229MTE3jwi0j6AKM8y/Z1tW/iD1RGowmceWi7X+q9BOfGvVeEI4PU9a2kF3+oMhpL4OObk4k+CkV+sPeS2JxEhGDZm8mtTvzRimgkgcLJ9cSJCdB7kb7eQawtB/c+iu1fvakmqdBAAjsziSyK/KA/zh3G0nIZJljqfEJVKNMwAoWz7Y6XWElfZBgru41Img2trW604k9SQIMIfHzzbIs0+BF3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"},27303:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);