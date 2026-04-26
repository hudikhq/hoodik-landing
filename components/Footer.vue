<template>
  <div class="w-full mx-auto max-w-screen-lg px-3 py-6">
    <div class="border-t border-brownish-600 pt-5">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-brownish-50">
        <div>
          &copy; {{ new Date().getFullYear() }}
          <a
            href="https://github.com/hudikhq"
            class="text-redish-200 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >Hudik d.o.o.</a>. Built with &#10084;&#65039; by
          <a
            class="text-redish-200 hover:underline"
            href="https://github.com/htunlogic"
            target="_blank"
            rel="noopener noreferrer"
          >htunlogic</a>.
        </div>
        <div class="flex items-center gap-4">
          <NuxtLink to="/blog" class="text-brownish-100 hover:text-white transition-colors">Blog</NuxtLink>
          <NuxtLink to="/vs" class="text-brownish-100 hover:text-white transition-colors">Compare</NuxtLink>
          <a
            href="https://github.com/hudikhq/hoodik"
            class="text-brownish-100 hover:text-white transition-colors"
            target="_blank"
            data-umami-event="github-footer"
          >GitHub</a>
          <a
            href="https://hub.docker.com/r/hudik/hoodik"
            class="text-brownish-100 hover:text-white transition-colors"
            target="_blank"
            data-umami-event="docker-footer"
          >Docker Hub</a>
          <a
            href="https://play.google.com/store/apps/details?id=com.hudikhq.hoodik"
            class="text-brownish-100 hover:text-white transition-colors"
            target="_blank"
            data-umami-event="playstore-footer"
          >Android App</a>
        </div>
      </div>
      <div class="flex items-center justify-center gap-3 mt-3 text-xs text-brownish-100">
        <NuxtLink to="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink>
        <span class="text-brownish-400">&middot;</span>
        <NuxtLink to="/terms-of-service" class="hover:text-white transition-colors">Terms of Service</NuxtLink>
        <span class="text-brownish-400">&middot;</span>
        <NuxtLink to="/imprint" class="hover:text-white transition-colors">Imprint</NuxtLink>
      </div>
    </div>
  </div>
</template>
