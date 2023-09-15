"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[95765],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>b});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=n,b=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return t?a.createElement(b,o(o({ref:r},d),{},{components:t})):a.createElement(b,o({ref:r},d))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},97304:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const i={title:"Sorting data in Visual Basic 6 (VBA)",caption:"Sorting",description:"Code example of various method of sorting data in Visual Basic 6 (VBA)",labels:["sort","bubble","logical"]},o=void 0,s={unversionedId:"codestack/visual-basic/algorithms/data/sorting/index",id:"codestack/visual-basic/algorithms/data/sorting/index",title:"Sorting data in Visual Basic 6 (VBA)",description:"Code example of various method of sorting data in Visual Basic 6 (VBA)",source:"@site/docs/codestack/visual-basic/algorithms/data/sorting/index.md",sourceDirName:"codestack/visual-basic/algorithms/data/sorting",slug:"/codestack/visual-basic/algorithms/data/sorting/",permalink:"/solidworks-GPT/docs/codestack/visual-basic/algorithms/data/sorting/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/visual-basic/algorithms/data/sorting/index.md",tags:[],version:"current",frontMatter:{title:"Sorting data in Visual Basic 6 (VBA)",caption:"Sorting",description:"Code example of various method of sorting data in Visual Basic 6 (VBA)",labels:["sort","bubble","logical"]},sidebar:"tutorialSidebar",previous:{title:"Embed Array In Visual Basic 6 (VBA) code",permalink:"/solidworks-GPT/docs/codestack/visual-basic/algorithms/data/helpers/embed-arrays/"},next:{title:"Code snippets for File System Object (FSO) in Visual Basic (VBA)",permalink:"/solidworks-GPT/docs/codestack/visual-basic/algorithms/fso/"}},l={},c=[{value:"Logical Bubble Sorting",id:"logical-bubble-sorting",level:2}],d={toc:c},u="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"logical-bubble-sorting"},"Logical Bubble Sorting"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Natural_sort_order"},"Logical or natural sorting")," is an alphabetic sorting except of the multi-digit numeric values which are sorted as a single number."),(0,n.kt)("p",null,"For example the following logical order ab1, ab2, ab3, ab12 would be different in alphabetical order: ab1, ab12, ab2, ab3. Logical order is used when files are ordered in the Files Explorer."),(0,n.kt)("p",null,"The following example is sorting the specified string array in the logical order using ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bubble_sort"},"bubble sorting")," technique."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"asc")," parameter specifies if the values should be sorted in ascending or descending order:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"Dim vSortedArr As Variant\nDim vInputArr as Variant 'array of strings\nvSortedArr = BubbleSort(vInputArr, False) 'sorting in descending order\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Declare PtrSafe Function StrCmpLogicalW Lib "shlwapi" (ByVal s1 As String, ByVal s2 As String) As Integer\n\nFunction BubbleSort(vStrArray As Variant, asc As Boolean) As Variant\n    \n    Dim swapPos As Integer\n    swapPos = IIf(asc, 1, -1)\n    \n    Dim vResStrArray As Variant\n    vResStrArray = vStrArray\n    \n    Dim i As Integer\n    Dim j As Integer\n    Dim tempVal As String\n    \n    For i = 0 To UBound(vResStrArray)\n        For j = i To UBound(vResStrArray)\n            If StrCmpLogicalW(StrConv(CStr(vResStrArray(i)), vbUnicode), StrConv(CStr(vResStrArray(j)), vbUnicode)) = swapPos Then\n                tempVal = vResStrArray(j)\n                vResStrArray(j) = vResStrArray(i)\n                vResStrArray(i) = tempVal\n            End If\n        Next\n    Next\n    \n    BubbleSort = vResStrArray\n    \nEnd Function\n')))}p.isMDXComponent=!0}}]);