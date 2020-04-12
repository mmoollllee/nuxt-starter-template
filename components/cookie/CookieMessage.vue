<template>
  <aside
    v-show="messageVisibile"
    :class="[
      $store.state.cookies.collapsed ? 'is-collapsed' : '',
      windowTop >= 50 ? ' hide' : ''
    ]"
    class="cookie-message text-center"
  >
    <div class="message row bg-white">
      <header class="py-2 col-12">
        <h3>Cookie Options</h3>
        <p>
          This website uses cookies and external services.
          <nuxt-link to="/privacy">read more</nuxt-link>
        </p>
      </header>
      <div class="switches col-12 justify-content-center text-left">
        <CheckboxGroup
          ref="checkboxes"
          v-for="(cookieGroup, index) in cookieGroups"
          :key="index"
          :main="cookieGroup"
          v-model="selected"
          :description="cookieGroup.description"
          :childs="cookieGroup.cookies"
          :index="index"
          @newSelection="newSelection"
          @removeItem="removeItem"
          namespace="cookie"
          class="col-auto"
        />
      </div>
      <div class="control col-12">
        <button
          @click="collapse"
          :data-icon-right="$store.state.cookies.collapsed ? 'n' : 'm'"
          class="button secondary"
        >
          {{ $store.state.cookies.collapsed ? 'Options' : 'Close' }}
        </button>
        <button @click="close" class="button" data-icon-right="f">
          Allow
        </button>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.cookie-message {
  max-height: 100vh;
  overflow: auto;
  position: fixed;
  z-index: 999;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 0 12px -5px var(--primary-shadow);

  &,
  * {
    transition: all 0.6s !important;
  }

  &.hide.is-collapsed {
    transform: translateX(calc(100% + 2rem));
  }

  @media (min-width: 480px) {
    right: 1rem;
    max-width: 600px;
    bottom: 1rem;
    width: calc(100% - 2rem);
    max-height: calc(100vh - 2rem);

    &.is-collapsed {
      transform: none;
      max-width: 480px;
    }
  }

  .message {
    padding: 1em 0.2em 0.75em;
    font-size: 0.9em;
    border-radius: 5px;
    margin: 0;

    h3 {
      font-size: 1.1em;
      font-weight: 600;
      margin: 0;
    }

    p,
    .switches {
      margin-bottom: 0.5em;
    }

    a {
      white-space: nowrap;
    }

    .switches {
      padding-left: 15px;
      background: var(--primary-gray-lighter);
    }
  }

  &.is-collapsed {
    .message {
      header {
        padding: 0 !important;
      }
      h3 {
        display: none;
      }
      .switches {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        background: transparent;
        /deep/ {
          .description {
            display: none;
          }
          .custom-control {
            padding-top: 0;
            label {
              font-weight: inherit;
              font-size: inherit;
              line-height: 1.68;
            }
            ul {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
// Component for the Checkbox Group logic that emmits it's state to (current) main component
import CheckboxGroup from './CheckboxGroup.vue'

// Data from config. This will be configured in nuxt.config.js as soon as the module is ready
import cookieOptions from '~/config/cookieMessage.json'
const hideOnScroll = true

export default Vue.extend({
  components: {
    CheckboxGroup
  },
  data() {
    return {
      cookieGroups: cookieOptions.cookieGroups,
      hideOnScroll,
      selected: this.$store.state.cookies.enabled,
      windowTop: 0
    }
  },

  computed: {
    messageVisibile(): Boolean {
      // nuxt-vuex-localstorage is setup
      // && this.close() was NOT called before
      return (
        this.$store.state.cookies.status &&
        !this.$store.state.cookies.messageShown
      )
    },
    ...mapState(['cookies'])
  },
  watch: {
    selected(newVal, oldVal) {
      // Save selection as soon as it changes.
      this.$store.commit('cookies/saveSelection', newVal)
    }
  },

  mounted() {
    if (this.hideOnScroll) {
      window.addEventListener('scroll', this.onScroll)
    }
  },
  beforeDestroy() {
    if (this.hideOnScroll) {
      window.removeEventListener('scroll', this.onScroll)
    }
  },
  methods: {
    onScroll(e: any) {
      this.windowTop =
        window.scrollY /* or: e.target.documentElement.scrollTop */
    },
    collapse(): any {
      // toggle collapse state true/false
      this.$store.commit('cookies/collapse')
    },
    close(): any {
      // Close the Message and save that information in store
      this.$store.commit('cookies/closeMessage')
    },
    newSelection(newVal: Array<String>): void {
      // Called from Child Component through "emit": Create a new Set from the incomming newSelection
      this.selected = [...new Set([...this.selected, ...newVal])]
    },
    removeItem(newVal: Array<String>): void {
      // Called from Child Component through "emit": Remove each item from selection
      newVal.forEach((x) => {
        const newSelection = [...this.selected]
        const index = newSelection.indexOf(x)
        newSelection.splice(index, 1)
        this.selected = newSelection
      })
    },
    toggleAll(): void {
      // get all Refs to the Childs
      const checkboxes: any = this.$refs.checkboxes
      // ToggleGet toggle direction
      const toggle = this.selected.length <= checkboxes.length / 2
      for (const x of checkboxes) {
        // tell each checkbox to toggleAll
        x.toggleAll(toggle)
      }
    }
  }
})
</script>
