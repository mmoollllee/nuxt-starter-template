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

export default {
  components: {
    Header,
    Footer,
    ResponsiveMenu,
    CookieMessage
  }
}
</script>
