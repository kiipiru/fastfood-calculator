// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Калькулятор калорий фастфуда',
      htmlAttrs: {
        lang: 'ru'
      },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
    }
  },
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['../assets/css/tailwind.css'],
  alias: {
    '@assets': './assets',
    '@components': './app/components'
  },
  devtools: { enabled: true }
})