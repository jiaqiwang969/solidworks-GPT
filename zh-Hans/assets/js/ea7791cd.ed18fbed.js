"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[78038],{3905:(n,e,o)=>{o.d(e,{Zo:()=>d,kt:()=>h});var t=o(67294);function s(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function r(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function a(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){s(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function i(n,e){if(null==n)return{};var o,t,s=function(n,e){if(null==n)return{};var o,t,s={},r=Object.keys(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||(s[o]=n[o]);return s}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(s[o]=n[o])}return s}var l=t.createContext({}),m=function(n){var e=t.useContext(l),o=e;return n&&(o="function"==typeof n?n(e):a(a({},e),n)),o},d=function(n){var e=m(n.components);return t.createElement(l.Provider,{value:e},n.children)},p="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var o=n.components,s=n.mdxType,r=n.originalType,l=n.parentName,d=i(n,["components","mdxType","originalType","parentName"]),p=m(o),f=s,h=p["".concat(l,".").concat(f)]||p[f]||c[f]||r;return o?t.createElement(h,a(a({ref:e},d),{},{components:o})):t.createElement(h,a({ref:e},d))}));function h(n,e){var o=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var r=o.length,a=new Array(r);a[0]=f;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i[p]="string"==typeof n?n:s,a[1]=i;for(var m=2;m<r;m++)a[m]=o[m];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}f.displayName="MDXCreateElement"},53268:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var t=o(87462),s=(o(67294),o(3905));const r={title:"Load components presentation transforms from CSV file using SOLIDWORKS API",caption:"Load Components Presentation Transforms From CSV File",description:"Example demonstrates how to load the transformation matrix for the components from the CSV file and apply it as a presentation transform",image:"original-component-position.png",labels:["assembly","transform","csv"]},a=void 0,i={unversionedId:"codestack/solidworks-api/document/assembly/components/apply-presentation-transform-from-csv/index",id:"codestack/solidworks-api/document/assembly/components/apply-presentation-transform-from-csv/index",title:"Load components presentation transforms from CSV file using SOLIDWORKS API",description:"Example demonstrates how to load the transformation matrix for the components from the CSV file and apply it as a presentation transform",source:"@site/docs/codestack/solidworks-api/document/assembly/components/apply-presentation-transform-from-csv/index.md",sourceDirName:"codestack/solidworks-api/document/assembly/components/apply-presentation-transform-from-csv",slug:"/codestack/solidworks-api/document/assembly/components/apply-presentation-transform-from-csv/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/apply-presentation-transform-from-csv/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/assembly/components/apply-presentation-transform-from-csv/index.md",tags:[],version:"current",frontMatter:{title:"Load components presentation transforms from CSV file using SOLIDWORKS API",caption:"Load Components Presentation Transforms From CSV File",description:"Example demonstrates how to load the transformation matrix for the components from the CSV file and apply it as a presentation transform",image:"original-component-position.png",labels:["assembly","transform","csv"]},sidebar:"tutorialSidebar",previous:{title:"Macro for extended advanced selections using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/advanced-selection/"},next:{title:"Modify configuration parameters for components using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/batch-modify-parameters/"}},l={},m=[],d={toc:m},p="wrapper";function c(n){let{components:e,...r}=n;return(0,s.kt)(p,(0,t.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Components in the original positions",src:o(16758).Z,width:"457",height:"466"}),"{ width=250 }"),(0,s.kt)("p",null,"This example demonstrates how to load the transformation matrix for the components from the CSV file and apply it as a presentation transform using SOLIDWORKS API"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Download and open the ",(0,s.kt)("a",{target:"_blank",href:o(71296).Z},"Example SOLIDWORKS Files")),(0,s.kt)("li",{parentName:"ul"},"Download ",(0,s.kt)("a",{target:"_blank",href:o(5920).Z},"CSV File")," and save to disc"),(0,s.kt)("li",{parentName:"ul"},"Modify the path to the CSV file in the macro constant"),(0,s.kt)("li",{parentName:"ul"},"Run the macro. Macro stops the execution and the components are transformed as shown below")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Components in the transformed position",src:o(78959).Z,width:"455",height:"498"}),"{ width=250 }"),(0,s.kt)("p",null,"Red component is translated in XYZ space and green component is rotated 90 degrees around global Y axis (Axis 1)."),(0,s.kt)("p",null,"Please note that the components are moved regardless the fact that both of them are fully defined in space (by mates or fix constraint). And the mates are still preserved. The reason is that the presentation transform was applied instead of the permanent one. This allows to only move the components for visual purposes without changing the geometry."),(0,s.kt)("p",null,"Continue the macro with F5 or Play button to remove the presentation transformation. Use ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IComponent2~Transform2.html"},"IComponent2::Transform2")," SOLIDWORKS API property instead of ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2~presentationtransform.html"},"IComponent2::PresentationTransform")," to apply the permanent transform if needed (in this case it is required to remove any mates which will not fit this transformation)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const INPUT_FILE_PATH = "D:\\transforms.csv"\n\nDim swApp As SldWorks.SldWorks\nDim swAssy As SldWorks.AssemblyDoc\n\nSub main()\n\n    On Error GoTo Error\n\n    Set swApp = Application.SldWorks\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    Dim vTable As Variant\n    vTable = ReadCsvFile(INPUT_FILE_PATH, True)\n    \n    swAssy.EnablePresentation = True\n    PreviewComponentsPosition vTable\n    \nError:\n    Stop\n    swAssy.EnablePresentation = False\n        \nEnd Sub\n\nFunction ReadCsvFile(filePath As String, firstRowHeader As Boolean) As Variant\n    \n    \'rows x columns\n    Dim vTable() As Variant\n    \n    On Error GoTo Error\n    \n    Dim fileName As String\n    Dim tableRow As String\n    Dim fileNo As Integer\n\n    fileNo = FreeFile\n    \n    Open filePath For Input As #fileNo\n    \n    Dim isFirstRow As Boolean\n    Dim isTableInit As Boolean\n    \n    isFirstRow = True\n    isTableInit = False\n    \n    Do While Not EOF(fileNo)\n        \n        Line Input #fileNo, tableRow\n            \n        If Not isFirstRow Or Not firstRowHeader Then\n            \n            Dim vCells As Variant\n            vCells = Split(tableRow, ",")\n            \n            Dim lastRowIndex As Integer\n            \n            If Not isTableInit Then\n                lastRowIndex = 0\n                isTableInit = True\n                ReDim Preserve vTable(lastRowIndex)\n            Else\n                lastRowIndex = UBound(vTable, 1) + 1\n                ReDim Preserve vTable(lastRowIndex)\n            End If\n            \n            vTable(lastRowIndex) = vCells\n            \n        End If\n        \n        If isFirstRow Then\n            isFirstRow = False\n        End If\n    \n    Loop\n    \n    Close #fileNo\n    \n    ReadCsvFile = vTable\n    \n    Exit Function\n    \nError:\n\n    ReadCsvFile = Empty\n    \nEnd Function\n\nSub PreviewComponentsPosition(table As Variant)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(table)\n    \n        Dim swComp As SldWorks.Component2\n        \n        Dim compName As String\n        compName = table(i)(0)\n        \n        Set swComp = GetComponent(compName)\n        \n        If Not swComp Is Nothing Then\n            swComp.RemovePresentationTransform\n            swComp.PresentationTransform = CreateTransform(table(i))\n        Else\n            Debug.Print compName & " is not found"\n        End If\n        \n    Next\n    \n    Dim swModelView As SldWorks.ModelView\n    Set swModelView = swAssy.ActiveView\n    swModelView.GraphicsRedraw Nothing\n    \nEnd Sub\n\nFunction CreateTransform(tableRow As Variant) As SldWorks.MathTransform\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim dMatrix(15) As Double\n    \n    dMatrix(0) = CDbl(tableRow(1)): dMatrix(1) = CDbl(tableRow(2)): dMatrix(2) = CDbl(tableRow(3)): dMatrix(3) = CDbl(tableRow(5))\n    dMatrix(4) = CDbl(tableRow(6)): dMatrix(5) = CDbl(tableRow(7)): dMatrix(6) = CDbl(tableRow(9)): dMatrix(7) = CDbl(tableRow(10))\n    dMatrix(8) = CDbl(tableRow(11)): dMatrix(9) = CDbl(tableRow(13)): dMatrix(10) = CDbl(tableRow(14)): dMatrix(11) = CDbl(tableRow(15))\n    dMatrix(12) = CDbl(tableRow(16)): dMatrix(13) = CDbl(tableRow(4)): dMatrix(14) = CDbl(tableRow(8)): dMatrix(15) = CDbl(tableRow(12))\n    \n    Dim swXform As SldWorks.MathTransform\n    Set swXform = swMathUtils.CreateTransform(dMatrix)\n\n    Set CreateTransform = swXform\n    \nEnd Function\n\nFunction GetComponent(compPath As String) As Component2\n    \n    Dim swComp As SldWorks.Component2\n    \n    Dim compNames As Variant\n    compNames = Split(compPath, "\\")\n    \n    Dim i As Integer\n    Set swComp = swAssy.ConfigurationManager.ActiveConfiguration.GetRootComponent()\n    \n    For i = 0 To UBound(compNames)\n        If Not swComp Is Nothing Then\n            \n            Dim vChildComps As Variant\n            Dim j As Integer\n            \n            vChildComps = swComp.GetChildren\n            \n            Dim isCompFound As Boolean\n            isCompFound = False\n            \n            If Not IsEmpty(vChildComps) Then\n                \n                Dim shortCompName As String\n                \n                For j = 0 To UBound(vChildComps)\n                    \n                    Dim swChildComp As SldWorks.Component2\n                    Set swChildComp = vChildComps(j)\n                    \n                    Dim vShortNames As Variant\n                    vShortNames = Split(swChildComp.Name2, "/")\n                    shortCompName = vShortNames(UBound(vShortNames))\n                    \n                    If LCase(shortCompName) = LCase(compNames(i)) Then\n                        Set swComp = swChildComp\n                        isCompFound = True\n                    End If\n                Next\n            End If\n            \n            If Not isCompFound Then\n                Set swComp = Nothing\n            End If\n            \n        End If\n    Next\n    \n    Set GetComponent = swComp\n    \nEnd Function\n\n')))}c.isMDXComponent=!0},71296:(n,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/files/presentation-transform-example-551f6a8aae4e1b1488023bc153c951b4.zip"},5920:(n,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/files/transforms-dec7a9a052f7dafee272b82f7351bffe.csv"},16758:(n,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/original-component-position-acf708e73555bc4a7659d00575e24165.png"},78959:(n,e,o)=>{o.d(e,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAccAAAHyCAMAAACplfWeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQFQAZy8m6IBAeXb2+vv6vj49/7+/ogwLzBxLqsfH8DAwBqGGf8AAICAgADAAPFSTr/Qv6THo97IyNS9vUK+Qr84Na3cqwVoBfDPz+rj46HGoJ0ODs0/Pf96etrDw7fdtt7Q0ED+QPfZ2dbAwMfVxu7p6bPKsqfCprEUFLwfH7LesP5tbdhJRwF6AVjRUyuYKbbMtaQXFwFaAdrn2urLy5+9nr/cvc/pzvji4u3Pzvrp6SunK+PHx6kLC/+FhcAkJLTTs+LMzNfp1sjoxxNhFKrEqffd3brbueTR0fbX1uJHQ7Tgs8Dfv/XU07IlJKTAo63HrDmdNvFjZfPs7J8PEAJhArviubUYGLgrKszjywh4CK/drfnz8+DFxApyCsbnxd9RT8UpKazTq8vpymPOXc0yMunZ2c5AQk66Sq0PD/9ycrQnJqUGBsc8OcPmwrfTtjSwNPTz86C+oCaSJBB8D97t3glXCdrKyv9/f1fDU9Lm0gFUAbvQurYnKO5QS95QTcPTw7gcHP1eWdXn1KETEwmECdVHRNJDQdvr2r/kvehPUbDJrzm1OflaVmTeYAdtB7nOuKkdHafTpqfJpufV1dpMSv9jXrHSsMcrKsMnJ0rGSrfhtsvZyq4hIdBBP+dZXSGOIGbRZVzWV1XNTz+7P0XBReZJRtA0Nf9lYrsfHx2KHCWgJb4hIfRVUexTVtE3OB1nHLYpKOpMSacaGp4QEOJUUcjXyAAAAMwAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///yTuTtIAAAC4dFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD2iudBAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAa2UlEQVR4Xu3djb8dxVnAccLtpXh7clqCCYkpJHoNLwE0IKRFaRNaY6ISAqZAyrW0RKs2vBmsBi0VoS9YY4VaKKVaNWhtq7QGUf8+n5l99m12ZnfedufZOc+PfD53z557bk7Ol9mZPWcDV1zF5RA75hE75hE75hE75hE75hE75hE75hE75hE75hE75hE75hE75hE75hE75hE75hE75hE75hE75hE75hE75hE75tEUjhsbG7jFjVWQox0PMPZCyvtZOqwQR8tXf4BJ3s2OgSV3lPdCeJPzawJHi+9jx9ACHMUoivTys2No7JhH/o7itY/1+rNjaOyYR96OxUvfBlA58HZzN2wr3yTS7eNciuqo3Cxv1XthS4Y3qzS7OKfiOrZuV9vNjbJiR1lnB+eYr2P5yqsC9e3uFnyVW+XXOvU259rEjvJr36M4vzwdh0ka+3W78Cum/hDOteiOuKO5u9zufGuV+R7OLj9HeN3LF76xiYkdrZ3lje63lhnv4CzzdsQtjYHY0dpZ3YANvZdpP2fbCI6Sq7mvuqXeUWXYzVnn5Sg9muH+MmVPfVN+s4ZMu5NzaAxHdVfzlryvg6bZxTnl41hYtMJ7itQ9nVsdte4ezi1PR9wqUm6Lm61dmu9X2Do7OMfiOxa3mvs6SrCj7ydw7nk4dl/01p7iRnPXwAOg7ndwbkV3LLcb+/ofIOp+B+eWu6PuNa/39W3Vj1N/hnqbcy2yY/POzs7qPthRf5tIvc255uzYMRBVO5t3Vtu4Ib6p2hBf6zo7OMd8HHGrWS0kbxaVtxpfq+SOqs4OzrGojup9eLvaDRtYcbuqu4dzy9XR9IqL/Safxn7YbNyq0u3jXHJf53AUY8c8Ysc8Ysc8Ysc8Ysc8Ysc8Ysc8Ysc8Ysc8Ysc8Ysc8Ysc8Ysc8Ysc8cnTkzwmJxo55xI55xPNjHrFjHrFjHrFjHrFjHrFjHjk68nkH0dgxj9gxj9gxj9gxj9gx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"}}]);