---
title: 'SOLIDWORKS宏故障排除：问题和解决方案'
caption: '宏故障排除：问题和解决方案'
description: SOLIDWORKS中运行宏时常见错误的概述和解决方案
labels: [宏, 不工作, 问题, solidworks api, 故障排除, vba]
styles:
  - /_assets/styles/catalogue.css
redirect-from:
  - /2018/04/macros-troubleshooting-issues-and-resolutions.html
---
SOLIDWORKS宏是通过其API自动化和扩展SOLIDWORKS功能的最常见方式。
宏可以在公司内部开发，也可以从不同的网站下载，包括SOLIDWORKS论坛、3D Content Central、[CodeStack](/docs/codestack/solidworks-tools)等，甚至可以从SOLIDWORKS录制。

但在某些情况下，宏无法按预期工作。这通常是以下情况之一：

* 之前正常工作的宏突然停止工作。
* 宏在某些工作站上工作，但在其他工作站上不工作。
* 宏对某些模型工作正常，但对其他模型不工作。

在本文中，我将介绍宏错误的最常见症状。

浏览错误列表以找到最常见的解决方案。

单击链接以获取有关问题的详细描述、原因和解决步骤。

## 错误列表

* 运行时错误 '91'：对象变量或 With 块变量未设置
  * [解决方案1](/docs/codestack/solidworks-api/troubleshooting/macros/assembly-drawing-lightweight-components/)
  * [解决方案2](/docs/codestack/solidworks-api/troubleshooting/macros/macro-multiple-entry-points/)
  * [解决方案3](/docs/codestack/solidworks-api/troubleshooting/macros/create-sketch-segments-error/)
  * [解决方案4](/docs/codestack/solidworks-api/troubleshooting/macros/preconditions-not-met/)
  * [解决方案5](/docs/codestack/solidworks-api/troubleshooting/macros/selection-inconsistency/)

* 编译错误：找不到项目或库
  * [解决方案1](/docs/codestack/solidworks-api/troubleshooting/macros/missing-solidworks-type-library-references/)

* 运行时错误 '424'：对象所需
  * [解决方案1](/docs/codestack/solidworks-api/troubleshooting/macros/merged-macro-error/)

* 运行时错误 '13'：类型不匹配
  * [解决方案1](/docs/codestack/solidworks-api/troubleshooting/macros/preconditions-not-met/)

* 编译错误：未定义的类型
  * [解决方案1](/docs/codestack/solidworks-api/troubleshooting/macros/swb-macro-error/)

* 运行时错误 '438'：对象不支持此属性或方法
  * [解决方案1](/docs/codestack/solidworks-api/troubleshooting/macros/future-version-apis/)

* 运行时错误 '429'：ActiveX 组件无法创建对象
  * [解决方案1](/docs/codestack/solidworks-api/troubleshooting/macros/missing-com-component/)

* 运行时错误 '5'：无效的过程调用或参数
  * [解决方案1](/docs/codestack/solidworks-api/troubleshooting/macros/model-title-inconsistency-displaying-extension/)

* 编译错误：显示“必须更新此项目的代码以在 64 位系统上使用”。请检查并更新 Declare 语句，然后使用 PtrSafe 属性标记项目
  * [解决方案1](/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/)

* 无法打开（适用于VBA宏）
  * [解决方案1](/docs/codestack/solidworks-api/troubleshooting/macros/too-long-macro-path/)

* 编译错误：无效的过程外错误
  * [解决方案1](/docs/codestack/solidworks-api/troubleshooting/macros/too-long-vba-macro-line/)

* SolidWorksMacro不包含“swApp”的定义（VSTA）
  * [解决方案1](/docs/codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/)

* 无法打开（适用于VSTA宏）
  * [解决方案1](/docs/codestack/solidworks-api/troubleshooting/macros/run-vsta-macro-error/)

{% catalogue { type: sw-macro-fix } %}