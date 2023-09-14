"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[61366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={title:"Find cut-list item from the sheet metal flat pattern using SOLIDWORKS API",caption:"Get Cut List Item From Flat Pattern",description:"VBA macro which finds the pointer to the cut-list feature from the selected flat pattern feature",image:"cut-list-folder-flat-pattern.png",labels:["sheet metal","cut-list","flat pattern"]},s=void 0,i={unversionedId:"codestack-clone/solidworks-api/document/sheet-metal/get-body-flat-pattern/index",id:"codestack-clone/solidworks-api/document/sheet-metal/get-body-flat-pattern/index",title:"Find cut-list item from the sheet metal flat pattern using SOLIDWORKS API",description:"VBA macro which finds the pointer to the cut-list feature from the selected flat pattern feature",source:"@site/docs/codestack-clone/solidworks-api/document/sheet-metal/get-body-flat-pattern/index.md",sourceDirName:"codestack-clone/solidworks-api/document/sheet-metal/get-body-flat-pattern",slug:"/codestack-clone/solidworks-api/document/sheet-metal/get-body-flat-pattern/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/sheet-metal/get-body-flat-pattern/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/sheet-metal/get-body-flat-pattern/index.md",tags:[],version:"current",frontMatter:{title:"Find cut-list item from the sheet metal flat pattern using SOLIDWORKS API",caption:"Get Cut List Item From Flat Pattern",description:"VBA macro which finds the pointer to the cut-list feature from the selected flat pattern feature",image:"cut-list-folder-flat-pattern.png",labels:["sheet metal","cut-list","flat pattern"]},sidebar:"tutorialSidebar",previous:{title:"Export flat pattern to DXF/DWG from part SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/sheet-metal/export-dxf-dwg/"},next:{title:"Rename sheet metal flat patterns features after the cut-list features",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/sheet-metal/rename-flat-patterns/"}},l={},d=[],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cut-List folder and flat pattern feature",src:n(13151).Z,width:"299",height:"518"}),"{ width=200 }"),(0,o.kt)("p",null,"This VBA macro demonstrates how to find the corresponding cut-list folder feature from the selected sheet metal flat pattern feature."),(0,o.kt)("p",null,"This macro supports both flatten and unflatten state of sheet metal feature."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = swModel.SelectionManager.GetSelectedObject6(1, -1)\n    \n    If Not swFeat Is Nothing Then\n    \n        If swFeat.GetTypeName2 = "FlatPattern" Then\n                    \n            Dim swFlatPattern As SldWorks.FlatPatternFeatureData\n            Set swFlatPattern = swFeat.GetDefinition\n            \n            Dim swFixedFace As SldWorks.Face2\n            Set swFixedFace = swFlatPattern.FixedFace2\n            \n            Dim swBody As SldWorks.Body2\n            Set swBody = swFixedFace.GetBody\n            \n            Dim swCutListFeat As SldWorks.Feature\n            \n            Set swCutListFeat = GetCutListFromBody(swModel, swBody)\n            \n            Debug.Print swCutListFeat.Name\n            \n        Else\n            Err.Raise vbError, "", "Selected feature is not sheet metal flat pattern"\n        End If\n    \n    Else\n        Err.Raise vbError, "", "Select feature"\n    End If\n    \nEnd Sub\n\nFunction GetCutListFromBody(model As SldWorks.ModelDoc2, body As SldWorks.Body2) As SldWorks.Feature\n    \n    Dim swFeat As SldWorks.Feature\n    Dim swBodyFolder As SldWorks.BodyFolder\n    \n    Set swFeat = model.FirstFeature\n    \n    Do While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2 = "CutListFolder" Then\n            \n            Set swBodyFolder = swFeat.GetSpecificFeature2\n            \n            Dim vBodies As Variant\n            \n            vBodies = swBodyFolder.GetBodies\n            \n            Dim i As Integer\n            \n            If Not IsEmpty(vBodies) Then\n                For i = 0 To UBound(vBodies)\n                    \n                    Dim swCutListBody As SldWorks.Body2\n                    Set swCutListBody = vBodies(i)\n                    \n                    If swApp.IsSame(swCutListBody, body) = swObjectEquality.swObjectSame Then\n                        Set GetCutListFromBody = swFeat\n                        Exit Function\n                    End If\n                    \n                Next\n            End If\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Loop\n\nEnd Function\n')))}u.isMDXComponent=!0},13151:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cut-list-folder-flat-pattern-8322e6e21f3826a2456d75589f969113.png"}}]);