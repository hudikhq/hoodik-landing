<template>
  <div>
    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 text-sm text-brownish-100 mb-6">
      <NuxtLink to="/vs" class="hover:text-white transition-colors">Compare</NuxtLink>
      <span class="text-brownish-400">/</span>
      <span class="text-brownish-50">vs {{ page.competitor?.name }}</span>
    </nav>

    <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-4">
      {{ page.title }}
    </h1>

    <p class="text-brownish-100 mb-6">{{ page.description }}</p>

    <!-- Verdict box -->
    <div class="rounded-xl bg-gradient-to-br from-brownish-800 to-brownish-900 border border-orangy-600/30 p-5">
      <div class="flex items-start gap-3">
        <span class="text-orangy-400 mt-0.5 flex-shrink-0">
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
        </span>
        <div>
          <p class="text-sm font-semibold text-dirty-white mb-1">The verdict</p>
          <p class="text-sm text-brownish-100">{{ page.verdict }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ page: any }>();
</script>
