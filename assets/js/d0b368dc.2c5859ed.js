"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[59452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var A=o.createContext({}),c=function(e){var t=o.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(A.Provider,{value:t},e.children)},p="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,A=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),l=i,u=p["".concat(A,".").concat(l)]||p[l]||w[l]||r;return n?o.createElement(u,s(s({ref:t},d),{},{components:n})):o.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=l;var a={};for(var A in t)hasOwnProperty.call(t,A)&&(a[A]=t[A]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},67377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>s,default:()=>w,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const r={caption:"Set View Dimension Type",title:"Macro to set dimension type for all views in the active SOLIDWORKS drawing",description:"VBA macro which sets dimension type (projected or true) for all drawing view in the active SOLIDWORKS drawing document",image:"view-dimension-type.png"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-view-dimension-type/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-view-dimension-type/index",title:"Macro to set dimension type for all views in the active SOLIDWORKS drawing",description:"VBA macro which sets dimension type (projected or true) for all drawing view in the active SOLIDWORKS drawing document",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-view-dimension-type/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-view-dimension-type",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-view-dimension-type/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-view-dimension-type/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-view-dimension-type/index.md",tags:[],version:"current",frontMatter:{caption:"Set View Dimension Type",title:"Macro to set dimension type for all views in the active SOLIDWORKS drawing",description:"VBA macro which sets dimension type (projected or true) for all drawing view in the active SOLIDWORKS drawing document",image:"view-dimension-type.png"},sidebar:"tutorialSidebar",previous:{title:"Macro to set SOLIDWORKS document units (length, angle, mass, volume, time)",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/set-units/"},next:{title:"How to fix the error of SOLIDWORKS add-ins sharing common libraries",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/shared-library-conflict/"}},A={},c=[],d={toc:c},p="wrapper";function w(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View dimension type",src:n(29441).Z,width:"320",height:"124"})),(0,i.kt)("p",null,"This VBA macros sets the dimension type (projected or true) for all drawing views in all sheets of the active SOLIDWORKS drawing."),(0,i.kt)("p",null,"Set the ",(0,i.kt)("strong",{parentName:"p"},"DIMS_TRUE")," constant to ",(0,i.kt)("strong",{parentName:"p"},"True")," to set all dimension types to ",(0,i.kt)("strong",{parentName:"p"},"True"),". Set the ",(0,i.kt)("strong",{parentName:"p"},"DIMS_TRUE")," constant to ",(0,i.kt)("strong",{parentName:"p"},"False")," to set all dimension types to ",(0,i.kt)("strong",{parentName:"p"},"Projected")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Const DIMS_TRUE As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Dim vSheets As Variant\n        vSheets = swDraw.GetViews\n        \n        If Not IsEmpty(vSheets) Then\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vSheets)\n            \n                Dim vViews As Variant\n                vViews = vSheets(i)\n                \n                Dim j As Integer\n                \n                For j = 1 To UBound(vViews)\n                    Dim swView As SldWorks.View\n                    Set swView = vViews(j)\n                    \n                    swView.ProjectedDimensions = Not DIMS_TRUE\n                Next\n            \n            Next\n            \n        End If\n        \n    Else\n        Err.Raise vbError, "", "Open drawing"\n    End If\n    \nEnd Sub\n')))}w.isMDXComponent=!0},29441:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);