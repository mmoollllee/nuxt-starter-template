export const state = () => ({
  messageShown: false,
  collapsed: true,
  saved: false,
  enabled: []
})

export const mutations = {
  saveSelection(state, selection) {
    state.enabled = selection
    state.saved = true
  },
  closeMessage(state) {
    state.messageShown = true
  },
  openMessage(state) {
    state.messageShown = false
    state.collapsed = false
  },
  collapse(state, value) {
    state.collapsed = !state.collapsed
  }
}
