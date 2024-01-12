// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
		'@': './',
    '@core': './core',
		'@components': './components',
		'@assets': './assets',
		'@stores': './stores',
	},
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
  },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Montserrat: true,
      }
    }]
  ],
})
