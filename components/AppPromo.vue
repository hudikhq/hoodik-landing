<template>
  <div class="mx-auto max-w-screen-lg px-3 py-16">
    <div class="rounded-xl bg-gradient-to-br from-brownish-800 to-brownish-900 border border-brownish-600 p-6 md:p-10">
      <div class="flex flex-col lg:flex-row items-center gap-10">
        <!-- Left: Text content -->
        <div class="flex-1 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 rounded-full bg-brownish-900 px-4 py-1.5 mb-6 text-sm text-brownish-50 border border-brownish-600">
            <span class="inline-block h-2 w-2 rounded-full bg-greeny-300 animate-pulse"></span>
            Available on Android
          </div>

          <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Your server, <span class="app-gradient">in your pocket.</span>
          </h2>

          <p class="text-brownish-100 text-lg leading-relaxed mb-8 max-w-lg">
            The Hoodik app connects to your self-hosted server with the same
            end-to-end encryption &mdash; powered by native Rust, not a web wrapper.
          </p>

          <!-- Feature list -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <div class="flex items-center gap-2.5">
              <span class="text-orangy-400">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
              <span class="text-sm text-brownish-50">Multi-server & multi-account</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-redish-200">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </span>
              <span class="text-sm text-brownish-50">E2E encryption via Rust FFI</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-greeny-300">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
              </span>
              <span class="text-sm text-brownish-50">Biometric & PIN quick unlock</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-blueish-300">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </span>
              <span class="text-sm text-brownish-50">File preview &mdash; images, video, docs</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-orangy-300">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </span>
              <span class="text-sm text-brownish-50">Offline caching & background transfers</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="text-greeny-200">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              </span>
              <span class="text-sm text-brownish-50">Shared links management</span>
            </div>
          </div>

          <!-- Google Play badge -->
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.hudikhq.hoodik"
              target="_blank"
              class="inline-block transition-opacity hover:opacity-80"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                class="h-16"
              />
            </a>
            <p class="text-sm text-brownish-100 mt-2">
              <svg class="inline-block h-4 w-4 mr-1 -mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              iOS &amp; macOS coming soon
            </p>
          </div>
        </div>

        <!-- Right: Phone screenshots -->
        <div class="flex-shrink-0 w-full lg:w-auto">
          <div class="relative flex justify-center items-end gap-3 lg:gap-4">
            <!-- Glow effect -->
            <div class="absolute -inset-6 bg-gradient-to-r from-redish-400/15 via-orangy-400/10 to-greeny-400/15 rounded-2xl blur-3xl opacity-60"></div>

            <div class="relative -rotate-3 rounded-2xl overflow-hidden border border-brownish-500 shadow-2xl w-28 sm:w-32 lg:w-36">
              <img
                src="/images/app/android_07_pin.png"
                alt="Hoodik App - PIN Lock"
                class="w-full"
                loading="lazy"
              />
            </div>
            <div class="relative z-10 rounded-2xl overflow-hidden border border-brownish-400 shadow-2xl w-32 sm:w-40 lg:w-44">
              <img
                src="/images/app/android_01_files.png"
                alt="Hoodik App - File Browser"
                class="w-full"
                loading="lazy"
              />
            </div>
            <div class="relative rotate-3 rounded-2xl overflow-hidden border border-brownish-500 shadow-2xl w-28 sm:w-32 lg:w-36">
              <img
                src="/images/app/android_03_preview.png"
                alt="Hoodik App - File Preview"
                class="w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-gradient {
  background: linear-gradient(135deg, #EE8434, #D1F0B1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
