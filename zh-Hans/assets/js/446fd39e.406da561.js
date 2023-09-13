"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[49429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=s.createContext({}),c=function(e){var t=s.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return s.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?s.createElement(f,i(i({ref:t},l),{},{components:n})):s.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<r;c++)i[c]=n[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(87462),o=(n(67294),n(3905));const r={title:"Read configuration specific cut-list property from the selected component using SOLIDWORKS API",caption:"Read Component Cut-List Properties",description:"VBA macro to read all properties from the cut-list of the selected component in the assembly with respect to the component configuration using SOLIDWORKS API",image:"cut-list-properties.png",labels:["cut-list property","component"]},i=void 0,a={unversionedId:"codestack/solidworks-api/data-storage/custom-properties/read-component-cutlist/index",id:"codestack/solidworks-api/data-storage/custom-properties/read-component-cutlist/index",title:"Read configuration specific cut-list property from the selected component using SOLIDWORKS API",description:"VBA macro to read all properties from the cut-list of the selected component in the assembly with respect to the component configuration using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/data-storage/custom-properties/read-component-cutlist/index.md",sourceDirName:"codestack/solidworks-api/data-storage/custom-properties/read-component-cutlist",slug:"/codestack/solidworks-api/data-storage/custom-properties/read-component-cutlist/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/custom-properties/read-component-cutlist/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/data-storage/custom-properties/read-component-cutlist/index.md",tags:[],version:"current",frontMatter:{title:"Read configuration specific cut-list property from the selected component using SOLIDWORKS API",caption:"Read Component Cut-List Properties",description:"VBA macro to read all properties from the cut-list of the selected component in the assembly with respect to the component configuration using SOLIDWORKS API",image:"cut-list-properties.png",labels:["cut-list property","component"]},sidebar:"tutorialSidebar",previous:{title:"Read custom properties from file, configuration and cut-list elements using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/custom-properties/read-all-properties/"},next:{title:"Read summary information from file using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/custom-properties/read-summary-information/"}},p={},c=[],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cut list properties",src:n(60359).Z,width:"1453",height:"714"}),"{ width=550 }"),(0,o.kt)("p",null,"This VBA macro example demonstrates how to read and print all custom properties from all cut-list elements of the selected component in assembly using SOLIDWORKS API."),(0,o.kt)("p",null,"Cut-lists are read from the respective referenced configuration of the component."),(0,o.kt)("p",null,"Result is output to the immediate window of VBA editor in the following format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CS-02-1 (A)\n    Sheet<1>\n        Bounding Box Length: 150\n        Bounding Box Width: 50\n        Sheet Metal Thickness: 0.74\n        Bounding Box Area: 7500\n        Bounding Box Area-Blank: 7500\n        Cutting Length-Outer: 400\n        Cutting Length-Inner: 0\n        Cut Outs: 0\n        Bends: 0\n        Bend Allowance: 0.5\n        Material: Material <not specified>\n        Mass: 5.52\n        Description: Sheet\n        Bend Radius: 0.74\n        Surface Treatment: Finish <not specified>\n        Cost-TotalCost: 0\n        QUANTITY: 1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Then\n        \n            Dim swSelMgr As SldWorks.SelectionMgr\n            Set swSelMgr = swModel.SelectionManager\n            \n            Dim swComp As SldWorks.Component2\n            Set swComp = swSelMgr.GetSelectedObjectsComponent2(1)\n            \n            If Not swComp Is Nothing Then\n                PrintComponentCutListProperties swComp\n            Else\n                MsgBox "Please select component"\n            End If\n            \n        Else\n            MsgBox "Active document is not an assembly"\n        End If\n    Else\n        MsgBox "Please open assembly"\n    End If\n    \nEnd Sub\n\nSub PrintComponentCutListProperties(comp As SldWorks.Component2)\n    \n    Dim vCutLists As Variant\n    vCutLists = GetCutLists(comp)\n    \n    Debug.Print comp.Name2 & " (" & comp.ReferencedConfiguration & ")"\n    \n    If Not IsEmpty(vCutLists) Then\n    \n        Dim i As Integer\n        \n        For i = 0 To UBound(vCutLists)\n        \n            Dim swCutListFeat As SldWorks.Feature\n            Set swCutListFeat = vCutLists(i)\n            Debug.Print "    " & swCutListFeat.Name\n            \n            Dim swCustPrpsMgr As SldWorks.CustomPropertyManager\n            Set swCustPrpsMgr = swCutListFeat.CustomPropertyManager\n            \n            Dim vPrpNames As Variant\n            Dim vPrpTypes As Variant\n            Dim vPrpVals As Variant\n            Dim vResVals As Variant\n            Dim vPrpsLink As Variant\n            \n            Dim prpsCount As Integer\n            prpsCount = swCustPrpsMgr.GetAll3(vPrpNames, vPrpTypes, vPrpVals, vResVals, vPrpsLink)\n            \n            Dim j As Integer\n            \n            Dim indent As String\n            indent = "        "\n            \n            For j = 0 To prpsCount - 1\n                Debug.Print indent & vPrpNames(j) & ": " & vPrpVals(j)\n            Next\n            \n        Next\n    Else\n        Debug.Print "    -No Cut Lists-"\n    End If\n    \nEnd Sub\n\nFunction GetCutLists(comp As SldWorks.Component2) As Variant\n    \n    Dim swCutListFeats() As SldWorks.Feature\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swFeat As SldWorks.Feature\n    Dim swBodyFolder As SldWorks.BodyFolder\n    \n    Set swFeat = comp.FirstFeature\n    \n    Do While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2 = "CutListFolder" Then\n            \n            If Not isInit Then\n                isInit = True\n                ReDim swCutListFeats(0)\n            Else\n                ReDim Preserve swCutListFeats(UBound(swCutListFeats) + 1)\n            End If\n            \n            Set swCutListFeats(UBound(swCutListFeats)) = swFeat\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Loop\n    \n    If isInit Then\n        GetCutLists = swCutListFeats\n    Else\n        GetCutLists = Empty\n    End If\n\nEnd Function\n')))}d.isMDXComponent=!0},60359:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/cut-list-properties-446a1e6850899db528a28797e447eff7.png"}}]);