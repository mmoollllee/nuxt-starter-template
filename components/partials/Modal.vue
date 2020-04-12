<template>
  <div :class="closing ? 'closing' : ''" class="modal">
    <div id="overlay" @click="closeModal" />
    <div id="modal" @keydown.esc="closeModal" class="content container">
      <nuxt-link :to="toParent" class="icon-times" />
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0 0px 90px -30px var(--primary-shadow);
  max-height: 95vh;
  overflow: auto;
  padding: 2rem;
  transition: transform 1s !important;
}

#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.icon-times {
  position: sticky;
  top: 0;
  float: right;
  padding: 0 10px 5px;
  font-size: 1.3rem;
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
</style>

<style>
body.modal-active {
  overflow: hidden;
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      bodyAttrs: {
        class: 'modal-active'
      }
    }
  },
  data() {
    return {
      moving: false,
      closing: false,
      escPressed: false
    }
  },
  computed: {
    toParent(): any {
      const hirarchy = this.$nuxt.$route.path.split('/')
      const offset = hirarchy[hirarchy.length - 1] === '' ? 3 : 2
      const parent = hirarchy[hirarchy.length - offset]
      return '/' + parent
    }
  },
  mounted() {
    this.focusModal()
  },
  methods: {
    closeModal(): void {
      this.$nuxt.$router.push(this.toParent)
    },
    focusModal(): void {
      const modal = document.getElementById('modal')
      if (modal) {
        setTimeout(() => modal.focus(), 300)
      }
    }
  }
})
</script>
