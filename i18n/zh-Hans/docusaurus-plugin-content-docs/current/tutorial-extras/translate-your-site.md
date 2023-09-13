[#0]

# 翻译您的网站

让我们将 `docs/intro.md` 翻译成法语。

## 配置国际化

修改 `docusaurus.config.js` 文件以添加对 `fr` 语言环境的支持：

[#1]

## 翻译文档

将 `docs/intro.md` 文件复制到 `i18n/fr` 文件夹中：

[#2]

将 `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` 文件翻译成法语。

## 启动本地化网站

在法语环境下启动您的网站：

[#3]

您的本地化网站可以通过 `http://localhost:3000/fr/` 访问，并且 `Getting Started` 页面已被翻译。

:::caution

在开发中，您一次只能使用一个语言环境。

:::

## 添加语言选择下拉菜单

为了在不同语言之间无缝切换，添加一个语言选择下拉菜单。

修改 `docusaurus.config.js` 文件：

[#4]

现在您的导航栏中会显示语言选择下拉菜单：

![Locale Dropdown](/img/tutorial/localeDropdown.png)

## 构建本地化网站

为特定语言环境构建您的网站：

[#5]

或者一次性构建包含所有语言环境的网站：

[#6]