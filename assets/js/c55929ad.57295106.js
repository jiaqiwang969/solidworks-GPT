"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[90704],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>A});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},l=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=p(a),l=o,A=c["".concat(d,".").concat(l)]||c[l]||u[l]||r;return a?n.createElement(A,s(s({ref:e},m),{},{components:a})):n.createElement(A,s({ref:e},m))}));function A(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,s=new Array(r);s[0]=l;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[c]="string"==typeof t?t:o,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}l.displayName="MDXCreateElement"},45220:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={layout:"sw-tool",caption:"Auto Date Custom Property",title:"Create a dynamic auto updatable date custom property in SOLIDWORKS file",description:"VBA macro which creates a date custom property in SOLIDWORKS file in the specified format with an option to automatically update",image:"auto-date-custom-property.svg",group:"Custom Properties"},s=void 0,i={unversionedId:"codestack/solidworks-api/data-storage/custom-properties/auto-date/index",id:"codestack/solidworks-api/data-storage/custom-properties/auto-date/index",title:"Create a dynamic auto updatable date custom property in SOLIDWORKS file",description:"VBA macro which creates a date custom property in SOLIDWORKS file in the specified format with an option to automatically update",source:"@site/docs/codestack/solidworks-api/data-storage/custom-properties/auto-date/index.md",sourceDirName:"codestack/solidworks-api/data-storage/custom-properties/auto-date",slug:"/codestack/solidworks-api/data-storage/custom-properties/auto-date/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/data-storage/custom-properties/auto-date/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/data-storage/custom-properties/auto-date/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",caption:"Auto Date Custom Property",title:"Create a dynamic auto updatable date custom property in SOLIDWORKS file",description:"VBA macro which creates a date custom property in SOLIDWORKS file in the specified format with an option to automatically update",image:"auto-date-custom-property.svg",group:"Custom Properties"},sidebar:"tutorialSidebar",previous:{title:"Managing Custom Properties using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/data-storage/custom-properties/"},next:{title:"Copy SOLIDWORKS file specific custom properties to configuration",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/data-storage/custom-properties/copy-file-specific-to-configuration/"}},d={},p=[{value:"CAD+",id:"cad",level:2}],m={toc:p},c="wrapper";function u(t){let{components:e,...a}=t;return(0,o.kt)(c,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This VBA macro allows to insert custom property ",(0,o.kt)("strong",{parentName:"p"},"Date")," into file-specific custom property. User has an option to specify the format of the date. Refer ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings"},"Date and time format string")," for more information about supported formats."),(0,o.kt)("h2",{id:"cad"},"CAD+"),(0,o.kt)("p",null,"This macro is compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/"},"Toolbar+")," and ",(0,o.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/batch/"},"Batch+")," tools so the buttons can be added to toolbar and assigned with shortcut for easier access or run in the batch mode."),(0,o.kt)("p",null,"In order to enable ",(0,o.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/configuration/arguments/"},"macro arguments")," set the ",(0,o.kt)("strong",{parentName:"p"},"ARGS")," constant to true and pass the format as an argument"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"#Const ARGS = True\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'#Const ARGS = False \'True to use arguments from Toolbar+ or Batch+ instead of the constant\n\nConst DATE_PRP_NAME As String = "Date"\n\nSub main()\n\n    Dim swApp As SldWorks.SldWorks\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n        \ntry_:\n    On Error GoTo catch_\n    \n    If Not swModel Is Nothing Then\n        \n        Dim dateFormat As String\n        \n        #If ARGS Then\n                \n            Dim macroRunner As Object\n            Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")\n            \n            Dim param As Object\n            Set param = macroRunner.PopParameter(swApp)\n            \n            Dim vArgs As Variant\n            vArgs = param.Get("Args")\n            \n            dateFormat = CStr(vArgs(0))\n        \n        #Else\n            dateFormat = GetDateFormat()\n        #End If\n    \n        If dateFormat <> "" Then\n            SetDateCustomProperty swModel, dateFormat\n        End If\n    Else\n        Err.Raise vbError, "", "Please open model"\n    End If\n    \n    GoTo finally_\ncatch_:\n    MsgBox Err.Description, vbCritical\nfinally_:\n\nEnd Sub\n\nFunction GetDateFormat(Optional defaultDateFormat As String = "dd/mm/yyyy") As String\n    GetDateFormat = InputBox("Specify the format for the Date custom property", "Date Custom Property", defaultDateFormat)\nEnd Function\n\nSub SetDateCustomProperty(model As SldWorks.ModelDoc2, dateFormat As String)\n    \n    Dim dateVal As String\n    dateVal = Format(Now, dateFormat)\n    \n    Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n    \n    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)\n    \n    If swCustPrpMgr.Add3(DATE_PRP_NAME, swCustomInfoType_e.swCustomInfoText, dateVal, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue) <> swCustomInfoAddResult_e.swCustomInfoAddResult_AddedOrChanged Then\n        Err.Raise vbError, "", "Failed to add date property"\n    End If\n    \nEnd Sub\n')),(0,o.kt)("p",null,"This macro can also be embedded into the model to automatically update the date on each rebuild."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const BASE_NAME As String = "AutoDateCustomProperty"\nConst EMBED As Boolean = False\n\nConst DATE_PRP_NAME As String = "Date"\n\nConst PARAM_DATE_FORMAT As String = "DateFormat"\n\nSub main()\n\n    Dim swApp As SldWorks.SldWorks\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n                \n        Dim dateFormat As String\n        dateFormat = GetDateFormat()\n        \n        If dateFormat <> "" Then\n                \n            Dim curMacroPath As String\n            curMacroPath = swApp.GetCurrentMacroPathName\n            Dim vMethods(8) As String\n            Dim moduleName As String\n            \n            GetMacroEntryPoint swApp, curMacroPath, moduleName, ""\n            \n            vMethods(0) = curMacroPath: vMethods(1) = moduleName: vMethods(2) = "swmRebuild"\n            vMethods(3) = curMacroPath: vMethods(4) = moduleName: vMethods(5) = "swmEditDefinition"\n            vMethods(6) = curMacroPath: vMethods(7) = moduleName: vMethods(8) = "swmSecurity"\n            \n            Dim vParamNames(0) As String\n            vParamNames(0) = PARAM_DATE_FORMAT\n    \n            Dim vParamTypes(0) As Long\n            vParamTypes(0) = swMacroFeatureParamType_e.swMacroFeatureParamTypeString\n    \n            Dim vParamValues(0) As String\n    \n            vParamValues(0) = dateFormat\n            \n            Dim opts As swMacroFeatureOptions_e\n            opts = swMacroFeatureOptions_e.swMacroFeatureAlwaysAtEnd\n            \n            If EMBED Then\n                opts = opts + swMacroFeatureOptions_e.swMacroFeatureEmbedMacroFile\n            End If\n            \n            Dim swFeat As SldWorks.Feature\n            Set swFeat = swModel.FeatureManager.InsertMacroFeature3(BASE_NAME, "", vMethods, _\n                vParamNames, vParamTypes, vParamValues, Empty, Empty, Empty, _\n                Empty, opts)\n            \n            If swFeat Is Nothing Then\n                MsgBox "Failed to create auto date feature"\n            End If\n            \n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nSub GetMacroEntryPoint(app As SldWorks.SldWorks, macroPath As String, ByRef moduleName As String, ByRef procName As String)\n        \n    Dim vMethods As Variant\n    vMethods = app.GetMacroMethods(macroPath, swMacroMethods_e.swMethodsWithoutArguments)\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(vMethods) Then\n    \n        For i = 0 To UBound(vMethods)\n            Dim vData As Variant\n            vData = Split(vMethods(i), ".")\n            \n            If i = 0 Or LCase(vData(1)) = "main" Then\n                moduleName = vData(0)\n                procName = vData(1)\n            End If\n        Next\n        \n    End If\n    \nEnd Sub\n\nFunction GetDateFormat(Optional defaultDateFormat As String = "dd/mm/yyyy") As String\n    GetDateFormat = InputBox("Specify the format for the Date custom property", "Date Custom Property", defaultDateFormat)\nEnd Function\n\nFunction swmRebuild(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n\n    Dim swApp As SldWorks.SldWorks\n    Dim swModel As SldWorks.ModelDoc2\n    Dim swFeat As SldWorks.Feature\n    \n    Set swApp = varApp\n    Set swModel = varDoc\n    Set swFeat = varFeat\n    \n    Dim swMacroFeat As SldWorks.MacroFeatureData\n    Set swMacroFeat = swFeat.GetDefinition()\n    \n    Dim dateFormat As String\n    \n    swMacroFeat.GetStringByName PARAM_DATE_FORMAT, dateFormat\n        \ntry_:\n    On Error GoTo catch_\n    \n    SetDateCustomProperty swModel, dateFormat\n    \n    GoTo finally_\ncatch_:\n    swmRebuild = Err.Description\nfinally_:\n        \nEnd Function\n\nSub SetDateCustomProperty(model As SldWorks.ModelDoc2, dateFormat As String)\n    \n    Dim dateVal As String\n    dateVal = Format(Now, dateFormat)\n    \n    Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n    \n    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)\n    \n    If swCustPrpMgr.Add3(DATE_PRP_NAME, swCustomInfoType_e.swCustomInfoText, dateVal, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue) <> swCustomInfoAddResult_e.swCustomInfoAddResult_AddedOrChanged Then\n        Err.Raise vbError, "", "Failed to add date property"\n    End If\n    \nEnd Sub\n\nFunction swmEditDefinition(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n\n    Dim swApp As SldWorks.SldWorks\n    Set swApp = varApp\n\n    Dim swModel As SldWorks.ModelDoc2\n    Dim swFeat As SldWorks.Feature\n    \n    Set swModel = varDoc\n    Set swFeat = varFeat\n    \n    Dim swMacroFeat As SldWorks.MacroFeatureData\n    Set swMacroFeat = swFeat.GetDefinition()\n        \n    Dim dateFormat As String\n    swMacroFeat.GetStringByName PARAM_DATE_FORMAT, dateFormat\n\n    dateFormat = GetDateFormat(dateFormat)\n        \n    If dateFormat <> "" Then\n        \n        swMacroFeat.AccessSelections swModel, Nothing\n        swMacroFeat.SetStringByName PARAM_DATE_FORMAT, dateFormat\n        \n        swFeat.ModifyDefinition swMacroFeat, swModel, Nothing\n        \n    End If\n    \n    swmEditDefinition = True\n    \nEnd Function\n\nFunction swmSecurity(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmSecurity = SwConst.swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityByDefault\nEnd Function\n')))}u.isMDXComponent=!0}}]);