const state = {
  page: [],
  formVisible: false
}

const mutations = {
  setFormVisible (state, flag) {
    flag !== undefined ? state.formVisible = flag : state.formVisible = !state.formVisible
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
