---
title: 使用SOLIDWORKS PDM API在数据卡按钮点击时连接描述变量
caption: 连接描述变量
description: 本示例演示了如何使用SOLIDWORKS PDM Professional API在PDM插件中处理数据卡上的按钮点击，并根据修订和编号变量的值连接描述变量。
image: button-update-variable.gif
labels: [hook, button click, variables]
---

本示例演示了如何使用SOLIDWORKS PDM API在数据卡上处理按钮点击，并根据PDM插件中修订和编号变量的值连接描述变量。

- 在PDM管理控制台中向数据卡添加按钮
- 将*Command type*选项设置为*Run Add-in*
- 指定插件的名称，如下图所示。此选项允许指定唯一的标签，当按钮被点击时，插件可以通过该标签正确识别按钮。

![数据卡设置选项](data-card-button.png){ width=500 }

此选项应与插件中的*BUTTON_TAG*常量的值相等。

~~~ cs
private const string BUTTON_TAG = "_UpdateDesc_";
~~~

- 确保数据卡上存在*Number*、*Revision*和*Description*变量，或相应地修改插件代码：

当按钮被点击时，*Description*变量将根据*Number*和*Revision*变量的值连接更新。

![按钮点击时更新Description](button-update-variable.gif){ width=450 }

~~~ cs
using EPDM.Interop.epdm;
using System;
using System.Linq;
using System.Runtime.InteropServices;

namespace PdmCardVariableUpdate
{
    [ComVisible(true)]
    [Guid("9AD5B02B-5027-4751-BBC3-6EF4AE6E3206")]
    public class ButtonPdmAddIn : IEdmAddIn5
    {
        private const string BUTTON_TAG = "_UpdateDesc_";

        public void GetAddInInfo(ref EdmAddInInfo poInfo, IEdmVault5 poVault, IEdmCmdMgr5 poCmdMgr)
        {
            poInfo.mbsAddInName = "ButtonPdmAddIn";
            poInfo.mlAddInVersion = 1;
            poInfo.mlRequiredVersionMajor = 16;

            poCmdMgr.AddHook(EdmCmdType.EdmCmd_CardButton);
        }

        public void OnCmd(ref EdmCmd poCmd, ref EdmCmdData[] ppoData)
        {
            switch (poCmd.meCmdType)
            {
                case EdmCmdType.EdmCmd_CardButton:
                    var addInTagName = poCmd.mbsComment;
                    if (addInTagName == BUTTON_TAG)
                    {
                        var confName = ppoData.First().mbsStrData1;
                        var enumVar = poCmd.mpoExtra as IEdmEnumeratorVariable5;

                        object varVal;
                        enumVar.GetVar("Number", confName, out varVal);

                        var number = varVal?.ToString();
                        enumVar.GetVar("Revision", confName, out varVal);

                        var revision = varVal?.ToString();

                        var desc = (object)$"{number} ({revision})";
                        enumVar.SetVar("Description", confName, ref desc);
                    }
                    break;
            }
        }
    }
}
~~~