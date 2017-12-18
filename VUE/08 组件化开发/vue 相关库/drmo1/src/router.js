import VueRouter from "vue-router";

import Vue from "vue";

import home from "./components/home.vue";

import movies from "./components/movies.vue";

import images from "./components/images.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {path:"/home",component:home},
        {path:"/movies",component:movies},
        {path:"/images",component:images}
    ]
})