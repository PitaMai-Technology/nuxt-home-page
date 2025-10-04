<script setup lang="ts">
const externalLinks = [
  {
    label: 'GitHub',
    to: 'https://github.com',
    description: 'ソースコードを見る',
    icon: 'i-simple-icons-github',
    target: '_blank'
  },
  {
    label: 'Twitter',
    to: 'https://twitter.com',
    description: '最新情報をチェック',
    icon: 'i-simple-icons-twitter',
    target: '_blank'
  }
]

const { navigationItems } = useNavigation(undefined, externalLinks)
</script>

<template>
  <UPageAside class="aside">
    <UNavigationMenu :items="navigationItems" orientation="vertical" />
  </UPageAside>
</template>

<style scoped>
.aside {
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
}
</style>