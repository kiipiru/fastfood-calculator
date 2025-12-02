// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Калькулятор калорий фастфуда',
      htmlAttrs: {
        lang: 'ru'
      },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
      meta: [{name: 'google-site-verification', content: 'YJ63si5zjca0GjVd6a9X47MXn0LQtAlzjM9A48C5CF4'},
        {name: 'yandex-verification', content: '9a02794f8e96ac27'}
      ]
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