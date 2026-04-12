<template>
  <span v-if="value === true" class="inline-flex items-center justify-center text-greeny-300">
    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
  </span>
  <span v-else-if="value === false" class="inline-flex items-center justify-center text-redish-200">
    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
  </span>
  <span v-else-if="value === 'partial'" class="inline-flex items-center justify-center text-orangy-400">
    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  </span>
  <span v-else class="text-brownish-50 text-xs">{{ value }}</span>
</template>

<script setup lang="ts">
defineProps<{ value: boolean | string }>();
</script>
