"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[99069],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>w});var s=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,s,t=function(e,n){if(null==e)return{};var r,s,t={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=s.createContext({}),c=function(e){var n=s.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=c(e.components);return s.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(r),u=t,w=p["".concat(l,".").concat(u)]||p[u]||f[u]||o;return r?s.createElement(w,i(i({ref:n},d),{},{components:r})):s.createElement(w,i({ref:n},d))}));function w(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:t,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33864:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=r(87462),t=(r(67294),r(3905));const o={caption:"Report File Versions",title:"Generate report for the SOLIDWORKS file versions (created and last saved) for all the files in the folder",description:"VBA macro which generates CSV report of versions (created and last saved) for all files in the folder",image:"solidworks-file-versions-report.png"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/versions-report/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/versions-report/index",title:"Generate report for the SOLIDWORKS file versions (created and last saved) for all the files in the folder",description:"VBA macro which generates CSV report of versions (created and last saved) for all files in the folder",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/versions-report/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/versions-report",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/versions-report/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/versions-report/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/versions-report/index.md",tags:[],version:"current",frontMatter:{caption:"Report File Versions",title:"Generate report for the SOLIDWORKS file versions (created and last saved) for all the files in the folder",description:"VBA macro which generates CSV report of versions (created and last saved) for all files in the folder",image:"solidworks-file-versions-report.png"},sidebar:"tutorialSidebar",previous:{title:"Create vector normal to screen view using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/vector-normal-to-screen-view/"},next:{title:"Passing the parameters to SOLIDWORKS VBA Macro via clipboard",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/via-clipboard/"}},l={},c=[],d={toc:c},p="wrapper";function f(e){let{components:n,...o}=e;return(0,t.kt)(p,(0,s.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"SOLIDWORKS file versions report",src:r(43903).Z,width:"1227",height:"692"})," { width=500 }"),(0,t.kt)("p",null,"This VBA macro generates a CSV report (can be opened in Excel) of created and last saved version of SOLIDWORKS file in the specified folder."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"This macro will not be opening each model individually which significantly reduces the processing time")),(0,t.kt)("p",null,"Macro input and output parameter can be configured by changing the constants below"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Const INPUT_FOLDER_PATH As String = "D:\\MyModels" \'full path to the input folder with SOLIDWORKS files\nConst OUT_FILE_PATH As String = "D:\\sw-file-versions.csv" \'full path to the output CSV file of the report\nConst FILES_FILTER As String = "*.sld*" \'Filter for files with the support of wildcards\nConst INCLUDE_SUB_FOLDERS As Boolean = True \'True to process sub-folders, False to only process top level files\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Const INPUT_FOLDER_PATH As String = "D:\\MyModels"\nConst OUT_FILE_PATH As String = "D:\\sw-file-versions.csv"\nConst FILES_FILTER As String = "*.sld*"\nConst INCLUDE_SUB_FOLDERS As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim vFilePaths As Variant\n    vFilePaths = GetFiles(INPUT_FOLDER_PATH, INCLUDE_SUB_FOLDERS, FILES_FILTER)\n    \n    Dim i As Integer\n    \n    Dim fileNo As Integer\n    fileNo = FreeFile\n    \n    Open OUT_FILE_PATH For Output As #fileNo\n \n    Print #fileNo, "File Path,Created,Last Saved"\n    \n    For i = 0 To UBound(vFilePaths)\n    \n        Dim filePath As String\n        filePath = vFilePaths(i)\n        Dim vVers As Variant\n        vVers = swApp.VersionHistory(filePath)\n            \n        Dim swCreatedVers As String\n        Dim swLastSavedVers As String\n        \n        If Not IsEmpty(vVers) Then\n            swCreatedVers = ConvertFileVersionToSwMajorVersion(ExtractSwRevisonFromHistoryRecord(CStr(vVers(0))))\n            swLastSavedVers = ConvertFileVersionToSwMajorVersion(ExtractSwRevisonFromHistoryRecord(CStr(vVers(UBound(vVers)))))\n        Else\n            swCreatedVers = "???"\n            swLastSavedVers = "???"\n        End If\n        \n        Print #fileNo, filePath & "," & swCreatedVers & "," & swLastSavedVers\n        \n    Next\n    \n    Close #fileNo\n\nEnd Sub\n\nFunction GetFiles(path As String, includeSubFolders As Boolean, Optional filter As String) As Variant\n\n    Dim paths() As String\n    Dim isInit As Boolean\n    \n    isInit = False\n    \n    Dim fso As Object\n    Set fso = CreateObject("Scripting.FileSystemObject")\n    \n    Dim folder As Object\n    Set folder = fso.GetFolder(path)\n    \n    CollectFilesFromFolder folder, includeSubFolders, filter, paths, isInit\n    \n    If isInit Then\n        GetFiles = paths\n    Else\n        GetFiles = Empty\n    End If\n    \nEnd Function\n\nSub CollectFilesFromFolder(folder As Object, includeSubFolders As Boolean, filter As String, ByRef paths() As String, ByRef isInit As Boolean)\n    \n    For Each file In folder.files\n        \n        If LCase(file.path) Like LCase(filter) Then\n            If Not isInit Then\n                ReDim paths(0)\n                isInit = True\n            Else\n                ReDim Preserve paths(UBound(paths) + 1)\n            End If\n            paths(UBound(paths)) = file.path\n        End If\n    Next\n    \n    If includeSubFolders Then\n        Dim subFolder As Object\n        For Each subFolder In folder.SubFolders\n            CollectFilesFromFolder subFolder, includeSubFolders, filter, paths, isInit\n        Next\n    End If\n    \nEnd Sub\n\nFunction ExtractSwRevisonFromHistoryRecord(fileVers As String) As String\n    \n    ExtractSwRevisonFromHistoryRecord = Left(fileVers, InStr(fileVers, "[") - 1)\n    \nEnd Function\n\nFunction ConvertFileVersionToSwMajorVersion(versNumber As Integer) As String\n    \n    Dim swVersMajor As String\n    \n    If versNumber >= 5000 Then\n        swVersMajor = 2012 + (versNumber - 5000) / 1000\n    Else\n        Select Case versNumber\n            Case 44\n                swVersMajor = 95\n            Case 243\n                swVersMajor = 96\n            Case 483\n                swVersMajor = 97\n            Case 629\n                swVersMajor = "97Plus"\n            Case 822\n                swVersMajor = 98\n            Case 1008\n                swVersMajor = "98Plus"\n            Case 1137\n                swVersMajor = 99\n            Case 1500\n                swVersMajor = 2000\n            Case 1750\n                swVersMajor = 2001\n            Case 1950\n                swVersMajor = "2001Plus"\n            Case 2200\n                swVersMajor = 2003\n            Case 2500\n                swVersMajor = 2004\n            Case 2800\n                swVersMajor = 2005\n            Case 3100\n                swVersMajor = 2006\n            Case 3400\n                swVersMajor = 2007\n            Case 3800\n                swVersMajor = 2008\n            Case 4100\n                swVersMajor = 2009\n            Case 4400\n                swVersMajor = 2010\n            Case 4700\n                swVersMajor = 2011\n        End Select\n    End If\n    \n    ConvertFileVersionToSwMajorVersion = "SOLIDWORKS " & swVersMajor\n    \nEnd Function\n\n\n')))}f.isMDXComponent=!0},43903:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/solidworks-file-versions-report-9642a2dfdc8ddf431f21a45e6124c0c1.png"}}]);