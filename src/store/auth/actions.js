import api from "@/utils/api";
import router from "@/router";
import jwtDecode from "jwt-decode";


export default {
    //state commit контексты приложения
    async toLogin({state, commit}){
        try{
            const {email, password} = state.form;
            //деструктуризация
            const {data, status} = await api.post('user/login', {email, password});
            if (!data?.data?.access || status !== 200 ){
                throw new Error("Ошибка при логине!")
            }
            commit('CHANGE_AUTH', null, { root: true })
            localStorage.setItem('access_token', data?.data?.access);
            localStorage.setItem('refresh_token', data?.data?.refresh);
            const a = jwtDecode(data?.data?.access);
            //из ауфа вызываю мутацию в модуль юзера, root true позволяют идти из корня стора
            // commit позволит нам вызвать метод commit внутри наших действий
            commit('user/CHANGE_VALUE_BY_FIELD', {field: 'user', value: a.user_info}, { root: true })
            // перенаправляем на страницу профиля
            await router.push('/profile')
        }
        catch (e){
            console.log(e)
        }


    }
}