import Vue from 'vue'
import Router from 'vue-router'
import ListView from './views/ListView.vue'

Vue.use(Router)

function createListView (type) {
  return {
    name: `stories-${type}-view`,
    render (h) {
      return h(ListView, { props: { type }})
    }
  }
}

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    { path: '/top', 'component': createListView('top') },
    { path: '/new', 'component': createListView('new') },
    { path: '/show', 'component': createListView('show') },
    { path: '/ask', 'component': createListView('ask') },
    { path: '/job', 'component': createListView('job') },
    { path: '/', redirect: '/top' }
  ]
})
