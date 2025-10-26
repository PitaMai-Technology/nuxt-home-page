<script setup lang="ts">
const links = ref([
  {
    label: '参加してみる',
    to: 'https://discord.gg/szxdR8jZbT',
    icon: 'i-skill-icons-discord',
    trailingIcon: 'i-lucide-arrow-right',
    target: '_blank'
  },
  {
    label: '詳しく見てみる',
    to: '/about',
    color: 'neutral',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>
<template>
  <UPageHero
    title="ちょうど良いぐらいのテクノロジー"
    description="ちょうど良いぐらいのテクノロジーで、チームでOSSや創作活動をする。"
    headline="PitaMai Technology / ピタマイ・テクノロジー"
    class="bg-primary-400/10 rounded-xl"
    :links="links"
  />
</template>

<style scoped></style>
