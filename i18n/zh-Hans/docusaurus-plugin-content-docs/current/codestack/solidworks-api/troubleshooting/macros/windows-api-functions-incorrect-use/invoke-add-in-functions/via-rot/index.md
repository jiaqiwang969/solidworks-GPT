                    Console.WriteLine($"Selected body contains: {count} face(s)");
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Invalid arguments");
            }
        }
    }
}

~~~

```csharp
using System;
using SolidWorks.Interop.sldworks;
using SolidWorks.Interop.swconst;

namespace CodeStack
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                SldWorks swApp = Activator.CreateInstance(Type.GetTypeFromProgID("SldWorks.Application")) as SldWorks;
                ModelDoc2 model = swApp.ActiveDoc as ModelDoc2;

                if (model == null)
                {
                    Console.WriteLine("No active document");
                    return;
                }

                SelectionMgr selMgr = model.SelectionManager;
                int count = 0;
                double minArea = 100;

                foreach (Face2 face in selMgr.GetSelectedObject6(1, -1))
                {
                    if (face.GetArea() >= minArea)
                    {
                        count++;
                    }
                }

                Console.WriteLine($"Selected body contains {count} faces of area more or equal to {minArea}");
            }
            catch (Exception ex)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.Write(ex.Message);
                Console.ResetColor();
            }
        }
    }
}
```

无法从运行对象表（ROT）中检索对象（即返回null）的最常见原因是运行SOLIDWORKS和独立应用程序的帐户级别之间的差异。例如，SOLIDWORKS以管理员身份运行，而独立应用程序没有，反之亦然。这是Windows的限制，需要以相同的权限级别运行两个应用程序以启用通信。

在[GitHub](https://github.com/codestackdev/solidworks-api-examples/tree/master/swex/add-in/geometry-helper-api-rot)上下载源代码。