using SolidWorks.Interop.swdocumentmgr;
using System;
using System.IO;
using System.Linq;
using System.Xml.Serialization;
using ThirdPartyStorage;

namespace CodeStack
{
    public class Comment
    {
        public string Text { get; set; }
        public string Author { get; set; }
        public DateTime Date { get; set; }
    }

    class Program
    {
        private enum Action_e
        {
            AddComment,
            ListComments,
            ReadComment
        }

        private const string DM_LIC_KEY = "<Your DM License Key>";
        private const string STORAGE_STORE_NAME = "CodeStackComments";

        private const string ARG_ADD_COMMENT = "-add";
        private const string ARG_LIST_COMMENTS = "-list";
        private const string ARG_READ_COMMENT = "-read";

        static void Main(string[] args)
        {
            var filePath = args[0];

            var action = Action_e.AddComment;

            switch (args[1])
            {
                case ARG_ADD_COMMENT:
                    action = Action_e.AddComment;
                    break;

                case ARG_LIST_COMMENTS:
                    action = Action_e.ListComments;
                    break;

                case ARG_READ_COMMENT:
                    action = Action_e.ReadComment;
                    break;

                default:
                    throw new NotSupportedException("Action is not supported");
            }

            var docType = GetDocumentType(filePath);
            
            var dmApp = ConnectoToDm(DM_LIC_KEY);

            SwDmDocumentOpenError err;
            var doc = dmApp.GetDocument(filePath, docType, action != Action_e.AddComment, out err) as SwDMDocument19;

            if (doc != null)
            {
                var storage = doc.Get3rdPartyStorageStore(STORAGE_STORE_NAME, action == Action_e.AddComment) as IStorage;

                try
                {
                    switch (action)
                    {
                        case Action_e.AddComment:
                            AddComment(storage, args[2]);
                            break;

                        case Action_e.ListComments:
                            ListComments(storage);
                            break;

                        case Action_e.ReadComment:
                            ReadComment(storage, args[2]);
                            break;
                    }
                }
                catch
                {
                    throw;
                }
                finally
                {
                    doc.Release3rdPartyStorageStore(STORAGE_STORE_NAME);

                    if (action == Action_e.AddComment)
                    {
                        doc.Save();
                    }

                    doc.CloseDoc();
                }
            }
            else
            {
                throw new NullReferenceException($"Failed to open the document: {err}");
            }
        }

        private static void ReadComment(IStorage storage, string name)
        {
            if (storage != null)
            {
                using (var comStorage = new ComStorage(storage, false))
                {
                    var stream = comStorage.OpenStream(name);

                    using (var comStream = new ComStream(stream, false, false))
                    {
                        var ser = new XmlSerializer(typeof(Comment));
                        var wm = ser.Deserialize(comStream) as Comment;

                        Console.WriteLine($"Text: {wm.Text}");
                        Console.WriteLine($"Author: {wm.Author}");
                        Console.WriteLine($"Date: {wm.Date}");
                    }
                }
            }
            else
            {
                Console.WriteLine("Comments not available");
            }
        }

        private static void AddComment(IStorage storage, string text)
        {
            var wm = new Comment()
            {
                Text = text,
                Author = Environment.UserName,
                Date = DateTime.Now
            };

            using (var comStorage = new ComStorage(storage, true))
            {
                var stream = comStorage.CreateStream($"Comment{comStorage.EnumElements().Count() + 1}");

                using (var comStream = new ComStream(stream, true))
                {
                    var ser = new XmlSerializer(wm.GetType());
                    ser.Serialize(comStream, wm);
                }
            }

            Console.WriteLine("Comment is added");
        }

        private static void ListComments(IStorage storage)
        {
            using (var comStorage = new ComStorage(storage, false))
            {
                foreach (var elem in comStorage.EnumElements())
                {
                    Console.WriteLine(elem.pwcsName);
                }
            }
        }

        private static SwDMApplication ConnectoToDm(string licKey)
        {
            var classFact = new SwDMClassFactory();
            var docMgr = classFact.GetApplication(licKey) as SwDMApplication;

            return docMgr;
        }

        private static SwDmDocumentType GetDocumentType(string filePath)
        {
            var docType = SwDmDocumentType.swDmDocumentUnknown;

            switch (Path.GetExtension(filePath).ToUpper())
            {
                case ".SLDPRT":
                    docType = SwDmDocumentType.swDmDocumentPart;
                    break;
                case ".SLDASM":
                    docType = SwDmDocumentType.swDmDocumentAssembly;
                    break;
                case ".SLDDRW":
                    docType = SwDmDocumentType.swDmDocumentDrawing;
                    break;
                default:
                    throw new NotSupportedException("File type not supported");

            }

            return docType;
        }
    }
}
