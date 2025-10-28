<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('content');
});

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
    <PageFooter />
  </div>
</template>
