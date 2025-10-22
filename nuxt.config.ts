// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "nuxt-gtag",
  ],
  css: ["~/assets/css/main.css"],

  gtag: {
    id: "G-YMJHQ4TNQH",
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://pitamai.com' // 実運用では環境変数で切り替える
    }
  }
});
