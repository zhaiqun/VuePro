import home from './component/tabbar/home.vue'
import VueRouter from "vue-router";
import cart from './component/tabbar/cart.vue'
import search from './component/tabbar/search.vue'
import customer from './component/tabbar/customer.vue'

import newList from './component/home/percentageLayout.vue'

import bootstrap from './component/home/bootstrap.vue'
var router = new VueRouter({

    routes: [{ path: '/home', component: home },
        { path: '/', redirect: '/home' }, {
            path: '/cart',
            component: cart
        }, {
            path: '/search',
            component: search
        }, {
            path: '/customer',
            component: customer
        }, {
            path: '/home/percentageLayout',
            component: newList
        }, {

            path: '/home/bootstrap',
            component: bootstrap
        }
    ],
    linkActiveClass: 'mui-active'

});


export default router