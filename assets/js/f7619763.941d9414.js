"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[98899],{3905:(e,r,n)=>{n.d(r,{Zo:()=>m,kt:()=>b});var a=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,i=function(e,r){if(null==e)return{};var n,a,i={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var A=a.createContext({}),o=function(e){var r=a.useContext(A),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},m=function(e){var r=o(e.components);return a.createElement(A.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var n=e.components,i=e.mdxType,t=e.originalType,A=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=o(n),c=i,b=d["".concat(A,".").concat(c)]||d[c]||u[c]||t;return n?a.createElement(b,s(s({ref:r},m),{},{components:n})):a.createElement(b,s({ref:r},m))}));function b(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var t=n.length,s=new Array(t);s[0]=c;var l={};for(var A in r)hasOwnProperty.call(r,A)&&(l[A]=r[A]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var o=2;o<t;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13407:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>A,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const t={title:"Arrays in Visual Basic",caption:"Array",description:"Article explaining arrays in Visual Basic - set of elements which stored in the single variable and can be accessed by index",image:"two-dimensional-array.png",sidebar_position:0},s=void 0,l={unversionedId:"codestack/visual-basic/data-sets/array/index",id:"codestack/visual-basic/data-sets/array/index",title:"Arrays in Visual Basic",description:"Article explaining arrays in Visual Basic - set of elements which stored in the single variable and can be accessed by index",source:"@site/docs/codestack/visual-basic/data-sets/array/index.md",sourceDirName:"codestack/visual-basic/data-sets/array",slug:"/codestack/visual-basic/data-sets/array/",permalink:"/solidworks-GPT/docs/codestack/visual-basic/data-sets/array/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/visual-basic/data-sets/array/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Arrays in Visual Basic",caption:"Array",description:"Article explaining arrays in Visual Basic - set of elements which stored in the single variable and can be accessed by index",image:"two-dimensional-array.png",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"data sets",permalink:"/solidworks-GPT/docs/category/data-sets"},next:{title:"Managing Collections in Visual Basic",permalink:"/solidworks-GPT/docs/codestack/visual-basic/data-sets/collection/"}},A={},o=[{value:"Initializing arrays in Visual Basic",id:"initializing-arrays-in-visual-basic",level:2},{value:"Filling array with data",id:"filling-array-with-data",level:2},{value:"Resizing array",id:"resizing-array",level:2},{value:"Clearing the existing values",id:"clearing-the-existing-values",level:3},{value:"Preserving existing values",id:"preserving-existing-values",level:3},{value:"Resizing arrays dynamically",id:"resizing-arrays-dynamically",level:3},{value:"Two dimensional array",id:"two-dimensional-array",level:2}],m={toc:o},d="wrapper";function u(e){let{components:r,...t}=e;return(0,i.kt)(d,(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Visual Basic array is a set of elements which is stored in the single variable and can be accessed by index."),(0,i.kt)("p",null,"In order to declare array it is required to append the variable name with parenthesis () symbol;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim arr() As Double 'declaring the array of doubles\n")),(0,i.kt)("p",null,"Array elements can be accessed by the index"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim arr(2) As String\nDim elem As String\nelem = arr(0) 'getting first element\n")),(0,i.kt)("h2",{id:"initializing-arrays-in-visual-basic"},"Initializing arrays in Visual Basic"),(0,i.kt)("p",null,"Arrays is a set of the fixed size. Size can be assigned while declaration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim arr(2) As Double 'declaring the array of 3 doubles (from 0 to 1)\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The single number between the parenthesis represents the upper boundary of the array. By default arrays are 0-based. So specifying (5) as array size means that there will be 6 elements in the array.")),(0,i.kt)("p",null,"It is possible to explicitly specify the upper and inner boundaries of the array"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim arr(1 To 5) As Double 'declaring the array of 5 doubles (from 1 to 5)\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is recommended to use 0-based array as it is a common practice across different programming languages.")),(0,i.kt)("p",null,"Array elements can be accessed and changed by their index. If specified index is outside of the boundaries of the array, run-time error is raised."),(0,i.kt)("p",null,"In some cases size of the array cannot be known at the compile time and it will be identified during the run-time. In this case array can be declared without the size (i.e. not initialized). Such array can be then resized dynamically using the ",(0,i.kt)("strong",{parentName:"p"},"ReDim")," keyword."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim arr() As Double\nReDim arr(2) 'initializing the size of the array\n")),(0,i.kt)("p",null,"In order to retrieve the upper and lower boundaries of the array ",(0,i.kt)("strong",{parentName:"p"},"UBound")," and ",(0,i.kt)("strong",{parentName:"p"},"LBound")," can be used respectively."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"UBound function cannot be used to identify if the array is initialized as it will throw an exception when used on not initialized array. Use the ",(0,i.kt)("strong",{parentName:"p"},"IsArrayInitialized")," function from the example below to safely identify the state of the array.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Run-time error 9: subscript out of range while reading the upper boundary of uninitialized array",src:n(18626).Z,width:"821",height:"301"}),"{ width=350 }"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Sub InitializeArray()\n    \n    Dim doubleArr() As Double \'not initialized array\n    \n    \'Array is initialized = False\n    Debug.Print "Array is initialized = " & IsArrayInitialized(doubleArr)\n    \n    ReDim doubleArr(2) \'resizing array to hold 3 doubles\n    \n    \'Array is initialized = True of size 3\n    Debug.Print "Array is initialized = " & IsArrayInitialized(doubleArr) & " of size " & GetArraySize(doubleArr)\n    \n    Dim textArr(4) As String \'initialized at declaration\n    \'Array is initialized = True of size 5\n    Debug.Print "Array is initialized = " & IsArrayInitialized(textArr) & " of size " & GetArraySize(textArr)\n    \n    \'initializing with custom boundaries\n    Dim intArr(1 To 5) As Integer\n    \'Array is initialized = True of size 5 (1 to 5)\n    Debug.Print "Array is initialized = " & IsArrayInitialized(intArr) & " of size " & GetArraySize(intArr) & " (" & LBound(intArr) & " to " & UBound(intArr) & ")"\n    \n    \'Debug.Print intArr(0) \'Run-time error 9: subscript out of range\n    \nEnd Sub\n\nFunction IsArrayInitialized(vArr As Variant) As Boolean\n\n    If IsArray(vArr) Then\n        \n        On Error GoTo End_\n        \n        If UBound(vArr) >= 0 Then\n            IsArrayInitialized = True\n            Exit Function\n        End If\n        \n    End If\n\nEnd_:\n\n    IsArrayInitialized = False\n    \nEnd Function\n\nFunction GetArraySize(vArr As Variant) As Integer\n    \n    If IsArrayInitialized(vArr) Then\n        GetArraySize = UBound(vArr) - LBound(vArr) + 1\n    Else\n        GetArraySize = 0\n    End If\n    \nEnd Function\n')),(0,i.kt)("h2",{id:"filling-array-with-data"},"Filling array with data"),(0,i.kt)("p",null,"Array elements can be treated as individual variables and the same rules of reading and editing the data applies to array elements as any other variable. Refer ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/variables"},"Variables")," article for more information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim arr(2) As Double\narr(<INDEX>) = 10 'changing the value of the variable at <INDEX>\nDebug.Print arr(<INDEX>) 'reading the value of the variable at <INDEX>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Sub FillArray()\n    \n    Dim doubleArr(2) As Double \'array initialized from the declaration\n    Dim i As Integer\n    \n    For i = 0 To UBound(doubleArr)\n        doubleArr(i) = i + 1\n    Next\n    \n    \'1 2 3\n    For i = 0 To UBound(doubleArr)\n        Debug.Print doubleArr(i)\n    Next\n\n    Dim vArr As Variant\n    vArr = Array("A", "B", "C", "D") \'filling the variant array on initialization\n    \n    \'A B C D\n    For i = 0 To UBound(vArr)\n        Debug.Print vArr(i)\n    Next\n    \nEnd Sub\n')),(0,i.kt)("h2",{id:"resizing-array"},"Resizing array"),(0,i.kt)("p",null,"Array size can be changed at run-time. But that can only be done for the array whose size was not explicitly specified on declaration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim arrCanResize() As Integer 'size of this array can be resized\nDim arrCannotResize(3) As Integer 'size of this array cannot be resized\n")),(0,i.kt)("p",null,"Attempt of resizing the already dimensioned array will result in the compile error:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Compile error: Array already dimensioned",src:n(28919).Z,width:"702",height:"302"}),"{ width=350 }"),(0,i.kt)("h3",{id:"clearing-the-existing-values"},"Clearing the existing values"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ReDim")," keyword allows to resize the array. In this case all existing values will be cleared."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Sub ResizeAndClearArray()\n    \n    Dim doubleArr() As Double\n    Dim i As Integer\n    \n    ReDim doubleArr(2)\n    \n    For i = 0 To UBound(doubleArr)\n        doubleArr(i) = i + 1\n    Next\n    \n    'resizing and clearing the array\n    ReDim doubleArr(3)\n    doubleArr(3) = 4\n    \n    '0 0 0 4\n    For i = 0 To UBound(doubleArr)\n        Debug.Print doubleArr(i)\n    Next\n\nEnd Sub\n")),(0,i.kt)("h3",{id:"preserving-existing-values"},"Preserving existing values"),(0,i.kt)("p",null,"In order to keep the existing values of the array it is required to use ",(0,i.kt)("strong",{parentName:"p"},"ReDim Preserve")," keyword."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Sub ResizeAndPreserveArray()\n\n    Dim doubleArr() As Double 'array initialized from the declaration\n    Dim i As Integer\n\n    ReDim doubleArr(3)\n    \n    For i = 0 To UBound(doubleArr)\n        doubleArr(i) = i + 1\n    Next\n    \n    'resizing the array and preserving the values\n    ReDim Preserve doubleArr(4)\n    doubleArr(4) = 5\n    \n    '1 2 3 4 5\n    For i = 0 To UBound(doubleArr)\n        Debug.Print doubleArr(i)\n    Next\n\nEnd Sub\n")),(0,i.kt)("h3",{id:"resizing-arrays-dynamically"},"Resizing arrays dynamically"),(0,i.kt)("p",null,"In some cases it might be unknown in advance the size of the array or when the first item (if any) will be added."),(0,i.kt)("p",null,"In this cases it is beneficial to only init array when needed. It is possible to use the following statement to identify if the array is not initialized ",(0,i.kt)("inlineCode",{parentName:"p"},"(Not array) = -1")," and init with a first item or dynamically resize preserving the existing values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim evenNumbersArr() As Integer\n\nDim i As Integer\n\nFor i = 0 To 100\n    If i Mod 2 = 0 Then\n                \n        If (Not evenNumbersArr) = -1 Then\n            ReDim evenNumbersArr(0)\n        Else\n            ReDim Preserve evenNumbersArr(UBound(evenNumbersArr) + 1)\n        End If\n        \n        evenNumbersArr(UBound(evenNumbersArr)) = i\n    End If\nNext\n")),(0,i.kt)("h2",{id:"two-dimensional-array"},"Two dimensional array"),(0,i.kt)("p",null,"Two-dimensional array allows to store the table data and can be declared in the following format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim table(<ROWS COUNT>, <COLUMNS COUNT>) As String\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"2-dimensional array can be resized, but if it is required to preserve the values only second (column) dimension can be resized.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Sub TwoDimensionalArrays()\n    \n    '3 rows and 4 columns\n    Dim matrixArr() As String\n    ReDim matrixArr(2, 3)\n        \n    Dim i As Integer\n    Dim j As Integer\n    \n    For i = 0 To UBound(matrixArr, 1)\n        For j = 0 To UBound(matrixArr, 2)\n        matrixArr(i, j) = (i + 1) & \".\" & (j + 1)\n        Next\n    Next\n    \n    'first dimension cannot be resized\n    'ReDim Preserve matrixArr(5, 5) 'Run-time error 9: subscript out of range\n    \n    'second dimension can be resized preserving the data\n    ReDim Preserve matrixArr(2, 4)\n    \n    ReDim matrixArr(5, 5) 'dimensions of the array can be changed when cleared\n    \nEnd Sub\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Values of two-dimensional array (matrixArr) in the Watch window from the code above",src:n(25182).Z,width:"203",height:"290"})))}u.isMDXComponent=!0},28919:(e,r,n)=>{n.d(r,{Z:()=>a});const a=n.p+"assets/images/array-already-dimensioned-40981959e8e5f2e3af05c7e4cc5809a9.png"},18626:(e,r,n)=>{n.d(r,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzUAAAEtCAMAAAAGKL4BAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAACjP5NmbVwBcXv//tsWjYnVLAAAAWKvOhzUAAJA6gHzH4anW4CVrnDoAAKtgYIOq0PDw8DEAWKzo9Vic2+K+l3rEwKd/ODoAOhtLUnBwcNramzWGzQAAgKtgAKqXvl8sAHm417nY2NvbvAAANAA6wqO9mmQAZAAsfYdghyHE8zo6wrnR6XS92K3GwDQ0NKmEgYfOzuXzs5e+4sja7nZrMXva9gBfqzOFiHwtEZA6OgAAl+K+qj/O8joAl1Wo+WYAl6C61jo6kbZmgKzF3//bkGWPjCYAWQBm1jqQ61cAMFQAAIODqpzb29bW1iYAMrne8lDS84Wrhf+2Zsvo+AA6kK2ytaa/27b//20UDTY2h5A6AIdaYRQWFjYANqvwq9uQl0+j9jqQ28Hi9aK82LLL5f7+/vr605m10dfk8nDG92YAgMjm03wxANy9fDF7u5A6l5eDgwBMnKakfJPEwJDb/1ONuSfH9Jfm/AAArajB3V8ANWCL3v+2rfHsyc/PzxoaGpe+vs6HYL6Xg2vb9tuQOjZgq++rYGYArcTjr8fl96qDl52407ZmOjw8PI3j9TCRw87w8IDR+4ODg4WGYHe21MvIjEKJ26WHWGa2/wAAYmA2hzoAgL6+qjoArUQAMYOXvsPEi44pDwA1h2EAAF+q7+vrqIfO8MHu9ZeDl2AsMiYAAL3g9FAAOCVsvP/bwkMAAHAzACYrWHYqDiUrMeXRjo2+2gBmtl2k286HNo1rMauMWbDIwkVOWoODlzsAZcDDxn1QAAAAAHfB3C/U/pbH4aLk9JeDqqypfpLD3rZml54dDSXP+zx/sWaQwsLX7GBgq5Pm+kwAN1kAMi+D1Y+PkCZvwcror5NvMpePW9Dz9Ll6V/Dwq1/V80KInIc2APTQqmCp38ze8ABSn3XW9CnR/QAAOUWN4Krw8NTzz7i6u4Te9lsAOdTUl6/HoLZmAHu82zQAYKnCnWYAOqfAvYTK7E0AAHrE31kAALC1uPDOh3lNAI9sWIeHh5Ti9AAAADLNH7oAAAEAdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AP///////////////////////////////////////////////////////////////////////////////wAVRWPgAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAa9klEQVR4Xu2dD5xc1VXHX2kgJmh0LVVKWUxtgIgpG4uSYi3/NsufUqltgCzGPyExEwnUKhggoYlVukYshdZUISsWhQBqKAlSG0JqWz5QjC1/RAlEjAJCIRDLWsTyp9aP55x73p+ZeW923uybnD27vy/MvPveve/NzOfcb+59d/YzJ6oBAMoBawAoC6wBoCyVWLNoiRYAmAwUWtPfe5qWRiffmgVn8/MIjAITDbVm+QW9vat2nh52AmvatyaXKRs38GbgK4OyC8CEIViz/ALq4Wt6K7VmSIYaTN/AxCNYEwzpP722uPdwnpy9dyUfW9Pb2yvjhTIUnT0SbV0QPUe1AzOiKBIfpmzUAlXTUa4UYltiewCYKGTGGmHzT/Lzb7I1vasGqSI7/gzM2Dpl4/Bg4sGirWE7FAQZuPq/V9aGhsOMbGCGXnLg4NgjACYGmfsaHmCy1pA0tP+5zG0J36OMbKgNnBzvayG2RkT52SDJgnjQ0fsbACYMag2z+Xrq3hlrwn0NF2PYktiaRTRDi3TQia0RiWJrdMyBNWDCkbGmtpg8adcamZwFTQqswVgDJirBmn7p2IvpHkasWX4iW5MzQ0usCYK0sgb3NWDCotbIPQ0PKyzM5utlDS2sBmQHitSaKXTfz4tm4XieNVhDAxMWteah63t7w9c1i3lZYHrvhv7enJXnaHhwJFoyMGN4cAHf1XChNsI3OFG0NVTzinQ4B9/XgIlK9r6mWvC3AWCi0j1r8HdoYKLSRWuA0gd88fGPa+SKgDXdpu/qF3u0CJxw/tt+WUv5wJou07ez59eBN574/pbawJouczWk8chfvk3jlwus6S59L2oYgC/e0ureBtZ0lz4MNT6BNYb01TQKwBf392kE84A13aWv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"},25182:(e,r,n)=>{n.d(r,{Z:()=>a});const a="data:image/png;base64,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"}}]);