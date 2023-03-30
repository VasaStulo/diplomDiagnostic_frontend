import api from "@/utils/api";
import router from "@/router";

export default {
    async toLogin({state}){
        try{
            const {email, password} = state.form;
            const {data} = await api.post('user/login', {email, password});
            // const data = {access_token: '123', refresh_token: '321', refreshIn: 3000};
            localStorage.setItem('access_token', data?.data?.access);
            localStorage.setItem('refresh_token', data?.data?.refresh);
            // перенаправляем на страницу профиля
            await router.push('/test')
        }
        catch (e){
            console.log(e)
        }


    }
}