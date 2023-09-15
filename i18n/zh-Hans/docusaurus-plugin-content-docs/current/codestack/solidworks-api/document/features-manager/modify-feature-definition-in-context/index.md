---
title:  在装配上下文中使用SOLIDWORKS API编辑特征
caption: 在装配上下文中编辑特征
---
 该示例演示了如何使用SOLIDWORKS API在装配上下文中修改特征定义
image: edit-extrude-feature-in-context.png
labels: [编辑, 特征, 上下文]
---
![在装配上下文中编辑Boss-拉伸特征](edit-extrude-feature-in-context.png){ width=450 }

该示例演示了如何使用SOLIDWORKS API在装配上下文中修改特征定义。

宏中执行的步骤相当于在SOLIDWORKS用户界面中执行以下步骤：

* 选择包含拉伸特征的零件组件
* 在组件的上下文菜单中选择“编辑零件”菜单
* 选择拉伸特征并点击“编辑”命令
* 修改拉伸方向上的值
* 点击绿色勾号
* 退出编辑零件模式

在装配中编辑特征时，重要的是要遵循正确的[装配上下文](/docs/codestack/solidworks-api/document/assembly/context/)。

* 下面的示例是使用VSTA3宏实现的
* 在装配中选择零件组件
* 将拉伸特征的名称指定为*EXTRUDE_FEAT_NAME*变量的值
~~~ cs
const string EXTRUDE_FEAT_NAME = "Boss-Extrude1";
~~~
* 运行宏。结果是将拉伸的值更改为*EXTRUDE_DEPTH*变量的值（以米为单位）
~~~ cs
const double EXTRUDE_DEPTH = 0.02;
~~~

~~~ cs
using System;
using SolidWorks.Interop.sldworks;
using SolidWorks.Interop.swconst;

namespace ModifyFeatureInContextOfAssembly
{
    public partial class SolidWorksMacro
    {
        public void Main()
        {
            const string EXTRUDE_FEAT_NAME = "Boss-Extrude1";
            const double EXTRUDE_DEPTH = 0.02;
			
            try
            {
                SetExtrudeDepth(swApp.IActiveDoc2 as IAssemblyDoc,
                    swApp.IActiveDoc2.ISelectionManager.GetSelectedObjectsComponent3(1, -1) as IComponent2,
                    EXTRUDE_FEAT_NAME, EXTRUDE_DEPTH);
            }
            catch(Exception ex)
            {
                swApp.SendMsgToUser2(ex.Message, (int)swMessageBoxIcon_e.swMbStop, (int)swMessageBoxBtn_e.swMbOk);
            }

            return;
        }

        private void SetExtrudeDepth(IAssemblyDoc assy, IComponent2 comp, string extrudeFeatName, double depth)
        {
            if (comp != null)
            {
                if (comp.GetSuppression() == (int)swComponentSuppressionState_e.swComponentLightweight ||
                    comp.GetSuppression() == (int)swComponentSuppressionState_e.swComponentFullyLightweight)
                {
                    if (comp.SetSuppression2((int)swComponentSuppressionState_e.swComponentResolved) != (int)swSuppressionError_e.swSuppressionChangeOk)
                    {
                        throw new InvalidOperationException("Failed to set component state to resolved");
                    }
                }
                else if (comp.GetSuppression() == (int)swComponentSuppressionState_e.swComponentSuppressed)
                {
                    throw new NotSupportedException("Suppressed component is not supported");
                }

                var feat = comp.FeatureByName(extrudeFeatName);

                if (feat == null)
                {
                    throw new MissingMemberException("Feature is not found in the component");
                }

                if (comp.Select4(false, null, false))
                {
                    int info = -1;
                    if (assy.EditPart2(true, false, ref info) == (int)swEditPartCommandStatus_e.swEditPartSuccessful)
                    {
                        var featData = feat.GetDefinition() as IExtrudeFeatureData2;

                        if (featData != null)
                        {
                            if (featData.AccessSelections(assy, comp))
                            {
                                featData.SetDepth(true, depth);
                                if (feat.ModifyDefinition(featData, assy, comp))
                                {
                                    (assy as IModelDoc2).ClearSelection2(true);
                                    assy.EditAssembly();//退出编辑零件模式
                                }
                                else
                                {
                                    throw new Exception("Failed to set the depth to the feature");
                                }
                            }
                            else
                            {
                                throw new InvalidOperationException("Failed to access feature");
                            }
                        }
                        else
                        {
                            throw new InvalidCastException("Selected feature is not an extrude feature");
                        }
                    }
                    else
                    {
                        throw new InvalidOperationException("Failed to edit part");
                    }
                }
                else
                {
                    throw new InvalidOperationException("Failed to select component");
                }
            }
            else
            {
                throw new Exception("Select component");
            }
        }

        public SldWorks swApp;
    }
}
~~~