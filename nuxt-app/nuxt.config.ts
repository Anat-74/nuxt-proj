// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
   modules: [
     '@vueuse/nuxt',
     '@pinia/nuxt',
     '@nuxt/image',
     'dayjs-nuxt',
      'nuxt-typed-router',
     'nuxt-file-storage'
   ],
   vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "~/assets/scss/styles.scss" as *;'
          }
         },
         preprocessorMaxWorkers: true 
      }
   }
})