"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[98438],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(t),d=s,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?o.createElement(f,r(r({ref:n},p),{},{components:t})):o.createElement(f,r({ref:n},p))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[m]="string"==typeof e?e:s,r[1]=a;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58227:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(87462),s=(t(67294),t(3905));const i={layout:"sw-tool",title:"VBA macro to export component positions to CSV via SOLIDWORKS API",caption:"Export Components Positions",description:"This macro exports positions of components to an external CSV text file using SOLIDWORKS API",image:"components-positions-table.png",labels:["export","csv","excel","origin"],group:"Assembly"},r=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-positions/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-positions/index",title:"VBA macro to export component positions to CSV via SOLIDWORKS API",description:"This macro exports positions of components to an external CSV text file using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-positions/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-positions",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-positions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-positions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-positions/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"VBA macro to export component positions to CSV via SOLIDWORKS API",caption:"Export Components Positions",description:"This macro exports positions of components to an external CSV text file using SOLIDWORKS API",image:"components-positions-table.png",labels:["export","csv","excel","origin"],group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"VBA macro to export sketch point coordinates to CSV file",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-point-coordinates/"},next:{title:"Export flat pattern view in the drawing using VBA macro",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-sheet-metal-views/"}},l={},c=[],p={toc:c},m="wrapper";function u(e){let{components:n,...i}=e;return(0,s.kt)(m,(0,o.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Exported positions of components in Excel",src:t(49549).Z,width:"909",height:"323"}),"{ width=350 }"),(0,s.kt)("p",null,"This macro exports the positions of components (X, Y, Z) from the active assembly to the comma separated values (CSV) file using SOLIDWORKS API. The file can be opened in Excel or any text editor."),(0,s.kt)("p",null,"The component position is a coordinate of the origin point (0, 0, 0) relative to the assembly origin."),(0,s.kt)("p",null,"Macro can export all components or only the instances of the selected component."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Specify the path to output file via ",(0,s.kt)("em",{parentName:"li"},"OUT_FILE_PATH")," constant")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const OUT_FILE_PATH As String = "D:\\locations.csv"\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Specify the conversion factor from meters for the coordinates")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const CONV_FACTOR As Double = 1000 'meters to mm\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Optionally select the component to only export its instances (i.e. all of the components with the same file path and referenced configuration). Clear selection to export all components")),(0,s.kt)("p",null,"As the result the CSV file is created which contains"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Component file full path"),(0,s.kt)("li",{parentName:"ul"},"Referenced configuration"),(0,s.kt)("li",{parentName:"ul"},"Component name"),(0,s.kt)("li",{parentName:"ul"},"X, Y, Z coordinate of the origin in the specified units")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const OUT_FILE_PATH As String = "D:\\locations.csv"\nConst CONV_FACTOR As Double = 1000 \'meters to mm\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        \n        Dim swSeedComp As SldWorks.Component2\n        Set swSeedComp = swAssy.SelectionManager.GetSelectedObjectsComponent4(1, -1)\n        \n        Dim table As String\n        table = GetComponentsPositions(swAssy, swSeedComp, CONV_FACTOR)\n        WriteTextFile OUT_FILE_PATH, table\n        \n    Else\n        MsgBox "Please open assembly"\n    End If\n    \nEnd Sub\n\nFunction GetComponentsPositions(assy As SldWorks.AssemblyDoc, seedComp As SldWorks.Component2, convFactor As Double) As String\n    \n    Dim table As String\n    table = "Path,Configuration,Name,X,Y,Z"\n    \n    Dim vComps As Variant\n    vComps = assy.GetComponents(False)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n        \n        If swComp.GetSuppression() <> swComponentSuppressionState_e.swComponentSuppressed Then\n            \n            Dim includeComp As Boolean\n            \n            If seedComp Is Nothing Then\n                includeComp = True\n            ElseIf LCase(seedComp.GetPathName()) = LCase(swComp.GetPathName()) And LCase(seedComp.ReferencedConfiguration) = LCase(swComp.ReferencedConfiguration) Then\n                includeComp = True\n            Else\n                includeComp = False\n            End If\n            \n            If includeComp Then\n                Dim vOrigin As Variant\n                vOrigin = GetOrigin(swComp)\n                table = table & vbLf\n                table = table & swComp.GetPathName() & "," & swComp.ReferencedConfiguration & "," & swComp.Name2 & "," & vOrigin(0) * convFactor & "," & vOrigin(1) * convFactor & "," & vOrigin(2) * convFactor\n            End If\n            \n        End If\n        \n    Next\n    \n    GetComponentsPositions = table\n    \nEnd Function\n\nFunction GetOrigin(comp As SldWorks.Component2) As Variant\n    \n    Dim swXForm As SldWorks.MathTransform\n    Set swXForm = comp.Transform2\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim dPt(2) As Double\n    dPt(0) = 0: dPt(1) = 0: dPt(2) = 0\n    \n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(dPt)\n    \n    Set swMathPt = swMathPt.MultiplyTransform(swXForm)\n    \n    GetOrigin = swMathPt.ArrayData\n    \nEnd Function\n\nSub WriteTextFile(filePath As String, content As String)\n    \n    Dim fileNmb As Integer\n    fileNmb = FreeFile\n    \n    Open filePath For Output As #fileNmb\n    Print #fileNmb, content\n    Close #fileNmb\n    \nEnd Sub\n')))}u.isMDXComponent=!0},49549:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/components-positions-table-8f44de4a25ad5e3f2a36317caa2c7bd6.png"}}]);