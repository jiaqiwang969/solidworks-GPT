"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[22365],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(r),u=a,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var m=2;m<o;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={layout:"sw-tool",caption:"Replace Sheet Format",title:"Macro to replace sheet formats in SOLIDWORKS drawings",description:"VBA macro to replace sheet formats in the drawing sheets based on the specified map",image:"replace-sheet-format.svg",group:"Drawing"},s=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/replace-sheet-format/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/replace-sheet-format/index",title:"Macro to replace sheet formats in SOLIDWORKS drawings",description:"VBA macro to replace sheet formats in the drawing sheets based on the specified map",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/replace-sheet-format/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/replace-sheet-format",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/replace-sheet-format/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/replace-sheet-format/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/replace-sheet-format/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",caption:"Replace Sheet Format",title:"Macro to replace sheet formats in SOLIDWORKS drawings",description:"VBA macro to replace sheet formats in the drawing sheets based on the specified map",image:"replace-sheet-format.svg",group:"Drawing"},sidebar:"tutorialSidebar",previous:{title:"Macro to rename all drawing views after the sheet name",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/rename-views-after-sheets/"},next:{title:"Macro to set dimension type for all views in the active SOLIDWORKS drawing",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/set-view-dimension-type/"}},l={},m=[{value:"Configuration",id:"configuration",level:2}],p={toc:m},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sheet format",src:r(36065).Z,width:"545",height:"560"}),"{ width=300 }"),(0,a.kt)("p",null,"This VBA macro replaces sheet formats (*.slddrt files) in all sheets of an active drawing document according to specified mapping rules."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Configure the map by changing the ",(0,a.kt)("strong",{parentName:"p"},"REPLACE_MAP")," array. This array contains instructions on replacing the sheets based on the size or sheet format file of the input sheet."),(0,a.kt)("p",null,"This map contains an array of matching filters and resulting sheet format file in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"|{Source paper size}|{Source sheet format file path}|{Target sheet format file path}\n")),(0,a.kt)("p",null,"Source paper size is the constant as defined in ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/swconst/solidworks.interop.swconst~solidworks.interop.swconst.swdwgpapersizes_e.html"},"swDwgPaperSizes_e")," enumeration. See the table below. Use one of these values or use ","*"," to match any paper size"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Size"),(0,a.kt)("th",{parentName:"tr",align:null},"Constant"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A Vertical"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"B"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"D"),(0,a.kt)("td",{parentName:"tr",align:null},"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"E"),(0,a.kt)("td",{parentName:"tr",align:null},"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A4"),(0,a.kt)("td",{parentName:"tr",align:null},"6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A4 Vertical"),(0,a.kt)("td",{parentName:"tr",align:null},"7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A3"),(0,a.kt)("td",{parentName:"tr",align:null},"8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A2"),(0,a.kt)("td",{parentName:"tr",align:null},"9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A1"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A0"),(0,a.kt)("td",{parentName:"tr",align:null},"11")))),(0,a.kt)("p",null,"Source sheet format file size is a full file path to the sheet format file or ","*"," to match all sheet formats."),(0,a.kt)("p",null,"For example the below map will"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Replace all sheets with A0 size (11) regardless of the sheet format file used (","*",") with the ",(0,a.kt)("em",{parentName:"li"},"D:\\Formats\\format1.slddrt")," sheet format."),(0,a.kt)("li",{parentName:"ul"},"Replace all sheets regardless of the size (","*",") with sheet format linked to ",(0,a.kt)("em",{parentName:"li"},"D:\\OldFormats\\oldformat1.slddrt")," with the ",(0,a.kt)("em",{parentName:"li"},"D:\\Formats\\format2.slddrt")," file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'REPLACE_MAP = Array("11|*|D:\\Formats\\format1.slddrt", "*|D:\\OldFormats\\oldformat1.slddrt|D:\\Formats\\format2.slddrt")\n')),(0,a.kt)("p",null,"You can specify as many rules as required."),(0,a.kt)("p",null,"Rules are executed in the specified order."),(0,a.kt)("p",null,"If none of the rules match the input - macro throws an error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Const REMOVE_MODIFIED_NOTES As Boolean = True\nConst FILTER_ANY As String = "*"\n\nDim swApp As SldWorks.SldWorks\n\nDim REPLACE_MAP As Variant\n\nSub main()\n\n    REPLACE_MAP = Array("*|*|D:\\new-format.slddrt")\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    Dim vSheetNames As Variant\n    vSheetNames = swDraw.GetSheetNames\n    \n    Dim i As Integer\n    \n    Dim activeSheet As String\n    activeSheet = swDraw.GetCurrentSheet().GetName\n    \n    For i = 0 To UBound(vSheetNames)\n        \n        Dim sheetName As String\n        sheetName = CStr(vSheetNames(i))\n        \n        Dim swSheet As SldWorks.sheet\n        Set swSheet = swDraw.sheet(sheetName)\n        \n        Dim targetSheetFormatFileName As String\n        targetSheetFormatFileName = GetReplaceSheetFormat(swSheet)\n        \n        swDraw.ActivateSheet sheetName\n        \n        ReplaceSheetFormat swDraw, swSheet, targetSheetFormatFileName\n\n    Next\n    \n    swDraw.ActivateSheet activeSheet\n    \nEnd Sub\n\nFunction GetReplaceSheetFormat(sheet As SldWorks.sheet) As String\n    \n    Dim curTemplateName As String\n    curTemplateName = sheet.GetTemplateName()\n    \n    Dim curSize As Integer\n    curSize = sheet.GetSize(-1, -1)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(REPLACE_MAP)\n        \n        Dim map As String\n        map = REPLACE_MAP(i)\n        \n        Dim mapParams As Variant\n        mapParams = Split(map, "|")\n        \n        Dim mapPaperSize As Integer\n        Dim srcTemplateName As String\n        \n        If Trim(mapParams(0)) <> FILTER_ANY Then\n            mapPaperSize = CInt(Trim(mapParams(0)))\n        Else\n            mapPaperSize = -1\n        End If\n        \n        If Trim(mapParams(1)) <> FILTER_ANY Then\n            srcTemplateName = CStr(Trim(mapParams(1)))\n        Else\n            srcTemplateName = ""\n        End If\n        \n        If (mapPaperSize = -1 Or mapPaperSize = curSize) And (srcTemplateName = "" Or LCase(srcTemplateName) = LCase(curTemplateName)) Then\n            \n            Dim targetTemplateName As String\n\n            targetTemplateName = CStr(Trim(mapParams(2)))\n        \n            If targetTemplateName = "" Then\n                Err.Raise vbError, "", "Target template is not specified"\n            End If\n        \n            GetReplaceSheetFormat = targetTemplateName\n            Exit Function\n            \n        End If\n        \n    Next\n    \n    Err.Raise vbError, "", "Failed find the sheet format mathing current sheet"\n    \nEnd Function\n\nSub ReplaceSheetFormat(draw As SldWorks.DrawingDoc, sheet As SldWorks.sheet, targetSheetFormatFile As String)\n    \n    Debug.Print "Replacing \'" & sheet.GetName() & "\' with \'" & targetSheetFormatFile & "\'"\n    \n    Dim vProps As Variant\n    vProps = sheet.GetProperties()\n    \n    Dim paperSize As Integer\n    Dim templateType As Integer\n    Dim scale1 As Double\n    Dim scale2 As Double\n    Dim firstAngle As Boolean\n    Dim width As Double\n    Dim height As Double\n    Dim custPrpView As String\n    \n    paperSize = CInt(vProps(0))\n    templateType = CInt(vProps(1))\n    scale1 = CDbl(vProps(2))\n    scale2 = CDbl(vProps(3))\n    firstAngle = CBool(vProps(4))\n    width = CDbl(vProps(5))\n    height = CDbl(vProps(6))\n    custPrpView = sheet.CustomPropertyView\n    \n    If False <> draw.SetupSheet5(sheet.GetName(), paperSize, templateType, scale1, scale2, firstAngle, targetSheetFormatFile, width, height, custPrpView, REMOVE_MODIFIED_NOTES) Then\n        If sheet.ReloadTemplate(Not REMOVE_MODIFIED_NOTES) <> swReloadTemplateResult_e.swReloadTemplate_Success Then\n            Err.Raise vbError, "", "Failed to reload sheet format"\n        End If\n    Else\n        Err.Raise vbError, "", "Failed to set the sheet format"\n    End If\n    \nEnd Sub\n')))}d.isMDXComponent=!0},36065:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sheet-format-4b4bb57ba2eb388e157ab4dad0b9ce71.png"}}]);