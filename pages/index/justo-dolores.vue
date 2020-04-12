<template>
  <Modal>
    <h3>
      Justo &amp;
      <span class="white">Dolores</span>
    </h3>
    <h4>The quick brown fox jumps over something.</h4>
    <h5>Is there a other placeholder sentence?</h5>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    </p>
  </Modal>
</template>

<script lang="ts">
import Modal from '~/components/partials/Modal.vue'

export default {
  components: {
    Modal
  },
  head() {
    return {
      title: 'Justo & Dolores'
    }
  },
  scrollToTop: false
}
</script>
