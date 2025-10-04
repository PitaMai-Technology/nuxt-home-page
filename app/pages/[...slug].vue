<script setup lang="ts">
const route = useRoute()

// コンテンツを取得

const { data: page } = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first())

// 404エラーハンドリング
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'ページが見つかりません' })
}

// ページのメタデータを設定
useHead({
  title: page.value?.title,
  meta: [
    { name: 'description', content: page.value?.description }
  ]
})
</script>

<template>
  <div>
    <template v-if="page">
      <ContentRenderer :value="page" />
    </template>
  </div>
</template>