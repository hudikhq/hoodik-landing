<template>
  <div class="mx-auto max-w-screen-lg px-3 py-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold">
        Why <span class="text-redish-200">Hoodik</span>?
      </h2>
      <p class="mt-3 text-brownish-100 text-lg max-w-xl mx-auto">
        Built for privacy-conscious self-hosters who want full control over
        their data.
      </p>
    </div>

    <!-- Main feature: Encryption -->
    <div class="rounded-xl bg-gradient-to-br from-brownish-800 to-brownish-900 border border-brownish-600 p-6 md:p-8 mb-6">
      <div class="flex flex-col md:flex-row items-start gap-6">
        <div class="flex-shrink-0 h-16 w-16 rounded-xl bg-redish-400/10 flex items-center justify-center">
          <span class="text-4xl">🔐</span>
        </div>
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <h3 class="text-2xl font-bold">End-to-End Encryption</h3>
            <span class="rounded-full px-2.5 py-0.5 text-xs font-semibold bg-redish-400/20 text-redish-100 border border-redish-400/30">RSA-2048</span>
            <span class="rounded-full px-2.5 py-0.5 text-xs font-semibold bg-greeny-400/20 text-greeny-200 border border-greeny-400/30">AEGIS-128L</span>
          </div>
          <p class="text-brownish-100 leading-relaxed">
            Hybrid RSA + AEGIS-128L encryption happens entirely in your
            browser via hardware-accelerated WASM. The server stores only
            ciphertext — your private key never leaves your device. Each file
            gets its own symmetric key, wrapped with your RSA public key.
          </p>
        </div>
      </div>
    </div>

    <!-- Feature grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Secure Search -->
      <div class="feature-card group rounded-xl bg-brownish-900 border border-brownish-600 p-5 transition-all duration-300 hover:border-brownish-400">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 h-12 w-12 rounded-lg bg-orangy-400/10 flex items-center justify-center">
            <span class="text-2xl">🔎</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Secure Search</h3>
            <p class="text-sm text-brownish-100 leading-relaxed">
              File metadata is tokenized and hashed in the browser. The server
              matches opaque tokens — no plaintext names are ever stored or
              transmitted.
            </p>
          </div>
        </div>
      </div>

      <!-- Encrypted Notes -->
      <div class="feature-card group rounded-xl bg-brownish-900 border border-brownish-600 p-5 transition-all duration-300 hover:border-brownish-400">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 h-12 w-12 rounded-lg bg-greeny-400/10 flex items-center justify-center">
            <span class="text-2xl">📝</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Encrypted Notes with History</h3>
            <p class="text-sm text-brownish-100 leading-relaxed">
              Write markdown notes in a WYSIWYG editor inside your encrypted
              vault. Auto-saved, encrypted with the same per-file keys as
              everything else, and every version is kept so you can roll back.
            </p>
          </div>
        </div>
      </div>

      <!-- Public Links -->
      <div class="feature-card group rounded-xl bg-brownish-900 border border-brownish-600 p-5 transition-all duration-300 hover:border-brownish-400">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 h-12 w-12 rounded-lg bg-blueish-400/10 flex items-center justify-center">
            <span class="text-2xl">🔗</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Public Link Sharing</h3>
            <p class="text-sm text-brownish-100 leading-relaxed">
              Share files via a link with the decryption key in the URL
              fragment. The server never sees the key — recipients decrypt
              locally in their browser.
            </p>
          </div>
        </div>
      </div>

      <!-- 2FA -->
      <div class="feature-card group rounded-xl bg-brownish-900 border border-brownish-600 p-5 transition-all duration-300 hover:border-brownish-400">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 h-12 w-12 rounded-lg bg-greeny-400/10 flex items-center justify-center">
            <span class="text-2xl">🛡️</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Two-Factor Auth</h3>
            <p class="text-sm text-brownish-100 leading-relaxed">
              Optional TOTP-based 2FA per user account. Add another layer of
              protection to your encrypted vault.
            </p>
          </div>
        </div>
      </div>

      <!-- Admin Dashboard -->
      <div class="feature-card group rounded-xl bg-brownish-900 border border-brownish-600 p-5 transition-all duration-300 hover:border-brownish-400">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 h-12 w-12 rounded-lg bg-redish-400/10 flex items-center justify-center">
            <span class="text-2xl">⚙️</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Admin Dashboard</h3>
            <p class="text-sm text-brownish-100 leading-relaxed">
              Manage users, sessions, invitations, and app settings from a
              built-in admin panel. Full control of your instance.
            </p>
          </div>
        </div>
      </div>

      <!-- Docker -->
      <div class="feature-card group rounded-xl bg-brownish-900 border border-brownish-600 p-5 transition-all duration-300 hover:border-brownish-400">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 h-12 w-12 rounded-lg bg-blueish-400/10 flex items-center justify-center">
            <span class="text-2xl">🐳</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Docker-First</h3>
            <p class="text-sm text-brownish-100 leading-relaxed">
              Single container deployment with multi-arch images — amd64,
              armv6, armv7, arm64. Up and running in seconds.
            </p>
          </div>
        </div>
      </div>

      <!-- S3 Storage -->
      <div class="feature-card group rounded-xl bg-brownish-900 border border-brownish-600 p-5 transition-all duration-300 hover:border-brownish-400">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 h-12 w-12 rounded-lg bg-blueish-400/10 flex items-center justify-center">
            <span class="text-2xl">☁️</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">S3-Compatible Storage</h3>
            <p class="text-sm text-brownish-100 leading-relaxed">
              Store encrypted chunks on any S3-compatible service &mdash;
              AWS, Backblaze B2, Wasabi, MinIO. Scale to terabytes without
              growing your VPS disk.
            </p>
          </div>
        </div>
      </div>

      <!-- Performance -->
      <div class="feature-card group rounded-xl bg-brownish-900 border border-brownish-600 p-5 transition-all duration-300 hover:border-brownish-400">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 h-12 w-12 rounded-lg bg-orangy-400/10 flex items-center justify-center">
            <span class="text-2xl">🚀</span>
          </div>
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <h3 class="text-lg font-semibold">Fast by Design</h3>
              <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-orangy-400/20 text-orangy-200 border border-orangy-400/30">Rust</span>
              <span class="rounded-full px-2 py-0.5 text-xs font-semibold bg-greeny-400/20 text-greeny-200 border border-greeny-400/30">Vue.js</span>
            </div>
            <p class="text-sm text-brownish-100 leading-relaxed">
              Chunked concurrent transfers, single-request tar bulk
              downloads, SQLite or PostgreSQL metadata. Idles at around
              20 MB RAM.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
