---
layout: sw-tool
title:  在绘图中切换白色背景的VBA宏
caption: 切换绘图背景为白色
description: 使用系统设置，在绘图中切换白色背景和其他颜色的VBA宏
image: ToggleWhiteBackground-icon.svg
labels: [绘图, 选项, 背景, 截图]
group: 选项 
---
作者：[Eddy Alleman](https://www.linkedin.com/in/eddyalleman/) ([EDAL Solutions](https://www.edalsolutions.be/index.php/en/))

![手动设置SolidWorks绘图背景的系统选项](solidworks-option-background.png){ width=450 }

介绍
在SolidWorks论坛上，有人问如何制作一个可以在默认绘图背景颜色和白色之间切换的宏。
目标是使在需要白色背景的图像捕捉更加容易。

这是一个简单的宏，可以实现这个目标。我还将解释您需要的基本按钮/快捷键/菜单。

如果您想在其他颜色之间切换，可以在下面的Color1和Color2常量中进行更改。

## 但是我们如何获得与我们想要的颜色对应的数字呢？
只需在SolidWorks选项中手动更改为您喜欢的颜色（在上面的图像中，我选择了一种更明显的黄色）
然后使用宏编辑器打开宏（菜单工具 > 宏 > 编辑或使用宏工具栏）。 
如果立即窗口不可见，请打开它（CTRL + G）
运行宏（F5或绿色箭头按钮），在立即窗口中，您应该看到您选择的颜色由一个数字表示：

![运行宏后显示所选颜色的立即窗口](vba-immediate-window-chosen-color.png)

在代码中调整数字（Color2），当您运行宏时，背景颜色将在白色和您喜欢的颜色之间切换。

~~~ vb
'此宏在绘图的背景颜色之间切换2种颜色。
'它使用系统选项，因此您打开的每个绘图都会获得所选择的颜色
'如果您想在白色背景上进行屏幕捕捉，这可能很有用。

'在这里，您可以设置要在其间切换的2种颜色
Const Color1 As Variant = 16777215 '白色
Const Color2 As Variant = 14411494 '灰色（绘图背景的默认颜色）


Sub main()

try_:

    On Error GoTo catch_

    Dim swApp As Object
    Set swApp = Application.SldWorks
    
    Dim swModel As ModelDoc2
    Set swModel = swApp.ActiveDoc
    
    '第一次使用时获取颜色（在立即窗口中查看CTRL + G）
    Dim Color As Variant
    Color = swApp.GetUserPreferenceIntegerValue(swUserPreferenceIntegerValue_e.swSystemColorsDrawingsPaper)
    Debug.Print "Color : " + CStr(Color)
    
     
    If Color <> Color1 Then
       Color = swApp.SetUserPreferenceIntegerValue(swUserPreferenceIntegerValue_e.swSystemColorsDrawingsPaper, Color1)
    Else
       Color = swApp.SetUserPreferenceIntegerValue(swUserPreferenceIntegerValue_e.swSystemColorsDrawingsPaper, Color2)
    End If
    
    swModel.ForceRebuild
 
GoTo finally_:
    
catch_:

    Debug.Print "错误：" & Err.Number & "：" & Err.Source & "：" & Err.Description
    
finally_:

    Debug.Print "完成 切换绘图背景"
    
End Sub

~~~