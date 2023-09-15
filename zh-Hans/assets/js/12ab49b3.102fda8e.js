"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[96192],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(a),b=s,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||n;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,o=new Array(n);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<n;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},88397:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=a(87462),s=(a(67294),a(3905));const n={title:"SOLIDWORKS Macro Types - VBA (swp), SWBasic (swb), VSTA (dll)",caption:"Macro Types"},o=void 0,i={unversionedId:"codestack/solidworks-api/getting-started/macros/types/index",id:"codestack/solidworks-api/getting-started/macros/types/index",title:"SOLIDWORKS Macro Types - VBA (swp), SWBasic (swb), VSTA (dll)",description:"This article introduces the different types of macros supported by SOLIDWORKS (VBA, VSTA, SWBasic)",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/getting-started/macros/types/index.md",sourceDirName:"codestack/solidworks-api/getting-started/macros/types",slug:"/codestack/solidworks-api/getting-started/macros/types/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/macros/types/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/macros/types/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS Macro Types - VBA (swp), SWBasic (swb), VSTA (dll)",caption:"Macro Types"},sidebar:"tutorialSidebar",previous:{title:"Automatically Running Macros on SOLIDWORKS Application Startup",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start/"},next:{title:"\u5982\u4f55\u5728\u811a\u672c\u4e2d\u4f7f\u7528SOLIDWORKS API\u65b9\u6cd5",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/scripts/"}},c={},l=[{value:"sidebar_position: 1",id:"sidebar_position-1",level:2},{value:"VBA Macros (*.swp)",id:"vba-macros-swp",level:2},{value:"SWBasic Macros (*.swb)",id:"swbasic-macros-swb",level:2},{value:"C# and VB.NET VSTA Macros",id:"c-and-vbnet-vsta-macros",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This article introduces the different types of macros supported by SOLIDWORKS (VBA, VSTA, SWBasic)\nimage: macro-edit-run-filters.png\nlabels: ","[macro, VSTA, VBA, SWMacro, SWB, SWP]"),(0,s.kt)("h2",{id:"sidebar_position-1"},"sidebar_position: 1"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Macro Filters when running a macro",src:a(75368).Z,width:"301",height:"159"}),"{ width=200 }"),(0,s.kt)("p",null,"Macros can be edited directly in the built-in VBA editor and can be executed using the out-of-the-box engine in SOLIDWORKS. Running macros does not require the installation of any additional software (the only exception being VSTA 3.0 macros which require a separate installation of Visual Studio)."),(0,s.kt)("h2",{id:"vba-macros-swp"},"VBA Macros (*.swp)"),(0,s.kt)("p",null,"This is perhaps the most popular type of macro. These macros are based on the VBA7 (for SOLIDWORKS 2015 and newer) and VBA6 (for older versions) languages. VBA6 and VBA7 are derived from the Visual Basic 6 language. Therefore, all the syntax is the same. For more documentation on the language, refer to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic"},"Visual Basic tutorial"),"."),(0,s.kt)("p",null,"Macros are saved in a binary format with the extension *.swb and can only be viewed and edited using the SOLIDWORKS VBA editor."),(0,s.kt)("h2",{id:"swbasic-macros-swb"},"SWBasic Macros (*.swb)"),(0,s.kt)("p",null,"Similar to ",(0,s.kt)("em",{parentName:"p"},".swp macros, these macro types are also based on the VBA6 and VBA7 languages. The only difference is that these macros are saved in plain text format with the extension "),".swp."),(0,s.kt)("p",null,"This allows the macro code to be read and edited with any text editor (such as Notepad) outside of the SOLIDWORKS environment. This is particularly useful when maintaining macro code in version control services like SVN or GIT."),(0,s.kt)("p",null,"These macros cannot reference any third-party type libraries (such as Excel, FileSystemObject, etc.) and can only include references to the SOLIDWORKS type library. If the need arises to use any third-party type libraries, it can be achieved through ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/variables/declaration/#early-binding-and-late-binding"},"late binding"),"."),(0,s.kt)("p",null,"These macros can only have one ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/modules/"},"module")," and cannot use ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/classes/"},"classes")," or ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/user-forms/"},"user forms"),"."),(0,s.kt)("h2",{id:"c-and-vbnet-vsta-macros"},"C# and VB.NET VSTA Macros"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"V"),"isual ",(0,s.kt)("strong",{parentName:"p"},"ST"),"udio for ",(0,s.kt)("strong",{parentName:"p"},"A"),"pplication (VSTA) macros are based on the .NET languages (C# or VB.NET) and provide greater flexibility, leveraging the powerful features of the .NET framework, allowing macros to access various libraries, third-party components, and object-oriented programming (OOP) paradigms."),(0,s.kt)("p",null,"Unlike VBA macros, VSTA macros separate the project from the source code (",(0,s.kt)("em",{parentName:"p"},".csproj, "),".vbproj) and output a binary file (*.dll) to run the macro. Therefore, the binary file can be used without the source code."),(0,s.kt)("p",null,"VSTA macros are in-process applications and can automatically release memory or continue execution after the main function is completed."),(0,s.kt)("p",null,"This behavior is controlled by the following option:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Option to stop VSTA debugger on macro exit",src:a(49729).Z,width:"959",height:"814"}),"{ width=350 }"),(0,s.kt)("p",null,"If this option is unchecked, the macro will remain in memory until the ",(0,s.kt)("strong",{parentName:"p"},"Stop")," button is clicked. This is useful when the macro performs any asynchronous operations, such as handling events or displaying the PropertyManager page."),(0,s.kt)("p",null,"VSTA macros are based on the .NET Framework 2.0 and can be edited and debugged using the built-in VSTA editor."),(0,s.kt)("p",null,"A new version of VSTA, VSTA 3.0, was introduced in SOLIDWORKS 2018, but support for older versions of VSTA is still available. The target version can be controlled with the following option:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Option to enable VSTA VERSION 3.0",src:a(90935).Z,width:"960",height:"816"}),"{ width=350 }"),(0,s.kt)("p",null,"VSTA 3.0 requires a separate installation of Visual Studio (Professional or Community editions). The main advantage of VSTA 3.0 is the ability to use newer versions of the .NET Framework."))}u.isMDXComponent=!0},75368:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACfCAMAAACbSH8WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAANuQOgAthGd0gs/psQCOABuLmWWu1rm5uf//tgAAObnR6WnOzJA6AOzs7CbE19u2ZpObkywzitLS1PP88ywAAJCBOACrAP/u/3+Z/yAANLbP5jWN6C40OMG8/wBPpens8LZmAGefvsTFiuPp74i92XEzOE4AOHTI+Ga2/9Lb5cbH0vDw8MPk9Yadq5KDjN3s9aCr/zO8/5aqtIxcAB9vyGYAACEAX///2/23jozKyU6R6y2B09v//8SjYtvb2wAAXlQuAC1fhrb/23i94uHO/4fGpvf3wIyRXsD+/v7+/m213FtbW8XlsAA6ZpA6OmaQkFSx7auts8rKzOn16Zu6yzsuAIqtg1MAY4LR79v39wBcsJDb/8nUyQsMDWFQAKurq8TExpPN7P/e/7b/tjOZ/1OShTpmtn/C5Xx8fJC2/87p+KLc+YeOhzqQ23JuMz/O8jY4ZffbpHK53zoAOTc4ALrL1dbW17a2ZuLi4tju+lrO/3ONXQBmkEdHR6KrogD8ACUlJdv/2zOr/2YAOlEAAAA6kLaQkFqZ/3/OzP+2Zm7F9oyMjH/e/9uQZobG6NPs+cXl0wBmtjUAXaOjo7b//+Dx+bKDOK3CzmDG6JjR787p1YOGjVqWuGa2tozl9ujo6CAAAC2BsAAuXy4uLjtTX0Bri6nl9snn90t1k2Y6AH+8/yBRqEys6WZmAFMuNcSjilYwNYmQiZquw29vbyEuhaiAYmTK6yGsvqq8x6mAOJSxhX1zNa/G3ZTPqX3N7Nvf5XyMnf/bkHOnw/f325WVlaDu/2pTAFKmsADUANDQ0S0AOJKnYzk5OZNdAAAAZdfj1ztTALy9wM3Nz+Xx5XPG6J2dnRZzf1Cl92tKSraQOgAzijkAAEwsAHEzAG6j9obGyFRTVDo6kIWFhWVkZMzHiyxiisymY7Pq+JXPzIzK65WTX+H//zqQtt3v+iwAYmYAZjZXcZC2kGrP7SBzyyjO473HvaO9zTqS7ZHo94J2Nau0q4aNXToAZQBSqQAAAPYViMcAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAOb0lEQVR4Xu2dDXxVZR3Hz5YVw7aszUpNbJImbTOZhNMGCKXB0sqmkQ7dmK23GWShRJRZCNmQBjTCIHWU4azs1V4chDbbMIxhYEYyloowuZBKYeILfPr9X86952737Zx7zr27h/P9cM95zvM85zn3/73P89xzHw4fjJqAZBwrfMEoCWwlJ7Blh8CWHQJbdghs2SGwZQeLre4com3mvGxgsVWeQ8xr0/fvLe1hiopw1aIctVXeXZRZ+KI5aquo6DGNwlv0ciZWW1ojF2gPbKUOppGM2bpTRDFWWzqf5QLz2jNm6xtPiinCamtuzlC8aVLmbD19r6gCga2EwNCd9+7aJa4CW0mAoc27uh9rEFmBrcTA0A3dbbXiKrCVBBh6MiIrylZxzrCpdm7GbF20VUwRVlvbcobaDNq6RUQxVlu1ucPM4ozZsmK1NTN32Jp9W1tzhxGbsm5Le3lOMLNNA8goEVv/NB7LIdpGaAAZJWLrilxasSH0B7ZX6FWiCdvKsbXT7BDYskNgyw6BLTsEtuwQ2LJDYMsOgS07BLbsENiyQ2DLDoEtOwS27GCx9TE7bJ2rDTC1B6bs8RVTDkT+pseCxZY+LZga73hAG2AOrD3zbH+x9oCGFoVTWzVRtqacef1ZvuL6s6doaFG4Y2vPfWd9z1ecdd8eDS0Kl2zdqlfxDbcGtmzgra1nfYa3tr7iMwJbdvDU1otLQa9hGHVLe+s4veMZ2kqat7zTKthyYunS1f1ckekdeQbvj1koJ6QGNbuyWg+IlXQdZOBFSWe86Kmt5ubV/XXNzc3veWZgy0t0MPIM2m5HVjPnNB+zcLtZBZteSoHdJz+MikKvUc37lSdrYSoMUN0Bvo6yEjm9aIleK6VF+3hta7eGzfvd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"},90935:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/option-enable-vsta-version-3-508f076eb08c137524d352a1c62f8e35.png"},49729:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/option-stop-vsta-debugger-on-macro-exit-e3531ed2ace53137fd23dc71cd0218a6.png"}}]);