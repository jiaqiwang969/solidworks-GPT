"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[19534],{3905:(e,n,o)=>{o.d(n,{Zo:()=>u,kt:()=>v});var t=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),p=a,v=d["".concat(i,".").concat(p)]||d[p]||m[p]||r;return o?t.createElement(v,s(s({ref:n},u),{},{components:o})):t.createElement(v,s({ref:n},u))}));function v(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=o[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},95283:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=o(87462),a=(o(67294),o(3905));const r={layout:"sw-tool",title:"Run VBA macro automatically on document save using SOLIDWORKS API",caption:"Run Macro On Document Save",description:"Macro runs VBA code (or another macro) automatically on file save using SOLIDWORKS API",image:"run-macro-on-save.svg",labels:["auto run","model save event"],group:"Model"},s=void 0,l={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/handle-document-save/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/handle-document-save/index",title:"Run VBA macro automatically on document save using SOLIDWORKS API",description:"Macro runs VBA code (or another macro) automatically on file save using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/handle-document-save/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/handle-document-save",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/handle-document-save/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/handle-document-save/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/handle-document-save/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Run VBA macro automatically on document save using SOLIDWORKS API",caption:"Run Macro On Document Save",description:"Macro runs VBA code (or another macro) automatically on file save using SOLIDWORKS API",image:"run-macro-on-save.svg",labels:["auto run","model save event"],group:"Model"},sidebar:"tutorialSidebar",previous:{title:"Run VBA macro automatically on document load using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/handle-document-load/"},next:{title:"Run macro on new document creation using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/handle-new-document/"}},i={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Macro Module",id:"macro-module",level:2},{value:"SaveEventsHandler Class Module",id:"saveeventshandler-class-module",level:2}],u={toc:c},d="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This VBA macro handles active document (part, assembly or drawing) save events (including save all and save as) using SOLIDWORKS API and runs a custom code."),(0,a.kt)("p",null,"Macro operates in the background and needs to be run once a session to start monitoring."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"File save command",src:o(21147).Z,width:"378",height:"106"})),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create new macro"),(0,a.kt)("li",{parentName:"ul"},"Place the code from the ",(0,a.kt)("a",{parentName:"li",href:"#macro-module"},"Macro Module")," to the default module"),(0,a.kt)("li",{parentName:"ul"},"Add the code which needs to be executed on each save into the ",(0,a.kt)("em",{parentName:"li"},"OnSaveDocument")," function")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Sub OnSaveDocument(Optional dummy As Variant = Empty)\n    \'TODO: place the code here to run when document is saved\n    MsgBox "Saved"\nEnd Sub\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To simplify this function you can call another macro without explicitly copying the code. Explore the ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/application/frame/run-macros-group/"},"Run Group Of Macros")," example.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add new Class Module and name it ",(0,a.kt)("em",{parentName:"p"},"SaveEventsHandler"),". Paste the code from the ",(0,a.kt)("a",{parentName:"p",href:"#saveeventshandler-class-module"},"SaveEventsHandler Class Module"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It might be useful to automatically run this macro with each session of SOLIDWORKS. Follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start/"},"Run SOLIDWORKS macro automatically on application start")," link for more information."))),(0,a.kt)("h2",{id:"macro-module"},"Macro Module"),(0,a.kt)("p",null,"Entry point which starts events monitoring and handles the code which needs to be run once the save event arrives."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swFileSaveHandler As SaveEventsHandler\n\nSub main()\n    \n    Set swFileSaveHandler = New SaveEventsHandler\n    \n    While True\n        DoEvents\n    Wend\n    \nEnd Sub\n\nSub OnSaveDocument(Optional dummy As Variant = Empty)\n    \'TODO: place the code here to run whn document is saved\n    MsgBox "Saved"\nEnd Sub\n')),(0,a.kt)("h2",{id:"saveeventshandler-class-module"},"SaveEventsHandler Class Module"),(0,a.kt)("p",null,"Class which handles SOLIDWORKS API save notifications"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},"Dim WithEvents swApp As SldWorks.SldWorks\n\nPrivate Sub Class_Initialize()\n    Set swApp = Application.SldWorks\nEnd Sub\n\nPrivate Function swApp_CommandCloseNotify(ByVal Command As Long, ByVal reason As Long) As Long\n    \n    Const swCommands_Save As Long = 2\n    Const swCommands_SaveAll As Long = 19\n    Const swCommands_SaveAs As Long = 620\n    \n    If Command = swCommands_Save Or Command = swCommands_SaveAll Or Command = swCommands_SaveAs Then\n        OnSaveDocument\n    End If\n    \nEnd Function\n\n")))}m.isMDXComponent=!0},21147:(e,n,o)=>{o.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXoAAABqCAMAAACF32qNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAJC2kClpCuzw8ABmtgAAOtu2ZlpaWjoAOmYAAFioyMTExP//tmSdTJBmAFuJoxsfJzCBpwA3Vff395K0xTs6OjoAAN5ZPR5XdcDN1YyMjQA6kJA6ANvbkNuQZoLN6xQUFDqQ22a2/xhPbaenp2YAOoKCgi1zlgAAZpydnf3/29dUPSsrK2tra6+vrqIXANfX1h08DHO31ToAZv7+/sfHx10gFUVIULa2tkd/nWyRogBBX5Db/nN4fYmJiavAzGa2tiFlg0V0ipBmkLaQkDWAFUBAQLaQOsXp93wWA2aQ28sdARk1REKLrWaoxjpmtl9gZoHJ55C2/2qbtLbbkP+2kO3AtApIZeDh4KOjo7Gxsbb9/R5RApDbtlSkxV2UslJ0g9LS0v+2Zma11VFRUTKCACN4mytnhazL2s/ax9XV1cLXupzE1XR0dM3NzS0wOTU4QH2it5OTk7ZmAFOQrsTGyf/bkNuQOkNicV+gvj53liMkI3bD4oWouzyQtDo6AI6Pjq2vs0ePGofT8TNohnx9fuiNeZy1xNwsA3+uxTJRYEFETHl5eTIyMm+lv9uQkC53m7bL12JiYpPB1kVFRbu7u0xMTGyvzRsbG76+vjGGrjY2NjlnhDt0kr3WrShaeUx5k5qkk22OV0mauy4uLjNsilubuabP30aGpZS+hHuZrBdObEuLqq4hAqurq3rB32msys3c46K6xiljgit/ojp8nVhbYDqMGdvl6kF1ki5ffQZDYDJvjl8lGiNCEr/N1HG+3T6Dp6zU5AtNa1KJp3WkvDlvjU6SsnvF5GObuTN5nY65zkJ8mqPC0i9jgYbP7W+00lR9ljVzkjw+QSNefHSfto6svRpScOY0BH/I5i1qiaTAzixwDDxqhIvW9EyAnEqEolWUsk6RI3WwzqnE0mQlGmKjwQ5RbxATHHe921CNqyh8n7PP3OuReYOktliXtagcAZW5yyA+D2CMpUZ6lWahTbQlAs8hApbAhCdffma222ymxI6QkqG8ymAiFgAAALBbrcsAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAQb0lEQVR4Xu2bC3gcVRWAIxdcy1Slu6Y8WsXWEpva4IKzslCMilKpjwri4yat6MQGNJJBU0htC5gKBZVclZKGprEGtVQRLISqhIeIDxCRZ0GRiqVVKFIFFEXF1+c555557szuUptMHvN/X7cz9965M/efM2fu7kxqcrMMKXIpI0+qPjFS9YmRmPrmODoCcOu9xJo4eG8Mtx5mklNvxhAY+N5W3xjDcO40jgmmnq+sEsaZetDIS1EkqP4A+gwQt1N9SLyylymrPpvlBQ9LEXPnzuWCWMzWz3wlF3/UoP7gbFb3pslmD8ZxRllo5CZAoy7ZM1h9qfsY9aZoymTqZWgU7XwoTDsXP1/Kqc9uvanEvZIYBUK218W7t+mILLO1tVXEugf12Ye2K4opgagjF2bj1GMzbqd0SSmGAR9C5g0jHxtLrN4scR+t3rR7eubPv7+2EBwFHQ1dC/rAdalLUakiL5aljPrsTZdcsi3snl3J9lxjrHtltLW1GQrivrWVi0pB9dtBfTcj1KWXllPP4yyj3jKEtCSSt2OG5KgvcR+p3pQ98x9bsOCx2tpg3CtzHhJ1RMXaolQmBKixBCOhLPHqwfyGrcu3hNyTBFDfLeLdKwtpVx1fbW392qxa1czlAVD9effAYevjl1JdUy7quR000yWlgHiDxCN5I3JMrvqw+2j19fMf+9uTv/r29/u7Quo/cMvZZ88TPYRffbE/l1HduVy3ysjaSqEfqx7Mb8tmt+x8IOie9gMKuqUQDTHula3Ji9bW30ppR9pC9feAeg76bqkW7opX756gcuqx2iXSvas+lwu6j1a/5P4FT77/ggMXqPnhqN9///3n6UMKRH0/HD/8p8trdVksceqzl4N5IbIP7Dgo4B72g91K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"}}]);