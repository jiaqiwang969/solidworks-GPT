"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[8279],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),h=o,p=m["".concat(s,".").concat(h)]||m[h]||d[h]||r;return t?i.createElement(p,a(a({ref:n},u),{},{components:t})):i.createElement(p,a({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},40057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(87462),o=(t(67294),t(3905));const r={title:"Using of recursion techniques in Visual Basic",caption:"Recursion",description:"Explanation of recursion and usage in Visual Basic to output the structure of the Bill Of Materials (BOM)"},a=void 0,l={unversionedId:"codestack-clone/visual-basic/algorithms/recursion/index",id:"codestack-clone/visual-basic/algorithms/recursion/index",title:"Using of recursion techniques in Visual Basic",description:"Explanation of recursion and usage in Visual Basic to output the structure of the Bill Of Materials (BOM)",source:"@site/docs/codestack-clone/visual-basic/algorithms/recursion/index.md",sourceDirName:"codestack-clone/visual-basic/algorithms/recursion",slug:"/codestack-clone/visual-basic/algorithms/recursion/",permalink:"/solidworks-GPT/docs/codestack-clone/visual-basic/algorithms/recursion/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/visual-basic/algorithms/recursion/index.md",tags:[],version:"current",frontMatter:{title:"Using of recursion techniques in Visual Basic",caption:"Recursion",description:"Explanation of recursion and usage in Visual Basic to output the structure of the Bill Of Materials (BOM)"},sidebar:"tutorialSidebar",previous:{title:"Writing the text content into the file using Visual Basic (VBA)",permalink:"/solidworks-GPT/docs/codestack-clone/visual-basic/algorithms/fso/io/write-text-file/"},next:{title:"Blocking and non-blocking wait function in Visual Basic",permalink:"/solidworks-GPT/docs/codestack-clone/visual-basic/algorithms/wait/"}},s={},c=[{value:"BomItem Class",id:"bomitem-class",level:2}],u={toc:c},m="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(m,(0,i.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In some cases it might be required to parse the hierarchical data. This is a tree-structured data which has a collection of nodes while each node may contain the collection of children, and each child can have a collection of its own children and so on. Example of hierarchical data is an XML file which contains the nodes which might have sub-nodes."),(0,o.kt)("p",null,"This data can be parsed using ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/loops/"},"loops"),", however this task would be complicated and code readability will be compromised. Much easier solution would be an employment of recursion technique."),(0,o.kt)("p",null,"This function will parse the single node (or node on a single level) and then call itself recursively to process all children nodes."),(0,o.kt)("p",null,"For example the following Bill Of Materials (BOM) structure represents a product."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BOM Structure example",src:t(70713).Z,width:"303",height:"266"}),"{ width=350 }"),(0,o.kt)("p",null,"This structure is described with the following class in the Visual Basic, where ",(0,o.kt)("strong",{parentName:"p"},"Children")," variable may contain children of the sub-assembly node."),(0,o.kt)("h2",{id:"bomitem-class"},"BomItem Class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Public Name As String\nPublic Qty As Integer\nPublic Children As Variant\n")),(0,o.kt)("p",null,"In order to output the structure the following function can be written"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Sub main()\n    \n    Dim bom As New BomItem\n    bom.Name = "A"\n    bom.Qty = 1\n    \n    Dim bomChildren(1) As BomItem\n        \n    Set bomChildren(0) = New BomItem\n    bomChildren(0).Name = "B"\n    bomChildren(0).Qty = 2\n    \n    Set bomChildren(1) = New BomItem\n    bomChildren(1).Name = "C"\n    bomChildren(1).Qty = 3\n    \n    bom.Children = bomChildren\n    \n    Dim bomSubChildren(2) As BomItem\n        \n    Set bomSubChildren(0) = New BomItem\n    bomSubChildren(0).Name = "D"\n    bomSubChildren(0).Qty = 1\n    \n    Set bomSubChildren(1) = New BomItem\n    bomSubChildren(1).Name = "E"\n    bomSubChildren(1).Qty = 5\n    \n    Set bomSubChildren(2) = New BomItem\n    bomSubChildren(2).Name = "F"\n    bomSubChildren(2).Qty = 1\n    \n    bomChildren(0).Children = bomSubChildren\n    \n    PrintBom bom\n    \nEnd Sub\n\nSub PrintBom(bom As BomItem, Optional level As Integer = 0)\n    \n    Dim offset As String\n    offset = String(level, "-")\n    \n    Debug.Print offset & bom.Name & " (" & bom.Qty & ")"\n    \n    If Not IsEmpty(bom.Children) Then\n        Dim i As Integer\n        For i = 0 To UBound(bom.Children)\n            Dim child As BomItem\n            Set child = bom.Children(i)\n            PrintBom child, level + 1\n        Next\n    End If\n    \nEnd Sub\n')),(0,o.kt)("p",null,"As the result the following information will be output to the Immediate Window of VBA Editor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"A (1)\n-B (2)\n--D (1)\n--E (5)\n--F (1)\n-C (3)\n")))}d.isMDXComponent=!0},70713:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/bom-dc534808780658016a66f54c5dcde975.svg"}}]);