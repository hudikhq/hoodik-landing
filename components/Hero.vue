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
        <a
          href="https://github.com/hudikhq/hoodik"
          target="_blank"
          class="flex items-center gap-2 px-6 py-3 rounded-lg bg-redish-400 hover:bg-redish-300 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-redish-400/20"
        >
          <img
            src="/images/github-mark-white.png"
            alt="GitHub"
            class="h-5 w-5"
          />
          View on GitHub
        </a>
        <a
          href="https://hub.docker.com/r/hudik/hoodik"
          target="_blank"
          class="flex items-center gap-2 px-6 py-3 rounded-lg bg-brownish-800 hover:bg-brownish-600 text-dirty-white font-semibold border border-brownish-500 transition-all duration-200"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.186.186 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.186.186 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.186.186 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.186.186 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.687 11.687 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
          </svg>
          Docker Hub
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
