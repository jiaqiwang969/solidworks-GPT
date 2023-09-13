"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[38808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>S});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(n),m=s,S=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(S,i(i({ref:t},c),{},{components:n})):r.createElement(S,i({ref:t},c))}));function S(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(87462),s=(n(67294),n(3905));const o={layout:"sw-tool",title:"Link Cut-List Custom Properties To File With SOLIDWORKS Macro Feature API",caption:"Link Cut-List Custom Properties To File Custom Properties",description:"Macro feature to link specified custom properties from weldment cut-lists to SOLIDWORKS file custom properties",image:"link-cut-list-properties.svg",labels:["macro feature","cut-list","link properties"],group:"Custom Properties"},i=void 0,a={unversionedId:"codestack/solidworks-api/document/macro-feature/link-cut-list-properties/index",id:"codestack/solidworks-api/document/macro-feature/link-cut-list-properties/index",title:"Link Cut-List Custom Properties To File With SOLIDWORKS Macro Feature API",description:"Macro feature to link specified custom properties from weldment cut-lists to SOLIDWORKS file custom properties",source:"@site/docs/codestack/solidworks-api/document/macro-feature/link-cut-list-properties/index.md",sourceDirName:"codestack/solidworks-api/document/macro-feature/link-cut-list-properties",slug:"/codestack/solidworks-api/document/macro-feature/link-cut-list-properties/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/macro-feature/link-cut-list-properties/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/macro-feature/link-cut-list-properties/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Link Cut-List Custom Properties To File With SOLIDWORKS Macro Feature API",caption:"Link Cut-List Custom Properties To File Custom Properties",description:"Macro feature to link specified custom properties from weldment cut-lists to SOLIDWORKS file custom properties",image:"link-cut-list-properties.svg",labels:["macro feature","cut-list","link properties"],group:"Custom Properties"},sidebar:"tutorialSidebar",previous:{title:"Generate box geometry (solid, sheet, wire) Macro Feature using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/macro-feature/geometry/"},next:{title:"Run VBA macro on model load using macro feature and SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/macro-feature/model-load-watcher/"}},l={},d=[{value:"Instructions",id:"instructions",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...o}=e;return(0,s.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Linked file custom properties",src:n(65849).Z,width:"1021",height:"308"}),"{ width=450 }"),(0,s.kt)("p",null,"This VBA macro inserts the macro feature using SOLIDWORKS API into the part file which allows to dynamically link specified cut-list custom properties to the file generic custom properties."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Cut-List custom properties",src:n(94767).Z,width:"414",height:"411"}),"{ width=250 }"),(0,s.kt)("p",null,"Macro feature rebuilds automatically when the parent weldment feature (e.g. structural member feature) is changed. Regeneration method is handling the post update notification which allows to read the up-to-date values of cut-list custom properties."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Reading the custom properties directly from the swmRebuild function will not return the up-to-date values as at the moment of the regeneration all the properties are not evaluated yet.")),(0,s.kt)("p",null,"Macro feature is inserted into the feature tree and can be suppressed or removed."),(0,s.kt)("p",null,"There are several benefits of this approach comparing to linking the properties directly with the expression (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},'"LENGTH@@@Al I BEAM STD 4x3.28<1>@Part1.SLDPRT"'),")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Link is not name dependent, i.e. properties will remain linked even if cut-list renamed (for example when structural member profile is changed)"),(0,s.kt)("li",{parentName:"ul"},"Macro will work for older sheet metal part architecutre. The linking with an expression will not work for sheet metal parts build in older versions of SOLIDWORKS")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Macro feature in the feature manager tree",src:n(37123).Z,width:"324",height:"237"}),"{ width=250 }"),(0,s.kt)("h2",{id:"instructions"},"Instructions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create new macro and copy the code below")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const BASE_NAME As String = "CutListPropertiesLink"\n\nDim swPostGenList As PostRegenerateListener\n\nSub main()\n\n    Dim swApp As SldWorks.SldWorks\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        If swModel.GetType() = swDocumentTypes_e.swDocPART Then\n        \n            Dim swWeldFeat As SldWorks.Feature\n            Set swWeldFeat = TryGetSelectedFeatureAtIndex(swModel.SelectionManager, 1)\n            \n            Dim swCutListFeat As SldWorks.Feature\n            \n            If Not swWeldFeat Is Nothing Then\n                Set swCutListFeat = GetCutListFromWeldmentFeature(swModel, swWeldFeat)\n            End If\n    \n            If Not swCutListFeat Is Nothing Then\n                \n                Dim curMacroPath As String\n                curMacroPath = swApp.GetCurrentMacroPathName\n                \n                Dim vMethods(8) As String\n                Dim moduleName As String\n                \n                GetMacroEntryPoint swApp, curMacroPath, moduleName, ""\n                \n                vMethods(0) = curMacroPath: vMethods(1) = moduleName: vMethods(2) = "swmRebuild"\n                vMethods(3) = curMacroPath: vMethods(4) = moduleName: vMethods(5) = "swmEditDefinition"\n                vMethods(6) = curMacroPath: vMethods(7) = moduleName: vMethods(8) = "swmSecurity"\n                \n                Dim swFeat As SldWorks.Feature\n                Set swFeat = swModel.FeatureManager.InsertMacroFeature3(BASE_NAME, "", vMethods, _\n                    Empty, Empty, Empty, Empty, Empty, Empty, _\n                    Empty, swMacroFeatureOptions_e.swMacroFeatureEmbedMacroFile)\n                \n                If swFeat Is Nothing Then\n                    MsgBox "Failed to create cut-list proeprties linker"\n                End If\n            \n            Else\n                MsgBox "Select weldment feature (e.g. Structural Member)"\n            End If\n            \n        Else\n            MsgBox "Only part documents are supported"\n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nFunction TryGetSelectedFeatureAtIndex(selMgr As SldWorks.SelectionMgr, index As Integer) As SldWorks.Feature\n    On Error Resume Next\n    Set TryGetSelectedFeatureAtIndex = selMgr.GetSelectedObject6(index, -1)\nEnd Function\n\nSub GetMacroEntryPoint(app As SldWorks.SldWorks, macroPath As String, ByRef moduleName As String, ByRef procName As String)\n        \n    Dim vMethods As Variant\n    vMethods = app.GetMacroMethods(macroPath, swMacroMethods_e.swMethodsWithoutArguments)\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(vMethods) Then\n    \n        For i = 0 To UBound(vMethods)\n            Dim vData As Variant\n            vData = Split(vMethods(i), ".")\n            \n            If i = 0 Or LCase(vData(1)) = "main" Then\n                moduleName = vData(0)\n                procName = vData(1)\n            End If\n        Next\n        \n    End If\n    \nEnd Sub\n\nFunction swmRebuild(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n\n    Dim swApp As SldWorks.SldWorks\n    Dim swModel As SldWorks.ModelDoc2\n    Dim swFeat As SldWorks.Feature\n    \n    Set swApp = varApp\n    Set swModel = varDoc\n    Set swFeat = varFeat\n    \n    Dim swMacroFeat As SldWorks.MacroFeatureData\n    Set swMacroFeat = swFeat.GetDefinition()\n    \n    Dim vObjects As Variant\n    swMacroFeat.GetSelections3 vObjects, Empty, Empty, Empty, Empty\n    \n    Dim swWeldFeat As SldWorks.Feature\n    Set swWeldFeat = vObjects(0)\n    \n    If swWeldFeat Is Nothing Then\n        swmRebuild = "Linked weldment feature is missing"\n        Exit Function\n    End If\n        \n    Dim swCutListFeat As SldWorks.Feature\n    Set swCutListFeat = GetCutListFromWeldmentFeature(swModel, swWeldFeat)\n        \n    If Not swCutListFeat Is Nothing Then\n    \n        If swPostGenList Is Nothing Then\n            Set swPostGenList = New PostRegenerateListener\n        End If\n        \n        swPostGenList.Init swApp, swModel, swCutListFeat\n    \n    Else\n        swmRebuild = "Cannot get cut-list from the linked feature"\n    End If\nEnd Function\n\nFunction swmEditDefinition(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmEditDefinition = True\nEnd Function\n\nFunction swmSecurity(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmSecurity = SwConst.swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityByDefault\nEnd Function\n\nFunction GetCutListFromWeldmentFeature(model As SldWorks.ModelDoc2, weldFeat As SldWorks.Feature) As SldWorks.Feature\n    \n    On Error Resume Next\n    \n    Dim swApp As SldWorks.SldWorks\n    Set swApp = Application.SldWorks\n    \n    Dim swWeldFeatCutListBody As SldWorks.Body2\n    Set swWeldFeatCutListBody = weldFeat.GetFaces()(0).GetBody\n        \n    Dim swFeat As SldWorks.Feature\n    Dim swBodyFolder As SldWorks.BodyFolder\n    \n    Set swFeat = model.FirstFeature\n    \n    Do While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2 = "CutListFolder" Then\n            \n            Set swBodyFolder = swFeat.GetSpecificFeature2\n            \n            Dim vBodies As Variant\n            \n            vBodies = swBodyFolder.GetBodies\n            \n            Dim i As Integer\n            \n            If Not IsEmpty(vBodies) Then\n                For i = 0 To UBound(vBodies)\n                    \n                    Dim swCutListBody As SldWorks.Body2\n                    Set swCutListBody = vBodies(i)\n                    \n                    If swApp.IsSame(swCutListBody, swWeldFeatCutListBody) = swObjectEquality.swObjectSame Then\n                        Set GetCutListFromWeldmentFeature = swFeat\n                        Exit Function\n                    End If\n                    \n                Next\n            End If\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Loop\n\nEnd Function\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Add new class module to the macro and name it ",(0,s.kt)("em",{parentName:"li"},"PostRegenerateListener"),". Place the code below into the class module")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim WithEvents swApp As SldWorks.SldWorks\n\nDim swCutListFeat As SldWorks.Feature\nDim swModel As SldWorks.ModelDoc2\nDim LinkedProperties As Variant\n\nPrivate Sub Class_Initialize()\n    LinkedProperties = Array("DESCRIPTION", "LENGTH", "QUANTITY")\nEnd Sub\n\nSub Init(app As SldWorks.SldWorks, model As SldWorks.ModelDoc2, cutListFeat As SldWorks.Feature)\n    \n    Set swApp = app\n    \n    Set swModel = model\n    Set swCutListFeat = cutListFeat\n    \nEnd Sub\n\nPrivate Function swApp_OnIdleNotify() As Long\n    CopyProperties\n    Set swApp = Nothing \'unsubscribe from the event\nEnd Function\n\nSub CopyProperties()\n    \n    Dim i As Integer\n    \n    Dim swSrcPrpMgr As SldWorks.CustomPropertyManager\n    Set swSrcPrpMgr = swCutListFeat.CustomPropertyManager\n    \n    Dim swDestPrpMgr As SldWorks.CustomPropertyManager\n    Set swDestPrpMgr = swModel.Extension.CustomPropertyManager("")\n    \n    For i = 0 To UBound(LinkedProperties)\n    \n        Dim prpName As String\n        prpName = CStr(LinkedProperties(i))\n        \n        Dim prpVal As String\n\n        swSrcPrpMgr.Get2 prpName, "", prpVal\n        \n        swDestPrpMgr.Add2 prpName, swCustomInfoType_e.swCustomInfoText, prpVal\n        swDestPrpMgr.Set prpName, prpVal\n        \n    Next\n    \nEnd Sub\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Configure the properties which needs to be linked in the ",(0,s.kt)("em",{parentName:"li"},"Class_Initialize")," function in ",(0,s.kt)("em",{parentName:"li"},"PostRegenerateListener"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Private Sub Class_Initialize()\n    LinkedProperties = Array("DESCRIPTION", "LENGTH", "QUANTITY", "Another Property", "...")\nEnd Sub\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Select the weldment feature (e.g. structural member) and run the macro. Macro feature is inserted and embedded into the model. You can close and reopen model and SOLIDWORKS session - feature will automatically rebuild. Model can be shared with other users and the behavior will be preserved.")))}p.isMDXComponent=!0},37123:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAADtCAMAAADwUPxmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAANSwY4s4ACYOofb29mOwsO0cJCxsjgAAOIs4ODgAOJSqti97oBsbGwBjsItjizgAALBjAIDJ5QA4i0WGpLDUi0NDQwA3VWOw9zg4i2xsbDgAY6nE07CLiziL1AAAYzg4ADIyMlVVVWMAOFeWtPTOC4uLY7CLOGWHmHC10zaOxGMAAJSUlL+aBxQUFBNLaaqqqjg4Y3SRoYdoGYODg7DJ1ioqKiBZd0Vtg2MAY/ewY8mMJ4uw94uL1Dk5Ofewi2aoxqi7xtSLY6BDBYqKilKPrV+gvqlUDPHQPmNjAHa82svLy3h4eF1dXQtAXGOw1FBibC51mffgmNSLOMnQ06KioiMjIzhjsExMTCVhf4quwjGFrLRmEcLCwmM4i7OzsgAAANzg4IJgDU2Kp2yvzVubuXJyckh7lpmZmZzk95S0xLGda8iKH9iqPtekKLq6umNiYpg2AWM4AGqUrXrB3zJtiz17mTiLsMfMzxxVc2irySxaco+PjwM6V1STsWOkwtjY14CbrJ2qsTxrhSligkR0jXO41k+MqihbeUqIprakdYzR7LHCyhVGYjdxj1dXV26y0CxnhrVoFwA4Y/XaQ1qBlx5Pap67zC1xk8PQ1ihWbzCAppywu8mPMHi+3JCvvYZnF1OMqH7F42qHl0pwhEmEorjEzPrUDLRpG6pWEi94nPXdUnGYraBECMfT2TB9owY7WSNdexVIZFmYtmiImrjM1kl1jxhQbvTQDITN6L2bCClffjF3msmNKqy/ygAAAMwzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///7pKIm4AAADAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AHa6j6kAAAAJcEhZcwAADsMAAA7DAcdvqGQAABISSURBVHhe7Z2PfxxFFcDjOSq/UhOrl5hq65WiYI4a4YwS8EB7tGAu/tgzNSIhn5M2toBcqxQFQrsgUgtoKSICBRQFLWBRERVB/Nt87817sz9ud+7SLte7vfl+mtvZmdnt7Tczu3vzMrcjynHWOIkZ4CRmQLrEteIapxwdSJW4tk+VK6rIVAEucLSRKrGoVLPKElFhtcQFjjbSW2K5uVbhtMOOOydmQLrENMbP209Lb3oDLVMY36KrIeObOXHW0F4bI1v2h3dPNKzv5r0lXeIVb1zBqSjjI1pJoxp623MbOZFIFxLtO4jgXRDzR/SlxCuOPnrrmwovKMAssJsLxqu6ERTOmcRNAyPxjUcf/c/XVaBwt5H4k8IkLOY2fgbetjc2MgKHPz4yMgJrjZER7OuFD0xDfwNxXBqTOA6bF75RoKq4CW7JOwDmaB/jm6GAvPI+qeIk7klvQbuUMthav5tbcIvek94Sj33ko29yOgIcnxaDv/uvojNYUkPC/DlopoXPQy4epZSGJTbobFBAUVC9ga3a7ADAvnotlGEtzJd9YkXvGtoTtURMSBnuaI5+B94YvvacMzgnbvYuhgPatF86EB4//mA2HPmkKqAmEYclgUQ5SqwCu9CboBUjUffVcVJyAVcoTHrT2Pr1nkSiKaMlbYEyzf/VO9IlhvDhphteNPD24R8YJInYuVgidEQEJOIBkzgupTTgTbMqqgKOsB1BAiyIRFWAHfAWkC/71BV1vkiUMu3dnBMbtIOeki7xkSsf4ZSPn1mKJbYIb9/b1DwfetgGbYUE4g8fqJFoSkkJoRXZJEJjxR4qEnmfiRIjZSzRg9MxJXpJqsRH3n7r7dsVXFBKUyvgEK4vXIDHUTgAx4wS8Xjo1AQ/5tbDSJRSUsLoOySWqDfBeoFEKIS2jkrAjuxTlmGJ0TJ9AsBfQO9JlXjlJX9+6/sKLsrVGtzntFrmHgePg848KBHe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"},94767:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cut-list-properties-c6e2633ee14bff93415a3586966ea1c1.png"},65849:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linked-custom-properties-dd40e40d2c288fd5343ec81d435383f3.png"}}]);