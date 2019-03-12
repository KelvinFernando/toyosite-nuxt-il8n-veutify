const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Toyo Japanese Steakhouse',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Toyo Restaurants specialize in Teppanyaki cuisine, a Japanese cooking method prepared on large heated grids.'},
      { hid: 'keywords', name: 'keywords', content: 'teppanyaki, montreal teppanyaki, steak montreal, teppanyaki montreal, japanese steak montreal, restaurant montreal' },
      { hid: 'author', name: 'author', content: 'Kelvin Fernando' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Montserrat|Material+Icons" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  router:{
    middleware: 'i18n'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '~/plugins/i18n.js'
  ],
 /*
  ** Vi18n
  */
 generate:{
  routes: ['/', '/about', '/locations','/menu','/reservations', '/fr', '/fr/about', '/fr/locations','/fr/menu','/fr/reservations']
 },
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
