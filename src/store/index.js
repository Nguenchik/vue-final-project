import Vue from 'vue'
import Vuex from 'vuex'

import general from './general'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    categoryList: {},
    categoryList2: {},
    activeList: [],
    activeList2: [],
    testList: ''
  },
  mutations: {
    setNameOfMutation (state, data) {
      state.testList = data
    },
    setPaymentsListData (state, payload) {
      state.categoryList = payload
      // state.categoryList = Object.assign(state.categoryList, payload)
    },
    setPaymentsListData2 (state, payload) {
      state.categoryList2 = payload
    },
    setActiveList (state, data) {
      state.activeList = data
    },
    setActiveList2 (state, data) {
      state.activeList2 = data
    }
  },
  actions: {
    fetchData ({ commit }, page) {
      fetch('https://raw.githubusercontent.com/Nguenchik/vue-final-project/lesson4-hw/src/server/server.json')
        .then(res => res.json())
        .then(response => {
          const result = [].concat(...Object.values(response))
          commit('setPaymentsListData', response)
          commit('setPaymentsListData2', result)
          commit('setActiveList2', result.slice(0, 5))
          if (page === 1) commit('setActiveList', response.page1)
        })
    }
  },
  modules: {
    general
  }
})
