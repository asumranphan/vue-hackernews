import Vue from 'vue'
import Vuex from 'vuex'

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

  },
  actions: {

  }
})
