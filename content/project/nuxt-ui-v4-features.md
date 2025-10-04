---
title: Nuxt UI v4 の新機能
description: Nuxt UI v4 で追加された素晴らしい新機能について
date: 2025-09-25
tags: [nuxt, ui, web開発]
author: 開発チーム
---

# Nuxt UI v4 の新機能

Nuxt UI v4 がリリースされ、多くの素晴らしい新機能が追加されました。

## 主な新機能

### 1. 改善されたコンポーネント

新しいバージョンでは、より直感的で使いやすいコンポーネントが追加されています。

::alert{type="success"}
パフォーマンスが大幅に向上しました！
::

### 2. より良いアクセシビリティ

すべてのコンポーネントがWCAGガイドラインに準拠するよう改善されました。

### 3. 新しいテーマシステム

::code-group
```vue [components/Example.vue]
<template>
  <UButton color="primary" variant="solid">
    クリックしてください
  </UButton>
</template>
```

```typescript [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  ui: {
    theme: 'custom'
  }
})
```
::

## まとめ

Nuxt UI v4 は開発者にとって大きな改善をもたらします。ぜひお試しください！