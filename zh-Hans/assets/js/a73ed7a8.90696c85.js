"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[98603],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(t),m=s,u=p["".concat(l,".").concat(m)]||p[m]||b[m]||r;return t?o.createElement(u,i(i({ref:n},c),{},{components:t})):o.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:s,i[1]=a;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65107:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(87462),s=(t(67294),t(3905));const r={title:"Move design table object using SOLIDWORKS API",caption:"Move Design Table OLE Object",description:"Example demonstrates how to resize and move the design table OLE object in the model graphics area",image:"design-table-ole-object.png",labels:["adornment","boundary","design table","example","move","ole object","solidworks api"],"redirect-from":["/2018/03/move-design-table-ole-object.html"]},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/adornment/ole-objects/move-design-table/index",id:"codestack-clone/solidworks-api/adornment/ole-objects/move-design-table/index",title:"Move design table object using SOLIDWORKS API",description:"Example demonstrates how to resize and move the design table OLE object in the model graphics area",source:"@site/docs/codestack-clone/solidworks-api/adornment/ole-objects/move-design-table/index.md",sourceDirName:"codestack-clone/solidworks-api/adornment/ole-objects/move-design-table",slug:"/codestack-clone/solidworks-api/adornment/ole-objects/move-design-table/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/adornment/ole-objects/move-design-table/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/adornment/ole-objects/move-design-table/index.md",tags:[],version:"current",frontMatter:{title:"Move design table object using SOLIDWORKS API",caption:"Move Design Table OLE Object",description:"Example demonstrates how to resize and move the design table OLE object in the model graphics area",image:"design-table-ole-object.png",labels:["adornment","boundary","design table","example","move","ole object","solidworks api"],"redirect-from":["/2018/03/move-design-table-ole-object.html"]},sidebar:"tutorialSidebar",previous:{title:"Managing OLE Objects in models using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/adornment/ole-objects/"},next:{title:"Rendering custom 3D graphics with Open GL in SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/adornment/opengl/"}},l={},d=[],c={toc:d},p="wrapper";function b(e){let{components:n,...r}=e;return(0,s.kt)(p,(0,o.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This example demonstrates how to resize and move the design table OLE object in the graphics area using ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iswoleobject~boundaries.html"},"ISwOLEObject::Boundaries")," SOLIDWORKS API method."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Design Table OLE object in the graphics area",src:t(85945).Z,width:"640",height:"227"}),"{ width=640 height=226 }"),(0,s.kt)("p",null,"In this example an existing design table element will be moved to the right on the distance equals to object's width"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const DESIGN_TABLE_CLSID As String = "{00020830-0000-0000-C000-000000000046}"\n\nDim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Set swModel = swApp.ActiveDoc\n            \n    If Not swModel Is Nothing Then\n                \n        Dim vOleObjs As Variant\n        vOleObjs = swModel.Extension.GetOLEObjects(swOleObjectOptions_e.swOleObjectOptions_GetAll)\n        \n        Dim i As Integer\n        \n        Dim isDesTableFound As Boolean\n        \n        For i = 0 To UBound(vOleObjs)\n            \n            Dim swOleObj As SldWorks.SwOLEObject\n            Set swOleObj = vOleObjs(i)\n            \n            If swOleObj.Clsid = DESIGN_TABLE_CLSID Then\n                \n                isDesTableFound = True\n                \n                Dim vBounds As Variant\n                vBounds = swOleObj.Boundaries\n                \n                Dim width As Double\n                                \n                width = vBounds(3) - vBounds(0)\n                                \n                Dim newBounds(6) As Double\n                newBounds(0) = vBounds(0) + width: newBounds(1) = vBounds(1): newBounds(2) = 0\n                newBounds(3) = vBounds(3) + width * 2: newBounds(4) = vBounds(4): newBounds(5) = 0\n    \n                swOleObj.Boundaries = newBounds\n                \n            End If\n            \n        Next\n        \n        If Not isDesTableFound Then\n            MsgBox "Design table is not found in this model"\n        End If\n    \n    Else\n        \n        MsgBox "Please open the model with design table"\n        \n    End If\n    \nEnd Sub\n')))}b.isMDXComponent=!0},85945:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/design-table-ole-object-f74e2606c22ec4203e6f832c9fe8c9de.png"}}]);