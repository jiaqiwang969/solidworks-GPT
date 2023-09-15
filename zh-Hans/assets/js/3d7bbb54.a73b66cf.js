"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[47784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=o,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5bf9\u6587\u4ef6\u548c\u914d\u7f6e\u7279\u5b9a\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u8fdb\u884c\u6392\u5e8f",image:"sort-custom-properties.svg",labels:["\u6392\u5e8f","\u81ea\u5b9a\u4e49\u5c5e\u6027","\u5192\u6ce1"],group:"\u81ea\u5b9a\u4e49\u5c5e\u6027"},a=void 0,i={unversionedId:"codestack/solidworks-api/data-storage/custom-properties/sort/index",id:"codestack/solidworks-api/data-storage/custom-properties/sort/index",title:"\u4f7f\u7528SOLIDWORKS API\u5bf9\u6587\u4ef6\u548c\u914d\u7f6e\u7279\u5b9a\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u8fdb\u884c\u6392\u5e8f",description:"\u6392\u5e8f\u540e\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027{ width=350 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/data-storage/custom-properties/sort/index.md",sourceDirName:"codestack/solidworks-api/data-storage/custom-properties/sort",slug:"/codestack/solidworks-api/data-storage/custom-properties/sort/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/custom-properties/sort/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/data-storage/custom-properties/sort/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5bf9\u6587\u4ef6\u548c\u914d\u7f6e\u7279\u5b9a\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u8fdb\u884c\u6392\u5e8f",image:"sort-custom-properties.svg",labels:["\u6392\u5e8f","\u81ea\u5b9a\u4e49\u5c5e\u6027","\u5192\u6ce1"],group:"\u81ea\u5b9a\u4e49\u5c5e\u6027"},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS\u5b8f\u6839\u636e\u81ea\u5b9a\u4e49\u5c5e\u6027\u91cd\u547d\u540d\u914d\u7f6e",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/custom-properties/rename-configurations-based-custom-property/"},next:{title:"\u5347\u7ea7\u4f20\u7edf\u81ea\u5b9a\u4e49\u5c5e\u6027",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/data-storage/custom-properties/update-legacy/"}},p={},l=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...s}=e;return(0,o.kt)(c,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u6392\u5e8f\u540e\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027",src:r(10834).Z,width:"1022",height:"592"}),"{ width=350 }"),(0,o.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u4f7f\u7528SOLIDWORKS API\u6309\u7167\u903b\u8f91\u987a\u5e8f\u5bf9\u6587\u4ef6\u548c\u6240\u6709\u914d\u7f6e\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u8fdb\u884c\u6392\u5e8f\u3002\u53ef\u4ee5\u6307\u5b9a\u5347\u5e8f\u548c\u964d\u5e8f\u3002"),(0,o.kt)("p",null,"\u903b\u8f91\u987a\u5e8f\u7684\u6392\u5e8f\u5982\u4e0b\u6240\u793a\u3002\u8fd9\u662fWindows\u6587\u4ef6\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\u6587\u4ef6\u7684\u6392\u5e8f\u987a\u5e8f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u60271"),(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u60272"),(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u60273"),(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u602712"),(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u602720"),(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u602721"),(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u602730")),(0,o.kt)("p",null,"\u800c\u6309\u5b57\u6bcd\u987a\u5e8f\u6392\u5e8f\u4e0a\u8ff0\u5e8f\u5217\u5c06\u4ea7\u751f\u4ee5\u4e0b\u7ed3\u679c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u60271"),(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u602712"),(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u60272"),(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u602720"),(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u602721"),(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u60273"),(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u602730")),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u66f4\u6539\u5b8f\u4e2d\u7684\u5e38\u91cf\u503c\u6765\u914d\u7f6e\u5b8f\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Const ASCENDING As Boolean = True 'True\u8868\u793a\u5347\u5e8f\uff0cFalse\u8868\u793a\u964d\u5e8f\nConst REORDER_GENERAL_CUST_PRPS As Boolean = True 'True\u8868\u793a\u5bf9\u6587\u4ef6\u7279\u5b9a\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u8fdb\u884c\u6392\u5e8f\uff0cFalse\u8868\u793a\u8df3\u8fc7\nConst REORDER_CONF_CUST_PRPS As Boolean = True 'True\u8868\u793a\u5bf9\u914d\u7f6e\u7279\u5b9a\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u8fdb\u884c\u6392\u5e8f\uff08\u5bf9\u4e8e\u96f6\u4ef6\u548c\u88c5\u914d\u4f53\uff09\uff0cFalse\u8868\u793a\u8df3\u8fc7\n")),(0,o.kt)("p",null,"\u89c2\u770b",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/jsjN8zNRTuc?t=97"},"\u6f14\u793a\u89c6\u9891")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Declare PtrSafe Function StrCmpLogicalW Lib "shlwapi" (ByVal s1 As String, ByVal s2 As String) As Integer\n\nConst ASCENDING As Boolean = True\nConst REORDER_GENERAL_CUST_PRPS As Boolean = True\nConst REORDER_CONF_CUST_PRPS As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n                \n        If REORDER_GENERAL_CUST_PRPS Then\n            Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n            Set swCustPrpMgr = swModel.Extension.CustomPropertyManager("")\n            ReorderProperties swCustPrpMgr, ASCENDING\n        End If\n        \n        If REORDER_CONF_CUST_PRPS Then\n            \n            Dim vConfNames As Variant\n            vConfNames = swModel.GetConfigurationNames\n            \n            If Not IsEmpty(vConfNames) Then\n                \n                Dim i As Integer\n                \n                For i = 0 To UBound(vConfNames)\n                    Dim swConfCustPrpMgr As SldWorks.CustomPropertyManager\n                    Set swConfCustPrpMgr = swModel.Extension.CustomPropertyManager(vConfNames(i))\n                    ReorderProperties swConfCustPrpMgr, ASCENDING\n                Next\n                \n            End If\n            \n        End If\n        \n        swModel.SetSaveFlag\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6587\u6863"\n        \n    End If\n        \nEnd Sub\n\nSub ReorderProperties(custPrpMgr As SldWorks.CustomPropertyManager, asc As Boolean)\n    \n    Dim vPrpNames As Variant\n    Dim vPrpTypes As Variant\n    \n    \'\u6ce8\u610f\uff1a\u8fd4\u56de\u7684\u5c5e\u6027\u503c\u5bf9valOut\u548cresValOut\u53c2\u6570\u90fd\u8fdb\u884c\u4e86\u89e3\u6790\n    custPrpMgr.GetAll2 vPrpNames, vPrpTypes, Empty, Empty\n    \n    If Not IsEmpty(vPrpNames) Then\n    \n        Dim dict As Object\n        Set dict = CreateObject("Scripting.Dictionary")\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vPrpNames)\n            Dim prpVal As String\n            custPrpMgr.Get3 vPrpNames(i), False, prpVal, ""\n            dict.Add vPrpNames(i), Array(vPrpTypes(i), prpVal)\n            custPrpMgr.Delete2 vPrpNames(i)\n        Next\n    \n        vPrpNames = BubbleSort(vPrpNames, asc)\n        \n        For i = 0 To UBound(vPrpNames)\n            Dim vPrpData As Variant\n            vPrpData = dict.Item(vPrpNames(i))\n            If custPrpMgr.Add3(vPrpNames(i), vPrpData(0), vPrpData(1), swCustomPropertyAddOption_e.swCustomPropertyOnlyIfNew) <> swCustomInfoAddResult_e.swCustomInfoAddResult_AddedOrChanged Then\n                Err.Raise vbError, "", "\u6dfb\u52a0\u5c5e\u6027\u5931\u8d25"\n            End If\n        Next\n        \n    End If\nEnd Sub\n\nFunction BubbleSort(vStrArray As Variant, asc As Boolean) As Variant\n    \n    Dim swapPos As Integer\n    swapPos = IIf(asc, 1, -1)\n    \n    Dim vResStrArray As Variant\n    vResStrArray = vStrArray\n    \n    Dim i As Integer\n    Dim j As Integer\n    Dim tempVal As String\n    \n    For i = 0 To UBound(vResStrArray)\n        For j = i To UBound(vResStrArray)\n            If StrCmpLogicalW(StrConv(CStr(vResStrArray(i)), vbUnicode), StrConv(CStr(vResStrArray(j)), vbUnicode)) = swapPos Then\n                tempVal = vResStrArray(j)\n                vResStrArray(j) = vResStrArray(i)\n                vResStrArray(i) = tempVal\n            End If\n        Next\n    Next\n    \n    BubbleSort = vResStrArray\n    \nEnd Function\n')))}d.isMDXComponent=!0},10834:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sorted-custom-properties-d2d539b67c619e70d64ced4642298838.png"}}]);