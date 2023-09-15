"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[83278],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var r=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,s=t.mdxType,a=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=u(n),m=s,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,o(o({ref:e},p),{},{components:n})):r.createElement(h,o({ref:e},p))}));function h(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[c]="string"==typeof t?t:s,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4332:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),s=(n(67294),n(3905));const a={image:"linked-sheet-metal-cut-list-properties.png"},o=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-sheet-metal/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-sheet-metal/index",title:"index",description:"Linked Sheet Metal Cut-List Properties{ width=800 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-sheet-metal/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-sheet-metal",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-sheet-metal/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-sheet-metal/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-sheet-metal/index.md",tags:[],version:"current",frontMatter:{image:"linked-sheet-metal-cut-list-properties.png"},sidebar:"tutorialSidebar",previous:{title:"Handling Custom Property Modification Events with SOLIDWORKS API (Add, Delete, Change)",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/handle-events/"},next:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-to-file/"}},l={},u=[{value:"Notes and Limitations",id:"notes-and-limitations",level:2}],p={toc:u},c="wrapper";function d(t){let{components:e,...a}=t;return(0,s.kt)(c,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Linked Sheet Metal Cut-List Properties",src:n(17849).Z,width:"1517",height:"718"}),"{ width=800 }"),(0,s.kt)("p",null,"This VBA macro allows you to link specified cut-list custom properties of a sheet metal part to custom properties of a SOLIDWORKS file."),(0,s.kt)("p",null,"The custom properties are linked through formulas and will automatically update when the geometry of the sheet metal changes."),(0,s.kt)("p",null,"You can specify a fallback value that will be written to the custom property if the source part is not a sheet metal document."),(0,s.kt)("p",null,"To customize the property mapping, add or remove mapping values in the ",(0,s.kt)("strong",{parentName:"p"},"Init")," function below."),(0,s.kt)("p",null,"When specifying the expression in the last parameter (",(0,s.kt)("strong",{parentName:"p"},"fallback value"),"), you need to escape the double quotes (",(0,s.kt)("strong",{parentName:"p"},'"'),") with additional double quotes (",(0,s.kt)("strong",{parentName:"p"},'""'),"). For example, if the formula for SOLIDWORKS Mass is ",(0,s.kt)("strong",{parentName:"p"},'"SW-Mass"'),", and you want to set it as the fallback value, the third parameter should be ",(0,s.kt)("strong",{parentName:"p"},'"""SW-Mass"""'),", where the outer quotes represent the quotes for a ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/variables/standard-types#string"},"VBA string value"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Sub Init(Optional dummy As Variant = Empty)\n    \n    Set Map = New Collection\n    \n    Map.Add CreateMapValue("Part Number", "", "") \' Add an empty "Part Number" custom property\n    Map.Add CreateMapValue("Width", "Bounding Box Width", "") \' Add the "Bounding Box Width" custom property from the sheet metal as "Width", if it\'s not a sheet metal part, it will be empty\n    Map.Add CreateMapValue("Material", "", """SW-Material""") \' Add the custom property "Material" and set it to the "SW-Material" formula, regardless of whether it\'s a sheet metal part\n        \nEnd Sub\n')),(0,s.kt)("h2",{id:"notes-and-limitations"},"Notes and Limitations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Supports only a single cut-list item (an error will be thrown if there are multiple cut-lists)"),(0,s.kt)("li",{parentName:"ul"},"The macro sets the ",(0,s.kt)("strong",{parentName:"li"},"Automatically create cut list")," and ",(0,s.kt)("strong",{parentName:"li"},"Automatically update")," options on the cut-list folder"),(0,s.kt)("li",{parentName:"ul"},"Supports only part documents"),(0,s.kt)("li",{parentName:"ul"},"Cut-list custom properties are linked through expressions and the cut-list name. If the cut-list is renamed, the properties will not update and the macro needs to be re-run. However, if the cut-list remains with the original name, all properties will update dynamically without re-running the macro.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nDim Map As Collection\n\nSub Init(Optional dummy As Variant = Empty)\n    \n    Set Map = New Collection\n    \n    Map.Add CreateMapValue("Length", "Bounding Box Length", """D1@Boss-Extrude1""")\n    Map.Add CreateMapValue("Mass", "Mass", """SW-Mass""")\n    Map.Add CreateMapValue("Surface Area", "", """SW-SurfaceArea""")\n        \nEnd Sub\n\nFunction CreateMapValue(targetPrpName As String, srcCutListPrpName As String, Optional fallbackValue As String = "") As Variant\n    \n    CreateMapValue = Array(targetPrpName, srcCutListPrpName, fallbackValue)\n    \nEnd Function\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.ModelDoc2\n    \n    Set swPart = swApp.ActiveDoc\n    \n    If swPart Is Nothing Then\n        Err.Raise vbError, "", "Open a part document"\n    End If\n    \n    If swPart.GetType() <> swDocumentTypes_e.swDocPART Then\n        Err.Raise vbError, "", "The active document is not a part"\n    End If\n    \n    Init\n    \n    Dim vCutLists As Variant\n    vCutLists = GetCutLists(swPart)\n    \n    Dim swCutListCustomPrpMgr As SldWorks.CustomPropertyManager\n    \n    If Not IsEmpty(vCutLists) Then\n        \n        If UBound(vCutLists) > 0 Then\n            Err.Raise vbError, "", "Supports only a single cut-list item"\n        End If\n        \n        Dim swCutList As SldWorks.Feature\n        \n        Set swCutList = vCutLists(0)\n        \n        Dim swCutListFolder As SldWorks.BodyFolder\n        Set swCutListFolder = swCutList.GetSpecificFeature2\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = swCutListFolder.GetBodies()(0)\n        \n        If False <> swBody.IsSheetMetal() Then\n            Set swCutListCustomPrpMgr = swCutList.CustomPropertyManager\n        End If\n        \n    End If\n    \n    Dim swTargetCustPrpMgr As SldWorks.CustomPropertyManager\n    Set swTargetCustPrpMgr = swPart.Extension.CustomPropertyManager("")\n    \n    Dim i As Integer\n    \n    For i = 1 To Map.Count\n    \n        Dim targetPrpName As String\n        Dim srcCutListPrpName As String\n        Dim fallbackValue As String\n        \n        targetPrpName = CStr(Map.item(i)(0))\n        srcCutListPrpName = CStr(Map.item(i)(1))\n        fallbackValue = CStr(Map.item(i)(2))\n        \n        CopyProperty swCutListCustomPrpMgr, swTargetCustPrpMgr, targetPrpName, srcCutListPrpName, fallbackValue\n    Next\n    \nEnd Sub\n\nFunction GetCutLists(model As SldWorks.ModelDoc2) As Variant\n\n    Dim swFeat As SldWorks.Feature\n    \n    Dim swCutLists() As SldWorks.Feature\n    \n    Set swFeat = model.FirstFeature\n    \n    While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2 <> "HistoryFolder" Then\n        \n            ProcessFeature swFeat, swCutLists\n            \n            TraverseSubFeatures swFeat, swCutLists\n        \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \n    If (Not swCutLists) = -1 Then\n        GetCutLists = Empty\n    Else\n        GetCutLists = swCutLists\n    End If\n    \nEnd Function\n\nSub TraverseSubFeatures(parentFeat As SldWorks.Feature, cutLists() As SldWorks.Feature)\n    \n    Dim swChildFeat As SldWorks.Feature\n    Set swChildFeat = parentFeat.GetFirstSubFeature\n    \n    While Not swChildFeat Is Nothing\n        ProcessFeature swChildFeat, cutLists\n        Set swChildFeat = swChildFeat.GetNextSubFeature()\n    Wend\n    \nEnd Sub\n\nSub ProcessFeature(feat As SldWorks.Feature, cutLists() As SldWorks.Feature)\n    \n    If feat.GetTypeName2() = "SolidBodyFolder" Then\n        \n        Dim swBodyFolder As SldWorks.BodyFolder\n        Set swBodyFolder = feat.GetSpecificFeature2\n        \n        swBodyFolder.SetAutomaticCutList True\n        swBodyFolder.SetAutomaticUpdate True\n        swBodyFolder.UpdateCutList\n        \n    ElseIf feat.GetTypeName2() = "CutListFolder" Then\n        \n        If Not Contains(cutLists, feat) Then\n            If (Not cutLists) = -1 Then\n                ReDim cutLists(0)\n            Else\n                ReDim Preserve cutLists(UBound(cutLists) + 1)\n            End If\n            \n            Set cutLists(UBound(cutLists)) = feat\n        End If\n        \n    End If\n    \nEnd Sub\n\nFunction Contains(arr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(arr)\n        If arr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\nSub CopyProperty(srcPrpMgr As SldWorks.CustomPropertyManager, targPrpMgr As SldWorks.CustomPropertyManager, targetPrpName As String, srcCutListPrpName As String, fallbackValue As String)\n\n    Dim prpVal As String\n    \n    If Not srcPrpMgr Is Nothing And srcCutListPrpName <> "" Then\n    \n        Dim prpResVal As String\n                    \n        srcPrpMgr.Get5 srcCutListPrpName, False, prpVal, prpResVal, False\n    Else\n        prpVal = fallbackValue\n    End If\n    \n    targPrpMgr.Add2 targetPrpName, swCustomInfoType_e.swCustomInfoText, prpVal\n    targPrpMgr.Set targetPrpName, prpVal\n    \nEnd Sub\n')))}d.isMDXComponent=!0},17849:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/linked-sheet-metal-cut-list-properties-eadf814fe0ebf7805b166d8ac694f63b.png"}}]);