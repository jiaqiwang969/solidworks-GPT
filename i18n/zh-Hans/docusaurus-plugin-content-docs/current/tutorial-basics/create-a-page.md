# 创建页面

将**Markdown或React**文件添加到`src/pages`中，以创建**独立页面**：

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## 创建你的第一个React页面

在`src/pages/my-react-page.js`中创建一个文件：

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

现在可以在`http://localhost:3000/my-react-page`上找到一个新页面。

## 创建你的第一个Markdown页面

在`src/pages/my-markdown-page.md`中创建一个文件：

```mdx title="src/pages/my-markdown-page.md"
# 我的Markdown页面

<<<<<<< HEAD
这是一个Markdown页面
=======
This is a Markdown page


>>>>>>> f0c174f (-)
```

现在可以在`http://localhost:3000/my-markdown-page`上找到一个新页面。