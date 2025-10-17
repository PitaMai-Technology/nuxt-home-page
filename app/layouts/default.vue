<script setup lang="ts">
// Nuxt Content v3の正しい関数を使用
const { data: navigation } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('content');
});

// 子コンポーネントに提供
provide('navigation', navigation);
</script>

<template>
  <div>
    <PageHeader />

    <UPage class="max-w-7xl m-auto">
      <template #left>
        <PageAside />
      </template>

      <!-- メインコンテンツ -->
      <UMain class="p-5 pt-10 max-w-6xl m-auto">
        <slot />
      </UMain>
    </UPage>
  </div>
</template>
