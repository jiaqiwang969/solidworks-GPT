"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[67004],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=o.createContext({}),l=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(d.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=l(t),p=i,f=c["".concat(d,".").concat(p)]||c[p]||m[p]||r;return t?o.createElement(f,s(s({ref:n},u),{},{components:t})):o.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=p;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a[c]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<r;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},33164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(87462),i=(t(67294),t(3905));const r={title:"Import and render XAML file using VBO in OpenGL and SOLIDWORKS API",caption:"Import XAML File And Render Using VBO",description:"C# add-in to import the geometry in XAML format into the current model space and render the graphics with high performance using Vertex Buffer Object (VBO) of OpenGL and SOLIDWORKS API",image:"vbo-opengl.png",labels:["opengl","vbo","performance","xaml","graphics"]},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/vbo-xaml-importer/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/vbo-xaml-importer/index",title:"Import and render XAML file using VBO in OpenGL and SOLIDWORKS API",description:"C# add-in to import the geometry in XAML format into the current model space and render the graphics with high performance using Vertex Buffer Object (VBO) of OpenGL and SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/vbo-xaml-importer/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/vbo-xaml-importer",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/vbo-xaml-importer/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/vbo-xaml-importer/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/vbo-xaml-importer/index.md",tags:[],version:"current",frontMatter:{title:"Import and render XAML file using VBO in OpenGL and SOLIDWORKS API",caption:"Import XAML File And Render Using VBO",description:"C# add-in to import the geometry in XAML format into the current model space and render the graphics with high performance using Vertex Buffer Object (VBO) of OpenGL and SOLIDWORKS API",image:"vbo-opengl.png",labels:["opengl","vbo","performance","xaml","graphics"]},sidebar:"tutorialSidebar",previous:{title:"Render tetrahedron using OpenGL and handle view display modes using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/display-mode-tetrahedron/"},next:{title:"Working with sketch using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/"}},d={},l=[{value:"AddIn.cs",id:"addincs",level:2},{value:"MeshRendererModel.cs",id:"meshrenderermodelcs",level:2}],u={toc:l},c="wrapper";function m(e){let{components:n,...r}=e;return(0,i.kt)(c,(0,o.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This C# add-in demonstrates how to import the geometry in the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Extensible_Application_Markup_Language"},"XAML")," file into the active model space using SOLIDWORKS API. To achieve the maximum performance the graphics is rendered using the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Vertex_buffer_object"},"Vertex Buffer Object (VBO)")," feature of OpenGL."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://opentk.net/"},"OpenTK")," library is used to invoke OpenGL APIs."),(0,i.kt)("p",null,"Add-in can import the XAML files created from Part documents only (XAML files from the assembly are not supported)."),(0,i.kt)("p",null,"XAML file export format supported natively by SOLIDWORKS. Use ",(0,i.kt)("em",{parentName:"p"},"File->Save As")," menu command to export file in the XAML format."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Save As XAML format in File Save As dialog",src:t(23850).Z,width:"965",height:"762"}),"{ width=550 }"),(0,i.kt)("p",null,"However this format cannot be imported natively. Add-in adds the ",(0,i.kt)("em",{parentName:"p"},"Import XAML File")," commands into the menu. Open new or existing file and import xaml using this command."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Import XAML command in menu",src:t(51084).Z,width:"651",height:"165"}),"{ width=450 }"),(0,i.kt)("p",null,"Graphics is rendered using OpenGL. Model can be rotated, zoomed, panned. There are no feature elements or temp bodies created and graphics is rendered with high performance."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Geometry rendered using OpenGL",src:t(46577).Z,width:"728",height:"632"}),"{ width=350 }"),(0,i.kt)("p",null,"By default graphics of OpenGL is not respected by zoom commands. I.g. ",(0,i.kt)("em",{parentName:"p"},"Zoom To fit")," fill not fit the geometry properly and would ignore its bounding box. To specify the visible boundaries it is required to use the ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDocExtension~SetVisibleBox.html"},"IModelDocExtension::SetVisibleBox")," SOLIDWORKS API method. Note, it is not required to union the existing visible box of native SOLIDWORKS geometry, SOLIDWORKS will perform this operation automatically."),(0,i.kt)("p",null,"Source code can be downloaded from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/solidworks-api-examples/tree/master/swex/add-in/opengl/XamlImporter"},"GitHub")),(0,i.kt)("h2",{id:"addincs"},"AddIn.cs"),(0,i.kt)("p",null,"This the add-in entry point. ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/swex/add-in/"},"SwEx.AddIn")," framework is used to manage documents lifecycle by providing the wrapper class. Import command is handled in the add-in and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.windows.media.media3d.model3dgroup"},"Model3DGroup")," object of Microsoft WPF framework is extracted from the specified XAML file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.AddIn;\nusing CodeStack.SwEx.AddIn.Attributes;\nusing CodeStack.SwEx.AddIn.Base;\nusing CodeStack.SwEx.AddIn.Enums;\nusing CodeStack.SwEx.Common.Attributes;\nusing CodeStack.XamlImporter.Properties;\nusing SolidWorks.Interop.swconst;\nusing System;\nusing System.IO;\nusing System.Linq;\nusing System.Runtime.InteropServices;\nusing System.Windows.Controls;\nusing System.Windows.Forms;\nusing System.Windows.Markup;\nusing System.Windows.Media.Media3D;\n\nnamespace CodeStack.XamlImporter\n{\n    [Guid("1F872F6B-525E-4889-862E-B7A8C27C398C"), ComVisible(true)]\n    [AutoRegister("XamlImporter")]\n    public class AddIn : SwAddInEx\n    {\n        [Icon(typeof(Resources), nameof(Resources.xaml))]\n        [Title("OpenGL Import Xaml")]\n        private enum Commands_e\n        {\n            [Icon(typeof(Resources), nameof(Resources.xaml))]\n            [Title("Import XAML File")]\n            [CommandItemInfo(swWorkspaceTypes_e.Part | swWorkspaceTypes_e.Assembly)]\n            ImportXamlFile\n        }\n\n        private IDocumentsHandler<MeshRendererModel> m_DocsHandler;\n\n        public override bool OnConnect()\n        {\n            AddCommandGroup<Commands_e>(OnButtonClick);\n            m_DocsHandler = CreateDocumentsHandler<MeshRendererModel>();\n            return true;\n        }\n\n        private void OnButtonClick(Commands_e cmd)\n        {\n            switch (cmd)\n            {\n                case Commands_e.ImportXamlFile:\n                    try\n                    {\n                        using (var openFileDlg = new OpenFileDialog())\n                        {\n                            openFileDlg.Filter = "Microsoft XAML Files (*.xaml)|*.xaml|All Files (*.*)|*.*";\n                            openFileDlg.RestoreDirectory = true;\n\n                            if (openFileDlg.ShowDialog() == DialogResult.OK)\n                            {\n                                var xamlFilePath = openFileDlg.FileName;\n\n                                var model = GetModel3DFromFile(xamlFilePath);\n                                m_DocsHandler[App.IActiveDoc2].Model3D = model;\n                            }\n                        }\n                    }\n                    catch(Exception ex)\n                    {\n                        App.SendMsgToUser2(ex.Message, (int)swMessageBoxIcon_e.swMbStop, (int)swMessageBoxBtn_e.swMbOk);\n                    }\n                    break;\n            }\n        }\n\n        private Model3DGroup GetModel3DFromFile(string file)\n        {\n            if (File.Exists(file))\n            {\n                using (var fileStream = File.OpenRead(file))\n                {\n                    var viewPort = XamlReader.Load(fileStream) as Viewport3D;\n                    var modelVisual = viewPort.Children.First() as ModelVisual3D;\n                    modelVisual = modelVisual.Children.Last() as ModelVisual3D;\n                    var model = modelVisual.Content as Model3DGroup;\n\n                    if (model == null)\n                    {\n                        throw new InvalidCastException("Content is not Model3DGroup");\n                    }\n\n                    return model;\n                }\n            }\n            else\n            {\n                throw new FileNotFoundException($"File {file} doesn\'t exist");\n            }\n        }\n    }\n}\n\n')),(0,i.kt)("h2",{id:"meshrenderermodelcs"},"MeshRendererModel.cs"),(0,i.kt)("p",null,"This is a handler class for each model document which subscribes to the OpenGL Buffer Swap notification provided by SOLIDWORKS and performs the binding and rendering of VBO based on the provided mesh data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.AddIn.Base;\nusing System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing SolidWorks.Interop.sldworks;\nusing System.Windows.Media.Media3D;\nusing OpenTK;\nusing OpenTK.Graphics.OpenGL;\nusing System.Windows.Media;\n\nnamespace CodeStack.XamlImporter\n{\n    public class MeshRendererModel : IDocumentHandler\n    {\n        private IMathUtility m_MathUtils;\n        private IModelDoc2 m_Model;\n        private ModelView m_View;\n\n        private GLControl m_GLControl;\n\n        private bool m_IsBufferInit;\n\n        private int m_ColorBufferId;\n        private int m_ElementBufferId;\n        private int m_NormalBufferId;\n        private int m_VertexBufferId;\n\n        private int m_IndicesCount;\n\n        private Model3DGroup m_Model3D;\n\n        public Model3DGroup Model3D\n        {\n            get\n            {\n                return m_Model3D;\n            }\n            set\n            {   \n                m_Model3D = value;\n                UpdateVisibleBox();\n                m_IsBufferInit = false;\n                m_Model.GraphicsRedraw2();\n            }\n        }\n\n        public void Init(ISldWorks app, IModelDoc2 model)\n        {\n            m_MathUtils = app.IGetMathUtility();\n\n            m_View = model.IActiveView;\n\n            if (m_View != null)\n            {\n                m_View.BufferSwapNotify += OnBufferSwapNotify;\n                \n                m_GLControl = new GLControl();\n                m_GLControl.Context.MakeCurrent(null);\n            }\n            else\n            {\n                throw new NullReferenceException("No active view");\n            }\n\n            m_Model = model;\n        }\n\n        public void Dispose()\n        {\n            if (m_View != null)\n            {\n                m_View.BufferSwapNotify += OnBufferSwapNotify;\n            }\n\n            m_GLControl.Dispose();\n        }\n        \n        private int OnBufferSwapNotify()\n        {\n            if (m_Model3D != null)\n            {\n                if (!m_IsBufferInit)\n                {\n                    InitBuffer();\n                    m_IsBufferInit = true;\n                }\n\n                RenderBuffer();\n            }\n\n            return 0;\n        }\n\n        private void UpdateVisibleBox()\n        {\n            m_Model.Extension.RemoveVisibleBox();\n\n            if (m_Model3D != null)\n            {\n                var curBox = m_Model3D.Bounds;\n\n                var pt1 = m_MathUtils.CreatePoint(new double[] { curBox.X, curBox.Y, curBox.Z }) as MathPoint;\n                var pt2 = m_MathUtils.CreatePoint(new double[] { curBox.X + curBox.SizeX, curBox.Y + curBox.SizeY, curBox.Z + curBox.SizeZ }) as MathPoint;\n\n                m_Model.Extension.SetVisibleBox(pt1, pt2);\n            }\n        }\n\n        private void InitBuffer()\n        {\n            var posList = new List<Vector3d>();\n            var indList = new List<uint>();\n            var normList = new List<Vector3d>();\n            var colList = new List<uint>();\n\n            int indicesOffset = 0;\n\n            if (m_Model3D != null)\n            {\n                foreach (var geometryModel in m_Model3D.Children)\n                {\n                    var geometryModel3d = geometryModel as GeometryModel3D;\n                    if (geometryModel3d != null)\n                    {\n                        var color = Colors.Black;\n                        var materialGrp = geometryModel3d.Material as MaterialGroup;\n                        var material = materialGrp?.Children?.FirstOrDefault() as DiffuseMaterial;\n                        if (material != null)\n                        {\n                            if (material.Brush is SolidColorBrush)\n                            {\n                                color = (material.Brush as SolidColorBrush).Color;\n                            }\n                        }\n\n                        var geom = geometryModel3d.Geometry as MeshGeometry3D;\n\n                        if (geom != null)\n                        {\n                            indList.AddRange(geom.TriangleIndices.Select(i => (uint)(i + indicesOffset)));\n                            indicesOffset += geom.Positions.Count;\n\n                            foreach (var pos in geom.Positions)\n                            {\n                                posList.Add(new Vector3d(pos.X, pos.Y, pos.Z));\n                                colList.Add(ColorToArgb(color));\n                            }\n\n                            foreach (var norm in geom.Normals)\n                            {\n                                normList.Add(new Vector3d(norm.X, norm.Y, norm.Z));\n                            }\n                        }\n                        else\n                        {\n                            throw new NotSupportedException("Only MeshGeometry3D is supported");\n                        }\n                    }\n                    else\n                    {\n                        throw new NotSupportedException("Only GeometryModel3D is supported");\n                    }\n                }\n\n                GenAndFillBuffer(posList.ToArray(), BufferTarget.ArrayBuffer, out m_VertexBufferId);\n                GenAndFillBuffer(colList.ToArray(), BufferTarget.ArrayBuffer, out m_ColorBufferId);\n                GenAndFillBuffer(normList.ToArray(), BufferTarget.ArrayBuffer, out m_NormalBufferId);\n                GenAndFillBuffer(indList.ToArray(), BufferTarget.ElementArrayBuffer, out m_ElementBufferId);\n\n                m_IndicesCount = indList.Count;\n            }\n        }\n\n        private void RenderBuffer()\n        {\n            GL.Disable(EnableCap.Lighting);\n\n            GL.BindBuffer(BufferTarget.ArrayBuffer, m_NormalBufferId);\n            GL.NormalPointer(NormalPointerType.Double, Vector3d.SizeInBytes, IntPtr.Zero);\n            GL.EnableClientState(ArrayCap.NormalArray);\n\n            GL.BindBuffer(BufferTarget.ArrayBuffer, m_VertexBufferId);\n            GL.VertexPointer(3, VertexPointerType.Double, Vector3d.SizeInBytes, IntPtr.Zero);\n            GL.EnableClientState(ArrayCap.VertexArray);\n\n            GL.BindBuffer(BufferTarget.ArrayBuffer, m_ColorBufferId);\n            GL.ColorPointer(4, ColorPointerType.UnsignedByte, sizeof(int), IntPtr.Zero);\n            GL.EnableClientState(ArrayCap.ColorArray);\n\n            GL.BindBuffer(BufferTarget.ElementArrayBuffer, m_ElementBufferId);\n\n            GL.DrawElements(PrimitiveType.Triangles, m_IndicesCount, DrawElementsType.UnsignedInt, IntPtr.Zero);\n        }\n\n        private uint ColorToArgb(Color color)\n        {\n            return (uint)color.A << 24 | (uint)color.B << 16 | (uint)color.G << 8 | (uint)color.R;\n        }\n\n        private void GenAndFillBuffer<T>(T[] dataBuffer, BufferTarget target, out int bufferId)\n            where T : struct\n        {\n            GL.GenBuffers(1, out bufferId);\n            GL.BindBuffer(target, bufferId);\n            var size = dataBuffer.Length * BlittableValueType.StrideOf(dataBuffer);\n            GL.BufferData(target, new IntPtr(size), dataBuffer, BufferUsageHint.StaticDraw);\n\n            int bufferSize;\n\n            GL.GetBufferParameter(target, BufferParameterName.BufferSize, out bufferSize);\n\n            if (size != bufferSize)\n            {\n                throw new Exception("Buffer size mismatch");\n            }\n\n            GL.BindBuffer(target, 0);\n        }\n    }\n}\n\n')))}m.isMDXComponent=!0},51084:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAosAAAClCAMAAAADDUdKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAGSzswA4i6UZAPf392Y6kLCwYwAAOIs4AKa8yDgAOC1xk8XFxViXtSptC4uLYzgAABsbGx5RAgBMu7JkAIuwiwA3VYGbp7bmrh122bDUi1+O0WQAODg4iy0wOYG57TNTY+mPeSsrK2QAALvJ0DKGroKCgomJiVpaWmOw9zgAZAAAZIs4OGQAZJKsuIC0ytjZ2A1Pbrm5uaCgoO0cJLBjOI6PkV4hFfewizKCAJba9NSLOCpEUkV0ihNixE6LqWWgTSVjgDqQ26zU5Fym8/fUi3R0dAA4Y/ewYx49DcjIyOY0BEFAQGSy1obP7GM4AJe5yduQOmVlAMzMzO3AtMvT1ziLi69eFFioyI1kjcTGyVSkxfvyqv+2tv62ZV9gZhk1RNLS0kFkdTiL1ABksjIyMtbW1mOLi2a2/zWAFdioNnm/3NTV1UVIUILM6Gtra3O31bCLi4vUsNvc2+bm5iN4m80fATg4ADx0kmOkwhsfJwA6kLGMOHB5fUuQ26ampiJcepYyADiLsLGxsThjsJubmz+PsxRHY5OTk3nG409QUCxpiG2l4NuQZtSLY3wWA9tXPUSCn7+/v3d+gxATHDw+QcHS6Dk5OYjT8S9/pDCC31SUsSMjI2aoxqbP39ezZDg4ZInN2ZDb/42NjQA6r0qQHnl5eWJiYtTUi2WTq5TE7S5wxVmVsgk9WZi85zx7mBdObFOFn2mYsUFETJA6ADqD2DY2Npqkk3bD4keX72+xz0tLS6q94TJohld7j4vU9kVFRWmtyglcwi51mV+gvS4uLtL19lRvfo/V8G2OVzF50JPB1ouw937J5nmi2JW+hFVVVoLC2iJpxWCg4TaJsbEjAtHouwBBX9wsAypkglhbYB1UcTBddLrM56ipq26QoDqQtsLXuq2trVGZu0J7mUmEoVubuTqMGbL5+m2pxUiN2jNtiwZDYGMlGgpIZUeVuCNCEnK3+rbi609zhZrD1VKe7pA6Or/M1HG+3VKPrTF/2TeN6S16nmObuTNxjwAAAClsq94AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAdn0lEQVR4Xu2dD5wcVX3AV5yWFUd6idfRWlDJmbsLAV3vWhRPi1A3Pa5AG7cW1G3smswW5chZd7REsFHP6AG2kVA4UkJFUu9ai1XrmVpSm6CQUhVRWk0prbQRMBapVvEPLeXT3+/3fvPmvfm3s7O7ub27901u5+2b997Ovvnu783MzswWrGXFdrvkcdKw1DAuGnoF46KhVzAuGnoF6eJ0i3C1HmMluTifxIwGl14CBC7yNCPGxUVnfigBTT/j4mKxolzkESqCcbEnWHkuvoMeNYyLPUGKi47DiYCaS6xZs4YzkjnzI8/mVAIvcBzRmsBxXsAzIgxxEWCIs3LBLkZlTHLRGx0e3hHung28KMwGzl4MVoyLzpNPRmR0RVlvw2CyjBVaRTXrzDPP5Jx4nLsPuJwE3LfcFFWfUYvxNIJt46NXt+16YpxnF62IjAkuVg4ePO+8666b4KdMaBHCSzTtusdsVa8UF50nv/jFq8N6cMc3NlhDiTK69uTkpA0lm8joHLjBteYYz73t9gwueuE1L7FrtuXVSh5QryTY6LsYkTHeRe/geY/u3Pno7KzenGsdRviZ5uLI7EgJnrsl+yr6aHSbJe/iY2s5QSS5CCpedtkd94X84I735mDgTJLRrSEb3Jm/PvPMf9g+mxglnBsu8NcjCOTe3jwuYjFORrA9z26giUgp3gTpYljGeBd3nPfo10751a89uu8MzhC41n/95DOfOWwdJFQXR/ZZwy50zZw77M2OcGY3ibjYX0Au52eS6ulHOSWQq6R/MzxUB9bB49iW8eMPUKZP+eRDnEqDmoDa9AQIv1YqL1qrypjgovMIBEXnvhvfpQsiXYQ6UwkyuhVBHQLjR7xSJUkf5wJwkcMixMWbtjVzES1L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"},23850:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/save-as-xaml-37c837fcdf5fdad615d98b3fd050fff0.png"},46577:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/vbo-opengl-29903a536015bc58d033e7634915d01b.png"}}]);