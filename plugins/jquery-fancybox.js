if (process.client) {
  window.$ = require('jquery')
  window.jQuery = require('jquery')
  window.fancybox = require('@fancyapps/fancybox')

  // Maybe this won't work
  window.$.fancybox.defaults.closeExisting = false
  window.$.fancybox.defaults.loop = true
  window.$.fancybox.defaults.preventCaptionOverlap = false
  window.$.fancybox.defaults.buttons = ['thumbs', 'close']

  window.jQuery(document).ready(function () {
    const jQuery = window.jQuery
    const selectors = [
      'a[href$=".jpg"]',
      'a[href$=".jpeg"]',
      'a[href$=".png"]',
      'a[href$=".gif"]',
    ]
    jQuery().fancybox({
      selector: selectors.join(':not([data-fancybox]),'),
      caption(instance, item) {
        return (
          jQuery(this).find('figcaption').html() || jQuery(this).attr('title')
        )
      },
    })

    jQuery('a[href*="youtube.com/watch?v"]').fancybox()
    jQuery('a[href*="vimeo.com/"]').fancybox()

    // jQuery(
    //   '.wp-block-gallery figure a[href$=".jpg"], .wp-block-gallery figure a[href$=".jpeg"],.wp-block-gallery figure a[href$=".png"],.wp-block-gallery figure a[href$=".gif"] , .wp-block-image figure a[href$=".jpg"], .wp-block-image figure a[href$=".jpeg"], .wp-block-image figure a[href$=".png"], .wp-block-image figure a[href$=".gif"]'
    // )
    //   .fancybox()
    //   .attr('data-fancybox', 'gallery')

    // setTimeout(function() {
    //   jQuery('.flickity-enabled').on('dragStart.flickity', function() {
    //     jQuery('.flickity-slider figure').css('pointer-events', 'none')
    //   })
    //   jQuery('.flickity-enabled').on('dragEnd.flickity', function() {
    //     jQuery('.flickity-slider figure').css('pointer-events', 'all')
    //   })
    // }, 200)

    // Flickity.defaults.pageDots = false
    // Flickity.defaults.setGallerySize = false
    // Flickity.defaults.imagesLoaded = false
    // Flickity.defaults.contain = true
    // Flickity.defaults.adaptiveHeight = false
  })
}
