import api from "@/utils/api";

export default {
    async setQuestions(
        { commit }, typeOfDiagnostic){
        commit('CLEAR_STATE');
        commit('CHANGE_VALUE_BY_FIELD', {
            field: 'typeOfDiagnostic',
            value: typeOfDiagnostic,
        });
        try {
            const {data, status} = await api.get('diagnostic/get_questions', {params: {diagnostic_type: typeOfDiagnostic}});
            if (status !== 200 ){
                throw new Error("Ошибка при получении вопросов!")
            }

            commit('CHANGE_VALUE_BY_FIELD', {
                field: 'questions',
                value: data?.data?.questions || []
            });
            commit('CHANGE_VALUE_BY_FIELD', {
                field: 'summaryStep',
                value: data?.data?.questions.length || 0
            })
        }
        catch (e){
            console.log(e)
        }
    },

    async sendAnswers(
        { state, commit }){
        try{
            const {typeOfDiagnostic, answers} = state;
            const {status} = await api.post('diagnostic/results',
                 {
                     diagnostic_type: typeOfDiagnostic,
                     answers,
                 });
            if (status !== 200){
                throw new Error("Ошибка при получении вопросов!")
            }
            commit('CLEAR_STATE');
        }
        catch (e){
            console.log(e)
        }
    }
}