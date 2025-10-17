<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation');
</script>

<template>
  <UPageAside class="aside">
    <UContentNavigation :navigation="navigation" highlight />
    <USeparator
      :avatar="{
        src: '/pitamai-icon.svg',
        size: 'xs',
      }"
    />
    <PageHeaderMenu />
  </UPageAside>
</template>

<style scoped>
.aside {
  padding-left: 40px;
}
</style>
