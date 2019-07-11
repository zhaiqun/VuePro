import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'

import { Header, Swipe, SwipeItem } from 'mint-ui'

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import router from './router.js'

Vue.use(VueRouter);
Vue.use(VueAxios, axios)
Vue.component(Header.name, Header);
let vm = new Vue({
    el: '#app',
    router,
    render: c => c(app),

})