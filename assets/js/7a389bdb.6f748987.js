"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[14691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,u=d["".concat(l,".").concat(m)]||d[m]||g[m]||a;return n?o.createElement(u,s(s({ref:t},p),{},{components:n})):o.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={layout:"sw-tool",title:"Select standard reference geometry (e.g. Front plane or origin) by type using SOLIDWORKS API",caption:"Select Standard Plane Or Origin By Type",description:"Example demonstrates how to select standard plane (Top, Front or Right) and origin by specifying its type",image:"plane.svg",labels:["selection","plane","origin"],group:"Model","redirect-from":["/solidworks-api/document/selection/select-standard-plane/"]},s=void 0,i={unversionedId:"codestack-clone/solidworks-api/document/selection/select-standard-ref-geometry/index",id:"codestack-clone/solidworks-api/document/selection/select-standard-ref-geometry/index",title:"Select standard reference geometry (e.g. Front plane or origin) by type using SOLIDWORKS API",description:"Example demonstrates how to select standard plane (Top, Front or Right) and origin by specifying its type",source:"@site/docs/codestack-clone/solidworks-api/document/selection/select-standard-ref-geometry/index.md",sourceDirName:"codestack-clone/solidworks-api/document/selection/select-standard-ref-geometry",slug:"/codestack-clone/solidworks-api/document/selection/select-standard-ref-geometry/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/selection/select-standard-ref-geometry/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/selection/select-standard-ref-geometry/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Select standard reference geometry (e.g. Front plane or origin) by type using SOLIDWORKS API",caption:"Select Standard Plane Or Origin By Type",description:"Example demonstrates how to select standard plane (Top, Front or Right) and origin by specifying its type",image:"plane.svg",labels:["selection","plane","origin"],group:"Model","redirect-from":["/solidworks-api/document/selection/select-standard-plane/"]},sidebar:"tutorialSidebar",previous:{title:"Select any SOLIDWORKS objects in a batch using API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/selection/select-objects/"},next:{title:"Select corresponding features in all drawing views",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/selection/view-select-corresponding-feature/"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Target plane or origin",id:"target-plane-or-origin",level:3},{value:"Scrolling to selection",id:"scrolling-to-selection",level:3},{value:"Appending selection",id:"appending-selection",level:3},{value:"CAD+",id:"cad",level:2}],p={toc:c},d="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Right plane selected in the graphics view",src:n(77919).Z,width:"873",height:"463"}),"{ width=400 }"),(0,r.kt)("p",null,"This example demonstrates how to select standard plane (Top, Front or Right) or origin using SOLIDWORKS API by specifying its type so the selection will be consistent regardless of the plane name as it is not recommended to select the standard planes by their names as names are not consistent and may be changed in the template (e.g. different localization or standard)."),(0,r.kt)("p",null,"This macro selects the primary planes or origin of root document. To select primary planes or origin of the specific component in the assembly, hover the mouse over any component's entity (you do not need to select it) and run the macro."),(0,r.kt)("p",null,"This macro works based on the fact that the default SOLIDWORKS planes are always ordered the same way, i.e. Front, Top and Right planes are the first planes in the model, positioned before the origin feature and cannot be reordered or removed."),(0,r.kt)("p",null,"{% youtube id: zUqHCUNxJoA %}"),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"target-plane-or-origin"},"Target plane or origin"),(0,r.kt)("p",null,"To configure the macro set the type of the plane to select in the ",(0,r.kt)("strong",{parentName:"p"},"REF_GEOM")," variable. Supported values: ",(0,r.kt)("strong",{parentName:"p"},"Right"),", ",(0,r.kt)("strong",{parentName:"p"},"Top"),", ",(0,r.kt)("strong",{parentName:"p"},"Front"),", ",(0,r.kt)("strong",{parentName:"p"},"Origin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Dim REF_GEOM As swRefGeom_e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},"#Else\n    REF_GEOM = swRefGeom_e.Right \n#End If\n")),(0,r.kt)("h3",{id:"scrolling-to-selection"},"Scrolling to selection"),(0,r.kt)("p",null,"This macro allows to specify if the plane should be scrolled into view by setting ",(0,r.kt)("strong",{parentName:"p"},"SCROLL")," constant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const SCROLL As Boolean = False' scroll plane into view\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note, this macro will ignore the ",(0,r.kt)("strong",{parentName:"p"},"Feature Manager -> Scroll selected item into view")," option and scroll based on the option above preserving the setting in SOLIDWORKS.")),(0,r.kt)("h3",{id:"appending-selection"},"Appending selection"),(0,r.kt)("p",null,"Macro will append the selection if ",(0,r.kt)("strong",{parentName:"p"},"ctrl")," button is pressed unless the ",(0,r.kt)("strong",{parentName:"p"},"APPEND_SEL")," constant is set to true. In this case selection will alway be appended. This is useful when shortcut are used for the macro buttons as ",(0,r.kt)("strong",{parentName:"p"},"ctrl")," will conflict with shortcut."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const APPEND_SEL As Boolean = True\n")),(0,r.kt)("h2",{id:"cad"},"CAD+"),(0,r.kt)("p",null,"This macro is compatible with ",(0,r.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/"},"Toolbar+")," and ",(0,r.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/batch/"},"Batch+")," tools so the buttons can be added to toolbar and assigned with shortcut for easier access or run in the batch mode."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Buttons in toolbar",src:n(88035).Z,width:"540",height:"173"})),(0,r.kt)("p",null,"In order to enable ",(0,r.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/configuration/arguments/"},"macro arguments")," set the ",(0,r.kt)("strong",{parentName:"p"},"ARGS")," constant to true"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"#Const ARGS = True\n")),(0,r.kt)("p",null,"In this case it is not required to make copies of the macro to set individual ",(0,r.kt)("a",{parentName:"p",href:"#target-plane-or-origin"},"target plane or origin"),". Instead use the ",(0,r.kt)("strong",{parentName:"p"},"FRONT"),", ",(0,r.kt)("strong",{parentName:"p"},"TOP"),", ",(0,r.kt)("strong",{parentName:"p"},"RIGHT"),", ",(0,r.kt)("strong",{parentName:"p"},"ORIGIN")," arguments for the corresponding target entity."),(0,r.kt)("p",null,"You can download the icons for each button: ",(0,r.kt)("a",{target:"_blank",href:n(63431).Z},"front plane"),", ",(0,r.kt)("a",{target:"_blank",href:n(79148).Z},"top plane"),", ",(0,r.kt)("a",{target:"_blank",href:n(36629).Z},"right plane"),", ",(0,r.kt)("a",{target:"_blank",href:n(92822).Z},"origin")," or use your own icons."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'#Const ARGS = False\n\nDeclare PtrSafe Function GetKeyState Lib "user32" (ByVal nVirtKey As Long) As Integer\nConst VK_CONTROL As Long = &H11\n\nPublic Enum swRefGeom_e\n    Origin = 4\n    Front = 1\n    Top = 2\n    Right = 3\nEnd Enum\n\nDim REF_GEOM As swRefGeom_e\nConst SCROLL As Boolean = False\nConst APPEND_SEL As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n    \nSub main()\n    \n    Set swApp = Application.SldWorks\n\n    Dim swModel As SldWorks.ModelDoc2\n\n    Set swModel = swApp.ActiveDoc\n\n#If ARGS Then\n    Dim macroRunner As Object\n    Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")\n    \n    Dim param As Object\n    Set param = macroRunner.PopParameter(swApp)\n    \n    Dim vArgs As Variant\n    vArgs = param.Get("Args")\n    \n    Dim planeName As String\n    planeName = CStr(vArgs(0))\n    \n    Select Case UCase(planeName)\n        Case "ORIGIN"\n            REF_GEOM = swRefGeom_e.Origin\n        Case "TOP"\n            REF_GEOM = swRefGeom_e.Top\n        Case "FRONT"\n            REF_GEOM = swRefGeom_e.Front\n        Case "RIGHT"\n            REF_GEOM = swRefGeom_e.Right\n    End Select\n#Else\n    REF_GEOM = swRefGeom_e.Top\n#End If\n    \n    If Not swModel Is Nothing Then\n        \n        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Or _\n            swModel.GetType() = swDocumentTypes_e.swDocPART Then\n            \n            Dim swSelMgr As SldWorks.SelectionMgr\n            Set swSelMgr = swModel.SelectionManager\n                        \n            Dim swComp As SldWorks.Component2\n            Set swComp = swSelMgr.GetSelectedObjectsComponent3(-1, -1)\n            \n            If swComp Is Nothing Then\n                SelectRefGeom swModel.FirstFeature(), REF_GEOM\n            Else\n                SelectRefGeom swComp.FirstFeature(), REF_GEOM\n            End If\n            \n        Else\n            MsgBox "Only assemblies and parts are supported"\n        End If\n    Else\n        MsgBox "Please open part or assembly"\n    End If\n    \nEnd Sub\n\nSub SelectRefGeom(firstFeat As SldWorks.Feature, refGeomType As swRefGeom_e)\n\n    Dim refGeomIndex As Integer\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = firstFeat\n\n    Do While Not swFeat Is Nothing\n\n        If swFeat.GetTypeName = "RefPlane" Or swFeat.GetTypeName2() = "OriginProfileFeature" Then\n\n            refGeomIndex = refGeomIndex + 1\n            \n            If CInt(refGeomType) = refGeomIndex Then\n                \n                Dim defScrollState As Boolean\n                defScrollState = swApp.GetUserPreferenceToggle(swUserPreferenceToggle_e.swFeatureManagerEnsureVisible)\n                swApp.SetUserPreferenceToggle swUserPreferenceToggle_e.swFeatureManagerEnsureVisible, SCROLL\n                \n                Dim append As Boolean\n                \n                If APPEND_SEL Then\n                    append = True\n                Else\n                    append = GetKeyState(VK_CONTROL) < 0\n                End If\n                \n                If refGeomType = Origin Then\n                    SelectOrigin swFeat, append\n                Else\n                    swFeat.Select2 append, -1\n                End If\n                \n                swApp.SetUserPreferenceToggle swUserPreferenceToggle_e.swFeatureManagerEnsureVisible, defScrollState\n                \n                Exit Sub\n\n            End If\n\n        End If\n    \n        Set swFeat = swFeat.GetNextFeature\n\n    Loop\n    \nEnd Sub\n\nSub SelectOrigin(origFeat As SldWorks.Feature, append As Boolean)\n    \n    Dim swSketch As SldWorks.Sketch\n    Set swSketch = origFeat.GetSpecificFeature2\n    \n    Dim swSkPoint As SldWorks.SketchPoint\n    Set swSkPoint = swSketch.GetSketchPoints2()(0)\n    \n    swSkPoint.Select4 append, Nothing\n    \nEnd Sub\n')))}g.isMDXComponent=!0},63431:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/front-98600a9599bd7c0f001ef0fec79ef203.svg"},92822:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/origin-cdae865e5b97269adf8eba127b6d1c88.svg"},36629:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/right-b2439c9107e188c22c2fee79c7e0f043.svg"},79148:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/top-314335b55f0fa969673ed488f786e849.svg"},77919:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/selected-right-plane-bc3cff026a8abbccabc132de7182f3de.png"},88035:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/toolbar-b0f430c3b470f60e8cea01095e42b3d4.png"}}]);