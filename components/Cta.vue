<template>
  <div class="mx-auto max-w-screen-lg px-3 py-16">
    <div class="rounded-xl bg-gradient-to-r from-redish-900/50 via-brownish-800 to-brownish-900 border border-brownish-600 p-8 md:p-12 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Ready to own your cloud?
      </h2>
      <p class="text-brownish-100 text-lg max-w-xl mx-auto mb-8">
        Deploy the server with Docker in minutes, or grab the Android app
        to access your encrypted vault on the go.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://github.com/hudikhq/hoodik"
          target="_blank"
          class="flex items-center gap-3 px-8 py-4 rounded-lg bg-redish-400 hover:bg-redish-300 text-white font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-redish-400/20"
        >
          <img src="/images/github-mark-white.png" alt="GitHub" class="h-6 w-6" />
          Star on GitHub
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.hudikhq.hoodik"
          target="_blank"
          class="flex items-center gap-3 px-8 py-4 rounded-lg bg-brownish-800 hover:bg-brownish-600 text-dirty-white font-semibold text-lg border border-brownish-500 transition-all duration-200"
        >
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
          Get the App
        </a>
      </div>

      <p class="mt-6 text-sm text-brownish-100">
        Free server:
        <a href="https://github.com/hudikhq/hoodik/blob/master/LICENSE.md" target="_blank" class="text-redish-200 hover:underline">CC BY-NC 4.0</a>
        &middot; Android app: 30-day free trial
      </p>
    </div>
  </div>
</template>
