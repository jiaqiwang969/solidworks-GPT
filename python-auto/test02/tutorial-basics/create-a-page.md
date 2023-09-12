# 创建页面

将**Markdown或React**文件添加到`src/pages`目录下，以创建**独立页面**：

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## 创建你的第一个React页面

在`src/pages`目录下创建一个文件`my-react-page.js`：

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>我的React页面</h1>
      <p>这是一个React页面</p>
    </Layout>
  );
}
```

现在可以通过`http://localhost:3000/my-react-page`访问新页面。

## 创建你的第一个Markdown页面

在`src/pages`目录下创建一个文件`my-markdown-page.md`：

```mdx title="src/pages/my-markdown-page.md"
# 我的Markdown页面

这是一个Markdown页面
```

现在可以通过`http://localhost:3000/my-markdown-page`访问新页面。