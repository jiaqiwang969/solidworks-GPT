"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[53027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>a,kt:()=>m});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=s.createContext({}),d=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},a=function(e){var t=d(e.components);return s.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},w=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),u=d(n),w=o,m=u["".concat(c,".").concat(w)]||u[w]||p[w]||i;return n?s.createElement(m,r(r({ref:t},a),{},{components:n})):s.createElement(m,r({ref:t},a))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=w;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}w.displayName="MDXCreateElement"},60559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=n(87462),o=(n(67294),n(3905));const i={layout:"sw-tool",title:"Exclude Selected Entities from Cut List",caption:"Exclude Selected Entities from Cut List"},r=void 0,l={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/exclude-selected-bodies/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/exclude-selected-bodies/index",title:"Exclude Selected Entities from Cut List",description:"This macro uses the SOLIDWORKS API to exclude entities selected from the graphics area or feature tree from the weldment or sheet metal cut list.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/exclude-selected-bodies/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/exclude-selected-bodies",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/exclude-selected-bodies/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/exclude-selected-bodies/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/exclude-selected-bodies/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Exclude Selected Entities from Cut List",caption:"Exclude Selected Entities from Cut List"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5728\u6a21\u578b\u7b2c\u4e09\u65b9\u5b58\u50a8\u4e2d\u5e8f\u5217\u5316\u6587\u4ef6\u5185\u5bb9",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/embed-file/"},next:{title:"\u4eceSOLIDWORKS\u96f6\u4ef6\u6216\u88c5\u914d\u4ef6\u7ec4\u4ef6\u5bfc\u51fa\u5c55\u5f00\u56fe\u6848",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-all-flat-patterns/"}},c={},d=[{value:"group: Cut-List",id:"group-cut-list",level:2}],a={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,s.Z)({},a,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This macro uses the SOLIDWORKS API to exclude entities selected from the graphics area or feature tree from the weldment or sheet metal cut list.\nimage: excluded-cut-list-item.svg\nlabels: ","[api, cut-list, exclude, utility, vba]"),(0,o.kt)("h2",{id:"group-cut-list"},"group: Cut-List"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Exclude from Cut List",src:n(1771).Z,width:"377",height:"454"}),"{ width=300 }"),(0,o.kt)("p",null,"This macro allows you to exclude selected entities from the weldment or sheet metal cut list using the SOLIDWORKS API."),(0,o.kt)("p",null,"Entities can be selected either in the graphics view or the feature tree, making it easier to work with as you don't need to locate the corresponding cut list feature to exclude the entities."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2013/english/solidworks/sldworks/r_selection_filter_selection.htm"},"selection filters")," to simplify the process of selecting the desired entities from the graphics area."),(0,o.kt)("p",null,"You can also select faces, edges, or vertices of the entities to be excluded."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Selecting entities to exclude from the cut list using selection filters",src:n(50733).Z,width:"1223",height:"615"}),"{ width=500 }"),(0,o.kt)("p",null,"Watch the ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/9uZCecGg25I?t=509"},"demo video")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Dim swModel As SldWorks.ModelDoc2\n    Dim swSelMgr As SldWorks.SelectionMgr\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swCutListsColl As Collection\n        Set swCutListsColl = New Collection\n        \n        Dim i As Integer\n        \n        Dim hasBodies As Boolean\n                \n        For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n            \n            On Error Resume Next\n            \n            Dim swBody As SldWorks.Body2\n        \n            Set swBody = GetSelectedObjectBody(swSelMgr, i)\n            \n            If Not swBody Is Nothing Then\n                \n                Dim swCutListFeat As SldWorks.Feature\n                Set swCutListFeat = GetCutListFromBody(swModel, swBody)\n                \n                If Not swCutListFeat Is Nothing Then\n                    If Not Contains(swCutListsColl, swCutListFeat) Then\n                        swCutListsColl.Add swCutListFeat\n                    End If\n                Else\n                    MsgBox "Cut list item for " & swBody.Name & " not found"\n                End If\n                \n            End If\n        \n        Next\n        \n        If swCutListsColl.Count() > 0 Then\n        \n            For i = 1 To swCutListsColl.Count\n                swCutListsColl(i).ExcludeFromCutList = True\n            Next\n        \n        Else\n            MsgBox "Please select entities to exclude from the cut list"\n        End If\n        \n    Else\n        MsgBox "Please open a model"\n    End If\n    \nEnd Sub\n\nFunction GetSelectedObjectBody(selMgr As SldWorks.SelectionMgr, index As Integer) As SldWorks.Body2\n    \n    Dim swBody As SldWorks.Body2\n    \n    Dim selObj As Object\n    Set selObj = selMgr.GetSelectedObject6(index, -1)\n    \n    If Not selObj Is Nothing Then\n        If TypeOf selObj Is SldWorks.Body2 Then\n            Set swBody = selObj\n        ElseIf TypeOf selObj Is SldWorks.Face2 Then\n            Dim swFace As SldWorks.Face2\n            Set swFace = selObj\n            Set swBody = swFace.GetBody\n        ElseIf TypeOf selObj Is SldWorks.Edge Then\n            Dim swEdge As SldWorks.Edge\n            Set swEdge = selObj\n            Set swBody = swEdge.GetBody\n        ElseIf TypeOf selObj Is SldWorks.Vertex Then\n            Dim swVertex As SldWorks.Vertex\n            Set swVertex = selObj\n            Set swBody = swVertex.GetBody\n        End If\n    End If\n\n    Set GetSelectedObjectBody = swBody\n    \nEnd Function\n\nFunction GetCutListFromBody(model As SldWorks.ModelDoc2, body As SldWorks.Body2) As SldWorks.Feature\n    \n    Dim swFeat As SldWorks.Feature\n    Dim swBodyFolder As SldWorks.BodyFolder\n    \n    Set swFeat = model.FirstFeature\n    \n    Do While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2 = "CutListFolder" Then\n            \n            Set swBodyFolder = swFeat.GetSpecificFeature2\n            \n            Dim vBodies As Variant\n            \n            vBodies = swBodyFolder.GetBodies\n            \n            Dim i As Integer\n            \n            If Not IsEmpty(vBodies) Then\n                For i = 0 To UBound(vBodies)\n                    \n                    Dim swCutListBody As SldWorks.Body2\n                    Set swCutListBody = vBodies(i)\n                    \n                    If swApp.IsSame(swCutListBody, body) = swObjectEquality.swObjectSame Then\n                        Set GetCutListFromBody = swFeat\n                        Exit Function\n                    End If\n                    \n                Next\n            End If\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Loop\n\nEnd Function\n\nFunction Contains(coll As Collection, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To coll.Count\n        If coll.item(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')))}p.isMDXComponent=!0},1771:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/exclude-from-cut-list-a5c790856c7dc0d8923f2238ac05e972.png"},50733:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/filter-bodies-selection-565da4ced03d356c6beb8decf709fa6d.png"}}]);