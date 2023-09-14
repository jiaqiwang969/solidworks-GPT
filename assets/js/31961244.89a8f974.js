"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[41203],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>p});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},w=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(t),w=r,p=u["".concat(l,".").concat(w)]||u[w]||d[w]||i;return t?o.createElement(p,a(a({ref:n},m),{},{components:t})):o.createElement(p,a({ref:n},m))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=w;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}w.displayName="MDXCreateElement"},80855:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const i={layout:"sw-tool",title:"Automatically assign new file name for SOLIDWORKS files",caption:"Assign New File Name",description:"VBA macro to automatically assign new file name for the document based on the referenced drawing view or custom property using SOLIDWORKS API",image:"save-as-dialog.png",labels:["new file name","auto name"],group:"Model"},a=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/set-new-file-name/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/set-new-file-name/index",title:"Automatically assign new file name for SOLIDWORKS files",description:"VBA macro to automatically assign new file name for the document based on the referenced drawing view or custom property using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/set-new-file-name/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/set-new-file-name",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/set-new-file-name/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/set-new-file-name/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/set-new-file-name/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Automatically assign new file name for SOLIDWORKS files",caption:"Assign New File Name",description:"VBA macro to automatically assign new file name for the document based on the referenced drawing view or custom property using SOLIDWORKS API",image:"save-as-dialog.png",labels:["new file name","auto name"],group:"Model"},sidebar:"tutorialSidebar",previous:{title:"Set BOM Quantity (Unit Of Measure) property using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/set-bom-quantity-unit-of-measure-property/"},next:{title:"Macro to set SOLIDWORKS document units (length, angle, mass, volume, time)",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/set-units/"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Setting the name source",id:"setting-the-name-source",level:3},{value:"Setting the title mode",id:"setting-the-title-mode",level:3}],m={toc:c},u="wrapper";function d(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,o.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA macro allows to automatically set the name for the new file based on the custom property value or drawing view referenced model using SOLIDWORKS API."),(0,r.kt)("p",null,"This macro will only run for the files which were never saved before."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"File Save As dialog",src:t(18151).Z,width:"781",height:"595"}),"{ width=350 }"),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Macro can be configured by changing the values of constants at the beginning of the macro"),(0,r.kt)("h3",{id:"setting-the-name-source"},"Setting the name source"),(0,r.kt)("p",null,"Source for the name can be set by changing the ",(0,r.kt)("em",{parentName:"p"},"NAME_SOURCE")," constant which can take one of the following values"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DefaultDrawingViewFileName - extracts the name from the title of the referenced document of the view in the drawing"),(0,r.kt)("li",{parentName:"ul"},"DefaultDrawingViewCustomProperty - extracts the value from the custom property of the default view in the drawing"),(0,r.kt)("li",{parentName:"ul"},"CustomProperty - extracts the value from the custom property")),(0,r.kt)("p",null,"If ",(0,r.kt)("em",{parentName:"p"},"DefaultDrawingViewCustomProperty")," or ",(0,r.kt)("em",{parentName:"p"},"CustomProperty")," option is used it is required to specify the name of the custom property to read value from in the ",(0,r.kt)("em",{parentName:"p"},"PRP_NAME")," constant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const NAME_SOURCE As Integer = NameSource_e.CustomProperty\nConst PRP_NAME As String = "PartNo"\n')),(0,r.kt)("h3",{id:"setting-the-title-mode"},"Setting the title mode"),(0,r.kt)("p",null,"There are 2 modes for the macro which can be set via ",(0,r.kt)("em",{parentName:"p"},"AUTO_SAVE")," constant"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"True - file will be automatically saved to the same folder as original model"),(0,r.kt)("li",{parentName:"ul"},"False - title will be assigned and pre-filled in the ",(0,r.kt)("em",{parentName:"li"},"Save As")," dialog when manually saved")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const AUTO_SAVE As Boolean = True\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Public Enum NameSource_e\n    DefaultDrawingViewFileName\n    DefaultDrawingViewCustomProperty\n    CustomProperty\nEnd Enum\n\nConst NAME_SOURCE As Integer = NameSource_e.CustomProperty\nConst PRP_NAME As String = "PartNo"\n\nConst AUTO_SAVE As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        If swModel.GetPathName() = "" Then\n            \n            Dim newFileName As String\n            newFileName = CreateSaveFileName(swModel, Not AUTO_SAVE, NAME_SOURCE, PRP_NAME)\n            If newFileName <> "" Then\n                \n                If AUTO_SAVE Then\n                    \n                    Dim errs As Long\n                    Dim warns As Long\n                \n                    If False = swModel.Extension.SaveAs(newFileName, swSaveAsVersion_e.swSaveAsCurrentVersion, swSaveAsOptions_e.swSaveAsOptions_Silent, Nothing, errs, warns) Then\n                        Err.Raise vbError, "", "Failed to save model: " & errs\n                    End If\n                Else\n                    If False = swModel.SetTitle2(newFileName) Then\n                        Err.Raise vbError, "", "Failed to set model title"\n                    End If\n                End If\n            Else\n                Err.Raise vbError, "", "Failed to generate file name"\n            End If\n            \n        End If\n        \n    Else\n        Err.Raise vbError, "", "Model is nothing"\n    End If\n    \nEnd Sub\n\nFunction CreateSaveFileName(model As SldWorks.ModelDoc2, nameOnly As Boolean, src As NameSource_e, Optional prpName As String = "")\n    \n    Dim swCurModel As SldWorks.ModelDoc2\n    Dim fileName As String\n    \n    If src = NameSource_e.CustomProperty Then\n        \n        Dim swConf As SldWorks.Configuration\n        Set swConf = model.ConfigurationManager.ActiveConfiguration\n        \n        Dim confName As String\n        \n        If Not swConf Is Nothing Then\n            confName = swConf.Name\n        Else\n            confName = ""\n        End If\n        \n        Set swCurModel = model\n        \n        fileName = GetCustomPropertyValue(model, prpName, confName)\n        \n    ElseIf src = NameSource_e.DefaultDrawingViewFileName Or src = NameSource_e.DefaultDrawingViewCustomProperty Then\n            \n        If model.GetType() = swDocumentTypes_e.swDocDRAWING Then\n            \n            Dim swView As SldWorks.view\n            Dim swDraw As SldWorks.DrawingDoc\n            Set swDraw = model\n            Set swView = GetDefaultView(swDraw.GetCurrentSheet())\n            \n            If Not swView Is Nothing Then\n                \n                Dim swViewModel As SldWorks.ModelDoc2\n                Set swViewModel = swView.ReferencedDocument\n                \n                Set swCurModel = swViewModel\n                \n                If Not swViewModel Is Nothing Then\n                    If src = NameSource_e.DefaultDrawingViewFileName Then\n                        fileName = GetFileName(swViewModel)\n                    ElseIf src = NameSource_e.DefaultDrawingViewCustomProperty Then\n                        fileName = GetCustomPropertyValue(swViewModel, prpName, swView.ReferencedConfiguration)\n                    Else\n                        Err.Raise vbError, "", "Not supported source for drawing"\n                    End If\n                Else\n                    Err.Raise vbError, "", "Failed to get model from view"\n                End If\n                \n            Else\n                Err.Raise vbError, "", "Failed to find default view"\n            End If\n        Else\n            Err.Raise vbError, "", "Source is only applicable for drawings"\n        End If\n    Else\n        Err.Raise vbError, "", "Not supported source"\n    End If\n    \n    If nameOnly Then\n        CreateSaveFileName = fileName\n    Else\n        CreateSaveFileName = GetFilePath(model, swCurModel, fileName)\n    End If\n    \nEnd Function\n\nFunction GetFileName(model As SldWorks.ModelDoc2) As String\n    \n    Dim path As String\n    path = model.GetPathName\n    \n    Dim fileName As String\n    \n    fileName = Right(path, Len(path) - InStrRev(path, "\\"))\n    \n    fileName = Left(fileName, InStrRev(fileName, ".") - 1)\n    \n    GetFileName = fileName\n    \nEnd Function\n\nFunction GetFilePath(targModel As SldWorks.ModelDoc2, srcModel As SldWorks.ModelDoc2, fileName As String)\n    \n    Dim ext As String\n    \n    Select Case targModel.GetType()\n        Case swDocumentTypes_e.swDocPART\n            ext = ".sldprt"\n        Case swDocumentTypes_e.swDocASSEMBLY\n            ext = ".sldasm"\n        Case swDocumentTypes_e.swDocDRAWING\n            ext = ".slddrw"\n    End Select\n    \n    Dim dirPath As String\n    \n    dirPath = srcModel.GetPathName\n    \n    If dirPath = "" Then\n        Err.Raise vbError, "", "Model is not saved"\n    End If\n    \n    dirPath = Left(dirPath, InStrRev(dirPath, "\\"))\n    \n    GetFilePath = dirPath & fileName & ext\n    \nEnd Function\n\nFunction GetCustomPropertyValue(model As SldWorks.ModelDoc2, prpName As String, confName As String)\n    \n    Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)\n    \n    Dim val As String\n    Dim resVal As String\n    swCustPrpMgr.Get4 prpName, False, val, resVal\n    \n    If resVal = "" Then\n        Set swCustPrpMgr = model.Extension.CustomPropertyManager("")\n        swCustPrpMgr.Get4 prpName, False, val, resVal\n    End If\n    \n    GetCustomPropertyValue = resVal\n    \nEnd Function\n\nFunction GetDefaultView(swSheet As SldWorks.Sheet) As SldWorks.view\n    \n    Dim vViews As Variant\n    \n    vViews = swSheet.GetViews\n    \n    If Not IsEmpty(vViews) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vViews)\n            \n            Dim swView As SldWorks.view\n            Set swView = vViews(i)\n            \n            If UCase(swView.Name) = UCase(swSheet.CustomPropertyView) Then\n                Set GetDefaultView = swView\n                Exit Function\n            End If\n            \n        Next\n        \n        Set GetDefaultView = vViews(0) \'use first one\n        \n    End If\n    \nEnd Function\n')))}d.isMDXComponent=!0},18151:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/save-as-dialog-ce02b79d295e01388433dd8313b834b0.png"}}]);