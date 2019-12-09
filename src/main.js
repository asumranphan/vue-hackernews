import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ProgressBar from './components/ProgressBar.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount()
document.getElementById('app').appendChild(bar.$el)
