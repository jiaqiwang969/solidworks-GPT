"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[23180],{3905:(e,o,n)=>{n.d(o,{Zo:()=>d,kt:()=>f});var t=n(67294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function c(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),s=function(e){var o=t.useContext(i),n=o;return e&&(n="function"==typeof e?e(o):l(l({},o),e)),n},d=function(e){var o=s(e.components);return t.createElement(i.Provider,{value:o},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},p=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,f=u["".concat(i,".").concat(p)]||u[p]||m[p]||a;return n?t.createElement(f,l(l({ref:o},d),{},{components:n})):t.createElement(f,l({ref:o},d))}));function f(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var c={};for(var i in o)hasOwnProperty.call(o,i)&&(c[i]=o[i]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16763:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var t=n(87462),r=(n(67294),n(3905));const a={layout:"sw-tool",title:"Run VBA macro automatically on document load using SOLIDWORKS API",caption:"Run Macro On Document Load",description:"Macro runs VBA code (or another macro) automatically on file load using SOLIDWORKS API",image:"run-macro-on-load.svg",labels:["auto run","model load event"],group:"Model"},l=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/handle-document-load/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/handle-document-load/index",title:"Run VBA macro automatically on document load using SOLIDWORKS API",description:"Macro runs VBA code (or another macro) automatically on file load using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/handle-document-load/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/handle-document-load",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/handle-document-load/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/handle-document-load/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/handle-document-load/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Run VBA macro automatically on document load using SOLIDWORKS API",caption:"Run Macro On Document Load",description:"Macro runs VBA code (or another macro) automatically on file load using SOLIDWORKS API",image:"run-macro-on-load.svg",labels:["auto run","model load event"],group:"Model"},sidebar:"tutorialSidebar",previous:{title:"Macro to collect all reference documents of assembly into a folder",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/collect-reference-documents/"},next:{title:"Run VBA macro automatically on document save using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/handle-document-save/"}},i={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Macro Module",id:"macro-module",level:2},{value:"FileLoadWatcher Class Module",id:"fileloadwatcher-class-module",level:2},{value:"HandlerModule Module",id:"handlermodule-module",level:2}],d={toc:s},u="wrapper";function m(e){let{components:o,...a}=e;return(0,r.kt)(u,(0,t.Z)({},d,a,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"{% youtube { id: tgRB8YtB4v4 } %}"),(0,r.kt)("p",null,"This VBA macro handles document load events using SOLIDWORKS API and runs a custom code for each of the documents."),(0,r.kt)("p",null,"Macro operates in the background and needs to be run once a session to start monitoring."),(0,r.kt)("p",null,"Both visible (opened in its own window) and invisible (opened as assembly or drawing component) documents are handled."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SOLIDWORKS file open dialog",src:n(98246).Z,width:"815",height:"675"}),"{ width=350 }"),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create new macro"),(0,r.kt)("li",{parentName:"ul"},"Copy the code into corresponding modules of the macro. The VBA macro tree should look similar to the image below:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"VBA macro tree",src:n(83857).Z,width:"287",height:"304"}),"{ width=250 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Place your code into the ",(0,r.kt)("em",{parentName:"li"},"main")," sub of the ",(0,r.kt)("em",{parentName:"li"},"HandlerModule")," module. The pointer to ",(0,r.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html"},"IModelDoc2")," document is passed as the parameter. Use this pointer instead of ",(0,r.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~activedoc.html"},"ISldWorks::ActiveDoc")," to properly handle invisible documents.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Sub main(model As SldWorks.ModelDoc2)\n    'TODO: add your routine here\nEnd Sub\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It might be useful to automatically run this macro with each session of SOLIDWORKS. Follow the ",(0,r.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start/"},"Run SOLIDWORKS macro automatically on application start")," link for more information.")),(0,r.kt)("h2",{id:"macro-module"},"Macro Module"),(0,r.kt)("p",null,"Entry point which starts events monitoring"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swFileLoadWatcher As FileLoadWatcher\n\nSub main()\n    \n    Set swFileLoadWatcher = New FileLoadWatcher\n    \n    While True\n        DoEvents\n    Wend\n    \nEnd Sub\n")),(0,r.kt)("h2",{id:"fileloadwatcher-class-module"},"FileLoadWatcher Class Module"),(0,r.kt)("p",null,"Class which handles SOLIDWORKS API notifications"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim WithEvents swApp As SldWorks.SldWorks\n\nPrivate Sub Class_Initialize()\n    Set swApp = Application.SldWorks\nEnd Sub\n\nPrivate Function swApp_DocumentLoadNotify2(ByVal docTitle As String, ByVal docPath As String) As Long\n    \n    Dim swModel As SldWorks.ModelDoc2\n        \n    If docPath <> "" Then\n        Set swModel = swApp.GetOpenDocumentByName(docPath)\n    Else\n        Dim vDocs As Variant\n        vDocs = swApp.GetDocuments\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vDocs)\n            Dim swDoc As SldWorks.ModelDoc2\n            Set swDoc = vDocs(i)\n            If swDoc.GetTitle() = docTitle Then\n                Set swModel = swDoc\n                Exit For\n            End If\n        Next\n    End If\n    \n    OnModelLoad swModel\n    \nEnd Function\n\nSub OnModelLoad(model As SldWorks.ModelDoc2)\n    HandlerModule.main model\nEnd Sub\n')),(0,r.kt)("h2",{id:"handlermodule-module"},"HandlerModule Module"),(0,r.kt)("p",null,"Custom VBA code which needs to be run for each opened document"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Sub main(model As SldWorks.ModelDoc2)\n    \'TODO:implement the procedure\n    MsgBox "File Loaded: " & model.GetTitle()\nEnd Sub\n')))}m.isMDXComponent=!0},98246:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/file-open-dialog-a873118f854b9baad017d70aa324d29e.png"},83857:(e,o,n)=>{n.d(o,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8AAAEwCAMAAAC5c4WcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAOCoMAD/AABkZAD//wBmkDYAAGa2tv//24R8m6tgAKCowP/ggP8A/6vw8AAANjkAOTBg0N/f32VlAJh8VKCw0Ierh8Ta8IfOq///ADYAYAA2h29Og4c2AKCYkENlm1qRxuvr69vbkMCMEKuRbACAgG9ObJDb/7m5ugAAZfHx8fDw/7b/tmCr8ClCcv7+/mUAAGAANjOZ/zqQkL/M27+lg2BQUDBIYLa2ZofO8ENObISl24CQsKvwq2+lxs6HYGB4kMrKyvDIYP//toCo8LbbkNv//1pObDAoIL/NsQA6OpBwIPBoQGYAZrKysmZmZpA6OmY6kJjNxjpmtrb//0NOVP/ooCAQEP+2ZoRlVM6HNjaHzqvN25CIcNPT04S52//YgNv/24CYsL+5m4RlbJBmkL/MxWZmtjqQtlpOg6CQgPCwQLZmOkNOg87w8KCgoGCI4MDAwPDgoGa2/6mpqTo6kFqRsfCrYDqQ29bc3bCokOTu+KDA/1BQQGZmOv/wsGYAOvB4UDaHh9v/toB4cEtjp4CAAPDIcNCQEHBwYDo6OpCgwGlpafDOh1CA4LCwwIAAgICo/9DY/+Do4ABgq7CAEHCY4OPj47DA4PDgkG+lsduQOlplbLaQOvDwzuC4UEBw4JGRkW98VODr/5CowIeHYP/wwJCQZv/QcKulg1plg9u2ZvCAYFplVJA6AOCYIKC44IKHkNDY4PDwq1BAQHCEoGCY8ICg8PD4/2BgUJDbtrCgkJC1/wA6kPCoMG98g0Nlg0N8sXCIsNnZ2ToAZtuQZgBmtm+l25Co8FpOVLrQ8JjN2/DAYCAgENDQ4MCUIOCgMP/gkKuRg/C4UP/bkLZmALCAINCcINDg/3CY8JC2kPDosICAgJiRbEA4MG9OVGB4oKB4IIBwYG9iUgAAOpCIgPCIcMnKu//okPDQYP/woNDo//DAUPDwsEB44KCYgPC4QKCwwP/YcDoAAHCg8HCQsFCI4OCwMPDQcKC40KCgkGCQ4OCgIDBo0GCAoAAAAOcgfhkAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAATY0lEQVR4Xu2dDZwdV1mHpyWWSClgGq0BsS0Ek13b3m1NrPgdFgupsVhJ6m7BIEZXEWVdI2aFaoMoYElQtGWri1iMWBQNlYjE0qBt6iJVRGSXr65EJGpBWtSAIqg////3fc983Dv37N27M7d7777P7t4zc86558557jtnZk5m2mTYieF+4iTbnBJUzuTkpPvZ1mjhUPBz6JD72daYaWIy8+P7F/2ojRT3U2AJPxv37Nnzjc+zuikbf/yvbCnGRnvjzlN3S5pjcy5n40X4a6mRA5W1fOOFz+Vrad2J8XfbUrUs5Qcbv7lVUCvbZdsLbNyDN4PNr1+xn+38QibGuSF5EbkPrdVPoic6krT6mRjXfkYp8/N6CbOJ8ZX72fcMmNn3jD+EA1k0eueHZvS11M/E+G+cQmc3Y29jT5jLFQksZr6b+2FzHzf+tGzz9gv/niXhvdxl0xw2kPcTKu17DyrJzqSV5SvafDer0YkV24fKBkyMf+t4uj1IbYtXjO5fVKN6Sv3g038fH70ZHzgxji1i7mZsIMOemfu+qTR+LmIdJuxE+l6+T7plDeT8pJX+jh0sVObKRfwQVg3F8qG6AbLzsbo1q1u8cmz8gRzVU+IHo7F8fzu/hp+47wXSJVmBuZ2nNK5L/bAS6qNz6Xt1AZ0MDeT8pJW4whbTyuwxVvhrnycfyD/LkC0M7cs3ivUKCONz0NPsB7GLjZC9WwZJ6QS6tB0FjGvNzPzsPLVnj2WhFn4hB7/pe7X3zLEGcn6yD5B95sLnppVpAZ+AzbAsKVZH+mmyhRibQrOyXgEdxA8o8WMS0tT85ECtfS/4nh98XsGPLqQ5oMTPzlPa+bQyazHZfDd3n1Bc6seardYP5Zig9n70yMEvkD23w0hI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"}}]);