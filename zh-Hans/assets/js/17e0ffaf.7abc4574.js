"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[26987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,k=c["".concat(i,".").concat(u)]||c[u]||d[u]||s;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={layout:"sw-tool",caption:"\u66ff\u6362\u56fe\u7eb8\u683c\u5f0f",title:"\u5728SOLIDWORKS\u56fe\u7eb8\u4e2d\u66ff\u6362\u56fe\u7eb8\u683c\u5f0f\u7684\u5b8f"},o=void 0,l={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/replace-sheet-format/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/replace-sheet-format/index",title:"\u5728SOLIDWORKS\u56fe\u7eb8\u4e2d\u66ff\u6362\u56fe\u7eb8\u683c\u5f0f\u7684\u5b8f",description:"VBA\u5b8f\u6839\u636e\u6307\u5b9a\u7684\u6620\u5c04\u89c4\u5219\u66ff\u6362\u7ed8\u56fe\u4e2d\u6240\u6709\u56fe\u7eb8\u7684\u56fe\u7eb8\u683c\u5f0f\uff08*.slddrt\u6587\u4ef6\uff09",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/replace-sheet-format/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/replace-sheet-format",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/replace-sheet-format/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/replace-sheet-format/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/replace-sheet-format/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",caption:"\u66ff\u6362\u56fe\u7eb8\u683c\u5f0f",title:"\u5728SOLIDWORKS\u56fe\u7eb8\u4e2d\u66ff\u6362\u56fe\u7eb8\u683c\u5f0f\u7684\u5b8f"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u66ff\u6362\u7ec4\u4ef6\u5e76\u4fdd\u7559\u9009\u62e9",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/replace/"},next:{title:"\u663e\u793a\u6216\u5220\u9664SOLIDWORKS\u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u7684\u6240\u6709\u9690\u85cf\u7279\u5f81",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/reveal-hidden-features/"}},i={},p=[{value:"group: \u7ed8\u56fe",id:"group-\u7ed8\u56fe",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...s}=e;return(0,a.kt)(c,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"VBA\u5b8f\u6839\u636e\u6307\u5b9a\u7684\u6620\u5c04\u89c4\u5219\u66ff\u6362\u7ed8\u56fe\u4e2d\u6240\u6709\u56fe\u7eb8\u7684\u56fe\u7eb8\u683c\u5f0f\uff08*.slddrt\u6587\u4ef6\uff09\nimage: replace-sheet-format.svg"),(0,a.kt)("h2",{id:"group-\u7ed8\u56fe"},"group: \u7ed8\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u56fe\u7eb8\u683c\u5f0f",src:n(76577).Z,width:"545",height:"560"}),"{ width=300 }"),(0,a.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u6839\u636e\u6307\u5b9a\u7684\u6620\u5c04\u89c4\u5219\uff0c\u66ff\u6362\u6d3b\u52a8\u7ed8\u56fe\u6587\u6863\u4e2d\u6240\u6709\u56fe\u7eb8\u7684\u56fe\u7eb8\u683c\u5f0f\uff08*.slddrt\u6587\u4ef6\uff09\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u901a\u8fc7\u4fee\u6539",(0,a.kt)("strong",{parentName:"p"},"REPLACE_MAP"),"\u6570\u7ec4\u6765\u914d\u7f6e\u6620\u5c04\u89c4\u5219\u3002\u8be5\u6570\u7ec4\u5305\u542b\u4e86\u6839\u636e\u8f93\u5165\u56fe\u7eb8\u7684\u5927\u5c0f\u6216\u56fe\u7eb8\u683c\u5f0f\u6587\u4ef6\u6765\u66ff\u6362\u56fe\u7eb8\u7684\u6307\u4ee4\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u6620\u5c04\u89c4\u5219\u7684\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"|{\u6e90\u7eb8\u5f20\u5927\u5c0f}|{\u6e90\u56fe\u7eb8\u683c\u5f0f\u6587\u4ef6\u8def\u5f84}|{\u76ee\u6807\u56fe\u7eb8\u683c\u5f0f\u6587\u4ef6\u8def\u5f84}\n")),(0,a.kt)("p",null,"\u6e90\u7eb8\u5f20\u5927\u5c0f\u662f\u5728",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/swconst/solidworks.interop.swconst~solidworks.interop.swconst.swdwgpapersizes_e.html"},"swDwgPaperSizes_e"),"\u679a\u4e3e\u4e2d\u5b9a\u4e49\u7684\u5e38\u91cf\u3002\u8bf7\u53c2\u8003\u4e0b\u8868\u3002\u4f7f\u7528\u8fd9\u4e9b\u503c\u4e4b\u4e00\u6216\u4f7f\u7528","*","\u6765\u5339\u914d\u4efb\u4f55\u7eb8\u5f20\u5927\u5c0f\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5927\u5c0f"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5e38\u91cf"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A\u7eb5\u5411"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"B"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"D"),(0,a.kt)("td",{parentName:"tr",align:null},"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"E"),(0,a.kt)("td",{parentName:"tr",align:null},"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A4"),(0,a.kt)("td",{parentName:"tr",align:null},"6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A4\u7eb5\u5411"),(0,a.kt)("td",{parentName:"tr",align:null},"7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A3"),(0,a.kt)("td",{parentName:"tr",align:null},"8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A2"),(0,a.kt)("td",{parentName:"tr",align:null},"9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A1"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A0"),(0,a.kt)("td",{parentName:"tr",align:null},"11")))),(0,a.kt)("p",null,"\u6e90\u56fe\u7eb8\u683c\u5f0f\u6587\u4ef6\u5927\u5c0f\u662f\u56fe\u7eb8\u683c\u5f0f\u6587\u4ef6\u7684\u5b8c\u6574\u8def\u5f84\uff0c\u6216\u8005\u4f7f\u7528","*","\u6765\u5339\u914d\u6240\u6709\u56fe\u7eb8\u683c\u5f0f\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u6620\u5c04\u89c4\u5219\u5c06\u4f1a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u6240\u6709A0\u5927\u5c0f\uff0811\uff09\u7684\u56fe\u7eb8\uff08\u65e0\u8bba\u4f7f\u7528\u7684\u56fe\u7eb8\u683c\u5f0f\u6587\u4ef6\u662f\u4ec0\u4e48\uff09\u66ff\u6362\u4e3a",(0,a.kt)("em",{parentName:"li"},"D:\\Formats\\format1.slddrt"),"\u56fe\u7eb8\u683c\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u6240\u6709\u56fe\u7eb8\uff08\u65e0\u8bba\u5927\u5c0f\uff09\u66ff\u6362\u4e3a\u4e0e",(0,a.kt)("em",{parentName:"li"},"D:\\OldFormats\\oldformat1.slddrt"),"\u94fe\u63a5\u7684\u56fe\u7eb8\u683c\u5f0f\uff0c\u5e76\u4f7f\u7528",(0,a.kt)("em",{parentName:"li"},"D:\\Formats\\format2.slddrt"),"\u6587\u4ef6\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'REPLACE_MAP = Array("11|*|D:\\Formats\\format1.slddrt", "*|D:\\OldFormats\\oldformat1.slddrt|D:\\Formats\\format2.slddrt")\n')),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u6307\u5b9a\u4efb\u610f\u6570\u91cf\u7684\u89c4\u5219\u3002"),(0,a.kt)("p",null,"\u89c4\u5219\u6309\u7167\u6307\u5b9a\u7684\u987a\u5e8f\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u89c4\u5219\u4e0e\u8f93\u5165\u5339\u914d - \u5b8f\u5c06\u629b\u51fa\u9519\u8bef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Const REMOVE_MODIFIED_NOTES As Boolean = True\nConst FILTER_ANY As String = "*"\n\nDim swApp As SldWorks.SldWorks\n\nDim REPLACE_MAP As Variant\n\nSub main()\n\n    REPLACE_MAP = Array("*|*|D:\\new-format.slddrt")\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    Dim vSheetNames As Variant\n    vSheetNames = swDraw.GetSheetNames\n    \n    Dim i As Integer\n    \n    Dim activeSheet As String\n    activeSheet = swDraw.GetCurrentSheet().GetName\n    \n    For i = 0 To UBound(vSheetNames)\n        \n        Dim sheetName As String\n        sheetName = CStr(vSheetNames(i))\n        \n        Dim swSheet As SldWorks.sheet\n        Set swSheet = swDraw.sheet(sheetName)\n        \n        Dim targetSheetFormatFileName As String\n        targetSheetFormatFileName = GetReplaceSheetFormat(swSheet)\n        \n        swDraw.ActivateSheet sheetName\n        \n        ReplaceSheetFormat swDraw, swSheet, targetSheetFormatFileName\n\n    Next\n    \n    swDraw.ActivateSheet activeSheet\n    \nEnd Sub\n\nFunction GetReplaceSheetFormat(sheet As SldWorks.sheet) As String\n    \n    Dim curTemplateName As String\n    curTemplateName = sheet.GetTemplateName()\n    \n    Dim curSize As Integer\n    curSize = sheet.GetSize(-1, -1)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(REPLACE_MAP)\n        \n        Dim map As String\n        map = REPLACE_MAP(i)\n        \n        Dim mapParams As Variant\n        mapParams = Split(map, "|")\n        \n        Dim mapPaperSize As Integer\n        Dim srcTemplateName As String\n        \n        If Trim(mapParams(0)) <> FILTER_ANY Then\n            mapPaperSize = CInt(Trim(mapParams(0)))\n        Else\n            mapPaperSize = -1\n        End If\n        \n        If Trim(mapParams(1)) <> FILTER_ANY Then\n            srcTemplateName = CStr(Trim(mapParams(1)))\n        Else\n            srcTemplateName = ""\n        End If\n        \n        If (mapPaperSize = -1 Or mapPaperSize = curSize) And (srcTemplateName = "" Or LCase(srcTemplateName) = LCase(curTemplateName)) Then\n            \n            Dim targetTemplateName As String\n\n            targetTemplateName = CStr(Trim(mapParams(2)))\n        \n            If targetTemplateName = "" Then\n                Err.Raise vbError, "", "\u672a\u6307\u5b9a\u76ee\u6807\u6a21\u677f"\n            End If\n        \n            GetReplaceSheetFormat = targetTemplateName\n            Exit Function\n            \n        End If\n        \n    Next\n    \n    Err.Raise vbError, "", "\u672a\u627e\u5230\u4e0e\u5f53\u524d\u56fe\u7eb8\u5339\u914d\u7684\u56fe\u7eb8\u683c\u5f0f"\n    \nEnd Function\n\nSub ReplaceSheetFormat(draw As SldWorks.DrawingDoc, sheet As SldWorks.sheet, targetSheetFormatFile As String)\n    \n    Debug.Print "\u66ff\u6362 \'" & sheet.GetName() & "\' \u4e3a \'" & targetSheetFormatFile & "\'"\n    \n    Dim vProps As Variant\n    vProps = sheet.GetProperties()\n    \n    Dim paperSize As Integer\n    Dim templateType As Integer\n    Dim scale1 As Double\n    Dim scale2 As Double\n    Dim firstAngle As Boolean\n    Dim width As Double\n    Dim height As Double\n    Dim custPrpView As String\n    \n    paperSize = CInt(vProps(0))\n    templateType = CInt(vProps(1))\n    scale1 = CDbl(vProps(2))\n    scale2 = CDbl(vProps(3))\n    firstAngle = CBool(vProps(4))\n    width = CDbl(vProps(5))\n    height = CDbl(vProps(6))\n    custPrpView = sheet.CustomPropertyView\n    \n    If False <> draw.SetupSheet5(sheet.GetName(), paperSize, templateType, scale1, scale2, firstAngle, targetSheetFormatFile, width, height, custPrpView, REMOVE_MODIFIED_NOTES) Then\n        If sheet.ReloadTemplate(Not REMOVE_MODIFIED_NOTES) <> swReloadTemplateResult_e.swReloadTemplate_Success Then\n            Err.Raise vbError, "", "\u91cd\u65b0\u52a0\u8f7d\u56fe\u7eb8\u683c\u5f0f\u5931\u8d25"\n        End If\n    Else\n        Err.Raise vbError, "", "\u8bbe\u7f6e\u56fe\u7eb8\u683c\u5f0f\u5931\u8d25"\n    End If\n    \nEnd Sub\n')))}d.isMDXComponent=!0},76577:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sheet-format-4b4bb57ba2eb388e157ab4dad0b9ce71.png"}}]);