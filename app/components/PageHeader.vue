<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const headerMenuItems = ref([
  {
    label: "ホーム",
    icon: "i-lucide-house",
    to: "/",
  },
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    to: "https://github.com/nuxt/ui",
    target: "_blank",
  },
]);

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");
</script>

<template>
  <UHeader class="shadow-sm">
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-2 font-semibold">
        <img
          src="/pitamai-only-logo.svg"
          alt="ピタマイ、PitaMaiロゴ"
          class="h-12 max-w-full"
        />
      </NuxtLink>
    </template>

    <template #right>
      <PageHeaderMenu :items="headerMenuItems" class="hidden lg:block" />
      <UColorModeButton />
    </template>

    <template #body>
      <UContentNavigation :navigation="navigation" highlight />
      <USeparator
        :avatar="{
          src: '/pitamai-icon.svg',
          size: 'xs',
        }"
      />
      <PageHeaderMenu />
    </template>
  </UHeader>
</template>
