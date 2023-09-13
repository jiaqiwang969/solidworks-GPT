"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[1087],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,d=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(t),k=s,m=p["".concat(d,".").concat(k)]||p[k]||u[k]||i;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=k;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a[p]="string"==typeof e?e:s,o[1]=a;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},94643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const i={caption:"Get Corresponding Entity Of Derived Part",title:"Get corresponding entities (faces, edges and vertices) in the derived part using SOLIDWORKS API",description:"VBA macro demonstrates how to find the corresponding entities from the input part in the derived part using SOLIDWORKS API"},o=void 0,a={unversionedId:"codestack/solidworks-api/document/tracking-objects/tracking-ids/derived-part-get-corresponding-entity/index",id:"codestack/solidworks-api/document/tracking-objects/tracking-ids/derived-part-get-corresponding-entity/index",title:"Get corresponding entities (faces, edges and vertices) in the derived part using SOLIDWORKS API",description:"VBA macro demonstrates how to find the corresponding entities from the input part in the derived part using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/tracking-objects/tracking-ids/derived-part-get-corresponding-entity/index.md",sourceDirName:"codestack/solidworks-api/document/tracking-objects/tracking-ids/derived-part-get-corresponding-entity",slug:"/codestack/solidworks-api/document/tracking-objects/tracking-ids/derived-part-get-corresponding-entity/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/tracking-objects/tracking-ids/derived-part-get-corresponding-entity/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/tracking-objects/tracking-ids/derived-part-get-corresponding-entity/index.md",tags:[],version:"current",frontMatter:{caption:"Get Corresponding Entity Of Derived Part",title:"Get corresponding entities (faces, edges and vertices) in the derived part using SOLIDWORKS API",description:"VBA macro demonstrates how to find the corresponding entities from the input part in the derived part using SOLIDWORKS API"},sidebar:"tutorialSidebar",previous:{title:"Tracking IDs in SOLIDWORKS API to track entities across operations",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/tracking-objects/tracking-ids/"},next:{title:"Upgrade cosmetic threads in active SOLIDWORKS part or assembly using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/upgrade-cosmetic-threads/"}},d={},c=[{value:"Running the macro",id:"running-the-macro",level:2}],l={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,s.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartDoc~InsertPart3.html"},"IPartDoc::InsertPart3")," API allows to insert a derived part into another part. However the API to find the corresponding entity of the input part, similarly to ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/assembly/context#converting-the-pointers"},"components")," is not available."),(0,s.kt)("p",null,"This VBA macro demonstrates a performance efficient workaround for this limitation."),(0,s.kt)("h2",{id:"running-the-macro"},"Running the macro"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Open the source part (this is the part to be inserted into another part). This part must be saved on the disc"),(0,s.kt)("li",{parentName:"ul"},"Select one or many entities (faces, edges, vertices). These can be selected in different bodies in case of the multi-body part"),(0,s.kt)("li",{parentName:"ul"},"Run the macro. Macro will index inputs and stop the execution"),(0,s.kt)("li",{parentName:"ul"},"Open or create new part where the source part needs to be inserted"),(0,s.kt)("li",{parentName:"ul"},"Continue macro execution"),(0,s.kt)("li",{parentName:"ul"},"As the result derived part is inserted and all the corresponding entities are selected")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swSrcModel As SldWorks.ModelDoc2\n    \n    Set swSrcModel = swApp.ActiveDoc\n    \n    If swSrcModel.GetType() <> swDocumentTypes_e.swDocPART Then\n        Err.Raise vbError, "", "Only parts are supported"\n    End If\n    \n    Dim trackDefId As Integer\n    trackDefId = TrackSelectedEntities(swSrcModel)\n    \n    Stop\n    \n    Dim swTargModel As SldWorks.ModelDoc2\n    Set swTargModel = swApp.ActiveDoc\n    \n    Dim swTargPart As SldWorks.PartDoc\n    Set swTargPart = swTargModel\n    \n    Dim swDerPartFeat As SldWorks.Feature\n    \n    Set swDerPartFeat = swTargPart.InsertPart3(swSrcModel.GetPathName(), swInsertPartOptions_e.swInsertPartImportSolids, swSrcModel.ConfigurationManager.ActiveConfiguration.Name)\n    \n    Dim vTrackedEnts As Variant\n    vTrackedEnts = GetTrackedEntitites(swTargModel, swDerPartFeat, trackDefId)\n    \n    If Not IsEmpty(vTrackedEnts) Then\n        swTargModel.Extension.MultiSelect2 vTrackedEnts, False, Nothing\n    Else\n        Err.Raise vbError, "", "No tracked entities found"\n    End If\n    \nEnd Sub\n\nFunction TrackSelectedEntities(model As SldWorks.ModelDoc2) As Integer\n    \n    Dim trackDefId As Integer\n    \n    trackDefId = swApp.RegisterTrackingDefinition("_DerivedPartTrack_")\n    \n    Dim i As Integer\n    \n    For i = 1 To model.SelectionManager.GetSelectedObjectCount2(-1)\n            \n        Select Case model.SelectionManager.GetSelectedObjectType3(i, -1)\n            Case swSelectType_e.swSelFACES\n                Dim swFace As SldWorks.Face2\n                Set swFace = model.SelectionManager.GetSelectedObject6(i, -1)\n                If swFace.SetTrackingID(trackDefId, i) <> swTrackingIDError_e.swTrackingIDError_NoError Then\n                    Err.Raise vbError, "", "Failed to track face"\n                End If\n            Case swSelectType_e.swSelEDGES\n                Dim swEdge As SldWorks.Edge\n                Set swEdge = model.SelectionManager.GetSelectedObject6(i, -1)\n                If swEdge.SetTrackingID(trackDefId, i) <> swTrackingIDError_e.swTrackingIDError_NoError Then\n                    Err.Raise vbError, "", "Failed to track edge"\n                End If\n            Case swSelectType_e.swSelVERTICES\n                Dim swVertex As SldWorks.Vertex\n                Set swVertex = model.SelectionManager.GetSelectedObject6(i, -1)\n                If swVertex.SetTrackingID(trackDefId, i) <> swTrackingIDError_e.swTrackingIDError_NoError Then\n                    Err.Raise vbError, "", "Failed to track vertex"\n                End If\n            Case Else\n                Err.Raise vbError, "", "Only faces, edges and vertices are supported"\n        End Select\n        \n    Next\n    \n    TrackSelectedEntities = trackDefId\n    \nEnd Function\n\nFunction GetTrackedEntitites(model As SldWorks.ModelDoc2, derFeatPart As SldWorks.Feature, trackDefId As Integer) As Variant\n\n    Dim isInit As Boolean\n    isInit = False\n    Dim swEnts() As SldWorks.Entity\n    \n    Dim searchTypes(2) As Integer\n    searchTypes(0) = swTopoEntity_e.swTopoFace\n    searchTypes(1) = swTopoEntity_e.swTopoEdge\n    searchTypes(2) = swTopoEntity_e.swTopoVertex\n    \n    Dim vBodies As Variant\n    vBodies = GetFeatureBodies(derFeatPart)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vBodies)\n    \n        Dim vTrackedEnts As Variant\n        Dim swBody As SldWorks.Body2\n        Set swBody = vBodies(i)\n        \n        vTrackedEnts = model.Extension.FindTrackedObjects(trackDefId, swBody, searchTypes, Empty)\n        \n        If Not IsEmpty(vTrackedEnts) Then\n            If Not isInit Then\n                isInit = True\n                ReDim swEnts(UBound(vTrackedEnts))\n            Else\n                ReDim Preserve swEnts(UBound(swEnts) + UBound(vTrackedEnts) + 1)\n            End If\n            \n            Dim j As Integer\n            \n            For j = 0 To UBound(vTrackedEnts)\n                Dim swEnt As SldWorks.Entity\n                Set swEnt = vTrackedEnts(j)\n                Set swEnts(UBound(swEnts) - UBound(vTrackedEnts) + j) = swEnt\n            Next\n            \n        End If\n    \n    Next\n\n    If isInit Then\n        GetTrackedEntitites = swEnts\n    Else\n        GetTrackedEntitites = Empty\n    End If\n\nEnd Function\n\nFunction GetFeatureBodies(feat As SldWorks.Feature) As Variant\n    \n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swBodies() As SldWorks.Body2\n\n    Dim i As Integer\n    \n    Dim vFaces As Variant\n    \n    vFaces = feat.GetFaces\n    \n    For i = 0 To UBound(vFaces)\n                \n        Dim swFace As SldWorks.Face2\n    \n        Set swFace = vFaces(i)\n        \n        Dim swBody As SldWorks.Body2\n        \n        Set swBody = swFace.GetBody\n        \n            If Not isInit Then\n                ReDim swBodies(0)\n                Set swBodies(0) = swBody\n                isInit = True\n            Else\n                If Not Contains(swBodies, swBody) Then\n                    ReDim Preserve swBodies(UBound(swBodies) + 1)\n                    Set swBodies(UBound(swBodies)) = swBody\n                End If\n            End If\n    \n    Next\n\n    If isInit Then\n        GetFeatureBodies = swBodies\n    Else\n        GetFeatureBodies = Empty\n    End If\n\nEnd Function\n\nFunction Contains(vArr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vArr)\n        If vArr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')))}u.isMDXComponent=!0}}]);