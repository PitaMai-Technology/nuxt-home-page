<script setup lang="ts">
// const externalLinks = [
//   {
//     label: 'GitHub',
//     to: 'https://github.com',
//     description: 'ソースコードを見る',
//     icon: 'i-simple-icons-github',
//     target: '_blank'
//   },
//   {
//     label: 'Twitter',
//     to: 'https://twitter.com',
//     description: '最新情報をチェック',
//     icon: 'i-simple-icons-twitter',
//     target: '_blank'
//   }
// ]

// デスクトップ用（フィルタリングあり）
const { navigationItems } = useNavigation(['ホーム', 'About']);
</script>

<template>
  <UHeader class="shadow-sm">
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-2 font-semibold">
        <span class="text-xl">🚀</span>
        <span>My Site</span>
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu :items="navigationItems" class="w-full justify-center" />
    </template>

    <template #body>
      <UNavigationMenu :items="navigationItems" orientation="vertical" />
    </template>
  </UHeader>
</template>