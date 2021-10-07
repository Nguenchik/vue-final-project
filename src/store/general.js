const state = {
  page: [],
  formVisible: false
}
const mutations = {
  setFormVisible (state, flag) {
    if (flag !== undefined) {
      state.formVisible = flag
    } else {
      state.formVisible = !state.formVisible
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
