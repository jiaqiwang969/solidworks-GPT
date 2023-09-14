"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[61746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Best Practices for developing VBA applications",caption:"Best Practices",description:"Explanation of best practices for making VBA applications reliable, maintainable and stable",sidebar_position:0,image:"git-extensions-vba-macro.png"},r=void 0,s={unversionedId:"codestack/visual-basic/best-practices/index",id:"codestack/visual-basic/best-practices/index",title:"Best Practices for developing VBA applications",description:"Explanation of best practices for making VBA applications reliable, maintainable and stable",source:"@site/docs/codestack/visual-basic/best-practices/index.md",sourceDirName:"codestack/visual-basic/best-practices",slug:"/codestack/visual-basic/best-practices/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/visual-basic/best-practices/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/visual-basic/best-practices/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Best Practices for developing VBA applications",caption:"Best Practices",description:"Explanation of best practices for making VBA applications reliable, maintainable and stable",sidebar_position:0,image:"git-extensions-vba-macro.png"},sidebar:"tutorialSidebar",previous:{title:"best practices",permalink:"/solidworks-GPT/zh-Hans/docs/category/best-practices"},next:{title:"hosting",permalink:"/solidworks-GPT/zh-Hans/docs/category/hosting"}},l={},c=[{value:"Descriptive Names",id:"descriptive-names",level:2},{value:"Avoid Magic String And Numbers",id:"avoid-magic-string-and-numbers",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Errors Processing",id:"errors-processing",level:3},{value:"&#39;Fail Fast&#39; Approach",id:"fail-fast-approach",level:3},{value:"Entry Point",id:"entry-point",level:2},{value:"Independent Functions And Modules",id:"independent-functions-and-modules",level:2},{value:"Dependency On Members",id:"dependency-on-members",level:3},{value:"Dependency On Environment",id:"dependency-on-environment",level:3},{value:"Documentation",id:"documentation",level:2},{value:"Referencing 3rd Party Type Libraries",id:"referencing-3rd-party-type-libraries",level:2},{value:"Use Asserts",id:"use-asserts",level:2},{value:"Use Unit Tests",id:"use-unit-tests",level:2},{value:"Version Control",id:"version-control",level:2},{value:"Stay Within The Scope",id:"stay-within-the-scope",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In nowadays Visual Basic is mainly used in VBA macros format with a minor exception of several legacy applications."),(0,i.kt)("p",null,"Although VBA macros are usually small applications, those are still playing a major role in millions of organizations worldwide. As macros are applications, they should be considered as such and all the practices for writing reliable, maintainable and stable application should still be applied when developing macros."),(0,i.kt)("p",null,"Below is the list of guidelines for improving the quality of the macro. These guidelines applies to any type of the macro, e.g. MS Word, MS Excel, SOLIDWORKS, Autodesk Inventor etc."),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://blog.xarial.com/vba-macro-best-practices/"},"5 best practices to make your VBA macro great")," blog article for the video demonstration of the practical application of the below guidelines."),(0,i.kt)("h2",{id:"descriptive-names"},"Descriptive Names"),(0,i.kt)("p",null,"When developing any application (VBA is not an exception) try to use as descriptive as possible names for variables, functions, procedures, modules, classes and events. "),(0,i.kt)("p",null,"Prefer to use descriptive names instead of comment"),(0,i.kt)("p",null,"Use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},'Dim dayOfTheWeek As String\ndayOfTheWeek = "Monday"\n')),(0,i.kt)("p",null,"instead of"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},'\'day of the week\nDim x As String\nx = "Monday"\n')),(0,i.kt)("p",null,"Do not overload code with comments for the obvious snippets. Comment in the snippet below is redundant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},"Function GetCircleArea(radius As Double)\n    const PI As Double = 3.14\n\n    'Finding the area of the circle\n    Dim area As Double\n    area = PI * radius ^ 2\n    GetCircleArea = area\nEnd Function\n")),(0,i.kt)("h2",{id:"avoid-magic-string-and-numbers"},"Avoid Magic String And Numbers"),(0,i.kt)("p",null,"Avoid using unnamed string and numbers (",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Magic_number_(programming)"},"magic numbers"),"), instead declare the constants with a ",(0,i.kt)("a",{parentName:"p",href:"#descriptive-names"},"descriptive name")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},"Const PI As Double = 3.14\nDim circArea As Double\ncirArea = PI * rad ^ 2\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},'Const OUT_FOLDER_PATH As String = "D:\\out"\nExport OUT_FOLDER_PATH\n')),(0,i.kt)("h2",{id:"error-handling"},"Error Handling"),(0,i.kt)("p",null,"When developing code, avoid 'hiding the problem' as this may potentially cause more damage than crash of the application."),(0,i.kt)("p",null,"For example, the following snippet checks if the ",(0,i.kt)("em",{parentName:"p"},"swModel")," object is not nothing and performs important operation. However, having the ",(0,i.kt)("em",{parentName:"p"},"swModel")," equal to Nothing is possible scenario and skipping the export without notifying the user, will keep the problem unnoticed and user will not be able to understand why ",(0,i.kt)("em",{parentName:"p"},"DoSomeImportantWorkWithModel")," was not performed on this model."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},"Dim swModel As SldWorks.ModelDoc2\nSet swModel = swComp.GetModelDoc2()\nIf Not swModel Is Nothing Then\n    DoSomeImportantWorkWithModel swModel\nEnd If\n")),(0,i.kt)("h3",{id:"errors-processing"},"Errors Processing"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"On Error Resume Next")," directive should be used with caution. Aim to process all exceptions in your code. I would recommend to handle all errors in the centralized (usually the entry function)."),(0,i.kt)("p",null,"The below format is not a regular VBA format for handling an error and it is trying to emulate try-catch-finally syntax from other languages, such as C#, VB.NET, C++, JavaScript etc., but it allows to make code more readable and easy to understand:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DoWork() is a main function performing all the operations"),(0,i.kt)("li",{parentName:"ul"},"If at any point exception is thrown, code will be redirected to ",(0,i.kt)("em",{parentName:"li"},"catch_")," block, where error can be processed (e.g. logged or message box is displayed)"),(0,i.kt)("li",{parentName:"ul"},"Otherwise, code will be redirected to ",(0,i.kt)("em",{parentName:"li"},"finally_")," block and exit the macro once the ",(0,i.kt)("em",{parentName:"li"},"DoWork")," routine is completed")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Sub main()\n\ntry_:\n    On Error GoTo catch_\n    \n    DoWork()\n\n    GoTo finally_:\ncatch_:\n    MsgBox Err.Description\nfinally_:\n\nEnd Sub\n")),(0,i.kt)("h3",{id:"fail-fast-approach"},"'Fail Fast' Approach"),(0,i.kt)("p",null,"To fix the above issue we can go with 'Fail Fast' approach, i.e. terminate the execution immediately, notifying the caller that something went wrong:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},'If Not swModel Is Nothing Then\n    DoSomeImportantWorkWithModel swModel\nElse\n    Err.Raise vbError, "", "Model of the component is null. Execution terminated"\nEnd If\n')),(0,i.kt)("p",null,"And it is up to the calling function to decide what to do with this case. Depending on the requirement application can proceed and consider this as safe error or it can log the error or display the message to the user."),(0,i.kt)("h2",{id:"entry-point"},"Entry Point"),(0,i.kt)("p",null,"Most of the VBA macro enabled applications, such as MS Word, MS Excel, SOLIDWORKS, Autodesk Inventor would consider any parameterless function as a potential entry point of the macro."),(0,i.kt)("p",null,"The code below has 3 parameterless functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"main - Actual expected entry function. Running this function will result into expected outcome"),(0,i.kt)("li",{parentName:"ul"},"Init - Function which initialized data, required to do work. This function itself doesn't perform the work. Running this as an entry point will not cause errors, but it will not produce any results"),(0,i.kt)("li",{parentName:"ul"},"DoWork - Function which performs the work, however, it requires InitData to be initialized. Running this function directly will most likely result into the 'Run time error 91: Object variable block variable set'")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim InitData As Object\n\nSub main()\n    Init\n    DoWork\nEnd Sub\n\nSub Init()\n    'Initializes InitData\nEnd Sub\n\nSub DoWork()\n    'Consumes InitData to perform the work\nEnd Sub\n")),(0,i.kt)("p",null,"All the above 3 functions can be selected when running the macro"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3 potential entry points of the macro",src:n(92601).Z,width:"440",height:"376"})),(0,i.kt)("p",null,"To prevent the potential issues, keep parameterless functions only for entry points. To make the function with parameter, without compromising an existing code, use optional parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim InitData As Object\n\nSub main()\n    Init\n    DoWork\nEnd Sub\n\nSub Init(Optional dummy As Variant = Empty)\n    'Initializes InitData\nEnd Sub\n\nSub DoWork(Optional dummy As Variant = Empty)\n    'Consumes InitData to perform the work\nEnd Sub\n")),(0,i.kt)("p",null,"With the setup above, only one function will be available for running:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Single entry point in the macro",src:n(26956).Z,width:"441",height:"377"})),(0,i.kt)("h2",{id:"independent-functions-and-modules"},"Independent Functions And Modules"),(0,i.kt)("p",null,"Try to keep functions and modules as independent as possible from another functions, module level variables and environment. This would make a consumption of the function more predictable and function can be reused."),(0,i.kt)("h3",{id:"dependency-on-members"},"Dependency On Members"),(0,i.kt)("p",null,"In the below code snippet the ",(0,i.kt)("em",{parentName:"p"},"swModel")," variable is declared at the module level which makes it accessible from within the ",(0,i.kt)("em",{parentName:"p"},"ProcessDocument")," function. Variable is initialized in the ",(0,i.kt)("em",{parentName:"p"},"main")," function. It means that ",(0,i.kt)("em",{parentName:"p"},"ProcessDocument")," is dependent on the ",(0,i.kt)("em",{parentName:"p"},"swModel")," and will be only able to work with active document (or the one assigned to ",(0,i.kt)("em",{parentName:"p"},"swModel"),"). This function cannot be reused for another purpose, e.g. processing the model of the component in the assembly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swModel As SldWorks.ModelDoc2\n\nSub main()\n    Set swModel = ActiveDoc\n    ProcessDocument\nEnd Sub\n\nSub ProcessDocument()\n    'Do work with swModel\nEnd Sub\n")),(0,i.kt)("p",null,"Instead the above code could be rewritten to the following code. Instead of declaring the model level variable, it can be defined as the parameter of the function, thus removing the dependency. Now ",(0,i.kt)("em",{parentName:"p"},"ProcessDocument")," function can be used with any pointer to ",(0,i.kt)("em",{parentName:"p"},"SldWorks.ModelDoc2")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Sub main()\n    ProcessDocument ActiveDoc\nEnd Sub\n\nSub ProcessDocument(model As SldWorks.ModelDoc2)\n    'Do work with model\nEnd Sub\n")),(0,i.kt)("h3",{id:"dependency-on-environment"},"Dependency On Environment"),(0,i.kt)("p",null,"Another example is dependency on environment. Function below saves the value from the Excel cell into the text file. It takes 2 parameters for cell and the file path. However, this function doesn't perform any Excel specific functionality rather than calling the ",(0,i.kt)("em",{parentName:"p"},"Value")," property on the cell to extract the text. But because of this, ",(0,i.kt)("em",{parentName:"p"},"CreateTextFile")," function is dependant on the Excel environment and cannot be reused in other scenarios and applications (such as MS Word or Autodesk Inventor)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Sub CreateTextFile(cell As Excel.Range, fileName As String)\n    Dim text As String\n    text = cell.Value\n    'write text to fileName\nEnd Sub\n")),(0,i.kt)("p",null,"Instead the function can be changed to the following code, where the caller is responsible for preparing the text for writing. This function can then be copied to another macros to perform similar functionality if required."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Sub CreateTextFile(text As String, fileName As String)\n    'write text to fileName\nEnd Sub\n")),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"Documentation the functionality of your application could be very useful for the users of your software and for other collaborators of your project. The documentation can be as simple as text file, Word or PDF document or complete multi page technical site. "),(0,i.kt)("p",null,"For VBA macros simple header at the top of the macro can be sufficient. Specify the author of the macro, license, contact details and brief description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged-bottom","jagged-bottom":!0},"' -------------------------------------------------\n' Created By Artem Taturevych (info@codestack.net)\n' License: https://www.codestack.net/license/\n' Macro will display the callouts with the diameter values of all selected circular edges in the 3D model\n' -------------------------------------------------\n\nSub main()\n")),(0,i.kt)("h2",{id:"referencing-3rd-party-type-libraries"},"Referencing 3rd Party Type Libraries"),(0,i.kt)("p",null,"When just few objects or functions from the 3rd party type library are used (e.g. Microsoft Scripting Runtime, Microsoft Excel, etc.) and this is not a primary target of automation, consider using them with ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/variables/declaration#late-binding"},"Late Binding")," instead of an ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/variables/declaration#early-binding"},"Early Binding")),(0,i.kt)("p",null,"For example Excel VBA macro needs to create a ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/data-sets/dictionary/"},"dictionary")," object to hold key-value pairs. Instead of referring the ",(0,i.kt)("em",{parentName:"p"},"Microsoft Scripting Runtime")," reference and using the following code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim dict As Scripting.Dictionary\nSet dict = New Scripting.Dictionary\n")),(0,i.kt)("p",null,"It is possible to avoid adding the ",(0,i.kt)("em",{parentName:"p"},"Microsoft Scripting Runtime")," reference and instead use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim dict As Object\nSet dict = CreateObject("Scripting.Dictionary")\n')),(0,i.kt)("p",null,"Another example is SOLIDWORKS VBA macro, which primarily automates SOLIDWORKS, while some Excel API invocation might be required. In this case Excel can be created as late bound object and no references to Excel library need to be added to the macro."),(0,i.kt)("p",null,"This approach allows to simplify the compatibility between different versions of library and avoid ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/troubleshooting/macros/missing-solidworks-type-library-references/"},"missing references issue")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Late binding has a limitation and some of the methods cannot be invoked with late binding, in this case early binding is an only option")),(0,i.kt)("h2",{id:"use-asserts"},"Use Asserts"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Debug.Assert")," is a mechanism of displaying an assert when the condition is not met. Asserts are developer (not user) facing messages and intended to be used to validate conditions which are not the part of the use or misuse of the application. Assert should indicate the error in the code logic, but not the error in the use of the software."),(0,i.kt)("p",null,"For example the following SOLIDWORKS macro suppose to perform an operation on the active document. However it is a valid scenario where ActiveDoc can return ",(0,i.kt)("em",{parentName:"p"},"Nothing"),". If macro runs when no document open (and user can do this), this would result in Nothing. So assert would not be an appropriate here to indicate the error, rather an exception would fit here better."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swModel As SldWorks.ModelDoc2\nSet swModel = swApp.ActiveDoc\nIf Not swModel Is Nothing Then\n    \'do work\nElse\n    Err.Raise vbError, "", "No active document found"\nEnd If\n')),(0,i.kt)("p",null,"On the other hand ",(0,i.kt)("em",{parentName:"p"},"GetTitle")," function below, runs a custom code to find the title of the document. It is assumed that regardless of the circumstances, title can never be an empty string, so empty string returned from ",(0,i.kt)("em",{parentName:"p"},"GetTitle"),' indicates the logic error. Assert would be thrown if its condition is False (title  "").'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim title As String\ntitle = GetTitle(model);\nDebug.Assert title <> ""\n')),(0,i.kt)("h2",{id:"use-unit-tests"},"Use Unit Tests"),(0,i.kt)("p",null,"Visual Basic is not designed for unit tests, there are several 3rd party solutions available for unit tests implementation."),(0,i.kt)("p",null,"As a workaround, simple validation function can be implemented in the macro to emulate unit testing. This testing function should be run manually."),(0,i.kt)("p",null,"In the below code there are 2 functions which are the part of the macro logic:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SortArray - sorts input array in ascending or descending order and returns result"),(0,i.kt)("li",{parentName:"ul"},"CountWords - counts the number of words in the specified test")),(0,i.kt)("p",null,"Those functions can be tested independently as units (unit tests)"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"UnitTests")," functions defines and validates several test cases. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Sub main()\n    \'main logic of the application which utilizes SortArray and CountWords\nEnd Sub\n\nSub UnitTests(Optional dummy As Variant = Empty)\n    \n    \'test1\n    res1 = SortArray(Array("C", "B", "A"), True)\n    Debug.Assert res1(0) = "A" And res1(1) = "B" And res1(2) = "C"\n    \n    \'test2\n    res2 = SortArray(Array("C", "B", "A"), False)\n    Debug.Assert res2(0) = "C" And res2(1) = "B" And res2(2) = "A"\n    \n    \'test3\n    Dim res3 As Integer\n    res3 = CountWords("Hello World")\n    Debug.Assert res3 = 2\n    \nEnd Sub\n\nFunction SortArray(arr As Variant, asc As Boolean) As Variant\n    \'sorts an array and returns the result\nEnd Function\n\nFunction CountWords(text As String) As Integer\n    \'counts the words in the text\nEnd Function\n')),(0,i.kt)("p",null,"For example, ",(0,i.kt)("em",{parentName:"p"},"test1")," runs the ",(0,i.kt)("em",{parentName:"p"},"SortArray")," functions and supplies an array of ","[C, B, A]"," requesting the sorting in ascending order. The expected outcome is an array ","[A, B, C]"," which is a validated in the ",(0,i.kt)("em",{parentName:"p"},"Debug.Assert")," call. If the condition is false, assert will be thrown indicating the failure of the test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},'\'test1\nres1 = SortArray(Array("C", "B", "A"), True)\nDebug.Assert res1(0) = "A" And res1(1) = "B" And res1(2) = "C"\n')),(0,i.kt)("h2",{id:"version-control"},"Version Control"),(0,i.kt)("p",null,"Control Version Systems (CVS) for source code provide a centralized management of the code in the plain text formats. Such systems include, but not limited to Git, SVN, Mercurial."),(0,i.kt)("p",null,"Most of VBA macro engine implementations in various applications such as MS Word, MS Excel, SOLIDWORKS, Autodesk Inventor store macro files either as embeded into a file or in the binary format which makes it unpractical to use with Control Version Services."),(0,i.kt)("p",null,"It is however still beneficial and recommended to extract a text copy of the macro code and add this under the revision control."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VBA macro in the GIT repository browsed using the GIT Extensions client",src:n(61166).Z,width:"1038",height:"576"})),(0,i.kt)("h2",{id:"stay-within-the-scope"},"Stay Within The Scope"),(0,i.kt)("p",null,"Try to keep your applications within the capacity of the technology and programming language. For a simple applications, scripts and VBA macros can be sufficient, but for more complicated functionalities where database connection, web service calls, data processing and analyzing etc. is required consider switching to more sophisticated environments (add-ins, stand-alone applications, web services) and OOP languages, such as VB.NET, C#, C++, Java etc."))}u.isMDXComponent=!0},61166:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-extensions-vba-macro-23ef5c64916732c47c65dafb2b7ad136.png"},92601:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-macro-entry-points-adedc072b199da468f35360d22bf4fd1.png"},26956:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/single-entry-point-480ed897a09d2da6e2dd895ef6402e08.png"}}]);