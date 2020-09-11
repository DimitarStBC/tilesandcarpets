import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../plugins/bootstrap-vue'
import axios from 'axios'




axios.defaults.baseURL = 'https://sanitaryco.herokuapp.com/api'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
