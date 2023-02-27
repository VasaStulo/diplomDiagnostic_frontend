import axios from 'axios';

class Api{
        constructor(baseURL){
            this.axios = axios.create({
                baseURL,
            })
        }

        async get(url, params) {
            try {
                const res = await this.axios.get(url, {params});
                return res;
            } catch (e) {
                console.log('e', e);
                throw e;
            }
        }

        async post(url, body) {
            try {
                const res = await this.axios.post(url, body);
                return res;
            } catch (e) {
                console.log('e', e);
                throw e;
            }
        }
}

export default new Api('https://jsonplaceholder.typicode.com')
