export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'shopgame',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      { rel: 'icon', size: '32x32', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    base: {
      src: '/'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/bootstrap-reboot.min.css',
    '~/assets/css/bootstrap-grid.min.css',
    '~/assets/css/owl.carousel.min.css',
    '~/assets/css/magnific-popup.css',
    '~/assets/css/nouislider.min.css',
    '~/assets/css/jquery.mCustomScrollbar.min.css',
    '~/assets/css/paymentfont.min.css',
    '~/assets/css/main.css',
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/index.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      'nuxt-lazy-load',
      {
        images: true,
        defaultImage: '/loading.gif',
        directiveOnly: true
      }
    ],
    ['vue-sweetalert2/nuxt']
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'meta.token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: {
            url: '/auth/signin',
            method: 'post'
          },
          logout: {
            url: '/auth/signout',
            method: 'post'
          },
          user: {
            url: '/auth/user',
            method: 'post'
          }
        }
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BaseAPI
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  },

  // loading: {
  //   collor: '#a782e9',
  //   height: '2px'
  // },

  loading: '@/components/loading/loading_1.vue',

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },

  env: {
    BaseImgs: process.env.BaseImgs,
    BaseAPI: process.env.BaseAPI,
    BaseNews: process.env.BaseNews,
    GHN: {
      token: process.env.GHN_TOKEN,
      province: process.env.GHN_API_ADRESS + '/province',
      district: process.env.GHN_API_ADRESS + '/district',
      ward: process.env.GHN_API_ADRESS + '/ward',
      services: process.env.GHN_API_ORDER + '/available-services',
      price: process.env.GHN_API_ORDER + '/fee',
      idShop: process.env.GHN_ID_SHOP,
      from_district: 3303 // huyện thường tín
    }
  }
}
