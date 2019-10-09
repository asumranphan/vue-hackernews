import Vue from 'vue'
import Vuex from 'vuex'
import * as api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeType: null,
    itemsPerPage: 12,
    items: {},
    lists: {
      top: [],
      new: [],
      show: [],
      ask: [],
      job: []
    }
  },

  mutations: {
    SET_ACTIVE_TYPE: (state, { type }) => {
      state.activeType = type
    },

    SET_LIST: (state, { type, ids }) => {
      state.lists[type] = ids
    }
  },

  actions: {
    FETCH_LIST_DATA: ({ commit }, { type }) => {
      commit('SET_ACTIVE_TYPE', { type })

      return api.fetchIdsByType(type)
        .then(ids => commit('SET_LIST', { type, ids }))
    }
  }
})
