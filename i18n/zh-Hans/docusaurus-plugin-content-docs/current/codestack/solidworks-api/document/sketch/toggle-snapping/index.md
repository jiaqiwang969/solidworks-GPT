---
layout: sw-tool
caption: 切换草图捕捉
title: 在SOLIDWORKS文档中切换草图捕捉的宏
description: 用于在SOLIDWORKS草图中切换启用/禁用捕捉选项的VBA宏
image: toggle-snapping.svg
group: 草图
---
![启用草图捕捉选项](enable-snapping-option.png)

这个VBA宏允许在SOLIDWORKS草图中切换启用/禁用"启用"选项。

## 在工具栏+中使用宏

这个宏可以在[工具栏+](https://cadplus.xarial.com/toolbar/)中使用，这将改善用户体验。可以为宏按钮启用[切换状态](https://cadplus.xarial.com/toolbar/configuration/toggles/)。

![启用捕捉切换按钮](enable-snapping-animation.gif)

将以下代码粘贴到"切换按钮状态代码"文本框中：

~~~ vb
Return CType(Application, Object).Sw.GetUserPreferenceToggle(249)
~~~

![处理切换按钮状态的代码](toggle-state-code.png)

下载图标[在此处](toggle-snapping.svg)

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim curVal As Boolean
    curVal = False <> swApp.GetUserPreferenceToggle(swUserPreferenceToggle_e.swSketchInference)
    
    swApp.SetUserPreferenceToggle swUserPreferenceToggle_e.swSketchInference, Not curVal
    
End Sub
~~~