import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FirstPlugin from './plugins/my-plugin'

Vue.use(FirstPlugin, { someOption: true })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
