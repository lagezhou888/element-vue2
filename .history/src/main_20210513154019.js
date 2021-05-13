import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

import router from './router'
import store from './store'
import '@/plugins/element.js'

import './style/common.less'

Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
