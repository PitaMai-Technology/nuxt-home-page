<script setup lang="ts">
const menuItems = ref([
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/PitaMai-Technology',
    target: '_blank',
  },
]);
</script>

<template>
  <UNavigationMenu :items="menuItems" />
</template>

<style scoped></style>
