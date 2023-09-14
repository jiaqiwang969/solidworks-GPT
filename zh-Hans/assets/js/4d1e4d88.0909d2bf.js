"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[64052],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var s=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,s,o=function(e,n){if(null==e)return{};var t,s,o={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r=s.createContext({}),A=function(e){var n=s.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=A(e.components);return s.createElement(r.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},w=s.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=A(t),w=o,u=g["".concat(r,".").concat(w)]||g[w]||d[w]||i;return t?s.createElement(u,a(a({ref:n},c),{},{components:t})):s.createElement(u,a({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=w;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l[g]="string"==typeof e?e:o,a[1]=l;for(var A=2;A<i;A++)a[A]=t[A];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}w.displayName="MDXCreateElement"},49322:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>A});var s=t(87462),o=(t(67294),t(3905));const i={title:"Align line along axis using SOLIDWORKS API",caption:"Align Line Along Axis",description:"Example demonstrates how to align all sketch lines in the active sketch (add the sketch relation) with one of the selected options (along X, Y or Z)",image:"sw-sketch-line-relation.png",labels:["example","horizontal","relation","sketch","solidworks api","vertical"],"redirect-from":["/2018/03/solidworks-api-sketch-align-line-relations.html"]},a=void 0,l={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/align-line-along-axis/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/align-line-along-axis/index",title:"Align line along axis using SOLIDWORKS API",description:"Example demonstrates how to align all sketch lines in the active sketch (add the sketch relation) with one of the selected options (along X, Y or Z)",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/align-line-along-axis/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/align-line-along-axis",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/align-line-along-axis/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/align-line-along-axis/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/align-line-along-axis/index.md",tags:[],version:"current",frontMatter:{title:"Align line along axis using SOLIDWORKS API",caption:"Align Line Along Axis",description:"Example demonstrates how to align all sketch lines in the active sketch (add the sketch relation) with one of the selected options (along X, Y or Z)",image:"sw-sketch-line-relation.png",labels:["example","horizontal","relation","sketch","solidworks api","vertical"],"redirect-from":["/2018/03/solidworks-api-sketch-align-line-relations.html"]},sidebar:"tutorialSidebar",previous:{title:"Macro for extended advanced selections using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/advanced-selection/"},next:{title:"Macro animates switching of configurations using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/animate-configurations/"}},r={},A=[],c={toc:A},g="wrapper";function d(e){let{components:n,...i}=e;return(0,o.kt)(g,(0,s.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Example demonstrates how to align all sketch lines in the active sketch (add the sketch relation) with one of the selected options using SOLIDWORKS API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Along X (horizontal)"),(0,o.kt)("li",{parentName:"ul"},"Along Y (vertical)"),(0,o.kt)("li",{parentName:"ul"},"Along Z")),(0,o.kt)("p",null,"This example will work with both 2D and 3D sketch."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isketchrelationmanager.html"},"ISketchRelationManager")," SOLIDWORKS API interface is used to manage the relations of the sketch entities."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Relations in sketch line",src:t(59040).Z,width:"320",height:"229"}),"{ width=320 height=229 }"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Enum AlignmentDir_e\n    AlongX = 1\n    AlongY = 2\n    AlongZ = 3\nEnd Enum\n\nDim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSketch As SldWorks.Sketch\nDim swSketchRelMgr As SldWorks.SketchRelationManager\n\nSub main()\n\n    On Error Resume Next\n    \n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Set swSketch = swModel.SketchManager.ActiveSketch\n        \n        If Not swSketch Is Nothing Then\n            \n            Dim dir As AlignmentDir_e\n            dir = InputBox("Specify the type of alignment for sketch lines: 1 - Along X, 2 - Along Y, 3 - Along Z")\n            \n            Set swSketchRelMgr = swSketch.RelationManager\n            \n            Dim vSegs As Variant\n                        \n            vSegs = swSketch.GetSketchSegments\n         \n            Dim swSkLines() As SldWorks.SketchSegment\n            Dim isSkLinesArrInit As Boolean\n            isSkLinesArrInit = False\n            \n            For i = 0 To UBound(vSegs)\n                \n                Dim swSkSeg As SldWorks.SketchSegment\n                Set swSkSeg = vSegs(i)\n                \n                If swSkSeg.GetType() = swSketchSegments_e.swSketchLINE Then\n                    \n                    If Not isSkLinesArrInit Then\n                        isSkLinesArrInit = True\n                        ReDim swSkLines(0)\n                    Else\n                        ReDim Preserve swSkLines(UBound(swSkLines) + 1)\n                    End If\n                    \n                    Set swSkLines(UBound(swSkLines)) = swSkSeg\n                    \n                End If\n                \n            Next\n            \n            Dim constType As swConstraintType_e\n                \n            Select Case dir\n                Case AlignmentDir_e.AlongX\n                    If swSketch.Is3D() Then\n                        constType = swConstraintType_e.swConstraintType_ALONGX3D\n                    Else\n                        constType = swConstraintType_e.swConstraintType_HORIZONTAL\n                    End If\n                Case AlignmentDir_e.AlongY\n                    If swSketch.Is3D Then\n                        constType = swConstraintType_e.swConstraintType_ALONGY3D\n                    Else\n                        constType = swConstraintType_e.swConstraintType_VERTICAL\n                    End If\n                Case AlignmentDir_e.AlongZ\n                    If swSketch.Is3D Then\n                        constType = swConstraintType_e.swConstraintType_ALONGZ\n                    Else\n                        MsgBox "Invalid. Z is not a valid orientation for 2D Sketch"\n                        End\n                    End If\n            End Select\n            \n            swSketchRelMgr.AddRelation swSkLines, constType\n        \n        Else\n            MsgBox "Please open the sketch"\n        End If\n    \n    Else\n        MsgBox "Please open document"\n    End If\n    \nEnd Sub\n\n')))}d.isMDXComponent=!0},59040:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADlCAMAAAAV6N5xAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAP8BAQefAPb29gAAtUCOuvydnT9DQQD0APz87Yq91JKIeQBNfLj+uNXRxuO5BTsCAf/IyABzzcnNsbOaZK2mqWpeboBUA3qbAC8DROBtcFac6G31akCIpqHL47e2tXpZRtrby+bk2wAAOYSRq0JXeoJybdS6m7sGGePm/bGYkJOTktvGZR0di7u/yUpK/2NON/7+/v/e3qmUXElwkYGjw9zUpWFqjaam/tTa27nJzaqjj8PR3uPex9IUGlkIB9W7O5iAbru7lnZVLJR0TgAtNwdxo6iONLfN1GM5NFJSVm2uYwC5RZGdrtTd6uzs69TU1KLsnlpaz8HAwKa7uXCTs+vjyUlPiujYqKeOeLzX7buegYOCg9vJqwBFav/rYsrcxuDU4DMDHIuPmNTV2DEsMJub/VxbXQAA/wsMDMPBoJusv7KyspuQmXFxCmRk/93s3MfCqnF2eaTKnvrNHtnZ2t/f38jKwXllYb+aAvmLi+Tl5uvl4KbA1T17owAAaM3Nzz8AcB5BWSpSdevXutC0lcbJyox3Y8jIyEepDpSnuv8uLm0mAKidg9vV0sCqkVlhc8i0lfLq08PDx/Pt4v+4uIlnLy5xl8S1bHmeur6ZKMvg7aqXmaJ9frK2wlajxZlbX+f68erUTXiKmIB6fQA1Z2NqfzhKYAAA5wAAI67O3X3+fVR+ocTi4XV8i/90dFqDV/f4+4ODl4PGdyMjIqB8Br+xf3GeyE9piaKSh7vAtp2msjU5PlgwXAC/ALm5ufr120QgAJFbDF5TStnJt05+rdvIpNbVvL+abYquy4qfuEqUV5ubm93ez9a2f1MtJfb786WlpeLg1EpKSpmyzlkzeeO7F6eMCWJjZNPg+uvkuWJQWKHA44Sx4raikW1rbNzd3ryfSc3FxbTY6f7U1KysrIiaosm/BIyJifu0sqO6y2V/mrirnq2rsvjojVNT/4VrVMbAupd7YKiESkIvT/fjyPj4+K+ursDd1lyOtCIi3tU5PB9mwff05nWPpAAAAEdJWrsAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAaf0lEQVR4Xu2dDXwU5Z3HF+cUAz2Eqnj17gxBXrrGoz4KtiCcRKhSetmZuwUqEFpOFoMQrhKdAfsQ3RaEvSgveSmIUaslQs2B3lhLSUO7nKRAcotlA6cJWLIVw20JLS/WJ3rt8rnneebZzc5mszuz2cnMwv6Unf88M8/s7DfP8/8/88zzzNgghzggMInSRucQSWRrXRxVwMPkxrtyHPCx7R1eb0eHN7yz18kMQQg4xXCqq8TDLM+yV7/86im3siJ2AOXYuoREESTQUsQMlarYsluQY0YyudgyoWyBaIBCwQt33rSe2QpAxHX+iOlaIRqgJ+hrLfIWd7joWhRAyX0sN/xHiACs2nX81lsPjJj7EV3rR4A9lWaApFgxgCLseurF302dWqWshgHuuHz5cifRaDVAX0dtscdTy1BFAEq+Y/sGtruV5DBA969/u/q67x2wjXmZrhoCkGfLZNLIGQBNoG1CN8DA4HtueH/qd348LqCsKwD5jlcKz3AQQklwyzghAtDfld8KuGAMQMnX6il2+vapAb7yl7+97tZb73hs38tesmoIQHNk4/GZhQH+7MX335/64xcHeyFdZwC79n7hdsnv9/s8aoA+X1Vrh79dDRDCmZBrFUFpB0dWwwBH/eWLf/7zP95aa1v10kS8agjAFrZMJk5rEdRUpG20VtIfKQQ+ePLJJ1/85I9/fCgokXUG0C951nEA7xdTAn0+qcrvL1EBFDts79jI//iD/BXCALc/+MUvY9166dI54jMNAfhAun2gwJYJZSNnxgBKc5/CBN9/6HdT62klDlfhzmu/LQSDwSJnLEBYVOsu7aBr4RIoOge6xJlOWFRE40gY4BO/+qf3b8C684UVhgFcoREgrxWgJocRDVCA5352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"}}]);