<template>
  <NuxtLink
    :to="post.path"
    class="group rounded-xl bg-brownish-900 border border-brownish-600 p-6 hover:border-brownish-400 transition-all duration-300"
  >
    <div class="flex items-center gap-2 mb-3">
      <span
        :class="categoryColor"
        class="text-xs px-2 py-0.5 rounded-full"
      >
        {{ post.category }}
      </span>
      <span class="text-xs text-brownish-100">
        {{ formatPostDate(post.date) }}
      </span>
    </div>

    <h2 class="text-lg font-bold text-dirty-white group-hover:text-white transition-colors mb-2 line-clamp-2">
      {{ post.title }}
    </h2>

    <p class="text-sm text-brownish-100 line-clamp-3">
      {{ post.description }}
    </p>

    <div class="flex items-center gap-3 mt-4 text-xs text-brownish-100">
      <span class="flex items-center gap-1">
        <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        {{ readingTime }} min read
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { useCategoryColor, formatPostDate, estimateReadingTime } from "~/composables/useBlog";

const props = defineProps<{ post: any }>();

const categoryColor = computed(() => useCategoryColor(props.post.category));
const readingTime = computed(() => estimateReadingTime(props.post.body));
</script>
