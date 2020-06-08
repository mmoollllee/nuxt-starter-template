<template>
  <div id="app" :class="menuVisible && 'menu-open'">
    <div id="wrapper" v-on="menuVisible ? { click: menuToggle } : {}">
      <slot></slot>
    </div>
    <div id="responsive-menu">
      <nav>
        <ul class="main list-unstyled font-110">
          <MenuItem
            v-for="item in menuMain"
            :key="item.index"
            :href="item.path"
            :text="item.text"
            class="mt-1"
          />
        </ul>
        <ul class="footer list-unstyled">
          <MenuItem
            v-for="item in menuFooter"
            :key="item.index"
            :href="item.path"
            :text="item.text"
            class="mt-1"
          />
        </ul>
        <ul class="list-inline">
          <MenuItem
            v-for="item in menuSocial"
            :key="item.index"
            :href="item.path"
            :text="item.text"
            :icon="item.icon"
            class="list-inline-item mt-1"
          />
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#responsive-menu {
  padding: calc(4 * var(--spacer)) calc(2 * var(--spacer));
  padding-right: 0;
  text-align: right;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 260px;
  min-height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 0;
  opacity: 0;
  background-color: #fff;

  a,
  nuxt-link {
    padding-right: 3rem;
  }
}

#wrapper {
  position: relative;
  z-index: 1;
  background-color: var(--body-bg);
  overflow: hidden;
  transition: all 0.5s;
  min-height: 100vh;
}

.menu-open {
  #responsive-menu {
    opacity: 1;
  }

  #wrapper {
    transform: translateX(-260px);
    opacity: 0.6;
    cursor: pointer;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
// import { mapMutations } from 'vuex'

// Components
import MenuItem from '@/components/lib/MenuItem.vue'

// Data
import menus from '@/config/menus.json'

export default Vue.extend({
  components: {
    MenuItem,
  },
  data() {
    return {
      menuMain: menus.menuMain,
      menuFooter: menus.menuFooter,
      menuSocial: menus.menuSocial,
    }
  },
  computed: {
    menuVisible(): Boolean {
      return this.$store.state.menu.visible[0]
    },
  },
  watch: {
    $route() {
      this.$store.commit('menu/close')
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
