import Vue from 'vue'
import Vuex from 'vuex'

import general from './general'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    categoryList: {},
    categoryList2: [],
    activeList: [],
    activeList2: [],
    currentItem2: {}
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.categoryList = payload
      // state.categoryList = Object.assign(state.categoryList, payload)
    },
    setPaymentsListData2 (state, payload) {
      console.log('aa', payload)
      state.categoryList2 = payload
    },
    setActiveList (state, data) {
      state.activeList = data
    },
    setActiveList2 (state, data) {
      state.activeList2 = data
    },
    addDataToList (state, data) {
      const lastElement = Object.keys(state.categoryList)[Object.keys(state.categoryList).length - 1] // получение последнего ключа из нашего объекта
      state.categoryList[lastElement].push(data)
    },
    setCurrentItem2 (state, item) {
      console.log(item)
      Vue.set(state, 'currentItem2', item)
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
    },
    removeItem2 ({ commit, state }, item) {
      const list = state.categoryList2.filter(el => el.id !== item.id)
      commit('setActiveList2', list.slice(0, 5))
      commit('setPaymentsListData2', list)
    },
    editList2 ({ commit, state }, item) {
      const list = state.categoryList2.filter(el => el.id !== item.id)
      commit('setActiveList2', list.slice(0, 5))
      commit('setPaymentsListData2', list)
    },
    addDataToList2 ({ commit, state }, item) {
      const list = state.categoryList2
      list.push(item)
      commit('setActiveList2', list.slice(0, 5))
      commit('setPaymentsListData2', list)
    }
  },
  modules: {
    general
  }
})
