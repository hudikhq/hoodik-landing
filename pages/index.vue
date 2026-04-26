<template>
  <div>
    <Hero />
    <Features />
    <AppPromo />
    <Cta />
  </div>
</template>

<script setup lang="ts">
const description =
  "Self-hosted, end-to-end encrypted cloud storage. Files are encrypted in your browser — the server never sees plaintext data, file names, or keys. Rust + Vue, 20 MB RAM, S3-compatible.";

useHead({
  title: "Hoodik — Self-Hosted End-to-End Encrypted Cloud Storage",
  meta: [
    { name: "description", content: description },
    { property: "og:title", content: "Hoodik — Self-Hosted End-to-End Encrypted Cloud Storage" },
    { property: "og:description", content: description },
    { property: "og:url", content: "https://hoodik.io" },
    { property: "og:image", content: "https://hoodik.io/images/screenshot.png" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  link: [
    { rel: "canonical", href: "https://hoodik.io" },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://hoodik.io/#organization",
            name: "Hoodik",
            url: "https://hoodik.io",
            logo: "https://hoodik.io/images/hoodik-sm.svg",
            sameAs: [
              "https://github.com/hudikhq/hoodik",
              "https://hub.docker.com/r/hudik/hoodik",
              "https://play.google.com/store/apps/details?id=com.hudikhq.hoodik",
            ],
          },
          {
            "@type": "WebSite",
            "@id": "https://hoodik.io/#website",
            url: "https://hoodik.io",
            name: "Hoodik",
            publisher: { "@id": "https://hoodik.io/#organization" },
            inLanguage: "en",
          },
          {
            "@type": "SoftwareApplication",
            "@id": "https://hoodik.io/#software",
            name: "Hoodik",
            description:
              "Self-hosted, end-to-end encrypted cloud storage server. Files are encrypted client-side in the browser or mobile app; the server stores only ciphertext.",
            applicationCategory: "StorageApplication",
            operatingSystem: "Linux, Web, Android",
            url: "https://hoodik.io",
            downloadUrl: "https://github.com/hudikhq/hoodik/releases/latest",
            softwareHelp: "https://hoodik.io/get-started",
            image: "https://hoodik.io/images/screenshot.png",
            offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
            publisher: { "@id": "https://hoodik.io/#organization" },
          },
        ],
      }),
    },
  ],
});
</script>
