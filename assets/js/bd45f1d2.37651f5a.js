"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[40385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),c=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},g="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=c(n),p=o,u=g["".concat(r,".").concat(p)]||g[p]||A[p]||i;return n?a.createElement(u,s(s({ref:t},d),{},{components:n})):a.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[g]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>A,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"Handling and declaring events in Visual Basic 6 (VBA)",description:"Introduction of events handling and declaration in Visual Basic 6 (VBA)",caption:"Events",image:"events-list.png",sidebar_position:0},s=void 0,l={unversionedId:"codestack/visual-basic/events/index",id:"codestack/visual-basic/events/index",title:"Handling and declaring events in Visual Basic 6 (VBA)",description:"Introduction of events handling and declaration in Visual Basic 6 (VBA)",source:"@site/docs/codestack/visual-basic/events/index.md",sourceDirName:"codestack/visual-basic/events",slug:"/codestack/visual-basic/events/",permalink:"/solidworks-GPT/docs/codestack/visual-basic/events/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/visual-basic/events/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Handling and declaring events in Visual Basic 6 (VBA)",description:"Introduction of events handling and declaration in Visual Basic 6 (VBA)",caption:"Events",image:"events-list.png",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"events",permalink:"/solidworks-GPT/docs/category/events"},next:{title:"algorithms",permalink:"/solidworks-GPT/docs/category/algorithms"}},r={},c=[{value:"Handling events",id:"handling-events",level:2},{value:"Declaring events",id:"declaring-events",level:2},{value:"EventsRaiser Class Module",id:"eventsraiser-class-module",level:3},{value:"EventsHandler Class Module",id:"eventshandler-class-module",level:2},{value:"Macro11 Module",id:"macro11-module",level:2}],d={toc:c},g="wrapper";function A(e){let{components:t,...i}=e;return(0,o.kt)(g,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Event is a mechanism of providing a notification to external listeners when certain action occurs. For example your object might need to tell its listeners that it is loaded, updated or removed. In Microsoft Office application example of the event would be: opening of the document, entering text in MS word, recalculating the value of cell in Excel, etc."),(0,o.kt)("p",null,"When developing automation software events are handled to invoke custom functionality, e.g. add log entry when cell value is changed in Excel."),(0,o.kt)("p",null,"It is possible to consume (handle) events of existing object or declare and raise your own events in custom classes."),(0,o.kt)("h2",{id:"handling-events"},"Handling events"),(0,o.kt)("p",null,"If object exposes events it is required to declare this object as ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/classes/"},"class")," variable and use ",(0,o.kt)("strong",{parentName:"p"},"WithEvents")," keyword"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Dim WithEvents myObj As CustomObjectWithEvents\n")),(0,o.kt)("p",null,"Visual Basic Editor will show all available events in the drop-down as shown below, and it is possible to select the required event from the list to subscribe to the notification."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"List of available events of the object",src:n(4417).Z,width:"681",height:"516"}),"{ width=450 }"),(0,o.kt)("p",null,"Event handler function should be named as ",(0,o.kt)("em",{parentName:"p"},"{Variable Name}_{Event Name}")," and match the signature of the event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Function myObj_SomeEvent(someParam As String) As Integer 'Handling 'SomeEvent' of 'myObj' variable\n    myObj_SomeEvent = 0\nEnd Function\n")),(0,o.kt)("h2",{id:"declaring-events"},"Declaring events"),(0,o.kt)("p",null,"Events can be declared in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/classes/"},"class")," using the ",(0,o.kt)("strong",{parentName:"p"},"Event")," keyword. Signature of the event must be specified by providing the parameter names and their types in the parenthesis."),(0,o.kt)("p",null,"The following example demonstrates how to raise and handle the event."),(0,o.kt)("p",null,"The project tree looks the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"VBA classes tree",src:n(20214).Z,width:"288",height:"265"})),(0,o.kt)("h3",{id:"eventsraiser-class-module"},"EventsRaiser Class Module"),(0,o.kt)("p",null,"This class raises the event named ",(0,o.kt)("em",{parentName:"p"},"Completed")," with a string parameter of ",(0,o.kt)("em",{parentName:"p"},"timeStamp"),". Event is raised when the ",(0,o.kt)("em",{parentName:"p"},"DoWork")," method is called."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Public Event Completed(timeStamp As String)\n\nPublic Sub DoWork()\n    'Do work\n    RaiseEvent Completed(Now)\nEnd Sub\n")),(0,o.kt)("h2",{id:"eventshandler-class-module"},"EventsHandler Class Module"),(0,o.kt)("p",null,"This class handles the event and displays the message box."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim WithEvents myEventRaiser As EventsRaiser\n\nPrivate Sub Class_Initialize()\n    Set myEventRaiser = New EventsRaiser\n    myEventRaiser.DoWork\nEnd Sub\n\nPrivate Sub myEventRaiser_Completed(timeStamp As String)\n    MsgBox "Completed: " & timeStamp\nEnd Sub\n')),(0,o.kt)("h2",{id:"macro11-module"},"Macro11 Module"),(0,o.kt)("p",null,"This module is an entry point which instantiates an instance of the events handler and keeps it in the memory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swEventsHandler As EventsHandler\n\nSub main()\n    \n    Set swEventsHandler = New EventsHandler\n\nEnd Sub\n")))}A.isMDXComponent=!0},4417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/events-list-c4b1510f62975bb451f1b2bba5de7b8d.png"},20214:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAEJCAMAAAAD/gpMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAOCoMAD/AABlZQD////ggABgqzYAAGa2toCAAKCowKvwq/8A/4RlbP//2wAANqvw8DYANqCw0NLh8TpmtmZmAKuRbKtgAIerh5DbtjYAYDOZ/+vr6///AIc2AAA2hwBmkKDA/9/f32Bgq9CQEPDOh/Hx8fD2/7m5uv7+/qCdkIR8mzY2h4fO8FpObGAANoS52wAAZUNOg2+l24RlVKurYGUAAMrKyv/wsDBk0FplbENOVNDo/5GRkfDIYPBoQGYAZvDgkFqRsb+lg0Nlm4eHYJDb/2B4kLKyslBAQDAoINv//2Cr8LZmOvCrYClCcsLY77/NsW+lsSAQEL/M27CokDaHzrb//4Co8DqQkJjNxs6HYNPT087wzmY6kKGhoc7wq86HNv/YgGCN4JA6OvCwQKvN2wA6OrDQ8Jh8VGZmZsDAwGa2//DAYKqqqpBmkENObFpOg8CMEP//tqCQgDqQ287w8L/MxW9OVLbbkJCIcP/ooJCgwPCIcEtjp3BwYOTu+PDIcGlpadbc3XCY4KB4IGZmOmYAOrCwwNuQOlCA4ICo/9u2ZkN8sTBIYNfl8zY2Nm9ObPDosMDQ8PDwzoCAgHCIsISl2+Do4OPj47nR6r+5m5BwIGB8oEBw4OC4UP/gkIAAgPCAYJCowP/wwODr///QcLDA4ABmtoCg8LCAENDg/1xOUgCAgKC44OCYIJA6APB4ULb/tlplg4CUsNDY4Mrc75Cw/6ulg7CgkPCoMIBwYNv/ttDQ4JjN27ZmAFqRxnCY8NuQZpCo8CAgEG9Og8CUIHCEoP+2ZuCgMPC4UAA6kJCIgDoAZtnZ2dvn9PDwq3BgUGCY8LCAINCcIGZmtmBgUP/bkDo6kKCYgEA4MJC2kIKHkMnKu298g4SRg9v/24B4cJCQZv/okNDY//DgoFBQQLa2ZvDAUPDQYJiRbEB44P/woDoAOv/YcHCQsAAAOquRg6CwwJC4//DwsPC4QPDQcHCg8M3e8DoAAFCI4OCwMDo6OqC40OCgIAAAAEpK2swAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAQuUlEQVR4Xu2dC3wcVRWHp1DKqxYQLCIUpNq0i1SJxLQSoWqxIq2l1UJQK1gRsCYqEkuqoCKCMYCgQNBQqfgoDe+CgIJIQBEilYKChofP4gMEpApCq9Wf//OY1+4kd7OZ3e7Oni9k78ydu7O9X8+9M3N6E7ybb775kgZjSEyQAxPkwNu4ceMli4wkTFCEXAFnmKAoud48jjVBMXK9rCMkELTrrruaILegpS0tLScdoI0Dlr7+dt0ajqX6xoXLv8zlMCxcfugJulllOAXdsWjRxEJDhcwu7OHSFrwZTDzIIaiz6aTfV7UgzxMnVCQI6mySjg5LkqCDONA6m1yCQMLbqwMVRGrkNVlQZ9O7lqO3EzHgqLNUSzscWlR5IA3FfA1L39p0IIrZh/4NR1Zc3dLCErh53vmqXRC7ET/JgtCh78HFRPSpswk94oGHLs2mTuJ7xdcSI+gOakMF3vKPA+St0jzvfFUviOyInyRBmJJ5lC38KgXMik/cTrW8A3ULl1OUJA+xO6gR2pMgAm20ed75ql+QHz+FgjAI8GeHCXQCf+HSLQiajQPgQKkMe7hweUuLVqEV/oMdFkTD6dATtHne+apfUEIEnX/++RpBIEGQL8YvkyII4fHelxxAgvg6jjY1KojsqKFhBK14bWSIyY5fOZSgzqbfoR6CeCBhStLmeeerdkHiRl6HEcT3hzx7UC3vvOYELmmSltCIQq1m070QCYKMFVfDgjTPO1/1CxInLkE8j1AF19L0pCUu951NhZd5HF34U4ocunphBvoBWeDm+edDmXDDXg34k3RAnqBkVFs9UJIgf96pB0oQhAs8j4/6IHdsPsUMsTrijEJU0P3332+CkgkF8ZaRiAlyEArSZH4ds25alHVsJRSk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"}}]);