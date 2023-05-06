import api from "@/utils/api";
import router from "@/router";
import jwtDecode from "jwt-decode";


export default {
    //state commit контексты приложения
    //dispatch -для вызова action
    //можно было писать store.state, но диструктуризация
    async toLogin({state, commit}){
        try{
            const {email, password} = state.loginForm;
            //деструктуризация
            const {data, status} = await api.post('user/login', {email, password});
            if (!data?.data?.access || status !== 201 ){
                throw new Error("Ошибка при логине!")
            }
            commit('CHANGE_AUTH', null, { root: true })
            localStorage.setItem('access_token', data?.data?.access);
            localStorage.setItem('refresh_token', data?.data?.refresh);
            const a = jwtDecode(data?.data?.access);
            //из ауфа вызываю мутацию в модуль юзера, root true позволяют идти из корня стора
            // commit позволит нам вызвать метод commit внутри наших действий
            //{ root: true } НУЖНА ПРИ ОБРАЩЕНИИ К ДРУГОМУ МОДУЛЮ
            commit('user/CHANGE_VALUE_BY_FIELD', {field: 'user', value: a.user_info}, { root: true })
            commit('CLEAR_STATE');
            // перенаправляем на страницу профиля
            await router.push('/profile')
        }
        catch (e){
            console.log(e)
        }
    },

    async toRegister({state, commit}){
        const {name, surname, patronymic} = state.registrationForm;
        const body = {
            name: `${surname} ${name} ${patronymic}`,
            email: state.registrationForm.email,
            password: state.registrationForm.password,
            category: 'Первая',
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
        commit('CHANGE_AUTH', null, { root: true })
        localStorage.setItem('access_token', data?.data?.access);
        localStorage.setItem('refresh_token', data?.data?.refresh);
        const a = jwtDecode(data?.data?.access);
        commit('user/CHANGE_VALUE_BY_FIELD', {field: 'user', value: a.user_info}, { root: true })
        commit('CLEAR_STATE');
        await router.push('/profile')
    },

    async logout({commit}){
        await router.push('/');
        // чистим local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        commit('CHANGE_AUTH', null, { root: true })
    },

    // метод для обновления сессии
    async refreshSession({commit }, refreshFromStorage) {
        const {data} = await api.post('', {refresh: refreshFromStorage});
        commit('CHANGE_AUTH', null, { root: true })
        localStorage.setItem('access_token', data?.data?.access);
        localStorage.setItem('refresh_token', data?.data?.refresh);
        const a = jwtDecode(data?.data?.access);
        commit('user/CHANGE_VALUE_BY_FIELD', {field: 'user', value: a.user_info}, { root: true })
        await router.push('/profile')
    }
}