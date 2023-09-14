"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[57800],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),A=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=A(e.components);return o.createElement(c.Provider,{value:n},e.children)},w="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},l=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),w=A(t),l=i,u=w["".concat(c,".").concat(l)]||w[l]||p[l]||r;return t?o.createElement(u,s(s({ref:n},d),{},{components:t})):o.createElement(u,s({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=l;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[w]="string"==typeof e?e:i,s[1]=a;for(var A=2;A<r;A++)s[A]=t[A];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},61420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>A});var o=t(87462),i=(t(67294),t(3905));const r={caption:"Set View Dimension Type",title:"Macro to set dimension type for all views in the active SOLIDWORKS drawing",description:"VBA macro which sets dimension type (projected or true) for all drawing view in the active SOLIDWORKS drawing document",image:"view-dimension-type.png"},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/set-view-dimension-type/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/set-view-dimension-type/index",title:"Macro to set dimension type for all views in the active SOLIDWORKS drawing",description:"VBA macro which sets dimension type (projected or true) for all drawing view in the active SOLIDWORKS drawing document",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/set-view-dimension-type/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/set-view-dimension-type",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/set-view-dimension-type/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/set-view-dimension-type/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/set-view-dimension-type/index.md",tags:[],version:"current",frontMatter:{caption:"Set View Dimension Type",title:"Macro to set dimension type for all views in the active SOLIDWORKS drawing",description:"VBA macro which sets dimension type (projected or true) for all drawing view in the active SOLIDWORKS drawing document",image:"view-dimension-type.png"},sidebar:"tutorialSidebar",previous:{title:"Macro to replace sheet formats in SOLIDWORKS drawings",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/replace-sheet-format/"},next:{title:"Draw sketch segments in context of the drawing sheet using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/sheet-context-sketch/"}},c={},A=[],d={toc:A},w="wrapper";function p(e){let{components:n,...r}=e;return(0,i.kt)(w,(0,o.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View dimension type",src:t(95168).Z,width:"320",height:"124"})),(0,i.kt)("p",null,"This VBA macros sets the dimension type (projected or true) for all drawing views in all sheets of the active SOLIDWORKS drawing."),(0,i.kt)("p",null,"Set the ",(0,i.kt)("strong",{parentName:"p"},"DIMS_TRUE")," constant to ",(0,i.kt)("strong",{parentName:"p"},"True")," to set all dimension types to ",(0,i.kt)("strong",{parentName:"p"},"True"),". Set the ",(0,i.kt)("strong",{parentName:"p"},"DIMS_TRUE")," constant to ",(0,i.kt)("strong",{parentName:"p"},"False")," to set all dimension types to ",(0,i.kt)("strong",{parentName:"p"},"Projected")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Const DIMS_TRUE As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Dim vSheets As Variant\n        vSheets = swDraw.GetViews\n        \n        If Not IsEmpty(vSheets) Then\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vSheets)\n            \n                Dim vViews As Variant\n                vViews = vSheets(i)\n                \n                Dim j As Integer\n                \n                For j = 1 To UBound(vViews)\n                    Dim swView As SldWorks.View\n                    Set swView = vViews(j)\n                    \n                    swView.ProjectedDimensions = Not DIMS_TRUE\n                Next\n            \n            Next\n            \n        End If\n        \n    Else\n        Err.Raise vbError, "", "Open drawing"\n    End If\n    \nEnd Sub\n')))}p.isMDXComponent=!0},95168:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,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"}}]);