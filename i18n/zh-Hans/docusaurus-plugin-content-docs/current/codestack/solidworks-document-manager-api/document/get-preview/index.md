---
title:  使用 SOLIDWORKS Document Manager API 从活动配置中提取 PNG 预览图像
caption: 从活动配置中提取 PNG 预览图像
---
 该示例演示了如何使用 SOLIDWORKS Document Manager API 从 SOLIDWORKS 组件或零件的活动配置中提取 PNG 预览图像。
---

该示例演示了如何使用 SOLIDWORKS Document Manager API 从 SOLIDWORKS 组件或零件的活动配置中提取 PNG 预览图像。

这种方法适用于内部进程和外部进程应用程序。

* 创建 C# 控制台应用程序
* 粘贴代码
* 使用两个参数运行应用程序：输入 SOLIDWORKS 零件或组件的完整路径和输出 PNG 图像的完整路径

此示例使用 [ISwDMConfiguration9::GetPreviewPNGBitmapBytes](https://help.solidworks.com/2018/english/api/swdocmgrapi/solidworks.interop.swdocumentmgr~solidworks.interop.swdocumentmgr.iswdmconfiguration9~getpreviewpngbitmapbytes.html) SOLIDWORKS Document Manager API 提取预览的字节缓冲区，并将其转换为 [Image](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.image?view=netframework-4.7.2) 对象。

``` cs
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
                    Console.WriteLine($"从文档中提取预览失败：{previewErr}");
                }
            }
            else
            {
                Console.WriteLine($"打开文档失败：{err}");
            }
        }
    }
}
```