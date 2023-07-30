/*
=========================================================
* Vuetify Material Dashboard 2 PRO - v3.0.0
=========================================================

* Product Page:  https://www.creative-tim.com/product/vuetify-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
// import DashboardPlugin from "./plugins/dashboard-plugin";
import axios from 'axios'
import BASE_URL from './config.js';
// import api from './util/api';
import GlobalValue from './global/GlobalVariable'
import GlobalFunction from './global/GlobalFunction'
import VueSweetalert2 from "vue-sweetalert2";
import lodash from 'lodash';

Vue.prototype.$axios = axios
Vue.prototype._ = lodash
Vue.prototype.$BASE_URL = BASE_URL
Vue.prototype.GLOBALVAL = GlobalValue
Vue.prototype.GLOBALFNC = GlobalFunction
Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//     //authenticationState는 유저가 로그인이 되어있는지 아닌지 값을 가져와 판별해준다.
//     let isLogin = store.getters['sessionStore/GET_ISLOGIN_INFO'];
//     let authMenu = store.getters['sessionStore/GET_AUTHMENU_INFO'];
//     //const { authorization } = to.meta;
//     //authorization에서는 라우터에서 메타 속성을 정의해준 값이 담겨진다.
//     // undefined, [], ["admin"], ["client"]가 올 수 있다.
//     // const { authorization } = to.meta;
//     if (to.name == 'Login') {
//         next();
//     } else {
//         if (!isLogin) {
//             // 로그인이 되어있지 않으면 로그인 페이지로 보낸다.
//             return next({ path: "/login" });
//         } else {
//             if (to.name == "내정보" || to.name == "비밀번호 변경" || to.name == "Main" || to.name == "Error" || to.name == "Init") {
//                 next();
//             } else {
//                 if (authMenu.includes(to.name)) {
//                     next();
//                 } else {
//                     return next({ path: "/error" });
//                 }
//             }
//         }
//     }
//     // if (authorization) {
//     // if (!isLogin) {
//     //   // 로그인이 되어있지 않으면 로그인 페이지로 보낸다.
//     //   return next({ path: "/login" });
//     // }

//     //   if (
//     //     authorization.length &&
//     //     !authorization.includes(authenticationState?.role)
//     //   ) {
//     //     // 권한이 없는 유저는 not-found 페이지로 보낸다.
//     //     return next({ path: "/not-found" });
//     //   }
//     //   // authorization가 빈 객체인 라우터들은 로그인만 되어있으면 다 접근할 수 있기 때문에
//     //   // 맨 밑의 next를 통해서 그대로 통과된다.
//     // }
// });

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://v1.icall.co.kr:8080';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = 'http://v1.icall.co.kr:8080';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.default.timeout = 5 * 1000;
// Photoswipe Gallery
import Photoswipe from "vue-pswipe";
Vue.use(Photoswipe);
// plugin setup
// Vue.use(DashboardPlugin);
Vue.use(VueSweetalert2);

// process.on("uncaughtException", function (err) {
//     console.error("uncaughtException (Node is alive)", err);
// });

new Vue({
  vuetify,
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
