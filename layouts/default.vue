<template>
  <ResponsiveMenu>
    <CookieMessage></CookieMessage>
    <Header class="container row" />
    <nuxt />
    <Footer />
  </ResponsiveMenu>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ResponsiveMenu from '@/components/ResponsiveMenu.vue'
import CookieMessage from '@/components/cookie/CookieMessage.vue'

function getInternetExplorerVersion(name: string) {
  const trident = new RegExp('Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})')

  if (trident.exec(name) != null) {
    return parseFloat(RegExp.$1)
  }

  const msie = new RegExp('MSIE ([0-9]{1,}[\\.0-9]{0,})')

  if (msie.exec(name) != null) {
    return parseFloat(RegExp.$1)
  }

  return 'Dont!'
}

export default {
  components: {
    Header,
    Footer,
    ResponsiveMenu,
    CookieMessage
  },
  beforeCreate() {
    const ie = process.server
      ? 'Dont!'
      : getInternetExplorerVersion(navigator.userAgent)

    if (ie <= 11 && this.$route.name !== 'not-supported') {
      this.$router.push({
        path: '/not-supported'
      })
    }
  }
}
</script>
