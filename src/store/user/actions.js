import api from "@/utils/api";

export default {
//метод получения результатов пользователя, срабатывает при входе в профиль
    async getResults({commit}){
        try{
            //возвращает промис, а в нем объект
            const {data} = await api.get('diagnostic/results');
            commit('CHANGE_VALUE_RESULTS',{standard: data.data.standard,
                competence: data.data.competence,
                dppsh:data.data.dppsh} )

        }
        catch (e){
            console.log(e)
        }
    }
}