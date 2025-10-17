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
});
