"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[87404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},A=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),A=r,u=m["".concat(p,".").concat(A)]||m[A]||d[A]||s;return n?o.createElement(u,a(a({ref:t},l),{},{components:n})):o.createElement(u,a({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=A;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}A.displayName="MDXCreateElement"},50959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const s={title:"Get the pointer to component from name using SOLIDWORKS API",caption:"Get Component By Name",description:"Example demonstrates how to get the pointer to the component at any level of the assembly from its full name",image:"components-tree.png",labels:["select","component"]},a=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-by-name/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-by-name/index",title:"Get the pointer to component from name using SOLIDWORKS API",description:"Example demonstrates how to get the pointer to the component at any level of the assembly from its full name",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-by-name/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-by-name",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-by-name/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-by-name/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-by-name/index.md",tags:[],version:"current",frontMatter:{title:"Get the pointer to component from name using SOLIDWORKS API",caption:"Get Component By Name",description:"Example demonstrates how to get the pointer to the component at any level of the assembly from its full name",image:"components-tree.png",labels:["select","component"]},sidebar:"tutorialSidebar",previous:{title:"Get b-spline parameters from the selected edge using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-bspline-parameters/"},next:{title:"Get center of gravity for the SOLIDWORKS component in assembly",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-cog/"}},p={},c=[],l={toc:c},m="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,o.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Multi-level tree of components",src:n(92303).Z,width:"271",height:"548"}),"{ width=200 }"),(0,r.kt)("p",null,"This example demonstrates how to retrieve the pointer to the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2.html"},"IComponent2")," SOLIDWORKS API method on any level of the assembly from its full name hierarchy."),(0,r.kt)("p",null,"Name of the component is defined as a path where each level is separated by / symbol. Component instance id is specified with a - symbol (e.g. FirstLevelComp-1/SecondLevelComp-2/TargetComp-1)"),(0,r.kt)("p",null,"Component name can be found in the following dialog in SOLIDWORKS User Interface:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Component name in properties dialog",src:n(80302).Z,width:"628",height:"221"}),"{ width=250 }"),(0,r.kt)("p",null,"Refer ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/selection/select-component-by-name"},"Select Component By Name")," example for an alternative way of selecting the component by name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n\n    Dim swComp As SldWorks.Component2\n    Set swComp = GetComponentByName(swAssy, "E-1/F^E-1/I-1")\n    \n    If Not swComp Is Nothing Then\n        Debug.Print "Component Found: " & swComp.Name2\n        swComp.Select4 False, Nothing, False\n    Else\n        Debug.Print "Component Not Found"\n    End If\n    \nEnd Sub\n\nFunction GetComponentByName(assy As SldWorks.AssemblyDoc, name As String) As SldWorks.Component2\n    \n    Dim vNameParts As Variant\n    vNameParts = Split(name, "/")\n    \n    Dim swComp As SldWorks.Component2\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vNameParts)\n        \n        Dim swCompFeat As SldWorks.Feature\n        \n        If i = 0 Then\n            Set swCompFeat = assy.FeatureByName(vNameParts(i))\n        Else\n            Set swCompFeat = swComp.FeatureByName(vNameParts(i))\n        End If\n        \n        If swCompFeat Is Nothing Then\n            Set GetComponentByName = Nothing\n            Exit Function\n        End If\n        \n        Set swComp = swCompFeat.GetSpecificFeature2\n        \n    Next\n    \n    Set GetComponentByName = swComp\n    \nEnd Function\n')))}d.isMDXComponent=!0},80302:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnQAAADdCAMAAAAFOx/yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAIerh+/v75A6AAArfD/O8v39/SYAAFyTvKnCnWJQf+0cJBoaGvDOh9eQgl0rACVrnK3cppdxM4er8CYAMofOqwAANZ651V09TZg3JABMnbbO56KGVyYAWRxUW2Crq6a/2/CrYEMUIjaHzu3EvchpV4c2AGAANqS+urLK5IeHYAAAV2AAAJdUS2vZ8zY2hzaHh6zF3+WhlKG712AAYJVrZ3ZLALt9cW2EhBtDSqake3a/22Cr8KfAvZm10aW/nI5rMU8mNaK82Luam75SPbJBKq3E16CmvD17rdHYyo2+2sng786HNgBgqzYANkGH2TQ0NJuftXS82PLOyIc2NqjB3eS0q4dghwA2h6V2cLtaR9J+btmajqtgAEJMAM10Y6utsyVru12k2kzR8rdIM1NWZgA2NqTJ44JGPd2jmIfO8BQWFm1tbbm5uUQAAKtgYJ1EM5tthLnR6atSQuGYiwAAYIODg7yGgXxQALhgUEKInKeJfLBdTCZtvq7HwavOhzYAYGCo3+CroEKIu6qLWavEwEJCQjYAAK+vr4+Pj0QAMiYrWOOdj6FNP348MnvF4JTG4KurzkWN4KtgNm1thKuofc6Hh13V82AsAKY8KO/Iwd2TheemmYRthI5GOrGEba3Gn66OWtbe5F+n3bF8ePDur45BN+i9tZFGPHlNAMJmVQBRocNeSihyxN+Uh+mpnHjB3a+rf+zGwLu9wkOK3EPP8qZYSQAtf6jBvpHC3bdDLIZMRVTT8qSHV7pJM7ODf2Gp4H9RAMOCdpttbSdwwdyViM2LfqlCL6l6dCdxoQAAWY1KQZhGObZgT9qdkX9ANp5XTshqWFApOPDQvUfQ8uimmarv8L+LhKFGNL5bSaeJWKimfYA9NKhZSQAAAP8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///2wlCpUAAADfdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA8JjrVAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAQVElEQVR4Xu2djZ8bRRnHY6wFlPNECiIF7aXl6MkpnkBRLNpSAeEKFKFYtVWLnkqF+grWFxCwvFhFXhStgAqHEetLBUFBFK2KiqgooFVB/xeft9mdzeUum8xmOhd/3w/Z2XlNZvLtbpZ2n60tBCAykA5EB9KB6NQuAyAyONKB6EA6EB1IB6ID6UB0IB2IDku3DoD+c+CBqhxLt+7aS6YtA0Afqb/ug7pTW/f5+hsAiEF9r1pXuxbOgVhMvkylu8TyAPSfSfldV5u2LAD9Z69Kt9CyAPSfvetUupcAEAtIB6ID6UB0tkA6EBtIB4I5/bBGZw473Vrn0h0HQK+sXtPszJrV1vq44yAdCKbR/FFnmg1rDelABTTOu+Mfwh130H+8n+czzoN0oEIaT7+mM0/PlO4UAHqlcdsXc/45NTX1Ky913Naw1qec0l66VbVa7Zi3WKYCVtB4h15omTKsqPLdQZ9pLPt4zhT5NPXY7z4h6e+tkFg2t3TLh/krP+Icy/bOEQvO1J0Vm0nkktZlncB8obFsd8btLNvCqbdpcuLtVrx7dwfpVlX1tT/iS7d8mDYlyDqB+UJBum+rbrI54TdzSrck541bz7G9JXyaPZzSFS8artXOOWm/2jGvp8xmKl5wZl69fPhzw3T21AJKXZ5Pqtybu3CrzcuHP7WVRshG9QeSflT9TqnkDla65BFNQLL40u2+/TERjpg64cQXWiGxrGGtlyxpI90zbJawivZOHiY/VtC3vor80Exts5a66pOH2TCyhw6R3DvLPyNGEezQycMPnDz8BbInHzUbyPXjaunEHaz0pEUXLvk0pEuZxsaHPU79jlo39aWXnmpFzMaZ0q3Peebxe3XngB130/bZI+9dv+twym19gOoW/Ewy659ddHdW/dDOyyWVgod2PuDy0lrYRQW7HteGxVGz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"},92303:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/components-tree-92e3d79c39b42876cc53cc849820f291.png"}}]);