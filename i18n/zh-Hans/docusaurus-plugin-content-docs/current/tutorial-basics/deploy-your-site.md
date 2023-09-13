---
sidebar_position: 5
---

# サイトをデプロイする

Docusaurusは、**静的サイトジェネレータ**（または**[Jamstack](https://jamstack.org/)**とも呼ばれる）です。

Docusaurusは、サイトを単純な**静的なHTML、JavaScript、CSSファイル**としてビルドします。

## サイトをビルドする

サイトを**本番用にビルド**します：

```bash
npm run build
```

静的ファイルは`build`フォルダに生成されます。

## サイトをデプロイする

本番ビルドをローカルでテストします：

```bash
npm run serve
```

`build`フォルダは`http://localhost:3000/`で提供されます。

これで、`build`フォルダを**ほぼどこでも**簡単に、**無料**または非常に低コストでデプロイできます（**[デプロイガイド](https://docusaurus.io/docs/deployment)**を参照）。