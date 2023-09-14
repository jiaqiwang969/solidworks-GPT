---
title: Extract PNG preview image from active configuration using SOLIDWORKS Document Manager API
caption: Extract PNG Preview Image From The Active Configuration
description: Example demonstrates how to extract PNG preview image from the active configuration of SOLIDWORKS assembly or part using the document manager API.
---
Example demonstrates how to extract PNG preview image from the active configuration of SOLIDWORKS assembly or part using the document manager API.

This approach would work for both in-process and out-of-process application.

* Create C# Console application
* Paste the code
* Run the application with 2 arguments: full path to the input SOLIDWORKS part or assembly and full path to output PNG image

This example is using the [ISwDMConfiguration9::GetPreviewPNGBitmapBytes](https://help.solidworks.com/2018/english/api/swdocmgrapi/solidworks.interop.swdocumentmgr~solidworks.interop.swdocumentmgr.iswdmconfiguration9~getpreviewpngbitmapbytes.html) SOLIDWORKS Document Manager API to extract byte buffer of preview and convert it to an [Image](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.image?view=netframework-4.7.2) object.

~~~ cs
using SwDocumentMgr;
using System;
using System.Drawing;
using System.IO;

namespace CodeStackExample
{
    class Program
    {
        const string LICENSE_KEY = "[Document Manager License Key]";

        static void Main(string[] args)
        {
            var filePath = args[0];
            var outImgFilePath = args[1];

            var classFact = new SwDMClassFactory();

            var app = classFact.GetApplication(LICENSE_KEY);

            var docType = SwDmDocumentType.swDmDocumentUnknown;

            switch (Path.GetExtension(filePath).ToLower())
            {
                case ".sldprt":
                    docType = SwDmDocumentType.swDmDocumentPart;
                    break;

                case ".sldasm":
                    docType = SwDmDocumentType.swDmDocumentAssembly;
                    break;

                case ".slddrw":
                    docType = SwDmDocumentType.swDmDocumentDrawing;
                    break;
            }

            SwDmDocumentOpenError err;
            var doc = app.GetDocument(filePath, docType, true, out err);

            if (doc != null)
            {
                var activeConfName = doc.ConfigurationManager.GetActiveConfigurationName();

                var conf = doc.ConfigurationManager.GetConfigurationByName(activeConfName) as ISwDMConfiguration14;

                SwDmPreviewError previewErr;
                var imgBytes = conf.GetPreviewPNGBitmapBytes(out previewErr) as byte[];

                if (previewErr == SwDmPreviewError.swDmPreviewErrorNone)
                {
                    using (var memStr = new MemoryStream(imgBytes))
                    {
                        memStr.Seek(0, SeekOrigin.Begin);
                        var img = Image.FromStream(memStr);
                        img.Save(outImgFilePath);
                    }
                }
                else
                {
                    Console.WriteLine($"Failed to extract preview from the document: {previewErr}");
                }
            }
            else
            {
                Console.WriteLine($"Failed to open the document: {err}");
            }
        }
    }
}
~~~


