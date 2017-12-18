import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        number:0,
        abc:"nihao"
    },
    mutations:{
        adda:function(state){
            state.number++;
        },
         suba:function(state){
            state.number--
        }
    }
})