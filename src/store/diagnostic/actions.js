import api from "@/utils/api";

export default {
    async setQuestions(
        { commit, dispatch, state }, typeOfDiagnostic){
        commit('CLEAR_STATE');
        commit('CHANGE_VALUE_BY_FIELD', {
            field: 'typeOfDiagnostic',
            value: typeOfDiagnostic,
        });
        try {
            const questions = typeOfDiagnostic === 'standard' ? state.standardQuestions : state.dppshQuestions;

            // если вопросов в state нет - получаем данные с бэкенда
            if(!questions.length){
                dispatch('setAllQuestions');
            }

            commit('CHANGE_VALUE_BY_FIELD', {
                field: 'questions',
                value: questions,
            });
            commit('CHANGE_VALUE_BY_FIELD', {
                field: 'summaryStep',
                value: state.questions.length,
            })
        }
        catch (e){
            console.log(e)
        }
    },

    async setAllQuestions({commit}) {
        const getQuestionsByType = async (typeOfDiagnostic) => {
            const {
                data,
                status
            } = await api.get('diagnostic/get_questions', {params: {diagnostic_type: typeOfDiagnostic}});
            if (status !== 200) {
                throw new Error("Ошибка при получении вопросов!")
            }

            return data?.data?.questions || [];
        }
        const standardQuestions = await getQuestionsByType('standard');
        commit('CHANGE_VALUE_BY_FIELD', {
            field: 'standardQuestions',
            value: standardQuestions
        });
        const dppshQuestions = await getQuestionsByType('dppsh');
        commit('CHANGE_VALUE_BY_FIELD', {
            field: 'dppshQuestions',
            value: dppshQuestions
        });
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