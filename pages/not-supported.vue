<template>
  <div class="container mt-5">
    <h1>Your browser is not supported</h1>

    <div class="card">
      <p>
        Your web browser is outdated. Therefore this website cannot be displayed
        reliably. For security reasons, we must therefore ask you to install a
        current browser suitable for your system
      </p>

      <a
        class="button green"
        href="https://browser-update.org/de/update.html"
        data-icon-right="c"
        >Get help on browser-update.org</a
      >
    </div>
  </div>
</template>

<style>
/* Only to IE 11 */
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
}
</style>

<script>
export default {
  head() {
    return {
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }],
    }
  },
}
</script>
