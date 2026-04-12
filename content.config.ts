import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        author: z.string().default("Hoodik Team"),
        category: z.enum(["Privacy", "Guides", "Technical", "Comparisons"]),
        tags: z.array(z.string()).default([]),
        image: z.string().default("/images/screenshot.png"),
        draft: z.boolean().default(false),
      }),
    }),
    vs: defineCollection({
      type: "page",
      source: "vs/**",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        competitor: z.object({
          name: z.string(),
          website: z.string(),
        }),
        verdict: z.string(),
        features: z.array(
          z.object({
            name: z.string(),
            hoodik: z.union([z.boolean(), z.string()]),
            competitor: z.union([z.boolean(), z.string()]),
            note: z.string().optional(),
          })
        ),
        draft: z.boolean().default(false),
      }),
    }),
  },
});
