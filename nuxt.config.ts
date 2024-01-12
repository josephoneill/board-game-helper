import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
		'@': '/',
    '@css': '/css',
    '@core': '/core',
		'@components': '/components',
		'@assets': '/assets',
		'@stores': '/stores',
	},
  css: ['@css/main.scss'],
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
