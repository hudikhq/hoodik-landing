<template>
  <div class="mx-auto max-w-screen-lg px-3 py-16">
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-5xl font-bold leading-tight mb-4">Blog</h1>
      <p class="text-lg text-brownish-100 max-w-xl mx-auto">
        Privacy, encryption, and self-hosted storage — explained and compared.
      </p>
    </div>

    <!-- Category filter -->
    <div class="flex flex-wrap items-center justify-center gap-2 mb-10">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="[
          'px-3 py-1.5 rounded-full text-sm border transition-all duration-200',
          selectedCategory === cat
            ? 'bg-redish-400/20 border-redish-400 text-redish-100'
            : 'bg-brownish-800 border-brownish-600 text-brownish-100 hover:border-brownish-400'
        ]"
        @click="selectedCategory = selectedCategory === cat ? null : cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Post grid -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <BlogCard
        v-for="post in filteredPosts"
        :key="post.path"
        :post="post"
      />
    </div>

    <div v-if="filteredPosts?.length === 0" class="text-center py-12 text-brownish-100">
      No posts found.
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedCategory = ref<string | null>(null);
const categories = ["Privacy", "Guides", "Technical", "Comparisons"];

const { data: posts } = await useAsyncData("blog-list", () =>
  queryCollection("blog")
    .where("draft", "!=", true)
    .order("date", "DESC")
    .all()
);

const filteredPosts = computed(() => {
  if (!posts.value) return [];
  if (!selectedCategory.value) return posts.value;
  return posts.value.filter((p: any) => p.category === selectedCategory.value);
});

useHead({
  title: "Blog - Hoodik",
  meta: [
    { name: "description", content: "Privacy, encryption, and self-hosted storage — explained and compared." },
    { property: "og:title", content: "Blog - Hoodik" },
    { property: "og:description", content: "Privacy, encryption, and self-hosted storage — explained and compared." },
  ],
});
</script>
