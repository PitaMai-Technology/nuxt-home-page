<script setup lang="ts"></script>

<template>
  <UFooter class="bg-blend-color">
    <template #left>
      <p class="text-muted text-sm">© {{ new Date().getFullYear() }} PitaMai Technology</p>
    </template>

    <template #right>
      <p>当団体は任意団体(サークル)です。</p>
      <UButton icon="i-simple-icons-discord" color="neutral" variant="ghost" to="https://discord.gg/szxdR8jZbT"
        target="_blank" aria-label="Discord" />
      <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" to="https://github.com/PitaMai-Technology"
        target="_blank" aria-label="GitHub" />
      <!--      Twitterのリンク-->
      <UButton icon="i-simple-icons-twitter" color="neutral" variant="ghost" to="https://x.com/PitaMai_Tech"
        target="_blank" aria-label="Twitter" />
    </template>
  </UFooter>
</template>
