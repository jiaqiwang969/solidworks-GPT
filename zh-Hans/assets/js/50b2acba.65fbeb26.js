"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[4424],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>f});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function s(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?s(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=t.createContext({}),c=function(e){var n=t.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},p=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(o),u=r,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||s;return o?t.createElement(f,l(l({ref:n},p),{},{components:o})):t.createElement(f,l({ref:n},p))}));function f(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=o.length,l=new Array(s);l[0]=u;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[m]="string"==typeof e?e:r,l[1]=a;for(var c=2;c<s;c++)l[c]=o[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1960:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=o(87462),r=(o(67294),o(3905));const s={layout:"sw-tool",title:"SOLIDWORKS macro to break, lock or unlock all external references for files and components",caption:"Manage All External References For Components",description:"Example will break, lock or unlock all external references for the file or components in the active assembly using SOLIDWORKS API",image:"break-all-external-references.png",labels:["assembly","external references","solidworks api","utility"],group:"Assembly","redirect-from":["/2018/03/solidworks-api-assembly-break-all-external-references-for-components.html","/solidworks-api/document/assembly/break-components-external-references","/solidworks-api/document/assembly/components/break-external-references/"]},l=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/manage-external-references/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/manage-external-references/index",title:"SOLIDWORKS macro to break, lock or unlock all external references for files and components",description:"Example will break, lock or unlock all external references for the file or components in the active assembly using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/manage-external-references/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/manage-external-references",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/manage-external-references/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/manage-external-references/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/manage-external-references/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"SOLIDWORKS macro to break, lock or unlock all external references for files and components",caption:"Manage All External References For Components",description:"Example will break, lock or unlock all external references for the file or components in the active assembly using SOLIDWORKS API",image:"break-all-external-references.png",labels:["assembly","external references","solidworks api","utility"],group:"Assembly","redirect-from":["/2018/03/solidworks-api-assembly-break-all-external-references-for-components.html","/solidworks-api/document/assembly/break-components-external-references","/solidworks-api/document/assembly/components/break-external-references/"]},sidebar:"tutorialSidebar",previous:{title:"Setting ShadedImageQualityCoarse in user preferences of the active document using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/image-quality-coarse/"},next:{title:"Macro to print SOLIDWORKS documents",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/print/"}},i={},c=[{value:"Configuration",id:"configuration",level:2},{value:"CAD+",id:"cad",level:2}],p={toc:c},m="wrapper";function d(e){let{components:n,...s}=e;return(0,r.kt)(m,(0,t.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example will break, lock or unlock all external references for the active model or all or selected components in the active assembly using SOLIDWORKS API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Command to break all external references",src:o(95697).Z,width:"640",height:"286"}),"{ width=640 }"),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Macro can be configured by modifying the value of the constants"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const MODIFY_ACTION As Integer = ModifyAction_e.UnlockAll 'Action to call on the references in the model. Supported values: BreakAll, LockAll, UnlockAll\nConst REFS_SCOPE As Integer = Scope_e.AllComponents 'Scope to run the above action. Supported values: ThisFile, TopLevelComponents, AllComponents, SelectedComponents\n")),(0,r.kt)("h2",{id:"cad"},"CAD+"),(0,r.kt)("p",null,"This macro is compatible with ",(0,r.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/"},"Toolbar+")," and ",(0,r.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/batch/"},"Batch+")," tools so the buttons can be added to toolbar and assigned with shortcut for easier access or run in the batch mode."),(0,r.kt)("p",null,"In order to enable ",(0,r.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/configuration/arguments/"},"macro arguments")," set the ",(0,r.kt)("strong",{parentName:"p"},"ARGS")," constant to true"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"#Const ARGS = True\n")),(0,r.kt)("p",null,"In this case it is not required to make copies of the macro to set individual ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"options for action and scope"),"."),(0,r.kt)("p",null,"Instead specify 2 arguments:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("strong",{parentName:"li"},"-b"),", ",(0,r.kt)("strong",{parentName:"li"},"-l"),", ",(0,r.kt)("strong",{parentName:"li"},"-u"),", to set the action to ",(0,r.kt)("strong",{parentName:"li"},"Break All"),", ",(0,r.kt)("strong",{parentName:"li"},"Lock All"),", ",(0,r.kt)("strong",{parentName:"li"},"Unlock All")," respectively"),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("strong",{parentName:"li"},"-f"),", ",(0,r.kt)("strong",{parentName:"li"},"-t"),", ",(0,r.kt)("strong",{parentName:"li"},"-a")," to set the scope to ",(0,r.kt)("strong",{parentName:"li"},"This File"),", ",(0,r.kt)("strong",{parentName:"li"},"Top Level Components"),", ",(0,r.kt)("strong",{parentName:"li"},"All Components")," respectively")),(0,r.kt)("p",null,"For example the parameters below will lock all external references of the file itself"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> -l -f\n")),(0,r.kt)("p",null,"While the following command will break all external references for all components of the assembly (including sub-components)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> -b -a\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'#Const ARGS = False \'True to use arguments from Toolbar+ or Batch+ instead of the constant\n\nEnum ModifyAction_e\n    BreakAll\n    LockAll\n    UnlockAll\nEnd Enum\n\nEnum Scope_e\n    ThisFile\n    TopLevelComponents\n    AllComponents\n    SelectedComponents\nEnd Enum\n\nConst MODIFY_ACTION As Integer = ModifyAction_e.UnlockAll\nConst REFS_SCOPE As Integer = Scope_e.AllComponents\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \ntry_:\n    \n    On Error GoTo catch_\n    \n    Dim action As ModifyAction_e\n    Dim scope As Scope_e\n    \n    #If ARGS Then\n                \n        Dim macroRunner As Object\n        Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")\n        \n        Dim param As Object\n        Set param = macroRunner.PopParameter(swApp)\n        \n        Dim vArgs As Variant\n        vArgs = param.Get("Args")\n        \n        Dim actionArg As String\n        actionArg = CStr(vArgs(0))\n        \n        Select Case LCase(actionArg)\n            Case "-b"\n                action = ModifyAction_e.BreakAll\n            Case "-l"\n                action = ModifyAction_e.LockAll\n            Case "-u"\n                action = ModifyAction_e.UnlockAll\n            Case Else\n                Err.Raise vbError, "", "Invalid action argument. Valid arguments -b -l -u"\n        End Select\n        \n        Dim scopeArg As String\n        scopeArg = CStr(vArgs(1))\n        \n        Select Case LCase(scopeArg)\n            Case "-f"\n                scope = ThisFile\n            Case "-t"\n                scope = TopLevelComponents\n            Case "-a"\n                scope = AllComponents\n            Case Else\n                Err.Raise vbError, "", "Invalid scope argument. Valid arguments -f -t -a"\n        End Select\n        \n    #Else\n        action = MODIFY_ACTION\n        scope = REFS_SCOPE\n    #End If\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If scope = ThisFile Then\n        ProcessReferences swModel, action\n    Else\n        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Then\n                \n            Dim swAssy As SldWorks.AssemblyDoc\n                \n            Set swAssy = swModel\n            \n            swAssy.ResolveAllLightWeightComponents True\n            \n            Dim vComps As Variant\n            Dim swComp As SldWorks.Component2\n            Dim swCompModel As SldWorks.ModelDoc2\n            \n            If scope = SelectedComponents Then\n                vComps = GetSelectedComponents(swModel.SelectionManager)\n            Else\n                Dim topLevel As Boolean\n                \n                Select Case scope\n                    Case TopLevelComponents\n                        topLevel = True\n                    Case AllComponents\n                        topLevel = False\n                    Case Else\n                        Err.Raise "Invalid scope"\n                End Select\n                \n                vComps = swAssy.GetComponents(topLevel)\n                \n            End If\n            \n            Dim i As Integer\n                \n            If Not IsEmpty(vComps) Then\n                \n                For i = 0 To UBound(vComps)\n                    \n                    Set swComp = vComps(i)\n                    Set swCompModel = swComp.GetModelDoc2\n                    \n                    If Not swCompModel Is Nothing Then\n                        ProcessReferences swCompModel, action\n                    End If\n                Next\n            \n            End If\n            \n        Else\n            Err.Raise "Please open assembly"\n        End If\n     \n     End If\n         \n    GoTo finally_\n         \ncatch_:\n    #If ARGS Then\n        Err.Raise Err.Number, Err.Source, Err.Description, Err.HelpContext, Err.HelpContext\n    #Else\n        MsgBox Err.Description, vbCritical\n    #End If\nfinally_:\n\nEnd Sub\n\nFunction GetSelectedComponents(selMgr As SldWorks.SelectionMgr) As Variant\n\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swComps() As SldWorks.Component2\n\n    Dim i As Integer\n    \n    For i = 1 To selMgr.GetSelectedObjectCount2(-1)\n                \n        Dim swComp As SldWorks.Component2\n    \n        Set swComp = selMgr.GetSelectedObjectsComponent4(i, -1)\n        \n        If Not swComp Is Nothing Then\n            \n            If Not isInit Then\n                ReDim swComps(0)\n                Set swComps(0) = swComp\n                isInit = True\n            Else\n                If Not Contains(swComps, swComp) Then\n                    ReDim Preserve swComps(UBound(swComps) + 1)\n                    Set swComps(UBound(swComps)) = swComp\n                End If\n            End If\n                        \n        End If\n    \n    Next\n\n    If isInit Then\n        GetSelectedComponents = swComps\n    Else\n        GetSelectedComponents = Empty\n    End If\n\nEnd Function\n\nFunction Contains(vArr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vArr)\n        If vArr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\nSub ProcessReferences(model As SldWorks.ModelDoc2, action As ModifyAction_e)\n    \n    Select Case action\n        Case ModifyAction_e.BreakAll\n            model.Extension.BreakAllExternalFileReferences2 False\n        Case ModifyAction_e.LockAll\n            model.LockAllExternalReferences\n        Case ModifyAction_e.UnlockAll\n            model.UnlockAllExternalReferences\n        Case Else\n            Err.Raise "Not supported action"\n    End Select\n    \nEnd Sub\n')))}d.isMDXComponent=!0},95697:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/break-all-external-references-624256b3c8216e16db2125ab2aced821.png"}}]);