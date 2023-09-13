---
sidebar_position: 1
---

# 创建页面

通过在`src/pages`目录下添加**Markdown文件或React文件**来创建**独立页面**。

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## 创建第一个React页面

创建文件`src/pages/my-react-page.js`。

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

新页面将在`http://localhost:3000/my-react-page`上可用。

## 创建第一个Markdown页面

创建文件`src/pages/my-markdown-page.md`。

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

新页面将在`http://localhost:3000/my-markdown-page`上可用。