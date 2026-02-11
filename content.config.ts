import { defineCollection, defineContentConfig, property, z } from '@nuxt/content'
import { asSitemapCollection, schema as sitemapSchema } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    homepage: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: '**/*.{md,yml,yaml,json,csv}',
        // schema: z.object({
        //   Seo: property(z.string()).editor({ hidden: true }),
        // })
      })
    )
  }
})