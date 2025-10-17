<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig()

// コンテンツを取得

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('content').path(route.path).first()
);

// 404エラーハンドリング
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'ページが見つかりません',
  });
}

// ページのメタデータを設定
useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description,
  ogImage: config.public.siteUrl + '/ogp.png',
  ogUrl: config.public.siteUrl + route.path,
  // twitterカード設定
  twitterTitle: config.public.siteUrl + route.path,
  twitterDescription: page.value?.description,
  twitterImage: config.public.siteUrl + '/ogp.png',
  twitterCard: 'summary_large_image',
});

</script>

<template>
  <div>
    <template v-if="page">
      <ContentRenderer :value="page" />
    </template>
  </div>
</template>
