// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  // Defaults options
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  app: {
    head: {
      title: "Hoodik - End 2 End Encrypted Cloud Storage",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
