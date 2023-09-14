"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[11910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=s.createContext({}),l=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?s.createElement(f,i(i({ref:t},p),{},{components:n})):s.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(87462),r=(n(67294),n(3905));const o={title:"Read custom properties from file, configuration and cut-list elements using SOLIDWORKS API",caption:"Read All Properties",description:"VBA example to extract all custom properties from various sources of the active document (general, configuration specific and cut-list) using SOLIDWORKS API",image:"custom-properties.png",labels:["properties","cut-list","configuration"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-all-properties/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-all-properties/index",title:"Read custom properties from file, configuration and cut-list elements using SOLIDWORKS API",description:"VBA example to extract all custom properties from various sources of the active document (general, configuration specific and cut-list) using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-all-properties/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-all-properties",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-all-properties/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-all-properties/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-all-properties/index.md",tags:[],version:"current",frontMatter:{title:"Read custom properties from file, configuration and cut-list elements using SOLIDWORKS API",caption:"Read All Properties",description:"VBA example to extract all custom properties from various sources of the active document (general, configuration specific and cut-list) using SOLIDWORKS API",image:"custom-properties.png",labels:["properties","cut-list","configuration"]},sidebar:"tutorialSidebar",previous:{title:"Link SOLIDWORKS custom properties from text file",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/link-to-file/"},next:{title:"Read configuration specific cut-list property from the selected component using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/read-component-cutlist/"}},u={},l=[],p={toc:l},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,s.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom properties of the file",src:n(9146).Z,width:"1026",height:"592"}),"{ width=550 }"),(0,r.kt)("p",null,"This VBA macro example demonstrates how to read all properties from all sources of custom properties using SOLIDWORKS API. This includes file (general), configuration specific and cut-list properties."),(0,r.kt)("p",null,"Result is output to the immediate widow of SOLIDWORKS and contains information about source of the property, name, value, expression, status and linked state."),(0,r.kt)("p",null,"Second parameter of ",(0,r.kt)("em",{parentName:"p"},"PrintConfigurationSpecificProperties")," allows to specify if properties need to be read from cache or need to be resolved. This option is important when it is required to resolve the expressions which will result in different values in different configurations, e.g. mass or volume properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"PrintConfigurationSpecificProperties swModel, False 'resolve properties for the configuration\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'General Properties\n    Property: Description\n    Value/Text Expression: Test Part\n    Evaluated Value: Test Part\n    Was Resolved: True\n    Is Linked: False\n    Status: Resolved Value\n\nConfiguration Specific Properties\n    A\n        Property: Weight\n        Value/Text Expression: "SW-Mass@@A@CS-01.SLDPRT"\n        Evaluated Value: 70.20\n        Was Resolved: True\n        Is Linked: False\n        Status: Cached Value\n\nCut List Properties\n    -No Cut Lists-\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        PrintGeneralProperties swModel\n        PrintConfigurationSpecificProperties swModel, True\n        PrintCutListProperties swModel\n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nSub PrintGeneralProperties(model As SldWorks.ModelDoc2)\n    \n    Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n    Set swCustPrpMgr = model.Extension.CustomPropertyManager("")\n    \n    Debug.Print "General Properties"\n    \n    PrintProperties swCustPrpMgr, False, "    "\n    \nEnd Sub\n\nSub PrintConfigurationSpecificProperties(model As SldWorks.ModelDoc2, cached As Boolean)\n    \n    Dim vNames As Variant\n    vNames = model.GetConfigurationNames()\n    \n    Dim i As Integer\n    \n    Debug.Print "Configuration Specific Properties"\n    \n    For i = 0 To UBound(vNames)\n        \n        Dim confName As String\n        confName = vNames(i)\n        \n        Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n        Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)\n        \n        Debug.Print "    " & confName\n        PrintProperties swCustPrpMgr, cached, "        "\n        \n    Next\n    \nEnd Sub\n\nSub PrintCutListProperties(model As SldWorks.ModelDoc2)\n\n    Dim vCutLists As Variant\n    vCutLists = GetCutLists(model)\n    \n    Debug.Print "Cut List Properties"\n    \n    If Not IsEmpty(vCutLists) Then\n        Dim i As Integer\n        \n        For i = 0 To UBound(vCutLists)\n            Dim swCutListFeat As SldWorks.Feature\n            Set swCutListFeat = vCutLists(i)\n            Debug.Print "    " & swCutListFeat.Name\n            PrintProperties swCutListFeat.CustomPropertyManager, False, "        "\n        Next\n    Else\n        Debug.Print "    -No Cut Lists-"\n    End If\n\nEnd Sub\n\nFunction GetCutLists(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim swCutListFeats() As SldWorks.Feature\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swFeat As SldWorks.Feature\n    Dim swBodyFolder As SldWorks.BodyFolder\n    \n    Set swFeat = model.FirstFeature\n    \n    Do While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2 = "CutListFolder" Then\n            \n            If Not isInit Then\n                isInit = True\n                ReDim swCutListFeats(0)\n            Else\n                ReDim Preserve swCutListFeats(UBound(swCutListFeats) + 1)\n            End If\n            \n            Set swCutListFeats(UBound(swCutListFeats)) = swFeat\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Loop\n    \n    If isInit Then\n        GetCutLists = swCutListFeats\n    Else\n        GetCutLists = Empty\n    End If\n\nEnd Function\n\nSub PrintProperties(custPrpMgr As SldWorks.CustomPropertyManager, cached As Boolean, indent As String)\n    \n    Dim vPrpNames As Variant\n    vPrpNames = custPrpMgr.GetNames()\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(vPrpNames) Then\n    \n        For i = 0 To UBound(vPrpNames)\n            \n            Dim prpName As String\n            prpName = vPrpNames(i)\n            \n            Dim prpVal As String\n            Dim prpResVal As String\n            Dim wasResolved As Boolean\n            Dim isLinked As Boolean\n            \n            Dim res As Long\n            res = custPrpMgr.Get6(prpName, cached, prpVal, prpResVal, wasResolved, isLinked)\n            \n            Dim status As String\n            Select Case res\n                Case swCustomInfoGetResult_e.swCustomInfoGetResult_CachedValue\n                    status = "Cached Value"\n                Case swCustomInfoGetResult_e.swCustomInfoGetResult_ResolvedValue\n                    status = "Resolved Value"\n                Case swCustomInfoGetResult_e.swCustomInfoGetResult_NotPresent\n                    status = "Not Present"\n            End Select\n            \n            Debug.Print indent & "Property: " & prpName\n            Debug.Print indent & "Value/Text Expression: " & prpVal\n            Debug.Print indent & "Evaluated Value: " & prpResVal\n            Debug.Print indent & "Was Resolved: " & wasResolved\n            Debug.Print indent & "Is Linked: " & isLinked\n            Debug.Print indent & "Status: " & status\n            Debug.Print ""\n            \n        Next\n    Else\n        Debug.Print indent & "-No Properties-"\n    End If\n    \nEnd Sub\n')))}d.isMDXComponent=!0},9146:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/custom-properties-90391b98546a2122a630341f3f6bbddd.png"}}]);