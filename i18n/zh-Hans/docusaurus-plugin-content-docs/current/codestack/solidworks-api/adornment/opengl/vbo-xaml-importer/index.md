---
title: Import and render XAML file using VBO in OpenGL and SOLIDWORKS API
caption: Import XAML File And Render Using VBO
description: C# add-in to import the geometry in XAML format into the current model space and render the graphics with high performance using Vertex Buffer Object (VBO) of OpenGL and SOLIDWORKS API
image: vbo-opengl.png
labels: [opengl,vbo,performance,xaml,graphics]
---
This C# add-in demonstrates how to import the geometry in the [XAML](https://en.wikipedia.org/wiki/Extensible_Application_Markup_Language) file into the active model space using SOLIDWORKS API. To achieve the maximum performance the graphics is rendered using the [Vertex Buffer Object (VBO)](https://en.wikipedia.org/wiki/Vertex_buffer_object) feature of OpenGL.

[OpenTK](https://opentk.net/) library is used to invoke OpenGL APIs.

Add-in can import the XAML files created from Part documents only (XAML files from the assembly are not supported).

XAML file export format supported natively by SOLIDWORKS. Use *File->Save As* menu command to export file in the XAML format.

![Save As XAML format in File Save As dialog](save-as-xaml.png){ width=550 }

However this format cannot be imported natively. Add-in adds the *Import XAML File* commands into the menu. Open new or existing file and import xaml using this command.

![Import XAML command in menu](import-xaml-menu.png){ width=450 }

Graphics is rendered using OpenGL. Model can be rotated, zoomed, panned. There are no feature elements or temp bodies created and graphics is rendered with high performance.

![Geometry rendered using OpenGL](vbo-opengl.png){ width=350 }

By default graphics of OpenGL is not respected by zoom commands. I.g. *Zoom To fit* fill not fit the geometry properly and would ignore its bounding box. To specify the visible boundaries it is required to use the [IModelDocExtension::SetVisibleBox](https://help.solidworks.com/2017/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDocExtension~SetVisibleBox.html) SOLIDWORKS API method. Note, it is not required to union the existing visible box of native SOLIDWORKS geometry, SOLIDWORKS will perform this operation automatically.

Source code can be downloaded from [GitHub](https://github.com/codestackdev/solidworks-api-examples/tree/master/swex/add-in/opengl/XamlImporter)

## AddIn.cs

This the add-in entry point. [SwEx.AddIn](/docs/codestack/labs/solidworks/swex/add-in/) framework is used to manage documents lifecycle by providing the wrapper class. Import command is handled in the add-in and [Model3DGroup](https://docs.microsoft.com/en-us/dotnet/api/system.windows.media.media3d.model3dgroup) object of Microsoft WPF framework is extracted from the specified XAML file.

~~~ cs
using CodeStack.SwEx.AddIn;
using CodeStack.SwEx.AddIn.Attributes;
using CodeStack.SwEx.AddIn.Base;
using CodeStack.SwEx.AddIn.Enums;
using CodeStack.SwEx.Common.Attributes;
using CodeStack.XamlImporter.Properties;
using SolidWorks.Interop.swconst;
using System;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Windows.Controls;
using System.Windows.Forms;
using System.Windows.Markup;
using System.Windows.Media.Media3D;

namespace CodeStack.XamlImporter
{
    [Guid("1F872F6B-525E-4889-862E-B7A8C27C398C"), ComVisible(true)]
    [AutoRegister("XamlImporter")]
    public class AddIn : SwAddInEx
    {
        [Icon(typeof(Resources), nameof(Resources.xaml))]
        [Title("OpenGL Import Xaml")]
        private enum Commands_e
        {
            [Icon(typeof(Resources), nameof(Resources.xaml))]
            [Title("Import XAML File")]
            [CommandItemInfo(swWorkspaceTypes_e.Part | swWorkspaceTypes_e.Assembly)]
            ImportXamlFile
        }

        private IDocumentsHandler<MeshRendererModel> m_DocsHandler;

        public override bool OnConnect()
        {
            AddCommandGroup<Commands_e>(OnButtonClick);
            m_DocsHandler = CreateDocumentsHandler<MeshRendererModel>();
            return true;
        }

        private void OnButtonClick(Commands_e cmd)
        {
            switch (cmd)
            {
                case Commands_e.ImportXamlFile:
                    try
                    {
                        using (var openFileDlg = new OpenFileDialog())
                        {
                            openFileDlg.Filter = "Microsoft XAML Files (*.xaml)|*.xaml|All Files (*.*)|*.*";
                            openFileDlg.RestoreDirectory = true;

                            if (openFileDlg.ShowDialog() == DialogResult.OK)
                            {
                                var xamlFilePath = openFileDlg.FileName;

                                var model = GetModel3DFromFile(xamlFilePath);
                                m_DocsHandler[App.IActiveDoc2].Model3D = model;
                            }
                        }
                    }
                    catch(Exception ex)
                    {
                        App.SendMsgToUser2(ex.Message, (int)swMessageBoxIcon_e.swMbStop, (int)swMessageBoxBtn_e.swMbOk);
                    }
                    break;
            }
        }

        private Model3DGroup GetModel3DFromFile(string file)
        {
            if (File.Exists(file))
            {
                using (var fileStream = File.OpenRead(file))
                {
                    var viewPort = XamlReader.Load(fileStream) as Viewport3D;
                    var modelVisual = viewPort.Children.First() as ModelVisual3D;
                    modelVisual = modelVisual.Children.Last() as ModelVisual3D;
                    var model = modelVisual.Content as Model3DGroup;

                    if (model == null)
                    {
                        throw new InvalidCastException("Content is not Model3DGroup");
                    }

                    return model;
                }
            }
            else
            {
                throw new FileNotFoundException($"File {file} doesn't exist");
            }
        }
    }
}

~~~



## MeshRendererModel.cs

This is a handler class for each model document which subscribes to the OpenGL Buffer Swap notification provided by SOLIDWORKS and performs the binding and rendering of VBO based on the provided mesh data.

~~~ cs
using CodeStack.SwEx.AddIn.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using SolidWorks.Interop.sldworks;
using System.Windows.Media.Media3D;
using OpenTK;
using OpenTK.Graphics.OpenGL;
using System.Windows.Media;

namespace CodeStack.XamlImporter
{
    public class MeshRendererModel : IDocumentHandler
    {
        private IMathUtility m_MathUtils;
        private IModelDoc2 m_Model;
        private ModelView m_View;

        private GLControl m_GLControl;

        private bool m_IsBufferInit;

        private int m_ColorBufferId;
        private int m_ElementBufferId;
        private int m_NormalBufferId;
        private int m_VertexBufferId;

        private int m_IndicesCount;

        private Model3DGroup m_Model3D;

        public Model3DGroup Model3D
        {
            get
            {
                return m_Model3D;
            }
            set
            {   
                m_Model3D = value;
                UpdateVisibleBox();
                m_IsBufferInit = false;
                m_Model.GraphicsRedraw2();
            }
        }

        public void Init(ISldWorks app, IModelDoc2 model)
        {
            m_MathUtils = app.IGetMathUtility();

            m_View = model.IActiveView;

            if (m_View != null)
            {
                m_View.BufferSwapNotify += OnBufferSwapNotify;
                
                m_GLControl = new GLControl();
                m_GLControl.Context.MakeCurrent(null);
            }
            else
            {
                throw new NullReferenceException("No active view");
            }

            m_Model = model;
        }

        public void Dispose()
        {
            if (m_View != null)
            {
                m_View.BufferSwapNotify += OnBufferSwapNotify;
            }

            m_GLControl.Dispose();
        }
        
        private int OnBufferSwapNotify()
        {
            if (m_Model3D != null)
            {
                if (!m_IsBufferInit)
                {
                    InitBuffer();
                    m_IsBufferInit = true;
                }

                RenderBuffer();
            }

            return 0;
        }

        private void UpdateVisibleBox()
        {
            m_Model.Extension.RemoveVisibleBox();

            if (m_Model3D != null)
            {
                var curBox = m_Model3D.Bounds;

                var pt1 = m_MathUtils.CreatePoint(new double[] { curBox.X, curBox.Y, curBox.Z }) as MathPoint;
                var pt2 = m_MathUtils.CreatePoint(new double[] { curBox.X + curBox.SizeX, curBox.Y + curBox.SizeY, curBox.Z + curBox.SizeZ }) as MathPoint;

                m_Model.Extension.SetVisibleBox(pt1, pt2);
            }
        }

        private void InitBuffer()
        {
            var posList = new List<Vector3d>();
            var indList = new List<uint>();
            var normList = new List<Vector3d>();
            var colList = new List<uint>();

            int indicesOffset = 0;

            if (m_Model3D != null)
            {
                foreach (var geometryModel in m_Model3D.Children)
                {
                    var geometryModel3d = geometryModel as GeometryModel3D;
                    if (geometryModel3d != null)
                    {
                        var color = Colors.Black;
                        var materialGrp = geometryModel3d.Material as MaterialGroup;
                        var material = materialGrp?.Children?.FirstOrDefault() as DiffuseMaterial;
                        if (material != null)
                        {
                            if (material.Brush is SolidColorBrush)
                            {
                                color = (material.Brush as SolidColorBrush).Color;
                            }
                        }

                        var geom = geometryModel3d.Geometry as MeshGeometry3D;

                        if (geom != null)
                        {
                            indList.AddRange(geom.TriangleIndices.Select(i => (uint)(i + indicesOffset)));
                            indicesOffset += geom.Positions.Count;

                            foreach (var pos in geom.Positions)
                            {
                                posList.Add(new Vector3d(pos.X, pos.Y, pos.Z));
                                colList.Add(ColorToArgb(color));
                            }

                            foreach (var norm in geom.Normals)
                            {
                                normList.Add(new Vector3d(norm.X, norm.Y, norm.Z));
                            }
                        }
                        else
                        {
                            throw new NotSupportedException("Only MeshGeometry3D is supported");
                        }
                    }
                    else
                    {
                        throw new NotSupportedException("Only GeometryModel3D is supported");
                    }
                }

                GenAndFillBuffer(posList.ToArray(), BufferTarget.ArrayBuffer, out m_VertexBufferId);
                GenAndFillBuffer(colList.ToArray(), BufferTarget.ArrayBuffer, out m_ColorBufferId);
                GenAndFillBuffer(normList.ToArray(), BufferTarget.ArrayBuffer, out m_NormalBufferId);
                GenAndFillBuffer(indList.ToArray(), BufferTarget.ElementArrayBuffer, out m_ElementBufferId);

                m_IndicesCount = indList.Count;
            }
        }

        private void RenderBuffer()
        {
            GL.Disable(EnableCap.Lighting);

            GL.BindBuffer(BufferTarget.ArrayBuffer, m_NormalBufferId);
            GL.NormalPointer(NormalPointerType.Double, Vector3d.SizeInBytes, IntPtr.Zero);
            GL.EnableClientState(ArrayCap.NormalArray);

            GL.BindBuffer(BufferTarget.ArrayBuffer, m_VertexBufferId);
            GL.VertexPointer(3, VertexPointerType.Double, Vector3d.SizeInBytes, IntPtr.Zero);
            GL.EnableClientState(ArrayCap.VertexArray);

            GL.BindBuffer(BufferTarget.ArrayBuffer, m_ColorBufferId);
            GL.ColorPointer(4, ColorPointerType.UnsignedByte, sizeof(int), IntPtr.Zero);
            GL.EnableClientState(ArrayCap.ColorArray);

            GL.BindBuffer(BufferTarget.ElementArrayBuffer, m_ElementBufferId);

            GL.DrawElements(PrimitiveType.Triangles, m_IndicesCount, DrawElementsType.UnsignedInt, IntPtr.Zero);
        }

        private uint ColorToArgb(Color color)
        {
            return (uint)color.A << 24 | (uint)color.B << 16 | (uint)color.G << 8 | (uint)color.R;
        }

        private void GenAndFillBuffer<T>(T[] dataBuffer, BufferTarget target, out int bufferId)
            where T : struct
        {
            GL.GenBuffers(1, out bufferId);
            GL.BindBuffer(target, bufferId);
            var size = dataBuffer.Length * BlittableValueType.StrideOf(dataBuffer);
            GL.BufferData(target, new IntPtr(size), dataBuffer, BufferUsageHint.StaticDraw);

            int bufferSize;

            GL.GetBufferParameter(target, BufferParameterName.BufferSize, out bufferSize);

            if (size != bufferSize)
            {
                throw new Exception("Buffer size mismatch");
            }

            GL.BindBuffer(target, 0);
        }
    }
}

~~~


