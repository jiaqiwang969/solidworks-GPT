"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[73668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>A});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=c(n),u=o,A=k["".concat(l,".").concat(u)]||k[u]||d[u]||a;return n?r.createElement(A,s(s({ref:t},p),{},{components:n})):r.createElement(A,s({ref:t},p))}));function A(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[k]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u7279\u5f81\u7c7b\u578b\u540d\u79f0\u7684VBA\u5b8f",image:"type-names-msg-box.png",labels:["\u7c7b\u578b\u540d\u79f0","\u7279\u5f81","\u79cd\u7c7b"]},s=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/get-feature-type-name/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/get-feature-type-name/index",title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u7279\u5f81\u7c7b\u578b\u540d\u79f0\u7684VBA\u5b8f",description:"\u8fd9\u4e2aVBA\u5b8f\u4f7f\u7528SOLIDWORKS API\u8bfb\u53d6\u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u6240\u9009\u7279\u5f81\u7684\u7c7b\u578b\u540d\u79f0\uff0c\u5e76\u4ee5\u4ee5\u4e0b\u683c\u5f0f\u5728\u6d88\u606f\u6846\u4e2d\u663e\u793a\u7ed3\u679c\uff1a",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/get-feature-type-name/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/get-feature-type-name",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/get-feature-type-name/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/get-feature-type-name/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/get-feature-type-name/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u7279\u5f81\u7c7b\u578b\u540d\u79f0\u7684VBA\u5b8f",image:"type-names-msg-box.png",labels:["\u7c7b\u578b\u540d\u79f0","\u7279\u5f81","\u79cd\u7c7b"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u4eceBoss-Extrude\u7279\u5f81\u4e2d\u63d0\u53d6\u9009\u62e9",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/get-boss-extrude-selection/"},next:{title:"VBA\u5b8f\u4ee5\u9690\u85cfSOLIDWORKS\u6587\u4ef6\u6811\u4e2d\u7684\u6240\u6709\u9009\u5b9a\u7279\u5f81",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/hide-features/"}},l={},c=[],p={toc:c},k="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u4f7f\u7528SOLIDWORKS API\u8bfb\u53d6\u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u6240\u9009\u7279\u5f81\u7684\u7c7b\u578b\u540d\u79f0\uff0c\u5e76\u4ee5\u4ee5\u4e0b\u683c\u5f0f\u5728\u6d88\u606f\u6846\u4e2d\u663e\u793a\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<\u7279\u5f81\u540d\u79f0>: <\u7c7b\u578b\u540d\u79f01>, <\u7c7b\u578b\u540d\u79f02>\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5728\u6d88\u606f\u6846\u4e2d\u663e\u793a\u6240\u9009\u7279\u5f81\u7684\u7c7b\u578b\u540d\u79f0",src:n(72061).Z,width:"665",height:"417"}),"{ width=350 }"),(0,o.kt)("p",null,"\u5176\u4e2d\uff0c",(0,o.kt)("em",{parentName:"p"},"\u7c7b\u578b\u540d\u79f01")," \u662f\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature~gettypename.html"},"IFeature::GetTypeName")," SOLIDWORKS API \u65b9\u6cd5\u68c0\u7d22\u5230\u7684\u65e7\u7248\u672c\u7279\u5f81\u7c7b\u578b\u540d\u79f0\uff0c\u800c ",(0,o.kt)("em",{parentName:"p"},"\u7c7b\u578b\u540d\u79f02")," \u662f\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature~gettypename2.html"},"IFeature::GetTypeName2")," \u68c0\u7d22\u5230\u7684\u65b0\u7248\u672c\u7279\u5f81\u7c7b\u578b\u540d\u79f0\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528Instant3D\u529f\u80fd\u521b\u5efa\u7684\u57fa\u51c6\u62c9\u4f38\u548c\u5207\u5272\u62c9\u4f38\u7279\u5f81\uff0c",(0,o.kt)("em",{parentName:"p"},"\u7c7b\u578b\u540d\u79f02")," \u5c06\u7b49\u4e8e ",(0,o.kt)("em",{parentName:"p"},"ICE"),"\u3002\u4f7f\u7528 ",(0,o.kt)("em",{parentName:"p"},"\u7c7b\u578b\u540d\u79f01")," \u7684\u503c\u6765\u83b7\u53d6\u5177\u4f53\u7684\u7279\u5f81\u7c7b\u578b\u540d\u79f0\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\u5c06\u7ed3\u679c\u590d\u5236\u4e3a\u6587\u672c\u683c\u5f0f\uff0c\u53ea\u9700\u70b9\u51fb\u6d88\u606f\u6846\uff0c\u6309\u4e0b ",(0,o.kt)("em",{parentName:"p"},"Ctrl+C")," \u590d\u5236\u8be5\u503c\uff0c\u7136\u540e\u901a\u8fc7 ",(0,o.kt)("em",{parentName:"p"},"Ctrl+V")," \u5c06\u5176\u7c98\u8d34\u5230\u4efb\u4f55\u6587\u672c\u7f16\u8f91\u5668\uff08\u5982\u8bb0\u4e8b\u672c\uff09\u4e2d\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5c06\u7279\u5f81\u7c7b\u578b\u540d\u79f0\u590d\u5236\u5230\u8bb0\u4e8b\u672c",src:n(66539).Z,width:"454",height:"301"}),"{ width=250 }"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        MsgBox GetTypeNames(swModel.SelectionManager)\n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n\nFunction GetTypeNames(selMgr As SldWorks.SelectionMgr) As String\n    \n    Dim typeNames As String\n    \n    Dim i As Integer\n    \n    For i = 1 To selMgr.GetSelectedObjectCount2(-1)\n        \n        On Error Resume Next\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = selMgr.GetSelectedObject6(i, -1)\n        \n        If Not swFeat Is Nothing Then\n            typeNames = typeNames & vbLf & swFeat.Name & ": " & swFeat.GetTypeName() & "; " & swFeat.GetTypeName2\n        End If\n        \n    Next\n    \n    GetTypeNames = typeNames\n    \nEnd Function\n')))}d.isMDXComponent=!0},66539:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcYAAAEtCAMAAAClPzBaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAJCQOpvg8QAAWlcAADqQ2/7+tZreqwBgi/b29mY6AAAAM3KuvdTUnHtaiLbbkLb/tgQ8WayrmzEANX1bASoAAK/HwTpmZvewY/7+/unp6X29y1iXs/f31Nv/tmFvMq3E19uQOtrgqzAyX5651SVsvL/V67jQ6ePj4wAyho85AJGEYYPM7l8rAHe1wzMzM/L0+qK82GOw9yYAWbVlAM3n7dWcX/fUi7ZmOlYANaTO39Tb7TpmtqnCvjB9zYTBzgBMm8zMzNv//9nm6YuLY5CQ2yYAMnVLAOXqr5C2/6XW4aW+u+/w8F6l3Hufh6zF3zU1iYs4OJm10d/p7LLL5QArfLvg6Nzi8gBfr5zF2UOJ26SHV9bd7wA6Ojo6AGOL1GAAYqHM1S13nLm5uZDb/+Dl9bb//6G713m/73+TmuaxGWRlZVad7yVregA2iofI16elfHkyAPf4/Iu82MaDONT399W8hOvu97D392eGl153heXq9ajB3dvhz5vL1cja7pjc7oxqMaVeAGJQf6zS2ra8zDiL1E6VtQAAZb2hYf//25CQttv/29XczT4/QTiLi7a2/z17rbfc7qnCnZdYAK/b5DkAAI6OjnW+2tPi8e7x+f/btgBYqrZ7NWq11GUAAJXH00QAMvewi2aqyUVOUt3e35GPZMXFxZHC3T5/uY9sWKqMWbnUnNvb29nf8JeWjf/bkLvg8dXq8XJycpdxM+js9hk+f5mamqXr9cPc4pLM2uWnYoODg6DL3YzD0JtZALrfzqKikzKB0X1QAIvU9j+JqWimta7R4aW/29TUuQA6kABmtnnD3afO10KIuyZvwVmj87bb/zkAObd8X3l5eTF9rJzR3QA6ZsTY7VZ9hjEAYP+2Zma2/9SLOABPoJDb22Gp4MXq9cze8LXV3Y6/26ysrNnAh0QAACVvj1VVVQAAOeq2K9bdqqypfrzZ38Tk67p+NdmfYEWN4Kenp9TU1Nrm83ZrMY3J2Iuwi3vG4HlNAJl8NZFtMpPF35fI4gAAAAVYmJIAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAZ90lEQVR4Xu2dD5wd1VXHR0LWLql/kFJZKNWgsWFJ2EI3RVJJKCpRCAYtCwFWBIIYCxKChaKGliLSNRb8Q0iwBpdKIGiMDVCkpJBVAm0EEcQYlMSItgRMCSQ1GEuDH8+/O3Pu/Hlv3st7u2/unu8nee/OnXPvPff8Zu7cefNno+4Cpt4miVGib/PatYf+5m8ceeSRU5G1a/tkRXf/Ld3d/zZ0/dG98+F7fvfRvbfAf/j++Se7u086+9quYVy+6tojrrqWzDAbCl0B1sRJyzF1xImuXPcRbg2zWr4VLeh7U1X07Z0LrJh7z7Rp05687KlDu10MTvol+P/Ck7rLQNfF18M/MiiUcdTp27x376F7WcV71370kUTGKIqGwNuu4SgCqUCXaOdPJTLS8v+efe3RvVH0+xc7GY+ITqTCAK6IQDoph/XE64AcGccM0nHF3D+dNu3Oz1762md7XAyw6+B03GVcHkINO0/G7r6HPrqZRFy7+pGHbntkqmQ3B+6b5egkGUnHFXOfeuq11+55oGfqgs2SXZcOkhF03IwafvGKVf99pGQ1C46gJekoGVHHFXMvvedB0PCRzXtLb8qdJCOMqwtWXPFfrxyohjgO+8e/WnSWjKDjip5r7l2w4qEFcyWnDCJjn1FpSMa+2xZM7TEqTPTYY4/1rZj6C0alifbu3XubqVh1QMa+BZI2KgvKaDtj5UEZuyVtVBaUsedHjYpjMgaByRgEJmMQRH9uMgZAtPfv+np+xedX8Z/7MKpAtPe6lIxbVr25atW5q+5YteqMVfs2bPhbyTY6mWjv93gynnDCvrcenDFjxpvn3nHHGVtmb9hwnKwwOhma4kgaMRkrCcl4QsKmTetRRlQRZDzqU586TlYYnUxaxvPP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"},72061:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/type-names-msg-box-c2a230f4c579595f120e92089720b836.png"}}]);