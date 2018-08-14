// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
import Axios from 'axios'
import store from './vuex/store'
import Vuex from 'vuex'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(VueRouter)
Vue.use(Vuex)
//Vue.use(VueResource)
Vue.use(iView)

Vue.config.productionTip = false



const router = new VueRouter({
    routes
})
//Vue.http.options.emulateJSON = true //让浏览器不发送OPTIONS预请求

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
