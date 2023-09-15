                var facesCount = geomHelperApi.GetFacesCount(minArea);

                Console.WriteLine($"Selected body contains: {facesCount} face(s)");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}

~~~

```csharp
using System;

namespace GeometryHelperApiRot
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var minArea = 10.0;

                var swApp = SolidWorksSingleton.GetApplication();

                var geomHelperApi = new GeometryHelperApi(swApp);

                var count = geomHelperApi.GetFacesCount(minArea);

                Console.WriteLine($"Selected body contains {count} faces of area more or equal to {minArea}");
            }
            catch(Exception ex)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.Write(ex.Message);
                Console.ResetColor();
            }
        }
    }
}
```

要从运行对象表（ROT）中检索SOLIDWORKS对象，需要确保运行SOLIDWORKS和独立应用程序的帐户级别相同。如果SOLIDWORKS以管理员身份运行，而独立应用程序不是，或者反之亦然，将无法从ROT中检索对象。这是Windows的限制，需要以相同的权限级别运行两个应用程序以启用通信。

您可以在[GitHub](https://github.com/codestackdev/solidworks-api-examples/tree/master/swex/add-in/geometry-helper-api-rot)上下载源代码。