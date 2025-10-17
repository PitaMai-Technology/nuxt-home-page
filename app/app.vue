<script setup lang="ts">
useHead({
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
});


</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator :throttle="1" color="#8bc170" />
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<style>
body {
  font-family: 'BIZ UDGothic', 'sans-serif';
}
</style>
