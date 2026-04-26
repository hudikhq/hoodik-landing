<template>
  <div class="mx-auto max-w-screen-md px-3 py-16">
    <template v-if="post">
      <BlogHeader :post="post" />

      <div class="prose-hoodik mt-8">
        <ContentRenderer :value="post" />
      </div>

      <BlogCta class="mt-12" />

      <!-- Prev/Next navigation -->
      <div class="flex items-center justify-between mt-12 pt-8 border-t border-brownish-600">
        <NuxtLink
          v-if="prev"
          :to="prev.path"
          class="text-sm text-brownish-100 hover:text-white transition-colors"
        >
          &larr; {{ prev.title }}
        </NuxtLink>
        <span v-else></span>
        <NuxtLink
          v-if="next"
          :to="next.path"
          class="text-sm text-brownish-100 hover:text-white transition-colors text-right"
        >
          {{ next.title }} &rarr;
        </NuxtLink>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = (route.params.slug as string[]).join("/");

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection("blog")
    .path(`/blog/${slug}`)
    .first()
);

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Post not found" });
}

// Previous and next posts
const { data: siblings } = await useAsyncData(`blog-siblings-${slug}`, () =>
  queryCollection("blog")
    .where("draft", "!=", true)
    .order("date", "DESC")
    .all()
);

const currentIndex = computed(() =>
  siblings.value?.findIndex((p: any) => p.path === `/blog/${slug}`) ?? -1
);
const prev = computed(() =>
  currentIndex.value > 0 ? siblings.value?.[currentIndex.value - 1] : null
);
const next = computed(() =>
  siblings.value && currentIndex.value < siblings.value.length - 1
    ? siblings.value?.[currentIndex.value + 1]
    : null
);

useHead({
  title: post.value?.title ? `${post.value.title} - Hoodik` : "Blog - Hoodik",
  meta: [
    { name: "description", content: post.value?.description || "" },
    { property: "og:title", content: post.value?.title || "" },
    { property: "og:description", content: post.value?.description || "" },
    { property: "og:image", content: post.value?.image ? `https://hoodik.io${post.value.image}` : "https://hoodik.io/images/screenshot.png" },
    { property: "og:url", content: `https://hoodik.io/blog/${slug}` },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  link: [
    { rel: "canonical", href: `https://hoodik.io/blog/${slug}` },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.value?.title,
        description: post.value?.description,
        image: post.value?.image ? `https://hoodik.io${post.value.image}` : "https://hoodik.io/images/screenshot.png",
        datePublished: post.value?.date,
        author: {
          "@type": "Organization",
          name: "Hoodik",
          url: "https://hoodik.io",
        },
        publisher: {
          "@type": "Organization",
          name: "Hoodik",
          logo: { "@type": "ImageObject", url: "https://hoodik.io/images/hoodik-sm.svg" },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `https://hoodik.io/blog/${slug}` },
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hoodik.io" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://hoodik.io/blog" },
          { "@type": "ListItem", position: 3, name: post.value?.title, item: `https://hoodik.io/blog/${slug}` },
        ],
      }),
    },
  ],
});
</script>
