import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import Profile from '../components/profile.vue'
import Technology from '../components/technology.vue'
import App from '../components/app.vue'
import Log from '../components/log.vue'
import Contact from '../components/contact.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/profile', component: Profile },
    { path: '/technology', component: Technology },
    { path: '/app', component: App },
    { path: '/log', component: Log },
    { path: '/contact', component: Contact },
  ],
})
