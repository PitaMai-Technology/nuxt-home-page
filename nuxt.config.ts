// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxtjs/seo",
    "@nuxt/content",
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

  // Nuxt Studio
  // studio: {
  //   repository: {
  //     provider: 'github', // only GitHub is currently supported
  //     owner: 'your-username', // your GitHub username or organization
  //     repo: 'your-repo', // your repository name
  //     branch: 'feat-nuxt-studio', // the branch to commit to (default: main)
  //     rootDir: '' // optional: if your Nuxt app is in a subdirectory (default: '')
  //   }
  // },

  nitro: {
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true
    }
  }
});