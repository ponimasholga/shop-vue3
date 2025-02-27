// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt', 
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    "@prisma/nuxt",
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false, // [!code ++]
    },
  ],
});
