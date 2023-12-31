---
layout: sw-macro-fix
title:  如何修复合并的SOLIDWORKS宏错误
caption: 合并的宏无法工作
---
 修复独立工作正常但合并后无法工作的宏的运行时错误'424' - 对象必需
image: error-object-required.png
labels: [宏, 故障排除]
redirect-from:
  - /2018/04/macro-troubleshooting-merged-macro-does-not-work.html
---
## 症状

SOLIDWORKS宏在独立工作时正常，但合并后无法工作。可能会显示错误：*运行时错误'424'：对象必需*

![运行时错误'424'：运行宏时出现对象必需错误](error-object-required.png){ width=320 height=193 }

## 原因

* 合并的宏可能不兼容
* 源宏中可能存在必需的初始化，但未复制到目标宏中
* 源宏和目标宏之间的变量命名可能不同

![从记录的宏插入的代码块](zoom-to-fit-error.png){ width=320 height=221 }

## 解决方法

* 确定哪一行出错
* 检查变量的状态。将鼠标悬停在变量上，查看是否在工具提示中显示为*Nothing*。
* 确保正确复制了宏的相应部分
* 确保必需的初始化也被复制（如果适用）
* 确保变量命名一致