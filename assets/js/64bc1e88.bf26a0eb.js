"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[63648],{3905:(e,r,o)=>{o.d(r,{Zo:()=>d,kt:()=>m});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function i(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=t.createContext({}),c=function(e){var r=t.useContext(a),o=r;return e&&(o="function"==typeof e?e(r):s(s({},r),e)),o},d=function(e){var r=c(e.components);return t.createElement(a.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(o),u=n,m=p["".concat(a,".").concat(u)]||p[u]||f[u]||i;return o?t.createElement(m,s(s({ref:r},d),{},{components:o})):t.createElement(m,s({ref:r},d))}));function m(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=u;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=o[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},72400:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=o(87462),n=(o(67294),o(3905));const i={title:"Browse for folder in VBA macro",caption:"Browse For Folder",description:"Code snippet to select the folder path in VBA macro"},s=void 0,l={unversionedId:"codestack-clone/visual-basic/algorithms/fso/browse-folder/index",id:"codestack-clone/visual-basic/algorithms/fso/browse-folder/index",title:"Browse for folder in VBA macro",description:"Code snippet to select the folder path in VBA macro",source:"@site/docs/codestack-clone/visual-basic/algorithms/fso/browse-folder/index.md",sourceDirName:"codestack-clone/visual-basic/algorithms/fso/browse-folder",slug:"/codestack-clone/visual-basic/algorithms/fso/browse-folder/",permalink:"/solidworks-GPT/docs/codestack-clone/visual-basic/algorithms/fso/browse-folder/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/visual-basic/algorithms/fso/browse-folder/index.md",tags:[],version:"current",frontMatter:{title:"Browse for folder in VBA macro",caption:"Browse For Folder",description:"Code snippet to select the folder path in VBA macro"},sidebar:"tutorialSidebar",previous:{title:"Show file browse for save or open in Visual Basic 6 (VBA)",permalink:"/solidworks-GPT/docs/codestack-clone/visual-basic/algorithms/fso/browse-file/"},next:{title:"Get files paths from folder using Visual Basic 6 (VBA)",permalink:"/solidworks-GPT/docs/codestack-clone/visual-basic/algorithms/fso/get-files/"}},a={},c=[],d={toc:c},p="wrapper";function f(e){let{components:r,...o}=e;return(0,n.kt)(p,(0,t.Z)({},d,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The following code snippet demonstrates how to browse for the folder path within VBA macro. The same function can also be used within VBScript."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Sub main()\n\n    Debug.Print BrowseForFolder("Browse for folder")\n        \nEnd Sub\n\nFunction BrowseForFolder(Optional title As String = "Select Folder") As String\n    \n    Dim shellApp As Object\n    \n    Set shellApp = CreateObject("Shell.Application")\n    \n    Dim folder As Object\n    Set folder = shellApp.BrowseForFolder(0, title, 0)\n    \n    If Not folder Is Nothing Then\n        BrowseForFolder = folder.Self.Path\n    End If\n    \nEnd Function\n')))}f.isMDXComponent=!0}}]);