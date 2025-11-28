// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['../assets/css/tailwind.css'],
  alias: {
    '@assets': './assets',
    '@components': './app/components'
  },
  devtools: { enabled: true }
})