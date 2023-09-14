---
title: 使用 SOLIDWORKS 模型 API 重建球面的宏
caption: 重建球面
description: 该示例演示了如何使用 SOLIDWORKS API 在 C# 中从选择的球面创建球面（360度）。
image: reconstructed-sphere.png
labels: [curve, sphere, c#]
---
![从半球面重建的球面](reconstructed-sphere.png)

该示例演示了如何使用 SOLIDWORKS API 从选择的球面（可能小于360度）创建球面（360度）。

* 选择任何球面并运行宏
* 重建的球面将作为临时实体创建并显示在图形区域中
* 清除选择以清除预览

球面是使用 [IModeler::CreateSphericalSurface2](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler~createsphericalsurface2.html) SOLIDWORKS API 方法创建的，该方法使用 [ISurface::CreateTrimmedSheet4](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isurface~createtrimmedsheet4.html) 进行修剪。

~~~ cs
using SolidWorks.Interop.sldworks;
using SolidWorks.Interop.swconst;
using System.Runtime.InteropServices;
using System;

namespace CodeStackExample
{
    public partial class SolidWorksMacro
    {
        private IBody2 m_PreviewBody;

        public void Main()
        {
            PartDoc part = swApp.ActiveDoc as PartDoc;

            if (part != null)
            {
                IFace2 face = (part as IModelDoc2).ISelectionManager.GetSelectedObject6(1, -1) as IFace2;

                if (face != null && face.IGetSurface().IsSphere())
                {
                    double[] sphereParams = face.IGetSurface().SphereParams as double[];

                    IModeler modeler = swApp.IGetModeler();

                    ISurface sphereSurf = modeler.CreateSphericalSurface2(
                        new double[] { sphereParams[0], sphereParams[1], sphereParams[2] },
                        new double[] { 0, 0, 1 },
                        new double[] { 1, 0, 0 }, sphereParams[3]) as ISurface;

                    m_PreviewBody = sphereSurf.CreateTrimmedSheet4(new ICurve[] { null }, true) as IBody2;

                    m_PreviewBody.Display3(part, ToColorRef(255, 255, 0), (int)swTempBodySelectOptions_e.swTempBodySelectOptionNone);

                    part.ClearSelectionsNotify += new DPartDocEvents_ClearSelectionsNotifyEventHandler(OnClearSelections);
                }
                else 
                {
                    swApp.SendMsgToUser("请选择球面");
                }
            }
            else 
            {
                swApp.SendMsgToUser("请打开零件文档");
            }
        }

        private int ToColorRef(byte r, byte g, byte b)
        {
            return (r << 0) | (g << 8) | (b << 16);
        }

        private int OnClearSelections()
        {
            m_PreviewBody = null;
            GC.Collect();
            return 0;
        }

        public SldWorks swApp;
    }
}
~~~