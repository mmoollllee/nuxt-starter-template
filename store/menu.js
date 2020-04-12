export const state = () => ({
  visible: {
    0: false
  }
})

export const mutations = {
  toggle(state, menuId) {
    menuId = menuId || 0

    state.visible[menuId] = !state.visible[menuId]
  },
  open(state, menuId) {
    menuId = menuId || 0

    state.visible[menuId] = true
  },
  close(state, menuId) {
    menuId = menuId || 0

    state.visible[menuId] = false
  }
}
