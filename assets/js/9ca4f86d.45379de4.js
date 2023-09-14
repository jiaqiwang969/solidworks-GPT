"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[96705],{3905:(e,n,o)=>{o.d(n,{Zo:()=>c,kt:()=>I});var t=o(67294);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,s=function(e,n){if(null==e)return{};var o,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=t.createContext({}),m=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},c=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=m(o),u=s,I=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return o?t.createElement(I,r(r({ref:n},c),{},{components:o})):t.createElement(I,r({ref:n},c))}));function I(e,n){var o=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=o.length,r=new Array(i);r[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:s,r[1]=a;for(var m=2;m<i;m++)r[m]=o[m];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},19735:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var t=o(87462),s=(o(67294),o(3905));const i={layout:"sw-tool",title:"Find the where used assemblies of the selected component using SOLIDWORKS API",caption:"Find Where Used",description:"VBA macro to find the assemblies within active assembly which are using the selected component using SOLIDWORKS API",image:"where-used-form.png",labels:["where used","parent","component"],group:"Assembly"},r=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/where-used/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/where-used/index",title:"Find the where used assemblies of the selected component using SOLIDWORKS API",description:"VBA macro to find the assemblies within active assembly which are using the selected component using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/where-used/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/where-used",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/where-used/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/where-used/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/where-used/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Find the where used assemblies of the selected component using SOLIDWORKS API",caption:"Find Where Used",description:"VBA macro to find the assemblies within active assembly which are using the selected component using SOLIDWORKS API",image:"where-used-form.png",labels:["where used","parent","component"],group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"Wait for user selection in document using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/wait-for-selection/"},next:{title:"Creating the SOLIDWORKS add-in installer with Windows Installer XML (WiX)",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/wix/"}},l={},m=[{value:"Configuration",id:"configuration",level:2},{value:"Creating Macro",id:"creating-macro",level:2},{value:"Macro",id:"macro",level:3},{value:"WhereUsedForm",id:"whereusedform",level:3}],c={toc:m},d="wrapper";function p(e){let{components:n,...i}=e;return(0,s.kt)(d,(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This VBA macro finds all parent components of the selected component instances (Where Used) in the active assembly using SOLIDWORKS API and displays the list for review."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Where used form with the list of parent components",src:o(91507).Z,width:"325",height:"262"}),"{ width=350 }"),(0,s.kt)("p",null,"All references can be selected in the form and corresponding component will be highlighted in the Feature Manager Tree."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Macro can be configured by changing the constant parameters at the beginning of the macro as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const CONSIDER_CONFIG As Boolean = False 'True to only find the component which have the same referenced configuration, False to find by model path only\nConst INCLUDE_SUPPRESSED As Boolean = False 'True to include suppressed components in the search, False to not include\n")),(0,s.kt)("h2",{id:"creating-macro"},"Creating Macro"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create new macro"),(0,s.kt)("li",{parentName:"ul"},"Add new ",(0,s.kt)("a",{parentName:"li",href:"/docs/codestack/visual-basic/user-forms/"},"User Form")),(0,s.kt)("li",{parentName:"ul"},"Set the name of the form as ",(0,s.kt)("em",{parentName:"li"},"WhereUsedForm")),(0,s.kt)("li",{parentName:"ul"},"Drag-n-drop ListBox control onto the form"),(0,s.kt)("li",{parentName:"ul"},"Name the ListBox control as ",(0,s.kt)("em",{parentName:"li"},"ReferencesList"))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Form designer",src:o(69440).Z,width:"785",height:"765"}),"{ width=550 }"),(0,s.kt)("p",null,"Place the code into corresponding modules"),(0,s.kt)("h3",{id:"macro"},"Macro"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const CONSIDER_CONFIG As Boolean = False\nConst INCLUDE_SUPPRESSED As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swAssy.SelectionManager\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = swSelMgr.GetSelectedObjectsComponent3(1, -1)\n        \n        If Not swComp Is Nothing Then\n        \n            Dim vComps As Variant\n            vComps = GetAllComponentInstances(swAssy, swComp, CONSIDER_CONFIG, INCLUDE_SUPPRESSED)\n            \n            If Not IsEmpty(vComps) Then\n                Dim vParents As Variant\n                vParents = GetParents(vComps)\n                WhereUsedForm.Components = vParents\n                Set WhereUsedForm.Assembly = swAssy\n                WhereUsedForm.Show vbModeless\n            Else\n                MsgBox "Failed to find component instances"\n            End If\n            \n        Else\n            MsgBox "Please select component"\n        End If\n    Else\n        MsgBox "Please open assembly"\n    End If\n    \nEnd Sub\n\nFunction GetAllComponentInstances(assy As SldWorks.AssemblyDoc, targComp As SldWorks.Component2, considerConfig As Boolean, includeSuppressed As Boolean)\n    \n    Dim swCompInst() As SldWorks.Component2\n    Dim isInit As Boolean\n    \n    Dim vComps As Variant\n    vComps = assy.GetComponents(False)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n        \n        If UCase(swComp.GetPathName()) = UCase(targComp.GetPathName()) Then\n            \n            If Not considerConfig Or UCase(swComp.ReferencedConfiguration) = UCase(targComp.ReferencedConfiguration) Then\n                \n                If includeSuppressed Or False = swComp.IsSuppressed() Then\n                    \n                    If isInit Then\n                        ReDim Preserve swCompInst(UBound(swCompInst()) + 1)\n                    Else\n                        ReDim swCompInst(0)\n                        isInit = True\n                    End If\n                    \n                    Set swCompInst(UBound(swCompInst())) = swComp\n                    \n                End If\n                \n            End If\n        End If\n    Next\n    \n    If isInit Then\n        GetAllComponentInstances = swCompInst\n    Else\n        GetAllComponentInstances = Empty\n    End If\n    \nEnd Function\n\nFunction GetParents(comps As Variant) As Variant\n    \n    Dim swParents() As SldWorks.Component2\n    Dim isInit As Variant\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(comps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = comps(i)\n        \n        Dim swParentComp As SldWorks.Component2\n        \n        Set swParentComp = swComp.GetParent\n        \n        Dim addParent As Boolean\n        addParent = True\n        \n        If Not isInit Then\n            isInit = True\n            ReDim swParents(0)\n        Else\n            If Not Contains(swParents, swParentComp) Then\n                ReDim Preserve swParents(UBound(swParents) + 1)\n            Else\n                addParent = False\n            End If\n        End If\n        \n        If addParent Then\n            Set swParents(UBound(swParents)) = swParentComp\n        End If\n        \n    Next\n    \n    GetParents = swParents\n    \nEnd Function\n\nFunction Contains(vArr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vArr)\n        If vArr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')),(0,s.kt)("h3",{id:"whereusedform"},"WhereUsedForm"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swComps As Variant\n\nPublic Assembly As SldWorks.AssemblyDoc\n\nProperty Let Components(val As Variant)\n    swComps = val\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(swComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = swComps(i)\n        \n        Dim name As String\n        \n        If swComp Is Nothing Then\n            name = "<root>"\n        Else\n            name = swComp.Name2\n        End If\n        \n        ReferencesList.AddItem name\n    Next\n    \nEnd Property\n\nPrivate Sub ReferencesList_Change()\n\n    Dim swComp As SldWorks.Component2\n    Set swComp = swComps(ReferencesList.ListIndex)\n        \n    If Not swComp Is Nothing Then\n        swComp.Select4 False, Nothing, False\n    Else\n        Assembly.ClearSelection2 False\n    End If\n        \nEnd Sub\n')))}p.isMDXComponent=!0},69440:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/where-used-form-designer-0298da4f880dcd6e66078c787e311d54.png"},91507:(e,n,o)=>{o.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAAEGCAMAAADFZnetAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAErR8idwwZdxM/PSywBmZpm10f7+/nVLACYAAKjCvijP5M10Y9zc3H48MqnW4DoAAAAAMjo6AMHe/+3EvX+Z/9uQOjoAOkKInPDw73a/2o+Pj67HwbZmANeQgpdUS2YAADO8///bkKO9uqzp9F2k2wArfGJQfwBmtsG8/7/V7DOZ/6lCLyYrWNv/ttfl82YAOnvc9OWhlJ651VwrAKeJfKfAvbbO56jC3To6kP+2ZgAAVwA6kKCr/7LK5EMUIpC2kDoAZqG711qZ/75bSTOr/yYAMrb/tj/O8qK82KzF345rMatSQlNWZrnR6RQWFjqQ26V2cKHm9CVruuHO/08mNWZmtqCmvJA6AKake4u82OS0q8Hu9UJCQsOCdiVrnJg3JKY8KKa/25CQZtmajrhgUFrO/9Lh8buam8XZ7X/e/8xmAOPj47dIM5VrZzQ0NGa2/92jmBtDSiYAWV3V86DO/6OGVwBMnUGG2NuQZjpmtrb//9vp7OGYiwAAZv//to3h9Mnb74JGPaK8msH//2lpaZuftZHC3V09TbBdTOCroJhGObyGgdJ+bltqV+Odj6mLWZDb/8JmVb5SPUWN4Lt9cfDLxN3+/mvZ80QAMrm5uaDu/2Co39vn9HlNAI5GOsze8AAAOrJBKhxUW+emmaypfqZYSXjB3anCnenp6avEwLF8eOi9tUIAAEOK3N2ThZPF4J1EM45BN2AsAOmpnIPe9KFNP66OWrtaRxoaGshpVyZtvs2LfpTi9FTT8q3Gn6CgoI6/231QAHrF34ZMRbdDLAAtf9+Uh7pJM7ODf7CsgGTX8/LOyMNeSmKr4dyViKl6dI1KQYfg9KaIV7ZgT5NvMl+n3aimfb+LhOzGwJ5XTkPP8lApOJfI4uimmQAAWdqdkbDIochqWHPb86FGNHfA3JFGPH9ANoA9NKhZSQAAAP9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///3uFcfoAAADrdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAv6Y2UAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAJbElEQVR4Xu3c/59UVR3H8dtGjWBflgJqTWpdYoOssNpkW3KnMCyGpiwjMbMvGynl5mJWVBRrtZlZKZZKSFAYpJmItSWJlQkpfTG07BtlYZZ9+S/6fM753Ll3ljs7M/e8ffi4u+8XMOfeM+f6w/Nx5g7IfRCVWHhURERFRFREFCuOsPa74w7T84oj510/7A5YW33yQ29yo1Mcec7wk1metjzdMTrF84iYt3d8K1Ycud6mWPs9X++NTpFbMX+JYslmWPu9ZaSm+HKWNyoioiKin1AREBWzOvvycvMuP9tW1ykuZ3Gr181o3rrVtnr5cipmVZ7xg+bNKNtqKmZXvm/X3127dslPPU7Oa91HxckrX/ey5l2XqbiSxZWPXJX052q1+svUGHekbKtXrrw0U3FB38d0+Gjv293phI6LJLegYZ/dk31pQSrP+VRSVXSqD9z/JTf+2CalOYGKZ9lBoxb0zb6y4IqHau1VvVL1zX64dq9NHzr0WCtKDS4tSHWK3/V+7uWid2Yq/i5RHEoSRR0e7L176MEomr1waGiVGxb0PXvPshOOO8st0rlogy52k+/qk4/5OTOjZSfoe3ppcUsrHtr7gBOUqhdd+1yblOaUbfXQ0A8zFU/tu1UHoTjnjIVDr1g4tEo9lz16at+LRdQUVy17VBZukF9uUpBXRb1364y/1C0qZuW196S64fuesfq0d99gU9raRPGliWJ/0qzxW3XY3Pv5P11yoxzctPWPbnLW+J1ytkP24NEb3Vy/vG+TG2TZHrlMLvKXymtRq1e854vV72jV/77HJlxry7a6v7+Z4qzxSGX0WzmKRFHnd6ha/+aj5ptMOtipofiLVLdXh33Vb3zQprSU4j8TxUrSzeN36rC597ZKZffMowc3Hz1o89fI6w7/ppu7aevXk0k5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"}}]);