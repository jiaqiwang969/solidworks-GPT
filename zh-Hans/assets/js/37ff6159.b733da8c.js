"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[47461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const s={layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u96f6\u4ef6\u6216\u9009\u5b9a\u7684\u7ec4\u4ef6\u5bfc\u51fa\u4e3aSTL",image:"stl-component.svg",labels:["\u7ec4\u4ef6","\u5bfc\u51fa","stl"],group:"\u5bfc\u5165/\u5bfc\u51fa","redirect-from":["/solidworks-api/import-export/export-component-stl/"]},a=void 0,i={unversionedId:"codestack/solidworks-api/import-export/export-stl/index",id:"codestack/solidworks-api/import-export/export-stl/index",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u96f6\u4ef6\u6216\u9009\u5b9a\u7684\u7ec4\u4ef6\u5bfc\u51fa\u4e3aSTL",description:"\u5bfc\u51fa\u4e3aSTL\u7684\u9009\u5b9a\u7ec4\u4ef6{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/import-export/export-stl/index.md",sourceDirName:"codestack/solidworks-api/import-export/export-stl",slug:"/codestack/solidworks-api/import-export/export-stl/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/export-stl/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/import-export/export-stl/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u96f6\u4ef6\u6216\u9009\u5b9a\u7684\u7ec4\u4ef6\u5bfc\u51fa\u4e3aSTL",image:"stl-component.svg",labels:["\u7ec4\u4ef6","\u5bfc\u51fa","stl"],group:"\u5bfc\u5165/\u5bfc\u51fa","redirect-from":["/solidworks-api/import-export/export-component-stl/"]},sidebar:"tutorialSidebar",previous:{title:"\u4eceSOLIDWORKS\u56fe\u7eb8\u4e2d\u5bfc\u51fa\u5355\u72ec\u7684\u5de5\u4f5c\u8868\u5230PDF",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/export-sheets-pdf/"},next:{title:"\u4f7f\u7528\u76f8\u540c\u540d\u79f0\u7684\u5b50\u6587\u4ef6\u5939\u5bfc\u5165STEP\u6587\u4ef6\u5e76\u4fdd\u5b58\u4e3aSOLIDWORKS\u6587\u4ef6\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/import-step/"}},l={},p=[{value:"\u914d\u7f6e\u65b9\u5411",id:"\u914d\u7f6e\u65b9\u5411",level:2},{value:"\u8fd0\u884c\u8bf4\u660e",id:"\u8fd0\u884c\u8bf4\u660e",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...s}=e;return(0,o.kt)(c,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5bfc\u51fa\u4e3aSTL\u7684\u9009\u5b9a\u7ec4\u4ef6",src:n(32922).Z,width:"359",height:"371"}),"{ width=250 }"),(0,o.kt)("p",null,"\u8fd9\u4e2aC# VSTA\u5b8f\u4f7f\u7528SOLIDWORKS API\u5c06\u6d3b\u52a8\u96f6\u4ef6\u6216\u9009\u5b9a\u7684\u7ec4\u4ef6\u5bfc\u51fa\u4e3aSTL\u683c\u5f0f\u3002\u8be5\u5b8f\u8fd8\u9002\u7528\u4e8e\u52a0\u8f7d\u8f7b\u91cf\u7ea7\u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,"\u8be5\u5b8f\u4e0d\u4f7f\u7528\u9ed8\u8ba4\u7684\u5bfc\u51fa\u5668\uff0c\u5e76\u514b\u670d\u4e86\u6a21\u578b\u9700\u8981\u5728\u81ea\u5df1\u7684\u7a97\u53e3\u4e2d\u52a0\u8f7d\u7684\u9650\u5236\uff0c\u5373\u4e0d\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~saveas.html"},"IModelDocExtension::SaveAs")," SOLIDWORKS API\u51fd\u6570\u3002\u8be5\u5b8f\u5c06\u4ece\u6a21\u578b\u7684\u9576\u5d4c\u4e09\u89d2\u5f62\u521b\u5efaSTL\u3002"),(0,o.kt)("p",null,"\u8be5\u5b8f\u53ef\u4ee5\u9009\u62e9\u5e94\u7528\u53d8\u6362\u6765\u65cb\u8f6c\u6216\u79fb\u52a8STL\u6587\u4ef6\u3002\u4e0d\u9700\u8981\u4e3a\u6b64\u521b\u5efa\u5750\u6807\u7cfb\u3002"),(0,o.kt)("p",null,"\u6709\u5173STL\u89c4\u8303\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/STL_(file_format)"},"\u6b64\u94fe\u63a5"),"\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u65b9\u5411"},"\u914d\u7f6e\u65b9\u5411"),(0,o.kt)("p",null,"\u4e3a\u4e86\u914d\u7f6e\u8f93\u51fa\u6587\u4ef6\u7684\u65b9\u5411\uff0c\u9700\u8981\u5728\u5b8f\u7684\u5f00\u5934\u66f4\u6539",(0,o.kt)("em",{parentName:"p"},"m_Transform"),"\u4e2d\u5b9a\u4e49\u76844x4\u65b9\u5411\u77e9\u9635\u7684\u503c\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/geometry/transformation/get-coordinate-system-transform/"},"\u83b7\u53d6\u5750\u6807\u7cfb\u53d8\u6362"),"\u5b8f\u4ece\u4efb\u4f55\u9009\u5b9a\u7684\u5750\u6807\u7cfb\u4e2d\u68c0\u7d22\u53d8\u6362\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u8981\u8bbe\u7f6e\u7ed5X\u8f74\u987a\u65f6\u9488\u65b9\u5411\u65cb\u8f6c90\u5ea6\uff0c\u9700\u8981\u5c06",(0,o.kt)("em",{parentName:"p"},"m_Transform"),"\u6570\u7ec4\u7684\u503c\u66f4\u6539\u4e3a\u4ee5\u4e0b\u503c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"private double[] m_Transform = new double[]\n{\n    1,-0,0,0,\n    0,-1,0,1,\n    0,0,0,0,\n    1,0,0,0\n};\n")),(0,o.kt)("h2",{id:"\u8fd0\u884c\u8bf4\u660e"},"\u8fd0\u884c\u8bf4\u660e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6253\u5f00\u96f6\u4ef6")),(0,o.kt)("p",null,"\u6216\u8005"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6253\u5f00\u88c5\u914d\u4f53\uff08\u53ef\u4ee5\u4ee5\u8f7b\u91cf\u7ea7\u65b9\u5f0f\u6253\u5f00\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u9009\u62e9\u96f6\u4ef6\u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u8f93\u51faSTL\u6587\u4ef6\u7684\u4f4d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u88ab\u5bfc\u51fa")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System.Runtime.InteropServices;\nusing System;\nusing System.Collections.Generic;\nusing System.Diagnostics;\nusing System.IO;\nusing System.Text;\nusing System.Windows.Forms;\n\nnamespace ExportToStl.csproj\n{\n    public partial class SolidWorksMacro\n    {\n        private double[] m_Transform = new double[]\n        {\n            1, 0, 0, 0,\n            1, 0, 0, 0,\n            1, 0, 0, 0,\n            1, 0, 0, 0\n        };\n\n        public void Main()\n        {\n            try\n            {\n                IModelDoc2 model = swApp.IActiveDoc2;\n\n                if (model != null)\n                {\n                    string fileNameBase = "";\n\n                    float[] tessTriangs;\n                    float[] tessNorms;\n\n                    if (model is IPartDoc)\n                    {\n                        fileNameBase = model.GetTitle();\n                        GetTesselationDataFromPart(model as IPartDoc, out tessTriangs, out tessNorms);\n                    }\n                    else if (model is IAssemblyDoc)\n                    {\n                        IComponent2 comp = model.ISelectionManager.GetSelectedObjectsComponent3(1, -1) as IComponent2;\n\n                        if (comp != null)\n                        {\n                            GetTesselationData(comp, out tessTriangs, out tessNorms);\n\n                            fileNameBase = comp.GetPathName();\n                        }\n                        else\n                        {\n                            throw new NullReferenceException("Please select component");\n                        }\n                    }\n                    else \n                    {\n                        throw new NotSupportedException("Document type is not support, parts or assembly components are supported");\n                    }\n\n                    string filePath = BrowseFile(Path.GetFileNameWithoutExtension(fileNameBase));\n\n                    if (!string.IsNullOrEmpty(filePath))\n                    {\n                        ExportToStl(filePath, tessTriangs, tessNorms, m_Transform);\n                    }\n\n                }\n                else\n                {\n                    throw new NullReferenceException("Please open part or assembly");\n                }\n            }\n            catch (Exception ex)\n            {\n                swApp.SendMsgToUser2(ex.Message, (int)swMessageBoxIcon_e.swMbStop, (int)swMessageBoxBtn_e.swMbOk);\n            }\n        }\n\n        private void GetTesselationData(IComponent2 comp, out float[] tessTriangs, out float[] tessNorms)\n        {\n            IModelDoc2 compModel = comp.IGetModelDoc();\n\n            if (compModel == null)\n            {\n                if (Path.GetExtension(comp.GetPathName()).Equals(".sldprt", StringComparison.CurrentCultureIgnoreCase))\n                {\n                    tessTriangs = comp.GetTessTriangles(true) as float[];\n                    tessNorms = comp.GetTessNorms() as float[];\n                }\n                else\n                {\n                    throw new NotSupportedException("Only parts are supported");\n                }\n            }\n            else\n            {\n                if (compModel is IPartDoc)\n                {\n                    GetTesselationDataFromPart(compModel as IPartDoc, out tessTriangs, out tessNorms);\n                }\n                else\n                {\n                    throw new NotSupportedException("Only parts are supported");\n                }\n            }\n        }\n\n        private void GetTesselationDataFromPart(IPartDoc part, out float[] tessTriangs, out float[] tessNorms) \n        {\n            tessTriangs = part.GetTessTriangles(true) as float[];\n            tessNorms = part.GetTessNorms() as float[];\n        }\n\n        private void ExportToStl(string filePath, float[] tessTriangs, float[] tessNorms, double[] transformMatrix)\n        {\n            IMathUtility mathUtils = swApp.IGetMathUtility();\n            IMathTransform transform = (mathUtils.CreateTransform(transformMatrix) as IMathTransform).IInverse();\n\n            using (FileStream fileStream = File.Create(filePath))\n            {\n                using (BinaryWriter writer = new BinaryWriter(fileStream))\n                {\n                    byte[] header = new byte[80];\n\n                    writer.Write(header);\n\n                    uint triangsCount = (uint)tessTriangs.Length / 9;\n                    writer.Write(triangsCount);\n\n                    for (uint i = 0; i < triangsCount; i++)\n                    {\n                        float normalX = tessNorms[i * 9];\n                        float normalY = tessNorms[i * 9 + 1];\n                        float normalZ = tessNorms[i * 9 + 2];\n\n                        IMathVector mathVec = mathUtils.CreateVector(\n                            new double[] { normalX, normalY, normalZ }) as IMathVector;\n\n                        mathVec = mathVec.MultiplyTransform(transform) as IMathVector;\n\n                        double[] vec = mathVec.ArrayData as double[];\n\n                        writer.Write((float)vec[0]);\n                        writer.Write((float)vec[1]);\n                        writer.Write((float)vec[2]);\n\n                        for (uint j = 0; j < 3; j++)\n                        {\n                            float vertX = tessTriangs[i * 9 + j * 3];\n                            float vertY = tessTriangs[i * 9 + j * 3 + 1];\n                            float vertZ = tessTriangs[i * 9 + j * 3 + 2];\n\n                            IMathPoint mathPt = mathUtils.CreatePoint(\n                                new double[] { vertX, vertY, vertZ }) as IMathPoint;\n\n                            mathPt = mathPt.MultiplyTransform(transform) as IMathPoint;\n\n                            double[] pt = mathPt.ArrayData as double[];\n\n                            writer.Write((float)pt[0]);\n                            writer.Write((float)pt[1]);\n                            writer.Write((float)pt[2]);\n                        }\n\n                        ushort atts = 0;\n                        writer.Write(atts);\n                    }\n                }\n            }\n        }\n\n        private string BrowseFile(string defName)\n        {\n            SaveFileDialog dlg = new SaveFileDialog();\n            dlg.Filter = "STL Files (*.stl)|*.stl";\n            dlg.FileName = defName + ".stl";\n\n            if (dlg.ShowDialog() == DialogResult.OK)\n            {\n                return dlg.FileName;\n            }\n            else\n            {\n                return "";\n            }\n        }\n\n        public SldWorks swApp;\n    }\n}\n')))}u.isMDXComponent=!0},32922:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/component-stl-dd82f4c45b7be8b3265e2880111cf130.png"}}]);