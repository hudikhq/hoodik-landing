<template>
  <div class="mx-auto max-w-screen-lg px-3 pt-16 pb-10">
    <!-- Hero content -->
    <div class="flex flex-col items-center text-center">
      <div class="inline-flex items-center gap-2 rounded-full bg-brownish-800 px-4 py-1.5 mb-6 text-sm text-brownish-50 border border-brownish-600">
        <span class="inline-block h-2 w-2 rounded-full bg-greeny-300 animate-pulse"></span>
        Open Source &middot; Self-Hosted &middot; End-to-End Encrypted
      </div>

      <h1 class="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
        Your files.
        <span class="hero-gradient">Your keys.</span>
        <br />Your server.
      </h1>

      <p class="mt-6 text-lg md:text-xl leading-8 text-brownish-100 max-w-2xl">
        Hoodik is a lightweight, self-hosted cloud storage server built with
        <strong class="text-orangy-400">Rust</strong> and
        <strong class="text-greeny-300">Vue</strong>. Files are encrypted in
        your browser before they ever leave your machine — the server never
        sees your plaintext data.
      </p>

      <div class="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <NuxtLink
          to="/get-started"
          class="flex items-center gap-2 px-6 py-3 rounded-lg bg-redish-400 hover:bg-redish-300 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-redish-400/20"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Get Started
        </NuxtLink>
        <a
          href="https://github.com/hudikhq/hoodik"
          target="_blank"
          class="flex items-center gap-2 px-6 py-3 rounded-lg bg-brownish-800 hover:bg-brownish-600 text-dirty-white font-semibold border border-brownish-500 transition-all duration-200"
        >
          <img
            src="/images/github-mark-white.png"
            alt="GitHub"
            class="h-5 w-5"
          />
          View on GitHub
        </a>
      </div>

      <!-- Quick install snippet -->
      <div class="mt-8 w-full max-w-2xl">
        <div class="rounded-lg bg-brownish-900 border border-brownish-600 overflow-hidden">
          <div class="flex items-center justify-between px-4 py-2 bg-brownish-800 border-b border-brownish-600">
            <span class="text-xs text-brownish-100">Quick Start</span>
            <div class="flex gap-1.5">
              <span class="h-2.5 w-2.5 rounded-full bg-redish-400"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-orangy-400"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-greeny-400"></span>
            </div>
          </div>
          <pre class="px-4 py-3 text-sm text-left overflow-x-auto"><code class="text-greeny-200">docker run --name hoodik -d \
  -e DATA_DIR='/data' \
  -e APP_URL='https://my-app.example.com' \
  --volume "$(pwd)/data:/data" \
  -p 5443:5443 \
  hudik/hoodik:latest</code></pre>
        </div>
      </div>
    </div>

    <!-- Screenshot with glow effect -->
    <div class="mt-16 relative">
      <div class="absolute -inset-4 bg-gradient-to-r from-redish-400/20 via-orangy-400/10 to-greeny-400/20 rounded-2xl blur-3xl opacity-50"></div>
      <div class="relative rounded-xl overflow-hidden border border-brownish-500 shadow-2xl">
        <img
          src="/images/screenshot.png"
          alt="Hoodik - End-to-End Encrypted Cloud Storage"
          class="w-full"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-gradient {
  background: linear-gradient(135deg, #A63446, #EE8434, #D1F0B1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
