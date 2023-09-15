---
title:  SOLIDWORKS PDM API处理数据卡按钮点击的示例
caption: 数据卡按钮点击
---
 收集了一些示例和文章，说明如何使用SOLIDWORKS PDM Professional API处理数据卡上的按钮点击事件
labels: [hooks, button click, datacard]
---
使用SOLIDWORKS PDM API可以通过在按钮点击处理程序中提供自定义逻辑来扩展数据卡功能。与其他事件类似，按钮点击可以在[IEdmAddIn5::OnCmd](https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmaddin5~oncmd.html)重载中处理。

在设置数据卡时，用户需要在选项中分配特殊标记，然后可以从插件中作为注释读取该标记，以便识别特定的按钮。

本节包含使用SOLIDWORKS PDM API和实现数据卡按钮点击的自定义行为的代码示例。