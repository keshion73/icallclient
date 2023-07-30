import Vue from "vue";
import Router from 'vue-router'
import Main from '@/router/modules/main.js'
import Login from '@/router/modules/login.js'
import User from '@/router/modules/user.js'
import Alliance from '@/router/modules/alliance.js'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...Login,
    ...Main,
    ...User,
    ...Alliance,
  ]
})
