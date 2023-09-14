using eDrawings.Interop.EModelViewControl;
using System;
using System.Diagnostics;
using System.IO;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Forms.Integration;

namespace CodeStack.Examples.eDrawings
{
    public partial class eDrawingsHostControl : UserControl
    {
        private EModelViewControl m_Ctrl;

        public eDrawingsHostControl()
        {
            InitializeComponent();

            var host = new WindowsFormsHost();
            var ctrl = new eDrawingHost();
            ctrl.ControlLoaded += OnControlLoaded;
            host.Child = ctrl;
            this.AddChild(host);
        }
        
        public string FilePath
        {
            get { return (string)GetValue(FilePathProperty); }
            set { SetValue(FilePathProperty, value); }
        }

        public static readonly DependencyProperty FilePathProperty =
            DependencyProperty.Register(nameof(FilePath), typeof(string),
                typeof(eDrawingsHostControl), new FrameworkPropertyMetadata(OnFilePathPropertyChanged));

        private static void OnFilePathPropertyChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
            (d as eDrawingsHostControl).OpenFile(e.NewValue as string);
        }

        private void OpenFile(string filePath)
        {
            if (m_Ctrl == null)
            {
                throw new NullReferenceException("eDrawings control is not loaded");
            }

            if (string.IsNullOrEmpty(filePath) || !File.Exists(filePath))
            {
                m_Ctrl.CloseActiveDoc("");
            }
            else
            {
                m_Ctrl.OpenDoc(filePath, false, false, false, "");
            }
        }

        private void OnControlLoaded(EModelViewControl ctrl)
        {
            m_Ctrl = ctrl;
            m_Ctrl.OnFinishedLoadingDocument += OnFinishedLoadingDocument;
            m_Ctrl.OnFailedLoadingDocument += OnFailedLoadingDocument;
        }

        private void OnFailedLoadingDocument(string fileName, int errorCode, string errorString)
        {
            Trace.WriteLine($"{fileName} failed to loaded: {errorString}");
        }

        private void OnFinishedLoadingDocument(string fileName)
        {
            Trace.WriteLine($"{fileName} loaded");
        }
    }
}
