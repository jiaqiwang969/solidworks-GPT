"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[95214],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>M});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),s=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(m.Provider,{value:n},e.children)},A="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),A=s(t),c=o,M=A["".concat(m,".").concat(c)]||A[c]||p[c]||i;return t?a.createElement(M,l(l({ref:n},u),{},{components:t})):a.createElement(M,l({ref:n},u))}));function M(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=c;var r={};for(var m in n)hasOwnProperty.call(n,m)&&(r[m]=n[m]);r.originalType=e,r[A]="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},21326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const i={title:"Enumerations in Visual Basic (VBA)",caption:"Enumerations",description:"Introduction to enumeration data types (collection of predefined long constants) in Visual Basic",image:"enum-icon-intellisense.png"},l=void 0,r={unversionedId:"codestack-clone/visual-basic/data-structures/enumerators/index",id:"codestack-clone/visual-basic/data-structures/enumerators/index",title:"Enumerations in Visual Basic (VBA)",description:"Introduction to enumeration data types (collection of predefined long constants) in Visual Basic",source:"@site/docs/codestack-clone/visual-basic/data-structures/enumerators/index.md",sourceDirName:"codestack-clone/visual-basic/data-structures/enumerators",slug:"/codestack-clone/visual-basic/data-structures/enumerators/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/visual-basic/data-structures/enumerators/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/visual-basic/data-structures/enumerators/index.md",tags:[],version:"current",frontMatter:{title:"Enumerations in Visual Basic (VBA)",caption:"Enumerations",description:"Introduction to enumeration data types (collection of predefined long constants) in Visual Basic",image:"enum-icon-intellisense.png"},sidebar:"tutorialSidebar",previous:{title:"Data Structures in Visual Basic",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/visual-basic/data-structures/"},next:{title:"User Defined Types in Visual Basic",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/visual-basic/data-structures/types/"}},m={},s=[{value:"Declaration and assignment of enumerators",id:"declaration-and-assignment-of-enumerators",level:2},{value:"Traversing enumerator values",id:"traversing-enumerator-values",level:2},{value:"Flag enumerator (multiple options)",id:"flag-enumerator-multiple-options",level:2}],u={toc:s},A="wrapper";function p(e){let{components:n,...i}=e;return(0,o.kt)(A,(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enumerator type in intelli-sense",src:t(22182).Z,width:"662",height:"210"}),"{ width=350 }"),(0,o.kt)("p",null,"Enumerator is a grouped structure of named constants of type ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/variables/standard-types#long"},"Long")),(0,o.kt)("p",null,"The main benefit of enumerator vs constant is an ability to group the constant under single data type and allow an automatic incrementing of values."),(0,o.kt)("p",null,"Enumerators are usually used to declare different options or actions (e.g. add, remove, delete, move, copy etc. )."),(0,o.kt)("h2",{id:"declaration-and-assignment-of-enumerators"},"Declaration and assignment of enumerators"),(0,o.kt)("p",null,"Enumerator can be declared using ",(0,o.kt)("strong",{parentName:"p"},"Enum - End Enum")," code block where each constant declared on new line"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Enum SampleEnum_e\n    Val1\n    Val2\n    Val3\nEnd Enum\n")),(0,o.kt)("p",null,"Values of constant can be assigned explicitly or implicitly (automatically). First automatic value is 0 and it is incremented by 1 for every next item."),(0,o.kt)("p",null,"Enumerator is a value type and can be assigned to the variable. It is possible to use enumerator value directly or via enumerator name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Dim enumVal As SampleEnum_e\nenumVal = SampleEnum_e.Val1 'using enumerator name\nenumVal = Val1\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It is recommended to explicitly use the name of the enumerator. It makes the code more readable and resolves the potential ambiguity if another enumerator or variable has the same name.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Enum MyEnum_e\n    Val1 'automatically assigned value 0\n    Val2 = 5 'explicitly assigned value 5\n    Val3 'next automatically assigned number 6\nEnd Enum\n\nEnum MyIncrementEnum_e\n    Val1 '0\n    Val2 = Val1 + 3 '3\n    Val3 = Val2 + 4 '7\nEnd Enum\n\nSub main()\n    \n    '0 5 6\n    Debug.Print MyEnum_e.Val1 & \" \" & MyEnum_e.Val2 & \" \" & MyEnum_e.Val3\n    \n    '0 3 7\n    Debug.Print MyIncrementEnum_e.Val1 & \" \" & MyIncrementEnum_e.Val2 & \" \" & MyIncrementEnum_e.Val3\n    \n    'assigning the value to the variable\n    Dim val As MyEnum_e\n    val = MyEnum_e.Val2\n    \nEnd Sub\n")),(0,o.kt)("h2",{id:"traversing-enumerator-values"},"Traversing enumerator values"),(0,o.kt)("p",null,"As enumerators are Long constants it is possible to traverse all the items by knowing the first and last one."),(0,o.kt)("p",null,"Visual basic allows to declare the special enumerators which are not visible in intelli-sense but still valid values. In order to make the item invisible it is required to use underscore _ symbol at the beginning of the name. For example adding ","[_First]"," and ","[_Last]"," elements at the beginning and the end of the enumerator would allow defining the boundaries of enumerator values for traversing."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Only visible enumerator values displayed in intelli-sense",src:t(47352).Z,width:"320",height:"109"}),"{ width=250 }"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Enum MyFirstLastEnum_e\n    [_First]\n    Val1\n    Val2\n    Val3\n    [_Last]\nEnd Enum\n\nSub TraversingEnumValues()\n    \n    Debug.Print MyFirstLastEnum_e.[_First] '0\n    Debug.Print MyFirstLastEnum_e.[_Last] '4\n        \n    'Traverse all enumerator values\n    '1 2 3\n    For enumVal = MyFirstLastEnum_e.[_First] + 1 To MyFirstLastEnum_e.[_Last] - 1\n        Debug.Print enumVal\n    Next\n    \nEnd Sub\n")),(0,o.kt)("h2",{id:"flag-enumerator-multiple-options"},"Flag enumerator (multiple options)"),(0,o.kt)("p",null,"Enumerators can be useful to hold multiple options using bitmasks."),(0,o.kt)("p",null,"This technique allows combining multiple options within one variable using plus + symbol. it is possible to identify if the specific option was set using ",(0,o.kt)("strong",{parentName:"p"},"And")," bitwise operator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Enum MyOptionEnum_e\n    Option1 = 1 '2 ^ 0\n    Option2 = 2 '2 ^ 1\n    Option3 = 4 '2 ^ 2\n    Option4 = 8 '2 ^ 3\n    Option5 = 16 '2 ^ 4\nEnd Enum\n\nEnum MyOptionExpEnum_e\n    Option1 = 2 ^ 0 '1\n    Option2 = 2 ^ 1 '2\n    Option3 = 2 ^ 2 '4\n    Option4 = 2 ^ 3 '8\n    Option5 = 2 ^ 4 '16\nEnd Enum\n\nSub FlagEnums()\n\n    Dim opts As MyOptionEnum_e\n    \n    '1 2 4 8 16\n    Debug.Print MyOptionExpEnum_e.Option1 & \" \" & MyOptionExpEnum_e.Option2 & \" \" & MyOptionExpEnum_e.Option3 & \" \" & MyOptionExpEnum_e.Option4 & \" \" & MyOptionExpEnum_e.Option5\n    \n    opts = MyOptionEnum_e.Option1 + MyOptionEnum_e.Option3 + MyOptionEnum_e.Option4\n\n    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option1)  'True\n    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option2)  'False\n    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option3)  'True\n    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option4)  'True\n    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option5)  'False\n    \nEnd Sub\n\nFunction IsFlagSet(options As MyOptionEnum_e, value As MyOptionEnum_e) As Boolean\n    IsFlagSet = options And value\nEnd Function\n")))}p.isMDXComponent=!0},22182:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApYAAADSCAMAAADHenBrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAADrC2wAArf//AGYAAAD//5mZmdvCOmYAZgAAZv/rkLS0tJBmAACttjoAANv/tpA6ZgA6kGaAOpC2kP7+/gCAAJDr/8rKzP+2rXh3d5A6ADoAOgBmtlRUVDo6kDOZ/6Cr/9v//5WVlWaAAP/btgAAOjoAZuzs7JA6On/e/wBmZjoArf//1ma2///bkNbW2PDw8NuQlzqtth4eHsG8/9uQOtu2Zv8AAGYAOjqAALZmgAAAgLatADOt/zqXkLbb/zo6wrb/tmY6kMxmAO7u7maQkABm1gA6wpCQZv/p/1q8/2a2tsDAwLZmOuLi4//WZv//tkJCQjqQ2y0tLbb//zoAgGaAZgCXkM7O0GYAgJA6l6enp1qZ/3+Z/+HO/5CXAACAOsTExwAAl2YArTqAOmNjY4B/f+jo6P+2Zma229ra3DqQ65CUOtLS1aC8/zo6AGaQwpDbtr6+vmYAl5+fnwCAgDoAl2bW/4AAALb/22ZmZoqJiTo6OpA6gKDu/+Hu/8Hu/3FxcYCAALZmAP/bwt7e3//b2wCAZv//22attsHO/5Db/zqXAMH//6+vrzQzM7y8wKDO/1rO/yUlJcHe/+H//4CAgGlpac/P0QAAAJkzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///wVgItQAAACadFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wDLsIVjAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAV9ElEQVR4Xu2djWPcRpXARevUTXoEfMi163Ni4pK4vdrOGrrX1utAoaFJDrPeug4kcdOQcMHGaQ4uCe1d8wHBDuTOJIVAXf+5975GmtFK9q6t3Z3Vvl9rrTQz0m7ZH29mtHpSECqKd6iWioeoloqHqJaKh6iWioeoloqHqJaKh6iWioeoloqHqJaKhxRFy5FFWbFotEzxjmwtZyvvy5q/lIMgOL6Ja/lruTqAy3XVuBMYLScvVirPjd+QLWK4XkvUAJmS7WxqfUFw8IcvLslmJtNHZSUVUzt9OPVtp0/senxk5/fIoNZH79bgWyj5IlpOXoQvYbiym5YmhOyq5fRhaLIaHMxJyzB8DWKimBLDn2ZX9qRlWY6tvX4nEC1Zwdkb4UzlDPbf18CC4feHK5WKa0KkZTkYgBCGHSisQQmswsp6MLpKhT+lnpVCDcVNeI33QGuDYBSOgnUAVlNARAXidlYtaRnWMPquQxF9CtqD9sGGZI/1HlGZdZSojFezPhVhdDR6Ku3EjpbExru4vATf03DluSWocCIoaCmxZ/re25thmYSiAvBm+vBore/gEnyR5A/DcRO/93gPCnvr1Ce7kWxkFBZxu0S05P8/YBOutaNlmS2y9o3KnPcw7Xb+VNKAVv6F3llpK/bYEkOkrSVYCdtv8HfMrELcYRf4e0NbYi0hOII4sG2JwHFzFWSK96iBCYKtjGzF7axa0XJRhF8lu1K0jPfdUctdPhVUcQAVWZU2Y7RENs7DN2BpyWNLXI2woiW94NcZreFKUkvRCF/iPcAFM4OOW45gV4ue2e2iWtoELaXnDjBmpmkZ77uTlrt9Kji0RFzVsiPYWoYzIOKuWsoy/jqjNVxhLeVrB9IFQLh35EKA+2/cstpFtbLb+lRcAuSsJWL6bI2WHUW0nKX/7WdgHElaTt6GLyW1E8/SEntAXGEt8UXgNeouXQHYEC40r7S02pla2USN4v33oeVunwqKqW/HFR1bdgCjJY0rMTCikRvnaSbOU55IMCRNSzLy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"},47352:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,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"}}]);