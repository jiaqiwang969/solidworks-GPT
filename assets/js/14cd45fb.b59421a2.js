"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[47945],{3905:(e,n,o)=>{o.d(n,{Zo:()=>c,kt:()=>u});var t=o(67294);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,s=function(e,n){if(null==e)return{};var o,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=t.createContext({}),p=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},w=t.forwardRef((function(e,n){var o=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(o),w=s,u=m["".concat(l,".").concat(w)]||m[w]||d[w]||i;return o?t.createElement(u,r(r({ref:n},c),{},{components:o})):t.createElement(u,r({ref:n},c))}));function u(e,n){var o=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=o.length,r=new Array(i);r[0]=w;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[m]="string"==typeof e?e:s,r[1]=a;for(var p=2;p<i;p++)r[p]=o[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}w.displayName="MDXCreateElement"},53573:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var t=o(87462),s=(o(67294),o(3905));const i={title:"Get all visible components in the drawing view using SOLIDWORKS API",caption:"Get All Visible Components",description:"VBA macro to get all visible components in the drawing view (including sub-assemblies) using SOLIDWORKS API",image:"drawing-view-feature-tree.png",labels:["visible components","drawing view"]},r=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-all-visible-components/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-all-visible-components/index",title:"Get all visible components in the drawing view using SOLIDWORKS API",description:"VBA macro to get all visible components in the drawing view (including sub-assemblies) using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-all-visible-components/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-all-visible-components",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-all-visible-components/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-all-visible-components/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-all-visible-components/index.md",tags:[],version:"current",frontMatter:{title:"Get all visible components in the drawing view using SOLIDWORKS API",caption:"Get All Visible Components",description:"VBA macro to get all visible components in the drawing view (including sub-assemblies) using SOLIDWORKS API",image:"drawing-view-feature-tree.png",labels:["visible components","drawing view"]},sidebar:"tutorialSidebar",previous:{title:"Find and select specific edge in the drawing view using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/find-specific-edge-in-drawing-view/"},next:{title:"Get bodies and materials from drawing view using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-view-bodies/"}},l={},p=[],c={toc:p},m="wrapper";function d(e){let{components:n,...i}=e;return(0,s.kt)(m,(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Drawing view feature manager tree",src:o(62221).Z,width:"613",height:"773"}),"{ width=350 }"),(0,s.kt)("p",null,"This VBA macro extracts all visible components from the selected drawing view using SOLIDWORKS API. Macro will extract all types of components (part components and assembly components)."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2013/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iview~getvisiblecomponents.html"},"IView::GetVisibleComponents")," SOLIDWORKS API methods only extracts part components (i.e. sldprt files) while all sub-assembly components are not returned. Furthermore the pointers to ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IComponent2.html"},"IComponent2")," interfaces returned by this function are drawing context components. The ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2~getparent.html"},"IComponent2::GetParent")," SOLIDWORKS API method returns Nothing for all components which means it is not possible to find the parent sub-assembly."),(0,s.kt)("p",null,"The below code addresses this limitations and returns all components in the context of their assembly document."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swView As SldWorks.view\n        Set swView = swModel.SelectionManager.GetSelectedObjectsDrawingView2(1, -1)\n        \n        If Not swView Is Nothing Then\n            \n            Dim vComps As Variant\n            vComps = GetAllVisibleComponents(swView)\n            \n            If Not IsEmpty(vComps) Then\n                \n                Dim i As Integer\n                Dim swComp As SldWorks.Component2\n                \n                For i = 0 To UBound(vComps)\n                    Set swComp = vComps(i)\n                    Debug.Print swComp.Name2\n                Next\n            End If\n            \n        Else\n            MsgBox "Please select drawing view"\n        End If\n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nFunction GetAllVisibleComponents(view As SldWorks.view) As Variant\n        \n    Dim swRootModel As SldWorks.ModelDoc2\n    Set swRootModel = view.RootDrawingComponent.Component.GetModelDoc2\n    \n    Dim vComps As Variant\n    vComps = view.GetVisibleComponents()\n            \n    Dim swAllComps() As SldWorks.Component2\n    Dim isInit As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n        \n        Dim swCorrComp As SldWorks.Component2\n        Set swCorrComp = GetCorrespondingComponent(swRootModel, swComp)\n            \n        While Not swCorrComp Is Nothing\n                                    \n            Dim add As Boolean\n            add = False\n\n            If Not isInit Then\n                ReDim swAllComps(0)\n                isInit = True\n                add = True\n            Else\n                If Not Contains(swAllComps, swCorrComp) Then\n                    ReDim Preserve swAllComps(UBound(swAllComps) + 1)\n                    add = True\n                End If\n            End If\n\n            If add Then\n                Set swAllComps(UBound(swAllComps)) = swCorrComp\n            End If\n            \n            Set swCorrComp = swCorrComp.GetParent\n\n        Wend\n        \n    Next\n    \n    GetAllVisibleComponents = swAllComps\n    \nEnd Function\n\nFunction GetCorrespondingComponent(assy As SldWorks.AssemblyDoc, swDrawComp As SldWorks.Component2) As SldWorks.Component2\n        \n    Dim name As String\n    name = swDrawComp.Name2\n    \n    Dim vNameParts As Variant\n    vNameParts = Split(name, "/")\n    \n    Dim swComp As SldWorks.Component2\n    \n    Dim swCompFeat As SldWorks.Feature\n    \n    Dim i As Integer\n    i = 0\n    \n    While swCompFeat Is Nothing\n        Set swCompFeat = assy.FeatureByName(vNameParts(i))\n        i = i + 1\n    Wend\n    \n    Set swComp = swCompFeat.GetSpecificFeature2\n    \n    For i = i To UBound(vNameParts)\n                \n        Set swCompFeat = swComp.FeatureByName(vNameParts(i))\n        \n        If swCompFeat Is Nothing Then\n            Set GetComponentByName = Nothing\n            Exit Function\n        End If\n        \n        Set swComp = swCompFeat.GetSpecificFeature2\n        \n    Next\n    \n    Set GetCorrespondingComponent = swComp\n    \nEnd Function\n\nFunction Contains(vArr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vArr)\n        If vArr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')))}d.isMDXComponent=!0},62221:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/drawing-view-feature-tree-95ff8c3d754fd3c8c58bfed6e0375fd2.png"}}]);