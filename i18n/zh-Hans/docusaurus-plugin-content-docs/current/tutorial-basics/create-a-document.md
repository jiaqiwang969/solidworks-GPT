---
sidebar_position: 2
---

# ドキュメントの作成

ドキュメントは、以下の要素で**ページのグループ**として構成されます:

- **サイドバー**
- **前後のナビゲーション**
- **バージョニング**

## 最初のドキュメントを作成する

`docs/hello.md`にマークダウンファイルを作成します:

```md title="docs/hello.md"
# こんにちは

これは私の**最初のDocusaurusドキュメント**です！
```

新しいドキュメントは、`http://localhost:3000/docs/hello`で利用できるようになります。

## サイドバーの設定

Docusaurusは、`docs`フォルダから自動的に**サイドバー**を作成します。

サイドバーのラベルと位置をカスタマイズするために、メタデータを追加します:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'こんにちは！'
sidebar_position: 3
---

# こんにちは

これは私の**最初のDocusaurusドキュメント**です！
```

また、`sidebars.js`で明示的にサイドバーを作成することも可能です:

```diff title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'チュートリアル',
-     items: [...],
+     items: ['hello'],
    },
  ],
};
```