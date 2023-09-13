"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[41309],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),p=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?o.createElement(f,a(a({ref:e},c),{},{components:n})):o.createElement(f,a({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[m]="string"==typeof t?t:r,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83873:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const s={layout:"sw-tool",title:"Export part or selected component to STL using SOLIDWORKS API",caption:"Export Part Or Component To STL",description:"Macro exports selected assembly component or part to stl format without the need of activating the document. Macro can optionally apply transformation to the exported STL to reorient the output",image:"stl-component.svg",labels:["component","export","stl"],group:"Import/Export","redirect-from":["/solidworks-api/import-export/export-component-stl/"]},a=void 0,i={unversionedId:"codestack/solidworks-api/import-export/export-stl/index",id:"codestack/solidworks-api/import-export/export-stl/index",title:"Export part or selected component to STL using SOLIDWORKS API",description:"Macro exports selected assembly component or part to stl format without the need of activating the document. Macro can optionally apply transformation to the exported STL to reorient the output",source:"@site/docs/codestack/solidworks-api/import-export/export-stl/index.md",sourceDirName:"codestack/solidworks-api/import-export/export-stl",slug:"/codestack/solidworks-api/import-export/export-stl/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/export-stl/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/import-export/export-stl/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Export part or selected component to STL using SOLIDWORKS API",caption:"Export Part Or Component To STL",description:"Macro exports selected assembly component or part to stl format without the need of activating the document. Macro can optionally apply transformation to the exported STL to reorient the output",image:"stl-component.svg",labels:["component","export","stl"],group:"Import/Export","redirect-from":["/solidworks-api/import-export/export-component-stl/"]},sidebar:"tutorialSidebar",previous:{title:"Export individual sheets from SOLIDWORKS drawing to PDF",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/export-sheets-pdf/"},next:{title:"Macro to import STEP files and save as SOLIDWORKS files using a sub-folder with the same name",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/import-step/"}},l={},p=[{value:"Configuring the orientation",id:"configuring-the-orientation",level:2},{value:"Running instructions",id:"running-instructions",level:2}],c={toc:p},m="wrapper";function u(t){let{components:e,...s}=t;return(0,r.kt)(m,(0,o.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Selected component exported to STL",src:n(4047).Z,width:"359",height:"371"}),"{ width=250 }"),(0,r.kt)("p",null,"This C# VSTA macro exports active part or selected component in assembly to STL format using SOLIDWORKS API. Macro will also work with the components loaded lightweight."),(0,r.kt)("p",null,"This macro is not using the default exporter and overcomes the limitation when the model needs to be loaded in its own window, i.e. ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~saveas.html"},"IModelDocExtension::SaveAs")," SOLIDWORKS API function is not used. Macro will create stl from the tessellation triangles of the model."),(0,r.kt)("p",null,"Macro can optionally apply the transform to rotate or move the STL file. It is not required to create a coordinate system for this to happen."),(0,r.kt)("p",null,"For more information about the STL specification follow ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/STL_(file_format)"},"this link"),"."),(0,r.kt)("h2",{id:"configuring-the-orientation"},"Configuring the orientation"),(0,r.kt)("p",null,"In order to configure the orientation of the output file it is required to change the values of 4x4 orientation matrix defined in the ",(0,r.kt)("em",{parentName:"p"},"m_Transform")," at the beginning of the macro."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/geometry/transformation/get-coordinate-system-transform/"},"Get Coordinate System Transform")," macro to retrieve the transformation from any selected coordinate system."),(0,r.kt)("p",null,"For example to set the 90 degrees rotation around X axis in clockwise direction it is required to change the values of the ",(0,r.kt)("em",{parentName:"p"},"m_Transform")," array to the ones below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"private double[] m_Transform = new double[]\n{\n    1,-0,0,0,\n    0,-1,0,1,\n    0,0,0,0,\n    1,0,0,0\n};\n")),(0,r.kt)("h2",{id:"running-instructions"},"Running instructions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open part")),(0,r.kt)("p",null,"or"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open assembly (can be opened lightweight)"),(0,r.kt)("li",{parentName:"ul"},"Select part component"),(0,r.kt)("li",{parentName:"ul"},"Browse the location of the output STL file"),(0,r.kt)("li",{parentName:"ul"},"File is exported")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System.Runtime.InteropServices;\nusing System;\nusing System.Collections.Generic;\nusing System.Diagnostics;\nusing System.IO;\nusing System.Text;\nusing System.Windows.Forms;\n\nnamespace ExportToStl.csproj\n{\n    public partial class SolidWorksMacro\n    {\n        private double[] m_Transform = new double[]\n        {\n            1, 0, 0, 0,\n            1, 0, 0, 0,\n            1, 0, 0, 0,\n            1, 0, 0, 0\n        };\n\n        public void Main()\n        {\n            try\n            {\n                IModelDoc2 model = swApp.IActiveDoc2;\n\n                if (model != null)\n                {\n                    string fileNameBase = "";\n\n                    float[] tessTriangs;\n                    float[] tessNorms;\n\n                    if (model is IPartDoc)\n                    {\n                        fileNameBase = model.GetTitle();\n                        GetTesselationDataFromPart(model as IPartDoc, out tessTriangs, out tessNorms);\n                    }\n                    else if (model is IAssemblyDoc)\n                    {\n                        IComponent2 comp = model.ISelectionManager.GetSelectedObjectsComponent3(1, -1) as IComponent2;\n\n                        if (comp != null)\n                        {\n                            GetTesselationData(comp, out tessTriangs, out tessNorms);\n\n                            fileNameBase = comp.GetPathName();\n                        }\n                        else\n                        {\n                            throw new NullReferenceException("Please select component");\n                        }\n                    }\n                    else \n                    {\n                        throw new NotSupportedException("Document type is not support, parts or assembly components are supported");\n                    }\n\n                    string filePath = BrowseFile(Path.GetFileNameWithoutExtension(fileNameBase));\n\n                    if (!string.IsNullOrEmpty(filePath))\n                    {\n                        ExportToStl(filePath, tessTriangs, tessNorms, m_Transform);\n                    }\n\n                }\n                else\n                {\n                    throw new NullReferenceException("Please open part or assembly");\n                }\n            }\n            catch (Exception ex)\n            {\n                swApp.SendMsgToUser2(ex.Message, (int)swMessageBoxIcon_e.swMbStop, (int)swMessageBoxBtn_e.swMbOk);\n            }\n        }\n\n        private void GetTesselationData(IComponent2 comp, out float[] tessTriangs, out float[] tessNorms)\n        {\n            IModelDoc2 compModel = comp.IGetModelDoc();\n\n            if (compModel == null)\n            {\n                if (Path.GetExtension(comp.GetPathName()).Equals(".sldprt", StringComparison.CurrentCultureIgnoreCase))\n                {\n                    tessTriangs = comp.GetTessTriangles(true) as float[];\n                    tessNorms = comp.GetTessNorms() as float[];\n                }\n                else\n                {\n                    throw new NotSupportedException("Only parts are supported");\n                }\n            }\n            else\n            {\n                if (compModel is IPartDoc)\n                {\n                    GetTesselationDataFromPart(compModel as IPartDoc, out tessTriangs, out tessNorms);\n                }\n                else\n                {\n                    throw new NotSupportedException("Only parts are supported");\n                }\n            }\n        }\n\n        private void GetTesselationDataFromPart(IPartDoc part, out float[] tessTriangs, out float[] tessNorms) \n        {\n            tessTriangs = part.GetTessTriangles(true) as float[];\n            tessNorms = part.GetTessNorms() as float[];\n        }\n\n        private void ExportToStl(string filePath, float[] tessTriangs, float[] tessNorms, double[] transformMatrix)\n        {\n            IMathUtility mathUtils = swApp.IGetMathUtility();\n            IMathTransform transform = (mathUtils.CreateTransform(transformMatrix) as IMathTransform).IInverse();\n\n            using (FileStream fileStream = File.Create(filePath))\n            {\n                using (BinaryWriter writer = new BinaryWriter(fileStream))\n                {\n                    byte[] header = new byte[80];\n\n                    writer.Write(header);\n\n                    uint triangsCount = (uint)tessTriangs.Length / 9;\n                    writer.Write(triangsCount);\n\n                    for (uint i = 0; i < triangsCount; i++)\n                    {\n                        float normalX = tessNorms[i * 9];\n                        float normalY = tessNorms[i * 9 + 1];\n                        float normalZ = tessNorms[i * 9 + 2];\n\n                        IMathVector mathVec = mathUtils.CreateVector(\n                            new double[] { normalX, normalY, normalZ }) as IMathVector;\n\n                        mathVec = mathVec.MultiplyTransform(transform) as IMathVector;\n\n                        double[] vec = mathVec.ArrayData as double[];\n\n                        writer.Write((float)vec[0]);\n                        writer.Write((float)vec[1]);\n                        writer.Write((float)vec[2]);\n\n                        for (uint j = 0; j < 3; j++)\n                        {\n                            float vertX = tessTriangs[i * 9 + j * 3];\n                            float vertY = tessTriangs[i * 9 + j * 3 + 1];\n                            float vertZ = tessTriangs[i * 9 + j * 3 + 2];\n\n                            IMathPoint mathPt = mathUtils.CreatePoint(\n                                new double[] { vertX, vertY, vertZ }) as IMathPoint;\n\n                            mathPt = mathPt.MultiplyTransform(transform) as IMathPoint;\n\n                            double[] pt = mathPt.ArrayData as double[];\n\n                            writer.Write((float)pt[0]);\n                            writer.Write((float)pt[1]);\n                            writer.Write((float)pt[2]);\n                        }\n\n                        ushort atts = 0;\n                        writer.Write(atts);\n                    }\n                }\n            }\n        }\n\n        private string BrowseFile(string defName)\n        {\n            SaveFileDialog dlg = new SaveFileDialog();\n            dlg.Filter = "STL Files (*.stl)|*.stl";\n            dlg.FileName = defName + ".stl";\n\n            if (dlg.ShowDialog() == DialogResult.OK)\n            {\n                return dlg.FileName;\n            }\n            else\n            {\n                return "";\n            }\n        }\n\n        public SldWorks swApp;\n    }\n}\n')))}u.isMDXComponent=!0},4047:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/component-stl-dd82f4c45b7be8b3265e2880111cf130.png"}}]);