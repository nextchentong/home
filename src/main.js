import Vue from 'vue'
import App from './App.vue'
// highlight.js代码高亮插件
import Highlight from '../highlight' // from 路径是highlight.js的路径，纯属自定义
Vue.use(Highlight)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
