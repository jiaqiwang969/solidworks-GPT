"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[16202],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):A(A({},n),e)),t},l=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=i(t),m=a,p=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(p,A(A({ref:n},l),{},{components:t})):r.createElement(p,A({ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,A=new Array(o);A[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:a,A[1]=s;for(var i=2;i<o;i++)A[i]=t[i];return r.createElement.apply(null,A)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>A,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const o={title:"Get type of cylindrical face using SOLIDWORKS API",caption:"Get Type Of Cylindrical Face",description:"Macro identifies the type of the selected simple cylindrical face (through all hole, blind hole or external hole) using SOLIDWORKS API based on the loops type",image:"cylindrical-faces-types.png",labels:["geometry","face","hole","outer","inner"]},A=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/cylindrical-face-type/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/cylindrical-face-type/index",title:"Get type of cylindrical face using SOLIDWORKS API",description:"Macro identifies the type of the selected simple cylindrical face (through all hole, blind hole or external hole) using SOLIDWORKS API based on the loops type",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/cylindrical-face-type/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/cylindrical-face-type",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/cylindrical-face-type/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/cylindrical-face-type/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/cylindrical-face-type/index.md",tags:[],version:"current",frontMatter:{title:"Get type of cylindrical face using SOLIDWORKS API",caption:"Get Type Of Cylindrical Face",description:"Macro identifies the type of the selected simple cylindrical face (through all hole, blind hole or external hole) using SOLIDWORKS API based on the loops type",image:"cylindrical-faces-types.png",labels:["geometry","face","hole","outer","inner"]},sidebar:"tutorialSidebar",previous:{title:"Create selectable 3D bounding box sketch using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-selectable-bounding-box/"},next:{title:"Determine if selected face is hole or boss using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/determine-hole-boss/"}},c={},i=[{value:"Algorithm",id:"algorithm",level:3}],l={toc:i},d="wrapper";function u(e){let{components:n,...o}=e;return(0,a.kt)(d,(0,r.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Types of cylindrical faces",src:t(39820).Z,width:"619",height:"579"}),"{ width=250 }"),(0,a.kt)("p",null,"This macro identifies the type of the selected simple cylindrical face (through all hole, blind hole or external hole) based on the loops type using SOLIDWORKS API."),(0,a.kt)("p",null,"Macro will only work with cylindrical faces whose adjacent faces are planar faces and upper and lower boundaries of the cylinder are closed circular edges."),(0,a.kt)("h3",{id:"algorithm"},"Algorithm"),(0,a.kt)("p",null,"Macro traverses the loops of coedges of upper and lower boundary edges. If there is at least one internal loop that means that selected face is a hole, otherwise it is an external boss. If both of the boundary loops are internal that means that the hole is through all, if one boundary loop is external but other is internal that means that the selected face is a blind hole (i.e. not a through all hole)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Enum FaceType_e\n    Outer\n    BlindHole\n    ThroughHole\n    ContainsCutouts\nEnd Enum\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swSelMgr As SldWorks.SelectionMgr\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swFace As SldWorks.Face2\n        Set swFace = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swFace Is Nothing Then\n            \n            Dim swSurf As SldWorks.Surface\n            Set swSurf = swFace.GetSurface\n            \n            If swSurf.IsCylinder() Then\n                Dim faceType As FaceType_e\n                faceType = GetCylindricalFaceType(swFace)\n                \n                Select Case faceType\n                    Case FaceType_e.BlindHole\n                        MsgBox "Selected face is a blind hole"\n                    Case FaceType_e.Outer\n                        MsgBox "Selected face is an outer face"\n                    Case FaceType_e.ThroughHole\n                        MsgBox "Selected face is through all hole"\n                    Case FaceType_e.ContainsCutouts\n                        MsgBox "Selected face contains cutouts"\n                End Select\n                \n            Else\n                MsgBox "Selected face is not cylindrical"\n            End If\n            \n        Else\n            MsgBox "Please select face"\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nFunction GetCylindricalFaceType(face As SldWorks.Face2) As FaceType_e\n\n    Dim vEdges As Variant\n        \n    vEdges = face.GetEdges\n    \n    If UBound(vEdges) + 1 > 2 Then\n        GetCylindricalFaceType = FaceType_e.ContainsCutouts\n    ElseIf UBound(vEdges) + 1 = 2 Then\n        \n        Dim innerCount As Integer\n        \n        For i = 0 To UBound(vEdges)\n            \n            Dim swEdge As SldWorks.edge\n            Set swEdge = vEdges(i)\n            \n            If HasInnerLoop(swEdge) Then\n                innerCount = innerCount + 1\n            End If\n            \n        Next\n    \n        If innerCount = 0 Then\n            GetCylindricalFaceType = FaceType_e.Outer\n        ElseIf innerCount = 1 Then\n            GetCylindricalFaceType = FaceType_e.BlindHole\n        ElseIf innerCount = 2 Then\n            GetCylindricalFaceType = FaceType_e.ThroughHole\n        End If\n    End If\n    \nEnd Function\n\nFunction HasInnerLoop(edge As SldWorks.edge) As Boolean\n    \n    Dim vCoEdges As Variant\n    vCoEdges = edge.GetCoEdges\n    \n    HasInnerLoop = False\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vCoEdges)\n    \n        Dim swCoEdge As SldWorks.CoEdge\n        Set swCoEdge = vCoEdges(i)\n        \n        Dim swLoop As SldWorks.Loop2\n        Set swLoop = swCoEdge.GetLoop()\n        \n        If False = swLoop.IsOuter() Then\n            HasInnerLoop = True\n        End If\n    Next\n    \nEnd Function\n')))}u.isMDXComponent=!0},39820:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"}}]);