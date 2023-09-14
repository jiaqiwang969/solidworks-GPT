"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[93012],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),A=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=A(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=A(n),p=s,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:s,i[1]=a;for(var A=2;A<r;A++)i[A]=n[A];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>A});var o=n(87462),s=(n(67294),n(3905));const r={title:"Overview of SOLIDWORKS Assembly context and usage from API",caption:"Assembly Context",description:"Explanation of assembly contexts and the ways to transform the pointer form assembly context to the model context and vice-versa using SOLIDWORKS API",image:"assembly-model-context.png",labels:["context","corresponding","assembly"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/context/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/context/index",title:"Overview of SOLIDWORKS Assembly context and usage from API",description:"Explanation of assembly contexts and the ways to transform the pointer form assembly context to the model context and vice-versa using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/context/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/context",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/context/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/context/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/context/index.md",tags:[],version:"current",frontMatter:{title:"Overview of SOLIDWORKS Assembly context and usage from API",caption:"Assembly Context",description:"Explanation of assembly contexts and the ways to transform the pointer form assembly context to the model context and vice-versa using SOLIDWORKS API",image:"assembly-model-context.png",labels:["context","corresponding","assembly"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS VBA macro to compose flat BOM table using API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/compose-flat-bom/"},next:{title:"Display assembly visualization page using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/display-assembly-visualization-page/"}},l={},A=[{value:"Adding features into part in the context of the assembly",id:"adding-features-into-part-in-the-context-of-the-assembly",level:2},{value:"Converting the pointers",id:"converting-the-pointers",level:2},{value:"Model operations in the context of the assembly",id:"model-operations-in-the-context-of-the-assembly",level:2},{value:"Test Case 1: Moving by acquiring the pointers directly from the assembly context",id:"test-case-1-moving-by-acquiring-the-pointers-directly-from-the-assembly-context",level:3},{value:"Test Case 2: Accessing the objects from the underlying model context in the context of the assembly",id:"test-case-2-accessing-the-objects-from-the-underlying-model-context-in-the-context-of-the-assembly",level:3},{value:"Test Case 3: Converting the context of objects",id:"test-case-3-converting-the-context-of-objects",level:3},{value:"Summary",id:"summary",level:2}],c={toc:A},m="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(m,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Assembly and Model contexts",src:n(44561).Z,width:"1338",height:"899"}),"{ width=450 }"),(0,s.kt)("p",null,"All SOLIDWORKS entities in 3D models (parts and assemblies) can be presented in 2 different contexts:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Model context - this is the context the entity is created in. For example feature created in the part document, dimension added in the part. Solid body with the faces generated by boss-extrude feature"),(0,s.kt)("li",{parentName:"ul"},"Assembly context - this is the context where the models (and all their entities) are instantiated. For example the same part can be added twice into the assembly, so the elements of this part would have two different sets of pointers in the assembly which correspond to the corresponding components.")),(0,s.kt)("p",null,"It is important to use the correct contexts when working with elements from SOLIDWORKS API. When assembly in-context editing is performed all the pointers must be provided in the assembly context."),(0,s.kt)("h2",{id:"adding-features-into-part-in-the-context-of-the-assembly"},"Adding features into part in the context of the assembly"),(0,s.kt)("p",null,"It is required to always use the pointer to active assembly document (",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~activedoc.html"},"ISldWorks::ActiveDoc"),") while editing or adding new features in the feature tree even if component is in editing state."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Editing the component in the context",src:n(16282).Z,width:"824",height:"651"}),"{ width=250 }"),(0,s.kt)("p",null,"For example to insert the extruded feature into the part document from the image above which is edited in the context the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeatureManager~FeatureExtrusion2.html"},"IFeatureManager::FeatureExtrusion2")," must be called on the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldoc2_methods.html"},"IModelDoc2")," which is an active assembly but not the model of the component being edited."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        \n        Dim swComp As SldWorks.Component2\n        \n        swAssy.InsertNewVirtualPart Nothing, swComp\n        \n        swComp.Select4 False, Nothing, False\n        \n        swAssy.EditPart\n        \n        Debug.Assert swComp.GetModelDoc2() Is swAssy.GetEditTarget() 'current editing model equals to the component's model\n        Debug.Assert Not swComp.GetModelDoc2() Is swAssy 'component's model doesn't equal to the assembly model\n        \n        Dim swRefPlaneFeat As SldWorks.Feature\n        Set swRefPlaneFeat = FindStandardPlane(swComp)\n        \n        Dim swSketchFeat As SldWorks.Feature\n        \n        'Creating circle in the context of the current editing model via the main assembly model\n        Set swSketchFeat = CreateCircle(swRefPlaneFeat, swAssy)\n        \n        'Creating extrude in the context of the current editing model via the main assembly model\n        CreateExtrude swSketchFeat, swAssy\n        \n        swAssy.EditAssembly\n        swAssy.EditRebuild\n        \n    Else\n        MsgBox \"Please open assembly\"\n    End If\n\nEnd Sub\n\nFunction FindStandardPlane(comp As SldWorks.Component2) As SldWorks.Feature\n    \n    Dim swCompModel As SldWorks.ModelDoc2\n    Set swCompModel = comp.GetModelDoc2\n    \n    Dim i As Integer\n    i = 1\n    Dim swRefPlaneFeat As SldWorks.Feature\n    \n    Do\n        Set swRefPlaneFeat = swCompModel.FeatureByPositionReverse(i)\n        i = i + 1\n    Loop While swRefPlaneFeat.GetTypeName2() <> \"RefPlane\"\n    \n    'converting the pointer of the feature into the assembly context so it can be selected in the assembly\n    Set FindStandardPlane = comp.GetCorresponding(swRefPlaneFeat)\n    \nEnd Function\n\nFunction CreateCircle(plane As SldWorks.Feature, model As SldWorks.ModelDoc2) As SldWorks.Feature\n    \n    plane.Select2 False, -1\n    \n    model.SketchManager.InsertSketch True\n    model.SketchManager.AddToDB = True\n    \n    Set CreateCircle = model.SketchManager.ActiveSketch\n    \n    model.ClearSelection2 True\n    model.SketchManager.CreateCircleByRadius 0, 0, 0, 0.01\n    model.SketchManager.AddToDB = False\n    \n    model.ClearSelection2 True\n    model.SketchManager.InsertSketch True\n    \nEnd Function\n\nSub CreateExtrude(sketch As SldWorks.Feature, model As SldWorks.ModelDoc2)\n    \n    sketch.Select2 False, 0\n    \n    model.FeatureManager.FeatureExtrusion2 True, False, False, 0, 0, 0.01, 0.01, False, False, False, False, 0, 0, False, False, False, False, True, True, True, 0, 0, False\n    model.ClearSelection2 True\n    \nEnd Sub\n")),(0,s.kt)("h2",{id:"converting-the-pointers"},"Converting the pointers"),(0,s.kt)("p",null,"SOLIDWORKS API provides the method to convert the pointers between contexts:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~getcorresponding.html"},"IModelDocExtension::GetCorresponding")," converts the pointer from the assembly context into the underlying component's model context"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2~getcorresponding.html"},"IComponent2::GetCorresponding")," converts the pointer from the underlying model context to the assembly context for this component.")),(0,s.kt)("h2",{id:"model-operations-in-the-context-of-the-assembly"},"Model operations in the context of the assembly"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"3D Sketch with a sketch point within the component",src:n(52483).Z,width:"721",height:"537"}),"{ width=350 }"),(0,s.kt)("p",null,"The following test cases will demonstrate different approaches and results while working with context in assembly. ",(0,s.kt)("a",{target:"_blank",href:n(11708).Z},"Download Sample Assembly"),". This assembly consists of a single virtual component (this can be an external components as well). There is a 3D Sketch (",(0,s.kt)("em",{parentName:"p"},"3DSketch1"),") with a point in the component's model. For simplicity another sketch called ",(0,s.kt)("em",{parentName:"p"},"Reference")," is added to the assembly which displays current point coordinate."),(0,s.kt)("p",null,"The purposes of the following cases is to move the point in the 3D Sketch in XYZ by 10 mm from the assembly."),(0,s.kt)("h3",{id:"test-case-1-moving-by-acquiring-the-pointers-directly-from-the-assembly-context"},"Test Case 1: Moving by acquiring the pointers directly from the assembly context"),(0,s.kt)("p",null,"When assembly is opened pointer to any object retrieved directly from the assembly or from the component will have the active assembly context."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iselectionmgr~getselectedobject6.html"},"ISelectionMgr::GetSelectedObject6")," of the object selected in the component (e.g. face or feature) will be valid in the current assembly"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2~firstfeature.html"},"IComponent2::FirstFeature")," returns the pointer for the first feature in the component's model in the context of the assembly.")),(0,s.kt)("p",null,"These pointers are safe to work with within the context of this assembly. For example face colour can be changed, feature can be renamed, point coordinate can be modified."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Open downloaded sample assembly"),(0,s.kt)("li",{parentName:"ul"},"Select the ",(0,s.kt)("em",{parentName:"li"},"3DSketch1")," feature in the tree"),(0,s.kt)("li",{parentName:"ul"},"Run the following macro")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n    \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swAssy.SelectionManager.GetSelectedObject6(1, -1)\n        \n        MoveSketchPoints swFeat, swAssy\n    \n        \'exit edit in context model\n        swAssy.ClearSelection2 True\n        swAssy.EditAssembly\n        \n    Else\n        MsgBox "Please open assembly document"\n    End If\n    \nEnd Sub\n\nSub MoveSketchPoints(sketchFeat As SldWorks.Feature, editModel As SldWorks.ModelDoc2)\n    \n    Dim swSketch As SldWorks.Sketch\n    Set swSketch = sketchFeat.GetSpecificFeature2\n    \n    Debug.Print "Sketch Feature Selected: " & sketchFeat.Select2(False, -1)\n    \n    editModel.SketchManager.Insert3DSketch True\n    \n    Dim vSkPts As Variant\n    vSkPts = swSketch.GetSketchPoints2()\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vSkPts)\n        Dim swSkPt As SldWorks.SketchPoint\n        Set swSkPt = vSkPts(i)\n        swSkPt.X = swSkPt.X + 0.01\n        swSkPt.Y = swSkPt.Y + 0.01\n        swSkPt.Z = swSkPt.Z + 0.01\n    Next\n    \n    editModel.SketchManager.Insert3DSketch True\n    \nEnd Sub\n')),(0,s.kt)("p",null,"As the result sketch point is moved by 10 mm in XYZ directions."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Sketch point updated its location",src:n(38075).Z,width:"298",height:"403"}),"{ width=250 }"),(0,s.kt)("h3",{id:"test-case-2-accessing-the-objects-from-the-underlying-model-context-in-the-context-of-the-assembly"},"Test Case 2: Accessing the objects from the underlying model context in the context of the assembly"),(0,s.kt)("p",null,"It is not always possible to retrieve the pointer to the required object directly from the assembly context. If out of context object (i.e. object which was retrieved or converted to the underlying component's model) is used within the assembly context this may produce unexpected results."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Using of out of context object equivalent of invoking the APIs on the invisible model. In some cases this will produce correct behaviour, in some cases it may fail or even cause the crash.")),(0,s.kt)("p",null,"The following example demonstrates the result of using out of context pointers by converting the context from assembly to the underlying document via ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~getcorresponding.html"},"IModelDocExtension::GetCorresponding")),(0,s.kt)("p",null,"Follow the steps from previous test case and run the following macro"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n    \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swAssy.SelectionManager.GetSelectedObject6(1, -1)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = swFeat.GetComponent\n    \n        Dim swCorrFeat As SldWorks.Feature\n        Dim swCompModel As SldWorks.ModelDoc2\n        Set swCompModel = swComp.GetModelDoc2\n        Set swCorrFeat = swCompModel.Extension.GetCorresponding(swFeat)\n        \n        Dim swCorrFeatByName As SldWorks.Feature\n        Set swCorrFeatByName = swCompModel.FeatureByName(swFeat.Name)\n        \n        Debug.Print "Pointers are equal: " & (swCorrFeat Is swCorrFeatByName)\n        \n        MoveSketchPoints swCorrFeat, swCompModel\n        \n    Else\n        MsgBox "Please open assembly document"\n    End If\n    \nEnd Sub\n\nSub MoveSketchPoints(sketchFeat As SldWorks.Feature, editModel As SldWorks.ModelDoc2)\n    \n    Dim swSketch As SldWorks.Sketch\n    Set swSketch = sketchFeat.GetSpecificFeature2\n    \n    Debug.Print "Sketch Feature Selected: " & sketchFeat.Select2(False, -1)\n    \n    editModel.SketchManager.Insert3DSketch True\n    \n    Dim vSkPts As Variant\n    vSkPts = swSketch.GetSketchPoints2()\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vSkPts)\n        Dim swSkPt As SldWorks.SketchPoint\n        Set swSkPt = vSkPts(i)\n        swSkPt.X = swSkPt.X + 0.01\n        swSkPt.Y = swSkPt.Y + 0.01\n        swSkPt.Z = swSkPt.Z + 0.01\n    Next\n    \n    editModel.SketchManager.Insert3DSketch True\n    \nEnd Sub\n')),(0,s.kt)("p",null,"As the result sketch points are not moved despite the output window displays the success"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Sketch point is not moved despite no errors displayed",src:n(72744).Z,width:"448",height:"457"}),"{ width=250 }"),(0,s.kt)("p",null,"The reason of this behaviour caused by the fact that sketch cannot be edited if the model is not opened in its own window."),(0,s.kt)("p",null,"Now, open the component in its own window"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Open part in its own window from the component",src:n(49694).Z,width:"512",height:"518"}),"{ width=250 }"),(0,s.kt)("p",null,"Activate the assembly and rerun the macro. Now slightly different result is displayed. Component is marked as modified and needs rebuilding. If model rebuilt sketch is updated accordingly."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Component needs rebuilding after out of the context modification",src:n(23921).Z,width:"321",height:"523"}),"{ width=200 }"),(0,s.kt)("h3",{id:"test-case-3-converting-the-context-of-objects"},"Test Case 3: Converting the context of objects"),(0,s.kt)("p",null,"In many cases the initial pointer is available in the context of the underlying model. And if modifications required in the context of assembly it is required to convert the pointer via ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2~getcorresponding.html"},"IComponent2::GetCorresponding")," method."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Close all models and reopen sample assembly"),(0,s.kt)("li",{parentName:"ul"},"Open the part component in its own window.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Open part in its own window from the component",src:n(49694).Z,width:"512",height:"518"}),"{ width=250 }"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Select the ",(0,s.kt)("em",{parentName:"li"},"3DSketch1")," in the active part document"),(0,s.kt)("li",{parentName:"ul"},"Run the following macro")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        Stop \'Activate assembly and select the component\n        \n        Dim swAssy As SldWorks.AssemblyDoc\n        Set swAssy = swApp.ActiveDoc\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = swAssy.SelectionManager.GetSelectedObjectsComponent4(1, -1)\n        Dim swCompFeat As SldWorks.Feature\n        Set swCompFeat = swComp.GetCorresponding(swFeat)\n        \n        Dim swCompFeatByName As SldWorks.Feature\n        Set swCompFeatByName = swComp.FeatureByName(swFeat.Name)\n        \n        Debug.Print "Pointers are equal: " & (swCompFeat Is swCompFeatByName)\n        \n        MoveSketchPoints swCompFeat, swAssy\n        \n    Else\n        MsgBox "Please open assembly document"\n    End If\n    \nEnd Sub\n\nSub MoveSketchPoints(sketchFeat As SldWorks.Feature, editModel As SldWorks.ModelDoc2)\n    \n    Dim swSketch As SldWorks.Sketch\n    Set swSketch = sketchFeat.GetSpecificFeature2\n    \n    Debug.Print "Sketch Feature Selected: " & sketchFeat.Select2(False, -1)\n    \n    editModel.SketchManager.Insert3DSketch True\n    \n    Dim vSkPts As Variant\n    vSkPts = swSketch.GetSketchPoints2()\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vSkPts)\n        Dim swSkPt As SldWorks.SketchPoint\n        Set swSkPt = vSkPts(i)\n        swSkPt.X = swSkPt.X + 0.01\n        swSkPt.Y = swSkPt.Y + 0.01\n        swSkPt.Z = swSkPt.Z + 0.01\n    Next\n    \n    editModel.SketchManager.Insert3DSketch True\n    \nEnd Sub\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Macro stops execution"),(0,s.kt)("li",{parentName:"ul"},"Activate the assembly (you can just close the part document)"),(0,s.kt)("li",{parentName:"ul"},"Select the component and continue the macro")),(0,s.kt)("p",null,"Macro will convert the context and change the coordinate so the coordinates can be successfully updated in the context of the assembly"),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"When adding or editing features of the components in the context of the assembly call ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iassemblydoc~editpart2.html"},"IAssemblyDoc::EditPart2"),"/",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iassemblydoc~editassembly.html"},"IAssemblyDoc::EditAssembly")," to start/finish editing the component in the context")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"It is not required to explicitly set the ",(0,s.kt)("em",{parentName:"p"},"Edit In Context")," state to perform certain operations (for example editing the sketch points location, deleting features etc.). The behaviour matches the user interface behaviour (i.e. if it is required to call ",(0,s.kt)("em",{parentName:"p"},"Edit Part")," command to perform certain operation it is required to call corresponding API as well)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Do not use the pointer of the component's underlying model (",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2~getmodeldoc2.html"},"IComponent2::GetModelDoc2"),") to perform the operation of the current editing target component. Use the pointer to top level document (i.e. active assembly)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Avoid using the incorrect context. This may result in unexpected behaviour.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Use ::GetCorresponding functions to convert the pointer between contexts when needed"))))}d.isMDXComponent=!0},11708:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/SketchAssm-b7bdab20534be14a124e4b840d9b9de9.SLDASM"},44561:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/assembly-model-context-807e12b07cbde7ee863756265cf7576d.png"},52483:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/component-3dsketch-c3c7ed093083f6639cf0fa8bc13a16b8.png"},16282:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/in-context-editing-5e9451b70170d397e3c872197b9648dc.png"},72744:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAHJCAMAAAAl9BmJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAD/AJCQOpDb/8nx++n6/vf4+P7+/3ZMADqQ26zFwQA6kGza9VRUVJq10QAAMv/bkGaQkMDAwSgAM+zs7HJycrPMxTo6OmCo3yYAADo6kN6ShB4eHv+2Zn1PTqG717XO5s1zYwArfZqamsvLzdnZ2wBmtrhDLLZmAGLX9GYAOv//tu7u7rDr+eLi4tuQOqnC3aqofbnQ6GYAAJ651HpuMuzFvwAAWmVSgSZunkMUIqqqqrHK5I+/24qJibZmOma2/6S+2TMzM/Hx8WYAZpA6AGEsAOCroObm5sbGytHR1KzF4CcAW37J46zFnwBNnoCAgJBmkJA6OoBWVruam08mNXa/29WFdpies5qRXIuRqdmajkYAMl09TWJhYfTTzFNWZiZuv9XV2MViT5WWld3d3r29vToAAJjk+NqdkZfI4s7O0Lb//6CgoESM3o9rMa+uroLf9gAAZjoAOmZmZl5eXuS0q7CPW0NDQ5NvWtv2/JdxMzoAZnh3d2Su5LpJMkUAAOGZjH5RAL9UPyUlJeSfkrHKo6uMWb3u+7Kysry8v8/P0bGugAAAOmlpaei9tQBRo3jc9u/IwfDLxAAtgJPF4ChyxKXo+N2jmHrE3pnL5Y3i97GRW+jo6ZlyM4DM5pJuMkgANHpOAFApOEWN4IBSAJHD3XvF4CdxwigAACdvwQAAAJnMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///xA4/uMAAACsdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAFlRWxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAASwUlEQVR4Xu3dj2Mb513HcYWCTRlmrlGWMhbatXbrESMHAg3YJmssstnxWA20MPajhJCkjMwsjHYrbKWjLSuZu+z3GNtcQtaxwV/J9/t9nrvnudPpl2PJ93nu814sne6H7nQv30mWtK01y6AjIHgEBI+A4BEQPAKCR0DwCAheDrjJ6paXGVwA9NesLo0N+CusThEQPAKCR0DwZgiI3fiAv8vq1C8QEDsCgvfPBMRufMBH2PT7+KfW4j71cT/+kUfGB7zIpt9zz/5V3LPP+fEXL/48ARFa+/a/xX17zY8nIEhr3/rXuG8FwH8/LOBnW63H/tAPD+uzz1y8+Ivn/9zfYuO39tSvxz11P4BnfXcf+x8/NLS7z/gB35ujL8qstU88+eSTv3Hliv6ToU+s+fFnz/4WAREywCuzs/qvCPgf9wV47w8+1Gr9/W//Wuv8f54t3jh7t9V698NyfU9Otb8ngPf++uxZmdbSpVqtlozJ5mDD80egAJSPwPEBd3x3H/vuzr13P7xzt/XYd3/pQ8/sFG/o1DfP/3Tnnl63dOr/7ez808M7NvFNGZnPwUbIAFXQ/ATQj9/Z+dv7AxSNj375HUcS3/joJx/eEax37NqmKKCmc+pPNocbywbnj8ClpSV/BPrxhwHc8H3xO3+38drPNja+8sl/2dj4QunGF+QsKb3z1kf+WGf9xoZN3fiijJM5de5sDrsvNqS1T7/66qvip/9k6NNrfvzGxg8PDfj2d36w8dr3vNmPSjd+dF7hZNCu31bA72185csyl85pP34ONkpr33/99df/7MoV/SdD3w+A/zAZwLd+Va4ld/2aA7TDURfTubM52Citffhv4j58VIA/UbP/9oDFG+f/a+M9vy/X6tUSQJmqZm/9r46QifkcbITWPv/+uM8HwG8eFvBteTb7QX/AjZ/IE5yMeI/8afENPYXqVF3mL2WijNQxbg42Qmtf/4u4r98P4KNs+v342afinv2xH//oo79MQIQ+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"},23921:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/needs-rebuild-component-9fb8e6a35fd28a6cf91fa77c7249f805.png"},49694:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/open-part-from-component-5b514d0d8b08ef626a684ded5ad68a03.png"},38075:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);