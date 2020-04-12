# nuxt-starter-template

> NUXT Template for static site generated marketing website

- Responsive Images via [NUXT Optimized Images](https://github.com/aceforth/nuxt-optimized-images)
- [Fancyapps Fancybox](https://github.com/fancyapps/fancybox) Gallery (Check [Fancybox Licences](https://fancyapps.com/fancybox/3/#license) if you want to use this commercialy)
- [Manifest](https://www.npmjs.com/package/@nuxtjs/manifest) & [Favicon Icon Generation](https://github.com/pimlie/nuxt-rfg-icon)
- [Automatic Sitemap Generation](https://github.com/nuxt-community/sitemap-module)
- [Bootstrap](https://github.com/twbs/bootstrap)
- [Countup.js](https://github.com/inorganik/countUp.js)
- [Icon Font Generator](https://github.com/Hammie/icon-font-generator)
- [Mail Spam Protection](https://github.com/mmoollllee/nuxt-protected-mailto)
- PHP Contact Form
- [PurgeCSS](https://github.com/Developmint/nuxt-purgecss)
- Responsive Slideout Menu
- Good Lighthouse Audit ( Performance __90+__, Accessibility __100__, Best Practices __100__, SEO __100__)
- [Opt-In Cookie Banner](https://github.com/mmoollllee/nuxt-privacy-message)

[**Demo**](https://mmoollllee.github.io/nuxt-starter-template/)

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Configuration

This template is already packed with some tools.

### General
- `nuxt.config.js`
- `config/infos.json` for contact information that will be used in different places site-wide
- `menus.json` to generate main menu, footer menu and social menu

### Image-Sizes
- Check `compontents/lib/ImageSet.vue` to adjust image-sizes for your custom `src-set`

### Webfonts
- Add preconnect URL for external Webfonts to `nuxt.config.js` in `head.link`
- Use [local-webfont](https://github.com/swissspidy/local-webfont) to download webfonts css and add `display: swap` to css file (see: `css/_font.scss`)
- Add Custom Families to `nuxt.config.js` in `webfontloader` (see: [nuxt-webfontloader](https://github.com/Developmint/nuxt-webfontloader))

### Favicon & Manifest
- Replace `static/favicon.svg`
- Change `config/faviconDescription.json` or [generate new one](https://github.com/pimlie/nuxt-rfg-icon#rfg)
- `favicon.ico` will be generated through `nuxt-rfg`

### Sitemap
- Change settings in `nuxt.config.js`
- Use `sitemap.routes` to overwrite priorities or add more URLs

### Contact Form
- Change Message Body and email address' in `static/mailer.php`

### [Icon-font-generator](https://github.com/Hammie/icon-font-generator)

- Generates Icon Font from `assets/icons/*.svg` to `static/fonts/icon-font.*`.
- Uses `config/codepoints.json` to map unicode characters for the font.
- Generates CSS Classes for different icons to `css/_icons.scss` from template placed in `helpers/icon-font-template.hbs`
- Generates list of Icons to `helpers/icons.json`. Used in `icons.vue` page to show all icons.
See `package.json` scripts key for options.

``` bash
npm run icons
```

### Cookie Message
- Every key in `cookieGroups` in `config/cookieMessage.json` will be a group of services in the message. See the example to create new groups.
- Use the store service to execute code when something is enabled.
- see `privacy.vue` for related privacy informations


## ToDo
- Replace Fancybox with https://fancyapps.com/next/ and drop jQuery
- Cookie Message as extra component: [Work in progress. Help wanted!](https://github.com/mmoollllee/nuxt-privacy-message-example)

# Credits
Thanks to [GigaHierz](https://github.com/GigaHierz) for helping prepare this repo and her feedback!

Thanks to [HF Media](https://hfmedia.de/) for the stunning placeholder video.

Thanks to [myself](https://github.com/mmoollllee) for the placeholder images.
