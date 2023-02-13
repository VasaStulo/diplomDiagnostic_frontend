import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth
    },

    //изначальные данные
    state: {
        isAuth: false
    },
    //для трансформации данных и получения их из стора
    getters: {
        isAuth(state){
            return state.isAuth;
        }
    },
    //фунц-и, которые напрямую изменяют index
    mutations: {
        CHANGE_AUTH(state){
            state.isAuth = !state.isAuth;
        }
    },
    actions: {},
});