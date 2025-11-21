// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxtjs/seo",
    "@nuxt/content",
    "nuxt-studio",
    "@nuxt/eslint",
    "@nuxt/image",
    "nuxt-gtag",
    // "nuxt-studio",
  ],
  css: ["~/assets/css/main.css"],

  gtag: {
    id: "G-YMJHQ4TNQH",
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://pitamai.com' // 実運用では環境変数で切り替える
    }
  },

  site: {
    url: "https://pitamai.com",
    name: "ピタマイ(PitaMai)",
  },

  sitemap: {
    xsl: false,
  },


  studio: {
    route: '/nuxt-studio',
    repository: {
      provider: 'github', // only GitHub is currently supported
      owner: 'PitaMai-Technology', // your GitHub username or organization
      repo: 'nuxt-home-page', // your repository name
      branch: 'main', // the branch to commit to (default: main)
    }
  },

  nitro: {
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true
    }
  }
});