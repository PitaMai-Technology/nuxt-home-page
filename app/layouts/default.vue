<script setup lang="ts">
</script>

<template>
  <div>
    <PageHeader />

    <UPage>

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