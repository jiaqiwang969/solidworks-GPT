"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[92307],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(t),d=s,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[m]="string"==typeof e?e:s,i[1]=a;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11055:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=t(87462),s=(t(67294),t(3905));const r={layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u7ec4\u4ef6\u4f4d\u7f6e\u5bfc\u51fa\u4e3aCSV\u7684VBA\u5b8f",caption:"\u5bfc\u51fa\u7ec4\u4ef6\u4f4d\u7f6e"},i=void 0,a={unversionedId:"codestack/solidworks-api/document/assembly/components/export-positions/index",id:"codestack/solidworks-api/document/assembly/components/export-positions/index",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u7ec4\u4ef6\u4f4d\u7f6e\u5bfc\u51fa\u4e3aCSV\u7684VBA\u5b8f",description:"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u5c06\u7ec4\u4ef6\u7684\u4f4d\u7f6e\u5bfc\u51fa\u5230\u5916\u90e8CSV\u6587\u672c\u6587\u4ef6\u4e2d",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/assembly/components/export-positions/index.md",sourceDirName:"codestack/solidworks-api/document/assembly/components/export-positions",slug:"/codestack/solidworks-api/document/assembly/components/export-positions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/export-positions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/assembly/components/export-positions/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u7ec4\u4ef6\u4f4d\u7f6e\u5bfc\u51fa\u4e3aCSV\u7684VBA\u5b8f",caption:"\u5bfc\u51fa\u7ec4\u4ef6\u4f4d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/count-all-selected-components/"},next:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/components/fix-float/"}},l={},p=[{value:"group: \u7ec4\u4ef6\u88c5\u914d",id:"group-\u7ec4\u4ef6\u88c5\u914d",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...r}=e;return(0,s.kt)(m,(0,o.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u5c06\u7ec4\u4ef6\u7684\u4f4d\u7f6e\u5bfc\u51fa\u5230\u5916\u90e8CSV\u6587\u672c\u6587\u4ef6\u4e2d\nimage: components-positions-table.png\nlabels: ","[\u5bfc\u51fa,CSV,Excel,\u8d77\u70b9]"),(0,s.kt)("h2",{id:"group-\u7ec4\u4ef6\u88c5\u914d"},"group: \u7ec4\u4ef6\u88c5\u914d"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u5728Excel\u4e2d\u5bfc\u51fa\u7684\u7ec4\u4ef6\u4f4d\u7f6e",src:t(80590).Z,width:"909",height:"323"}),"{ width=350 }"),(0,s.kt)("p",null,"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u5c06\u6d3b\u52a8\u88c5\u914d\u4e2d\u7684\u7ec4\u4ef6\u4f4d\u7f6e\uff08X\u3001Y\u3001Z\uff09\u5bfc\u51fa\u5230\u9017\u53f7\u5206\u9694\u503c\uff08CSV\uff09\u6587\u4ef6\u4e2d\u3002\u8be5\u6587\u4ef6\u53ef\u4ee5\u5728Excel\u6216\u4efb\u4f55\u6587\u672c\u7f16\u8f91\u5668\u4e2d\u6253\u5f00\u3002"),(0,s.kt)("p",null,"\u7ec4\u4ef6\u4f4d\u7f6e\u662f\u76f8\u5bf9\u4e8e\u88c5\u914d\u8d77\u70b9\u7684\u539f\u70b9\u5750\u6807\uff080, 0, 0\uff09\u3002"),(0,s.kt)("p",null,"\u5b8f\u53ef\u4ee5\u5bfc\u51fa\u6240\u6709\u7ec4\u4ef6\u6216\u4ec5\u5bfc\u51fa\u6240\u9009\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,s.kt)("em",{parentName:"li"},"OUT_FILE_PATH"),"\u5e38\u91cf\u6307\u5b9a\u8f93\u51fa\u6587\u4ef6\u7684\u8def\u5f84")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const OUT_FILE_PATH As String = "D:\\locations.csv"\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5750\u6807\u7684\u7c73\u8f6c\u6362\u56e0\u5b50")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const CONV_FACTOR As Double = 1000 '\u7c73\u8f6c\u6beb\u7c73\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u53ef\u9009\u62e9\u9009\u62e9\u8981\u4ec5\u5bfc\u51fa\u5176\u5b9e\u4f8b\u7684\u7ec4\u4ef6\uff08\u5373\u5177\u6709\u76f8\u540c\u6587\u4ef6\u8def\u5f84\u548c\u5f15\u7528\u914d\u7f6e\u7684\u6240\u6709\u7ec4\u4ef6\uff09\u3002\u6e05\u9664\u9009\u62e9\u4ee5\u5bfc\u51fa\u6240\u6709\u7ec4\u4ef6\u3002")),(0,s.kt)("p",null,"\u7ed3\u679c\u5c06\u521b\u5efa\u4e00\u4e2a\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\u7684CSV\u6587\u4ef6\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u6587\u4ef6\u5b8c\u6574\u8def\u5f84"),(0,s.kt)("li",{parentName:"ul"},"\u5f15\u7528\u914d\u7f6e"),(0,s.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u540d\u79f0"),(0,s.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5355\u4f4d\u4e2d\u539f\u70b9\u7684X\u3001Y\u3001Z\u5750\u6807")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const OUT_FILE_PATH As String = "D:\\locations.csv"\nConst CONV_FACTOR As Double = 1000 \'\u7c73\u8f6c\u6beb\u7c73\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        \n        Dim swSeedComp As SldWorks.Component2\n        Set swSeedComp = swAssy.SelectionManager.GetSelectedObjectsComponent4(1, -1)\n        \n        Dim table As String\n        table = GetComponentsPositions(swAssy, swSeedComp, CONV_FACTOR)\n        WriteTextFile OUT_FILE_PATH, table\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u88c5\u914d"\n    End If\n    \nEnd Sub\n\nFunction GetComponentsPositions(assy As SldWorks.AssemblyDoc, seedComp As SldWorks.Component2, convFactor As Double) As String\n    \n    Dim table As String\n    table = "\u8def\u5f84,\u914d\u7f6e,\u540d\u79f0,X,Y,Z"\n    \n    Dim vComps As Variant\n    vComps = assy.GetComponents(False)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n        \n        If swComp.GetSuppression() <> swComponentSuppressionState_e.swComponentSuppressed Then\n            \n            Dim includeComp As Boolean\n            \n            If seedComp Is Nothing Then\n                includeComp = True\n            ElseIf LCase(seedComp.GetPathName()) = LCase(swComp.GetPathName()) And LCase(seedComp.ReferencedConfiguration) = LCase(swComp.ReferencedConfiguration) Then\n                includeComp = True\n            Else\n                includeComp = False\n            End If\n            \n            If includeComp Then\n                Dim vOrigin As Variant\n                vOrigin = GetOrigin(swComp)\n                table = table & vbLf\n                table = table & swComp.GetPathName() & "," & swComp.ReferencedConfiguration & "," & swComp.Name2 & "," & vOrigin(0) * convFactor & "," & vOrigin(1) * convFactor & "," & vOrigin(2) * convFactor\n            End If\n            \n        End If\n        \n    Next\n    \n    GetComponentsPositions = table\n    \nEnd Function\n\nFunction GetOrigin(comp As SldWorks.Component2) As Variant\n    \n    Dim swXForm As SldWorks.MathTransform\n    Set swXForm = comp.Transform2\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim dPt(2) As Double\n    dPt(0) = 0: dPt(1) = 0: dPt(2) = 0\n    \n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(dPt)\n    \n    Set swMathPt = swMathPt.MultiplyTransform(swXForm)\n    \n    GetOrigin = swMathPt.ArrayData\n    \nEnd Function\n\nSub WriteTextFile(filePath As String, content As String)\n    \n    Dim fileNmb As Integer\n    fileNmb = FreeFile\n    \n    Open filePath For Output As #fileNmb\n    Print #fileNmb, content\n    Close #fileNmb\n    \nEnd Sub\n')))}u.isMDXComponent=!0},80590:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/components-positions-table-8f44de4a25ad5e3f2a36317caa2c7bd6.png"}}]);