import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import user from './user';
import diagnostic from './diagnostic';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        user,
        diagnostic
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
        CHANGE_AUTH(state, auth){
            state.isAuth = auth;
        }
    },
    actions: {},
});