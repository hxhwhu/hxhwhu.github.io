import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; // 全局事件总线
  }
}).$mount('#app')
