// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  colorMode: {
    preference: "light",
  },

  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/fonts"],

  fonts: {
    families: [
      { name: 'Lexend', provider: 'google' },
      { name: 'Red Hat Display', provider: 'google' },
    ],
    default: {},
    experimental: {
      processCSSVariables: true
    }
  },
});