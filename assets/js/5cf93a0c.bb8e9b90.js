"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[50400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=s,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const a={caption:"Link To Sheet Metal Cut List Properties",title:"Macro to link sheet metal cut-list properties to SOLIDWORKS part custom properties",description:"VBA macro which adds the permanent link (expression) between specified sheet metal cut list properties and file custom properties with an optional fallback value",image:"linked-sheet-metal-cut-list-properties.png"},o=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/link-sheet-metal/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/link-sheet-metal/index",title:"Macro to link sheet metal cut-list properties to SOLIDWORKS part custom properties",description:"VBA macro which adds the permanent link (expression) between specified sheet metal cut list properties and file custom properties with an optional fallback value",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/link-sheet-metal/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/link-sheet-metal",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/link-sheet-metal/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/link-sheet-metal/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/link-sheet-metal/index.md",tags:[],version:"current",frontMatter:{caption:"Link To Sheet Metal Cut List Properties",title:"Macro to link sheet metal cut-list properties to SOLIDWORKS part custom properties",description:"VBA macro which adds the permanent link (expression) between specified sheet metal cut list properties and file custom properties with an optional fallback value",image:"linked-sheet-metal-cut-list-properties.png"},sidebar:"tutorialSidebar",previous:{title:"Handle custom properties modification events (add, delete, change) using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/handle-events/"},next:{title:"Link SOLIDWORKS custom properties from text file",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/link-to-file/"}},l={},p=[{value:"Notes And Limitations",id:"notes-and-limitations",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Linked sheet metal cut-list custom properties",src:n(18852).Z,width:"1517",height:"718"}),"{ width=800 }"),(0,s.kt)("p",null,"This VBA macro allows to link specified cut-list custom properties from sheet metal parts to the custom properties of the SOLIDWORKS file."),(0,s.kt)("p",null,"Custom properties will be linked by formula and will be automatically updated if the geometry of sheet metal is changed."),(0,s.kt)("p",null,"It is possible to specify a fallback value which will be written to custom property if the source part is not a sheet metal document."),(0,s.kt)("p",null,"In order to customize the properties map, add remove the map values within the ",(0,s.kt)("strong",{parentName:"p"},"Init")," function as shown below."),(0,s.kt)("p",null,"When specifying expressions in the last parameter (",(0,s.kt)("strong",{parentName:"p"},"fallback value"),") it is required to escape the ",(0,s.kt)("strong",{parentName:"p"},'"')," (quote) with other ",(0,s.kt)("strong",{parentName:"p"},'"')," (quote). For example formula for SOLIDWORKS mass is ",(0,s.kt)("strong",{parentName:"p"},'"SW-Mass"')," if this needs to be set as the fallback value, the third parameter should be ",(0,s.kt)("strong",{parentName:"p"},'"""SW-Mass"""')," where the outer quotes are quotes indicating the ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/variables/standard-types#string"},"VBA string value")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Sub Init(Optional dummy As Variant = Empty)\n    \n    Set Map = New Collection\n    \n    Map.Add CreateMapValue("Part Number", "", "") \'Add empty \'Part Number\' custom property\n    Map.Add CreateMapValue("Width", "Bounding Box Width", "") \'Add custom property \'Width\' from the \'Bounding Box Width\' of the sheet metal or empty if not sheet metal part\n    Map.Add CreateMapValue("Material", "", """SW-Material""") \'Add custom property \'Material\' and set to the \'SW-Material\' formula regardless if this is a sheet metal part or not\n        \nEnd Sub\n')),(0,s.kt)("h2",{id:"notes-and-limitations"},"Notes And Limitations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Only single cut-list files are supported (error is thrown if more than one cut list is available)"),(0,s.kt)("li",{parentName:"ul"},"Macro will set ",(0,s.kt)("strong",{parentName:"li"},"Create Cut List Automatically")," and ",(0,s.kt)("strong",{parentName:"li"},"Updated Automatically")," options on the cut-list folders"),(0,s.kt)("li",{parentName:"ul"},"Only part documents are supported"),(0,s.kt)("li",{parentName:"ul"},"Cut-list custom properties are linked by expressions and cut-list name. If cut-list is renamed property will not be updated and it will be required to rerun the macro. However should the cut-list keep the original name all properties will be dynamically updated without the need to rerun the macro.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nDim Map As Collection\n\nSub Init(Optional dummy As Variant = Empty)\n    \n    Set Map = New Collection\n    \n    Map.Add CreateMapValue("Length", "Bounding Box Length", """D1@Boss-Extrude1""")\n    Map.Add CreateMapValue("Mass", "Mass", """SW-Mass""")\n    Map.Add CreateMapValue("Surface Area", "", """SW-SurfaceArea""")\n        \nEnd Sub\n\nFunction CreateMapValue(targetPrpName As String, srcCutListPrpName As String, Optional fallbackValue As String = "") As Variant\n    \n    CreateMapValue = Array(targetPrpName, srcCutListPrpName, fallbackValue)\n    \nEnd Function\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.ModelDoc2\n    \n    Set swPart = swApp.ActiveDoc\n    \n    If swPart Is Nothing Then\n        Err.Raise vbError, "", "Open part document"\n    End If\n    \n    If swPart.GetType() <> swDocumentTypes_e.swDocPART Then\n        Err.Raise vbError, "", "Active document is not a part"\n    End If\n    \n    Init\n    \n    Dim vCutLists As Variant\n    vCutLists = GetCutLists(swPart)\n    \n    Dim swCutListCustomPrpMgr As SldWorks.CustomPropertyManager\n    \n    If Not IsEmpty(vCutLists) Then\n        \n        If UBound(vCutLists) > 0 Then\n            Err.Raise vbError, "", "Only single cut list item is supported"\n        End If\n        \n        Dim swCutList As SldWorks.Feature\n        \n        Set swCutList = vCutLists(0)\n        \n        Dim swCutListFolder As SldWorks.BodyFolder\n        Set swCutListFolder = swCutList.GetSpecificFeature2\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = swCutListFolder.GetBodies()(0)\n        \n        If False <> swBody.IsSheetMetal() Then\n            Set swCutListCustomPrpMgr = swCutList.CustomPropertyManager\n        End If\n        \n    End If\n    \n    Dim swTargetCustPrpMgr As SldWorks.CustomPropertyManager\n    Set swTargetCustPrpMgr = swPart.Extension.CustomPropertyManager("")\n    \n    Dim i As Integer\n    \n    For i = 1 To Map.Count\n    \n        Dim targetPrpName As String\n        Dim srcCutListPrpName As String\n        Dim fallbackValue As String\n        \n        targetPrpName = CStr(Map.item(i)(0))\n        srcCutListPrpName = CStr(Map.item(i)(1))\n        fallbackValue = CStr(Map.item(i)(2))\n        \n        CopyProperty swCutListCustomPrpMgr, swTargetCustPrpMgr, targetPrpName, srcCutListPrpName, fallbackValue\n    Next\n    \nEnd Sub\n\nFunction GetCutLists(model As SldWorks.ModelDoc2) As Variant\n\n    Dim swFeat As SldWorks.Feature\n    \n    Dim swCutLists() As SldWorks.Feature\n    \n    Set swFeat = model.FirstFeature\n    \n    While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2 <> "HistoryFolder" Then\n        \n            ProcessFeature swFeat, swCutLists\n            \n            TraverseSubFeatures swFeat, swCutLists\n        \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \n    If (Not swCutLists) = -1 Then\n        GetCutLists = Empty\n    Else\n        GetCutLists = swCutLists\n    End If\n    \nEnd Function\n\nSub TraverseSubFeatures(parentFeat As SldWorks.Feature, cutLists() As SldWorks.Feature)\n    \n    Dim swChildFeat As SldWorks.Feature\n    Set swChildFeat = parentFeat.GetFirstSubFeature\n    \n    While Not swChildFeat Is Nothing\n        ProcessFeature swChildFeat, cutLists\n        Set swChildFeat = swChildFeat.GetNextSubFeature()\n    Wend\n    \nEnd Sub\n\nSub ProcessFeature(feat As SldWorks.Feature, cutLists() As SldWorks.Feature)\n    \n    If feat.GetTypeName2() = "SolidBodyFolder" Then\n        \n        Dim swBodyFolder As SldWorks.BodyFolder\n        Set swBodyFolder = feat.GetSpecificFeature2\n        \n        swBodyFolder.SetAutomaticCutList True\n        swBodyFolder.SetAutomaticUpdate True\n        swBodyFolder.UpdateCutList\n        \n    ElseIf feat.GetTypeName2() = "CutListFolder" Then\n        \n        If Not Contains(cutLists, feat) Then\n            If (Not cutLists) = -1 Then\n                ReDim cutLists(0)\n            Else\n                ReDim Preserve cutLists(UBound(cutLists) + 1)\n            End If\n            \n            Set cutLists(UBound(cutLists)) = feat\n        End If\n        \n    End If\n    \nEnd Sub\n\nFunction Contains(arr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(arr)\n        If arr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\nSub CopyProperty(srcPrpMgr As SldWorks.CustomPropertyManager, targPrpMgr As SldWorks.CustomPropertyManager, targetPrpName As String, srcCutListPrpName As String, fallbackValue As String)\n\n    Dim prpVal As String\n    \n    If Not srcPrpMgr Is Nothing And srcCutListPrpName <> "" Then\n    \n        Dim prpResVal As String\n                    \n        srcPrpMgr.Get5 srcCutListPrpName, False, prpVal, prpResVal, False\n    Else\n        prpVal = fallbackValue\n    End If\n    \n    targPrpMgr.Add2 targetPrpName, swCustomInfoType_e.swCustomInfoText, prpVal\n    targPrpMgr.Set targetPrpName, prpVal\n    \nEnd Sub\n')))}d.isMDXComponent=!0},18852:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linked-sheet-metal-cut-list-properties-eadf814fe0ebf7805b166d8ac694f63b.png"}}]);