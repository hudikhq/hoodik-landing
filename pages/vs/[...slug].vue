<template>
  <div class="mx-auto max-w-screen-md px-3 py-16">
    <template v-if="page">
      <VsHeader :page="page" />

      <VsComparisonTable :features="page.features" :competitor="page.competitor?.name" class="mt-8" />

      <div class="prose-hoodik mt-10">
        <ContentRenderer :value="page" />
      </div>

      <BlogCta class="mt-12" />
    </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = (route.params.slug as string[]).join("/");

const { data: page } = await useAsyncData(`vs-${slug}`, () =>
  queryCollection("vs")
    .path(`/vs/${slug}`)
    .first()
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

useHead({
  title: page.value?.title ? `${page.value.title} - Hoodik` : "Compare - Hoodik",
  meta: [
    { name: "description", content: page.value?.description || "" },
    { property: "og:title", content: page.value?.title || "" },
    { property: "og:description", content: page.value?.description || "" },
    { property: "og:image", content: "https://hoodik.io/images/screenshot.png" },
    { property: "og:url", content: `https://hoodik.io/vs/${slug}` },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  link: [
    { rel: "canonical", href: `https://hoodik.io/vs/${slug}` },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: page.value?.title,
        description: page.value?.description,
        mainEntity: {
          "@type": "Product",
          name: "Hoodik",
          description: "Self-hosted, end-to-end encrypted cloud storage",
          url: "https://hoodik.io",
        },
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hoodik.io" },
          { "@type": "ListItem", position: 2, name: "Compare", item: "https://hoodik.io/vs" },
          { "@type": "ListItem", position: 3, name: page.value?.title, item: `https://hoodik.io/vs/${slug}` },
        ],
      }),
    },
  ],
});
</script>
