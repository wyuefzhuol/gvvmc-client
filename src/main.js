import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'
import ElementUI from 'element-ui'
import 'leaflet/dist/leaflet.css'
import 'element-ui/lib/theme-chalk/index.css'

const root = document.createElement('div')
document.body.appendChild(root)
Vue.config.productionTip = false
Vue.prototype.$utils = utils
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount(root)
