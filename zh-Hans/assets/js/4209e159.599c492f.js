"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[92589],{3905:(n,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>f});var t=o(67294);function s(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function r(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function i(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){s(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function a(n,e){if(null==n)return{};var o,t,s=function(n,e){if(null==n)return{};var o,t,s={},r=Object.keys(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||(s[o]=n[o]);return s}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(s[o]=n[o])}return s}var m=t.createContext({}),l=function(n){var e=t.useContext(m),o=e;return n&&(o="function"==typeof n?n(e):i(i({},e),n)),o},p=function(n){var e=l(n.components);return t.createElement(m.Provider,{value:e},n.children)},c="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var o=n.components,s=n.mdxType,r=n.originalType,m=n.parentName,p=a(n,["components","mdxType","originalType","parentName"]),c=l(o),d=s,f=c["".concat(m,".").concat(d)]||c[d]||u[d]||r;return o?t.createElement(f,i(i({ref:e},p),{},{components:o})):t.createElement(f,i({ref:e},p))}));function f(n,e){var o=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var r=o.length,i=new Array(r);i[0]=d;var a={};for(var m in e)hasOwnProperty.call(e,m)&&(a[m]=e[m]);a.originalType=n,a[c]="string"==typeof n?n:s,i[1]=a;for(var l=2;l<r;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},24657:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=o(87462),s=(o(67294),o(3905));const r={layout:"sw-tool",title:"Write component quantity in the SOLIDWORKS assembly to custom property",caption:"Write Component Quantity To Custom Property",description:"VBA macro which writes the total quantities of components in SOLIDWORKS assembly into custom property",image:"bom-quantity.svg",labels:["quantity","component"],group:"Assembly"},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/write-quantities/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/write-quantities/index",title:"Write component quantity in the SOLIDWORKS assembly to custom property",description:"VBA macro which writes the total quantities of components in SOLIDWORKS assembly into custom property",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/write-quantities/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/write-quantities",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/write-quantities/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/write-quantities/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/write-quantities/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Write component quantity in the SOLIDWORKS assembly to custom property",caption:"Write Component Quantity To Custom Property",description:"VBA macro which writes the total quantities of components in SOLIDWORKS assembly into custom property",image:"bom-quantity.svg",labels:["quantity","component"],group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"Find the where used assemblies of the selected component using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/where-used/"},next:{title:"Automating mates in assemblies using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/mates/"}},m={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Notes",id:"notes",level:2}],p={toc:l},c="wrapper";function u(n){let{components:e,...o}=n;return(0,s.kt)(c,(0,t.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This VBA macro calculates the total quantity of each component in the SOLIDWORKS assembly and writes it to the custom property."),(0,s.kt)("p",null,"This macro can be useful in conjunction with ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/sheet-metal/export-all-flat-patterns/"},"Export Flat Patterns From Part Or Assembly Components")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/import-export/export-multi-formats/"},"Export To Multiple Formats")," macros."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Macro can be configured by changing the constant parameters at the beginning of the macro as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const PRP_NAME As String = \"Qty\" 'Name of the custom property to write quantity to\nConst MERGE_CONFIGURATIONS As Boolean = False 'True to consider all configurations of the component as a single item\nConst INCLUDE_BOM_EXCLUDED As Boolean = False 'True to write quantities based on the Feature Manager Tree instead of BOM\n")),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Macro will consider the user assigned quantity set via custom property (UNIT_OF_MEASURE)"),(0,s.kt)("li",{parentName:"ul"},"Macro will consider configuration BOM options for children components (show, promote or hide)"),(0,s.kt)("li",{parentName:"ul"},"Macro will write the quantity property to configuration if ",(0,s.kt)("strong",{parentName:"li"},"MERGE_CONFIGURATIONS")," is set to false and to the document property otherwise"),(0,s.kt)("li",{parentName:"ul"},"Macro will not clear existing quantity if it is not in the current scope (for example if component is excluded from BOM)"),(0,s.kt)("li",{parentName:"ul"},"Macro will fail for the unloaded components (e.g. lightweight)"),(0,s.kt)("li",{parentName:"ul"},"Macro will attempt to resolve all lightweight components")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Type BomPosition\n    model As SldWorks.ModelDoc2\n    Configuration As String\n    Quantity As Double\nEnd Type\n\nConst PRP_NAME As String = "Qty"\nConst MERGE_CONFIGURATIONS As Boolean = False\nConst INCLUDE_BOM_EXCLUDED As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \ntry_:\n    On Error GoTo catch_\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If swAssy Is Nothing Then\n        Err.Raise vbError, "", "Assembly is not opened"\n    End If\n    \n    swAssy.ResolveAllLightWeightComponents True\n\n    Dim swConf As SldWorks.Configuration\n    Set swConf = swAssy.ConfigurationManager.ActiveConfiguration\n\n    Dim bom() As BomPosition\n    ComposeFlatBom swConf.GetRootComponent3(True), bom\n        \n    If (Not bom) <> -1 Then\n        WriteBomQuantities bom\n    End If\n    \n    GoTo finally_\ncatch_:\n    MsgBox Err.Description, vbCritical, "Count Components"\nfinally_:\n    \nEnd Sub\n\nSub ComposeFlatBom(swParentComp As SldWorks.Component2, bom() As BomPosition)\n        \n    Dim vComps As Variant\n    vComps = swParentComp.GetChildren\n    \n    If Not IsEmpty(vComps) Then\n    \n        Dim i As Integer\n        \n        For i = 0 To UBound(vComps)\n            \n            Dim swComp As SldWorks.Component2\n            Set swComp = vComps(i)\n            \n            If swComp.GetSuppression() <> swComponentSuppressionState_e.swComponentSuppressed And (False = swComp.ExcludeFromBOM Or INCLUDE_BOM_EXCLUDED) Then\n                \n                Dim swRefModel As SldWorks.ModelDoc2\n                Set swRefModel = swComp.GetModelDoc2()\n                \n                If swRefModel Is Nothing Then\n                    Err.Raise vbError, "", swComp.GetPathName() & " model is not loaded"\n                End If\n                \n                Dim swRefConf As SldWorks.Configuration\n                Set swRefConf = swRefModel.GetConfigurationByName(swComp.ReferencedConfiguration)\n                \n                Dim bomChildType As Integer\n                bomChildType = swRefConf.ChildComponentDisplayInBOM\n                \n                If bomChildType <> swChildComponentInBOMOption_e.swChildComponent_Promote Then\n                \n                    Dim bomPos As Integer\n                    bomPos = FindBomPosition(bom, swComp)\n                    \n                    If bomPos = -1 Then\n                        \n                        If (Not bom) = -1 Then\n                            ReDim bom(0)\n                        Else\n                            ReDim Preserve bom(UBound(bom) + 1)\n                        End If\n                                            \n                        bomPos = UBound(bom)\n        \n                        Dim refConfName As String\n            \n                        If MERGE_CONFIGURATIONS Then\n                            refConfName = ""\n                        Else\n                            refConfName = swComp.ReferencedConfiguration\n                        End If\n        \n                        Set bom(bomPos).model = swRefModel\n                        bom(bomPos).Configuration = refConfName\n                        bom(bomPos).Quantity = GetQuantity(swComp)\n                                            \n                    Else\n                        bom(bomPos).Quantity = bom(bomPos).Quantity + GetQuantity(swComp)\n                    End If\n                \n                End If\n                \n                If bomChildType <> swChildComponentInBOMOption_e.swChildComponent_Hide Then\n                    ComposeFlatBom swComp, bom\n                End If\n                \n            End If\n            \n        Next\n    \n    End If\n    \nEnd Sub\n\nFunction FindBomPosition(bom() As BomPosition, comp As SldWorks.Component2) As Integer\n        \n    FindBomPosition = -1\n    \n    Dim i As Integer\n    \n    If (Not bom) <> -1 Then\n        \n        Dim refConfName As String\n        \n        If MERGE_CONFIGURATIONS Then\n            refConfName = ""\n        Else\n            refConfName = comp.ReferencedConfiguration\n        End If\n        \n        For i = 0 To UBound(bom)\n            If LCase(bom(i).model.GetPathName()) = LCase(comp.GetPathName()) And LCase(bom(i).Configuration) = LCase(refConfName) Then\n                FindBomPosition = i\n                Exit Function\n            End If\n        Next\n    End If\n    \nEnd Function\n\nFunction GetQuantity(comp As SldWorks.Component2) As Double\n\nOn Error GoTo err_\n\n    Dim refModel As SldWorks.ModelDoc2\n    Set refModel = comp.GetModelDoc2\n    \n    Dim qtyPrpName As String\n    \n    qtyPrpName = GetPropertyValue(refModel, comp.ReferencedConfiguration, "UNIT_OF_MEASURE")\n    \n    If qtyPrpName <> "" Then\n        GetQuantity = CDbl(GetPropertyValue(refModel, comp.ReferencedConfiguration, qtyPrpName))\n    Else\n        GetQuantity = 1\n    End If\n    \n    Exit Function\n\nerr_:\n    Debug.Print "Failed to extract quantity of " & comp.Name2 & ": " & Err.Description\n    GetQuantity = 1\n\nEnd Function\n\nFunction GetPropertyValue(model As SldWorks.ModelDoc2, conf As String, prpName As String) As String\n    \n    Dim confSpecPrpMgr As SldWorks.CustomPropertyManager\n    Dim genPrpMgr As SldWorks.CustomPropertyManager\n    \n    Set confSpecPrpMgr = model.Extension.CustomPropertyManager(conf)\n    Set genPrpMgr = model.Extension.CustomPropertyManager("")\n    \n    Dim prpResVal As String\n    \n    confSpecPrpMgr.Get3 prpName, False, "", prpResVal\n    \n    If prpResVal = "" Then\n        genPrpMgr.Get3 prpName, False, "", prpResVal\n    End If\n    \n    GetPropertyValue = prpResVal\n    \nEnd Function\n\nSub WriteBomQuantities(bom() As BomPosition)\n    \n    Dim i As Integer\n    \n    If (Not bom) <> -1 Then\n        \n        For i = 0 To UBound(bom)\n            \n            Dim refConfName As String\n            \n            Dim swRefModel As SldWorks.ModelDoc2\n            Set swRefModel = bom(i).model\n            \n            If MERGE_CONFIGURATIONS Then\n                refConfName = ""\n            Else\n                refConfName = bom(i).Configuration\n                \n                If swRefModel.GetBendState() <> swSMBendState_e.swSMBendStateNone Then\n                \n                    Dim swConf As SldWorks.Configuration\n                    Set swConf = swRefModel.GetConfigurationByName(refConfName)\n                    \n                    Dim vChildConfs As Variant\n                    vChildConfs = swConf.GetChildren()\n                    \n                    If Not IsEmpty(vChildConfs) Then\n                        Dim j As Integer\n                        \n                        For j = 0 To UBound(vChildConfs)\n                            \n                            Dim swChildConf As SldWorks.Configuration\n                            Set swChildConf = vChildConfs(j)\n                            \n                            If swChildConf.Type = swConfigurationType_e.swConfiguration_SheetMetal Then\n                                SetQuantity swRefModel, swChildConf.Name, bom(i).Quantity\n                            End If\n                            \n                        Next\n                        \n                    End If\n                    \n                End If\n                \n            End If\n            \n            SetQuantity swRefModel, refConfName, bom(i).Quantity\n            \n        Next\n    End If\n    \nEnd Sub\n\nSub SetQuantity(model As SldWorks.ModelDoc2, confName As String, qty As Double)\n    \n    Dim swCustPrpsMgr As SldWorks.CustomPropertyManager\n    Set swCustPrpsMgr = model.Extension.CustomPropertyManager(confName)\n    \n    swCustPrpsMgr.Add3 PRP_NAME, swCustomInfoType_e.swCustomInfoText, qty, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue\n    swCustPrpsMgr.Set2 PRP_NAME, qty\n    \nEnd Sub\n')))}u.isMDXComponent=!0}}]);