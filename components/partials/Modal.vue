<template>
  <div :class="closing ? 'closing' : ''" class="modal">
    <div id="overlay" @click="closeModal" />
    <div id="modal" class="content container" @keydown.esc="closeModal">
      <nuxt-link :to="toParent" class="icon-times" />
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/css/_bootstrap_functions.scss';

.modal {
  position: fixed;
  z-index: 100;
  overflow: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  max-width: 100vw;
  padding: 0;
}

.content {
  background: white;
  box-shadow: 0 0px 90px -30px var(--primary-shadow);
  padding: 2rem;
  margin-top: -100vh;
  transition: transform 1s !important;
  color: var(--body-color);
  position: relative;
  margin-left: auto;
  margin-right: auto;

  @include media-breakpoint-up(sm) {
    margin-top: -95vh;
    margin-bottom: 5vh;
  }
  @include media-breakpoint-up(l) {
    margin-top: -90vh;
    margin-bottom: 10vh;
  }
}

#overlay {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.icon-times {
  position: absolute;
  top: 15px;
  right: 10px;
  float: right;
  padding: 0 10px 5px;
  font-size: 1.3rem;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}

.closing {
  pointer-events: none;
  opacity: 0;
  transition: transform 1s, opacity 1s !important;

  .content {
    transition: transform 1s, opacity 1s !important;
  }
}

p {
  max-width: 100%;
}
</style>

<style>
body.modal-active {
  overflow: hidden;
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      moving: false,
      closing: false,
      askBeforeClose: false,
    }
  },
  computed: {
    toParent(): any {
      const hirarchy = this.$nuxt.$route.path.split('/')
      const offset = hirarchy[hirarchy.length - 1] === '' ? 3 : 2
      const parent = hirarchy[hirarchy.length - offset]
      return '/' + parent
    },
  },
  mounted() {
    const body = document.querySelector('body')
    if (body) {
      body.classList.add('modal-active')
    }
  },
  destroyed() {
    this.removeModalActive()
  },
  methods: {
    removeModalActive(): void {
      const body = document.querySelector('body')
      if (body) {
        body.classList.remove('modal-active')
      }
    },
    closeModal(): void {
      if (
        this.askBeforeClose &&
        !confirm(
          'Ihre Änderungen gehen verloren wenn Sie diese Seite verlassen.'
        )
      ) {
        return
      }
      this.removeModalActive()
      this.$nuxt.$router.push(this.toParent)
    },
    preventClose(): void {
      this.askBeforeClose = true
    },
  },
})
</script>
