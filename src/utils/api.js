import axios from 'axios';
import checkToken from "@/utils/checkToken";
//чтобы дергать сервер и обращаться к нему, обертка над двумя методами гет и пост, которые я использую в экшенах
class Api{

        constructor(baseURL){
            this.axios = axios.create({
                baseURL,
            })
        }

        async get(url, params) {

            try {

                const res = await this.axios.get(url, {params, headers: {Authorization: checkToken()}});
                return res;
            } catch (e) {
                console.log('e', e);
                throw e;
            }
        }

        async post(url, body) {
            try {
                const res = await this.axios.post(url, body, {headers: {Authorization: 123}});
                return res;
            } catch (e) {
                console.log('e', e);
                throw e;
            }
        }
}

export default new Api('http://localhost:8000')
