export default{
    //field - название поля в стейте, value - значение
    CHANGE_VALUE_BY_FIELD(state,{field,value}){
        state[field]=value;
    },

    SET_ANSWER_VALUE(state, value){
        state.answers[state.currentStep] = value;
        state.currentStep++;
    },

    CLEAR_STATE(state){
        state.typeOfDiagnostic = '';
        state.currentStep = 0;
        state.summaryStep = 0;
        state.questions = [];
        state.answers = [];
    }
}
