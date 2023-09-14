---
layout: default
title: SOLIDWORKS自动化的宏和脚本库
caption: "'好东西'"
description: 有用的自动化宏和脚本，可提高您在SOLIDWORKS中工作时的生产力
image: macros-library.svg
labels: [工具, solidworks, 宏]
search: false
styles:
  - /_assets/styles/catalogue.css
group-descriptions:
  Model: 3D模型（零件和装配体）和2D图纸的自动化
  Materials: SOLIDWORKS材料数据库和零件属性的自动化
  Frame: SOLIDWORKS菜单、工具栏、第三方插件、文档管理的自动化
  Developers: 为使用SOLIDWORKS API构建软件的开发人员提供的实用工具
  Custom Properties: SOLIDWORKS通用、配置和切割清单自定义属性的自动化
  Part: SOLIDWORKS零件文档（*.sldprt）的自动化：几何、特征树
  Assembly: SOLIDWORKS装配体文档（*.sldasm）的自动化：组件、配合关系
  Drawing: SOLIDWORKS图纸文档（*.slddrw）的自动化：表格、视图、图纸
  Security: 为使用SOLIDWORKS API的模型和应用程序提供额外的安全性和保护
  Sketch: SOLIDWORKS草图、线段和关系的自动化
  Performance: 提升SOLIDWORKS文档和应用程序的操作性能
  Geometry: SOLIDWORKS几何自动化：自定义特征、拓扑优化
  Import/Export: 将SOLIDWORKS文件导入和导出到不同格式的自动化
  Motion Study: SOLIDWORKS运动研究模块的自动化
  Options: SOLIDWORKS文档和系统选项的自动化
  Cut-List: 在钣金和焊接零件和图纸中自动化SOLIDWORKS切割清单
redirect-from:
  - /p/solidworks-goodies.html
sidebar_position: 0
---
# SOLIDWORKS自动化的宏库
{% social-share %}

[请求宏](https://github.com/xarial/codestack/issues/new?labels=macro-request){ target="_blank" class="download-button" }

![SOLIDWORKS宏库](macros-library.svg){ width=400 }

本页面包含了一些有用的宏、实用工具和脚本，供SOLIDWORKS工程师使用。宏按照类别进行分组：零件装配、图纸、性能等等。

请参阅[SOLIDWORKS API编程VBA和VSTA宏](/docs/codestack/solidworks-api/getting-started/macros/)部分，了解在SOLIDWORKS中使用和创建宏的指南。

找不到适合您的宏？提交[请求宏](https://github.com/xarial/codestack/issues/new?labels=macro-request)表单，我们的团队将审查您的请求，并尽力将宏添加到库中。

## 宏库组织的最佳实践

[Toolbar+](https://cadplus.xarial.com/toolbar/)是一个免费且开源的[SOLIDWORKS CAD+工具集](https://cadplus.xarial.com/)插件，它允许在SOLIDWORKS环境中组织自定义工具栏的宏库。该插件还可以通过将配置存储在集中位置来管理多用户环境。

![工具栏中的自定义宏按钮](macro-library-toolbar.png){ width=450 }

另外，也可以使用SOLIDWORKS的原生功能创建宏按钮。请阅读[在SOLIDWORKS工具栏中创建宏按钮](/docs/codestack/solidworks-api/getting-started/macros/macro-buttons/)获取更多信息。

浏览本节以找到适合您需求的生产力和自动化工具。

如需其他生产力插件，请访问[SOLIDWORKS实验室](/docs/codestack/labs/solidworks/)页面。

## 批量运行

在某些情况下，可能需要对多个文件或文件夹中的SOLIDWORKS文件批量运行宏。尝试使用[Batch+](https://cadplus.xarial.com/batch/)，它是一个免费的独立应用程序，是[SOLIDWORKS CAD+工具集](https://cadplus.xarial.com/)的一部分。

---
{% catalogue { type: sw-tool } %}