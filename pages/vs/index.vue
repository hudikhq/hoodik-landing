<template>
  <div class="mx-auto max-w-screen-lg px-3 py-16">
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-5xl font-bold leading-tight mb-4">How Hoodik Compares</h1>
      <p class="text-lg text-brownish-100 max-w-xl mx-auto">
        Side-by-side feature comparisons with other cloud storage solutions.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <NuxtLink
        v-for="page in pages"
        :key="page.path"
        :to="page.path"
        class="group rounded-xl bg-brownish-900 border border-brownish-600 p-6 hover:border-brownish-400 transition-all duration-300"
      >
        <div class="flex items-center gap-3 mb-3">
          <span class="text-2xl font-bold text-dirty-white">vs</span>
          <span class="text-xl font-bold text-dirty-white group-hover:text-white transition-colors">
            {{ page.competitor?.name }}
          </span>
        </div>
        <p class="text-sm text-brownish-100 line-clamp-2">
          {{ page.description }}
        </p>
        <p class="text-xs text-brownish-50 mt-3 italic line-clamp-2">
          "{{ page.verdict }}"
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: pages } = await useAsyncData("vs-list", () =>
  queryCollection("vs")
    .where("draft", "!=", true)
    .order("date", "DESC")
    .all()
);

useHead({
  title: "Compare - Hoodik vs Other Cloud Storage",
  meta: [
    { name: "description", content: "See how Hoodik compares to Nextcloud, Proton Drive, Filen, Tresorit, and Seafile." },
    { property: "og:title", content: "Compare - Hoodik vs Other Cloud Storage" },
    { property: "og:description", content: "See how Hoodik compares to Nextcloud, Proton Drive, Filen, Tresorit, and Seafile." },
    { property: "og:url", content: "https://hoodik.io/vs" },
    { property: "og:image", content: "https://hoodik.io/images/screenshot.png" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  link: [{ rel: "canonical", href: "https://hoodik.io/vs" }],
});
</script>
