// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['nuxt-primevue','@pinia/nuxt',],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  app: {
    head: {
        link: [],
        title:"CodeX"
    }
  },
  css: ['~/assets/css/main.css','primevue/resources/themes/lara-light-purple/theme.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  primevue: {
    usePrimeVue: true,
    options: {
      unstyled: false,
      ripple: true,
      inputStyle: 'filled'
    },
    importPT: undefined,
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    components: {
        include: "*",
    },
    directives: {
        include: "*",
    },
    composables: {
        include: "*",
    }
  },

  // nitro: {
  //   devProxy: {
  //       "/api": {
  //           target:"http://localhost:4044/api",
  //           changeOrigin: true,
  //           prependPath: true,
  //       }
  //   }
  // },
})