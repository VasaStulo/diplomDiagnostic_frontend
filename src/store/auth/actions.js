import api from "@/utils/api";
import router from "@/router";
import jwtDecode from "jwt-decode";


export default {
    //state commit контексты приложения
    //dispatch -для вызова action
    //можно было писать store.state, но диструктуризация
    async toLogin({state, commit, dispatch}){
        try{
            const {email, password} = state.form;
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
            dispatch('user/getResults',{}, { root: true })
            // перенаправляем на страницу профиля
            await router.push('/profile')
        }
        catch (e){
            console.log(e)
        }


    }
}