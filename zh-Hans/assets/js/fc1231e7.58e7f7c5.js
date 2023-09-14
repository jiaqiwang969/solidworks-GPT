"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[91432],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>f});var t=o(67294);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,s=function(e,n){if(null==e)return{};var o,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(o),u=s,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return o?t.createElement(f,r(r({ref:n},p),{},{components:o})):t.createElement(f,r({ref:n},p))}));function f(e,n){var o=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=o.length,r=new Array(i);r[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[m]="string"==typeof e?e:s,r[1]=a;for(var c=2;c<i;c++)r[c]=o[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9907:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=o(87462),s=(o(67294),o(3905));const i={layout:"sw-tool",title:"Purge components configurations (remove all unused configurations) from SOLIDWORKS assembly",caption:"Purge Components Configurations",description:"VBA macro to create copies of all selected components in the assembly and purge configurations in each of them",image:"purged-components-result1.png",labels:["component","replace","purge"],group:"Assembly"},r=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/purge-configurations/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/purge-configurations/index",title:"Purge components configurations (remove all unused configurations) from SOLIDWORKS assembly",description:"VBA macro to create copies of all selected components in the assembly and purge configurations in each of them",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/purge-configurations/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/purge-configurations",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/purge-configurations/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/purge-configurations/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/purge-configurations/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Purge components configurations (remove all unused configurations) from SOLIDWORKS assembly",caption:"Purge Components Configurations",description:"VBA macro to create copies of all selected components in the assembly and purge configurations in each of them",image:"purged-components-result1.png",labels:["component","replace","purge"],group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"Macro for components configurations permutation using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/permutation/"},next:{title:"Renaming permanent and virtual components using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/rename/"}},l={},c=[{value:"Notes",id:"notes",level:2},{value:"Options",id:"options",level:2},{value:"Replacement Name",id:"replacement-name",level:3},{value:"Grouping Configurations",id:"grouping-configurations",level:3},{value:"Examples",id:"examples",level:3},{value:"Option 1",id:"option-1",level:3},{value:"Option 2",id:"option-2",level:3}],p={toc:c},m="wrapper";function d(e){let{components:n,...i}=e;return(0,s.kt)(m,(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In some cases it might be required to remove (purge) all unused configurations from the components in the assembly. It is in particular useful for the fastener or toolbox components as file can contains thousands of configurations but only few are used in the assembly."),(0,s.kt)("p",null,"This macro allows to create a copy of all selected components, purge their configurations and replace them in the assembly."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"It is strongly recommended to backup your assembly before using this macro")),(0,s.kt)("p",null,"You can either select components manually or use ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/English/SolidWorks/sldworks/c_Advanced_Component_Selection_SWassy.htm"},"advanced component selection tool")," to select components based on the criteria (e.g. or fasteners or toolbars):"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Selecting all fasteners and toolbox parts in the assembly via Advanced Components Selection tool",src:o(20542).Z,width:"777",height:"470"})),(0,s.kt)("p",null,"For additional criteria use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/assembly/components/advanced-selection/"},"extended advanced selection macro"),"."),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Macro will only work with permanent components. Error will be generated for virtual components"),(0,s.kt)("li",{parentName:"ul"},"Macro will only work with part based (*.sldprt) components"),(0,s.kt)("li",{parentName:"ul"},"Macro will only work wil fully loaded components, suppressed or lightweight components are not supported"),(0,s.kt)("li",{parentName:"ul"},"Macro doesn't save the document after processing. Use ",(0,s.kt)("em",{parentName:"li"},"Save All")," to save all modifications"),(0,s.kt)("li",{parentName:"ul"},"Macro will copy all replacement part at the same location as source part"),(0,s.kt)("li",{parentName:"ul"},"Component can be selected in the Feature Manager tree or from the graphics view (it is possible to select any entity of the component as well, such as face or edge)"),(0,s.kt)("li",{parentName:"ul"},"Design table will be removed if exists"),(0,s.kt)("li",{parentName:"ul"},"Macro will not replace existing files and ",(0,s.kt)("em",{parentName:"li"},"File already exist")," wil be generated if target file already created. Remove all of these files manually. If macro failed, some of the files may be loaded into the memory despite they are not used in the assembly. Use ",(0,s.kt)("em",{parentName:"li"},"Close All")," command to release those files"),(0,s.kt)("li",{parentName:"ul"},"Mates will be reattached")),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("h3",{id:"replacement-name"},"Replacement Name"),(0,s.kt)("p",null,"Specify the name of the replacement file by changing the ",(0,s.kt)("em",{parentName:"p"},"REPLACEMENT_NAME")," constant. Use fre text with the ","[","title","]"," and ","[","conf","]"," placeholders which will be replaced with title of the source file and the component's referenced configuration respectively. If the ",(0,s.kt)("em",{parentName:"p"},"GROUP_BY_CONFIGURATIONS")," option is set to True, the ","[","conf","]"," placeholder will be replaced by the join of all configuration names separated by _ symbol."),(0,s.kt)("h3",{id:"grouping-configurations"},"Grouping Configurations"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"GROUP_BY_CONFIGURATIONS")," option allows to specify if the components referencing the same document in different configuration should be replaced by single component or new single configuration part should be created for each component irrespectively."),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Unused configurations of components",src:o(50218).Z,width:"749",height:"406"})),(0,s.kt)("p",null,"There are 2 files with multiple configuration"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Part1.sldprt contains 4 configurations: Default, 2, 3 and 4"),(0,s.kt)("li",{parentName:"ul"},"Part2.sldprt contains 6 configurations driven by the design table: Default, A, B, C, D, E"),(0,s.kt)("li",{parentName:"ul"},"Part1 is placed into the assembly 2 times in configurations Default and 4"),(0,s.kt)("li",{parentName:"ul"},"Part2 is placed into the assembly 2 times in configurations A and B")),(0,s.kt)("p",null,"User selects first 3 components and runs the macro. The following results will be produced depending on the specified settings"),(0,s.kt)("h3",{id:"option-1"},"Option 1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const GROUP_BY_CONFIGURATIONS As Boolean = False\nConst REPLACEMENT_NAME As String = "[title]_[conf]"\n')),(0,s.kt)("p",null,"As the result 3 new files will be generated with a single configuration: Part1_Default.sldprt, Part1_4.sldprt, Part2_A.sldprt (design table is removed) and all selected component will be replaced. The 4th component will not be changed as it was not selected initially."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Results of components purge",src:o(33560).Z,width:"559",height:"316"})),(0,s.kt)("h3",{id:"option-2"},"Option 2"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const GROUP_BY_CONFIGURATIONS As Boolean = True\nConst REPLACEMENT_NAME As String = "[title]_[conf]_replacement"\n')),(0,s.kt)("p",null,"As the result 2 new files will be generated: Part1_Default_4_replacement.sldprt (with 2 configurations), Part2_A_replacement.sldprt (design table is removed) and all selected component will be replaced. The 4th component will not be changed as it was not selected initially."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Second results of components purge",src:o(3713).Z,width:"811",height:"306"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const GROUP_BY_CONFIGURATIONS As Boolean = False\nConst REPLACEMENT_NAME As String = "[title]_[conf]"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \ntry:\n    On Error GoTo catch\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        \n        Dim vComps As Variant\n        vComps = GetReplacementComponents(swAssy)\n        \n        Dim swCompGroups As Object\n        Set swCompGroups = GroupByModel(vComps)\n        \n        Dim replacementsMap As Object\n\n        Set replacementsMap = CreateReplacementModels(swCompGroups)\n        \n        ReplaceComponents swAssy, vComps, replacementsMap\n        \n    Else\n        Err.Raise vbError, "", "Open assembly document"\n    End If\n    \n    GoTo finally\n    \ncatch:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally:\n    \nEnd Sub\n\nSub ReplaceComponents(assy As SldWorks.AssemblyDoc, comps As Variant, replacementMap As Object)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(comps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = comps(i)\n        \n        Dim srcKey As String\n        \n        srcKey = swComp.GetModelDoc2().GetPathName\n        \n        If Not GROUP_BY_CONFIGURATIONS Then\n            srcKey = srcKey & "::" & swComp.ReferencedConfiguration\n        End If\n        \n        If False <> swComp.Select4(False, Nothing, False) Then\n            Dim fileName As String\n            fileName = replacementMap.item(srcKey)\n            \n            If False = assy.ReplaceComponents2(fileName, swComp.ReferencedConfiguration, False, swReplaceComponentsConfiguration_e.swReplaceComponentsConfiguration_MatchName, True) Then\n                Err.Raise vbError, "", "Failed to replace the component " & swComp.Name2\n            End If\n            \n        Else\n            Err.Raise vbError, "", ""\n        End If\n        \n    Next\n    \nEnd Sub\n\nFunction CreateReplacementModels(modelsMap As Object) As Object\n    \n    Const PLACEHOLDER_TITLE As String = "[title]"\n    Const PLACEHOLDER_CONF As String = "[conf]"\n\n    Dim replacementsMap As Object\n    Set replacementsMap = CreateObject("Scripting.Dictionary")\n    \n    Dim i As Integer\n    \n    Dim vModels As Variant\n    vModels = modelsMap.keys\n    \n    For i = 0 To UBound(vModels)\n        \n        Dim swModel As SldWorks.ModelDoc2\n        Set swModel = vModels(i)\n        \n        Dim refConfs As Collection\n        Set refConfs = modelsMap.item(swModel)\n        \n        Dim path As String\n        Dim dir As String\n        Dim title As String\n        \n        path = swModel.GetPathName\n        title = Mid(path, InStrRev(path, "\\") + 1, InStrRev(path, ".") - InStrRev(path, "\\") - 1)\n        dir = Left(path, InStrRev(path, "\\"))\n        \n        Dim newTitle As String\n        Dim newPath As String\n        Dim j As Integer\n        \n        If GROUP_BY_CONFIGURATIONS Then\n            \n            Dim confs As String\n            confs = ""\n            For j = 1 To refConfs.Count\n                confs = confs & refConfs(j) & IIf(j <> refConfs.Count, "_", "")\n            Next\n            \n            newTitle = Replace(REPLACEMENT_NAME, PLACEHOLDER_TITLE, title)\n            newTitle = Replace(newTitle, PLACEHOLDER_CONF, confs)\n            newPath = dir & newTitle & ".sldprt"\n            \n            CreateFileCopy path, newPath\n            \n            RemoveConfigurations newPath, refConfs\n            replacementsMap.Add path, newPath\n        Else\n            For j = 1 To refConfs.Count\n                \n                newTitle = Replace(REPLACEMENT_NAME, PLACEHOLDER_TITLE, title)\n                newTitle = Replace(newTitle, PLACEHOLDER_CONF, refConfs(j))\n                newPath = dir & newTitle & ".sldprt"\n                \n                CreateFileCopy path, newPath\n                \n                Dim keepConf As Collection\n                Set keepConf = New Collection\n                keepConf.Add refConfs(j)\n                \n                RemoveConfigurations newPath, keepConf\n                replacementsMap.Add path & "::" & refConfs(j), newPath\n            Next\n        End If\n        \n    Next\n    \n    Set CreateReplacementModels = replacementsMap\n    \nEnd Function\n\nSub CreateFileCopy(srcFile As String, destFile As String)\n    \n    Dim fso As Object\n    Set fso = CreateObject("Scripting.FileSystemObject")\n\n    fso.CopyFile srcFile, destFile, False\n    \nEnd Sub\n\nSub RemoveConfigurations(filePath As String, confsToKeep As Collection)\n    \ntry:\n    On Error GoTo catch\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Dim swDocSpec As SldWorks.DocumentSpecification\n    Set swDocSpec = swApp.GetOpenDocSpec(filePath)\n    \n    swApp.DocumentVisible False, swDocumentTypes_e.swDocPART\n    Set swModel = swApp.OpenDoc7(swDocSpec)\n    swApp.DocumentVisible True, swDocumentTypes_e.swDocPART\n    \n    swModel.ShowConfiguration2 confsToKeep(1)\n    \n    Dim vConfNames As Variant\n    \n    vConfNames = swModel.GetConfigurationNames\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vConfNames)\n        \n        Dim confName As String\n        confName = CStr(vConfNames(i))\n        \n        If Not CollectionContains(confsToKeep, confName) Then\n            swModel.DeleteConfiguration2 confName\n        End If\n        \n    Next\n    \n    If False <> swModel.Extension.HasDesignTable() Then\n        swModel.DeleteDesignTable\n    End If\n    \n    GoTo finally\n    \ncatch:\n    swApp.DocumentVisible True, swDocumentTypes_e.swDocPART\n    Err.Raise Err.Number, Err.Source, Err.Description\nfinally:\n    \nEnd Sub\n\nFunction GroupByModel(comps As Variant) As Object\n    \n    Dim modelsMap As Object\n    Set modelsMap = CreateObject("Scripting.Dictionary")\n    \n    Dim refConfNames As Collection\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(comps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = comps(i)\n        \n        Dim swCompModel As SldWorks.ModelDoc2\n        Set swCompModel = swComp.GetModelDoc2\n        \n        If Not modelsMap.exists(swCompModel) Then\n            Set refConfNames = New Collection\n            refConfNames.Add swComp.ReferencedConfiguration\n            modelsMap.Add swCompModel, refConfNames\n        Else\n            Set refConfNames = modelsMap.item(swCompModel)\n            \n            If Not CollectionContains(refConfNames, swComp.ReferencedConfiguration) Then\n                refConfNames.Add swComp.ReferencedConfiguration\n            End If\n        End If\n    Next\n    \n    Set GroupByModel = modelsMap\n    \nEnd Function\n\nFunction GetReplacementComponents(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim swComps() As SldWorks.Component2\n    Dim isInit As Boolean\n    \n    Dim i As Integer\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = swSelMgr.GetSelectedObjectsComponent4(i, -1)\n        \n        If False = swComp.IsVirtual Then\n        \n            Dim swCompModel As SldWorks.ModelDoc2\n            Set swCompModel = swComp.GetModelDoc2\n            \n            If swCompModel Is Nothing Then\n                Err.Raise vbError, "", "Failed to get document from the component: " & swComp.Name2 & ". Make sure component is fully resolved and not suppressed"\n            End If\n            \n            If Not TypeOf swCompModel Is SldWorks.PartDoc Then\n                Err.Raise vbError, "", "Only part components are supported"\n            End If\n            \n            If isInit Then\n                If Not Contains(swComps, swComp) Then\n                    ReDim Preserve swComps(UBound(swComps) + 1)\n                    Set swComps(UBound(swComps)) = swComp\n                End If\n            Else\n                ReDim swComps(0)\n                Set swComps(0) = swComp\n                isInit = True\n            End If\n            \n        Else\n            Err.Raise vbError, "", "Virtual components are not supported"\n        End If\n        \n    Next\n    \n    If isInit Then\n        GetReplacementComponents = swComps\n    Else\n        GetReplacementComponents = Empty\n    End If\n    \nEnd Function\n\nFunction Contains(arr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(arr)\n        If arr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\nFunction CollectionContains(coll As Collection, item As String) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To coll.Count\n        If LCase(coll.item(i)) = LCase(item) Then\n            CollectionContains = True\n            Exit Function\n        End If\n    Next\n    \n    CollectionContains = False\n    \nEnd Function\n')))}d.isMDXComponent=!0},20542:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/advanced-component-selection-a20f632f7f18c000a16a8429c4acdb16.png"},50218:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/components-configurations-fe4c3292ae3ff855a75963b636e05c84.png"},33560:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/purged-components-result1-67bab00970c89a09261dd3d21e93e7cb.png"},3713:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/purged-components-result2-7372b26a4f0b26fcb105bde4e4a2ba41.png"}}]);