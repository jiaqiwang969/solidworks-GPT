"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[68267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>I});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=A(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,I=c["".concat(i,".").concat(d)]||c[d]||g[d]||o;return n?r.createElement(I,s(s({ref:t},u),{},{components:n})):r.createElement(I,s({ref:t},u))}));function I(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var A={};for(var i in t)hasOwnProperty.call(t,i)&&(A[i]=t[i]);A.originalType=e,A[c]="string"==typeof e?e:a,s[1]=A;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>A,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Find features in the tree by type and/or name pattern using SOLIDWORKS API",image:"feature-manager-tree.png",labels:["traverse features","name pattern","type name"]},s=void 0,A={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/find-features/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/find-features/index",title:"Find features in the tree by type and/or name pattern using SOLIDWORKS API",description:"Feature Manager Tree{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/find-features/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/find-features",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/find-features/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/find-features/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/find-features/index.md",tags:[],version:"current",frontMatter:{title:"Find features in the tree by type and/or name pattern using SOLIDWORKS API",image:"feature-manager-tree.png",labels:["traverse features","name pattern","type name"]},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/delete-rolledback-features/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u4eceBoss-Extrude\u7279\u5f81\u4e2d\u63d0\u53d6\u9009\u62e9",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/get-boss-extrude-selection/"}},i={},l=[{value:"Examples",id:"examples",level:2}],u={toc:l},c="wrapper";function g(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Feature Manager Tree",src:n(70242).Z,width:"258",height:"464"}),"{ width=250 }"),(0,a.kt)("p",null,"This VBA macro allows to find features in the Feature Manager tree using SOLIDWORKS API."),(0,a.kt)("p",null,"Features can be found by specifying the type name and/or name pattern (with support of wildcards). Specify empty string for name or type name to ignore this filter."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swFeat As SldWorks.Feature\nSet swFeat = GetFirstFeature(swModel, "WeldMemberFeat") \'return first feature of WeldMemberFeat type (i.e. Structural Member)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swFeat As SldWorks.Feature\nSet swFeat = GetFirstFeature(swModel, "", "Sk*") \'return first feature which name starts with Sk\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Dim vFeats As Variant\nvFeats = GetAllFeatures(swModel, "WeldMemberFeat") \'return all features of WeldMemberFeat type (i.e. Structural Members)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Dim vFeats As Variant\nvFeats = GetAllFeatures(swModel, "", "Sk*")\'return all features whose names starts with Sk\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swFirstWeldFeat As SldWorks.Feature\n    Set swFirstWeldFeat = GetFirstFeature(swModel, "WeldMemberFeat")\n    \n    Dim swFirstSkFeat As SldWorks.Feature\n    Set swFirstSkFeat = GetFirstFeature(swModel, "", "Sk*")\n    \n    Dim swAllWeldFeats As Variant\n    swAllWeldFeats = GetAllFeatures(swModel, "WeldMemberFeat")\n    \n    Dim swAllSkFeats As Variant\n    swAllSkFeats = GetAllFeatures(swModel, "", "Sk*")\n    \nEnd Sub\n\nFunction GetFirstFeature(model As SldWorks.ModelDoc2, Optional typeName As String = "", Optional namePattern As String = "") As SldWorks.Feature\n    \n    Dim vFeats As Variant\n    vFeats = GetFeatures(model, typeName, True, namePattern)\n    \n    If Not IsEmpty(vFeats) Then\n        Set GetFirstFeature = vFeats(0)\n    Else\n        Set GetFirstFeature = Nothing\n    End If\n    \nEnd Function\n\nFunction GetAllFeatures(model As SldWorks.ModelDoc2, Optional typeName As String = "", Optional namePattern As String = "") As Variant\n    GetAllFeatures = GetFeatures(model, typeName, False, namePattern)\nEnd Function\n\nFunction GetFeatures(model As SldWorks.ModelDoc2, typeName As String, firstOnly As Boolean, Optional namePattern As String = "") As Variant\n    \n    Dim swTargFeatsColl As Collection\n    Set swTargFeatsColl = New Collection\n    \n    Dim swProcFeatsColl As Collection\n    Set swProcFeatsColl = New Collection\n    \n    Dim swFeat As SldWorks.Feature\n    Set swFeat = model.FirstFeature()\n    \n    While Not swFeat Is Nothing\n                \n        If Not Contains(swProcFeatsColl, swFeat) Then\n            swProcFeatsColl.Add swFeat\n            \n            If FilterFeature(swFeat, typeName, namePattern) Then\n                swTargFeatsColl.Add swFeat\n                If firstOnly Then\n                    GetFeatures = CollectionToArray(swTargFeatsColl)\n                    Exit Function\n                End If\n            End If\n        End If\n    \n        CollectAllSubFeatures swFeat, swProcFeatsColl, swTargFeatsColl, typeName, namePattern, firstOnly\n        \n        If firstOnly And swTargFeatsColl.Count() >= 1 Then\n            GetFeatures = CollectionToArray(swTargFeatsColl)\n            Exit Function\n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \n    GetFeatures = CollectionToArray(swTargFeatsColl)\n    \nEnd Function\n\nFunction FilterFeature(feat As SldWorks.Feature, typeName As String, namePattern As String) As Boolean\n    \n    If typeName <> "" Then\n        If LCase(feat.GetTypeName2()) <> LCase(typeName) Then\n            FilterFeature = False\n            Exit Function\n        End If\n    End If\n    \n    If namePattern <> "" Then\n        If Not feat.Name Like namePattern Then\n            FilterFeature = False\n            Exit Function\n        End If\n    End If\n    \n    FilterFeature = True\n    \nEnd Function\n\nSub CollectAllSubFeatures(swFeat As SldWorks.Feature, procFeatsColl As Collection, targFeatsColl As Collection, typeName As String, namePattern As String, firstOnly As Boolean)\n    \n    Dim swSubFeat As SldWorks.Feature\n    Set swSubFeat = swFeat.GetFirstSubFeature\n        \n    While Not swSubFeat Is Nothing\n        \n        If Not Contains(procFeatsColl, swSubFeat) Then\n            procFeatsColl.Add swSubFeat\n            If FilterFeature(swSubFeat, typeName, namePattern) Then\n                targFeatsColl.Add swSubFeat\n                If firstOnly Then\n                    Exit Sub\n                End If\n            End If\n        End If\n        \n        CollectAllSubFeatures swSubFeat, procFeatsColl, targFeatsColl, typeName, namePattern, firstOnly\n        Set swSubFeat = swSubFeat.GetNextSubFeature\n        \n    Wend\n    \nEnd Sub\n\nFunction CollectionToArray(coll As Collection) As Variant\n    \n    If coll.Count() > 0 Then\n        \n        Dim arr() As Object\n        \n        ReDim arr(coll.Count() - 1)\n        Dim i As Integer\n        \n        For i = 1 To coll.Count\n            Set arr(i - 1) = coll(i)\n        Next\n        \n        CollectionToArray = arr\n        \n    Else\n        CollectionToArray = Empty\n    End If\n    \nEnd Function\n\nFunction Contains(coll As Collection, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To coll.Count\n        If coll.item(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')))}g.isMDXComponent=!0},70242:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAAHQCAMAAAB9Z5RGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAm9D2NjABhad/f39wAAY2hoaHW51jgAAL6aB4s4ALq5ujZujXiUeQA4i7BjANC+alQgH1alxdzWx9SMYgA3VaKSY2u724RjEtGqHjgAOMTZ5KmAgDgAY9IcAZKSkiYopDaOxCIiIgAAOLG6C7DUixGaFQBjsJh4Kos4Y4tji2Ow9/fRqTk5Oa+fkmMAOIfO6mmKnPfUi0yUs9TMtWmqyDt40tHY3NO6NRYWFjg4Y3QYFWMAANGpgMSUmT9xQtAnLPewY+FpaS4tLcPDw6WCLUZuiGSUHujAwaJ8HPPOC6nQ9tLCdLiZOszFuqSko4KCgs/Q0Zizmd/g3yVsi4mv9dfX1nNzc9TU02MAY7+sRSJWg/jiXUJCQoAoKmictgNAXPE2A5W/486xY4mJiamp0VZBFzV7mZCMYlV3pFqpyYReX8u8kICp0ShkwZWAla9SPff2x/ewixicZhRQbeNTUwAAAOWwMYpkH8RZQHh4eO6en+C7C76VgEiLS73N1JiuunBWGamAlSBapSsrK11bW5N3cXKUpamnoK+KNqrGz9m6HszMzDdls0tLS1qP2E2Dn+Z7fVbDCmM4i2OwsOBKS0+cvG+d4OdeXd3h5SmbKbskHqNfYKidhtTIyVyCkCZfe4CVvkZSXgwMDNWsrtvb2oCAqWJhYQdEYvbKIN3x8ZG7zpWAgJqZmjiLr3vC4NSLOLH19uO+lIrT9uTk44s3OLCKGziL1Pbojy5zlVKlVol0OHZfI7Hi7aiPR1mAnt7FT8gVG26y0LGLjEIlJrKyspWAqb+ZH2Cv0kcxCkRvxBsbGzGBp3ZgYdo5OOG2HmKiwGNJE6OGP5FsILSicxSyEGiNau7CH+qws77yujIyMilkg5+3u1g8PSx7nTg4i2SKZouwi+nDCZFsE4Gbqaqqqrlzc7mvnYCAlRFIZtO4SK2trYuou93GYlycuicmJlaTsEiKp418RGV8YVE6D7CVN93MenihvTuEo+mJiLjDyIp6VciyVmNjsJy+7QAAAEjBSCgAAAEAdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wDVXk+hAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAfLUlEQVR4Xu2dD5wdVXXHYxlCzKOuVZ+IErddCljDKi4GjQSawAM1FHbXF1+eyErUFJUq9Vn9NF2NYLtIhccqbUHrnxINT5LBNRvyIETAKnaFuKuGP1Z5sbEtPltASGIVtVI/Pefcc+/8eTP75s28PzOz9/dJ5t+9b/be79x7ZuacuTOLjBFj4cizrhoBIgDxSurljYDrn1sA8m0FQj9cAGqCYGHID0GxyMvpl48tAASQAh0l7fK1BbAVLSJbjFRL2wKQRqARaAQgjUAjiBmC8tRUmRe7qDghKA9ncvXuM4gTgqlcuTw6xSvdU6wQlIuVysJGUJ6pVDMLuyNoc9graQQagUYA0gg0Ao0ANC8Cdq+lWroVgDQCjUAjADVBgEH2NIir46n2tIKRYjD1LB+X01MaQWIQFPLVar7AK0rufIXRK95y+umnv/cCXpdqKwLzgt9c8rkKryjZi/LjrEs/5gSQs8i1Wq24GCYwc6kRQaU6Nlat8IqSK9+r/nn/u77znet/cuZnb+MtrDYiuOCuB566444/ufOSl/EGlr0o2R0uZTkB5EJg1Iq1Mbw+q5V5E8uNoFCpmmNjZrXiagfOfKNvftcbz/zUB379ewN/duZbeJtQGxHsvf3Bp594+1dfcv5e3sByINjn0vwIRqgdLOZNLBcC6AXDi8fGFg+7+4Ij36uO/vhvzR9cd9YHDw4M/Nvr3mLP2U4E279/76bzv3bRRfMhaBAngNwIqPq4A1dXcOYrVHOTg6AaNJmqg4E9X+Fd137yPON1vz7rg1fODgx8+6bbbDmdtXSdI1tB8Mrf3L99+/ZNF4HmQUBVssm0Vc+NYKZarWJ+ex6UI18hnxsbHBkdHCyPT0zkHO3Anm/0zad98rc/+OCv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"}}]);