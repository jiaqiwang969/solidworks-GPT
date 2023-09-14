using eDrawings.Interop.EModelViewControl;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Windows.Forms;

namespace Export
{
    class Program
    {
        private class ExportData
        {
            public string InputFilePath { get; private set; }
            public string OutputFilePath { get; private set; }

            public ExportData(string input, string output)
            {
                InputFilePath = input;
                OutputFilePath = output;
            }
        }

        private const string ARG_INPUT = "-input";
        private const string ARG_FILTER = "-filter";
        private const string ARG_OUTPUT_DIR = "-outdir";
        private const string ARG_FORMAT = "-format";

        private const string EDRW_FORMAT = ".e";

        private static EModelViewControl m_Ctrl;

        private static List<ExportData> m_Job;

        private static ExportData m_CurrentExport;

        [STAThread]
        static void Main(string[] args)
        {
            try
            {
                ParseArguments(args);

                var eDrwCtrl = new EDrawingsHost();

                eDrwCtrl.ControlLoaded += OnEdrawingsControlLoaded;

                var winForm = new Form();
                winForm.Controls.Add(eDrwCtrl);
                eDrwCtrl.Dock = DockStyle.Fill;
                winForm.ShowIcon = false;
                winForm.ShowInTaskbar = false;
                winForm.WindowState = FormWindowState.Minimized;
                winForm.ShowDialog();
            }
            catch (Exception ex)
            {
                PrintError(ex.Message);
            }
        }

        private static void ParseArguments(string[] args)
        {
            var inputs = new List<string>();
            var filters = new List<string>();
            var outDirs = new List<string>();
            var formats = new List<string>();

            List<string> curList = null;

            for (int i = 0; i < args.Length; i++)
            {
                if (args[i].Equals(ARG_INPUT, StringComparison.CurrentCultureIgnoreCase))
                {
                    curList = inputs;
                }
                else if (args[i].Equals(ARG_FILTER, StringComparison.CurrentCultureIgnoreCase))
                {
                    curList = filters;
                }
                else if (args[i].Equals(ARG_OUTPUT_DIR, StringComparison.CurrentCultureIgnoreCase))
                {
                    curList = outDirs;
                }
                else if (args[i].Equals(ARG_FORMAT, StringComparison.CurrentCultureIgnoreCase))
                {
                    curList = formats;
                }
                else
                {
                    if (curList != null)
                    {
                        curList.Add(args[i]);
                    }
                    else
                    {
                        throw new ArgumentException("Arguments are invalid, specify the correct switch");
                    }
                }
            }
            
            foreach (var outDir in outDirs)
            {
                if (!Directory.Exists(outDir))
                {
                    Directory.CreateDirectory(outDir);
                }
            }

            if (!outDirs.Any())
            {
                outDirs.Add("");
            }

            if (!inputs.Any())
            {
                throw new ArgumentException($"Inputs are not specified. Use {ARG_INPUT} switch to specify the input directory(s) or file(s)");
            }

            if (!formats.Any())
            {
                formats.Add(EDRW_FORMAT);
            }

            var filter = filters.Any() ? filters.First() : "*.*";

            var files = new List<string>();

            foreach (var input in inputs)
            {
                if (Directory.Exists(input))
                {
                    files.AddRange(Directory.GetFiles(input, filter, SearchOption.AllDirectories).ToList());
                }
                else if (File.Exists(input))
                {
                    files.Add(input);
                }
                else
                {
                    throw new Exception("Specify input file or directory");
                }
            }

            m_Job = new List<ExportData>();

            foreach (var file in files)
            {
                foreach (var outDir in outDirs)
                {
                    foreach (var format in formats)
                    {
                        var ext = format;

                        if (!ext.StartsWith("."))
                        {
                            ext = "." + ext;
                        }

                        if (ext.Equals(EDRW_FORMAT, StringComparison.CurrentCultureIgnoreCase))
                        {
                            switch (Path.GetExtension(file).ToLower())
                            {
                                case ".sldprt":
                                    ext = ".eprt";
                                    break;
                                case ".sldasm":
                                    ext = ".easm";
                                    break;
                                case ".slddrw":
                                    ext = ".edrw";
                                    break;
                                default:
                                    throw new ArgumentException($"{EDRW_FORMAT} format is only applicable for SOLIDWORKS files");
                            }
                        }

                        var outFile = Path.Combine(!string.IsNullOrEmpty(outDir) ? outDir : Path.GetDirectoryName(file),
                            Path.GetFileNameWithoutExtension(file) + ext);

                        m_Job.Add(new ExportData(file, outFile));
                    }
                }
            }
        }

        public static void OnEdrawingsControlLoaded(EModelViewControl ctrl)
        {
            Console.WriteLine(string.Format("Starting job. Exporting {0} file(s)", m_Job.Count));

            m_Ctrl = ctrl;

            m_Ctrl.OnFinishedLoadingDocument += OnDocumentLoaded;
            m_Ctrl.OnFailedLoadingDocument += OnDocumentLoadFailed;
            m_Ctrl.OnFinishedSavingDocument += OnDocumentSaved;
            m_Ctrl.OnFailedSavingDocument += OnSaveFailed;

            ExportNext();
        }

        public static void ExportNext()
        {
            m_CurrentExport = null;

            if (m_Job.Any())
            {
                m_CurrentExport = m_Job.First();
                m_Job.RemoveAt(0);

                if (!string.Equals(m_Ctrl.FileName, m_CurrentExport.InputFilePath, StringComparison.CurrentCultureIgnoreCase))
                {
                    m_Ctrl.CloseActiveDoc("");
                    m_Ctrl.OpenDoc(m_CurrentExport.InputFilePath, false, false, false, "");
                }
                else
                {
                    ExportCurrentFile();
                }
            }
            else
            {
                Console.WriteLine("Completed");
                Environment.Exit(0);
            }
        }

        public static void OnDocumentLoaded(string fileName)
        {
            Console.WriteLine(string.Format("Opened {0}", fileName));
            ExportCurrentFile();
        }

        private static void ExportCurrentFile()
        {
            Console.WriteLine($"Exporting {m_CurrentExport.InputFilePath} to {m_CurrentExport.OutputFilePath}");
            m_Ctrl.Save(m_CurrentExport.OutputFilePath, false, "");
        }

        public static void OnDocumentLoadFailed(string fileName, int errorCode, string errorString)
        {
            PrintError(string.Format("Failed to load {0}: {1}", fileName, errorString));
            ExportNext();
        }

        private static void OnDocumentSaved()
        {
            Console.WriteLine("Export completed");
            ExportNext();
        }

        private static void OnSaveFailed(string FileName, int ErrorCode, string ErrorString)
        {
            PrintError($"Failed to export 'FileName': {ErrorString} [{ErrorCode}]");
            ExportNext();
        }
        
        public static void PrintError(string msg)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine(msg);
            Console.ResetColor();
        }
    }
}
