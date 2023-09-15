"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[9192],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=s,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:s,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19201:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const o={layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u6309\u7c7b\u578b\u9009\u62e9\u6807\u51c6\u53c2\u8003\u51e0\u4f55\u56fe\u5f62\uff08\u4f8b\u5982\u524d\u5e73\u9762\u6216\u539f\u70b9\uff09",image:"plane.svg",labels:["selection","plane","origin"],group:"Model","redirect-from":["/solidworks-api/document/selection/select-standard-plane/"]},a=void 0,l={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-standard-ref-geometry/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-standard-ref-geometry/index",title:"\u4f7f\u7528SOLIDWORKS API\u6309\u7c7b\u578b\u9009\u62e9\u6807\u51c6\u53c2\u8003\u51e0\u4f55\u56fe\u5f62\uff08\u4f8b\u5982\u524d\u5e73\u9762\u6216\u539f\u70b9\uff09",description:"\u5728\u56fe\u5f62\u89c6\u56fe\u4e2d\u9009\u62e9\u4e86\u53f3\u5e73\u9762{ width=400 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-standard-ref-geometry/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-standard-ref-geometry",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-standard-ref-geometry/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-standard-ref-geometry/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-standard-ref-geometry/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u6309\u7c7b\u578b\u9009\u62e9\u6807\u51c6\u53c2\u8003\u51e0\u4f55\u56fe\u5f62\uff08\u4f8b\u5982\u524d\u5e73\u9762\u6216\u539f\u70b9\uff09",image:"plane.svg",labels:["selection","plane","origin"],group:"Model","redirect-from":["/solidworks-api/document/selection/select-standard-plane/"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528API\u6279\u91cf\u9009\u62e9\u4efb\u610fSOLIDWORKS\u5bf9\u8c61",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-objects/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u9009\u62e9\u6240\u6709\u6291\u5236\u7684\u7ec4\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-suppressed/"}},i={},c=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u76ee\u6807\u5e73\u9762\u6216\u539f\u70b9",id:"\u76ee\u6807\u5e73\u9762\u6216\u539f\u70b9",level:3},{value:"\u6eda\u52a8\u5230\u9009\u62e9",id:"\u6eda\u52a8\u5230\u9009\u62e9",level:3},{value:"\u8ffd\u52a0\u9009\u62e9",id:"\u8ffd\u52a0\u9009\u62e9",level:3},{value:"CAD+",id:"cad",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...o}=e;return(0,s.kt)(d,(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u5728\u56fe\u5f62\u89c6\u56fe\u4e2d\u9009\u62e9\u4e86\u53f3\u5e73\u9762",src:t(74754).Z,width:"873",height:"463"}),"{ width=400 }"),(0,s.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u6309\u7167\u6307\u5b9a\u7684\u7c7b\u578b\u9009\u62e9\u6807\u51c6\u5e73\u9762\uff08\u9876\u90e8\u3001\u524d\u9762\u6216\u53f3\u4fa7\uff09\u6216\u539f\u70b9\uff0c\u4ee5\u4fbf\u65e0\u8bba\u5e73\u9762\u540d\u79f0\u5982\u4f55\uff0c\u9009\u62e9\u90fd\u662f\u4e00\u81f4\u7684\uff0c\u56e0\u4e3a\u4e0d\u5efa\u8bae\u6309\u7167\u540d\u79f0\u9009\u62e9\u6807\u51c6\u5e73\u9762\uff0c\u56e0\u4e3a\u540d\u79f0\u4e0d\u4e00\u81f4\u5e76\u4e14\u53ef\u80fd\u5728\u6a21\u677f\u4e2d\u66f4\u6539\uff08\u4f8b\u5982\u4e0d\u540c\u7684\u672c\u5730\u5316\u6216\u6807\u51c6\uff09\u3002"),(0,s.kt)("p",null,"\u6b64\u5b8f\u9009\u62e9\u6839\u6587\u6863\u7684\u4e3b\u5e73\u9762\u6216\u539f\u70b9\u3002\u8981\u9009\u62e9\u88c5\u914d\u4f53\u4e2d\u7279\u5b9a\u7ec4\u4ef6\u7684\u4e3b\u5e73\u9762\u6216\u539f\u70b9\uff0c\u8bf7\u5c06\u9f20\u6807\u60ac\u505c\u5728\u4efb\u4f55\u7ec4\u4ef6\u5b9e\u4f53\u4e0a\uff08\u65e0\u9700\u9009\u62e9\uff09\uff0c\u7136\u540e\u8fd0\u884c\u5b8f\u3002"),(0,s.kt)("p",null,"\u6b64\u5b8f\u7684\u5de5\u4f5c\u57fa\u4e8e\u9ed8\u8ba4\u7684SOLIDWORKS\u5e73\u9762\u59cb\u7ec8\u4ee5\u76f8\u540c\u7684\u987a\u5e8f\u6392\u5e8f\uff0c\u5373\u524d\u3001\u9876\u548c\u53f3\u5e73\u9762\u662f\u6a21\u578b\u4e2d\u7684\u7b2c\u4e00\u4e2a\u5e73\u9762\uff0c\u5728\u539f\u70b9\u7279\u5f81\u4e4b\u524d\u653e\u7f6e\uff0c\u5e76\u4e14\u65e0\u6cd5\u91cd\u65b0\u6392\u5e8f\u6216\u5220\u9664\u3002"),(0,s.kt)("p",null,"{% youtube id: zUqHCUNxJoA %}"),(0,s.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,s.kt)("h3",{id:"\u76ee\u6807\u5e73\u9762\u6216\u539f\u70b9"},"\u76ee\u6807\u5e73\u9762\u6216\u539f\u70b9"),(0,s.kt)("p",null,"\u8981\u914d\u7f6e\u5b8f\uff0c\u8bf7\u5728",(0,s.kt)("strong",{parentName:"p"},"REF_GEOM"),"\u53d8\u91cf\u4e2d\u8bbe\u7f6e\u8981\u9009\u62e9\u7684\u5e73\u9762\u7c7b\u578b\u3002\u652f\u6301\u7684\u503c\uff1a",(0,s.kt)("strong",{parentName:"p"},"Right"),"\u3001",(0,s.kt)("strong",{parentName:"p"},"Top"),"\u3001",(0,s.kt)("strong",{parentName:"p"},"Front"),"\u3001",(0,s.kt)("strong",{parentName:"p"},"Origin")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Dim REF_GEOM As swRefGeom_e\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},"#Else\n    REF_GEOM = swRefGeom_e.Right \n#End If\n")),(0,s.kt)("h3",{id:"\u6eda\u52a8\u5230\u9009\u62e9"},"\u6eda\u52a8\u5230\u9009\u62e9"),(0,s.kt)("p",null,"\u6b64\u5b8f\u5141\u8bb8\u901a\u8fc7\u8bbe\u7f6e",(0,s.kt)("strong",{parentName:"p"},"SCROLL"),"\u5e38\u91cf\u6765\u6307\u5b9a\u662f\u5426\u5e94\u5c06\u5e73\u9762\u6eda\u52a8\u5230\u89c6\u56fe\u4e2d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const SCROLL As Boolean = False' scroll plane into view\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u6b64\u5b8f\u5c06\u5ffd\u7565",(0,s.kt)("strong",{parentName:"p"},"\u7279\u5f81\u7ba1\u7406\u5668 -> \u5c06\u9009\u5b9a\u9879\u6eda\u52a8\u5230\u89c6\u56fe\u4e2d"),"\u9009\u9879\uff0c\u5e76\u6839\u636e\u4e0a\u8ff0\u9009\u9879\u6eda\u52a8\uff0c\u4fdd\u7559SOLIDWORKS\u4e2d\u7684\u8bbe\u7f6e\u3002")),(0,s.kt)("h3",{id:"\u8ffd\u52a0\u9009\u62e9"},"\u8ffd\u52a0\u9009\u62e9"),(0,s.kt)("p",null,"\u5982\u679c\u6309\u4e0b",(0,s.kt)("strong",{parentName:"p"},"ctrl"),"\u952e\uff0c\u5219\u5b8f\u5c06\u8ffd\u52a0\u9009\u62e9\uff0c\u9664\u975e\u5c06",(0,s.kt)("strong",{parentName:"p"},"APPEND_SEL"),"\u5e38\u91cf\u8bbe\u7f6e\u4e3atrue\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9009\u62e9\u5c06\u59cb\u7ec8\u8ffd\u52a0\u3002\u5f53\u4f7f\u7528\u5b8f\u6309\u94ae\u7684\u5feb\u6377\u65b9\u5f0f\u65f6\uff0c\u8fd9\u5bf9\u4e8e\u51b2\u7a81\u7684",(0,s.kt)("strong",{parentName:"p"},"ctrl"),"\u5f88\u6709\u7528\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const APPEND_SEL As Boolean = True\n")),(0,s.kt)("h2",{id:"cad"},"CAD+"),(0,s.kt)("p",null,"\u6b64\u5b8f\u4e0e",(0,s.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/"},"Toolbar+"),"\u548c",(0,s.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/batch/"},"Batch+"),"\u5de5\u5177\u517c\u5bb9\uff0c\u56e0\u6b64\u53ef\u4ee5\u5c06\u6309\u94ae\u6dfb\u52a0\u5230\u5de5\u5177\u680f\u5e76\u5206\u914d\u5feb\u6377\u65b9\u5f0f\u4ee5\u4fbf\u66f4\u8f7b\u677e\u5730\u8bbf\u95ee\u6216\u6279\u5904\u7406\u6a21\u5f0f\u8fd0\u884c\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u5de5\u5177\u680f\u4e2d\u7684\u6309\u94ae",src:t(89322).Z,width:"540",height:"173"})),(0,s.kt)("p",null,"\u8981\u542f\u7528",(0,s.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/configuration/arguments/"},"\u5b8f\u53c2\u6570"),"\uff0c\u8bf7\u5c06",(0,s.kt)("strong",{parentName:"p"},"ARGS"),"\u5e38\u91cf\u8bbe\u7f6e\u4e3atrue"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"#Const ARGS = True\n")),(0,s.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4e0d\u9700\u8981\u590d\u5236\u5b8f\u6765\u8bbe\u7f6e\u5355\u72ec\u7684",(0,s.kt)("a",{parentName:"p",href:"#target-plane-or-origin"},"\u76ee\u6807\u5e73\u9762\u6216\u539f\u70b9"),"\u3002\u800c\u662f\u4f7f\u7528\u76f8\u5e94\u76ee\u6807\u5b9e\u4f53\u7684",(0,s.kt)("strong",{parentName:"p"},"FRONT"),"\u3001",(0,s.kt)("strong",{parentName:"p"},"TOP"),"\u3001",(0,s.kt)("strong",{parentName:"p"},"RIGHT"),"\u3001",(0,s.kt)("strong",{parentName:"p"},"ORIGIN"),"\u53c2\u6570\u3002"),(0,s.kt)("p",null,"\u60a8\u53ef\u4ee5\u4e0b\u8f7d\u6bcf\u4e2a\u6309\u94ae\u7684\u56fe\u6807\uff1a",(0,s.kt)("a",{target:"_blank",href:t(60158).Z},"\u524d\u5e73\u9762"),"\u3001",(0,s.kt)("a",{target:"_blank",href:t(5682).Z},"\u9876\u90e8\u5e73\u9762"),"\u3001",(0,s.kt)("a",{target:"_blank",href:t(72742).Z},"\u53f3\u5e73\u9762"),"\u3001",(0,s.kt)("a",{target:"_blank",href:t(38677).Z},"\u539f\u70b9"),"\u6216\u4f7f\u7528\u60a8\u81ea\u5df1\u7684\u56fe\u6807\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'#Const ARGS = False\n\nDeclare PtrSafe Function GetKeyState Lib "user32" (ByVal nVirtKey As Long) As Integer\nConst VK_CONTROL As Long = &H11\n\nPublic Enum swRefGeom_e\n    Origin = 4\n    Front = 1\n    Top = 2\n    Right = 3\nEnd Enum\n\nDim REF_GEOM As swRefGeom_e\nConst SCROLL As Boolean = False\nConst APPEND_SEL As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n    \nSub main()\n    \n    Set swApp = Application.SldWorks\n\n    Dim swModel As SldWorks.ModelDoc2\n\n    Set swModel = swApp.ActiveDoc\n\n#If ARGS Then\n    Dim macroRunner As Object\n    Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")\n    \n    Dim param As Object\n    Set param = macroRunner.PopParameter(swApp)\n    \n    Dim vArgs As Variant\n    vArgs = param.Get("Args")\n    \n    Dim planeName As String\n    planeName = CStr(vArgs(0))\n    \n    Select Case UCase(planeName)\n        Case "ORIGIN"\n            REF_GEOM = swRefGeom_e.Origin\n        Case "TOP"\n            REF_GEOM = swRefGeom_e.Top\n        Case "FRONT"\n            REF_GEOM = swRefGeom_e.Front\n        Case "RIGHT"\n            REF_GEOM = swRefGeom_e.Right\n    End Select\n#Else\n    REF_GEOM = swRefGeom_e.Top\n#End If\n    \n    If Not swModel Is Nothing Then\n        \n        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Or _\n            swModel.GetType() = swDocumentTypes_e.swDocPART Then\n            \n            Dim swSelMgr As SldWorks.SelectionMgr\n            Set swSelMgr = swModel.SelectionManager\n                        \n            Dim swComp As SldWorks.Component2\n            Set swComp = swSelMgr.GetSelectedObjectsComponent3(-1, -1)\n            \n            If swComp Is Nothing Then\n                SelectRefGeom swModel.FirstFeature(), REF_GEOM\n            Else\n                SelectRefGeom swComp.FirstFeature(), REF_GEOM\n            End If\n            \n        Else\n            MsgBox "Only assemblies and parts are supported"\n        End If\n    Else\n        MsgBox "Please open part or assembly"\n    End If\n    \nEnd Sub\n\nSub SelectRefGeom(firstFeat As SldWorks.Feature, refGeomType As swRefGeom_e)\n\n    Dim refGeomIndex As Integer\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = firstFeat\n\n    Do While Not swFeat Is Nothing\n\n        If swFeat.GetTypeName = "RefPlane" Or swFeat.GetTypeName2() = "OriginProfileFeature" Then\n\n            refGeomIndex = refGeomIndex + 1\n            \n            If CInt(refGeomType) = refGeomIndex Then\n                \n                Dim defScrollState As Boolean\n                defScrollState = swApp.GetUserPreferenceToggle(swUserPreferenceToggle_e.swFeatureManagerEnsureVisible)\n                swApp.SetUserPreferenceToggle swUserPreferenceToggle_e.swFeatureManagerEnsureVisible, SCROLL\n                \n                Dim append As Boolean\n                \n                If APPEND_SEL Then\n                    append = True\n                Else\n                    append = GetKeyState(VK_CONTROL) < 0\n                End If\n                \n                If refGeomType = Origin Then\n                    SelectOrigin swFeat, append\n                Else\n                    swFeat.Select2 append, -1\n                End If\n                \n                swApp.SetUserPreferenceToggle swUserPreferenceToggle_e.swFeatureManagerEnsureVisible, defScrollState\n                \n                Exit Sub\n\n            End If\n\n        End If\n    \n        Set swFeat = swFeat.GetNextFeature\n\n    Loop\n    \nEnd Sub\n\nSub SelectOrigin(origFeat As SldWorks.Feature, append As Boolean)\n    \n    Dim swSketch As SldWorks.Sketch\n    Set swSketch = origFeat.GetSpecificFeature2\n    \n    Dim swSkPoint As SldWorks.SketchPoint\n    Set swSkPoint = swSketch.GetSketchPoints2()(0)\n    \n    swSkPoint.Select4 append, Nothing\n    \nEnd Sub\n')))}u.isMDXComponent=!0},60158:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/front-98600a9599bd7c0f001ef0fec79ef203.svg"},38677:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/origin-cdae865e5b97269adf8eba127b6d1c88.svg"},72742:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/right-b2439c9107e188c22c2fee79c7e0f043.svg"},5682:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/top-314335b55f0fa969673ed488f786e849.svg"},74754:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/selected-right-plane-bc3cff026a8abbccabc132de7182f3de.png"},89322:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/toolbar-b0f430c3b470f60e8cea01095e42b3d4.png"}}]);