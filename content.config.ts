import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSitemapCollection, schema as sitemapSchema } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    homepage: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: '**/*.{md,yml,yaml,json,csv}',
        // Issue #77: sitemap フィールドを Studio では隠す
        schema: z.object({
          sitemap: z.string().editor({ hidden: true })
        })
      })
    )
  }
})