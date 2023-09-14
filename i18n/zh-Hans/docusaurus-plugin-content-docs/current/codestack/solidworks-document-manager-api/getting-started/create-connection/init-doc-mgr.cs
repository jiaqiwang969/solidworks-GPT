using SolidWorks.Interop.swdocumentmgr;
using System;

namespace CodeStack
{
    class Program
    {
        const string SW_DM_KEY = "[CompanyName]:swdocmgr_general-00000-{31 times},swdocmgr_previews-00000-{31 times},swdocmgr_dimxpert-00000-{31 times},swdocmgr_geometry-00000-{31 times},swdocmgr_xml-00000-{31 times},swdocmgr_tessellation-00000-{31 times}";

        static void Main(string[] args)
        {
            SwDMClassFactory classFactory = Activator.CreateInstance(
                Type.GetTypeFromProgID("SwDocumentMgr.SwDMClassFactory")) as SwDMClassFactory;

            if (classFactory != null)
            {
                SwDMApplication dmApp = classFactory.GetApplication(SW_DM_KEY);
                Console.WriteLine(dmApp.GetLatestSupportedFileVersion());
            }
            else
            {
                throw new NullReferenceException("Document Manager SDK is not installed");
            }
        }
    }
}