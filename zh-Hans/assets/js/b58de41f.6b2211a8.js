"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[34540],{3905:(n,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var t=r(67294);function s(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function a(n,e){if(null==n)return{};var r,t,s=function(n,e){if(null==n)return{};var r,t,s={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(s[r]=n[r]);return s}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(s[r]=n[r])}return s}var l=t.createContext({}),d=function(n){var e=t.useContext(l),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},c=function(n){var e=d(n.components);return t.createElement(l.Provider,{value:e},n.children)},u="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},A=t.forwardRef((function(n,e){var r=n.components,s=n.mdxType,o=n.originalType,l=n.parentName,c=a(n,["components","mdxType","originalType","parentName"]),u=d(r),A=s,m=u["".concat(l,".").concat(A)]||u[A]||p[A]||o;return r?t.createElement(m,i(i({ref:e},c),{},{components:r})):t.createElement(m,i({ref:e},c))}));function m(n,e){var r=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var o=r.length,i=new Array(o);i[0]=A;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a[u]="string"==typeof n?n:s,i[1]=a;for(var d=2;d<o;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}A.displayName="MDXCreateElement"},56228:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=r(87462),s=(r(67294),r(3905));const o={layout:"sw-tool",title:"\u5f3a\u5236\u91cd\u5efaSOLIDWORKS\u6587\u6863\u7684\u5b8f",caption:"\u91cd\u5efa\u6a21\u578b"},i=void 0,a={unversionedId:"codestack/solidworks-api/document/rebuild/index",id:"codestack/solidworks-api/document/rebuild/index",title:"\u5f3a\u5236\u91cd\u5efaSOLIDWORKS\u6587\u6863\u7684\u5b8f",description:"VBA\u5b8f\u4ee5\u5f3a\u5236\u91cd\u5efaSOLIDWORKS\u6a21\u578b\uff0c\u9690\u85cf\u6240\u6709\u7c7b\u578b\u5e76\u663e\u793a\u7b49\u8f74\u6d4b\u56fe",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/rebuild/index.md",sourceDirName:"codestack/solidworks-api/document/rebuild",slug:"/codestack/solidworks-api/document/rebuild/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/rebuild/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/rebuild/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u5f3a\u5236\u91cd\u5efaSOLIDWORKS\u6587\u6863\u7684\u5b8f",caption:"\u91cd\u5efa\u6a21\u578b"},sidebar:"tutorialSidebar",previous:{title:"\u7528\u4e8e\u6253\u5370SOLIDWORKS\u6587\u6863\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/print/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u8fdb\u884c\u5b9e\u4f53\u9009\u62e9",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/selection/"}},l={},d=[{value:"group: Performance",id:"group-performance",level:2}],c={toc:d},u="wrapper";function p(n){let{components:e,...o}=n;return(0,s.kt)(u,(0,t.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"VBA\u5b8f\u4ee5\u5f3a\u5236\u91cd\u5efaSOLIDWORKS\u6a21\u578b\uff0c\u9690\u85cf\u6240\u6709\u7c7b\u578b\u5e76\u663e\u793a\u7b49\u8f74\u6d4b\u56fe\nimage: force-rebuild.svg\nlabels: ","[api, upgrade, performance, rebuild]"),(0,s.kt)("h2",{id:"group-performance"},"group: Performance"),(0,s.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u5141\u8bb8\u6267\u884c\u901a\u5e38\u9700\u8981\u5347\u7ea7\u5230\u65b0\u7248\u672cSOLIDWORKS\u7684\u6a21\u578b\u7684\u64cd\u4f5c\u3002\u5b83\u53ef\u4ee5\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5f3a\u5236\u91cd\u5efa\u6a21\u578b\uff08ctrl+Q\uff09")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u91cd\u5efa\u6240\u6709\u914d\u7f6e",src:r(20065).Z,width:"341",height:"233"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5c06\u6a21\u578b\u8bbe\u7f6e\u4e3a\u7b49\u8f74\u6d4b\u65b9\u5411")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u7f29\u653e\u4ee5\u9002\u5e94",src:r(19665).Z,width:"346",height:"206"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u9690\u85cf\u6240\u6709\u89c6\u56fe\u7c7b\u578b")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u9690\u85cf\u6240\u6709\u7c7b\u578b",src:r(14237).Z,width:"482",height:"262"})),(0,s.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e\u76f8\u5e94\u5e38\u91cf\u7684\u503c\u6765\u914d\u7f6e\u5b8f\u64cd\u4f5c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const DEFAULT_VIEWZOOMTOFIT As Boolean = True\nConst DEFAULT_REBUILD As Boolean = True\nConst DEFAULT_HIDE_ALL_TYPES As Boolean = True\n")),(0,s.kt)("p",null,"\u8be5\u5b8f\u8fd8\u652f\u6301",(0,s.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/macro-arguments/"},"\u5b8f\u53c2\u6570"),"\uff1a",(0,s.kt)("strong",{parentName:"p"},"-zoomtofit"),"\uff0c",(0,s.kt)("strong",{parentName:"p"},"-rebuild"),"\uff0c",(0,s.kt)("strong",{parentName:"p"},"-hidealltypes")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u5728Batch+\u4e2d\u6307\u5b9a\u7684\u5b8f\u53c2\u6570",src:r(59098).Z,width:"249",height:"101"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const DEFAULT_VIEWZOOMTOFIT As Boolean = True\nConst DEFAULT_REBUILD As Boolean = True\nConst DEFAULT_HIDE_ALL_TYPES As Boolean = True\n\nConst ARG_VIEWZOOMTOFIT As String = "-zoomtofit"\nConst ARG_REBUILD As String = "-rebuild"\nConst ARG_HIDE_ALL_TYPES As String = "-hidealltypes"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim vArgs As Variant\n        vArgs = GetArguments()\n        \n        If IsEmpty(vArgs) Then\n            Err.Raise vbError, "", "\u53c2\u6570\u4e3a\u7a7a"\n        End If\n        \n        If ContainsArguments(vArgs, ARG_VIEWZOOMTOFIT) Then\n            swModel.ShowNamedView2 "", swStandardViews_e.swIsometricView\n            swModel.ViewZoomtofit2\n        End If\n        \n        If ContainsArguments(vArgs, ARG_HIDE_ALL_TYPES) Then\n            swModel.SetUserPreferenceToggle swUserPreferenceToggle_e.swViewDisplayHideAllTypes, True\n        End If\n        \n        If ContainsArguments(vArgs, ARG_REBUILD) Then\n        \n            swModel.ForceRebuild3 False\n            \n            Dim isSw2017OrNewer As Boolean\n            isSw2017OrNewer = (CInt(Split(swApp.RevisionNumber(), ".")(0))) >= 25\n            \n            If isSw2017OrNewer Then\n                swModel.Extension.ForceRebuildAll\n            End If\n            \n        End If\n    \n    Else\n        Err.Raise vbError, "", "\u6ca1\u6709\u6d3b\u52a8\u6a21\u578b"\n    End If\n    \nEnd Sub\n\nFunction GetArguments() As Variant\n    \n    Dim vArgs As Variant\n    \n    On Error GoTo catch_\n    \ntry_:\n    Dim macroRunner As Object\n    Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")\n    \n    Dim param As Object\n    Set param = macroRunner.PopParameter(swApp)\n        \n    vArgs = param.Get("Args")\n        \n    If IsEmpty(vArgs) Then\n        Err.Raise vbError, "", "\u672a\u6307\u5b9a\u53c2\u6570"\n    End If\n    \n    GoTo finally_\n    \ncatch_:\n    \n    Dim sArgs() As String\n    Dim isInit As Boolean\n    isInit = False\n    \n    If DEFAULT_REBUILD Then\n        If Not isInit Then\n            ReDim sArgs(0)\n            isInit = True\n        Else\n            ReDim Preserve sArgs(UBound(sArgs) + 1)\n        End If\n        sArgs(UBound(sArgs)) = ARG_REBUILD\n    End If\n    \n    If DEFAULT_VIEWZOOMTOFIT Then\n        If Not isInit Then\n            ReDim sArgs(0)\n            isInit = True\n        Else\n            ReDim Preserve sArgs(UBound(sArgs) + 1)\n        End If\n        sArgs(UBound(sArgs)) = ARG_VIEWZOOMTOFIT\n    End If\n    \n    If DEFAULT_HIDE_ALL_TYPES Then\n        If Not isInit Then\n            ReDim sArgs(0)\n            isInit = True\n        Else\n            ReDim Preserve sArgs(UBound(sArgs) + 1)\n        End If\n        sArgs(UBound(sArgs)) = ARG_HIDE_ALL_TYPES\n    End If\n    \n    If isInit Then\n        vArgs = sArgs\n    Else\n        vArgs = Empty\n    End If\n    \nfinally_:\n\n    GetArguments = vArgs\n    \nEnd Function\n\nFunction ContainsArguments(args As Variant, arg As String) As Boolean\n\n    Dim i As Integer\n    \n    For i = 0 To UBound(args)\n        If LCase(args(i)) = LCase(arg) Then\n            ContainsArguments = True\n            Exit Function\n        End If\n    Next\n    \n    ContainsArguments = False\n    \nEnd Function\n')))}p.isMDXComponent=!0},59098:(n,e,r)=>{r.d(e,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAABlCAIAAAAAidL/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAg3SURBVHhe7d1PaFTXAsdxTdAoGVGC1ZCNMIrE+A/tJgtXorjILOx6NhGz8h9IQTdqhUSwOyFkbYTB1VChINRsikIrtYUGRBeCqAwYBdFiMEg0sT/v73g4uTOZOXec3Ew8vw+PcO655577Xt/33l7fQ7vs02L7fvgJfl6cq1gs8qxIo6h1CYVal1CodQlFhdYnJydPnDixY8eOZQ2CrQYGBiYmJswN5lLrko546wi9u7vbRNpQnZ2dpVLJ3Mah1iUd8dbxRkeXXV1d+Xz+pwY5cuRINpvFtocPHza3cah1SUe89Z6eHkTZwNAJG2Lb7du3m9s41LqkI946igRTaENxZ3Mbh1qXdKh1CYVal1DUbr2vr2/VqlWc97d69WpcaLaIcN7cxqHWJR21W0e1nEwKF5otIpw0t3GodUlH7dY5Ux+zRYQz5jYOtS7pUOsSCq/Wly9fnslkVq5cybP+zBYRzpjbONS6pMOr9dbW1vPnz1+/fn3r1q2JijdbRDhjbuNQ65IOr9ZbWloGBwdx9vnz52fPnu3u7l6xYgVXVme2iHCGd3GpdUmHV+v4hsF7/ePHj1jw4cOH27dvHz16dP369VxchdkiwhnexaXWJR1erUNPT8/IyMjU1BTWzM7Ovnz5Ejnu27ePZ+djtohwhndxqXVJh2/reLW3t7fv37//wYMHXInX/OvXr4eHhzs6OrimnNkiwhle61Lrko4ErWcymVwu9/jxY65E669evbp06dKaNWu4ppzZIsIZXutS65IOr9YR+q5du0ZHR9+/f481MzMz+EVqoVDYu3cv18/HbBHhDO/iUuuSDq/WW1tb0R8Sx4Lp6elbt27l8/l169bh1KZNm1B8TFdXFx6P8n2Ad3GpdUmHb+v4VsHZZ8+enTp1asuWLZjhysHBwfEyJ0+e5AKzRYTreReXWpd0+LZ+4cIFfMNks9nY/7J+7do1c6UDD4Zal2bj1Tp/YVrx/zHFF8vhMtu2bdM3jDQbr9brZraIcMbcxqHWJR1qXUJRu3X9Xg35NtRuva+vr47ccUkulzNbRDhvbuNQ65KO2q03Cnc2t3GodUmHWpdQqHUJRTw+/Rl38q2Kt97f348os9ns8ePHTadf7fTp0/wTrg8cOGBu41Drko546xMTE52dneiy4TKZzP37981tHGpd0lHhA7pUKuVyOaRpIv1q2Apv9Iqhg1qXdMRbLxQKGzduNJGKLFkdHR1DQ0Mm60i8dYTO35AhsqS9e/eura3NHETireOBMCORJS4Ws1qXb5Zal1CodQmFWpdQqHUJhVqXUKh1CYVal1B8Veu9vb0jIyPmQKS51d/6o0ePjh071jwvfjx1evCkivpbR1hjY2PIHT/N1KJS61Jd/a3jAwY/mTtnOMY8T6E8XA4cYAZ/K+Apd8wB13AmumiZ3RY4A1iMQz5gnOEyey/gAo5ZP7blhRIytmH5tu4mbtewP1bFMedrto6zjJKNRuc/b8ut7Iy9pOIy7MBN7DJLrQvYZmjOAcROW6gNNcfG7gNgyyPu41Zox+6kexUDBVzrwqmKd3evxTL770SEGI/l2/rn6BwMy23dzRGwBj/drO3YnXR7ta3bs5a7uR271wImcVN3RgLHCC2v1t2mCcsQpTuPsVuw3YcrOenTOga4hDVbPq2D3dluJSGLxezVupsaYQadYdK2DhjjcsApuw/HgLOereMnLwHuj5/lrdtl7nruoNYF0IMZRbxaTwqd2ZpFFksarePVa9/WIotloVp3PyT44SGyuJCiGUUa1rpIs1HrEopkrf8jsmBMZAsmcetmJNJQal1CodYlFGpdQqHWJRRqXUKh1iUUal1C4ZPWd/2j7r/MrLdFaH1gYODOnTvmoKo9e/Zg5YsXL3p7e9+8eWNmv8DZUqlkDprM06dP29vb8VdvbGxs9+7d+uc11OTZ+g8//4bBr38/rSP3pm6dmrD1XC43Pj5uDio5d+7cjRs3zEEE9eM/haKfT6K0Ps7MqvWUqPWGS5QWQ1/81h8+fHjw4EEEvXnzZgSKQ2wCPMQCnCoWi/xHSWIlr3LDtWMO3NZv3rzJ3c6cOVO99UKhwJX09u1bTCJBHrrfFeWTuPby5csIGpMY3L17lwuYL+chn8/j0J4FPgB2QyzAWfy0nzQQewaEPFs/OvJ7faED/uKbUaQxreMqvrnZPeeRKQLFwD4GHF+9ehUDn9a5M08x+iqtW/YViwHrBNTMccVJPicMd8OGDZxEtfZhsO91hs4HiUHbh4o3Zes8q/d6FYlaf/nflDlOAv9NmVGkntbd35aBw1jf5kSE8+43jF3s0zp244NB7iUwNTW1c+dO3ujevXucRGp4MXOMQBkiIWIcVpzke50zNms3VjuJle572n2u1Hoinq3f+OvJ5V/+NQcJIQwzitTTekzFd7mr7tavXLlSpfVysbzUejPzbB1mZmfNKKGFbR1j7BArEq3bB8B+w9iBe0msdZyyHz8+3zAM1xxE/TE7QKMcV5z0b13fMI3i2Tq/1E9f/cMcJxGLucGtg/sZY7M+9uWP07DRM3HAtfO91zGDVzuX1fy1KWrjSmKaaJSH7q9Nyydrto4FWG8fDF4OXAnlrQNv5P59QKxErf84+qc5TgJ/8c0o0oDWReqQQlpqXZqCWpdQqHUJhVqXUKh1CYVal1A0Y+siC8REtmCStS6ydKl1CYVal1DUaH3t2rXT09PmQGTJmpycbGlpMQeReOtDQ0NtbW14IESWNIR+6NAhk3Vk8b9Yvh9+gp8X5yoWizwr0ihqXUKh1iUUal1CodYlFGpdQqHWJQyfPv0Pj+Z2AhYcMVMAAAAASUVORK5CYII="},20065:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"assets/images/rebuild-all-configurations-2c1728cbec4fdb12eedcebbd87a10359.png"},14237:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"assets/images/view-hide-all-types-404be0509f561f4e4a83abc7d92a9a89.png"},19665:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"assets/images/zoom-to-fit-348eac9df29335127ebd0cd200f3ee45.png"}}]);