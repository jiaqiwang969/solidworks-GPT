---
sidebar_position: 5
---

# 部署网站

Docusaurus是一个**静态网站生成器**（也被称为**[Jamstack](https://jamstack.org/)**）。

网站将被构建为简单的**静态HTML、JavaScript和CSS文件**。

## 构建网站

将网站构建为**生产环境**：

```bash
npm run build
```

静态文件将生成在`build`文件夹中。

## 部署网站

在本地测试生产构建：

```bash
npm run serve
```

`build`文件夹将在`http://localhost:3000/`上提供。

现在，您可以将`build`文件夹**轻松地**部署到**几乎任何地方**，并且可以**免费**或者非常低成本地进行部署（请参阅**[部署指南](https://docusaurus.io/docs/deployment)**）。