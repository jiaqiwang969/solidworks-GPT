"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[38189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>E});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var A=o.createContext({}),c=function(e){var t=o.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(A.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,A=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),k=i,E=d["".concat(A,".").concat(k)]||d[k]||m[k]||s;return n?o.createElement(E,r(r({ref:t},l),{},{components:n})):o.createElement(E,r({ref:t},l))}));function E(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=k;var a={};for(var A in t)hasOwnProperty.call(t,A)&&(a[A]=t[A]);a.originalType=e,a[d]="string"==typeof e?e:i,r[1]=a;for(var c=2;c<s;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},21027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const s={title:"Using internal IDs of SOLIDWORKS objects from API",caption:"Internal IDs",description:"This article explains the use of internal ids and the ways to read the ids from the objects",image:"sketch-segments-ids.png",labels:["id","track","internal id"]},r=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tracking-objects/internal-ids/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tracking-objects/internal-ids/index",title:"Using internal IDs of SOLIDWORKS objects from API",description:"This article explains the use of internal ids and the ways to read the ids from the objects",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tracking-objects/internal-ids/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tracking-objects/internal-ids",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tracking-objects/internal-ids/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tracking-objects/internal-ids/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tracking-objects/internal-ids/index.md",tags:[],version:"current",frontMatter:{title:"Using internal IDs of SOLIDWORKS objects from API",caption:"Internal IDs",description:"This article explains the use of internal ids and the ways to read the ids from the objects",image:"sketch-segments-ids.png",labels:["id","track","internal id"]},sidebar:"tutorialSidebar",previous:{title:"Tracking objects by temp and persistent ids in SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tracking-objects/"},next:{title:"Reading and changing names of SOLIDWORKS objects (features, components, views) using API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tracking-objects/names/"}},A={},c=[],l={toc:c},d="wrapper";function m(e){let{components:t,...s}=e;return(0,i.kt)(d,(0,o.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Internal ids assigned to sketch lines in the sketch",src:n(15458).Z,width:"580",height:"377"}),"{ width=350 }"),(0,i.kt)("p",null,"Internal ids are usually Integer or Long values which uniquely identify the SOLIDWORKS object within the model. Ids are persistent and do not change across rebuild operations or sessions. Ids also updated when the object is changed (e.g. feature is renamed or sketch line changes the coordinates)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Sketch elements (points, segments, hatches) consist of 2 Integer or Long ids")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/tracking-objects/persist-references"},"Persistent Reference IDs")," internal ids cannot be changed or assigned and not visible from the GUI (e.g. only available within the APIs). But unlike persistent reference ids, object cannot be looked up by internal id, i.e. it is required to traverse all objects in order to find required one by id."),(0,i.kt)("p",null,"Internal ids should be used if it is required to index all elements (e.g. sketch segments or features) and minimize the size of the indexed data (for example if it is required to store the data within the 3rd party storage or send via network)."),(0,i.kt)("p",null,"Internal ids can be accessed for the following objects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Component"),(0,i.kt)("li",{parentName:"ul"},"Configuration"),(0,i.kt)("li",{parentName:"ul"},"Feature"),(0,i.kt)("li",{parentName:"ul"},"Layer"),(0,i.kt)("li",{parentName:"ul"},"Light"),(0,i.kt)("li",{parentName:"ul"},"Sheet"),(0,i.kt)("li",{parentName:"ul"},"Sketch Hatch"),(0,i.kt)("li",{parentName:"ul"},"Sketch Point"),(0,i.kt)("li",{parentName:"ul"},"Sketch Segment")),(0,i.kt)("p",null,"Following example demonstrates how to retrieve the internal id from the selected object using SOLIDWORKS API. The returned array of ids also contains the type of the object as defined in ElementType_e enumerator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Enum ElementType_e\n    Component\n    Configuration\n    Feature\n    Layer\n    Light\n    Sheet\n    SketchHatch\n    SketchPoint\n    SketchSegment\nEnd Enum\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swObj As Object\n        Set swObj = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swObj Is Nothing Then        \n        \n            Dim vId As Variant\n            vId = GetObjectId(swObj)\n        \n            Dim i As Integer\n            For i = 0 To UBound(vId)\n                Debug.Print vId(i);\n            Next\n        Else\n            MsgBox "Please select object to get id"\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n        \nEnd Sub\n\nFunction GetObjectId(obj As Object) As Variant\n    \n    Dim id As Variant\n    \n    If TypeOf obj Is SldWorks.Component2 Then\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = obj\n        id = Array(ElementType_e.Component, swComp.GetId())\n        \n    ElseIf TypeOf obj Is SldWorks.Configuration Then\n        \n        Dim swConf As SldWorks.Configuration\n        Set swConf = obj\n        id = Array(ElementType_e.Configuration, swConf.GetId())\n        \n    ElseIf TypeOf obj Is SldWorks.Feature Then\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = obj\n        id = Array(ElementType_e.Feature, swFeat.GetId())\n        \n    ElseIf TypeOf obj Is SldWorks.Layer Then\n        \n        Dim swLayer As SldWorks.Layer\n        Set swLayer = obj\n        id = Array(ElementType_e.Layer, swLayer.GetId())\n        \n    ElseIf TypeOf obj Is SldWorks.Light Then\n        \n        Dim swLight As SldWorks.Light\n        Set swLight = obj\n        id = Array(ElementType_e.Light, swLight.GetId())\n        \n    ElseIf TypeOf obj Is SldWorks.Sheet Then\n        \n        Dim swSheet As SldWorks.Sheet\n        Set swSheet = obj\n        id = Array(ElementType_e.Sheet, swSheet.GetId())\n        \n    ElseIf TypeOf obj Is SldWorks.SketchHatch Then\n        \n        Dim swSkHatch As SldWorks.SketchHatch\n        Set swSkHatch = obj\n        Dim hatchId As Variant\n        hatchId = swSkHatch.GetId()\n        id = Array(ElementType_e.SketchHatch, swSkHatch.GetSketch().GetId(), hatchId(0), hatchId(1))\n        \n    ElseIf TypeOf obj Is SldWorks.SketchPoint Then\n        \n        Dim swSkPt As SldWorks.SketchPoint\n        Set swSkPt = obj\n        Dim skPtId As Variant\n        skPtId = swSkPt.GetId()\n        id = Array(ElementType_e.SketchPoint, swSkPt.GetSketch().GetId(), skPtId(0), skPtId(1))\n        \n    ElseIf TypeOf obj Is SldWorks.SketchSegment Then\n        \n        Dim swSkSeg As SldWorks.SketchSegment\n        Set swSkSeg = obj\n        Dim skSegId As Variant\n        skSegId = swSkSeg.GetId()\n        id = Array(ElementType_e.SketchSegment, swSkSeg.GetSketch().GetId(), skSegId(0), skSegId(1))\n        \n    Else\n        Err.Raise vbObjectError, , "Object doesn\'t have id"\n    End If\n    \n    GetObjectId = id\n    \nEnd Function\n')))}m.isMDXComponent=!0},15458:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);