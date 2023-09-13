"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[683],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=a.createContext({}),m=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(t),c=s,f=p["".concat(i,".").concat(c)]||p[c]||u[c]||r;return t?a.createElement(f,o(o({ref:n},d),{},{components:t})):a.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:s,o[1]=l;for(var m=2;m<r;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4236:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=t(87462),s=(t(67294),t(3905));const r={layout:"sw-tool",title:"SOLIDWORKS macro renames all features in model sequentially",caption:"Rename All Features Sequentially",description:"Macro renames all the features in the order preserving the base names using SOLIDWORKS API",image:"sequntial-features.svg",labels:["feature","rename"],group:"Model"},o=void 0,l={unversionedId:"codestack/solidworks-api/document/features-manager/rename-features-sequentially/index",id:"codestack/solidworks-api/document/features-manager/rename-features-sequentially/index",title:"SOLIDWORKS macro renames all features in model sequentially",description:"Macro renames all the features in the order preserving the base names using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/features-manager/rename-features-sequentially/index.md",sourceDirName:"codestack/solidworks-api/document/features-manager/rename-features-sequentially",slug:"/codestack/solidworks-api/document/features-manager/rename-features-sequentially/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/features-manager/rename-features-sequentially/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/features-manager/rename-features-sequentially/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"SOLIDWORKS macro renames all features in model sequentially",caption:"Rename All Features Sequentially",description:"Macro renames all the features in the order preserving the base names using SOLIDWORKS API",image:"sequntial-features.svg",labels:["feature","rename"],group:"Model"},sidebar:"tutorialSidebar",previous:{title:"VBA macro to rename features based on type names using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/features-manager/rename-features-by-type-name/"},next:{title:"Reveal (display or delete) all feature hidden in the SOLIDWORKS Feature Manager tree",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/features-manager/reveal-hidden-features/"}},i={},m=[{value:"Notes",id:"notes",level:2}],d={toc:m},p="wrapper";function u(e){let{components:n,...r}=e;return(0,s.kt)(p,(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Features renamed sequentially",src:t(58645).Z,width:"660",height:"120"})),(0,s.kt)("p",null,"This macro renames all the features in active model in the sequential order using SOLIDWORKS API, preserving the base names ."),(0,s.kt)("p",null,"Only indices are renamed and the base name is preserved. For example ",(0,s.kt)("em",{parentName:"p"},"Sketch21")," will be renamed to ",(0,s.kt)("em",{parentName:"p"},"Sketch1")," for the first appearance of the sketch feature."),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Only features with number at the end will be renamed (e.g. ",(0,s.kt)("em",{parentName:"li"},"Front Plane")," will not be renamed to ",(0,s.kt)("em",{parentName:"li"},"Front Plane1")," and ",(0,s.kt)("em",{parentName:"li"},"My1Feature")," will not be renamed)"),(0,s.kt)("li",{parentName:"ul"},"Case is ignored (case insensitive search)"),(0,s.kt)("li",{parentName:"ul"},"Only modelling features are renamed (the ones created after the Origin feature)"),(0,s.kt)("li",{parentName:"ul"},"In the assembly documents, only assembly feature are renamed (components are ignored)"),(0,s.kt)("li",{parentName:"ul"},"If components are selected in the assembly, features of those components will be renamed")),(0,s.kt)("p",null,"Watch ",(0,s.kt)("a",{parentName:"p",href:"https://youtu.be/jsjN8zNRTuc?t=139"},"video demonstration")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n\ntry_:\n    \n    On Error GoTo catch_\n    \n    If Not swModel Is Nothing Then\n        \n        swModel.FeatureManager.EnableFeatureTree = False\n        swModel.FeatureManager.EnableFeatureTreeWindow = False\n        \n        Dim vComps As Variant\n        \n        vComps = GetSelectedComponents(swModel.SelectionManager)\n        \n        If Not IsEmpty(vComps) Then\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vComps)\n                \n                Dim swComp As SldWorks.Component2\n                Set swComp = vComps(i)\n                ProcessFeatureTree swComp.FirstFeature, swComp\n                \n            Next\n        \n        Else\n            ProcessFeatureTree swModel.FirstFeature, swModel\n        End If\n        \n    Else\n        Err.Raise vbError, "", "Please open model"\n    End If\n    \n    GoTo finally_\n    \ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n    \n    If Not swModel Is Nothing Then\n        swModel.FeatureManager.EnableFeatureTree = True\n        swModel.FeatureManager.EnableFeatureTreeWindow = True\n    End If\n\nEnd Sub\n\nSub ProcessFeatureTree(firstFeat As SldWorks.Feature, owner As Object)\n    \n    Dim passedOrigin As Boolean\n    passedOrigin = False\n\n    Dim featNamesTable As Object\n    Dim processedFeats() As SldWorks.Feature\n    \n    Set featNamesTable = CreateObject("Scripting.Dictionary")\n        \n    featNamesTable.CompareMode = vbTextCompare \'case insensitive\n    \n    Dim swFeat As SldWorks.Feature\n    Set swFeat = firstFeat\n    \n    While Not swFeat Is Nothing\n        \n        If passedOrigin Then\n        \n            If Not Contains(processedFeats, swFeat) Then\n                \n                If (Not processedFeats) = -1 Then\n                    ReDim processedFeats(0)\n                Else\n                    ReDim Preserve processedFeats(UBound(processedFeats) + 1)\n                End If\n                \n                Set processedFeats(UBound(processedFeats)) = swFeat\n        \n                RenameFeature swFeat, featNamesTable, owner\n            End If\n            \n            Dim swSubFeat As SldWorks.Feature\n            Set swSubFeat = swFeat.GetFirstSubFeature\n            \n            While Not swSubFeat Is Nothing\n                \n                If Not Contains(processedFeats, swSubFeat) Then\n                    If (Not processedFeats) = -1 Then\n                        ReDim processedFeats(0)\n                    Else\n                        ReDim Preserve processedFeats(UBound(processedFeats) + 1)\n                    End If\n                    \n                    Set processedFeats(UBound(processedFeats)) = swSubFeat\n                    RenameFeature swSubFeat, featNamesTable, owner\n                End If\n                \n                Set swSubFeat = swSubFeat.GetNextSubFeature\n                \n            Wend\n        \n        End If\n        \n        If swFeat.GetTypeName2() = "OriginProfileFeature" Then\n            passedOrigin = True\n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n    Wend\n    \nEnd Sub\n\nSub RenameFeature(feat As SldWorks.Feature, featNamesTable As Object, owner As Object)\n\n    If feat.GetTypeName2() <> "Reference" Then\n    \n        Dim baseFeatName As String\n        \n        If TryGetBaseName(feat.name, baseFeatName) Then\n            \n            Dim nextIndex As Integer\n                \n            If featNamesTable.Exists(baseFeatName) Then\n                nextIndex = featNamesTable.item(baseFeatName) + 1\n                featNamesTable.item(baseFeatName) = nextIndex\n            Else\n                nextIndex = 1\n                featNamesTable.Add baseFeatName, nextIndex\n            End If\n            \n            Dim newName As String\n            newName = baseFeatName & nextIndex\n            \n            If LCase(feat.name) <> LCase(newName) Then\n            \n                ResolveFeatureNameConflict owner, newName\n            \n                feat.name = newName\n            \n            End If\n            \n        End If\n        \n    End If\n\nEnd Sub\n\nFunction TryGetBaseName(name As String, ByRef baseName As String)\n    \n    TryGetBaseName = False\n    baseName = ""\n    \n    Dim regEx As Object\n    Set regEx = CreateObject("VBScript.RegExp")\n    \n    regEx.Global = True\n    regEx.IgnoreCase = True\n    regEx.Pattern = "(.+?)(\\d+)$"\n    \n    Dim regExMatches As Object\n    Set regExMatches = regEx.Execute(name)\n    \n    If regExMatches.Count = 1 Then\n        \n        If regExMatches(0).SubMatches.Count = 2 Then\n            \n            baseName = regExMatches(0).SubMatches(0)\n            TryGetBaseName = True\n            \n        End If\n        \n    End If\n    \nEnd Function\n\nSub ResolveFeatureNameConflict(owner As Object, name As String)\n    \n    Const INDEX_OFFSET As Integer = 100\n    Dim index As Integer\n    \n    Dim swFeatMgr As SldWorks.FeatureManager\n    \n    Dim swFeat As SldWorks.Feature\n        \n    If TypeOf owner Is SldWorks.Component2 Then\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = owner\n        \n        Dim swRefModel As SldWorks.ModelDoc2\n        Set swRefModel = swComp.GetModelDoc2\n        \n        If Not swRefModel Is Nothing Then\n            Set swFeatMgr = swRefModel.FeatureManager\n            Set swFeat = swComp.FeatureByName(name)\n        Else\n            Err.Raise vbError, "", "Component model is not loaded"\n        End If\n        \n    ElseIf TypeOf owner Is SldWorks.ModelDoc2 Then\n        \n        Dim swModel As SldWorks.ModelDoc2\n        Set swModel = owner\n        Set swFeatMgr = swModel.FeatureManager\n        Set swFeat = swModel.FeatureByName(name)\n        \n    Else\n        Err.Raise vbError, "", "Not supported owner"\n    End If\n    \n    If Not swFeat Is Nothing Then\n        \n        Dim baseName As String\n        \n        If TryGetBaseName(name, baseName) Then\n            \n            Dim newName As String\n            newName = baseName & (INDEX_OFFSET + index)\n            \n            While False <> swFeatMgr.IsNameUsed(swNameType_e.swFeatureName, newName)\n                index = index + 1\n                newName = baseName & (INDEX_OFFSET + index)\n            Wend\n            \n            swFeat.name = newName\n            \n        Else\n            Exit Sub\n        End If\n    \n    End If\n    \nEnd Sub\n\nFunction Contains(vArr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vArr)\n        If vArr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\nFunction GetSelectedComponents(selMgr As SldWorks.SelectionMgr) As Variant\n\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swComps() As SldWorks.Component2\n\n    Dim i As Integer\n    \n    For i = 1 To selMgr.GetSelectedObjectCount2(-1)\n                \n        Dim swComp As SldWorks.Component2\n    \n        Set swComp = selMgr.GetSelectedObjectsComponent4(i, -1)\n        \n        If Not swComp Is Nothing Then\n            \n            If Not isInit Then\n                ReDim swComps(0)\n                Set swComps(0) = swComp\n                isInit = True\n            Else\n                If Not Contains(swComps, swComp) Then\n                    ReDim Preserve swComps(UBound(swComps) + 1)\n                    Set swComps(UBound(swComps)) = swComp\n                End If\n            End If\n                        \n        End If\n    \n    Next\n\n    If isInit Then\n        GetSelectedComponents = swComps\n    Else\n        GetSelectedComponents = Empty\n    End If\n\nEnd Function\n')))}u.isMDXComponent=!0},58645:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApQAAAB4CAMAAAB7CJLeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAPewY4s4AAU+W/f394s4OGOwsAAAOCZwju0cJDIyMnh4eAhCX5W0wzgAODgAAI2uwDiLsD8/PwBjsLDlnbBjAAA3VZOTk2MAOBVbeUCKqGOw97CLOHBwcAAAY4uLY6rBzTgAYzg4izg4OPewi2NiYnG101iXtWMAAIs4YwA4i2MAY7CLi4vU93mdvC97oL3P112w0ilhgWuUqzhjsItji6ysrIKCgvfimk+cvJ2dnWNjsFqpyVCCnbu7uzg4Y0BRY4uw99SLOChbelinx87OzmWnxTGFrGOw1EyWtMXFxXi/3Y2NjbBjYziL1CJohi51mXWhvmW63G5ubg5KZmecwGGtzbOzs1FRUSxrhyJgenS512+z0d3d3aKiokiKpzqEommsylycui1xk7D29jl8mVORrylhfVSjw2KjwTduimq31hladxNQbXKZrE6LqXS923vE4jCApl+fvcDAwG2xzzN2kypmhyRsii94nE2ewApGYy54llWNqR9deDB9oyxsjjF7mVKcugY/XVWTsWOwzzF3mlqZtwAAAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///xG3q3sAAACJdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A0YG4uAAAAAlwSFlzAAAOwwAADsMBx2+oZAAADYJJREFUeF7tnf+f1MQZx+/iFCQLpT24bPHsVYrglfbEg/Z2sedprwLlpFgRPQWzenp6UhQBwaJYW0Xrv93nmedJNpvdNZNNMjvJzPuH3XyZrC8/+34mCTezmREOJTr87qgeJ6UiTkp9OCkVcVLqw0mpiG4pe+12e+7XvGIZTkpFNEvpt3phGK7OWdlBK0ppc90SuqUMV1ub8L4+d4k22ISalFbXLaH5f/0lEYpeK4Sltn19gaKUNtctoVHK527tBp88/oYQYa/V6bR92roxA1ym5XHINnuXeW0cG4d4AekuneQlc1CT0uq6JToJeFM1XL329rvnr1z56kHwrBAt2BBJCSp1Dy7QyhgGdBNidrRvyVbe3t/UUUqddds9ODOzuMMrxlKtlMGRb9/84ebtO7ffCx6FKSnF/KB1afJLObbRNMmSUm/d/g6EnDcvpBQlSnmc4DVJcPbrIxe/e/Dw1SdOBMNSYj+AxY4rs7Lk6ZXgLDewsL1D87Kdt2dp8fCvoEX3KKY7M3PySWwFH0KH1VBK3XUL2f08q2+dNmX2lENOiuDltbMPH1x85fo720G6G5hF21g5GdTTy/RKTeIsvctiA9KWiXsvLotuJCVW/CwaLXfLk5LpUsqEplu3vMNoSj19p/KWUn4c3Ll94v72jUEpIb8ZODVJwTAlCmogLtkGJOselRmTlPAlRVLSsdCX0IKHZzrje8ohJ7XXrZEhpSj3mjLlpAjWVtaC6ye2z994fyhxDJpywgw9dJReu0vyYjxKHKodlyjxSOTYY2gFfQdSCymnX7e8bDTV3ujsX1tZCe5vn//8x+9l4mFSSij6vpRwUY/L9CqJpdyQN6FDUtKxKGV8SA2knHrddpcwTbOpVsoXIPIA4n7mo88g8TAclBJSk9fclJ2s8egViBKHbgBbDSYOXxUdi92AXJDUQMo0uus2ztdgqpVSnAluBhD3h/uvPhqSEroBMY9pQU6zEKW3QK/UJE4c9sZXRHInXl8twVp8wSQ/5E/YtoZSaq7bOjhZtZTiQBB88en+a9+si4HE8WQiE8UlyAn/UfcyvzKyzcwCqidPOR4cIKWEc9fiYfySPPgM+b3gfSe0wLf+rakhZEmpt27xA82nainFU4/tvrYTdvytZOIWkSmlzrqla0sU1Ggql5IJ/U7rku+v8qo9ZEtpfd0OoUtK6AV8OeDANhSkZKyt2yH0SWkp6lJaW7dDOCkrJo+UDsJJWTFOyvw4KSvGSZkfJ2XFOCnz46SsGCdlfpyUFeOkzM90pPT78JbG4qRUZ73dXsf3KUnJ7xYwqZRcswhvaTzrvfV7q/dgwUlZMRNLye8W0V7fPHeuDQuGSRnNlIrGvwA09aQ/NGaYeFd9530PY6OUm+fC0DwpZ2MXN6KhMHKw1R+GpEyOnIx21XTe92gqrlsT63d9NQzXzTt9/yweDNn9PY2vioenKkg5uNUQypaynLo1sn7NvNHpBx5H3l2K4oR3b3EHxxDuXY76BhxQuCC8v3k8ttcCKcuqWwOjijFKyrj2gUhQmn4iY8XBrNEIa5kpzj7t/gXKHiyVGTdfytLq1ngp9+3bJ1e0MSbx+USpd38bLRyUWno0wBpnn2D6mGn0beC8E5rE0nwpS6vbOkipVcs2/ftbOz14EE9NPHs0PjkBcpaJdwy3xnNFMVM5JwXAHoLOYc2XsrS6rYeUgNyiAQgcMz/X8cW9pJ0jEwfQOO8Ynn4iDxsvZeV1WxspdWnJUgrR83u9LfzjhVyjn85hkhdPWO/ewgZYGV/UY6bRShOlrLxu6yCl1u6SEt8CF8POlmj5rOjIq/g/4jJEC7HiWzRXVKaNK3jB1Fwpq6vbekipUUtOfPN5HzqCvpN8OSSJ/70DTlXyXIWxzsNJieaKwjqesGAFvoYocdzF95jmUEjKCuu2LlLSkoRXKwIT9/2e2MQTU9/JZOTJu8xaU6ynrKpujazfmJSUerSEq/g2hP46XSf1nYQI2crE39BqTgEpbanbIYakBMjKqrtLIe4dh7zfavgPz08oZRPrlrVSh49jeGPlWlrAhFIyTapbdioHfGAf3u68LEgxKZsEC5UDPjAJ73FaFsJJGaGukrymHAtZ6bwsgJMyQt2jn5bSaVkYJ2WEukVZUgJkpfNyMpyUEeoKKUhZQMsLMXfv3v0Pb7QLJ2WEukBKUva1zOklG0lOOilHwQEBTa9bdXsUpQRIynxaXrjAC/aiLGXj61bdHXUpJ+kunZQKUvJC41EXJ4+UAEmp/OnjEy80URR/jR5HINQBJ2VEhjb8qG8Jb1KmHClHDCvIMVG0Hg8IJiaXsnDdGjZgI0tKfs8PKaks5d27vJCm6ETRRHvDmVjKYnX79x057tckMrSZVEoSUlnJ8VKOGqoaRYixZk4Uhfb0DC7jyZKywrqNulpDyBBnIinJxxxGAuNuJ5NDASNBc00UHfwmTGZSKUuo2+TUCQPIcGcCKUnIfEoKceoUL6QoPFE0OQLbbLKkrK5uo0ljppBhT14pyce8RgKnvuSFFIUnitbhAcFElpQV1S2kS2qaQ4ZA+aQkISdQUogv/8ELKQpPFMXs60GmlFXVLRhsVkgZCuWQknycyEjgf+OkTMSVvHjCeleZKFofJzOlrKxuEw3MgE1Shg8bgndPqKQQ//6AF1KMuorPMVG0Hg8IJrKkrKpugZpLOVI73jOxkcDOBwd4aZBiE0Vr8oBgIkvKauq2+2dM1KzzCeuUAz6wD28voiRw5r+/4KVB+pEn7zKbSJaU1dQtPuibb9XrQvqacsg98rGokUB461/A6dOnd3f/KuHtDZzgPYYsKV3dMhlSkpAlKIns3PonOklK9qW0hkwpXd0SPyUl+ViSkY5sKV3dEuOlJCGdkuWhIKUDGSMl+QjIjY5ScFIqMlJK8tEZWTJOSkVGSBnBWxxl4aRUZJyUvOooESelIqOl5JUK6LXb7bmG/+TfOJyUiqSlBCt5oRL8Vi8Mw9W5of+sDShKaXPdEprt8MPV1ia8r89dog02oSal1XVLaP5ff0mEotfC36Rt29cXKEppc90SGqV87tZu8MnjbwgR9lqdTpt/J7m82SPJv8EZOR1cTUqr65bQJuXVa2+/e/7Kla8eBM8K0YINk0uJgwZHkJTSyOng2VLqrFvBz/lO1C8OzTQBbVIGR75984ebt+/cfi94FFYuJRINcDWGLCn11m30nO9+/XaPGZJYNVIeJ3hNEpz9+sjF7x48fPWJE8GglBszNLEJJ4ZiaLNyNCC9MjSBFEezCu8QzSP19iwtHsaBhnJOI2w7+SQeTC0lxk0Hz5JSd932G1H9ensMmRdaUU855KQIXl47+/DBxVeuv7MdDHQDOAAVJzWwcjKgp5fplZrEE0i9y7SIYXovLtPoV3QPK13Oo4paImO+mOkxIKVMaLp1m5ASG2wcMmWyclWn71TeUsqPgzu3T9zfvjEoJeYEClIgkA51cPRK0C5vATbKjElKcDmSkhrAJ8UtAVo2icGecshJ7XXblxKX4hynT2XXlCknRbC2shZcP7F9/sb7g4njuQnSoJwwFm8GpZKvNLGUJuLg+jz1EzJx3M2Jk8Fwbuq3NG5aCpA6fU+9bmMp5TY8WO6bPtpudPavrawE97fPf/7j9zLxcKyUcD+Iy/SKROdj8E5ONhmSkhqglHFLE6fepq8pp123kZSyfvFyUzY2AG1SvgCRBxD3Mx99BomHYSylzHBxB09GMj7cSEZFXtEuXDh6GBcHE4+PxW4gammik5k3OrrrNpJSZoXTywAjYtMmpTgT3Awg7g/3X300ICUUrSxVOUsU8pmFKL0FeqUm8QRS2BtfEcmdeH21BGvxBVPcElU3jSwpNddtJGX0GdzYAPRJKQ4EwRef7r/2zboYSPyXUKNSIby1hHzoNz7pNQLvJi9L9aS/OI9USgnnrsXD+CXhZ+AJiFvSOQoFNYksKfXWbSRlon4tlFI89djuazthx99KJm4RmVLqrFv5NrN34OccbJSSCf1O65Lvr/KqPWRLaX3dElOQEnoBXw44sA0FKRlr65aYipSWoi6ltXVLOCn1kUdKq3FS6sNJqYiTUh9OSkWclPpwUiripNSHk1IRJ6U+nJSKTF1Kvw9vaSxOSkWmLyW/W8CkUnLNIryl4Tgp9TGxlPxuDeZKKQdsAXIQAYFjCGAtHhozTLyL548ahZNSEWOlHPHj83KQldrjhKP5o0ZRupTl1K159WuslEUfJ5zcaghlS1lO3RpYv6ZKOeqBRrkeJ2yBlGXVrXFRmSpl8oExkaC5HifcfClLq1snZZoxiRd+DHjzpSytbp2UKdr072/t9ODBwo8Tbr6UpdWtkzIFBI6Zn+v44l7SzsKPE26OlJXXrZMyBUspRM/v9bbwjxdyjeY6M8mLJ+XHCTdHysrr1kmZghLfAhfDzpZo+azoyKv4HI8BNzDpolJWV7dOyhSc+ObzPnQEfSeTsz0neZww7uJ7THMoJGWFdeukTIGJ+35PbOKJqe9kMvLkXWatKdZTVlW3BtbvtKWEq/g2hP46XSf1nYQI2crE39BqTgEpbalbYtpSMveOQ95vNfyH5yeU0qa6JQyR0gomlJKxom4JJ6U+iklpEU5KXQjxfy3F2WwAjyXGAAAAAElFTkSuQmCC"}}]);