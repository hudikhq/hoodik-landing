<template>
  <div class="rounded-xl bg-gradient-to-br from-brownish-800 to-brownish-900 border border-brownish-600 p-6 md:p-8">
    <h3 class="text-xl font-bold mb-2">Try Hoodik</h3>
    <p class="text-brownish-100 text-sm mb-5">
      Open-source, self-hosted, end-to-end encrypted. One Docker container, 10 minutes to deploy.
    </p>
    <div class="flex flex-wrap items-center gap-3">
      <NuxtLink
        to="/get-started"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-redish-400 hover:bg-redish-300 text-white font-semibold text-sm transition-all duration-200"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        Get Started
      </NuxtLink>
      <a
        href="https://github.com/hudikhq/hoodik"
        target="_blank"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brownish-800 hover:bg-brownish-600 border border-brownish-500 text-dirty-white font-semibold text-sm transition-all duration-200"
      >
        <img src="/images/github-mark-white.png" alt="GitHub" class="h-4 w-4" />
        View on GitHub
      </a>
    </div>
  </div>
</template>
