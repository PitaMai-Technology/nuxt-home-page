import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: 'blog/*.md',
        schema: z.object({
          // Nuxt SEO/Sitemap が注入するフィールドを明示的に除外
          sitemap: z.any().optional().editor({ hidden: true }),
          seo: z.any().optional().editor({ hidden: true })
        })
      })
    )
  }
})