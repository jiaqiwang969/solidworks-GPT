---
sidebar_position: 1
---

# 管理文档版本

Docusaurus可以管理您的文档的多个版本。

## 创建文档版本

发布项目的1.0版本：

```bash
npm run docusaurus docs:version 1.0
```

`docs`文件夹被复制到`versioned_docs/version-1.0`，并创建了`versions.json`文件。

现在您的文档有两个版本：

- `1.0`位于`http://localhost:3000/docs/`，用于1.0版本的文档
- `current`位于`http://localhost:3000/docs/next/`，用于**即将发布的文档**

## 添加版本下拉菜单

为了在不同版本之间无缝切换，添加一个版本下拉菜单。

修改`docusaurus.config.js`文件：

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

文档版本下拉菜单将出现在导航栏中：

![文档版本下拉菜单](/img/tutorial/docsVersionDropdown.png)

## 更新现有版本

可以在各自的文件夹中编辑版本化的文档：

- `versioned_docs/version-1.0/hello.md`更新`http://localhost:3000/docs/hello`
- `docs/hello.md`更新`http://localhost:3000/docs/next/hello`