import Vue from 'vue/dist/vue.esm.js'
import Router from './router/router'
import Header from './components/header.vue'
import axios from 'axios'

Vue.prototype.$axios = axios

var app = new Vue({
  router: Router,
  el: '#header',
  components: {
    'navbar': Header,
  }
});
