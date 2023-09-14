"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[50632],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),y=o,m=u["".concat(l,".").concat(y)]||u[y]||p[y]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},41404:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const i={title:"Finding the body bounding cylinder using SOLIDWORKS API",caption:"Get Body Bounding Cylinder",description:"This example demonstrates how to get the bounding cylinder of the solid body using SOLIDWORKS API",image:"cylindrical-bounding-box.png"},a=void 0,s={unversionedId:"codestack/solidworks-api/geometry/get-bounding-cylinder/index",id:"codestack/solidworks-api/geometry/get-bounding-cylinder/index",title:"Finding the body bounding cylinder using SOLIDWORKS API",description:"This example demonstrates how to get the bounding cylinder of the solid body using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/geometry/get-bounding-cylinder/index.md",sourceDirName:"codestack/solidworks-api/geometry/get-bounding-cylinder",slug:"/codestack/solidworks-api/geometry/get-bounding-cylinder/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/get-bounding-cylinder/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/get-bounding-cylinder/index.md",tags:[],version:"current",frontMatter:{title:"Finding the body bounding cylinder using SOLIDWORKS API",caption:"Get Body Bounding Cylinder",description:"This example demonstrates how to get the bounding cylinder of the solid body using SOLIDWORKS API",image:"cylindrical-bounding-box.png"},sidebar:"tutorialSidebar",previous:{title:"Fill hole with temp body using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/fill-hole/"},next:{title:"Get b-spline parameters from the selected edge using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/get-bspline-parameters/"}},l={},d=[{value:"SolidWorksMacro.cs",id:"solidworksmacrocs",level:3},{value:"CylinderParams.cs",id:"cylinderparamscs",level:3},{value:"BodyHelper.cs",id:"bodyhelpercs",level:3},{value:"BodyHelper.cs",id:"bodyhelpercs-1",level:3}],c={toc:d},u="wrapper";function p(e){let{components:n,...i}=e;return(0,o.kt)(u,(0,r.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cylindrical bounding box is created around the body",src:t(78078).Z,width:"503",height:"565"}),"{ width=400 }"),(0,o.kt)("p",null,"This example demonstrates how to find the bounding cylinder of the solid body using SOLIDWORKS API."),(0,o.kt)("p",null,"Macro requires user to select the input parameter to identify the direction of the cylinder. User either needs to select circular face (in this case the axis will be used as the reference) or plane feature (in this case the normal will be used as the reference)."),(0,o.kt)("p",null,"As the result new feature is created representing the cylindrical boundary of the body."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This macro will create best-fit bounding cylinder for the bodies at any orientation. It is no necessarily to have the body aligned with XYZ axes.")),(0,o.kt)("p",null,"Macro can be downloaded at ",(0,o.kt)("a",{target:"_blank",href:t(19662).Z},"this link"),". Unzip the macro and run it from Tools->Macro->Run menu command. Specify the correct filter as shown below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Running the VSTA macro from SOLIDWORKS",src:t(94098).Z,width:"1027",height:"565"}),"{ width=500 }"),(0,o.kt)("h3",{id:"solidworksmacrocs"},"SolidWorksMacro.cs"),(0,o.kt)("p",null,"This is an entry point of VSTA macro. In this module the input parameters are processed and the output body is created"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System.Runtime.InteropServices;\nusing System;\nusing CodeStack;\n\nnamespace CodeStack\n{\n    public partial class SolidWorksMacro\n    {\n        public void Main()\n        {\n            try\n            {\n                IModelDoc2 model = swApp.IActiveDoc2;\n\n                if (model is IPartDoc)\n                {\n                    BodyHelper proc = new BodyHelper(swApp.IGetMathUtility());\n\n                    object selObj = model.ISelectionManager.GetSelectedObject6(1, -1);\n\n                    CylinderParams cylParams = proc.GetBoundingCylinder(\n                        GetBodyToProcess(model as IPartDoc, selObj),\n                        GetDirection(model, selObj));\n\n                    CreateCylindricalBody(model as IPartDoc, cylParams);\n\n                }\n                else\n                {\n                    throw new NullReferenceException("No Part Document opened");\n                }\n            }\n            catch (Exception ex)\n            {\n                swApp.SendMsgToUser2("Error: " + ex.Message, \n                    (int)swMessageBoxIcon_e.swMbStop, (int)swMessageBoxBtn_e.swMbOk);\n            }\n        }\n\n        private void CreateCylindricalBody(IPartDoc part, CylinderParams cylParams)\n        {\n            IBody2 cylTempBody = swApp.IGetModeler().CreateBodyFromCyl(new double[]\n                    {\n                        cylParams.Origin[0], cylParams.Origin[1], cylParams.Origin[2],\n                        cylParams.Direction[0], cylParams.Direction[1], cylParams.Direction[2],\n                        cylParams.Radius, cylParams.Height\n                    }) as IBody2;\n\n            IFeature feat = part.CreateFeatureFromBody3(cylTempBody, false,\n                (int)swCreateFeatureBodyOpts_e.swCreateFeatureBodySimplify) as IFeature;\n\n            IBody2 body = feat.GetBody() as IBody2;\n\n            body.MaterialPropertyValues2 = new double[] { 1, 1, 0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 };\n\n        }\n\n        private IBody2 GetBodyToProcess(IPartDoc part, object inputObj)\n        {\n            if (inputObj is IFace2)\n            {\n                return (inputObj as IFace2).GetBody() as IBody2;\n            }\n            else\n            {\n                object[] solidBodies = part.GetBodies2((int)swBodyType_e.swSolidBody, true) as object[];\n\n                if (solidBodies != null && solidBodies.Length == 1)\n                {\n                    return solidBodies[0] as IBody2;\n                }\n            }\n\n            throw new NullReferenceException("Failed to find the input body. Either select cylindrical face or use single body part");\n        }\n\n        private double[] GetDirection(IModelDoc2 model, object inputObj)\n        {\n            if (inputObj is IFace2)\n            {\n                ISurface surf = (inputObj as IFace2).GetSurface() as ISurface;\n\n                if (surf.IsCylinder())\n                {\n                    double[] cylParams = surf.CylinderParams as double[];\n\n                    return new double[] { cylParams[3], cylParams[4], cylParams[5] };\n                }\n            }\n            else if (inputObj is IFeature)\n            {\n                IRefPlane refPlane = (inputObj as IFeature).GetSpecificFeature2() as IRefPlane;\n\n                if (refPlane != null)\n                {\n                    IMathUtility mathUtils = swApp.GetMathUtility() as IMathUtility;\n                    IMathVector vec = mathUtils.CreateVector(new double[] { 0, 0, 1 }) as IMathVector;\n                    vec = vec.MultiplyTransform(refPlane.Transform) as IMathVector;\n                    return vec.ArrayData as double[];\n                }\n            }\n\n            throw new NullReferenceException("Failed to find the direction. Please select cylindrical face or plane");\n        }\n\n        public SldWorks swApp;\n    }\n}\n\n\n\n')),(0,o.kt)("h3",{id:"cylinderparamscs"},"CylinderParams.cs"),(0,o.kt)("p",null,"This structure represents the details of the bounding cylinder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"using System;\nusing System.Collections.Generic;\nusing System.Text;\n\nnamespace CodeStack\n{\n    public class CylinderParams\n    {\n        public double Height;\n        public double[] Origin;\n        public double[] Direction;\n        public double Radius;\n\n        public CylinderParams(double height, double[] origin, double[] dir, double rad)\n        {\n            Height = height;\n            Origin = origin;\n            Radius = rad;\n            Direction = dir;\n        }\n    }\n}\n\n")),(0,o.kt)("h3",{id:"bodyhelpercs"},"BodyHelper.cs"),(0,o.kt)("p",null,"This utility class allows to find the orientation of the body and fit it into the cylinder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"using System;\nusing System.Collections.Generic;\nusing System.Text;\nusing SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\n\nnamespace CodeStack\n{\n    public class BodyHelper\n    {\n        private IMathUtility m_MathUtils;\n        private MathHelper m_MathHelper;\n\n        public BodyHelper(IMathUtility mathUtils) \n        {\n            m_MathUtils = mathUtils;\n            m_MathHelper = new MathHelper(mathUtils);\n        }\n\n        public CylinderParams GetBoundingCylinder(IBody2 body, double[] dir)\n        {\n            double[] xAxis = new double[] { 1, 0, 0 };\n            double[] yAxis = new double[] { 0, 1, 0 };\n            double[] zAxis = new double[] { 0, 0, 1 };\n\n            bool isAligned = m_MathHelper.ArrayEqual(dir, yAxis);\n            IMathTransform alignTransform = null;\n\n            if (!isAligned)\n            {\n                alignTransform = m_MathHelper.GetTransformBetweenVectorsAroundPoint(\n                    dir, yAxis, new double[] { 0, 0, 0 });\n\n                IBody2 bodyCopy = body.ICopy();\n\n                bodyCopy.ApplyTransform(alignTransform as MathTransform);\n\n                body = bodyCopy;\n            }\n\n            double[] rootPt;\n            double[] endPt;\n            GetExtremePoints(body, yAxis, out rootPt, out endPt);\n\n            double height = Math.Abs(endPt[1] - rootPt[1]);\n\n            dir = new double[] { 0, endPt[1] - rootPt[1], 0 };\n\n            List<double[]> perPoints = GetPerimeterPoints(body, xAxis, zAxis);\n            List<Point> points = new List<Point>();\n\n            foreach (double[] pt in perPoints)\n            {\n                points.Add(new Point(pt[0], pt[2]));\n            }\n\n            Circle cir = SmallestEnclosingCircle.MakeCircle(points);\n\n            double[] circCenter = new double[] { cir.c.x, rootPt[1], cir.c.y };\n\n            if (!isAligned)\n            {\n                circCenter = m_MathHelper.TransformPoint(circCenter, alignTransform.IInverse());\n                dir = m_MathHelper.TransformVector(dir, alignTransform.IInverse());\n            }\n\n            double radius = cir.r;\n\n            return new CylinderParams(height, circCenter, dir, radius);\n        }\n\n        private List<double[]> GetPerimeterPoints(IBody2 body, params double[][] directions) \n        {\n            List<double[]> perPoints = new List<double[]>();\n            double[] pt1;\n            double[] pt2;\n\n            foreach (double[] dir in directions)\n            {\n                GetExtremePoints(body, dir, out pt1, out pt2);\n\n                perPoints.Add(pt1);\n                perPoints.Add(pt2);\n            }\n\n            return perPoints;\n        }\n\n        private void GetExtremePoints(IBody2 body, double[] dir, out double[] pt1, out double[] pt2) \n        {\n            double x;\n            double y;\n            double z;\n\n            body.GetExtremePoint(dir[0], dir[1], dir[2], out x, out y, out z);\n            pt1 = new double[] { x, y, z };\n\n            body.GetExtremePoint(-dir[0], -dir[1], -dir[2], out x, out y, out z);\n            pt2 = new double[] { x, y, z };\n        }\n    }\n}\n\n")),(0,o.kt)("h3",{id:"bodyhelpercs-1"},"BodyHelper.cs"),(0,o.kt)("p",null,"This module provides utility functions for working with vectors, transformations and points"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"using System;\nusing System.Collections.Generic;\nusing System.Text;\nusing SolidWorks.Interop.sldworks;\n\nnamespace CodeStack\n{\n    public class MathHelper\n    {\n        private IMathUtility m_MathUtils;\n\n        public MathHelper(IMathUtility mathUtils)\n        {\n            m_MathUtils = mathUtils;\n        }\n\n        public double[] TransformVector(double[] dir, IMathTransform transform)\n        {\n            IMathVector vec = m_MathUtils.CreateVector(dir) as IMathVector;\n            vec = vec.MultiplyTransform(transform) as IMathVector;\n            return vec.ArrayData as double[];\n        }\n\n        public double[] TransformPoint(double[] pt, IMathTransform transform)\n        {\n            IMathPoint point = m_MathUtils.CreatePoint(pt) as IMathPoint;\n            point = point.MultiplyTransform(transform) as IMathPoint;\n            return point.ArrayData as double[];\n        }\n\n        public IMathTransform GetTransformBetweenVectorsAroundPoint(\n            double[] vec1, double[] vec2, double[] pt)\n        {\n            IMathVector mathVec1 = m_MathUtils.CreateVector(vec1) as IMathVector;\n            IMathVector mathVec2 = m_MathUtils.CreateVector(vec2) as IMathVector;\n            IMathVector crossVec = mathVec1.Cross(mathVec2) as IMathVector;\n\n            double dot = mathVec1.Dot(mathVec2);\n            double vec1Len = mathVec1.GetLength();\n            double vec2Len = mathVec2.GetLength();\n\n            double angle = Math.Acos(dot / vec1Len * vec2Len);\n\n            IMathPoint mathPt = m_MathUtils.CreatePoint(pt) as IMathPoint;\n\n            return m_MathUtils.CreateTransformRotateAxis(mathPt, crossVec, angle) as IMathTransform;\n        }\n\n        public bool ArrayEqual(double[] arr1, double[] arr2)\n        {\n            if (arr1 != null && arr2 != null)\n            {\n                if (arr1.Length == arr2.Length)\n                {\n                    for (int i = 0; i < arr1.Length; i++)\n                    {\n                        if (arr1[i] != arr2[i])\n                        {\n                            return false;\n                        }\n                    }\n                }\n            }\n\n            return false;\n        }\n    }\n}\n\n")),(0,o.kt)("p",null,"This macro requires a reference to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.nayuki.io/page/smallest-enclosing-circle"},"Smallest enclosing circle - Library (C#)")," by Project Nayuki."))}p.isMDXComponent=!0},19662:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/GetBoundingCylinderBin-001fb11cb0b11f42d8673d291405f005.zip"},78078:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/cylindrical-bounding-box-aa002911054517c12e01a3781f37ba05.png"},94098:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/run-vsta-macro-2051dece0d85a48825253f418135cb8c.png"}}]);