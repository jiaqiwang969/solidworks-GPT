"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[47788],{3905:(e,t,s)=>{s.d(t,{Zo:()=>a,kt:()=>f});var o=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,o,n=function(e,t){if(null==e)return{};var s,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)s=i[o],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)s=i[o],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var c=o.createContext({}),d=function(e){var t=o.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},a=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var s=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),u=d(s),m=n,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return s?o.createElement(f,r(r({ref:t},a),{},{components:s})):o.createElement(f,r({ref:t},a))}));function f(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=s.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,r[1]=l;for(var d=2;d<i;d++)r[d]=s[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,s)}m.displayName="MDXCreateElement"},68958:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=s(87462),n=(s(67294),s(3905));const i={layout:"sw-tool",title:"SOLIDWORKS macro to exclude selected bodies from cut-lists",caption:"Exclude Selected Bodies From Cut-Lists",description:"Macro excludes the solid bodies selected from the graphics area or from the feature tree from weldment or sheet metal cut-list using SOLIDWORKS API",image:"excluded-cut-list-item.svg",labels:["api","cut-list","exclude","utility","vba"],group:"Cut-List"},r=void 0,l={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/exclude-selected-bodies/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/exclude-selected-bodies/index",title:"SOLIDWORKS macro to exclude selected bodies from cut-lists",description:"Macro excludes the solid bodies selected from the graphics area or from the feature tree from weldment or sheet metal cut-list using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/exclude-selected-bodies/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/exclude-selected-bodies",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/exclude-selected-bodies/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/exclude-selected-bodies/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/exclude-selected-bodies/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"SOLIDWORKS macro to exclude selected bodies from cut-lists",caption:"Exclude Selected Bodies From Cut-Lists",description:"Macro excludes the solid bodies selected from the graphics area or from the feature tree from weldment or sheet metal cut-list using SOLIDWORKS API",image:"excluded-cut-list-item.svg",labels:["api","cut-list","exclude","utility","vba"],group:"Cut-List"},sidebar:"tutorialSidebar",previous:{title:"Macro to copy SOLIDWORKS custom properties from cut-list to model",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/copy-custom-properties/"},next:{title:"Macro to rename SOLIDWORKS bodies of cut-list items using the predefined template",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/rename-cut-list-bodies/"}},c={},d=[],a={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,o.Z)({},a,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Exclude from cut-list",src:s(60947).Z,width:"377",height:"454"}),"{ width=300 }"),(0,n.kt)("p",null,"This macro allows to exclude the selected bodies from the weldment or sheet metal cut list using SOLIDWORKS API."),(0,n.kt)("p",null,"Bodies can be selected in the graphics view or feature tree which makes the process easier as it is not required to find the corresponding cut-list feature to exclude the body."),(0,n.kt)("p",null,"It is possible to use ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2013/english/solidworks/sldworks/r_selection_filter_selection.htm"},"selection filters")," for bodies to simplify the picking of required ones from the graphics area."),(0,n.kt)("p",null,"It is also possible to select face, edge or vertex of the body to be excluded."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Bodies to exclude from cut list selected using selection filters",src:s(30236).Z,width:"1223",height:"615"}),"{ width=500 }"),(0,n.kt)("p",null,"Watch ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/9uZCecGg25I?t=509"},"video demonstration")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Dim swModel As SldWorks.ModelDoc2\n    Dim swSelMgr As SldWorks.SelectionMgr\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swCutListsColl As Collection\n        Set swCutListsColl = New Collection\n        \n        Dim i As Integer\n        \n        Dim hasBodies As Boolean\n                \n        For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n            \n            On Error Resume Next\n            \n            Dim swBody As SldWorks.Body2\n        \n            Set swBody = GetSelectedObjectBody(swSelMgr, i)\n            \n            If Not swBody Is Nothing Then\n                \n                Dim swCutListFeat As SldWorks.Feature\n                Set swCutListFeat = GetCutListFromBody(swModel, swBody)\n                \n                If Not swCutListFeat Is Nothing Then\n                    If Not Contains(swCutListsColl, swCutListFeat) Then\n                        swCutListsColl.Add swCutListFeat\n                    End If\n                Else\n                    MsgBox "Failed to find the cut list item for " & swBody.Name\n                End If\n                \n            End If\n        \n        Next\n        \n        If swCutListsColl.Count() > 0 Then\n        \n            For i = 1 To swCutListsColl.Count\n                swCutListsColl(i).ExcludeFromCutList = True\n            Next\n        \n        Else\n            MsgBox "Please select bodies to exclude from cut list"\n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nFunction GetSelectedObjectBody(selMgr As SldWorks.SelectionMgr, index As Integer) As SldWorks.Body2\n    \n    Dim swBody As SldWorks.Body2\n    \n    Dim selObj As Object\n    Set selObj = selMgr.GetSelectedObject6(index, -1)\n    \n    If Not selObj Is Nothing Then\n        If TypeOf selObj Is SldWorks.Body2 Then\n            Set swBody = selObj\n        ElseIf TypeOf selObj Is SldWorks.Face2 Then\n            Dim swFace As SldWorks.Face2\n            Set swFace = selObj\n            Set swBody = swFace.GetBody\n        ElseIf TypeOf selObj Is SldWorks.Edge Then\n            Dim swEdge As SldWorks.Edge\n            Set swEdge = selObj\n            Set swBody = swEdge.GetBody\n        ElseIf TypeOf selObj Is SldWorks.Vertex Then\n            Dim swVertex As SldWorks.Vertex\n            Set swVertex = selObj\n            Set swBody = swVertex.GetBody\n        End If\n    End If\n\n    Set GetSelectedObjectBody = swBody\n    \nEnd Function\n\nFunction GetCutListFromBody(model As SldWorks.ModelDoc2, body As SldWorks.Body2) As SldWorks.Feature\n    \n    Dim swFeat As SldWorks.Feature\n    Dim swBodyFolder As SldWorks.BodyFolder\n    \n    Set swFeat = model.FirstFeature\n    \n    Do While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2 = "CutListFolder" Then\n            \n            Set swBodyFolder = swFeat.GetSpecificFeature2\n            \n            Dim vBodies As Variant\n            \n            vBodies = swBodyFolder.GetBodies\n            \n            Dim i As Integer\n            \n            If Not IsEmpty(vBodies) Then\n                For i = 0 To UBound(vBodies)\n                    \n                    Dim swCutListBody As SldWorks.Body2\n                    Set swCutListBody = vBodies(i)\n                    \n                    If swApp.IsSame(swCutListBody, body) = swObjectEquality.swObjectSame Then\n                        Set GetCutListFromBody = swFeat\n                        Exit Function\n                    End If\n                    \n                Next\n            End If\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Loop\n\nEnd Function\n\nFunction Contains(coll As Collection, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To coll.Count\n        If coll.item(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')))}p.isMDXComponent=!0},60947:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/exclude-from-cut-list-a5c790856c7dc0d8923f2238ac05e972.png"},30236:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/filter-bodies-selection-565da4ced03d356c6beb8decf709fa6d.png"}}]);