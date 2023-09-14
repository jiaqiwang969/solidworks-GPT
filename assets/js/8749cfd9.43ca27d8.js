"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[37594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||s;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[f]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<s;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const s={layout:"sw-tool",title:"SOLIDWORKS VBA macro to copy preselected faces",caption:"Copy Surfaces",description:'SOLIDWORKS VBA macro to copy selected faces by calling the "Surface Offset" feature with distance 0',image:"surface-offset-equal.svg",labels:["surface","geometry","macro","face","solidworks api","vba"],group:"Geometry"},a=void 0,c={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/surface-offset-equal/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/surface-offset-equal/index",title:"SOLIDWORKS VBA macro to copy preselected faces",description:'SOLIDWORKS VBA macro to copy selected faces by calling the "Surface Offset" feature with distance 0',source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/surface-offset-equal/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/surface-offset-equal",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/surface-offset-equal/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/surface-offset-equal/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/surface-offset-equal/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"SOLIDWORKS VBA macro to copy preselected faces",caption:"Copy Surfaces",description:'SOLIDWORKS VBA macro to copy selected faces by calling the "Surface Offset" feature with distance 0',image:"surface-offset-equal.svg",labels:["surface","geometry","macro","face","solidworks api","vba"],group:"Geometry"},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS macro finds intersection points between surface and curve",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/surface-curve-intersection/"},next:{title:"Macro to suspend graphics update using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/suspend-graphics-update/"}},i={},l=[],u={toc:l},f="wrapper";function p(e){let{components:t,...s}=e;return(0,r.kt)(f,(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Author: ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/eddyalleman/"},"Eddy Alleman")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Offset Surface with distance 0",src:n(2192).Z,width:"525",height:"300"}),"{ width=525 }"),(0,r.kt)("p",null,"This VBA macro creates a new surface feature from selected faces in a part file. Thus duplicating the selected surfaces and giving it a predefined color.\nThis can be usefull if you want to reuse existing surfaces and don't want to consolidate existing ones."),(0,r.kt)("p",null,"Steps to take"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A part file must be the active document."),(0,r.kt)("li",{parentName:"ul"},"You have to select at least one face."),(0,r.kt)("li",{parentName:"ul"},"If you select other types of entities, they will be filtered out."),(0,r.kt)("li",{parentName:"ul"},"Run the macro. As the result a Surface Offset is created of the selected faces with distance 0"),(0,r.kt)("li",{parentName:"ul"},"This feature will get a yellow color by default, but you can change the RGB color to set another one.")),(0,r.kt)("p",null,"Author: ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/eddyalleman/"},"Eddy Alleman")," (",(0,r.kt)("a",{parentName:"p",href:"https://www.edalsolutions.be/index.php/en/"},"EDAL Solutions"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Option Explicit\n\n' INPUT You can change to another RGB color here (This example uses yellow)\nConst RED = 255\nConst GREEN = 255\nConst BLUE = 0\n\nDim swxApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim selMgr As SldWorks.SelectionMgr\n\nSub main()\n\ntry_:\n    On Error GoTo catch_\n\n    Set swxApp = Application.SldWorks\n    \n    Set swModel = swxApp.ActiveDoc\n\n    'Check if active document is a Part file\n    Select Case True\n    \n           Case swModel Is Nothing, swModel.GetType <> swDocPART\n              Call swxApp.SendMsgToUser2(\"Please open a part file\", swMbInformation, swMbOk)\n              \n           Case Else\n               Call ProcessSelectedFaces\n               \n    End Select\n\n    GoTo finally_:\n    \ncatch_:\n\n    MsgBox Err.Description\n    \nfinally_:\n    \nEnd Sub\n\nPrivate Function ProcessSelectedFaces() As Boolean\n\n    EnableUpdates False\n                  \n        Set selMgr = swModel.SelectionManager\n        \n        'Get number of selections\n        Dim nSelections As Integer\n        nSelections = selMgr.GetSelectedObjectCount2(-1)\n               \n        'only process if there is something selected\n        If nSelections > 0 Then\n         \n              Call RemoveNonFacesFromSelection\n\n              'Get the number of selected faces\n              Dim nFaces As Integer\n              nFaces = selMgr.GetSelectedObjectCount2(-1)\n        \n              If nFaces > 0 Then\n              \n                  'Offset selected faces\n                  swModel.InsertOffsetSurface 0#, False\n                  \n                  'Give a name to the newly created offset feature\n                  Dim featOffset As Feature\n                  Set featOffset = swModel.Extension.GetLastFeatureAdded\n                    \n                  featOffset.Name = featOffset.Name & \" Offsets \" & nFaces & \" Faces\"\n                  \n                  'give the offset feature a color\n                  Call SetColor(featOffset)\n                     \n                  ' Deselect face to see new color\n                  swModel.ClearSelection2 True\n\n              End If 'nFaces > 0\n      \n         End If 'nSelections > 0\n        \n    EnableUpdates True\n    \nEnd Function\n\n\nPrivate Function EnableUpdates(update As Boolean)\n    With swModel\n        .FeatureManager.EnableFeatureTree = update\n        .ActiveView.EnableGraphicsUpdate = update\n    End With\nEnd Function\n\n'Removes entities that are not faces from the selection manager\nPrivate Function RemoveNonFacesFromSelection()\n\n        'Get number of selections\n        Dim nSelections As Integer\n        nSelections = selMgr.GetSelectedObjectCount2(-1)\n                \n        Dim i As Integer\n        For i = 0 To nSelections\n           \n           Dim ObjectType As Long\n           ObjectType = selMgr.GetSelectedObjectType3(i, -1)\n\n           If ObjectType <> swSelectType_e.swSelFACES Then\n               Dim res As Boolean\n               res = selMgr.DeSelect2(i, -1)\n           End If\n                  \n        Next\n              \nEnd Function\n\n'Sets the INPUT color on a feature\nPrivate Function SetColor(ByRef Feat As Feature) As Boolean\n\n      'get material properties from model\n      Dim MatProp As Variant\n      MatProp = swModel.MaterialPropertyValues\n                  \n      ' set color fi. RGB(225, 255 , 0), but we need them to be in range 0 to 1\n      MatProp(0) = RED / 255\n      MatProp(1) = GREEN / 255\n      MatProp(2) = BLUE / 255\n            \n      SetColor = Feat.SetMaterialPropertyValues(MatProp)\n                  \nEnd Function\n")))}p.isMDXComponent=!0},2192:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/surface-offset-workflow-76008da18dd5469458e045688fae9be6.png"}}]);