"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[30962],{3905:(A,e,n)=>{n.d(e,{Zo:()=>i,kt:()=>D});var t=n(67294);function s(A,e,n){return e in A?Object.defineProperty(A,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[e]=n,A}function o(A,e){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.push.apply(n,t)}return n}function r(A){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(A,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(n,e))}))}return A}function a(A,e){if(null==A)return{};var n,t,s=function(A,e){if(null==A)return{};var n,t,s={},o=Object.keys(A);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(s[n]=A[n]);return s}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(s[n]=A[n])}return s}var c=t.createContext({}),l=function(A){var e=t.useContext(c),n=e;return A&&(n="function"==typeof A?A(e):r(r({},e),A)),n},i=function(A){var e=l(A.components);return t.createElement(c.Provider,{value:e},A.children)},d="mdxType",w={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(A,e){var n=A.components,s=A.mdxType,o=A.originalType,c=A.parentName,i=a(A,["components","mdxType","originalType","parentName"]),d=l(n),u=s,D=d["".concat(c,".").concat(u)]||d[u]||w[u]||o;return n?t.createElement(D,r(r({ref:e},i),{},{components:n})):t.createElement(D,r({ref:e},i))}));function D(A,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof A||s){var o=n.length,r=new Array(o);r[0]=u;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=A,a[d]="string"==typeof A?A:s,r[1]=a;for(var l=2;l<o;l++)r[l]=n[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48878:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>w,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=n(87462),s=(n(67294),n(3905));const o={title:"\u4f7f\u7528SOLIDWORKS API\u786e\u5b9a\u6240\u9009\u9762\u662f\u5b54\u8fd8\u662f\u51f8\u53f0",caption:"\u786e\u5b9a\u6240\u9009\u9762\u662f\u5b54\u8fd8\u662f\u51f8\u53f0"},r=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/determine-hole-boss/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/determine-hole-boss/index",title:"\u4f7f\u7528SOLIDWORKS API\u786e\u5b9a\u6240\u9009\u9762\u662f\u5b54\u8fd8\u662f\u51f8\u53f0",description:"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u6839\u636e\u9762\u7684\u6cd5\u7ebf\u6765\u786e\u5b9a\u6240\u9009SOLIDWORKS\u96f6\u4ef6\u6216\u88c5\u914d\u4e2d\u7684\u5706\u67f1\u9762\u662f\u5185\u90e8\uff08\u5373\u5b54\uff09\u8fd8\u662f\u5916\u90e8\uff08\u5373\u51f8\u53f0\uff09\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/determine-hole-boss/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/determine-hole-boss",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/determine-hole-boss/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/determine-hole-boss/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/determine-hole-boss/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u786e\u5b9a\u6240\u9009\u9762\u662f\u5b54\u8fd8\u662f\u51f8\u53f0",caption:"\u786e\u5b9a\u6240\u9009\u9762\u662f\u5b54\u8fd8\u662f\u51f8\u53f0"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u8be6\u7ec6\u6a21\u5f0f\u4fdd\u5b58SOLIDWORKS\u7ed8\u56fe",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/detailing-mode-save-model-data/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5904\u7406\u5c3a\u5bf8",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/dimensions/"}},c={},l=[{value:"labels: \u51e0\u4f55, \u5b54, \u51f8\u53f0",id:"labels-\u51e0\u4f55-\u5b54-\u51f8\u53f0",level:2},{value:"\u7b97\u6cd5",id:"\u7b97\u6cd5",level:3}],i={toc:l},d="wrapper";function w(A){let{components:e,...o}=A;return(0,s.kt)(d,(0,t.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u6839\u636e\u9762\u7684\u6cd5\u7ebf\u6765\u786e\u5b9a\u6240\u9009SOLIDWORKS\u96f6\u4ef6\u6216\u88c5\u914d\u4e2d\u7684\u5706\u67f1\u9762\u662f\u5185\u90e8\uff08\u5373\u5b54\uff09\u8fd8\u662f\u5916\u90e8\uff08\u5373\u51f8\u53f0\uff09\u3002\nimage: boss-hole.png"),(0,s.kt)("h2",{id:"labels-\u51e0\u4f55-\u5b54-\u51f8\u53f0"},"labels: ","[\u51e0\u4f55, \u5b54, \u51f8\u53f0]"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u96f6\u4ef6\u4e2d\u7684\u5b54\u548c\u51f8\u53f0",src:n(48601).Z,width:"515",height:"518"}),"{ width=250 }"),(0,s.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u6839\u636e\u9762\u7684\u6cd5\u7ebf\u6765\u786e\u5b9a\u6240\u9009\u7684\u5706\u67f1\u9762\u662f\u5185\u90e8\uff08\u5373\u5b54\uff09\u8fd8\u662f\u5916\u90e8\uff08\u5373\u51f8\u53f0\uff09\u3002"),(0,s.kt)("p",null,"\u9009\u62e9\u5706\u67f1\u9762\u5e76\u8fd0\u884c\u5b8f\u3002\u5c06\u663e\u793a\u4e00\u4e2a\u6d88\u606f\u6846\uff0c\u5176\u4e2d\u5305\u542b\u6240\u9009\u9762\u7684\u7c7b\u578b\u3002\u8be5\u5b8f\u9002\u7528\u4e8e\u4efb\u4f55\u9762\uff08\u9762\u4e0d\u9700\u8981\u5177\u6709\u5e73\u9762\u76f8\u90bb\u9762\uff09\u3002"),(0,s.kt)("h3",{id:"\u7b97\u6cd5"},"\u7b97\u6cd5"),(0,s.kt)("p",null,"\u8be5\u5b8f\u6839\u636e\u9762\u7684\u6cd5\u7ebf\u65b9\u5411\u6765\u786e\u5b9a\u9762\u662f\u5b54\u8fd8\u662f\u51f8\u53f0\u3002\u5b54\u7684\u6cd5\u7ebf\u59cb\u7ec8\u6307\u5411\u5706\u67f1\u8f74\uff0c\u800c\u51f8\u53f0\u7684\u6cd5\u7ebf\u59cb\u7ec8\u6307\u5411\u5706\u67f1\u8f74\u7684\u5916\u90e8\u3002"),(0,s.kt)("p",null,"\u8be5\u5b8f\u5728\u9762\u4e0a\u627e\u5230\u4e00\u4e2a\u968f\u673a\u70b9\uff08\u5728\u672c\u793a\u4f8b\u4e2d\u4e3a\u9762\u7684U\u548cV\u53c2\u6570\u7684\u4e2d\u95f4\u70b9\uff09\uff0c\u5e76\u8ba1\u7b97\u8be5\u70b9\u5904\u7684\u6cd5\u7ebf\u3002\u7136\u540e\u8ba1\u7b97\u8be5\u70b9\u4e0e\u5706\u67f1\u4f53\u539f\u70b9\u4e4b\u95f4\u7684\u5411\u91cf\u3002\u5982\u679c\u8be5\u5411\u91cf\u4e0e\u6cd5\u7ebf\u4e4b\u95f4\u7684\u5939\u89d2\u5c0f\u4e8e90\u5ea6\uff08PI / 2\uff09\uff0c\u5219\u6cd5\u7ebf\u6307\u5411\u5706\u67f1\u8f74\uff0c\u8fd9\u610f\u5473\u7740\u8be5\u9762\u662f\u5b54\uff1b\u5426\u5219\uff08\u5982\u679c\u5939\u89d2\u5927\u4e8e90\u5ea6\uff08PI / 2\uff09\uff09\uff0c\u8be5\u9762\u662f\u5916\u90e8\uff08\u51f8\u53f0\uff09\u3002"),(0,s.kt)("p",null,"\u8bf7\u53c2\u89c1\u4e0b\u56fe\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u5b54\u548c\u51f8\u53f0\u7684\u6cd5\u7ebf",src:n(12591).Z,width:"735",height:"428"}),"{ width=400 }"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const PI As Double = 3.14159265359\n\nDim swApp As SldWorks.SldWorks\nDim swMathUtils As SldWorks.MathUtility\n\nSub main()\n\n    Set swApp = Application.SldWorks\n        \n    Set swMathUtils = swApp.GetMathUtility\n        \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swSelMgr As SldWorks.SelectionMgr\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Set swSelMgr = swModel.SelectionManager\n\n        Dim swFace As SldWorks.Face2\n        Set swFace = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swFace Is Nothing Then\n            \n            If IsHole(swFace) Then\n                MsgBox "\u6240\u9009\u9762\u662f\u5b54"\n            Else\n                MsgBox "\u6240\u9009\u9762\u662f\u51f8\u53f0"\n            End If\n            \n        Else\n            MsgBox "\u8bf7\u9009\u62e9\u9762"\n        End If\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n\nFunction IsHole(face As SldWorks.Face2) As Boolean\n    \n    Dim swSurf As SldWorks.Surface\n    Set swSurf = face.GetSurface\n    \n    If swSurf.IsCylinder() Then\n    \n        Dim uvBounds As Variant\n        uvBounds = face.GetUVBounds\n        \n        Dim vEvalData As Variant\n        vEvalData = swSurf.Evaluate((uvBounds(1) - uvBounds(0)) / 2, (uvBounds(3) - uvBounds(2)) / 2, 1, 1)\n        \n        Dim dPt(2) As Double\n        dPt(0) = vEvalData(0): dPt(1) = vEvalData(1): dPt(2) = vEvalData(2)\n        \n        Dim sense As Integer\n        If False = face.FaceInSurfaceSense() Then\n            sense = -1\n        Else\n            sense = 1\n        End If\n        \n        Dim dNormVec(2) As Double\n        dNormVec(0) = vEvalData(UBound(vEvalData) - 2) * sense: dNormVec(1) = vEvalData(UBound(vEvalData) - 1) * sense: dNormVec(2) = vEvalData(UBound(vEvalData)) * sense\n        \n        Dim vCylParams As Variant\n        vCylParams = swSurf.CylinderParams\n        Dim dOrig(2) As Double\n        dOrig(0) = vCylParams(0): dOrig(1) = vCylParams(1): dOrig(2) = vCylParams(2)\n        \n        Dim dDirVec(2) As Double\n        dDirVec(0) = dPt(0) - dOrig(0): dDirVec(1) = dPt(1) - dOrig(1): dDirVec(2) = dPt(2) - dOrig(2)\n        Dim swDirVec As MathVector\n        \n        Set swDirVec = swMathUtils.CreateVector(dDirVec)\n        \n        Dim swNormVec As SldWorks.MathVector\n        Set swNormVec = swMathUtils.CreateVector(dNormVec)\n        \n        IsHole = GetAngle(swDirVec, swNormVec) < PI / 2\n        \n    Else\n        Err.Raise vbError, , "\u6240\u9009\u9762\u4e0d\u662f\u5706\u67f1\u9762"\n    End If\n    \nEnd Function\n\nFunction GetAngle(vec1 As MathVector, vec2 As MathVector) As Double\n    \n    \'cos a= a*b/(|a|*|b|)\n    GetAngle = ACos(vec1.Dot(vec2) / (vec1.GetLength() * vec2.GetLength()))\n    \nEnd Function\n\nFunction ACos(val As Double) As Double\n    \n    If val = 1 Then\n        ACos = 0\n    ElseIf val = -1 Then\n        ACos = 4 * Atn(1)\n    Else\n        ACos = Atn(-val / Sqr(-val * val + 1)) + 2 * Atn(1)\n    End If\n    \nEnd Function\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System.Runtime.InteropServices;\nusing System;\n\nnamespace HoleOrBoss.csproj\n{\n    public partial class SolidWorksMacro\n    {\n        public void Main()\n        {\n            IModelDoc2 doc = swApp.IActiveDoc2;\n\n            if (doc != null)\n            {\n                IFace2 face = doc.ISelectionManager.GetSelectedObject6(1, -1) as IFace2;\n\n                if (face != null)\n                {\n                    if (IsHole(face))\n                    {\n                        swApp.SendMsgToUser("\u6240\u9009\u9762\u662f\u5b54");\n                    }\n                    else\n                    {\n                        swApp.SendMsgToUser("\u6240\u9009\u9762\u662f\u51f8\u53f0");\n                    }\n                }\n                else\n                {\n                    throw new Exception("\u672a\u9009\u62e9\u9762");\n                }\n            }\n            else\n            {\n                throw new Exception("\u672a\u6253\u5f00\u6587\u6863");\n            }\n        }\n\n        private bool IsHole(IFace2 face)\n        {\n            ISurface surf = face.IGetSurface();\n\n            if (surf.IsCylinder())\n            {\n                double[] uvBounds = face.GetUVBounds() as double[];\n\n                double[] evalData = surf.Evaluate((uvBounds[1] - uvBounds[0]) / 2, (uvBounds[3] - uvBounds[2]) / 2, 1, 1) as double[];\n\n                double[] pt = new double[] { evalData[0], evalData[1], evalData[2] };\n\n                int sense = face.FaceInSurfaceSense() ? 1 : -1;\n\n                double[] norm = new double[] { evalData[evalData.Length - 3] * sense, evalData[evalData.Length - 2] * sense, evalData[evalData.Length - 1] * sense };\n\n                double[] cylParams = surf.CylinderParams as double[];\n\n                double[] orig = new double[] { cylParams[0], cylParams[1], cylParams[2] };\n\n                double[] dir = new double[] { pt[0] - orig[0], pt[1] - orig[1], pt[2] - orig[2] };\n\n                IMathUtility mathUtils = swApp.IGetMathUtility();\n\n                IMathVector dirVec = mathUtils.CreateVector(dir) as IMathVector;\n                IMathVector normVec = mathUtils.CreateVector(norm) as IMathVector;\n\n                return GetAngle(dirVec, normVec) < Math.PI / 2;\n            }\n            else\n            {\n                throw new NotSupportedException("\u4ec5\u652f\u6301\u5706\u67f1\u9762");\n            }\n        }\n\n        private double GetAngle(IMathVector vec1, IMathVector vec2)\n        {\n            return Math.Acos(vec1.Dot(vec2) / (vec1.GetLength() * vec2.GetLength()));\n        }\n\n        public SldWorks swApp;\n    }\n}\n')))}w.isMDXComponent=!0},48601:(A,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,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"},12591:(A,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/inner-face-outer-face-3965b81a585ef66389e0c3247b67ff2d.png"}}]);