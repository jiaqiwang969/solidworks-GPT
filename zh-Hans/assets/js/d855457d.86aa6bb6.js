"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[89278],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=o.createContext({}),d=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(a.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},b=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),b=s,m=p["".concat(a,".").concat(b)]||p[b]||u[b]||r;return t?o.createElement(m,i(i({ref:n},c),{},{components:t})):o.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=b;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[p]="string"==typeof e?e:s,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},63052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(87462),s=(t(67294),t(3905));const r={title:"\u79fb\u52a8\u8bbe\u8ba1\u8868OLE\u5bf9\u8c61",image:"design-table-ole-object.png",labels:["\u88c5\u9970","\u8fb9\u754c","\u8bbe\u8ba1\u8868","\u793a\u4f8b","\u79fb\u52a8","OLE\u5bf9\u8c61","solidworks api"],"redirect-from":["/2018/03/move-design-table-ole-object.html"]},i=void 0,l={unversionedId:"codestack/solidworks-api/adornment/ole-objects/move-design-table/index",id:"codestack/solidworks-api/adornment/ole-objects/move-design-table/index",title:"\u79fb\u52a8\u8bbe\u8ba1\u8868OLE\u5bf9\u8c61",description:"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u7684ISwOLEObject::Boundaries\u65b9\u6cd5\u8c03\u6574\u548c\u79fb\u52a8\u56fe\u5f62\u533a\u57df\u4e2d\u7684\u8bbe\u8ba1\u8868OLE\u5bf9\u8c61\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/adornment/ole-objects/move-design-table/index.md",sourceDirName:"codestack/solidworks-api/adornment/ole-objects/move-design-table",slug:"/codestack/solidworks-api/adornment/ole-objects/move-design-table/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/adornment/ole-objects/move-design-table/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/adornment/ole-objects/move-design-table/index.md",tags:[],version:"current",frontMatter:{title:"\u79fb\u52a8\u8bbe\u8ba1\u8868OLE\u5bf9\u8c61",image:"design-table-ole-object.png",labels:["\u88c5\u9970","\u8fb9\u754c","\u8bbe\u8ba1\u8868","\u793a\u4f8b","\u79fb\u52a8","OLE\u5bf9\u8c61","solidworks api"],"redirect-from":["/2018/03/move-design-table-ole-object.html"]},sidebar:"tutorialSidebar",previous:{title:"Managing OLE Objects in Models with SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/adornment/ole-objects/"},next:{title:"\u5728SOLIDWORKS API\u4e2d\u4f7f\u7528OpenGL\u6e32\u67d3\u81ea\u5b9a\u4e493D\u56fe\u5f62",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/adornment/opengl/"}},a={},d=[],c={toc:d},p="wrapper";function u(e){let{components:n,...r}=e;return(0,s.kt)(p,(0,o.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iswoleobject~boundaries.html"},"SOLIDWORKS API\u7684ISwOLEObject::Boundaries"),"\u65b9\u6cd5\u8c03\u6574\u548c\u79fb\u52a8\u56fe\u5f62\u533a\u57df\u4e2d\u7684\u8bbe\u8ba1\u8868OLE\u5bf9\u8c61\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u56fe\u5f62\u533a\u57df\u4e2d\u7684\u8bbe\u8ba1\u8868OLE\u5bf9\u8c61",src:t(7659).Z,width:"640",height:"227"}),"{ width=640 height=226 }"),(0,s.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u5c06\u79fb\u52a8\u73b0\u6709\u7684\u8bbe\u8ba1\u8868\u5143\u7d20\u5230\u53f3\u4fa7\uff0c\u8ddd\u79bb\u7b49\u4e8e\u5bf9\u8c61\u7684\u5bbd\u5ea6\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const DESIGN_TABLE_CLSID As String = "{00020830-0000-0000-C000-000000000046}"\n\nDim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Set swModel = swApp.ActiveDoc\n            \n    If Not swModel Is Nothing Then\n                \n        Dim vOleObjs As Variant\n        vOleObjs = swModel.Extension.GetOLEObjects(swOleObjectOptions_e.swOleObjectOptions_GetAll)\n        \n        Dim i As Integer\n        \n        Dim isDesTableFound As Boolean\n        \n        For i = 0 To UBound(vOleObjs)\n            \n            Dim swOleObj As SldWorks.SwOLEObject\n            Set swOleObj = vOleObjs(i)\n            \n            If swOleObj.Clsid = DESIGN_TABLE_CLSID Then\n                \n                isDesTableFound = True\n                \n                Dim vBounds As Variant\n                vBounds = swOleObj.Boundaries\n                \n                Dim width As Double\n                                \n                width = vBounds(3) - vBounds(0)\n                                \n                Dim newBounds(6) As Double\n                newBounds(0) = vBounds(0) + width: newBounds(1) = vBounds(1): newBounds(2) = 0\n                newBounds(3) = vBounds(3) + width * 2: newBounds(4) = vBounds(4): newBounds(5) = 0\n    \n                swOleObj.Boundaries = newBounds\n                \n            End If\n            \n        Next\n        \n        If Not isDesTableFound Then\n            MsgBox "\u5728\u6b64\u6a21\u578b\u4e2d\u672a\u627e\u5230\u8bbe\u8ba1\u8868"\n        End If\n    \n    Else\n        \n        MsgBox "\u8bf7\u6253\u5f00\u5e26\u6709\u8bbe\u8ba1\u8868\u7684\u6a21\u578b"\n        \n    End If\n    \nEnd Sub\n')))}u.isMDXComponent=!0},7659:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/design-table-ole-object-f74e2606c22ec4203e6f832c9fe8c9de.png"}}]);