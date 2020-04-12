import * as rfg from './config/faviconDescription.json'

const lang = 'de'
// Use description from package.json as page title
const title = process.env.npm_package_description || ''
// short name for manifest
const shortName = title || ''
// meta description
const description = ''
// localhost or domain for production
const hostname = process.env.BASE_URL || 'https://example.com'

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/nuxt-starter-template/'
        }
      }
    : {}

export default {
  ...routerBase,
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang
    },
    title,
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
        content: description
      }
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://use.typekit.net'
      }
    ]
  },
  loading: {
    color: '#fff'
  },
  css: [
    '@/css/main.scss',
    {
      src: '@fancyapps/fancybox/src/css/core.css',
      lang: 'css'
    },
    {
      src: '@fancyapps/fancybox/src/css/thumbs.css',
      lang: 'css'
    }
  ],
  postcss: {
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%', 'ie >= 11']
    }
  },
  plugins: [
    '~/plugins/vue-lazysizes.client.js',
    '~/plugins/jquery-fancybox',
    '~/plugins/vuelidate'
  ],
  build: {
    analyze: false,
    html: {
      minify: {
        decodeEntities: false
      }
    },
    babel: {
      sourceType: 'unambiguous'
    },
    transpile: ['nuxt-vuex-localstorage']
  },
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/typescript-build'],
  modules: [
    [
      'nuxt-vuex-localstorage',
      {
        localStorage: ['cookies']
      }
    ],
    [
      'nuxt-rfg-icon',
      {
        masterPicture: './static/favicon.svg',
        rfg
      }
    ],
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/svg',
    'nuxt-purgecss',
    'nuxt-webfontloader',
    '@nuxtjs/sitemap',
    '@nuxtjs/manifest',
    'nuxt-protected-mailto'
  ],
  manifest: {
    name: title,
    short_name: shortName,
    lang,
    display: 'browser',
    start_url: '/'
  },
  sitemap: {
    hostname,
    exclude: ['/icons'],
    routes: [
      {
        url: '/',
        priority: 1
      },
      {
        url: '/imprint',
        priority: 0.1
      },
      {
        url: '/privacy',
        priority: 0.1
      }
    ],
    defaults: {
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },
  webfontloader: {
    custom: {
      families: ['icon-font', 'proxima-nova:n4,i4,n7', 'futura-pt:n4,n7,n8'],
      testStrings: {
        'icon-font': '\f101\f102'
      },
      classes: false
    }
  },
  purgeCSS: {
    mode: 'postcss',
    whitelistPatterns: [/fancybox/, /icon-/],
    whitelistPatternsChildren: [/fancybox/, /icon-/]
  },
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 80
    },
    optipng: {
      optimizationLevel: 3
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3
    },
    webp: {
      preset: 'default',
      quality: 75
    }
  }
}
