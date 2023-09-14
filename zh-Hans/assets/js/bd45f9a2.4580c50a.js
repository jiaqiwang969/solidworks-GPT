"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[19219],{3905:(e,o,r)=>{r.d(o,{Zo:()=>m,kt:()=>f});var t=r(67294);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=t.createContext({}),p=function(e){var o=t.useContext(c),r=o;return e&&(r="function"==typeof e?e(o):i(i({},o),e)),r},m=function(e){var o=p(e.components);return t.createElement(c.Provider,{value:o},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||l[d]||a;return r?t.createElement(f,i(i({ref:o},m),{},{components:r})):t.createElement(f,i({ref:o},m))}));function f(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61211:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=r(87462),n=(r(67294),r(3905));const a={layout:"sw-tool",title:"SOLIDWORKS macro to rename configurations based on custom property",caption:"Rename Configurations Based On Custom Property",description:"Macro renames all configurations of assembly or part into the value of the specified configuration specific custom property",image:"sw-configuration-name.png",labels:["configuration","custom property","rename","solidworks api","utility"],group:"Custom Properties","redirect-from":["/2018/04/solidworks-api-model-rename-configurations-based-on-custom-prp.html"]},i=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-configurations-based-custom-property/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-configurations-based-custom-property/index",title:"SOLIDWORKS macro to rename configurations based on custom property",description:"Macro renames all configurations of assembly or part into the value of the specified configuration specific custom property",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-configurations-based-custom-property/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-configurations-based-custom-property",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-configurations-based-custom-property/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-configurations-based-custom-property/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-configurations-based-custom-property/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"SOLIDWORKS macro to rename configurations based on custom property",caption:"Rename Configurations Based On Custom Property",description:"Macro renames all configurations of assembly or part into the value of the specified configuration specific custom property",image:"sw-configuration-name.png",labels:["configuration","custom property","rename","solidworks api","utility"],group:"Custom Properties","redirect-from":["/2018/04/solidworks-api-model-rename-configurations-based-on-custom-prp.html"]},sidebar:"tutorialSidebar",previous:{title:"Macro to rename dimensions in the SOLIDWORKS drawing view",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename/"},next:{title:"Macro to rename SOLIDWORKS bodies of cut-list items using the predefined template",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rename-cut-list-bodies/"}},c={},p=[],m={toc:p},u="wrapper";function l(e){let{components:o,...a}=e;return(0,n.kt)(u,(0,t.Z)({},m,a,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This macro renames all configurations of assembly or part into the value of the specified configuration specific custom property using SOLIDWORKS API."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Configuration name in the configuration properties manager page",src:r(50799).Z,width:"149",height:"200"}),"{ width=200 }"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Run the macro and enter the name of the custom property to read the value from"),(0,n.kt)("li",{parentName:"ul"},"Macro will traverse all configurations and rename them based on the corresponding value of the configuration specific custom property"),(0,n.kt)("li",{parentName:"ul"},"If property doesn't exist in configuration or value is empty - configuration is not renamed  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim prpName As String\n        \n        prpName = InputBox("Specify the property name to read the value from")\n        \n        If prpName <> "" Then\n            \n            Dim vConfNames As Variant\n            Dim i As Integer\n            \n            vConfNames = swModel.GetConfigurationNames()\n            \n            For i = 0 To UBound(vConfNames)\n                    \n                Dim swConf As SldWorks.Configuration\n                Set swConf = swModel.GetConfigurationByName(vConfNames(i))\n                \n                Dim prpVal As String\n                \n                If swConf.CustomPropertyManager.Get3(prpName, False, "", prpVal) Then\n                    \n                    If prpVal <> "" Then\n                        swConf.Name = prpVal\n                    End If\n                    \n                End If\n                \n            Next\n            \n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n')))}l.isMDXComponent=!0},50799:(e,o,r)=>{r.d(o,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAADICAMAAADWbFNUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAKDLlACXANTq1O5cXtkAAACeAOT83gBgkpbM0wAAR2mXq9Xw38zMzG5fhqSkpfPExFhrV/TwyLGfZUkDAM7czPby7D8ATez7/PT09Pf39/P1+Pn4976qZkpgg5d2Xu91d8DBwfLpw46Bg/7+/odWAIeov6HL6fPZ2JdiALeyqOLq6wABJQAqZVhMVJl6QkWLsL6iinN2ms/g7+bMotXTy7zDypiioZ2bi4BsXLLFqKq6y2Q5ANPc2/Xq6VFoSuiWlNwwF83y+8rHvpCBcC9CXKCWghcAAOnKzsy6qMPp74Svy+Tk43yBpLiqfrXP4FGqLtHJokpvleXRu/Dw8HN+jgA4io2HmSNsl1yTvG+gx+Hr80gtMrOajYtqe2xkZJFmMMW1id9jW/H56BMnJVRQcM3CiL/R6oqguihQhaSqsaOcgpOxy6mQc8zd49HWr6jM07aHIW6KpAAQbdDQ0KezucOtdM/VwHBCKVaFq+np59XW1l96mdrV0dPT04KAh+vr7C8xU/L58PXl0ZuMXB0+AMzClpSwuO/p0+Tf0MW5mWAjALa2tgROfHictr3d3+Pdr+PdxO5KTdDs/rfOwd7j7b2roISRm5OSkVNldYuXnLnU1La9xMvR1IGjw4uMinxVbvfw3dfGrnCSt8Pi+358eqjJ3igAKZqOetrx/HBrc+vz4u2zsN7e37i5uB6Ar8q6eOz1+fz60oRxa8i8tHyNkqqGWgBnr5W834hjSV5yi+/l3vnt7fz86QA/caymf013pMyiY9nXuWxQU5yzxde5mGWGqEKoANfOmIRgGn5CAAAAX3Vxidra3MWql8PR3Orku8zs4Iu21pSkup3D39rbz7CnlUJNXaOCdJ2cm7qPa7LV8dvVqF+rS+bRsLqVhMHKz5eQhF8GAPj5+ezu8gAAOT1MeK6srZiRnae/09PLwr3d8GxjQQAjVP393NTl+joaXYucrOwAAOPz+tTo732SqLqJOc2sgZq70K2fcsXJwBI6aywBAABUkL23sQAAAOd2cQAAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAP70lEQVR4Xu2dDVwTR6LA9x7XV6vk8moll4RVLzhVi1atVFApXK+oV0qUIqEqnB+cFVuL1KN+lAQhBQ4JRZTDD1SQA8VXtOEMoq1i1Fr1eWoERayID7GDjYKHxyEVqO3vZmYnEDSWKIHs/X75AzsfO7v5Z3Z2dneyGxgpH+G5FYA0wgc6rHYX2VcLALN6MVlJsozAfA4EgKVRBEqZJ02wsEvuY0oRupZ8BKhOMwplNGFWV8gKCIXCOEBSMD8+3oNbD5qy+fGTNzeTJCvteEesWpdXQAthYN6NXPOFSITAql0TCwpZ86yHUOfmRLbKskzr7rDKzTUa44uE7xrwHJDKeKcuBhIJlErQJPHBmspaHYuiKCFxJaEEis606mVhKBeyKA9KYcqDE0nvoLl4IYCLQYjLS1zzvg08LGvmSkpcudfrAhDKI73Ta43LqVaHVXxWQQGqLzVuXjDvTCjaGksZxtuN+YQZ8RIz+ujLYQuYP4+7v1bx4nOD3705mWHSX2EYGdNwnmEqipmpTABEVndPno1gmG0HmZsee/szN98KZpiLEczNT5nRJcwb15mbi1cyTKaFGgNVEjann49cyG2pTqsCtAWN8yVaYlX67S4A3ZjMmo9Wjb77/bi8B2+8esT/pvhP48JnKxY8t/IdcNgPaZ7ZVczUDqp2G+3y+51fzdbBlEEME3j6o+aTR8SDv4j4kV0Q/VLMlbMRH4kPf9rgxuQwFWfOvTjAg75wF0CVQtSyQml4xGo3bu0yoRBvQSj6+2yozydWNzO/H5f44C1k1V/8/bjwtXWorr4A3x+79vLGM88VM56DGjqtHngAEPGj7v5a8covImazC3acCQDqiH660m+r3RgB08AqRJt+H2iprowCda1KXhX3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"}}]);