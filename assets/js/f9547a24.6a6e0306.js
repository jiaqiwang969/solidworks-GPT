"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[84793],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),A=r,m=d["".concat(o,".").concat(A)]||d[A]||c[A]||l;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=A;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}A.displayName="MDXCreateElement"},43164:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={caption:"Conditions",title:"Conditions (if, select case, logical operations) in Visual Basic",description:"Articles explaining logical conditions, if-else, select case statements and boolean operations",sidebar_position:0},i=void 0,s={unversionedId:"codestack-clone/visual-basic/conditions/index",id:"codestack-clone/visual-basic/conditions/index",title:"Conditions (if, select case, logical operations) in Visual Basic",description:"Articles explaining logical conditions, if-else, select case statements and boolean operations",source:"@site/docs/codestack-clone/visual-basic/conditions/index.md",sourceDirName:"codestack-clone/visual-basic/conditions",slug:"/codestack-clone/visual-basic/conditions/",permalink:"/solidworks-GPT/docs/codestack-clone/visual-basic/conditions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/visual-basic/conditions/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{caption:"Conditions",title:"Conditions (if, select case, logical operations) in Visual Basic",description:"Articles explaining logical conditions, if-else, select case statements and boolean operations",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"condition",permalink:"/solidworks-GPT/docs/category/condition"},next:{title:"visual-basic",permalink:"/solidworks-GPT/docs/category/visual-basic-1"}},o={},p=[{value:"If Statement",id:"if-statement",level:2},{value:"Fallback Value",id:"fallback-value",level:3},{value:"Multiple \u0421onditions",id:"multiple-\u0441onditions",level:3},{value:"Select Case",id:"select-case",level:2},{value:"Logical Operators",id:"logical-operators",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Conditions are vital parts of any application as this is usually what drives the logic of an application."),(0,r.kt)("p",null,"There are multiple options available in Visual Basic to execute certain code based on the condition"),(0,r.kt)("h2",{id:"if-statement"},"If Statement"),(0,r.kt)("p",null,"This is the most common way to decide if the code within the ",(0,r.kt)("strong",{parentName:"p"},"If")," statement body should be executed. If statement simply evaluates the expression to Boolean ",(0,r.kt)("strong",{parentName:"p"},"True")," or ",(0,r.kt)("strong",{parentName:"p"},"False")," and executes the code if expression is ",(0,r.kt)("strong",{parentName:"p"},"True"),". This means that all expressions must result in either ",(0,r.kt)("strong",{parentName:"p"},"True")," or ",(0,r.kt)("strong",{parentName:"p"},"False")," value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},'If True Then\n    Debug.Print "Always Prints"\nEnd If\n')),(0,r.kt)("p",null,"However the following code will result in the runtime exception as String value cannot be cast to Boolean"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},'If "A" Then\nEnd If\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Type mismatch runtime error",src:a(45988).Z,width:"340",height:"206"})),(0,r.kt)("p",null,"while the following snippet is valid as comparison of 2 String values results into the Boolean value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},'If "A" = "A" Then\nEnd If\n')),(0,r.kt)("h3",{id:"fallback-value"},"Fallback Value"),(0,r.kt)("p",null,"It is possible to specify the fallback value for the statement, i.e. block of code which should be executed if the main condition is ",(0,r.kt)("strong",{parentName:"p"},"False")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vba"},'Sub main()\n\n    Dim myVar As Integer\n    myVar = 25\n    \n    If myVar > 10 Then\n        Debug.Print "Value of myVar variable is greater than 10"\n    Else\n        Debug.Print "Value of myVar variable is lower than 10"\n    End If\n')),(0,r.kt)("h3",{id:"multiple-\u0441onditions"},"Multiple \u0421onditions"),(0,r.kt)("p",null,"It is possible to specify multiple conditions as well as combine the expressions with ",(0,r.kt)("a",{parentName:"p",href:"#logical-operators"},"logical operations")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vba"},'Sub main()\n\n    Dim myVar As Integer\n    myVar = 25\n    \n    If myVar < 0 Then\n        Debug.Print "myVar has a negative value"\n    ElseIf myVar = 0 Then\n        Debug.Print "myVar equals to 0"\n    ElseIf myVar > 0 And myVar < 10 Then\n        Debug.Print "myVar value in a range of 0...10 (exclusive)"\n    Else\n        Debug.Print "Value of myVar is 10 or more"\n    End If\n    \nEnd Sub\n')),(0,r.kt)("p",null,"Conditions are executed one-by-one until the ",(0,r.kt)("strong",{parentName:"p"},"True")," condition is found"),(0,r.kt)("h2",{id:"select-case"},"Select Case"),(0,r.kt)("p",null,"If it is required to perform the check against multiple constant values, instead of using ",(0,r.kt)("strong",{parentName:"p"},"If-ElseIf")," it is possible to use ",(0,r.kt)("strong",{parentName:"p"},"Select Case"),". Although, ",(0,r.kt)("strong",{parentName:"p"},"Select Case")," can be considered redundant to ",(0,r.kt)("strong",{parentName:"p"},"If-ElseIf"),", it is widely used as it allows to create a simple, more readable code. ",(0,r.kt)("strong",{parentName:"p"},"Select Case")," statement also supports fallback value using the ",(0,r.kt)("strong",{parentName:"p"},"Case Else")," statement."),(0,r.kt)("p",null,"The below code converts the position of the day in the week to its text representation. It throws an error if the specified value is outside of 1-7 range as this would be an invalid input."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Sub main2()\n\n    Dim dayOfTheWeek As Integer\n    dayOfTheWeek = 3\n    \n    Select Case dayOfTheWeek\n        Case 1\n            Debug.Print "Monday"\n        Case 2\n            Debug.Print "Tuesday"\n        Case 3\n            Debug.Print "Wednesday"\n        Case 4\n            Debug.Print "Thursday"\n        Case 5\n            Debug.Print "Friday"\n        Case 6\n            Debug.Print "Saturday"\n        Case 7\n            Debug.Print "Sunday"\n        Case Else\n            Err.Raise vbError, "", "Value outside of the 1...7 range"\n    End Select\n\nEnd Sub\n')),(0,r.kt)("h2",{id:"logical-operators"},"Logical Operators"),(0,r.kt)("p",null,"Visual basic supports 3 logical operators: ",(0,r.kt)("strong",{parentName:"p"},"And"),", ",(0,r.kt)("strong",{parentName:"p"},"Or")," and ",(0,r.kt)("strong",{parentName:"p"},"Not")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Result of ",(0,r.kt)("strong",{parentName:"li"},"And")," operators will be equal to ",(0,r.kt)("strong",{parentName:"li"},"True")," if all of its arguments are equal to ",(0,r.kt)("strong",{parentName:"li"},"True")),(0,r.kt)("li",{parentName:"ul"},"Result of ",(0,r.kt)("strong",{parentName:"li"},"Or")," operators will be equal to ",(0,r.kt)("strong",{parentName:"li"},"True")," if at least one of its arguments is equal to ",(0,r.kt)("strong",{parentName:"li"},"True")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Not")," operator reverses the value")),(0,r.kt)("p",null,"Operators can be grouped with parenthesis to define the order of operations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vba"},"Sub main3()\n    \n    Dim varA, varB, varC, varD As Boolean\n        \n    varA = True\n    varB = False\n    varC = True\n    varD = False\n    \n    Debug.Print varA And varB 'False\n    Debug.Print Not (varA And varB) 'True\n    Debug.Print varA And varC 'True\n    Debug.Print varA Or varC 'True\n    Debug.Print varA Or varB 'True\n    Debug.Print varB Or varD 'False\n    Debug.Print (varA Or varB) And varD 'False\n    Debug.Print varA Or (varB And varD) 'True\n    \nEnd Sub\n")),(0,r.kt)("p",null,"The following table demonstrates the results based on the values and operator"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value1"),(0,r.kt)("th",{parentName:"tr",align:null},"Value2"),(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"And"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"And"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"And"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"And"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Or"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"Or"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Or"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"Or"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Not"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Not"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))}c.isMDXComponent=!0},45988:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);