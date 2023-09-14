"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[59601],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>O});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function A(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var a=n.createContext({}),g=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=g(e.components);return n.createElement(a.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,u=A(e,["components","mdxType","originalType","parentName"]),l=g(o),p=i,O=l["".concat(a,".").concat(p)]||l[p]||c[p]||r;return o?n.createElement(O,s(s({ref:t},u),{},{components:o})):n.createElement(O,s({ref:t},u))}));function O(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,s=new Array(r);s[0]=p;var A={};for(var a in t)hasOwnProperty.call(t,a)&&(A[a]=t[a]);A.originalType=e,A[l]="string"==typeof e?e:i,s[1]=A;for(var g=2;g<r;g++)s[g]=o[g];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},43165:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>A,toc:()=>g});var n=o(87462),i=(o(67294),o(3905));const r={title:"Set BOM Quantity (Unit Of Measure) property using SOLIDWORKS API",caption:"Set BOM Quantity (Unit Of Measure) Property In The Model",description:"Example demonstrates how to modify the BOM quantity field in the properties dialog",image:"bom-quantity-property.png",labels:["bom quantity","example","qty","unit of measure"],"redirect-from":["/2018/03/set-bom-quantity-unit-of-measure.html"]},s=void 0,A={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-bom-quantity-unit-of-measure-property/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-bom-quantity-unit-of-measure-property/index",title:"Set BOM Quantity (Unit Of Measure) property using SOLIDWORKS API",description:"Example demonstrates how to modify the BOM quantity field in the properties dialog",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-bom-quantity-unit-of-measure-property/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-bom-quantity-unit-of-measure-property",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-bom-quantity-unit-of-measure-property/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-bom-quantity-unit-of-measure-property/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-bom-quantity-unit-of-measure-property/index.md",tags:[],version:"current",frontMatter:{title:"Set BOM Quantity (Unit Of Measure) property using SOLIDWORKS API",caption:"Set BOM Quantity (Unit Of Measure) Property In The Model",description:"Example demonstrates how to modify the BOM quantity field in the properties dialog",image:"bom-quantity-property.png",labels:["bom quantity","example","qty","unit of measure"],"redirect-from":["/2018/03/set-bom-quantity-unit-of-measure.html"]},sidebar:"tutorialSidebar",previous:{title:"Fixing the inconsistent selections in the SOLIDWORKS macro",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection-inconsistency/"},next:{title:"Automatically assign new file name for SOLIDWORKS files",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-new-file-name/"}},a={},g=[],u={toc:g},l="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example demonstrates how to modify the BOM quantity field in the properties dialog using SOLIDWORKS API."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Option to specify the property linked to Unit Of Measure",src:o(18521).Z,width:"640",height:"170"}),"{ width=640 height=170 }"),(0,i.kt)("p",null,"This option allows overwriting the quantity value of the component in the BOM table"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bill Of Materials table displaying the altered quantity of the components",src:o(92569).Z,width:"640",height:"343"}),"{ width=640 }"),(0,i.kt)("p",null,"In order to change this property it is required to set the hidden ",(0,i.kt)("em",{parentName:"p"},"UNIT_OF_MEASURE")," custom property via ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icustompropertymanager.html"},"ICustomPropertyManager")," SOLIDWORKS API interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nConst BOM_QTY_PRP_NAME As String = "UNIT_OF_MEASURE"\nConst QTY_PRP_NAME As String = "Qty"\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n        \n        Set swCustPrpMgr = swModel.Extension.CustomPropertyManager("")\n            \n        Dim bomQtyPrp As String\n        swCustPrpMgr.Get3 BOM_QTY_PRP_NAME, False, "", bomQtyPrp\n        \n        Debug.Print bomQtyPrp\n        \n        swCustPrpMgr.Add2 BOM_QTY_PRP_NAME, swCustomInfoType_e.swCustomInfoText, QTY_PRP_NAME\n        swCustPrpMgr.Set2 BOM_QTY_PRP_NAME, QTY_PRP_NAME\n    \n    Else\n        \n        MsgBox "Please open model"\n        \n    End If\n    \nEnd Sub\n')))}c.isMDXComponent=!0},18521:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAACqCAMAAAAKuw5oAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAOTZlwCRsamRU7wECnKVw/7+/gNPd5zN3O3gr8acQ2dSBe3u77U8IPT09O/u7re4u/H29/Dw8M/JwgCS/7OjYoS60GBaYwAAQ6Xa+wBAj3um+r6tp4p7ZYCMkrN6MSGW/625xTwAAFiMgK3LzZinsysKPo+owY2Librh5TJUi2RRQ9Ti8LzQxnu84ruYkurn4Y5lY/LFumh+lfKkpFNCIJOSm4yppew+QmKj02Vxhcfe1aOuvcW7j1UgAO9rbZ9AMaHQ7rTBzqPCy+0PGgMnUsvP1EBwmpuCYm1tbj06QUZAbOzi1Ax9vtPt+sK0dLrS4sXLqsjb7tvf467I4bN/bJe+5eCXiJyyy2yx2M3S/zKY/6eilfrf4FUCAY5LAGk2QN/l7XB7iKvF4ENRgJfAyJWQdMHBwEmUuJFwSHgvALXI3b6WaKq1oO7Tz7vO63uOpd7RxZWUknxcQvj1zgAxdaK82AAAILGytuLe2F5eeSJHNcfYuerq6Y6artLU2FB2mXiDmFqZ/5doALpKM3ttYITN/+zPqO3x65q20ZzA/rO9wktFU1+Tvcro6NbNoM+5psVtV6Vxat3n8QADY3GmxavA1MeefdnEjNHR0RxjipKvzjsvY9nc0eDg4UlXZ9bV1YW0/xGV/zoFKrjl+4+72Z5+eqaWjHxwSuHgvHt6esDV64ODgzBpk3hYXKuQbyhPbEJojKmogaChorDS4NbY2UQwKH6u2aqrq3FxcaW/23qZs8HGy5eATQCH/2BskxwAAOwAALLL5VNXSvHgwdrKsplzM0cRSZ2z4Ilzeae+/5651ff03czMzPX06MWoiwFnnM7Be7XO59nZ2qampun2/c3b5DeCqJ2dneP45OPv83NteuPj4+bm5pzE17zR/Nzd3WSFrIxtHtzx+pDL672qavnf3n6pw6jC3VBnjrGJgKG61mKnt5u627Sno8DS5Vi6/+ailHEAANOAcZ2epL5XRaGjqVF9qFSNqcjk+UldeIFUIXPD/7nR6rDF3AAAAHN+Q4EAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAhyklEQVR4Xu2dC1wTR/7A1z/nqm3+SxJQsCpVTkpUtPRs8aTQu2pFtF5QoNbXX6so0ao9wKjAGZH2bFVEqPggpabR4gOMryoFQaoi2KsmQQ0gYrCxyIHVSq/1qtjH5z8zOyCPJATYhAbnq9n9zc7s7Ib9MrO72QxUMKMuo2l1HQ1Qp9BqL7UkSwATNK2jaT3DMDKeXG4w6EAKoAmh6Slx8gCBViP3YuK0cWgpQlep1+tkoBzDOFaCNKNUVtBTssroONpJPl8ZFwJWiRNMAS+2fAOMAQdcwe4p4XcOUAtAaQSRblFRIlUUQCSKErlFoRACAhGYiUSZKpFIxS4WXQevzPJMUBBMVI8Lg+IiUIotBypCC0BloGZVVCZIuJWD/5mgSDnMa0qTOjiB6/oIVkDExwLG8E8meKUQCDbmt9E6JKD3oLqNaQSCrdl44ickoCZ6I4HQBVzcDq8wKH4WThMINuU7LKBh40UCwfasuosE1OhwmkAww51VxrnTgZxVqMZcIiDBYu6kRRjH884MHLUk7+KM68ZxQ1U+FvAOgdAGqyK8jJLicTEehy1I8dvo+yfjfOu5ClSZe9ebPQckAhLaBAhYZ4xgv4sRKTg+iGFTwUOAgP8xxovPYwHler2eEiku4o45NzcXR23QWM5ceQvrItgJbQp4cGlEPOx54/1YAw82EXDrCzv/8583XvgWJ4GA4BQx965ELpdTOYbv2C3McIl9VMOG5rm4YgIql+ux+SZetwUzPHNnxO7FCUJ3IDfCayryqjlToYBszkFPPfsZr08TAd9EvBFCR7+xL4S+/yNKsgKuyr3rCEoDAfG1yoHEsDsb2XYLTNH/ZnPQ7uF0+W3YBubmhi+uBfOGfPY/yihZeCO3FoZ4AaqU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"},92569:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/bom-table-unit-of-measure-c2b5991058b6074cf564e0ec6bb7391c.png"}}]);