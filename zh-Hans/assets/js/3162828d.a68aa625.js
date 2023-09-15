"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[29584],{3905:(n,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>c});var t=o(67294);function s(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function r(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function i(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){s(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function a(n,e){if(null==n)return{};var o,t,s=function(n,e){if(null==n)return{};var o,t,s={},r=Object.keys(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||(s[o]=n[o]);return s}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(s[o]=n[o])}return s}var m=t.createContext({}),l=function(n){var e=t.useContext(m),o=e;return n&&(o="function"==typeof n?n(e):i(i({},e),n)),o},p=function(n){var e=l(n.components);return t.createElement(m.Provider,{value:e},n.children)},d="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var o=n.components,s=n.mdxType,r=n.originalType,m=n.parentName,p=a(n,["components","mdxType","originalType","parentName"]),d=l(o),f=s,c=d["".concat(m,".").concat(f)]||d[f]||u[f]||r;return o?t.createElement(c,i(i({ref:e},p),{},{components:o})):t.createElement(c,i({ref:e},p))}));function c(n,e){var o=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var r=o.length,i=new Array(r);i[0]=f;var a={};for(var m in e)hasOwnProperty.call(e,m)&&(a[m]=e[m]);a.originalType=n,a[d]="string"==typeof n?n:s,i[1]=a;for(var l=2;l<r;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}f.displayName="MDXCreateElement"},83404:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=o(87462),s=(o(67294),o(3905));const r={layout:"sw-tool",title:"\u5c06SOLIDWORKS\u88c5\u914d\u4e2d\u7684\u7ec4\u4ef6\u6570\u91cf\u5199\u5165\u81ea\u5b9a\u4e49\u5c5e\u6027",image:"bom-quantity.svg",labels:["\u6570\u91cf","\u7ec4\u4ef6"],group:"\u88c5\u914d"},i=void 0,a={unversionedId:"codestack/solidworks-api/document/assembly/components/write-quantities/index",id:"codestack/solidworks-api/document/assembly/components/write-quantities/index",title:"\u5c06SOLIDWORKS\u88c5\u914d\u4e2d\u7684\u7ec4\u4ef6\u6570\u91cf\u5199\u5165\u81ea\u5b9a\u4e49\u5c5e\u6027",description:"\u8fd9\u4e2aVBA\u5b8f\u8ba1\u7b97SOLIDWORKS\u88c5\u914d\u4e2d\u6bcf\u4e2a\u7ec4\u4ef6\u7684\u603b\u6570\u91cf\uff0c\u5e76\u5c06\u5176\u5199\u5165\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e2d\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/assembly/components/write-quantities/index.md",sourceDirName:"codestack/solidworks-api/document/assembly/components/write-quantities",slug:"/codestack/solidworks-api/document/assembly/components/write-quantities/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/write-quantities/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/assembly/components/write-quantities/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u5c06SOLIDWORKS\u88c5\u914d\u4e2d\u7684\u7ec4\u4ef6\u6570\u91cf\u5199\u5165\u81ea\u5b9a\u4e49\u5c5e\u6027",image:"bom-quantity.svg",labels:["\u6570\u91cf","\u7ec4\u4ef6"],group:"\u88c5\u914d"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u67e5\u627e\u6240\u9009\u7ec4\u4ef6\u7684\u4f7f\u7528\u88c5\u914d\u4f53",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/where-used/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u7f16\u5199\u7684SOLIDWORKS VBA\u5b8f\u6765\u7ec4\u6210\u5e73\u9762BOM\u8868",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/compose-flat-bom/"}},m={},l=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],p={toc:l},d="wrapper";function u(n){let{components:e,...o}=n;return(0,s.kt)(d,(0,t.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u8ba1\u7b97SOLIDWORKS\u88c5\u914d\u4e2d\u6bcf\u4e2a\u7ec4\u4ef6\u7684\u603b\u6570\u91cf\uff0c\u5e76\u5c06\u5176\u5199\u5165\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e2d\u3002"),(0,s.kt)("p",null,"\u8fd9\u4e2a\u5b8f\u53ef\u4ee5\u4e0e",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/sheet-metal/export-all-flat-patterns/"},"\u4ece\u96f6\u4ef6\u6216\u88c5\u914d\u7ec4\u4ef6\u5bfc\u51fa\u5e73\u5c55\u56fe\u6848"),"\u548c",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/import-export/export-multi-formats/"},"\u5bfc\u51fa\u5230\u591a\u79cd\u683c\u5f0f"),"\u5b8f\u4e00\u8d77\u4f7f\u7528\u3002"),(0,s.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,s.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u66f4\u6539\u5b8f\u5f00\u5934\u7684\u5e38\u91cf\u53c2\u6570\u6765\u914d\u7f6e\u5b8f\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const PRP_NAME As String = \"Qty\" '\u8981\u5199\u5165\u6570\u91cf\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u7684\u540d\u79f0\nConst MERGE_CONFIGURATIONS As Boolean = False '\u5982\u679c\u8981\u5c06\u7ec4\u4ef6\u7684\u6240\u6709\u914d\u7f6e\u89c6\u4e3a\u5355\u4e2a\u9879\u76ee\uff0c\u5219\u4e3aTrue\nConst INCLUDE_BOM_EXCLUDED As Boolean = False '\u5982\u679c\u8981\u6839\u636e\u7279\u5f81\u7ba1\u7406\u5668\u6811\u800c\u4e0d\u662fBOM\u5199\u5165\u6570\u91cf\uff0c\u5219\u4e3aTrue\n")),(0,s.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5b8f\u5c06\u8003\u8651\u7528\u6237\u901a\u8fc7\u81ea\u5b9a\u4e49\u5c5e\u6027\uff08UNIT_OF_MEASURE\uff09\u8bbe\u7f6e\u7684\u6570\u91cf"),(0,s.kt)("li",{parentName:"ul"},"\u5b8f\u5c06\u8003\u8651\u5b50\u7ec4\u4ef6\u7684\u914d\u7f6eBOM\u9009\u9879\uff08\u663e\u793a\u3001\u63a8\u5e7f\u6216\u9690\u85cf\uff09"),(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c",(0,s.kt)("strong",{parentName:"li"},"MERGE_CONFIGURATIONS"),"\u8bbe\u7f6e\u4e3afalse\uff0c\u5219\u5b8f\u5c06\u6570\u91cf\u5c5e\u6027\u5199\u5165\u914d\u7f6e\uff1b\u5426\u5219\u5199\u5165\u6587\u6863\u5c5e\u6027"),(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u73b0\u6709\u7684\u6570\u91cf\u4e0d\u5728\u5f53\u524d\u8303\u56f4\u5185\uff08\u4f8b\u5982\uff0c\u5982\u679c\u7ec4\u4ef6\u4eceBOM\u4e2d\u6392\u9664\uff09\uff0c\u5b8f\u5c06\u4e0d\u4f1a\u6e05\u9664\u73b0\u6709\u7684\u6570\u91cf"),(0,s.kt)("li",{parentName:"ul"},"\u5b8f\u5c06\u65e0\u6cd5\u5904\u7406\u672a\u52a0\u8f7d\u7684\u7ec4\u4ef6\uff08\u4f8b\u5982\u8f7b\u91cf\u7ea7\u7ec4\u4ef6\uff09"),(0,s.kt)("li",{parentName:"ul"},"\u5b8f\u5c06\u5c1d\u8bd5\u89e3\u6790\u6240\u6709\u8f7b\u91cf\u7ea7\u7ec4\u4ef6")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Type BomPosition\n    model As SldWorks.ModelDoc2\n    Configuration As String\n    Quantity As Double\nEnd Type\n\nConst PRP_NAME As String = "Qty"\nConst MERGE_CONFIGURATIONS As Boolean = False\nConst INCLUDE_BOM_EXCLUDED As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \ntry_:\n    On Error GoTo catch_\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If swAssy Is Nothing Then\n        Err.Raise vbError, "", "\u672a\u6253\u5f00\u88c5\u914d"\n    End If\n    \n    swAssy.ResolveAllLightWeightComponents True\n\n    Dim swConf As SldWorks.Configuration\n    Set swConf = swAssy.ConfigurationManager.ActiveConfiguration\n\n    Dim bom() As BomPosition\n    ComposeFlatBom swConf.GetRootComponent3(True), bom\n        \n    If (Not bom) <> -1 Then\n        WriteBomQuantities bom\n    End If\n    \n    GoTo finally_\ncatch_:\n    MsgBox Err.Description, vbCritical, "\u8ba1\u7b97\u7ec4\u4ef6\u6570\u91cf"\nfinally_:\n    \nEnd Sub\n\nSub ComposeFlatBom(swParentComp As SldWorks.Component2, bom() As BomPosition)\n        \n    Dim vComps As Variant\n    vComps = swParentComp.GetChildren\n    \n    If Not IsEmpty(vComps) Then\n    \n        Dim i As Integer\n        \n        For i = 0 To UBound(vComps)\n            \n            Dim swComp As SldWorks.Component2\n            Set swComp = vComps(i)\n            \n            If swComp.GetSuppression() <> swComponentSuppressionState_e.swComponentSuppressed And (False = swComp.ExcludeFromBOM Or INCLUDE_BOM_EXCLUDED) Then\n                \n                Dim swRefModel As SldWorks.ModelDoc2\n                Set swRefModel = swComp.GetModelDoc2()\n                \n                If swRefModel Is Nothing Then\n                    Err.Raise vbError, "", swComp.GetPathName() & " \u6a21\u578b\u672a\u52a0\u8f7d"\n                End If\n                \n                Dim swRefConf As SldWorks.Configuration\n                Set swRefConf = swRefModel.GetConfigurationByName(swComp.ReferencedConfiguration)\n                \n                Dim bomChildType As Integer\n                bomChildType = swRefConf.ChildComponentDisplayInBOM\n                \n                If bomChildType <> swChildComponentInBOMOption_e.swChildComponent_Promote Then\n                \n                    Dim bomPos As Integer\n                    bomPos = FindBomPosition(bom, swComp)\n                    \n                    If bomPos = -1 Then\n                        \n                        If (Not bom) = -1 Then\n                            ReDim bom(0)\n                        Else\n                            ReDim Preserve bom(UBound(bom) + 1)\n                        End If\n                                            \n                        bomPos = UBound(bom)\n        \n                        Dim refConfName As String\n            \n                        If MERGE_CONFIGURATIONS Then\n                            refConfName = ""\n                        Else\n                            refConfName = swComp.ReferencedConfiguration\n                        End If\n        \n                        Set bom(bomPos).model = swRefModel\n                        bom(bomPos).Configuration = refConfName\n                        bom(bomPos).Quantity = GetQuantity(swComp)\n                                            \n                    Else\n                        bom(bomPos).Quantity = bom(bomPos).Quantity + GetQuantity(swComp)\n                    End If\n                \n                End If\n                \n                If bomChildType <> swChildComponentInBOMOption_e.swChildComponent_Hide Then\n                    ComposeFlatBom swComp, bom\n                End If\n                \n            End If\n            \n        Next\n    \n    End If\n    \nEnd Sub\n\nFunction FindBomPosition(bom() As BomPosition, comp As SldWorks.Component2) As Integer\n        \n    FindBomPosition = -1\n    \n    Dim i As Integer\n    \n    If (Not bom) <> -1 Then\n        \n        Dim refConfName As String\n        \n        If MERGE_CONFIGURATIONS Then\n            refConfName = ""\n        Else\n            refConfName = comp.ReferencedConfiguration\n        End If\n        \n        For i = 0 To UBound(bom)\n            If LCase(bom(i).model.GetPathName()) = LCase(comp.GetPathName()) And LCase(bom(i).Configuration) = LCase(refConfName) Then\n                FindBomPosition = i\n                Exit Function\n            End If\n        Next\n    End If\n    \nEnd Function\n\nFunction GetQuantity(comp As SldWorks.Component2) As Double\n\nOn Error GoTo err_\n\n    Dim refModel As SldWorks.ModelDoc2\n    Set refModel = comp.GetModelDoc2\n    \n    Dim qtyPrpName As String\n    \n    qtyPrpName = GetPropertyValue(refModel, comp.ReferencedConfiguration, "UNIT_OF_MEASURE")\n    \n    If qtyPrpName <> "" Then\n        GetQuantity = CDbl(GetPropertyValue(refModel, comp.ReferencedConfiguration, qtyPrpName))\n    Else\n        GetQuantity = 1\n    End If\n    \n    Exit Function\n\nerr_:\n    Debug.Print "\u63d0\u53d6 " & comp.Name2 & " \u7684\u6570\u91cf\u5931\u8d25: " & Err.Description\n    GetQuantity = 1\n\nEnd Function\n\nFunction GetPropertyValue(model As SldWorks.ModelDoc2, conf As String, prpName As String) As String\n    \n    Dim confSpecPrpMgr As SldWorks.CustomPropertyManager\n    Dim genPrpMgr As SldWorks.CustomPropertyManager\n    \n    Set confSpecPrpMgr = model.Extension.CustomPropertyManager(conf)\n    Set genPrpMgr = model.Extension.CustomPropertyManager("")\n    \n    Dim prpResVal As String\n    \n    confSpecPrpMgr.Get3 prpName, False, "", prpResVal\n    \n    If prpResVal = "" Then\n        genPrpMgr.Get3 prpName, False, "", prpResVal\n    End If\n    \n    GetPropertyValue = prpResVal\n    \nEnd Function\n\nSub WriteBomQuantities(bom() As BomPosition)\n    \n    Dim i As Integer\n    \n    If (Not bom) <> -1 Then\n        \n        For i = 0 To UBound(bom)\n            \n            Dim refConfName As String\n            \n            Dim swRefModel As SldWorks.ModelDoc2\n            Set swRefModel = bom(i).model\n            \n            If MERGE_CONFIGURATIONS Then\n                refConfName = ""\n            Else\n                refConfName = bom(i).Configuration\n                \n                If swRefModel.GetBendState() <> swSMBendState_e.swSMBendStateNone Then\n                \n                    Dim swConf As SldWorks.Configuration\n                    Set swConf = swRefModel.GetConfigurationByName(refConfName)\n                    \n                    Dim vChildConfs As Variant\n                    vChildConfs = swConf.GetChildren()\n                    \n                    If Not IsEmpty(vChildConfs) Then\n                        Dim j As Integer\n                        \n                        For j = 0 To UBound(vChildConfs)\n                            \n                            Dim swChildConf As SldWorks.Configuration\n                            Set swChildConf = vChildConfs(j)\n                            \n                            If swChildConf.Type = swConfigurationType_e.swConfiguration_SheetMetal Then\n                                SetQuantity swRefModel, swChildConf.Name, bom(i).Quantity\n                            End If\n                            \n                        Next\n                        \n                    End If\n                    \n                End If\n                \n            End If\n            \n            SetQuantity swRefModel, refConfName, bom(i).Quantity\n            \n        Next\n    End If\n    \nEnd Sub\n\nSub SetQuantity(model As SldWorks.ModelDoc2, confName As String, qty As Double)\n    \n    Dim swCustPrpsMgr As SldWorks.CustomPropertyManager\n    Set swCustPrpsMgr = model.Extension.CustomPropertyManager(confName)\n    \n    swCustPrpsMgr.Add3 PRP_NAME, swCustomInfoType_e.swCustomInfoText, qty, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue\n    swCustPrpsMgr.Set2 PRP_NAME, qty\n    \nEnd Sub\n')))}u.isMDXComponent=!0}}]);