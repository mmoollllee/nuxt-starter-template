<template>
  <header class="bg-white align-items-stretch justify-content-between">
    <nuxt-link to="/" class="logo col-3 col-xs-2 col-s-2 col-sm-2 pl-4 pl-sm-5">
      <ImageSet src="svg/logo.svg" alt="Company GmbH" />
    </nuxt-link>
    <nav class="col-auto d-none d-m-block">
      <ul class="list-unstyled row h-100 m-0">
        <MenuItem
          v-for="item in menuMain"
          :key="item.index"
          :href="item.path"
          :text="item.text"
          class="ms-2"
        />
        <MenuItem
          v-for="item in menuSocial"
          :key="item.index"
          :href="item.path"
          :text="item.text"
          :icon="item.icon"
          target="_blank"
          class="ms-2"
        />
      </ul>
    </nav>
    <button
      :class="menuVisible && 'icon-times'"
      aria-label="Menu"
      class="d-m-none icon-bars sidebar-toggle font-200 pl-3 pr-4 align-self-center"
      @click="menuToggle"
    ></button>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 20;
}
.sidebar-toggle {
  background: none;
  color: #000;
  border: 0 none;
  &:hover,
  .menu-open & {
    background: var(--primary);
    color: #fff;
  }
}
.logo {
  min-width: 100px;
  max-width: 200px;
}

/deep/ nav a {
  height: 100%;
}
</style>

<script lang="ts">
import Vue from 'vue'

// Components
import ImageSet from '@/components/lib/ImageSet.vue'
import MenuItem from '@/components/lib/MenuItem.vue'

// Data
import menus from '@/config/menus.json'

export default Vue.extend({
  components: {
    ImageSet,
    MenuItem,
  },
  data() {
    return {
      menuMain: menus.menuMain,
      menuSocial: menus.menuSocial,
    }
  },
  computed: {
    menuVisible(): Boolean {
      return this.$store.state.menu.visible[0]
    },
  },
  methods: {
    menuToggle(e: Event) {
      e.preventDefault()
      this.$store.commit('menu/toggle')
    },
  },
})
</script>
