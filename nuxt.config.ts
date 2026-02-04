// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // SPA Mode (Client-only rendering)
  ssr: false,

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
    // '@vite-pwa/nuxt' // Temporär deaktiviert - Kompatibilitätsproblem mit Nuxt 3.21
  ],

  // PWA Configuration - wird später mit funktionierendem Modul reaktiviert
  // Die iOS Meta-Tags unten funktionieren auch ohne PWA-Modul

  // App Configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no',
      title: 'smartFK',
      htmlAttrs: {
        lang: 'de'
      },
      meta: [
        { name: 'description', content: 'Ihre Finanzen im Überblick' },
        { name: 'format-detection', content: 'telephone=no' },
        // iOS PWA Meta Tags
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'smartFK' },
        // Theme Color
        { name: 'theme-color', content: '#111827' },
        { name: 'color-scheme', content: 'light dark' },
        // Mobile optimizations
        { name: 'mobile-web-app-capable', content: 'yes' }
      ],
      link: [
        { rel: 'apple-touch-icon', href: '/icons/icon-180x180.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  // CSS
  css: ['~/assets/css/main.css'],

  // TypeScript
  typescript: {
    strict: true,
    typeCheck: false // Disabled for faster dev, enable with vue-tsc installed
  }
})
