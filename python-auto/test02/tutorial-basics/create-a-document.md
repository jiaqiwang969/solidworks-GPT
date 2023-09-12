# 创建文档

文档是通过以下方式连接的**页面组**：

- 一个**侧边栏**
- **上一页/下一页导航**
- **版本控制**

## 创建你的第一个文档

在`docs/hello.md`创建一个markdown文件：

```md title="docs/hello.md"
# 你好

这是我的**第一个Docusaurus文档**！
```

现在可以在`http://localhost:3000/docs/hello`找到一个新的文档。

## 配置侧边栏

Docusaurus会自动从`docs`文件夹中**创建一个侧边栏**。

添加元数据来自定义侧边栏的标签和位置：

```md title="docs/hello.md" {1-4}
---
sidebar_label: '嗨！'
sidebar_position: 3
---

# 你好

这是我的**第一个Docusaurus文档**！
```

也可以在`sidebars.js`中显式地创建你的侧边栏：

```diff title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '教程',
-     items: [...],
+     items: ['hello'],
    },
  ],
};
```