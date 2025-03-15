// import Aura from '@primevue/themes/aura';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: true,
  // build: {
  //   transpile: ['vite-svg-loader'],
  // },
  // vite: {
  //   plugins: [
  //     // другие плагины
  //     require('vite-svg-loader')(),
  //   ],
  //   server: {
  //     // Отключить предупреждения
  //     strictPort: false,
  //     watch: {
  //       usePolling: true,
  //     },
  //   },
  // },
  css: [
    '@/assets/css/stylesheet.css',
    '@/assets/css/style.css',
  ],
  modules: [
    // '@primevue/nuxt-module',
    'vue3-carousel-nuxt',
    'maz-ui/nuxt',
    '@storefront-ui/nuxt'
  ],
  mazUi: {
    injectComponents: true,
    injectCss: true,
    injectAos: {
      injectCss: true,
    },
    injectUseToast: true,
    injectUseThemeHandler: true,
    devtools: false,
  },
  // primevue: {
  //     options: {
  //         theme: {
  //             preset: Aura
  //         }
  //     }
  // },
  runtimeConfig: {
    public: {
      mazUi: {
        // ...
      }
    }
  }
})