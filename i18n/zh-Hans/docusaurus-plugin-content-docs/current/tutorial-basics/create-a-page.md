---
sidebar_position: 1
---

# ページの作成

`src/pages`に**MarkdownファイルまたはReactファイル**を追加して、**スタンドアロンのページ**を作成します。

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## 最初のReactページの作成

`src/pages/my-react-page.js`にファイルを作成します。

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

新しいページは、`http://localhost:3000/my-react-page`で利用できるようになります。

## 最初のMarkdownページの作成

`src/pages/my-markdown-page.md`にファイルを作成します。

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

新しいページは、`http://localhost:3000/my-markdown-page`で利用できるようになります。