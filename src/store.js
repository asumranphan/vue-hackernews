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
    },

    SET_ITEMS: (state, { items }) => {
      items.forEach(item => {
        if (item) {
          Vue.set(state.items, item.id, item)
        }
      })
    }
  },

  actions: {
    FETCH_LIST_DATA: ({ dispatch, commit, getters }, { type, page }) => {
      commit('SET_ACTIVE_TYPE', { type })

      if (getters.activeItems(page).length) {
        return Promise.resolve()
      }

      return api.fetchIdsByType(type)
        .then(ids => commit('SET_LIST', { type, ids }))
        .then(() => dispatch('FETCH_ITEMS', {
          ids: getters.activeIds(page)
        }))
    },

    FETCH_ITEMS: ({ commit }, { ids }) => {
      return api.fetchItems(ids)
        .then(items => commit('SET_ITEMS', { items }))
    }
  },

  getters: {
    activeIds: state => page => {
      const { activeType, itemsPerPage, lists } = state

      if (!activeType) {
        return []
      }

      const start = (page - 1) * itemsPerPage
      const end = page * itemsPerPage

      return lists[activeType].slice(start, end)
    },

    activeItems: (state, getters) => page => {
      return getters.activeIds(page).map(id => state.items[id]).filter(_ => _)
    }
  }
})
