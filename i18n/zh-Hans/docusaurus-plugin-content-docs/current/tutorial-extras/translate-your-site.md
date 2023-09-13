<<<<<<< HEAD
# 翻译您的网站
=======
[#0]
>>>>>>> bb8c383 (-)

让我们将 `docs/intro.md` 翻译成法语。

## 配置 i18n

修改 `docusaurus.config.js` 文件以添加对 `fr` 区域设置的支持：

[#1]

## 翻译文档

将 `docs/intro.md` 文件复制到 `i18n/fr` 文件夹中：

[#2]

用法语翻译 `i18n/fr/docusaurus-plugin-content-docs/current/intro.md`。

## 启动本地化站点

在法语区域设置上启动您的站点：

[#3]

您的本地化站点可通过 `http://localhost:3000/fr/` 访问，并且 `Getting Started` 页面已被翻译。

:::caution

在开发中，您一次只能使用一个区域设置。

:::

## 添加区域设置下拉菜单

为了在不同语言之间无缝切换，添加一个区域设置下拉菜单。

修改 `docusaurus.config.js` 文件：

[#4]

现在，您的导航栏中会出现区域设置下拉菜单：

![Locale Dropdown](/img/tutorial/localeDropdown.png)

## 构建本地化站点

为特定区域设置构建您的站点：

[#5]

或者一次性构建包含所有区域设置的站点：

<<<<<<< HEAD
```bash
npm run build
```
=======
[#6]
>>>>>>> bb8c383 (-)
