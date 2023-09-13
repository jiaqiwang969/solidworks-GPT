"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[28828],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),l=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},A=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),A=r,m=p["".concat(u,".").concat(A)]||p[A]||d[A]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=A;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}A.displayName="MDXCreateElement"},9718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={title:"Functions, subroutines and parameters in Visual Basic",caption:"Functions and Subroutines",description:"Articles about using functions and subroutines (procedures) in Visual Basic as well as parameters",image:"argument-not-optional.png",order:4},o=void 0,s={unversionedId:"codestack/visual-basic/functions/index",id:"codestack/visual-basic/functions/index",title:"Functions, subroutines and parameters in Visual Basic",description:"Articles about using functions and subroutines (procedures) in Visual Basic as well as parameters",source:"@site/docs/codestack/visual-basic/functions/index.md",sourceDirName:"codestack/visual-basic/functions",slug:"/codestack/visual-basic/functions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/visual-basic/functions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/visual-basic/functions/index.md",tags:[],version:"current",frontMatter:{title:"Functions, subroutines and parameters in Visual Basic",caption:"Functions and Subroutines",description:"Articles about using functions and subroutines (procedures) in Visual Basic as well as parameters",image:"argument-not-optional.png",order:4},sidebar:"tutorialSidebar",previous:{title:"Errors And Exceptions Handling",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/visual-basic/exceptions-handling/"},next:{title:"Standard Functions",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/visual-basic/functions/standard-functions/"}},u={},l=[{value:"Declaring function",id:"declaring-function",level:2},{value:"Calling functions and subroutines",id:"calling-functions-and-subroutines",level:2},{value:"Returning values",id:"returning-values",level:2},{value:"Passing parameters",id:"passing-parameters",level:2},{value:"Reference parameters",id:"reference-parameters",level:3},{value:"Optional parameters",id:"optional-parameters",level:3},{value:"Terminating function and subroutine",id:"terminating-function-and-subroutine",level:2}],c={toc:l},p="wrapper";function d(e){let{components:n,...i}=e;return(0,r.kt)(p,(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Functions are used to define the reusable procedures (group of code statements) which can be called from another functions. Functions in Visual Basic are synchronous which means that the caller must wait for the function to return the control before proceeding to the next statement."),(0,r.kt)("p",null,"Function can return values or be void (this function is called ",(0,r.kt)("strong",{parentName:"p"},"subroutine")," or ",(0,r.kt)("strong",{parentName:"p"},"sub"),")."),(0,r.kt)("p",null,"Functions can expect or return parameters (",(0,r.kt)("strong",{parentName:"p"},"ByRef")," parameters) or be parameterless."),(0,r.kt)("p",null,"Function which is invoking itself called ",(0,r.kt)("strong",{parentName:"p"},"recursive function")),(0,r.kt)("h2",{id:"declaring-function"},"Declaring function"),(0,r.kt)("p",null,"Function is declared within the ",(0,r.kt)("strong",{parentName:"p"},"Function"),"-",(0,r.kt)("strong",{parentName:"p"},"End Function")," block"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Function <Name>(<Optional Parameters>) As <Type>\n<Code Statements>\nEnd Function\n")),(0,r.kt)("p",null,"Type of the function should be defined after the ",(0,r.kt)("strong",{parentName:"p"},"As")," keyword. If type is not explicitly specified than it is considered to be ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/variables/standard-types#variant"},"Variant")),(0,r.kt)("p",null,"Subroutine is declared within the ",(0,r.kt)("strong",{parentName:"p"},"Sub"),"-",(0,r.kt)("strong",{parentName:"p"},"End Sub")," block"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Sub <Name>(<Optional Parameters>)\n<Code Statements>\nEnd Sub\n")),(0,r.kt)("p",null,"Functions and procedures must have unique name within module or class. Functions are not overloadable in Visual Basic. Even if functions have different parameters they cannot have the same names otherwise ",(0,r.kt)("em",{parentName:"p"},"Ambiguous name detected")," compile error is thrown."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Compile error: Ambiguous name detected",src:t(24370).Z,width:"410",height:"248"}),"{ width=300 }"),(0,r.kt)("h2",{id:"calling-functions-and-subroutines"},"Calling functions and subroutines"),(0,r.kt)("p",null,"Function and subroutines can be called by specifying its name. If the function resides in different module than function name should be preceded by module name and . symbol"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Func1\nModule1.Func1\n")),(0,r.kt)("p",null,"If result of the function is assigned to the variable than parenthesis symbol () should be used. () should be also used if ",(0,r.kt)("em",{parentName:"p"},"Call")," operator is used to invoke the function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"val = Func1() 'using () to retrieve the value\nCall Func1()  'using () while calling using Call operator\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Rule:")," no equal (or call operator) - no parenthesis.")),(0,r.kt)("h2",{id:"returning-values"},"Returning values"),(0,r.kt)("p",null,"In order to return the value from function is is required to consider its name as variable and follow the same rules as while ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/variables/"},"assigning the variables values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Function GetDouble() As Double\n    GetDouble = 10\nEnd Sub\n\nFunction GetObject() As Object\n    Set GetObject = <Reference To Object>\nEnd Sub\n")),(0,r.kt)("h2",{id:"passing-parameters"},"Passing parameters"),(0,r.kt)("p",null,"Parameters must be passed to the function or subroutine in the order they declared in the function"),(0,r.kt)("p",null,"Parameters can be either passed as variable or be defined 'on-a-fly'"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Func par1, par2, "value2" \'calling function Func with 3 parameters\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Argument not optional")," compile error is thrown when calling function without passing the required parameters."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Compile error: Argument not optional",src:t(26955).Z,width:"328",height:"246"}),"{ width=300 }"),(0,r.kt)("h3",{id:"reference-parameters"},"Reference parameters"),(0,r.kt)("p",null,"Function or subroutine can return additional parameters. It is required to use ",(0,r.kt)("strong",{parentName:"p"},"ByRef")," keyword to declare parameter as out parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Function Func(par1 As Double, ByRef outPar1 As Integer) As Double 'function expects par1 as input and returns double value and another integer value as reference parameter\nEnd Function\n")),(0,r.kt)("h3",{id:"optional-parameters"},"Optional parameters"),(0,r.kt)("p",null,"Function or subroutine can declare optional parameters with the default values. In this case it is not required to explicitly set the value for the parameter when function is called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Call Proc() 'no need to specify value for parameter explicitly. In this case the default value (i.e. 0.5) is used\n\nSub Proc(Optional par1 As Double = 0.5) 'optional parameter with default value 0.5\nEnd Sub\n")),(0,r.kt)("p",null,"Optional parameters can be set selectively by name (",(0,r.kt)("em",{parentName:"p"},"param name"),":=",(0,r.kt)("em",{parentName:"p"},"param value"),"). This allows to set the parameters in a different order they declared in the function signature"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Call Func(param1:=1, param3:="Test") \'only 2 parameters (1st and 3rd) are used\n\nFunction Func (Optional param1 As Integer = 0, Optional param2 As Double = 0.0, Optional param3 As String = "")\nEnd Function\n')),(0,r.kt)("p",null,"Example below demonstrates cases where the optional parameters can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Sub main()\n    \n    Debug.Print Pow(2) \'4\n    Debug.Print Pow(2, 3) \'8\n\n    PrintAddress state:="NSW", postcode:=2000 \'Australia NSW 2000\n    \nEnd Sub\n\nFunction Pow(number As Double, Optional power As Double = 2) As Double\n    \n    Pow = number ^ power\n    \nEnd Function\n\nSub PrintAddress(Optional country As String = "Australia", Optional state As String = "", Optional suburb As String = "", Optional postcode As Integer = 0, Optional streetName As String = "", Optional buildingNumber As Integer = 0, Optional unitNumber As Integer = 0)\n\n    If country <> "" Then\n        Debug.Print country\n    End If\n    \n    If state <> "" Then\n        Debug.Print state\n    End If\n    \n    If suburb <> "" Then\n        Debug.Print suburb\n    End If\n    \n    If postcode > 0 Then\n        Debug.Print postcode\n    End If\n    \n    If streetName <> "" Then\n        Debug.Print streetName\n    End If\n    \n    If buildingNumber > 0 Then\n        Debug.Print buildingNumber\n    End If\n    \n    If unitNumber > 0 Then\n        Debug.Print "Unit: " & unitNumber\n    End If\n    \nEnd Sub\n')),(0,r.kt)("h2",{id:"terminating-function-and-subroutine"},"Terminating function and subroutine"),(0,r.kt)("p",null,"Function and subroutine can be terminated and control returned to the caller at any stage using the ",(0,r.kt)("strong",{parentName:"p"},"Exit Function")," and ",(0,r.kt)("strong",{parentName:"p"},"Exit Sub")," respectively."),(0,r.kt)("p",null,"Example below demonstrates different cases of using functions and subroutines."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Sub main()\n    \n    \'prints ProcedureWithoutParameters twice\n    ProcedureWithoutParameters\n    ProcedureWithoutParameters\n    \n    \'Compile error: Argument not optional\n    \'SayHello\n    \n    \'Hello, Test\n    SayHello "Test"\n    \n    Dim formDate As String\n    FormatDate "dd-MM-yyyy", formDate\n    \n    \'20-06-2018\n    Debug.Print formDate\n    \n    \'20-06-2018\n    Debug.Print GetFormattedDate("dd-MM-yyyy")\n    \nEnd Sub\n\nSub ProcedureWithoutParameters()\n    \n    Debug.Print "ProcedureWithoutParameters"\n\nEnd Sub\n\nSub SayHello(name As String)\n    \n    Debug.Print "Hello, " & name\n\nEnd Sub\n\nSub FormatDate(dateFormat As String, ByRef formattedDate As String)\n    \n    Dim curDate As Date\n    curDate = Now\n    \n    formattedDate = format(curDate, dateFormat)\n    \nEnd Sub\n\nFunction GetFormattedDate(dateFormat As String) As String\n    \n    Dim curDate As Date\n    curDate = Now\n    \n    GetFormattedDate = format(curDate, dateFormat)\n    \nEnd Function\n')))}d.isMDXComponent=!0},24370:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZoAAAD4CAMAAADik9C0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAL+cDvDqEHZMACjP5KKjpABMnLDIofjsGwAANhtLUrKeaNHKpwAAWEYAAKhYScnosv//tmlgONOfXHnD3nrb+aPz/Fyj2iZvnycqLaC61svd7wAsfa6MGtC+V7be9eXxuP7+/vDw8Nv//9J+bjmP2r+XMJtXAGhmTjkAOXszAM3JiYTJ6+KvpVeq+yLF9Jm10aBIOKa/29vbvCYAWa2SRpubm2UAOZBmkCYAADF6mtLDJq3Gnz/O8p2400A5HuW6B1fU9GdnZf//29ra2nzH4bmumf+2Zl09TQBcrsnp+r26pNTRSdLh8UMUItmajtuQOuXz/L/V7KnW4MhpV8Pl+Ga2tt+UhrZmACYrWEKInBYWF83O0quEeycAMldYWOTz2YxNRZHi9IBwM7+vbgA5j96kBrKytJC2//+2kKzF39O8JvDaKOPj49vn9L5SPcDh1uWilKK82Mjn+erDV0SL3ue/FrLK5KjBnYxxUS7T/mMAAIODgzoAZa2gi8HBwVONuVEnNbzh9pVrZ7dCK7t7MeKqE5Db/4bEwNPRxH6sgNPT06WCC389NLWhlaurrOvr6+n2/NLT2na+2t3d3u3t7wAAZYtEOqd3cXHH+WGNfti6cKrp8TEpCjOHyOzFv0JCQWCL3qjB3cJeStfl8+vDSqfAvLyyLqakeyVsvHtXe+zMGI1cAOvQIq7HwTQ0M7bbkLnR6bSPCJDC3eWyAZCQkLq6usCFezuOtkQAMbpJM3t5Y9KmCzkAAKPl9cG9hmAsAJSNV7b//41rMbbO55nP3vr0B+/RScfHy82yRaypfqSHV97Xl52iuPPSy/XnKua2LceGNgBltefDC+inmm9vb+vePMLx5aZfAHxQAGa2/6vEwKyGOeesYs10Y1NWZnd1UtvUV2Co3nDW98XmsiZvwZHm/HV1dsXZ7eKbjSTP/M7OzvbkJzx/senGLZA6AP/bkJ85JtuQZuKrAqqMWe3MVgBTnsa3o5NvMkhKTc/OyzF6ujo6ZvHdH8KTIwAAAOFg4EoAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAASRUlEQVR4Xu2dDZxU1XXAn26WSHChGAnBbom7LYoYQ9mglqoU2RGCpAtpS6X1g1iFaRYm9aO46BoH0o8kXbOz1RWbmgJZCR/d4IYgz5hA2IjBFb8CFAMEOxGqtIIuLcRArP31nHPPffPeDDPzmNlZjrvn/3Pn3c9z77v/eW/eDvueTpUiFFUjFlUjFlUjFk9NhyKEG280RlhNxwo3ZlLKGWflR0iOUdOxMfa7ihiu/2N0Y9SsUDOimPURq6bD5SJFCN+Ew8ao0YNGGCk1VVyiCOFHHZ6aiYooVI1YfGouUETxF6pGKqqm13jpM3X5+cxL3FrV9CJLml/OT/MSbq1qepG6l/8tPy/XcWtV04uoGrHUvXxnfk6t5i6lpNQt/68UTyWTyZt9W8vyOm59111Z1JQNHE7bRYMHQKbiYcrkZauTalkGHc0me/eytWa71QE47SO9oz+8n1WdlRs4mQYOkG340HvVUwTUJGHJkzff8BRtn+JCIIQaXqmtI8wKh2LNLeDzBV6mF2jPFw1eSLlT46mBQdZMyNUSofCnYs2IbDV2gDTsHHuXuuU3pEAlVcl/MpunuBAIoWYEreyqztNSMx762N02UoygbPjV2MMsOxT+VJStzdZXrpqbjRR6+Zu8amp8lH28cyFsXqi8bQBk1kISTzoLV3X++eCKhykN5TUvOM7A4aYKsrQp4yrohRt8we7UctHT0BgWuGbNBMep3MCBga3UFDK2wgROjUuNfKPU1PBMEAiLQTECVJq4XoIHMVE4vJmjV07Rvt9Ju8J7VBICam4wBwwQMANquHVNzbAsatZu5X3ktd0K67DmW6s6/wxVQHpV54AaOMPU3Dzcy9Kqg03oh8ABA8WwqtDdtPTU3DvcdKDVAXAQ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"},26955:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAAD2CAMAAACDfe6wAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAL2dC+/oDACAAACttnrEwAA5j5Dr/8C4ohtLUgAANn6sgJLi9Mi7qKNCL6hYSQAAWClxnt+fXCkjB6Kio+ntq1yj2wAAAKK82Do6OayIDtG9WbLK5P7+/szW2zWEyuvr68GKgZm10b+WLTkAOWhmTgAsfadeAH8/Nt7MhgBeqbbO5zbM8jx/seKvpcJeStra2tbeojo6kH3d85ubmyYAWV2p72UAOZ24018sAJA6AJza2mdnZea2Lcvd7x4FA2aQkOW6B9v//54xFursy+7x8/+2ZrmumcfHydLh8c10Y63Gn7/V7DMaGWphN9majtuQOurCShYWF6qQRGa2toSEhNTc4VZLTwBMnDkvDbbR2mEAAJpXAEDW+5BmkACAOt6kBoxNRZPEwLm5uqC61kSL3nZMANbYwL2taazF39W+fPPSy1jT8YxrMbnR6fXqGuWilKqBedjl86FNPycAMrl7MsfH0erSItO+Juru8DoAZTuQwP/bkIxxUTF6uqjBnSjO4+e/FpVrZ9DQ0K2gjNjg5bb//0ZGSOKqE9DZ3z7N8urDV7ahlr1+c9PT1J2iuHK82WSEbjMzM93d3/Dw8LCcZ1EnNa7HwTqQ2+zFv7OztAAAZXwyAKa/26fp8VU5MmCL3smENZvc4shpV+7TRiVsvLpJM+Pj43tXez4AAFNWZdbMQ6fAvKake7ZmANKmC9+Uhs7r8L2ogCYrWOWyAUQAMf//ttTLp7yyLtvp7Ht5Y5CQkajB3ZSNV+zMGLbbkHjA3NLT2vXkJ/HaJ0MUIqSHVzo6ZjyNraurrL5SPWaAOuinmufDC29vbycqLb3Z4I2+2gBUn9J+bgBmtpNvMv//28DBwVONuenDLGCo3qypfv/WZnxQANvbnGfY+XvF4EjQ8nd1UraQOtrr9NrTVTqAOvr0B5A+OcXZ7SZvwcmxRp99C3V1dsG8heKbjSEFA5Db/87OzpPE32a2/6vEwLDIoaqMWeKrAj8oIO3MVjnP9ejJL7dCK7b/283O0gAAAP0PK90AAAEAdFJOU///////////////////////////////AP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wC4CICSAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAR9ElEQVR4Xu2dC3xU5ZXAL20XU7pKZCM/kaTGIsEH6mwLK8nSB7UJ2doCxeVRg1vckWC0ELVSUKNotWSXZqNNIsJgrFjobCKE0tWULWmKMGxnW0ApMFSWwnalWLuwQN2Cra2/nnO+cx8zZB65370JmTl/Ze73fvzn3Dtjcq8YRYIniEiPEJEeYYpsElwyfToJVCKb6oNhSgi9598/iCpJZNOW8EcE12x6AUySyHrxqMWmDyqRTUEuEFzy3HQlUgJSE1NkOecFlzzXpEQWTRC0EJEe8ZemyDsELUSkR4jIJDw5K5KeWU9yaxGZlBUNd6enYQW3FpFJidz90/TcHeHWIjIpItIjIqvuSc+qHkReKsQRWfV/Nle0t7ff6ziarIpw60sv7VFk9ZDhdFzaNhsy+U9RJi0LDLtlNXRUh+Tdq9ep4wID4LSDxI7O4Z2sLy15jZMJ4ATJpk+7qziR7aCo/d7vXkHHK7gQSCuS97Vgt/KRERvuB/s7eFM7aJ1L2+ZRrmcskTDJhpOpWiI0fE9s2J2sxpwgAXONqYms+q4NCgST6vAvXAikFbmbPKwv7ZXI8dDHXKRSqHQmwynSDOHk0PA9Ub0uWV/vRLJCevlazyI/ZopsdVB9cek8OOwomTIbMusgiaffvPWlP27Lf4rSUN66wzCGDFdVkKVDNVdBLzzgC3anlktfhsago3XDScMoeY0HBhZQU8iYFWpge15q5JiltZVXgsCwOCiOAJVqXCvBk6hReHi1RqucRnuolLbCOyLiRLJJIM4jiOTWra0octk5Itct4BWxiQX5W1s3PL++9N9QHKTXl85uhXOt9d7hVhYcbUX30A/ZQcXgALqrlixya+vDw1UH2guAk2Bzs4IHtuelVjS8OZla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"}}]);