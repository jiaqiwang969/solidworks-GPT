"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[55472],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>g});var o=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},s=Object.keys(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=o.createContext({}),m=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=m(n.components);return o.createElement(l.Provider,{value:e},n.children)},c="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,s=n.originalType,l=n.parentName,p=r(n,["components","mdxType","originalType","parentName"]),c=m(t),u=a,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||s;return t?o.createElement(g,i(i({ref:e},p),{},{components:t})):o.createElement(g,i({ref:e},p))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var s=t.length,i=new Array(s);i[0]=u;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=n,r[c]="string"==typeof n?n:a,i[1]=r;for(var m=2;m<s;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92316:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>m});var o=t(87462),a=(t(67294),t(3905));const s={title:"Usage of assembly component transformation in SOLIDWORKS API",caption:"Component Transformation In The Assembly",description:"Example explains transformation of rotation and translation for components in the assembly",image:"comp-translation.png",labels:["acos","angle","component","example","orientation","point","position","rotation","solidworks api","transform","translation","vector"],"redirect-from":["/2018/03/component-transformation-in-assembly.html"]},i=void 0,r={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly-component-transformation/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly-component-transformation/index",title:"Usage of assembly component transformation in SOLIDWORKS API",description:"Example explains transformation of rotation and translation for components in the assembly",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly-component-transformation/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly-component-transformation",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly-component-transformation/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly-component-transformation/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly-component-transformation/index.md",tags:[],version:"current",frontMatter:{title:"Usage of assembly component transformation in SOLIDWORKS API",caption:"Component Transformation In The Assembly",description:"Example explains transformation of rotation and translation for components in the assembly",image:"comp-translation.png",labels:["acos","angle","component","example","orientation","point","position","rotation","solidworks api","transform","translation","vector"],"redirect-from":["/2018/03/component-transformation-in-assembly.html"]},sidebar:"tutorialSidebar",previous:{title:"Generate material variants configuration using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/apply-render-material/"},next:{title:"Fix SOLIDWORKS macro issues with lightweight components in assembly or drawing",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly-drawing-lightweight-components/"}},l={},m=[{value:"Translation Transformation",id:"translation-transformation",level:2},{value:"Rotation Transformation",id:"rotation-transformation",level:2},{value:"Preserving Transformation State In Configurations",id:"preserving-transformation-state-in-configurations",level:2}],p={toc:m},c="wrapper";function d(n){let{components:e,...s}=n;return(0,a.kt)(c,(0,o.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SOLIDWORKS components are instances of models (parts or assemblies) in the another parent assembly. Component's position in its space is driven by its transformation (regardless if the component is constrained by mates or moved in the space by free drag-n-drop operation). Transformation consists of 3 components: translation, rotation and scale."),(0,a.kt)("p",null,"To get the transformation of the component use the ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2~transform2.html"},"IComponent2::Transform2")," SOLIDWORKS API property. The transform in this case represents the relation of the component origin coordinate systems to the root assembly origin coordinate system. It is not required to multiple the transform of sub-assemblies for its children components to get the total transformation of these components relative to root assembly."),(0,a.kt)("h2",{id:"translation-transformation"},"Translation Transformation"),(0,a.kt)("p",null,"In the example below the component is moved in space Along X, Y and Z coordinates. The following example will calculate the new positions of the component's origin:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Component translational transform",src:t(23837).Z,width:"640",height:"348"}),"{ width=640 }"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swMathUtils As SldWorks.MathUtility\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\nDim swComp As SldWorks.Component2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Set swComp = swSelMgr.GetSelectedObject6(1, -1)\n    \n    Dim swTransform As SldWorks.MathTransform\n    Set swTransform = swComp.Transform2\n    \n    Dim dOrigPt(2) As Double\n    dOrigPt(0) = 0: dOrigPt(1) = 0: dOrigPt(2) = 0\n    \n    Dim swMathPt As SldWorks.MathPoint\n    \n    Set swMathPt = swMathUtils.CreatePoint(dOrigPt)\n    \n    Set swMathPt = swMathPt.MultiplyTransform(swTransform)\n    \n    Dim vCompOriginPt As Variant\n\n    vCompOriginPt = swMathPt.ArrayData\n    \n    Debug.Print "Along X: " & vCompOriginPt(0) * 1000 & "mm; " & "Along Y: " & vCompOriginPt(1) * 1000 & "mm; " & "Along Z: " & vCompOriginPt(2) * 1000 & "mm"\n    \nEnd Sub\n')),(0,a.kt)("p",null,"The following line will be output to the Watch window as the result of running the macro on ",(0,a.kt)("a",{target:"_blank",href:t(11099).Z},"this sample model"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Along X: 75mm; Along Y: -50mm; Along Z: -100mm")),(0,a.kt)("h2",{id:"rotation-transformation"},"Rotation Transformation"),(0,a.kt)("p",null,"Now let's rotate the component and try to find the rotation angles. This component is rotated in all directions. ",(0,a.kt)("strong",{parentName:"p"},"Red line")," below - is the X axis of the assembly, ",(0,a.kt)("strong",{parentName:"p"},"Green line")," - Y axis, ",(0,a.kt)("strong",{parentName:"p"},"Blue line")," - Z axis. New X, New Y and New Z - are orientation of the corresponding axes in the component and dimensions indicate the angles between those axes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Component rotational transform",src:t(49456).Z,width:"638",height:"598"}),"{ width=640 }"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Const PI As Double = 3.14159265359\n\nDim swApp As SldWorks.SldWorks\nDim swMathUtils As SldWorks.MathUtility\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\nDim swComp As SldWorks.Component2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Set swComp = swSelMgr.GetSelectedObject6(1, -1)\n    \n    Dim swTransform As SldWorks.MathTransform\n    Set swTransform = swComp.Transform2\n    \n    Debug.Print "Angle between X axes: " & Round(GetAngle(1, 0, 0, swTransform) * 180 / PI, 2) & " deg"\n    Debug.Print "Angle between Y axes: " & Round(GetAngle(0, 1, 0, swTransform) * 180 / PI, 2) & " deg"\n    Debug.Print "Angle between Z axes: " & Round(GetAngle(0, 0, 1, swTransform) * 180 / PI, 2) & " deg"\n    \nEnd Sub\n\nFunction GetAngle(x As Double, y As Double, z As Double, transform As SldWorks.MathTransform) As Variant\n    \n    Dim dVect(2) As Double\n    dVect(0) = x: dVect(1) = y: dVect(2) = z\n    \n    Dim swMathVecOrig As SldWorks.MathVector\n    Dim swMathVecTrans As SldWorks.MathVector\n    \n    Set swMathVecOrig = swMathUtils.CreateVector(dVect)\n    \n    Set swMathVecTrans = swMathVecOrig.MultiplyTransform(transform)\n    \n    \'cos a= a*b/(|a|*|b|)\n    GetAngle = ACos(swMathVecOrig.Dot(swMathVecTrans) / (swMathVecOrig.GetLength() * swMathVecTrans.GetLength()))\n    \nEnd Function\n\nFunction ACos(val As Double) As Double\n    \n    If val = 1 Then\n        ACos = 0\n    ElseIf val = -1 Then\n        ACos = 4 * Atn(1)\n    Else\n        ACos = Atn(-val / Sqr(-val * val + 1)) + 2 * Atn(1)\n    End If\n    \nEnd Function\n')),(0,a.kt)("p",null,"Running the code above will output the following results for ",(0,a.kt)("a",{target:"_blank",href:t(7472).Z},"this sample model"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Angle between X axes: 110 deg")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Angle between Y axes: 66.74 deg")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Angle between Z axes: 75 deg")),(0,a.kt)("h2",{id:"preserving-transformation-state-in-configurations"},"Preserving Transformation State In Configurations"),(0,a.kt)("p",null,"By default transformation state of the floating component in the configuration will be overridden by another configuration state in case of assembly modifications, such as new component addition, mate changes etc. This is different from the manual behavior when floating component's position will not be changed if another configuration modified."),(0,a.kt)("p",null,"To demonstrate the issue consider the following scenario:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{target:"_blank",href:t(34329).Z},"sample assembly")," which has a single component"),(0,a.kt)("li",{parentName:"ul"},"There are 2 configurations in the assembly",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Configuration ",(0,a.kt)("strong",{parentName:"li"},"A")," has the component position fully defined by mates"),(0,a.kt)("li",{parentName:"ul"},"Configuration ",(0,a.kt)("strong",{parentName:"li"},"B")," has a floating component without any mates in the random position"))),(0,a.kt)("li",{parentName:"ul"},"Run the following macro. Macro will align the corner of the component with the origin of the assembly in the Configuration B")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Component&#39;s corner aligned with the origin of the assembly",src:t(58129).Z,width:"377",height:"173"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Macro will stop at several points. Read the comment indicating the state"),(0,a.kt)("li",{parentName:"ul"},"On the last step the transformation assigned to the floating component was overridden by the transformation in the Configuration A driven by mates.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    swModel.ShowConfiguration2 "B"\n    \n    Dim swRootComp As SldWorks.Component2\n    Set swRootComp = swModel.ConfigurationManager.ActiveConfiguration.GetRootComponent3(False)\n    \n    Dim swComp As SldWorks.Component2\n    \n    Set swComp = swRootComp.GetChildren()(0)\n    \n    Dim swTransform As SldWorks.MathTransform\n    \n    Dim dMatrix(15) As Double\n    dMatrix(0) = 1: dMatrix(1) = 0: dMatrix(2) = 0: dMatrix(3) = 0\n    dMatrix(4) = 1: dMatrix(5) = 0: dMatrix(6) = 0: dMatrix(7) = 0\n    dMatrix(8) = 1: dMatrix(9) = -0.03: dMatrix(10) = -0.05: dMatrix(11) = -0.01\n    dMatrix(12) = 1: dMatrix(13) = 0: dMatrix(14) = 0: dMatrix(15) = 0\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Set swTransform = swMathUtils.CreateTransform(dMatrix)\n    \n    swComp.Transform = swTransform\n    \n    swModel.EditRebuild3\n    \n    Stop \'Component is aligned\n    \n    \'FixComponentInThisConfiguration swComp\n        \n    swModel.ShowConfiguration2 "A"\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    Set swAssy = swModel\n    \n    swAssy.AddComponent5 swComp.GetPathName(), 0, 0, False, "", 0.2, 0.2, 0.2\n    \n    swModel.EditRebuild3\n    \n    Stop \'New component is added into configuration A\n    \n    swModel.ShowConfiguration2 "B"\n    \n    Stop \'Component in configuraiton B lost its position\n    \nEnd Sub\n\nSub FixComponentInThisConfiguration(comp As SldWorks.Component2)\n    \n    If False <> comp.Select4(False, Nothing, False) Then\n        Const WM_COMMAND As Long = &H111\n        Const CMD_FixCompInThisConf As Long = 51605\n        SendMessage swApp.Frame().GetHWnd(), WM_COMMAND, CMD_FixCompInThisConf, 0\n    Else\n        Err.Raise vbError, "", "Failed to select component"\n    End If\n    \nEnd Sub\n')),(0,a.kt)("p",null,"In order to preserve the transformation it is required to ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/assembly/components/fix-float/"},"fix")," the component in the Configuration B."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uncomment the following line"),(0,a.kt)("li",{parentName:"ul"},"Close the assembly without saving and reopen it again")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},"'FixComponentInThisConfiguration swComp\n")),(0,a.kt)("p",null,"to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},"FixComponentInThisConfiguration swComp\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run macro again. Now the transformation is preserved")))}d.isMDXComponent=!0},34329:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/files/preserve-transform-b05a53f6ac048c7f144a21af9462b42b.zip"},7472:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/files/transform-rotation-552d0f6bdd876478958056133a07a7f2.SLDASM"},11099:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/files/transform-translation-4857f84bab8baee550c36b8c98b73fee.SLDASM"},58129:(n,e,t)=>{t.d(e,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXkAAACtCAIAAADauZjnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABp6SURBVHhe7Z0JkBXVucedQYjyNAlBTLTK8Cxj8qq0rBcf6MuzyucYnwsxLuCGC4LjKAq4oYAoSFAU1BBjFEVU3HcUUQO4JCrivkTcFRWjwahoXElC1Hq/6e/Msenu27fvnaZn5t7/r05R955eb5/v/Pqc8yGu9bUQQqx55BohRBHINUKIIpBrhBBFINcIIYpArhFCFIFcI4QoArlGCFEEco0QogjkGiFEEcg1QogikGuEEEUg1wghikCuEUIUgVwjhCgCuUYIUQRyjRCiCOQaIUQRyDVCiCKQa4QQRSDXCCGKQK4RQhSBXCOEKAK5RghRBHKNEKII5BohRBHINUKIIpBrhBBFINcIIYpArhFCFIFcI4QoArlGCFEEco0QogjkGiFEEcg1QogikGuEEEUg1wghikCuEUIUgVwjhCgCuUYIUQRyjRCiCOQaIUQRyDVCiCKQa4QQRSDXCCGKQK4RQhSBXCPKsGrVqi+//NJ9EaJa5BqRxrx58773vQ0aGhrWCtGnT5+WlpYZM2Y8/vjjS5cuXblypWQkyiLXiJLgEcxy7OhJN89dTJkxa87kKTOGDB25594H9eu/3WY/+g809G/rrd+tW7eIjJqamiQjEUGuEckgCKyBVkw0WQoyQkzIaIcdByCjjTf+YbqMGDQhoxUrVnAtd1VRu8g1IhmMgC8iNmlnSZTRt761DjIyBxnM0SSj2kOuEQnQ2xFBxBQFFOZoyIjBFDJijpYuI+ZoyIg5GjLSHK3zI9eIKAwomPhELNBJSlxG3Coyiq9eS0adDblGrAZzFgYRTHYinbxLlPjqdYqMtHpdMHKN+Abe//RDn3iqvZI9lSYZ5Y5cIxz0JfpYRYmn2it+9bqsjOKr15JROnKNcNB/ck881V7JmEoDpdIiyDWiFTpGhySeaq/Y6nXGvL6tXteJjOQa8TUR32kTT7VXSqXSUmRUG6k0uabe4aVKlHfRxFNNlux5fVu97ioykmvqGgKUqCWyI+Gu0mlLqVRa58/ryzX1ixJPNVk6bV5frqlfiDYlnuqwJKbSvIzwTr9+/VyI5IpcU6fMnj1biSeVSMFBvIF22nmvNTHAkWvqEZs9Ae8x5vm80/AOg21edAy8CTgG4VotrrdCizO02eo/t1ln3Z6Mblys5IdcU6cgml0GDKL033b7Lbfq17fvZj/YaJP11v82cdat29oNDY1lZRSJVJWuXmjljTb+4amTzkc3TU1NLlDyQ66pU/r06YNf9t7n0PSy/Q67psuINyEyYsKPjJj8S0ZdtNB866//HURDGTLsWFrWBUp+yDV1yrx587BGxCxVFJPR5j/ZAhn16tUbGXXv0SNdRkOGjkRGmqN1nkK7dO/ew0RjpbGxccWKFS5WckKuqVNsySYijjVRSsnITMQcDRkxekdGzNEko+IL41BagbFM2DVMpmbMmOFiJSfkmvqFro4FImoouOwyYBAyYo6GjJijISNGW+kyom8gI61e51JwOg95p533CouGQg31LlByQq6pX1paWujbkc7f2UopGcVXryWjKoolniKisSLXiNxYunQpw4dI3+5yJTGVligjpdIixSeeEguPMd/Mt1xT19AV6auR3ltjpWxe31av601G4cRTYsk98y3X1DV9+vRhbhLpnPVWwqvXGfP6XX31Op54ipfcM99yTV2TV+a7tkuWVFoXkhH3Fk88JZZ8M99yTV1TWOa7hkt49TpjXt9WrztERkwMuaV44imx9O69YY6Zb7mm3iHyOjzzXdslSyotUUZrIpXGhUolnuIl38y3XFPvtLS00AEi3UOlyJJFRvHV6ypkhMtSEk+JRa4RuVEbme/aLmVTaYkyiqTSqE9PPCUWLpRX5luuEXWR+a7tUlZGR404eet+20U8kqVs/uMt88p8yzVCme/aL1v/1/985zu9Ih7JUnLMfMs1QpnvuigoI0ueO14aGxtz+X9XyTXiayKJQIyEpkqNFSZW2TNQ4ZJX5luuEa3gGmW+a7swTa5ibZjys+1+nss0Sq4RrSjzXfNllwGDUEbEIxmLXCNyQ5nveig0cca/MRwp66zbkwhxsVItco1w8O5S5ru2C0PXSv8un5VcMt9yjXDgGmW+a7v033b7xsbGiEeylFwy33KNcMybN2+99b8diU6VGisoo6My33KNcCjzXQ9lnXV7Vp355m3kYqUq5BrxDbhGme/aLh2Y+ZZrxDc0NTUp813bpQMz33KN+IalS5d279EjEp0qNVY6KvMt14jV0JJNzZdevXp3SOZbrhGOlStXLl++fKONNtrmv7fbZ/9hkQBVqZnSf9vty/7D5oll70GtaSwXLpUj14ivP/roo9tvv3369OmTQowdO765ZeTAfYdGIlWlBgrKGHXcpIhKspSGhoaqM99yTb3z1ltvXXTRRU4wMcaOazVOJFJVunrpkMy3XFPvTJ061bRy/fXXP/3006+//voWW2zRfPjw8eNPtXo4/oSTNKuqpdK372btyXx/FeACKDNyTV2zePFis8miRYssgMBnvocddrQ3zkljxu1/YHM4XlW6btllwCBmQxGPZCnMvLxr0nERFkKuqWtmzpx55plnTp8+3QVIgGW+8YvFJYOaiRNP4+vYseN9sKp09dL6n/UPOjSikiyle/ceRIiLlUqQa+qa8847D4kwe3Lh8NVXX3755b/+9S/eXd41lGOOHc1X4IOvVOnSpT2Z75aWFuLEcHGTAbmmrrHFmmuuucaigdBBNKtWrYq4hnLiSWOpYUo1ZOjwcL1KFy1bbtWv6sx3c3MzQUKoeMw7cSyuDLmmrmFEg0H8HIqgIYb++c9/zpgxI+KaffYfNmHCRCqRTrhepeuWKjLf7N/Q0PD444///e9//8c//kGoADFjpEgH5Jq65sknn0Qf8PrrrxMo9hmGDx/e2Ng4bNgw933SpNZ/bmLgIPv8vzvson9VqwbKOuv2/Nl2P4/YJL0wFOI99Omnn3722Weff/75F198sXLlSu8dp5wS0pFr6hcGMsSK6WPmzJmECOFC0FD58ccfdw949913V6xYwXts3rx5CIg9J0yY0L9/f16JRkNDY/cePYha5v8/2GiTvn03Y3Def9vtJaPOXyrNfPfuvWFTU9N77733wQcffPjhhx999BFx8sknn5h0zDhh6USMI9fUKTZpgoULF5pu5s+fb6IhevDLwIEDUcmmm2766KOP3nvvvbfddtsVV1xhe6KbUaNGMWkngHitLV26FBnxumtpaenTp485yBOR0eY/2QIZbb/DrpJRh5eKMt+b/3hLWpPx77Jly/785z+/8847vIfef/99pPO3v/2NkQ7GsTGOuQbRyDXiG9EAQXDxxRebRBYtWkTQ8L7661//ytfvf//7hNc222xz5513XnfddX638ePHH3XUUUOHDh08ePCgQYP22GOPX/ziF7vuuuvOO+/8fwE77bTTzwM4eVkZdeu2NjJijiYZFV8yZr7tr/DRms8888ySJUteeuml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"},49456:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/comp-rotation-3c750ab3ee00ea90d922c2ea84a2f890.png"},23837:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/comp-translation-8a9967500f25a80145a7db4225edef5c.png"}}]);