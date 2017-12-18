import Vue from "vue";

import app from "./components/app.vue";

import routera from "./router.js";

new Vue({
    el:"#app",
    components:{app},//注册组件
    router:routera //注册router
})