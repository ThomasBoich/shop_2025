// import Aura from '@primevue/themes/aura';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
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