<template>
  <li>
    <a
      v-if="isExternal"
      :href="href"
      :title="text"
      v-bind="dataAttributes"
      :target="target"
      :rel="rel"
      ><span v-html="content" class="my-auto"></span
    ></a>

    <nuxt-link v-else :to="href" v-bind="dataAttributes"
      ><span v-html="content" class="my-auto"></span
    ></nuxt-link>
  </li>
</template>

<style lang="scss" scoped>
li {
  padding: 0;

  a,
  nuxt-link {
    padding: 1rem;
    font-family: var(--headings-font-family);
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-flex;

    &.nuxt-link-active:not([href='/']),
    &.nuxt-link-exact-active,
    &:hover {
      background: var(--primary);
      color: #fff;
    }

    span {
      display: block;
    }
  }

  .sub-menu {
    font-size: 80%;
    li {
      margin-top: 0;
    }
  }
}

.list-inline-item {
  font-size: 150%;
  margin-right: 0;
  &:not(:last-child) {
    a,
    nuxt-link {
      padding: 1rem 1.3rem;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    href: {
      type: String,
      default: '#'
    },
    text: {
      type: String,
      default: 'Link'
    },
    icon: {
      type: String,
      default: ''
    },
    iconLeft: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: null
    }
  },

  computed: {
    isExternal(): Boolean {
      return RegExp('^http(s|)://').test(this.href)
    },
    content(): string {
      if (this.icon) {
        return `<i class="icon-${this.icon}"></i>`
      } else {
        return this.text
      }
    },
    dataAttributes(): Object {
      const dataAttributes: any = {}
      if (this.iconLeft) dataAttributes['data-icon-left'] = this.iconLeft
      if (this.iconRight) dataAttributes['data-icon-right'] = this.iconRight
      return dataAttributes
    },
    rel(): string | null {
      if (this.target === '_blank') {
        return 'noopener'
      } else {
        return null
      }
    }
  }
})
</script>
