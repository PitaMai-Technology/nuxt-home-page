# ピタマイ・テクノロジー 公式サイト

ピタマイ・テクノロジーの公式ウェブサイトのソースコードです。

## 技術スタック

- フレームワーク: Nuxt 4
- UIライブラリ: Nuxt UI v4
- スタイリング: Tailwind CSS
- コンテンツ管理: Nuxt Content v3
- デプロイ: NuxtHub(beta)
- パッケージマネージャー: pnpm
- 開発言語: TypeScript

## プロジェクト構成

```
root/
├── app/                    # アプリケーション本体
│   ├── components/        # Vueコンポーネント
│   │   ├── global/       # グローバルコンポーネント
│   │   ├── PageHeader.vue
│   │   ├── PageAside.vue
│   │   └── PageFooter.vue
│   ├── layouts/          # レイアウト
│   ├── pages/            # ページコンポーネント
│   └── assets/           # アセット
├── content/              # MDC構文コンテンツ
├── public/              # 公開静的ファイル
├── nuxt.config.ts      # Nuxt設定
└── content.config.ts   # コンテンツ設定
```

## 主な機能

- レスポンシブデザイン
- SEO最適化（OGP、サイトマップ対応 (NuxtSEO) ）
- Nuxt Contentによる動的コンテンツ管理
- Nuxt Studioでも利用可
- NuxtHubでCloudflareへ簡単にデプロイ

## セットアップ

依存関係のインストール:

```bash
pnpm i
```

## 開発

開発サーバーを起動（`http://localhost:3000`）:

```bash
pnpm dev
```

## ビルド

本番用ビルド:

```bash
pnpm build
```

ビルドのプレビュー:

```bash
pnpm preview
```

## コンテンツ管理

コンテンツは`content/`ディレクトリ内のMarkdownファイルで管理されています。

### 新規ページの追加

1. `content/`ディレクトリに`.md`ファイルを作成
2. Front-matterでメタデータを設定:

```yaml
---
title: ページタイトル
description: ページの説明
navigation:
  title: ナビゲーション表示名
  icon: i-lucide-icon-name
---
```

### ナビゲーションのメニューを変更(ディレクトリ)

`.navigation.yml`を追加

```yaml
title: 組織
icon: i-lucide-users-round
```

## 環境変数

[nuxt.config.ts](nuxt.config.ts)で以下の設定が可能:

- `runtimeConfig.public.siteUrl`: サイトURL（本番環境では環境変数で設定推奨）
- `gtag.id`: Google Analytics ID

## デプロイ

[NuxtHub](https://hub.nuxt.com/)を使用しています。
詳しくはドキュメントを参照してください。

## ライセンス

© 2025 PitaMai Technology
