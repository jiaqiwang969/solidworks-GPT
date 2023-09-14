"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[34891],{3905:(e,o,t)=>{t.d(o,{Zo:()=>a,kt:()=>w});var n=t(67294);function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function s(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?s(Object(t),!0).forEach((function(o){i(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function r(e,o){if(null==e)return{};var t,n,i=function(e,o){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||(i[t]=e[t]);return i}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var o=n.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},a=function(e){var o=c(e.components);return n.createElement(p.Provider,{value:o},e.children)},d="mdxType",S={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,a=r(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,w=d["".concat(p,".").concat(m)]||d[m]||S[m]||s;return t?n.createElement(w,l(l({ref:o},a),{},{components:t})):n.createElement(w,l({ref:o},a))}));function w(e,o){var t=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var s=t.length,l=new Array(s);l[0]=m;var r={};for(var p in o)hasOwnProperty.call(o,p)&&(r[p]=o[p]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var c=2;c<s;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35803:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>l,default:()=>S,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const s={title:"Get Model Doc from lightweight component using SOLIDWORKS API",caption:"Get Model Doc From Lightweight Component",description:"Example demonstrates how to get the pointer to IModelDoc2 from the component (even if it is in the suppressed or lightweight state)",image:"lightweight-component.png",labels:["assembly","component","example","lightweight","modeldoc","memory","solidworks api"]},l=void 0,r={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/lightweight-get-model-doc/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/lightweight-get-model-doc/index",title:"Get Model Doc from lightweight component using SOLIDWORKS API",description:"Example demonstrates how to get the pointer to IModelDoc2 from the component (even if it is in the suppressed or lightweight state)",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/lightweight-get-model-doc/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/lightweight-get-model-doc",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/lightweight-get-model-doc/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/lightweight-get-model-doc/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/lightweight-get-model-doc/index.md",tags:[],version:"current",frontMatter:{title:"Get Model Doc from lightweight component using SOLIDWORKS API",caption:"Get Model Doc From Lightweight Component",description:"Example demonstrates how to get the pointer to IModelDoc2 from the component (even if it is in the suppressed or lightweight state)",image:"lightweight-component.png",labels:["assembly","component","example","lightweight","modeldoc","memory","solidworks api"]},sidebar:"tutorialSidebar",previous:{title:"Using SOLIDWORKS API to render feature tree in HTML page",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/java-script/html-feature-tree/"},next:{title:"Link Cut-List Custom Properties To File With SOLIDWORKS Macro Feature API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/link-cut-list-properties/"}},p={},c=[],a={toc:c},d="wrapper";function S(e){let{components:o,...s}=e;return(0,i.kt)(d,(0,n.Z)({},a,s,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lightweight component in the assembly tree",src:t(8674).Z,width:"293",height:"321"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IComponent2~GetModelDoc2.html"},"IComponent2::GetModelDoc2")," SOLIDWORKS API method returns the pointer to ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html"},"IModelDoc2")," interface."),(0,i.kt)("p",null,"It is required to use this interface to retrieve the model specific information (such as custom properties, feature tree, annotations etc.)."),(0,i.kt)("p",null,"The model document is not available for the components loaded lightweight or suppressed (i.e. the pointer is ",(0,i.kt)("em",{parentName:"p"},"NULL"),")."),(0,i.kt)("p",null,"The following example demonstrates how to get the pointer to IModelDoc2 from the component (even if it is in the suppressed or lightweight state) using SOLIDWORKS API. The result is achieved by loading the component directly into memory without the need of resolving the component or opening the file in its own window."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swAssy As SldWorks.AssemblyDoc\n\nSub main()\n\n    On Error Resume Next\n    \n    Set swApp = Application.SldWorks\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = swAssy.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swComp Is Nothing Then\n        \n            Dim swRefModel As SldWorks.ModelDoc2\n            Set swRefModel = GetModelDocFromComponent(swComp)\n            \n            Debug.Print swRefModel.GetTitle\n            \n        Else\n            MsgBox "Please select the component"\n        End If\n        \n    Else\n        MsgBox "Please open assembly"\n    End If\n    \nEnd Sub\n\nFunction GetModelDocFromComponent(comp As SldWorks.Component2) As SldWorks.ModelDoc2\n    \n    Dim swRefModel As SldWorks.ModelDoc2\n    Set swRefModel = comp.GetModelDoc2\n    \n    If swRefModel Is Nothing Then \'component is lightweight or suppressed\n        \n        Dim path As String\n        path = comp.GetPathName\n        \n        Dim docType As swDocumentTypes_e\n        \n        docType = GetDocumentTypeFromPath(path)\n        \n        On Error GoTo End_\n        \n        swApp.DocumentVisible False, docType\n        \n        Dim errs As Long\n        Dim wrns As Long\n        Set swRefModel = swApp.OpenDoc6(path, docType, swOpenDocOptions_e.swOpenDocOptions_Silent, "", errs, wrns)\n        \nEnd_: \'restore the flag otherwise all files will be opened invisible\n    swApp.DocumentVisible True, docType\n        \n    End If\n    \n    Set GetModelDocFromComponent = swRefModel\n\nEnd Function\n\nFunction GetDocumentTypeFromPath(path As String) As swDocumentTypes_e\n    \n    Dim ext As String\n    ext = Right(path, Len(path) - InStrRev(path, "."))\n    \n    Select Case UCase(ext)\n        \n        Case "SLDPRT"\n            GetDocumentTypeFromPath = swDocPART\n            Exit Function\n            \n        Case "SLDASM"\n            GetDocumentTypeFromPath = swDocASSEMBLY\n            Exit Function\n            \n        Case "SLDDRW"\n            GetDocumentTypeFromPath = swDocDRAWING\n            Exit Function\n            \n    End Select\n    \nEnd Function\n')))}S.isMDXComponent=!0},8674:(e,o,t)=>{t.d(o,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASUAAAFBCAMAAAAG3EkJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAANK1JyYOoff39os4AGOwsCtqjAAAN3Nzc6bIoiUAM5R0EwAtgFl5ehsbG6bI4zgAAIuwiwBRopBpICVxw4+5zFRAFyUtgAA3VNSLOMawRnasgMzGuSUAW12s4zCApmOw90cxCl1RgIF1UziL1L27qmZMFzJcZQAAW2MAOPewi0+Mqr7c4HGvySsrK3e92xQUFNIcAWMAADaOxH2Rb8mrVfewY5aywV+gvkmEoonR7SBZdyxwkiUtW29ePqB8GtfY1gBjsDgAY1mYtmOw1BNLaS9TS10tAFM/G5OKeESIobjJ0+HRereXOamVTAA4i8zR0bDUi5iYmHC102aoxmMAY4s4OExoal1xMy96n7BjACUAALKysvLPSVGIpPbKH49xM0VFRTg4ODhjsKuLQKbHw0OP49O4SamfgYtji4dxOV9EEqOTaHbI4/f2r1SSsDgAOFpaWSdVb7nCwzx7mMy8dNGpHTIyMc7OzuswA6ejkSpjg5SqtnyxzePRiUNRAMvV28vb47i+uEtLS3uSmdSLY1ubuYPN6ZeBMCQkJJqvu06KqI2NX2yvzenkzGWGmLKgc8q2hI2NjQU7V93EUkKItT2EpauGGhtVc11xW0MAM2auy4vU9jg4i0Ztgy51mXhbG2OkwkMAWzFti8CYHoXF3kMAAGNjANOwY32bq085DuHi4AAAY0RgRleWtLCLi2WeuHzD4bH19sTExMPQ1+S5H10tM6aOWoKCgnZRAItkICdefWNiYqmpqTGFrWeatPfUinO41vw/BerUV/LjijZ0kkyRs6asgGSMoo9xW9XFdtPz9T5xjnnA3qSBLVOPrRFIZTg4Y6uTOHh4eHFbJoOnuzIzIZaWlpDJ42JPIlNTU2M4izdxj2+z0WiryZOAQtPT07HCyiVQWsSvg0qIppp1KPjiXbXR6NbPtWupxEtrXNrHYDiLsDB9o2WHm4t8WJK7zyxnhtbRysa4kvjleMXLqLOQGEMtgBhQbk+QrJeThLCLON66MppyIGmhuwAAABOY3MAAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAW/ElEQVR4Xu2dC5xdxV3Hb73XQKSQWBTvKnazNq0IMaTRroBRSWyNBSlaaDUXZLNr02LRjTzK8mg0kJrY2oCEtqBGQuRhzcVol2BeJCw1IbW3LbYBTauW0MZQLE/Ft/bj/zVz5tw798zs2bC7c878Pp+955w558yZ+d7/zD13fjvnVqqoB6O6CvDsYEpRmYqUfBQp+cik1Dz1xVNuuEU2ogwllE594h0/t2/fB5762X+RhCithFLf3V/42CuvfOPfTqzftVqSokQGpYFr73jxQ1dd8637nj2v/hFJjCIJpeYbR3YNDAzU7/yvZx9df96dZ9cpFVW7sCVrDg0vbDuysbjaU0HNlQRWT+WBUVnVaqQPQRmnNrxOIDXgnMWynqX2wvZknySURr68jyg98rm3vfw3Z686pCmNDf3GRlnNVu24j6Yv3A8XposPLzRrOWbLDyvdbyl3+lRDXSjV8KQ/b6XzassY1VHYak8X7Cyh1HfvLqK0atWq+qpDhxJKjbkQEn5qK827gYa8RVR40dgSS727UUqfashOSb8DLkqdicPvsr8dLEVp4H9/SlECSJrS8A9t5Gr1VyrHbZRXbA24aDxXq1TmjM2WJpS+MIaSqmo/HsAnYUNaXIVzKnA05M7YoNJmW2nMSZ1KDOnsxlw4Hy+DSZIJvYs9dO3hhXAiiPNS+zljKbMSF3b473WRM4NJUyIpSj+sKGFmNbg0vkunb+RXKhKVnmqNR1CN0pToqlJVPE+dRNB/G8oLJ5mUktN7qDcyToW9cuUG7sKr4QmSCZ2HZQTxqZKX7OcNdXkludrYbL4MJKgVmxSla4nSz1yGlO677Gt/S6lcGiwvBxS/Ut2wXPgu0tvHl5QLizAeVFXhDH0S5wGCw22U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"}}]);