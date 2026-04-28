// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-03-26",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],

  modules: ["@nuxt/content", "@nuxtjs/sitemap"],

  // Server-side redirects for paths that aren't real pages but show up in
  // analytics. Each entry is a 301 — cached by the browser and any CDN
  // in front, so a return visitor doesn't re-hit the origin. Add new
  // dud paths here as they surface in Umami; remove once their referrer
  // source dries up (a 404 is still the right response for a slug nobody
  // links to anymore).
  routeRules: {
    // Showed up 2026-04-28 from iOS / iCloud Private Relay (no referrer).
    // Likely a stale or typoed link shared somewhere; six hits, all 404.
    "/blazecuu/**": { redirect: { to: "/", statusCode: 301 } },
    "/blazecuu": { redirect: { to: "/", statusCode: 301 } },
  },

  content: {
    highlight: false,
  },

  sitemap: {
    exclude: ["/privacy-policy", "/terms-of-service", "/imprint"],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/blog", "/vs"],
    },
  },

  site: {
    url: "https://hoodik.io",
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Hoodik - End-to-End Encrypted Cloud Storage",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "Hoodik is a lightweight, self-hosted, end-to-end encrypted cloud storage server built with Rust and Vue. Encrypted markdown notes, S3-compatible storage, and a native mobile app with Rust FFI crypto. Your files, your keys, your server.",
        },
        {
          property: "og:title",
          content: "Hoodik - End-to-End Encrypted Cloud Storage",
        },
        {
          property: "og:description",
          content:
            "Lightweight, self-hosted cloud storage with end-to-end encryption. Encrypted notes, S3 backend, mobile app. Built with Rust and Vue.",
        },
        { property: "og:image", content: "https://hoodik.io/images/screenshot.png" },
        { property: "og:image:width", content: "2982" },
        { property: "og:image:height", content: "1772" },
        {
          property: "og:image:alt",
          content: "Hoodik dashboard — end-to-end encrypted cloud storage",
        },
        { property: "og:site_name", content: "Hoodik" },
        { property: "og:locale", content: "en_US" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/images/apple-icon-57x57.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/images/apple-icon-60x60.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/images/apple-icon-72x72.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/images/apple-icon-76x76.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/images/apple-icon-114x114.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/images/apple-icon-120x120.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/images/apple-icon-144x144.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/images/apple-icon-152x152.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/images/apple-icon-180x180.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/images/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/images/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/images/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/images/android-icon-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/images/android-icon-512x512.png",
        },
      ],
      script: [
        {
          src: "https://umami.hoodik.io/script.js",
          defer: true,
          "data-website-id": "d868a1bd-c688-4c81-a386-8ba88abc9522",
        },
      ],
    },
  },
});