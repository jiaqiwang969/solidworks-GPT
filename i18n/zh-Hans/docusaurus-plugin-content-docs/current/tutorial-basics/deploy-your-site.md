---
sidebar_position: 5
---

# 部署你的网站

Docusaurus 是一个**静态网站生成器**（也称为**[Jamstack](https://jamstack.org/)**）。

它将你的网站构建为简单的**静态 HTML、JavaScript 和 CSS 文件**。

## 构建你的网站

将你的网站构建为**生产环境**：

```bash
npm run build
```

静态文件将生成在 `build` 文件夹中。

## 部署你的网站

在本地测试你的生产构建：

```bash
npm run serve
```

`build` 文件夹现在在 `http://localhost:3000/` 上提供服务。

现在你可以将 `build` 文件夹**几乎任意地**轻松部署，**免费**或者只需很少的费用（阅读**[部署指南](https://docusaurus.io/docs/deployment)**）。