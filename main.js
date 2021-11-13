
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
// 路径需根据项目实际情况
import ajax from './ajax'   

Vue.config.productionTip = false

App.mpType = 'app'

// 挂载在 Vue 原型链上（通过 this.$ajax 调用）
Vue.prototype.$ajax = ajax         

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif