import Vue from 'vue'
import "./index.less"
import VueRouter from 'vue-router'
import Home from "./home";
import Product from "./product";
import About from "./about";

const router = new VueRouter({
    // mode:'history',
    routes:[
        {path:"/",component:Home},
        {path:"/product",component:Product},
        {path:"/about",component:About}
    ]
})
Vue.use(VueRouter)
new Vue({
    el:'#app',
    router,
})
