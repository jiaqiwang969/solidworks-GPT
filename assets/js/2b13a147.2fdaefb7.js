"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[5360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},w="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),w=c(n),u=o,m=w["".concat(l,".").concat(u)]||w[u]||p[u]||i;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[w]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={caption:"Select Feature In All Drawing Views",title:"Select corresponding features in all drawing views",description:"VBA macro which selects the corresponding features of the feature in the model in all drawing views",image:"selected-feature.png"},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/document/selection/view-select-corresponding-feature/index",id:"codestack-clone/solidworks-api/document/selection/view-select-corresponding-feature/index",title:"Select corresponding features in all drawing views",description:"VBA macro which selects the corresponding features of the feature in the model in all drawing views",source:"@site/docs/codestack-clone/solidworks-api/document/selection/view-select-corresponding-feature/index.md",sourceDirName:"codestack-clone/solidworks-api/document/selection/view-select-corresponding-feature",slug:"/codestack-clone/solidworks-api/document/selection/view-select-corresponding-feature/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/selection/view-select-corresponding-feature/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/selection/view-select-corresponding-feature/index.md",tags:[],version:"current",frontMatter:{caption:"Select Feature In All Drawing Views",title:"Select corresponding features in all drawing views",description:"VBA macro which selects the corresponding features of the feature in the model in all drawing views",image:"selected-feature.png"},sidebar:"tutorialSidebar",previous:{title:"Select standard reference geometry (e.g. Front plane or origin) by type using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/selection/select-standard-ref-geometry/"},next:{title:"Wait for user selection in document using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/selection/wait-for-selection/"}},l={},c=[{value:"Using the GetCorresponding method",id:"using-the-getcorresponding-method",level:2},{value:"Using SelectById2 method",id:"using-selectbyid2-method",level:2}],d={toc:c},w="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(w,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature selected in the drawing view",src:n(7537).Z,width:"339",height:"634"}),"{ width=250 }"),(0,o.kt)("p",null,"This VBA macro demonstrates how to find the pointers for the input feature from the model space in each view in the drawing and select it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the model drawing views are created from (i.e. assembly or part)"),(0,o.kt)("li",{parentName:"ul"},"Select any feature"),(0,o.kt)("li",{parentName:"ul"},"Run macro. Macro stops an execution"),(0,o.kt)("li",{parentName:"ul"},"Activate drawing"),(0,o.kt)("li",{parentName:"ul"},"Continue the macro. All corresponding features are selected in each view")),(0,o.kt)("h2",{id:"using-the-getcorresponding-method"},"Using the GetCorresponding method"),(0,o.kt)("p",null,"This approach utilizes the ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IView~GetCorresponding.html"},"IView::GetCorresponding")," API methdo by converting the pointer from the assembly context into the drawing view context. This API is only available in SOLIDWORKS 2018 or newer for an alternative approach use the ",(0,o.kt)("a",{parentName:"p",href:"#using-selectbyid2-method"},"Using SelectById2 method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Set swFeat = swSelMgr.GetSelectedObject6(1, -1)\n    \n    \'activate drawing\n    Stop\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n        \n    Set swSelMgr = swDraw.SelectionManager\n    \n    Dim vViews As Variant\n    \n    vViews = swDraw.GetViews()(0)\n    \n    Dim i As Integer\n    \n    Dim swSelData As SldWorks.SelectData\n    Set swSelData = swSelMgr.CreateSelectData\n    \n    swDraw.ClearSelection2 True\n    \n    For i = 0 To UBound(vViews)\n        \n        Dim swView As SldWorks.View\n        \n        Set swView = vViews(i)\n        \n        If swView.ReferencedDocument Is swModel Then\n                    \n            Dim swViewFeat As SldWorks.Entity\n            Set swViewFeat = swFeat\n            \n            Set swViewFeat = swView.GetCorresponding(swFeat)\n            \n            swSelData.View = swView\n            \n            If Not swViewFeat Is Nothing Then\n                Debug.Print swViewFeat.Select4(True, swSelData)\n            Else\n                Debug.Print "Failed to get corresponding feature"\n            End If\n            \n        End If\n        \n    Next\n    \nEnd Sub\n')),(0,o.kt)("h2",{id:"using-selectbyid2-method"},"Using SelectById2 method"),(0,o.kt)("p",null,"This approach utilizes the ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~selectbyid2.html"},"IModelDocExtension::SelectByID2")," by composing the feature name to select."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swRefModel As SldWorks.ModelDoc2\n    \n    Set swRefModel = swApp.ActiveDoc\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = swRefModel.SelectionManager.GetSelectedObject6(1, -1)\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = swRefModel.SelectionManager\n    \n    Dim selName As String\n    Dim selType As String\n    selName = swFeat.GetNameForSelection(selType)\n    \n    Stop\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    Set swDraw = swApp.ActiveDoc\n    \n    Dim swView As SldWorks.View\n    Set swView = swDraw.SelectionManager.GetSelectedObject6(1, -1)\n    \n    Dim drwSelPrefix As String\n    drwSelPrefix = swFeat.Name & "@" & swView.RootDrawingComponent.Name & "@" & swView.Name\n    \n    selName = Right(selName, Len(selName) - InStr(selName, "@"))\n    \n    If False = swDraw.Extension.SelectByID2(drwSelPrefix & "/" & selName, selType, 0, 0, 0, False, 0, Nothing, 0) Then\n        Err.Raise vbError, "", "Failed to select corresponding feature in the drawing view"\n    End If\n\nEnd Sub\n')))}p.isMDXComponent=!0},7537:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/selected-feature-f11dd36245daee85e5b0a29f0aeaab2c.png"}}]);