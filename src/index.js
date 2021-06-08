import Vue from 'vue'
import "./index.less"
import VueRouter from 'vue-router'

const Home = {
    template:'<h1>Home</h1>'
}
const Products = {
    template:'<h1>Products</h1>'
}
const About = {
    template:'<h1>About</h1>'
}


const router = new VueRouter({
    routes:[
        {path:"/",component:Home},
        {path:"/products",component:Products},
        {path:"/about",component:About}
    ]
})
Vue.use(VueRouter)
new Vue({
    el:'#app',
    router,
})
