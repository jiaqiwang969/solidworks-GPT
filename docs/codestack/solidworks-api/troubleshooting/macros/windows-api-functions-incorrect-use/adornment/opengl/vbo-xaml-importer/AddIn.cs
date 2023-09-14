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
