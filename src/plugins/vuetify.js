/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@fortawesome/fontawesome-free/css/all.css";

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#49A7CB',
                btncolor: '#2C2228'
            },
        },
    },
    icons: {
        iconfont: "fa",
    },
    treeShake: true,
    defaultAssets: false,
});

Vue.use(Vuetify);

export default new Vuetify({
    rtl: false,
});