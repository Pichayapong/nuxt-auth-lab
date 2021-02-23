export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-with-firebase-auth',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          // apiKey: 'AIzaSyBF4mgKJJr97WZue9TPcWNVZjA-oQH18sw',
          // authDomain: 'learning-project-f3307.firebaseapp.com',
          // databaseURL:
          //   'https://learning-project-f3307-default-rtdb.firebaseio.com/',
          // projectId: 'learning-project-f3307',
          // storageBucket: 'learning-project-f3307.appspot.com',
          // messagingSenderId: '912885718044',
          // appId: '1:912885718044:web:050a42c829cba0c1b813d9',
          // measurementId: 'G-F2N9QS27VP',
          apiKey: 'AIzaSyDs_SwAN5DQm-MOKWrbIYL1UIdgScg3M7k',
          authDomain: 'fillgoods-dev.firebaseapp.com',
          databaseURL: 'https://fillgoods-dev.firebaseio.com',
          projectId: 'fillgoods-dev',
          storageBucket: 'fillgoods-dev.appspot.com',
          messagingSenderId: '1023151727444',
          appId: '1:1023151727444:web:d54575a815a3efdd319ec1',
        },
        services: {
          auth: true, // Just as example. Can be any other service.
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
