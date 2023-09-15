"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[15771],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},A=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),A=r,u=m["".concat(c,".").concat(A)]||m[A]||d[A]||s;return t?o.createElement(u,a(a({ref:n},l),{},{components:t})):o.createElement(u,a({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=A;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}A.displayName="MDXCreateElement"},71392:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const s={title:"\u4f7f\u7528SOLIDWORKS API\u6839\u636e\u540d\u79f0\u83b7\u53d6\u7ec4\u4ef6\u6307\u9488",image:"components-tree.png",labels:["select","component"]},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/get-by-name/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/get-by-name/index",title:"\u4f7f\u7528SOLIDWORKS API\u6839\u636e\u540d\u79f0\u83b7\u53d6\u7ec4\u4ef6\u6307\u9488",description:"\u7ec4\u4ef6\u7684\u591a\u7ea7\u6811{ width=200 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/get-by-name/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/get-by-name",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/get-by-name/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/get-by-name/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/get-by-name/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u6839\u636e\u540d\u79f0\u83b7\u53d6\u7ec4\u4ef6\u6307\u9488",image:"components-tree.png",labels:["select","component"]},sidebar:"tutorialSidebar",previous:{title:"\u5220\u9664SOLIDWORKS\u88c5\u914d\u4f53\u4e2d\u7684\u6240\u6709\u7ea6\u675f\u5e76\u56fa\u5b9a\u96f6\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/fix-remove-mates/"},next:{title:"\u83b7\u53d6\u7ec4\u4ef6\u5728\u88c5\u914d\u4f53\u4e2d\u7684\u91cd\u5fc3",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/get-cog/"}},c={},p=[],l={toc:p},m="wrapper";function d(e){let{components:n,...s}=e;return(0,r.kt)(m,(0,o.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u7ec4\u4ef6\u7684\u591a\u7ea7\u6811",src:t(72789).Z,width:"271",height:"548"}),"{ width=200 }"),(0,r.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4ece\u7ec4\u4ef6\u7684\u5b8c\u6574\u540d\u79f0\u5c42\u6b21\u7ed3\u6784\u4e2d\u68c0\u7d22\u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2.html"},"IComponent2")," SOLIDWORKS API \u65b9\u6cd5\u7684\u6307\u9488\uff0c\u8be5\u65b9\u6cd5\u53ef\u4ee5\u5728\u88c5\u914d\u4f53\u7684\u4efb\u4f55\u7ea7\u522b\u4e0a\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u7684\u540d\u79f0\u5b9a\u4e49\u4e3a\u8def\u5f84\uff0c\u6bcf\u4e2a\u7ea7\u522b\u4e4b\u95f4\u7528 / \u7b26\u53f7\u5206\u9694\u3002\u7ec4\u4ef6\u5b9e\u4f8bID\u7528 - \u7b26\u53f7\u6307\u5b9a\uff08\u4f8b\u5982 FirstLevelComp-1/SecondLevelComp-2/TargetComp-1\uff09\u3002"),(0,r.kt)("p",null,"\u5728 SOLIDWORKS \u7528\u6237\u754c\u9762\u4e2d\uff0c\u53ef\u4ee5\u5728\u4ee5\u4e0b\u5bf9\u8bdd\u6846\u4e2d\u627e\u5230\u7ec4\u4ef6\u540d\u79f0\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5c5e\u6027\u5bf9\u8bdd\u6846\u4e2d\u7684\u7ec4\u4ef6\u540d\u79f0",src:t(77533).Z,width:"628",height:"221"}),"{ width=250 }"),(0,r.kt)("p",null,"\u6709\u5173\u901a\u8fc7\u540d\u79f0\u9009\u62e9\u7ec4\u4ef6\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/selection/select-component-by-name"},"\u6309\u540d\u79f0\u9009\u62e9\u7ec4\u4ef6")," \u793a\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n\n    Dim swComp As SldWorks.Component2\n    Set swComp = GetComponentByName(swAssy, "E-1/F^E-1/I-1")\n    \n    If Not swComp Is Nothing Then\n        Debug.Print "\u627e\u5230\u7ec4\u4ef6: " & swComp.Name2\n        swComp.Select4 False, Nothing, False\n    Else\n        Debug.Print "\u672a\u627e\u5230\u7ec4\u4ef6"\n    End If\n    \nEnd Sub\n\nFunction GetComponentByName(assy As SldWorks.AssemblyDoc, name As String) As SldWorks.Component2\n    \n    Dim vNameParts As Variant\n    vNameParts = Split(name, "/")\n    \n    Dim swComp As SldWorks.Component2\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vNameParts)\n        \n        Dim swCompFeat As SldWorks.Feature\n        \n        If i = 0 Then\n            Set swCompFeat = assy.FeatureByName(vNameParts(i))\n        Else\n            Set swCompFeat = swComp.FeatureByName(vNameParts(i))\n        End If\n        \n        If swCompFeat Is Nothing Then\n            Set GetComponentByName = Nothing\n            Exit Function\n        End If\n        \n        Set swComp = swCompFeat.GetSpecificFeature2\n        \n    Next\n    \n    Set GetComponentByName = swComp\n    \nEnd Function\n')))}d.isMDXComponent=!0},77533:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnQAAADdCAMAAAAFOx/yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAIerh+/v75A6AAArfD/O8v39/SYAAFyTvKnCnWJQf+0cJBoaGvDOh9eQgl0rACVrnK3cppdxM4er8CYAMofOqwAANZ651V09TZg3JABMnbbO56KGVyYAWRxUW2Crq6a/2/CrYEMUIjaHzu3EvchpV4c2AGAANqS+urLK5IeHYAAAV2AAAJdUS2vZ8zY2hzaHh6zF3+WhlKG712AAYJVrZ3ZLALt9cW2EhBtDSqake3a/22Cr8KfAvZm10aW/nI5rMU8mNaK82Luam75SPbJBKq3E16CmvD17rdHYyo2+2sng786HNgBgqzYANkGH2TQ0NJuftXS82PLOyIc2NqjB3eS0q4dghwA2h6V2cLtaR9J+btmajqtgAEJMAM10Y6utsyVru12k2kzR8rdIM1NWZgA2NqTJ44JGPd2jmIfO8BQWFm1tbbm5uUQAAKtgYJ1EM5tthLnR6atSQuGYiwAAYIODg7yGgXxQALhgUEKInKeJfLBdTCZtvq7HwavOhzYAYGCo3+CroEKIu6qLWavEwEJCQjYAAK+vr4+Pj0QAMiYrWOOdj6FNP348MnvF4JTG4KurzkWN4KtgNm1thKuofc6Hh13V82AsAKY8KO/Iwd2TheemmYRthI5GOrGEba3Gn66OWtbe5F+n3bF8ePDur45BN+i9tZFGPHlNAMJmVQBRocNeSihyxN+Uh+mpnHjB3a+rf+zGwLu9wkOK3EPP8qZYSQAtf6jBvpHC3bdDLIZMRVTT8qSHV7pJM7ODf2Gp4H9RAMOCdpttbSdwwdyViM2LfqlCL6l6dCdxoQAAWY1KQZhGObZgT9qdkX9ANp5XTshqWFApOPDQvUfQ8uimmarv8L+LhKFGNL5bSaeJWKimfYA9NKhZSQAAAP8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///2wlCpUAAADfdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA8JjrVAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAQVElEQVR4Xu2djZ8bRRnHY6wFlPNECiIF7aXl6MkpnkBRLNpSAeEKFKFYtVWLnkqF+grWFxCwvFhFXhStgAqHEetLBUFBFK2KiqgooFVB/xeft9mdzeUum8xmOhd/3w/Z2XlNZvLtbpZ2n60tBCAykA5EB9KB6NQuAyAyONKB6EA6EB1IB6ID6UB0IB2IDku3DoD+c+CBqhxLt+7aS6YtA0Afqb/ug7pTW/f5+hsAiEF9r1pXuxbOgVhMvkylu8TyAPSfSfldV5u2LAD9Z69Kt9CyAPSfvetUupcAEAtIB6ID6UB0tkA6EBtIB4I5/bBGZw473Vrn0h0HQK+sXtPszJrV1vq44yAdCKbR/FFnmg1rDelABTTOu+Mfwh130H+8n+czzoN0oEIaT7+mM0/PlO4UAHqlcdsXc/45NTX1Ky913Naw1qec0l66VbVa7Zi3WKYCVtB4h15omTKsqPLdQZ9pLPt4zhT5NPXY7z4h6e+tkFg2t3TLh/krP+Icy/bOEQvO1J0Vm0nkktZlncB8obFsd8btLNvCqbdpcuLtVrx7dwfpVlX1tT/iS7d8mDYlyDqB+UJBum+rbrI54TdzSrck541bz7G9JXyaPZzSFS8artXOOWm/2jGvp8xmKl5wZl69fPhzw3T21AJKXZ5Pqtybu3CrzcuHP7WVRshG9QeSflT9TqnkDla65BFNQLL40u2+/TERjpg64cQXWiGxrGGtlyxpI90zbJawivZOHiY/VtC3vor80Exts5a66pOH2TCyhw6R3DvLPyNGEezQycMPnDz8BbInHzUbyPXjaunEHaz0pEUXLvk0pEuZxsaHPU79jlo39aWXnmpFzMaZ0q3Peebxe3XngB130/bZI+9dv+twym19gOoW/Ewy659ddHdW/dDOyyWVgod2PuDy0lrYRQW7HteGxVGz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"},72789:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/components-tree-92e3d79c39b42876cc53cc849820f291.png"}}]);