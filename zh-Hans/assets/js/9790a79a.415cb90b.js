"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[41946],{3905:(n,r,e)=>{e.d(r,{Zo:()=>c,kt:()=>d});var o=e(67294);function t(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function a(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),e.push.apply(e,o)}return e}function l(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){t(n,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))}))}return n}function s(n,r){if(null==n)return{};var e,o,t=function(n,r){if(null==n)return{};var e,o,t={},a=Object.keys(n);for(o=0;o<a.length;o++)e=a[o],r.indexOf(e)>=0||(t[e]=n[e]);return t}(n,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)e=a[o],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(t[e]=n[e])}return t}var A=o.createContext({}),i=function(n){var r=o.useContext(A),e=r;return n&&(e="function"==typeof n?n(r):l(l({},r),n)),e},c=function(n){var r=i(n.components);return o.createElement(A.Provider,{value:r},n.children)},m="mdxType",p={inlineCode:"code",wrapper:function(n){var r=n.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(n,r){var e=n.components,t=n.mdxType,a=n.originalType,A=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),m=i(e),u=t,d=m["".concat(A,".").concat(u)]||m[u]||p[u]||a;return e?o.createElement(d,l(l({ref:r},c),{},{components:e})):o.createElement(d,l({ref:r},c))}));function d(n,r){var e=arguments,t=r&&r.mdxType;if("string"==typeof n||t){var a=e.length,l=new Array(a);l[0]=u;var s={};for(var A in r)hasOwnProperty.call(r,A)&&(s[A]=r[A]);s.originalType=n,s[m]="string"==typeof n?n:t,l[1]=s;for(var i=2;i<a;i++)l[i]=e[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,e)}u.displayName="MDXCreateElement"},9388:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>A,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var o=e(87462),t=(e(67294),e(3905));const a={layout:"sw-tool",title:"Macro to run group of macros using SOLIDWORKS API",caption:"Run Group Of Macros",description:"Macro demonstrates how to run the group of macros within one macro using SOLIDWORKS API",image:"macros-library.png",labels:["macro","run group"],group:"Frame"},l=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/run-macros-group/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/run-macros-group/index",title:"Macro to run group of macros using SOLIDWORKS API",description:"Macro demonstrates how to run the group of macros within one macro using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/run-macros-group/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/run-macros-group",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/run-macros-group/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/run-macros-group/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/run-macros-group/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to run group of macros using SOLIDWORKS API",caption:"Run Group Of Macros",description:"Macro demonstrates how to run the group of macros within one macro using SOLIDWORKS API",image:"macros-library.png",labels:["macro","run group"],group:"Frame"},sidebar:"tutorialSidebar",previous:{title:"Run and configure SOLIDWORKS command using Windows API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/property-manager-page-windows-api/"},next:{title:"Run Xpress products (e.g. DriveWorks) using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/run-xpress-products/"}},A={},i=[],c={toc:i},m="wrapper";function p(n){let{components:r,...a}=n;return(0,t.kt)(m,(0,o.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Library of macros in the Windows folder",src:e(50598).Z,width:"725",height:"81"})),(0,t.kt)("p",null,"Macro can be run from another macro using the ",(0,t.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2010/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~runmacro2.html"},"ISldWorks::RunMacro2")," SOLIDWORKS API function."),(0,t.kt)("p",null,"This enables the possibility to run multiple macros from within one macro. This can be useful when ",(0,t.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/macro-buttons/"},"adding the custom macro buttons on the macro toolbar")," so multiple commands can be executed by one button click."),(0,t.kt)("p",null,"The following example allows to run several SOLIDWORKS macros within one macro."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    RunMacro "C:\\Macros\\Macro1.swp", "Macro11", "main"\n    RunMacro "C:\\Macros\\Macro2.swp", "Macro21", "main"\n    RunMacro "C:\\Macros\\Macro3.swp", "Macro31", "main"\n    \nEnd Sub\n\nSub RunMacro(path As String, moduleName As String, procName As String)\n    swApp.RunMacro2 path, moduleName, procName, swRunMacroOption_e.swRunMacroUnloadAfterRun, 0\nEnd Sub\n')),(0,t.kt)("p",null,"Change the arguments of ",(0,t.kt)("strong",{parentName:"p"},"RunMacro")," call to call your own group of macros."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'RunMacro "Full Path To Macro", "Module Name", "Entry Function Name"\n')),(0,t.kt)("p",null,"Where"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Macro entry point",src:e(92369).Z,width:"658",height:"476"}),"{ width=350 }"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Full Path To Macro")," - full path to .swp or .dll for ",(0,t.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/getting-started/macros/types"},"VBA or VSTA macro")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Module Name")," - name of the module where the main entry function is defined. This is usually the macro name followed by 1."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Entry Function Name")," - name of the entry function. This function cannot have parameters. Usually named ",(0,t.kt)("strong",{parentName:"li"},"main"))),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Modify the macro as per your needs. You can add remove the calls to ",(0,t.kt)("strong",{parentName:"p"},"RunMacro")," and change path, module and function names to match the path to the macro in the library")),(0,t.kt)("p",null,"The following macro provides more advanced functionality of running the macro. It allows to specify the multiple comma separated macros as well as folders using the full path or relative path."),(0,t.kt)("p",null,"This enables better experience when maintaining the macro."),(0,t.kt)("p",null,"This macro also handles the errors:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"When the specified macro path is not found:")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Macro not found error",src:e(15777).Z,width:"449",height:"269"}),"{ width=250 }"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"When macro cannot be run (e.g. macro is corrupted)")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Failed to run macro error",src:e(61175).Z,width:"450",height:"269"}),"{ width=250 }"),(0,t.kt)("p",null,"In order to configure the macro it is required to modify the value of the ",(0,t.kt)("strong",{parentName:"p"},"MACROS_PATH")," variable:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"It is possible to specify multiple macros to run by separating them by comma, e.g. ",(0,t.kt)("strong",{parentName:"li"},"Macro1.swp, Macro2.swp")),(0,t.kt)("li",{parentName:"ul"},"Macro can be specified with a full path (e.g. ",(0,t.kt)("strong",{parentName:"li"},"D:\\Macros\\Macro1.swp"),") or using relative path (e.g. ",(0,t.kt)("strong",{parentName:"li"},"Macro1.swp"),"). If later the macro must be available in the same folder as this master macro"),(0,t.kt)("li",{parentName:"ul"},"It is possible to specify the folder of macros to run (e.g. ",(0,t.kt)("strong",{parentName:"li"},"D:\\Macros")," or ",(0,t.kt)("strong",{parentName:"li"},"Macros"),"). Same as macro path either full path or relative folder path are accepted. In this case all macros from the specified folder will be run"),(0,t.kt)("li",{parentName:"ul"},"If empty string is specified, i.e. ")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Const MACROS_PATH As String = " "\n')),(0,t.kt)("p",null,"All macros of the folder where this master macro is placed will be run. This option is useful as it is only required to copy the master macro to the location of the macro library to run without the need to modify it."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function PathIsRelative Lib "shlwapi" Alias "PathIsRelativeA" (ByVal path As String) As Boolean\n#Else\n     Private Declare Function PathIsRelative Lib "shlwapi" Alias "PathIsRelativeA" (ByVal Path As String) As boolean\n#End If\n        \nConst MACROS_PATH As String = "Macro1.swp, D:\\Macro2.swp, D:\\MacrosFolder, Macros\\Assembly"\n\nConst PATH_DELIMETER As String = ","\nConst MACRO_EXT As String = "swp"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n              \n    Dim swMacrosColl As Collection\n    Set swMacrosColl = New Collection\n    \n    AddMacros swMacrosColl\n    \n    Set swMacrosColl = ResolvePaths(swMacrosColl)\n    \n    RunMacros swMacrosColl\n\nEnd Sub\n\nFunction ResolvePaths(swMacrosColl As Collection) As Collection\n\n    Dim fso As Object\n    Set fso = CreateObject("Scripting.FileSystemObject")\n    \n    Dim resColl As Collection\n    Set resColl = New Collection\n    \n    Dim i As Integer\n    \n    For i = 1 To swMacrosColl.Count\n        \n        Dim path As String\n        path = swMacrosColl(i)\n        \n        If PathIsRelative(path) Then\n            path = fso.BuildPath(swApp.GetCurrentMacroPathFolder(), path)\n        End If\n        \n        If fso.FolderExists(path) Then\n            \n            swMacrosColl.Remove i\n            \n            For Each file In fso.GetFolder(path).Files\n                If LCase(fso.GetExtensionName(file)) = LCase(MACRO_EXT) Then\n                    AddMacroToCollection resColl, file.path\n                End If\n            Next\n            \n        ElseIf fso.FileExists(path) Then\n            AddMacroToCollection resColl, path\n        Else\n            Err.Raise vbObjectError, , "Macro file is not found: " & path\n        End If\n        \n    Next\n    \n    Set ResolvePaths = resColl\n    \nEnd Function\n\nSub AddMacroToCollection(coll As Collection, item As String)\n    \n    If UCase(item) <> UCase(swApp.GetCurrentMacroPathName()) Then\n        Dim i As Integer\n        \n        For i = 1 To coll.Count\n            If UCase(coll.item(i)) = UCase(item) Then\n                Exit Sub\n            End If\n        Next\n        \n        coll.Add item\n    End If\n    \nEnd Sub\n\nSub RunMacros(swMacrosColl As Collection)\n    \n    Dim i As Integer\n    \n    For i = 1 To swMacrosColl.Count\n        Dim path As String\n        path = swMacrosColl(i)\n        Dim macroErr As Long\n        \n        Dim moduleName As String\n        Dim procName As String\n        \n        GetMacroEntryPoint path, moduleName, procName\n        \n        If False = swApp.RunMacro2(path, moduleName, procName, swRunMacroOption_e.swRunMacroUnloadAfterRun, macroErr) Then\n            Err.Raise vbObjectError, , "Failed to run macro: " & path & ", error: " & macroErr\n        End If\n        \n    Next\n    \nEnd Sub\n\nSub GetMacroEntryPoint(macroPath As String, ByRef moduleName As String, ByRef procName As String)\n        \n    Dim vMethods As Variant\n    vMethods = swApp.GetMacroMethods(macroPath, swMacroMethods_e.swMethodsWithoutArguments)\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(vMethods) Then\n    \n        For i = 0 To UBound(vMethods)\n            Dim vData As Variant\n            vData = Split(vMethods(i), ".")\n            \n            If i = 0 Or LCase(vData(1)) = "main" Then\n                moduleName = vData(0)\n                procName = vData(1)\n            End If\n        Next\n        \n    End If\n    \nEnd Sub\n\nSub AddMacros(swMacrosColl As Collection)\n    \n    Dim vPaths As Variant\n    vPaths = Split(MACROS_PATH, PATH_DELIMETER)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vPaths)\n    \n        Dim path As String\n        path = Trim(vPaths(i))\n        swMacrosColl.Add path\n        \n    Next\n    \nEnd Sub\n')))}p.isMDXComponent=!0},61175:(n,r,e)=>{e.d(r,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcIAAAENCAMAAACreJUWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAADeSwduQOgBeX36sgBoaGofOq/Hx8WBgANPT0wAAVzoAAKPT4ne21GBgq9TUl14rAMzdpKC61iUrMS/D7rnR6SVrnAArfGGNfiYAMkQAMYWGX8TX4pm10a3GwKK8mvTivtTDhDHN9aPm9AAANTWGzcTs9nQyAOvrqJPEwJeDg9ra2s6HNrDIoS59gnZrMSYAWXzH4TY2h6zF38ydXABMm3VLAD/O8lSg6b/V7EYAWwBZnYOXvmKO4bLL5TvV/JbH4b7i9Ka/28/Pz++rYEJCQqvwq6urYPTQqi9+x1kAMoc2Nq/c6aK82Fic262ytdPiyLB9NY2+2UGH2ZeDl1QAAHS/53BwcCYAAFXR8cja7svc5VONub6Xg+jNiSVsvKjB3QAxes6HYJe+vu/wzhtDSoODqpXh6Y9YAI9YWzEAWtbr8oODl9Lhpmre+3rEwABXV4+Pj3jc86qDl1UAMtGgXZ24016o676+qrR7WgBfqrb//12k2///tuK+l4c2ADUAAIdgh/+2ZmCrqzx/sTYANobN8GAsMlkAAKOieoOq0NvbvIfOzsTY7V6J3BQWFgAAYHrE382+gv/bkKqXvoKCgo1rMaSHVzZgq5Db/18ANY/a5MDDxqeJfKypfoeHh/T00Kvw8CYrWLDIwna/26tgAHm4187wq/Dwq3lNAABmtmCrzma2/2nY85e+4gA6kHjD6yZvwbTh6ZFuMtram5zb26qLWTQ0NJePW0KInCjP5I3h9GAAYM3exjTP99Li70WN4Li6u0VOWtD00NmbV5eDqqnT7AAAAHu826fAnErR8lKe5+jvrjZgh5DB3ITK7DYAYLC1uLnY2GCp32AAAKa/vABghwA1hgBPn6bv8xxUW5Ti9DSG0I9sWIXf9OK+qty9fHxQAMbZ4wAAOjF7u0MAAJA6AKqDg5ZwM3jB3bCsgK6OWqzFn0OK3KelfAAAWbZmAGEsADaHh13V85zl9HS82PDOh6zp9Ierh3oyAKrDnqjCvpPE3wAtf1+r8AAAAOLhhAcAAAEAdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A/////////////////////////////////////////////////////////////////////////wBQ4ke0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAQpklEQVR4Xu2dC3gcVRXHBxBXATVAawQUsKYFTdDUtAVfBWrQokgRbCmmtVErKBG00qKEKhFrpeIjiGk1YGmFYEDlYbFVBEIV+4lUpDYVVHxUiUUerfURLbX5POfc/+ze2cxkN5tJuiec35fd+zr3zs797Z3Z5dtbgszVBwbBzZlPdgdB66WXB0Fw69UHtl6akYrg1kwm81dKXS7DzcF3OCfVHMaVf/k6p/tKnLTueyt1v5nbbuZazhnDRiDTP1xcbvaGnwDp8GAKR4BhVfh3uorKFdgYRkKF6wxd7L8/zEHhulPWV0vGUEPTB77sMqJw3YLqlxnaaNrgHIrCU8ygRib8Nqtw3XrUGbr4j9wPRaEtQp14CjOoMnTxinU5hRcbGjGF6vmXp/AQQyO/M4XaMYXqMYXqMYXqMYXqMYXq8RW+w9DIjxIUTqlaLOlRPZOpcMC/pVCQ5UEucgp1dEly9ynzXLqcfzOFvEfRx31Wk6gQM7r8UGeiKJYdRt5XVJ4phRUy/0f1nCWleLIK6SDLZg8UaSSSqPBQMbClYlAKa6lPqNDJcyKT8BWGy9YYJH/wFE7zmPLiirMoWVH5mslUmEdZvtidtaXihz0H3CB5qp+2IgiqFrsmKkoyBU3UixN+4u4Sef/hFLys9oZpy2YHQeWZGJhYLqFUCBvcwLnjSpQRS6LCecsrH5QEDpaTue1f2lLxTVZG+S0Vk6dtP2zxtG8szhanbSc7ZJ36MSuk+mnp7iJFIQf9frHr4Cvk8LABA+eO68KMOD7mKWz0uGkezXfj9tq/rZnMhcb7e57m6t0V8xobuaWR2+iPMtmiPBrXVj7Ika5eaqi7F+myLo5ahDW00gI5AEENiMkd10gmWSH/kT8oXLtDJnV3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"},92369:(n,r,e)=>{e.d(r,{Z:()=>o});const o=e.p+"assets/images/macro-entry-point-a23f1da823b3a408a34659b722d38e9f.png"},15777:(n,r,e)=>{e.d(r,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcEAAAENCAMAAABATy4VAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAC+Rw9uQOgBeX5CQOvDx8XvF4CYAAGBgANfXmUMAAAAANXBwcKzF33rEwNDQ0GCrq0QAMcjb7iVrnDY2AKC61oWGYNy9fJA6OgAAgCYAMofOq7nR6SjP5PDwzl8sAHa/22GNfgA6wiLF9Jm10eK+qjWGza3GwUYAW6Pz/KtgAHvc+duQl86HNqvwq8vs05PEwJeDgwAAWGY6wj/O8v//tiYAWTZghzSFhzY2h6urYKnW4E+k+YOXvgBZnWAsMsekY+TztKXl9nwxAKa/22KO4QArfYdgh//bkFDT9KakfAA6kKSHVzZhq8noslkAMrb//zF7u42+2YTK7Mnm93ZrMYarhqK82LLL5UJCQu+rYHS82NPT07bbkNra2ma2/0KJ26O9mq2ytZDb/7ZmgJeDl/TivlgAAPDOhwBMmxgYGC7T/pA6AKjB3TEAWLzh9aaAOQBm1lONuWnY84ODqs6HYJe+vm3E+L6Xg/+2Zpe+4pA6gIZbYrnY2DqQ2yUrMWYAgJzb23m414ODl3VLAF+q743h9I+PkFic21cAMMHk1AAxeqqDl8rIjZ2409vbvMLksdiaV/+2rXjB3TYAAABmtoDR/Do6wjYANhtDSu/vqiYrWOL00LZmAAAAYAAAlzoAgCVsvF2k27be9XxPAL6+qnAzAGAANl6J3OK+l2QAZDqQ6zo6kbi6u43k+mBgq08AOIKCgqqXvk0AAKuMWZA6l41rMYc2NiTP/ABgh4Oq0KmEgcDDxqypfoeHhy6E1s7w8Dx/sducWDoAZofO8GCrznDX9///1pePW2AAACZvwbZmOpNvMqnCnTQ0NIXg9c7wq0KInLl6V4c2AFsAOcChYvTQqtvbnEWN4DUAYIZdAJeDqkVOWgBfq+TRjnu82//bwsHEjAAAAGCp313V87C1uNTUl1uu/KfAvYfOzpA6rXlNAABPn5PF4JHm/HTZ+BxUW5Xj9JDB3I9sWAAAOfT00K7GoAA1h2vg/nHH+WYAlwAArVEAAKvv8KaAYwAAAGr2x6IAAAEAdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A/////////////////////////////////////wBm1e7BAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAS10lEQVR4Xu2cDZgd1VnHp8EhNumqoKCpNFsbDbqwopGNVaPSNK5LSGta17q96vIRhKUkYmMVQrWtNTG0VtriVnE1q8HI2vAhKzGiaUookbo0LCqCpbqKD2KjpUFrPooSH9+P/5mPu3Pvzt6d3OQN7+/J3Dkf7zkz5/zumbmBmUSxYxs3aB03aJ1gcNKxxTveAXNqcPLt9wxKwrHDb6tDMTi5dfCbHWvs+z5RKAbf7gItsu8/g8HJe1Dk2OI4L0Ix6EvQJisTgzFKHFusnEwM3upYxA1a579Sg+c4FnGD1nGD1nGD1nGD1nGD1nGD1skY/HHHIr8Kgz15g5sX3iH7KxdcR5llPyGZGdkdpZGbqaHuGjffvF33uyMC6Qylj/uyBgb7husMYkJ3v1dFlGL1q0n7mt63SmaNTP+VC66QXDGJQTrI6vnNIp2GwOBn1tUZfK8IONg5K4PLqU0wqO7UYyOyBsOidWbJ42KwZ+fayXhVhs1f23kF7db0/th1lNlOSb7SXXGw828WLHutpKl81ZooWniHVlFWdptRRa14xx/cXCKvPIuCVy9/7arV86Oo963omNgtoZQJFdpxelyJcgppZHD77t4vyQ4KdpO41X90sPN32BilD3Zet4qumqv23JFkRQ5Jp3bMGimmyafmGvlYMPjfd2iDrEEODxXoOD2uhjlFXKBX0W2XT8YbMnxhO033htXLf+PAdZzZ8NiCK7j4YOf2DRu4ZgPX0R9KJFnZNuzq/RJHarmUUPNMpCY1jmqEA7TOIjkAQRWISY/rNAYG+x6uN8h/SB8M7lomc0priqZY0o+d9ezBTp72JLthb84gOpC9RnKMBrGyrEEKo7XHKanQ8Mxxnca8oAbjTZNxR4YvPNqxd/lX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"},50598:(n,r,e)=>{e.d(r,{Z:()=>o});const o="data:image/png;base64,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"}}]);