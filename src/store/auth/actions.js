import api from "@/utils/api";
import router from "@/router";
import jwtDecode from "jwt-decode";
let timer;

export default {
    //state commit контексты приложения
    //dispatch -для вызова action
    //можно было писать store.state, но диструктуризация
    async toLogin({state, commit, dispatch}){
        try{
            const {email, password} = state.loginForm;
            //деструктуризация
            const {data, status} = await api.post('user/login', {email, password});
            if (!data?.data?.access || status !== 201 ){
                throw new Error("Ошибка при логине!")
            }
            commit('CHANGE_AUTH', true, { root: true })
            localStorage.setItem('access_token', data?.data?.access);
            localStorage.setItem('refresh_token', data?.data?.refresh);
            const a = jwtDecode(data?.data?.access);
            //из ауфа вызываю мутацию в модуль юзера, root true позволяют идти из корня стора
            // commit позволит нам вызвать метод commit внутри наших действий
            //{ root: true } НУЖНА ПРИ ОБРАЩЕНИИ К ДРУГОМУ МОДУЛЮ
            commit('user/CHANGE_VALUE_BY_FIELD', {field: 'user', value: a.user_info}, { root: true })
            commit('CLEAR_STATE');

            timer = setTimeout(()=>dispatch('refreshSession', data?.data?.refresh),
                (data?.data?.refresh_access_in || 6)*1000)
            // перенаправляем на страницу профиля
            await router.push('/results')
        }
        catch (e){
            commit('SET_LOGIN_ERROR', 'Пользователя не существует')
            console.log(e)
        }
    },

    async toRegister({state, commit}){
        const {name, surname, patronymic} = state.registrationForm;
        const body = {
            name: `${surname} ${name} ${patronymic}`,
            email: state.registrationForm.email,
            password: state.registrationForm.password,
            category: state.registrationForm.category,
            teaching_exp: state.registrationForm.experience,
            position: state.registrationForm.post,
            raion: state.registrationForm.district,
            region_rf: state.registrationForm.region,
            school: state.registrationForm.educationalOrganization,
            locality_type: state.registrationForm.typeOfArea,
        }
        const {data, status} = await api.post('user/register', body);
        if (!data?.data?.access || status !== 201 ){
            throw new Error("Ошибка при регистрации!")
        }
        commit('CHANGE_AUTH', true, { root: true })
        localStorage.setItem('access_token', data?.data?.access);
        localStorage.setItem('refresh_token', data?.data?.refresh);
        const a = jwtDecode(data?.data?.access);
        commit('user/CHANGE_VALUE_BY_FIELD', {field: 'user', value: a.user_info}, { root: true })
        commit('CLEAR_STATE');
        await router.push('/results')
    },

    async getRegisterData({commit}){
        const types = [{
            backendField: 'teaching_exp',
            stateField: 'experience',
        }, {
            backendField: 'position',
            stateField: 'post',
        }, {
            backendField: 'category',
            stateField: 'category',
        }, {
            backendField: 'raion',
            stateField: 'district',
        }, {
            backendField: 'region_rf',
            stateField: 'region',
        }, {
            backendField: 'locality_type',
            stateField: 'typeOfArea',
        }];
        for (const type of types) {
            const {data} = await api.get(`user/register/${type.backendField}`);
            commit('SET_DATA_FOR_REGISTRATION', {field: type.stateField, value: data.data})
        }
    },

    async logout({commit}){
        clearTimeout(timer)
        timer = null;
        await api.get('user/logout');
        // чистим local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        commit('CHANGE_AUTH', false, { root: true })
        await router.push('/');
    },

    // метод для обновления сессии
    async refreshSession({ commit, dispatch }, refreshFromStorage) {
        try{
            const {data} = await api.post('user/refresh', {refresh: refreshFromStorage});
            localStorage.setItem('access_token', data?.data?.access);
            localStorage.setItem('refresh_token', data?.data?.refresh);
            const a = jwtDecode(data?.data?.access);
            commit('user/CHANGE_VALUE_BY_FIELD', {field: 'user', value: a.user_info}, { root: true })
            commit('CHANGE_AUTH', true, { root: true })
            timer = setTimeout(()=>dispatch('refreshSession', data?.data?.refresh),
                (data?.data?.refresh_access_in || 6)*1000)
        }catch (e) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            commit('CHANGE_AUTH', false, { root: true });
            await router.push('/login');
        }

    }
}