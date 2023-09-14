"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[72519],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=m(t),p=o,f=u["".concat(l,".").concat(p)]||u[p]||c[p]||i;return t?a.createElement(f,r(r({ref:n},d),{},{components:t})):a.createElement(f,r({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var m=2;m<i;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},15395:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=t(87462),o=(t(67294),t(3905));const i={layout:"sw-tool",title:"Macro feature to configure model dimensions",caption:"Model Configurator",description:"VBA macro feature which allows to configure the dimensions of the model via custom user Form",image:"part-configurator.svg",labels:["configure","macro feature","dimensions"],group:"Model"},r=void 0,s={unversionedId:"codestack-clone/solidworks-api/document/macro-feature/configurator/index",id:"codestack-clone/solidworks-api/document/macro-feature/configurator/index",title:"Macro feature to configure model dimensions",description:"VBA macro feature which allows to configure the dimensions of the model via custom user Form",source:"@site/docs/codestack-clone/solidworks-api/document/macro-feature/configurator/index.md",sourceDirName:"codestack-clone/solidworks-api/document/macro-feature/configurator",slug:"/codestack-clone/solidworks-api/document/macro-feature/configurator/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/macro-feature/configurator/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/macro-feature/configurator/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro feature to configure model dimensions",caption:"Model Configurator",description:"VBA macro feature which allows to configure the dimensions of the model via custom user Form",image:"part-configurator.svg",labels:["configure","macro feature","dimensions"],group:"Model"},sidebar:"tutorialSidebar",previous:{title:"Macro feature which adds watermark into SOLIDWORKS model",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/macro-feature/add-watermark/"},next:{title:"SOLIDWORKS macro feature to link and auto update general table to Excel",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/macro-feature/general-table-link-excel/"}},l={},m=[{value:"Configuration",id:"configuration",level:2},{value:"Benefits Comparison",id:"benefits-comparison",level:2},{value:"Easy to setup",id:"easy-to-setup",level:3},{value:"Simple input method",id:"simple-input-method",level:3},{value:"Performance",id:"performance",level:3},{value:"On-demand editing",id:"on-demand-editing",level:3},{value:"Sub-components support",id:"sub-components-support",level:3},{value:"In-context editing",id:"in-context-editing",level:3},{value:"Extensibility",id:"extensibility",level:3},{value:"Macro Setup",id:"macro-setup",level:2}],d={toc:m},u="wrapper";function c(e){let{components:n,...i}=e;return(0,o.kt)(u,(0,a.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This VBA macro leverages functionality of macro feature to create custom model configurator for the specified dimensions."),(0,o.kt)("p",null,"{% youtube id: JbcYEL9GY_c %}"),(0,o.kt)("p",null,"Macro will build dynamic User Interface for the specified dimension and insert the ",(0,o.kt)("strong",{parentName:"p"},"Configurator")," feature directly in the Feature Manager tree."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Configuring dimensions of the model",src:t(52233).Z,width:"672",height:"536"})),(0,o.kt)("p",null,"Design can be modified at any time by clicking ",(0,o.kt)("strong",{parentName:"p"},"Edit Feature")," command"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Editing the dimensions of the model via configurator form",src:t(58716).Z,width:"300",height:"180"})),(0,o.kt)("p",null,"Feature can also be edited in the context of the assembly."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Editing configuration in-context of the assembly",src:t(93981).Z,width:"320",height:"336"})),(0,o.kt)("p",null,"To insert the feature, pre-select dimensions you want to be configured and run the macro."),(0,o.kt)("p",null,"For each selected dimension specify the user friendly title (this will be displayed on the form):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Specify title for the dimension",src:t(81184).Z,width:"361",height:"154"})),(0,o.kt)("p",null,"Once inserted. Edit the definition of the feature to update the model."),(0,o.kt)("p",null,"Configurator feature can be inserted into the part or assembly (including inserting to the component edited in the context of the assembly)."),(0,o.kt)("p",null,"Dimensions will be modified in the active configuration or in the referenced configuration of the component (if edited in context)"),(0,o.kt)("p",null,"When adding configurator feature to the assembly it is possible to modify the dimensions of any sub-component."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"User can modify the constants below to change some of the parameters."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"BASE_NAME")," constants defines the default name used for the configurator feature"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"EMBED_MACRO_FEATURE")," allows to embed the code directly to the model, so it is no longer linked to the original macro. This model can be shared with anyone and edited without the need to supply the original macro")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Public Const BASE_NAME As String = \"MyConfigurator\" 'default name for the feature\n\nConst EMBED_MACRO_FEATURE As Boolean = True' embeds macro feature into the model\n")),(0,o.kt)("h2",{id:"benefits-comparison"},"Benefits Comparison"),(0,o.kt)("p",null,"Table below demonstrates the benefits of this approach compared to other poplar design automation methods and tools."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note, the table below only shows benefits of this macro compared to other methods. Other methods have more benefits and features which this macro does not cover and those are not included into the table below")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"This Macro"),(0,o.kt)("th",{parentName:"tr",align:null},"Equations"),(0,o.kt)("th",{parentName:"tr",align:null},"Design Table"),(0,o.kt)("th",{parentName:"tr",align:null},"DriveWorks"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Easy to setup"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2717")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Simple input method"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Performance"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2717")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On-demand editing"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2717")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sub-components support"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"In-context editing"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Extensibility"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,o.kt)("h3",{id:"easy-to-setup"},"Easy to setup"),(0,o.kt)("p",null,"This criteria defines how quickly the configurator can be created. DriveWorks requires specific skills and rules engine to create a configurator, while this macro only requires dimensions preselection"),(0,o.kt)("h3",{id:"simple-input-method"},"Simple input method"),(0,o.kt)("p",null,"This criteria defines how easy it is to apply and change the dimensions as per configurator input parameters. Both this macro and DriveWorks will use custom forms which simplifies the input while Equations and Design Table do not have a specific input form and it is required to search for the specific inputs through the list of other equations and definitions."),(0,o.kt)("h3",{id:"performance"},"Performance"),(0,o.kt)("p",null,"This criteria defines the execution performance (how long it takes before parameters are applied). This macro applies parameters instantly directly to dimension. Design Table needs to load Excel instance and open the file to recalculate and apply value. DriveWorks will always generate new model based on the specification inputs."),(0,o.kt)("h3",{id:"on-demand-editing"},"On-demand editing"),(0,o.kt)("p",null,"This criteria defines if parameters can be changed to the existing design. DriveWorks generates new model and does not modify existing one."),(0,o.kt)("h3",{id:"sub-components-support"},"Sub-components support"),(0,o.kt)("p",null,"This criteria defines if parameters of the sub component can be modified. Although Equations can be defined for the components those are not configuration specific, i.e. it will not be possible to have two instances of the component with different configurations and different equation values."),(0,o.kt)("h3",{id:"in-context-editing"},"In-context editing"),(0,o.kt)("p",null,"This criteria defines if configuration of the component can be changed using in-context editing from the top level assembly. All of the methods except this macro requires the target component to be opened in its own window in order to be edited, while this macro allows in-context editing."),(0,o.kt)("h3",{id:"extensibility"},"Extensibility"),(0,o.kt)("p",null,"This criteria defines the possibility to extend the functionality beyond the out-of-the box functionality. Both Equations and DesignTable are built-in features. DriveWorks provides APIs and can be extended. This macro is open source and can be extended using SOLIDWORKS API."),(0,o.kt)("h2",{id:"macro-setup"},"Macro Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create new macro and copy the code below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Public Const MARGIN As Integer = 10\nPublic Const MAX_FORM_HEIGHT = 200\nPublic Const TEXT_BOX_WIDTH As Integer = 50\nPublic Const BASE_NAME As String = "Configurator"\n\nConst EMBED_MACRO_FEATURE As Boolean = False\n\nPublic ActiveModel As SldWorks.ModelDoc2\nPublic Model As SldWorks.ModelDoc2\nPublic FeatureName As String\nPublic DimensionNames As Variant\nPublic DimensionTitles As Variant\nPublic ConfigName As String\n\nSub main()\n\n    Dim swApp As SldWorks.SldWorks\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        If Not TypeOf swModel Is PartDoc And Not TypeOf swModel Is AssemblyDoc Then\n            Err.Raise vbError, "", "Only part and assembly documents are supported"\n        End If\n        \n        Dim vParamNames As Variant\n        Dim vParamTypes As Variant\n        Dim vParamValues As Variant\n        \n        If Not CollectParameters(swModel, vParamNames, vParamTypes, vParamValues) Then\n            Err.Raise vbError, "", "Please select dimensions to configure"\n        End If\n        \n        Dim curMacroPath As String\n        curMacroPath = swApp.GetCurrentMacroPathName\n        \n        Dim vMethods(8) As String\n        Dim moduleName As String\n        \n        GetMacroEntryPoint swApp, curMacroPath, moduleName, ""\n        \n        vMethods(0) = curMacroPath: vMethods(1) = moduleName: vMethods(2) = "swmRebuild"\n        vMethods(3) = curMacroPath: vMethods(4) = moduleName: vMethods(5) = "swmEditDefinition"\n        vMethods(6) = curMacroPath: vMethods(7) = moduleName: vMethods(8) = "swmSecurity"\n        \n        Dim opts As swMacroFeatureOptions_e\n        \n        If EMBED_MACRO_FEATURE Then\n            opts = swMacroFeatureOptions_e.swMacroFeatureEmbedMacroFile\n        Else\n            opts = swMacroFeatureOptions_e.swMacroFeatureByDefault\n        End If\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swModel.FeatureManager.InsertMacroFeature3(BASE_NAME, "", vMethods, _\n            vParamNames, vParamTypes, vParamValues, Empty, Empty, Empty, _\n            Empty, opts)\n        \n        If swFeat Is Nothing Then\n            Err.Raise vbError, "", "Failed to create box feature"\n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nFunction CollectParameters(Model As SldWorks.ModelDoc2, ByRef vParamNames As Variant, ByRef vParamTypes As Variant, ByRef vParamValues As Variant) As Boolean\n\n    Dim paramNames() As String\n    Dim paramTypes() As Long\n    Dim paramValues() As String\n\n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = Model.SelectionManager\n\n    Dim i As Integer\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelDIMENSIONS Then\n            \n            Dim swDispDim As SldWorks.DisplayDimension\n            Set swDispDim = swSelMgr.GetSelectedObject6(i, -1)\n            \n            Dim swComp As SldWorks.Component2\n            Set swComp = swSelMgr.GetSelectedObjectsComponent3(i, -1)\n                        \n            If (Not paramNames) = -1 Then\n                ReDim paramNames(0)\n                ReDim paramTypes(0)\n                ReDim paramValues(0)\n            Else\n                ReDim Preserve paramNames(UBound(paramNames) + 1)\n                ReDim Preserve paramTypes(UBound(paramTypes) + 1)\n                ReDim Preserve paramValues(UBound(paramValues) + 1)\n            End If\n            \n            Dim paramName As String\n            paramName = ""\n            \n            If Not swComp Is Nothing Then\n                \n                paramName = swComp.Name2\n                \n                Dim swAssy As SldWorks.AssemblyDoc\n                Set swAssy = Model\n                \n                Dim swEditTargetComp As SldWorks.Component2\n                Set swEditTargetComp = swAssy.GetEditTargetComponent\n                \n                If Not swEditTargetComp Is Nothing Then\n                    If Not swEditTargetComp.GetModelDoc2() Is swAssy Then\n                        If Left(paramName, Len(swEditTargetComp.Name2)) <> swEditTargetComp.Name2 Then\n                            Err.Raise vbError, "", "Dimension must belong to the current edit target"\n                        End If\n                        If LCase(paramName) = LCase(swEditTargetComp.Name2) Then\n                            paramName = ""\n                        Else\n                            paramName = Right(paramName, Len(paramName) - Len(swEditTargetComp.Name2) - 1)\n                        End If\n                    End If\n                End If\n                \n            End If\n            \n            paramName = paramName & IIf(paramName <> "", "/", "") & swDispDim.GetNameForSelection\n            \n            paramNames(UBound(paramNames)) = paramName\n            paramValues(UBound(paramValues)) = InputBox("Specify the name for " & paramName, "Configurator", paramName)\n            paramTypes(UBound(paramTypes)) = swMacroFeatureParamType_e.swMacroFeatureParamTypeString\n            \n        End If\n    Next\n    \n    vParamNames = paramNames\n    vParamTypes = paramTypes\n    vParamValues = paramValues\n    \n    CollectParameters = (Not paramNames) <> -1\n    \nEnd Function\n\nSub GetMacroEntryPoint(app As SldWorks.SldWorks, macroPath As String, ByRef moduleName As String, ByRef procName As String)\n        \n    Dim vMethods As Variant\n    vMethods = app.GetMacroMethods(macroPath, swMacroMethods_e.swMethodsWithoutArguments)\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(vMethods) Then\n    \n        For i = 0 To UBound(vMethods)\n            Dim vData As Variant\n            vData = Split(vMethods(i), ".")\n            \n            If i = 0 Or LCase(vData(1)) = "main" Then\n                moduleName = vData(0)\n                procName = vData(1)\n            End If\n        Next\n        \n    End If\n    \nEnd Sub\n\nFunction swmRebuild(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmRebuild = True\nEnd Function\n\nFunction swmEditDefinition(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    \n    Dim swFeat As SldWorks.Feature\n    Set swFeat = varFeat\n    \n    Dim swMacroFeat As SldWorks.MacroFeatureData\n    Set swMacroFeat = swFeat.GetDefinition\n    \n    ConfigName = swMacroFeat.CurrentConfiguration.name\n    \n    Dim vParamNames As Variant\n    Dim vParamValues As Variant\n    \n    swMacroFeat.GetParameters vParamNames, Empty, vParamValues\n    \n    DimensionNames = vParamNames\n    DimensionTitles = vParamValues\n    FeatureName = swFeat.name\n    \n    Set ActiveModel = varDoc\n    Set Model = varDoc\n    \n    If Model.GetType() = swDocumentTypes_e.swDocASSEMBLY Then\n        Dim swAssy As SldWorks.AssemblyDoc\n        Set swAssy = Model\n        Set Model = swAssy.GetEditTarget\n    End If\n    \n    ConfiguratorForm.Show vbModal\n    \n    swmEditDefinition = True\n    \nEnd Function\n\nFunction swmSecurity(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmSecurity = SwConst.swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityByDefault\nEnd Function\n')),(0,o.kt)("p",null,"Add new ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/user-forms/"},"User Form")," and place the code below into the form's code behind"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim lblParamName() As Label\nDim txtParamValue() As TextBox\n\nDim WithEvents btnApply As CommandButton\n\nPrivate Sub UserForm_Initialize()\n\n    Me.Caption = "Edit " & FeatureName\n    \n    If UBound(DimensionNames) <> UBound(DimensionTitles) Then\n        Err.Raise vbError, "", "Parameter names and dimensions must be of the same size"\n    End If\n\n    Dim i As Integer\n    \n    Dim maxWidth As Integer\n    \n    ReDim lblParamName(UBound(DimensionTitles))\n    ReDim txtParamValue(UBound(DimensionTitles))\n    \n    Dim nextPosY As Integer\n    nextPosY = MARGIN\n    \n    For i = 0 To UBound(DimensionTitles)\n    \n        Set lblParamName(i) = Me.Controls.Add("Forms.Label.1")\n        lblParamName(i).Caption = CStr(DimensionTitles(i)) & ":"\n        lblParamName(i).name = "lblLabel" & (i + 1)\n        lblParamName(i).AutoSize = True\n        \n        lblParamName(i).Left = MARGIN\n        lblParamName(i).Top = nextPosY\n        \n        If lblParamName(i).Width > maxWidth Then\n            maxWidth = lblParamName(i).Width\n        End If\n        \n        Set txtParamValue(i) = Me.Controls.Add("Forms.TextBox.1")\n        txtParamValue(i).Width = TEXT_BOX_WIDTH\n        txtParamValue(i).name = "txtVal" & (i + 1)\n        txtParamValue(i).Top = nextPosY\n                \n        nextPosY = nextPosY + MARGIN + lblParamName(i).height\n        \n    Next\n    \n    For i = 0 To UBound(txtParamValue)\n        txtParamValue(i).Left = maxWidth + MARGIN * 2\n    Next\n    \n    Set btnApply = Me.Controls.Add("Forms.CommandButton.1")\n    btnApply.Caption = "Apply"\n    btnApply.name = "btnApply"\n    btnApply.Top = nextPosY + MARGIN\n    btnApply.Left = (maxWidth + MARGIN + TEXT_BOX_WIDTH) / 2 - btnApply.Width / 2 + MARGIN\n    \n    Dim height As Integer\n    height = btnApply.Top + btnApply.height + MARGIN\n    \n    Me.StartUpPosition = 1 \'center owner\n    Me.ScrollBars = IIf(height > MAX_FORM_HEIGHT, fmScrollBarsVertical, fmScrollBarsNone)\n    Me.ScrollHeight = height\n    Me.Width = (maxWidth + MARGIN + TEXT_BOX_WIDTH) + MARGIN * 2 + 20\n    Me.height = IIf(height > MAX_FORM_HEIGHT, MAX_FORM_HEIGHT + 25, height + 25) \'including header height\n    \n    LoadDimensionValues\n    \nEnd Sub\n\nPrivate Sub LoadDimensionValues()\n    \n    Dim i As Integer\n        \n    For i = 0 To UBound(DimensionNames)\n        \n        Dim swDim As SldWorks.Dimension\n        \n        Dim dimName As String\n        dimName = CStr(DimensionNames(i))\n        \n        Set swDim = GetDimension(dimName)\n        \n        If Not swDim Is Nothing Then\n            Dim dimVal As Double\n            Dim confNames(0) As String\n            confNames(0) = ConfigName\n            dimVal = swDim.GetValue3(swInConfigurationOpts_e.swSpecifyConfiguration, confNames)(0)\n            txtParamValue(i).Text = dimVal\n        Else\n            Err.Raise vbError, "", dimName & " does not exist"\n        End If\n    Next\n    \nEnd Sub\n\nPrivate Sub btnApply_Click()\n    \n    Dim i As Integer\n        \n    For i = 0 To UBound(DimensionNames)\n        \n        Dim swDim As SldWorks.Dimension\n        \n        Dim dimName As String\n        dimName = CStr(DimensionNames(i))\n        \n        Set swDim = GetDimension(dimName)\n        \n        If Not swDim Is Nothing Then\n            Dim dimVal As Double\n            \n            If IsNumeric(txtParamValue(i).Text) Then\n                dimVal = CDbl(txtParamValue(i).Text)\n            Else\n                Err.Raise vbError, "", "Specified value for " & DimensionTitles(i) & " is not numeric"\n            End If\n            Dim confNames(0) As String\n            confNames(0) = ConfigName\n            swDim.SetValue3 dimVal, swInConfigurationOpts_e.swSpecifyConfiguration, confNames\n        Else\n            Err.Raise vbError, "", dimName & " does not exist"\n        End If\n    Next\n    \n    ActiveModel.ForceRebuild3 False\n    \nEnd Sub\n\nFunction GetDimension(name As String) As SldWorks.Dimension\n    \n    Dim dimParts As Variant\n    dimParts = Split(name, "/")\n    \n    Dim i As Integer\n    \n    Dim swTargetModel As SldWorks.ModelDoc2\n    Set swTargetModel = Model\n    \n    Dim swCurComp As SldWorks.Component2\n    \n    For i = 0 To UBound(dimParts) - 1\n        Dim swAssy As SldWorks.AssemblyDoc\n        Set swAssy = swTargetModel\n        Set swCurComp = swAssy.GetComponentByName(dimParts(i))\n        Set swTargetModel = swCurComp.GetModelDoc2()\n    Next\n    \n    Set GetDimension = swTargetModel.Parameter(dimParts(UBound(dimParts)))\n    \nEnd Function\n')),(0,o.kt)("p",null,"Specify the name for the form to be ",(0,o.kt)("strong",{parentName:"p"},"ConfiguratorForm"),". As the result the solution tree in VBA will look like below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"VBA macro files tree",src:t(93544).Z,width:"310",height:"323"})))}c.isMDXComponent=!0},52233:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/configuring-model-382f6ee6db0e3af894fdbb383eff1e90.png"},58716:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/edit-feature-69b95e517964b4244f545ba0b8e059c7.png"},93981:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/in-context-editing-30763ad4e335fb8752f1b692bd1a6a6f.png"},81184:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,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"},93544:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/vba-solution-tree-43ece4a28623dc6610365c52f07e9027.png"}}]);