<template>
  <div class="custom-control custom-switch">
    <input
      :id="namespace + index"
      @change="toggleAll"
      :indeterminate="indeterminate"
      v-model="childs ? allSelected : selected"
      :disabled="main.disabled"
      :checked="main.checked"
      :value="index"
      type="checkbox"
      class="custom-control-input"
    />
    <label :for="namespace + index" class="custom-control-label">
      {{ $store.state.cookies.collapsed ? main.text : main.long_name }}
    </label>

    <p v-if="description" class="description">
      {{ description }}
    </p>

    <ul class="list-unstyled">
      <li
        v-for="(child, childIndex) in childs"
        :key="childIndex"
        class="custom-control custom-switch child"
      >
        <input
          v-model="selected"
          :id="namespace + childIndex"
          :value="childIndex"
          :disabled="child.disabled"
          :checked="child.checked"
          type="checkbox"
          class="custom-control-input"
        />
        <label :for="namespace + childIndex" class="custom-control-label">
          {{ child.text }}
        </label>
        <p v-if="child.description" class="description">
          {{ child.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.custom-control-input[indeterminate] ~ .custom-control-label {
  &::after {
    -webkit-transform: translateX(0.5rem);
    transform: translateX(0.5rem);
    opacity: 0.5;
  }
}

label {
  cursor: pointer;

  &:hover {
    &:before {
      border-color: var(--primary);
    }
  }
}

@media (max-width: 380px) {
  li {
    margin-left: -1em;
  }
}

.custom-control:not(.child) {
  border-bottom: 1px solid #fff;
  padding-top: 1em;

  & > label {
    font-weight: 600;
    font-size: 1.2em;
    line-height: 1.4;
  }

  &:last-child {
    border-bottom: 0 none;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'

const selected: Array<String | null> = []

export default Vue.extend({
  props: {
    main: {
      type: Object,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    index: {
      type: String,
      required: true
    },
    namespace: {
      type: String,
      default: ''
    },
    childs: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      // childValues as Array
      childValues: this.childs ? Object.keys(this.childs) : [''],
      selected,
      allSelected: this.main.checked,
      indeterminate: false
    }
  },
  watch: {
    selected(newVal, oldVal) {
      const emitAction =
        newVal.length > oldVal.length ? 'newSelection' : 'removeItem'
      const value =
        emitAction === 'newSelection'
          ? newVal.filter((x: String) => !oldVal.includes(x))
          : oldVal.filter((x: String) => !newVal.includes(x))
      this.$emit(emitAction, value)

      // Handle changes in individual checkboxes
      if (newVal.length === 0) {
        this.indeterminate = false
        this.allSelected = false
      } else if (newVal.length === this.childValues.length) {
        this.indeterminate = false
        this.allSelected = true
      } else {
        this.indeterminate = true
        this.allSelected = false
      }
    }
  },
  mounted() {
    // Prefill Selected Items
    const array: Array<String | null> = []
    if (this.childs) {
      Object.keys(this.childs).forEach((element: any) => {
        if (
          this.$store.state.cookies.enabled.includes(element) ||
          (this.childs[element].checked && !this.$store.state.cookies.saved)
        ) {
          array.push(element)
        }
      })
    } else if (
      this.$store.state.cookies.enabled.includes(this.index) ||
      (this.main.checked && !this.$store.state.cookies.saved)
    ) {
      array.push(this.index)
    }
    this.selected = array
  },

  methods: {
    toggleAll(checked: any) {
      const value = checked.target ? checked.target.checked : checked
      if (this.childs) {
        this.selected = value ? this.childValues : []
      } else if (typeof checked === 'boolean' && !this.main.disabled) {
        this.selected = value ? [this.index] : []
      } else {
        return null
      }
    }
  }
})
</script>
