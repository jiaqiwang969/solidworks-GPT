---
title:  Visual Basic 中的模块
caption: 模块
---
 本文介绍了在 Visual Basic 中使用模块来存储可共享的函数和变量的用法。
image: add-new-module.png
sidebar_position: 0
---
模块是用于在 Visual Basic 中组织代码的容器，用于定义自定义函数、过程或变量。

包含入口点子程序（main）的模块是一个入口模块。在 Visual Basic 宏中至少定义了一个模块。

要添加新模块，需要右键单击“模块”文件夹，然后选择“插入->模块”命令。

![将新模块添加到宏中](add-new-module.png){ width=250 }

模块必须具有开发人员定义的唯一名称。

![模块属性](module-properties.png)

在模块中定义的函数是公共的。使用 **Dim** 关键字声明的成员（变量）仅在此模块范围内可见，对于其他模块不可见，而使用 **Public** 关键字声明的成员对于此模块和其他模块可见。有关更多信息，请参阅[变量作用域](/docs/codestack/visual-basic/variables/scope)文章。

![模块成员](module-members.png)

在键入模块名称后，模块成员在 IntelliSense 中可用。

![在模块中定义的成员的 IntelliSense](module-members-intellisense.png)