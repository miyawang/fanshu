// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import App from './App'
import router from './router'
import store from './store'
import api from './api'


Vue.config.productionTip = false

//开启调试模式
localStorage.setItem('debug','leancloud*')

Vue.mixin({
  beforeCreate() {
    if (!this.$api) {
      this.$api = api;
    }
  }
})

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>'
  render: h => h(App),
})
