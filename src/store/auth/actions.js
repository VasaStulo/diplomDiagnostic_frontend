// import api from "@/utils/api";

export default {
    async toLogin(){
        // const {email, password} = state.form;
        // const {data} = await api.post('user/login', {email, password});
        const data = {access_token: '123', refresh_token: '321', refreshIn: 3000};
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
    }
}