<template>
  <div class="mx-auto max-w-screen-lg px-3 py-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold">
        Simple, <span class="text-orangy-400">transparent</span> pricing
      </h2>
      <p class="mt-3 text-brownish-100 text-lg max-w-xl mx-auto">
        Start with a 30-day free trial. No credit card required.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <!-- Monthly -->
      <div class="rounded-xl bg-brownish-900 border border-brownish-600 p-6 flex flex-col transition-all duration-300 hover:border-brownish-400">
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-1">Monthly</h3>
          <p class="text-sm text-brownish-100">Flexible, cancel anytime</p>
        </div>
        <div class="rounded-lg bg-brownish-800 px-3 py-2 mb-6 text-sm text-greeny-200 text-center">
          30-day free trial included
        </div>
        <ul class="space-y-3 mb-8 flex-1">
          <li v-for="feature in features" :key="feature" class="flex items-start gap-2.5 text-sm">
            <svg class="h-5 w-5 flex-shrink-0 text-greeny-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span class="text-brownish-50">{{ feature }}</span>
          </li>
        </ul>
        <a
          href="https://play.google.com/store/apps/details?id=com.hudikhq.hoodik"
          target="_blank"
          class="block w-full text-center px-5 py-3 rounded-lg bg-brownish-800 hover:bg-brownish-600 text-dirty-white font-semibold border border-brownish-500 transition-all duration-200"
        >
          Start free trial
        </a>
      </div>

      <!-- Annual (highlighted) -->
      <div class="rounded-xl bg-brownish-900 border-2 border-redish-400 p-6 flex flex-col relative transition-all duration-300 hover:border-redish-300">
        <div class="absolute -top-3 left-1/2 -translate-x-1/2">
          <span class="rounded-full px-3 py-1 text-xs font-semibold bg-redish-400 text-white">Most popular</span>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-1">Annual</h3>
          <p class="text-sm text-brownish-100">Best for regular use</p>
        </div>
        <div class="mb-6">
          <span class="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold bg-greeny-400/20 text-greeny-200 border border-greeny-400/30">Save 33%</span>
        </div>
        <div class="rounded-lg bg-brownish-800 px-3 py-2 mb-6 text-sm text-greeny-200 text-center">
          30-day free trial included
        </div>
        <ul class="space-y-3 mb-8 flex-1">
          <li v-for="feature in features" :key="feature" class="flex items-start gap-2.5 text-sm">
            <svg class="h-5 w-5 flex-shrink-0 text-greeny-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span class="text-brownish-50">{{ feature }}</span>
          </li>
        </ul>
        <a
          href="https://play.google.com/store/apps/details?id=com.hudikhq.hoodik"
          target="_blank"
          class="block w-full text-center px-5 py-3 rounded-lg bg-redish-400 hover:bg-redish-300 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-redish-400/20"
        >
          Start free trial
        </a>
      </div>

      <!-- Lifetime -->
      <div class="rounded-xl bg-brownish-900 border border-brownish-600 p-6 flex flex-col transition-all duration-300 hover:border-brownish-400">
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-1">Lifetime</h3>
          <p class="text-sm text-brownish-100">One-time purchase, forever</p>
        </div>
        <div class="mb-6">
          <span class="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold bg-orangy-400/20 text-orangy-200 border border-orangy-400/30">Best value</span>
        </div>
        <div class="rounded-lg bg-brownish-800 px-3 py-2 mb-6 text-sm text-greeny-200 text-center">
          30-day free trial included
        </div>
        <ul class="space-y-3 mb-8 flex-1">
          <li v-for="feature in features" :key="feature" class="flex items-start gap-2.5 text-sm">
            <svg class="h-5 w-5 flex-shrink-0 text-greeny-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span class="text-brownish-50">{{ feature }}</span>
          </li>
        </ul>
        <a
          href="https://play.google.com/store/apps/details?id=com.hudikhq.hoodik"
          target="_blank"
          class="block w-full text-center px-5 py-3 rounded-lg bg-brownish-800 hover:bg-brownish-600 text-dirty-white font-semibold border border-brownish-500 transition-all duration-200"
        >
          Start free trial
        </a>
      </div>
    </div>

    <p class="text-center text-sm text-brownish-100 mt-8">
      All plans include every feature. Prices vary by region due to local taxes and currency conversion &mdash; see your local price on Google Play.
    </p>
  </div>
</template>

<script setup lang="ts">
const features = [
  'All features unlocked',
  'Multi-server support',
  'End-to-end encryption',
  'Offline file access',
  'Background transfers',
]
</script>
