import Vue from 'vue'
import Router from 'vue-router'
import TypeView from './views/TypeView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/:type(top|new|show|ask|job)', 'component': TypeView, props: true }
  ]
})
